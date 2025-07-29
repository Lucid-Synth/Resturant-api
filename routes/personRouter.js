import express from 'express'
import Person from '../models/Person.js'

const router = express.Router()


router.post('/', async (req, res) => {
  try {
    const data = req.body
    const newPerson = new Person(data)
    const response = await newPerson.save()
    console.log('Data saved')
    res.status(200).json(response)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
})


router.get('/', async (req, res) => {
  try {
    const data = await Person.find()
    console.log('Data fetched')
    res.status(200).json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
})


router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType
    const allowedRoles = ['chef', 'waiter', 'manager']

    if (allowedRoles.includes(workType)) {
      const response = await Person.find({ work: workType })
      console.log("Filtered data fetched")
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: "Work type undefined" })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
})

router.put('/:id', async (req,res) => {
  try {
    const personId = req.params.id
  const updatePersonData = req.body

  const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
    new: true,
    runValidators: true
  })
  if(!response){
    res.status(404).json({message: "Person not found"})
  }

  console.log("Data updated")
  res.status(200).json(response)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
})

export default router