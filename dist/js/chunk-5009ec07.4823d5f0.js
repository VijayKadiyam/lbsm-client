(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5009ec07"],{6409:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:"OLP List",folder:"OLP"}}),t("b-card",[t("b-row",{staticClass:"col-md-12"},[t("b-col",{attrs:{md:"5"}},[t("b-form-group",{attrs:{label:"Month"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedMonth,"max-tags":1,"autocomplete-items":e.filteredMonthItems,"add-only-from-autocomplete":!0,placeholder:"Type Month Name"},on:{"tags-changed":function(t){return e.selectedMonth=t}},model:{value:e.searchMonth,callback:function(t){e.searchMonth=t},expression:"searchMonth"}})],1)],1),t("b-col",{attrs:{md:"5"}},[t("b-form-group",{attrs:{label:"Year"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedYear,"max-tags":1,"autocomplete-items":e.filteredYearItems,"add-only-from-autocomplete":!0,placeholder:"Type Year"},on:{"tags-changed":function(t){return e.selectedYear=t}},model:{value:e.searchYear,callback:function(t){e.searchYear=t},expression:"searchYear"}})],1)],1),t("b-col",{attrs:{md:"2"}},[t("b-button",{staticClass:"btn-rounded d-none d-sm-block",staticStyle:{"margin-top":"22px"},attrs:{variant:"primary"},on:{click:function(t){return e.filterVideotel()}}},[e._v("Search ")])],1)],1)],1),t("br"),t("b-card",[t("vue-good-table",{attrs:{columns:e.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},isLoading:e.isLoading,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:e.videotel_tasks},on:{"update:isLoading":function(t){e.isLoading=t},"update:is-loading":function(t){e.isLoading=t}},scopedSlots:e._u([{key:"table-row",fn:function(a){return["delete"==a.column.field?t("span",["Acting Admin"!=e.user.roles[0].name?t("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary"},on:{click:function(t){return e.deleteVideotel(a.row.id)}}},[e._v("Delete ")]):e._e()],1):e._e()]}}])},[t("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[t("b-row",["Acting Admin"!=e.user.roles[0].name?t("router-link",{attrs:{tag:"a",to:"/app/olp/upload"}},[t("i",{staticClass:"i-Upload text-25 text-success mr-2"})]):e._e(),t("b-button",{staticClass:"btn-rounded d-none d-sm-block mr-2",attrs:{variant:"primary"},on:{click:function(t){return e.$router.back()}}},[t("i",{staticClass:"i-Arrow-Back-3"}),e._v(" BACK")])],1)],1)])],1)],1)},r=[],o=a("c7eb"),s=a("1da1"),i=(a("99af"),a("4de4"),a("7db0"),a("d3b7"),a("bc3a")),c=a.n(i),l={metaInfo:{title:"Videotel Task Lits"},data:function(){return{isLoading:!1,columns:[{label:"Location",field:"ship.description"},{label:"First Name",field:"user.first_name"},{label:"Last Name",field:"user.last_name"},{label:"Crew ID",field:"user.unique_id"},{label:"Rank",field:"rank.description"},{label:"Training Title",field:"training_title"},{label:"Module",field:"module"},{label:"Type",field:"type"},{label:"Date",field:"date"},{label:"Duration",field:"duration"},{label:"Score",field:"score"},{label:"Action",field:"delete"}],videotel_tasks:[],searchMonth:"",selectedMonth:[],monthItems:[{text:"JANUARY",id:1},{text:"FEBRUARY",id:2},{text:"MARCH",id:3},{text:"APRIL",id:4},{text:"MAY",id:5},{text:"JUNE",id:6},{text:"JULY",id:7},{text:"AUGUST",id:8},{text:"SEPTEMBER",id:9},{text:"OCTOBER",id:10},{text:"NOVEMBER",id:11},{text:"DECEMBER",id:12}],searchYear:"",selectedYear:[],yearItems:[{text:"2020",id:2020},{text:"2021",id:2021},{text:"2022",id:2022}]}},computed:{filteredMonthItems:function(){var e=this;return this.monthItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchMonth.toLowerCase())}))},filteredYearItems:function(){var e=this;return this.yearItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchYear.toLowerCase())}))}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,c.a.get("videotel_tasks");case 3:a=t.sent,e.videotel_tasks=a.data.data,e.isLoading=!1;case 6:case"end":return t.stop()}}),t)})))()},deleteVideotel:function(e){var t=this;return Object(s["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value&&(c.a.post("delete_videotel_tasks/".concat(e)),t.$swal("Deleted!","Your file has been deleted.","success"),t.getData())}));case 1:case"end":return a.stop()}}),a)})))()},searchSelectedMonth:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.selectedMonth.length>0?(e.month=e.selectedMonth[0].id,e.monthdata=e.months.find((function(t){return t.id==e.month}))):(e.monthdata="",e.selectedMonth=[]);case 1:case"end":return t.stop()}}),t)})))()},searchSelectedYear:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.selectedYear.length>0?(e.year=e.selectedYear[0].id,e.yeardata=e.years.find((function(t){return t.id==e.year}))):(e.yeardata="",e.selectedYear=[]);case 1:case"end":return t.stop()}}),t)})))()},filterVideotel:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.month=e.selectedMonth[0].id,e.year=e.selectedYear[0].id,t.next=4,c.a.get("videotel_tasks?month=".concat(e.month,"&year=").concat(e.year));case 4:a=t.sent,e.videotel_tasks=a.data.data;case 6:case"end":return t.stop()}}),t)})))()}}},d=l,u=a("2877"),f=Object(u["a"])(d,n,r,!1,null,null,null);t["default"]=f.exports},"99af":function(e,t,a){"use strict";var n=a("23e7"),r=a("d039"),o=a("e8b5"),s=a("861d"),i=a("7b0b"),c=a("07fa"),l=a("3511"),d=a("8418"),u=a("65f0"),f=a("1dde"),b=a("b622"),h=a("2d00"),m=b("isConcatSpreadable"),p=h>=51||!r((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),g=f("concat"),v=function(e){if(!s(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)},x=!p||!g;n({target:"Array",proto:!0,arity:1,forced:x},{concat:function(e){var t,a,n,r,o,s=i(this),f=u(s,0),b=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?s:arguments[t],v(o))for(r=c(o),l(b+r),a=0;a<r;a++,b++)a in o&&d(f,b,o[a]);else l(b+1),d(f,b++,o);return f.length=b,f}})}}]);