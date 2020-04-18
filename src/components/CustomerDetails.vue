<template>
	<div class="details container" >
		<router-link to="/" class="btn btn-default">返回</router-link>
		<h1 class="page-header">
				{{customers.name}}
				<span class="btn-group pull-right">
					<!-- <router-link class="btn btn-primary" :to="'/edit/'+customers.id">编辑</router-link> -->
					<button class="btn btn-primary" @click="gotoEdit(customers.id)">编辑</button>
					<button class="btn btn-danger" @click="delCustomer(customers.id)">删除</button>
				</span>
		</h1>
		<ul class="list-group">
			<li class="list-group-item">
				<span class="glyphicon glyphicon-asterisk">{{customers.phone}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-asterisk">{{customers.email}}</span>
			</li>
		</ul>
		<ul class="list-group">
			<li class="list-group-item">
				<span class="glyphicon glyphicon-asterisk">{{customers.education}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-asterisk">{{customers.graduationSchool}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-asterisk">{{customers.profession}}</span>
			</li>
			<li class="list-group-item">
				<span class="glyphicon glyphicon-asterisk">{{customers.profile}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"customerdetails",
		data:()=>{
		   return {
				customers:""
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
					this.customers=response.data;
				  })
				  .catch( (error)=> {
				    // handle error
				    console.log(error);
				  });
			},
			gotoEdit(id){
				let customerid=id;
				this.$router.push({path:"/edit",query:{id:customerid}});
			},
			delCustomer(id){
				//console.log(id);
				this.axios.delete('http://localhost:3000/users/'+id)
				  .then( (response)=> {
				    // handle success
				    console.log(response);
					this.$router.push({path:"/",query:{alert:"用户删除成功"}});
				  })
				  .catch( (error)=> {
				    // handle error
				    console.log(error);
				  });
			}
		}
	}
</script>

<style>
	
</style>
