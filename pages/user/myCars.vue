<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的车辆</block>
		</cu-custom>
		<scroll-view scroll-y class="padding">
			<template v-for="(item,index) in carList">
				<view class="car-list-item" :key="index">
					<image :src="item.cardImg" style="width:100px;height: 100px ;" mode="aspectFit"></image>
					<view style="display: inline-block;margin-left: 20px;">
						<view style="font-size: 20px;font-weight: bold;color: #000000;">{{item.cardNumber}}</view>
						<view style="height: 20upx;"></view>
						<view style="color: #888888;font-size: 15px">{{item.phoneNubmer}}</view>
					</view>
					<button  style="margin-left: auto;margin-right: 20px;" class="cu-btn round line-blue shadow">编辑</button>
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
				carList:[
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					},
					{
						id:1,
						cardImg:'/static/logo.png',
						cardNumber:'鲁4·77990',
						phoneNubmer:'13227355241'
					}
				]
			};
		},
		methods:{
			doAddCarPages(){
				let url = '/pages/washcar/addCar';
				uni.navigateTo({
					url:url
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
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

	.car-list-item {
		height: 100px;
		background-color: white;
		margin-bottom: 30upx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
</style>
