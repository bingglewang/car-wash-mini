(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tki-float-keyboard/tki-float-keyboard"],{"0c8f":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n})},"2c61":function(t,e,i){"use strict";i.r(e);var s=i("0c8f"),n=i("d0c7");for(var h in n)"default"!==h&&function(t){i.d(e,t,function(){return n[t]})}(h);i("6f9e");var p=i("2877"),r=Object(p["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports},"3a77":function(t,e,i){},"6f9e":function(t,e,i){"use strict";var s=i("3a77"),n=i.n(s);n.a},abbd:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tki-float-keyboard",props:{title:{type:[String],default:""},type:{type:[Number,String],default:0},mode:{type:[String],default:"keyboard"}},data:function(){return{isUp:!1,swTxt:!0,keyShow:!1,keyShowAni:!0,keyInputSkin:!0,symbol:{row_1:["+","-","*","/","=","^","<",">","(",")"],row_2:["?","!","@","#","$","&",",",".","[","]"],row_3:[":",";","'",'"',"_","~","…"]},province:{row_1:["京","津","沪","渝","蒙","新","藏","宁","桂","黑"],row_2:["吉","辽","晋","冀","青","鲁","豫","苏","皖","浙"],row_3:["闽","赣","湘","鄂","粤","琼","甘","陕","云","贵"],row_4:["川"],row_5:["港","澳","学","警","领","使"]},number:[1,2,3,4,5,6,7,8,9,0],letter:{row_1:["Q","W","E","R","T","Y","U","I","O","P"],row_2:["A","S","D","F","G","H","J","K","L"],row_3:["Z","X","C","V","B","N","M"]},symbolCP_:!0,provinceCP_:!0,specialCP_:!0,numCp_:!0,letterCp_:!0,digitCp_:!0,dotCp_:!0,swCp_:!0,swTxtCp_:["省","ABC"]}},methods:{_keyInit:function(){"keyboard"==this.mode&&(this.isUp=!0,this._keyTypeWacth(this.keyType),this._keySwUp()),"car"==this.mode&&(this.isUp=!1,this._carTypeWacth(this.carType),this._keySwUp()),"number"==this.mode&&this._numberTypeWacth(this.numberType)},_keySwUp:function(t){if("number"!=this.mode&&this.keyInputSkin){for(var e in this.letter)if(this.letter.hasOwnProperty(e))for(var i=0;i<this.letter[e].length;i++)if(this.isUp){var s=this.letter[e][i].toLowerCase();this.letter[e][i]=s}else{var n=this.letter[e][i].toUpperCase();this.letter[e][i]=n}this.isUp=!this.isUp}},_keyInput:function(t){var e=t.currentTarget.dataset;e.ac&&this.$emit("val",String(e.v))},_keyInputDel:function(){this.$emit("del",!0)},_keyInputSw:function(){var t=this;t.swCp_&&(t.keyInputSkin=!t.keyInputSkin)},_keyShow:function(){var e=this;t.hideKeyboard(),e.keyShow=!0,e.keyShowAni=!0,setTimeout(function(){t.createSelectorQuery().in(e).select("._flkey-body").boundingClientRect(function(t){e.$emit("show",t)}).exec()},150)},_keyHide:function(){var t=this;t.keyShowAni=!1,setTimeout(function(){t.$emit("hide",!0),t.keyShow=!1},166)},_carTypeWacth:function(t){var e=Number(t);switch(e){case 0:this.provinceCP_=!0,this.specialCP_=!0,this.numCp_=!0,this.letterCp_=!0,this.swCp_=!0,this.swTxtCp_=["省","ABC"],this.keyInputSkin=!0;break;case 1:this.provinceCP_=!1,this.specialCP_=!1,this.numCp_=!0,this.letterCp_=!0,this.swCp_=!1,this.swTxtCp_=["省","ABC"],this.keyInputSkin=!0;break;case 2:this.provinceCP_=!0,this.specialCP_=!1,this.numCp_=!1,this.letterCp_=!1,this.swCp_=!1,this.swTxtCp_=["省","ABC"],this.keyInputSkin=!1;break;case 3:this.provinceCP_=!1,this.specialCP_=!0,this.numCp_=!0,this.letterCp_=!0,this.swCp_=!0,this.swTxtCp_=["特","ABC"],this.keyInputSkin=!0;break;case 4:this.provinceCP_=!1,this.specialCP_=!1,this.numCp_=!1,this.letterCp_=!0,this.swCp_=!1,this.swTxtCp_=["省","ABC"],this.keyInputSkin=!0;break;case 5:this.provinceCP_=!1,this.specialCP_=!1,this.numCp_=!0,this.letterCp_=!1,this.swCp_=!1,this.swTxtCp_=["省","ABC"],this.keyInputSkin=!0;break;default:this.provinceCP_=!0,this.specialCP_=!0,this.numCp_=!0,this.letterCp_=!0,this.swCp_=!0,this.swTxtCp_=["省","ABC"],this.keyInputSkin=!0;break}},_keyTypeWacth:function(t){var e=Number(t);switch(e){case 0:this.symbolCP_=!0,this.numCp_=!0,this.letterCp_=!0,this.swCp_=!0,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!0;break;case 1:this.symbolCP_=!1,this.numCp_=!0,this.letterCp_=!0,this.swCp_=!1,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!0;break;case 2:this.symbolCP_=!0,this.numCp_=!1,this.letterCp_=!1,this.swCp_=!1,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!1;break;case 3:this.symbolCP_=!1,this.numCp_=!1,this.letterCp_=!0,this.swCp_=!1,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!0;break;case 4:this.symbolCP_=!1,this.numCp_=!0,this.letterCp_=!1,this.swCp_=!1,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!0;break;case 5:this.symbolCP_=!0,this.numCp_=!1,this.letterCp_=!0,this.swCp_=!0,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!0;break;case 6:this.symbolCP_=!0,this.numCp_=!0,this.letterCp_=!1,this.swCp_=!0,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!0;break;default:this.symbolCP_=!0,this.numCp_=!0,this.letterCp_=!0,this.swCp_=!0,this.swTxtCp_=["符","ABC"],this.keyInputSkin=!0;break}},_numberTypeWacth:function(t){var e=Number(t);switch(e){case 0:this.digitCp_=!0,this.dotCp_=!0;break;case 1:this.digitCp_=!0,this.dotCp_=!1;break;default:this.digitCp_=!0,this.dotCp_=!0;break}}},computed:{},watch:{type:function(t,e){"car"==this.mode&&this._carTypeWacth(t),"keyboard"==this.mode&&this._keyTypeWacth(t),"number"==this.mode&&this._numberTypeWacth(t)},mode:function(t,e){t!=e&&this._keyInit()}},created:function(){this._keyInit()}};e.default=i}).call(this,i("6e42")["default"])},d0c7:function(t,e,i){"use strict";i.r(e);var s=i("abbd"),n=i.n(s);for(var h in s)"default"!==h&&function(t){i.d(e,t,function(){return s[t]})}(h);e["default"]=n.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-float-keyboard/tki-float-keyboard-create-component',
    {
        'components/tki-float-keyboard/tki-float-keyboard-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2c61"))
        })
    },
    [['components/tki-float-keyboard/tki-float-keyboard-create-component']]
]);                