<template>
	<scroll-view scroll-x
				scroll-with-animation
				:scroll-left="scrollLeft">
		<view :class="['tabs', scroll ? 'tabs--scroll' : '']" :style="{height: size + 'rpx'}">
			<view 
					v-for="(item,index) in tabData"
					:key="index"
					:class="['tabs__item', index === curLoc ? 'tabs__item--cur': '']"
				  :style="{height: size+ 'rpx', 'line-height': size + 'rpx'}"
				  @click="toggleTab(index)">
				<view :id="'item' + index" class="tabs__item-child">{{item}}</view>
			</view>
			<view :class="['tabs__line', needTransition ? 'transition' : '']" 
			:style="{background: color,width: lineWidth + 'px', transform: 'translateX('+ translateX +'px)'}"></view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			// 当前位置
			tabCur: {
				type: Number,
				value: -1
			},
			// 是否可以超出滚动
			scroll: {
				type: Boolean,
				default(){
					return true;
				}
			},
			// 数据源
			tabData: {
				type: Array,
				value: []
			},
			// tab高度
			size: {
				type: Number,
				default(){
					return 90;
				}
			},
			// 颜色
			color: {
				type: String,
				default(){
					return "#3F82FD"
				}
			}
		},
		data() {
			return {
				windowWidth: 375,
				needTransition: false, // 下划线是否需要过渡动画
				translateX: 0, // 下划 line 的左边距离
				oldTranslateX: 0, // 下划 line 的左边距离
				lineWidth: 100, // 下划 line 宽度
				scrollLeft: 0, // scroll-view 左边滚动距离
				curLoc: -1
			};
		},
		watch: {
			tabCur(n, o){
				this.tacCurChange(n, o);
			},
			size(n, o){
				this.sizeChange(n, o);
			}
		},
		mounted(){
			this.curLoc = this.tabCur;
			this.initTab();
		},
		methods: {
			/**
			 * 切换菜单
			 */
			toggleTab(index) {
				this.$emit('change', {index: index});
				this.scrollByIndex(index);
			},
			/**
			 * 滑动到指定位置
			 * @param tabCur: 当前激活的tabItem的索引
			 * @param needTransition: 下划线是否需要过渡动画, 第一次进来应设置为false
			 */
			scrollByIndex(tabCur, needTransition = true) {
				this.needTransition = needTransition;

				let item = this.items[tabCur];

				if(!item) return;
				
				// 子item宽度
				let chItemWidth = item.width;

				// 父item左边距离
				let offsetLeft = item.left;
				
				if (this.scroll) { // 超出滚动的情况
					// 保持滚动后当前item'尽可能'在屏幕中间
					let scrollLeft = offsetLeft - (this.windowWidth - item.width) / 2;
					this.scrollLeft = scrollLeft;
				}
				
				setTimeout(() => {
					this.curLoc = tabCur;
					this.translateX = offsetLeft;
					this.oldTranslateX = offsetLeft;
					this.lineWidth = chItemWidth;
				}, 0);
			},
			/**
			 *  监听tab高度变化, 最小值为80rpx
			 */
			sizeChange(newVal, oldVal) {
				if (newVal <= 80) {
					this.size = 80;
				}
			},
			/**
			 *  监听tabCur变化, 做对应处理
			 */
			tacCurChange(newVal, oldVal) {
				this.curLoc = newVal;
				this.scrollByIndex(newVal);
			},
			/**
			 *  初始化函数
			 */
			initTab() {
				const {windowWidth} = wx.getSystemInfoSync();

				// 设置屏幕宽度
				this.windowWidth = windowWidth || 375;

				// 动态item的padding大小
				this.itemPadding = this.windowWidth / 375 * 15;

				// 获取每一个tab的宽高信息并存储起来
				let query = this.createSelectorQuery();
				for (let i = 0; i < this.tabData.length; i++) {
					query.select(`#item${i}`).boundingClientRect()
				}

				query.exec(function (res) {
					this.items = res;
					this.scrollByIndex(this.tabCur, false)
				}.bind(this));
			}
		}
	}
</script>

<style lang="scss">
@import "../../static/css/variables.scss";

$refresh-height: 90rpx;
$success-height: 60rpx;
$success-top: $refresh-height - $success-height;
$refresh-padding: ($refresh-height - 50rpx) / 2;


$top-height: 90rpx;

scroll-view {
	width: 100%;
}

.tabs {
	position: relative;
	height: $top-height;
	color: $mainBlack3;
	display: flex;

	&--scroll {
		white-space: nowrap !important;
		display: block !important;
	}

	&--scroll &__item {
		flex: initial !important;
		text-align: initial !important;
		display: inline-block !important;
	}

	&--scroll &__item-child {
		display: block !important;
	}

	&__item {
		flex: 1;
		text-align: center;
		height: $top-height;
		line-height: $top-height;
		padding: 0 30rpx;
		box-sizing: border-box;
		transition: color 0.3s ease-in-out;

		&--cur {
			color: $mainBlack1;
		}
	}

	&__item-child {
		display: inline-block;
	}

	&__line {
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: $mainColor;
		height: 4rpx;
		width: 0rpx;
		display: inline-block;
		&.transition {
			transition: width 0.3s, transform 0.3s;
		}
	}
}
</style>
