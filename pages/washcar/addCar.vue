<template>
	<view class="bg-white page">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">添加车辆</block>
		</cu-custom>

		<view class="">
			<swiper class="card-swiper" :class="dotStyle ? 'square-dot' : 'round-dot'" :indicator-dots="true" :circular="true"
			 :current="cardCur" :autoplay="false" @change="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
				<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur==index ? 'cur' : ''">
					<view class="swiper-item" style="position: relative;">
						<image :src="item.url" mode="aspectFill"></image>
						<view class="car-item-contet">
							<text>{{ item.title }}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="bg-gray padding-sm"></view>
		<view class="add-car-detail bg-white">
			<view class="detail-item-tile"><text class="detail-item-title-font">姓名</text></view>
			<view class="detail-item-content"><input class="detail-item-input bg-gray" placeholder="请输入姓名" v-model="userName" /></view>
			<view class="detail-item-tile"><text class="detail-item-title-font">联系手机</text></view>
			<view class="detail-item-content"><input class="detail-item-input bg-gray" placeholder="请输入手机号" v-model="phoneNumber" /></view>
			<view class="detail-item-tile">
				<text class="detail-item-title-font">车牌号码</text>
				<view style="display: flex;align-items: center;margin-left: auto;margin-right: 20px;" @click="doScanCarNum">
					<image src="/static/scan.png" style="width: 20px;height: 20px;margin-right: 5upx;" mode="aspectFit"></image>
					<text>拍照识别车牌号</text>
				</view>
			</view>
			<view class="detail-item-content">
				<view class="carinput-input">
					<view class="carinput-input-i" :class="{'input-active':carIndex == i}" @tap="inputKey" :data-index="i" v-for="(v,i) in carInput"
					 :key="i" v-show="i < 7">
						{{carInput[i].val}}
					</view>
					<view class="carinput-input-i" :class="{'input-active':carIndex == 7}" @tap="inputKey" data-index="7">
						{{carInput[7].val?carInput[7].val:'+'}}
					</view>
				</view>
				<view class="carinput-power">
					<checkbox-group class="checkbox-g" @change="powerChange">
						<label class="checkbox">
							<checkbox value="true" :checked="isPower" />
							新能源
						</label>
					</checkbox-group>
				</view>
			</view>
		</view>
		<view class="detail-bottom">
			<button type="primary" size="default" class="save-button-addCar" @tap="toBind">{{addType == 3 ?'保存':'确认添加'}}</button>
		</view>
		<tki-float-keyboard ref="keybd" :mode="'car'" :type="keyType" :title="'车牌键盘'" @del="keyCbDel" @val="keyCbVal" @hide="keyCbHide"></tki-float-keyboard>
	</view>
</template>

