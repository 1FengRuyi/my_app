import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	// 用户 ID
	username:localStorage.getItem('username'),
	// 手机号
    password: localStorage.getItem('password'),
    // token值
    token:localStorage.getItem('token'),
    
   
}	
const mutations = {
    USERNAME: (item,data) => {
        if (!data) return false;
        state.username = data;
        localStorage.setItem('username', data);
    },
    PPASSWORD: (item,data) => {
        if (!data) return false;
        state.password = data;
        localStorage.setItem('password', data);
    },
  
    TOKEN: (item,data) => {
        if (!data) return false;
        state.token = data;
        localStorage.setItem('token', data);
    },

	// 注销
	LOGOUT: () => {
	    state.username = null;
	    state.password = null;
	    localStorage.removeItem('username');
	    localStorage.removeItem('password');
    },
    
   
}
export default new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules: {}
})