var Worker = function() {};
Worker.prototype.generate = function() {
		console.log("run worker!");
}; 

module.exports = new Worker;
