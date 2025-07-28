import express from 'express'
import db from './db.js'
import Person from './Person.js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())


app.post('/person', async (req,res) => {
  try {
    const data = req.body
    const newPerson = new Person(data)

    const response = await newPerson.save()
    console.log('data saved')
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({error:"Internal server error"})
  }
})

app.get('/person', async (req,res) => {
  try {
    const data = await Person.find()
    console.log('Data fetched')
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json({error:"Internal server error"})
  }
})

app.get('/', (req,res) => {
  res.send('Welcome to my hotel... How can i help you?, We have list of menus!')
})


app.listen(3000, () => {
  console.log("Server is running on 3000")
})