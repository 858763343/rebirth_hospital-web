<template>
  <div class="app-container">
    <!--
      医院设置列表
    -->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="医院名称:">
        <el-input  v-model="searchObj.hosname" placeholder="医院名称"/>
      </el-form-item>
      <el-form-item label="医院编号:">
        <el-input v-model="searchObj.hoscode" placeholder="医院编号"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="list" stripe style="width: 100%">
      <el-table-column type="index" width="50" label="序号"/>
      <el-table-column prop="hosname" label="医院名称"/>
      <el-table-column prop="hoscode" label="医院编号"/>
      <el-table-column prop="apiUrl" label="api基础路径" width="200"/>
      <el-table-column prop="contactsName" label="联系人姓名"/>
      <el-table-column prop="contactsPhone" label="联系人手机"/>
      <el-table-column label="状态" width="80">
        <template slot-scope="scope">
          {{ scope.row.status === 1 ? '可用' : '不可用' }}
        </template>
      </el-table-column>
    </el-table>
  <!-- 分页 -->
    <el-pagination
      :current-page="current"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
      background
    />

  </div>
</template>


<script>
//引入接口定义的js文件
import hospset from '@/api/hospset'
export default {
    //定义变量和初始值
   data() {
       return {
           current:1,       //当前页
           limit:3,         //每页显示的记录数
           searchObj:{},    //条件封装对象
           list:[],          //每页数据集合
           total:0          //总记录数
       }
   },
   created() {
       //一般调用methods定义的方法，得到数据
       this.getList()
   },
   methods: {   //定义方法进行请求接口调用
        //医院设置列表
        getList(page = 1){
            this.current = page
            hospset.getHospSetList(this.current,this.limit,this.searchObj)
                   .then(response => {//请求成功执行  response 是接口返回数据 
                        //console.log(response)
                        //返回集合赋值list
                        this.list = response.data.records
                        //总记录数
                        this.total = response.data.total
                   })
                   .catch(error => {//请求失败执行
                        console.log(error)
                   })
        }
   }
}
</script>
