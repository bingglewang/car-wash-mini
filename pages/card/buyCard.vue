<template>
	<view class="buy-page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">购买会员卡</block>
		</cu-custom>
		<view class="buy-card-head">
			<image src="/static/location-blue.png" class="buy-card-head-img" style="margin-left: 20upx;" mode="aspectFit"></image>
			<text class="buy-card-head-text">房山区</text>
			<image src="/static/down.png" class="buy-card-head-img" mode="aspectFit"></image>
			<view class="buy-card-head-right">
				<text>我的会员卡</text>
				<image src="/static/right.png" class="buy-card-head-img" mode="aspectFit"></image>
			</view>
		</view>
		<view>
			<swiper
				@change="swiperChange"
				previous-margin="50px"
				next-margin="50px"
				class="swiper"
				:indicator-dots="false"
				:autoplay="false"
				:interval="3000"
				:duration="1000"
				:current="bigIdx"
			>
				<template v-for="(vip, i) in vips">
					<swiper-item :key="i">
						<view :class="['swiper-item', bigIdx === i ? 'big' : 'small']" :style="{ background: vip.bg, 'box-shadow': vip.shadow }">
							<image class="img" src="/static/icon_vip.png"></image>
							<text class="title">{{ vip.title }}</text>
							<view class="sub_title">
								<text>{{ vip.subTitleLeft }}</text>
								<text style="visibility: hidden;">占位盒子</text>
								<text>{{ vip.subTitleRight }}</text>
							</view>
						</view>
					</swiper-item>
				</template>
			</swiper>
			<view class="buy-card-grid">
				<view class="cu-list grid col-4">
					<template v-for="(item, index) in gridList">
						<view class="cu-item" :key="index">
							<view class="circle-bg">
								<text class="grid-item-count1">{{ item.count }}</text>
								<text class="grid-item-unit1">{{ item.unit }}</text>
							</view>
							<text>{{ item.title }}</text>
						</view>
					</template>
				</view>
			</view>
			<view class="bg-gray" style="height: 10px;"></view>
			<view class="quanyishuoming"><view class="quanyishuoming-title">权益说明</view></view>
			<view class="quanyishuoming-content">
				<template v-for="(item1,index1) in quanyiList">
					<view :key="index1" class="padding" style="padding-bottom: 0;padding-top: 20upx;">
						<text style="color: #888;">{{item1.content}}</text>
					</view>
				</template>
			</view>
			<view class="detail-bottom">
				<button type="primary" size="default" class="save-button-addCar">立即购买/￥500</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			quanyiList:[
				{
					content:'1、免费胎压监测与补气',
				},
				{
					content:'2、免费胎压监测与补气',
				},
				{
					content:'3、免费胎压监测与补气',
				}
			],
			gridList: [
				{
					title: '普洗',
					unit: '次',
					count: '5'
				},
				{
					title: '精洗',
					unit: '元',
					count: '55'
				},
				{
					title: '打蜡',
					unit: '元',
					count: '99'
				}
			],
			bigIdx: 1,
			vips: [
				{
					bg: 'linear-gradient(94deg,rgba(150,147,168,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '季卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：90天'
				},
				{
					bg: 'linear-gradient(94deg,rgba(192,160,105,1),rgba(233,213,172,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '10次精洗卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：永久'
				},
				{
					bg: 'linear-gradient(94deg,rgba(150,147,168,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '4次普洗卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：60天'
				},
				{
					bg: 'linear-gradient(94deg,rgba(192,160,105,1),rgba(233,213,172,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '25次普洗卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：180天'
				}
			]
		};
	},
	onLoad() {},
	methods: {
		swiperChange(e) {
			this.bigIdx = e.detail.current;
		}
	}
};
</script>
<style lang="scss" scoped>
.buy-page {
	height: 100vh;
	background-color: #ffffff;
}

.cu-list.grid > .cu-item:after {
	border-right: none !important;
	border-bottom: none !important;
}


.detail-bottom {
		display: flex;
		align-items: center;
		margin-top: 50px;

		.save-button-addCar {
			border-radius: 100px;
			width: 80%;
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		}
	}

.quanyishuoming {
	border-bottom: #ddd 0.5px solid;
	width: 90%;
	margin: 0 auto;
	height: 50px;
	display: flex;
	align-items: center;
	.quanyishuoming-title {
		font-weight: bold;
		font-size: 15px;
		border-bottom: #0081ff 2px solid;
	}
}

.quanyishuoming-content{
	padding-left: 20px;
}

.grid-item-count1 ::after{
	  position: absolute;
	  content: "";   
	  display: block;   
	  width: 20px;   
	  height: 20px;  
	  border-radius: 50%;
	  background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
	  right: calc(50% - 10px);
	  top: calc(50% - 20px);
	  opacity:.15;
}


.grid-item-count1 {
	display: inline-block !important;
	font-size: 24px !important;
	font-weight: bold !important;
	color: black !important;
	margin-right: 4upx !important;
}

.grid-item-unit1 {
	display: inline-block !important;
	color: black !important;
}

.buy-card-head {
	height: 40px;
	display: flex;
	align-items: center;
	.buy-card-head-text {
		font-weight: bold;
		font-size: 15px;
		margin-left: 8upx;
		margin-right: 8upx;
	}
	.buy-card-head-img {
		width: 20px;
		height: 20px;
	}
	.buy-card-head-right {
		display: block;
		display: flex;
		align-items: center;
		margin-left: auto;
		margin-right: 20upx;
	}
}
.swiper {
	width: 100%;
	margin-top: 10px;

	.swiper-item {
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 10px;
		margin-right: 10px;
	}

	.big {
		margin-top: 0;

		.img {
			margin-top: 15px;
			width: 40px;
			height: 40px;
		}

		.title {
			font-size: 25px;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			line-height: 41px;
		}

		.sub_title {
			font-size: 11px;
			font-weight: 300;
			color: rgba(255, 255, 255, 1);
			line-height: 41px;
		}
	}

	.small {
		margin-top: 14px;
		height: 75%;

		.img {
			margin-top: 5px;
			width: 25px;
			height: 25px;
		}

		.title {
			font-size: 15px;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
			line-height: 31px;
		}

		.sub_title {
			font-size: 7px;
			font-weight: 300;
			color: rgba(255, 255, 255, 1);
		}
	}
}
</style>
