<template>
			<div class="table_body">
					<tr class="table_tr">
						<!-- 循环表头 -->
						<th v-for="item in tableHead"
						    :key="item.id">
							<!-- 判断类型是否为多选框 -->
							<div class="span_box" v-if="item.type=='checkbox'">
								<input class="regular-checkbox"
									   :type="item.title"
									   :typeid="item.typeid"
									   :id="item.id"
									   @change="toggleAll(item.typeid)"
									   v-model="checkedAll">
								<label :for="item.id"></label>
								<span>{{item.name}}</span>
							</div>
							<!-- 不是多选框显示数据 -->
							<span v-else>{{item.name}}</span>
						</th>
					</tr>
			</div>
</template>

<script>
	export default {
		name: 'Thead',
		props: ['tableHead'],
		data() {
			return {
				checkedAll: false
			};
		},
		methods: {
			toggleAll(typeid) {
				console.log(this.checkedAll,typeid);
				this.$emit("toggle",this.checkedAll);
			}
		}
	};
</script>

<style scoped>
	.table_body tr:first-child th:first-child {
		min-width:60px;
	}
	/* 表格tr盒子div */
	.table_body {
		width: 100%;
		height: 36px;
		line-height: 34px;
		background-color: #f8f8f8;
		border: 1px solid #ebeef5;
		box-sizing: border-box;
	}
	.table_tr{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-grow: 3;
		flex-shrink: 2;
	}
	/* 表格tr th */
	.table_body tr th {
		width: 25%;
		height: 34px;
		padding: 1px 5px;
		text-align: center;
		border-right: 1px solid #ebeef5;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.table_body tr th:last-child{
		border-right:none;
	}
	/* 包裹label样式的span盒子 */
	.span_box{
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	
	/* 自定义多选框样式 */
	
	/* 隐藏多选框 */
	.regular-checkbox {
		display: none;
	}
	
	/* 设置label样式===多选框盒子 */
	.regular-checkbox+label {
		position: relative;
		width: 16px;
		height: 16px;
		display: inline-block;
		/*lable是内联元素所以需要加inline-block*/
		padding: 7px;
		/*设置复选框大小*/
		background-color: #fafafa;
		border-radius: 3px;
		border: 1px solid #d2d2d2;
		cursor: pointer;
		box-sizing: border-box;
		margin: 0 2px;
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
		top: -7px;
		left: 2px;
		color: #FFFFFF;
		font-weight: bold;
	}
</style>
