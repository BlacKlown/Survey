<template>
  <div>
    <table border="1px" cellspacing="0">
      <tbody>
        <tr>
          <td width="200px">校园名称</td>
          <td width="400px">{{name}}</td>
        </tr>
        <tr>
          <td>校园地址</td>
          <td>{{address}}</td>
        </tr>
        <tr>
          <td>校园电话</td>
          <td>{{telephone}}</td>
        </tr>
        <tr>
          <td>版权信息</td>
          <td>{{copyright}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'schoolInfo',
  data () {
    return {
      name: '',
      address: '',
      telephone: '',
      copyright: ''
    }
  },
  methods: {
    getSchoolInfo () {
      axios.get('/school/findById?id=100')
        .then(this.getSchoolInfoSucc)
    },
    getSchoolInfoSucc (res) {
      if (res.data.data) {
        var odata = res.data.data
        this.name = odata.name
        this.address = odata.address
        this.copyright = odata.copyright
        this.telephone = odata.telephone
      }
    }
  },
  mounted () {
    this.getSchoolInfo()
  }
}
</script>

<style scoped lang="stylus">
  *
    text-align center
  tr
    height 30px
</style>
