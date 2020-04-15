export default {
  state: {
    showShoppingCartState: false
  },
  mutations: {
    showShoppingCartModel: (state) => {
      state.showShoppingCartState = true;
    },
    hiddenShoppingCartModel: (state) => {
      state.showShoppingCartState = false;
    }
  },
  actions: {
    showShoppingCartModelReq: (context) => {
      context.commit('showShoppingCartModel');
    },
    hiddenShoppingCartModelReq: (context) => {
      context.commit('hiddenShoppingCartModel');
    }
  }
}