import Vue from 'vue'
import Router from 'vue-router'
import Index from './../views/index'
import Login from '@/views/login'
import Register from './../views/register'
import BackmangementHome from './../views/backManagement'
import Coap from './../views/coap'
import DeviceList from './../views/deviceList'
import CreateDevice from './../views/createDevice'
import MainControl from './../views/mainControl'
import ModifyUserInfo from './../views/modifyUserInfo'
import MyProject from './../views/myProject'
import SharedProject from'./../views/sharedProject'
// import ManageHeader from './../components/nbManageHeader'
import Test from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/users/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/backmangementHome',
      name: '后台管理',
      component: BackmangementHome,
      redirect: '/mainControl',
      leaf:true,
      menuShow: true,
      iconCls: 'el-icon-menu',
      children: [
        { path: '/mainControl', component: MainControl, name: '后台主控', menuShow:true}
      ]
    },
    {
      path: '/backmangementHome',
      name: '设备管理',
      component: BackmangementHome,
      leaf:true,
      menuShow: true,
      iconCls: 'el-icon-menu',
      children:[
        { path: '/deviceList', name: '设备列表', component: DeviceList, menuShow: true },
        { path: '/createDevice', name: '创建设备', component: CreateDevice, menuShow: true },
      ]
    },
    {
      path: '/backmangementHome',
      name: '在线编程',
      component: BackmangementHome,
      leaf:true,
      menuShow: true,
      iconCls: 'el-icon-menu',
      children:[
        { path: '/myProject', name: '我的项目', component: MyProject, menuShow: true },
        { path: '/sharedProject', name: '共享项目', component: SharedProject, menuShow: true }
      ]
    },
    {
      path: '/backmangementHome',
      name: '用户信息',
      component: BackmangementHome,
      leaf:true,
      menuShow: true,
      iconCls: 'el-icon-menu',
      children:[
        { path: '/modifyUserInfo', name: '修改信息', component: ModifyUserInfo, menuShow: true }
      ]
    },
    {
      path: '/coap',
      name: 'Coap',
      component: Coap
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
