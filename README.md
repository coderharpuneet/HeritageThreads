# HeritageThreads - MERN E-Commerce Platform

HeritageThreads is a full-stack e-commerce platform built with the MERN (MongoDB, Express, React, Node.js) stack, specializing in traditional and ethnic wear. The application features a complete shopping experience with user authentication, product management, cart functionality, payment integration, and an admin dashboard.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![License](https://img.shields.io/badge/License-ISC-blue)
![Node](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18.3+-blue)

## 🚀 Features

### Customer Features

- **User Authentication** - Secure registration and login with JWT
- **Product Browsing** - Browse traditional and ethnic wear categories
- **Product Search** - Search functionality to find specific products
- **Shopping Cart** - Add/remove items with persistent storage
- **Product Reviews** - Star ratings and customer reviews
- **Address Management** - Multiple shipping addresses
- **Order Management** - Track order history and status
- **Payment Integration** - PayPal payment gateway
- **User Profile** - Manage account details and preferences

### Admin Features

- **Product Management** - Create, update, and delete products
- **Order Management** - View and manage customer orders
- **Dashboard** - Overview of sales and statistics
- **Image Upload** - Cloudinary integration for product images
- **Feature Management** - Manage featured products and banners

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **TailwindCSS** - Styling framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database (via Mongoose)
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **PayPal SDK** - Payment processing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
HeritageThreads/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── admin-view/
│   │   │   ├── auth/
│   │   │   ├── common/
│   │   │   ├── shopping-view/
│   │   │   └── ui/        # shadcn/ui components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux slices
│   │   ├── config/        # Configuration
│   │   ├── lib/           # Utilities
│   │   └── assets/        # Static assets
│   ├── package.json
│   └── vite.config.js
├── server/                 # Node.js backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── helpers/          # Utility functions
│   ├── server.js         # Entry point
│   └── package.json
└── README.md
```

## 🔧 Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/HarshBti1805/HeritageThreadsMERN.git
   cd HeritageThreads
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Environment Variables**

   Create a `.env` file in the `server` directory:

   ```env
   MONGO_URI=mongodb://localhost:27017/heritagethreads
   # or use MongoDB Atlas:
   # MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/heritagethreads

   JWT_SECRET=your_jwt_secret_key
   PORT=5000

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # PayPal Configuration
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   PAYPAL_MODE=sandbox
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**

   ```bash
   cd server
   npm run dev
   ```

   Server runs on `http://localhost:5000`

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm run dev
   ```
   Client runs on `http://localhost:5173`

### Production Build

1. **Build the frontend**

   ```bash
   cd client
   npm run build
   ```

2. **Start the production server**
   ```bash
   cd server
   npm start
   ```

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get user profile

### Products (Shop)

- `GET /api/shop/products` - Get all products
- `GET /api/shop/products/:id` - Get product details
- `GET /api/shop/search` - Search products

### Cart

- `GET /api/shop/cart` - Get cart items
- `POST /api/shop/cart` - Add to cart
- `DELETE /api/shop/cart/:id` - Remove from cart

### Orders

- `POST /api/shop/order` - Create order
- `GET /api/shop/order` - Get user orders

### Reviews

- `GET /api/shop/review/:productId` - Get product reviews
- `POST /api/shop/review` - Add review

### Admin

- `GET /api/admin/products` - Admin: Get all products
- `POST /api/admin/products` - Admin: Create product
- `PUT /api/admin/products/:id` - Admin: Update product
- `DELETE /api/admin/products/:id` - Admin: Delete product
- `GET /api/admin/orders` - Admin: Get all orders

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Tokens are stored in HTTP-only cookies for security.

## 🗄️ Database Models

- **User** - User accounts and authentication
- **Product** - Product catalog with images and details
- **Cart** - Shopping cart items
- **Order** - Order details and history
- **Address** - Shipping addresses
- **Review** - Product reviews and ratings
- **Feature** - Featured products and banners

## 🎨 UI Components

The project uses a component library built on Radix UI and TailwindCSS for modern, accessible UI components:

- Buttons, Cards, Dialogs, Dropdowns
- Forms (Input, Textarea, Select, Checkbox)
- Tables, Tabs, Toasts
- Avatar, Badge, Separator
- Sheet, Skeleton, Tabs

## 💳 Payment Integration

PayPal payment gateway integration is implemented for secure online payments.

## 🖼️ Image Storage

Cloudinary is used for storing and serving product images with cloud-based CDN.

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Sangam Mukherjee**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**HeritageThreads** - Bridging Traditional Fashion with Modern E-Commerce
