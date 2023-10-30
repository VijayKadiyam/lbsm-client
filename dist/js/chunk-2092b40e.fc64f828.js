(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2092b40e"],{"0f13":function(t,e,s){},"2e04":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Assign User Program Task",folder:"User Program Tasks"}}),e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{md:"9"}},[e("b-card",[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"User"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedUser,"max-tags":1,"autocomplete-items":t.filteredUserItems,"add-only-from-autocomplete":!0,placeholder:"Type User Name"},on:{"tags-changed":function(e){return t.selectedUser=e}},model:{value:t.searchUser,callback:function(e){t.searchUser=e},expression:"searchUser"}})],1),e("b-form-group",{attrs:{label:"User Program"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedUserProgram,"autocomplete-items":t.filteredUserProgramItems,"add-only-from-autocomplete":!0,placeholder:"Type User Program"},on:{"tags-changed":function(e){return t.selectedUserProgram=e}},model:{value:t.searchUserProgram,callback:function(e){t.searchUserProgram=e},expression:"searchUserProgram"}})],1),e("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===t.submitStatus}},[t._v("Assign")]),"OK"===t.submitStatus?t._m(0):t._e(),"ERROR"===t.submitStatus?t._m(1):t._e(),"PENDING"===t.submitStatus?t._m(2):t._e()],1)],1)],1)],1)],1)},a=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToastTwo("success"))+" ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToast("danger"))+" ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],n=s("c7eb"),o=s("1da1"),i=(s("4de4"),s("d3b7"),s("159b"),s("a4d3"),s("e01a"),s("bc3a")),c=s.n(i),u={metaInfo:{title:"Program Task | Assign"},data:function(){return{form:{user_id:"",user_program_id:""},submitStatus:null,searchUser:"",selectedUser:[],userItems:[],searchUserProgram:"",selectedUserProgram:[],userProgramItems:[]}},watch:{selectedUser:"getUserProgram"},computed:{filteredUserItems:function(){var t=this;return this.userItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchUser.toLowerCase())}))},filteredUserProgramItems:function(){var t=this;return this.userProgramItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchUserProgram.toLowerCase())}))}},mounted:function(){this.form.site_id=this.site.id,this.getMasters()},methods:{getMasters:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.$route.param),e.next=3,c.a.get("user_ships/masters");case 3:s=e.sent,s=s.data,s.users.forEach((function(e){var s=e.rank?e.rank.description:"";t.userItems.push({id:e.id,text:e.user_name+" "+e.last_name+" (Rank - "+s+") (Danos - "+e.unique_id+")"})}));case 6:case"end":return e.stop()}}),e)})))()},getUserProgram:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("user_programs?user_id=".concat(t.selectedUser[0].id));case 2:s=e.sent,s=s.data.data,s.forEach((function(e){t.userProgramItems.push({id:e.id,text:e.program.program_name})}));case 5:case"end":return e.stop()}}),e)})))()},submit:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var s;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("submit!"),t.selectedUser[0]&&(t.form.user_id=t.selectedUser[0].id),t.selectedUserProgram[0]&&(t.form.user_program_id=t.selectedUserProgram[0].id),e.next=5,c.a.get("/dump_program_tasks?attachment_id=".concat(t.$route.param.dump_program_tasks_id));case 5:if(s=e.sent,t.dump_program_tasks=s.data.data,console.log(t.$route.param),t.$v.$touch(),t.$v.$invalid)t.submitStatus="ERROR";else try{t.isLoading=!0,t.isLoading=!1,t.submitStatus="OK"}catch(r){t.isLoading=!1}case 10:case"end":return e.stop()}}),e)})))()},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},makeToastTwo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Submitted",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},inputSubmit:function(){console.log("submitted")}}},m=u,l=(s("7f9a2"),s("2877")),d=Object(l["a"])(m,r,a,!1,null,null,null);e["default"]=d.exports},"7f9a2":function(t,e,s){"use strict";s("0f13")}}]);