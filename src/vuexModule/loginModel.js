export default {
    state: {
        loginModelState: false,
      },
      mutations: {
        showState: (state) => {
          state.loginModelState=true;
        },
        hiddenState: (state) => {
          state.loginModelState=false;
        },
      },
      actions: {
        showLoginModel: (context) => {
          context.commit('showState');
        },
        hiddenLoginModel: (context) => {
          context.commit('hiddenState');
        },
      },
}