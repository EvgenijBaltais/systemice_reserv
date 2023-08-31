<template>
	<div class="wrapper news">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">НОВОСТИ</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">07 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main bg-bg">

			<pageHeader/>

			<div class="news-box">
				<div class="article-box">
					<div class="bl-article">
						<h1></h1>
						<div class="line"></div>
						<p class="p-subtitle">Подзаголовок: <b class = "p-subtitle-c"></b></p>
						<div class="news-slider">
							<div class="container-sl">
								<a class="arrow-left"></a>
								<a class="arrow-right"></a>
								<img class="sl-search" src="@/assets/images/icons/search.png">
								<div class="news-slides"></div>
							</div>
							<div class="bl-preview">
							<div class="item-dots item-service-dots"></div>
							</div>
						</div>
						<p class="p-article"></p>
					</div>
				</div>
				<div class="line-mob"></div>
				<div class="bl-list">
						<a class="arrow-top"></a>
						<a class="arrow-bottom"></a>
					<div class="news-min">
						<div class = "news-slider-wrapper"></div>
					</div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">07 </span>
					<span class="bl-page"> / 08</span>
				</div>
				<copyright/>
			</div>
		</div>

		<blRight/>

		<div class="bottom-bg"></div>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import mainLogo from '@/components/main_logo'
import copyright from '@/components/copyright'
import pageHeader from '@/components/page_header'


