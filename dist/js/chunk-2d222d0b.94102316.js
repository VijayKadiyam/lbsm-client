(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222d0b"],{cfe7:function(t,e,s){"use strict";s.r(e);s("b0c0");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Program Posts",folder:"Program Posts"}}),e("b-row",[e("b-col",{staticClass:"mt-4 mb-4",attrs:{md:"12"}},[e("b-card",{attrs:{title:"Programs"}},[e("b-row",[e("b-col",{attrs:{md:"9"}},[e("vue-tags-input",{staticClass:"tag-custom text-15",attrs:{tags:t.selectedProgram,"max-tags":1,"add-only-from-autocomplete":!0,"autocomplete-items":t.filteredProgramItems,placeholder:"Type Program Name"},on:{"tags-changed":function(e){return t.selectedProgram=e}},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}}),t._v(" "+t._s(t.searchingStatus)+" ")],1),"Acting Admin"!=t.user.roles[0].name?e("b-col",{attrs:{md:"3"}},[e("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary"},on:{click:function(e){return t.save()}}},[t._v("Save ")]),t._v(" "+t._s(t.savingStatus)+" ")],1):t._e()],1)],1)],1)],1),e("b-card",[e("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!1,placeholder:"Search this table"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:t.programPosts},scopedSlots:t._u([{key:"table-row",fn:function(s){return["sr_no"==s.column.field?e("span",[e("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary"},on:{click:function(e){return t.deleteProgramPost(s.row.originalIndex)}}},[t._v("X ")])],1):t._e(),"serial_no"==s.column.field?e("span",[e("b-form-input",{staticClass:"mb-2",attrs:{label:"Serial No",placeholder:"Enter Serial No"},on:{change:function(e){return t.changeCell(s.row.serial_no,s.row.originalIndex,s.column.field)}},model:{value:s.row.serial_no,callback:function(e){t.$set(s.row,"serial_no",e)},expression:"props.row.serial_no"}})],1):t._e(),"post_id"==s.column.field?e("span",[e("vue-tags-input",{staticClass:"tag-custom text-15",attrs:{tags:t.selectedPost,"max-tags":1,"add-only-from-autocomplete":!0,"autocomplete-items":t.postfilteredItems,placeholder:"Type Post Name"},on:{"tags-changed":function(e){return t.changeCell(e[0]["id"],s.row.originalIndex,s.column.field)}},model:{value:t.searchPost,callback:function(e){t.searchPost=e},expression:"searchPost"}})],1):t._e()]}}])},["Acting Admin"!=t.user.roles[0].name?e("div",{staticClass:"mb-1 mr-2 mt-3 pull-right",attrs:{slot:"table-actions-bottom"},slot:"table-actions-bottom"},[e("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary"},on:{click:function(e){return t.addEmptyProgramPost()}}},[e("i",{staticClass:"i-Add text-white mr-2"}),t._v("Add Row ")])],1):t._e()])],1)],1)},r=[],o=s("c7eb"),n=s("1da1"),i=(s("a4d3"),s("e01a"),s("4de4"),s("14d9"),s("d3b7"),s("159b"),s("bc3a")),c=s.n(i),l={metaInfo:{title:"Program Post"},data:function(){return{columns:[{label:"Sr No",field:"sr_no"},{label:"Serial No",field:"serial_no"},{label:"Post ID",field:"post_id"}],tag:"",programPosts:[{serial_no:"",post_id:""}],program:"",selectedProgram:[],programItems:[],searchPost:"",selectedPost:[],postItems:[],searchingStatus:"",savingStatus:"",searchTerm:""}},computed:{filteredProgramItems:function(){var t=this;return this.programItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchTerm.toLowerCase())}))},postfilteredItems:function(){var t=this;return this.postItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchPost.toLowerCase())}))}},watch:{selectedProgram:"search"},mounted:function(){this.getMasters()},methods:{getMasters:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var s;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("program_posts/masters");case 2:s=e.sent,s=s.data,s.programs.forEach((function(e){t.programItems.push({id:e.id,text:e.program_name})})),s.posts.forEach((function(e){t.postItems.push({id:e.id,text:e.description})}));case 6:case"end":return e.stop()}}),e)})))()},search:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var s;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("123"),t.isLoading=!0,t.savingStatus="",t.searchingStatus="Searching...",!(t.selectedProgram.length>0)){e.next=11;break}return t.programId=t.selectedProgram[0].id,e.next=8,c.a.get("/programs/".concat(t.programId,"/program_posts"));case 8:s=e.sent,t.programPosts=s.data.data,t.programPosts.forEach((function(e){t.selectedPost.push({id:e.post.id,text:e.post.description})}));case 11:t.searchingStatus="",t.isLoading=!1;case 13:case"end":return e.stop()}}),e)})))()},changeCell:function(t,e,s){this.selectedPosts=this.newTags,this.programPosts[e][s]=t,console.log(this.programPosts)},save:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var s,a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.savingStatus="Saving...",!(t.programPosts.length>0)){e.next=10;break}return t.isSaving=!0,s={datas:t.programPosts},console.log(t.programPosts),e.next=7,c.a.post("/programs/".concat(t.programId,"/program_posts_multiple"),s);case 7:a=e.sent,t.programPosts=a.data.data,t.isSaving=!1;case 10:t.savingStatus="Saved.";case 11:case"end":return e.stop()}}),e)})))()},addEmptyProgramPost:function(){this.programPosts.push({program_id:this.programId,site_id:this.site.id,serial_no:"",post_id:"",is_active:1})},deleteProgramPost:function(t){console.log(t),this.programPosts=this.programPosts.filter((function(e){return e.id!=t.id}))}}},d=l,m=s("2877"),u=Object(m["a"])(d,a,r,!1,null,null,null);e["default"]=u.exports}}]);