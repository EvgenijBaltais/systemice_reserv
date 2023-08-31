$(function(){

$('.phone-validated').inputmask({"mask": "7 (999) 999-99-99"});

$('.phone-validated').on('keyup', function(){

    $(this).css('border-color', '#C9C9C9');
});

$('.phone-validated').focus(function(){

    $(this).css('border-color', '#C9C9C9');
});

$('.get-consult_open').on('click', function(){
   // ym(52237801, 'reachGoal', 'get_orders_0');
});


/* Срабатывание первого шага цели */

$('.send-goal-yandex').on('click', function(){

    //ym(52237801, 'reachGoal', $(this).attr('data-reach-goal'));
});


/* Срабатывание первого шага цели */

/*
$('#get_price_top, #get_price_center, #get_price_bottom, #get_price_top_mob').on('click', function(){

    var $this = $(this),
        name = $this.attr('data-form-name'),
        goalId = $this.attr('data-reach-goal') + '1',
        parent = $this.parents('form'),
        sendButton = $('.t-popup').find('.send-order');

    $('.t-popup').find('.t702__wrapper').find('span').text(name);

    sendButton.attr('data-form-name', name);
    sendButton.attr('data-reach-goal', goalId);

});
*/


$('.send-order').on('click', function(e){

    e.preventDefault();

    var $this = $(this),
        form = $this.parents('form'),
        nameInput = form.find('input[name="name"]'),
        uname = nameInput.val(),
        phoneInput = form.find('input[name="phone"]'),
        phone = phoneInput.val(),
        emailInput = form.find('input[name="email"]'),
        email = emailInput.val(),     
        u = $('body').attr('data-u'),
        patternEmail = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/,
        phoneCorrect = phoneInput.inputmask("isComplete"),
        hotelName = 'systemice.ru',
        dopinfo,
        formName = '',
        peopleNumber = '',
        goal = $this.attr('data-reach-goal'),
        googleGoal = goal.substring(0, goal.length - 1);
        
        var pageName = $('title').text();

        $this.attr('data-datein') && $this.attr('data-datein') != '' ? dateIn = $this.attr('data-datein') : dateIn = '';
        $this.attr('data-dateout') && $this.attr('data-dateout') != '' ? dateOut = $this.attr('data-dateout') : dateOut = '';
        $this.attr('data-form-name') && $this.attr('data-form-name') != '' ? formName = $this.attr('data-form-name') : formName = '';
        peopleNumber == 'Кол-во гостей' ? peopleNumber = '' : '';

        dopinfo = '\n' + 'Заявка со страницы: ' + pageName + '\n' + 'С формы: ' + formName + '\n' + 'Имя:' + uname + '\n' + 'Телефон:' + phone + '\n' + 'E-mail:' + email + '\n';

    if ($this.hasClass('form-send')) {

        return false;
    }

    if (!phoneCorrect) {

        phoneInput.css('border-color', 'red');
        return false;
    }
  patternEmail.test(email) ? email : email = '';

      var formData = "name=" + uname + "&phone=" + phone + "&email=" + email + '&corp=' + 1 + '&hotel=' + hotelName + '&u=' + u + '&date_st=' + dateIn + '&date_end=' + dateOut + '&dopinfo=' + dopinfo;
      console.log(formData);
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
           /* ym(52237801, 'reachGoal', goal);
            gtag('event', 'goal_allgoal_1', {'event_category': 'goal_allgoal_'});
            gtag('event', goal, {'event_category': googleGoal}); */

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

