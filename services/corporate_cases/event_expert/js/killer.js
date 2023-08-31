$(function(){

	var killerWrapper = $('.killer-wrapper'),
		killerVisible = $('.killer-content__visible'),
		killerHidden = $('.killer-content__hidden'),
		killerWindow = $('.killer-window');

		$('.killer-phone').inputmask({"mask": "+7 (999) 999-99-99"});

	/* Счетчик */

	var timer = $('#call-me-timer'),
		timer2 = $('#call-me-timer2'),
		sec = 24,
		ms = 100;

	function startTimer(){

		var runningTimer = setInterval(function(){

			ms -= 1;

				if (ms == 0) {

					ms = 99;
					sec--;

					if (sec < 0) {

						clearInterval(runningTimer);
						ms = 0;
						sec = 0;
					}
				}

			ms < 10 ? timer2.text('0' + ms):timer2.text(ms);
			sec < 10 ? timer.text('0' + sec):timer.text(sec);

		}, 10);

		timerFlag = false;
	}

	/* Счетчик */


/* Закрытие формы по клику вне */

	$(document).mouseup(function (e){
		if (!killerWindow.is(e.target)
		    && killerWindow.has(e.target).length === 0) {
			closeWindow();
		}
	});

/* Закрытие формы по клику вне */

	$('.get-free-call').on('click', function(){

		setTimeout(function(){

		killerWrapper.show();
		}, 0);

		killerWindow.fadeIn(300);

		yaCounter52237801.reachGoal('get_orders_killer_close');
	});


var callFrontSide = $('.killer-content__visible').find('.killer-phone'),  // Красная кнопка на лицевой стороне
	callBackSide = $('.killer-content__hidden').find('.killer-phone'),    // Красная кнопка на скрытой стороне
	timerFlag = true; // Однократный запуск функции

/* Убрать предупреждение "Необходимо ввести номер" */

	callFrontSide.keydown(function(){

		$('.killer-wrong-par').remove();
	});

	callBackSide.keydown(function(){

		$('.killer-wrong-par2').remove();
	});

/* Убрать предупреждение "Необходимо ввести номер", конец */

	$('.killer-button').on('click', function(e){
		
		e.preventDefault();

		var $this = $(this),
			phoneInput = $this.siblings('.killer-phone'),
			phone = phoneInput.val(),
			site = window.location.pathname,
			phoneComplete = phoneInput.inputmask("isComplete");


		if ($this.siblings('input[type="text"]').val() == '' || !phoneComplete) {

			if ($('.killer-wrong-par').length == 0) {

				$('<p class = "killer-wrong-par">Необходимо ввести номер телефона!</p>').insertBefore($this);
			}
		}

		else {

			if (timerFlag == true) {

				startTimer();

				var formData = 'phone=' + phone + '\n' + 'Заказ звонка со страницы http://yahonty-nog.ru' + site + '\n';

				$.ajax({
					type: "POST",
		            url: 'http://marins-parkhotel.ru/scripts/zayavka_to_knight.php',
		            data: $.param({hotel_id:15,
			            phone:phone,
			            ucomment:formData,
			            chameleon:1,
			            order_type:1002
		        	}),
		            beforeSend: function(){

            			$this.text('Отправка...');
		            	$this.attr('disabled', true);
		            },
		            success : function (data) {
		            	$this.text('Успешно!');
		            	yaCounter52385056.reachGoal('get_orders_killer_send');
		            	ga('send', 'event', 'call_me_form_', 'call_me_form_1');
		            	ga('send', 'event', 'goal_allgoal_', 'goal_allgoal'); 
		            }

		          });
			}
		}
	});

$('.killer-button__call-waiting').on('click', function(e){

		e.preventDefault();

		var $this = $(this);

		if ($this.siblings('input[type="text"]').val() == '') {

			if ($('.killer-wrong-par2').length == 0) {

				$('<p class = "killer-wrong-par2">Необходимо ввести номер телефона!</p>').insertBefore($this);
			}
		}
	});

	$('.killer-choose-time__link').on('click', function(){

			killerVisible.hide();
			killerHidden.fadeIn();
	});

	$('.killer-close').on('click', function(){

		closeWindow();

	});

	function closeWindow() {

		setTimeout(function(){

			killerHidden.hide();
			killerVisible.show();
		}, 0);

		killerWrapper.hide();
		killerWindow.hide();
		$('.killer-wrong-par').remove();
		$('.killer-wrong-par2').remove();
	};

/* Анимация кнопки */

var pageHeight = $('body').height(),
	windowHeight = $(window).height(),
	windowWidth = $(window).width(),
	windowTop = $(window).scrollTop(),
	elementHeight = windowTop + windowHeight - 160,
	flipperBlock = $('.flipper'),
	getFreeCall = $('.get-free-call'),
	getFreeCallImg = $('.get-free-call__img');

getFreeCall.show();

if (windowWidth >= 500) {

	getFreeCall.css({'top': elementHeight});

	setInterval(function() {
	  
		$('.flipper').toggleClass('animation-timer');

	}, 1500);

$(window).scroll(function() {

	getFreeCall.removeClass('animated bounce');

	var windowTop = $(window).scrollTop(),
		elementHeight = windowTop + windowHeight - 160;

		setTimeout(function() {

				getFreeCall.css({'top': elementHeight});
				flipperBlock.addClass('flipper-stop');
				getFreeCallImg.addClass('rotate-element');
				getFreeCall.addClass('animated bounce');

		setTimeout(function() {

			flipperBlock.removeClass('flipper-stop');
			getFreeCallImg.removeClass('rotate-element');
		}, 2000);
				
		}, 400);
});

}

/* Анимация кнопки */

});