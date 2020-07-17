<template>
	<div class="main_div">
		<table class="table_body">
			<Thead :tableHead="table_head" @toggle="toggleActive"></Thead>
			<Tbody :tableHead="table_head" :tableData="table_data"></Tbody>
		</table>
	</div>
</template>

<script>
	import Thead from './Thead.vue'
	import Tbody from './Tbody.vue'
	export default{
		data(){
			return{
			table_head:[
				{id: 1,type: 'data',title: 'id',name: 'id'},
				{id: 2,type: 'data',title: 'date',name: '日期'},
				{id: 3,type: 'checkbox',title: 'checkbox',name: '全选',typeid:'10'},
				{id: 4,type: 'checkbox',title: 'checkbox',name: '新增',typeid:'11'},
				{id: 5,type: 'checkbox',title: 'checkbox',name: '修改',typeid:'12'},
				{id: 6,type: 'checkbox',title: 'checkbox',name: '删除',typeid:'13'}
			],
			table_data:[
					{
						id: '00',
						menuid:'00',
						type: 'checkbox',
						date: '2016-05-02',
						name: '王',
						address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '10',
						menuid:'10',
						type: 'data',
						date: '2016-05-02',
						name: '王',
						address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
						children: [
							{
								id: '1001',
								menuid:'1001',
								type: 'data1',
								date: '2016-05-02-1001',
								name: '王11',
								address: '上海市普陀区金沙江路 1518 弄11上海市普陀区金沙江路 1518 弄'
							}
						]
					},
					{
						id: '11',
						menuid:'11',
						type: 'data',
						date: '2016-05-02',
						name: '王11',
						address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
						children: [
							{
								id: '1101',
								menuid:'1101',
								type: 'data1',
								date: '2016-05-02-1001',
								name: '王11',
								address: '上海市普陀区金沙江路 1518 弄11上海市普陀区金沙江路 1518 弄'
							}
						]
					}
			],
			
			}
		},
		components:{
			Thead,
			Tbody
		},
		methods:{
			//全选
			toggleActive(e){
				console.log('全选e',e);
				if(e){
					let list=JSON.parse(JSON.stringify(this.table_data));
					list=this.jsonToArray(list);
					list.forEach((val)=>{
						//this.checkFlag.push(val.id);
						this.$store.commit("allCheck",val.id);
					});
					this.$nextTick(()=>{
						console.log("全选true",this.$store.state.checkAll);
					})
				}else{
					//this.checkFlag=[];
					this.$store.commit("clearAll");
					this.$nextTick(()=>{
						console.log("全选false",this.$store.state.checkAll);
					})
				}
				
			},
			//将树形数组数据解构为一位数组
			jsonToArray(nodes) {
				var r=[];
				if (Array.isArray(nodes)) {
					for (var i=0, l=nodes.length; i<l; i++) {
					  r.push(nodes[i]); // 取每项数据放入一个新数组
					  if (Array.isArray(nodes[i]["children"])&&nodes[i]["children"].length>0)
					   // 若存在children则递归调用，把数据拼接到新数组中，并且删除该children
						r = r.concat(this.jsonToArray(nodes[i]["children"]));
						delete nodes[i]["children"]
					}
				} 
				return r;
			}
			
		}
	}
</script>

<style scoped>
	.main_div{
		width: 80%;
		height: auto;
		margin: 0 auto;
	}
	.table_body {
		width: 100%;
		box-sizing: border-box;
	}
</style>
