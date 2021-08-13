/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"0ba6f":function(t,e,r){"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function n(t){return!0==(null!=(e=t)&&"object"==typeof e&&!1===Array.isArray(e))&&"[object Object]"===Object.prototype.toString.call(t);
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var e}function o(t){var e,r;return!1!==n(t)&&("function"==typeof(e=t.constructor)&&(!1!==n(r=e.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")))}r.r(e);var dfn=Object.defineProperty,c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function l(t,e,r){void 0===r&&(r=!1);var n={_vueTypes_name:{value:t},def:{value:function(t){return void 0!==t||this.default?(c(t)?this.default=function(){return[].concat(t)}:o(t)?this.default=function(){return Object.assign({},t)}:this.default=t,this):this}},isRequired:{get:function(){return this.required=!0,this}}};return r&&(n.validate={value:function(){}}),Object.assign(Object.defineProperties({validator:function(){return!0}},n),e)}var f,d,v=(f={utils:{toType:l,validate:function(){return!0}}},d={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0},Object.defineProperty(f,"sensibleDefaults",{enumerable:!1,set:function(t){d=!1===t?{}:!0===t?{func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}:t},get:function(){return d}})),_={func:Function,bool:Boolean,string:String,number:Number,array:Array,object:Object,arrayOf:Array,objectOf:Object,shape:Object};function h(t,e,r,n,o){var c;void 0===n&&(n=!1),void 0===o&&(o=!1);var f=((c={})[n?"get":"value"]=function(){return l(e,r,o).def(n?v.sensibleDefaults[e]:void 0)},c);return dfn(t,e,f)}function m(t,e,r){return function(n){return h(t,n,{type:_[n]||null},e,r)}}["any","func","bool","string","number","array","object","symbol"].forEach(m(v,!0,!0)),["oneOf","custom","instanceOf","oneOfType","arrayOf","objectOf"].forEach(m(v,!1)),h(v,"integer",{type:Number},!0),dfn(v,"shape",{value:function(){return dfn(l("shape",{type:Object}),"loose",{get:function(){return this}})}}),v.extend=function(t){var e=t.name,r=t.validate,n=t.getter,c=void 0!==n&&n,l=t.type,f=void 0===l?null:l,d=o(f)&&f.type?null:f;return h(v,e,{type:d},c,!!r)};e.default=v},"31ffa":function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},"34c86":function(t,e){t.exports=function(t,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,n=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(r=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);r=!0);}catch(t){n=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return e}}},"5e4c0":function(t,e,r){var n=r("31ffa"),o=r("34c86"),c=r("81b6b"),l=r("830f3");t.exports=function(t,i){return n(t)||o(t,i)||c(t,i)||l()}},77458:function(t,e,r){"use strict";var n=r("77b4c");r.n(n).a},"77b4c":function(t,e,r){},"830f3":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},f0c47:function(t,e,r){t.exports=function(t){var e={};function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=54)}([function(t,e){t.exports=r("0ba6f")},function(t,e,r){"use strict";function a(t,e,r,a,i,n,s,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),a&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:l}}r.d(e,"a",(function(){return a}))},function(t,e){t.exports=r("a09a9")},function(t,e,r){"use strict";var a;r.d(e,"a",(function(){return a})),function(t){t.DEFAULT="default",t.DISCLAIMER="disclaimer",t.TITLE="title",t.TITLE_SMALL="titleSmall",t.TITLE_TERTIARY="titleTertiary",t.TERTIARY="tertiary",t.TITLE_MOBILE="titleMobile",t.TITLE_TERTIARY_MOBILE="titleTertiaryMobile",t.TERTIARY_MOBILE="tertiaryMobile"}(a||(a={}))},function(t,e){t.exports=r("279f1")},function(t,e,r){"use strict";var a;r.d(e,"a",(function(){return a})),function(t){t.SHOWCASE="raShowcase",t.VIDEO="raVideo",t.TEXT_BLOCK="raTextBlock",t.TABLE="raTable"}(a||(a={}))},function(t,e,r){"use strict";var a;r.d(e,"a",(function(){return a})),function(t){t.M="m",t.S="s"}(a||(a={}))},function(t,e,r){"use strict";(function(t){var a=r(30),i=r(35),n=r(1),s={};t.hot,t.hot;var o=Object(n.a)(a.a,void 0,void 0,!1,(function(t){s.$style=i.default.locals||i.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return s.$style}})}),null,null);o.options.__file="src/rich-annotation/components/v0_2/text/index.vue",e.a=o.exports}).call(this,r(8)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,r){"use strict";(function(t){var a=r(28),i=r(36),n=r(1),s={};t.hot,t.hot;var o=Object(n.a)(a.a,void 0,void 0,!1,(function(t){s.$style=i.default.locals||i.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return s.$style}})}),null,null);o.options.__file="src/rich-annotation/components/v0_2/text_block/index.vue",e.a=o.exports}).call(this,r(8)(t))},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var a=r(33),i=r.n(a);function n(t,e){var r=e;return Array.isArray(r)||(r=Object.entries(e).filter((function(t){var e=i()(t,2);return e[0],e[1]})).map((function(t){var e=i()(t,2),r=e[0];return e[1],r}))),Array.isArray(t.class)?t.class.concat(r):r.concat(t.class)}},function(t,e,r){"use strict";(function(t){var a=r(31),i=r(37),n=r(1),s={};t.hot,t.hot;var o=Object(n.a)(a.a,void 0,void 0,!1,(function(t){s.$style=i.default.locals||i.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return s.$style}})}),null,null);o.options.__file="src/rich-annotation/components/v0_2/img/index.vue",e.a=o.exports}).call(this,r(8)(t))},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){t.exports={wrap:"ra-a1",video:"ra-a2"}},function(t,e,r){t.exports={root:"ra-c4",disclaimer:"ra-c5",title:"ra-c6",titleMobile:"ra-c7",titleSmall:"ra-c8",titleTertiary:"ra-c9",tertiary:"ra-d",titleTertiaryMobile:"ra-d0",tertiaryMobile:"ra-d1"}},function(t,e,r){t.exports={title:"ra-b9",titleSmall:"ra-c"}},function(t,e,r){t.exports={root:"ra-c2",img:"ra-c3"}},function(t,e,r){t.exports={root:"ra-a3",mobile:"ra-a4",billboard:"ra-a5",img:"ra-a6",imgMobile:"ra-a7",chess:"ra-a8",reverse:"ra-a9",textBlock:"ra-b",chessImg:"ra-b0",rootTile:"ra-b1",rootTileMobileSecondary:"ra-b2",tile:"ra-b3",tileM:"ra-b4",tileL:"ra-b5",tileXl:"ra-b6",tileSecondary:"ra-b7",tileSecondaryMobile:"ra-b8"}},function(t,e,r){t.exports={text:"ra-c0",tableWrapper:"ra-c1"}},function(t,e,r){"use strict";var a,i=r(2),n=r.n(i),s=r(0),o=r.n(s),c=r(10);!function(t){t.YOUTUBE="youtube",t.EMBED="embed"}(a||(a={}));var l={name:r(5).a.VIDEO,functional:!0,props:{type:o.a.oneOf(Object.values(a)).isRequired,id:o.a.string.def(""),sources:o.a.arrayOf(o.a.shape({type:o.a.string.isRequired,src:o.a.string.isRequired})).def([]),height:o.a.number,width:o.a.number},render:function(t,e){var r=e.$style,i=e.props,s=i.type,o=i.id,l=i.sources,u=i.height,p=i.width,f=e.data;if(s===a.YOUTUBE){var d="https://www.youtube.com/embed/".concat(o);return t("div",{class:Object(c.a)(f,[r.wrap])},[t("iframe",{class:r.video,attrs:{src:d,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}})])}if(s===a.EMBED){var v=[],_={class:Object(c.a)(f,[r.wrap])};return p&&u&&(_.style={paddingTop:"".concat(u/p*100,"%")}),l.forEach((function(e){var r=e.type,a=e.src;return v.push(t("source",{attrs:{src:a,type:r}}))})),t("div",n()([{},_]),[t("video",{class:r.video,attrs:{controls:!0,muted:!0}},[].concat(v))])}return[]}};e.a=l},function(t,e,r){"use strict";var a,i=r(43),n=r.n(i),s=r(2),o=r.n(s),c=r(4),l=r.n(c),u=r(0),p=r.n(u);!function(t){t.BILLBOARD="billboard",t.CHESS="chess",t.TILE_M="tileM",t.TILE_L="tileL",t.TILE_XL="tileXL",t.TILE_SECONDARY="tileSecondary"}(a||(a={}));var f=r(11),d=r(9),v=r(3),_=r(6),h=r(5);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){l()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g="mobile",y="desktop",O={name:h.a.SHOWCASE,components:{TextBlock:d.a,Img:f.a},functional:!0,props:{type:p.a.oneOf(Object.values(a)).isRequired,blocks:p.a.arrayOf(p.a.object).def([]),isMobileTheme:p.a.bool.def(!1)},render:function(t,e){e._v;var r=e.$style,i=e.props,s=i.type,c=i.blocks,u=i.isMobileTheme,p=e.data,h=[r.root];function b(e){var a=e.img,i=e.title,n=e.text,s=e.gapSize,c=e.ratio,l=void 0===c?.5:c,u=e.imgMobile,p=e.titleTheme,d={props:{src:u?a.srcMobile:a.src,ratio:l},class:u?r.img:r.imgMobile};u?a.widthMobile&&a.heightMobile&&(d.props.ratio=a.heightMobile/a.widthMobile):a.height&&a.width&&(d.props.ratio=a.height/a.width);var v=[t(f.a,o()([{},d]))];return O(v,{title:i,text:n,gapSize:s,titleTheme:p}),t("div",{class:r.billboard},[].concat(v))}function O(e,r){var a=r.title,i=r.text,n=r.gapSize,s=r.titleTheme,c=void 0===s?v.a.TITLE:s;if(a&&a.length||i&&i.content.length){var l={props:m({text:i,title:{theme:c,content:[a||""]}},n?{gapSize:n}:{})};e.push(t(d.a,o()([{},l])))}}u&&h.push(r.mobile);var T=function(){},x=u?g:y;switch(x+s){case y+a.CHESS:T=function(e,a){var i=e.img,n=e.title,s=e.text,c=e.reverse,l={props:{src:i.src,ratio:1},class:r.chessImg};(i.height||i.width)&&(l.props.ratio=i.height/i.width);var u=[];O(u,{title:n,text:s});var p=[r.chess];return(a%2||c)&&p.push(r.reverse),t("div",{class:p},[t(f.a,o()([{},l])),t("div",{class:r.textBlock},[].concat(u))])};break;case y+a.TILE_M:case y+a.TILE_L:case y+a.TILE_XL:case g+a.TILE_SECONDARY:case y+a.TILE_SECONDARY:T=function(e){var i,n=e.img,c=e.title,p=e.text,h=(i={},l()(i,y+a.TILE_M,[r.tileM]),l()(i,y+a.TILE_L,[r.tileL]),l()(i,y+a.TILE_XL,[r.tileXl]),l()(i,y+a.TILE_SECONDARY,[r.tileSecondary]),l()(i,g+a.TILE_SECONDARY,[r.tileSecondaryMobile]),i),b=v.a.TITLE_SMALL;s===a.TILE_SECONDARY&&(b=x===y?v.a.TITLE_TERTIARY:v.a.TITLE_TERTIARY_MOBILE);var m=p;s===a.TILE_SECONDARY&&(m={content:p,theme:x===y?v.a.TERTIARY:v.a.TERTIARY_MOBILE});var O={props:{gapSize:_.a.S,title:{theme:b,content:c?[c]:[]},text:m}},T=[r.tile].concat(h[x+s]),E={class:r.img,props:{src:u?n.srcMobile:n.src,ratio:u?n.heightMobile/n.widthMobile:n.height/n.width}};return t("div",{class:T},[t(f.a,o()([{},E])),t(d.a,o()([{},O]))])},h.push(r.rootTile),x===g&&h.push(r.rootTileMobileSecondary);break;case y+a.BILLBOARD:T=b;break;case g+a.BILLBOARD:case g+a.CHESS:T=function(t){return b(m(m({},t),{},{titleTheme:v.a.TITLE_MOBILE,gapSize:_.a.S,ratio:1,imgMobile:!0}))};break;case g+a.TILE_M:case g+a.TILE_L:case g+a.TILE_XL:default:T=function(t){return b(m(m({},t),{},{titleTheme:v.a.TITLE_SMALL,gapSize:_.a.S,ratio:1,imgMobile:!0}))}}return t("div",{class:p.class},[t("div",{class:h},n()(c.map(T)))])}};e.a=O},function(t,e,r){"use strict";var a=r(2),i=r.n(a),n=r(0),s=r.n(n),o=r(7),c=r(6),l={name:r(5).a.TEXT_BLOCK,functional:!0,props:{text:s.a.shape(o.a.props),title:s.a.shape(o.a.props),gapSize:s.a.oneOf(Object.values(c.a)).def(c.a.M)},render:function(t,e){e._v;var r=e.data,a=e.props,n=a.text,s=a.title,l=a.gapSize,u=e.$style,p=[];if(s&&s.content.length){var f=[u.title];l===c.a.S&&f.push(u.titleSmall);var d={props:s,class:f};p.push(t(o.a,i()([{},d])))}if(n&&n.content.length){var v={props:n,class:u.text};p.push(t(o.a,i()([{},v])))}return t("div",{class:r.class},[].concat(p))}};e.a=l},function(t,e,r){"use strict";var a=r(4),i=r.n(a),n=r(0),s=r.n(n),o=r(32),c=r(7),l=r(3),u=(r(53),{name:r(5).a.TABLE,functional:!0,props:{title:s.a.string.def(""),table:s.a.shape({header:s.a.arrayOf(s.a.string),body:s.a.arrayOf(s.a.arrayOf(s.a.string))}).def({})},render:function(t,e){e._v;for(var r=e.data,a=e.props,n=a.table,s=a.title,u=e.$style,p=n.header,f=n.body,d=[],v=[],_=0;_<p.length;_++){d.push({key:_,label:p[_]});for(var h=0;h<f.length;h++)v[h]?v[h][_]=f[h][_]:v.push(i()({},_,f[h][_]))}return t("div",{class:[r.class,u.tableWrapper]},[t("div",{class:u.text},[t(c.a,{attrs:{content:[s||""],theme:l.a.TITLE_SMALL}})]),t(o.OzTable,{class:u.table,attrs:{fill:!0,items:v,fields:d,hideHeader:0===d.length}})])}});e.a=u},function(t,e,r){"use strict";var a=r(0),i=r.n(a),n=r(3),s=r(10),o={name:"RText",functional:!0,props:{content:i.a.arrayOf(i.a.string).isRequired,theme:i.a.oneOf(Object.values(n.a)).def(n.a.DEFAULT)},render:function(t,e){var r=e._v,a=e.data,i=e.props,o=e.$style,c=[];i.content.forEach((function(e,a){0!==a&&c.push(t("br")),c.push(t("span",[r(e)]))}));var l=Object(s.a)(a,[o.root]);return i.theme!==n.a.DEFAULT&&l.push(o[i.theme]),t("span",{class:l},[].concat(c))}};e.a=o},function(t,e,r){"use strict";var a=r(0),i=r.n(a),n=r(32),s={name:"RaImg",functional:!0,props:{src:i.a.string.isRequired,ratio:i.a.number.def(1),width:i.a.number.def(0)},render:function(t,e){var r=e.props,a=e.$style,i=e.data,s=Array.isArray(i.class)?i.class.concat(a.root):[a.root,i.class],o=r.ratio&&!Number.isNaN(r.ratio)?r.ratio:1;return t("div",{class:s},[t("div",{style:{paddingTop:"".concat(100*o,"%")}},[t(n.OzImage,{class:a.img,attrs:{src:r.src,size:r.width||void 0}})])])}};e.a=s},function(t,e){t.exports=r("d68e9")},function(t,e){t.exports=r("5e4c0")},function(t,e,r){"use strict";var a=r(20),i=r.n(a);e.default=i.a},function(t,e,r){"use strict";var a=r(21),i=r.n(a);e.default=i.a},function(t,e,r){"use strict";var a=r(22),i=r.n(a);e.default=i.a},function(t,e,r){"use strict";var a=r(23),i=r.n(a);e.default=i.a},function(t,e,r){"use strict";var a=r(24),i=r.n(a);e.default=i.a},function(t,e,r){"use strict";var a=r(25),i=r.n(a);e.default=i.a},function(t,e,r){t.exports={widget:"ra-a",widgetMobile:"ra-a0"}},function(t,e,r){"use strict";(function(t){var a=r(26),i=r(34),n=r(1),s={};t.hot,t.hot;var o=Object(n.a)(a.a,void 0,void 0,!1,(function(t){s.$style=i.default.locals||i.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return s.$style}})}),null,null);o.options.__file="src/rich-annotation/components/v0_2/video/index.vue",e.a=o.exports}).call(this,r(8)(t))},function(t,e,r){"use strict";(function(t){var a=r(27),i=r(38),n=r(1),s={};t.hot,t.hot;var o=Object(n.a)(a.a,void 0,void 0,!1,(function(t){s.$style=i.default.locals||i.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return s.$style}})}),null,null);o.options.__file="src/rich-annotation/components/v0_2/showcase/index.vue",e.a=o.exports}).call(this,r(8)(t))},function(t,e){t.exports=r("4066f")},function(t,e,r){"use strict";(function(t){var a=r(29),i=r(39),n=r(1),s={};t.hot,t.hot;var o=Object(n.a)(a.a,void 0,void 0,!1,(function(t){s.$style=i.default.locals||i.default,Object.defineProperty(this,"$style",{configurable:!0,get:function(){return s.$style}})}),null,null);o.options.__file="src/rich-annotation/components/v0_2/table/index.vue",e.a=o.exports}).call(this,r(8)(t))},function(t,e,r){"use strict";var a=r(12);r.n(a).a},function(t,e,r){"use strict";var a=r(13);r.n(a).a},function(t,e,r){"use strict";var a=r(14);r.n(a).a},function(t,e,r){"use strict";var a=r(15);r.n(a).a},function(t,e,r){"use strict";var a=r(16);r.n(a).a},function(t,e,r){"use strict";var a=r(17);r.n(a).a},function(t,e,r){"use strict";var a=r(18);r.n(a).a},function(t,e,r){"use strict";var a=r(19);r.n(a).a},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var a,i=r(0),n=r.n(i);!function(t){t.JSON="JSON",t.HTML="HTML"}(a||(a={}));var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ra-main"},[t.img?r("div",{staticClass:"ra-main__img-wrapper"},[r("img",{staticClass:"ra-main__img",attrs:{src:t.img}})]):t._e(),t._v(" "),t.title?r("p",{staticClass:"ra-main__title"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.text?r("p",{staticClass:"ra-main__text"},[t._v("\n    "+t._s(t.text)+"\n  ")]):t._e()])};s._withStripped=!0;var o={name:"index",props:{img:n.a.string.def(""),title:n.a.string.def(""),text:n.a.string.def("")}},c=(r(45),r(1)),l=Object(c.a)(o,s,[],!1,null,null,null);l.options.__file="src/rich-annotation/components/v0_1/main/index.vue";var u=l.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ra-chess"},t._l(t.blocks,(function(e){return r("div",{staticClass:"ra-chess__advantage",class:{"ra-chess__advantage_reverse":e.reverse}},[e.img?r("div",{staticClass:"ra-chess__img-wrapper"},[r("img",{staticClass:"ra-chess__img",attrs:{src:e.img}})]):t._e(),t._v(" "),r("div",{staticClass:"ra-chess__description"},[e.title?r("p",{staticClass:"ra-chess__title"},[t._v("\n        "+t._s(e.title)+"\n      ")]):t._e(),t._v(" "),e.text?r("p",{staticClass:"ra-chess__text"},[t._v("\n        "+t._s(e.text)+"\n      ")]):t._e()])])})),0)};p._withStripped=!0;var f={name:"index",props:{blocks:n.a.array.def([])}},d=(r(46),Object(c.a)(f,p,[],!1,null,null,null));d.options.__file="src/rich-annotation/components/v0_1/chess/index.vue";var v=d.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ra-triple"},t._l(t.blocks,(function(e){return r("div",{staticClass:"ra-triple__advantage"},[e.img?r("div",{staticClass:"ra-triple__img-wrapper"},[r("img",{staticClass:"ra-triple__img",attrs:{src:e.img}})]):t._e(),t._v(" "),e.title?r("p",{staticClass:"ra-triple__subtitle"},[t._v("\n      "+t._s(e.title)+"\n    ")]):t._e(),t._v(" "),r("p",{staticClass:"ra-triple__text"},[t._v("\n      "+t._s(e.text)+"\n    ")])])})),0)};_._withStripped=!0;var h={name:"index",props:{blocks:n.a.array.def([])}},b=(r(47),Object(c.a)(h,_,[],!1,null,null,null));b.options.__file="src/rich-annotation/components/v0_1/triple/index.vue";var m=b.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ra-multiple"},t._l(t.blocks,(function(e){return r("div",{staticClass:"ra-multiple__advantage"},[e.img?r("div",{staticClass:"ra-multiple__img-wrapper"},[r("img",{staticClass:"ra-multiple__img",attrs:{src:e.img}})]):t._e(),t._v(" "),e.title?r("p",{staticClass:"ra-multiple__subtitle"},[t._v("\n      "+t._s(e.title)+"\n    ")]):t._e(),t._v(" "),e.text?r("p",{staticClass:"ra-multiple__text"},[t._v("\n      "+t._s(e.text)+"\n    ")]):t._e()])})),0)};g._withStripped=!0;var y={name:"index",props:{blocks:n.a.array.def([])}},O=(r(48),Object(c.a)(y,g,[],!1,null,null,null));O.options.__file="src/rich-annotation/components/v0_1/multiple/index.vue";var T=O.exports,x=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ra-video"},[this.type&&this.id?e("div",{staticClass:"ra-video__wrapper"},[e("iframe",{staticClass:"ra-video__frame",attrs:{src:"https://"+(this.type+this.id),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):this._e()])};x._withStripped=!0;var E={name:"index",props:{type:n.a.string.def(""),id:n.a.string.def("")}},j=(r(49),Object(c.a)(E,x,[],!1,null,null,null));j.options.__file="src/rich-annotation/components/v0_1/video/index.vue";var S=j.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ra-icons"},t._l(t.blocks,(function(e){return r("div",{staticClass:"ra-icons__advantage"},[e.img?r("img",{staticClass:"ra-icons__img",attrs:{src:e.img}}):t._e(),t._v(" "),e.title?r("p",{staticClass:"ra-icons__title"},[t._v("\n      "+t._s(e.title)+"\n    ")]):t._e(),t._v(" "),e.text?r("p",{staticClass:"ra-icons__text-grey"},[t._v("\n      "+t._s(e.text)+"\n    ")]):t._e()])})),0)};L._withStripped=!0;var w={name:"index",props:{blocks:n.a.array.def([])}},C=(r(50),Object(c.a)(w,L,[],!1,null,null,null));C.options.__file="src/rich-annotation/components/v0_1/icons/index.vue";var I=C.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ra-table"},[t.title?r("p",{staticClass:"ra-table__subtitle"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),r("div",{staticClass:"ra-table__wrapper"},[r("table",[t.table.header?r("tr",t._l(t.table.header,(function(e){return r("th",[t._v("\n          "+t._s(e)+"\n        ")])})),0):t._e(),t._v(" "),t._l(t.table.body,(function(e){return r("tr",t._l(e,(function(e){return r("td",[t._v("\n          "+t._s(e)+"\n        ")])})),0)}))],2)])])};M._withStripped=!0;var A={name:"index",props:{title:n.a.string.def(""),table:n.a.object.def({})}},R=(r(51),Object(c.a)(A,M,[],!1,null,null,null));R.options.__file="src/rich-annotation/components/v0_1/table/index.vue";var $=R.exports,P=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ra-caption"},[e("p",{staticClass:"ra-caption__text ra-caption__text_gray"},[this._v("\n    "+this._s(this.text)+"\n  ")])])};P._withStripped=!0;var B={name:"index",props:{text:n.a.string.def("")}},k=(r(52),Object(c.a)(B,P,[],!1,null,null,null));k.options.__file="src/rich-annotation/components/v0_1/caption/index.vue";var D,N={main:u,chess:v,triple:m,multiple:T,video:S,icons:I,table:$,caption:k.exports},Y=r(4),q=r.n(Y),z=r(41),H=r(9),X=r(42),U=r(44),J=r(5),V=(D={},q()(D,J.a.SHOWCASE,X.a),q()(D,J.a.VIDEO,z.a),q()(D,J.a.TEXT_BLOCK,H.a),q()(D,J.a.TABLE,U.a),D),F=r(40);e.default={name:"OzRichAnnotation",functional:!0,props:{contentHtml:n.a.string.def(""),contentJson:n.a.oneOfType([n.a.array,n.a.object]),type:n.a.oneOf(Object.values(a)).required,isMobileTheme:n.a.bool.def(!1)},render:function(t,e){var r=e.props,i=r.type,n=r.contentHtml,s=r.contentJson,o=r.isMobileTheme;if(i===a.HTML)return t("div",{domProps:{innerHTML:n}});if(Array.isArray(s)){for(var c=[],l=null,u=0;u<s.length;u++)l=s[u],c.push(t(N[l.widgetName],{props:l}));return t("div",c)}if(!Array.isArray(s)&&.2===s.version){for(var p=[],f=null,d=0;d<s.content.length;d++)f=s.content[d],V[f.widgetName]&&p.push(t(V[f.widgetName],{props:Object.assign({isMobileTheme:o},f),class:o?F.widgetMobile:F.widget}));return t("div",p)}return t("div",{attrs:{mess:"unsupported version"}})}}}]).default}}]);