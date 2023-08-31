<template>
	<div class="wrapper contact">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">КОНТАКТЫ</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">08 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box contacts-wrapper">
				<div class="contact-info">
					<h1 class="h1">КОНТАКТЫ</h1>
					<div class="line"></div>
					<p class="p-contact"><b>Наш адрес:</b><br>г. Москва, ул. Бауманская д. 6, строение 2</p>
					<p class="p-contact"><b>Телефон:</b><br> +7 (495) 215-24-80</p>
					<p class="p-contact"><b>Электронная почта:</b><br> info@systemice.ru</p>
					<form class="contact-form" id = "contact-form" name = "contacts_form" @submit.prevent = "checkForm">
						<p>Заявка на обратный звонок</p>
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
							<div class="spy-left-btn"></div>
							<div class="spy-top-btn"></div>
							<div class="spy-right-btn"></div>
							<div class="spy-bottom-btn"></div>
						</div>
					</form>
				</div>
				<div class="contact-map">
					<div id="map-block"></div>
					<div class="copy-coordinat">
						<img src="@/assets/images/icons/sheet.png"><span id = "copy-text" data-clipboard-text="55.775555, 37.674597">Скопировать координаты для навигатора</span>
					</div>
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">08 </span>
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
import clipboardJS from 'clipboard'
import Inputmask from 'inputmask'
import ymaps from 'ymaps'
import axios from 'axios'

export default {
	head() {
		return {
			title: 'Контакты - Systemice Hotel Group Системайс Хотел Групп',
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
	                content: 'Systemice - корпоративные мероприятия',
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
	                content: `https://systemice.ru`,
	            }
			]
		}
	},
	data(){
		return {
			name: '',
			phone: '',
			agreeTerms: 'yes',
			im: new Inputmask("+7 (999) 999-99-99"),
			sendingForm: 0
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
  	},
	mounted(){

	/* Скопировать */

	if (document.getElementById('copy-text')) {
		let clipboard = new clipboardJS('#copy-text');

		clipboard.on('success', function(e) {
			document.getElementById('copy-text').innerText = 'Скопировано';
			setTimeout(function(){
				document.getElementById('copy-text').innerText = 'Скопировать координаты для навигатора';
			}, 1000)
		});
	}

	/* Скопировать, конец */

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


	let label = document.getElementsByClassName('checkbox-block');
	for (let i = 0; i < label.length; i++) {
		label[i].addEventListener('click', function(){
			label[i].querySelector('.i-agree').style = "color: white;"
		})
	}

		/* Карты */

		let myMap, myPlacemark,
			koordinats = [55.776108388031815, 37.67544507980347],
			companyName = 'Systemice Hotel Group',
			balloonContent = 'ул. Бауманская д.6с2.<br>8 этаж. 804 офис'

		ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
		  .then(maps => {

			myMap = new maps.Map('map-block', {
			  center: koordinats,
			  zoom: 12
			})
		
			myPlacemark = new maps.Placemark(koordinats, {
				hintContent: 'Systemice Hotel Group',
				balloonContent: 'ул. Бауманская д.6с2. Бизнес-центр Виктория Плаза. 8 этаж. 804 офис'
			})
			
			myMap.geoObjects.add(myPlacemark)
			myMap.setType('yandex#map')
			myMap.behaviors.disable('scrollZoom')
		  })
		  .catch(error => console.log('Failed to load Yandex Maps', error))

		/* Карты, конец */
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
					bodyFormData.append('form_name', form.getAttribute('name'))
					bodyFormData.append('u', document.body.getAttribute('data-u'))
					bodyFormData.append('dopinfo', 'Со страницы Контакты (systemice.ru/contact)')
					bodyFormData.append('hotel', 13632)
					bodyFormData.append('form_name_text', 'Со страницы Контакты (systemice.ru/contact)')

				axios.post('https://systemice.ru/knight_bron.php', bodyFormData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
				})
				.then(response => {

					this.sendingForm = 0

					console.log(response.data)

					if (!response.data || response.data == '') {
						form.querySelector('.send-button').value = "Ошибка!"
						return false
					}

					form.querySelector('.send-button').value = "Успешно!"

					this.$metrika.reachGoal('contacts_send')
				})
        }

	}
}

</script>