import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Razorpay from "razorpay"

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

const placeOrder = async (req,res) => {

    try {
        // Extract userId from token (via auth middleware)
        const userId = req.body.userId || req.user?._id;
        
        if (!userId) {
            return res.json({success: false, message: "User not authenticated"});
        }

        const newOrder = new orderModel({
            userId: userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: false
        })

        await newOrder.save();

        // Clear user's cart
        await userModel.findByIdAndUpdate(userId, {cartData: {}});

        // Create Razorpay order
        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: newOrder._id.toString()
        }

        const order = await razorpay.orders.create(options)

        res.json({
            success: true,
            order,
            key: process.env.RAZORPAY_KEY_ID,
            orderId: newOrder._id
        })

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error creating order"})
    }
}
 // placing user order from frontend
//  const placeOrder = async (req,res) => {

//     // const frontend_url = "https://food-del-frontend-7vmr.onrender.com";
//     const frontend_url = process.env.FRONTEND_URL || `http://localhost:${process.env.VITE_FRONTEND_PORT}`;

//     try {
//         const newOrder = new orderModel({
//             userId:req.body.userId,
//             items:req.body.items,
//             amount:req.body.amount,
//             address:req.body.address
//         })
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
//         const line_items = req.body.items.map((item)=>({
//             price_data:{
//                 currency:"inr",
//                 product_data:{
//                     name:item.name
//                 },
//                 unit_amount:item.price*100
//             },
//             quantity:item.quantity
//         }))


//         line_items.push({
//             price_data:{
//                 currency:"inr",
//                 product_data:{
//                     name:"Delivery Charges"
//                 },
//                 unit_amount:2*100 
//             },
//             quantity:1
//         })


//         const session = await stripe.checkout.sessions.create({
//             line_items:line_items,
//             mode:'payment',
//             success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         })

//         res.json({success:true,session_url:session.url})


//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

const verifyOrder = async (req,res) => {
    const {orderId, razorpayOrderId, paymentId} = req.body;
    try {
        // Fetch payment details from Razorpay API
        const payment = await razorpay.payments.fetch(paymentId);
        
        console.log("Payment details:", {
            paymentStatus: payment.status,
            razorpayOrderId: payment.order_id,
            expectedOrderId: razorpayOrderId
        });
        
        // Verify payment was captured and order ID matches
        if (payment.status === 'captured' && payment.order_id === razorpayOrderId) {
            // Payment verified successfully - update order status
            await orderModel.findByIdAndUpdate(orderId, {payment: true});
            res.json({success: true, message: "Payment verified successfully"});
        } else {
            console.log("Payment status:", payment.status, "Order ID match:", payment.order_id === razorpayOrderId);
            // Payment not captured or order ID mismatch
            await orderModel.findByIdAndDelete(orderId);
            res.json({success: false, message: "Payment not captured by Razorpay"});
        }
    } catch (error) {
        console.log("Verification error:", error);
        // Delete order if verification fails
        await orderModel.findByIdAndDelete(orderId);
        res.json({success: false, message: "Error verifying payment: " + error.message});
    }
}

// Cancel order if payment is cancelled or failed
const cancelOrder = async (req,res) => {
    const {orderId} = req.body;
    try {
        // Check if order exists and payment is not done
        const order = await orderModel.findById(orderId);
        
        if (!order) {
            return res.json({success: false, message: "Order not found"});
        }
        
        if (order.payment === true) {
            return res.json({success: false, message: "Cannot cancel paid order"});
        }
        
        // Restore user's cart items
        const userId = order.userId;
        let cartData = {};
        order.items.forEach(item => {
            cartData[item._id] = (cartData[item._id] || 0) + item.quantity;
        });
        
        await userModel.findByIdAndUpdate(userId, {cartData: cartData});
        
        // Delete the cancelled order
        await orderModel.findByIdAndDelete(orderId);
        
        res.json({success: true, message: "Order cancelled successfully"});
    } catch (error) {
        console.log("Cancel error:", error);
        res.json({success: false, message: "Error cancelling order"});
    }
}

 // user orders for frontend

 const userOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({userId: req.body.userId, payment: true});
        res.json({success: true, data: orders})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
  }
    // Listing orders for admin panel
const listOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
  // api for updating order status
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {placeOrder, verifyOrder, userOrders, listOrders, updateStatus, cancelOrder}
