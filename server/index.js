const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
//require database
let Bug = require('./db/queries.js');

app.use(cors());
//body parser--may need to install still
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//get all bugs
app.get('/api/bug', async (req, res) => {
  try {
    let buggy = await Bug.find()
    res.send(buggy[0]);
  } catch(err) {
    res.status(404).send(err);
  }
})
//get a bug
// app.get('/', (req, res) =>{

// })
//add a bug
app.post('/api/bug', async (req, res) =>{
  try {
    console.log(req.body);
    let newBug =  await new Bug ({bugName: req.body.bugName, bugDescription: req.body.bugDescription, reportedBy: req.body.reportedBy, createdDate: req.body.createdDate, assignedTo: req.body.assignedTo, threatLevel: req.body.threatLevel})
    newBug.save()
    res.send(newBug);
  } catch (err) {
    res.status(404).send(err);
  }
})
// //update a bug
// app.put('/', (req, res) =>{

// })
// //delete a bug
// app.delete('/', (req, res) =>{

// })


app.listen(port, () => console.log('Listening to cool stuff at port 3000'));

module.exports = app;