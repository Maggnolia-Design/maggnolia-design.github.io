window.onload = function () {
   $("#portfolio-page").show();
};

$(document).ready(function(){


    $("#about-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $(".see-more").hide();
     $("#about-page").show();
     $("li").removeClass("active");
     $("#about-btn").addClass("active");
   });

   $("#portfolio-btn").click(function(event){
    //Your actions here
    $(".pages").hide();
    $("#portfolio-page").show();
    $("li").removeClass("active");
    $("#portfolio-btn").addClass("active");
   });

 });
