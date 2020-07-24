import Vue from 'vue'
import App from './App.vue'

import store from './store/index.js';

import SvgIcon from './components/SvgIcon/index.js';
Vue.use(SvgIcon);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import axiosApi from './api/axios.js';
Vue.use(axiosApi);


import animated from 'animate.css';
Vue.use(animated);

import router from './router/index.js'

Vue.config.productionTip = false;



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
