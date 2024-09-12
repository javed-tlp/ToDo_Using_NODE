const todoModel = require('../models/todoModel');

// Get all to-do items
exports.getItems = (req, res) => {
  todoModel.getAllItems((err, items) => {
    if (err) {
      res.status(500).send('Error fetching items');
      return;
    }
    // Render the view with the items
    res.render('index', { listTitle: 'Today', newListItems: items });
  });
};

// Add a new to-do item
exports.addItem = (req, res) => {
  const itemName = req.body.newItem;
  todoModel.addItem(itemName, (err) => {
    if (err) {
      res.status(500).send('Error adding item');
      return;
    }
    res.redirect('/');
  });
};

// Delete a to-do item
exports.deleteItem = (req, res) => {
  const checkedItemId = req.body.checkbox;
  todoModel.deleteItem(checkedItemId, (err) => {
    if (err) {
      res.status(500).send('Error deleting item');
      return;
    }
    res.redirect('/');
  });
};
