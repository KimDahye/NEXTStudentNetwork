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
	ytAPIscript.width=$(window).width()*0.8;
	ytAPIscript.height=$(window).height()*0.8;
	$("#videoModal").prepend(ytAPIscript);

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