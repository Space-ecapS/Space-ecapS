if (window.screen.width > 600) {
    // making the parallel universe effect
    var winHeight = $(window).innerHeight();
    $(document).ready(function() {
        $(".Basic_setup").height(winHeight);
        $("body").height(winHeight * $(".Basic_setup").length);
    });
    window.addEventListener("resize", function(event) {
        $(".Basic_setup").height($(window).innerHeight());
    });
    $(window).on("scroll", function() {
        $(".Space").css("bottom", $(window).scrollTop() * -1);
    });
    // Using gsap to animate the moons
    var tle = gsap.timeline({ repeat: -1, yoyo: true });
    var tls = gsap.timeline({ repeat: -1, yoyo: true });
    var tlt = gsap.timeline({ repeat: -1 });
    var tl = gsap.timeline({ repeat: -1 });
    tle.fromTo(
        ".Ecaps_Astronaut", { y: 50 }, { duration: 2.5, y: -100, ease: "power1.inOut" }
    );
    tls.fromTo(
        ".Space_Astronaut", { y: 50 }, { duration: 2.5, y: -100, ease: "power1.inOut" }
    );
    // Using gsap to animate the earths
    tlt.fromTo(
        ".Earth", { rotate: 0 }, { duration: 12, rotate: 360, ease: "none" }
    );
    tl.fromTo(
        ".Htrae", { rotate: 0 }, { duration: 12, rotate: -360, ease: "none" }
    );
} else {
    // Using gsap to animate the moon
    var tle = gsap.timeline({ repeat: -1, yoyo: true });
    tle.fromTo(
        ".Ecaps_Astronaut", { y: 100 }, { duration: 3, y: -100, ease: "power1.inOut" }
    );
    var tlt = gsap.timeline({ repeat: -1 });
    tlt.fromTo(
        ".Earth", { rotate: 0 }, { duration: 12, rotate: 360, ease: "none" }
    );
}