import mongoose from "mongoose";
import dotenv from 'dotenv';
const mongoURL = process.env.MONGO_URL

dotenv.config()

mongoose.connect(mongoURL)

const db = mongoose.connection

db.on('connected', () => {
  console.log("Connected to MongoDB server")
})

db.on('error', (err) => {
  console.error('MongoDB connection error:'+err)
})

db.on('disconnected', () => {
  console.log('MongoDB Disconnected')
})

export default db;