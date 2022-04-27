gsap.to('.E_anime_1', {duration: .75, opacity: 1, x: 0});
gsap.to('.E_anime_2', {duration: .75, opacity: 1, x: 0});
gsap.to('.E_anime_3', {duration: .75, opacity: 1, x: 0});
gsap.to('.E_anime_4', {duration: .75, opacity: 1, x: 0});
gsap.to('.E_anime_5', {duration: .75, opacity: 1, x: 0});
gsap.to('.E_anime_6', {duration: .75, opacity: 1, x: 0});
gsap.to('.E_anime_7', {duration: .75, opacity: 1, x: 0});




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




