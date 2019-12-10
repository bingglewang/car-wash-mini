<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">小饼好吃</block>
		</cu-custom>
		<view class="zai-box">
			<image src="../../static/zaizai-login/login.png" mode='aspectFit' class="zai-logo"></image>
			<view class="zai-title">小饼好吃</view>
			<view class="zai-form">
				<!-- #ifdef APP-PLUS || H5 -->
				<input class="zai-input" placeholder-class placeholder="请输入用户名" />
				<input class="zai-input" placeholder-class password placeholder="请输入密码" />
				<view class="zai-label">忘记密码？</view>
				<button class="zai-btn" @click="doLogin">立即登录</button>
				<navigator url="../zaizai-register/index" hover-class="none" class="zai-label">还没有账号？点此注册.</navigator>
				<!-- #endif -->
				
				<!-- #ifdef MP-WEIXIN -->
				<view class="zai-label" style="color: #000000;font-weight: bold;font-size: 20px;padding: 0;">小饼好吃提醒您</view>
				<view class="zai-label">*您未登录，请您使用(微信授权登录)</view>
				<button class="zai-btn" open-type="getPhoneNumber" @getphonenumber="userInfo">授权登录</button>
				<view class="zai-label">版本号：1.0.0</view>
				<!-- #endif -->
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				mpCode: ''
			}
		},
		onLoad() {
			let that = this
			// 登录
			// #ifdef MP-WEIXIN
			uni.login({
				success: res => {
					if (res.code) {
						console.log("code:", res)
						this.mpCode = res.code
					} else {
						console.log('登录失败！' + res.errMsg)
					}
				}
			})
			// #endif
		},
		methods: {
			...mapMutations(['login']),
			// #ifdef APP-PLUS || H5
			doLogin(){
				let loginParam = {
					nickName: '哈哈哈',
					avatarurl: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ5nKRcTbnl3IJOeVpjnT5TerbOj76wnrWXZ7G3mzvrMqGc0de0AWWZRVUI7grtn03piaXKHxIYyug/132'
				}
				//将获取的token信息存储到缓存
				uni.setStorage({
					key: 'token',
					data: 'ceshi'
				})
				this.login(loginParam);
				uni.navigateBack();
			},
			// #endif
			
			// #ifdef MP-WEIXIN
			userInfo(res) {
				let _this = this;
				
				if (res.detail.errMsg == 'getPhoneNumber:fail user deny'){ 
					uni.showModal({
						title:'为了更好的用户体验，请先授权'
					})
					return;
				}
				
				uni.getUserInfo({
					success: user => {
						console.log("用户详情：",user)
						console.log("授权信息：",res);
						let loginParam = {
							code: _this.mpCode,
							platform: 'mp',
							encryptedData: res.detail.encryptedData,
							iv: res.detail.iv,
							deviceType: 1,
							nickName: user.userInfo.nickName,
							avatarurl: user.userInfo.avatarUrl
						}
						_this.$api.request(loginParam, 'api/user/wechat-app-login', 'POST').then(resp => {
							//存储用户信息
							let userInfo = {
								avatarUrl: resp.data.data.avatarurl,
								nickName: resp.data.data.nickName
							}
							//将获取的token信息存储到缓存
							uni.setStorage({
								key: 'token',
								data: resp.data.data.token
							})
							_this.login(userInfo);
							uni.navigateBack();
						})
						
					}
				})
			}
			// #endif
		}
	}
</script>

<style>
	.zai-box {
		margin-top: 50upx;
		padding: 0 100upx;
		position: relative;
	}

	.zai-logo {
		width: 100%;
		width: 100%;
		height: 310upx;
	}

	.zai-title {
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}

	.zai-form {
		margin-top: 50upx;
	}


	.zai-input {
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
		height: 100upx;
	}

	.input-placeholder,
	.zai-input {
		color: #94afce;
	}

	.zai-label{
			padding: 60upx 0;
			text-align: center;
			font-size: 30upx;
			color: #a7b6d0;
		}

	.zai-btn {
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}

	.zai-btn:after {
		border: 0;
	}

	/*按钮点击效果*/
	.zai-btn.button-hover {
		transform: translate(1upx, 1upx);
	}
</style>
