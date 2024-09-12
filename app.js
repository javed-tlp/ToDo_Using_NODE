const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const routes = require('./routes/index');
app.use('/', routes);

// Start Server
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
