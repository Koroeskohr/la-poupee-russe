$(document).ready(function() {
  var menuOpen = false;

  $("#menu-trigger").click(function() {
    if (!menuOpen) {
      $("header nav").animate({
        top: 0
      }, 500);
      menuOpen = true;
    }
    else {
      $("header nav").animate({
        top: '-100vh'
      }, 500);
      menuOpen = false;
    }
  })

  // add class to p
  $(".post-content p:not(img)")
    .addClass('col-sm-8 col-sm-offset-2 col-xs-12 col-xl-6 col-xl-offset-3');

  $(".post-content p:has(img)").removeClass('col-sm-8 col-sm-offset-2 col-xs-12 col-xl-6 col-xl-offset-3');
})