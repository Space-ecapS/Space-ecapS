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

gsap.to(".Ecaps_text_anime_1", { scrollTrigger: { trigger: '.Ecaps_text_anime_1', toggleActions: "restart none none none" }, x: "0px", opacity: 1,duration: 1 });
gsap.to(".Ecaps_text_anime_2", { scrollTrigger: { trigger: '.Ecaps_text_anime_2', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to(".Ecaps_text_anime_3", { scrollTrigger: { trigger: '.Ecaps_text_anime_3', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to(".Ecaps_text_anime_4", { scrollTrigger: { trigger: '.Ecaps_text_anime_4', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to(".Ecaps_text_anime_5", { scrollTrigger: { trigger: '.Ecaps_text_anime_5', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to(".Ecaps_text_anime_6", { scrollTrigger: { trigger: '.Ecaps_text_anime_6', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to(".Ecaps_text_anime_7", { scrollTrigger: { trigger: '.Ecaps_text_anime_7', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to(".Ecaps_text_anime_8", { scrollTrigger: { trigger: '.Ecaps_text_anime_8', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to(".Ecaps_text_anime_9", { scrollTrigger: { trigger: '.Ecaps_text_anime_9', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
gsap.to('.Space_text_anime_1', { scrollTrigger: { trigger: '.Space_text_anime_1', toggleActions: "restart none none none" }, x: "0px", opacity: 1, duration: 1 });
