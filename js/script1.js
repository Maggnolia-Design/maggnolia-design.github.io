$(document).ready(function(){

    $("#home-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#home-page").show();
   });

    $("#og-home-button").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#home-page").show();
   });

    $("#about-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#about-page").show();
   });

   $("#contact-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#contact-page").show();
   });

   // PORTFOLIO SECTION
   $("#portfolio-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#portfolio-page").show();
     // $(".nav-link").removeClass("active");
     // $("#portfolio-btn").addClass("active")
   });

   $("#classwork-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#classwork-page").show();
   });

   $("#student-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#student-page").show();
   });

   $("#chinese-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#chinese-page").show();
   });

 });
