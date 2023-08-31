<link rel="stylesheet" type="text/css" href="css/new_managers_dialog_whatsapp.css" />
<script src = "js/new_manager_dialog_whatsapp.js"></script>


<div class = "chat-with-manager" id = "chat-with-manager">
	<p class = "chat-title" id = "chat-title">Расчет</p>
	<img src="images/ico2.png" alt = "Чат с менеджером" id = "get-chat" class = "get-chat">
</div>

<div class = "dialog" id = "dialog" >

		<div class="isWritting" id="isWritting">
			
			<p>Пишет<span class = "writting-dot">.</span><span class = "writting-dot">.</span><span class = "writting-dot">.</span></p>
		</div>

	<div class = "dialog-title clearfix">
		<span class = "dialog-text">Онлайн расчет</span>
		<img src="images/close2.png" alt="" class = "dialog-close" id = "dialog-close">
	</div>
	<div class = "dialog-body">

		<div class = "dialog-wrapper" id = "dialog-wrapper">

			<div class = "managers-question dialog-step step-1" id = "step-1">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "">Здравствуйте, меня зовут Алена. Я помогу Вам с организацией.</p>
				</div>
			</div>

			<div class = "managers-question dialog-step" id = "step-2">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "Когда бы Вы хотели поехать?">Когда мероприятие?</p>
					<p class = "dialog-speech bold-text" data-speech = "">Выберите период проведения:</p>
				</div>
			</div>

			<div class = "managers-question dialog-step" id = "step-3">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<div class = "dialog-datepicker" id = "dialog-datepicker">
						<input type="hidden" id = "dialog-datepicker-from">
						<input type="hidden" id = "dialog-datepicker-to">
					</div>
				</div>
			</div>

			<div class = "managers-question dialog-step" id = "step-4">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p class = "orange-text" id = "client-info_dates" data-speech = ""></p>
				</div>
			</div>

			<div class = "managers-question" id = "step-top-order">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "У вас уже есть предварительная смета?" class = "printed_text">У вас уже есть предварительная смета?</p>
					<p class = "corp-submit-button-wrapper">
						<a class = "corp-submit corp-submit-button corp-submit-button-first chat-hidden-elem" data-value = "1">Да</a>
						<a class = "corp-submit corp-submit-button chat-hidden-elem" data-value = "0">Нет</a>
					</p>
				</div>
			</div>

			<div class = "managers-question dialog-step" id = "step-5">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<!--<p class = "dialog-speech" data-speech = "Отлично!"></p>-->
					<p data-speech = "Сколько будет взрослых?">Сколько будет взрослых?</p>
					<p id = "adult-values" class = "adult-values">

						<a href="#" class = "dialog-adult chat-hidden-elem" data-value = "1">1</a>
						<a href="#" class = "dialog-adult chat-hidden-elem" data-value = "2">2</a>
						<a href="#" class = "dialog-adult chat-hidden-elem" data-value = "3">3</a>
						<a href="#" class = "dialog-adult chat-hidden-elem" data-value = "4">4</a>
						<input type="text" class = "dialog-adult-input chat-hidden-elem" id = "dialog-adult-input" placeholder = "( _ )">
						<a class = "dialog-adult-submit chat-hidden-elem" id = "dialog-adult-submit">Ок</a>

						<p class = "">
							<a href = "" class="corp-arrive" id = "corp-arrive">Да</a>
						</p>
					</p>
				</div>
			</div>


