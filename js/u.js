$(document).ready(function(e) {
	var hotel_id = parseInt($('#data-hotel-id').attr('data-hotel-id'));
	var ref = encodeURIComponent($('#data-hotel-id').attr('data-ref'));
	if (hotel_id !== 'NaN' && hotel_id > 0) { $('body').attr('data-hotel-id', hotel_id); }
	
    $.getJSON('https://m1p.ru/watch.php?h=' + parseInt($('body').attr('data-hotel-id')) + '&r=' + ref + '&callback=?', function(data){
		$('body').attr('data-u', parseInt(data.u));
		$('#ucode').text(parseInt(data.u));
		$('form').each(function(index, element) {
            $(element).append('<input type="hidden" name="u" value="' + parseInt(data.u) + '" />');
        });
		$.ajax({
			url  : '/u.php?u=' + parseInt(data.u),
			data : '',
			type : 'POST',
			beforeSend : function() {},
			success : function() {}
		});
	});
});

function m1p(e) {
	var ref = encodeURIComponent($('#data-hotel-id').attr('data-ref'));
	if (typeof(e)==='undefined') { var email = ''; } else { var email = e||''; }
	$.getJSON('https://m1p.ru/watch_e.php?h=' + parseInt($('body').attr('data-hotel-id')) + '&e=' + email + '&r=' + ref + '&callback=?', function(data){
		$('body').attr('data-u', data.u);
		$('#ucode').text(data.u);
	});
}

function m2p() {
	var ref = encodeURIComponent($('#data-hotel-id').attr('data-ref'));
	$.getJSON('https://m1p.ru/watch_e2.php?h=' + parseInt($('body').attr('data-hotel-id')) + '&r=' + ref + '&callback=?', function(data){});
}