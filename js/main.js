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
ScrollOut({
  targets: ".Earth_source",
});



gsap.registerPlugin(ScrollTrigger);

gsap.to('#Ecaps_text_anime_1', {ScrollTrigger : "#Ecaps_text_anime_1", opacity: 1, duration: 3, x: 0,});