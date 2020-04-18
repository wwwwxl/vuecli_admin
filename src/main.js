import Vue from 'vue'
import App from './App.vue'


// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import VueRouter from 'vue-router';

import axios from 'axios'
import VueAxios from 'vue-axios'



import Customers from './components/Customers.vue'
import About from './components/About.vue'
import addCustomer from './components/addCustomer.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'

Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

//设置路由
var router=new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:Customers},
		{path:"/about",component:About},
		{path:"/addCustomer",component:addCustomer},
		{path:"/customer",component:CustomerDetails},
		{path:"/edit",component:Edit},
		// {path:"/customer/:id",component:CustomerDetails}
		// {path:"/customer/:id",name:"CustomerDetails",component:CustomerDetails}
	]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
