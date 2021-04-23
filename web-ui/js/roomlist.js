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

	$('.popular-area div').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		infinite: false,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 998,
				settings: 'unslick',
			}
		]
	});

	$(window).on('resize', function () {
		$('.popular-area div').slick('resize');
	});
	$('input[name="dates"]').daterangepicker();


	$('.search-suggest').hide();
	$('#search').click(function () {
		$('.search-suggest').toggle();
	});
});
