(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7a91"],{5220:function(t,a,e){"use strict";e.r(a);e("b0c0");var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"List",folder:"User Programs"}}),a("b-card",[a("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},isLoading:t.isLoading,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:t.user_programs},on:{"update:isLoading":function(a){t.isLoading=a},"update:is-loading":function(a){t.isLoading=a}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["button"==e.column.field?a("span",["Acting Admin"!=t.user.roles[0].name?a("router-link",{attrs:{to:"/app/user-programs/"+e.row.id}},[a("i",{staticClass:"i-Eraser-2 text-25 text-success mr-2"}),t._v(" "+t._s(e.row.button))]):t._e()],1):t._e(),"user_name"==e.column.field&&e.row.user?a("span",[t._v(" "+t._s(e.row.user.first_name+" "+e.row.user.last_name||"")+" ")]):t._e(),"program_name"==e.column.field&&e.row.program?a("span",[t._v(" "+t._s(e.row.program.program_name||"")+" ")]):"enrollment_date"==e.column.field?a("span",[t._v(" "+t._s(e.row.enrollment_date)+" ")]):"active"==e.column.field?a("span",[t._v(" "+t._s(1==e.row.active?"YES":"NO")+" ")]):t._e()]}}])},[a("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[a("b-row",[a("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary"},on:{click:function(a){return t.$router.back()}}},[a("i",{staticClass:"i-Arrow-Back-3"}),t._v(" Back")]),"Acting Admin"!=t.user.roles[0].name?a("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary",to:"/app/user-programs/create"}},[a("i",{staticClass:"i-Add text-white mr-2"}),t._v("Add User Program ")]):t._e()],1)],1),a("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"})])],1)],1)},n=[],s=e("c7eb"),o=e("1da1"),i=e("bc3a"),l=e.n(i),c={metaInfo:{title:"User Program List"},data:function(){return{isLoading:!1,columns:[{label:"User Name",field:"user_name"},{label:"Program Name",field:"program_name"},{label:"Enrollment Date",field:"enrollment_date",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"yyyy/MM/dd"},{label:"Active",field:"active"},{label:"Action",field:"button"}],user_programs:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=arguments,a=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var r,n;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,a.isLoading=!0,e.next=4,l.a.get("/user_programs");case 4:n=e.sent,a.user_programs=n.data.data,a.count=n.data.count,a.serialNoStarting=(r-1)*a.rowsPerPage,a.isLoading=!1;case 9:case"end":return e.stop()}}),e)})))()}}},d=c,u=e("2877"),m=Object(u["a"])(d,r,n,!1,null,null,null);a["default"]=m.exports}}]);