$(document).ready(function() {
  $('.social-icon').hover(function() {
    $(this).effect( 'bounce', { times: 1 }, 'slow');

  });
});


$('.intro-message').hide();
$('.intro-message').fadeIn(7000);

$('.scroll').click(function(event){
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});