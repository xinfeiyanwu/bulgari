export default {
    state: {
        ProductSortState: false,
        ProductSortObj: {},
      },
      mutations: {
        showProductSortState: (state, payload) => {
          state.ProductSortState = true;
          state.ProductSortObj = payload.ProductSortObj;
        },
        hiddenProductSortState: (state) => {
          state.ProductSortState = false;
        }
      },
      actions: {
        showProductSort: (context,payload) => {
          context.commit('showProductSortState', payload);
        },
        hiddenProductSort: (context) => {
          context.commit('hiddenProductSortState');
        }
      },
}