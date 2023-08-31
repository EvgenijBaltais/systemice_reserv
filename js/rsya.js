$(document).ready(function(e) {
    var from = getUrlVar('from');
	var fromcookie = $.cookie('fromcookie');
	if (from == 'banner' || fromcookie == 'banner') {
		$.cookie('fromflag', 'banner', { expires: 31, path: '/' });
		$('span.phonewrap').text('+7 (495) 995-58-97');
	}
});
function getUrlVar(key){
	var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
	return result && unescape(result[1]) || ""; 
}