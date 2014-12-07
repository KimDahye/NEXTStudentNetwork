$(window).on('load', videoModal).on('hashchange', videoModal);

function videoModal() {
	console.log('@videoModal');
	if(window.location.hash) {
		videoModalOn();
	} else {
		videoModalOff();
	}
}

function videoModalOn() {
	var hash = window.location.hash;
	console.log('hash:'+hash);
	if(!hash) {
		console.error('no hash @videoModalOn');
		videoModalOff();
		return;
	}

	$("#mask").show();
	var maskZindex = parseInt($("#mask").css('zIndex'));
	$("#videoModal").css('zIndex', maskZindex+1);
	$("#videoModal").show();
	$(".close").on('click',function(){window.location.href='';});

}

function videoModalOff(event) {
	console.log('@videoModalOff:');
	console.log($(this));
	$("#videoModal").hide();
	$("#mask").hide();
}