import http from './interface'

import {BaseUrl} from '../../util/env/index'

import randomString from '@/util/common'

var timestamp = (new Date()).valueOf();  //时间戳
var randomStr = randomString.randomString(27); //随机字符串
var myHeader = {
	time:timestamp,
	nonceStr:randomStr
}

export const request = (data,url,method) => {
	http.config.baseUrl = BaseUrl
	
	//获取token
	let token = "";
	uni.getStorage({
		key: 'token',
		success: function(res) {
			token = res.data
		}
	});
	
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
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
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