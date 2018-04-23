// NAVIGATION TOGGLE _____________________________________

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

    // highlight landing link on initial page load
    $('a[href="#landing"]').css({"border-bottom": "3px solid red", "padding-bottom": ".3rem"});

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


// NAVIGATION ANIMATIONS _____________________________________

// Keep link active when scrolled to certain range
$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var red_line = {"border-bottom": "3px solid red", "padding-bottom": ".3rem"};
    var no_line = {"border-bottom": "none"};
    var offset = 270;

    var pos_portfolio = $('#portfolio').offset().top - offset;
    var pos_art = $('#art-craft').offset().top - offset;
    var pos_about = $('#about').offset().top - offset;

	$('a[href^="#"]').css(no_line);

    if(scroll >= 0 && scroll < pos_portfolio) {
    	console.log("landing");
        $('a[href="#landing"]').css(red_line);
    }
    else if(scroll >= pos_portfolio && scroll < pos_art ) {
    	console.log("portfolio");
        $('a[href="#portfolio"]').css(red_line);
    }
    else if(scroll >= pos_art && scroll < pos_about ) {
    	console.log("art-craft");
        $('a[href="#art-craft"]').css(red_line);
    }
    else {
    	console.log("about");
        $('a[href="#about"]').css(red_line);
    }
});

// Smooth scroll to target
$(document).on('click', 'a[href^="#"]', function (event) {
    var offset = 100;
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - offset
    }, 500);
});


$(function() { // toggles nav on click
    $(".toggle-nav" ).click(function(event) {
        $("#navigation .toggle").toggle();
    });
});

