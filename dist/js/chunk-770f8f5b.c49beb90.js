(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-770f8f5b"],{"43e6":function(t,e,a){"use strict";a.r(e);a("ac1f"),a("1276"),a("99af"),a("fb6a");var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"Update User Program Task",folder:"User Program Tasks"}}),e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{md:"9"}},[e("b-card",{attrs:{title:"User Program Task Update"}},[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-button",{staticStyle:{float:"right","margin-top":"-45px"},attrs:{variant:"primary"},on:{click:function(e){return t.$router.back()}}},[e("i",{staticClass:"i-Arrow-Back-3"}),t._v(" Back")])],1)],1),e("b-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("b-form-group",{attrs:{label:"Ship"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedShip,"autocomplete-items":t.filteredShipItems,"add-only-from-autocomplete":!0,placeholder:"Type Ship Name"},on:{"tags-changed":function(e){return t.selectedShip=e}},model:{value:t.searchShip,callback:function(e){t.searchShip=e},expression:"searchShip"}})],1),e("b-form-group",{attrs:{label:"Program Task"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedProgramTask,"autocomplete-items":t.filteredProgramTaskItems,"add-only-from-autocomplete":!0,placeholder:"Type Program Task Name"},on:{"tags-changed":function(e){return t.selectedProgramTask=e}},model:{value:t.searchProgramTask,callback:function(e){t.searchProgramTask=e},expression:"searchProgramTask"}})],1),4!=t.user.roles[0].id?e("b-form-group",{attrs:{label:"Marks Obtained"}},[e("b-form-input",{staticClass:"mb-2",attrs:{label:"Marks Obtained",placeholder:"Enter Marks Obtained"},model:{value:t.form.marks_obtained,callback:function(e){t.$set(t.form,"marks_obtained",e)},expression:"form.marks_obtained"}})],1):t._e(),4!=t.user.roles[0].id?e("b-form-group",{attrs:{label:"Remark"}},[e("b-form-input",{staticClass:"mb-2",attrs:{label:"Remark",placeholder:"Enter Remark"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1):t._e(),4!=t.user.roles[0].id?e("b-form-group",{attrs:{label:"Completion Date"}},[e("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"dob",placeholder:"Completion Date"},model:{value:t.form.completion_date,callback:function(e){t.$set(t.form,"completion_date",e)},expression:"form.completion_date"}})],1):t._e(),e("b-row",[4!=t.user.roles[0].id&&(""!=t.form.marks||t.form.marks>0)?e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Attachment 1"}},[e("b-form-file",{ref:"file1",attrs:{name:"imagepath1"}})],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath1?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath1,target:"_blank"}},["pdf"==t.form.imagepath1.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath1.split(".").pop()||"xlsx"==t.form.imagepath1.split(".").pop()||"csv"==t.form.imagepath1.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 1")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath1?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath1,"imagepath1")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 1")])]):t._e()])],1)],1)],1):e("b-col",{attrs:{md:"6"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath1?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath1,target:"_blank"}},["pdf"==t.form.imagepath1.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath1.split(".").pop()||"xlsx"==t.form.imagepath1.split(".").pop()||"csv"==t.form.imagepath1.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 1")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath1?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath1,"imagepath1")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 1")])]):t._e()])],1)],1)],1),4!=t.user.roles[0].id&&(""!=t.form.marks||t.form.marks>0)?e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Attachment 2"}},[e("b-form-file",{ref:"file2",attrs:{name:"imagepath2"}})],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath2?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath2,target:"_blank"}},["pdf"==t.form.imagepath2.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath2.split(".").pop()||"xlsx"==t.form.imagepath2.split(".").pop()||"csv"==t.form.imagepath2.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 2")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath2?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath2,"imagepath2")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 2")])]):t._e()])],1)],1)],1):e("b-col",{attrs:{md:"6"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath2?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath2,target:"_blank"}},["pdf"==t.form.imagepath2.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath2.split(".").pop()||"xlsx"==t.form.imagepath2.split(".").pop()||"csv"==t.form.imagepath2.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 2")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath2?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath2,"imagepath2")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 2")])]):t._e()])],1)],1)],1)],1),e("b-row",[4!=t.user.roles[0].id&&(""!=t.form.marks||t.form.marks>0)?e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Attachment 3"}},[e("b-form-file",{ref:"file3",attrs:{name:"imagepath3"}})],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath3?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath3,target:"_blank"}},["pdf"==t.form.imagepath3.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath3.split(".").pop()||"xlsx"==t.form.imagepath3.split(".").pop()||"csv"==t.form.imagepath3.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 3")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath3?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath3,"imagepath3")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 3")])]):t._e()])],1)],1)],1):e("b-col",{attrs:{md:"6"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath3?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath3,target:"_blank"}},["pdf"==t.form.imagepath3.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath3.split(".").pop()||"xlsx"==t.form.imagepath3.split(".").pop()||"csv"==t.form.imagepath3.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 3")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath3?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath3,"imagepath3")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 3")])]):t._e()])],1)],1)],1),4!=t.user.roles[0].id&&(""!=t.form.marks||t.form.marks>0)?e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Attachment 4"}},[e("b-form-file",{ref:"file4",attrs:{name:"imagepath4"}})],1),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath4?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath4,target:"_blank"}},["pdf"==t.form.imagepath4.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath4.split(".").pop()||"xlsx"==t.form.imagepath4.split(".").pop()||"csv"==t.form.imagepath4.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 4")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath4?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath4,"imagepath4")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 4")])]):t._e()])],1)],1)],1):e("b-col",{attrs:{md:"6"}},[e("b-row",[e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath4?e("a",{attrs:{href:t.mediaUrl+t.form.imagepath4,target:"_blank"}},["pdf"==t.form.imagepath4.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/pdf.png"}}):"xls"==t.form.imagepath4.split(".").pop()||"xlsx"==t.form.imagepath4.split(".").pop()||"csv"==t.form.imagepath4.split(".").pop()?e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/excel.png"}}):e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/file.png"}}),e("br"),e("span",[t._v("View Attachment 4")])]):t._e()])],1),e("b-col",{attrs:{md:"6"}},[e("center",[null!=t.form.imagepath4?e("a",{attrs:{href:"#"},on:{click:function(e){return t.DeleteImage(t.form.id,t.form.imagepath4,"imagepath4")}}},[e("i",{staticClass:"i-Close-Window text-25"}),e("br"),e("span",[t._v("Remove Attachment 4")])]):t._e()])],1)],1)],1)],1),e("b-row",[4!=t.user.roles[0].id?e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Is Completed"}},[e("label",{staticClass:"switch switch-success mr-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.is_completed,expression:"form.is_completed"}],attrs:{type:"checkbox",checked:"checkbox"},domProps:{checked:Array.isArray(t.form.is_completed)?t._i(t.form.is_completed,null)>-1:t.form.is_completed},on:{change:function(e){var a=t.form.is_completed,r=e.target,s=!!r.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);r.checked?o<0&&t.$set(t.form,"is_completed",a.concat([i])):o>-1&&t.$set(t.form,"is_completed",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.form,"is_completed",s)}}}),e("span",{staticClass:"slider"})])])],1):t._e(),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Active"}},[e("b-row",[e("b-col",{attrs:{md:"8"}},[e("span",[t._v("IN ACTIVE")]),e("label",{staticClass:"switch switch-success mr-3 ml-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.active,expression:"form.active"}],attrs:{type:"checkbox",checked:"checkbox"},domProps:{checked:Array.isArray(t.form.active)?t._i(t.form.active,null)>-1:t.form.active},on:{change:function(e){var a=t.form.active,r=e.target,s=!!r.checked;if(Array.isArray(a)){var i=null,o=t._i(a,i);r.checked?o<0&&t.$set(t.form,"active",a.concat([i])):o>-1&&t.$set(t.form,"active",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.form,"active",s)}}}),e("span",{staticClass:"slider"})]),e("span",[t._v("ACTIVE")])])],1)],1)],1)],1),e("b-button",{attrs:{type:"submit",variant:"primary",disabled:"PENDING"===t.submitStatus}},[t._v("Submit")]),"OK"===t.submitStatus?t._m(0):t._e(),"ERROR"===t.submitStatus?t._m(1):t._e(),"PENDING"===t.submitStatus?t._m(2):t._e()],1)],1)],1)],1)],1)},s=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToastTwo("success"))+" ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"typo__p"},[t._v(" "+t._s(t.makeToast("danger"))+" ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],i=a("c7eb"),o=a("1da1"),m=(a("4de4"),a("d3b7"),a("159b"),a("a4d3"),a("e01a"),a("bc3a")),p=a.n(m),c={metaInfo:{title:"User Program Task | Update"},data:function(){return{form:{user_id:"",program_id:"",program_task_id:"",marks_obtained:"",is_completed:"",completion_date:"",ship_id:"",imagepath1:"",imagepath2:"",imagepath3:"",imagepath4:""},submitStatus:null,searchProgramTask:"",selectedProgramTask:[],searchShip:"",selectedShip:[],shipItems:[],program_taskItems:[]}},computed:{filteredProgramTaskItems:function(){var t=this;return this.program_taskItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchProgramTask.toLowerCase())}))},filteredShipItems:function(){var t=this;return this.shipItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchShip.toLowerCase())}))}},validations:{form:{}},mounted:function(){this.form.user_program_id=this.$route.params.user_program_id,this.form.site_id=this.site.id,this.getData(),this.getMasters()},methods:{getMasters:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a,r,s;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("user_program_tasks/masters");case 2:return a=e.sent,a=a.data,t.ships=a.ships,t.ships.forEach((function(e){t.shipItems.push({id:e.id,text:e.description})})),t.ships.forEach((function(e){e.id==t.form.ship_id&&t.selectedShip.push({id:e.id,text:e.description})})),e.next=9,p.a.get("/user_programs/".concat(t.$route.params.user_program_id));case 9:return r=e.sent,e.next=12,p.a.get("/users/".concat(t.user_program.user_id));case 12:s=e.sent,t.user=s.data.data,t.user_program=r.data.data,t.user_program_posts=s.data.data.user_program_posts,t.user_program_posts.forEach((function(e){e.program_post.program_tasks.forEach((function(e){t.program_taskItems.push({id:e.id,text:e.serial_no+"-"+e.task})}))})),t.user_program_posts=s.data.data.user_program_posts,t.user_program_posts.forEach((function(e){e.program_post.program_tasks.forEach((function(e){e.id==t.form.program_task_id&&t.selectedProgramTask.push({id:e.id,text:e.serial_no+"-"+e.task})}))}));case 19:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a,r;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,p.a.get("user_programs/".concat(t.$route.params.user_program_id,"/user_program_tasks/").concat(t.$route.params.id));case 3:return a=e.sent,t.form=a.data.data,e.next=7,p.a.get("/user_programs/".concat(t.$route.params.user_program_id));case 7:r=e.sent,t.user_program=r.data.data,console.log(t.user_program),t.isLoading=!1;case 11:case"end":return e.stop()}}),e)})))()},submit:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("submit!"),t.selectedShip[0]&&(t.form.ship_id=t.selectedShip[0].id),t.selectedProgramTask[0]&&(t.form.program_task_id=t.selectedProgramTask[0].id),t.$v.$touch(),!t.$v.$invalid){e.next=8;break}t.submitStatus="ERROR",e.next=24;break;case 8:return e.prev=8,t.submitStatus="PENDING",t.isLoading=!0,e.next=13,p.a.patch("user_programs/".concat(t.form.user_program_id,"/user_program_tasks/").concat(t.$route.params.id),t.form);case 13:return e.next=15,t.handleFileUpload();case 15:t.submitStatus="OK",t.$router.push("/app/user-program/".concat(t.$route.params.user_program_id,"/user-program-tasks/")),t.isLoading=!1,e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](8),t.isLoading=!1,t.submitStatus="ERROR";case 24:case"end":return e.stop()}}),e,null,[[8,20]])})))()},handleFileUpload:function(){var t=this;return Object(o["a"])(Object(i["a"])().mark((function e(){var a,r,s,o,m,c,n,l,f,h;return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return m=null===(a=t.$refs.file1)||void 0===a?void 0:a.files[0],c=null===(r=t.$refs.file2)||void 0===r?void 0:r.files[0],n=null===(s=t.$refs.file3)||void 0===s?void 0:s.files[0],l=null===(o=t.$refs.file4)||void 0===o?void 0:o.files[0],f=t.form.id,h=new FormData,h.append("user_program_task_id",f),h.append("imagepath1",m),h.append("imagepath2",c),h.append("imagepath3",n),h.append("imagepath4",l),e.next=13,p.a.post("upload_user_program_task_images",h,{headers:{"Content-Type":"multipart/form-data"}}).catch((function(){console.log("FAILURE!!")}));case 13:case"end":return e.stop()}}),e)})))()},DeleteImage:function(t,e,a){var r=this;return Object(o["a"])(Object(i["a"])().mark((function s(){return Object(i["a"])().wrap((function(s){while(1)switch(s.prev=s.next){case 0:r.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Remove it!"}).then((function(s){s.value&&(p.a.post("user_programs/delete_image?user_program_task_id=".concat(t,"&imageField=").concat(a,"&imageName=").concat(e)),r.getData(),r.$swal("Deleted!","Your attachment has been removed.","success"))}));case 1:case"end":return s.stop()}}),s)})))()},makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},makeToastTwo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Submitted",{title:"Variant ".concat(t||"default"),variant:t,solid:!0})},inputSubmit:function(){console.log("submitted")}}},n=c,l=(a("b1f9"),a("2877")),f=Object(l["a"])(n,r,s,!1,null,null,null);e["default"]=f.exports},"99af":function(t,e,a){"use strict";var r=a("23e7"),s=a("d039"),i=a("e8b5"),o=a("861d"),m=a("7b0b"),p=a("07fa"),c=a("3511"),n=a("8418"),l=a("65f0"),f=a("1dde"),h=a("b622"),g=a("2d00"),d=h("isConcatSpreadable"),u=g>=51||!s((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),b=function(t){if(!o(t))return!1;var e=t[d];return void 0!==e?!!e:i(t)},_=!u||!f("concat");r({target:"Array",proto:!0,arity:1,forced:_},{concat:function(t){var e,a,r,s,i,o=m(this),f=l(o,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?o:arguments[e],b(i))for(s=p(i),c(h+s),a=0;a<s;a++,h++)a in i&&n(f,h,i[a]);else c(h+1),n(f,h++,i);return f.length=h,f}})},ad92:function(t,e,a){},b1f9:function(t,e,a){"use strict";a("ad92")}}]);