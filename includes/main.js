console.log("Hi fellow developer, welcome to my portfolio! You can offer or tip me a coding internship starting from January 2017 any time.");

$(document).ready(function() {
  $('.social-icon').hover(function() {
    $(this).effect( 'bounce', { times: 1 }, 'slow');

  });
});


//$('.intro-message').hide();
$('.intro-message').fadeIn(7000);

$('.scroll').click(function(event){
	event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1250);
    return false;
});