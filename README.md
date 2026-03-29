# 🚀 Express API Project

This is a simple API built with Express.js that includes Users,
Products, and Comments endpoints.

------------------------------------------------------------------------

## 📦 Requirements

-   Node.js (v16 or higher)
-   npm or yarn

------------------------------------------------------------------------

## ⚙️ Installation

1.  Clone the project:https://github.com/amixiid1/express-server.git

2.  Install dependencies: npm install

3.  Run the server: node index.js

Or with nodemon: npx nodemon index.js

------------------------------------------------------------------------

## 🌐 Server

http://localhost:3000

------------------------------------------------------------------------

## 📌 Endpoints

### 👤 Users

GET /\
GET /api/users\
GET /api/users/:id\
PUT /api/users/:id\
DELETE /api/users/:id

------------------------------------------------------------------------

### 📦 Products

GET /api/products\
GET /api/products/:id\
POST /api/products\
PUT /api/products/:id\
DELETE /api/products/:id

------------------------------------------------------------------------

### 💬 Comments

GET /api/comments\
GET /api/comments/:id\
POST /api/comments\
PUT /api/comments/:id\
DELETE /api/comments/:id

------------------------------------------------------------------------

## 🧪 Testing with Postman

GET http://localhost:3000/api/users\
GET http://localhost:3000/api/users/1

POST http://localhost:3000/api/products\
Body: { "productionName": "MacBook", "price": 1200 }

------------------------------------------------------------------------

## ⚠️ Notes

-   Uses in-memory data
-   Data resets when server restarts

------------------------------------------------------------------------

## 👨‍💻 Author

Amixiid
