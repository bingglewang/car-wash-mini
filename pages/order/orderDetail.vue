<template>
	<view class="page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">订单详情</block>
		</cu-custom>

		<view class="create-order padding">
			<view class="bg-gray padding shadow-blur" style="padding-top: 0;">
				<view class="cu-tag radius light bg-gradual-orange" style="margin-bottom: 20upx;">已评价</view>
				<view class="box-align-start-end">
					<view><text class="text-gray">车主姓名：</text>加分分</view>
					<view><text class="text-gray">车牌号：</text>浙AJF99393</view>
				</view>
				<view class="box-align-start-end">
					<view><text class="text-gray">车型：</text>普通小轿车外洗</view>
					<view><text class="text-gray">订单实付金额(元)：</text>27.95</view>
				</view>
				<view><text class="text-gray">活动抵扣金额(元)：</text>15.05</view>
			</view>
			<view class="bg-white" style="height: 30upx;"></view>
			<view class="bg-gray padding shadow-blur" style="padding-top: 0;">
				<view class="cu-tag radius light bg-gradual-orange" style="margin-bottom: 20upx;">洗车工</view>
				<view class="box-align-start-end">
					<view><text class="text-gray">姓名：</text>加分分</view>
					<view><text class="text-gray">手机号：</text>13227355241<span class="text-blue"><a @click="callPhone('1322')">(拨打电话)</a></span></view>
				</view>
			</view>
			<image class="a-bg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"></image>
		</view>
		<view class="cu-timeline">
			<view class="cu-item" :class="timeLineActive1">
				<view class="my-step-title">成功下单</view>
				<view class="content">
					<view><text>洗车地点：</text>回复第十六家乐福肯定是家里舒服的家乐福的是积分</view>
					<view>备注：放大镜来看附近的路口是</view>
					<view>联系方式：14341232131</view>
				</view>
			</view>
			<view class="cu-item" :class="timeLineActive2">
				<view class="my-step-title">到达预约地点</view>
				<view class="content"><text>到达时间:2019-12-01 12:08:47</text></view>
			</view>
			<view class="cu-item" :class="timeLineActive3">
				<view class="my-step-title">开始洗车</view>
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-gradual-blue">洗车前请上传五张照片</view>
					</view>
					<view class="cu-bar bg-white margin-top">
						<view class="action">图片上传</view>
						<view class="action">{{ imgList.length }}/5</view>
					</view>
					<view class="cu-form-group">
						<view class="grid col-4 grid-square flex-sub">
							<view class="bg-img" v-for="(item, index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
								<image :src="imgList[index]" mode="aspectFill"></image>
								<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index"><text class="cuIcon-close"></text></view>
							</view>
							<view class="solids" @tap="ChooseImage" v-if="imgList.length < 5"><text class="cuIcon-cameraadd"></text></view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item" :class="timeLineActive4">
				<view class="my-step-title">结束洗车</view>
				<view class="content">
					<view class="cu-capsule radius">
						<view class="cu-tag bg-gradual-blue">洗车后请上传五张照片</view>
					</view>
					<view class="cu-bar bg-white margin-top">
						<view class="action">(车头,车尾,左侧,右侧,人车合照)</view>
						<view class="action">{{ imgListFinish.length }}/5</view>
					</view>
					<view class="cu-form-group">
						<view class="grid col-4 grid-square flex-sub">
							<view class="bg-img" v-for="(item, index) in imgListFinish" :key="index" @tap="ViewImageFinish" :data-url="imgListFinish[index]">
								<image :src="imgListFinish[index]" mode="aspectFill"></image>
								<view class="cu-tag bg-red" @tap.stop="DelImgFinish" :data-index="index"><text class="cuIcon-close"></text></view>
							</view>
							<view class="solids" @tap="ChooseImageFinish" v-if="imgListFinish.length < 5"><text class="cuIcon-cameraadd"></text></view>
						</view>
					</view>
				</view>
			</view>

			<view class="cu-item" :class="timeLineActive5">
				<view class="my-step-title">评价</view>
				<view class="content">
					<view class="cu-capsule radius pingjia-box">
						<my-issue :headPicShow="false" headTitleValue="评价得分" :textareaShow="false" submitText="" @scoreChange="chageScore"
						 :submitShow="false" />
					</view>
					<view class="cu-bar bg-white pingjia-area-box">
						<view class="pingjia-area"><textarea placeholder="请填写你对我的评价" @input="textareaAInput" style="height: 80px;width: 100%;"></textarea></view>
					</view>
				</view>
			</view>
		</view>
		<view class="order-button-box"><button type="primary" size="default" class="save-button-addCar" @tap="toBind">结束洗车</button></view>
	</view>
</template>

<script>
	import myIssue from '@/components/myIssue.vue';
	export default {
		components: {
			myIssue
		},
		data() {
			return {
				textareaAValue: '',
				imgList: [],
				imgListFinish: [],
				timeLineActive1: 'item-active text-orange',
				timeLineActive2: 'item-active text-orange',
				timeLineActive3: 'item-active text-orange',
				timeLineActive4: 'item-active text-orange',
				timeLineActive5: 'item-active text-orange order-step-last'
			};
		},
		methods: {
			callPhone(phoneNumber) {
				uni.makePhoneCall({
					phoneNumber: phoneNumber
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value;
				console.log('评价语：' + e.detail.value);
			},
			chageScore(score) {
				console.log('评价分数：' + score);
			},
			ChooseImage() {
				uni.chooseImage({
					count: 5, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera ', 'album'], //从相册选择
					success: res => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths);
						} else {
							this.imgList = res.tempFilePaths;
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1);
						}
					}
				});
			},
			ChooseImageFinish() {
				uni.chooseImage({
					count: 5, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera ', 'album'], //从相册选择
					success: res => {
						if (this.imgListFinish.length != 0) {
							this.imgListFinish = this.imgListFinish.concat(res.tempFilePaths);
						} else {
							this.imgListFinish = res.tempFilePaths;
						}
					}
				});
			},
			ViewImageFinish(e) {
				uni.previewImage({
					urls: this.imgListFinish,
					current: e.currentTarget.dataset.url
				});
			},
			DelImgFinish(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgListFinish.splice(e.currentTarget.dataset.index, 1);
						}
					}
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.page {
		overflow: auto;
		background-color: #ffffff;
	}

	.box-align-start-end {
		display: flex;
		justify-content: space-between;
	}

	.pingjia-box {
		width: 100%;
		background-color: white;
	}

	.pingjia-area-box {
		width: 100%;
		padding-left: 30upx;
		padding-right: 30upx;
		padding-bottom: 30upx;
	}

	.pingjia-area {
		border: #f37b1d solid 1upx;
		box-sizing: border-box;
		padding-right: 30upx;
		width: 100%;
		padding: 10upx 10upx;
	}

	.order-button-box {
		display: flex;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 10px;
		position: relative;

		.save-button-addCar {
			border-radius: 100px;
			width: 80%;
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		}
	}

	.my-step-title {
		padding-bottom: 10px;
		padding-top: 6px;
	}

	.create-order {
		background: #fff;
		position: relative;

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.cu-timeline>.cu-item.item-active::after {
		background-color: #f37b1d !important;
	}

	.cu-timeline>.cu-item.order-step-last::after {
		height: 80% !important;
	}

	.cu-timeline>.cu-item::after {
		top: 20px !important;
	}

	.cu-timeline>.cu-item:not([class*='cuIcon-'])::before {
		content: '\e671' !important;
	}
</style>
