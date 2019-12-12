<template>
	<view class="page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的优惠券</block>
		</cu-custom>
		<view style="position: fixed;top: 0;width: 100%;">
			<view style="visibility: hidden;" :style="{height:CustomBar+'px'}">占位盒子</view>
			<view class="tabr">
				<view style="display: flex;">
					<view :class="{on:typeClass=='valid'}" @tap="switchType('valid')" class="tabr-item">可用({{couponValidList.length}})</view>
					<view :class="{on:typeClass=='novalid'}" @tap="switchType('novalid')" class="tabr-item">不可用</view>
					<view :class="{on:typeClass=='invalid'}" @tap="switchType('invalid')" class="tabr-item">已失效</view>
				</view>
				<view class="border" :class="typeClass"></view>
			</view>
		</view>
		<view style="height: 95upx;visibility: hidden;"></view>
		<view class="coupon-content">
			<view class="list">
				<!-- 优惠券列表 -->
				<view class="sub-list valid" v-if="subState == 'showvalid'">
					<view class="tis" v-if="couponValidList.length==0">没有数据~</view>
					<view class="row" v-for="(row,index) in couponValidList" :key="index">
						<!-- 删除按钮 -->
						<view class="menu" @tap.stop="deleteCoupon(row.id,couponValidList)">
							<text class="lg text-white cuIcon-delete"></text>
						</view>
						<!-- content -->
						<view class="carrier" :class="[typeClass=='valid'?theIndex==index?'open':oldIndex==index?'close':'':'']"
						 @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
							<view class="left">
								<view class="title">
									{{row.title}}
								</view>
								<view class="term">
									{{row.termStart}} ~ {{row.termEnd}}
								</view>
								<view class="gap-top"></view>
								<view class="gap-bottom"></view>
							</view>
							<view class="right">
								<view class="ticket">
									<view class="num">
										{{row.ticket}}
									</view>
									<view class="unit">
										元
									</view>
								</view>
								<view class="criteria">
									{{row.criteria}}
								</view>
								<view class="use">
									去使用
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="sub-list invalid" v-if="subState == 'showinvalid'">
					<view class="tis" v-if="couponinvalidList.length==0">没有数据~</view>
					<view class="row" v-for="(row,index) in couponinvalidList" :key="index">
						<!-- 删除按钮 -->
						<view class="menu" @tap.stop="deleteCoupon(row.id,couponinvalidList)">
							<text class="lg text-white cuIcon-delete"></text>
						</view>
						<!-- content -->
						<view class="carrier" :class="[typeClass=='invalid'?theIndex==index?'open':oldIndex==index?'close':'':'']"
						 @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
							<view class="left">
								<view class="title">
									{{row.title}}
								</view>
								<view class="term">
									{{row.termStart}} ~ {{row.termEnd}}
								</view>
								<view class="icon shixiao">

								</view>
								<view class="gap-top"></view>
								<view class="gap-bottom"></view>
							</view>
							<view class="right invalid">
								<view class="ticket">
									<view class="num">
										{{row.ticket}}
									</view>
									<view class="unit">
										元
									</view>
								</view>
								<view class="criteria">
									{{row.criteria}}
								</view>
								<view class="use">
									去查看
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="sub-list novalid" v-if="subState == 'shownovalid'">
					<view class="tis" v-if="couponnovalidList.length==0">没有数据~</view>
					<view class="row" v-for="(row,index) in couponnovalidList" :key="index">
						<!-- 删除按钮 -->
						<view class="menu" @tap.stop="deleteCoupon(row.id,couponnovalidList)">
							<text class="lg text-white cuIcon-delete"></text>
						</view>
						<!-- content -->
						<view class="carrier" :class="[typeClass=='novalid'?theIndex==index?'open':oldIndex==index?'close':'':'']"
						 @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
							<view class="left">
								<view class="title">
									{{row.title}}
								</view>
								<view class="term">
									{{row.termStart}} ~ {{row.termEnd}}
								</view>
								<view class="icon shixiao">

								</view>
								<view class="gap-top"></view>
								<view class="gap-bottom"></view>
							</view>
							<view class="right novalid">
								<view class="ticket">
									<view class="num">
										{{row.ticket}}
									</view>
									<view class="unit">
										元
									</view>
								</view>
								<view class="criteria">
									{{row.criteria}}
								</view>
								<view class="use">
									去查看
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				couponValidList: [{
						id: 1,
						title: "日常用品立减10元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "10",
						criteria: "满50使用"
					},
					{
						id: 2,
						title: "家用电器立减100元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "100",
						criteria: "满500使用"
					},
					{
						id: 3,
						title: "全场立减10元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "10",
						criteria: "无门槛"
					},
					{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					},
					{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					},
					{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					},
					{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					}
					,{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					}
					,{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					},{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					}

					

				],
				couponinvalidList: [{
						id: 1,
						title: "日常用品立减10元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "10",
						criteria: "满50使用"
					},
					{
						id: 2,
						title: "家用电器立减100元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "100",
						criteria: "满500使用"
					},
					{
						id: 3,
						title: "全场立减10元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "10",
						criteria: "无门槛"
					},
					{
						id: 4,
						title: "全场立减50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					}
				],
				couponnovalidList: [{
						id: 1,
						title: "士大夫士大夫",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "10",
						criteria: "满50使用"
					},
					{
						id: 2,
						title: "士大夫士大夫100元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "100",
						criteria: "满500使用"
					},
					{
						id: 3,
						title: "士大夫士大夫10元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "10",
						criteria: "无门槛"
					},
					{
						id: 4,
						title: "士大夫士大夫50元",
						termStart: "2019-04-01",
						termEnd: "2019-05-30",
						ticket: "50",
						criteria: "满1000使用"
					}
				],
				//控制滑动效果
				typeClass: 'valid',
				subState: 'showvalid',
				theIndex: null,
				oldIndex: null,
				isStop: false
			}
		},
		onPageScroll(e) {

		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad() {
			//兼容H5下排序栏位置
			// #ifdef H5
			//定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
			let Timer = setInterval(() => {
				let uniHead = document.getElementsByTagName('uni-page-head');
				if (uniHead.length > 0) {
					this.headerTop = uniHead[0].offsetHeight + 'px';
					clearInterval(Timer); //清除定时器
				}
			}, 1);
			// #endif
		},
		mounted(){
			console.log("状态高度："+this.StatusBar);
			console.log("菜单栏高度："+this.CustomBar);
		},
		methods: {
			switchType(type) {
				if (this.typeClass == type) {
					return;
				}
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				})
				console.log('类型'+type);
				this.typeClass = type;
				this.subState = this.typeClass == '' ? '' : 'show' + type;
				this.oldIndex = null;
				this.theIndex = null;
			},
			//控制左滑删除效果-begin
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},

			touchEnd(index, $event) {
				//解除禁止触发状态
				this.isStop = false;
			},

			//删除商品
			deleteCoupon(id, List) {
				let len = List.length;
				for (let i = 0; i < len; i++) {
					if (id == List[i].id) {
						List.splice(i, 1);
						break;
					}
				}
				this.oldIndex = null;
				this.theIndex = null;
			},

			discard() {
				//丢弃
			}


		}
	}
