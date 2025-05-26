# 🍽️ Food Delivery Application

A full-stack food delivery web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Stripe integration for secure payments. This application offers a seamless experience for both customers and administrators.

## 🚀 Features

### User Panel

- **User Authentication**: Secure login and registration system.
- **Browse Menu**: Explore a variety of food items.
- **Shopping Cart**: Add, remove, and manage items in the cart.
- **Order Placement**: Place orders with real-time updates.
- **Payment Integration**: Secure payments via Stripe.
- **Order Tracking**: Monitor order status and history.

### Admin Panel

- **Admin Authentication**: Secure login for administrators.
- **Menu Management**: Add, update, or delete food items.
- **Order Management**: View and manage all customer orders.
- **Analytics Dashboard**: Gain insights into sales and user activity.

## 🛠️ Technologies Used

- **Frontend**: React.js, Redux, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Payments**: Stripe API
- **Styling**: CSS, Bootstrap
- **Others**: Axios, React Toastify

## 📦 Installation and Setup

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **MongoDB** instance
- **Stripe Account** for payment integration

### 1. Clone the Repository

```bash
git clone https://github.com/ArshAnsari23122003/food-del.git
cd food-del
```

### 2. Setup Backend

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` directory and add the following:

  ```env
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  STRIPE_SECRET_KEY=your_stripe_secret_key
  ```

- Start the backend server:

  ```bash
  npm run server
  ```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

- Start the frontend development server:

  ```bash
  npm start
  ```

- The frontend will be running at `http://localhost:3000`

### 4. Setup Admin Panel

```bash
cd ../admin
npm install
```

- Start the admin panel development server:

  ```bash
  npm start
  ```

- The admin panel will be running at `http://localhost:3001`

## 🔐 Environment Variables

Ensure that you have the following environment variables set in your `.env` files:

- **Backend** (`backend/.env`):

  ```env
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```

- **Frontend** and **Admin Panel** may require additional environment variables depending on your setup.

## 📸 Screenshots

*Include screenshots of the application here to showcase the UI and features.*

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add YourFeature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by [Arsh Ansari](https://github.com/ArshAnsari23122003)**
