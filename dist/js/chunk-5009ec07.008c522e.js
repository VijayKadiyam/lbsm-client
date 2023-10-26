(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5009ec07"],{6409:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:"OLP List",folder:"OLP"}}),e("b-card",[e("b-row",{staticClass:"col-md-12"},[e("b-col",{attrs:{md:"5"}},[e("b-form-group",{attrs:{label:"Month"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedMonth,"max-tags":1,"autocomplete-items":t.filteredMonthItems,"add-only-from-autocomplete":!0,placeholder:"Type Month Name"},on:{"tags-changed":function(e){return t.selectedMonth=e}},model:{value:t.searchMonth,callback:function(e){t.searchMonth=e},expression:"searchMonth"}})],1)],1),e("b-col",{attrs:{md:"5"}},[e("b-form-group",{attrs:{label:"Year"}},[e("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:t.selectedYear,"max-tags":1,"autocomplete-items":t.filteredYearItems,"add-only-from-autocomplete":!0,placeholder:"Type Year"},on:{"tags-changed":function(e){return t.selectedYear=e}},model:{value:t.searchYear,callback:function(e){t.searchYear=e},expression:"searchYear"}})],1)],1),e("b-col",{attrs:{md:"2"}},[e("b-button",{staticClass:"btn-rounded d-none d-sm-block",staticStyle:{"margin-top":"22px"},attrs:{variant:"primary"},on:{click:function(e){return t.filterVideotel()}}},[t._v("Search ")])],1)],1)],1),e("br"),e("b-card",[e("vue-good-table",{attrs:{columns:t.columns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},isLoading:t.isLoading,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:t.videotel_tasks},on:{"update:isLoading":function(e){t.isLoading=e},"update:is-loading":function(e){t.isLoading=e}},scopedSlots:t._u([{key:"table-row",fn:function(a){return["delete"==a.column.field?e("span",[e("b-button",{staticClass:"btn-rounded d-none d-sm-block",attrs:{variant:"primary"},on:{click:function(e){return t.deleteVideotel(a.row.id)}}},[t._v("Delete ")])],1):t._e()]}}])},[e("div",{staticClass:"mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e("b-row",[e("router-link",{attrs:{tag:"a",to:"/app/videotel-tasks/upload"}},[e("i",{staticClass:"i-Upload text-25 text-success mr-2"})]),e("b-button",{staticClass:"btn-rounded d-none d-sm-block mr-2",attrs:{variant:"primary"},on:{click:function(e){return t.$router.back()}}},[e("i",{staticClass:"i-Arrow-Back-3"}),t._v(" BACK")])],1)],1)])],1)],1)},r=[],o=a("c7eb"),s=a("1da1"),i=(a("4de4"),a("d3b7"),a("7db0"),a("99af"),a("bc3a")),c=a.n(i),l={metaInfo:{title:"Videotel Task Lits"},data:function(){return{isLoading:!1,columns:[{label:"Location",field:"ship.description"},{label:"First Name",field:"user.first_name"},{label:"Last Name",field:"user.last_name"},{label:"Crew ID",field:"user.unique_id"},{label:"Rank",field:"rank.description"},{label:"Training Title",field:"training_title"},{label:"Module",field:"module"},{label:"Type",field:"type"},{label:"Date",field:"date"},{label:"Duration",field:"duration"},{label:"Score",field:"score"},{label:"Action",field:"delete"}],videotel_tasks:[],searchMonth:"",selectedMonth:[],monthItems:[{text:"JANUARY",id:1},{text:"FEBRUARY",id:2},{text:"MARCH",id:3},{text:"APRIL",id:4},{text:"MAY",id:5},{text:"JUNE",id:6},{text:"JULY",id:7},{text:"AUGUST",id:8},{text:"SEPTEMBER",id:9},{text:"OCTOBER",id:10},{text:"NOVEMBER",id:11},{text:"DECEMBER",id:12}],searchYear:"",selectedYear:[],yearItems:[{text:"2020",id:2020},{text:"2021",id:2021},{text:"2022",id:2022}]}},computed:{filteredMonthItems:function(){var t=this;return this.monthItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchMonth.toLowerCase())}))},filteredYearItems:function(){var t=this;return this.yearItems.filter((function(e){return-1!==e.text.toLowerCase().indexOf(t.searchYear.toLowerCase())}))}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,c.a.get("videotel_tasks");case 3:a=e.sent,t.videotel_tasks=a.data.data,t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},deleteVideotel:function(t){var e=this;return Object(s["a"])(Object(o["a"])().mark((function a(){return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.value&&(c.a.post("delete_videotel_tasks/".concat(t)),e.$swal("Deleted!","Your file has been deleted.","success"),e.getData())}));case 1:case"end":return a.stop()}}),a)})))()},searchSelectedMonth:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.selectedMonth.length>0?(t.month=t.selectedMonth[0].id,t.monthdata=t.months.find((function(e){return e.id==t.month}))):(t.monthdata="",t.selectedMonth=[]);case 1:case"end":return e.stop()}}),e)})))()},searchSelectedYear:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.selectedYear.length>0?(t.year=t.selectedYear[0].id,t.yeardata=t.years.find((function(e){return e.id==t.year}))):(t.yeardata="",t.selectedYear=[]);case 1:case"end":return e.stop()}}),e)})))()},filterVideotel:function(){var t=this;return Object(s["a"])(Object(o["a"])().mark((function e(){var a;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.month=t.selectedMonth[0].id,t.year=t.selectedYear[0].id,e.next=4,c.a.get("videotel_tasks?month=".concat(t.month,"&year=").concat(t.year));case 4:a=e.sent,t.videotel_tasks=a.data.data;case 6:case"end":return e.stop()}}),e)})))()}}},d=l,u=a("2877"),f=Object(u["a"])(d,n,r,!1,null,null,null);e["default"]=f.exports},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),o=a("e8b5"),s=a("861d"),i=a("7b0b"),c=a("07fa"),l=a("3511"),d=a("8418"),u=a("65f0"),f=a("1dde"),b=a("b622"),h=a("2d00"),m=b("isConcatSpreadable"),p=h>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),v=function(t){if(!s(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},g=!p||!f("concat");n({target:"Array",proto:!0,arity:1,forced:g},{concat:function(t){var e,a,n,r,o,s=i(this),f=u(s,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?s:arguments[e],v(o))for(r=c(o),l(b+r),a=0;a<r;a++,b++)a in o&&d(f,b,o[a]);else l(b+1),d(f,b++,o);return f.length=b,f}})}}]);