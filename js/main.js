if (window.screen.width > 600) {

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

  var tle = gsap.timeline({ repeat: -1, yoyo: true });
  var tls = gsap.timeline({ repeat: -1, yoyo: true });
  tle.fromTo(
    ".Ecaps_Astronaut",
    { y: 50 },
    { duration: 1, y: -100, ease: "power1.inOut" }
  );
  tls.fromTo(
    ".Space_Astronaut",
    { y: 50 },
    { duration: 1, y: -100, ease: "power1.inOut" }
  );

}
else {
  gsap.registerPlugin(ScrollTrigger);
  var tle = gsap.timeline({ repeat: -1, yoyo: true });
  tle.fromTo(
    ".Ecaps_Astronaut",
    { y: 50 },
    { duration: 1, y: -100, ease: "power1.inOut" }
  );
  gsap.fromTo('.g_heading', {y: 25, opacity: 0}, {duration: 1.75, y: 0, opacity: 1, ease: "power1.inOut"});
  gsap.fromTo('.g_subheading', { opacity: .01, y: 15, }, { delay: .5, duration: 1.5, opacity: 1, y: 0, ease: "power1.inOut"});
  gsap.to('.hey', { scrollTrigger: {trigger: '.hey', toggleActions: 'restart none none none'}, delay: .5, duration: 1.5, opacity: 1, y: 0, ease: "power1.inOut" });
}