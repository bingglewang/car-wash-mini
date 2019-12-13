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
					<view class="car-item-edit">
						<button class="cu-btn round line-blue shadow" style="margin-bottom: 15upx;" @click="editCar(item)">编辑</button>
						<button class="cu-btn round line-red shadow" @click="deleteCar(item.id)">删除</button>
					</view>
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
		//删除车辆
		deleteCar(id){
			let _this = this;
			this.$api.request({id:id},'api/vehicle/delVehicle','POST').then(res => {
				_this.getAllCarsList();
			})
		},
		//编辑车辆
		editCar(car){
			let carJsonStr = JSON.stringify(car);
			let url = '/pages/washcar/addCar?addType=3&car='+ carJsonStr;
			uni.navigateTo({
				url: url
			});
		},
		//添加车辆
		doAddCarPages() {
			let url = '/pages/washcar/addCar?addType=2';
			uni.navigateTo({
				url: url
			});
		},
		//加载车辆
		getAllCarsList(){
			let _this = this;
			this.$api.request({}, 'api/vehicle/vehicleList', 'GET').then(res => {
				_this.carList = res.data.data
			});
		}
	},
	onShow() {
		this.getAllCarsList();
	}
};
</script>

<style lang="scss" scoped>
.car-item-img {
	width: 70px;
	height: 70px;
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
	display: flex;
	flex-direction: column;
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