</script>
<style lang="scss" scoped>
	.coupon-content {
		overflow-y: auto;
		height: calc(100% - 100upx);
		padding-bottom: 50upx;
		view {
			display: flex;
			flex-wrap: wrap;
		}
	}


	.page {
		position: relative;
		background-color: #f5f5f5;
		overflow-y: hidden;
	}

	.hidden {
		display: none !important;
	}

	.place {
		width: 100%;
		height: 95upx;
	}

	.tabr {
		background-color: #fff;
		width: 100%;
		height: 95upx;
		padding: 0 3%;
		border-bottom: solid 1upx #dedede;
		.tabr-item {
			display: flex;
			width: 33%;
			height: 90upx;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			color: #999;
		}

		.on {
			color: #0081FF;
		}

		.border {
			height: 4upx;
			width: 33%;
			background-color: #0081FF;
			transition: all .3s ease-out;

			&.invalid {
				transform: translate3d(200%, 0, 0);
			}
			
			&.novalid {
				transform: translate3d(100%, 0, 0);
			}
		}

	}

	.list {
		width: 100%;
		display: block;
		position: relative;
	}

	.sub-list {
		width: 100%;
		padding: 20upx 0 120upx 0;

		.tis {
			width: 100%;
			height: 60upx;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}

		.row {
			width: 92%;
			height: 24vw;
			margin: 20upx auto 10upx auto;
			border-radius: 8upx;
			// box-shadow: 0upx 0 10upx rgba(0,0,0,0.1);
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border: 0;

			.menu {
				.icon {
					color: #fff;
					font-size: 50upx;
				}

				position: absolute;
				width: 28%;
				height: 100%;
				right: 0;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}

			.carrier {
				@keyframes showMenu {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-28%);
					}
				}

				@keyframes closeMenu {
					0% {
						transform: translateX(-28%);
					}

					100% {
						transform: translateX(0);
					}
				}

				&.open {
					animation: showMenu 0.25s linear both;
				}

				&.close {
					animation: closeMenu 0.15s linear both;
				}

				background-color: #fff;
				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				flex-wrap: nowrap;

				.left {
					width: 100%;

					.title {
						padding-top: 3vw;
						width: 90%;
						margin: 0 5%;
						font-size: 36upx;
					}

					.term {
						width: 90%;
						margin: 0 5%;
						font-size: 26upx;
						color: #999;
					}

					position: relative;

					.gap-top,
					.gap-bottom {
						position: absolute;
						width: 20upx;
						height: 20upx;
						right: -10upx;
						border-radius: 100%;
						background-color: #f5f5f5;
					}

					.gap-top {
						top: -10upx;
					}

					.gap-bottom {
						bottom: -10upx;
					}

					.shixiao {
						position: absolute;
						right: 20upx;
						font-size: 150upx;
						z-index: 6;
						color: rgba(153, 153, 153, 0.2)
					}
				}

				.right {
					flex-shrink: 0;
					width: 28%;
					color: #fff;
					background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
					
					&.invalid {
						background: linear-gradient(to right, #aaa, #999);

						.use {
							color: #aaa;
						}
					}

					&.novalid {
						background: linear-gradient(to right, #aaa, #999);

						.use {
							color: #aaa;
						}
					}


					justify-content: center;

					.ticket,
					.criteria {
						width: 100%;
					}

					.ticket {
						padding-top: 1vw;
						justify-content: center;
						align-items: baseline;
						height: 6vw;

						.num {
							font-size: 42upx;
							font-weight: 600;
						}

						.unit {
							font-size: 24upx;
						}
					}

					.criteria {
						justify-content: center;

						font-size: 28upx;
					}

					.use {
						width: 50%;
						height: 40upx;
						justify-content: center;
						align-items: center;
						font-size: 24upx;
						background-color: #fff;
						color: #0081FF;
						border-radius: 40upx;
						padding: 0 10upx;
					}
				}
			}

		}
	}
</style>
