window.onload = function () {
   $("#home-page").show();
};

$(document).ready(function(){

    $("#home-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $(".see-more").hide();
     $("#home-page").show();
     $("li").removeClass("active");
     $("#home-btn").addClass("active");
   });

    $("#og-home-button").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $(".see-more").hide();
     $("#home-page").show();
     $("li").removeClass("active");
     $("#home-btn").addClass("active");
   });

    $("#about-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $(".see-more").hide();
     $("#about-page").show();
     $("li").removeClass("active");
     $("#about-btn").addClass("active");
   });

   $("#contact-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $(".see-more").hide();
     $("#contact-page").show();
     $("li").removeClass("active");
     $("#contact-btn").addClass("active");
   });

   $("#portfolio-btn").click(function(event){
    //Your actions here
    $(".pages").hide();
    $("#portfolio-page").show();
    $("li").removeClass("active");
    $("#portfolio-btn").addClass("active");
   });

 });
