<template>
	<div class="customers container" >
		<alert v-if="flag" v-bind:message="alert"></alert>
		<h1 class="page-header">用户管理系统</h1>
		<input type="text" class="form-control" placeholder="搜索" v-model="searchCustomer">
		</br>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>姓名</th>
					<th>电话</th>
					<th>邮箱</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<!-- <tr v-for="(customer,index) in customers" :key="index"> -->
				<tr v-for="(customer,index) in filterBy(customers,searchCustomer)" :key="index">
					<td>{{customer.name}}</td>
					<td>{{customer.phone}}</td>
					<td>{{customer.email}}</td>
					<td><button @click="gotodetail(customer.id)" class="btn btn-default">详情</button></td>
					<!-- <td><router-link class="btn btn-default" :to="'/customer/'+customer.id">详情</router-link></td> -->
					<!-- <td><router-link class="btn btn-default" :to="{ name: 'CustomerDetails', params: { id: customer.id }}">详情</router-link></td> -->
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import alert from './alert';
	export default{
		name:"customers",
		data:()=>{
		   return {
			searchCustomer:"",
		   	customers:[],
			flag:false,
			alert:""
		   }	
		},
		components:{
			alert
		},
		created(){
			if(this.$route.query.alert){
				this.alert=this.$route.query.alert;
				this.flag=true;
				console.log('this.alert',this.alert);
			}
			this.fetchCustomers();
		},
		updated(){
			// this.fetchCustomers();
		},
		methods:{
			fetchCustomers(){
				this.axios.get('http://localhost:3000/users')
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
			gotodetail(id){
				let customerid=id;
				this.$router.push({path:"/customer",query:{id:customerid}});
			},
			filterBy(customers,val){
				return customers.filter(function(customer){
					return customer.name.match(val);
				})
			}
		}
	}
</script>

<style>
	
</style>
