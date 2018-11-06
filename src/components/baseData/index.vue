<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" router default-active="schoolInfo">
        <el-menu-item index='schoolInfo'>学校信息</el-menu-item>
        <el-menu-item index='gradeManage'>年级管理</el-menu-item>
        <el-menu-item index='classManage'>班级管理</el-menu-item>
        <el-menu-item index='courseManage'>课程管理</el-menu-item>
        <el-menu-item index='teacherManage'>教师管理</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view v-if="show" @reload="handleReload"></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'baseData',
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleReload () {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
