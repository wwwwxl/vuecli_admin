import 'element-ui/lib/theme-chalk/index.css'
import {
	Loading
} from 'element-ui';

import {
	Message
} from 'element-ui';

import $ from 'jquery'

// 在config.js存放一些公共常量
let apiConfig =require('./config.js')

let loadingInstance = "";

//下方是封装的ajax方法，除了接口调用之外，其他不会用到*****************************
function GetAjax(url, params,config) {

	let com_url = apiConfig.baseURL + url;
	//let ajaxenc=encryption(com_url);//新增请求头加密
	if(config!="undefined"&&config!=undefined){
		config={
			xhrFields:config.xhrFields==undefined?true:config.xhrFields,
			Async:config.Async==undefined?true:config.Async,
			timeout:config.timeout==undefined?60000:config.timeout
		}
	}else{
		config={
			xhrFields:true,
			Async:true,
			timeout:60000
		}
	}
	console.log(com_url,params,config);
	return new Promise((resolve, reject) => {
		$.ajax({
			url:  com_url, //请求地址
			data: params, //参数
			type: 'get',
			// headers:{//新增请求头
			// 	timestamp:ajaxenc.Timestamp,
			// 	key:ajaxenc.KEY
			// },
			contentType:'application/json;charset=UTF-8', //发送内容类型
			xhrFields: {
				withCredentials: config.xhrFields||true
			}, //允许携带cookies
			async: config.Async||true, //不异步代表同步
			timeout: config.timeout||60000, //超时时间设置，单位毫秒
			dataType: 'json', //定义返回的数据类型
			beforeSend: () => {
				// 显示loading
				if (loadingInstance == "") {
					loadingInstance = Loading.service({ //加载loading
						target: "main", //document.querySelector以获取到对应 DOM 节点
						fullscreen: false,
						text: '加载中',
						background: 'rgba(0, 0, 0, 0.7)'
					});
				}
			},
			complete: () => {
				// 隐藏loading
				loadingInstance.close();
			},
			success: (res) => {
				resolve(res); //全部数据返回
			},
			error: (xhr) => {
				// 响应错误====请求失败
				Message({
					showClose: true,
					message: '服务器繁忙！请稍后再试!!!',
					type: 'error',
					center: true,
					offset: 380
				});
			}
		});

	});
}

function PushAjax(url, params,config) {

	let com_url = apiConfig.baseURL + url;
	//let ajaxenc=encryption(com_url);//新增请求头加密
	
	console.log(com_url,params,config);
	
	if(config !="undefined" && config != undefined){
		config={
			xhrFields:config.xhrFields==undefined?true:config.xhrFields,
			Async:config.Async==undefined?true:config.Async,
			timeout:config.timeout==undefined?60000:config.timeout
		}
	}else{
		config={
			xhrFields:true,
			Async:true,
			timeout:60000
		}
	}
	
	return new Promise((resolve, reject) => {
		$.ajax({
			url:  com_url, //请求地址
			data: params, //参数
			type: 'post',
			// headers:{//新增请求头
			// 	timestamp:ajaxenc.Timestamp,
			// 	key:ajaxenc.KEY
			// },
			contentType:'application/x-www-form-urlencoded', //发送内容类型
			xhrFields: {
				withCredentials: config.xhrFields||true
			}, //允许携带cookies
			async: config.Async||true, //不异步代表同步
			timeout: config.timeout||true, //超时时间设置，单位毫秒
			dataType: 'json', //定义返回的数据类型
			beforeSend: () => {
				// 显示loading
				if (loadingInstance == "") {
					loadingInstance = Loading.service({ //加载loading
						target: "main", //document.querySelector以获取到对应 DOM 节点
						fullscreen: false,
						text: '加载中',
						background: 'rgba(0, 0, 0, 0.7)'
					});
				}
			},
			complete: () => {
				// 隐藏loading
				loadingInstance.close();
			},
			success: (res) => {
				resolve(res); //全部数据返回
			},
			error: (xhr) => {
				// 响应错误====请求失败
				Message({
					showClose: true,
					message: '服务器繁忙！请稍后再试!!!',
					type: 'error',
					center: true,
					offset: 380
				});
			}
		});

	});
}

function DelAjax(url, params,config) {

	let com_url = apiConfig.baseURL + url;
	//let ajaxenc=encryption(com_url);//新增请求头加密
	
	console.log(com_url,params,config);
	
	if(config !="undefined" && config != undefined){
		config={
			xhrFields:config.xhrFields==undefined?true:config.xhrFields,
			Async:config.Async==undefined?true:config.Async,
			timeout:config.timeout==undefined?60000:config.timeout
		}
	}else{
		config={
			xhrFields:true,
			Async:true,
			timeout:60000
		}
	}
	
	return new Promise((resolve, reject) => {
		$.ajax({
			url:  com_url, //请求地址
			data: params, //参数
			type: 'delete',
			// headers:{//新增请求头
			// 	timestamp:ajaxenc.Timestamp,
			// 	key:ajaxenc.KEY
			// },
			contentType:'application/x-www-form-urlencoded', //发送内容类型
			xhrFields: {
				withCredentials: config.xhrFields||true
			}, //允许携带cookies
			async: config.Async||true, //不异步代表同步
			timeout: config.timeout||true, //超时时间设置，单位毫秒
			dataType: 'json', //定义返回的数据类型
			beforeSend: () => {
				// 显示loading
				if (loadingInstance == "") {
					loadingInstance = Loading.service({ //加载loading
						target: "main", //document.querySelector以获取到对应 DOM 节点
						fullscreen: false,
						text: '加载中',
						background: 'rgba(0, 0, 0, 0.7)'
					});
				}
			},
			complete: () => {
				// 隐藏loading
				loadingInstance.close();
			},
			success: (res) => {
				resolve(res); //全部数据返回
			},
			error: (xhr) => {
				// 响应错误====请求失败
				Message({
					showClose: true,
					message: '服务器繁忙！请稍后再试!!!',
					type: 'error',
					center: true,
					offset: 380
				});
			}
		});

	});
}


export default {
	install: function(Vue) {
		Vue.prototype.getAjax = (url, params,config) => GetAjax(url, params,config)
		Vue.prototype.pushAjax = (url, params,config) => PushAjax(url, params,config)
		Vue.prototype.delAjax = (url, params,config) => DelAjax(url, params,config)
	}
}
