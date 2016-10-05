$(document).ready(function(){

    $("#home-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#home-page").show();
     $("li").removeClass("active");
     $("#home-btn").addClass("active");
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
     $("li").removeClass("active");
     $("#about-btn").addClass("active");
   });

   $("#contact-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#contact-page").show();
     $("li").removeClass("active");
     $("#contact-btn").addClass("active");
   });

   // // PORTFOLIO SECTION
   // $("#portfolio-btn").click(function(event){
   //  //Your actions here
   //  $(".pages").hide();
   //  $("#portfolio-page").show();
   //  $("li").removeClass("active");
   //  $("#portfolio-btn").addClass("active");
   // });

   $("#classwork-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#classwork-page").show();
     $("li").removeClass("active");
     $("#portfolio-btn").addClass("active");
   });

   $("#student-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#student-page").show();
     $("li").removeClass("active");
     $("#portfolio-btn").addClass("active");
   });

   $("#chinese-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#chinese-page").show();
     $("li").removeClass("active");
     $("#portfolio-btn").addClass("active");
   });

 });
