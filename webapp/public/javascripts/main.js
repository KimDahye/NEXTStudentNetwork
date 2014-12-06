$(".card").hover(function() {
    //alert("hi");
    $(this).find(".info").css({display:'block', backgroundColor:getRandomBGcolor()});
}, function() {
    //alert("hello");
    $(this).find(".info").css({display:'none'});
});


function getRandomBGcolor() {
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
}