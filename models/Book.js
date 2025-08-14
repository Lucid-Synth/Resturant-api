import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  published_year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  pages: {
    type: Number,
    required: true
  },
  isbn: {
    type: String,
    unique: true,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
export default Book;
