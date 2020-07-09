<template>
	<div id="right" class="right" @click="writerinfo">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default{
		name:"right",
		data:()=>{
			return {
				msg:"我是右边的内容msgright"
			}
		},
		methods:{
			writerinfo:function(){
				alert("i am a right");
			}
		}
	}
</script>

<style scoped>
	.right{
		width: 25%;
		height:100%;
		background-color: yellow;
		text-align: center;
		border: 1px soid black;
		box-sizing: border-box;
	}
</style>
