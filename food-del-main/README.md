# 🍽️ **BhookExpress – Full-Stack Food Delivery Web App**

A modern **food delivery platform** built with the **MERN Stack** (MongoDB, Express, React, Node.js).
Customers can explore menus, add items to their cart, place orders, track delivery status, and make secure payments — all in one responsive web app.
Includes a **dedicated Admin Panel** for managing menu items and orders, and multiple **encryption layers** to ensure user and payment security.

🚀 **Live Demo:** [food-del-frontend-7vmr.onrender.com](https://food-del-frontend-7vmr.onrender.com)

---

## 🔍 **Features**

### 👤 User Side

* 🍔 **Browse & Search:** View food items by category or search by dish name
* 🔎 **Smart Search:** Real-time food search with auto-scroll to results
* 🛒 **Smart Cart:** Add items to cart (local + server sync)
* 📦 **Order Tracking:** Real-time status updates
* 💳 **Secure Payments:** Integrated payment gateway (Stripe)
* 🔐 **User Authentication & Encryption:**

  * Passwords encrypted in backend
  * Sensitive data encrypted in frontend before API calls
  * Token-based authentication with JWT
  * LocalStorage cart data encrypted for extra security
* 📱 **Responsive UI:** Optimized for mobile & desktop
* ℹ️ **About Us Section:** Learn about BhookExpress mission and values
* ⭐ **Why Choose Us:** 6 key features highlighting service benefits
* 🎯 **How It Works:** 4-step ordering process visualization
* 🎁 **Special Offers:** Promotional deals and discounts
* 📱 **Mobile-Friendly Navbar:** Hamburger menu for seamless mobile navigation

### 🛠 Admin Panel

* 📑 Add / edit / delete menu items
* 📦 Manage customer orders (update status)
* 📊 View sales & order analytics

---

## 🛠️ **Tech Stack**

### Frontend (User + Admin):

* React.js 18 (Vite for fast builds)
* React Router 7
* Context API for global state management
* Axios for API calls
* Crypto-JS for frontend encryption (4-layer security)
* Custom CSS for styling

### Backend API:

* Node.js + Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Backend data encryption for sensitive info
* Stripe payment integration
* Hosted on Render

### Other Tools:

* LocalStorage for offline cart persistence (encrypted)
* RESTful API architecture
* CORS & security middleware

---

### 🌟 **Highlights**

* **Smart Search:** Real-time dish search with automatic page scroll to results
* **Smart Cart Merge:** Local cart items automatically sync with server after login
* **Dynamic Home Page:** Hero section, category explorer, about us, testimonials, and special offers
* **Responsive Design:** Fully optimized for desktop, tablet, and mobile devices
* **Admin Dashboard:** Manage menu items & orders in real time
* **Secure Authentication:** JWT-based authentication with encrypted credentials
* **4-Layer Encryption:** Frontend + backend data encryption, secure JWT, encrypted local storage
* **Full-Stack Deployment:** Deployed on Render with a production-ready build
* **Scalable Architecture:** Clean separation of frontend, admin, and backend
* **Category Management:** Smart category filtering with typo handling (e.g., deserts → desserts)

---

## 🚀 **Getting Started**

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud)
- Stripe account for payment processing

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd food-del-main
   ```

2. **Backend Setup:**
   ```bash
   cd Backend
   npm install
   # Create .env file with required environment variables
   npm start
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Admin Panel Setup:**
   ```bash
   cd admin
   npm install
   npm run dev
   ```

---

## 🔧 **Environment Variables**

### Backend (.env):
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=4000
```

### Frontend & Admin (.env):
```
VITE_API_URL=http://localhost:4000
```

---

## 📱 **Usage**

1. **Browse Menu:** Visit the home page and explore dishes by category
2. **Search:** Use the search icon in navbar to find dishes by name
3. **Add to Cart:** Click on any dish to view details and add to cart
4. **Checkout:** Proceed to cart and complete your order
5. **Track Order:** View real-time order status in "My Orders"

---

## 🛠️ **Project Structure**

```
food-del-main/
├── frontend/           # React customer app (Vite)
├── admin/              # React admin dashboard (Vite)
├── Backend/            # Node.js + Express API
│   ├── config/         # Database configuration
│   ├── controllers/    # Route handlers
│   ├── models/         # Database schemas
│   ├── middleware/     # Auth & custom middleware
│   ├── routes/         # API endpoints
│   └── server.js       # Main server file
├── uploads/            # File storage directory
├── README.md           # Project documentation
└── .gitignore          # Git ignore rules
```

---

## 🔌 **API Endpoints**

### User Authentication
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile

### Food Items
- `GET /api/food/list` - Get all food items
- `GET /api/food/:id` - Get specific food item

### Cart Management
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get cart items

### Orders
- `POST /api/order/place` - Place new order
- `GET /api/order/userorders` - Get user's orders
- `GET /api/order/list` - Get all orders (admin)
- `POST /api/order/status` - Update order status (admin)

### Admin
- `POST /api/food/add` - Add new food item
- `POST /api/food/remove` - Remove food item
- `POST /api/food/list` - Get all food items for admin

---

## 🐛 **Troubleshooting**

### Frontend Issues

**Q: Search functionality not working?**
- A: Make sure the backend API is running and reachable
- Check browser console for errors
- Verify VITE_API_URL in .env matches backend URL

**Q: Cart items disappearing after login?**
- A: This should be fixed with the smart cart merge feature
- Clear localStorage and refresh the page
- Check browser developer tools → Application → LocalStorage

**Q: Mobile menu not opening?**
- A: Ensure CSS is properly loaded (check Network tab)
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Backend Issues

**Q: MongoDB connection error?**
- A: Verify MONGO_URI in .env is correct
- Check if MongoDB service is running
- Confirm network access if using MongoDB Atlas

**Q: Stripe payment failing?**
- A: Verify STRIPE_SECRET_KEY is correct
- Check Stripe API keys from your dashboard
- Ensure Stripe account is in live or test mode as needed

---

## 📞 **Contact & Support**

**Email:** contact@bhookexpress.com  
**Phone:** +91-9142111111

---

## 📝 **License**

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 **Acknowledgments**

- BhookExpress team for developing this platform
- MERN Stack community for excellent tools and documentation
- All contributors and testers

---

**Made with ❤️ by BhookExpress Team**
