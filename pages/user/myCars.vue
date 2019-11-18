<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的车辆</block>
		</cu-custom>
		<scroll-view scroll-y class="padding">
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 100px;background-color: white;margin-bottom: 30upx;"></view>
			<view style="height: 150upx;"></view>
		</scroll-view>
		<view class="mycar-bottom" style=""><button type="primary" size="default" class="save-button-addCar">添加车辆</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
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
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	}
}
</style>
