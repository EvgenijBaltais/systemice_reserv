$(function() {
    
$('.checkbox_btn').on('click', function () {
    if ($('.checkbox_btn').is(':checked') == false) {
        $('.form-submit-btn').attr('disabled', 'disabled');
        $('.form-consent').css({'color': 'red'});
    } else {
        $('.form-submit-btn').removeAttr('disabled');
        $('.form-consent').css({'color': '#000'});
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

        console.log(1212);

        e.preventDefault();

        var nameVal = name2.val(),
            phoneVal = phone2.val();

            if (phoneVal != '') {

                var formData = form2.serialize();

                $.ajax({

                    type: "POST",
                    url: "https://maot.ru/podmsk/tilda/les_landing.php",
                    data: formData,
                    dataType: 'html',
                    success: function () {
                        $('#popup-calllback-succ').css({'display': 'block'});
                        $('#popup-calllback__content').css({'display': 'none'});

                        $('#popup-calllback-submit').text('Успешно!');
                        

                    /* Добавление цели на отправку формы счетчика яндекс метрики */
                        yaCounter44825506.reachGoal('goalSendForm');
                    /* Добавление цели на отправку формы счетчика яндекс метрики */
                    },
                    error: function () {
                        //echo("alert('Ошибка!')");
                        
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