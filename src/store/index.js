import Vue from 'vue'
import Vuex from 'vuex'
import ProductSort from './vuexModule/ProductSort.js'
import loginModel from './vuexModule/loginModel.js'
import shoppingCart from './vuexModule/shoppingCart.js'
import token from './vuexModule/token.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ProductSort,
    loginModel,
    shoppingCart,
    token
  }
})
