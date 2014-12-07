$(window).on('load', videoModal).on('hashchange', videoModal);

function videoModal() {
	console.log('@videoModal');

	var hash = window.location.hash;
	console.log('hash:'+hash);

	if(hash) {
		videoModalOn(hash);
	} else {
		videoModalOff();
	}
}

function videoModalOn(hash) {
	insertVideo(hash.substr(1));
	resizeVideo();
	$(window).on('resize',resizeVideo);

	var baseZindex = parseInt($("#videoModal").css('zIndex'));
	// $("#videoModal").css('zIndex', maskZindex+1);
	$("#videoModal").show();
	$(".close").on('click',function(){window.location.href='';});

}

function insertVideo (videoID) {
	var ytAPIscript = document.createElement('iframe');
	ytAPIscript.src="http://www.youtube.com/embed/"+videoID;
	ytAPIscript.id="video";
	$("#videoModal").prepend(ytAPIscript);
}

function resizeVideo() {
	console.log('resize');
	$("iframe").attr("width", $(window).width()*0.9);
	$("iframe").attr("height", $(window).height()*0.9);
}

function videoModalOff(event) {
	console.log('@videoModalOff:');
	console.log($(this));
	$(window).off('resize', resizeVideo);
	$("#videoModal").hide();
}