<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">加盟合作</block>
		</cu-custom>
		<view class="feed-back-head">
			<view class="bg-white feed-back-head-box">
				<image src="/static/location-blue.png" class="feed-back-img" mode="aspectFit" @click="lookLocation"></image>
				<view class="feed-back-head-title" @click="lookLocation">
					<view class="feed-back-head-text1">{{companyName}}</view>
					<view class="feed-back-head-text2">{{companyAddress}}</view>
				</view>
				<view class="feed-back-head-line">
				</view>
				<view class="feed-back-head-right" @click="callUs">
					<view>
						<image src="../../static/user/kefu.png" class="feed-back-img" mode="aspectFit"></image>
					</view>
					<view>
						<text>联系我们</text>
					</view>
				</view>
			</view>
		</view>
		<view class="header11">
			<view class="left-three" :style="{'border-color': leftColor,'border-width':leftborderWidth }" @click="switchColor('left')">
				<text class="left-text" :style="{color:leftTextColor,bottom:leftTextTop}">个人加盟</text>
			</view>
			<view class="right-three" :style="{'border-color': rightColor,'border-width':rightborderWidth }" @click="switchColor('right')">
				<text class="right-text" :style="{color:rightTextColor,top:rightTextTop}">企业加盟</text>
			</view>
		</view>
		<view class="feed-back-form">
			<view class="cu-form-group">
				<view class="title">加盟区域<span style="color: red;">*</span></view>
				<input placeholder="请输入您要加盟的区域" name="input" v-model="cooperArea"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">姓<text style="visibility: hidden;">盒子</text>名<span style="color: red;">*</span></view>
				<input placeholder="请输入您的姓名" name="input" v-model="cooperName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">联系电话<span style="color: red;">*</span></view>
				<input placeholder="请输入您的联系电话" name="input" v-model="cooperNumber"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">备<text style="visibility: hidden;">盒子</text>注</view>
				<input placeholder="请输入您的备注信息" name="input" v-model="remark"></input>
			</view>
		</view>
		<view class="feed-back-bottom">
			<view class="bg-white feed-back-bottom-box">
				<button type="primary" size="default" class="save-button-addCar" @click="submit">确认提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				companyName: '将发动机防盗的风景撒旦飞洒算法撒旦幅度萨芬范德萨',
				companyAddress: '飓风等级分级大家撒旦飞洒地方啊幅度萨芬范德萨',
				feedTyp: 0,
				leftColor: 'transparent transparent #ffffff transparent',
				leftborderWidth: '0 10px 50px 0',
				leftTextTop: '-25px',
				rightColor: '#e7e7e7 transparent transparent transparent',
				rightborderWidth: '50px 0 0 10px',
				rightTextTop: '-25px',
				leftTextColor: 'red',
				rightTextColor: 'black',
				//加盟类型
				type: 1,
				//加盟区域
				cooperArea: '',
				//姓名
				cooperName: '',
				//联系电话
				cooperNumber: '',
				//备注
				remark: ''

			}
		},
		methods: {
			switchColor(direction) {
				if (direction == 'right') {
					this.leftColor = '#e7e7e7 transparent transparent transparent'
					this.leftborderWidth = '50px 10px 0 0'
					this.leftTextTop = '25px'
					this.rightColor = 'transparent transparent #ffffff transparent'
					this.rightborderWidth = '0 0 50px 10px'
					this.rightTextTop = '25px'
					this.leftTextColor = 'black'
					this.rightTextColor = 'red'
					this.feedTyp = 1
					this.type = 2
				}
				if (direction == 'left') {
					this.leftColor = 'transparent transparent #ffffff transparent'
					this.leftborderWidth = '0 10px 50px 0'
					this.leftTextTop = '-25px'
					this.rightColor = '#e7e7e7 transparent transparent transparent'
					this.rightborderWidth = '50px 0 0 10px'
					this.rightTextTop = '-25px'
					this.leftTextColor = 'red'
					this.rightTextColor = 'black'
					this.feedTyp = 0
					this.type = 1
				}
			},
			callUs() {
				uni.makePhoneCall({
					phoneNumber: '13227355241'
				})
			},
			lookLocation() {
				let that = this;
				uni.getLocation({
					type: 'gcj02', //返回可以用于uni.openLocation的经纬度
					success: function(res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.openLocation({
							latitude: latitude,
							longitude: longitude,
							name: that.companyAddress,
							address: that.companyAddress,
							success: function() {
								console.log('success');
							}
						});
					}
				});
			},
			//清空表单
			clear(){
				this.cooperArea = '';
				this.cooperName = '';
				this.cooperNumber = '';
				this.remark = '';
			},
			//提交
			submit() {
				let _this = this;
				let cooperParam = {
					type : this.type,
					franchiseArea : this.cooperArea,
					name : this.cooperName,
					mobile : this.cooperNumber,
					remarks : this.remark
				}
				this.$api.request(cooperParam,'api/joined/addJoined','POST').then(res => {
					_this.clear();
					uni.showToast({
						title:'加盟成功',
						icon:'success'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.feed-back-head {
		height: 120px;
		padding: 10px;

		.feed-back-head-box {
			height: 100px;
			display: flex;
			align-items: center;

			.feed-back-img {
				width: 30px;
				height: 30px;
				margin-left: 20upx;
			}

			.feed-back-head-title {
				display: inline-block;
				margin-left: 10px;
				margin-right: 10px;
				width: 55%;

				.feed-back-head-text1 {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 20px;
					color: #000000;
					font-weight: bold;
					margin-bottom: 10upx;
				}

				.feed-back-head-text2 {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 15px;
					color: #888888;
				}
			}

			.feed-back-head-line {
				display: inline-block;
				border-right: #ddd 1px solid;
				width: 0;
				height: 30%;
			}

			.feed-back-head-right {
				margin-left: auto;
				margin-right: 20px;
			}
		}
	}

	.feed-back-form {
		padding-left: 10px;
		padding-right: 10px;
	}

	.feed-back-bottom {
		padding-left: 10px;
		padding-right: 10px;
		border-top: 1rpx solid #eee;

		.feed-back-bottom-box {
			height: 100px;
			display: flex;
			align-items: center;
			justify-content: center;

			.save-button-addCar {
				border-radius: 100px;
				width: 80%;
				background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
			}
		}
	}

	.header11 {
		height: 50px;
		width: 100%;
		padding-left: 10px;

		.right-three {
			position: relative;
			right: 10px;
			display: inline-block;
			width: 50%;
			border-style: solid;

			.right-text {
				left: 50%;
				transform: translateX(-50%);
				position: absolute;
				top: -25px;
				line-height: 0rpx;
			}
		}

		.left-three {
			padding-right: 10px;
			position: relative;
			width: 50%;
			display: inline-block;
			border-style: solid;

			.left-text {
				left: 50%;
				transform: translateX(-50%);
				position: absolute;
				bottom: -25px;
				line-height: 0rpx;
			}
		}
	}
</style>
