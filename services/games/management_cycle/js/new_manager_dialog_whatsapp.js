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
        startTime = 10000,					// Задержка появления диалога на компе
		expiresTime = 0.03,                // Время жизни cookie
		autoChatAgain = 1 * 60 * 1000,		// Если чат закрыт, то спустя это время он открывается повторно
		autoOpenTimes = 1,					// Количество повторных открываний
		phraseSpeed = 300,
		domain_hotel_name = "",
		hotel_id = 2439,
		knight_id = 168,
		chatAlreadyOpened = 0;

		resetCookie();
		
// Все фразы - и менеджер и клиент

$('.dialog-step').each(function(){

	steps.push($(this).attr('id'));  // Заполнение массива с id-шниками фраз менеджера и клиента
});



// Появление и закрытие окна диалога

if ($(window).width() >= 480) {


	if ($.cookie('closed_chat') == 1111) {   // Исправить на  == 1, чтобы использовать повторное всплытие

		closedDialog.show();

		// Если чат уже закрывался то он должен всплыть еще раз и после этого больше не открываться

		if ($.cookie('dont_show_chat') == 1) {

			var timeNow = Date.now(),
				openTime = $.cookie('openTime'),
				autoOpen = (openTime - timeNow) > 0;

			if (autoOpen) {

				setTimeout(function(){

					//ym(53306992, 'reachGoal', 'chat_fadein');

					closedDialog.hide();
					$('#dialog').fadeIn(phraseSpeed);
				}, openTime - timeNow);
			}
		}
	}

	else {

		closedDialog.show();
	}

	setTimeout(function(){

		if ($.cookie('chatAlreadyOpened') == 1) {

			return false;
		}

		if ($('#ui-datepicker-div').is(':visible')) {

			//return false;
		}

		if ($('#dialog').is(':hidden')) {

			//ym(53306992, 'reachGoal', 'chat_fadein');

			closedDialog.hide();
			$('#dialog').show();


			ym(53306992, 'reachGoal', 'get_game_click_cycle');

			getChat();
		}
	}, startTime);
}

else {

	closedDialog.show();

	//if ($.cookie('chatAlreadyOpened') == 1) {

	//	return false;
	//}

	if ($.cookie('closed_chat') == 1 && $.cookie('dont_show_chat') == 1){

		var timeNow = Date.now(),
			openTime = $.cookie('openTime'),
			autoOpen = (openTime - timeNow) > 0;

		if (autoOpen) {

			setTimeout(function(){

				closedDialog.hide();
				$('#dialog').fadeIn(phraseSpeed);

					body_lock();

				chatContinues ? continueChat() : getChat();

				//ym(53306992, 'reachGoal', 'chat_fadein_mobile');

			}, openTime - timeNow);
		}
	}

	else {

			setTimeout(function(){

				//if (datesClick == 1) {

				//	return false;
				//}

				ym(53306992, 'reachGoal', 'get_game_click_cycle');

				if (chatOn != 0) {return false;}
				chatOn++;

				if ($('#calc_overlay_white').is(':visible') || chatAlreadyOpened == 1 && $('#dialog').is(':visible')) {

					return false;
				}

				$.cookie('chatOn', chatOn, {expires: expiresTime});

				if ($.cookie('closed_chat') != 1) {

					dialog.fadeIn(phraseSpeed);

					body_lock();
				}

				chatContinues ? continueChat() : getChat();

			}, mobileStartTime);
	}	
}


	    // Вызов чата со значениями дат

	    $('#get_game_1, #get_game_2, #get_game_3, #get_game_4').on('click', function(){

			goToChat($(this).attr('id'));
	    });

