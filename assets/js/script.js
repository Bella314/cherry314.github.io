/* -----------------------------------------------------------------------------


File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         Suelo

-------------------------------------------------------------------------------- */
(function() {

	"use strict";

	var Puppin = {
		init: function() {
			this.Basic.init();  
		},

		Basic: {
			init: function() {

				this.preloader();
				this.menuItem();
				this.workTab();
				this.videoPopup();
				this.scrollTop();
				this.serviceSlide();
				this.counterUp();
				this.testimonialSlide();
				this.partnerSlide();
				this.blogGrid();
				this.portfolioSlide();

			},
/* Start Of Preloader
================================================*/
preloader: function (){

	$(window).on('load', function(){
		$('#preloader').fadeOut('slow',function(){$(this).remove();});
	});
},
/* End Of Preloader
================================================*/






/* Start of menu bar
================================================*/

menuItem: function (){
	$('#menu li:has(ul)').children('ul').hide();
	$('#menu li:has(ul)').find('a').on('click', function() {

		var parent = $(this).parent(),
		submenu = $(this).next('ul');

		if (submenu.is(':visible')) {
			$(this).parent().find('ul').slideUp(300);
		}

		if (submenu.is(':hidden')) {
			parent.siblings().find('ul').slideUp(300);
			parent.find('ul:first').slideDown(300);
		}

		if (parent.find('ul').children().length == 0) {
			return true;
		} else {
			return false;
		}

	});

	$('#menu-burger').on('click', function() {
		if (!$('#poppin-nav').hasClass('open')) {
			toggle_nav(true);
		} else {
			toggle_nav(false);
		}
	});

	$('#nav-off, #menu-overlay').on('click', function() {
		toggle_nav(false);
	});

	function toggle_nav(lolly) {
		if (lolly === true) {
			$('#poppin-nav, #menu-overlay').addClass('nav-on');
		} else {
			$('#poppin-nav, #menu-overlay').removeClass('nav-on');

			setTimeout(function() {
				$('#menu li.has-submenu a').next('.submenu').slideUp(300);
			}, 500);
		}
	}

	$('.hamburger').on('click', function() {
		$(this).toggleClass('is-active');
		$(this).next().toggleClass('nav-show')
	});
	$('.menu-button a').on('click', function() {
		$('.overlay').fadeToggle(300);
		$(this).toggleClass('btn-open').toggleClass('btn-close');
	});
	$('.overlay').on('click', function() {
		$('.menu-button').fadeToggle(300);
		$('.button a').toggleClass('btn-open').toggleClass('btn-close');
		open = false;
	});

	$(".button a").on('click', function() {
		$(".overlay").fadeToggle(200);
		$(this).toggleClass("btn-open").toggleClass("btn-close");
	});

	$(".overlay").on("click", function() {
		$(".overlay").fadeToggle(200);
		$(".button a").toggleClass("btn-open").toggleClass("btn-close");
		open = false;
	});
},

/* End  of menu bar
================================================*/


/* Start Of Isotope
================================================*/
workTab: function (){
	$(window).on('load', function(){
		/* activate jquery isotope */
		var $container = $('#posts').isotope({
			itemSelector : '.item',
			isFitWidth: true
		});

		$container.isotope({ filter: '*' });

    // filter items on button click
    $('#filters').on( 'click', 'button', function() {
    	var filterValue = $(this).attr('data-filter');
    	$container.isotope({ filter: filterValue });
    });
    $('.tab-button').on("click", function() {

    //console.log("Clicked");
    $('.tab-button.active').removeClass('active');
    $(this).addClass('active');
});
    var $grid = $('#posts').isotope({
    	itemSelector: '.item',
    	percentPosition: true,
    });
});
},
/* End Of Isotope
================================================*/


/* - Start of popup
================================================*/
videoPopup: function (){
	$('.popup').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

},
/* - End of popup
================================================*/



/* - Start of Scroll to top
================================================*/
scrollTop: function (){
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('#scrolluptop').fadeIn();
		} else {
			$('#scrolluptop').fadeOut();
		}
	});

	$('#scrolluptop').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

},

/* - End of Scroll to top
================================================*/




/* - Start of service slide
================================================*/

portfolioSlide: function (){
	$('.service-slide-content').owlCarousel({
		margin:40,
		responsiveClass:true,
		pagination: false,
		autoplay: false,
		nav:true,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:1,
			},
			600:{
				items:1,
			},
			700:{
				items:2,
			},
			1000:{
				items:3,

			}
		},
	})
},
/* - End of service slide
================================================*/




/* Start Of counter-up
================================================*/
counterUp: function (){
	$('.count').counterUp({
		delay: 10,
		time: 2000
	});

},
/* - End Of counter-up
================================================*/



/* - Start of Testimonial slide
================================================*/

testimonialSlide: function (){
	$('.testimonial-item').owlCarousel({
		margin:0,
		responsiveClass:true,
		pagination: true,
		autoplay: false,
		nav:false,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:1,
			},
			600:{
				items:1,
			},
			700:{
				items:1,
			},
			1000:{
				items:1,

			}
		},
	})
},
/* - End of Testimonial slide
================================================*/



/* - Start of Testimonial slide
================================================*/

partnerSlide: function (){
	$('.partner-logo-slide').owlCarousel({
		margin:100,
		responsiveClass:true,
		pagination: false,
		autoplay: false,
		nav:false,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:2,
			},
			600:{
				items:3,
			},
			700:{
				items:4,
			},
			1000:{
				items:5,

			}
		},
	})
},
/* - End of Testimonial slide
================================================*/



/* Start Of counter-up
================================================*/
blogGrid: function (){
	$('.blog-main-content').masonry({
  // options
  itemSelector: '.blog-main-text-pic',
  // columnWidth: 200,
});

},
/* - End Of counter-up
================================================*/


/* - Start of service slide
================================================*/

serviceSlide: function (){
	$('.portfolio-single-slide-content').owlCarousel({
		margin:40,
		responsiveClass:true,
		pagination: true,
		autoplay: false,
		nav:false,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1,
			},
			400:{
				items:1,
			},
			600:{
				items:1,
			},
			700:{
				items:1,
			},
			1000:{
				items:1,

			}
		},
	})
},
/* - End of service slide
================================================*/

}
}
$(document).ready(function (){
	Puppin.init();
});

})();