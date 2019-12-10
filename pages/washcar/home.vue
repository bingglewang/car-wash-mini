<template name="basics">
	<view class="basic-home">
		<view class="basic-qipao" :style="{ top: CustomBar + 'px' }" v-if="showQiPao">
			<view class="qipao-box"><text class="basic-qipao-text">添加到【我的小程序】更快找到我</text></view>
		</view>
		<view><map style="width: 100%;" :style="{ height: mapHeight + 'px' }" :latitude="latitude" :longitude="longitude" :markers="covers"></map></view>
		<view class="basic-bottom">
			<view class="basic-content bg-white" :style="{ height: contentheght + 'px' }">
				<view class="cu-list menu sm-border" id="my-list-menu">
					<view class="cu-item" @tap="doSelectLocations">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey" v-if="currentSelectAddress == ''">选择车辆位置</text>
							<text class="text-black" v-if="currentSelectAddress != ''">{{ currentSelectAddress }}</text>
							<image src="/static/right.png" class="png" mode="aspectFit" style="float: right;"></image>
						</view>
					</view>
					<view class="cu-item" @tap="doSelectCars">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey" v-if="currentSelectCar == ''">选择您的车辆</text>
							<text class="text-black" v-if="currentSelectCar != ''">{{ currentSelectCar }}</text>
							<image src="/static/right.png" v-if="isRight" class="png" mode="aspectFit" style="float: right;"></image>
							<image src="/static/down.png" v-if="!isRight" class="png" mode="aspectFit" style="float: right;"></image>
						</view>
					</view>
					<div class="box"><div class="box-border"></div></div>
				</view>
				<view class="choose-cars bg-white" v-if="!this.isRight">
					<view class=" cf padding-sm">
						<view v-if="currentSwiper != 0" class="bg-cyan radius fl padding-sm" style="transform: translateY(50%);" @click="preSwiper">
							<image src="/static/next.png" mode="aspectFit" style="width: 10px;height: 10px;"></image>
						</view>
						<view v-if="currentSwiper + 1 - myCarList.length != 0" class="bg-cyan radius fr padding-sm" style="transform: translateY(50%);" @click="nextSwiper">
							<image src="/static/pre.png" mode="aspectFit" style="width: 10px;height: 10px;"></image>
						</view>
						<view>
							<swiper
								class="swiper"
								:indicator-dots="indicatorDots"
								:autoplay="autoplay"
								:interval="interval"
								:duration="duration"
								@change="swiperChange"
								:current="currentSwiper"
							>
								<template v-for="(item, index) in myCarList">
									<swiper-item :key="index">
										<view class="wash-list-content">
											<view class="wash-list">
												<view class="wash-box1" v-for="(car, index1) in item.cars" :key="index1" @click="doCreateOrder(car)">
													<view class="wash-text" style="background-color: #888888;" v-if="car == currentSelectCar">{{ car }}</view>
													<view class="wash-text" style="background-color: #e7e7e7;" v-else>{{ car }}</view>
												</view>
												<view class="wash-box1" @tap="toPages('/pages/washcar/addCar')">
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
			<view class="cu-dialog bg-white radius car-select-modal" @tap.stop="" >
				<view style="padding-left: 30upx;padding-right: 30upx;padding-top: 30upx;">
					<view class="car-select">
						<view class="car-select-item radius" v-for="(item, index) in selectCarList" :key="index" @click="selectPromotion(item.id,index)" :class="currentSelectId == item.id? animationSelect:''">
							<view class="car-select-tag-box">
								<view class="cu-tag light bg-gradual-orange car-select-tag">{{ item.selectTag }}</view>
							</view>
							<view><image :src="item.selectImg" class="car-select-img" mode="aspectFit"></image></view>
							<view class="car-select-title">{{ item.selectTitle }}</view>
							<view class="car-select-price">￥{{ item.selectPrice }}</view>
							<view class="cu-progress round" style="height: 10upx;" v-if="currentSelectId == item.id">
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
					<view class="cu-btn bg-gradual-blue round lg shadow" @click="hideModal"><span style="visibility: hidden;">ff</span>上一步<span style="visibility: hidden;">ff</span></view>
					<view class="cu-btn bg-gradual-blue round lg shadow" @click="toPages('/pages/order/createOrder')">确认下单</view>
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
			hasLogin:false,
			animationSelect: '',
			currentSelectId: 0,
			carWashDesc:'',
			loading: false,
			currentSelectLong: '',
			currentSelectLat: '',
			currentSelectAddress: '',
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
			covers: [
				{
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
				}
			],
			myCarList: [
				{
					cars: ['车辆1', '车辆2', '车辆3']
				},
				{
					cars: ['车辆4', '车辆5', '车辆6']
				}
			],
			selectCarList: [
				{
					id: 1,
					selectTag: '首洗优惠',
					selectImg: '../../static/logo.png',
					selectTitle: '外观',
					selectPrice: '15',
					desc:'加分加分流水的房客就沙发降到了附件是打开了附件是打开了就落空发送的记录'
				},
				{
					id: 2,
					selectTag: '首洗优惠',
					selectImg: '../../static/logo.png',
					selectTitle: '普洗',
					selectPrice: '25',
					desc:'就发的时刻均可发生六点尽量克服的是'
				},
				{
					id: 3,
					selectTag: '次卡专享价',
					selectImg: '../../static/logo.png',
					selectTitle: '精洗',
					selectPrice: '55',
					desc:'收到JFK了范德萨就开了放到数据库了JFK鲁大师 JFK老师的'
				},
				{
					id: 4,
					selectTag: '次卡专享价',
					selectImg: '../../static/logo.png',
					selectTitle: '打蜡',
					selectPrice: '99',
					desc:'撒JFK领导发动机萨洛克附近的萨科'
				}
			]
		};
	},
	onShow() {
		console.log('success');
	},
	
	methods: {
		selectPromotion(id,index) {
			console.log("id："+id,"下标："+index);
			let that = this;
			this.carWashDesc = this.selectCarList[index].desc;
			this.currentSelectId = id;
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
		doCreateOrder(carNumber) {
			this.currentSelectCar = carNumber;
			this.modalName = 'ChooseModal';
			this.selectPromotion(2,1);
		},
		//跳转添加车辆页面
		toPages(url) {
			if(!this.hasLogin){
				url = '/pages/user/login'
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
			console.log('当前:' + e.detail.current);
			console.log('原始:' + e.detail.source);
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
					_this.currentSelectAddress = res.name;
					_this.currentSelectLong = res.longitude;
					_this.currentSelectLat = res.latitude;
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
		this.screenHeight = uni.getStorageSync('screenHeight') - 50 - uni.getStorageSync('bottomTarHeight');
		this.mapHeight = this.screenHeight - this.contentheght;
		this.hasLogin = uni.getStorageSync('hasLogin');
		console.log("是否登录:",this.hasLogin)
		if(!this.hasLogin){
			uni.navigateTo({
				url: '/pages/user/login'
			}) 
		}
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

.car-select-button{
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.car-wash-desc{
	display: flex;
	align-items: center;
	justify-content: center;
}

.car-select-modal{
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

.car-select-tag-box{
	text-align: right;
}

.car-select-title{
	margin-bottom: 10upx;
	font-size: 16px;
}

.car-select-price{
	margin-bottom: 20upx;
	font-size: 15px;
}

.car-select-tag{
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
