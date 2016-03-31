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
})