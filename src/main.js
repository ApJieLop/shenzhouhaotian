// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Qs from 'qs'
import Axios from 'axios'
Vue.prototype.$axios = Axios;
import $ from 'jquery'

Axios.defaults.baseURL = ''; //主域名
Axios.defaults.headers.common['token'] = localStorage.token; //自定义头信息
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //定义格式（具体什么格式看官网）

// 请求拦截器 - 发送前做些什么
Axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    config.data = Qs.stringify(config.data)
  }   
  return config;
}, function (error) { // 错误处理  
  return Promise.reject(error);
});

// 响应拦截器 - 对响后做点什么
Axios.interceptors.response.use(function (response) {
  return response;
}, function (error) { // 错误处理 
  return Promise.reject(error);
});


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
