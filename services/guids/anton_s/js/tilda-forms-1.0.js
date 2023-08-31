$(function() {

    var name = $('#input-name'),
        phone = $('#input-phone'),
        comment = $('#input-textarea'),
        form = $('#form21512300'),
        formInfo = $('.form-info');

        let y = 0;

    $('#main-form_submit').on('click', function(e){

        e.preventDefault();

        var nameVal = name.val(),
            phoneVal = phone.val(),
            commentVal = comment.val();

            if (nameVal !='' && phoneVal != '') {

                let hotelname = $('input[name="hotel"]').val().split(' -')[0];

                var formData = form.serialize() + '&knight_id=11402&hotelname=' + hotelname;

                $.ajax({

                    type: "POST",
                    url: "https://sysevent.ru/bron.php",
                    data: formData,
                    dataType: 'html',
                    beforeSend: function(){

                        if (y != 0) return false;
                        y++;

                        $(this).attr('disabled', true);
                    },
                    success: function () {

                        form.fadeOut();

                        setTimeout(function(){

                            formInfo.show();
                            formInfo.find('.success-form-text').show();
                        }, 300);

                    /* Добавление цели на отправку формы счетчика яндекс метрики */
                        yaCounter44991421.reachGoal('get-price');
                    /* Добавление цели на отправку формы счетчика яндекс метрики */
                    },
                    error: function () {

                        form.fadeOut();

                        setTimeout(function(){

                            formInfo.show();
                            formInfo.find('.error-form-text').show();
                        }, 500);
                    }
                });
            }

            else {

                nameVal =='' ? name.css({'border-color': 'red'}) : '';
                phoneVal =='' ? phone.css({'border-color': 'red'}) : '';
            }
    });

    name.on('keyup', function(){

        name.css({'border-color': 'transparent'});
    });

    phone.on('keyup', function(){

        phone.css({'border-color': 'transparent'});
    });
});


