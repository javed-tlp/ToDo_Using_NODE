const connection = require('./database');

// Get all to-do items
exports.getAllItems = (callback) => {
  const query = 'SELECT * FROM todos';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching items:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Add a new to-do item
exports.addItem = (itemName, callback) => {
  const query = 'INSERT INTO todos (name) VALUES (?)';
  connection.query(query, [itemName], (err, result) => {
    if (err) {
      console.error('Error adding item:', err);
      return callback(err);
    }
    callback(null);
  });
};

// Delete a to-do item
exports.deleteItem = (itemId, callback) => {
  const query = 'DELETE FROM todos WHERE id = ?';
  connection.query(query, [itemId], (err, result) => {
    if (err) {
      console.error('Error deleting item:', err);
      return callback(err);
    }
    callback(null);
  });
};
