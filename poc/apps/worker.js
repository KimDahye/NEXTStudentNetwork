var exec = require('child_process').exec;
var Worker = function() {};

Worker.prototype.generate = function() {
		console.log("run worker!");
		var child = exec("./apps/gen.sh", function (err, stdout, stderr) {
			if(err)
				console.log(err);
			else
				console.log(stdout);
				console.log(stderr);
		});
}; 

module.exports = new Worker;
