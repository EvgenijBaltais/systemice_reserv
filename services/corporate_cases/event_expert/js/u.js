$(document).ready(function(e) {

    // var __GET = window.parent.location.search.substring(1).split("&");
    // $('form').each(function(index, element) {
    //     for(var i=0; i<__GET.length; i++) {
    //         var getVar = __GET[i].split("=");
    //         $(element).append('<input type="hidden" name="'+getVar[0]+'" value="'+getVar[1]+'" />');
    //     }
    // });
    var u;
    var hotel_id = '999999';
    var ref = encodeURIComponent($('#data-hotel-id').attr('data-ref'));
    var tmp = 'ded';
    var region = '5';

    // if($.browser.safari)
    // {
    //     var u = $.cookie("u");
    // }



    $('#cookiesHackForm').submit();

    if (hotel_id !== 'NaN' && hotel_id > 0) { $('body').attr('data-hotel-id', hotel_id); }
    // console.log('hotel_id', hotel_id);
    // console.log('data-hotel-id', $('body').attr('data-hotel-id'));
    $.getJSON('https://m1p.ru/watch.php?h=' + parseInt($('body').attr('data-hotel-id')) + '&tmp=' + tmp + '&region=' + region + '&u=' + u + '&r=' + ref + '&callback=?', function(data){
        //console.log(data);

        $('body').attr('data-u', parseInt(data.u));
        $('#ucode').text(parseInt(data.u));

        // if($.browser.safari) {
        //     $.cookie("u", data.u);
        // }
        /*		var cookie = $.cookie("test");
         if(cookie==null)
         {
         console.log("cookie1");
         alert("Внимание! Для корректной работы сайта включите cookie");
         }
         else
         {
         console.log("cookie");

         }*/

        if(data.phone!=0)
        {
            $('.t-bron').each(function(index, element) {
                $(this).html(data.phone);
                $(this).attr('href',data.aphone);
            });
        }

        if(data.phone_c!=0)
        {
            $('.t-corp').each(function(index, element) {
                $(this).html(data.phone_c);
                $(this).attr('href',data.aphone_c);
            });
        }

        // console.log('data.phone', data.phone);
        // console.log('data.u', data.u);

        $('form').each(function(index, element) {
            $(element).append('<input type="hidden" name="u" value="' + parseInt(data.u) + '" />');
        });

        $.ajax({
            url  : '../calltracking/calltracking_set_session.php?u=' + parseInt(data.u),
            data : '',
            type : 'POST',
            beforeSend : function() {},
            success : function() {}
        });
		
		// var url = new URL(location.href);
		// var hash = '';
		// if(url.search.search('=') == 4){
			// hash = url.search.substring(5);
			$.ajax({
				url  : '../calltracking/spy_ded.php?u=' + parseInt(data.u)+'&ref='+location.href,
				data : '',
				type : 'POST',
				beforeSend : function() {},
				success : function() {}
			});
		// }
		// console.log(hash);
	
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