<template name="basics">
	<view class="basic-home">
		<view class="basic-qipao" :style="{ top: CustomBar + 'px' }" v-if="showQiPao">
			<view class="qipao-box"><text class="basic-qipao-text">添加到【我的小程序】更快找到我</text></view>
		</view>
		<view><map style="width: 100%;" :style="{ height: mapHeight + 'px' }" :latitude="latitude" :longitude="longitude"
			 :markers="covers"></map></view>
		<view class="basic-bottom">
			<view class="basic-content bg-white" :style="{ height: contentheght + 'px' }">
				<view class="cu-list menu sm-border" id="my-list-menu">
					<view class="cu-item" @tap="doSelectLocations">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey" v-if="currentSelectAddress.name == undefined">选择车辆位置</text>
							<text class="text-black" v-if="currentSelectAddress.name != undefined">{{ currentSelectAddress.name }}</text>
							<image src="/static/right.png" class="png" mode="aspectFit" style="float: right;"></image>
						</view>
					</view>
					<view class="cu-item" @tap="doSelectCars">
						<view class="content">	
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<view style="display: inline-block;">
								<view style="display: flex;align-items: center;">
									<text class="text-grey" v-if="currentSelectCar == ''">选择您的车辆</text>
									<text class="text-black" v-if="currentSelectCar != ''">{{ currentSelectCar }}</text>
									<view class="tip-bubble tip-bubble-left" style="margin-left: 20upx;" v-if="currentSelectCar == '' && selectedCarObj.number != undefined" @click="doCreateOrder(selectedCarObj)">{{selectedCarObj.number}}</view>
								</view>
							</view>
							<image src="/static/right.png" v-if="isRight" class="png" mode="aspectFit" style="float: right;top: 50%;margin-top: 14upx;"></image>
							<image src="/static/down.png" v-if="!isRight" class="png" mode="aspectFit" style="float: right;top: 50%;margin-top: 14upx;"></image>
						</view>
					</view>
					<div class="box">
						<div class="box-border"></div>
					</div>
				</view>
				<view class="choose-cars bg-white" v-if="!this.isRight">
					<view class=" cf padding-sm">
						<view v-if="currentSwiper != 0" class="bg-cyan radius fl padding-sm" style="transform: translateY(50%);" @click="preSwiper">
							<image src="/static/next.png" mode="aspectFit" style="width: 10px;height: 10px;"></image>
						</view>
						<view v-if="currentSwiper + 1 - myCarList.length != 0" class="bg-cyan radius fr padding-sm" style="transform: translateY(50%);"
						 @click="nextSwiper">
							<image src="/static/pre.png" mode="aspectFit" style="width: 10px;height: 10px;"></image>
						</view>
						<view>
							<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
							 @change="swiperChange" :current="currentSwiper">
								<template v-for="(item, index) in myCarList">
									<swiper-item :key="index">
										<view class="wash-list-content">
											<view class="wash-list">
												<view class="wash-box1" v-for="(car, index1) in item" :key="index1" @click="doCreateOrder(car)">
													<view class="wash-text" style="background-color: #888888;" v-if="car.number == currentSelectCar">{{ car.number }}</view>
													<view class="wash-text" style="background-color: #e7e7e7;" v-else>{{ car.number }}</view>
												</view>
												<view class="wash-box1" @tap="toPages('/pages/washcar/addCar?addType=1')">
													<view class="wash-text" style="border: #DDDDDD 1upx dashed;">
														<span style="font-weight: bold;margin-right: 5px;">＋</span>
														添加车辆
													</view>
												</view>
											</view>
										</view>
									</swiper-item>
								</template>
							</swiper>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</view>

		<!-- 购买弹窗 -->
		<view class="cu-modal bottom-modal" :class="modalName == 'ChooseModal' ? 'show' : ''" @tap="hideModal" data-backdrop="static">
			<view class="cu-dialog bg-white radius car-select-modal" @tap.stop="">
				<view style="padding-left: 30upx;padding-right: 30upx;padding-top: 30upx;">
					<view class="car-select">
						<view class="car-select-item radius" v-for="(item, index) in selectCarList" :key="index" @click="selectPromotion(item.id,index)"
						 :class="currentSelectIndex == index? animationSelect:''">
							<!-- <view class="car-select-tag-box">
							    优惠标签，暂时不要
								<view class="cu-tag light bg-gradual-orange car-select-tag">{{ item.selectTag }}</view>
							</view> -->
							<view>
								<image :src="item.img" class="car-select-img" mode="aspectFit"></image>
							</view>
							<view class="car-select-title">{{ item.title }}</view>
							<view class="car-select-price">￥{{ item.price }}</view>
							<view class="cu-progress round" style="height: 10upx;" v-if="currentSelectIndex == index">
								<view class="bg-gradual-blue" :style="[{ width: loading ? '100%' : '' }]"></view>
							</view>
						</view>
					</view>
				</view>
				<view style="padding-right: 30upx;padding-left: 30upx;">
					<view class="solids-bottom padding car-wash-desc">
						{{carWashDesc}}
					</view>
				</view>
				<view class="padding car-select-button">
					<view class="cu-btn bg-gradual-blue round lg shadow" @click="hideModal"><span style="visibility: hidden;">ff</span>上一步<span
						 style="visibility: hidden;">ff</span></view>
					<view class="cu-btn bg-gradual-blue round lg shadow" @click="toPages('createOrder')">确认下单</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'basics',
		data() {
			return {
				selectedCarObj:{},
				hasLogin: false,
				animationSelect: '',
				currentSelectIndex: 0,
				carWashDesc: '',
				loading: false,
				currentSelectAddress: {},
				currentSelectCar: '',
				modalName: null,
				showQiPao: false,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				currentSwiper: 0,
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				tarHeight: 50,
				isRight: true,
				screenHeight: 0,
				mapHeight: 500,
				contentheght: 110,
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					id: 'dddds',
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/location.png',
					callout: {
						content: '无法服务，附近暂无技师',
						bgColor: '#d81e06',
						borderColor: '#d81e06',
						borderRadius: 50,
						display: 'ALWAYS',
						padding: 10,
						fontSize: 15,
						color: '#fff'
					}
				}],
				myCarList: [],
				selectCarList: []
			};
		},
		methods: {
			//获取产品信息
			getProducts() {
				let _this = this;
				this.$api.request({}, '/api/product/productList', 'GET').then(res => {
					_this.selectCarList = res.data.data
				})
			},
			//获取全部车辆
			getAllCars() {
				let _this = this;
				_this.myCarList = []
				//获取全部车辆
				this.$api.request({}, 'api/vehicle/vehicleList', 'GET',false).then(res => {
					let carLists = res.data.data;
					let carItem = [];
					for (let i = 0; i < carLists.length; i++) {
						if(i == 0){
							_this.selectedCarObj = carLists[0];
						}
						carItem.push(carLists[i]);
						if ((i + 1) % 3 == 0) {
							_this.myCarList.push(carItem);
							carItem = []
						} else if ((i + 1) == carLists.length) {
							_this.myCarList.push(carItem);
						}
					}
					console.log("车辆：", _this.myCarList)
					//加载产品信息
					_this.getProducts();
				})
			},
			selectPromotion(id, index) {
				console.log("id：" + id, "下标：" + index);
				let that = this;
				this.carWashDesc = this.selectCarList[index].remarks;
				this.currentSelectIndex = index;
				this.loading = false;
				setTimeout(function() {
					that.loading = true;
				}, 100);

				this.animationSelect = 'animation-shake';
				setTimeout(() => {
					that.animationSelect = 'shadow bg-white solids';
				}, 100);
			},
			hideModal(e) {
				this.modalName = null;
			},
			doCreateOrder(car) {
				this.selectedCarObj = car;
				this.currentSelectCar = car.number;
				this.modalName = 'ChooseModal';
				this.selectPromotion(1, 0);
			},
			//跳转添加车辆页面
			toPages(url) {
				if (!this.hasLogin) {
					url = '/pages/user/login'
				}
				if(url == 'createOrder'){
					if(this.currentSelectAddress.name == undefined){
						uni.showModal({
							title:'请选择车辆位置'
						})
						return ;
					}
					let orderDetailObj = {
						promotionInfo:this.selectCarList[this.currentSelectIndex],
						addressInfo:this.currentSelectAddress,
						carInfo:this.selectedCarObj
					}
					url = '/pages/order/createOrder?orderDetail='+JSON.stringify(orderDetailObj);
				}
				uni.navigateTo({
					url: url
				});
			},
			//上一页
			preSwiper() {
				this.currentSwiper--;
			},
			//下一页
			nextSwiper() {
				this.currentSwiper++;
			},
			// 监听swiper 改变
			swiperChange(e) {
				this.currentSwiper = e.detail.current
			},
			//选择车辆地址
			doSelectLocations() {
				let _this = this;
				uni.chooseLocation({
					success: function(res) {
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
						_this.currentSelectAddress = res;
					}
				});
			},
			//选择车辆
			doSelectCars() {
				this.isRight = !this.isRight;
				if (this.isRight) {
					this.contentheght = 110;
				} else {
					this.contentheght = 220;
				}
				this.mapHeight = this.screenHeight - this.contentheght;
			}
		},
		mounted() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			})
			this.screenHeight = uni.getStorageSync('screenHeight') - 50 - uni.getStorageSync('bottomTarHeight');
			this.mapHeight = this.screenHeight - this.contentheght;
			//是否登录判断
			this.hasLogin = uni.getStorageSync('hasLogin');
			console.log("是否登录:", this.hasLogin)
			if (!this.hasLogin) {
				uni.navigateTo({
					url: '/pages/user/login'
				})
			}
			//加载车辆
			this.getAllCars();
			//显示气泡
			let that = this;
			this.showQiPao = uni.getStorageSync('isShowQiPao');
			setTimeout(function() {
				that.showQiPao = false;
				uni.removeStorageSync('isShowQiPao');
			}, 1000*3);
			
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../colorui/animation.css";

	.page {
		height: 100vh;
		background-color: white;
		overflow-y: hidden;
	}

	/* bubble */
	.tip-bubble {
		position: relative;
		background-color: #204020;
		width: 100px;
		padding: 10upx;
		color: #CCC;
		text-align: center;
		border-radius: 10upx;
		border: 1px solid #111;
		border-shadow: 1px 1px 2px #CCC;
		text-shadow: 0px 0px 5px #404040;
	}

	.tip-bubble:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border: 20upx solid;
	}

	.tip-bubble-left:after {
		border-color: transparent #204020 transparent transparent;
		top: 50%;
		right: 100%;
		margin-top: -20upx;
	}

	.car-select-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.car-wash-desc {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.car-select-modal {
		padding-bottom: 50upx;
	}

	.car-select {
		display: flex;
		overflow-x: scroll;
	}

	.car-select-img {
		width: 48px;
		height: 48px;
	}

	.car-select-tag-box {
		text-align: right;
	}

	.car-select-title {
		margin-bottom: 10upx;
		font-size: 16px;
	}

	.car-select-price {
		margin-bottom: 20upx;
		font-size: 15px;
	}

	.car-select-tag {
		margin-bottom: 15upx;
		border-bottom-left-radius: 50px;
		border-top-left-radius: 50px;
	}

	.car-select-item {
		min-width: 24%;
		border: #e7e7e7 1upx solid;
		margin: 0 8upx 10upx 0;
	}

	.basic-home {
		overflow-y: hidden;

		.basic-qipao {
			padding-right: 10upx;
			padding-left: 10upx;
			background-color: #333333;
			text-align: center;
			height: 40px;
			width: 65%;
			z-index: 2999;
			position: fixed;
			right: 20rpx;
			border-radius: 5px;

			.basic-qipao-text {
				line-height: 40px;
				color: #ffffff;
			}
		}

		.qipao-box {
			position: relative;
		}

		.qipao-box ::before {
			content: '';
			width: 0;
			height: 0;
			border: 20px solid;
			border-color: transparent transparent #333333 transparent;
			position: absolute;
			right: 18%;
			top: -30px;
			z-index: 2999;
		}
	}

	.basic-content {
		width: 100%;
		border-bottom: 1px solid white;
		/* background-color: red; */
	}

	.basic-bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 1024;
		overflow: hidden;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
	}

	.choose-cars {
		height: 200upx;
	}

	.swiper {
		margin-top: 5px;
		margin-left: auto;
		margin-right: auto;
		width: 80%;
	}

	.box {
		width: 100px;
		height: 0px;
		background-color: #ccc;
	}

	.box-border {
		position: relative;
		left: 25px;
		width: 50px;
		height: 0px;
		border-bottom: 0.5px solid #ddd;
	}

	.wash-list-content {
		width: 100%;
		max-height: 100px;
		background-color: #fff;

		.wash-list {
			display: flex;
			flex-wrap: wrap;

			.wash-box1 {
				width: 50%;
				margin-bottom: 40upx;

				.wash-text {
					margin: 0 auto;
					width: 85%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: #3d3d3d;
					padding-top: 4px;
					padding-bottom: 4px;
				}
			}
		}
	}
</style>
