// NAVIGATION TOGGLE _____________________________________

$(document).ready(function() {

    // run test on initial page load
    checkSize();
	adjHeight();
	shrinking();

    // run test on resize and scroll of the window
    $(window).resize(checkSize, adjHeight);
    $(window).scroll(shrinking);

	$('.exit_back').click(function(){
		parent.history.back();
		return false;
	});

});

//Function to add or remove classes based on css rules
function checkSize(){
	if($(".toggle-nav").css("display") == "block") {
		$(".target").addClass("toggle");
		console.log('hello');
	}

	else {
		$(".target").removeClass("toggle");
	}
};

// set height of piece_page as top value of image_page
function adjHeight(){
	$( '.image_page' ).each(function() {
		var id = this.id;
		var $match = $('.piece_page[class*="'+id+'"]');

		if($match.length){
	        $(this).css('padding-top', $match.outerHeight(true) + 10);
	        return false;
			// $('#'+id+'').css("top", 500);
		}
	});
};

function shrinking() {
	var shrinkTrigger = 70;
	if(window.pageYOffset > shrinkTrigger) {
		$('.piece_page').addClass("shrink");
		$('.image_page').addClass("shrink");
	}
	else {
		$('.piece_page').removeClass("shrink");
		$('.image_page').removeClass("shrink");
	}
};

$(function() { // toggles nav on click
	$(".toggle-nav" ).click(function(event) {
	    $("#navigation .toggle").toggle();
	});
});