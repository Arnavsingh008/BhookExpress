# 🍽️ **BhookExpress – Full-Stack Food Delivery Web App**

> A modern, feature-rich **food delivery platform** built with the **MERN Stack** (MongoDB, Express, React, Node.js). Order delicious meals, track deliveries in real-time, and enjoy secure payments all in one responsive app.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v20+-green.svg)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/cloud/atlas)

🚀 **Live Demo:** [bhook-frontend-dxy0.onrender.com](https://bhook-frontend-dxy0.onrender.com)

---

## 📋 **Table of Contents**

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Usage Guide](#-usage-guide)
- [Payment Integration](#-payment-integration)
- [Troubleshooting](#-troubleshooting)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ **Features**

### 👤 **User Features**

#### 🔍 **Search & Browse**
- 🍔 Browse food items by category (Salads, Rolls, Deserts, etc.)
- 🔎 **Real-time search** with auto-scroll to results
- Smart category filtering with typo handling (e.g., "deserts" → "desserts")
- Merge backend items seamlessly with local assets

#### 🛒 **Shopping Cart**
- Add/remove items with real-time quantity updates
- **Smart Cart Merge**: Local cart syncs with server after login
- Cart persists across sessions
- Cart automatically clears after successful payment
- Restore cart items if payment is cancelled

#### 💳 **Payment & Orders**
- Integrated **Razorpay** payment gateway
- Multiple payment method support (Card, UPI, Wallet, etc.)
- **Secure payment verification** with Razorpay API
- Real-time payment status confirmation
- Order confirmation banner with success message
- Track orders in real-time with status updates

#### 🔐 **Security & Authentication**
- JWT token-based authentication
- Passwords encrypted in backend
- Sensitive data encrypted before API calls
- LocalStorage cart data encryption
- Secure payment verification
- Auto-logout on token expiration

#### 📱 **User Interface**
- **Fully responsive** design (mobile, tablet, desktop)
- Mobile hamburger navigation menu
- Smooth animations and transitions
- User profile dropdown with logout
- Order history in "My Orders" page
- Payment success/failure notifications

#### 🎨 **Home Page Sections**
- **Hero Banner**: Eye-catching call-to-action
- **Explore Menu**: Category selector with smooth interactions
- **About Us**: Company mission, achievements, testimonials
- **Why Choose Us**: 6 key service benefits
- **How It Works**: 4-step ordering process
- **Special Offers**: Promotional deals and discounts
- **Footer**: Quick links and contact information

### 🛠️ **Admin Panel Features**

- ➕ Add new food items with images
- ✏️ Edit existing menu items
- 🗑️ Delete items from menu
- 📦 View all customer orders
- 📊 Update order status (Pending → Processing → Out for Delivery → Delivered)
- 🔍 Track all orders across the platform
- 📈 View order analytics

---

## 🛠️ **Tech Stack**

### **Frontend (User & Admin)**
| Technology | Purpose |
|-----------|---------|
| React.js 18 | UI Framework |
| Vite | Build tool & dev server |
| React Router 7 | Client-side routing |
| Context API | Global state management |
| Axios | HTTP client |
| CSS Modules | Styling with scoped CSS |
| Razorpay | Payment gateway |

### **Backend API**
| Technology | Purpose |
|-----------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| Razorpay SDK | Payment processing |
| Bcryptjs | Password hashing |
| CORS | Cross-origin requests |

### **Deployment & DevOps**
| Service | Purpose |
|---------|---------|
| Render | Backend hosting |
| Vercel/Netlify | Frontend hosting |
| MongoDB Atlas | Cloud database |
| Razorpay | Payment gateway |

---

## 📂 **Project Structure**

```
food-del-main/
│
├── 📁 frontend/                    # React customer app (Vite)
│   ├── src/
│   │   ├── components/             # Reusable React components
│   │   │   ├── Navbar/
│   │   │   ├── Footer/
│   │   │   ├── FoodDisplay/
│   │   │   ├── ExploreMenu/
│   │   │   ├── Hero/
│   │   │   ├── AboutUs/
│   │   │   ├── WhyChooseUs/
│   │   │   ├── HowItWorks/
│   │   │   └── SpecialOffers/
│   │   ├── pages/                  # Page components
│   │   │   ├── Home/
│   │   │   ├── Cart/
│   │   │   ├── PlaceOrder/
│   │   │   ├── MyOrders/
│   │   │   └── Verify/
│   │   ├── context/                # Global state (StoreContext)
│   │   ├── assets/                 # Images, icons, data
│   │   └── index.css               # Global styles
│   ├── .env.example                # Environment variables template
│   ├── vite.config.js              # Vite configuration
│   └── package.json                # Dependencies
│
├── 📁 admin/                       # React admin dashboard (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   └── Sidebar/
│   │   ├── pages/
│   │   │   ├── Add/                # Add food items
│   │   │   ├── List/               # View/edit items
│   │   │   └── Orders/             # Manage orders
│   │   └── assets/
│   ├── .env.example
│   ├── vite.config.js
│   └── package.json
│
├── 📁 Backend/                     # Node.js + Express API
│   ├── config/
│   │   └── db.js                   # MongoDB connection
│   ├── controllers/
│   │   ├── userController.js       # Auth & user endpoints
│   │   ├── foodController.js       # Food items endpoints
│   │   ├── cartController.js       # Cart management
│   │   └── orderController.js      # Orders & payments
│   ├── models/
│   │   ├── userModel.js            # User schema
│   │   ├── foodModel.js            # Food schema
│   │   └── orderModel.js           # Order schema
│   ├── middleware/
│   │   └── auth.js                 # JWT authentication
│   ├── routes/
│   │   ├── userRoute.js
│   │   ├── foodRoute.js
│   │   ├── cartRoute.js
│   │   └── orderRoute.js
│   ├── .env.example                # Environment variables template
│   ├── server.js                   # Entry point
│   └── package.json                # Dependencies
│
├── 📁 uploads/                     # File storage
├── 📄 README.md                    # Project documentation
├── 📄 SETUP.md                     # Detailed setup guide
├── 📄 GITHUB_PUSH_GUIDE.md        # GitHub push instructions
├── 📄 .gitignore                   # Git ignore rules
└── 📄 LICENSE                      # MIT License
```

---

## 🚀 **Getting Started**

### **Prerequisites**

Before you start, ensure you have:
- **Node.js** v20 or higher - [Download](https://nodejs.org)
- **npm** or **yarn** package manager
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud)
- **Git** - [Download](https://git-scm.com)
- **Razorpay Account** - [Sign up](https://razorpay.com)

### **Quick Setup (3 Steps)**

1. **Clone & Install**
   ```bash
   git clone https://github.com/YOUR_USERNAME/food-del-main.git
   cd food-del-main
   
   # Backend
   cd Backend && npm install && cd ..
   
   # Frontend
   cd frontend && npm install && cd ..
   
   # Admin
   cd admin && npm install && cd ..
   ```

2. **Configure Environment**
   ```bash
   # Backend/.env
   cp Backend/.env.example Backend/.env
   # Edit Backend/.env with your credentials
   
   # Frontend/.env
   cp frontend/.env.example frontend/.env
   
   # Admin/.env
   cp admin/.env.example admin/.env
   ```

3. **Run All Services**
   ```bash
   # Terminal 1: Backend
   cd Backend && npm run server
   
   # Terminal 2: Frontend
   cd frontend && npm run dev
   
   # Terminal 3: Admin
   cd admin && npm run dev
   ```

### **Detailed Setup**

For detailed installation instructions, see [SETUP.md](SETUP.md)

---

## 🔧 **Environment Variables**

### **Backend (`Backend/.env`)**
```env
# Database
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/food-del

# Authentication
JWT_SECRET=your_super_secret_key_min_32_characters

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Server
PORT=4000
NODE_ENV=development

# URLs
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

### **Frontend (`frontend/.env`)**
```env
VITE_API_URL=http://localhost:4000
# Production: https://your-backend-url.com
```

### **Admin (`admin/.env`)**
```env
VITE_API_URL=http://localhost:4000
# Production: https://your-backend-url.com
```

---

## 🔌 **API Endpoints**

### **🔐 Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/user/register` | Register new user |
| POST | `/api/user/login` | User login |
| GET | `/api/user/profile` | Get user profile |

### **🍔 Food Items**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/food/list` | Get all food items |
| GET | `/api/food/:id` | Get specific food item |
| POST | `/api/food/add` | Add new item (Admin) |
| POST | `/api/food/remove` | Remove item (Admin) |

### **🛒 Cart Management**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/cart/add` | Add item to cart |
| POST | `/api/cart/remove` | Remove item from cart |
| POST | `/api/cart/get` | Get cart items |

### **📦 Orders**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/order/place` | Create order |
| POST | `/api/order/verify` | Verify Razorpay payment |
| POST | `/api/order/cancel` | Cancel unpaid order |
| GET | `/api/order/userorders` | Get user's paid orders |
| GET | `/api/order/list` | Get all orders (Admin) |
| POST | `/api/order/status` | Update order status (Admin) |

---

## 💳 **Payment Integration**

### **Razorpay Features**

✅ **Multiple Payment Methods**
- Credit/Debit Cards
- UPI
- Digital Wallets
- Netbanking
- BNPL Options

✅ **Payment Security**
- PCI DSS compliant
- 3D Secure authentication
- Encrypted transactions
- Fraud detection

✅ **Smart Payment Handling**
- Real-time payment verification
- Order confirmation on successful payment
- Automatic order deletion on payment failure
- Cart restoration if payment is cancelled
- Clear error messages with retry options

✅ **Payment Status Tracking**
- "✓ Paid" badge on confirmed orders
- Success/failure notifications
- Order confirmation banner with details
- Real-time order status updates

---

## 📱 **Usage Guide**

### **For Customers**

1. **Sign Up/Login**
   - Visit https://bhook-frontend-dxy0.onrender.com (Production) or http://localhost:5173 (Local)
   - Create account or login
   - Cart data automatically syncs

2. **Browse & Search**
   - Explore menu by categories
   - Use search to find specific dishes
   - Results auto-scroll into view

3. **Add to Cart & Checkout**
   - Add items to cart
   - Cart persists across sessions
   - Proceed to checkout
   - Fill delivery details

4. **Payment**
   - Choose payment method
   - Razorpay modal opens
   - Enter payment details
   - Get instant confirmation

5. **Track Order**
   - Go to "My Orders"
   - See order status
   - Track real-time delivery

### **For Admin**

1. **Login to Admin Panel**
   - Visit http://localhost:5174 (Local Development)
   - For production, admin is hosted separately
   - Use admin credentials

2. **Manage Menu**
   - Add new food items with images
   - Edit existing items
   - Delete items from menu

3. **Manage Orders**
   - View all customer orders
   - Update order status
   - Track order analytics

---

## 🐛 **Troubleshooting**

### **Frontend Issues**

| Issue | Solution |
|-------|----------|
| Search not working | Verify backend is running, check VITE_API_URL in .env |
| Cart items lost after login | Clear localStorage, check cart merge logic |
| Mobile menu not opening | Clear browser cache, hard refresh (Ctrl+Shift+R) |
| Payment modal not appearing | Check Razorpay script in index.html, verify keys |
| Form not clearing after payment | Restart frontend server |

### **Payment Issues**

| Issue | Solution |
|-------|----------|
| "Error creating order" | Verify Razorpay keys, check backend logs |
| "Error verifying payment" | Ensure backend can reach Razorpay API, check API keys |
| Order saved but payment failed | Payment properly gets deleted, retry payment |
| Cart not restored on cancellation | Check cart restoration logic in backend |

### **Backend Issues**

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Verify MONGO_URI, ensure MongoDB is running/Atlas accessible |
| Port already in use | Change PORT in .env or kill process using port 4000 |
| JWT token issues | Verify JWT_SECRET is set and consistent |
| Razorpay API error | Check API keys, verify Razorpay account is active |

### **Database Issues**

| Issue | Solution |
|-------|----------|
| Database not initializing | Ensure MongoDB is running, check connection string |
| Data not persisting | Verify MongoDB Atlas network access, check firewall |

---

## 🚀 **Deployment**

### **Deploy Backend (Render)**

1. Push code to GitHub
2. Connect GitHub repo to Render
3. Set environment variables:
   ```
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_secret
   RAZORPAY_KEY_ID=your_key
   RAZORPAY_KEY_SECRET=your_secret
   ```
4. Deploy!

**Deployed URL:** `https://bhook-backend-dqjd.onrender.com`

### **Deploy Frontend (Vercel/Netlify)**

1. Connect GitHub repo
2. Set environment variable:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```
3. Deploy!

**Vercel URL:** `https://your-app.vercel.app`

### **Deploy Admin (Vercel/Netlify)**

Same as frontend with same API URL

---

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Style**
- Use consistent naming conventions
- Add comments for complex logic
- Follow existing code structure
- Test before submitting PR

---

## 📄 **License**

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 📞 **Support & Contact**

- **Email:** contact@bhookexpress.com
- **Phone:** +91-9142111111
- **Issues:** GitHub Issues
- **Documentation:** [SETUP.md](SETUP.md)

---

## 🙏 **Acknowledgments**

- MERN Stack community for excellent tools
- MongoDB for database solution
- Razorpay for payment integration
- React community for amazing library
- All contributors and testers

---

## 📊 **Key Statistics**

- ✅ **100% Responsive** - Works on all devices
- ✅ **Real-time Search** - Instant results with auto-scroll
- ✅ **Secure Payments** - Razorpay integrated with verification
- ✅ **Smart Cart** - Syncs local & server data
- ✅ **Full Admin Panel** - Complete order & menu management
- ✅ **Production Ready** - Deployed and live

---

**Made with ❤️ by BhookExpress Team**

*Last Updated: May 2026*
