const todoModel = require('../models/todoModel');

// Get all to-do items
exports.getItems = (req, res) => {
  todoModel.getAllItems((err, items) => {
    if (err) {
      res.status(500).send('Error fetching items');
      return;
    }
    if (items.length === 0) {
      // Add default items if the table is empty
      const defaultItems = [
        { name: "Welcome to your to-do list!" },
        { name: "Hit the + button to add a new item." },
        { name: "<-- Hit this to delete an item." }
      ];
      defaultItems.forEach(item => {
        todoModel.addItem(item.name, (err) => {
          if (err) {
            console.error('Error adding default item:', err);
          }
        });
      });
      res.redirect('/');
    } else {
      // Render the view with the items
      res.render('index', { listTitle: 'Today', newListItems: items });
    }
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
