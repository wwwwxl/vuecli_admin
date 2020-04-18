<template>
	<div class="edit container" >
		<h1 class="page-header">编辑用户信息</h1>
		<form v-on:submit="updateCustomer">
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
					<button type="submit" class="btn btn-primary"> 编辑用户信息</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		name:"addCustomer",
		data:()=>{
		   return {
		   	customer:{}
		   }	
		},
		created(){
			// let id=parseInt(this.$route.params.id);
			let id=this.$route.query.id
			this.fetchCustomers(id);
		},
		methods:{
			fetchCustomers(id){
				this.axios.get('http://localhost:3000/users/'+id)
				  .then( (response)=> {
				    // handle success
				    console.log(response);
					this.customer=response.data;
				  })
				  .catch( (error)=> {
				    // handle error
				    console.log(error);
				  });
			},
			updateCustomer(e){
				//console.log("123");
				if(!this.customer.name||!this.customer.phone||!this.customer.email){
					console.log("您修改后的数据不能为空");
				}else{
						let updatecustomer={
							name:this.customer.name,
							phone:this.customer.phone,
							email:this.customer.email,
							education:this.customer.education,
							graduationSchool:this.customer.graduationSchool,
							profession:this.customer.profession,
							profile:this.customer.profile,
						}
						this.axios.put('http://localhost:3000/users/'+this.$route.query.id, updatecustomer)
						.then( (response)=> {
							console.log(response);
							this.$router.push({path:"/",query:{alert:"用户信息更新成功"}});
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
