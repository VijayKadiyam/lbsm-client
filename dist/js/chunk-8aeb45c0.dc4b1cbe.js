(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8aeb45c0"],{78394:function(t,e,r){"use strict";r.r(e);r("99af"),r("fb6a");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Update User Program",folder:"User Programs"}}),e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{md:"9"}},[e("b-card",{attrs:{title:"User Program Update"}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-button",{staticStyle:{float:"right","margin-top":"-45px"},attrs:{variant:"primary"},on:{click:function(e){return t.$router.back()}}},[e("i",{staticClass:"i-Arrow-Back-3"}),t._v(" Back")])],1)],1),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"User"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedUser,"max-tags":1,"autocomplete-items":t.filteredUserItems,"add-only-from-autocomplete":!0,placeholder:"Type User Name"},on:{"tags-changed":function(e){return t.selectedUser=e}},model:{value:t.searchUser,callback:function(e){t.searchUser=e},expression:"searchUser"}})],1),e("b-form-group",{attrs:{label:"Program"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedProgram,"max-tags":1,"autocomplete-items":t.filteredProgramItems,"add-only-from-autocomplete":!0,placeholder:"Type Program Name"},on:{"tags-changed":function(e){return t.selectedProgram=e}},model:{value:t.searchProgram,callback:function(e){t.searchProgram=e},expression:"searchProgram"}})],1),e("b-form-group",{attrs:{label:"Enrollment Date"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"enrollment_date"},model:{value:t.form.enrollment_date,callback:function(e){t.$set(t.form,"enrollment_date",e)},expression:"form.enrollment_date"}})],1),e("b-form-group",{attrs:{label:"Active"}},[e("b-row",[e("b-col",{attrs:{md:"8"}},[e("span",[t._v("IN ACTIVE")]),e("label",{staticClass:"switch switch-success mr-3 ml-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.active,expression:"form.active"}],attrs:{type:"checkbox",checked:"checkbox"},domProps:{checked:Array.isArray(t.form.active)?t._i(t.form.active,null)>-1:t.form.active},on:{change:function(e){var r=t.form.active,a=e.target,s=!!a.checked;if(Array.isArray(r)){var o=null,n=t._i(r,o);a.checked?n<0&&t.$set(t.form,"active",r.concat([o])):n>-1&&t.$set(t.form,"active",r.slice(0,n).concat(r.slice(n+1)))}else t.$set(t.form,"active",s)}}}),e("span",{staticClass:"slider"})]),e("span",[t._v("ACTIVE")])])],1)],1),e("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===t.submitStatus}},[t._v("Submit")]),"OK"===t.submitStatus?t._m(0):t._e(),"ERROR"===t.submitStatus?t._m(1):t._e(),"PENDING"===t.submitStatus?t._m(2):t._e()],1)],1)],1)],1)],1)},s=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToastTwo("success"))+" ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToast("danger"))+" ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],o=r("c7eb"),n=r("1da1"),i=(r("4de4"),r("d3b7"),r("159b"),r("a4d3"),r("e01a"),r("bc3a")),c=r.n(i),u={metaInfo:{title:"User Program | Update"},data:function(){return{form:{enrollment_date:""},submitStatus:null,searchUser:"",selectedUser:[],userItems:[],searchProgram:"",selectedProgram:[],programItems:[]}},computed:{filteredUserItems:function(){var t=this;return this.userItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchUser.toLowerCase())}))},filteredProgramItems:function(){var t=this;return this.programItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchProgram.toLowerCase())}))}},validations:{form:{}},mounted:function(){this.form.site_id=this.site.id,this.getMasters(),this.getData()},methods:{getMasters:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,c.a.get("user_programs/masters");case 3:r=e.sent,r=r.data,r.programs.forEach((function(e){t.programItems.push({id:e.id,text:e.program_name})})),r.users.forEach((function(e){var r=e.rank?e.rank.description:"";t.userItems.push({id:e.id,text:e.user_name+" "+e.last_name+" (Rank - "+r+") (Danos - "+e.unique_id+")"})})),t.isLoading=!1;case 8:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){var r;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,c.a.get("/user_programs/".concat(t.$route.params.id));case 3:r=e.sent,t.form=r.data.data,t.selectedUser.push({id:t.form.user.id,text:t.form.user.user_name+" "+t.form.user.last_name+" (Rank - "+t.form.user.rank.description+") (Danos - "+t.form.user.unique_id+")"}),t.selectedProgram.push({id:t.form.program.id,text:t.form.program.program_name}),t.isLoading=!1;case 8:case"end":return e.stop()}}),e)})))()},submit:function(){var t=this;return Object(n["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("submit!"),t.form.user_id=t.selectedUser[0].id,t.form.program_id=t.selectedProgram[0].id,t.$v.$touch(),!t.$v.$invalid){e.next=8;break}t.submitStatus="ERROR",e.next=22;break;case 8:return e.prev=8,t.isLoading=!0,t.submitStatus="PENDING",console.log(t.form),e.next=14,c.a.patch("/user_programs/".concat(t.$route.params.id),t.form);case 14:t.isLoading=!1,t.submitStatus="OK",t.$router.push("/app/user-programs/"),e.next=22;break;case 19:e.prev=19,e.t0=e["catch"](8),t.isLoading=!1;case 22:case"end":return e.stop()}}),e,null,[[8,19]])})))()},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},makeToastTwo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Submitted",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},inputSubmit:function(){console.log("submitted")}}},m=u,l=(r("f4e9"),r("2877")),d=Object(l["a"])(m,a,s,!1,null,null,null);e["default"]=d.exports},"99af":function(t,e,r){"use strict";var a=r("23e7"),s=r("d039"),o=r("e8b5"),n=r("861d"),i=r("7b0b"),c=r("07fa"),u=r("3511"),m=r("8418"),l=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),b=f("isConcatSpreadable"),g=p>=51||!s((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=function(t){if(!n(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},h=!g||!d("concat");a({target:"Array",proto:!0,arity:1,forced:h},{concat:function(t){var e,r,a,s,o,n=i(this),d=l(n,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?n:arguments[e],v(o))for(s=c(o),u(f+s),r=0;r<s;r++,f++)r in o&&m(d,f,o[r]);else u(f+1),m(d,f++,o);return d.length=f,d}})},aab2:function(t,e,r){},f4e9:function(t,e,r){"use strict";r("aab2")}}]);