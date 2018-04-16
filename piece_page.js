$(document).ready(function() {

	$( '.image_page' ).each(function() {
		var id = this.id;
		var $match = $('.piece_page[class*="'+id+'"]');

		if($match.length){
	        $(this).css('top', $match.outerHeight(true) - 15);
	        return false;
			// $('#'+id+'').css("top", 500);
		}
	});

});

// $match.height()