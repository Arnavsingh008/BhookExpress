import React, { useContext, useEffect, useState } from 'react';
import styles from './PlaceOrder.module.css';
import { StoreContext } from '../../context/StoreContext.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const resetForm = () => {
    setData({
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      phone: '',
    });
    setCartItems({});
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    setIsPaymentProcessing(true);
    
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo['quantity'] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    
    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,
    }
    
    try {
      let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
      
      if (response.data.success){
        const options = {
          key: response.data.key,
          amount: response.data.order.amount,
          currency: "INR",
          name: "BhookExpress",
          description: "Food Order Payment",
          order_id: response.data.order.id,
          handler: async function (paymentResponse){
            try {
              const verifyResponse = await axios.post(
                url+"/api/order/verify",
                {
                  orderId: response.data.orderId,
                  razorpayOrderId: paymentResponse.razorpay_order_id,
                  paymentId: paymentResponse.razorpay_payment_id
                },
                {headers:{token}}
              )
              
              if (verifyResponse.data.success) {
                resetForm();
                alert("✅ Payment Successful! Your order has been placed.");
                navigate('/myorders');
              } else {
                setIsPaymentProcessing(false);
                alert("❌ " + (verifyResponse.data.message || "Payment verification failed"));
              }
            } catch (error) {
              setIsPaymentProcessing(false);
              console.error("Payment verification error:", error);
              alert("❌ Error verifying payment. Please try again.");
            }
          },
          prefill: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            contact: data.phone
          },
          theme: {
            color: "#ff4c24"
          },
          modal: {
            ondismiss: async function() {
              // Delete the order if user cancels payment
              try {
                await axios.post(
                  url+"/api/order/cancel",
                  {orderId: response.data.orderId},
                  {headers:{token}}
                )
              } catch (error) {
                console.error("Error cancelling order:", error);
              }
              setIsPaymentProcessing(false);
              alert("⚠️ Payment cancelled. Your order has been removed.");
            }
          }
        }
        
        const razorpay = new window.Razorpay(options)
        razorpay.open()
      } else {
        alert("❌ Error creating order. Please try again.");
        setIsPaymentProcessing(false);
      }
    } catch (error) {
      console.error("Order error:", error);
      alert("❌ Error placing order. Please try again.");
      setIsPaymentProcessing(false);
    }
  };
  
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token){
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
  },[token])
 
  return (
    <form onSubmit={placeOrder} className={styles.placeOrder}>
      <div className={styles.placeOrderLeft}>
        <p className={styles.title}>Delivery Information </p>

        <div className={styles.multiFields}>
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
            disabled={isPaymentProcessing}
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
            disabled={isPaymentProcessing}
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email Address"
          disabled={isPaymentProcessing}
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
          disabled={isPaymentProcessing}
        />

        <div className={styles.multiFields}>
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
            disabled={isPaymentProcessing}
          />
          <input
            required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
            disabled={isPaymentProcessing}
          />
        </div>
        <div className={styles.multiFields}>
          <input
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
            disabled={isPaymentProcessing}
          />
          <input
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            type="text"
            placeholder="Country"
            disabled={isPaymentProcessing}
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone"
          disabled={isPaymentProcessing}
        />
      </div>

      <div className={styles.placeOrderRight}>
        <div className={styles.cartTotal}>
          <h2>Cart Total</h2>
          <div>
            <div className={styles.cartTotalDetails}>
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <p>Delivery Fee</p>
              <p>
              ₹ {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className={styles.cartTotalDetails}>
              <b>Total</b>
              <b>
                {' '}
                ₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button type="submit" disabled={isPaymentProcessing}>
            {isPaymentProcessing ? 'Processing...' : 'PROCEED TO PAYMENT'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
