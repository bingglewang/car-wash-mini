import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state, provider) {

			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorageSync('hasLogin',true)//缓存用户登陆状态
			uni.setStorageSync('userInfo',provider)//缓存用户登陆状态
			console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			uni.removeStorageSync('userInfo');
			uni.removeStorageSync('hasLogin');
			uni.removeStorageSync('token');
		}
	},
	actions: {
	
	}
})

export default store
