// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'
import './static/libs/mui-master/dist/css/mui.css'
Vue.use(MintUi)
Vue.prototype.$ajax = Axios
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
