export default {
  state: {
    showShoppingCartState: false,
    shoppingCartList: localStorage.getItem('orderList') ? JSON.parse(localStorage.getItem('orderList')) : [],
  },
  mutations: {
    showShoppingCartModel: (state) => {
      state.showShoppingCartState = true;
    },
    hiddenShoppingCartModel: (state) => {
      state.showShoppingCartState = false;
    },

    addShoppingCart: (state, payload) => {
      console.log(state.shoppingCartList);
      state.shoppingCartList.push(payload);
      let orderList = localStorage.getItem('orderList');
      if(!orderList) {
        localStorage.setItem('orderList', '['+JSON.stringify(payload)+']');
      }
      else{
        let arr=JSON.parse(orderList);
        arr.push(payload);
        localStorage.setItem('orderList', JSON.stringify(arr)); 
      }
    },
    accuProNum: (state, payload) => {
      state.shoppingCartList.forEach(v => {
        if(v.productNO == payload.productNO) {
          v.productNum += payload.productNum;
        }
      });
      
      let orderList = JSON.parse(localStorage.getItem('orderList'));
      orderList.forEach(v => {
        if(v.productNO == payload.productNO) {
          v.productNum += payload.productNum;
          localStorage.setItem('orderList', JSON.stringify(orderList)); 
        }
      });
      console.log(state.shoppingCartList);
    },
    delPro: (state, payload) => {
      state.shoppingCartList.splice(payload, 1);
      localStorage.setItem('orderList', JSON.stringify(state.shoppingCartList));
    }
  },
  actions: {
    showShoppingCartModelReq: ({commit}) => {
      commit('showShoppingCartModel');
    },
    hiddenShoppingCartModelReq: ({commit}) => {
      commit('hiddenShoppingCartModel');
    },

    addShoppingCartReq: ({commit}, payload) => {
      commit('addShoppingCart', payload);
    },

    accuProNumReq: ({commit}, payload) => {
      commit('accuProNum', payload);
    },

    delProReq: ({commit}, payload) => {
      commit('delPro', payload);
    }
  }
}