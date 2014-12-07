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

	var ytAPIscript = document.createElement('iframe');
	ytAPIscript.src="http://www.youtube.com/embed/"+hash.substr(1);
	ytAPIscript.id="video";
	// ytAPIscript.width=$(window).width()*0.8;
	// ytAPIscript.height=$(window).height()*0.8;
	$("#videoModal").prepend(ytAPIscript);
	resizeVideo();
	$(window).on('resize',resizeVideo);

	$("#mask").show();
	var maskZindex = parseInt($("#mask").css('zIndex'));
	$("#videoModal").css('zIndex', maskZindex+1);
	$("#videoModal").show();
	$(".close").on('click',function(){window.location.href='';});

}

function resizeVideo() {
	console.log('resize');
	$("iframe").attr("width", $(window).width()*0.9);
	$("iframe").attr("height", $(window).height()*0.9);
}

function videoModalOff(event) {
	console.log('@videoModalOff:');
	console.log($(this))
	$(window).off('resize', resizeVideo);
	$("#videoModal").hide();
	$("#mask").hide();
}