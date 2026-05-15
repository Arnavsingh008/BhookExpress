# 📤 GitHub Push Guide - BhookExpress Food Delivery App

## ✅ What WILL Be Uploaded to GitHub

### Frontend (`/frontend`)
- ✓ `src/` - All React components, pages, context
- ✓ `public/` - Static assets, images
- ✓ `package.json` - Dependencies list (not node_modules)
- ✓ `vite.config.js` - Vite configuration
- ✓ `eslint.config.js` - ESLint rules
- ✓ `index.html` - Entry HTML

### Backend (`/Backend`)
- ✓ `controllers/` - Order, food, user, cart controllers
- ✓ `models/` - MongoDB schemas
- ✓ `routes/` - API endpoints
- ✓ `middleware/` - Authentication, validation
- ✓ `config/` - Database configuration (without credentials)
- ✓ `server.js` - Main server file
- ✓ `package.json` - Dependencies list

### Admin (`/admin`)
- ✓ `src/` - All React components for admin panel
- ✓ `public/` - Static assets
- ✓ `package.json` - Dependencies list
- ✓ `vite.config.js` - Vite configuration

### Project Root
- ✓ `.gitignore` - Git ignore rules
- ✓ `README.md` - Project documentation
- ✓ License files
- ✓ Configuration files (without sensitive data)

---

## ❌ What Will NOT Be Uploaded (Git Ignored)

### Environment Files (SECURITY CRITICAL ⚠️)
```
.env
.env.local
.env.production
.env.staging
```
**⚠️ NEVER commit .env files - they contain:**
- MongoDB connection strings
- JWT secret keys
- Razorpay API keys
- Database passwords
- API credentials

### Dependencies & Packages
```
node_modules/        - Will be installed from package.json
package-lock.json    - Generated during npm install
yarn.lock            - Generated during yarn install
```

### Build Outputs
```
dist/               - Production build (regenerate with npm run build)
build/              - Build artifacts
.vite/              - Vite cache
coverage/           - Test coverage reports
```

### System Files
```
.DS_Store           - macOS system file
Thumbs.db           - Windows thumbnail cache
.git/               - Git metadata (stays local)
.vscode/            - VSCode workspace settings
.idea/              - IDE settings
```

### Temporary & Log Files
```
*.log               - All log files
npm-debug.log       - NPM errors
yarn-error.log      - Yarn errors
tmp/                - Temporary files
uploads/            - User-uploaded files
```

---

## 🚀 Steps to Push to GitHub

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New" to create a new repository
3. Name: `food-delivery-app` (or your preferred name)
4. Add description: "Full-stack MERN food delivery platform"
5. Set to Public/Private as needed
6. Initialize with README, .gitignore, License (optional)

### Step 2: Initialize Git Locally
```bash
cd d:\Downloads\Devops_project\food-del-main
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 3: Verify .gitignore is Correct
```bash
# Check which files will be committed
git status

# Should show:
# - All source files
# - package.json files
# - Configuration files (without .env)
# Should NOT show:
# - node_modules/
# - .env files
# - dist/ folders
# - log files
```

### Step 4: Add Files to Git
```bash
git add .
git commit -m "Initial commit: Full-stack food delivery app with MERN stack"
```

### Step 5: Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/food-delivery-app.git
git branch -M main
git push -u origin main
```

---

## 📋 Checklist Before Pushing

### Security Checklist ⚠️
- [ ] Remove all `.env` files from staging
- [ ] Verify `.env*` patterns are in `.gitignore`
- [ ] Check for hardcoded API keys in source code
- [ ] Ensure database credentials are only in `.env`
- [ ] Review for any sensitive URLs or tokens

### Files to Create Before Pushing
- [ ] `.env.example` file (with placeholder values)
- [ ] `SETUP.md` - How to set up locally
- [ ] `CONTRIBUTING.md` - Contribution guidelines

### Code Quality
- [ ] All unnecessary comments removed
- [ ] No console.log statements left
- [ ] No TODO comments (or they're documented)
- [ ] Proper error handling in all controllers
- [ ] All imports properly organized

---

## 📝 Create .env.example File

Create this file in Backend folder so others know what variables to set:

```bash
# Backend/.env.example
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/food-del
JWT_SECRET=your_jwt_secret_key_here
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=4000
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

```bash
# frontend/.env.example
VITE_API_URL=http://localhost:4000
```

---

## 🛠️ Git Commands Quick Reference

```bash
# Check status
git status

# See what will be committed
git diff --cached

# Add all files
git add .

# Add specific file
git add path/to/file

# Commit with message
git commit -m "Your commit message"

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Push to remote
git push origin main

# Pull latest changes
git pull origin main

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout branch-name

# Delete branch
git branch -d branch-name
```

---

## 📌 Important Notes

1. **Never commit `.env` files** - They contain sensitive credentials
2. **Use `.env.example`** - Show what variables are needed
3. **node_modules is large** - Always ignore it (install with npm install)
4. **Private repos** - If your API keys are public, set repo to private
5. **Update README** - Include setup instructions and features

---

## 🔒 Additional Security Tips

1. **Rotate your credentials** after pushing (if accidentally committed)
2. **Use environment variables** for all sensitive data
3. **Add branch protection** for main branch (pull requests required)
4. **Review commits** before pushing public data
5. **Keep dependencies updated** - Run `npm audit` regularly

---

## ✨ Commit Message Examples

```
Initial commit: Full-stack food delivery app with MERN stack
Add search functionality with auto-scroll
Fix Razorpay payment verification
Implement smart cart merge on login
Add responsive mobile navigation
Update README with setup instructions
```

---

Good luck pushing to GitHub! 🚀
