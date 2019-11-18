<template>
	<view>
		<view class="">
			<swiper @change="swiperChange" previous-margin="50px" next-margin="50px" class="swiper" :indicator-dots="false"
			 :autoplay="false" :interval="3000" :duration="1000" :current="bigIdx">

				<template v-for="(vip, i) in vips">
					<swiper-item :key="'vip_'+i">
						<view :class="['swiper-item',bigIdx === i ? 'big' : 'small']" :style="{background:vip.bg,'box-shadow':vip.shadow}">
							<image class="img" src="/static/icon_vip.png"></image>
							<text class="title">{{vip.title}}</text>
							<view class="sub_title">
								<text>{{vip.subTitleLeft}}</text>
								<text style="visibility: hidden;">占位盒子</text>
								<text>{{vip.subTitleRight}}</text>
							</view>
						</view>
					</swiper-item>
				</template>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bigIdx: 1,
				vips: [{
					bg: 'linear-gradient(94deg,rgba(150,147,168,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '季卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：90天'
				}, {
					bg: 'linear-gradient(94deg,rgba(192,160,105,1),rgba(233,213,172,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '10次精洗卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：永久'
				}, {
					bg: 'linear-gradient(94deg,rgba(150,147,168,1),rgba(150,147,164,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '4次普洗卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：60天'
				}, {
					bg: 'linear-gradient(94deg,rgba(192,160,105,1),rgba(233,213,172,1))',
					shadow: '0px 3px 12px 0px rgba(195,164,110,0.23)',
					title: '25次普洗卡',
					subTitleLeft: '限长治市使用',
					subTitleRight: '有效期：180天'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			swiperChange(e) {
				this.bigIdx = e.detail.current
			}
		}
	}
</script>
<style lang="scss" scoped>
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
