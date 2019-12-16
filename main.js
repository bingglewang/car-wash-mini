import Vue from 'vue'
import App from './App'
import store from './store'
import api from '@/common/vmeitime-http/'

import basics from './pages/washcar/home.vue'
Vue.component('basics',basics)

import components from './pages/order/home.vue'
Vue.component('components',components)

import plugin from './pages/card/home.vue'
Vue.component('plugin',plugin)

import about from './pages/user/home.vue'
Vue.component('about',about)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}


Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = api;
Vue.prototype.$msg = msg;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



