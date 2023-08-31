<template>
	<div class="wrapper team">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">КОМАНДА</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">05 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box" style = "padding-bottom: 0">
				<div class="glide-c">
					<div data-glide-el="track" class="glide__track">
						<ul class="glide__slides">
							<li class="glide__slide">
								<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud1.png" data-name = "Мирхайдарова Мария" data-position = "Руководитель компании" data-phone = "+7 (920) 765-09-78" data-email = "maria.m@corphotel.ru">
							</li>
							<li class="glide__slide">
								<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud2.png" data-name = "Марина Белоцерковская" data-position ="Руководитель отдела развития" data-phone = "+7 (985) 307-43-17" data-email = "marina.bel@corphotel.ru">
							</li>
							<li class="glide__slide">
								<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud3.png" data-name = "Георгиев Алексей" data-position = "Руководитель корпоративного отдела" data-phone = "+7 (906) 733-04-01" data-email = "georgiev_aleksey131@corphotel.ru">
							</li>
							<li class="glide__slide">
								<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud4.png" data-name = "Сергеева Валерия" data-position = "Старший менеджер" data-phone = "+7 (906) 733-04-01" data-email = "georgiev_aleksey131@corphotel.ru">
							</li>
							<li class="glide__slide">
								<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud5.png" data-name = "Евграфов Артур" data-position = "Руководитель IT отдела" data-phone = "+7 (906) 044-15-73" data-email = "a.evgrafov@systemice.ru">
							</li>
							<li class="glide__slide">
								<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud6.png" data-name = "Крюкова Анастасия" data-position = "Главный маркетолог" data-phone = "+7 (977) 265-97-38" data-email = "kryukova_anastasiya@corphotel.ru">
							</li>
							<li class="glide__slide">
								<img class="sotrud-img main-sotrud-img" src="@/assets/images/sotrud7.png" data-name = "Ларин Станислав" data-position = "Руководитель рекламного отдела" data-phone = "+7 (903) 666-17-87" data-email = "stanislav.l@corphotel.ru">
							</li>
						</ul>
					</div>
				</div>
				<div class="right-wth">
					<h1 class="h1-more h1-manager-data" id = "h1-manager-data">МАРИНА БЕЛОЦЕРКОВСКАЯ</h1>
					<div class="line"></div>
					<h3 class="h3 h3-more h3-manager-data" id = "h3-manager-data">РУКОВОДИТЕЛЬ ОТДЕЛА РАЗВИТИЯ</h3>
					<div class="sotrud-contact">
						<b>Телефон:</b> <a href="tel:79853074317" id = "phone-manager-data">+7 (985) 307-43-17</a> <br>
						<b>Email:</b> <a href = "mailto:marina.bel@corphotel.ru" id = "email-manager-data">marina.bel@corphotel.ru</a>
					</div>
				</div>
			</div>
			<div class="content-box no-vertical-padding">
				<div class="bl-preview">
					<div class="preview-container">
						<div class="spy-left"></div>
						<div class="spy-top"></div>
						<div class="spy-right"></div>
						<div class="spy-bottom"></div>
						<img class="link-arrow dop-arrow-left" src="@/assets/images/icons/arrow-left.png">
						<img class="link-arrow dop-arrow-right" src="@/assets/images/icons/arrow-right.png">
						<div class = "sl-wrapper-coverall" v-if = "windowWidth > 900"></div>
						<div class = "sl-wrapper-leftbox" v-if = "windowWidth > 900" @click = "moveLeft"></div>
						<div class = "sl-wrapper-rightbox" v-if = "windowWidth > 900" @click = "moveRight"></div>
						<div class = "sl-wrapper-shadow glide">
							<div data-glide-el="track" class="sl-wrapperglide__track">
								<ul class="glide__slides">
									<li class="glide__slide">
										<img src = "@/assets/images/mini/1.png" class="sl-teammate preview-item" data-name = "Мирхайдарова Мария" data-position = "Руководитель компании">
									</li>
									<li>
										<img src = "@/assets/images/mini/2.png" class="sl-teammate preview-item" data-name = "Марина Белоцерковская" data-position ="Руководитель отдела развития">
									</li>
									<li class="glide__slide">
										<img src = "@/assets/images/mini/3.png" class="sl-teammate preview-item" data-name = "Георгиев Алексей" data-position = "Руководитель корпоративного отдела">
									</li>
									<li class="glide__slide">
										<img src = "@/assets/images/mini/4.png" class="sl-teammate preview-item" data-name = "Сергеева Валерия" data-position = "Главный менеджер">
									</li>
									<li class="glide__slide">
										<img src = "@/assets/images/mini/5.png" class="sl-teammate preview-item" data-name = "Евграфов Артур" data-position = "Руководитель IT отдела">
									</li>
									<li class="glide__slide">
										<img src = "@/assets/images/mini/6.png" class="sl-teammate preview-item" data-name = "Крюкова Анастасия" data-position = "Главный маркетолог">
									</li>
									<li class="glide__slide">
										<img src = "@/assets/images/mini/7.png" class="sl-teammate preview-item" data-name = "Ларин Станислав" data-position = "Руководитель рекламного отдела">
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class = "item-dots">
						<div class="dots-container glide-b">
							<div data-glide-el="track" class="glide__track">
								<ul class="glide__slides"></ul>
							</div>
						</div>
					</div>
					<div class="arrow-left" @click = "moveLeft"></div>
					<div class="arrow-right" @click = "moveRight"></div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">05 </span>
					<span class="bl-page"> / 08</span>
				</div>
				<copyright/>
			</div>
		</div>
		<blRight/>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import mainLogo from '@/components/main_logo'
