$(document).ready(function(e) {
    var u;

    var hotel_id = parseInt($('body').attr('data-knight-domain-id')); //менять тут id отеля
    if(isNaN(hotel_id)){
        hotel_id = parseInt($('body').attr('data-knight-id'));
    }
    if(isNaN(hotel_id)){
        hotel_id = parseInt($('body').attr('data-hotel-id'));
    }

    var ref = encodeURIComponent($('#data-hotel-id').attr('data-ref'));
    var tmp = 'other';
    var region = $('body').attr('data-region'); //1 - РФ, 2 - ПДМСК, это если нет var top = $('body').attr('data-top') -> это строка ниже
    var top = $('body').attr('data-top');//если есть пул номеров, если нет, оставить пустоту, будет искать по var region = ;
    if($.browser.safari) {
        u = $.cookie("u");
    }

    if (hotel_id !== 'NaN' && hotel_id > 0) { $('body').attr('data-hotel-id', hotel_id); }
    // console.log('hotel_id', hotel_id);
    // console.log('data-hotel-id', $('body').attr('data-hotel-id'));
    $.getJSON('https://m1p.ru/watch.php?h=' + parseInt($('body').attr('data-hotel-id')) + '&top=' + top + '&tmp=' + tmp + '&region=' + region + '&u=' + u + '&r=' + ref + '&callback=?', function(data){

        $('body').attr('data-u', parseInt(data.u));
        $('#ucode').text(parseInt(data.u));

        if(window.ym !== void 0){
            ym(49823257, 'setUserID', data.u);
        } else if(window.yaCounter49823257 !== void 0){
            yaCounter49823257.setUserID(data.u);
        }

        if($.browser.safari) {
            $.cookie("u", data.u);
        }

        if(data.phone!=0) {
            $('.t-bron').each(function(index, element) {
                $(this).html(data.phone);
                $(this).attr('href',data.aphone);
            });
        }

        if(data.phone_c!=0) {
            $('.t-corp').each(function(index, element) {
                $(this).html(data.phone_c);
                $(this).attr('href',data.aphone_c);
            });
        }

        $('form').each(function(index, element) {
            $(element).append('<input type="hidden" name="u" value="' + parseInt(data.u) + '" />');
        });

    });
});

