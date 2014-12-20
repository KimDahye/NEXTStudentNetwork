var popuplink = 'pages/popup.html';


$(document).ready(function(){
//--------------------------------------------------------------------open popup
	
	Student.prototype.openPopup = function(e){
		$(document.body).addClass('no_scroll');
		$('#mask, #popup').show();
		 masking ();
		console.log($(this)[0].el.id + " popup popped");
		$(".popup2").html(' ').load(popuplink + ' div#default-popup');

		$(".popup1").html(' ').load(popuplink + ' div#' + ($(this)[0].el.id) + '-popup1', function( response, status, xhr ) {
			if ( $(".popup1").text() == "" ) {
				$(".popup1").html(' ').load(popuplink + ' div#default-popup', function() {
					popup_pos();
				});
			}
			$('#carousel-popup').carousel(0);
			$('#carousel-popup').carousel('cycle');
			popup_pos();
		});
		$(".popup2").html(' ').load(popuplink + ' div#' + ($(this)[0].el.id) + '-popup2', function( response, status, xhr ) {
			if ( $(".popup2").text() == "" ) {
				$(".popup2").html(' ').load(popuplink + ' div#default-popup');
			}
		});
		$(".popup3").html(' ').load(popuplink + ' div#' + ($(this)[0].el.id) + '-popup3', function( response, status, xhr ) {
			if ( $(".popup3").text() == "" ) {
				$(".popup3").html(' ').load(popuplink + ' div#default-popup');
			}
		});
	};

	$('#carousel-popup').on('slide.bs.carousel', function () {
		console.log("carousel slide occured");
		popup_pos();
	});

	$('#carousel-popup').on('slid.bs.carousel', function () {
		console.log("carousel slide finished");
		popup_pos();
		console.log("popup position update");
	});

//--------------------------------------------------------------------close popup
	$('#mask, a.close').click (function(){
		$("#popup, .video .video-wrapper").hide();
		$("#mask").hide();
		$('body').removeClass('no_scroll');
		$('html, body').unbind('touchmove');
		$('.item').removeClass('click_one');
		$(".video").html(' ');
		$('.info').fadeOut();
		$('#popup').css('top', '0px' );
		$('#carousel-popup').carousel('pause');
		document.location.hash="";
	});

//--------------------------------------------------------------------container center
	container_width ();
	logo_pos ();

	$(window).resize(resizing);
	$('#carousel-popup').carousel('pause');

	$('#carousel-popup').carousel({
  		interval: 1000
	});
});

function video_fit() {
	$(".video div.video-wrapper").fitVids();
}

function resizing () {
		masking();
		container_width ();
		logo_pos ();
		popup_pos();
		$('.logo').detach().prependTo('#container');
}


function popup_pos () {
	var win_h = $(window).height();
	var wh = $('#popup').height();
	var sum = Math.floor(Math.abs((win_h-wh)/2));
	$('#popup').css('top', sum );
}

function logo_pos () {
	if (document.body.clientWidth > '610') {
		var ww = Math.floor(($(window).width())/194);
		var logo = ($('.logo').index()+1);
		if(logo == ww || logo == ww*2 || logo == ww*3 || logo == ww*4) {
			$('.logo').detach().prependTo('#container');
		}
	}
	
	if (document.body.clientWidth < '610') {
		var logo = ($('.logo').index()+1);
		if(logo == 3 || logo == 6 || logo == 9 || logo == 12 || logo == 15 || logo == 18 || logo == 21 || logo == 24) {
			$('.logo').detach().prependTo('#container');
		}
	}
	
}

function masking () {
}

function container_width () {
	if ($(window).width() >= 1024) {
		var ww = Math.floor(($(window).width())/194)*194;
		$("#container").css('width', ww);
	} else {
		$("#container").css('width', "auto");
	};
}

function no_touch (){
	if($('body').hasClass('no_scroll')) {
		$('html, body').on('touchmove', function(e){ 
			e.preventDefault(); 
		});
	} else {
		$('html, body').unbind('touchmove');
	}
}
