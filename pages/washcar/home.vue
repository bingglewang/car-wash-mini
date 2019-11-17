<template name="basics">
	<view class="basic-home">
		<view><map style="width: 100%;" :style="{ height: mapHeight + 'px' }" :latitude="latitude" :longitude="longitude" :markers="covers"></map></view>
		<view class="basic-bottom">
			<view class="basic-content bg-white" :style="{ height: contentheght + 'px' }">
				<view class="cu-list menu sm-border" id="my-list-menu">
					<view class="cu-item" @tap="doSelectLocations">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey">选择车辆位置</text>
							<image src="/static/right.png" class="png" mode="aspectFit" style="float: right;"></image>
						</view>
					</view>
					<view class="cu-item"  @tap="doSelectCars">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey">选择您的车辆</text>
							<image src="/static/right.png" v-if="isRight" class="png" mode="aspectFit" style="float: right;"></image>
							<image src="/static/down.png" v-if="!isRight" class="png" mode="aspectFit" style="float: right;"></image>
						</view>
					</view>
					<div class="box">
					  <div class="box-border">
					  </div>
					</div>
				</view>
				<view class="choose-cars bg-white" v-if="!this.isRight">
					<view class=" cf padding-sm" >
						<view  v-if="currentSwiper != 0" class="bg-cyan radius fl padding-sm" style="transform: translateY(50%);" @click="preSwiper">
							<image src="/static/next.png"  mode="aspectFit" style="width: 10px;height: 10px;"></image>
						</view>
						<view  v-if="currentSwiper+1-myCarList.length != 0" class="bg-cyan radius fr padding-sm" style="transform: translateY(50%);" @click="nextSwiper">
							<image src="/static/pre.png"  mode="aspectFit" style="width: 10px;height: 10px;"></image>
						</view>
						<view>
							<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" @change="swiperChange" :current="currentSwiper">
								<template v-for="(item,index) in myCarList">
									<swiper-item :key="index">
										<view class="wash-list-content">
											<view class="wash-list">
												<view class="wash-box1" v-for="(car,index1) in item.cars" :key="index1">
													<view class="wash-text" style="background-color: #e7e7e7;">{{car}}</view>
												</view>
												<view class="wash-box1" @tap="toAddCarPage">
													<view class="wash-text" style="border: #DDDDDD 1upx dashed;"><span style="font-weight: bold;margin-right: 5px;">＋</span>添加车辆</view>
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
	</view>
</template>

<script>
export default {
	name: 'basics',
	data() {
		return {
			currentSwiper:0,
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
			myCarList:[
				{
					cars:[
						"车辆1","车辆2","车辆3"
					]
				},
				{
					cars:[
						"车辆4","车辆5","车辆6"
					]
				}
			]
		};
	},
	onShow() {
		console.log('success');
	},

	methods: {
		//跳转添加车辆页面
		toAddCarPage(){
			let url = '/pages/washcar/addCar';
			uni.navigateTo({
				url:url
			})
		},
		//上一页
		preSwiper(){
			this.currentSwiper --;
		},
		//下一页
		nextSwiper(){
			this.currentSwiper ++;
		},
		// 监听swiper 改变
		swiperChange(e){
			console.log("当前:"+e.detail.current)
			console.log("原始:"+e.detail.source)
		},
		//选择车辆地址
		doSelectLocations() {
			uni.chooseLocation({
				success: function(res) {
					console.log('位置名称：' + res.name);
					console.log('详细地址：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
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
	}
};
</script>

<style lang="scss">
.page {
	height: 100vh;
	background-color: white;
	overflow-y: hidden;
}
.basic-home {
	overflow-y: hidden;
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

.box{
    width:100px;
    height:0px;
    background-color:#ccc
  }
  .box-border{
    position:relative;
    left:25px;
    width:50px;
    height:0px;
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
