import { useAppStore } from "~/stores/app";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // const appStore = useAppStore();
  // if (to.fullPath !== '/signin') {
  //   if (!appStore.isSignin) {
  //     setPageLayout('signin')
  //     return navigateTo('/signin')
  //   } else {
  //     setPageLayout('default')
  //   }
  // } else {
  //   setPageLayout('signin')
  // }
})
