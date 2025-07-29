import express from 'express'
import db from './db.js'
import personRouter from './routes/personRouter.js'
import menuRouter from './routes/menuItemsRoute.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';

const app = express()
dotenv.config()
app.use(bodyParser.json())
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to our Resturant ... How can I help you? We have a list of menus!')
})

app.use('/person', personRouter)
app.use('/menu', menuRouter)

app.listen(port, () => {
  console.log("Server is running on 3000")
})
