<template>
	<div class="addCustomer container" >
		<alert v-if="alert" v-bind:message="alert"></alert>
		<h1 class="page-header">添加用户</h1>
		<form v-on:submit="addCustomer">
			<div class="well">
				<h4>用户信息</h4>
				<div class="form-group">
					<label >姓名</label>
					<input type="text" class="form-control" placeholder="name" v-model="customer.name">
				</div>
				<div class="form-group">
					<label >电话</label>
					<input type="number" class="form-control" placeholder="phone" v-model="customer.phone">
				</div>
				<div class="form-group">
					<label >邮箱</label>
					<input type="text" class="form-control" placeholder="email" v-model="customer.email">
				</div>
				<div class="form-group">
					<label >学历</label>
					<input type="text" class="form-control" placeholder="education" v-model="customer.education">
				</div>
				<div class="form-group">
					<label >毕业学校</label>
					<input type="text" class="form-control" placeholder="graduationSchool" v-model="customer.graduationSchool">
				</div>
				<div class="form-group">
					<label >职业</label>
					<input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
				</div>
				<div class="form-group">
					<label >个人简介</label>
					<!-- <input type="text" class="form-control" placeholder="profile" v-model="customer.profile"> -->
					<textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
				</div>
				<div class="btn-group" role="group">
					<button type="submit" class="btn btn-primary">增加用户信息</button>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
	import alert from './alert';
	export default{
		name:"addCustomer",
		data:()=>{
		   return {
			alert:"",
		   	customer:{}
		   }	
		},
		components:{
			alert
		},
		methods:{
			addCustomer(e){
				//console.log("123");
				if(!this.customer.name||!this.customer.phone||!this.customer.email){
					console.log("请添加对应的信息");
					this.alert="请添加对应的信息";
				}else{
						let newcustomer={
							name:this.customer.name,
							phone:this.customer.phone,
							email:this.customer.email,
							education:this.customer.education,
							graduationSchool:this.customer.graduationSchool,
							profession:this.customer.profession,
							profile:this.customer.profile,
						}
						this.axios.post('http://localhost:3000/users', newcustomer)
						.then( (response)=> {
							console.log(response);
							this.$router.push({path:"/",query:{alert:"用户添加成功"}});
						})
						.catch( (error) =>{
							console.log(error);
						});
				}
				e.preventDefault();
			}
		}
	}
</script>

<style>
	
</style>
