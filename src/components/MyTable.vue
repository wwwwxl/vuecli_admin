<template>
	<div class="container">
		<div class="table_bodybox">
			<table class="table_body"
			       border="1">
				<thead>
					<tr class="table_tr" v-if="tableHead">
						<!-- 循环表头 -->
						<th v-for="item in tableHead"
						    :key="item.id">
							<!-- 判断类型是否为多选框 -->
							<span v-if="item.type=='checkbox'">
								<span class="span_box">
									<input class="regular-checkbox"
									       @click="toggleAll"
									       :type="item.title"
									       :id="item.name"
									       :value="item.name"
									       v-model="checkedAll">
									<label :for="item.name"></label>
								</span>
								<span style="position: relative;top: -3px;left: 2px;">{{item.name}}</span>
							</span>
							<!-- 不是多选框显示数据 -->
							<span v-else>{{item.name}}</span>
						</th>
					</tr>
				</thead>
				<tbody>
					<!-- 循环表格数据长度==表格行数据 -->
						<tr class="table_tr" v-for="(item, index) in tableData" :key="index">
							<!-- 循环表格对应列数据数据 -->
							<td v-for="list in tableHead"
							    :key="list.id">
								<!-- 判断头部数据类型，决定渲染的是多选框还是数据 -->
								<span class="span_box"
								      v-if="list.type=='checkbox'">
									<input class="regular-checkbox"
									       :type="list.type"
									       :id="item.id"
									       :value="item.id"
									       v-model="checked">
									<label :for="item.id"></label>
								</span>
								<!-- 显示对应表头数据内容 -->
								<span v-else>{{ item[list.title] }}</span>
							</td>
						</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MyTable',
		props: {
			tableHead: {
				type: Array,
				default: function() {
					return [{
							id: 0,
							type: 'checkbox',
							title: 'checkbox',
							name: '全选'
						},
						{
							id: 1,
							type: 'data',
							title: 'date',
							name: '日期'
						},
						{
							id: 2,
							type: 'data',
							title: 'name',
							name: '名字'
						},
						{
							id: 3,
							type: 'data',
							title: 'address',
							name: '地址',
						}
					]
				}
			},
			tableData: {
				type: Array,
				default: function() {
					return [{
							id: '00',
							type: 'checkbox',
							date: '2016-05-02',
							name: '王',
							address: '上海市普陀区金沙江路 1518 弄'
						},
						{
							id: '10',
							type: 'data',
							date: '2016-05-02',
							name: '王',
							address: '上海市普陀区金沙江路 1518 弄',
							children: [{
									id: '101',
									type: 'data1',
									date: '2016-05-02-11',
									name: '王11',
									address: '上海市普陀区金沙江路 1518 弄11'
								},
								{
									id: '102',
									type: 'data2',
									date: '2016-05-02-22',
									name: '王22',
									address: '上海市普陀区金沙江路 1518 弄22'
								}
							]
						},
						{
							id: '11',
							type: 'data',
							date: '2016-05-04',
							name: '王小',
							address: '上海市普陀区金沙江路 1517 弄'
						}
					]
				}
			}

		},
		data() {
			return {
				checkedAll: false,
				checked: [],
				// tableHead: [{
				// 		id: 0,
				// 		type: 'checkbox',
				// 		title: 'checkbox',
				// 		name: '全选'
				// 	},
				// 	{
				// 		id: 1,
				// 		type: 'data',
				// 		title: 'date',
				// 		name: '日期'
				// 	},
				// 	{
				// 		id: 2,
				// 		type: 'data',
				// 		title: 'name',
				// 		name: '名字'
				// 	},
				// 	{
				// 		id: 3,
				// 		type: 'data',
				// 		title: 'address',
				// 		name: '地址'
				// 	}],
				// tableData: [{
				// 		id: '00',
				// 		type: 'checkbox',
				// 		date: '2016-05-02',
				// 		name: '王',
				// 		address: '上海市普陀区金沙江路 1518 弄'
				// 	},
				// 	{
				// 		id: '10',
				// 		type: 'data',
				// 		date: '2016-05-02',
				// 		name: '王',
				// 		address: '上海市普陀区金沙江路 1518 弄',
				// 		children:[
				// 			{
				// 				id: '101',
				// 				type: 'data1',
				// 				date: '2016-05-02-11',
				// 				name: '王11',
				// 				address: '上海市普陀区金沙江路 1518 弄11'
				// 			},
				// 			{
				// 				id: '102',
				// 				type: 'data2',
				// 				date: '2016-05-02-22',
				// 				name: '王22',
				// 				address: '上海市普陀区金沙江路 1518 弄22'
				// 			}
				// 		]
				// 	},
				// 	{
				// 		id: '11',
				// 		type: 'data',
				// 		date: '2016-05-04',
				// 		name: '王小',
				// 		address: '上海市普陀区金沙江路 1517 弄'
				// 	}]
			};
		},
		methods: {
			toggleAll() {
				this.checkedAll = !this.checkedAll;
				//全选
				if (this.checkedAll) {
					this.checked = [];
					this.tableData.forEach((val) => {
						this.checked.push(val.id)
					})
				} else {
					this.checked = [];
				}

			}
		}
	};
