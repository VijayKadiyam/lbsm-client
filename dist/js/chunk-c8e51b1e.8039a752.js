(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c8e51b1e"],{"14eb":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:"Upload OLP",folder:"OLP"}}),t("b-row",{staticClass:"justify-content-md-center"},[t("b-col",{attrs:{md:"12"}},[t("b-card",{staticClass:"mb-4"},[t("b-row",[t("b-col",{attrs:{md:"12"}},[t("a",{attrs:{href:"".concat(e.mediaUrl,"samples/VideotelTask-sample-data.xlsx"),target:"_blank"}},[e._v(" [ Download Sample Excel ] ")]),t("br"),t("input",{ref:"file",staticClass:"mb-2",attrs:{type:"file",id:"file",name:"file",accept:"application/ms-excel"}}),t("br"),t("b-button",{staticClass:"btn d-none d-sm-block",attrs:{variant:"primary"},on:{click:e.truncatePendingDocuments}},[t("i",{staticClass:"i-Delete-File text-white mr-2"}),e._v("Truncate List ")])],1)],1),t("b-row",[t("b-col",{attrs:{md:"12"}},[t("br"),t("br"),t("span",{staticStyle:{color:"red"}},[e._v(" "+e._s(e.message)+" ")]),e.isLoading?t("b-progress",{staticClass:"mb-2",attrs:{value:e.changeValue,max:e.max,animated:""}}):e._e(),0==e.crudeVideotelTasks.length?t("b-button",{attrs:{block:"",variant:"primary"},on:{click:e.handleFileUpload}},[e._v("Upload file")]):t("b-button",{attrs:{block:"",variant:"primary"},on:{click:e.processFile}},[e._v("Process file")])],1)],1)],1)],1)],1),t("b-row",{staticClass:"justify-content-md-center"},[t("b-col",{attrs:{md:"12"}},[t("b-card",[t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:e.crudeVideotelTasks}})],1)],1)],1)],1)},n=[],i=a("c7eb"),l=a("1da1"),c=a("bc3a"),r=a.n(c),o={metaInfo:{title:"Upload OLP Excel"},data:function(){return{form:{},crudeVideotelTasks:[],isLoading:!1,columns:[{label:"Location",field:"location"},{label:"First Name",field:"first_name"},{label:"Last Name",field:"last_name"},{label:"Crew ID",field:"crew_id"},{label:"Rank",field:"rank"},{label:"Training Title",field:"training_title"},{label:"Module",field:"module"},{label:"Type",field:"type"},{label:"Date",field:"date"},{label:"Duration",field:"duration"},{label:"Score",field:"score"}],searchingStatus:"",changeValue:0,changeMax:100,submitStatus:null}},mounted:function(){this.form.site_id=this.site.id,this.getData()},methods:{getData:function(){var e=arguments,t=this;return Object(l["a"])(Object(i["a"])().mark((function a(){var s,n;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:1,t.isLoading=!0,t.searchingStatus="Searching...",t.changeValue=100,a.next=6,r.a.get("/crude_videotel_tasks");case 6:n=a.sent,t.crudeVideotelTasks=n.data.data,t.count=n.data.count,t.serialNoStarting=(s-1)*t.rowsPerPage,t.isLoading=!1,t.searchingStatus="";case 12:case"end":return a.stop()}}),a)})))()},handleFileUpload:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){var a;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.VideotelTasks=e.$refs.file.files[0],a=new FormData,a.append("videoteltasksData",e.VideotelTasks),e.changeValue=100,t.next=7,r.a.post("upload_videotel_task",a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){t.data.data&&(e.crudeVideotelTasks=t.data.data),e.isLoading=!1,e.$swal("Done","Uploaded Successfully.","success")})).catch((function(){console.log("FAILURE!!")}));case 7:e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},processFile:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.changeValue=100,t.next=5,r.a.get("process_videotel_task?is_existing_batch=".concat(e.form.is_existing_batch?1:0));case 5:return e.$swal("Done","Processed Successfully.","success"),t.next=8,r.a.get("truncate_videotel_tasks");case 8:e.crudeVideotelTasks=[],e.isLoading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},truncatePendingDocuments:function(){var e=this;return Object(l["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("truncate_videotel_tasks");case 2:e.$swal("Done","Truncated Successfully.","success"),e.crudeVideotelTasks=[];case 4:case"end":return t.stop()}}),t)})))()},makeToast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Please fill the form correctly.",{title:"Variant ".concat(e||"default"),variant:e,solid:!0})},makeToastTwo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Successfully Submitted",{title:"Variant ".concat(e||"default"),variant:e,solid:!0})},inputSubmit:function(){console.log("submitted")}}},d=o,u=(a("e852"),a("2877")),b=Object(u["a"])(d,s,n,!1,null,null,null);t["default"]=b.exports},"8dd0":function(e,t,a){},e852:function(e,t,a){"use strict";a("8dd0")}}]);