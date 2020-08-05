// @codekit-prepend "fancyBox.js";
// @codekit-prepend "tinySlider.js";
// @codekit-prepend "scroll-trigger/scroll-trigger-global.js";
// @codekit-prepend "scroll-trigger/header-color.js";
// @codekit-prepend "scroll-trigger/alarm-clock.js";
 // @codekit-prepend "scroll-trigger/hero-paralax.js";
 // @codekit-prepend "scroll-trigger/logos.js";
 // @codekit-prepend "scroll-trigger/weather-icons.js";
// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";
// @codekit-prepend "main-nav/nav-scroll.js";
// @codekit-prepend "main-nav/main-nav-click.js";

gsap.registerPlugin( ScrollTrigger);

$( document ).ready(function() {

   $("#show-form-btn").on("click", function(){
      //console.log("button clicked");

      // hide contact-button-section
      $("#contact-button-section").hide();

      // show form container
      $("#form-container").show();

   });

});

