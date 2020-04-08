import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginModel: false,
    ProductSortState: false,
    ProductSortObj: {},
  },
  mutations: {
    showState: (state, payload) => {
     //debugger;
      state.loginModel=payload;
      // console.log(state.loginModel)
    },
    hiddenState: (state, payload) => {
      state.loginModel=payload;
      // console.log(state.loginModel)
    },

    showProductSortState: (state, payload) => {
      state.ProductSortState = payload.state;
      state.ProductSortObj = payload.ProductSortObj;
      console.log( state.ProductSortNavName)
    },
    hiddenProductSortState: (state, payload) => {
      state.ProductSortState = payload;
    }
  },
  actions: {
    showLoginModel: (context, payload) => {
      context.commit('showState', payload);
    },
    hiddenLoginModel: (context, payload) => {
      context.commit('hiddenState', payload);
    },

    showProductSort: (context,payload) => {
      context.commit('showProductSortState', payload);
    },
    hiddenProductSort: (context,payload) => {
      context.commit('hiddenProductSortState', payload);
    }
  },
  modules: {
  }
})
