<template>
	<div class="wrapper portfolio">
		<div class="bl-l fl-column">
			<div class = "main-logo-left">
				<mainLogo/>
			</div>
			<div class="bl-menu-title">
				<span class="company-name">Проекты любой сложности</span>
			</div>
			<div class="bl-pagination">
				<span class="active-page">04 </span>
				<span class="bl-page"> / 08</span>
			</div>
		</div>
		<div class="main">
			<pageHeader/>

			<div class = "content-box portfolio-block">
				<div class = "videos-example">
					<h1 class = "videos-title">Видео с примерами нашей работы</h1>
					<p class = "videos-info">Команда Systemice подготовила и осуществила съемки различных проектов 2021 году. Была проделана огромная работа, чтобы мероприятие состоялось в лучшем виде!</p>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/1.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/CGessuZCMgs?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/2.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/cM9RQB-Z6bg?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/3.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/cGky8oRRo20?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/10.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/we0jH4TeB10?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/6.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/u76KtP66WZY?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/4.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/8hPYH6cHXsI?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/5.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/6iKz1cxNYqE?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/7.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/uWYxhy7bKpE?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/8.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/GLJep_vbZqc?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
				<div class="videos-example" @click = "startVideo($event)" :style="{backgroundImage: `url(${require('../../assets/images/videos/9.jpg')})`}">
					<iframe id="YoutubeVideo" width="100%" height="100%" style = "display: block;margin: 0 auto;" data-src="https://www.youtube-nocookie.com/embed/mTUpuGWaq5o?rel=0&fmt=18&html5=1&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
			
			<div class="content-box portfolio-block">
				<div v-for = "(item, index) in portfolioData"
				:key="item.id" :class="['sl-card', 'scrolling-portfolio-item', 'sl-box-' + (index === 0 ? 1 : 2)]"
				:style="{backgroundImage: `url(${require('@/assets/images/portfolio/' + item.picsFolder + '/1m.jpg')})`}">
					<NuxtLink :to = "{path: `/portfolio/${++index}`}">
						<div class="bg-hover">
							<div class="event-info">
								<span class="event-name">{{item.title}}</span>
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
			<div class="footer-mob">
				<div class="bl-pagination">
					<span class="active-page">04 </span>
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
			title: 'Портфолио - Systemice Hotel Group Системайс Хотел Групп',
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

			portfolioData: this.$store.state.portfolioData
		}
	},
	components: {
		blRight, pageHeader, mainLogo, copyright
	},
	mounted(){

	},
	methods: {
		startVideo(event){

			event.target.style.backgroundImage = 'none'
			event.target.querySelector('iframe').style.visibility = "visible"
			event.target.querySelector('iframe').setAttribute('src', event.target.querySelector('iframe').getAttribute('data-src'))
		},
	}
}

</script>