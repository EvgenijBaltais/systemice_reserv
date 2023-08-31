	$(function(){

	// Переменные

    var steps = [], 						// Массив с id-шниками фраз менеджера и клиента, они все пронумерованы для простоты
    	clientsData = {},					// В этом объекте будут собираться все введенные данные для дальнейшей отправки заявки
        step_counter = 0,   				// Переменная, которая показывает текущий номер вопроса-ответа
        speed = 30, 						// Скорость написания сообщения менеджером
        dialogPhone = $('#dialog-phone'),   // Просто глобальная переменная чтобы не искать элемент сто раз
        dialog = $('#dialog'),              // Просто глобальная переменная чтобы не искать элемент сто раз
        closedDialog = $('#chat-with-manager'),
        chatOn = 0,                         // Запущен ли уже чат. Чтобы при закрытии, открытии, автозапуске не начинался несколько раз
        formIsSent = 0,                     // Отправлена уже форма или еще нет
        cookieOn = 1,						// Если 1 то работают куки, чат не начинается заново при переходе на другую страницу, при условии что введены хотя бы даты заезда-выезда
        chatContinues = 0,					// Чат уже запускался и будет продолжаться или запускается заново.(при переходе на другую страницу)
        mobileStartTime = 40000,			// Время автозапуска на мобильнике
        startTime = 40000,					// Задержка появления диалога на компе
		expiresTime = 0.03,                // Время жизни cookie
		autoChatAgain = 1 * 60 * 1000,		// Если чат закрыт, то спустя это время он открывается повторно
		autoOpenTimes = 1,					// Количество повторных открываний
		phraseSpeed = 300,
		domain_hotel_name = "Аудит сметы, корпоративный лендинг",
		hotel_id = '',
		knight_id = '',
		chatAlreadyOpened = 0;


		let whatsapp_corp_on = false;  // поставить true или false, 0 или 1




		$.cookie('dateIn', null);
		$.cookie('dateOut', null);
		$.cookie('adults', null);
		$.cookie('children', null);
		$.cookie('rooms', null);
		$.cookie('name', null);
		$.cookie('phone', null);
		$.cookie('chatOn', null);
		$.cookie('a', null);
		$.cookie('b', null);
		$.cookie('c', null);
		$.cookie('d', null);
		$.cookie('e', null);
		$.cookie('bronconsult', null);
		$.cookie('unplannedStep', null);
		$.cookie('managerNumber', null),
		$.cookie('pressed', null);
		$.cookie('closed_chat', null);
		$.cookie('openTime', null);
		$.cookie('dont_show_chat', null);
		$.cookie('no_whatsapp_pressed', null);
		$.cookie('calendar_form_open', null);
		$.cookie('calendarStart', null);
		$.cookie('calendarEnd', null);
		$.cookie('knightDateIn', null);
		$.cookie('knightDateOut', null);
		$.cookie('dates', null);
		$.cookie('step_counter', null);

		$.cookie('private_chat', null);
		$.cookie('corp_chat', null);
		$.cookie('conference', null);
		$.cookie('eventhold', null);
		$.cookie('advanced_count', null);
		$.cookie('corp_people', null);

		$.cookie('choosenNumber', null);

		$.cookie('clicked', null);


// Костыль для safari, чтобы не прокручивался фон под чатом на телефоне

function body_lock() {

	var body = $("body");
	if (!body.hasClass('scroll-locked')) {
		var bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		body.addClass('scroll-locked');
		body.css("top", "-" + bodyScrollTop + "px");
		body.attr("data-popup-scrolltop", bodyScrollTop)
	}
}

function body_unlock() {

	var body = $("body");
	if (body.hasClass('scroll-locked')) {
		var bodyScrollTop = $("body").attr("data-popup-scrolltop");
		body.removeClass('scroll-locked');
		body.css("top", "");
		body.removeAttr("data-popup-scrolltop")
		window.scrollTo(0, bodyScrollTop)
	}
}


let a1 = 0,
	a2 = 0,
	a3 = 0,
	a4 = 0,
	a5 = 0,
	a6 = 0;

$('.dialog_button').on('click', function(e){

	e.preventDefault();

	let $this = $(this)

	$this.siblings('.dialog_button').removeClass('dialog_button-active');
	$this.addClass('dialog_button-active');

	if ($this.hasClass('how_many_people')) {


		if ($(window).width() > 480) {

			ym(24221908, 'reachGoal', 'get_chat_button_2');
			ym(24221908, 'reachGoal', 'get_chat_click_2');
		}

		else {

			ym(24221908, 'reachGoal', 'get_chat_button_mobile_2');
			ym(24221908, 'reachGoal', 'get_chat_click_mobile_2');
		}


		if (a1 != 0) return false;

		$('#corp-step-1').fadeIn(150);

		a1++;
	}

	else if ($this.hasClass('get_conference')) {

		if ($(window).width() > 480) {

			ym(24221908, 'reachGoal', 'get_chat_button_3');
			ym(24221908, 'reachGoal', 'get_chat_click_3');

		}

		else {

			ym(24221908, 'reachGoal', 'get_chat_button_mobile_3');
			ym(24221908, 'reachGoal', 'get_chat_click_mobile_3');

		}

		if (a2 != 0) return false;

		$('#corp-step-2').fadeIn(150);

		a2++;
	}

	else if ($this.hasClass('get_departure')) {

		if (a3 != 0) return false;

		$('#corp-step-3').fadeIn(150);

		a3++;

		$('#dialog-wrapper').animate({

			scrollTop: 250

		}, 200);
	}

	else if ($this.hasClass('get_estimate')) {

		if ($(window).width() > 480) {

			ym(24221908, 'reachGoal', 'get_chat_button_4');
			ym(24221908, 'reachGoal', 'get_chat_click_4');

		}

		else {

			ym(24221908, 'reachGoal', 'get_chat_button_mobile_4');
			ym(24221908, 'reachGoal', 'get_chat_click_mobile_4');

		}

		if (a4 != 0) return false;

		if ($(window).width() < 480 && whatsapp_corp_on) {

			let comment = '';


				$('#corp-step-0').find('.dialog_button-active').attr('data-value') == 1 ? comment += "Количество человек более 100; " : comment += "Количество человек менее 100; ";
				$('#corp-step-1').find('.dialog_button-active').attr('data-value') == 1 ? comment += "Потребуется конференц или банкетный зал; " : "";
				$('#corp-step-2').find('.dialog_button-active').attr('data-value') == 1 ? comment += "Планирую совершить инспекционный выезд на площадку; " : "";
				$('#corp-step-3').find('.dialog_button-active').attr('data-value') == 1 ? comment += "Уже есть предварительная смета; " : "";

			var dialogData = "https://api.whatsapp.com/send?phone=79998909466&text=Меня интересует: Аудит сметы; " + comment;

			$('#go_to_corp_whatsapp').attr('href', dialogData);

			$('#step-whatsapp').fadeIn(150);

		}

		else {

			$('#step-11').fadeIn(150);
		}

		a4++;

		$('#dialog-wrapper').animate({

			scrollTop: 600

		}, 200);
	}

});


let x = 0;

$('#go_out_corp_whatsapp').on('click', function(){

	if (x != 0) return false;

	$('#step-11').fadeIn(150);

	x++;

	$('#dialog-wrapper').animate({

		scrollTop: 500

	}, 200);
});


$('#go_to_corp_whatsapp').on('click', function(){

	ym(24221908, 'reachGoal', 'send_form_dialog');
});


    // Функция для формата даты

    function getDate(date) {

    	var dd = date.getDate();
    	if (dd < 10) dd = '0' + dd;

    	var mm = date.getMonth() + 1;
    	if (mm < 10) mm = '0' + mm;

    	var yy = date.getFullYear() % 100;
    	if (yy < 10) yy = '0' + yy;

    	return yy + '.' + mm + '.' + dd;
    }

    // Функция для формата даты

  	function getDateCalendar(date) {

	  var dd = date.getDate();
	  if (dd < 10) dd = '0' + dd;

	  var mm = date.getMonth() + 1;
	  if (mm < 10) mm = '0' + mm;

	  var yy = date.getFullYear() % 100;
	  if (yy < 10) yy = '0' + yy;

	  return dd + '-' + mm + '-' + '20' + yy;
	}



    // Функция для формата даты для витязя

    function getKnightDate(date) {

    	var dd = date.getDate();
    	if (dd < 10) dd = '0' + dd;

    	var mm = date.getMonth() + 1;
    	if (mm < 10) mm = '0' + mm;

    	var yy = date.getFullYear();
    	if (yy < 10) yy = '0' + yy;

    	return yy + '-' + mm + '-' + dd;
    }

// Рандомные менеджеры на сайте

//dialogManager();

// Появление и закрытие окна диалога

if ($(window).width() >= 480) {
	
	closedDialog.show();


	ym(24221908, 'reachGoal', 'get_chat_click_1');


	setTimeout(function(){

		if ($('#dialog').is(':hidden')) {

			closedDialog.hide();
			$('#dialog').show();
		}
	}, startTime);
}

else {

	closedDialog.show();

	ym(24221908, 'reachGoal', 'get_chat_click_1_mobile');

	if ($.cookie('closed_chat') == 1 && $.cookie('dont_show_chat') == 1){

		var timeNow = Date.now(),
			openTime = $.cookie('openTime'),
			autoOpen = (openTime - timeNow) > 0;

		if (autoOpen) {

			setTimeout(function(){

				closedDialog.hide();
				$('#dialog').fadeIn(phraseSpeed);

					body_lock();

			}, openTime - timeNow);
		}
	}

	else {

			setTimeout(function(){

				if (chatOn != 0) {return false;}
				chatOn++;

				if ($('#ui-datepicker-div').is(':visible') || $('#calc_overlay_white').is(':visible') || chatAlreadyOpened == 1 && $('#dialog').is(':visible')) {

					return false;
				}

				$.cookie('chatOn', chatOn, {expires: expiresTime});

				if ($.cookie('closed_chat') != 1) {

					dialog.fadeIn(phraseSpeed);

					body_lock();
				}

			}, mobileStartTime);
	}	
}






	// Закрытие чата и отправка заявки, если человек ввел телефон и закрывает форму, не отправив

	$('#dialog-close').on('click', function(){


		dialog.fadeOut(100, function(){
			closedDialog.show();
			closedDialog.css('opacity', 1);


			$.cookie('closed_chat', 1, {expires: expiresTime});


			if ($(window).width() < 480) {

				body_unlock();
			}


		});

		return false;
	});



	$('.get-chat-button').on('click', function(){

		if ($(window).width() > 480) {

			$('#dialog').css({'left': 'auto', 'bottom': '30px', 'right': '30px', 'top': 'auto', 'margin': 'auto'});

			ym(24221908, 'reachGoal', 'get_chat_button_1');
		}

		else {

			ym(24221908, 'reachGoal', 'get_chat_button_mobile_1');
		}

			closedDialog.css('opacity', 0);

			var fadeInTime = 300;

			if ($(window).width() < 480) {

				var fadeInTime = 0;

				body_lock();
			}

			dialog.fadeIn(fadeInTime, function(){

					if (chatOn != 0) return false;

					chatOn++;
			});

		return false;	
	});


	closedDialog.on('click', function(){


		if ($(window).width() > 480) {

			ym(24221908, 'reachGoal', 'get_chat_click_1');

			$('#dialog').css({'left': 'auto', 'bottom': '30px', 'right': '30px', 'top': 'auto', 'margin': 'auto'});
		}

		else {

			ym(24221908, 'reachGoal', 'get_chat_click_mobile_1');
		}

			$(this).css('opacity', 0);

			var fadeInTime = 300;

			if ($(window).width() < 480) {

				var fadeInTime = 0;

				body_lock();
			}

			dialog.fadeIn(fadeInTime, function(){

					if (chatOn != 0) return false;

					chatOn++;
			});

		return false;
	});

	// Маска телефона

	dialogPhone.inputmask({"mask": "+7 (999) 999-99-99"});


	// Валидация телефона и имени

	$('#dialog-name').on('keyup', function() {

		var text = $('#client-info_name').text();

		var name = $(this).val();

		$('#client-info_name').text(name);

		$.cookie('name', name, {expires: expiresTime});
	});

	var e = 0,
	nameVal = '';

	dialogPhone.on('keyup', function() {

		if (!$(this).inputmask("isComplete")) { return false; }

		var phoneVal = $(this).val();
		nameVal = $('#dialog-name').val();

		$('#client-info_phone').text(phoneVal);

		if (nameVal.length > 2) {

			$('#client-info_name').attr('data-speech', nameVal);
		}

		if ( e != 0 || $.cookie('e')) {

			$('#client-info_phone').text(phoneVal);
			return false;
		}

		e++;

		$('#step-12').show();

		$('#dialog-wrapper').animate({

			scrollTop: 900

		}, 200);

		$('#submit_clients_contacts').show();
		$('#change_clients_contacts').show();

	});

	// Нажатие на "изменить"

	$('#change_clients_contacts').on('click', function(){

		if (pressed != 0) return false;

		$('#dialog-name').val('');
		dialogPhone.val('');
		$('#client-info_phone').attr('data-speech', '').text('');
		$('#client-info_name').attr('data-speech', '').text('');

		$('#dialog-wrapper').animate({

			scrollTop: 600

		}, 200);
	});

	// Нажатие на "подтвердить"

	var pressed = 0; // нажата уже кнопка или нет

	$('#submit_clients_contacts').on('click', function(){

		var $this = $(this),
			roomName = $this.attr('data-product-name');

		var nameVal = $('#dialog-name').val();

		if (pressed != 0 || !dialogPhone.inputmask("isComplete")) {

			return false;
		}

		pressed++;
		$.cookie('pressed', pressed, {expires: expiresTime});


		$('#dialog-name').attr('readonly', 'readonly');
		dialogPhone.attr('readonly', 'readonly');


		$('#step-13').show();

		$('#dialog-wrapper').animate({

			scrollTop: 1200

		}, 200);

			if (nameVal != '') nameVal = nameVal + ', ';

			var lastSpeech = 'Хорошо, ' + nameVal + 'сейчас менеджер обработает Ваш запрос, проверит наличие номеров на Ваши даты и сразу же перезвонит. Наш телефон для связи: ',
			newStr = '',
			lastSpeechParagraf = $('#last-speech');

			lastSpeechParagraf.text(lastSpeech);


			$('#final-phone').show();

				var comment = '';

				$('#corp-step-0').find('.dialog_button-active').attr('data-value') == 1 ? comment += "Сколько приблизительно будет человек? Более 100; " : comment += "Сколько приблизительно будет человек? Менее 100; ";
				$('#corp-step-1').find('.dialog_button-active').attr('data-value') == 1 ? comment += "Потребуется конференц или банкетный зал? Да; " : comment += "Потребуется конференц или банкетный зал? Нет; ";
				$('#corp-step-2').find('.dialog_button-active').attr('data-value') == 1 ? comment += "Планируте ли Вы совершить инспекционный выезд на площадку? Да; " : comment += "Планируте ли Вы совершить инспекционный выезд на площадку? Нет; ";
				$('#corp-step-3').find('.dialog_button-active').attr('data-value') == 1 ? comment += "У вас уже есть предварительная смета? Да; " : comment += "У вас уже есть предварительная смета? Нет; ";
				comment += 'С формы «Чат с менеджером»';
				comment += ' ; С сайта ' + domain_hotel_name;

				if ($.cookie('name') == null) var name = '';

				else {var name = $.cookie('name');}

				var formData = 'name=' + $('#dialog-name').val() + '&phone=' + $('#dialog-phone').val() + '&dopinfo=' + comment + '&hotel=' + domain_hotel_name + '&hotel_id=10640&knight_id=10640&corp=1&u=' + $('body').attr('data-u');

			$.ajax({
				type: "POST",
				url: 'https://la-melia.ru/php/knight_bron_systemice.php',
                data: formData,
				beforeSend: function(){

					if (formIsSent != 0) {

						return false;
					}

					formIsSent++;

				},
				success: function(data){

				ym(24221908, 'reachGoal', 'send_form_dialog');

				gtag('event', 'goal_allgoal_1', {'event_category': 'goal_allgoal_'}); 
				gtag('event', 'send_form_dialog_corp_1', {'event_category': 'send_form_dialog_corp_'});


				if ($(window).width() > 480) {

					ym(24221908, 'reachGoal', 'get_chat_button_5');
					ym(24221908, 'reachGoal', 'get_chat_click_5');
				}

				else {

					ym(24221908, 'reachGoal', 'get_chat_button_mobile_5');
					ym(24221908, 'reachGoal', 'get_chat_click_mobile_5');
				}

	          }
	      });
		});









});