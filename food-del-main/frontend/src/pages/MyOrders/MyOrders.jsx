import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx';
import axios from 'axios';
import { assets } from '../../assets/assets';
import style from '../MyOrders/MyOrders.module.css'

const MyOrders = () => {
    const [data, setData] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(true);
    const {url, token} = useContext(StoreContext);
    
    const fetchOrders = async () => {
        try {
            const response = await axios.post(url+"/api/order/userorders", {}, {headers:{token}});
            if (response.data.success) {
                setData(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    const dismissConfirmation = () => {
        setShowConfirmation(false);
    }

    return (
        <div className={style.myOrders}>
            {showConfirmation && data.length > 0 && data[0].payment && (
                <div className={style.confirmationBanner}>
                    <div className={style.confirmationContent}>
                        <span className={style.checkmark}>✓</span>
                        <div>
                            <h3>✅ Payment Successful!</h3>
                            <p>Your order has been confirmed and will be prepared shortly.</p>
                        </div>
                        <button onClick={dismissConfirmation} className={style.dismissBtn}>✕</button>
                    </div>
                </div>
            )}
            
            <h2>My Orders</h2>
            
            {data.length === 0 ? (
                <div className={style.noOrders}>
                    <p>You haven't placed any orders yet.</p>
                    <p>Go back to the menu and start ordering!</p>
                </div>
            ) : (
                <div className={style.container}>
                    {data.map((order, index) => {
                        return (
                            <div key={index} className={style.myOrdersOrder}>
                                <img src={assets.parcel_icon} alt="Order icon" />
                                <div className={style.orderDetails}>
                                    <p><strong>Items:</strong> {order.items.map((item, idx) => {
                                        if (idx === order.items.length - 1) {
                                            return item.name + " × " + item.quantity
                                        }
                                        else {
                                            return item.name + " × " + item.quantity + ", "
                                        }
                                    })}</p>
                                    <p><strong>Total:</strong> ₹{order.amount}</p>
                                    <p><strong>Order Items:</strong> {order.items.length}</p>
                                    <p className={style.statusWrapper}>
                                        <span className={style.statusIcon}>●</span>
                                        <b className={style.statusText}>{order.status}</b>
                                        {order.payment && <span className={style.paidBadge}>✓ Paid</span>}
                                    </p>
                                </div>
                                <button onClick={fetchOrders} className={style.trackBtn}>Track Order</button>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default MyOrders