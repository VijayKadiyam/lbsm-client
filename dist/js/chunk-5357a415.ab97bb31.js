(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5357a415"],{"2c24":function(t,e,r){"use strict";r("75ff")},"75ff":function(t,e,r){},ea69:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Create User Program",folder:"User Programs"}}),e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{md:"9"}},[e("b-card",{attrs:{title:"User Program Create"}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-button",{staticStyle:{float:"right","margin-top":"-45px"},attrs:{variant:"primary"},on:{click:function(e){return t.$router.back()}}},[e("i",{staticClass:"i-Arrow-Back-3"}),t._v(" Back")])],1)],1),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"User"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedUser,"max-tags":1,"autocomplete-items":t.filteredUserItems,"add-only-from-autocomplete":!0,placeholder:"Type User Name"},on:{"tags-changed":function(e){return t.selectedUser=e}},model:{value:t.searchUser,callback:function(e){t.searchUser=e},expression:"searchUser"}})],1),e("b-form-group",{attrs:{label:"Program"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedProgram,"max-tags":1,"autocomplete-items":t.filteredProgramItems,"add-only-from-autocomplete":!0,placeholder:"Type Program Name"},on:{"tags-changed":function(e){return t.selectedProgram=e}},model:{value:t.searchProgram,callback:function(e){t.searchProgram=e},expression:"searchProgram"}})],1),e("b-form-group",{attrs:{label:"Enrollment Date"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"enrollment_date"},model:{value:t.form.enrollment_date.$model,callback:function(e){t.$set(t.form.enrollment_date,"$model",e)},expression:"form.enrollment_date.$model"}})],1),e("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===t.submitStatus}},[t._v("Submit")]),"OK"===t.submitStatus?t._m(0):t._e(),"ERROR"===t.submitStatus?t._m(1):t._e(),"PENDING"===t.submitStatus?t._m(2):t._e()],1)],1)],1)],1)],1)},s=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToastTwo("success"))+" ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToast("danger"))+" ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],n=r("c7eb"),o=r("1da1"),i=(r("4de4"),r("d3b7"),r("159b"),r("a4d3"),r("e01a"),r("bc3a")),u=r.n(i),c={metaInfo:{title:"User Program | Create"},data:function(){return{form:{enrollment_date:""},submitStatus:null,searchUser:"",selectedUser:[],userItems:[],searchProgram:"",selectedProgram:[],programItems:[]}},computed:{filteredUserItems:function(){var t=this;return this.userItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchUser.toLowerCase())}))},filteredProgramItems:function(){var t=this;return this.programItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchProgram.toLowerCase())}))}},validations:{form:{}},mounted:function(){this.form.site_id=this.site.id,this.getMasters()},methods:{getMasters:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){var r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,u.a.get("user_programs/masters");case 3:r=e.sent,r=r.data,r.programs.forEach((function(e){t.programItems.push({id:e.id,text:e.program_name})})),r.users.forEach((function(e){var r=e.rank?e.rank.description:"";null!=e.last_name?t.userItems.push({id:e.id,text:e.user_name+" "+e.last_name+" (Rank - "+r+") (Danos - "+e.unique_id+")"}):t.userItems.push({id:e.id,text:e.user_name+"  (Rank - "+r+") (Danos - "+e.unique_id+")"})})),t.isLoading=!1;case 8:case"end":return e.stop()}}),e)})))()},submit:function(){var t=this;return Object(o["a"])(Object(n["a"])().mark((function e(){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("submit!"),t.form.user_id=t.selectedUser[0].id,t.form.program_id=t.selectedProgram[0].id,t.$v.$touch(),!t.$v.$invalid){e.next=8;break}t.submitStatus="ERROR",e.next=22;break;case 8:return e.prev=8,t.isLoading=!0,t.submitStatus="PENDING",console.log(t.form),e.next=14,u.a.post("/user_programs",t.form);case 14:t.isLoading=!1,t.submitStatus="OK",t.$router.push("/app/user-programs/"),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](8),t.isLoading=!1;case 22:case"end":return e.stop()}}),e,null,[[8,19]])})))()},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},makeToastTwo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Submitted",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},inputSubmit:function(){console.log("submitted")}}},m=c,l=(r("2c24"),r("2877")),d=Object(l["a"])(m,a,s,!1,null,null,null);e["default"]=d.exports}}]);