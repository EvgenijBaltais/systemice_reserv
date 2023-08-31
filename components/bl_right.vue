<template>
	<div class="bl-r content-container">
		<ul class="menu-list">
			<li class="menu-item">
				<NuxtLink to = "/">О компании</NuxtLink>
			</li>
			<li class="menu-item">
				<NuxtLink to = "/service">Услуги</NuxtLink>
			</li>
			<li class="menu-item">
				<NuxtLink to = "/tenders">Тендеры</NuxtLink>
			</li>
			<li class="menu-item">
				<NuxtLink to = "/portfolio">Портфолио</NuxtLink>
			</li><!--
			<li class="menu-item">
				<NuxtLink to = "/team">Команда</NuxtLink>
			</li>-->
			<li class="menu-item">
				<NuxtLink to = "/partner">Партнеры</NuxtLink>
			</li>
			<!--
			<li class="menu-item">
				<NuxtLink to = "/news">Новости</NuxtLink>
			</li>-->
			<li class="menu-item">
				<NuxtLink to = "/contact">Контакты</NuxtLink>
			</li>
		</ul>
		<div class="bl-other">
			<div class="more-portfolio">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<span>Другие наши работы</span>
			<div class="other-event">
				<div class="bl-small-event current" v-for = "(item, index) in portfolioData" :key="item.id">
					<NuxtLink :to="'/portfolio/' + ++index" class = "other-event-link">
						<img :src="require(`@/assets/images/portfolio/${item.picsFolder}/${item.pics[0]}.jpg`)" class = "">
						<span>{{item.title}}</span>
					</NuxtLink>
				</div>
			</div>
		</div>
		<div>
			<div class="bl-social">
				<a href="https://instagram.com/systemice_stream?igshid=MzRlODBiNWFlZA==" target = "_blank" class="social-link social-link-instagram">
					<img src="@/assets/images/icons/instagram.png">
				</a>
				<div class="spy-left"></div>
				<div class="spy-top"></div>
				<div class="spy-right"></div>
				<div class="spy-bottom"></div>
			</div>
			<div class="bl-copyright">
				Ⓒ2014 - 2023
			</div>
		</div>
	</div>
</template>


<script>


export default {
	data(){
		return {
			portfolioData: this.$store.state.portfolioData
		}
	},
	methods: {
	}
}

</script>