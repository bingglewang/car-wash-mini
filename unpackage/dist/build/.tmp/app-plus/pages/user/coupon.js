(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/coupon"],{"09dd":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},"29eb":function(t,e,i){"use strict";var n=i("6635"),r=i.n(n);r.a},6635:function(t,e,i){},"94c9":function(t,e,i){"use strict";i.r(e);var n=i("c6ce"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},b626:function(t,e,i){"use strict";(function(t){i("54aa"),i("921b");n(i("66fd"));var e=n(i("cf30"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},c6ce:function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,couponValidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],couponinvalidList:[{id:1,title:"日常用品立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"家用电器立减100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],couponnovalidList:[{id:1,title:"士大夫士大夫",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"满50使用"},{id:2,title:"士大夫士大夫100元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"100",criteria:"满500使用"},{id:3,title:"士大夫士大夫10元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"10",criteria:"无门槛"},{id:4,title:"士大夫士大夫50元",termStart:"2019-04-01",termEnd:"2019-05-30",ticket:"50",criteria:"满1000使用"}],typeClass:"valid",subState:"showvalid",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},mounted:function(){console.log(i("状态高度："+this.StatusBar," at pages\\user\\coupon.vue:287")),console.log(i("菜单栏高度："+this.CustomBar," at pages\\user\\coupon.vue:288"))},methods:{switchType:function(e){this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),console.log(i("类型"+e," at pages\\user\\coupon.vue:299")),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,this.oldIndex=null,this.theIndex=null)},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var n=e.touches[0].pageX-this.initXY[0],r=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(n)<5||(Math.abs(r)>Math.abs(n)?this.isStop=!0:n<0?(this.theIndex=t,this.isStop=!0):n>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){i.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var i=e.length,n=0;n<i;n++)if(t==e[n].id){e.splice(n,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=n}).call(this,i("6e42")["default"],i("0de9")["default"])},cf30:function(t,e,i){"use strict";i.r(e);var n=i("09dd"),r=i("94c9");for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);i("29eb");var s=i("2877"),a=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,"6db380e0",null);e["default"]=a.exports}},[["b626","common/runtime","common/vendor"]]]);