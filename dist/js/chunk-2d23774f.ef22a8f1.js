(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23774f"],{faca:function(t,a,e){"use strict";e.r(a);e("d3b7"),e("ddb0");var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"Value",folder:"Values"}}),a("b-card",[a("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:t.values},scopedSlots:t._u([{key:"table-row",fn:function(e){return["button"==e.column.field?a("span",[a("router-link",{attrs:{to:"/app/values/"+e.row.id}},[a("i",{staticClass:"i-Eraser-2 text-25 text-success mr-2"}),t._v(" "+t._s(e.row.button))])],1):t._e()]}}])},[a("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[a("b-row",[a("b-button",{staticClass:"btn-rounded d-none d-sm-block mr-2",attrs:{variant:"primary"},on:{click:function(a){return t.$router.back()}}},[a("i",{staticClass:"i-Arrow-Back-3"}),t._v(" BACK")]),a("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary",to:"/app/values/create"}},[a("i",{staticClass:"i-Add text-white mr-2"}),t._v("Add Value ")])],1)],1)])],1)],1)},n=[],r=e("c7eb"),o=e("1da1"),l=e("bc3a"),i=e.n(l),c={metaInfo:{title:"Value | Lists"},data:function(){return{columns:[{label:"Name",field:"name"},{label:"Action",field:"button"}],values:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(o["a"])(Object(r["a"])().mark((function a(){var e;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.next=3,i.a.get("values");case 3:e=a.sent,t.values=e.data.data,t.isLoading=!1;case 6:case"end":return a.stop()}}),a)})))()}}},u=c,d=e("2877"),b=Object(d["a"])(u,s,n,!1,null,null,null);a["default"]=b.exports}}]);