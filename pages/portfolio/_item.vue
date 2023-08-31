<template>
	<div class="wrapper portfolio_in">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">Мероприятие</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page"></span>
				<span class="bl-page"></span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box">
				<div class="event-page-wrapper">
					<div class="event-page-sl">
						<div class="slider-block glide-b">
							<a class="arrow-left" @click = "moveLeft"></a>
							<a class="arrow-right" @click = "moveRight"></a>
							<div class="bl-info-wrapper glide__track" data-glide-el="track">
								<ul class="glide__slides glide__slides-b">
									<li class="content-slide glide__slide" v-for = "item in portfolioData[eventItem].pics">
										<div class="slides-img" :style="{backgroundImage: `url(${require('@/assets/images/portfolio/' + portfolioData[eventItem].picsFolder + '/' + item + '.jpg')})`}"></div>
									</li>
								</ul>
							</div>
							<div class="bl-preview">
								<div class="item-dots item-service-dots"></div>
							</div>
						</div>
					</div>
					<div class="inter-event-page">
						<div class="event-info">
							<span class="event-name-ins">{{portfolioData[eventItem].title}}</span>
							<div class="line"></div>
							<div class="event-desc">
								<p v-html="portfolioData[eventItem].dateData"></p>
								<p v-html="portfolioData[eventItem].membersData"></p>
								<p v-html="portfolioData[eventItem].spectators"></p>
							</div>
						</div>
						<form class="contact-form contact-info portfolio-form" name = "portfolio-form" @submit = "checkForm">
							<p>Хотите так же?</p>
							<div class="line"></div>
							<div class="form-line">
								<div class="input-box">
									<input type="text" name="name" class = "contact-name" placeholder="Ваше имя" v-model = "name">
									<div class="spy-left-input"></div>
									<div class="spy-top-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-bottom-input"></div>
								</div>
								<div class="input-box">
									<input type="text" name="phone" class = "contact-phone" placeholder="Телефон">
									<div class="spy-left-input"></div>
									<div class="spy-top-input"></div>
									<div class="spy-right-input"></div>
									<div class="spy-bottom-input"></div>
								</div>
							</div>
							<label class="checkbox-block">
								<input type="checkbox" name="" class="input-check" v-model="agreeTerms" true-value="yes" false-value="no">
								<span class="checkbox-style">
									<div class="spy-left"></div>
									<div class="spy-top"></div>
									<div class="spy-right"></div>
									<div class="spy-bottom"></div>
								</span>
								<span class = "i-agree">Я согласен на обработку персональных данных</span>
							</label>
							<div class="button-box">
								<input class="send-button" type="submit" value="Отправить">
								<div class="spy-left"></div>
								<div class="spy-top"></div>
								<div class="spy-right"></div>
								<div class="spy-bottom"></div>
							</div>
						</form>
					</div>
				</div>

					
				<div v-html = "portfolioData[eventItem].details"></div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page"></span>
					<span class="bl-page"></span>
				</div>
				<div class="bl-copyright">
					Ⓒ2014 - 2021
				</div>
			</div>
		</div>
		<blRight/>
	</div>
</template>

<script>

import blRight from '@/components/bl_right'
import mainLogo from '@/components/main_logo'
import pageHeader from '@/components/page_header'
import Glide from '@glidejs/glide'
import Inputmask from 'inputmask'
import axios from 'axios'


export default {
	head() {
		return {
			title: this.portfolioData[this.eventItem].title + ' - Проекты Systemice Hotel Group',
			script:[],
			meta: [
			{
				hid: 'name',
				name: 'name',
				content: 'Systemice Hotel Group'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам'
			},
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'Systemice Hotel Group Системайс Хотел Групп',
            },
            {
                hid: 'og:image',
                property: 'og:image',
                content: ``,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Организуем корпоративные мероприятия любого формата по лучшим ценам',
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: ``,
            }
			]
		}
	},
	data(){
		return {
			eventItem: this.$route.params.item - 1,
			portfolioData: this.$store.state.portfolioData,
			glide_b: {},
			im: new Inputmask("+7 (999) 999-99-99"),
			name: '',
			phone: '',
			agreeTerms: 'yes',
			sendingForm: 0
		}
	},
	components: {
		blRight, pageHeader, mainLogo
	},
	methods: {

		checkForm(e){

			e.preventDefault()

			if (this.agreeTerms == 'no' || !e.target.querySelector('.contact-phone').inputmask.isComplete()) {

				if (this.agreeTerms == 'no') {
					document.querySelector('.i-agree').style = "color: red;"
				}
				if (!e.target.querySelector('.contact-phone').inputmask.isComplete()) {
					document.querySelector('.contact-phone').classList.add('input-box-wrong')
				}
				return false
			}

			this.sendForm(e.target)
		},

		sendForm(form){

			if (this.sendingForm != 0) return false

				this.sendingForm = 1

			axios.interceptors.request.use((req) => {
				form.querySelector('.send-button').value = "Отправка..."
				return req
			}
			)

			let bodyFormData = new FormData()
				bodyFormData.append('name', form.querySelector('.contact-name').value)
				bodyFormData.append('phone', form.querySelector('.contact-phone').value)
				bodyFormData.append('item', this.portfolioData[this.eventItem].title)
				bodyFormData.append('form_name', form.getAttribute('name'))
				bodyFormData.append('u', document.body.getAttribute('data-u'))
				bodyFormData.append('dopinfo', `Со страницы Портфолио (systemice.ru/portfolio/), (${this.portfolioData[this.eventItem].title})`)
				bodyFormData.append('hotel', 13632)
				bodyFormData.append('form_name_text', 'Со страницы Портфолио (systemice.ru/portfolio/)')

			axios.post('https://systemice.ru/knight_bron.php', bodyFormData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.then(response => {

				if (!response.data || response.data == '') {
					form.querySelector('.send-button').value = "Ошибка!"
					return false
				}

				form.querySelector('.send-button').value = "Успешно!"

				this.$metrika.reachGoal('portfolio_order_send')
			})
		},

		moveLeft(){
			this.glide_b.go('<')
		},

		moveRight(){
			this.glide_b.go('>')
		}
	},
	mounted() {

	// Форма на странице Контакты

	let phones = document.getElementsByClassName("contact-phone");

	for (let i = 0; i < phones.length; i++) {
		this.im.mask(phones[i]);
	}

	for (let i = 0; i < phones.length; i++) {
		phones[i].addEventListener('keyup', function(){
			this.classList.remove('input-box-wrong');
		})
		phones[i].addEventListener('focus', function(){
			this.classList.remove('input-box-wrong');
		})
	}


			// Карусель glide js для информации рядом с картой

			this.glide_b = new Glide('.glide-b', {
				type: 'carousel',
				startAt: 0,
				perView: 1,
				gap: 5
			})

			this.glide_b.mount()

		},
		beforeDestroy() {

		}
	}

	</script>