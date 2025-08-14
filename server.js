import express from 'express';
import db from './db.js';
import bookRouter from './routes/BookRoutes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => {
  res.send('📚 Welcome to our Library API! How can I help you?');
});

// Book routes
app.use('/books', bookRouter);

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
