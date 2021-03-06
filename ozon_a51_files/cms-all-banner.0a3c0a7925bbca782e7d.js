/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{"0ba6f":function(t,e,n){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function r(t){return!0==(null!=(e=t)&&"object"==typeof e&&!1===Array.isArray(e))&&"[object Object]"===Object.prototype.toString.call(t);
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var e}function c(t){var e,n;return!1!==r(t)&&("function"==typeof(e=t.constructor)&&(!1!==r(n=e.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")))}n.r(e);var dfn=Object.defineProperty,o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function l(t,e,n){void 0===n&&(n=!1);var r={_vueTypes_name:{value:t},def:{value:function(t){return void 0!==t||this.default?(o(t)?this.default=function(){return[].concat(t)}:c(t)?this.default=function(){return Object.assign({},t)}:this.default=t,this):this}},isRequired:{get:function(){return this.required=!0,this}}};return n&&(r.validate={value:function(){}}),Object.assign(Object.defineProperties({validator:function(){return!0}},r),e)}var f,d,h=(f={utils:{toType:l,validate:function(){return!0}}},d={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0},Object.defineProperty(f,"sensibleDefaults",{enumerable:!1,set:function(t){d=!1===t?{}:!0===t?{func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}:t},get:function(){return d}})),y={func:Function,bool:Boolean,string:String,number:Number,array:Array,object:Object,arrayOf:Array,objectOf:Object,shape:Object};function v(t,e,n,r,c){var o;void 0===r&&(r=!1),void 0===c&&(c=!1);var f=((o={})[r?"get":"value"]=function(){return l(e,n,c).def(r?h.sensibleDefaults[e]:void 0)},o);return dfn(t,e,f)}function m(t,e,n){return function(r){return v(t,r,{type:y[r]||null},e,n)}}["any","func","bool","string","number","array","object","symbol"].forEach(m(h,!0,!0)),["oneOf","custom","instanceOf","oneOfType","arrayOf","objectOf"].forEach(m(h,!1)),v(h,"integer",{type:Number},!0),dfn(h,"shape",{value:function(){return dfn(l("shape",{type:Object}),"loose",{get:function(){return this}})}}),h.extend=function(t){var e=t.name,n=t.validate,r=t.getter,o=void 0!==r&&r,l=t.type,f=void 0===l?null:l,d=c(f)&&f.type?null:f;return v(h,e,{type:d},o,!!n)};e.default=h},20839:function(t,e,n){t.exports={banner:"c6a5",bannerLink:"c6a6",center:"c6a7",left:"c6a8",right:"c6a9",bannerImg:"c6b",bgright:"c6b0",bgcenter:"c6b1",mobileBannerWrapper:"c6b2",isDark:"c6b3",":hover":"c6b4",skeletonBanner:"c6b5",mobileBanner:"c6b6"}},"9b9d4":function(t,e,n){"use strict";n.r(e);var r=n("b4fb8"),c=n("d3037"),o=n("a09a9"),l=n.n(o),f=n("4066f"),d=n.n(f),h=n("279f1"),y=n.n(h),v=n("d959b"),m=n("d68e9"),k=n("c66d9"),w={name:"Banner",functional:!0,props:{itemTarget:{type:Boolean,default:!1},link:{type:String,default:""},title:{type:String,default:""},subtitle:{type:String,default:""},image:{type:String,default:""},isMobile:{type:Boolean,default:!1},cellTrackingInfo:{type:Object,default:void 0},styles:{type:Object,default:function(){return{}}},size:{type:Number,default:768},textPosition:{type:String,default:""},textSize:{type:String,default:""},textAlign:{type:String,default:""},align:{type:String,default:"left"},textColor:{type:String,default:"#fff"},isDark:{type:Boolean,default:!1}},render:function(t,e){var n,data=e.data,r=e.props,c=e.$style,o=e.listeners,f=r.itemTarget,link=r.link,title=r.title,h=r.subtitle,image=r.image,w=r.isMobile,S=r.cellTrackingInfo,O=r.size,I=r.textPosition,x=r.textSize,j=r.textAlign,T=r.align,A=r.textColor,B=r.styles,E=r.isDark,P=[c.banner,(n={},y()(n,c.isDark,E),y()(n,c.mobileBannerWrapper,w),y()(n,c["bg".concat(T)],!w),n)],C=[c.bannerLink,c[T],y()({},c.mobileBanner,w)],_={textPosition:I,textSize:x,textAlign:j,textColor:A,title:title,subtitle:h};return t("div",l()([{class:[data.class,P],style:B},{directives:data.directives}]),[t(v.a,l()([{class:C,attrs:{href:link,target:f}},{on:{click:function(){return o.click(S)}}}]),[].concat(d()(w||!title&&!h?[]:[t(k.a,l()([{},{props:_}]))]),[t(m.OzImage,{attrs:{size:O,src:image,maxWidth:9e3,useCdn:!0},class:c.bannerImg,style:w?{}:B})]))])}},S=n("eb58c"),O=n("b429c");var I=Object(O.a)(w,void 0,void 0,!1,(function(t){this.$style=S.default.locals||S.default}),null,null).exports,x=n("ff287"),j=n.n(x),T=c.a.extend({name:"Banner",components:{FunctionalBanner:I},mixins:[r.a],inject:{columnWidth:{default:null},columnBasis:{default:null},isMobile:{default:!1}},data:function(){return{defaultHeight:null,detectViewportSettings:{once:!0,callback:this.onInViewport}}},computed:{item:function(){return j()(this.widgetState,"item",{})},itemTarget:function(){return j()(this.widgetState,"openItemLinkInNewTab",!1)&&!this.isMobile},height:function(){return this.widgetState.height||this.defaultHeight},width:function(){return this.widgetState.width||0},coefficient:function(){return this.width/this.height||2.49},styles:function(){return this.isMobile?{paddingTop:"calc(100% / "+this.coefficient+")"}:{height:this.height+"px"}},size:function(){if(this.isMobile)return 768;var t=this.width||1416;return this.width||(this.columnBasis&&(t=this.calcSize(this.columnBasis)),this.columnWidth&&(t=this.columnWidth)),t>this.height?t:this.height}},methods:{onInViewport:function(){this.sendViewEvent(this.item.cellTrackingInfo)},calcSize:function(t){return t/12*1416-24}},created:function(){this.isMobile?this.defaultHeight="100%":this.defaultHeight=this.height||300}}),A=Object(O.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("FunctionalBanner",t._b({directives:[{name:"qa",rawName:"v-qa:id",value:t.groupStatePath,expression:"groupStatePath",arg:"id"},{name:"detect-viewport",rawName:"v-detect-viewport",value:t.detectViewportSettings,expression:"detectViewportSettings"}],attrs:{"is-mobile":t.isMobile,"is-dark":t.widgetState.isDark,"item-target":t.itemTarget,styles:t.styles,size:t.size,align:t.widgetState.align},on:{click:function(e){return t.sendClickEvent(e)}}},"FunctionalBanner",t.item,!1)):t._e()}),[],!1,null,null,null);e.default=A.exports},b4fb8:function(t,e,n){"use strict";var r=n("a71f0"),c=n("ff287"),o=n.n(c);e.a={methods:{sendClickEvent:function(t,e){r.a.send(r.b.CLICK_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t})},sendViewEvent:function(t,e){r.a.send(r.b.VIEW_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t})},sendShowEvent:function(t,e){r.a.send(r.b.SHOW_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t||{}})},sendFavEvent:function(t,e){r.a.send(r.b.FAVORITE_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t||{}})},sendUnFavEvent:function(t,e){r.a.send(r.b.UNFAVORITE_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t||{}})},sendCloseEvent:function(t,e){r.a.send(r.b.CLOSE_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t||{}})},sendSetEvent:function(t,e){r.a.send(r.b.SET_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t||{}})},sendImpressionEvent:function(t,e){r.a.send(r.b.IMPRESSION_ACTION,{widget:this.trackingInfo||{},slice:e||o()(this.widgetState,"sliceTrackingInfo",{}),cell:t})},sendCustomEvent:function(t,e,n){r.a.send(t,{widget:this.trackingInfo||{},slice:n||o()(this.widgetState,"sliceTrackingInfo",{}),cell:e||{}})}}}},bde21:function(t,e,n){"use strict";var r=n("cbc35"),c=n.n(r);e.default=c.a},c66d9:function(t,e,n){"use strict";var r=n("4066f"),c=n.n(r),o=n("a09a9"),l=n.n(o),f=n("279f1"),d=n.n(f),h=[{name:"qa",value:{id:"title"}}],y=[{name:"qa",value:{id:"subtitle"}}],v={name:"BannerTextBlock",functional:!0,props:{title:{type:String,default:""},subtitle:{type:String,default:""},textPosition:{type:String,default:"center"},textSize:{type:String,default:"M"},textAlign:{type:String,default:"left"},textColor:{type:String,default:"#fff"},slider:{type:Boolean,default:!1}},render:function(t,e){var n=e.props,r=e.$style,o=e._v,title=n.title,f=n.subtitle,v=n.textPosition,m=n.textSize,k=n.textAlign,w=n.textColor,S=n.slider,O=[r.bannerText,r["position-".concat(v)],r["size-".concat(m)],r["align-".concat(k)],d()({},r.slider,S)];return t("div",{style:{color:w},class:O},[].concat(c()(title?[t("b",l()([{class:r.title},{directives:h}]),[o(title)])]:[]),c()(f?[t("p",l()([{class:r.subtitle},{directives:y}]),[o(f)])]:[])))}},m=n("fce8a"),k=n("b429c");var component=Object(k.a)(v,void 0,void 0,!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.a=component.exports},cbc35:function(t,e,n){t.exports={link:"e2j9",dark:"e2k",":hover":"e2k0",light:"e2k1"}},d959b:function(t,e,n){"use strict";var r=n("279f1"),c=n.n(r),o=n("1d967"),l=n.n(o),f=n("3ced6"),d=n("6cf2a");function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){c()(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function v(t,e,n){return m.apply(this,arguments)}function m(){return(m=l()(regeneratorRuntime.mark((function t(e,n,r){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.href||!n.click||e.target||e.withAtomAction){t.next=3;break}return n.click(r),t.abrupt("return");case 3:if(c=d.b.getInstance(),n.click&&n.click(r),!e.withAtomAction){t.next=9;break}return r.preventDefault(),r.stopPropagation(),t.abrupt("return");case 9:if(!e.target){t.next=13;break}return c.redirect(e.href,"_blank"),r.preventDefault(),t.abrupt("return");case 13:if(!e.fakeLink){t.next=19;break}if(!e.target){t.next=17;break}return c.redirect(e.href,"_blank"),t.abrupt("return");case 17:!!r&&(r.ctrlKey||r.metaKey||2===r.which)?c.redirect(e.href,"_blank"):c.push(e.href);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k={name:"LinksStub",functional:!0,props:{type:{type:String,default:"div"},href:{type:[String,Boolean],default:""},target:{type:Boolean,default:!1},fakeLink:{type:Boolean,default:!1},theme:{type:String,default:""},withAtomAction:{type:Boolean,default:!1}},render:function(t,e){var data=e.data,n=e.$style,r=e.props,o=e.listeners,l=e.children;data.attrs=data.attrs||{};var d=r.type,h=r.href,m=r.theme,k=r.target;return k=k?"_blank":"_self",t(h?f.a:d,y(y({},data),{},{class:[n.link,c()({},n[m],m),data.class],attrs:y({},data.attrs),props:{href:h,target:k},on:y(y({},o),{},{click:v.bind(this,r,o)})}),l)}},w=n("bde21"),S=n("b429c");var O=Object(S.a)(k,void 0,void 0,!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.a=O.exports},df2e9:function(t,e,n){t.exports={bannerText:"g5d",slider:"g5d0","align-center":"g5d1","align-left":"g5d2","position-top":"g5d3","position-bottom":"g5d4",title:"g5d5","size-S":"g5d6",subtitle:"g5d7"}},eb58c:function(t,e,n){"use strict";var r=n("20839"),c=n.n(r);e.default=c.a},fce8a:function(t,e,n){"use strict";var r=n("df2e9"),c=n.n(r);e.default=c.a}}]);