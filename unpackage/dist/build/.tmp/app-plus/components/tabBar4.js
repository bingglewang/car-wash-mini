(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tabBar4"],{2943:function(t,n,e){},"4a41":function(t,n,e){"use strict";var a=e("2943"),i=e.n(a);i.a},"4f2f":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},de1a:function(t,n,e){"use strict";e.r(n);var a=e("4f2f"),i=e("f445");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("4a41");var c=e("2877"),u=Object(c["a"])(i["default"],a["a"],a["b"],!1,null,"50621f18",null);n["default"]=u.exports},f445:function(t,n,e){"use strict";e.r(n);var a=e("f5ce"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=i.a},f5ce:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{currentPage:{type:String,default:"index"}},data:function(){return{tabBar:[{url:"index",text:"短模板",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"},{url:"longIndex",text:"长模板",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"},{url:"other",text:"其他示例",imgNormal:"../static/index_change.png",imgClick:"../static/index.png"}]}},created:function(){t.hideTabBar({})},computed:{},methods:{navTo:function(n){if(n.url!==this.currentPage){var e="/pages/".concat(n.url,"/").concat(n.url);t.switchTab({url:e})}else this.$parent.toTop()}}};n.default=e}).call(this,e("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tabBar4-create-component',
    {
        'components/tabBar4-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("de1a"))
        })
    },
    [['components/tabBar4-create-component']]
]);                
