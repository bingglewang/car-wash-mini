<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的车辆</block>
		</cu-custom>
		<scroll-view scroll-y class="padding">
			<template v-for="(item, index) in carList">
				<view class="car-list-item" :key="index">
					<image :src="item.url" class="car-item-img" mode="aspectFit"></image>
					<view class="car-item-content">
						<view class="car-item-number">{{ item.number }}</view>
						<view class="car-item-phone">{{ item.mobile }}</view>
					</view>
					<button class="cu-btn round line-blue shadow car-item-edit">编辑</button>
				</view>
			</template>
			<view style="height: 150upx;"></view>
		</scroll-view>
		<view class="mycar-bottom" style=""><button type="primary" size="default" class="save-button-addCar" @click="doAddCarPages">添加车辆</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			carList: []
		};
	},
	methods: {
		doAddCarPages() {
			let url = '/pages/washcar/addCar';
			uni.navigateTo({
				url: url
			});
		}
	},
	mounted() {
		let _this = this;
		this.$api.request({}, 'api/vehicle/vehicleList', 'GET').then(res => {
			_this.carList = res.data.data
		});
	}
};
</script>

<style lang="scss" scoped>
.car-item-img {
	width: 100px;
	height: 100px;
}

.mycar-bottom {
	position: fixed;
	bottom: 0;
	height: 150upx;
	width: 100%;
	background-color: white;
	display: flex;
	align-items: center;

	.save-button-addCar {
		border-radius: 60upx;
		width: 90%;
		z-index: 999;
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	}
}

.car-item-content {
	display: inline-block;
	margin-left: 20px;
}

.car-item-number {
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 20upx;
	color: #000000;
}

.car-item-phone {
	color: #888888;
	font-size: 15px;
}

.car-item-edit {
	margin-left: auto;
	margin-right: 20px;
}

.car-list-item {
	height: 100px;
	background-color: white;
	margin-bottom: 30upx;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
</style>
