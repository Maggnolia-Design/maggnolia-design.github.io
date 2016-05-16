(function ($) {

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();

	// get all triggers - headers of all 3 slides
	var headers = ["#slide01 header", "#slide02 header", "#slide03 header"];

	// Enable ScrollMagic only for desktop, disable on touch and mobile devices
	if (!Modernizr.touch) {

		// SCENE 1
		// create scenes for each of the headers
		headers.forEach(function (header, index) {
		    
		    // number for highlighting scenes
			var num = index+1;

		    // make scene
		    var headerScene = new ScrollMagic.Scene({
		        triggerElement: header, // trigger CSS animation when header is in the middle of the viewport 
		        offset: -95 // offset triggers the animation 95px earlier than middle of the viewport, adjust to your liking
		    })
		    .setClassToggle('#slide0'+num, 'is-active') // set class to active slide
		    //.addIndicators() // add indicators (requires plugin), use for debugging
		    .addTo(controller);
		});

		// SCENE 2
		// change color of the nav for a light slide
	    var navScene = new ScrollMagic.Scene({
	        triggerElement: '.slide.is-light' // trigger CSS animation when header is in the middle of the viewport
	    })
	    .setClassToggle('nav', 'is-dark') // set class to active slide
	    .addTo(controller);	

	}

}(jQuery));