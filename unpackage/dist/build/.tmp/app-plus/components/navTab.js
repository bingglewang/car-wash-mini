(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/navTab"],{"0fc0":function(t,n,e){"use strict";e.r(n);var i=e("c5cc"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=a.a},"4c66":function(t,n,e){"use strict";e.r(n);var i=e("f8ea"),a=e("0fc0");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("d3e2");var u=e("2877"),f=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=f.exports},"55ab":function(t,n,e){},c5cc:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"navTab",props:{tabTitle:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,tabLeft:0}},created:function(){var n=this;t.getSystemInfo({success:function(t){n.tabTitle.length<=5?n.isWidth=t.windowWidth/n.tabTitle.length:n.isWidth=t.windowWidth/5}})},methods:{longClick:function(t){if(this.tabTitle.length>5){var n=t-2;n=n<=0?0:n,this.tabLeft=(t-2)*this.isWidth}this.tabClick=t,this.isLeft=t*this.isWidth,this.$emit("changeTab",t)}}};n.default=e}).call(this,e("6e42")["default"])},d3e2:function(t,n,e){"use strict";var i=e("55ab"),a=e.n(i);a.a},f8ea:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/navTab-create-component',
    {
        'components/navTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("4c66"))
        })
    },
    [['components/navTab-create-component']]
]);                
