(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/tki-float-keyboard/tki-float-keyboard"],{

/***/ 125:
/*!*************************************************************************************!*\
  !*** E:/project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tki_float_keyboard_vue_vue_type_template_id_29f2cf86_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tki-float-keyboard.vue?vue&type=template&id=29f2cf86&xlang=wxml&minapp=mpvue& */ 126);
/* harmony import */ var _tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tki-float-keyboard.vue?vue&type=script&lang=js& */ 128);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tki_float_keyboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tki-float-keyboard.vue?vue&type=style&index=0&lang=css& */ 130);
/* harmony import */ var _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tki_float_keyboard_vue_vue_type_template_id_29f2cf86_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tki_float_keyboard_vue_vue_type_template_id_29f2cf86_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 126:
/*!********************************************************************************************************************************************!*\
  !*** E:/project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue?vue&type=template&id=29f2cf86&xlang=wxml&minapp=mpvue& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_template_id_29f2cf86_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-float-keyboard.vue?vue&type=template&id=29f2cf86&xlang=wxml&minapp=mpvue& */ 127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_template_id_29f2cf86_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_template_id_29f2cf86_xlang_wxml_minapp_mpvue___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 127:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue?vue&type=template&id=29f2cf86&xlang=wxml&minapp=mpvue& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 128:
/*!**************************************************************************************************************!*\
  !*** E:/project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-float-keyboard.vue?vue&type=script&lang=js& */ 129);
