import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    emNum:0,
	checkAll:[]
  },
  mutations: {
	//增加参数
    addEm(state,payload){
		payload=payload||1;
		state.emNum=state.emNum+payload;
	},
	//选中所有或者单选
	allCheck(state,payload){
		state.checkAll.push(payload);
	},
	//清除全选
	clearAll(state){
		state.checkAll=[];
	},
	//单选false
	radioFlag(state,payload){
		let flag=state.checkAll.includes(payload);
		if(flag){
			state.checkAll=state.checkAll.filter((item)=>{
				return item!=payload;
			});
		}else{
			state.checkAll.push(payload);
		}
		
	}
	
  }
});


export default store;
