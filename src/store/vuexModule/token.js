export default {
    state: {
        token: localStorage.getItem('Authorization')?localStorage.getItem('Authorization'):'',
        uid: 0,
    },
    mutations: {
        setToken(state, payload){
            state.token = payload;
            localStorage.setItem('Authorization', payload.token);
            localStorage.setItem('uid', payload.num);
        }
    },
    actions: {
        setTokenAction({commit}, payload){
            commit('setToken', payload);
        }
    }
}