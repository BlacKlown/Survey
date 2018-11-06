<template>
  <el-container>
    <el-header>
      <p>智慧校园 课调系统</p>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router default-active="/baseData/schoolInfo">
          <el-menu-item index="/baseData/schoolInfo">
            <span slot="title">基础数据</span>
          </el-menu-item>
          <el-menu-item index="/questionManage">
            <span slot="title">问卷管理</span>
          </el-menu-item>
          <el-menu-item index="/surveyManage">
            <span slot="title">课调管理</span>
          </el-menu-item>
          <el-menu-item index="/surveyStatis">
            <span slot="title">课调统计</span>
          </el-menu-item>
          <el-menu-item index="/systemManage">
            <span slot="title">系统管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer height="30px">
      <p>版权所有：heben</p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    this.$router.push('/baseData/schoolInfo')
  }
}
</script>

<style scoped lang="stylus">
  .el-header
    background-color: #4D8C7C
    width 100%
    height 60px
    p
      font-size 20px
      font-weight 600
      color #fff
      line-height 60px
      padding-left 20px
  .el-aside
    text-align center
  .el-footer
    background #4D8C7C
    color white
    text-align center
    position absolute
    bottom 0
    width 100%
    p
      line-height 30px
</style>
