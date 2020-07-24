<template>
	<div class="about container" >
		<h1 class="page-header">这只是测试使用的一个简单的后台管理模板样式</h1>
		<p>感觉这个是菜鸟中菜鸟写出来的vue-cli，对于刚入门的菜鸟来说，算一般</p>
	</div>
</template>

<script>
	export default{
		name:"about",
		data:()=>{
		   return {
		   	
		   }	
		},
		mounted() {
			this.getAxios("/floorinfo", {			
			}).then((res) => {
				console.log("floorinfo", res);
			}).catch((res) => {
				console.log("error", res);
			});
		},
		methods:{
			
		}
	}
</script>

<style>
	
</style>
