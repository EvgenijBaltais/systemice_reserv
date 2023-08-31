$(function() {

$('input[name="phone"]').inputmask({"mask": "7 (999) 999-99-99"});

$('.popup-calllback-close').on('click', function(){

    $('.popup').hide();
});


    var name = $('#input-name'),
        phone = $('#input-phone'),
        comment = $('#input-textarea'),
        form = $('#form21512300'),
        formInfo = $('.form-info');

    $('#main-form_submit').on('click', function(e){

        e.preventDefault();

        var nameVal = name.val(),
            phoneVal = phone.val(),
            commentVal = comment.val();

            if (nameVal !='' && phoneVal != '') {

                var formData = form.serialize();

                $.ajax({

                    type: "POST",
                    url: "https://maot.ru/podmsk/tilda/les_landing.php",
                    data: formData,
                    dataType: 'html',
                    success: function () {

                        form.fadeOut();

                        setTimeout(function(){

                            formInfo.show();
                            formInfo.find('.success-form-text').show();
                        }, 300);

                    /* Добавление цели на отправку формы счетчика яндекс метрики */
                        yaCounter44993326.reachGoal('get-price');
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

$(document).ready(function(){  
        PopUpHide();
    $('.popup-calllback-show').on('click', function(e) {
        e.preventDefault();

        var goalSendForm = $(this).attr('data-reach-goal');
            formName = $(this).attr('data-form-name'),
            button = $('#popup-calllback').find('button');

            button.attr('data-reach-goal', goalSendForm);
            button.attr('data-form-name', formName);

            PopUpShow();
    });
})

    var name2 = $('#input-name-callback'),
        phone2= $('#input-phone-callback'),
        form2 = $('#popup-form-callback');

        phone2.inputmask({"mask": "+7 (999) 999-99-99"});

    $('#popup-calllback-submit').on('click', function(e){

        var goalSendForm = $(this).attr('data-reach-goal');

        e.preventDefault();

        var nameVal = name2.val(),
            phoneVal = phone2.val();

            if (nameVal !='' && phoneVal != '') {

                var formData = form2.serialize();

                $.ajax({

                    type: "POST",
                    url: "https://sysevent.ru/bron.php",
                    data: formData,
                    dataType: 'html',
                    success: function () {
                        $('#popup-calllback-succ').css({'display': 'block'});
                        $('#popup-calllback__content').css({'display': 'none'});

                    /* Добавление цели на отправку формы счетчика яндекс метрики */
                        yaCounter45351369.reachGoal('goalSendForm');
                    /* Добавление цели на отправку формы счетчика яндекс метрики */
                    },
                    error: function () {
                        alert("Ошибка!");
                        
                    }
                });
            }

            else {

                nameVal =='' ? name2.css({'border-color': 'red'}) : '';
                phoneVal =='' ? phone2.css({'border-color': 'red'}) : '';
            }
    });

    name2.on('keyup', function(){

        name2.css({'border-color': '#b8b8b8'});
    });

    phone2.on('keyup', function(){

        phone2.css({'border-color': '#b8b8b8'});
    });
});
