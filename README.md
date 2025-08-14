# 📚 Books REST API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage a library of books.

## 🚀 Features
- Add new books
- Get all books
- Get a single book by ID
- Update book details
- Delete a book
- Seed initial book data

---

## 📂 Project Structure
📦 books-api
├── 📂 models
│ └── Book.js # Mongoose schema for books
├── 📂 routes
│ └── BookRoutes.js # All book-related API routes
├── db.js # MongoDB connection setup
├── server.js # Express app entry point
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/books-api.git
cd books-api
Install dependencies

bash
Copy
Edit
npm install
Create .env file

ini
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_connection_string
Run the server

bash
Copy
Edit
npm start
Server will run at: http://localhost:3000

