<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view class="avator"><img src="../../static/user/face.jpg" /></view>
						<view class="phone-number">小炳</view>
					</view>
					<view class="box-bd">
						<view class="item" @click="toPages('/pages/user/myCars')">
							<view class="icon"><img src="../../static/user/message.png" /></view>
							<view class="text">我的车辆</view>
						</view>
						<view class="item" >
							<view class="icon"><img src="../../static/user/favorite.png" /></view>
							<view class="text">我的次卡</view>
						</view>
						<view class="item" @click="toPages('/pages/user/coupon')">
							<view class="icon"><img src="../../static/user/service.png" /></view>
							<view class="text">我的优惠劵</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="box1" >
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">意见反馈</view>
				</view>
				<view class="box1" @click="toPages('/pages/user/logs')">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">更新日志</view>
				</view>
				<view class="box1">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">公告信息</view>
				</view>
				<view class="box1">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">联系客服</view>
				</view>
				<view class="box1">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">加盟合作</view>
				</view>
			</view>
		</view>
		<view class="list-content" style="margin-top: 10px;">
			<view class="list">
				<view class="box1">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">重启小程序</view>
				</view>
				<view class="box1">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">检查更新</view>
				</view>
				<view class="box1">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">退出登录</view>
				</view>
				<view class="box1" style="visibility: hidden;">
					<view class="img">
						<image src="../../static/user/opinion.png"></image>
					</view>
					<view class="text">联系客服</view>
				</view>
			</view>
		</view>
	    <view class="cu-tabbar-height"></view>
	</view>
</template>
<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {
		toPages(url){
			uni.navigateTo({
				url:url
			})
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #f1f1f1;
	font-size: 30upx;
}
.header {
	//background: #fff;
	height: 600upx;
	padding-bottom: 110upx;
	.bg {
		width: 100%;
		height: 500upx;
		padding-top: 300upx;
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	}
}
.box {
	width: 650upx;
	height: 280upx;
	border-radius: 20upx;
	margin: 0 auto;
	background: #fff;
	box-shadow: 0 5upx 20upx 0upx rgba(0, 0, 150, 0.2);
	.box-hd {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		.avator {
			width: 160upx;
			height: 160upx;
			background: #fff;
			border: 5upx solid #fff;
			border-radius: 50%;
			margin-top: -80upx;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.phone-number {
			width: 100%;
			text-align: center;
		}
	}
	.box-bd {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		.item {
			flex: 1 1 auto;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			border-right: 1px solid #f1f1f1;
			margin: 15upx 0;
			&:last-child {
				border: none;
			}
			.icon {
				width: 60upx;
				height: 60upx;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.text {
				width: 100%;
				text-align: center;
				margin-top: 10upx;
			}
		}
	}
}
.list-content {
	width: calc(100% - 20px);
	margin: 0px 10px 0 10px;
	background-color: #fff;
	box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.1);
	border-radius: 15upx;
	padding-top: 40upx;
	.list {
		display: flex;
		flex-wrap: wrap;
		.box1 {
			width: 25%;
			margin-bottom: 40upx;
			.img {
				width: 22vw;
				height: 10.5vw;
				display: flex;
				justify-content: center;
				image {
					width: 9vw;
					height: 9vw;
				}
			}
			.text {
				width: 100%;
				display: flex;
				justify-content: center;
				font-size: 26upx;
				color: #3d3d3d;
			}
		}
	}
}
</style>