import copyright from '@/components/copyright'
import pageHeader from '@/components/page_header'
import Glide from '@glidejs/glide'

export default {
	head() {
		return {
			title: 'Systemice - наша компания',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Team page description'
				}
			]
		}
	},
	data(){
		return {
			glide: {},
			glide_dots: {},
			glide_sotrud: {},
			sotrudSlider: 0,
			windowWidth: 0
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
  	},

	  mounted(){

		  // Узнать ширину экрана

		  this.windowWidth = window.screen.width

		let dotsContainer = document.querySelector('.dots-container .glide__slides'),          	// Контейнер с нижними полосками
			$this = this,
			items = document.querySelectorAll('.glide__slides>li:not(.glide__slide--clone)')  // Менеджеры в превью-карусели

		  // Включать слайдер сотрудников или нет - в зависимости от размера экрана
		  window.screen.width > 630 ? '' : this.sotrudSlider = 1                                                                  

			// Карусель миниатюр

			this.glide = new Glide('.glide', {
				type: 'carousel',
				startAt: 1,
				gap: 0,
				focusAt: 'center',
				animationDuration: 500,
				animationTimingFunc: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
			})

			this.glide_dots = new Glide('.glide-b', {
				type: 'carousel',
				startAt: 1,
				gap: 10,
				perView: 1,
				animationDuration: 500,
				animationTimingFunc: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
			})

			this.glide_sotrud = new Glide('.glide-c', {
				type: 'carousel',
				startAt: 1,
				gap: 0,
				perView: 1,
				animationDuration: 500,
				animationTimingFunc: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
			})

			let glide = this.glide,
				glide_dots = this.glide_dots,
				glide_sotrud = this.glide_sotrud

			glide.on('run', function() {

				glide_dots.go('=' + glide.index)

				if ($this.sotrudSlider) {
					glide_sotrud.go('=' + glide.index) 
					return false
				}

				$this.changePortrait(glide.index)
				$this.changeManagerData(glide.index)
			})

			glide.mount()

		// Точки

		new Promise((resolve) => {

			let dots = ''
			for (let i = 0; i < document.querySelectorAll('.glide__slides>li:not(.glide__slide--clone)').length; i++) {
				// Добавление точек
				dots += '<li class="glide__slide"><div class="tr-bottom"></div></li>'
			}
			if (dotsContainer) dotsContainer.innerHTML = dots

			resolve()

		}).then(() => {

			// Карусель точек

			glide_dots.mount()

			// Большие фото менеджеров - карусель на маленьком экране

			glide_sotrud.on('run', function() {

				glide_dots.go('=' + glide_sotrud.index)
				glide.go('=' + glide_sotrud.index)
				$this.changeManagerData(glide.index)
			})

			this.sotrudSlider ? glide_sotrud.mount() : ''

			// Клавиатура

			document.addEventListener('keydown', this.keyArrowsAction)
		})
	  },
	  methods: {
		keyArrowsAction(){

			if (event.code == 'ArrowLeft') {
				this.glide.go('<')
				this.glide_dots.go('<')

				if (this.sotrudSlider) {
					this.sotrudSlider ? this.glide_sotrud.go('<') : ''
					return false
				}

				this.changePortrait(this.glide.index)
				this.changeManagerData(this.glide.index)
			}

			if (event.code == 'ArrowRight') {
				this.glide.go('>')
				this.glide_dots.go('>')

				if (this.sotrudSlider) {
					this.sotrudSlider ? this.glide_sotrud.go('>') : ''
					return false
				}

				this.changePortrait(this.glide.index)
				this.changeManagerData(this.glide.index)
			}
		},
		moveRight(){

			this.glide.go('>')
			this.glide_dots.go('>')

			if (this.sotrudSlider) {
				this.glide_sotrud.go('>')
				return false
			}

			this.changePortrait(this.glide.index)
			this.changeManagerData(this.glide.index)
		},
		moveLeft(){

			this.glide.go('<')
			this.glide_dots.go('<')

			if (this.sotrudSlider) {
				this.glide_sotrud.go('<')
				return false
			}

			this.changePortrait(this.glide.index)
			this.changeManagerData(this.glide.index)
		},
		changePortrait(index) {

			document.querySelector('.glide-c').style.opacity = 0

			new Promise(resolve => {
				for (let i = 0; i < document.querySelectorAll('.glide-c .glide__slide').length; i++) {
					document.querySelectorAll('.glide-c .glide__slide')[i].style.display = 'none'
				}
				resolve()
			}).then(() => {
				document.querySelectorAll('.glide-c .glide__slide')[index].style.display = "flex"
			}).then(() => {
				document.querySelector('.glide-c').style.opacity = 1
			})
		},
		changeManagerData (index){

		let pic = document.querySelectorAll('.glide__slides>li:not(.glide__slide--clone)')[index].querySelector('img')

			document.getElementById('h1-manager-data').innerText = pic.getAttribute('data-name')
			document.getElementById('h3-manager-data').innerText = pic.getAttribute('data-position')
			document.getElementById('phone-manager-data').innerText = pic.getAttribute('data-phone')
			document.getElementById('phone-manager-data').setAttribute('href', 'tel:+' + pic.getAttribute('data-phone').replace(/\D/g, ""))
			document.getElementById('email-manager-data').innerText = pic.getAttribute('data-email')
			document.getElementById('email-manager-data').setAttribute('href', 'mailto:' + pic.getAttribute('data-email'))
		},
		wheelAction (e) {
				let delta;
				event = e || window.event;
				if (event.wheelDelta) {
					delta = event.wheelDelta / 120;
					if (window.opera) delta = -delta;
				}
				else if (event.detail) {
					delta = -event.detail / 3;
				}
				return delta
			}
	  },
	beforeDestroy(){

		document.removeEventListener('keydown', this.keyArrowsAction)
	}
}

</script>

<style scoped>

.dots-container {
	width: 34px;
}

</style>