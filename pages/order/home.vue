<template>
	<view class="container999" @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd">
		<!-- 刷新组件需搭配scroll-view使用，并在pages.json中添加 "disableScroll":true-->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">订单列表</block>
		</cu-custom>
		<refresh ref="refresh" @isRefresh='isRefresh'></refresh>
		<view class='nav1'>
			<!-- 导航栏 agents导航栏标题 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
		</view>
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper style="min-height: 100vh;" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
					<view :id="'top'+listIndex" style="width: 100%;height: 110upx;"></view>
					<view class='cu-card'>
						<view class="cu-item bg-white shadow padding" v-for="(item, index) in listItem" v-if="listItem.length > 0" :key="index"
						 style="padding-bottom: 16upx;" @click="naviagetorToPages('/pages/order/orderDetail')">
							<view class="order-item" style="display: flex;align-items: center;">
								<text class="text-cyan cuIcon-time" style="margin-right: 15upx;"></text>
								<text class="text-black">订单号：</text>
								<text class="order-font-color">{{item.orderSn}}</text>
							</view>
							<view class="order-item" style="display: flex;align-items: center;">
								<text class="text-blue cuIcon-taxi" style="margin-right: 15upx;"></text>
								<text class="text-black">下单时间：</text>
								<text class="order-font-color">{{item.formatCreateTime}}</text>
							</view>
							<view class="order-item">
								<text class="text-olive cuIcon-phone" style="margin-right: 15upx;"></text>
								<text class="text-black">实付金额：</text>
								<text class="order-font-color">￥{{item.payAmount}}</text>
							</view>
							<view class="order-item">
								<text class="text-red cuIcon-location" style="margin-right: 15upx;"></text>
								<text class="text-black">订单状态：</text>
								<text class="order-font-color">{{item.formatStatus}}</text>
							</view>
							<view class="order-item">
								<view class="order-item-bottom">
									<view class="cu-tag radius light bg-gradual-blue">去洗车</view>
								</view>
							</view>
						</view>
					</view>
					<view class='noCard' v-if="listItem.length===0">
						暂无信息
					</view>
					<view style="width: 100%;height: 100upx;opacity:0;"></view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- <tabBar4 :currentPage="currentPage"></tabBar4> -->
		<view class="cu-tabbar-height"></view>
	</view>
</template>