<!-- Фразы корпов -->

			<div class = "corp-question corp-step" id = "corp-step-0">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "">Сколько приблизительно будет человек?</p>
					<p class = "corp-submit-button-wrapper">
						<a class = "corp-submit corp-submit-button corp-submit-button-first chat-hidden-elem" data-value = "0">Менее 100</a>
						<a class = "corp-submit corp-submit-button chat-hidden-elem" data-value = "1">Более 100</a>
					</p>
				</div>
			</div>

			<div class = "corp-question corp-step" id = "corp-step-1">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "">Потребуется конференц или банкетный зал?</p>
					<p>
						<a href="#" class = "corp-submit chat-hidden-elem" data-value = "1">Да</a>
						<a href="#" class = "corp-submit chat-hidden-elem" data-value = "0">Нет</a>
					</p>
				</div>
			</div>

			<div class = "corp-question corp-step" id = "corp-step-2">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "Потребуется конференц или банкетный зал?">Вы уже проводили мероприятия в парк-отеле <span id = "domain_name_new_title_bottom">«Воздвиженское»</span>?</p>
					<p>
						<a href="#" class = "corp-submit chat-hidden-elem" data-value = "1">Да</a>
						<a href="#" class = "corp-submit chat-hidden-elem" data-value = "0">Нет</a>
					</p>
				</div>
			</div>


			<div class = "corp-question corp-step" id = "corp-step-3">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "">Удобно ли получить предварительный расчёт в Whatsapp?</p>
					<p>
						<a href="#" class = "whatsapp-submit chat-hidden-elem" data-value = "1" id = "go-corp-whatsapp">Да</a>
						<a href="#" class = "corp-submit chat-hidden-elem" data-value = "0" id = "go-corp-phone">Нет</a>
					</p>
				</div>
			</div>

<!-- Фразы корпов, конец -->






			<div class = "managers-question dialog-step" id = "step-11">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "Прекрасно!"></p>
					<p data-speech = "У меня готово подходящее предложение для Вас, сообщите свои контактные данные - я перезвоню и дам подробную информацию:">У меня готово подходящее предложение для Вас, сообщите свои контактные данные - я перезвоню и дам подробную информацию:</p>
					<div class = "contact-text chat-hidden-elem" id = "contact-text">
						<p id = "insert_your_name" class = "insert_your_name">Ваше имя:</p>
						<input type="text" name = "name" class = "dialog-name" id = "dialog-name" placeholder="Имя">
						<p id = "insert_your_phone" class = "insert_your_phone">Ваш телефон: <span class = "required_phone">*</span></p>
						<input type="text" name = "phone" class = "dialog-phone" id = "dialog-phone" placeholder="+7 (___) ___-__-__">
					</div>
				</div>
			</div>

			<div class = "managers-question dialog-step" id = "step-12">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p data-speech = "Данные верны?">Данные верны?</p>
					<p id = "client-info_name" class = "client-info_name" data-speech = ""></p>
					<p id = "client-info_phone" class = "client-info_phone" data-speech = "+7 (___) ___-__-__"></p>
					<button id = "submit_clients_contacts" class = "submit_clients_contacts chat-hidden-elem">Подтвердить</button>
					<button id = "change_clients_contacts" class = "submit_clients_contacts chat-hidden-elem">Изменить</button>
			   		<p class="person-data">*Нажимая на кнопку "Подтвердить", вы даете согласие на обработку персональных данных</p>
				</div>
			</div>

			<div class = "managers-question dialog-step" id = "step-13">

				<img src="images/26m.jpg" alt="" class = "managers-photo">
				<div class = "question-text">
					<p id = "last-speech" data-speech = ""></p>
					<a class = "t-bron final-phone" id = "final-phone">8 (495) 228-18-73</a>
				</div>
			</div>
			<div class = "empty-block"></div>
		</div>
	</div>
</div>

<div class = "calc_overlay_wrapper calc_overlay_white" id = "calc_overlay_white">

    <div class = "calc-title">
        
        <span id = "calc-title-calendars">Дата заезда:</span>
        <img src="images/close2.png" alt="" class = "calc-close">
    </div>
    
    <div id = "calc-datepicker-1" class = "calc-datepicker">
        
    </div>

    <div id = "calc-datepicker-2" class = "calc-datepicker">
        
    </div>
    
    <div id = "calc-datepicker-1-main" class = "calc-datepicker">
        
    </div>

    <div id = "calc-datepicker-2-main" class = "calc-datepicker">
        
    </div>
</div>

<input type="hidden" id = "mobile-children-and-adults">