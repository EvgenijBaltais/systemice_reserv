const webpack = require('webpack')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'systemice',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'keywords', content: '' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type:"text/css", href: "https://use.fontawesome.com/bccb4e85ab.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/fontstyle.css',
    'node_modules/@glidejs/glide/dist/css/glide.core.css',
    'node_modules/lightcase/src/css/lightcase.css',
    '@assets/css/style.css'
  ],
	__dangerouslyDisableSanitizersByTagID: {
    	'tracker': ['innerHTML']
	},
  script: [
	  {
	  	src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'

	  }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		{ src: '~/plugins/inputmask.js', mode: 'client' },
		{ src: '~/plugins/lightcase.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  generate: {
    fallback:'404.html'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  // 
  modules: [
    ['@gtarr/nuxtjs-yandex-metrika', {
        id: '24221908',
        webvisor: true,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
    }]
  ],
  router: {
    linkActiveClass: 'menu-active'
  },

  target: 'static',
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
	plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