<script>
	const util = require('../../util/util.js');
	import refresh from '../../components/refresh.vue';
	import navTab from '../../components/navTab.vue';
	import tabBar4 from '../../components/tabBar4.vue';
	import {formatTime} from '@/util/common'
	export default {
		components: {
			refresh,
			navTab,
			tabBar4
		},
		data() {
			return {
				currentPage: 'index',
				toView: '', //回到顶部id
				tabTitle: ['全部', '未支付', '待接单', '待洗车', '进行中'], //导航栏格式 --导航栏组件
				currentTab: 0, //sweiper所在页
				pages: [1, 1, 1, 1, 1], //第几个swiper的第几页
				list: [
					[],
					[],
					[],
					[],
					[]
				] //数据格式
			};
		},
		onLoad(e) {

		},
		mounted() {
			//初始化数据
			let that = this;
			uni.showLoading({
				title: '加载中...',
				mask: true
			})
			for (let i = 0; i < that.pages.length; i++) {
				let status = that.orderState(i + 1);
				let orderListParam = {
					status: status,
					pageNum: that.pages[i],
					pageSize: 10
				}
				that.$api.request(orderListParam, 'api/order/orderList', 'GET', false).then(res => {
					let orderList = res.data.data.result;
					let newArr = orderList.map((item,index) =>{
						let myProperty = {
							formatCreateTime:formatTime(item.createTime),
							formatStatus:that.orderStatusStr(item.status)
						}
					   return Object.assign(item,myProperty)
					})
					console.log("订单数据：", newArr)
					
					let tempList = that.list
					tempList[i] = newArr
					that.list = tempList
					that.$forceUpdate() //二维数组，开启强制渲染
				})
			}
			setTimeout(() => {
				uni.hideLoading();
			}, 1000)
		},
		onShow() {},
		onHide() {},
		methods: {
			toTop() {
				this.toView = ''
				setTimeout(() => {
					this.toView = 'top' + this.currentTab
				}, 10)
			},
			changeTab(index) {
				this.currentTab = index;
			},
			naviagetorToPages(url) {
				uni.navigateTo({
					url: url
				});
			},
			// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
			isRequest() {
				return new Promise((resolve, reject) => {
					this.pages[this.currentTab]++
					var that = this
					let status = that.orderState(that.currentTab + 1);
					let orderListParam = {
						status: status,
						pageNum: that.pages[that.currentTab],
						pageSize: 10
					}
					that.$api.request(orderListParam, 'api/order/orderList', 'GET').then(res => {
						let orderList = res.data.data.result;
						if (orderList == 0) {
							that.$msg('无更多数据')
						} else {
							let newArr = orderList.map((item,index) =>{
								let myProperty = {
									formatCreateTime:formatTime(item.createTime),
									formatStatus:that.orderStatusStr(item.status)
								}
							   return Object.assign(item,myProperty)
							})
							resolve(newArr)
						}
					})
				})
			},
			orderStatusStr(status){
				switch (status){
					case 0:
						return '待付款';
						break;
					case 1:
						return '待接单';
						break;
					case 2:
						return '进行中';
						break;
					case 3:
						return '未评价';
						break;
					default:
						return '';
						break;
				}
			},
			//订单状态
			orderState(curTab) {
				switch (curTab) {
					case 2:
						return 0; //待付款 
						break;
					case 3:
						return 1; //待接单
						break;
					case 4:
						return 2; //进行中
						break;
					case 5:
						return 3; //未评价
						break;
					default:
						return ""; //全部
						break;
				}
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.longClick(index);
			},
			// 加载更多 util.throttle为防抖函数
			lower1: util.throttle(function(e) {
				console.log(`加载${this.currentTab}`) //currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				this.isRequest().then((res) => {
					let tempList = this.list
					tempList[this.currentTab] = tempList[this.currentTab].concat(res)
					console.log(tempList)
					this.list = tempList
					this.$forceUpdate() //二维数组，开启强制渲染
				})
			}, 300),
			// 刷新touch监听
			refreshStart(e) {
				this.$refs.refresh.refreshStart(e);
			},
			refreshMove(e) {
				this.$refs.refresh.refreshMove(e);
			},
			refreshEnd(e) {
				this.$refs.refresh.refreshEnd(e);
			},
			//刷新
			isRefresh() {
				let that = this;
				let status = that.orderState(that.currentTab + 1);
				let orderListParam = {
					status: status,
					pageNum: that.pages[that.currentTab],
					pageSize: 10
				}
				that.$api.request(orderListParam, 'api/order/orderList', 'GET').then(res => {
					let orderList = res.data.data.result;
					let newArr = orderList.map((item,index) =>{
						let myProperty = {
							formatCreateTime:formatTime(item.createTime),
							formatStatus:that.orderStatusStr(item.status)
						}
					   return Object.assign(item,myProperty)
					})
					
					let tempList = that.list
					tempList[that.currentTab] = newArr
					that.list = tempList
					that.$forceUpdate() //二维数组，开启强制渲染
					setTimeout(() => {
						uni.showToast({
							icon: 'success',
							title: '刷新成功'
						})
						that.$refs.refresh.endAfter() //刷新结束调用
					}, 1000)
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.order-font-color {
		color: #75787d;
	}

	.order-item {
		padding: 8upx 20upx;
		font-size: 32upx;
		color: #303133;
	}

	.order-item-bottom {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container999 {
		width: 100vw;
		font-size: 28upx;
		min-height: 100vh;
		overflow: hidden;
		color: #6B8082;
		position: relative;
		background-color: #f6f6f6;
	}

	.content {
		width: 100%;
	}

	.card {
		width: 90%;
		height: 368upx;
		background-color: white;
		margin: 0 auto 42upx auto;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
		border-radius: 5px;
		position: relative;
	}

	.noCard {
		width: 90%;
		height: 200upx;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		box-shadow: 0 0 10upx 0 rgba(0, 0, 0, 0.10);
		border-radius: 10upx;
	}


	.nav1 {
		position: fixed;
		left: 0;
		/* top: 64px; */
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		background-color: #50B7EA;
		z-index: 1996;
	}

	.searchInput999 {
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56upx;
	}

	.search999 {
		width: 32upx;
		height: 32upx;
	}

	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input999 {
		color: #999;
		width: 80%;
	}
</style>
