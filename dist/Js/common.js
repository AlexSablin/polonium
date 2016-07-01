$(function() {
	
	
	$('.reviews__bg').parallax("50%", -0.1, true, 0.3);
	$('.contact-v2__bg').parallax("50%", -0.1, true, 0.3);
	
	$('.reviews__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
  		slidesToScroll: 1
	});
	
	$('#p1').mouseover(function() {
		$('#p1').addClass("active");
		$('#p1').removeClass("grayscale");		
		$('#p1').mouseout(function() {
			$('#p1').addClass("grayscale");
			$('#p1').removeClass("active");
		});
	});
	$('#p2').mouseover(function() {
		$('#p2').addClass("active");
		$('#p2').removeClass("grayscale");		
		$('#p2').mouseout(function() {
			$('#p2').addClass("grayscale");
			$('#p2').removeClass("active");
		});
	});
	$('#p3').mouseover(function() {
		$('#p3').addClass("active");
		$('#p3').removeClass("grayscale");		
		$('#p3').mouseout(function() {
			$('#p3').addClass("grayscale");
			$('#p3').removeClass("active");
		});
	});
	$('#p4').mouseover(function() {
		$('#p4').addClass("active");
		$('#p4').removeClass("grayscale");		
		$('#p4').mouseout(function() {
			$('#p4').addClass("grayscale");
			$('#p4').removeClass("active");
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
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
	//transformicons.add('.tcon')
});
