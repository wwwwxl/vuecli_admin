<template>
  <div id="app">
		<nav class="navbar navbar-default">
		      <div class="container">
		        <div class="navbar-header">
		          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		          </button>
		          <a class="navbar-brand" href="#"><svg-icon icon-class="man"></svg-icon>用户管理系统</a>
		        </div>
		        <div id="navbar" class="collapse navbar-collapse">
		          <ul class="nav navbar-nav">
		            <li><router-link to='/'>主页</router-link></li>
					<li><router-link to='/mytable'>表格学习mytable</router-link></li>
					<li><router-link to='/TreeTable'>表格学习TreeTable</router-link></li>
					<li><router-link to='/elTable'>element按钮权限表格</router-link></li>
					<li><router-link to='/about'>关于我们</router-link></li>
					<li><router-link to='/wxl'>wxl</router-link></li>
		          </ul>
				  
				  <ul class="nav navbar-nav navbar-right">
				    <li><router-link to='/addCustomer'>添加用户</router-link></li>
				  </ul>
		        </div>
		      </div>
		</nav>
		<router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
	
  },
}
</script>

<style>

</style>
