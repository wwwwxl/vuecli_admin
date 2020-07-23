import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'// svg组件
 
// register globally
Vue.component('svg-icon', SvgIcon)

//解析svg文件夹的图片
const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req);

export default SvgIcon;