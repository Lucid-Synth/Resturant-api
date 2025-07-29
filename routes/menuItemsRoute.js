import express from 'express'
import MenuItems from '../models/Menu.js'

const router = express.Router()

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItems.find()
    console.log('Items fetched')
    res.status(200).json(items)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Internal server error" })
  }
})

// POST new menu item
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
