<template>
	<div class="wrapper partner">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">ПАРТНЕРЫ</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">06 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>
			<div class="content-box partner-wrapper">
				<div class="bl-partner">	
					<img class="img-partner" src="@/assets/images/partners/1.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/2.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/3.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/4.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/5.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/6.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/7.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
				<div class="bl-partner">
					<img class="img-partner" src="@/assets/images/partners/8.png">
					<div class="spy-left"></div>
					<div class="spy-top"></div>
					<div class="spy-right"></div>
					<div class="spy-bottom"></div>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">06 </span>
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

export default {
	head() {
		return {
			title: 'Партнеры - Systemice Hotel Group Системайс Хотел Групп',
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
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
  	},
	methods: {

	},
	  mounted() {

	},
	beforeDestroy() {

	}
}

</script>