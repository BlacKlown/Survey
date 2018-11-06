<template>
  <div>
    <el-button type="primary" @click="handleClickAdd">添加</el-button>
    <el-button type="danger" @click="handleMultiDelete">批量删除</el-button>
    <el-table
      stripe
      :data="teachers.slice((currentPage-1)*pageSize, currentPage*pageSize)"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
      >
        <template></template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
      >
      </el-table-column>
      <el-table-column
        prop="gender"
        label="性别"
      >
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生日期"
      >
      </el-table-column>
      <el-table-column
        prop="hiredate"
        label="入职日期"
      >
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="handleClickChange(scope.row)" type="primary">修改</el-button>
          <el-dialog title="教师信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio v-model="form.gender" label="男">男</el-radio>
                <el-radio v-model="form.gender" label="女">女</el-radio>
              </el-form-item>
              <el-form-item label="出生日期">
                <el-date-picker
                  v-model="form.birth"
                  type="date"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="入职日期">
                <el-date-picker
                  v-model="form.hiredate"
                  type="date"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleClickConfirm">确 定</el-button>
            </div>
          </el-dialog>
          <el-button @click="handleClickDelete(scope.row)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="teachers.length"
      layout="prev, pager, next"
      :page-size="pageSize"
      @current-change="currentChange"
      :current-page="currentPage"
    ></el-pagination>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'teacherManage',
  data () {
    return {
      teachers: [],
      multipleSelection: [],
      dialogFormVisible: false,
      form: {},
      pageSize: 9,
      currentPage: 1
    }
  },
  methods: {
    currentChange (currentPage) {
      this.currentPage = currentPage
    },
    handleSelectionChange (val) {
      // 复选框状态改变
      this.multipleSelection = []
      for (let i in val) {
        this.multipleSelection.push(val[i].id)
      }
    },
    handleClickAdd () {
      // 点击添加按钮
      this.dialogFormVisible = true
    },
    handleMultiDelete () {
      // 点击批量删除按钮
      this.$axios({
        url: '/user/batchDelete',
        method: 'post',
        params: {
          ids: this.multipleSelection
        },
        paramsSerializer (params) {
          return qs.stringify(params, {arrayFormat: 'repeat'})
        }
      }).then(() => {
        this.$emit('reload')
      })
    },
    handleClickChange (val) {
      // 点击修改按钮
      this.dialogFormVisible = true
      this.form = JSON.parse(JSON.stringify(val))
    },
    handleClickDelete (val) {
      // 点击删除按钮
      this.$axios.get('/user/deleteById?id=' + val.id)
        .then(() => {
          this.$emit('reload')
        })
    },
    handleClickConfirm () {
      // 点击确认按钮
      this.$axios.post('/user/saveOrUpdate', this.form)
        .then(() => {
          // 重置页面状态
          this.form = {}
          this.dialogFormVisible = false
          this.$emit('reload')
        })
    },
    getTeacherInfo () {
      // 加载请求
      this.$axios.get('/user/findAll')
        .then(this.getTeacherInfoSucc)
    },
    getTeacherInfoSucc (res) {
      // 加载成功
      this.teachers = res.data.data
    }
  },
  mounted () {
    this.getTeacherInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
