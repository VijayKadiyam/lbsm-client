(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38fb070f"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"maxLength",max:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e}))};t.default=n},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,a)}),!0)}))};t.default=n},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("numeric",/^[0-9]*$/);t.default=n},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"maxValue",max:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=n},"498a":function(e,t,r){"use strict";var a=r("23e7"),n=r("58a8").trim,s=r("c8d2");a({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},"4f32":function(e,t,r){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("e330"),n=r("1d80"),s=r("577e"),i=r("5899"),o=a("".replace),u="["+i+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),d=function(e){return function(t){var r=s(n(t));return 1&e&&(r=o(r,c,"")),2&e&&(r=o(r,l,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,s=(0,a.regex)("email",n);t.default=s},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"minLength",min:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e}))};t.default=n},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("alpha",/^[a-zA-Z]*$/);t.default=n},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"not"},(function(t,r){return!(0,a.req)(t)||!e.call(this,t,r)}))};t.default=n},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,s=(0,a.regex)("url",n);t.default=s},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.default}});var a=n(r("8750"));function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===s(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var o=function(e){return Array.isArray(e)?e.length:"object"===s(e)?Object.keys(e).length:String(e).length};t.len=o;var u=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=u;var c=function(e,t){return(0,a.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=c},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,n=a;t.default=n},"8c91":function(e,t,r){"use strict";r("4f32")},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},(function(t){if(!(0,a.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(s)}))};t.default=n;var s=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"99af":function(e,t,r){"use strict";var a=r("23e7"),n=r("d039"),s=r("e8b5"),i=r("861d"),o=r("7b0b"),u=r("07fa"),c=r("3511"),l=r("8418"),d=r("65f0"),f=r("1dde"),m=r("b622"),p=r("2d00"),b=m("isConcatSpreadable"),h=p>=51||!n((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=f("concat"),y=function(e){if(!i(e))return!1;var t=e[b];return void 0!==t?!!t:s(e)},g=!h||!v;a({target:"Array",proto:!0,arity:1,forced:g},{concat:function(e){var t,r,a,n,s,i=o(this),f=d(i,0),m=0;for(t=-1,a=arguments.length;t<a;t++)if(s=-1===t?i:arguments[t],y(s))for(n=u(s),c(m+n),r=0;r<n;r++,m++)r in s&&l(f,m,s[r]);else c(m+1),l(f,m++,s);return f.length=m,f}})},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=n},b5ae:function(e,t,r){"use strict";function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),t.helpers=void 0,Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}});var n=$(r("6235")),s=$(r("3a54")),i=$(r("45b8")),o=$(r("ec11")),u=$(r("5d75")),c=$(r("c99d")),l=$(r("91d3")),d=$(r("2a12")),f=$(r("5db3")),m=$(r("d4f4")),p=$(r("aa82")),b=$(r("e652")),h=$(r("b6cb")),v=$(r("772d")),y=$(r("d294")),g=$(r("3360")),_=$(r("6417")),x=$(r("eb66")),w=$(r("46bc")),O=$(r("1331")),S=$(r("c301")),k=P(r("78ef"));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(j=function(e){return e?r:t})(e)}function P(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=j(t);if(r&&r.has(e))return r.get(e);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=s?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function $(e){return e&&e.__esModule?e:{default:e}}t.helpers=k},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,a.ref)(e,this,r)}))};t.default=n},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},c8d2:function(e,t,r){var a=r("5e77").PROPER,n=r("d039"),s=r("5899"),i="​᠎";e.exports=function(e){return n((function(){return!!s[e]()||i[e]()!==i||a&&s[e].name!==e}))}},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.withParams)({type:"ipAddress"},(function(e){if(!(0,a.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(s)}));t.default=n;var s=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},n=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},s=a.vuelidate?a.vuelidate.withParams:n;t.withParams=s}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,a)}),!1)}))};t.default=n},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=(0,a.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,a.req)(e.trim()):(0,a.req)(e)}));t.default=n},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=n},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e){return(0,a.withParams)({type:"minValue",min:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=n},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),n=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},(function(r){return!(0,a.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=n},f35b:function(e,t,r){"use strict";r.r(t);r("99af"),r("fb6a"),r("498a");var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:"Update User",folder:"Users"}}),t("b-row",[t("b-col",{attrs:{md:"12"}},[t("b-card",{attrs:{title:"User Update"}},[t("b-row",[t("b-col",{attrs:{md:"12"}},[t("b-button",{staticStyle:{float:"right","margin-top":"-45px"},attrs:{variant:"primary"},on:{click:function(t){return e.$router.back()}}},[t("i",{staticClass:"i-Arrow-Back-3"}),e._v(" Back")])],1)],1),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("b-row",[t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"First Name"}},[t("b-form-input",{staticClass:"mb-2",attrs:{label:"First Name",placeholder:"Enter First Name"},model:{value:e.$v.form.first_name.$model,callback:function(t){e.$set(e.$v.form.first_name,"$model","string"===typeof t?t.trim():t)},expression:"$v.form.first_name.$model"}}),e.$v.form.first_name.required?e._e():t("b-alert",{staticClass:"error mt-1",attrs:{show:"",variant:"danger"}},[e._v("Field is required")])],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"User Name"}},[t("b-form-input",{staticClass:"mb-2",attrs:{label:"User Name",placeholder:"Enter User Name"},model:{value:e.$v.form.user_name.$model,callback:function(t){e.$set(e.$v.form.user_name,"$model","string"===typeof t?t.trim():t)},expression:"$v.form.user_name.$model"}}),e.$v.form.user_name.required?e._e():t("b-alert",{staticClass:"error mt-1",attrs:{show:"",variant:"danger"}},[e._v("Field is required")])],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Middle Name"}},[t("b-form-input",{staticClass:"mb-2",attrs:{label:"Middle Name",placeholder:"Enter Middle Name"},model:{value:e.form.middle_name,callback:function(t){e.$set(e.form,"middle_name",t)},expression:"form.middle_name"}})],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Last Name"}},[t("b-form-input",{staticClass:"mb-2",attrs:{label:"Last Name",placeholder:"Enter Last Name"},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Gender"}},[t("b-row",[t("b-col",{attrs:{md:"8"}},[t("span",[e._v("Male")]),t("label",{staticClass:"switch switch-success mr-3 ml-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{type:"checkbox",checked:"checkbox"},domProps:{checked:Array.isArray(e.form.gender)?e._i(e.form.gender,null)>-1:e.form.gender},on:{change:function(t){var r=e.form.gender,a=t.target,n=!!a.checked;if(Array.isArray(r)){var s=null,i=e._i(r,s);a.checked?i<0&&e.$set(e.form,"gender",r.concat([s])):i>-1&&e.$set(e.form,"gender",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"gender",n)}}}),t("span",{staticClass:"slider"})]),t("span",[e._v("Female")])])],1)],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Date Of Birth"}},[t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"dob",placeholder:"Date Of Birth"},model:{value:e.form.dob,callback:function(t){e.$set(e.form,"dob",t)},expression:"form.dob"}})],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Email"}},[t("b-form-input",{staticClass:"mb-2",attrs:{label:"Email",placeholder:"email address"},model:{value:e.$v.form.email.$model,callback:function(t){e.$set(e.$v.form.email,"$model","string"===typeof t?t.trim():t)},expression:"$v.form.email.$model"}}),e.$v.form.email.email?e._e():t("b-alert",{staticClass:"error mt-1",attrs:{show:"",variant:"danger"}},[e._v(" "+e._s(e.$v.form.email.$model)+" is invalid.")])],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Attachment"}},[t("b-form-file",{ref:"file",attrs:{id:"file-default",name:"imagepath",accept:"image/*"}})],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Rank"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedRank,"max-tags":1,"autocomplete-items":e.filteredRankItems,"add-only-from-autocomplete":!0,placeholder:"Type Rank Name"},on:{"tags-changed":function(t){return e.selectedRank=t}},model:{value:e.searchRank,callback:function(t){e.searchRank=t},expression:"searchRank"}})],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Danos Id"}},[t("b-form-input",{staticClass:"mb-2",attrs:{label:"Danos",placeholder:"Danos Id"},model:{value:e.form.unique_id,callback:function(t){e.$set(e.form,"unique_id",t)},expression:"form.unique_id"}})],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Nationality"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedNationality,"max-tags":1,"autocomplete-items":e.filteredNationalityItems,"add-only-from-autocomplete":!0,placeholder:"Type Nationality Name"},on:{"tags-changed":function(t){return e.selectedNationality=t}},model:{value:e.searchNationality,callback:function(t){e.searchNationality=t},expression:"searchNationality"}})],1)],1),t("b-col",{attrs:{md:"6"}},[t("b-form-group",{attrs:{label:"Active"}},[t("b-row",[t("b-col",{attrs:{md:"8"}},[t("span",[e._v("IN ACTIVE")]),t("label",{staticClass:"switch switch-success mr-3 ml-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.active,expression:"form.active"}],attrs:{type:"checkbox",checked:"checkbox"},domProps:{checked:Array.isArray(e.form.active)?e._i(e.form.active,null)>-1:e.form.active},on:{change:function(t){var r=e.form.active,a=t.target,n=!!a.checked;if(Array.isArray(r)){var s=null,i=e._i(r,s);a.checked?i<0&&e.$set(e.form,"active",r.concat([s])):i>-1&&e.$set(e.form,"active",r.slice(0,i).concat(r.slice(i+1)))}else e.$set(e.form,"active",n)}}}),t("span",{staticClass:"slider"})]),t("span",[e._v("ACTIVE")])])],1)],1)],1)],1),t("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===e.submitStatus}},[e._v("Submit")]),"OK"===e.submitStatus?e._m(0):e._e(),"ERROR"===e.submitStatus?e._m(1):e._e(),"PENDING"===e.submitStatus?e._m(2):e._e()],1),t("hr"),t("h4",[e._v("User Ship")]),t("br"),t("b-row",[t("b-col",{attrs:{md:"4"}},[t("b-form-group",{attrs:{label:"Ship"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedShip,"autocomplete-items":e.filteredShipItems,"add-only-from-autocomplete":!0,placeholder:"Type Ship Name"},on:{"tags-changed":function(t){return e.selectedShip=t}},model:{value:e.searchShip,callback:function(t){e.searchShip=t},expression:"searchShip"}})],1)],1),t("b-col",{attrs:{md:"3"}},[t("b-form-group",{attrs:{label:"From Date"}},[t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"from_date",placeholder:"From Date"},model:{value:e.userShip.from_date,callback:function(t){e.$set(e.userShip,"from_date",t)},expression:"userShip.from_date"}})],1)],1),t("b-col",{attrs:{md:"3"}},[t("b-form-group",{attrs:{label:"To Date"}},[t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"to_date",placeholder:"To Date"},model:{value:e.userShip.to_date,callback:function(t){e.$set(e.userShip,"to_date",t)},expression:"userShip.to_date"}})],1)],1),t("b-col",{attrs:{md:"2"}},[t("br"),t("b-button",{attrs:{variant:"primary"},on:{click:e.saveUserShip}},[e._v(" Save ")])],1)],1),t("hr"),t("b-card",[t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:e.user_ships},scopedSlots:e._u([{key:"table-row",fn:function(r){return["button"==r.column.field?t("span",[t("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.deleteUserShip(r.row.id)}}},[e._v(" Delete ")])],1):e._e()]}}])})],1),t("hr"),t("h4",[e._v("User I-Test")]),t("br"),t("b-row",[t("b-col",{attrs:{md:"3"}},[t("b-form-group",{attrs:{label:"Date"}},[t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"date",placeholder:"Date"},model:{value:e.useritest.date,callback:function(t){e.$set(e.useritest,"date",t)},expression:"useritest.date"}})],1)],1),t("b-col",{attrs:{md:"3"}},[t("b-form-group",{attrs:{label:"Percentage"}},[t("b-form-input",{staticClass:"mb-2",attrs:{label:"Percentage",placeholder:"Enter Percentage"},model:{value:e.useritest.percentage,callback:function(t){e.$set(e.useritest,"percentage",t)},expression:"useritest.percentage"}})],1)],1),t("b-col",{attrs:{md:"4"}},[t("b-form-group",{attrs:{label:"Status"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedStatus,"autocomplete-items":e.filteredStatusItems,"add-only-from-autocomplete":!0,placeholder:"Type Status"},on:{"tags-changed":function(t){return e.selectedStatus=t}},model:{value:e.searchStatus,callback:function(t){e.searchStatus=t},expression:"searchStatus"}})],1)],1),t("b-col",{attrs:{md:"2"}},[t("br"),t("b-button",{attrs:{variant:"primary"},on:{click:e.saveUserITest}},[e._v(" Save ")])],1)],1),t("hr"),t("b-card",[t("vue-good-table",{attrs:{columns:e.userItestcolumns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:e.useritest},scopedSlots:e._u([{key:"table-row",fn:function(r){return["button"==r.column.field?t("span",[t("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.deleteUserItest(r.row.id)}}},[e._v(" Delete ")])],1):e._e()]}}])})],1)],1)],1)],1)],1)},n=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"typo__p"},[e._v(" "+e._s(e.makeToastTwo("success"))+" ")])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"typo__p"},[e._v(" "+e._s(e.makeToast("danger"))+" ")])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],s=r("c7eb"),i=r("1da1"),o=(r("a4d3"),r("e01a"),r("4de4"),r("7db0"),r("14d9"),r("d3b7"),r("159b"),r("bc3a")),u=r.n(o),c=r("b5ae"),l={metaInfo:{title:"User Update"},data:function(){return{form:{first_name:"",middle_name:"",last_name:"",user_name:"",dob:"",gender:"",password:"",email:"",role_id:4},userShip:{user_id:"",from_date:"",to_date:"",ship_id:""},useritest:{user_id:"",date:"",status:"",percentage:""},searchRank:"",selectedRank:[],RankItems:[],searchShip:"",selectedShip:[],shipItems:[],searchNationality:"",selectedNationality:[],nationalityItems:[],searchStatus:"",selectedStatus:[],statusItems:[{text:"Fail",id:"Fail"},{text:"Pass",id:"Pass"}],submitStatus:null,columns:[{label:"Ship",field:"ship.description"},{label:"From Date",field:"from_date"},{label:"To Date",field:"to_date"},{label:"Action",field:"button"}],userItestcolumns:[{label:"Date",field:"date"},{label:"Percetage",field:"percentage"},{label:"Status",field:"status"},{label:"Action",field:"button"}],user_ships:[]}},validations:{form:{first_name:{required:c["required"]},user_name:{required:c["required"]},email:{email:c["email"]}}},mounted:function(){this.getMasters(),this.getData(),this.getUserShipData()},computed:{filteredRankItems:function(){var e=this;return this.RankItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchRank.toLowerCase())}))},filteredNationalityItems:function(){var e=this;return this.nationalityItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchNationality.toLowerCase())}))},filteredShipItems:function(){var e=this;return this.shipItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchShip.toLowerCase())}))},filteredStatusItems:function(){var e=this;return this.statusItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchStatus.toLowerCase())}))}},methods:{getMasters:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var r,a;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("users/masters");case 2:return r=t.sent,r=r.data,r.ranks.forEach((function(t){e.RankItems.push({id:t.id,text:t.description})})),r.nationalities.forEach((function(t){e.nationalityItems.push({id:t.id,text:t.description})})),t.next=8,u.a.get("user_ships/masters");case 8:a=t.sent,a=a.data,a.ships.forEach((function(t){e.shipItems.push({id:t.id,text:t.description})}));case 11:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("submit!"),e.selectedRank[0]&&(e.form.rank_id=e.selectedRank[0].id),e.selectedNationality[0]&&(e.form.nationality=e.selectedNationality[0].text),e.$v.$touch(),!e.$v.$invalid){t.next=8;break}e.submitStatus="ERROR",t.next=24;break;case 8:return t.prev=8,e.isLoading=!0,t.next=12,u.a.patch("/users/".concat(e.$route.params.id),e.form);case 12:return t.next=14,e.handleFileUpload();case 14:e.isLoading=!1,e.$router.push("/app/users"),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](8),e.isLoading=!1;case 21:e.submitStatus="PENDING",e.submitStatus="OK",e.$router.push("/app/users/");case 24:case"end":return t.stop()}}),t,null,[[8,18]])})))()},handleFileUpload:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var r,a,n,i;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=null===(r=e.$refs.file)||void 0===r?void 0:r.files[0],n=e.form.id,i=new FormData,i.append("userid",n),i.append("imagepath",a),t.next=7,u.a.post("upload_user_image",i,{headers:{"Content-Type":"multipart/form-data"}}).catch((function(){console.log("FAILURE!!")}));case 7:case"end":return t.stop()}}),t)})))()},makeToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(e||"default"),variant:e,solid:!0})},makeToastTwo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Submitted",{title:"Variant ".concat(e||"default"),variant:e,solid:!0})},inputSubmit:function(){console.log("submitted")},getData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,u.a.get("/users/".concat(e.$route.params.id));case 3:r=t.sent,e.form=r.data.data,e.form.nationality=e.form.nationality.toUpperCase(),e.rankdata=e.RankItems.find((function(t){return t.id==e.form.rank_id})),e.selectedRank.push({id:e.rankdata.id,text:e.rankdata.text}),e.Nationalitydata=e.nationalityItems.find((function(t){return t.text==e.form.nationality})),e.selectedNationality.push({id:e.Nationalitydata.id,text:e.Nationalitydata.text}),e.isLoading=!1;case 11:case"end":return t.stop()}}),t)})))()},getUserShipData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,u.a.get("/user_ships?user_id=".concat(e.$route.params.id));case 3:r=t.sent,e.user_ships=r.data.data,e.isLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},saveUserShip:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedShip[0]&&(e.userShip.ship_id=e.selectedShip[0].id),e.userShip.user_id=e.$route.params.id,e.$v.$touch(),!e.$v.$invalid){t.next=7;break}e.submitStatus="ERROR",t.next=24;break;case 7:return t.prev=7,e.isLoading=!0,t.next=11,u.a.post("user_ships",e.userShip);case 11:r=t.sent,e.user_ships=r.data.data,e.userShip=r.data.data,e.isLoading=!1,e.searchShip="",e.userShip.from_date="",e.userShip.to_date="",e.submitStatus="OK",t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](7),e.isLoading=!1;case 24:e.getUserShipData();case 25:case"end":return t.stop()}}),t,null,[[7,21]])})))()},deleteUserShip:function(e){var t=this;return Object(i["a"])(Object(s["a"])().mark((function r(){return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.a.delete("/user_ships/".concat(e));case 2:t.getUserShipData();case 3:case"end":return r.stop()}}),r)})))()},getUserITestData:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,u.a.get("/user_i_tests?user_id=".concat(e.$route.params.id));case 3:r=t.sent,e.useritest=r.data.data,e.isLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},saveUserITest:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedStatus[0]&&(e.useritest.status=e.selectedStatus[0].id),e.useritest.user_id=e.$route.params.id,e.$v.$touch(),!e.$v.$invalid){t.next=7;break}e.submitStatus="ERROR",t.next=24;break;case 7:return t.prev=7,e.isLoading=!0,t.next=11,u.a.post("user_i_tests",e.useritest);case 11:r=t.sent,e.useritest=r.data.data,e.useritest=r.data.data,e.isLoading=!1,e.searchStatus="",e.useritest.date="",e.useritest.percentage="",e.submitStatus="OK",t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](7),e.isLoading=!1;case 24:e.getUserITestData();case 25:case"end":return t.stop()}}),t,null,[[7,21]])})))()},deleteUserItest:function(e){var t=this;return Object(i["a"])(Object(s["a"])().mark((function r(){return Object(s["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,u.a.delete("/user_i_tests/".concat(e));case 2:t.getUserITestData();case 3:case"end":return r.stop()}}),r)})))()}}},d=l,f=(r("8c91"),r("2877")),m=Object(f["a"])(d,a,n,!1,null,null,null);t["default"]=m.exports}}]);