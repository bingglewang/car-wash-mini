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
							<view class="icon"><img src="../../static/user/mycars.png" /></view>
							<view class="text">我的车辆</view>
						</view>
						<view class="item" @click="toPages('/pages/user/myVipCards')">
							<view class="icon"><img src="../../static/user/vipmanage.png" /></view>
							<view class="text">我的次卡</view>
						</view>
						<view class="item" @click="toPages('/pages/user/coupon')">
							<view class="icon"><img src="../../static/user/coupon.png" /></view>
							<view class="text">我的优惠劵</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="box1" @click="toPages('/pages/user/feedback')">
					<view class="img">
						<image src="../../static/user/feedback.png"></image>
					</view>
					<view class="text">意见反馈</view>
				</view>
				<view class="box1" @click="toPages('/pages/user/logs')">
					<view class="img">
						<image src="../../static/user/logs.png"></image>
					</view>
					<view class="text">更新日志</view>
				</view>
				<view class="box1">
					<view class="img">
						<image src="../../static/user/notice.png"></image>
					</view>
					<view class="text">公告信息</view>
				</view>
				<view class="box1" @click="showModal('Image')">
					<view class="img">
						<image src="../../static/user/kefu.png"></image>
					</view>
					<view class="text">联系客服</view>
				</view>
				<view class="box1" @click="toPages('/pages/user/cooperation')">
					<view class="img">
						<image src="../../static/user/cooperation.png"></image>
					</view>
					<view class="text">加盟合作</view>
				</view>
			</view>
		</view>
		<view class="list-content" style="margin-top: 10px;">
			<view class="list">
				<view class="box1" @click="restart">
					<view class="img">
						<image src="../../static/user/restart.png"></image>
					</view>
					<view class="text">重启小程序</view>
				</view>
				<view class="box1" @click="checkUpdateVersion">
					<view class="img">
						<image src="../../static/user/update.png"></image>
					</view>
					<view class="text">检查更新</view>
				</view>

				<view class="box1">
					<navigator open-type="exit" target="miniProgram">
						<view class="img">
							<image src="../../static/user/exit.png"></image>
						</view>
						<view class="text">退出登录</view>
					</navigator>
				</view>

				<view class="box1" style="visibility: hidden;">
					<view class="img">
						<image src="../../static/user/kefu.png"></image>
					</view>
					<view class="text">联系客服</view>
				</view>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>


		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">更新提示</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					当前已是最新版本
				</view>
			</view>
		</view>

		<view class="cu-modal" :class="modalName=='Image'?'show':''">
			<view class="cu-dialog">
				<view>
					<template v-for="(item,index) in kefuList">
						<view :key="index" class="phone-item">
							<text style="font-weight: bold;">{{item.name}}：</text>
							<text style="color: #0081FF;">{{item.phoneNubmer}}</text>
							<view class="phone-item-icon" @click="callPhonenumber(item.phoneNubmer)">
								<image src="/static/phone.png" mode="aspectFit" style="width: 16px;height: 16px;"></image>
							</view>
						</view>
					</template>
				</view>
				<view class="cu-bar bg-white">
					<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">关闭</view>
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				modalName: '',
				kefuList: [{
						name: '张三',
						phoneNubmer: '13227355241'
					},
					{
						name: '李四',
						phoneNubmer: '17798318776'
					}
				]
			};
		},
		onLoad() {},
		methods: {
			toPages(url) {
				uni.navigateTo({
					url: url
				})
			},
			showModal(model) {
				this.modalName = model
			},
			hideModal() {
				this.modalName = null
			},
			callPhonenumber(phonenubmer) {
				console.log("电话：" + phonenubmer)
				uni.makePhoneCall({
					phoneNumber: phonenubmer
				});
			},
			//重启
			restart() {
				let url = '/pages/index/index'
				uni.reLaunch({
					url: url
				});
			},
			//推出程序
			exitProgram() {
				uni.showModal({
					title: '提示',
					content: '确定退出小程序？',
					success: function(res) {
						console.log("当前页面；", uni.getCurrentPages())
						if (res.confirm) {
							uni.navigateBack({
								delta: -1
							})
						}
					},
				})
			},
			// 版本更新
			checkUpdateVersion() {
				let that = this;
				const updateManager = uni.getUpdateManager();

				updateManager.onCheckForUpdate(function(res) {
					// 请求完新版本信息的回调
					console.log('新版本信息：', res.hasUpdate);
					if (!res.hasUpdate) {
						that.showModal('Modal')
					}
				});

				updateManager.onUpdateReady(function(res) {
					uni.showModal({
						title: '更新提示',
						content: '新版本已经准备好，是否重启应用？',
						success(res) {
							if (res.confirm) {
								// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
								updateManager.applyUpdate();
							}
						}
					});

				});

				updateManager.onUpdateFailed(function(res) {
					// 新的版本下载失败
				});
			},

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

	.phone-item {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-left: 40px;
		padding-right: 40px;

		text {
			color: #888888;
		}

		.phone-item-icon {
			display: inline-block;
			margin-left: auto;
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
