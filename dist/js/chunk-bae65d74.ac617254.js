(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bae65d74"],{"3ba7":function(t,a,r){"use strict";r("3efc")},"3efc":function(t,a,r){},"5b86":function(t,a,r){"use strict";r.r(a);r("a4d3"),r("e01a"),r("99af"),r("fb6a");var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:"Update User Program Post",folder:"User Program Posts"}}),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-card",{staticClass:"mb-4"},[a("div",{staticClass:"content"},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("User Name")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(" "+t._s(t.userdata.user_name)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("First Name")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(" "+t._s(t.userdata.first_name)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Last Name")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(" "+t._s(t.userdata.last_name)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Rank")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(" "+t._s(t.userdata.rank?t.userdata.rank.description:"")+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Danos")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(" "+t._s(t.userdata.unique_id)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Email")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(" "+t._s(t.userdata.email)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Phone")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-24 line-height-1 mb-2"},[t._v(" "+t._s(t.userdata.phone)+" ")])])],1)],1)])],1),a("b-col",{attrs:{md:"6"}},[a("b-card",{staticClass:"mb-4"},[a("div",{staticClass:"content"},[a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Program Name")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-20 line-height-1 mb-0"},[t._v(" "+t._s(t.programdata.program_name)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Program Description")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-20 line-height-1 mb-0"},[t._v(" "+t._s(t.programdata.program_description)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Instructor")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-20 line-height-1 mb-0"},[t._v(" "+t._s(t.programdata.instructor)+" ")])])],1),a("b-row",[a("b-col",{attrs:{md:"3"}},[a("p",{staticClass:"text-muted mt-2 mb-0"},[t._v("Hours")])]),a("b-col",{attrs:{md:"9"}},[a("p",{staticClass:"text-primary text-20 line-height-1 mb-0"},[t._v(" "+t._s(t.programdata.hours)+" ")])])],1)],1)])],1)],1),a("b-row",{staticClass:"justify-content-md-center"},[a("b-col",{attrs:{md:"12"}},[a("b-card",{attrs:{title:"User Program Post Update"}},[a("b-row",[a("b-col",{attrs:{md:"12"}},[a("b-button",{staticStyle:{float:"right","margin-top":"-45px"},attrs:{variant:"primary"},on:{click:function(a){return t.$router.back()}}},[a("i",{staticClass:"i-Arrow-Back-3"}),t._v(" Back")])],1)],1),a("b-form",{on:{submit:function(a){return a.preventDefault(),t.submit.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"User"}},[a("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedUser,"max-tags":1,"autocomplete-items":t.filteredUserItems,"add-only-from-autocomplete":!0,placeholder:"Type User Name"},on:{"tags-changed":function(a){return t.selectedUser=a}},model:{value:t.searchUser,callback:function(a){t.searchUser=a},expression:"searchUser"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Program"}},[a("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedProgram,"max-tags":1,"autocomplete-items":t.filteredProgramItems,"add-only-from-autocomplete":!0,placeholder:"Type Program Name"},on:{"tags-changed":function(a){return t.selectedProgram=a}},model:{value:t.searchProgram,callback:function(a){t.searchProgram=a},expression:"searchProgram"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Program Post"}},[a("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedProgramPost,"max-tags":1,"autocomplete-items":t.filteredProgramPostItems,"add-only-from-autocomplete":!0,placeholder:"Type Program Post Name"},on:{"tags-changed":function(a){return t.selectedProgramPost=a}},model:{value:t.searchProgramPost,callback:function(a){t.searchProgramPost=a},expression:"searchProgramPost"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Promotion Date"}},[a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"promotion_date"},model:{value:t.form.promotion_date,callback:function(a){t.$set(t.form,"promotion_date",a)},expression:"form.promotion_date"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Remarks"}},[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Remarks",rows:"3","max-rows":"6"},model:{value:t.form.remarks,callback:function(a){t.$set(t.form,"remarks",a)},expression:"form.remarks"}})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Active"}},[a("b-row",[a("b-col",{attrs:{md:"8"}},[a("span",[t._v("IN ACTIVE")]),a("label",{staticClass:"switch switch-success mr-3 ml-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.active,expression:"form.active"}],attrs:{type:"checkbox",checked:"checkbox"},domProps:{checked:Array.isArray(t.form.active)?t._i(t.form.active,null)>-1:t.form.active},on:{change:function(a){var r=t.form.active,e=a.target,s=!!e.checked;if(Array.isArray(r)){var o=null,i=t._i(r,o);e.checked?i<0&&t.$set(t.form,"active",r.concat([o])):i>-1&&t.$set(t.form,"active",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.form,"active",s)}}}),a("span",{staticClass:"slider"})]),a("span",[t._v("ACTIVE")])])],1)],1)],1)],1),a("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===t.submitStatus}},[t._v("Submit")]),"OK"===t.submitStatus?t._m(0):t._e(),"ERROR"===t.submitStatus?t._m(1):t._e(),"PENDING"===t.submitStatus?t._m(2):t._e()],1)],1)],1)],1)],1)},s=[function(){var t=this,a=t._self._c;return a("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToastTwo("success"))+" ")])},function(){var t=this,a=t._self._c;return a("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToast("danger"))+" ")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"typo__p"},[a("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],o=r("c7eb"),i=r("1da1"),c=(r("4de4"),r("d3b7"),r("159b"),r("7db0"),r("bc3a")),m=r.n(c),n={metaInfo:{title:"Update User Program Post"},data:function(){return{form:{promotion_date:""},program_post:{},submitStatus:null,searchUser:"",selectedUser:[],userItems:[],searchProgram:"",selectedProgram:[],programItems:[],searchProgramPost:"",selectedProgramPost:[],program_postItems:[],userdata:{},programdata:{}}},watch:{selectedUser:"searchSelectedUser",selectedProgram:"searchSelectedProgram"},computed:{filteredUserItems:function(){var t=this;return this.userItems.filter((function(a){return-1!==a.text.toLowerCase().indexOf(t.searchUser.toLowerCase())}))},filteredProgramItems:function(){var t=this;return this.programItems.filter((function(a){return-1!==a.text.toLowerCase().indexOf(t.searchProgram.toLowerCase())}))},filteredProgramPostItems:function(){var t=this;return this.program_postItems.filter((function(a){return-1!==a.text.toLowerCase().indexOf(t.searchProgramPost.toLowerCase())}))}},validations:{form:{}},mounted:function(){this.form.site_id=this.site.id,this.getMasters(),this.getData()},methods:{getMasters:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.next=3,m.a.get("user_program_posts/masters");case 3:r=a.sent,r=r.data,t.users=r.users,t.programs=r.programs,t.program_posts=r.program_posts,t.users.forEach((function(a){var r=a.rank?a.rank.description:"";t.userItems.push({id:a.id,text:a.user_name+" "+a.last_name+" (Rank - "+r+") (Danos - "+a.unique_id+")"})})),t.programs.forEach((function(a){t.programItems.push({id:a.id,text:a.program_name})})),t.isLoading=!1;case 11:case"end":return a.stop()}}),a)})))()},getData:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isLoading=!0,a.next=3,m.a.get("/user_program_posts/".concat(t.$route.params.id));case 3:r=a.sent,t.form=r.data.data,t.userdata=t.form.user,t.selectedUser.push({id:t.userdata.id,text:t.userdata.user_name+" "+t.userdata.last_name+" (Rank - "+t.userdata.rank.description+") (Danos - "+t.userdata.unique_id+")"}),t.programdata=t.form.program,t.selectedProgram.push({id:t.programdata.id,text:t.programdata.program_name}),t.program_postdata=t.form.program_post,t.selectedProgramPost.push({id:t.program_postdata.id,text:t.program_postdata.post.description}),t.isLoading=!1;case 12:case"end":return a.stop()}}),a)})))()},searchSelectedUser:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.selectedUser.length>0?(t.user_id=t.selectedUser[0].id,t.userdata=t.users.find((function(a){return a.id==t.user_id}))):t.userdata="";case 1:case"end":return a.stop()}}),a)})))()},searchSelectedProgram:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(t.selectedProgram.length>0)){a.next=10;break}return t.program_id=t.selectedProgram[0].id,t.programdata=t.programs.find((function(a){return a.id==t.program_id})),a.next=5,m.a.get("/programs/".concat(t.program_id,"/program_posts"));case 5:r=a.sent,t.program_posts=r.data.data,t.program_posts.forEach((function(a){t.program_postItems.push({id:a.id,text:a.post.description})})),a.next=15;break;case 10:console.log("clean all"),t.programdata="",t.program_posts=[],t.program_postItems=[],t.selectedProgramPost=[];case 15:case"end":return a.stop()}}),a)})))()},submit:function(){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(console.log("submit!"),t.form.user_id=t.selectedUser[0].id,t.form.program_id=t.selectedProgram[0].id,t.form.program_post_id=t.selectedProgramPost[0].id,t.$v.$touch(),!t.$v.$invalid){a.next=9;break}t.submitStatus="ERROR",a.next=22;break;case 9:return a.prev=9,t.isLoading=!0,t.submitStatus="PENDING",a.next=14,m.a.patch("/user_program_posts/".concat(t.$route.params.id),t.form);case 14:t.isLoading=!1,t.submitStatus="OK",t.$router.push("/app/user-program-posts/"),a.next=22;break;case 19:a.prev=19,a.t0=a["catch"](9),t.isLoading=!1;case 22:case"end":return a.stop()}}),a,null,[[9,19]])})))()},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},makeToastTwo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Submitted",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},inputSubmit:function(){console.log("submitted")}}},l=n,d=(r("3ba7"),r("2877")),u=Object(d["a"])(l,e,s,!1,null,null,null);a["default"]=u.exports},"99af":function(t,a,r){"use strict";var e=r("23e7"),s=r("d039"),o=r("e8b5"),i=r("861d"),c=r("7b0b"),m=r("07fa"),n=r("3511"),l=r("8418"),d=r("65f0"),u=r("1dde"),p=r("b622"),b=r("2d00"),g=p("isConcatSpreadable"),f=b>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),h=u("concat"),_=function(t){if(!i(t))return!1;var a=t[g];return void 0!==a?!!a:o(t)},v=!f||!h;e({target:"Array",proto:!0,arity:1,forced:v},{concat:function(t){var a,r,e,s,o,i=c(this),u=d(i,0),p=0;for(a=-1,e=arguments.length;a<e;a++)if(o=-1===a?i:arguments[a],_(o))for(s=m(o),n(p+s),r=0;r<s;r++,p++)r in o&&l(u,p,o[r]);else n(p+1),l(u,p++,o);return u.length=p,u}})}}]);