let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bugfullstack', {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', () => {
  console.log('connection error');
});
  ;

let bugSchema = new mongoose.Schema({
  bugName: String,
  bugDescription: String,
  reportedBy: String,
  createdDate: String,
  assignedTo: String,
  threatLevel: String
})

let Bug = mongoose.model('Bug', bugSchema);

let buggared = new Bug ({
  bugName: 'death to computers',
  bugDescription: 'awol',
  reportedBy: 'me',
  createdDate: 'today',
  assignedTo: 'someone else',
  threatLevel: 'probably pretty bad'
})
buggared.save();

module.exports = Bug;