/* harmony import */ var _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 129:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  name: "tki-float-keyboard",
  props: {
    'title': {
      type: [String],
      default: '' },

    'type': {
      type: [Number, String],
      default: 0 },

    'mode': {
      type: [String],
      default: 'keyboard' // keyboard 普通键盘 car 汽车键盘 number 数字键盘
    } },

  data: function data() {
    return {
      isUp: false, // 是否是大写
      swTxt: true, // 键盘切换按钮是否可用
      keyShow: false,
      keyShowAni: true, // true 进入 false 隐藏
      keyInputSkin: true, // true 显示 字母和数字  false 显示汉子
      symbol: {
        row_1: ['+', '-', '*', '/', '=', '^', '<', '>', '(', ')'],
        row_2: ['?', '!', '@', '#', '$', '&', ',', '.', '[', ']'],
        row_3: [':', ';', '\'', '"', '_', '~', '…'] },

      province: {
        row_1: ["京", "津", "沪", "渝", "蒙", "新", "藏", "宁", "桂", "黑"],
        row_2: ["吉", "辽", "晋", "冀", "青", "鲁", "豫", "苏", "皖", "浙"],
        row_3: ["闽", "赣", "湘", "鄂", "粤", "琼", "甘", "陕", "云", "贵"],
        row_4: ["川"],
        row_5: ["港", "澳", "学", "警", "领", "使"] },

      number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      letter: {
        row_1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        row_2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        row_3: ["Z", "X", "C", "V", "B", "N", "M"] },

      symbolCP_: true,
      provinceCP_: true,
      specialCP_: true,
      numCp_: true,
      letterCp_: true,
      digitCp_: true,
      dotCp_: true,
      swCp_: true,
      swTxtCp_: ['省', 'ABC'] };

  },
  methods: {
    _keyInit: function _keyInit() {
      if (this.mode == 'keyboard') {
        this.isUp = true;
        this._keyTypeWacth(this.keyType);
        this._keySwUp();
      }
      if (this.mode == 'car') {
        this.isUp = false;
        this._carTypeWacth(this.carType);
        this._keySwUp();
      }
      if (this.mode == 'number') {
        this._numberTypeWacth(this.numberType);
      }
    },
    _keySwUp: function _keySwUp(t) {
      if (this.mode != 'number' && this.keyInputSkin) {
        // 大小写切换
        for (var key in this.letter) {
          if (this.letter.hasOwnProperty(key)) {
            for (var index = 0; index < this.letter[key].length; index++) {
              if (!this.isUp) {
                var tp = this.letter[key][index].toUpperCase();
                this.letter[key][index] = tp;
              } else {
                var _tp = this.letter[key][index].toLowerCase();
                this.letter[key][index] = _tp;
              }
            }
          }
        }
        this.isUp = !this.isUp;
      }
    },
    _keyInput: function _keyInput(e) {
      var d = e.currentTarget.dataset;
      if (d.ac) {
        this.$emit('val', String(d.v));
      }
    },
    _keyInputDel: function _keyInputDel() {
      this.$emit('del', true);
    },
    _keyInputSw: function _keyInputSw() {
      var that = this;
      if (that.swCp_) {
        that.keyInputSkin = !that.keyInputSkin;
      }
    },
    _keyShow: function _keyShow() {
      var that = this;
      uni.hideKeyboard();
      that.keyShow = true;
      that.keyShowAni = true;
      setTimeout(function () {
        uni.createSelectorQuery().in(that).select('._flkey-body').boundingClientRect(function (rect) {
          that.$emit('show', rect);
        }).exec();
      }, 150);
    },
    _keyHide: function _keyHide() {
      var that = this;
      that.keyShowAni = false;
      setTimeout(function () {
        that.$emit('hide', true);
        that.keyShow = false;
      }, 166);
    },
    _carTypeWacth: function _carTypeWacth(n) {
      var v = Number(n);
      // 0 全部
      // 1 字母加数字
      // 2 省
      // 3 字母加数字加特
      // 4 字母
      // 5 数字
      switch (v) {
        case 0:
          this.provinceCP_ = true;
          this.specialCP_ = true;
          this.numCp_ = true;
          this.letterCp_ = true;
          this.swCp_ = true;
          this.swTxtCp_ = ['省', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 1:
          this.provinceCP_ = false;
          this.specialCP_ = false;
          this.numCp_ = true;
          this.letterCp_ = true;
          this.swCp_ = false;
          this.swTxtCp_ = ['省', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 2:
          this.provinceCP_ = true;
          this.specialCP_ = false;
          this.numCp_ = false;
          this.letterCp_ = false;
          this.swCp_ = false;
          this.swTxtCp_ = ['省', 'ABC'];
          this.keyInputSkin = false;
          break;
        case 3:
          this.provinceCP_ = false;
          this.specialCP_ = true;
          this.numCp_ = true;
          this.letterCp_ = true;
          this.swCp_ = true;
          this.swTxtCp_ = ['特', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 4:
          this.provinceCP_ = false;
          this.specialCP_ = false;
          this.numCp_ = false;
          this.letterCp_ = true;
          this.swCp_ = false;
          this.swTxtCp_ = ['省', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 5:
          this.provinceCP_ = false;
          this.specialCP_ = false;
          this.numCp_ = true;
          this.letterCp_ = false;
          this.swCp_ = false;
          this.swTxtCp_ = ['省', 'ABC'];
          this.keyInputSkin = true;
          break;
        default:
          this.provinceCP_ = true;
          this.specialCP_ = true;
          this.numCp_ = true;
          this.letterCp_ = true;
          this.swCp_ = true;
          this.swTxtCp_ = ['省', 'ABC'];
          this.keyInputSkin = true;
          break;}

    },
    _keyTypeWacth: function _keyTypeWacth(n) {
      var v = Number(n);
      // 0 全部
      // 1 字母加数字
      // 2 符号
      // 3 字母
      // 4 数字
      // 5 字母加符号
      // 6 数字加符号
      switch (v) {
        case 0:
          this.symbolCP_ = true;
          this.numCp_ = true;
          this.letterCp_ = true;
          this.swCp_ = true;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 1:
          this.symbolCP_ = false;
          this.numCp_ = true;
          this.letterCp_ = true;
          this.swCp_ = false;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 2:
          this.symbolCP_ = true;
          this.numCp_ = false;
          this.letterCp_ = false;
          this.swCp_ = false;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = false;
          break;
        case 3:
          this.symbolCP_ = false;
          this.numCp_ = false;
          this.letterCp_ = true;
          this.swCp_ = false;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 4:
          this.symbolCP_ = false;
          this.numCp_ = true;
          this.letterCp_ = false;
          this.swCp_ = false;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 5:
          this.symbolCP_ = true;
          this.numCp_ = false;
          this.letterCp_ = true;
          this.swCp_ = true;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = true;
          break;
        case 6:
          this.symbolCP_ = true;
          this.numCp_ = true;
          this.letterCp_ = false;
          this.swCp_ = true;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = true;
          break;
        default:
          this.symbolCP_ = true;
          this.numCp_ = true;
          this.letterCp_ = true;
          this.swCp_ = true;
          this.swTxtCp_ = ['符', 'ABC'];
          this.keyInputSkin = true;
          break;}

    },
    _numberTypeWacth: function _numberTypeWacth(n) {
      var v = Number(n);
      // 0 全部
      // 1 禁用.
      switch (v) {
        case 0:
          this.digitCp_ = true;
          this.dotCp_ = true;
          break;
        case 1:
          this.digitCp_ = true;
          this.dotCp_ = false;
          break;
        default:
          this.digitCp_ = true;
          this.dotCp_ = true;
          break;}

    } },

  computed: {},

  watch: {
    type: function type(n, o) {
      if (this.mode == 'car') {
        this._carTypeWacth(n);
      }
      if (this.mode == 'keyboard') {
        this._keyTypeWacth(n);
      }
      if (this.mode == 'number') {
        this._numberTypeWacth(n);
      }
    },
    mode: function mode(n, o) {
      if (n != o) {
        this._keyInit();
      }
    } },

  created: function created() {
    this._keyInit();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 130:
/*!**********************************************************************************************************************!*\
  !*** E:/project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../HBuilderX/HBuilderX.1.9.4.20190426.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-float-keyboard.vue?vue&type=style&index=0&lang=css& */ 131);
/* harmony import */ var _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_HBuilderX_1_9_4_20190426_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tki_float_keyboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 131:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/project/car-wash-mini/components/tki-float-keyboard/tki-float-keyboard.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tki-float-keyboard/tki-float-keyboard.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-float-keyboard/tki-float-keyboard-create-component',
    {
        'components/tki-float-keyboard/tki-float-keyboard-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(125))
        })
    },
    [['components/tki-float-keyboard/tki-float-keyboard-create-component']]
]);                
