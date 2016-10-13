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
    $(".portfolio-labels").hide();
    $("#classwork-page").show();
    $("#student-page").show();
    $("#chinese-page").show();
    $("#interactive-page").show();
    $("#all-label").show();
    $("#see-more").show();
    $("li").removeClass("active");
    $("#portfolio-btn").addClass("active");
   });

   $("#classwork-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $("#classwork-page").show();
     $("#classwork-label").show();
     $("li").removeClass("active");
     $("#portfolio-btn").addClass("active");
   });

   $("#student-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $("#student-page").show();
     $("#student-label").show();
     $("li").removeClass("active");
     $("#portfolio-btn").addClass("active");
   });

   $("#chinese-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $("#chinese-page").show();
     $("#chinese-label").show();
     $("li").removeClass("active");
     $("#portfolio-btn").addClass("active");
   });

   $("#interactive-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $(".portfolio-labels").hide();
     $("#interactive-page").show();
     $("#interactive-label").show();
     $("li").removeClass("active");
     $("#portfolio-btn").addClass("active");
   });

 });
