$(document).ready(function($) {

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('#page-top').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });
});