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
	var test = data.shift();
	$(card).parent().attr('href', '#'+test.movieUrl);
	$(card).find(".name").text(test.nameKor);
	$(card).find(".major").text(test.majorKor);
	$(card).find(".motto").text(test.vision);
	$(card).find(".profile")
		.attr('src', test.imgName)
		.attr('alt', test.nameEng);
}

function checkDataRemaining (argument) {
	console.log("@checkDataRemaining");
	if(data.length < leastNum) {
		requestMoreStudent();
	}
}