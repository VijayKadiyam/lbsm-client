(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6752"],{"1cf0":function(t,a,s){"use strict";s.r(a);s("a4d3"),s("e01a");var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"List",folder:"User Program Posts"}}),a("b-card",[a("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},isLoading:t.isLoading,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:t.user_program_posts},on:{"update:isLoading":function(a){t.isLoading=a},"update:is-loading":function(a){t.isLoading=a}},scopedSlots:t._u([{key:"table-row",fn:function(s){return["button"==s.column.field?a("span",[a("router-link",{attrs:{to:"/app/user-program-posts/"+s.row.id}},[a("i",{staticClass:"i-Eraser-2 text-25 text-success mr-2"}),t._v(" "+t._s(s.row.button))])],1):t._e(),"user.first_name"==s.column.field?a("span",[t._v(" "+t._s(s.row.user.first_name+" "+s.row.user.last_name)+" ")]):t._e(),"program.program_name"==s.column.field?a("span",[t._v(" "+t._s(s.row.program.program_name)+" ")]):t._e(),"program_post.post.description"==s.column.field?a("span",[t._v(" "+t._s(s.row.program_post.post.description)+" ")]):"promotion_date"==s.column.field?a("span",[t._v(" "+t._s(s.row.promotion_date)+" ")]):"remarks"==s.column.field?a("span",[t._v(" "+t._s(s.row.remarks)+" ")]):"active"==s.column.field?a("span",[t._v(" "+t._s(1==s.row.active?"YES":"NO")+" ")]):t._e()]}}])},[a("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[a("b-row",[a("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary"},on:{click:function(a){return t.$router.back()}}},[a("i",{staticClass:"i-Arrow-Back-3"}),t._v(" Back")]),a("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary",to:"/app/user-program-posts/create"}},[a("i",{staticClass:"i-Add text-white mr-2"}),t._v("Add User Program Post ")])],1)],1),a("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"})])],1)],1)},o=[],r=s("c7eb"),n=s("1da1"),i=s("bc3a"),l=s.n(i),c={metaInfo:{title:"User Program  Post Listing"},data:function(){return{isLoading:!1,columns:[{label:"User",field:"user.first_name"},{label:"Program",field:"program.program_name"},{label:"Program Post",field:"program_post.post.description"},{label:"Promotion Date",field:"promotion_date",type:"date",dateInputFormat:"yyyy-MM-dd",dateOutputFormat:"yyyy/MM/dd"},{label:"Remarks",field:"remarks"},{label:"Active",field:"active"},{label:"Action",field:"button"}],user_program_posts:[]}},mounted:function(){this.getData()},methods:{getData:function(){var t=arguments,a=this;return Object(n["a"])(Object(r["a"])().mark((function s(){var e,o;return Object(r["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,a.isLoading=!0,s.next=4,l.a.get("/user_program_posts");case 4:o=s.sent,a.user_program_posts=o.data.data,a.count=o.data.count,a.serialNoStarting=(e-1)*a.rowsPerPage,a.isLoading=!1;case 9:case"end":return s.stop()}}),s)})))()}}},d=c,u=s("2877"),p=Object(u["a"])(d,e,o,!1,null,null,null);a["default"]=p.exports}}]);