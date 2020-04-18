<template>
	<div id="foot" class="foot" @click="writerinfo">
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default{
		name:"foot",
		data:()=>{
		   return {
		   	msg:"我是底部"
		   }	
		},
		methods:{
			writerinfo:function(){
				alert("i am a foot");
			}
		}
	}
</script>

<style>
	.foot{
		width: 100%;
		height: 100px;
		background-color: dodgerblue;
		text-align: center;
		border: 1px solid black;
		box-sizing: border-box;
	}
</style>
