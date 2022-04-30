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


gsap.regsingePlugin(ScrollTrigger);

gsap.to('.Earth_source ')