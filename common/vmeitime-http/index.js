import http from './interface'

import {BaseUrl} from '../../util/env/index'

import {randomString,formatTime} from '@/util/common'

export const request = (data,url,method) => {
	http.config.baseUrl = BaseUrl

	//随机字符串,时间戳
	var timestamp = (new Date()).valueOf();  //时间戳
	var randomStr = randomString(27); //随机字符串
	var myHeader = {
		time:timestamp,
		nonceStr:randomStr
	}
	
	//获取用户信息
	try{
		let userInfo = uni.getStorageSync('userInfo');
	}catch(e){
		console.log("接口:用户详情:",e);
	}

	//获取token
	let token = uni.getStorageSync('token');
	
	
	console.log("接口:token:",token);
	
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			'Content-Type':'application/x-www-form-urlencoded',
			"token": token,
			"time": timestamp,
			"nonceStr": randomStr
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
		if(response.data.code -0 == 0){
			return response;
		}else{
			uni.showModal({
				title:response.data.msg
			})
		}
	}
	
    return http.request({
		baseUrl: BaseUrl,
        url: url,
		dataType: 'json',
		method: method || 'GET',
        data:data,
    })
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	request
}