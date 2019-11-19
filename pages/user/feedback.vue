<template>
	<view class="page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">意见反馈</block>
		</cu-custom>
		<view style="padding-left: 10px;height: 50px;display: flex;align-items: center;"><text style="font-size: 20px;color: #000000;font-weight: bold;">意见反馈</text></view>
		<view style="padding-left: 10px;height: 50upx;">
			<text style="color: #888888;font-size: 14px;">说说您对我们的评价，我们会努力完成您的要求</text>
		</view>
		<view>
			<view class="grid margin-bottom text-center col-3" style="padding-left: 10px;">
				<view class="" v-for="(item, index) in questionList" :key="index">
					<view class="feedback-item">{{ item }}</view>
				</view>
			</view>
		</view>
		<view style="height: 100px;padding-left: 10px;padding-right: 10px;" >
			<view class="bg-gray padding" style="height: 100px;">
				<textarea placeholder="请输入您的建议或反馈内容" style="height: 80px;"></textarea>
			</view>
		</view>
		<view style="height: 80px;width: 100%; padding-right: 10px;padding-left: 10px;display: flex;align-items: center;">
			<view style="border-bottom: #ddd 1upx solid;width: 100%;">
				<input placeholder="请输入联系电话" />
			</view>
		</view>
		<view class="detail-bottom">
			<button type="primary" size="default" class="save-button-addCar" @tap="toBind">确认提交</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			questionList: ['功能异常', '功能建议', '体验问题', '投诉', '其他问题']
		};
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
}
.feedback-item {
	border-radius: 20px;
	width: 80%;
	height: 50upx;
	border: #0081ff 1px solid;
	font-size: 14px;
	padding: 4upx;
	color: #ffffff;
	margin-top: 10px;
	background-color: #0081ff;
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
</style>
