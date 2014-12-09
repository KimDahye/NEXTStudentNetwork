var leastNum = 2, requestNum = 24,
	changeInterval = 5000,
	data=[],
	transitionEvent = getTransitionEvent();

checkDataRemaining();
window.setInterval(changeStudent, changeInterval);

function getTransitionEvent(){
	var el = document.createElement('fakeelement'),
	transitions = {
		'transition':'transitionend',
		'OTransition':'oTransitionEnd',
		'MozTransition':'transitionend',
		'WebkitTransition':'webkitTransitionEnd'
    };

	for(var t in transitions) {
		if( el.style[t] !== undefined ){
			return transitions[t];
		}
	}

	console.error("no transitionEvent!");
	// http://davidwalsh.name/css-animation-callback
}

function requestMoreStudent() {
	console.log("@requestMoreStudent");
	var xmlhttp, url="/students?num=";
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function () {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			if(xmlhttp.responseText) {
				data = JSON.parse(xmlhttp.responseText).data;
			}
		}
	};
	xmlhttp.open("GET",url+requestNum,true);
	xmlhttp.send();
}

function changeStudent() {
	console.log("@changeStudent");
	checkDataRemaining();
	var cards = $(".card").not(".bi").not("logo");
	var index = Math.floor((Math.random() * cards.length));
	console.log(index);
	var card = cards[index];
	var newData = data.shift();
	flip(card, newData.imgName, function() {
		$(this).removeClass("flipper")
			.parent().attr("href", newData.movieUrl)
			.find(".front").remove();
		$(this).find(".back")
			.removeClass("back");
		$("<div></div>").insertBefore($(".profile", this))
			.addClass("info")
			.append("<div class='name'>"+newData.nameKor+"</div>")
			.append("<div class='major'>"+newData.majorKor+"</div>")
			.append("<div class='motto'>"+newData.vision+"</div>");
	});
}

function flip(card, imgsrc, addInfo) {
	$(card).find(".info").remove();
	$(card).find(".profile").addClass("front");
	// console.log($(card).find(".front"));
	$("<img />").insertAfter($(card).find(".front"))
		.addClass("profile back")
		.attr("src", imgsrc);
	$(card).addClass("flipper")
		.on(transitionEvent, addInfo);
}

function checkDataRemaining() {
	console.log("@checkDataRemaining");
	if(data.length < leastNum) {
		requestMoreStudent();
	}
}