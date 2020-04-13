import Vue from 'vue'
import Vuex from 'vuex'
import ProductSort from '../vuexModule/ProductSort'
import loginModel from '../vuexModule/loginModel'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   loginModel: false,
  //   ProductSortState: false,
  //   ProductSortObj: {},
  // },
  // mutations: {
  //   showState: (state) => {
  //    //debugger;
  //     state.loginModel=true;
  //     // console.log(state.loginModel)
  //   },
  //   hiddenState: (state) => {
  //     state.loginModel=false;
  //     // console.log(state.loginModel)
  //   },

  //   showProductSortState: (state, payload) => {
  //     state.ProductSortState = true;
  //     state.ProductSortObj = payload.ProductSortObj;
  //     console.log( state.ProductSortNavName)
  //   },
  //   hiddenProductSortState: (state) => {
  //     state.ProductSortState = false;
  //   }
  // },
  // actions: {
  //   showLoginModel: (context, payload) => {
  //     context.commit('showState', payload);
  //   },
  //   hiddenLoginModel: (context, payload) => {
  //     context.commit('hiddenState', payload);
  //   },

  //   showProductSort: (context,payload) => {
  //     context.commit('showProductSortState', payload);
  //   },
  //   hiddenProductSort: (context,payload) => {
  //     context.commit('hiddenProductSortState', payload);
  //   }
  // },
  modules: {
    ProductSort,loginModel
  }
})
