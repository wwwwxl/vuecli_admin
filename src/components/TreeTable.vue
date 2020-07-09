<template>
	<div class="main_div">
		<table class="table_body">
			<Thead :tableHead="table_head" @toggle="toggleActive"></Thead>
			<Tbody @checkLabelCli="checkBoxCli" :checkAll="checkFlag" :tableHead="table_head" :tableData="table_data"></Tbody>
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
				{id: 0,type: 'checkbox',title: 'checkbox',name: '全选'},
				{id: 1,type: 'data',title: 'date',name: '日期'},
				{id: 2,type: 'data',title: 'name',name: '名字'},
				{id: 3,type: 'data',title: 'address',name: '地址'},
			],
			table_data:[
					{
						id: '00',
						type: 'checkbox',
						date: '2016-05-02',
						name: '王',
						address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄'
					},
					{
						id: '10',
						type: 'data',
						date: '2016-05-02',
						name: '王',
						address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
						children: [{
								id: '1001',
								type: 'data1',
								date: '2016-05-02-1001',
								name: '王11',
								address: '上海市普陀区金沙江路 1518 弄11上海市普陀区金沙江路 1518 弄'
							},
							{
								id: '1002',
								type: 'data2',
								date: '2016-05-02-1002',
								name: '王22',
								address: '上海市普陀区金沙江路 1518 弄22上海市普陀区金沙江路 1518 弄',
								children: [{
										id: '100201',
										type: 'data1',
										date: '2016-05-02-100201',
										name: '王11',
										address: '上海市普陀区金沙江路 1518 弄11上海市普陀区金沙江路 1518 弄'
									},
									{
										id: '100202',
										type: 'data2',
										date: '2016-05-02-100202',
										name: '王22',
										address: '上海市普陀区金沙江路 1518 弄22上海市普陀区金沙江路 1518 弄'
									}
								]
							}
						]
					},
					{
						id: '11',
						type: 'data',
						date: '2016-05-04',
						name: '王小',
						address: '上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1518 弄'
					},
			],
			checkFlag:[]
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
				sessionStorage.setItem('emNum',0);
				if(e){
					let list=JSON.parse(JSON.stringify(this.table_data));
					list=this.jsonToArray(list);
					list.forEach((val)=>{
						this.checkFlag.push(val.id);
					})
				}else{
					this.checkFlag=[];
				}
				
			},
			//单选
			checkBoxCli(val){
				console.log('val',val);
				sessionStorage.setItem('emNum',0);
				if(val.flag){
					this.checkFlag.push(val.id)
				}else{
					this.checkFlag=this.checkFlag.filter((item)=>{
						return item!=val.id
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
