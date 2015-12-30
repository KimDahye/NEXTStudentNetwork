var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mytestdb');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log("mytestdb connection succeess");
	mongoose.disconnect(function() {
		console.log("disconnect..");
	});
 });

