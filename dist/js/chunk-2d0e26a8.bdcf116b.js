(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e26a8"],{"7f36":function(t,a,e){"use strict";e.r(a);e("a4d3"),e("e01a");var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"User List",folder:"Users"}}),a("b-card",[a("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},isLoading:t.isLoading,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:t.users},on:{"update:isLoading":function(a){t.isLoading=a},"update:is-loading":function(a){t.isLoading=a}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["button"==e.column.field?a("span",[a("router-link",{attrs:{to:"/app/users/"+e.row.id}},[a("i",{staticClass:"i-Eraser-2 text-25 text-success mr-2"}),t._v(" "+t._s(e.row.button))])],1):"gender"==e.column.field?a("span",[t._v(" "+t._s(0==e.row.gender?"MALE":"FEMALE")+" ")]):"rank"==e.column.field&&e.row.rank?a("span",[t._v(" "+t._s(e.row.rank.description.toUpperCase())+" ")]):"first_name"==e.column.field?a("span",[t._v(" "+t._s(e.row.first_name.toUpperCase())+" ")]):"last_name"==e.column.field?a("span",[t._v(" "+t._s(e.row.last_name?e.row.last_name.toUpperCase():"")+" ")]):"nationality"==e.column.field?a("span",[t._v(" "+t._s(e.row.nationality?e.row.nationality.toUpperCase():"")+" ")]):"email"==e.column.field?a("span",[t._v(" "+t._s(e.row.email?e.row.email.toUpperCase():"")+" ")]):"active"==e.column.field?a("span",[t._v(" "+t._s(1==e.row.active?"YES":"NO")+" ")]):t._e()]}}])},[a("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[a("b-row",[a("router-link",{attrs:{tag:"a",to:"/app/users/upload"}},[a("i",{staticClass:"i-Upload text-25 text-success mr-2"})]),a("b-button",{staticClass:"btn-rounded d-none d-sm-block mr-2",attrs:{variant:"primary"},on:{click:function(a){return t.$router.back()}}},[a("i",{staticClass:"i-Arrow-Back-3"}),t._v(" BACK")]),a("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary",to:"/app/users/create"}},[a("i",{staticClass:"i-Add text-white mr-2"}),t._v("Add User ")])],1)],1)])],1)],1)},n=[],i=e("c7eb"),r=e("1da1"),o=e("bc3a"),l=e.n(o),d={metaInfo:{title:"User Lits"},data:function(){return{isLoading:!1,columns:[{label:"First Name",field:"first_name"},{label:"Last Name",field:"last_name"},{label:"Rank",field:"rank"},{label:"Nationality",field:"nationality"},{label:"Danos ID",field:"unique_id"},{label:"Gender",field:"gender"},{label:"Email",field:"email"},{label:"Active",field:"active"},{label:"Action",field:"button",html:!0,tdClass:"text-right",thClass:"text-right"}],users:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function a(){var e;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.next=3,l.a.get("users");case 3:e=a.sent,t.users=e.data.data,t.isLoading=!1;case 6:case"end":return a.stop()}}),a)})))()}}},c=d,u=e("2877"),p=Object(u["a"])(c,s,n,!1,null,null,null);a["default"]=p.exports}}]);