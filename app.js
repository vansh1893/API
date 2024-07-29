const express = require('express');   
const path = require('path');   
const data = require('./data/cameras.json');  //importing data
// Creating an instance of express named "app" by convention:
const app = express();
const port = 4000;

// static files from the "public" directory
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint
app.get('/api/cameras', (req, res) => {
    res.json(data);
});

// too run website
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
