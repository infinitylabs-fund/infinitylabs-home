// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//切换语言
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n) // 挂载
// const i18n = new VueI18n({
//   locale: 'en-US',    // 语言标识
//   messages: {
//     'zh-CN': require('./lang/zh'),   // 通过require引入中文语言包
//     'en-US': require('./lang/en')    // 通过require引入英文语言包
//   }
// })

Vue.config.productionTip = false

// api
import Axios from 'axios'
import api from './axios/api'
Vue.prototype.$api = api;
Axios.defaults.withCredentials = true;

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 表单验证
import formValidation from './lib/validate'
Vue.prototype.$formValidation = formValidation

// 全局css
import '@/assets/css/comm.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
