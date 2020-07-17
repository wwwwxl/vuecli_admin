<template>
  <div class="tabbox">
	  <el-table
	    :data="tableData"
	    style="width: 100%;margin-bottom: 20px;"
	    row-key="id"
	    border
	    default-expand-all
	    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
	    <el-table-column
	      prop="menuName"
	      label="菜单名称"
	      sortable
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="menuNo"
	      label="菜单编号"
	      sortable
	      width="180">
	    </el-table-column>
	    <el-table-column
		  type="selection"
	      prop="all"
	      label="全选">
	    </el-table-column>
		<el-table-column
		  type="selection"
		  prop="add"
		  label="新增">
		</el-table-column>
		<el-table-column
		  type="selection"
		  prop="edit"
		  label="修改">
		</el-table-column>
		<el-table-column
		  type="selection"
		  prop="del"
		  label="删除">
		</el-table-column>
	  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
		return {
			tableData:[
				{id:1,menuName:'订餐设置',menuNo:'01',all:'checkbox',add:'新增',edit:'修改',del:'删除'},
				{id:2,menuName:'食堂管理',menuNo:'02',all:'checkbox',add:'新增',edit:'修改',del:'删除',
					children: [
						{
						  id:21,
						  menuName:'配送管理',
						  menuNo:'021',
						  all:'checkbox',
						  add:'新增',
						  edit:'修改',
						  del:'删除'
						}, {
						  id:22,
						  menuName:'系统设置',
						  menuNo:'022',
						  all:'checkbox',
						  add:'新增',
						  edit:'修改',
						  del:'删除'
					  }
					]
				}
			]
			
		}
    },
    methods: {
      
    },
	
  }
</script>

<style scoped>
	.tabbox{
		width: 80%;
		height: auto;
		margin: 30px auto 0px;
	}
</style>
