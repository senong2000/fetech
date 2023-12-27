import en from '@/assets/lang/en_us/default'
import zh from '@/assets/lang/zh_cn/default'

// console.log(en, zh)

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    en: en,
    zh: zh
  },
}))