function goToChat(formTypeId, dopinfo) {

	    	// Сброс чата, если он до этого вызывался и имеет какие-то данные

			//resetCookie();
			//resetChat();

			if (formTypeId == 'get_game_1' || formTypeId == 'get_game_2' || formTypeId == 'get_game_3' || formTypeId == 'get_game_4') {

			}

			if (formTypeId == 'get_game_1') {

				ym(53306992, 'reachGoal', 'get_game_1_cycle');
			}

			if (formTypeId == 'get_game_2') {

				ym(53306992, 'reachGoal', 'get_game_2_cycle');
			}

			if (formTypeId == 'get_game_3') {

				ym(53306992, 'reachGoal', 'get_game_3_cycle');
			}

			if (formTypeId == 'get_game_4') {

				ym(53306992, 'reachGoal', 'get_game_4_cycle');
			}


			if ($(window).width() > 480) {

				$('.dialog').css({'left': 0, 'right': 0, 'bottom': 0, 'top': 0, 'margin': 'auto'});
				$('#chat-with-manager').hide();
			}


        	dialog.show();
        	getChat();
}


function resetCookie() {

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

		$.cookie('corp_chat', null);
		$.cookie('private_chat', null);

		$.cookie('conference', null);
		$.cookie('eventhold', null);
		$.cookie('advanced_count', null);
		$.cookie('choosenNumber', null);

		$.cookie('clicked', null);
}


	// Закрытие чата и отправка заявки, если человек ввел телефон и закрывает форму, не отправив

	$('#dialog-close').on('click', function(){
		

		if ($(window).width() < 480) {

			body_unlock();
			//ym(53306992, 'reachGoal', 'close_manager_chat_mobile');
		}

		else {

			//ym(53306992, 'reachGoal', 'close_manager_chat');
		}


		dialog.fadeOut(100, function(){
			closedDialog.show();
			closedDialog.css('opacity', 1);


			$.cookie('closed_chat', 1, {expires: expiresTime});

		});

		return false;
	});





	closedDialog.on('click', function(){

		$.cookie('clicked', 1, {expires: expiresTime});


	if ($(window).width() > 480) {

		//ym(53306992, 'reachGoal', 'get_chat_click');

	}

	else {

		//ym(53306992, 'reachGoal', 'get_chat_click_mobile');
	}



		if ($(window).width() > 480) {

			$('#dialog').css({'left': 'auto', 'bottom': '30px', 'right': '30px', 'top': 'auto', 'margin': 'auto'});
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
					chatContinues ? continueChat() : getChat();
			});

		return false;
	});

	// Маска телефона

	dialogPhone.inputmask({"mask": "+7 (999) 999-99-99"});

	// Календарь - подключение и выбор даты

	let cld = 0;

	$('#dialog-datepicker').datepicker({

		minDate: 0,
		firstDay: 1,
		dateFormat: "dd.mm.yy",
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
		'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
		'Октябрь', 'Ноябрь', 'Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		closeText: 'Закрыть',
		currentText: 'Сегодня',
		firstDay: 1,
		prevText: "&#x3C;",
		nextText: "&#x3E;",
	    //range: 'period', // режим - выбор периода
	    numberOfMonths: 1,
	    onSelect: function(dateText, inst, extensionRange) {

	    $('#step-3').fadeIn(phraseSpeed);


			ym(53306992, 'reachGoal', 'get_game_1_1_cycle');

			ym(53306992, 'reachGoal', 'get_game_2_1_cycle');

			ym(53306992, 'reachGoal', 'get_game_3_1_cycle');

			ym(53306992, 'reachGoal', 'get_game_4_1_cycle');

			ym(53306992, 'reachGoal', 'get_game_click_1_cycle');


	    if (cld != 0) return false;

    	$('#dialog-wrapper').stop(false).animate({

    		scrollTop: $('#step-2').offset().top + 30

    	}, 500);

    	cld++;

	    }
	});

	let btn = 0;

	$('.number-button').on('click', function(){

		isActive($(this));

			ym(53306992, 'reachGoal', 'get_game_1_2_cycle');

			ym(53306992, 'reachGoal', 'get_game_2_2_cycle');

			ym(53306992, 'reachGoal', 'get_game_3_2_cycle');

			ym(53306992, 'reachGoal', 'get_game_4_2_cycle');

			ym(53306992, 'reachGoal', 'get_game_click_2_cycle');


		if (btn != 0) return false;

		$('#step-4').fadeIn(phraseSpeed);


    	$('#dialog-wrapper').stop(false).animate({

    		scrollTop: $('#step-3').offset().top + 70

    	}, 500);

		gtag('event', 'corp_form_aud', {'event_category': 'corp_form_aud_'});

		fbq('track', 'Lead');

		btn++;
	});



	let nmb = 0;

	let whatsapp = 0;

	let already = '';


	$('.answer-button').on('click', function(){

		isActive($(this));

		if ($(this).text() == "Да") {

			already = 'Уже участвовали в бизнес играх';
		}

		else {

			already = 'Раньше не участвовали в бизнес играх';
		}

		var landingName = document.getElementById('landing_name').value;

		var text = "https://api.whatsapp.com/send?phone=79096274198&text=Меня интересует: Бизнес-игра «Управленческий круговорот»; На дату: " + $('#dialog-datepicker').val() + "; Примерное кол-во человек: " + $('#step-3').find('.choosen-value').text() + "; " + already;
		var envyBoxText = "Меня интересует: " + landingName + "; На дату: " + $('#dialog-datepicker').val() + "; Примерное кол-во человек: " + $('#step-3').find('.choosen-value').text() + "; " + already;




		$('#whatsapp-button-onclick').attr('href', text);
		$('#envybox-button-onclick').attr('data-message', envyBoxText);

			ym(53306992, 'reachGoal', 'get_game_1_3_cycle');

			ym(53306992, 'reachGoal', 'get_game_2_3_cycle');

			ym(53306992, 'reachGoal', 'get_game_3_3_cycle');

			ym(53306992, 'reachGoal', 'get_game_4_3_cycle');

			ym(53306992, 'reachGoal', 'get_game_click_3_cycle');


		if (nmb != 0) return false;


		var scrollTopBlock = 230;

		var envybox = 1;

		if (envybox == 1) {

			scrollTopBlock = 70;
		}

		if (envybox == 1) {

			$('#step-x-envybox').fadeIn(phraseSpeed);
		}

		else if (whatsapp == 1 && $(window).width() < 480) {

			$('#step-x-whatsapp').fadeIn(phraseSpeed);
		}

		else {

			$('#step-11').fadeIn(phraseSpeed);
		}

    	$('#dialog-wrapper').stop(false).animate({

    		scrollTop: $('#step-4').offset().top + scrollTopBlock

    	}, 500);

		nmb++;
	});


	$('#whatsapp-button-onclick').on('click', function() {


		gtag('event', 'goal_allgoal_1', {'event_category': 'goal_allgoal_'}); 
		gtag('event', 'send_form_dialog_corp', {'event_category': 'send_form_dialog_corp_'});


			ym(53306992, 'reachGoal', 'get_game_1_4_cycle');

			ym(53306992, 'reachGoal', 'get_game_2_4_cycle');

			ym(53306992, 'reachGoal', 'get_game_3_4_cycle');

			ym(53306992, 'reachGoal', 'get_game_4_4_cycle');

			ym(53306992, 'reachGoal', 'get_game_click_4_cycle');


			ym(53306992, 'reachGoal', 'send_form_dialog_corp_cycle');

			ym(53306992, 'reachGoal', 'click_whatsapp_cycle');

			ym(53306992, 'reachGoal', 'whatsapp_button_onclick');

	});

	$('#envybox-button-onclick').on('click', function(){

		ym(53306992, 'reachGoal', 'envybox_button_onclick');
	});

	let phoneBtn = 0;

	$('#phone-button-onclick').on('click', function(){

		ym(53306992, 'reachGoal', 'stay_button_onclick');

		//isActive($(this));

		if (phoneBtn != 0) return false;

		$('#step-11').fadeIn(phraseSpeed);

    	$('#dialog-wrapper').stop(false).animate({

    		scrollTop: $('#step-4').offset().top + 330

    	}, 500);

		phoneBtn++;
	});


	// Начало диалога, первое, второе предложение, показ календаря

	function getChat() {

		$.cookie('chatAlreadyOpened', 1, {expires: expiresTime});


		if ($('#step-1').is(':visible')) {return false;};


		$('#' + steps[step_counter]).show();


		step_counter++;
		$.cookie('step_counter', step_counter);

		$('#' + steps[step_counter]).show();


		step_counter++;
		$.cookie('step_counter', step_counter);

	}

	// Начало диалога, первое, второе предложение, показ календаря, конец



	// Валидация телефона и имени

	$('#dialog-name').on('keyup', function() {

		var text = $('#client-info_name').text();

		var name = $(this).val();

		$('#client-info_name').text(name);

		clientsData.name = name;
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

		$.cookie('phone', phoneVal, {expires: expiresTime});

		if ( e != 0) {

			$('#client-info_phone').text(phoneVal);
			return false;
		}

		if ($.cookie('corp_chat') == 1) {

			$('#step-12').fadeIn(150);

			scrollDialog($('#' + steps[step_counter]), 1200);          // Скроллинг к нужному элементу
		}

		else {

			$('#step-12').fadeIn(150);

			scrollDialog($('#' + steps[step_counter]), 1200);          // Скроллинг к нужному элементу
		}

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

			scrollTop: $(this).offset().top + 500

		}, 300);
	});

	// Нажатие на "подтвердить"

	var pressed = 0; // нажата уже кнопка или нет

	$('#submit_clients_contacts').on('click', function(){
		
		//if(yaCounter53306992) { yaCounter53306992.reachGoal('send_request'); yaCounter53306992.reachGoal('goal_allgoal_0');}
		var $this = $(this);

		if (pressed != 0 || !dialogPhone.inputmask("isComplete")) {

			return false;
		}

		pressed++;
		$.cookie('pressed', pressed, {expires: expiresTime});


		$('#dialog-name').attr('readonly', 'readonly');
		dialogPhone.attr('readonly', 'readonly');


		// Костыль для того случая, если это продолжение чата на другой вкладке

		$('#step-13').fadeIn(150);



			scrollDialog($('#' + steps[step_counter]), 1400);          // Скроллинг к нужному элементу


			if (nameVal != '') nameVal = nameVal + ', ';

			//isWritting();

			var lastSpeech = 'Хорошо, ' + nameVal + 'сейчас менеджер обработает Ваш запрос и сразу же перезвонит. Наш телефон для связи: ',
			newStr = '',
			lastSpeechParagraf = $('#last-speech');

			lastSpeechParagraf.text(lastSpeech);

			var url, goal;

			var knight_id = parseInt($('body').attr('data-knight-id'));

			var hotelName = "Бизнес-игры",
				hotel_id = 5313,
				u = $('body').attr('data-u');


			$('#final-phone').show();



			var comment = "Меня интересует: Бизнес-игра «Управленческий круговорот» (systemice.ru/games/management_cycle); На дату: " + $('#dialog-datepicker').val() + "; Примерное кол-во человек: " + $('#step-3').find('.choosen-value').text() + "; " + already;
			var formData = "name=" + $('#dialog-name').val() + "&phone=" + $('#dialog-phone').val() + '&corp=' + 1 + '&hotel=' + hotelName + '&hotel_id=' + hotel_id + '&u=' + u + '&dopinfo=' + comment;


			$.ajax({
				type: "POST",
				url: 'http://marins-parkhotel.ru/scripts/bron_systemice.php',
                data: formData,
				beforeSend: function(){

					if (formIsSent != 0) {

						return false;
					}

					formIsSent++;

				},
				success: function(data){

					gtag('event', 'goal_allgoal_1', {'event_category': 'goal_allgoal_'}); 
					gtag('event', 'send_form_dialog_corp', {'event_category': 'send_form_dialog_corp_'});


					ym(53306992, 'reachGoal', 'get_game_1_4_cycle');

					ym(53306992, 'reachGoal', 'get_game_2_4_cycle');

					ym(53306992, 'reachGoal', 'get_game_3_4_cycle');

					ym(53306992, 'reachGoal', 'get_game_4_4_cycle');

					ym(53306992, 'reachGoal', 'get_game_click_4_cycle');


					ym(53306992, 'reachGoal', 'send_form_dialog_corp_cycle');
	          }
	      });
		});



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




    // Функция, которая проверяет активную ссылку (больше не используется)

    function isActive(link) {

    	if (!link.hasClass('choosen-value')) {

    		link.siblings('a').removeClass('choosen-value');
    		link.addClass('choosen-value');
    	}
    	else {

    		return false;
    	}
    }

    // Функция, которая скроллит диалог к текущей фразе (Параметры - element-тот элемент, к которому будет скроллинг; px - то что приплюсовывается к element, чтобы был отступ снизу; seconds - время анимации)

    function scrollDialog(element, px, seconds) {

    	px = px || 100;              // Аргумент по умолчанию.
    	seconds = seconds || 300;    // Аргумент по умолчанию.

    	$('#dialog-wrapper').stop(false).animate({

    		scrollTop: element.offset().top + px

    	}, 500);
    }


