$(document).ready(function() {

  $("a.nav__list__link").click(function() {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });


  $(window).scroll(function(){
    if ($(this).scrollTop() > 3900) {
        $('.scrollup').css({opacity: '1'});
    } else {
        $('.scrollup').css({opacity: '0'});
    }
  });
      
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: $('#main-nav').offset().top }, 1600);
    return false;
  });
  

  $("a.nav__list__link").on('click', function () {
      $(this).css({color: '#f3bb0f'});
  });

  setTimeout(function() {
    $(".overlay").css({display: 'block'});
  }, 8000);

  $(".popup__close-btn").on('click', function () {
    $(".overlay").css({display: 'none'});
  });

  $(document).mouseup(function (e) {
    var container = $(".overlay");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

  $('#email').on('keyup', function(){

      $(this).css('border-color', '#fff');
  });

  $('#email').on('focus', function(){

      $(this).css('border-color', '#fff');
  });

$('form input[type="text"]').val('');

/* Отправка формы  */

$('#send_order').on('click', function(e){

    var $this = $(this),
        form = $(this).parents('form'),
        name = form.find('input[name="name"]'),
        email = form.find('input[name="email"]'),
        nameVal = name.val(),
        emailVal = email.val(),
        goal = $this.attr('data-reach-goal'),
        preloader = $('<img src = "img/ajax-loader.gif" alt = "Отправка..." title = "Отправка..." class = "preloader">'),
        afterSendText = $('.aftersendText'),
        patternEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

        e.preventDefault();

        if (!patternEmail.test(emailVal)) {

              email.css('border-color', 'red');
              return false;
          }

          var dataObject = 'name=' + nameVal + '&email=' + emailVal + '&landing=mice_agency' + '&hotel_id=10641&knight_id=10641&corp=1&hotel=КАК ВЫБРАТЬ MICE АГЕНТСТВО?';

      $.ajax({

        url: "https://la-melia.ru/php/knight_bron_systemice.php",
        data: dataObject,
        type: "POST",
        beforeSend: function (){

          $this.hide();
          afterSendText.show().html(preloader);
        },

        success: function () {

          afterSendText.text('Успешно!');

          setTimeout(function(){

              afterSendText.hide();
              $this.show();
              name.val('');
              email.val('');
          }, 4000);

          yaID.reachGoal(goal);

        },

        error: function () {

          afterSendText.text('Ошибка!');

          setTimeout(function(){

              afterSendText.hide();
              $this.show();
              name.val('');
              email.val('');

          }, 4000);
        }

      });

});

/* Отправка формы  */

});
