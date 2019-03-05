// NAVIGATION TOGGLE _____________________________________

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

});

//Function to add or remove classes based on css rules
function checkSize(){
	if($(".toggle-nav").css("display") == "block") {
		$(".target").addClass("toggle");
		console.log('hello');
	}

	else {
		$(".target").removeClass("toggle");
        $(".toggle-nav").removeClass("rotation");
	}
};


// NAVIGATION ANIMATIONS _____________________________________

// Keep link active when scrolled to certain range
$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var red_line = {"width" : "100%"};
    var no_line = {"width" : "0"};
    var offset = 270;

    var pos_portfolio = $('#portfolio').offset().top - offset;
    var pos_resume = $('#resume').offset().top - offset;
    var pos_about = $('#about').offset().top - offset;

    $('a[href^="#"] span').css(no_line);

    if(scroll >= 0 && scroll < pos_portfolio) {
    	console.log("landing");
        $('a[href="#landing"] span').css(red_line);
    }
    else if(scroll >= pos_portfolio && scroll < pos_resume ) {
    	console.log("portfolio");
        $('a[href="#portfolio"] span').css(red_line);
    }
    else if(scroll >= pos_resume && scroll < pos_about ) {
    	console.log("resume");
        $('a[href="#resume"] span').css(red_line);
    }
    else {
    	console.log("about");
        $('a[href="#about"] span').css(red_line);
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

$(function() {
    $(".toggle-nav" ).click(function(event) { // toggles nav on click
        $("#navigation .toggle").toggle();
    });

    $(".toggle-nav" ).click(function(event) { // trigger rotation on click
        $(".plus").toggleClass("rotation");
    });
});