<script>
	import tkiFloatKeyboard from "@/components/tki-float-keyboard/tki-float-keyboard.vue";
	export default {
		components: {
			tkiFloatKeyboard
		},
		data() {
			return {
				addType: 1,
				userName: '',
				phoneNumber: '',
				carIndex: -1,
				carInput: [{
						type: 2,
						val: ""
					},
					{
						type: 4,
						val: ""
					},
					{
						type: 1,
						val: ""
					},
					{
						type: 1,
						val: ""
					},
					{
						type: 1,
						val: ""
					},
					{
						type: 1,
						val: ""
					},
					{
						type: 3,
						val: ""
					},
					{
						type: 1,
						val: ""
					}
				],
				keyType: 0,
				isPower: false, // 新能源
				cardCur: 0,
				dotStyle: false,
				swiperList: [],
				carId: 0 //车辆id
			};
		},
		methods: {
			doScanCarNum() {
				uni.chooseImage({
					count: 1, //默认9
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			},
			// 判定是否为空
			empty(v) {
				let tp = typeof v,
					rt = false;
				if (tp == "number" && String(v) == "") {
					rt = true
				} else if (tp == "undefined") {
					rt = true
				} else if (tp == "object") {
					if (JSON.stringify(v) == "{}" || JSON.stringify(v) == "[]" || v == null) rt = true
				} else if (tp == "string") {
					if (v == "" || v == "undefined" || v == "null" || v == "{}" || v == "[]") rt = true
				} else if (tp == "function") {
					rt = false
				}
				return rt
			},
			inputKey(e) {
				let that = this;
				let data = e.currentTarget.dataset;
				if (data.index >= 7) {
					if (!that.isPower) {
						return false;
					} else {
						that.carIndex = 7;
					}
				} else {
					that.carIndex = data.index;
				}
				that.upKeyType();
				that.keyShow();
			},
			keyCbVal(e) {
				let that = this;
				let index = Number(that.carIndex);
				if (index >= 0 && index < 6) {
					that.carInput[index].val = e;
					that.carIndex = index + 1;
				} else if (index == 6) {
					that.carInput[index].val = e;
					if (that.isPower) {
						// 新能源
						that.carIndex = 7;
					} else {
						// 不是新能源出输入结束
						that.keyHide();
						that.carIndex = -2;
						console.log('非新能源车输入完毕')
					}
				} else if (index == 7) {
					// 新能源车输入完毕
					that.carInput[index].val = e;
					that.keyHide();
					that.carIndex = -3;
					console.log('新能源车输入完毕')
				}
				that.upKeyType();
			},
			keyCbDel(e) {
				let index = this.carIndex;
				if (index > 0) {
					if (!this.empty(this.carInput[index].val)) {
						this.carInput[index].val = "";
						this.carIndex = index;
					} else {
						this.carInput[index - 1].val = "";
						this.carIndex = index - 1;
					}
				}
				this.upKeyType();
			},
			upKeyType() {
				if (!this.empty(this.carInput[this.carIndex])) {
					this.keyType = this.carInput[this.carIndex].type;
				}
			},
			keyShow() {
				this.$refs.keybd._keyShow();
			},
			keyHide() {
				this.$refs.keybd._keyHide();
			},
			keyCbHide() {
				if (this.carIndex != -3 || this.carIndex != -2) {
					this.carIndex = -1;
				}
			},
			powerChange(e) {
				let that = this
				let i = that.checkCar().i
				if (e.detail.value.length > 0) {
					that.isPower = true;
					if (i == -1) {
						that.carIndex = 7;
					} else {
						that.carIndex = i;
					}
					that.keyShow();
				} else {
					that.isPower = false;
					that.carInput[7].val = "";
					if (that.carIndex == 7) {
						that.keyHide();
						that.carIndex = -2;
					}
				}
				that.upKeyType();
			},
			checkCar() {
				// 检查车牌是否输入完成
				let that = this;
				let i = 7;
				let rt = {
					i: -1,
					isempty: false,
					val: ""
				};
				if (that.isPower) {
					i = 8;
				}
				for (let index = 0; index < i; index++) {
					const obj = that.carInput[index];
					if (this.empty(String(obj.val))) {
						rt.i = index;
						rt.isempty = true;
						rt.val = "";
						break;
					}
					rt.val += that.carInput[index].val;
				}
				return rt;
			},
			toBind() {
				let that = this
				let ck = that.checkCar();
				if (ck.i == -1 && !ck.isempty) {
					let carNumber = '';
					that.carInput.forEach(item => {
						carNumber += item.val
					})
					let currentSwiper = that.swiperList[that.cardCur];
					if (that.addType == 3) {
						let editParam = {
							id: that.carId,
							type: currentSwiper.id,
							number: carNumber,
							isNewEnergy: that.isPower ? 1 : 0,
							mobile: that.phoneNumber,
							name: that.userName
						}
						that.$api.request(editParam, 'api/vehicle/editVehicle', 'POST').then(res => {
							uni.showToast({
								title: '编辑成功',
								icon: 'success'
							})
							uni.navigateBack();
						})
					} else {
						let addCarParam = {
							type: currentSwiper.id,
							number: carNumber,
							isNewEnergy: that.isPower ? 1 : 0,
							mobile: that.phoneNumber,
							name: that.userName
						}
						that.$api.request(addCarParam, 'api/vehicle/addVehicle', 'POST').then(res => {
							uni.showToast({
								title: '添加成功',
								icon: 'success'
							})
							if (that.addType == 1) {
								uni.navigateTo({
									url: '/pages/index/index'
								});
							} else if (that.addType == 2) {
								uni.navigateBack();
							}

						})
					}
				} else {
					// 显示键盘输入
					that.keyShow();
					that.carIndex = ck.i;
					that.keyType = that.carInput[ck.i].type
				}
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current;
				console.log('当前card：' + this.cardCur);
			}
		},
		mounted() {},
		onPageScroll: function() {
			let that = this;
		},
		onReachBottom: function() {
			let that = this;
		},
		onPullDownRefresh: function() {
			let that = this;
		},
		onShow: function() {
			let that = this;
		},
		onHide: function() {
			let that = this;
		},
		onUnload: function() {
			let that = this;
		},
		onLoad: async function(options) {
			this.addType = options.addType
			//获取车辆类型
			let _this = this;
			_this.swiperList = []
			this.$api.request({
				key: 'vehicle_type'
			}, 'api/dictData/list', 'GET').then(res => {
				console.log("车辆类型：", );
				let carTypeList = res.data.data;
				carTypeList.forEach(carItem => {
					let swiperItem = {
						id: carItem.dictValue,
						title: carItem.dictLabel,
						url: carItem.url
					}
					_this.swiperList.push(swiperItem);
				})

				if (_this.addType == 3) {
					let carEdit = JSON.parse(options.car);
					_this.userName = carEdit.name;
					_this.phoneNumber = carEdit.mobile;
					_this.isPower = carEdit.isNewEnergy == 0 ? false : true;
					for (let i = 0; i < _this.swiperList.length; i++) {
						if (_this.swiperList[i].id == carEdit.type) {
							_this.cardCur = i;
							console.log("当前：", _this.cardCur)
						}
					}
					_this.carId = carEdit.id;
					_this.carInput[0].val = carEdit.number.substring(0, 1);
					_this.carInput[1].val = carEdit.number.substring(1, 2);
					_this.carInput[2].val = carEdit.number.substring(2, 3);
					_this.carInput[3].val = carEdit.number.substring(3, 4);
					_this.carInput[4].val = carEdit.number.substring(4, 5);
					_this.carInput[5].val = carEdit.number.substring(5, 6);
					_this.carInput[6].val = carEdit.number.substring(6, 7);
					if (carEdit.isNewEnergy == 1) {
						_this.carInput[7].val = carEdit.number.substring(7, 8);
					}
				}
			})
		}
	};
</script>

<style lang="scss">
	.page {
		height: 100%;
		background-color: #FFFFFF;
	}

	.car-item-contet {
		height: 20%;
		width: 100%;
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.4);
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		font-size: 30rpx;
		font-weight: bold;
	}

	.add-car-detail {}

	.detail-bottom {
		display: flex;
		align-items: center;
		margin-top: 50px;
		margin-bottom: 50px;

		.save-button-addCar {
			border-radius: 100px;
			width: 80%;
			background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		}
	}

	.detail-item-tile {
		height: 50px;
		display: flex;
		align-items: center;
		margin-left: 20px;
	}

	.detail-item-title-font {
		font-weight: bold;
		font-size: 15px;
	}

	.detail-item-content {
		height: 50px;
		padding-left: 20px;
		padding-right: 20px;

		input {
			font-size: 14px;
			text-align: left;
			padding-left: 15px;
		}
	}

	.carinput-input {
		display: flex;
		justify-content: center
	}

	.carinput-input-i {
		width: 50upx;
		border-bottom-width: 2upx !important;
		border-bottom-style: solid;
		border-bottom-color: #BCBCBC;
		font-size: 36upx;
		color: #333333;
		line-height: 1;
		margin-right: 12upx;
		padding-bottom: 7upx;
		text-align: center
	}

	.carinput-input-i:nth-last-child(1) {
		margin-right: 0
	}

	.carinput-input .input-active {
		border-bottom-width: 2upx !important;
		border-bottom-style: solid;
		border-bottom-color: #0081FF;
		color: #0081FF
	}

	.carinput-power {
		height: 90upx;
		display: flex;
		justify-content: flex-end
	}

	.carinput-power .checkbox-g {
		display: flex;
		justify-content: center;
		align-items: center
	}

	.carinput-power .checkbox {
		margin-right: 92upx;
		font-size: 28upx;
		color: #999999;
		line-height: 1
	}

	checkbox .wx-checkbox-input {
		border-radius: 50% !important;
		color: #ffffff !important;
	}

	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		color: #fff !important;
		background: #0081FF !important;
	}

	.wx-checkbox-input.wx-checkbox-input-checked {
		border: none !important;
	}


	.carinput-power .checkbox checkbox {
		transform: scale(.6) translateY(-2px);
		margin-right: 0;
	}

	.detail-item-input {
		height: 80%;
	}
</style>
