$(window).on('hashchange', function() {
	videoModalOn();
});

$(window).on('load', function() {
	if(window.location.hash) {
		videoModalOn();
	} else {
		videoModalOff();
	}
});


function videoModalOn() {
	var hash = window.location.hash;
	console.log('hash:'+hash);	// for debugging
	if(!hash) {
		$(".bi").css({backgroundColor: 'white'});	// for debugging
		videoModalOff();
		return;
	}
	$(".bi").css({backgroundColor: getRandomBGcolor()});	// for debugging

	$("#mask").show();
	var maskZindex = parseInt($("#mask").css('zIndex'));
	$("#videoModal").css('zIndex', maskZindex+1);
	$("#videoModal").show();
	$(".close").click(videoModalOff);

}

function videoModalOff() {
	console.log('off!');
	window.location.href='#';
	$("#videoModal").hide();
	$("#mask").hide();
}