</script>

<style scoped>
	/* 所有表格容器 */
	.container {
		width: 100%;
		height: auto;
		position: relative;
		top: 60px;
	}

	/* 表格内容盒子 */
	.table_bodybox {
		width: 100%;
		height: auto;
		color: #909399;
		font-weight: 400;
	}

	/* 表格内容===表格 */
	.table_body {
		border: 1px solid #ebeef5;
		width: 100%;
	}

	/* 表头 */
	.table_body thead tr th {
		min-width: 90px;
		height: 34px;
		padding: 1px 15px;
	}

	/* 表格内容 */
	.table_body tbody tr {
		background-color: #f6f4f0;
		border-bottom: 1px solid #ebeef5;
	}

	/* 表格行第一个td */
	.table_tr th:nth-child(1) {
		width: auto;
	}

	.table_tr td:nth-child(1) {
		width: auto;
	}

	.table_body tbody tr:nth-child(odd) {
		background-color: #ffffff;
	}

	.table_body tbody tr:nth-child(event) {
		background-color: #f6f4f0;
	}

	.table_body tbody tr:hover {
		background-color: #f5f7fa;
	}

	.table_body tbody tr td {
		min-width: 90px;
		height: 34px;
		padding: 1px 15px;
		border: none;
		box-sizing: border-box;
		border-right: 1px solid #ebeef5;
	}

	.span_box {
		position: relative;
		width: 16px;
		height: 16px;
		display: inline-block;
	}

	/* 自定义多选框样式 */

	/* 隐藏多选框 */
	.regular-checkbox {
		display: none;
	}

	/* 设置label样式===多选框盒子 */
	.regular-checkbox+label {
		position: absolute;
		top: 0px;
		left: 0px;
		display: inline-block;
		/*lable是内联元素所以需要加inline-block*/
		padding: 7px;
		/*设置复选框大小*/
		background-color: #fafafa;
		border-radius: 3px;
		border: 1px solid #d2d2d2;
		cursor: pointer;
		box-sizing: border-box;
	}

	/* :active选择活动链接，并设置其样式,常用在a标签 */
	.regular-checkbox+label:hover {
		border: 1px solid #009900;
	}

	/*选中之后的样式==input选中后label样式*/
	.regular-checkbox:checked+label {
		background-color: #009900;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		border: 1px solid #009900;
		border-radius: 3px;
		box-sizing: border-box;
	}

	/*选中后的效果==伪类*/
	.regular-checkbox:checked+label:after {
		content: '\2714';
		/*这是一个对勾*/
		position: absolute;
		font-size: 12px;
		top: 0px;
		left: 2px;
		/* color: #009900; */
		color: #FFFFFF;
		font-weight: bold;
	}
</style>
