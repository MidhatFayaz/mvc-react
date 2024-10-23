const express = require('express');
const routLink = require("./src/routes/appRoutes"); // Import router
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs'); // view engine means template engine
app.set('views', path.join(__dirname, 'src', 'views')); // Set views folder for EJS

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));


const bodyParser = require('body-parser');
// Middleware to parse request body
// app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use the imported router for handling routes
app.use('/', routLink);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
