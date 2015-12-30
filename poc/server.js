// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//mongodb url
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/mytest');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 80;        // set our port

// set the view engine to ejs
app.set('view engine', 'ejs');

//static page handling
app.use(express.static('public'));

// ROUTES FOR OUR API
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
		res.json({ message: 'hooray! welcome to our api!' });   
		});

router.post('/generate', function(req, res) {
		var Student = require('./models/user');
		var worker = requre('./apps/worker');

		var newStudent = new Student({
			student_id : req.param('sid'),
			email : req.param('email'),
			name  : req.param('name'),
			msg : req.param('msg')});

		newStudent.save(function(err) {
			if(err) 
			console.log("mongodb err: " + err);

			else
			console.log("Student saved successfully!");
			});
		res.json({message: newStudent});
		worker.generate();
		});

// REGISTER OUR ROUTES 
// all of our routes will be prefixed with /api
app.use('/api', router);

app.get('/test',function(req, res) {
	var Student = require('./models/user');
	Student.find({}, function(err, students) {
		if(err) res.render(err);
		else
			console.log(students);
			res.render('test', {
				hoyoung: "HoyoungJung",
				students: students
				});
	});
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
