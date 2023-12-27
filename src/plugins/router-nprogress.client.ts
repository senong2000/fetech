import NProgress from 'nprogress';

/*配置加载*/
NProgress.configure({
  easing: 'ease-in', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.4,// 初始化时的最小百分比,
});

export default defineNuxtPlugin((): void => {

  useRouter().beforeEach((): void => {
    NProgress.start();
  });

  useRouter().afterEach((): void => {
    NProgress.done();
  });
})