export default {
	head() {
		return {
			title: 'Systemice - новости',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'News page description'
				}
			]
		}
	},
	data(){
		return {
			news: [
			{
				title: `"ФОРСАЖ 9" ПОБИЛ РЕКОРД ПО СБОРАМ С БОЛЬШИМ ОТРЫВОМ`,
				doptitle: `Может быть тут указывать автора`,
				date: '13.09.2020',
				text: `Девятый "Форсаж", который только теперь вышел в Северной Америке (общая задержка проката из-за пандемии составила год), поставил в свои первые выходные новый рекорд.
				Вышел трейлер нового фильма об отношениях принца Гарри с Меган Маркл Как сообщает Variety, фильм собрал 70 миллионов долларов в домашнем прокате. И это - самый успешный (причём с большим отрывом) показатель среди сборов в эпоху коронавируса. И даже больше - со времени выхода фильма "Звёздные войны: Скайуокер. Восход" (2019). Ранее "пандемийный" рекорд принадлежал второму "Тихому месту" (48,3 млн).
				Ещё немного интересной статистики: 60% зрителей были мужчинами, 51% - не старше 25 лет, 37% - латиноамериканцами, 35% - белыми, 16 - афроамериканцами, 8 - азиатского происхождения.
				Девятый "Форсаж", который только теперь вышел в Северной Америке (общая задержка проката из-за пандемии составила год), поставил в свои первые выходные новый рекорд.
				Вышел трейлер нового фильма об отношениях принца Гарри с Меган Маркл Как сообщает Variety, фильм собрал 70 миллионов долларов в домашнем прокате. И это - самый успешный (причём с большим отрывом) показатель среди сборов в эпоху коронавируса. И даже больше - со времени выхода фильма "Звёздные войны: Скайуокер. Восход" (2019). Ранее "пандемийный" рекорд принадлежал второму "Тихому месту" (48,3 млн).
				Ещё немного интересной статистики: 60% зрителей были мужчинами, 51% - не старше 25 лет, 37% - латиноамериканцами, 35% - белыми, 16 - афроамериканцами, 8 - азиатского происхождения.`,
				pics: [
				'images/news/1/1.jpg',
				'images/news/1/2.jpg',
				'images/news/1/3.jpg',
				'images/news/1/4.jpg'
				]
			},
			{
				title: `Джордж Мартин напишет новый финал "Игры престолов"`,
				doptitle: `Может быть тут указывать автора`,
				date: '28.06.2021',
				text: `Американский писатель, продюсер и сценарист Джордж Мартин, вот уже десять лет глумящийся над читателями обещаниями дописать шестой том "Песни Льда и Пламени", дал новый зарок.
				Как оказалось, новеллиста все-таки не устроил финал сериала "Игра престолов", в основу которого частично легли его книги, так что в романе финал будет, естественно, совершенно другим.
				Об этом демиург ПЛиП возвестил в интервью WTTW Chicago. Поясняя, что был крайне удивлен скоростью, с которой сериал начали и закончили, успев далеко обогнать автора, пока он там копошился.`,
				pics: [
				'images/news/2/1.jpg',
				'images/news/2/2.jpg',
				'images/news/2/3.jpg',
				'images/news/2/4.jpg'
				]
			},
			{
				title: `Выход сериала "Основание" запланирован на 24 сентября...`,
				doptitle: `Может быть тут указывать автора`,
				date: '28.06.2021',
				text: `Американская компания Apple опубликовала в Сети новый тизер экранизации цикла "Основание" писателя Айзека Азимова. Премьера сериала состоится 24 сентября 2021 года.
				Проект расскажет зрителю о группе изгоев, на долю которых выпала опасная миссия по спасению человечества и сохранению цивилизации после смерти Галактической Империи. Главные роли в сериале исполнили Джаред Харрис и Ли Пейс...<br>
				Американская компания Apple опубликовала в Сети новый тизер экранизации цикла "Основание" писателя Айзека Азимова. Премьера сериала состоится 24 сентября 2021 года.
				Проект расскажет зрителю о группе изгоев, на долю которых выпала опасная миссия по спасению человечества и сохранению цивилизации после смерти Галактической Империи. Главные роли в сериале исполнили Джаред Харрис и Ли Пейс...<br>
				Американская компания Apple опубликовала в Сети новый тизер экранизации цикла "Основание" писателя Айзека Азимова. Премьера сериала состоится 24 сентября 2021 года.
				Проект расскажет зрителю о группе изгоев, на долю которых выпала опасная миссия по спасению человечества и сохранению цивилизации после смерти Галактической Империи. Главные роли в сериале исполнили Джаред Харрис и Ли Пейс...`,
				pics: [
				'images/news/3/1.jpg'
				]
			},
			{
				title: `В Москве выпало до 70% от месячной нормы осадков`,
				doptitle: `Может быть тут указывать автора`,
				date: '28.06.2021',
				text: `"Наибольшее количество осадков зафиксировано на юго-западе столицы (53 мм), в центральном округе (43 мм), на севере и северо-западе (Волоколамское шоссе - 43 мм, Дмитровское шоссе - 41 мм)", - перечислили в ведомстве.
				В местах скоплений воды сейчас работают бригады "Мосводостока". Если где-то нужна их помощь, горожан просят сообщать по телефону: +7 495 657 87 03.
				Все городские системы жизнеобеспечения работают в штатном режиме, отметили в комплексе. Аварийных отключений из-за ухудшения погоды в столице не произошло."Наибольшее количество осадков зафиксировано на юго-западе столицы (53 мм), в центральном округе (43 мм), на севере и северо-западе (Волоколамское шоссе - 43 мм, Дмитровское шоссе - 41 мм)", - перечислили в ведомстве.
				В местах скоплений воды сейчас работают бригады "Мосводостока". Если где-то нужна их помощь, горожан просят сообщать по телефону: +7 495 657 87 03.
				Все городские системы жизнеобеспечения работают в штатном режиме, отметили в комплексе. Аварийных отключений из-за ухудшения погоды в столице не произошло."Наибольшее количество осадков зафиксировано на юго-западе столицы (53 мм), в центральном округе (43 мм), на севере и северо-западе (Волоколамское шоссе - 43 мм, Дмитровское шоссе - 41 мм)", - перечислили в ведомстве.
				В местах скоплений воды сейчас работают бригады "Мосводостока". Если где-то нужна их помощь, горожан просят сообщать по телефону: +7 495 657 87 03.
				Все городские системы жизнеобеспечения работают в штатном режиме, отметили в комплексе. Аварийных отключений из-за ухудшения погоды в столице не произошло.`,
				pics: [
				'images/news/4/1.jpg',
				'images/news/4/2.jpg',
				'images/news/4/3.jpg'
				]
			},
			{
				title: `В московском метро из-за подтопления приостановлено движение`,
				doptitle: `Может быть тут указывать автора`,
				date: '28.06.2021',
				text: `Сегодня, 28 июня на Москву и область обрушился сильный ливень с грозой. В результате действия стихии падают деревья, щиты с рекламой, рушатся крыши торговых центров. Об этом сообщает "Рамблер"
				А недавно появилась информация, что движение поездов на участке «Теплый стан» — «Новоясеневская» было временно остановлено. Это произошло по причине подтопления станции и вестибюля, сообщает Департамент транспорта Москвы.
				Также канал опубликовал видеоролики с кадрами затопления станций метрополитена.
				Кроме этого, движение остановлено еще на одном участке "голубой" ветки столичного метро, составы не ходят между "Киевской" и "Кунцевской". Об этом сообщил Дептранс Москвы.
				По причине ливня также приостановили движение поездов на Филевской линии метро между станциями «Багратионовская» и «Кунцевская».
				Напомним, столичные улицы начало подтапливать из-за мощного ливня, обрушившегося на город сегодня днем, 28 июня. Ранее метеорологи прогнозировали, что в столице ожидается "суперливень". В городе должно выпасть 70% месячной нормы осадков, предполагают эксперты.
				На кадрах, выложенных в Сеть, можно увидеть, что уровень воды на столичных дорогах уже достает кузовов автомобилей. В центре Москвы залиты веранды кафе, а мощные потоки ветра срывают с места зонты, столы и стулья. Местами порывы ветра доходят до 21-26 метров в секунду. Жители ряда московских районов сообщили, что там идет град.
				Отмечается, что такая погода пришла в Москву на смену аномально высоким температурам, которые сохранялись в столичном регионе в течение всей прошлой недели`,
				pics: [
				'images/news/5/1.jpg'
				]
			},
			{
				title: `Португальцы в матче 1/8 финала турнира проиграли бельгийцам`,
				doptitle: `Может быть тут указывать автора`,
				date: '28.06.2021',
				text: `В воскресенье сборная Португалии проиграла бельгийцам со счетом 0:1 в матче 1/8 финала чемпионата Европы и завершила выступление на турнире.
					"Мы не добились желаемого результата и покинули турнир раньше, чем хотели, - написал Роналду. - Но мы гордимся тем путем, который прошли, мы сделали все, чтобы снова побиться за титул чемпионов Европы, и эта команда доказала, что по-прежнему может доставить много радости португальцам. Наши болельщики неутомимо поддерживали команду от начала и до конца, мы бежали и боролись за них, чтобы оправдать оказанное нам доверие. Не удалось добиться того, чего хотели, но мы выражаем искреннюю и глубокую благодарность болельщикам".
						Роналду поздравил сборную Бельгии с выходом в четвертьфинал турнира и пожелал удачи другим командам.`,
				pics: [
				'images/news/5/1.jpg'
				]
			}
			],
			activeItemIndex: 0,
			activeItemIndexVertical: 0
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
  	},
	  mounted() {

			// Карусель

			let slides = document.getElementsByClassName('content-slide'),              // Слайды
				itemDots = document.getElementsByClassName('tr-bottom')

			// Добавить новости в правую колонку

			if (window.screen.width >= 480) {

				for (let i = 0; i < this.news.length; i++) {
					document.querySelector('.news-slider-wrapper').insertAdjacentHTML('beforeend', `
						<div class="slider-min${i == 0 ? ' slide-active' : ''}">
						<div class="sl-box">
						<div class="sl-img sl-img-backgound" style="background-image: url(/${this.news[i].pics[0]});"></div>
						<div class="sl-img">
						<p class="sl-text">${this.news[i].date}</p>
						<div class="news-line"></div>
						</div>
						</div>
						<p class="sl-text">${this.news[i].title}</p>
						</div>
					`)
				}
			}

			// Вставить данные в саму статью, если это десктопное разрешение и на мобильнике вставить все статьи сразу в общую ленту
			// Установить обработчики на стрелки

			new Promise(resolve => {

				if (window.screen.width >= 480) {
					this.mainArticle(this.news)
				}
				else {
					this.mobileAddArticles(this.news)
				}
				resolve()
			}).then(() => {
				document.querySelector('.arrow-left') ? document.querySelector('.arrow-left').addEventListener('click', this.moveLeft) : ''
				document.querySelector('.arrow-right') ? document.querySelector('.arrow-right').addEventListener('click', this.moveRight) : ''
			})

			// Нажатие на увеличение

			$('body').find('.sl-search').on('click', function(){
				$(this).parent().find('.visible-screen a').trigger('click')
			})

			// Нажатие на клавиатуре

			document.addEventListener('keydown', this.keyArrowsAction)

			//прокрутка
			if ($(window).width() > 630) {
				document.onwheel = function(event) {
					if (event.deltaY > 0) {
						var speed = event.deltaY;
						speed = Math.abs(speed);
						if (speed<10) {
						 this.activeItemIndex--;
						 this.activeItemIndex < 0 ? this.activeItemIndex = slides.length - 1 : ''
						this.defineActiveSlide(slides, itemDots);
						 for (let i = 0; i < itemDots.length; i++) {
							itemDots[i].classList.remove('tr-active');
						}
						itemDots[this.activeItemIndex].classList.add('tr-active');
					}
				}
				else {
					var speed = event.deltaY;
					speed = Math.abs(speed);
					if (speed<10) {
						this.activeItemIndex++;
						this.activeItemIndex >= slides.length ? this.activeItemIndex = 0 : ''
						this.defineActiveSlide(slides, itemDots);
						for (let i = 0; i < itemDots.length; i++) {
							itemDots[i].classList.remove('tr-active');
						}
						itemDots[this.activeItemIndex].classList.add('tr-active');
					} 
				}
			}
		}
			//конец

			// Нажатие на красную точку
			for (let i = 0; i < itemDots.length; i++) {
				itemDots[i].addEventListener('click', function(e){
					let index = this.getArrayIndex(itemDots, e);
					this.activeItemIndex = index;
					this.defineActiveItem(itemDots, index);
					this.defineActiveSlide(slides, itemDots);
				})
			}

			// Вертикальная карусель

			let verticalSlides = document.getElementsByClassName('slider-min'),         // Слайды
				verticalSlider = document.querySelector('.news-min')                  // Слайдер

				if (document.querySelector('.arrow-top')) {
					document.querySelector('.arrow-top').addEventListener('click', function(e){

						if (this.activeItemIndexVertical >= verticalSlides.length - 1) {
							$('.arrow-top').css('border-color','#d8d8d8');
							return false
						}

						$('.arrow-top').css('border-color','#ff0000');
						this.activeItemIndexVertical++;
						this.verticalSliderAction()
					})
				}

				if (document.querySelector('.arrow-bottom')) {
					document.querySelector('.arrow-bottom').addEventListener('click', function(e) {

						if (this.activeItemIndexVertical <= 0) {
							$('.arrow-bottom').css('border-color','#d8d8d8')
							return false
						}

						$('.arrow-bottom').css('border-color','#ff0000')
						this.activeItemIndexVertical--
						this.verticalSliderAction()
					})
				}

				// Нажатие на отдельный элемент

				for (let i = 0; i < verticalSlides.length; i++) {

					verticalSlides[i].addEventListener('click', () => {

						this.activeItemIndex = i;

						for (let k = 0; k < verticalSlides.length; k++) {
							document.getElementsByClassName('slider-min')[k].classList.remove('slide-active');
						}
						verticalSlides[this.activeItemIndex].classList.add('slide-active');

						this.mainArticle(this.news, i)
					})
				}
	  },
	methods: {
		keyArrowsAction(){

			let slides = document.getElementsByClassName('content-slide'),
				itemDots = document.getElementsByClassName('tr-bottom')

			if (event.code == 'ArrowLeft') {
				this.activeItemIndex--;
				this.activeItemIndex < 0 ? this.activeItemIndex = slides.length - 1 : ''
				this.defineActiveSlide(slides, itemDots);
				for (let i = 0; i < itemDots.length; i++) {
					itemDots[i].classList.remove('tr-active');
				}
				itemDots[this.activeItemIndex].classList.add('tr-active')
			}

			if (event.code == 'ArrowRight') {
				this.activeItemIndex++;
				this.activeItemIndex >= slides.length ? this.activeItemIndex = 0 : ''
				this.defineActiveSlide(slides, itemDots);
				for (let i = 0; i < itemDots.length; i++) {
					itemDots[i].classList.remove('tr-active');
				}
				itemDots[this.activeItemIndex].classList.add('tr-active')
			}
		},
		moveLeft(){

		let slides = document.getElementsByClassName('content-slide'),
			itemDots = document.getElementsByClassName('tr-bottom')

			this.activeItemIndex--;
			this.activeItemIndex < 0 ? this.activeItemIndex = slides.length - 1 : ''
			this.defineActiveSlide(slides)

			if (!itemDots.length) return false

			for (let i = 0; i < itemDots.length; i++) {
				itemDots[i].classList.remove('tr-active');
			}
			itemDots[this.activeItemIndex].classList.add('tr-active');
		},
		moveRight(){

		let slides = document.getElementsByClassName('content-slide'),
			itemDots = document.getElementsByClassName('tr-bottom')

			this.activeItemIndex++;
			this.activeItemIndex >= slides.length ? this.activeItemIndex = 0 : ''
			this.defineActiveSlide(slides)

			if (!itemDots.length) return false

			for (let i = 0; i < itemDots.length; i++) {
				itemDots[i].classList.remove('tr-active');
			}
			itemDots[this.activeItemIndex].classList.add('tr-active');
		},
		// Функция, которая получает индекс элемента
		getArrayIndex(arr, event){
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] == event.target) return i;
			}
		},
		// Функция, которая делает активным красную точку
		defineActiveItem(arr, index) {
			for (let i = 0; i < arr.length; i++) {
				arr[i].classList.remove('tr-active');
			}
			arr[index].classList.add('tr-active');
		},
		defineActiveSlide (arr1) {
			for (let i = 0; i < arr1.length; i++) {
				arr1[i].classList.remove('hidden-screen-news');
				arr1[i].classList.remove('visible-screen');
				i == this.activeItemIndex ? arr1[i].classList.add('visible-screen') :  arr1[i].classList.add('hidden-screen-news');
			}
		},
		verticalSliderAction() {

			for (let i = 0; i < verticalSlides.length; i++) {
				document.getElementsByClassName('slider-min')[i].classList.remove('slide-active');
			}

		   document.getElementsByClassName('slider-min')[this.activeItemIndexVertical].classList.add('slide-active')
		},
		mobileAddArticles() {

		   new Promise(resolve => {

				document.querySelector('.news-box').innerHTML = ''

				for (let i = 0; i < this.news.length; i++) {

					// Картинки для новостей

					let picsHtml = ''

					for (let k = 0; k < this.news[i].pics.length; k++) {
						picsHtml += `<div class="news-sldr-box content-slide ${k == 0 ? 'visible-screen' : 'hidden-screen-news'}">
							<a href="/${this.news[i].pics[k]}" class="lightcase-news-pic" data-rel="lightcase:myCollection-${i}">
								<img src="/${this.news[i].pics[k]}">
							</a>
						</div>`
					}

					document.querySelector('.news-box').insertAdjacentHTML('beforeend', `<div class="article-box">
							<div class="bl-article">
								<h1>${this.news[i].title}</h1>
								<div class="line"></div>
								<p class="p-subtitle">Подзаголовок: <b class = "p-subtitle-c">${this.news[i].doptitle}</b></p>
								<div class="news-slider">
									<div class="container-sl">
										<a class="arrow-left-m"></a>
										<a class="arrow-right-m"></a>
										<img class="sl-search" src="../images/icons/search.png">
										<div class="news-slides">${picsHtml}</div>
									</div>
								</div>
								<p class="p-article">${this.news[i].text}</p>
							</div>
						</div>
						<div class="line-mob"></div>`)
				}

				resolve()

			}).then(() => {

				if (window.screen.width > 992) {
					$('body').find('.lightcase-news-pic').lightcase({
						maxWidth: 1000,
						maxHeight: 1000,
						swipe: true
					})
				}
				else if (window.screen.width < 992 && window.screen.width > 480) {
					$('body').find('.lightcase-news-pic').lightcase({
						maxWidth: '80%',
						maxHeight: '80%',
						swipe: true
					})
				}

				else {
					$('body').find('.lightcase-news-pic').lightcase({
						maxWidth: 300,
						maxHeight: 300,
						swipe: true
					}) 
				}
			})
		},
		mainArticle(news, index = 0) {

			this.activeItemIndex = 0

			document.querySelector('.bl-article h1').innerText = news[index].title
			document.querySelector('.bl-article .p-subtitle-c').innerText = news[index].doptitle
			document.querySelector('.bl-article .p-article').innerHTML = news[index].text

			new Promise(resolve => {

				document.querySelector('.news-slides').innerHTML = ''

				for (let i = 0; i < news[index].pics.length; i++) {
					document.querySelector('.news-slides').insertAdjacentHTML('beforeend', `
						<div class="news-sldr-box content-slide ${i == 0 ? 'visible-screen' : 'hidden-screen-news'}">
							<a href="${news[index].pics[i]}" class="lightcase-news-pic" data-rel="lightcase:myCollection">
								<img src="/${news[index].pics[i]}">
							</a>
						</div>
					`)
				}

				resolve()

			}).then(() => {

				if (window.screen.width > 992) {
					$('body').find('.lightcase-news-pic').lightcase({
						maxWidth: 1000,
						maxHeight: 1000,
						swipe: true
					})
				}
				else if (window.screen.width < 992 && window.screen.width > 480) {
					$('body').find('.lightcase-news-pic').lightcase({
						maxWidth: '80%',
						maxHeight: '80%',
						swipe: true
					})
				}

				else {
					$('body').find('.lightcase-news-pic').lightcase({
						maxWidth: 300,
						maxHeight: 300,
						swipe: true
					}) 
				}

				// Добавление точек

				let dots = '',                                                   // Точки
					dotsContainer = document.querySelector('.item-dots')         // Контейнер с нижними полосками

				dotsContainer.innerHTML = ''

				if (document.querySelectorAll('.content-slide').length == 1) return false

				for (let i = 0; i < document.querySelectorAll('.content-slide').length; i++) {
					i == 0 ? dots += '<div class="tr-bottom tr-active"></div>' : dots += '<div class="tr-bottom"></div>';
				}

				dotsContainer.innerHTML = dots;
			})
		}
	},
	beforeDestroy(){

		//document.querySelector('.arrow-left').removeEventListener('click', this.moveLeft)
		//document.querySelector('.arrow-right').removeEventListener('click', this.moveRight)
		//document.removeEventListener('keydown', this.keyArrowsAction)
	}
}

</script>