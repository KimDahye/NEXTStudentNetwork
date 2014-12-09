var leastNum = 2, requestNum = 24,
	changeInterval = 5000,
	data=[];

checkDataRemaining();
window.setInterval(changeStudent, changeInterval);

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
	flip(card, newData.imgName);
}

function flip(card, imgsrc) {
	$(card).find(".info").remove();
	$(card).find(".profile").addClass("front");
	console.log($(card).find(".front"));
	$("<img />").insertAfter($(card).find(".front"))
		.addClass("back")
		.attr("src", imgsrc);
	$(card).addClass("flipper");
}

function checkDataRemaining() {
	console.log("@checkDataRemaining");
	if(data.length < leastNum) {
		requestMoreStudent();
	}
}