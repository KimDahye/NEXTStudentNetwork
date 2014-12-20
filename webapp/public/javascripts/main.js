		LogoIntro.initLogo();
		resizeLogo();
		
		function resizeLogo() {
			var containerWidth = $(window).width();
			var containerHeight = $(window).height();
						
			if(containerWidth < (containerHeight)*(960/456))
				LogoIntro.setScale(containerWidth*.8); // 로고의 가로픽셀 
			else 
				LogoIntro.setScale((containerHeight)*(960/456)*(0.8)); // 로고의 가로픽셀 	
				
			// centerize 
			var element = document.querySelector("#logo .container");
			var style = window.getComputedStyle(element, "");
			var zoom = style.getPropertyValue("zoom");
			var width = style.getPropertyValue("width");
			var height = style.getPropertyValue("height");

   			console.log("real width: "+(parseInt(width)*zoom));
   			var realWidth = (parseInt(width)*zoom);
   			var realHeight = (parseInt(height)*zoom);

 			if(navigator.userAgent.indexOf("Chrome") != -1) {

 			} else {
	 			element.style.marginTop = "-"+(realHeight/2/zoom)+"px";
	 			element.style.marginLeft = "-"+(realWidth/2/zoom)+"px"; 				 			
 			}
		}

		// 3.5 초 후에 축소 시킨다.
		setTimeout(function(){
			var el = document.getElementById("logo")
			// fadeout 시킨 후 화면을 
			el.style.opacity = "1";
			el.style.transform = "scale3d(1,1,1)";
			el.style.transition = ".6s opacity linear, 1s transform ease";
			el.style.opacity = "0";
			el.style.transform = "scale3d(.6,.6, 1)";

			el.addEventListener("transitionend", function(e){
				el.style.display = "none";
				var wapperEl = document.querySelector(".wrap");
				wapperEl.style.transition = "1s opacity ease, 1s transform ease";
				wapperEl.style.opacity = "1";
				
				console.log("래퍼를 나타나게하기"); 
				var wrapperHandlerCache = function(e){
					console.log("래퍼가 나타나면?"); 
					wapperEl.removeEventListener('transitionend', wrapperHandlerCache, false);

					// 랜덤하게 모든 카드들을 나타나게 만든다.
					var itemElList = document.querySelectorAll(".item");
					console.log(itemElList);
	
					[].forEach.call(itemElList, function(itemEl){
						
						var randDelay = Math.random() * 1300;
						console.log(randDelay);
						setTimeout(function(){
							itemEl.style.transition = "1s opacity ease";
							itemEl.style.opacity = "1";		
							itemEl.addEventListener("transitionend", function(e){
								itemEl.style.transition = "none";
							},false);							
						}.bind(this), randDelay);

					});
				}.bind(this);
				
				wapperEl.addEventListener("transitionend", wrapperHandlerCache, false);
			}.bind(this), false);
		}, 4500);
		
		
		$(window).on('resize',function(){
			resizeLogo();
		});
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

$.ajax({ 
	url: "./students", 
	success:function(data){
		var studentInfos = shuffle(data.data);
		app = new App(studentInfos);	
	}
});	
     //	http://localhost:3000/students