function continueChat() {

	if ($.cookie('dateIn') || $.cookie('dateOut')) {

		$('#dialog-datepicker-from').val($.cookie('calendarStart'));
		$('#dialog-datepicker-to').val($.cookie('calendarEnd'));

		$('#client-info_dates').attr('data-speech', 'Вы выбрали даты заезда: ' + $.cookie('dates'));
		$('#client-info_dates').text('Вы выбрали даты заезда: ' + $.cookie('dates'));
	}


		if ($.cookie('calendar_form_open') == 1) {

			$('#step-4').show();
			$('#step-top-order').show();
			$('#step-5').show();
			$('#step-5').find('.chat-hidden-elem').show();
		}

		else {

			$('#step-1').show();
			$('#step-2').show();
			$('#step-3').show();
			$('#step-4').show();
			$('#step-5').show();

			$('#client-info_dates').text('Вы выбрали даты заезда: ' + $.cookie('dates'));

			$('#adult-values').find('.chat-hidden-elem').show();
		}

		if ($.cookie('corp_chat') == 1) {

			continueCorp();
		}

		else if ($.cookie('private_chat') == 1) {

			continuePrivate();
		}

		$('#dialog-wrapper').animate({

			scrollTop: 10000

		}, 0);
}




function resetPrivateAndCorp() {

			$('.corp-step').hide();
			$('.corp-submit-button').removeClass('corp-submit-button-active');
			$('a').removeClass('choosen-value');
			$('#client-info_name').text();
			$('#client-info_phone').text();
			$('#dialog-name').val('');
			$('#dialog-phone').val('');
			$('#step-6').find('p').text('');
			$('#step-6').find('p').attr('data-speech', '');
			$('#step-6').hide();
			$('#step-7').hide();
			$('#step-8').find('p').text('');
			$('#step-8').find('p').attr('data-speech', '');
			$('#step-8').hide();
			$('#step-9').hide();
			$('#step-10').find('p').text('');
			$('#step-10').find('p').attr('data-speech', '');
			$('#step-10').hide();
			$('#step-x-whatsapp').hide();
			$('#step-11').hide();
			$('#step-12').hide();
			$('#step-13').hide();


			$('#dialog-children-input').val('');
			$('#dialog-rooms-input').val('');


			$.cookie('corp_chat', null);
			$.cookie('private_chat', null);

			$.cookie('conference', null);
			$.cookie('eventhold', null);
			$.cookie('advanced_count', null);
			$.cookie('name', null);
			$.cookie('phone', null);

			$.cookie('corp_people', null);

			$.cookie('step_counter', 4, {expires: expiresTime});

			$.cookie('b', null);
			$.cookie('c', null);
			$.cookie('d', null);
			$.cookie('e', null);

			$.cookie('clicked', null);

			$.cookie('chatAlreadyOpened', null);

			chatContinues = 0;
			formIsSent = 0;
}


});