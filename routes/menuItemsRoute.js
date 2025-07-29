import express from 'express'
import MenuItem from '../models/Menu.js'

const router = express.Router()


router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find()
    console.log('Items fetched')
    res.status(200).json(items)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
})


router.post('/', async (req, res) => {
  try {
    const item = req.body
    const newItem = new MenuItems(item)
    const response = await newItem.save()
    console.log('Item saved')
    res.status(200).json(response)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
})

export default router
