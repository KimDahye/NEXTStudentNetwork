var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mytestdb');
var db = mongoose.connection;
var Schema = mongoose.Schema;

// pending connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
	console.log("mytestdb connection succeess");
});

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

var hoyoung = new User({name: 'Hoyoung Jung'}); 
console.log(hoyoung.name);

hoyoung.save(function (err, hoyoung) {
	console.log("saved.");
});
