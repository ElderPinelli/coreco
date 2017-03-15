jQuery(function($){

'use strict';



    // ----------------------------------------------
    // Preloader
    // ----------------------------------------------
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	}());


	// ----------------------------------------------
	// Fechar menu mobile ao clicar
	// ----------------------------------------------
	$(function() {
        $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
            $('.navbar-toggle:visible').click();
        });
    });

	$(function() {
		$(".animate-fadeInUp").waypoint(function() {
    		$(".animate-fadeInUp").addClass("wow fadeInUp animated");
		}, { offset: '100%'});

		$(".animate-fadeInDown").waypoint(function() {
    		$(".animate-fadeInDown").addClass("wow fadeInDown animated");
		}, { offset: '100%'});

		$(".animate-fadeInRight").waypoint(function() {
    		$(".animate-fadeInRight").addClass("wow fadeInRight animated");
		}, { offset: '100%'});

		$(".animate-fadeInLeft").waypoint(function() {
    		$(".animate-fadeInLeft").addClass("wow fadeInLeft animated");
		}, { offset: '100%'});
	});


  	// -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('li a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top -79
            }, 1000);
            e.preventDefault();
        });
    }());


    // ----------------------------------------------
    // Owl Carousel
    // ----------------------------------------------
	(function () {

		$(".st-testimonials").owlCarousel({
		singleItem:true,
		lazyLoad : true,
		pagination:false,
		navigation : false,
		autoPlay: true,
		});

	}());


    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());

});
