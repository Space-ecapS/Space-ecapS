


var winHeight = $(window).innerHeight();
$(document).ready(function () {
  $(".Basic_setup").height(winHeight);
  $("body").height(winHeight * $(".Basic_setup").length);
});
window.addEventListener("resize", function (event) {
  $(".Basic_setup").height($(window).innerHeight());
});
$(window).on("scroll", function () {
  $(".Space").css("bottom", $(window).scrollTop() * -1);
});


var tle = gsap.timeline({repeat: -1, yoyo: true});
var tls = gsap.timeline({repeat: -1, yoyo: true});

tle.fromTo('.Ecaps_Astronaut', {y:50}, {duration: 1, y: -100, ease: "power1.inOut"});
tls.fromTo('.Space_Astronaut', {y: 50}, {duration: 1, y: -100, ease: "power1.inOut"});