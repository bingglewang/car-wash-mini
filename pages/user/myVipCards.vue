<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的次卡</block>
		</cu-custom>
		<scroll-view scroll-y class="padding">
			<template v-for="(vip,index) in vipCardList">
				<view class="car-list-item" :key="index">
					<view :class="['swiper-item','small']" :style="{ background: vip.bg, 'box-shadow': vip.shadow }">
						<image class="img" src="/static/icon_vip.png"></image>
						<text class="title">{{ vip.title }}</text>
						<view class="sub_title">
							<text>{{ vip.subTitleLeft }}</text>
							<text style="visibility: hidden;">占位盒子</text>
							<text>{{ vip.subTitleRight }}</text>
						</view>
					</view>
					
				</view>
			</template>
			<view style="height: 150upx;"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vipCardList:[
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
		methods:{
		}
	};
</script>

<style lang="scss" scoped>
	.car-list-item {
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: 10px;
	}
	
	.swiper-item {
		width: 100%;
		height: 100%;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 10px;
		margin-right: 10px;
	}
	
	.small {
		margin-top: 14px;
		/* height: 75%; */
	
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
</style>
