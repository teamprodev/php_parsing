/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{"0ba6f":function(t,e,n){"use strict";
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
var e}function o(t){var e,n;return!1!==r(t)&&("function"==typeof(e=t.constructor)&&(!1!==r(n=e.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")))}n.r(e);var dfn=Object.defineProperty,c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function l(t,e,n){void 0===n&&(n=!1);var r={_vueTypes_name:{value:t},def:{value:function(t){return void 0!==t||this.default?(c(t)?this.default=function(){return[].concat(t)}:o(t)?this.default=function(){return Object.assign({},t)}:this.default=t,this):this}},isRequired:{get:function(){return this.required=!0,this}}};return n&&(r.validate={value:function(){}}),Object.assign(Object.defineProperties({validator:function(){return!0}},r),e)}var f,d,h=(f={utils:{toType:l,validate:function(){return!0}}},d={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0},Object.defineProperty(f,"sensibleDefaults",{enumerable:!1,set:function(t){d=!1===t?{}:!0===t?{func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}:t},get:function(){return d}})),y={func:Function,bool:Boolean,string:String,number:Number,array:Array,object:Object,arrayOf:Array,objectOf:Object,shape:Object};function m(t,e,n,r,o){var c;void 0===r&&(r=!1),void 0===o&&(o=!1);var f=((c={})[r?"get":"value"]=function(){return l(e,n,o).def(r?h.sensibleDefaults[e]:void 0)},c);return dfn(t,e,f)}function v(t,e,n){return function(r){return m(t,r,{type:y[r]||null},e,n)}}["any","func","bool","string","number","array","object","symbol"].forEach(v(h,!0,!0)),["oneOf","custom","instanceOf","oneOfType","arrayOf","objectOf"].forEach(v(h,!1)),m(h,"integer",{type:Number},!0),dfn(h,"shape",{value:function(){return dfn(l("shape",{type:Object}),"loose",{get:function(){return this}})}}),h.extend=function(t){var e=t.name,n=t.validate,r=t.getter,c=void 0!==r&&r,l=t.type,f=void 0===l?null:l,d=o(f)&&f.type?null:f;return m(h,e,{type:d},c,!!n)};e.default=h},"211ad":function(t,e,n){"use strict";var r=n("668cc"),o=n.n(r);e.default=o.a},"214b5":function(t,e,n){t.exports={attachment:"b1d1",mobile:"b1d2",icon:"b1d3",link:"b1d4",size:"b1d5"}},"27c44":function(t,e){var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},r=this&&this.__rest||function(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(t);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(t,s[a])&&(n[s[a]]=t[s[a]])}return n};t.exports={functional:!0,render:function(t,e){var o=e._c,s=(e._v,e.data),a=e.children,c=void 0===a?[]:a,l=s.class,i=s.staticClass,f=s.style,d=s.staticStyle,h=s.attrs,p=void 0===h?{}:h,y=r(s,["class","staticClass","style","staticStyle","attrs"]);return o("svg",n({class:[l,i],style:[f,d],attrs:Object.assign({width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},p)},y),c.concat([o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.022 3a1 1 0 00-1-1H4v20h16V6.088l-1.866-1.881-.093-.084a1 1 0 00-1.32.078l-.084.094a1 1 0 00.077 1.32L18 6.912V20H6V4h8.022l.117-.007A1 1 0 0015.022 3zM8 8a1 1 0 011-1h5a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h5a1 1 0 110 2H9a1 1 0 01-1-1z",fill:"currentColor"}})]))}}},"668cc":function(t,e,n){t.exports={attachments:"b0p1",title:"b0p2",cont:"b0p3",mobile:"d3z5",attachIframe:"b0p4"}},78763:function(t,e,n){"use strict";var r=n("11078");e.a={inheritAttrs:!1,computed:{showWidget:function(){return!this.hasWidgetError&&(Object.keys(this.widgetState).length||this.asyncType===r.a)},hasWidgetError:function(){return this.widgetState.error}},inject:{$isMobile:{from:"isMobile",default:!1}}}},96443:function(t,e,n){"use strict";var r=n("a4df2"),o=n("0ba6f");e.a=r.default.component("Icon",{functional:!0,props:{iconKey:o.default.string.isRequired,iconMap:o.default.object.isRequired},render:function(t,e){return t(e.props.iconMap[e.props.iconKey],e.data)}})},"9692b":function(t,e,n){"use strict";n.r(e);var r=n("d3037"),o=n("78763"),c=n("0ba6f"),l=n("d68e9"),f=n("96443"),d=n("27c44"),h={iconFile:n.n(d).a},y={components:{Icon:f.a},props:{fileUrl:c.default.string.isRequired,size:c.default.string.def(""),title:c.default.string.isRequired,iconKey:c.default.string.def(""),isMobileTheme:c.default.bool.def(!1)},data:function(){return{iconMap:h}}},m=n("a0b44"),v=n("b429c");var O={components:{Attachment:Object(v.a)(y,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{directives:[{name:"qa",rawName:"v-qa:id",value:"attachment",expression:"'attachment'",arg:"id"}],class:[e.$style.attachment,(t={},t[e.$style.mobile]=e.isMobileTheme,t)]},[e.iconKey?r("Icon",{class:e.$style.icon,attrs:{"icon-key":e.iconKey,"icon-map":e.iconMap}}):e._e(),e._v(" "),r("div",{class:e.$style.name},[r("a",{class:e.$style.link,attrs:{href:e.fileUrl,target:"_blank"},on:{click:function(t){return t.preventDefault(),e.$emit("clickOnLink",e.fileUrl)}}},[e._v(e._s(e.title))]),e._v(" "),r("span",{class:e.$style.size},[e._v(e._s(e.size))])])],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null).exports,OzModal:l.OzModal},props:{attachments:c.default.array.def([]),title:c.default.string.def(""),isMobileTheme:c.default.bool.def(!1)},data:function(){return{showModal:!1,pathToPdf:""}},computed:{shown:function(){return Array.isArray(this.attachments)&&this.validAttachments.length>0},validAttachments:function(){return this.attachments.filter((function(t){var e=t||{},title=e.title,n=e.fileUrl;return title&&n}))}},methods:{openPopup:function(t){this.isMobileTheme?window.open(t,"_blank").focus():(this.pathToPdf=t,this.showModal=!0)},closePopup:function(){this.showModal=!1}}},_=n("211ad");var j=Object(v.a)(O,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return e.shown?r("div",{class:[e.$style.attachments,(t={},t[e.$style.mobile]=e.isMobileTheme,t)]},[e.title?r("h3",{class:e.$style.title},[e._v("\n    "+e._s(e.title)+"\n  ")]):e._e(),e._v(" "),r("div",{class:e.$style.cont},e._l(e.validAttachments,(function(t){return r("Attachment",e._b({key:t.fileUrl,attrs:{"is-mobile-theme":e.isMobileTheme},on:{clickOnLink:e.openPopup}},"Attachment",t,!1))})),1),e._v(" "),e.showModal?r("OzModal",{on:{close:e.closePopup}},[e.pathToPdf?r("iframe",{ref:"iframe",class:e.$style.attachIframe,attrs:{src:e.pathToPdf,allowfullscreen:"",frameborder:"0"}}):e._e()]):e._e()],1):e._e()}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null).exports,w=r.a.extend({name:"WidgetAttachments",mixins:[o.a],props:{title:{type:String,default:""}},components:{Attachments:j}}),M=Object(v.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return this.showWidget?e("Attachments",this._b({attrs:{"is-mobile-theme":this.$isMobile,title:this.title}},"Attachments",this.widgetState,!1)):this._e()}),[],!1,null,null,null);e.default=M.exports},a0b44:function(t,e,n){"use strict";var r=n("214b5"),o=n.n(r);e.default=o.a}}]);