// NAVIGATION TOGGLE _____________________________________

$(document).ready(function() {
    // run test on initial page load
    checkSize();
	adjHeight();

    // run test on resize of the window
    $(window).resize(checkSize, adjHeight);

	$('.grid').masonry({
	  // options
	  itemSelector: '.grid-item',
	  columnWidth: 30
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
	        $(this).css('top', $match.outerHeight(true) - 18);
	        return false;
			// $('#'+id+'').css("top", 500);
		}
	});
};

$(function() { // toggles nav on click
	$(".toggle-nav" ).click(function(event) {
	    $("#navigation .toggle").toggle();
	});
});
