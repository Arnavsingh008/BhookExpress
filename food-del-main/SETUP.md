# 🍽️ BhookExpress - Setup & Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20 or higher) - [Download](https://nodejs.org)
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud)
- **Git** - [Download](https://git-scm.com)
- **npm** or **yarn** package manager

---

## 📦 Installation Steps

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Arnavsingh008/food-del-main.git
cd food-del-main
```

### 2️⃣ Backend Setup

```bash
# Navigate to Backend folder
cd Backend

# Install dependencies
npm install

# Create .env file with your credentials
cp .env.example .env
```

**Edit `Backend/.env` with your credentials:**
```
MONGO_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/food-del
JWT_SECRET=your_secret_key_here_with_min_32_chars
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=4000
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

**Start the Backend:**
```bash
npm run server
# Or
npm start
```

Server will run on `http://localhost:4000`

---

### 3️⃣ Frontend Setup

```bash
# Navigate to frontend folder (from root)
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Start the Frontend:**
```bash
npm run dev
```

Frontend will open at `http://localhost:5173`

---

### 4️⃣ Admin Panel Setup

```bash
# Navigate to admin folder (from root)
cd admin

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Start the Admin Panel:**
```bash
npm run dev
```

Admin panel will open at `http://localhost:5174`

---

## 🔐 Setting Up External Services

### MongoDB Atlas (Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Add to `Backend/.env`:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/food-del
   ```

### Razorpay Payment Gateway

1. Visit [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Sign up/Login
3. Get your **Key ID** and **Key Secret**
4. Add to `Backend/.env`:
   ```
   RAZORPAY_KEY_ID=your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   ```

---

## 🚀 Running All Services

**Option 1: Run in separate terminals**

Terminal 1 - Backend:
```bash
cd Backend
npm run server
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

Terminal 3 - Admin:
```bash
cd admin
npm run dev
```

**Option 2: Use npm-run-all (optional)**

Install:
```bash
npm install -g npm-run-all
```

From root directory, create a script or run:
```bash
npm-run-all --parallel "cd Backend && npm run server" "cd frontend && npm run dev" "cd admin && npm run dev"
```

---

## 📝 Available Scripts

### Backend
```bash
npm run server       # Start backend server
npm run dev         # Start with nodemon (auto-reload)
npm test            # Run tests
```

### Frontend
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

### Admin
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

---

## 🔍 Testing the Application

### User Features
1. Visit `http://localhost:5173`
2. Sign up with email/password
3. Browse menu items
4. Search for dishes
5. Add items to cart
6. Place order with Razorpay payment
7. View orders in "My Orders"

### Admin Features
1. Visit `http://localhost:5174`
2. Add new food items
3. Edit/Delete items
4. View all orders
5. Update order status
6. Manage menu

### Backend API Testing
Use [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/):

**Example API Call:**
```bash
# Get all food items
curl http://localhost:4000/api/food/list

# Place order (requires auth token)
curl -X POST http://localhost:4000/api/order/place \
  -H "Content-Type: application/json" \
  -H "token: your_jwt_token" \
  -d '{
    "items": [...],
    "amount": 500,
    "address": {...}
  }'
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:**
- Ensure MongoDB is running locally: `mongod`
- Or verify MongoDB Atlas connection string is correct
- Check firewall settings

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::4000
```
**Solution:**
```bash
# Find process using port 4000
lsof -i :4000

# Kill the process (macOS/Linux)
kill -9 <PID>

# Or use different port
PORT=5000 npm run server
```

### node_modules Issues
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Loading
- Ensure `.env` file is in correct folder (Backend root)
- Restart the server after creating `.env`
- Don't commit `.env` file (use `.gitignore`)

### Razorpay Payment Not Working
- Verify API keys are correct
- Check if Razorpay script is loaded in frontend
- Ensure backend can reach Razorpay API
- Check browser console for errors

---

## 📚 Project Structure

```
food-del-main/
├── Backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Auth, validation
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── .env.example     # Example environment variables
│   └── server.js        # Main server file
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Global state
│   │   └── assets/      # Images, icons
│   ├── .env.example     # Example environment variables
│   └── vite.config.js   # Vite configuration
│
├── admin/
│   ├── src/
│   │   ├── components/  # Admin components
│   │   ├── pages/       # Admin pages
│   │   └── assets/      # Admin assets
│   ├── .env.example     # Example environment variables
│   └── vite.config.js   # Vite configuration
│
├── README.md            # Main documentation
├── .gitignore           # Git ignore rules
└── GITHUB_PUSH_GUIDE.md # GitHub push instructions
```

---

## 🚀 Deployment

### Deploy Backend (Render, Heroku, AWS)
1. Push code to GitHub
2. Connect your GitHub repo to Render/Heroku
3. Set environment variables in deployment platform
4. Deploy!

### Deploy Frontend (Vercel, Netlify, GitHub Pages)
1. Connect your GitHub repo
2. Set `VITE_API_URL` to your deployed backend URL
3. Deploy!

---

## 📞 Support & Resources

- **MongoDB Docs**: [https://docs.mongodb.com](https://docs.mongodb.com)
- **Razorpay Docs**: [https://razorpay.com/docs](https://razorpay.com/docs)
- **React Docs**: [https://react.dev](https://react.dev)
- **Node.js Docs**: [https://nodejs.org/docs](https://nodejs.org/docs)

---

## ✨ First Run Checklist

- [ ] MongoDB is running/connected
- [ ] Backend `.env` is configured
- [ ] Frontend `.env` is configured
- [ ] Admin `.env` is configured
- [ ] Backend started successfully
- [ ] Frontend started successfully
- [ ] Admin started successfully
- [ ] Can access http://localhost:5173 (frontend)
- [ ] Can access http://localhost:5174 (admin)
- [ ] Backend API is responding
- [ ] Can sign up and login

---

Happy coding! 🚀
