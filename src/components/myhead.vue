<template>
	<div id="myhead" class="myhead" @click="writerinfo">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default{
		name:"myhead",
		data:()=>{
			return{
				msg:"我是头部"
			}
		},
		methods:{
			writerinfo:function(){
				alert("i am a head");
			}
		}
	}
</script>

<style>
	.myhead{
		width: 100%;
		height: 120px;
		background-color: black;
		text-align: center;
		color: brown;
		border: 1px solid #42B983;
		box-sizing: border-box;
	}
</style>
