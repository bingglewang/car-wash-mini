import http from './interface'

import {BaseUrl} from '../../util/env/index'

import {randomString,contrastTime} from '@/util/common'

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
	let userInfo = uni.getStorageSync('userInfo');
	//获取token
	let token = uni.getStorageSync('token');
	let isExpire = contrastTime(userInfo.expireTime - 0);
	//let isExpire = contrastTime(1576034279);
	console.log("过期时间:",isExpire);
	//过期刷新token
	if(isExpire && userInfo.expireTime != undefined && userInfo.expireTime != ''){
		http.request({
			baseUrl: BaseUrl,
		    url: 'api/user/refresh-token/'+userInfo.refreshToken,
			dataType: 'json',
			method: 'POST'
		}).then(refres => {
			console.log("刷新结果:",refres.data.data.refreshToken)
			console.log("刷新结果token:",refres.data.data.token)
			userInfo.refreshToken = refres.data.data.refreshToken;
			userInfo.expireTime = refres.data.data.expireTime;
			uni.setStorageSync('userInfo',userInfo);
			uni.setStorageSync('token',refres.data.data.token)
		})
	}
	
	
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			'Content-Type':'application/x-www-form-urlencoded',
			"time": timestamp,
			"nonceStr": randomStr
		}
	}
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		//判断返回状态 执行相应操作
	}
	
	let baseData = {
		"authorizationToken": token
	}
	
    return http.request({
		baseUrl: BaseUrl,
        url: url,
		dataType: 'json',
		method: method || 'GET',
        data:Object.assign(data,baseData),
    })
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	request
}