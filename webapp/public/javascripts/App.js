//
function Student(studentInfo) {
	this.info = studentInfo;
	this.init();
}
Student.prototype.init = function() {
	// el 만들기
	var elString = this.template(this.info);
};
Student.prototype.appendToContainer = function(containerEl) {
	var elString = this.template(this.info);
	containerEl.insertAdjacentHTML("beforeend",elString);
	console.log(this.info.studentNo);
	this.el = document.getElementById("stu_"+this.info.studentNo);
	this.el.addEventListener("mouseenter", this.showInfo.bind(this), false);
	this.el.addEventListener("mouseleave", this.foldInfo.bind(this), false);

	// var infoEl = this.el.querySelector(".info");
	// infoEl.addEventListener("click", this.openPopup.bind(this), false);

	addPopup(this.el);
};
Student.prototype.showInfo = function(containerEl) {
	var infoEl = this.el.querySelector(".info");
	infoEl.style.transition = "none";
	infoEl.style.display = "block";
	infoEl.style.backgroundColor = this.getRandomColor();
	infoEl.style.opacity = "1";
	console.log("오픈");
};
Student.prototype.getRandomColor = function() {
var bgcArray = 
	[
	'rgb(0, 210, 103)',
	'rgb(11, 110, 232)',
	'rgb(110, 232, 255)',
	'rgb(190, 119, 90)',
	'rgb(255, 111, 65)',
	'rgb(255, 225, 14)'
	];
	var index = Math.floor((Math.random() * bgcArray.length));
	return bgcArray[index];
};

Student.prototype.openPopup = function(e) {
	alert("클릭하면 "+this.info.nameKor+" 학생에 대한 소개창이 뜹니다.");
	console.log("클릭하면 "+this.info.nameKor+" 학생에 대한 소개창이 뜹니다.");

};
Student.prototype.foldInfo = function(containerEl) {
	var infoEl = this.el.querySelector(".info");
	
	infoEl.style.transition = ".2s opacity linear";
	infoEl.style.opacity = "0";
	
	infoEl.addEventListener("transitionend", function(e){
		infoEl.style.display = "none";
		infoEl.style.transition = "";
	}.bind(this), false);
	console.log("클로즈");
};
Student.prototype.template = _.template(document.getElementById("people-template").innerHTML);

function Logo(item) {
	this.info = item;
	this.init();
}
Logo.prototype.init = function() {
	// el 만들기
};

Logo.prototype.appendToContainer = function(containerEl) {
	var elString;
	if(this.info.size === 2) {
		this.info.imgName = "https://raw.githubusercontent.com/KimDahye/NEXTStudentNetwork/master/webapp/public/images/logo.jpg";
		elString = this.template2(this.info);

	} else {
		this.info.imgName = "https://raw.githubusercontent.com/KimDahye/NEXTStudentNetwork/master/webapp/public/images/nextlogo.png";
		elString = this.template1(this.info);
	}
	containerEl.insertAdjacentHTML("beforeend",elString);
};

Logo.prototype.template2 = _.template(document.getElementById("logo-template").innerHTML);
Logo.prototype.template1 = _.template(document.getElementById("logo-small-template").innerHTML);

function App(studentInfos) {
	this.studentInfos = studentInfos;
	this.wrapper = document.querySelector(".wrap");
	
	this.reaizeWrapper();

	// 랜덤하게 로고 딕셔너리를 1칸짜리 두칸짜리를 삽입
	var randomIndex = Math.floor(Math.random()*this.studentInfos.length);
	
	this.studentInfos.splice(randomIndex, 0, {
		isLogo: true,
		size: 1
	});	
	
	var randomIndex = Math.floor(Math.random()*this.studentInfos.length);
	
	
	while(randomIndex%this.col === this.col - 1) {
		randomIndex = Math.floor(Math.random()*this.studentInfos.length);
	}
	
	console.log(randomIndex%this.col);
	this.studentInfos.splice(randomIndex, 0, {
		isLogo: true,
		size: 2
	});
	
	
	for(var i in studentInfos){
		var item = studentInfos[i];
		// 객체의 "isLogo" 가 undefined 가 아니면 로고작업 수행 
		if(item.isLogo != undefined) {
			var logo = new Logo(item);
			logo.appendToContainer(this.wrapper);			
		} else { // 학생이다요
			item.id = ""+i;
			var student = new Student(item);
			student.appendToContainer(this.wrapper);			
		}
	}
	window.addEventListener("resize", this.reaizeWrapper.bind(this),false);
}

App.prototype.reaizeWrapper = function() {
	// 현재 창의 크기에 맞춰 wrapper 의 폭을 단위에 맞추기
	var windowWidth = window.innerWidth;
	// 단위 140 + a
	var unitSize = 152;
	var width = windowWidth;
	this.col = parseInt(parseInt(width)/unitSize);
	width = parseInt(parseInt(width)/unitSize) * unitSize;//- parseInt(parseInt(width)%140);
	
	this.wrapper.style.width = width+"px";	
};