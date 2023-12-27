const isDev = process.env.NODE_ENV === 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',

  ssr: true,

  devtools: { enabled: true },

  devServer: {
    port: 11111,
    url: "http://localhost:11111",
  },

  app: {
    pageTransition: { name: 'pages', mode: 'out-in' },
    layoutTransition: { name: 'layouts', mode: 'out-in' },
    head: {
      meta: [
        // { hid: 'description', name: 'description', content: this.$t('seo.description') },
        // { hid: 'keywords', name: 'keywords', content: this.$t('seo.keywords') }
      ],
      // title: `星锤 - ${this.$t('nav.name')} - ${this.$t('index.title')} - ${this.$t('footer.corporate_name')}`,
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  runtimeConfig: {
    public: {

    }
  },

  plugins: [],

  css: ['@/assets/css/index.scss', '@unocss/reset/tailwind.css'],

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    ['@nuxtjs/i18n', {
      vueI18n: './i18n.config.ts',
      // baseUrl:'',
      strategy: 'no_prefix',
      defaultLocale: 'en',

      // lazy: true,
      // langDir: 'assets/lang',
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English(US)',
          // file: 'en_us/lazy.ts'
        },
        {
          code: 'zh',
          iso: 'zh-Hans',
          name: '简体中文',
          // file: 'zh_cn/lazy.ts'
        }
      ],
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'lang'
      }
    }],

  ],


  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-turkey'],
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', './src/types/type.d.ts'],
      },
    },
  },

  build: {
    transpile: [],
  },

  vue: {
    compilerOptions: {},
  },

  routeRules: {},

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";'
        }
      }
    },
    // 移除调试代码
    esbuild: {
      // drop: process.env.NUXT_API_ENV !== 'dev' ? ['console', 'debugger'] : [], //移除console与debugger
    },
    // server: {
    //   proxy: {
    //       '/api': {
    //           target:'http://localhost:10000/server/api',
    //           // target: process.env.NODE_ENV === 'development' ? 'http://localhost:10000/server/api' : '120.24.57.243:10000/server/api',
    //           changeOrigin: true,
    //           prependPath: true,
    //       },
    //   },
    // } 
  },

  nitro: {
    // 客户端渲染时
    devProxy: {
      "/api": {
        target: isDev ? 'http://localhost:10000/server/api' : 'http://starhammer.backend.josenong.top/server/api',
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  components: true,

})
