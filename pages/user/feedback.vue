<template>
	<view class="page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">意见反馈</block>
		</cu-custom>
		<view class="feed-back-title"><text class="feed-back-title-text">意见反馈</text></view>
		<view class="feed-back-desc">
			<text class="feed-back-desc-text">说说您对我们的评价，我们会努力完成您的要求</text>
		</view>
		<view>
			<view class="grid margin-bottom text-center col-3 feed-back-check-item">
				<view class="" v-for="(item, index) in questionList" :key="index">
					<view class="feedback-item" :class="currentTitle == item ? 'bg-gradual-blue text-white':'bg-white text-gray'" @click="titleChange(item)">{{ item }}</view>
				</view>
			</view>
		</view>
		<view class="feed-back-content">
			<view class="bg-gray padding feed-back-content-box bg-white">
				<textarea placeholder="请输入您的建议或反馈内容" class="feed-back-text-area" v-model="feedContent"></textarea>
			</view>
		</view>
		<view class="feed-back-phone">
			<view class="feed-back-phone-number bg-white padding-sm">
				<input placeholder="请输入联系电话" v-model="feedNUmber" />
			</view>
		</view>
		<view class="detail-bottom">
			<button type="primary" size="default" class="save-button-addCar" @tap="submit">确认提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//当前选中标题
				currentTitle:'',
				feedContent:'',
				feedNUmber:'',
				//标题数组
				questionList: ['功能异常', '功能建议', '体验问题', '投诉', '其他问题']
			};
		},
		methods:{
			titleChange(newTitle){
				this.currentTitle = newTitle;
			},
			//清空
			clear(){
				this.feedContent = ''
				this.feedNUmber = ''
				this.currentTitle = ''
			},
			//提交
			submit(){
				let _this = this;
				let feedBackParam = {
					content: this.feedContent,
					mobile: this.feedNUmber,
					title: this.currentTitle
				}
				this.$api.request(feedBackParam,'api/feedback/addFeedback','POST').then(res => {
					_this.clear();
					uni.showToast({
						title:'反馈成功',
						icon:'success'
					})
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page {
		height: 100vh;
	}

	.feed-back-title {
		padding-left: 10px;
		height: 50px;
		display: flex;
		align-items: center;

		.feed-back-title-text {
			font-size: 20px;
			color: #000000;
			font-weight: bold;
		}
	}

	.feed-back-desc {
		padding-left: 10px;
		height: 50upx;

		.feed-back-desc-text {
			color: #888888;
			font-size: 14px;
		}
	}

	.feed-back-check-item {
		padding-left: 10px;
	}

	.feed-back-content {
		height: 100px;
		padding-left: 10px;
		padding-right: 10px;

		.feed-back-content-box {
			height: 100px;

			.feed-back-text-area {
				height: 80px;
			}
		}
	}

	.feed-back-phone {
		height: 80px;
		width: 100%;
		padding-right: 10px;
		padding-left: 10px;
		display: flex;
		align-items: center;

		.feed-back-phone-number {
			border-bottom: #ddd 1upx solid;
			width: 100%;
		}
	}


	.feedback-item {
		border-radius: 20px;
		width: 80%;
		height: 50upx;
		font-size: 14px;
		padding: 4upx;
		margin-top: 10px;
	
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
