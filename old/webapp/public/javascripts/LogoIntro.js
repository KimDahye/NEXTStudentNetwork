// ToDo 애니메이션 끝나는 콜백
// 

(function(window) {
	'use strict';
	// 자주 사용하는 글로벌 객체 레퍼런스 확보
	var document = window.document;
	var console = window.console;

	var bezier = function(x1, y1, x2, y2, epsilon){
		var curveX = function(t){
			var v = 1 - t;
			return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
		};
		var curveY = function(t){
			var v = 1 - t;
			return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
		};
		var derivativeCurveX = function(t){
			var v = 1 - t;
			return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
		};
		return function(t){
	
			var x = t, t0, t1, t2, x2, d2, i;
	
			// First try a few iterations of Newton's method -- normally very fast.
			for (t2 = x, i = 0; i < 8; i++){
				x2 = curveX(t2) - x;
				if (Math.abs(x2) < epsilon) return curveY(t2);
				d2 = derivativeCurveX(t2);
				if (Math.abs(d2) < 1e-6) break;
				t2 = t2 - x2 / d2;
			}
	
			t0 = 0, t1 = 1, t2 = x;
	
			if (t2 < t0) return curveY(t0);
			if (t2 > t1) return curveY(t1);
	
			// Fallback to the bisection method for reliability.
			while (t0 < t1){
				x2 = curveX(t2);
				if (Math.abs(x2 - x) < epsilon) return curveY(t2);
				if (x > x2) t0 = t2;
				else t1 = t2;
				t2 = (t1 - t0) * .5 + t0;
			}
	
			// Failure
			return curveY(t2);
	
		};
	};
	
	var cachedEase = function() {
		var ease = bezier(0.25, 0.1, 0.25, 1, 0.01);
		var cached = {};
		for (var i = 0; i <= 10000; i++) {
			cached[i] = ease(i / 10000);
		}
		return function(t) {
			var step = Math.min(Math.floor(t * 10000), 10000);
			return cached[step];
		}
	}
	
	// Cache
	var ease = cachedEase();

	var initLogo = function(){
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
	}

	function setScale(width) {
		// 원하는 크기에 맞춰 scale css 값을 바꿔준다.
		// 960 456
		var ratio = width/960;

		$('#logo .container').css({
			'zoom': ratio
		});
	}
	
	var Logo = {
		initLogo : initLogo,
		setScale : setScale
	};
	
	// 글로벌 객체에 모듈을 프로퍼티로 등록한다.
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Logo;
		// browser export
	} else {
		window.LogoIntro = Logo;
	}    	

}(this));
