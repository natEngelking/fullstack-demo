let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bugfullstack', {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', () => {
  console.log('connection error');
});
  ;

let bugSchema = new mongoose.Schema({
  bugNumber: Number,
  description: String,
  reportedBy: String,
  creationDate: String,
  assignedTo: String,
  threatLevel: String
})

let Bug = mongoose.model('Bug', bugSchema);

let buggared = new Bug ({
  bugNumber: 10,
  description: 'awol',
  reportedBy: 'me',
  creationDate: 'today',
  assignedTo: 'someone else',
  threatLevel: 'probably pretty bad'
})
buggared.save();

module.exports = Bug;