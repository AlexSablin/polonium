$(function() {


	$('.reviews__bg').parallax("50%", -0.1, true, 0.3);
	$('.contact-v2__bg').parallax("50%", -0.1, true, 0.3);

	$('.reviews-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
  		slidesToScroll: 1,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		    	arrows: false
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		    	arrows: false
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		    	arrows: false
		      }
		    }
		]
	});

	$('.person').mouseover(function() {
		$(this).addClass("active");
		$(this).removeClass("grayscale");
		$(this).mouseout(function() {
			$(this).addClass("grayscale");
			$(this).removeClass("active");
		});
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//transformicons.add('.tcon')
});
