import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'

Vue.use(toast)
Vue.use(VueLazyLoad, {
  // 这里可以设置很多属性，具体看文档
  loading:require('assets/img/common/placeholder.png')
})

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
