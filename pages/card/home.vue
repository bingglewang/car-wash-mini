<template name="components">
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">选择区域</block>
		</cu-custom>
		<scroll-view scroll-y style="height: calc(100% - 100px);">
			<template v-for="(item,index) in collList" >
				<view class="card-title" :key="index">{{item.province}}</view>
				<uni-collapse :key="index">
					<uni-collapse-item :title="item.city" open="true" thumb="/static/city.png">
						<view class="cu-form-group" style="border-top: #ddd 1upx solid;" @click="toBuyPages">
							<view class="title" style="margin-left: 40px;">{{item.area}}</view>
							<checkbox
								class="round blue check-size"
								:class="checkbox[2].checked ? 'checked' : ''"
								:checked="checkbox[2].checked ? true : false"
								value="C"
							></checkbox>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</template>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
export default {
	name: 'components',
	components: {
		uniCollapse,
		uniCollapseItem
	},
	data() {
		return {
			collList:[
				{
					province:'标题1',
					city:'标题2',
					area:'标题3'
				},
				{
					province:'标题1',
					city:'标题2',
					area:'标题3'
				},{
					province:'标题1',
					city:'标题2',
					area:'标题3'
				},
				{
					province:'标题1',
					city:'标题2',
					area:'标题3'
				},
				{
					province:'标题1',
					city:'标题2',
					area:'标题3'
				},
				{
					province:'标题1',
					city:'标题2',
					area:'标题3'
				}
			],
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
			]
		};
	},
	methods: {
		toBuyPages(){
			let url = '/pages/card/buyCard'
			uni.navigateTo({
				url:url
			})
		}
	}
};
</script>

<style>
.page {
	height: 100vh;
}
.card-title {
	height: 50px;
	display: flex;
	align-items: center;
	margin-left: 30px;
	font-size: 15px;
	font-weight: bold;
}
.check-size {
	transform: scale(0.7);
}
</style>
