import axios from 'axios'
//qs是对请求的数据进行序列化
import qs from 'qs'

import 'element-ui/lib/theme-chalk/index.css'
import {
	Loading
} from 'element-ui';

import {
	Message
} from 'element-ui';


// 在config.js存放一些公共常量
let apiConfig =require('./config.js')

let loadingInstance="";

// 添加请求拦截器(请求之前)
axios.interceptors.request.use(function(config) {
	// 显示loading
	if(loadingInstance == ""){
		loadingInstance = Loading.service({ //加载loading
			target: "main", //document.querySelector以获取到对应 DOM 节点
			fullscreen: false,
			text: '加载中',
			background: 'rgba(0, 0, 0, 0.7)'
		});
	}
	//console.log("请求之前做点事情",config);=====请求之前增加请求框
	return config
}, function(error) {
	// 请求之前发生错误,直接返回给new promise调用方法的catch=====请求之前发生错误
	return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 将响应数据返回给调用的new promise 的then==请求成功
	return response.data
}, function(error) {
	// 响应错误,直接返回给new promise调用方法的catch====请求失败
	Message({
		showClose: true,
		message: '服务器繁忙！请稍后再试!!!',
		type: 'error',
		center: true,
		offset:380
	});

	//console.log("响应错误,直接返回给new promise调用方法的catch");
	return Promise.reject(error)
})

// 封装axios--------------------------------------------------------------------------------------
function apiAxios(method, url, params) {
	let httpDefault = {
		method: method,
		baseURL: apiConfig.baseURL,
		url: url,
		// `params` 是即将与请求一起发送的 URL 参数
		// `data` 是作为请求主体被发送的数据
		params: method === 'GET' || method === 'DELETE' ? params : null,
		data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
		timeout: 10000
	}

	// 注意*Promise首字母大写
	return new Promise((resolve, reject) => {
		axios(httpDefault)
			// 此处的.then属于axios
			.then((res) => {
				// 隐藏loading
				loadingInstance.close();
				resolve(res);
			}).catch((response) => {
				// 隐藏loading
				loadingInstance.close();
				reject(response);
			})
	})
}


// 输出函数getAxios、postAxios、putAxios、delectAxios
// Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
//将apiAxios方法导出并提供应用的方法名称
export default {
	install: function(Vue) {
		Vue.prototype.getAxios = (url, params) => apiAxios('GET', url, params)
		Vue.prototype.postAxios = (url, params) => apiAxios('POST', url, params)
		Vue.prototype.putAxios = (url, params) => apiAxios('PUT', url, params)
		Vue.prototype.delectAxios = (url, params) => apiAxios('DELECT', url, params)
	}
}
