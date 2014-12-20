// String.format
// http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format/4673436#4673436
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

var polygonPoints = function(n) {
	var points = [];
	var r = 180;
	for (var i = 0; i < n; i++) {
		var j = (i * 4 + 4) % n;
		var angle = 2 * Math.PI * j / n - Math.PI / 2;
		var px = r * Math.cos(angle);
		var py = r * Math.sin(angle);
		points.push([px, py]);
	}
	return points;
}

// Global variable
var svgNS = "http://www.w3.org/2000/svg";
var svg = null;

var endPoints = [[-342, -37],[-281, -37],[-133, -37],[63,-37],[245,-37],[340,-37],[-39, 0],[160,0],[-342, 37],[-193, 37],[-100, 37], [28, 37], [340,37]];
var startPoints = polygonPoints(endPoints.length);

var links = [[0,1], [1,2], [2,3], [3,4], [4,5], [8,9], [9,10], [10,11], [11,12], [0,8], [1,8], [1,9], [2,9], [2,10], [2,6], [3,6], [6,7], [6,10], [6,11], [3,7], [4,7], [7,11], [7,12], [5,12]];

var points = [];
var lines = [];

var waitTime = 1000;
var animationTime = 2000;


// Functions
var createLogo = function() {
	svg = createSVG();
	var div = document.querySelector("#logo .container");
	div.appendChild(svg);

	setPoints();
	drawLines();
	drawPoints();

	setTimeout(function() {
		run(startPoints, endPoints, animationTime)
	}, waitTime);
}

var createSVG = function() {
	var svg = document.createElementNS(svgNS, "svg");
	svg.setAttribute("width", 900);
	svg.setAttribute("height", 400);
	svg.setAttribute("viewBox", "-450 -200 900 400");
	return svg
}

var setPoints = function() {

	var createPoint = function(coord) {
		var point = document.createElementNS(svgNS, "circle");
		point.setAttribute("cx", coord[0]);
		point.setAttribute("cy", coord[1]);
		point.setAttribute("r", 4);
		point.setAttribute("stroke", "black");
		point.setAttribute("stroke-width", "2");
		point.setAttribute("fill", "white");
		point.setAttribute("opacity", 0);

		points.push(point);
		return point;
	}

	for (var i = 0; i < startPoints.length; i++) {
		var startCoord = startPoints[i];
		var endCoord = endPoints[i]
		var point = createPoint(startCoord);
	}
}

var drawLines = function() {
	for (var i in links) {
		var link = links[i];
		var line = document.createElementNS(svgNS, "path");
		var p0 = points[link[0]];
		var p1 = points[link[1]];
		var x0 = p0.getAttribute("cx");
		var y0 = p0.getAttribute("cy");
		var x1 = p1.getAttribute("cx");
		var y1 = p1.getAttribute("cy");
		line.setAttribute("d", "M {0} {1} L {2} {3}".format(x0,y0,x1,y1));
		line.setAttribute("stroke", "gray");
		line.setAttribute("stroke-width", 1);
		lines.push(line);
		svg.appendChild(line);
	}
}

var drawPoints = function() {
	for (var i in points) {
		var point = points[i];
		svg.appendChild(point);
	}
}

var run = function(startPoints, endPoints, dt) {
	var time = 0;
	var start = null;
	
	var renderLoop = function(timestamp) {
		if (!start) start = timestamp;
 		var progress = timestamp - start;
 		var ratio = ease(progress / dt);
		for (var i in points) {
			var point = points[i];
			var cx = startPoints[i][0] + (endPoints[i][0] - startPoints[i][0]) * ratio; 
			var cy = startPoints[i][1] + (endPoints[i][1] - startPoints[i][1]) * ratio;
			point.setAttribute("cx", cx);
			point.setAttribute("cy", cy);
			point.setAttribute("r", 4*ratio);
			point.setAttribute("opacity", progress/dt);
		}
		for (var i in lines) {
			var line = lines[i];
			var link = links[i];
			var p0 = points[link[0]];
			var p1 = points[link[1]];
			var x0 = p0.getAttribute("cx");
			var y0 = p0.getAttribute("cy");
			var x1 = p1.getAttribute("cx");
			var y1 = p1.getAttribute("cy");
			line.setAttribute("d", "M {0} {1} L {2} {3}".format(x0,y0,x1,y1));
			line.setAttribute("opacity", 1-progress / dt);
		}
		if (progress < dt) {
			window.requestAnimationFrame(renderLoop);
		} else {
			// 마무리
			for (var i in points) {
				var point = points[i];
				point.setAttribute("cx", endPoints[i][0]);
				point.setAttribute("cy", endPoints[i][1]);
			}
		}
	}

	var handle = requestAnimationFrame(renderLoop);
}

createLogo();

setTimeout(function() {
	document.querySelector("#img_logo").className = "show";
	document.querySelector("svg").setAttribute("class", "hide");
}, waitTime + animationTime + 200);

setTimeout(function() {
	var logoImage = document.querySelector("#img_logo");
	logoImage.className = "shirink";
	// logoImage.id = "";
	var cardList = document.querySelector(".card_container");
	cardList.appendChild(logoImage);
	var logoContainer = document.querySelector("#logo");
	logoContainer.className = "shirink"
	var logoContainer = document.querySelector("#logo .container");
	logoContainer.className = "container shirink"
	setTimeout(function() {logoContainer.parentNode.removeChild(logoContainer)}, 1000);

}, waitTime + animationTime + 200 + 1000);
