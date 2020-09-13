jQuery( document ).ready(function() {
	initSlickSlider();
	initBurgerMenu();
});



function initBurgerMenu() {
	jQuery('.burger').on('click', function(e){
		e.preventDefault()
		jQuery(this).toggleClass('open');
		jQuery('body').toggleClass('burger-active');
	});
}

$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step:function(now){
			$(this).text(Math.ceil(now));
		}
	});
});

function initSlickSlider() {
	jQuery('.slider-block').slick({
	infinite: true,
	speed: 800,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	easing: 'ease',
	dots: true,
	arrows: true
})};


jQuery(document).ready(function($){  
	$('#slow_nav  ul li').hover(
				function () {
					$('ul', this).stop().slideDown(400);
				}, 
				function () {
					$('ul', this).stop().slideUp(400);            
				}
			);
	});

