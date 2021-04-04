// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware.
// body-parser is deprecated, .urlencoded and .json available inside express
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
app.listen(port, () => {
    console.log('server running');
    console.log(`running on localhost ${port}`);
});

// HTTP GET
app.get('/all', (request, response) => {
    response.send(projectData);
    console.log(projectData);
});

// HTTP POST
app.post('/add', function(request, response) {
    projectData = {
        temp: request.body.temp,
        date: request.body.date,
        content: request.body.content,
    }
    console.log(projectData);
    response.send(projectData)
});
