$(document).ready(function(){

   $("#portfolio-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#portfolio-page").show();
     $(".nav-link").removeClass("active");
     $("#portfolio-btn").addClass("active")
   });

   $("#contact-btn").click(function(event){
     //Your actions here
     $(".pages").hide();
     $("#contact-page").show();
   });

 });
