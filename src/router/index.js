import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import login from '../components/login.vue'

import Customers from '../components/Customers.vue'
import About from '../components/About.vue'
import MyTable from '../components/MyTable.vue'
import addCustomer from '../components/addCustomer.vue'
import CustomerDetails from '../components/CustomerDetails.vue'
import Edit from '../components/Edit.vue'
import TreeTable from '../components/TreeTable.vue'

import elTable from '../components/eleMent/elTable.vue'
import wxl from '../components/wxl.vue'

//设置路由
var router=new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{path:"/",component:login},
		{path:"/about",component:About},
		{path:"/mytable",component:MyTable},
		{path:"/addCustomer",component:addCustomer},
		{path:"/customer",component:CustomerDetails},
		{path:"/edit",component:Edit},
		{path:"/TreeTable",component:TreeTable},
		{path:"/elTable",component:elTable},
		{path:"/wxl",component:wxl}
	]
});

export default router;