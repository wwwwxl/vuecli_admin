/* 
 *邮箱验证
 */
export function mail(mail) { //true是邮箱正确
	const mailReg = /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/;
	return mailReg.test(mail);
}

/* 
 *手机号验证
 */
export const phone = (str) => {
	const patrn = /^1[3456789]\d{9}$/;
	return patrn.test(str);
}

/* 
 *特殊字符==只能输入字母、数字和汉字
 */
export const special = (str) => {
	const patrn =/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
	return patrn.test(str);
}

/* 
 *只能有字母和数字
 */
export const onlyLetterNum = (str) => {
	const patrn = /^[0-9a-zA-Z]+$/;
	return patrn.test(str);
}
/* 
 *ip地址
 */
export const ipAddr = (str) => {
	const patrn = /((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/;
	return patrn.test(str);
}

/* 获取具体日期时间 */
export const formatTime = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/* 获取日期 */
export const formatDate = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	return [year, month, day].map(formatNumber).join('-');
}

/* 获取年月日 */
export const formatYMD = date => {
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	return year + "年" + formatNumber(month) + "月" + formatNumber(day) + "日";
}

/* 日期格式转换 */
const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}

//将树形数组数据解构为一位数组
export function	jsonToArray(nodes) {
		var r=[];
		if (Array.isArray(nodes)) {
			for (var i=0, l=nodes.length; i<l; i++) {
			  r.push(nodes[i]); // 取每项数据放入一个新数组
			  if (Array.isArray(nodes[i]["children"])&&nodes[i]["children"].length>0)
			   // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
				r = r.concat(jsonToArray(nodes[i]["children"]));
				// delete nodes[i]["children"]
			}
		} 
		return r;
}

