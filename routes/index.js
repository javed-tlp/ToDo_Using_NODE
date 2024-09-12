const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Get all to-do items
router.get('/', todoController.getItems);

// Add a new to-do item
router.post('/', todoController.addItem);

// Delete a to-do item
router.post('/delete', todoController.deleteItem);

module.exports = router;
