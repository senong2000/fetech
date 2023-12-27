import { defineStore } from 'pinia'

export const useAppStore = defineStore(
  'app',
  () => {
    const isSignin = ref<boolean>(false) // 登陆标识
    const layoutName = ref<any>('custom') // 布局名字
    return {
      layoutName, isSignin
    }
  },
  {
    persist: true,
  },
)
