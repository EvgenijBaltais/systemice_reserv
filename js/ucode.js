$(document).ready(function(e) {
	var ucode = $('#ucode').text();
	var ref = encodeURIComponent($('#data-hotel-id').attr('data-ref'));
	$.getJSON('https://m1p.ru/watch_m.php?ucode=' + ucode + '&r=' + ref + '&callback=?', function(data){
	});
});