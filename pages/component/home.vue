<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="backText">返回</block><block slot="content">订单列表</block></cu-custom>
		<view class="top-wrap">
			<tab id="category"
				 :tab-data="categoryMenu"
				 :tab-cur="categoryCur"
				 :size="80"
				 :scroll="true"
				 @change="toggleCategory">
			</tab>
		</view>
		<swiper :current="categoryCur" :duration="duration" @animationfinish="swipeChange">
			<swiper-item v-for="(item,index) in categoryData" :key="index">
				<scroll :requesting="item.requesting"
						:end="item.end"
						:empty-show="item.emptyShow"
						:list-count="item.listCount"
						:has-top="true"
						:refresh-size="80"
						@refresh="refresh"
						@more="more">
						<view class="cells">
							<view class="cell" v-for="(item,index) in item.listData" :key="index">
								<view class="cell__hd">
									<image mode="aspectFill" :src="item.images" />
								</view>
								<view class="cell__bd">
									<view class="name">{{item.title}}</view>
									<view class="des">{{item.description}}</view>
								</view>
							</view>
						</view>
				</scroll>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	let pageStart = 0;
	let pageSize = 10;
	let testData = [
		{
			title: "这个绝望的世界没有存在的价值，所剩的只有痛楚",
			description: "思念、愿望什么的都是一场空，被这种虚幻的东西绊住脚，什么都做不到",
			images: "/static/orderImage.jpg"
		},
		{
			title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现",
			description: "有太多的羁绊只会让自己迷惘，强烈的想法和珍惜的思念，只会让自己变弱",
			images: "/static/orderImage.jpg"
		},
		{
			title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现",
			description: "有太多的羁绊只会让自己迷惘，强烈的想法和珍惜的思念，只会让自己变弱",
			images: "/static/orderImage.jpg"
		},
		{
			title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现",
			description: "有太多的羁绊只会让自己迷惘，强烈的想法和珍惜的思念，只会让自己变弱",
			images: "/static/orderImage.jpg"
		},
		{
			title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现",
			description: "有太多的羁绊只会让自己迷惘，强烈的想法和珍惜的思念，只会让自己变弱",
			images: "/static/orderImage.jpg"
		},
		{
			title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现",
			description: "有太多的羁绊只会让自己迷惘，强烈的想法和珍惜的思念，只会让自己变弱",
			images: "/static/orderImage.jpg"
		},
		{
			title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现",
			description: "有太多的羁绊只会让自己迷惘，强烈的想法和珍惜的思念，只会让自己变弱",
			images: "/static/orderImage.jpgg"
		},
		{
			title: "我早已闭上了双眼，我的目的，只有在黑暗中才能实现",
			description: "有太多的羁绊只会让自己迷惘，强烈的想法和珍惜的思念，只会让自己变弱",
			images: "/static/orderImage.jpg"
		}
	];
	
	import scroll from "../../components/scroll/scroll.vue";
	import tab from "../../components/tab/tab.vue";
	export default {
		data(){
			return {
				duration: 300,  // swiper-item 切换过渡时间
				showPage: -1, // 控制列表空状态的显示时机
				categoryCur: 0,
				start: 0,
				categoryMenu: ["进行中", "已完成", "退款单"],
				categoryData: [
					{
						name: "进行中",
						requesting: false,
						end: false,
						emptyShow: false,
						page: pageStart,
						listCount: 0,
						listData: []
					},
					{
						name: "已完成",
						requesting: false,
						end: false,
						emptyShow: false,
						page: pageStart,
						listCount: 0,
						listData: []
					},
					{
						name: "退款单",
						requesting: false,
						end: false,
						emptyShow: false,
						page: pageStart,
						listCount: 0,
						listData: []
					}
				]
			}
		},
		components: { scroll, tab },
		created(){
			this.getList('refresh', pageStart);
		},
		methods: {
			getList(type, currentPage) {
				let pageData = this.getCurrentData();
				pageData.requesting = true;
				this.setCurrentData(pageData);
				wx.showNavigationBarLoading();
				setTimeout(() => {
					pageData.requesting = false;
					pageData.end = false;

					wx.hideNavigationBarLoading();

					if (type === 'refresh') {
						pageData.listData = testData;
						pageData.page = currentPage + 1;
					} else {
						pageData.listData = pageData.listData.concat(testData);
						pageData.page = currentPage + 1;
					}
					
					if(pageData.page > 3){
						pageData.end = true; //没有更多数据
					}
					
					pageData.listCount = pageData.listData.length;
					this.setCurrentData(pageData);
				}, 1000)

			},
			// 顶部tab切换事件
			toggleCategory(e) {
				this.duration = 0;
				setTimeout(() => {
					this.categoryCur = e.index;
				}, 0);
			},
			// 页面滑动切换事件
			swipeChange(e) {
				this.duration = 300;
				setTimeout(() => {
					this.categoryCur = e.detail.current;
					this.$forceUpdate();
					this.loadData();
				}, 0);
			},
			// 更新页面数据
			setCurrentData(pageData) {
				let categoryData = this.categoryData;
				categoryData[this.categoryCur] = pageData;
				this.categoryData = categoryData;
			},
			// 获取当前激活页面的数据
			getCurrentData() {
				return this.categoryData[this.categoryCur];
			},
			// 判断是否为加载新的页面,如果是去加载数据
			loadData() {
				let pageData = this.getCurrentData();
				if (pageData.listData.length == 0) {
					this.getList('refresh', pageStart);
				}
			},
			// 刷新数据
			refresh() {
				this.getList('refresh', pageStart);
			},
			// 加载更多
			more() {
				this.getList('more', this.getCurrentData().page);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../static/css/variables.scss";
	
	$top-height: 90rpx;
	
	.top-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: #ffffff;
	}
	
	swiper {
		height: 100vh;
	}
	
	.cells {
		background: #ffffff;
		margin-top: 20rpx;
	}
	
	.cell {
		display: flex;
		padding: 20rpx;
	
		&:not(:last-child) {
			border-bottom: 1rpx solid $lineColor;
		}
	
		&__hd {
			font-size: 0;
	
			image {
				width: 160rpx;
				height: 160rpx;
				margin-right: 20rpx;
				border-radius: 12rpx;
			}
		}
	
		&__bd {
			flex: 1;
	
			.name {
				@include line(2);
				font-size: 28rpx;
				margin-bottom: 12rpx;
			}
	
			.des {
				@include line(2);
				color: $mainBlack2;
				font-size: 24rpx;
			}
		}
	}
</style>
