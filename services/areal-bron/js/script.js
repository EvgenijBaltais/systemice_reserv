$(document).ready(function(){

    $('.phone-mask').inputmask({"mask": "+7 (999) 999-99-99"});

    function getDateCalendar(date) {

      var dd = date.getDate();
      if (dd < 10) dd = '0' + dd;

      var mm = date.getMonth() + 1;
      if (mm < 10) mm = '0' + mm;

      var yy = date.getFullYear() % 100;
      if (yy < 10) yy = '0' + yy;

      return dd + '-' + mm + '-' + '20' + yy;
    }



$('input[name="phone"]').focus(function(){

    $(this).css('border', '1px solid #fff')
});


 let enabled = 0,
      roomName = '',
      guestValue = '',
      roomFinalPrice = '',
      earlyValue = 0;


    function getWeekDay(date) {
      var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

      return days[date];
    }

        var today = new Date(),
            tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);



        // Чтобы календарь открывался по клику на название дня

        $("#date-in").datepicker({

            minDate: new Date(2022, 03, 24),
            maxDate: new Date(2022, 03, 27),
            dateFormat: "dd-mm-yy",
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            closeText: 'Закрыть',
            currentText: 'Сегодня',
            onClose: function() {

                var thisTextDay = $(this).datepicker('getDate').getDay(),
                    nextTextDay = $(this).datepicker('getDate').getDay();

                if (nextTextDay == 7) nextTextDay = 0;

                $("#date-out").datepicker("show");
            }
        });


        $("#date-out").datepicker({

            minDate: new Date(2022, 03, 25),
            maxDate: new Date(2022, 03, 28),
            dateFormat: "dd-mm-yy",
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
            'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
            'Октябрь', 'Ноябрь', 'Декабрь'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            closeText: 'Закрыть',
            currentText: 'Сегодня',
            onSelect: function(){


                if ($('#room-category option:selected').val() != 0) {

                    // Даты с календаря

                    let dateIn = $('#date-in').datepicker('getDate'),
                        dateOut = $('#date-out').datepicker('getDate'),
                        nights = parseInt((dateOut - dateIn) / 1000 / 60 / 60 / 24);

                    if (dateIn.getTime() === dateOut.getTime()) nights = 1;

                    // Ранний заезд
                }

            }
        });

        $('#date-in').datepicker('setDate', today);
        $('#date-out').datepicker('setDate', tomorrow);

        /* Изменение второго календаря при клике на первый календарь */

        $('#date-in').change(function(){

            var nextDay = $(this).datepicker('getDate'),
            actDate = new Date(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate());

            $("#date-out").datepicker('option', 'minDate', actDate);
            $('#date-out').datepicker("setDate", actDate).trigger('change');
        });




            $('#date-in, #date-out').on('focus', function(){

                $(this).blur();
            });



    if (document.getElementById('down-onclick')) {

        $('#down-onclick').on('click', function(){

            $('#guests-block').trigger('click');
        });
    }

    $('body').on('click', function(e){

        if (!$('#booking__guests').is(e.target) && $('#booking__guests').has(e.target).length === 0) {

            $('#guests-age').hide();
            $('#down-onclick').removeClass('down-onclick-active');
            $('.slider-form_people').removeClass('out-onclick-active');
        }
        
    });


    $('#send-order').on('click', function(){

        var $this = $(this),
            form = $this.parents('#form'),
            nameInput = form.find('input[name="name"]'),
            name = nameInput.val(),
            nameInputguest = form.find('input[name="guest_name"]'),
            guest_name = nameInputguest.val(),
            phoneInput = form.find('input[name="phone"]'),
            phone = phoneInput.val(),
            emailInput = form.find('input[name="email"]'),
            email = emailInput.val(),
            date_st = form.find('input[name=startDate]').val(),
            date_end = form.find('input[name=endDate]').val(),
            roomInput = form.find('select[name="selectbox_room"]'),
            room = form.find('select[name="selectbox_room"] option:selected').text(),
            guestInput = form.find('select[name="selectbox_guest"]'),
            guest = guestInput.val()
            commentInput = form.find('textarea[name="comment"]'),
            price = form.find('.choosen-price').text(),
            comment = commentInput.val(),
            hotelName = 'Проживание в конгресс-отеле «Ареал»',
            patternEmail = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/,
            phoneCorrect = phoneInput.inputmask("isComplete"),
            dopinfo;
                
                let earlyCheck = "";

                if ($('#form').find('.t-checkbox').prop('checked')) {

                        earlyCheck = 'Нужен ранний заезд.';
                }


            if (!phoneCorrect || $('#guest-quality').val() == 0) {

            if ($('#guest-quality').val() == 0) {

                $('#guest-quality').css('border', '1px solid red');
            }


            if (!phoneCorrect) {

                phoneInput.css('border', '1px solid red');
            }

            return false;
        }



        let names = "";

        $('#form').find('.guest_name').not('#guest_name').find('input').each(function(){

            names += $(this).val() + '; ';
        });
        
        patternEmail.test(email) ? email : email = '';

        var dopinfo = 'Заявка: ' + hotelName + '; ' + '\n' + 'Категория номера: ' + room + '; ' + '\n' + 'Количество гостей: ' + guest + '; ' + '\n' + 'Имена гостей: ' + names + '\n' + 'Комментарий: ' + comment + '; ' + '\n' + earlyCheck + '\n' + 'Письмо с сайта https://systemice.ru/services/areal-bron';

        var formData = "&phone=" + phone + "&email=" + email + '&hotel=' + hotelName + '&dopinfo=' + dopinfo + '&date_st=' + date_st + '&date_end=' + date_end;

        if ($(this).hasClass('form-send')) return false;

        $.ajax({
            type: "POST",
            url: '../areal-bron/php/send-mail.php',
            data: formData,
        beforeSend : function(){
            $this.addClass('form-send');
            $this.text('Отправка...');
        },
        success : function () {

            $this.addClass('form-send');
            $this.text('Успешно!');

        },
        error : function () {

            $this.text('Ошибка!');

            setTimeout(function(){

                $this.removeClass('form-send');
                $this.text('Заказать');
            }, 3000);
        }
              });
    });

$('#guest-quality').on('change', function () {
   
    $('#guest-quality').css('border', '0');
})




  // Выбор количества человек

  $('#guest-quality').on('change', function(){


    let peopleVal = this.value;

    if (peopleVal != 0) {

        $('.t-input-group_cat').show();
    } else {

        $('.t-input-group_cat').hide();
        $('.t-input-group_em').hide();
        $('.t-input-group_ph').hide();
        $('.t-input-group_ta').hide();
        $('.input-guest_name').css('display', 'none');
    }

    

    let readyGuests = $('.guest_name').not('#guest_name');

    // Обновление списка


    //$('#guest_name').


    $('#room-category').prop('disabled', false);

    guestValue = $(this).val();


    $('#room-category').find('option').each(function(){

        $(this).prop('disabled', false);

        if ($(this).attr('data-people') < guestValue) {

            $(this).prop('disabled', true);
            enabled++;
        }
    });

    if (peopleVal >= readyGuests.length) {

        for (let i = 0; i < peopleVal - readyGuests.length; i++) {

            let newBlock = $('#guest_name').clone().removeAttr('id');
            newBlock.appendTo('.input-guest_name');
            $('.input-guest_name').css('display', 'none');
        }
    }

    else {

        for (let i = 0; i < readyGuests.length; i++) {

            if (i > peopleVal - 1) readyGuests.eq(i).detach();
        }
    }



    });

  $('#room-category').on('change', function(){

    // Гости 

    let catVal = this.value;

    if (catVal > 0) {

        $('#guest_name').show();
        $('.t-input-group_cb').show();
        $('.t-input-group_em').show();
        $('.t-input-group_ph').show();
        $('.t-input-group_ta').show();
        $('.input-guest_name').css('display', 'block');
    } else {

        $('.t-input-group_em').hide();
        $('.t-input-group_cb').hide();
        $('.t-input-group_ph').hide();
        $('.t-input-group_ta').hide();
        $('.input-guest_name').css('display', 'none');
    }

});

});