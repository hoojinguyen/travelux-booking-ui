$(document).ready(() => {
	$('#bookRoomOther').click(() => {
		console.log('', $('.custom-control-input').is(':checked'));
		if ($('.custom-control-input').is(':checked')) {
			$('#for-friend-form').removeClass('d-none');
			$('#for-friend-form').addClass('d-block');
		} else {
			$('#for-friend-form').removeClass('d-block');
			$('#for-friend-form').addClass('d-none');
		}
	});

	$('#mobileBill').click(function () {
		$('.mobile-bill').removeClass('d-none');
		$('.mobile-bill').addClass('d-block');
		$('#closeBill').removeClass('d-none');
		$('#closeBill').addClass('d-block');
		$('#openBill').removeClass('d-flex');
		$('#openBill').addClass('d-none');
	});

	$('#closeBill').click(function () {
		$('.mobile-bill').removeClass('d-block');
		$('.mobile-bill').addClass('d-none');
		$('#closeBill').removeClass('d-block');
		$('#closeBill').addClass('d-none');
		$('#openBill').removeClass('d-none');
		$('#openBill').addClass('d-flex');
	})
});	