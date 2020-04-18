<template>
	<div id="left" class="left" @click="writerinfo">
		<h1>{{msg}}</h1>
		<eleuse></eleuse>
	</div>
</template>



<script>
import eleuse from './eleuse.vue';
	
export default{
	name:"left",
	data:()=>{
		return {
			msg:"我是左边的内容区域"
		}
	},
	methods:{
		writerinfo:function(){
			alert("i am a left");
		}
	},
	components:{
		eleuse,
	}
}
</script>
    
<style>
	.left{
		width:75%;
		height:100%;
		background-color: crimson;
		text-align: center;
		border: 1px soid black;
		box-sizing: border-box;
	} 
</style>
