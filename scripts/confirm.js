var User = require('../webapp/src/models/user');
var config = require('getconfig'); // see config/README.md

var mongoose = require('mongoose');
mongoose.connect(config.DB.url);

var data = [{confirm : true, class : "1", name : "넥스트", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "admin@watple.com", profile: config.profile},
{confirm : false, class : "1", name : "최해커", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "badman@watple.com", profile: config.profile},
{confirm : false, class : "9", name : "정주리", password : "$2a$08$NDgrx.08fBmsJZHIVTt6E.gH.IMVag.xUsl8dy5JIMauzgiJweKCS", email : "jjuri@watple.com", profile: config.profile}];

var user = new User(data[0]);
user.save();
user = new User(data[1]);
user.save();
user = new User(data[2]);
user.save();

User.find({}, function (err, data) {
	var length = data.length;
	for(var i = 0; i < length; i ++) {
		console.log(data[i]);
	}
});