import Vue from 'vue'
import App from './App.vue'

import store from './store/index.js';

import SvgIcon from './components/SvgIcon/index.js';
Vue.use(SvgIcon);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import animated from 'animate.css';
Vue.use(animated);



import Customers from './components/Customers.vue'
import About from './components/About.vue'
import MyTable from './components/MyTable.vue'
import addCustomer from './components/addCustomer.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'
import TreeTable from './components/TreeTable.vue'

import elTable from './components/eleMent/elTable.vue'

Vue.config.productionTip = false;

//设置路由
var router=new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:Customers},
		{path:"/about",component:About},
		{path:"/mytable",component:MyTable},
		{path:"/addCustomer",component:addCustomer},
		{path:"/customer",component:CustomerDetails},
		{path:"/edit",component:Edit},
		{path:"/TreeTable",component:TreeTable},
		{path:"/elTable",component:elTable}
	]
})

new Vue({
	store,
  router,
  render: h => h(App),
}).$mount('#app')
