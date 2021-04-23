$(document).ready(() => {

	$('.navbar-toggler').on('click', () => {
		$('.mask').addClass('d-block');
		$('.mask').removeClass('d-none');
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
		loop:false,
		margin:20,
		nav:true,
		dots:false,
		responsiveClass:true,
		autoHeight: false,
		responsive:{
			0:{
				items:2,
				dots:true,
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

	$('.slider3Img').owlCarousel({
		loop:false,
		margin:20,
		nav:true,
		dots:false,
		responsiveClass:true,
		autoHeight: false,
		responsive:{
			0:{
				items:1,
				dots:true,
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	
	$('.slider5img').owlCarousel({
		loop:false,
		margin:20,
		nav:true,
		dots:false,
		responsiveClass:true,
		autoHeight: false,
		responsive:{
			0:{
				items:2,
				dots:true,
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

	
	$('.slider4img').owlCarousel({
		loop:false,
		margin:20,
		nav:true,
		dots:false,
		responsiveClass:true,
		autoHeight: false,
		responsive:{
			0:{
				items:2,
				dots:true,
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	})

})