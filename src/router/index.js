import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import baseData from '@/components/baseData/index'
import schoolInfo from '@/components/baseData/schoolInfo'
import classManage from '@/components/baseData/classManage'
import courseManage from '@/components/baseData/courseManage'
import gradeManage from '@/components/baseData/gradeManage'
import teacherManage from '@/components/baseData/teacherManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [{
        path: '/baseData',
        name: 'baseData',
        component: baseData,
        children: [{
          path: 'schoolInfo',
          name: 'schoolInfo',
          component: schoolInfo
        }, {
          path: 'classManage',
          name: 'classManage',
          component: classManage
        }, {
          path: 'courseManage',
          name: 'courseManage',
          component: courseManage
        }, {
          path: 'gradeManage',
          name: 'gradeManage',
          component: gradeManage
        }, {
          path: 'teacherManage',
          name: 'teacherManage',
          component: teacherManage
        }]
      }]
    }
  ]
})
