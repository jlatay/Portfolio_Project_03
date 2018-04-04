// code for page scrolling animation
// Reference site: https://paulund.co.uk/smooth-scrolling-to-internal-links-with-jquery
// How to add Jquery: https://www.w3schools.com/jquery/jquery_get_started.asp
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//  $('html, body').stop().animate({
//      'scrollTop': $target.offset().top
// }, 900, 'swing');
// Code above is if you don't want to show the file pathing
