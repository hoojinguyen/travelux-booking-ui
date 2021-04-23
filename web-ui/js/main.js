$(document).ready(() => {

	$('.navbar-toggler').on('click', () => {
		$('.mask').removeClass('d-none');
		$('.mask').addClass('d-block');
		$('.mask').on('click', () => {
			$('.btn-close').click();
			$('.mask').removeClass('d-block');
			$('.mask').addClass('d-none');
		})
	});

	$('.btn-close').on('click', () => {
		$('.mask').removeClass('d-block');
		$('.mask').addClass('d-none');
	});

	$('.sliderCity').owlCarousel({
		loop: false,
		margin: 20,
		nav: true,
		dots: false,
		responsiveClass: true,
		autoHeight: false,
		responsive: {
			0: {
				items: 2,
				dots: true,
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})

	$('.slider3Img').owlCarousel({
		loop: false,
		margin: 20,
		nav: true,
		dots: false,
		responsiveClass: true,
		autoHeight: false,
		responsive: {
			0: {
				items: 1,
				dots: true,
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})


	$('.slider5img').owlCarousel({
		loop: false,
		margin: 20,
		nav: true,
		dots: false,
		responsiveClass: true,
		autoHeight: false,
		responsive: {
			0: {
				items: 2,
				dots: true,
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})


	$('.slider4img').owlCarousel({
		loop: false,
		margin: 20,
		nav: true,
		dots: false,
		responsiveClass: true,
		autoHeight: false,
		responsive: {
			0: {
				items: 2,
				dots: true,
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	})

	$('.slider-detail-room').owlCarousel({
		loop: false,
		autoplay: true,
		margin: 5,
		nav: false,
		dots: true,
		responsiveClass: true,
		autoHeight: false,
		nav: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	$('input[name="dates"]').daterangepicker();


	$('.search-suggest').hide();
	$('#search').click(function () {
		$('.search-suggest').toggle();
	});

})