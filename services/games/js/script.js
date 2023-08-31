$(function(){

$('.phone-validated').inputmask({"mask": "+ 7 (999) 999-99-99"});

$('.phone-validated').on('keyup', function(){

    $(this).css('border-color', '#C9C9C9');
});

$('.phone-validated').focus(function(){

    $(this).css('border-color', '#C9C9C9');
});


$('.send-goal-yandex').on('click', function(){

    ym(53306992, 'reachGoal', $(this).attr('data-reach-goal'));
});


$('.game_btn').on('click', function(){

    var $this = $(this),
        goalId = $this.attr('data-reach-goal') + '1',
        sendButton = $('.game_wrapper').find('.game_btn');


    var nameOrder = $(this).parents('.game_wrapper').find('.js-product-name').text();

    sendButton.attr('data-reach-goal', goalId);

    if (nameOrder != '') {
        $('.send-order ').attr('data-product-name', nameOrder);
    }
});

$('.send-order').on('click', function(e){

    e.preventDefault();

    var $this = $(this),
        nameOrder = $this.attr('data-product-name'),
        form = $this.parents('form'),
        nameInput = form.find('input[name="name"]'),
        name = nameInput.val(),
        phoneInput = form.find('input[name="phone"]'),
        phone = phoneInput.val(),
        companyInput = form.find('input[name="company"]'),
        company = companyInput.val(),
        phoneCorrect = phoneInput.inputmask("isComplete"),
        dopinfo;
        
        var hotelName = "Бизнес-игры",
            source = 'systemice-game.ru',
            u = $('body').attr('data-u'),
            hotel_id = 5313,
            landingName = document.getElementById('landing_name').value;

        if (nameOrder == undefined) {

            nameOrder = '';
        }
        

        dopinfo = '\n' + 'Компания: ' + company + '\n' + 'Заявка со страницы: ' + landingName + '\n' + nameOrder;


    if ($this.hasClass('form-send')) {

        return false;
    }

    if (!phoneCorrect) {

        phoneInput.css('border-color', 'red');
        return false;
    }

      var formData = "name=" + name + "&phone=" + phone + "&dopinfo=" + dopinfo + '&corp=' + 1 + '&hotel=' + hotelName + '&source=' + source + '&hotel_id=' + hotel_id + '&u=' + u;

    $.ajax({
        type: "POST",
        url: 'http://marins-parkhotel.ru/scripts/bron_systemice.php',
        data: formData,
        beforeSend : function(){
            $this.addClass('form-send');
            $this.text('Отправка...');
        },
        success : function () {

            $this.addClass('form-send');
            $this.text('Успешно!');
            ym(53306992, 'reachGoal', 'get_game_1');

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


});

