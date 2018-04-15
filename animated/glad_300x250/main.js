var complete = function () {
    $("#play").show();
};

var tl = new TimelineMax({paused:true,ease:Power2.easeOut, onComplete: complete})

tl.from(".frame1", .1, {opacity:1})
.from(".hello_st", .2, {opacity:0}, '+=.2')
.from(".bag", .2, {top:-200}, '+=.1')
.from(".best_bag_st", .2, {opacity:0}, '+=.2')
.from(".ever_st", .2, {opacity:0}, '+=.1')
.from(".available", .1, {left:300}, '+=.1')
.from(".package_st", .5, {opacity:0}, '+=.1')
.to(".headline_st", .2, {left:300}, '+=2.8')
.to(".package_st", .4, {opacity:0}, '+=.1')
.to(".base", .4, {opacity:0}, '-=.4')

.to(".frame2", .1, {opacity:1}, 'frame2')
.to(".bag", .2, {scale:1.3, left: 80, top:40}, '-=.2')
.from(".glad", .2, {left:-100}, 'glad')
.from(".force_flex", .2, {left:300}, 'force_flex')
.to(".force_flex", .2, {left:300}, '+=2.8')

.to(".frame3", .1, {opacity:1}, 'frame3')
.from(".rip", .1, {left:300}, '+=.1')
.from(".leak", .1, {left:-200}, '+=.1')
.from(".reinforced", .1, {top:250}, '+=.1')
.to(".bag", .4, {opacity:0}, '+=2.8')
.to(".frame3", .6, {top:300}, '-=.4')

.to(".frame4", .1, {opacity:1}, 'frame4')
.from(".package_end", .2, {opacity:0, scale:3}, '-=.1')
.from(".headline_end", .2, {left:300}, '+=.1')
.from(".cta", .2, {opacity:0}, '+=.1')
.to("#play", .2, {opacity:1}, '+=1')



$(document).ready ( function () {
	$("#play").click(function() {
		$("#play").hide();
	    tl.play();
	});
});
