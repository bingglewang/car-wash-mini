<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">加盟合作</block>
		</cu-custom>
		<view style="height: 120px;padding: 10px;">
			<view class="bg-white" style="height: 100px;">
				
			</view>
		</view>
		<view class="header">
			<view class="left-three" :style="{'border-bottom-color': leftColor }" @click="switchColor('left')">
				<text class="left-text">个人加盟</text>
			</view>
			<view class="right-three" :style="{'border-top-color': rightColor }" @click="switchColor('right')">
				<text class="right-text">企业加盟</text>
			</view>
		</view>
		<view style="padding-left: 10px;padding-right: 10px;">
			<view class="cu-form-group">
				<view class="title">加盟区域</view>
				<input placeholder="请输入您要加盟的区域" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">姓<text style="visibility: hidden;">盒子</text>名</view>
				<input placeholder="请输入您的姓名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">联系电话</view>
				<input placeholder="请输入您的联系电话" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">备<text style="visibility: hidden;">盒子</text>注</view>
				<input placeholder="请输入您的备注信息" name="input"></input>
			</view>
			<view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				leftColor: '#888888',
				rightColor: '#ffffff'
			}
		},
		methods: {
			switchColor(direction) {
				if (direction == 'right') {
					this.leftColor = '#ffffff'
					this.rightColor = '#888888'
				}
				if (direction == 'left') {
					this.leftColor = '#888888'
					this.rightColor = '#ffffff'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		height: 50px;
		width: 100%;
		padding-left: 10px;

		.right-three {
			position: relative;
			right: 10px;
			display: inline-block;
			width: 50%;
			border-width: 50px 0 0 10px;
			border-style: solid;
			border-color: blue transparent transparent transparent;

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
			border-width: 0 10px 50px 0;
			border-style: solid;
			border-color: transparent transparent red transparent;

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
