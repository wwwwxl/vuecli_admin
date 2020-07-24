<template>
	<div class="left_con">欢迎光临这个vue世界。如同英雄联盟一样疯狂</div>
</template>

<script>
	export default{
		name:"welcome",
		props: {
		  msg: String
		}
	}
</script>

<style lang="scss">
	.left_con{
		position: absolute;
		left: 10px;
		font-weight: bold;
		color: $primary-color;
	}
</style>
