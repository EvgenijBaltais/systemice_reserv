<link rel="stylesheet" type="text/css" href="../css/animate.css">
<link rel="stylesheet" type="text/css" href="../css/killer-styles.css">
<script src="../js/killer.js"></script>
<!-- Killer -->

<div class="get-free-call" data-reach-goal = "form_callback_0" style="z-index: 9999;">
	
	<div class = "flipper">
		<img src = "../images/white_phone.png" class = "get-free-call__img get-free-call__front">
		<p class = "get-free-call__text get-free-call__front get-free-call__mobile">Бесплатный звонок</p>
		<p class = "get-free-call__text get-free-call__back get-free-call__fullscreen">Закажите бесплатный звонок</p>
	</div>
</div>

<div class = "killer-wrapper">
	
	<div class = "killer-window">
		<img src="../images/close3.png" alt="Закрыть" title = "Закрыть" class = "killer-close">	
		<div class = "killer-content">
		<img src="../images/logo.png" alt="" class = "killer-manager-photo">
			<div class = "killer-content__visible">
				<form action="">
					<p class = "killer-text">Здравствуйте,<br>хотите мы перезвоним Вам<br>за 25 секунд?</p>
					<input type="text" class = "killer-phone phone-validated" name="phone" placeholder="+7 (___) ___-__-__">
					<button class = "killer-button">Позвоните мне!</button>
					<div class = "killer-timer">00:<span id = "call-me-timer">24</span>:<span id = "call-me-timer2">99</span></div>

					<!--<div class = "killer-choose-time">
						<a href = "#" class = "killer-choose-time__link">Выбрать удобное время для звонка</a>
					</div>-->
				</form>
			</div>

			<div class = "killer-content__hidden">
				<form action="">
					<p class = "killer-text">Выберите<br>удобное время звонка.</p>
					<div class = "choose-day-time clearfix">
						<div class="killer-choose-day">
							<select name="" class = "killer-select-day">
								<option value="">Понедельник</option>
								<option value="">Вторник</option>
								<option value="">Среда</option>
								<option value="">Четверг</option>
								<option value="">Пятница</option>
								<option value="">Суббота</option>
								<option value="">Воскресенье</option>
							</select>
						</div>
						<div class = "killer-between">в</div>
						<div class="killer-choose-hour">
							<select name="" class = "killer-select-time">
								<option value="">9:00</option>
								<option value="">10:00</option>
								<option value="">11:00</option>
								<option value="">12:00</option>
								<option value="">13:00</option>
								<option value="">14:00</option>
								<option value="">15:00</option>
								<option value="">16:00</option>
								<option value="">17:00</option>
								<option value="">18:00</option>
								<option value="">19:00</option>
								<option value="">20:00</option>
								<option value="">21:00</option>
								<option value="">22:00</option>
							</select>
						</div>
					</div>
					<input type="text" class = "killer-phone" name="phone" placeholder="(___) ___-__-__">
					<button class = "killer-button__call-waiting">Жду звонка!</button>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- Killer -->