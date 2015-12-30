// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StudentSchema   = new Schema({
		student_id: {type:String, required: true, unique: true},
	    name: { type: String, required: true},
		email: String,
		msg: String
});

var Student = module.exports = mongoose.model('Student', StudentSchema);

module.exports = Student;
