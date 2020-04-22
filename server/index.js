const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
//require database
let Bug = require('./db/queries.js');
//body parser--may need to install still


app.listen(port, () => console.log('Listening to cool stuff at port 3000'));

module.exports = app;