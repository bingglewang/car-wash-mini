<template>
	<view class="bg-white page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">添加车辆</block>
		</cu-custom>

		<view class="">
			<swiper
				class="card-swiper"
				:class="dotStyle ? 'square-dot' : 'round-dot'"
				:indicator-dots="true"
				:circular="true"
				:autoplay="false"
				@change="cardSwiper"
				indicator-color="#8799a3"
				indicator-active-color="#0081ff"
			>
				<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
					<view class="swiper-item" style="position: relative;">
						<image :src="item.url" mode="aspectFill"></image>
						<view class="car-item-contet">
							<text>{{ item.title }}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="bg-gray padding-sm"></view>
		<view class="add-car-detail bg-white">
			<view class="detail-item-tile"><text class="detail-item-title-font">联系手机</text></view>
			<view class="detail-item-content"><input class="detail-item-input bg-gray" placeholder="请输入手机号" /></view>
			<view class="detail-item-tile">
				<text class="detail-item-title-font">车牌号码</text>
				<view style="display: flex;align-items: center;margin-left: auto;margin-right: 20px;">
					<image src="/static/logo.png" style="width: 20px;height: 20px;" mode="aspectFit"></image>
					<text >拍照识别车牌号</text>
				</view>
			</view>
			<view class="detail-item-content"><input class="detail-item-input bg-gray" /></view>
		</view>
		<vew class="detail-check">
			<view class="detail-check-right">
				<checkbox
					class="round blue check-size"
					:class="checkbox[2].checked ? 'checked' : ''"
					:checked="checkbox[2].checked ? true : false"
					value="C"
				></checkbox>
				<text style="margin-left: 5upx;">新能源</text>
			</view>
		</vew>
		<view class="detail-bottom">
			<button type="primary" size="default"  class="save-button-addCar" >确认添加</button>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			checkbox: [
				{
					value: 'A',
					checked: true
				},
				{
					value: 'B',
					checked: true
				},
				{
					value: 'C',
					checked: false
				}
			],
			cardCur: 0,
			dotStyle: false,
			swiperList: [
				{
					id: 0,
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					title: '轿车'
				},
				{
					id: 1,
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					title: 'SUV'
				},
				{
					id: 2,
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
					title: 'MPV'
				}
			]
		};
	},
	methods: {
		// cardSwiper
		cardSwiper(e) {
			this.cardCur = e.detail.current;
			console.log('当前card：' + this.cardCur);
		}
	},
	mounted() {}
};
</script>

<style lang="scss">
.page {
	height: 100vh;
}
.car-item-contet {
	height: 20%;
	width: 100%;
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	flex-direction: row;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-size: 30rpx;
	font-weight: bold;
}
.add-car-detail {
}

.detail-bottom{
	display: flex;
	align-items: center;
	margin-top: 50px;
	.save-button-addCar{
		border-radius: 100px;
		width: 80%;
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	}
}

.detail-item-tile {
	height: 50px;
	display: flex;
	align-items: center;
	margin-left: 20px;
}

.detail-item-title-font{
	font-weight: bold;
	font-size: 15px;
}

.detail-item-content {
	height: 50px;
	padding-left: 20px;
	padding-right: 20px;
	input {
		font-size: 14px;
		text-align: left;
		padding-left: 15px;
	}
}
.detail-item-input {
	height: 80%;
}
.detail-check{
	height: 40px;
	text-align: right;
	.detail-check-right{
		padding-right: 19px;
		margin-bottom: auto;
		margin-top: auto;
	}
}
</style>
