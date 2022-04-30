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


gsap.registerPlugin(ScrollTrigger);

gsap.to('.Earth_source', {scrollTrigger: {trigger: '.Earth_source', toggleActions: "restart none none none"}, duration: 1, delay: 0.25, opacity: 1});