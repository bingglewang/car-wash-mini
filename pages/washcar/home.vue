<template name="basics">
	<view class="basic-home">
		<view><map style="width: 100%;" :style="{ height: mapHeight + 'px' }" :latitude="latitude" :longitude="longitude" :markers="covers"></map></view>
		<view class="basic-bottom">
			<view class="basic-content bg-white" :style="{ height: contentheght + 'px' }">
				<view class="cu-list menu sm-border">
					<view class="cu-item" @tap="doSelectLocations">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey">选择车辆位置</text>
							<image src="/static/right.png" class="png" mode="aspectFit" style="float: right;"></image>
						</view>
					</view>
					<view class="cu-item" @tap="doSelectCars">
						<view class="content">
							<image src="/static/logo.png" class="png" mode="aspectFit"></image>
							<text class="text-grey">选择您的车辆</text>
							<image src="/static/right.png" v-if="isRight" class="png" mode="aspectFit" style="float: right;"></image>
							<image src="/static/down.png" v-if="!isRight" class="png" mode="aspectFit" style="float: right;"></image>
						</view>
					</view>
				</view>
				<view class="choose-cars bg-white" v-if="this.isRight"></view>
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
			]
		};
	},
	onShow() {
		console.log('success');
	},

	methods: {
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
</style>
