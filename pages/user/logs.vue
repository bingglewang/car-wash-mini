<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">更新日志</block>
		</cu-custom>

		<view class="cu-timeline">
			<template v-for="(item,index) in logsList">
				<view class="cu-item"  :key="index">
					<view class="content">
						<view class="cu-capsule radius">
							<view class="cu-tag bg-gradual-blue">{{item.title}}</view>
							<view class="cu-tag line-cyan">{{item.time}}</view>
						</view>
						<view class="margin-top">
							<view class="log-content-detail" v-for="(item1,index1) in item.content" :key="index1">
								{{item1}}
							</view>
						</view>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logsList: [
					{
						title:'V1.0.0',
						time:'2019-11-19',
						content:[
							'1、这是第一次，我家的铲屎官走了。',
							'2、久到足足有三，他的脚步声响在。',
							'3、我简直想要破门而出。'
						]
					},
					{
						title:'V1.0.0',
						time:'2019-11-19',
						content:[
							'1、这是第一次，我家的铲屎官走了。',
							'2、久到足足有三，他的脚步声响在。',
							'3、我简直想要破门而出。'
						]
					},
					{
						title:'V1.0.0',
						time:'2019-11-19',
						content:[
							'1、这是第一次，我家的铲屎官走了。',
							'2、久到足足有三，他的脚步声响在。',
							'3、我简直想要破门而出。',
							'4、我简直想要破门而出。',
							'5、我简直想要破门而出。'
						]
					},
					{
						title:'V1.0.0',
						time:'2019-11-19',
						content:[
							'1、这是第一次，我家的铲屎官走了。'
						]
					},
					{
						title:'V1.0.0',
						time:'2019-11-19',
						content:[
							'1、这是第一次，我家的铲屎官走了。',
							'2、久到足足有三，他的脚步声响在。'
						]
					}
				]
			};
		}
	}
</script>

<style>

</style>
