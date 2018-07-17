import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { isLogin } from './auth'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogin()) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next();
  } 
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
