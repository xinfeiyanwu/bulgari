import Vue from 'vue'
import VueRouter from 'vue-router'
import UserOper from '../components/content/userOper/UserOper.vue'
import Register from '../components/content/userOper/Register.vue'
import CompleteData from '../components/content/userOper/CompleteData.vue'
import Login from '../components/content/userOper/Login.vue'
import HeaderPlugIn from '../components/content/headerPlugIn/HeaderPlugIn.vue'
import SearchShop from '../components/content/headerPlugIn/SearchShop.vue'
import LinkWe from '../components/content/headerPlugIn/LinkWe.vue'
import Serve from '../components/content/headerPlugIn/Serve.vue'
import ServeContian from '../components/content/headerPlugIn/serveDetial/ServeContian.vue'
import ServeDetail from '../components/content/headerPlugIn/serveDetial/ServeDetail.vue'
import ServeAccess from '../components/content/headerPlugIn/serveDetial/ServeAccess.vue'
import ServeJewell from '../components/content/headerPlugIn/serveDetial/ServeJewell.vue'
import ServeWatch from '../components/content/headerPlugIn/serveDetial/ServeWatch.vue'
import ShoppingSelect from '../components/content/shop/ShoppingSelect.vue'
import Shopping from '../components/content/shop/Shopping.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Home.vue'),
    children: [
      {
        path: '/',
        name: 'HomeContent',
        component: () => import('../components/content/HomeContent.vue')
      },
      //故事
      {
        path: '/story/:type',
        name: 'Story',
        component: () => import('../components/content/story/Story.vue')
      },
      //高级珠宝
      {
        path: '/highJewellery',
        name: 'HighJewellery',
        component: () => import('../components/content/highJewellery/HighJewellery.vue')
      },
      //选择购物类型
      {
        path: '/ShoppingSelect',
        name: 'ShoppingSelect',
        component: () => import('../components/content/shop/ShoppingSelect.vue')
      },
      //购买商品
      {
        path: '/Shopping',
        name: 'Shopping',
        component: () => import('../components/content/shop/Shopping.vue')
      },
      //用户信息操作
      {
        path: '/userOper/',
        name: 'userOper',
        component: () => import('../components/content/userOper/UserOper.vue'),
        children: [
          {
            path: '/userOper/register/',
            name: 'Register',
            component: () => import('../components/content/userOper/Register.vue')
          },
          {
            path: '/userOper/CompleteData/',
            name: 'CompleteData',
            component: () => import('../components/content/userOper/CompleteData.vue')
          },
          {
            path: '/userOper/Login/',
            name: 'Login',
            component: () => import('../components/content/userOper/Login.vue')
          }
        ]
      },
      //头部插件
      {
        path: '/headerPlugIn/',
        name: 'HeaderPlugIn',
        component: () => import('../components/content/headerPlugIn/HeaderPlugIn.vue'),
        children: [
          {
            path: '/headerPlugIn/SearchShop/',
            name: 'SearchShop',
            component: () => import('../components/content/headerPlugIn/SearchShop.vue')
          },
          {
            path: '/headerPlugIn/LinkWe/',
            name: 'LinkWe',
            component: () => import('../components/content/headerPlugIn/LinkWe.vue')
          },
          {
            path: '/headerPlugIn/Serve/',
            name: 'Serve',
            component: () => import('../components/content/headerPlugIn/Serve.vue'),
            children: [
              {
                path: '/headerPlugIn/Serve/',
                name: 'ServeContian',
                component: () => import('../components/content/headerPlugIn/serveDetial/ServeContian.vue')
              },
              {
                path: '/headerPlugIn/Serve/ServeDetail',
                name: 'ServeDetail',
                component: () => import('../components/content/headerPlugIn/serveDetial/ServeDetail.vue'),
                children: [
                  {
                    path: '/headerPlugIn/Serve/ServeDetail/ServeAccess/:type',
                    name: 'ServeAccess',
                    component: () => import('../components/content/headerPlugIn/serveDetial/ServeAccess.vue')
                  },
                  {
                    path: '/headerPlugIn/Serve/ServeDetail/ServeWatch/:type',
                    name: 'ServeWatch',
                    component: () => import('../components/content/headerPlugIn/serveDetial/ServeWatch.vue')
                  },
                  {
                    path: '/headerPlugIn/Serve/ServeDetail/ServeJewell/:type',
                    name: 'ServeJewell',
                    component: () => import('../components/content/headerPlugIn/serveDetial/ServeJewell.vue')
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
    //savedPosition: 当点击浏览器前进后退按钮时，会记录下当前页面的位置，在跳转至下一页面时，停滞在上一个页面的位置上
    if(savedPosition){
      return savedPosition;
    }
    else{
      return {x: 0,y: 0};
    }
  },
})
// router.beforeEach((to,from,next)=>{
//   if(to.path=='/userOper/Login/'){
//     next();
//   }
//   else{
//     let token = localStorage.getItem('Authorization');
//     if(token===null||token===''){
//       next('/userOper/Login/');
//     }else{
//       next();
//     }
//   }
// })

export default router
