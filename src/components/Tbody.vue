<template>
			<div class="body_div">
					<!-- 循环表格数据长度==表格行数据 -->
					<div class="body_div" v-for="(item, index) in tableData" :key="index">
						<tr class="table_tr">
							<!-- 循环表格对应列数据数据 -->
							<td v-for="list in tableHead"
							    :key="list.id">
								<!-- 判断头部数据类型，决定渲染的是多选框还是数据 -->
								<span class="span_box"
								      v-if="list.type=='checkbox'">
									<input class="regular-checkbox"
									       :type="list.type"
										   :typeid="list.typeid"
									       :id="item.id"
									       v-model="$store.state.checkAll">
									<!-- :for="item.id" -->
									<label @click="checkChangeBox(item.id)" ></label>
								</span>
								<!-- 显示对应表头数据内容-->
								<div class="text_div" :style="{'text-indent':emNum(em,list.id)}"  v-else>
									<span v-if="list.id==1&&item.children" class="iconfont icon-jiantou arrow" @click="showFlag(item.children[0].id)"></span>
									{{ item[list.title] }}
								</div>
							</td>
						</tr>
						<Tbody :checkAll="$store.state.checkAll" :em="item.children" :ref="item.children[0].id" v-if="hasChildren(item.children)" :tableHead="tableHead" :tableData="item.children"></Tbody>
					</div>
			</div>
</template>

<script>
	export default {
		name: 'Tbody',
		props: ['tableData','tableHead','em'],
		data() {
			return {
				
			};
		},
		methods: {
			//控制显示和隐藏
			showFlag(e){
				// console.log(e,this.$refs[e]);//操作dom元素
				// console.log(this.$refs[e][0].$el.style.display);
				//通过样式控制显示和隐藏
				if(this.$refs[e][0].$el.style.display==''||this.$refs[e][0].$el.style.display=='block'){
					this.$refs[e][0].$el.setAttribute('style', 'display: none;')
				}else{
					this.$refs[e][0].$el.setAttribute('style', 'display: block;')
				}
				//通过方法v-if控制
			},
			//判断是否有children
			hasChildren(children){
				if(children){
					let child_arr=children;
					if(child_arr.length!=""){
						return true;
					}else{
						return false;
					}
				}
			},
			//计算缩进
			emNum(children,id){
				//console.log('children',children)
				if(children&&id==1){
					let leves=children[0].id.length-2;
					return leves+'em'
				}
			},
			//点击自身事件
			checkChangeBox(id){
				console.log("触发触发",id);
				this.$store.commit('radioFlag',id);
				console.log("选中的值",this.$store.state.checkAll)
			},
			
		}
	};
</script>

<style scoped>
	@import '../icon/Aicon.css';
	.body_div tr:first-child td:first-child{
		min-width: 60px;
	}
	/* 表格盒子div */
	.body_div {
		width: 100%;
		height: auto;
	}
	/* tr标签 */
	.table_tr{
		width: 100%;
		height: 34px;
		line-height: 34px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-grow: 3;
		flex-shrink: 2;
		border-left: 1px solid #ebeef5;
		border-right: 1px solid #ebeef5;
	}
	/* 表格内容 */
	.body_div div tr {
		background-color: #f6f4f0;
		border-bottom: 1px solid #ebeef5;
	}

	.body_div div tr:nth-child(odd) {
		background-color: #ffffff;
	}

	.body_div div tr:nth-child(event) {
		background-color: #f6f4f0;
	}

	.body_div div tr:hover {
		background-color: #f5f7fa;
	}

	.body_div div tr td {
		position: relative;
		width: 25%;
		height: 34px;
		padding: 1px 5px;
		text-align: center;
		border-right: 1px solid #ebeef5;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.body_div div tr td:last-child{
		border-right:none;
	}
	/* checkbox盒子 */
	.body_div div tr td>span{
		position: relative;
		/* width: 100%; */
		height: 100%;
		display: inline-block;
		text-align: center;
	}
	.span_box {
		position: relative;
		width: 16px;
		height: 16px;
		display: inline-block;
	}
	/* 显示数据盒子 */
	.text_div{
		width: 100%;
		height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.arrow{
		cursor: pointer;
		font-size: 12px;
		color: gray;
	}
	.span_text{
		display: inline-block;
		width: auto;
		height: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.textindent{
		text-indent: 2em;
	}


	/* 自定义多选框样式 */

	/* 隐藏多选框 */
	.regular-checkbox {
		display: none;
	}

	/* 设置label样式===多选框盒子 */
	.regular-checkbox+label {
		position: absolute;
		top: 9px;
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
		top: -8px;
		left: 2px;
		color: #FFFFFF;
		font-weight: bold;
	}
</style>
