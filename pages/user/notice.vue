<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">公告信息</block>
		</cu-custom>
		<view class="example-body">
			<template v-for="(item,index) in noticeList">
				<uni-notice-bar  :show-icon="true" :scrollable="true" :single="true" :text="item" :key="index"/>
			</template>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	export default{
		components: {
			uniNoticeBar
		},
		data(){
			return{
				noticeList:[
						'uni-app行业峰会频频亮相，开发者反响热烈!',
						'uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。',
						'8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。'
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.example-body {
		margin-top: 10px;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14rpx;
		background-color: #ffffff;
	}
</style>
