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
				<view class="zai-label" style="color: #000000;font-weight: bold;font-size: 20px;padding: 0;">小饼好吃提醒您</view>
				<view class="zai-label">*您未登录，请您使用(微信授权登录)</view>
				<button class="zai-btn">授权登录</button>
				<view class="zai-label">版本号：1.0.0</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.zai-box{
		margin-top: 50upx;
		padding: 0 100upx;
		position: relative;
	}
	.zai-logo{
		width: 100%;
		width: 100%;
		height: 310upx;
	}
	.zai-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.zai-form{
		margin-top: 50upx;
	}
	.zai-label{
		padding: 40upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
