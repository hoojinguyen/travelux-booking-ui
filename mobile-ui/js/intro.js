$(document).ready(function () {
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		loop: false,
		margin: 0,
		padding: 0,
		items: 1,
		dots: true,
		animateIn: 'zoomIn',
		animateOut: 'zoomOut',

	});
	owl.on('changed.owl.carousel', function (event) {
		if ((event.page.count - 1) == event.page.index) {
			$('.next-btn').html("Let's begin")
			$('.next-btn').prop('data-function', 'begin')
		} else {
			$('.next-btn').prop('data-function', 'next')
			$('.next-btn').html("Next")
		}
	})

	$('.next-btn').click(function () {
		if ($(this).prop('data-function') == 'begin') {
			location.href = 'homepage.html'
		}
		owl.trigger('next.owl.carousel');
	})
});