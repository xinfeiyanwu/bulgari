import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import HomeContent from '../components/content/HomeContent.vue'
import UserOper from '../components/content/userOper/UserOper.vue'
import Register from '../components/content/userOper/Register.vue'
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
import Story from '../components/content/story/Story.vue'
import HighJewellery from '../components/content/highJewellery/HighJewellery.vue'
import ShopingSelect from '../components/content/shop/ShopingSelect.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'HomeContent',
        component: HomeContent
      },
      //故事
      {
        path: '/story/',
        name: 'Story',
        component: Story
      },
      //高级珠宝
      {
        path: '/highJewellery',
        name: 'HighJewellery',
        component: HighJewellery
      },
      //选择购物类型
      {
        path: '/ShopingSelect/:ProductSortNavName/:ProductSortType/:ProductType',
        name: 'ShopingSelect',
        component: ShopingSelect
      },
      //用户信息操作
      {
        path: '/userOper/',
        name: 'userOper',
        component: UserOper,
        children: [
          {
            path: '/userOper/register/',
            name: 'Register',
            component: Register,
          },
          {
            path: '/userOper/Login/',
            name: Login,
            component: Login
          }
        ]
      },
      //头部插件
      {
        path: '/headerPlugIn/',
        name: 'HeaderPlugIn',
        component: HeaderPlugIn,
        children: [
          {
            path: '/headerPlugIn/SearchShop/',
            name: 'SearchShop',
            component: SearchShop,
          },
          {
            path: '/headerPlugIn/LinkWe/',
            name: 'LinkWe',
            component: LinkWe,
          },
          {
            path: '/headerPlugIn/Serve/',
            name: 'Serve',
            component: Serve,
            children: [
              {
                path: '/headerPlugIn/Serve/',
                name: ServeContian,
                component: ServeContian,
              },
              {
                path: '/headerPlugIn/Serve/ServeDetail',
                name: 'ServeDetail',
                component: ServeDetail,
                children: [
                  {
                    path: '/headerPlugIn/Serve/ServeDetail/ServeAccess/:type',
                    name: 'ServeAccess',
                    component: ServeAccess,
                  },
                  {
                    path: '/headerPlugIn/Serve/ServeDetail/ServeWatch/:type',
                    name: 'ServeAccess',
                    component: ServeWatch,
                  },
                  {
                    path: '/headerPlugIn/Serve/ServeDetail/ServeJewell/:type',
                    name: 'ServeJewell',
                    component: ServeJewell,
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
  routes
})

export default router
