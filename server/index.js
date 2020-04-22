const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
//require database
let Bug = require('./db/queries.js');
//body parser--may need to install still
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//get all bugs
app.get('/api/bug', (req, res) => {
  console.log('here');

    // let buggy = await Bug.find()
    // console.log(buggy);
    // res.send(buggy);
  // } catch(err) {
  //   res.status(404).send(err);
  // }
})
//get a bug
// app.get('/', (req, res) =>{

// })
//add a bug
// app.post('/', (req, res) =>{

// })
// //update a bug
// app.put('/', (req, res) =>{

// })
// //delete a bug
// app.delete('/', (req, res) =>{

// })


app.listen(port, () => console.log('Listening to cool stuff at port 3000'));

module.exports = app;