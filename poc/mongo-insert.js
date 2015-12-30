var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mytest');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

var hoyoung = new User({name: 'Hoyoung Jung'}); 
console.log(hoyoung.name);

hoyoung.save(function (err, hoyoung) {
	if (err)
		console.log("err");
	else
		console.log("saved.");
});
