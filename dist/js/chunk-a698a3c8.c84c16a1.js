(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a698a3c8"],{"5e1c":function(e,t,a){"use strict";a("ade3b")},"99af":function(e,t,a){"use strict";var r=a("23e7"),s=a("d039"),o=a("e8b5"),i=a("861d"),n=a("7b0b"),c=a("07fa"),l=a("3511"),d=a("8418"),p=a("65f0"),m=a("1dde"),u=a("b622"),f=a("2d00"),_=u("isConcatSpreadable"),h=f>=51||!s((function(){var e=[];return e[_]=!1,e.concat()[0]!==e})),b=function(e){if(!i(e))return!1;var t=e[_];return void 0!==t?!!t:o(e)},k=!h||!m("concat");r({target:"Array",proto:!0,arity:1,forced:k},{concat:function(e){var t,a,r,s,o,i=n(this),m=p(i,0),u=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],b(o))for(s=c(o),l(u+s),a=0;a<s;a++,u++)a in o&&d(m,u,o[a]);else l(u+1),d(m,u++,o);return m.length=u,m}})},"9ca9":function(e,t,a){"use strict";a.r(t),a.d(t,"multipleBar2",(function(){return _}));a("a4d3"),a("e01a"),a("99af"),a("fb6a");var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("b-row",[t("b-col",{staticClass:"mb-30",attrs:{md:"12"}},[t("b-card",{staticClass:"h-100"},[t("div",{staticClass:"p-4 rounded text-white",staticStyle:{"background-color":"lightgray"}},[t("h2",{staticClass:"text-40 mb-1 text-black text-center"},[e._v(" Competency Management System ")])])])],1)],1),t("b-card",[t("b-row",[t("b-col",{attrs:{md:"4"}},[t("b-form-group",{attrs:{label:"Period"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedPeriod,"autocomplete-items":e.filteredPeriodItems,"add-only-from-autocomplete":!0,placeholder:"Type Period"},on:{"tags-changed":function(t){return e.selectedPeriod=t}},model:{value:e.searchPeriod,callback:function(t){e.searchPeriod=t},expression:"searchPeriod"}})],1)],1),t("b-col",{attrs:{md:"3"}},[t("b-form-group",{attrs:{label:"From Date"}},[t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"from_date",placeholder:"From Date"},on:{change:function(t){return e.clearFilter()}},model:{value:e.from_date,callback:function(t){e.from_date=t},expression:"from_date"}})],1)],1),t("b-col",{attrs:{md:"3"}},[t("b-form-group",{attrs:{label:"To Date"}},[t("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"to_date",placeholder:"To Date"},model:{value:e.to_date,callback:function(t){e.to_date=t},expression:"to_date"}})],1)],1),t("b-col",{attrs:{md:"2"}},[t("br"),t("b-button",{attrs:{variant:"primary"},on:{click:e.kpiData}},[e._v(" Search ")]),t("br"),e.searchingStatus?t("div",{staticClass:"spinner spinner-primary mr-3",staticStyle:{float:"right","margin-top":"-40px"}}):e._e()],1)],1),t("b-row",[t("b-col",{attrs:{md:"2",lg:"2",sm:"2"}}),t("b-col",{attrs:{md:"4",lg:"4",sm:"4"}},[t("b-card",{staticClass:"mb-30",staticStyle:{height:"310px"},attrs:{title:"CPP TASKS KPI"}},[t("h3",[e._v(" "+e._s(e.total_kpi_CPP+"/"+e.cpp_out_of)+" "),e.kpi_CPP>20?t("i",{staticClass:"text-25 i-Up",staticStyle:{color:"Green"}}):t("i",{staticClass:"text-25 i-Down",staticStyle:{color:"orange"}})]),t("h4",[e._v(e._s(e.kpi_CPP)+"%")]),t("center",[t("div",[t("vue-gauge",{attrs:{id:"cpp-graph",options:e.CPPtest.options}})],1)])],1)],1),t("b-col",{attrs:{md:"4",lg:"4",sm:"4"}},[t("b-card",{staticClass:"mb-30",staticStyle:{height:"310px"},attrs:{title:"OLP"}},[t("h3",[e._v(" "+e._s(e.total_kpi_karco_tasks+"/"+e.karco_videotel_out_of)+" "),e.kpi_karco_tasks>100?t("i",{staticClass:"text-25 i-Up",staticStyle:{color:"Green"}}):t("i",{staticClass:"text-25 i-Down",staticStyle:{color:"orange"}})]),t("h4",[e._v(e._s(e.kpi_karco_tasks)+"%")]),t("center",[t("div",[t("vue-gauge",{attrs:{id:"karco-graph",options:e.KARCOtest.options}})],1)])],1)],1),t("b-col",{attrs:{md:"2",lg:"2",sm:"2"}})],1)],1),t("br"),t("b-row",[t("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[t("b-card",{staticClass:"mb-30",attrs:{title:"Users management"}},[t("b-row",[t("b-col",{attrs:{lg:"4",md:"6",sm:"6"}},[t("b-card",{staticClass:"card-icon text-center mb-30"},[t("i",{staticClass:"i-Data-Upload"}),t("p",{staticClass:"text-muted mt-2 mb-2"},[e._v(" Total Programs Running "),t("br")]),t("p",{staticClass:"text-primary text-24 line-height-1 m-0"},[e._v(" "+e._s(e.program_count||0)+" ")])])],1),t("b-col",{attrs:{lg:"4",md:"6",sm:"6"}},[t("b-card",{staticClass:"card-icon text-center mb-30"},[t("i",{staticClass:"i-Gear"}),t("p",{staticClass:"text-muted mt-2 mb-2"},[e._v("Total Tasks Completed")]),t("p",{staticClass:"text-primary text-24 line-height-1 m-0"},[e._v(" "+e._s(e.total_task_completed||0)+" ")])])],1),t("b-col",{attrs:{lg:"4",md:"6",sm:"6"}},[t("b-card",{staticClass:"card-icon text-center mb-30"},[t("i",{staticClass:"i-Bell"}),t("p",{staticClass:"text-muted mt-2 mb-2"},[e._v("Inactive Users")]),t("p",{staticClass:"text-primary text-24 line-height-1 m-0"},[e._v(" "+e._s(e.inActive_user||0)+" ")])])],1)],1),t("b-row",[t("b-col",{attrs:{md:"1"}}),e._l(e.userRankCount,(function(a,r){return t("b-col",{key:"user".concat(r),attrs:{md:"6",sm:"6",lg:"2"}},[r<=5&&"Chief Engineer"!=a.rank?t("b-card",{staticClass:"card-icon-big text-center mb-30"},[t("i",{staticClass:"i-Add-User"}),"Forth Engineer"==a.rank?t("p",{staticClass:"text-muted mt-2 mb-2"},[e._v(" "+e._s("Fourth Engineers")+" ")]):t("p",{staticClass:"text-muted mt-2 mb-2"},[e._v(" "+e._s(a.rank+"s")+" ")]),t("p",{staticClass:"line-height-1 text-title text-18 mt-2 mb-0"},[e._v(" "+e._s(a.userCount||0)+" ")])]):e._e()],1)})),t("b-col",{attrs:{md:"1"}})],2),t("b-row",e._l(e.userRankCount,(function(a,r){return t("b-col",{key:"user".concat(r),attrs:{md:"6",sm:"6",lg:"4"}},[r>5?t("b-card",{staticClass:"card-icon-big text-center mb-30"},[t("i",{staticClass:"i-Add-User"}),t("p",{staticClass:"text-muted mt-2 mb-2"},[e._v(" "+e._s(a.rank+"s")+" ")]),t("p",{staticClass:"line-height-1 text-title text-18 mt-2 mb-0"},[e._v(" "+e._s(a.userCount||0)+" ")])]):e._e()],1)})),1)],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"12",lg:"12"}},[t("b-card",{staticClass:"mb-30",attrs:{title:"Total Tasks Performed (".concat(e.year,")")}},[t("b-row",[t("b-col",{attrs:{md:"12",lg:"6",sm:"6"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedShip,"autocomplete-items":e.filteredShipItems,"add-only-from-autocomplete":!0,placeholder:"Type Ship Name"},on:{"tags-changed":function(t){return e.selectedShip=t}},model:{value:e.searchShip,callback:function(t){e.searchShip=t},expression:"searchShip"}})],1),t("b-col",{attrs:{md:"12",lg:"6",sm:"6"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedRank,"autocomplete-items":e.filteredRankItems,"add-only-from-autocomplete":!0,"max-tags":1,placeholder:"Type Rank Name"},on:{"tags-changed":function(t){return e.selectedRank=t}},model:{value:e.searchRank,callback:function(t){e.searchRank=t},expression:"searchRank"}})],1)],1),t("div",{staticClass:"chart-wrapper",staticStyle:{height:"300px"}},[t("v-chart",{attrs:{options:e.multipleBar2,autoresize:!0}})],1)],1)],1)],1),t("b-row",[t("b-col",{attrs:{md:"12",lg:"12"}},[t("b-card",[t("h5",{staticClass:"card-title border-bottom p-3 mb-2"},[e._v(" Top Performers Based on "+e._s(e.filter_type)+" ")]),t("vue-good-table",{attrs:{columns:e.TopPerformercolumns,"line-numbers":!0,"search-options":{enabled:!0,placeholder:"Search this table"},isLoading:e.isLoading,"pagination-options":{enabled:!0,mode:"records"},styleClass:"tableOne vgt-table",rows:e.top_performers},on:{"update:isLoading":function(t){e.isLoading=t},"update:is-loading":function(t){e.isLoading=t}},scopedSlots:e._u([{key:"table-row",fn:function(a){return["gender"==a.column.field?t("span",[e._v(" "+e._s(0==a.row.gender?"Male":"Female")+" ")]):e._e(),"first_name"==a.column.field&&a.row.first_name?t("span",[e._v(" "+e._s(a.row.first_name?a.row.first_name.toUpperCase():"")+" ")]):e._e(),"last_name"==a.column.field&&a.row.last_name?t("span",[e._v(" "+e._s(a.row.last_name?a.row.last_name.toUpperCase():"")+" ")]):e._e(),"rank"==a.column.field&&a.row.rank?t("span",[e._v(" "+e._s(a.row.rank?a.row.rank.description.toUpperCase():"")+" ")]):e._e(),"nationality"==a.column.field&&a.row.nationality?t("span",[e._v(" "+e._s(a.row.nationality?a.row.nationality.toUpperCase():"")+" ")]):e._e(),"unique_id"==a.column.field&&a.row.unique_id?t("span",[e._v(" "+e._s(a.row.unique_id?a.row.unique_id:"")+" ")]):e._e(),"email"==a.column.field&&a.row.email?t("span",[e._v(" "+e._s(a.row.email?a.row.email.toUpperCase():"")+" ")]):e._e(),"average"==a.column.field&&a.row.average?t("span",[e._v(" "+e._s(a.row.average?a.row.average:"")+" ")]):e._e(),"task_perfomed"==a.column.field&&a.row.task_perfomed?t("span",[e._v(" "+e._s(a.row.task_perfomed?a.row.task_perfomed:"")+" ")]):e._e()]}}])},[t("div",{staticClass:"mb-3 mr-48",attrs:{slot:"table-actions"},slot:"table-actions"},[t("b-row",{staticClass:"mr-12",attrs:{id:"act"}},[t("b-col",{attrs:{md:"6"}},[t("span",[e._v("Mark")]),t("label",{staticClass:"switch switch-success mr-1 ml-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"checkbox",checked:"checkbox"},domProps:{checked:Array.isArray(e.type)?e._i(e.type,null)>-1:e.type},on:{change:function(t){var a=e.type,r=t.target,s=!!r.checked;if(Array.isArray(a)){var o=null,i=e._i(a,o);r.checked?i<0&&(e.type=a.concat([o])):i>-1&&(e.type=a.slice(0,i).concat(a.slice(i+1)))}else e.type=s}}}),t("span",{staticClass:"slider"})]),t("span",[e._v("Task")])]),t("b-col",{attrs:{md:"6"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedTopPerformerRank,"autocomplete-items":e.filteredRankItems,"add-only-from-autocomplete":!0,"max-tags":1,placeholder:"Type Rank Name"},on:{"tags-changed":function(t){return e.selectedTopPerformerRank=t}},model:{value:e.searchRank,callback:function(t){e.searchRank=t},expression:"searchRank"}})],1),t("b-col",{attrs:{md:"6"}},[t("vue-tags-input",{staticClass:"tag-custom text-15 mb-2",attrs:{tags:e.selectedYear,"autocomplete-items":e.filteredYearItems,"add-only-from-autocomplete":!0,"max-tags":1,placeholder:"Select Year"},on:{"tags-changed":function(t){return e.selectedYear=t}},model:{value:e.searchYear,callback:function(t){e.searchYear=t},expression:"searchYear"}})],1)],1)],1)])],1)],1)],1)],1)},s=[],o=a("c7eb"),i=a("1da1"),n=a("ade3"),c=(a("d3b7"),a("159b"),a("4e82"),a("4de4"),a("bc3a")),l=a.n(c),d=a("c1df"),p=a.n(d),m=a("9dd3"),u={props:{title:{type:String,default:"Awesome Wizard"}},data:function(){var e;return e={isLoading:!1,searchingStatus:!1,multipleBar2:_,CPPtest:{options:{chartWidth:320,hasNeedle:!0,needleColor:"black",needleStartValue:0,needleUpdateSpeed:5,arcColors:["orange","green"],arcDelimiters:[12.5],rangeLabel:["0","160"]}},KARCOtest:{options:{chartWidth:320,hasNeedle:!0,needleColor:"black",needleStartValue:0,needleUpdateSpeed:5,arcColors:["orange","green"],arcDelimiters:[33.33],rangeLabel:["0","900"]}},VIDEOTELtest:{options:{chartWidth:320,hasNeedle:!0,needleColor:"black",needleStartValue:0,needleUpdateSpeed:5,arcColors:["orange","green"],arcDelimiters:[33.33],rangeLabel:["0","900"]}},type:0,total_kpi_CPP:0,cpp_out_of:0,karco_videotel_out_of:0,test:0,total_kpi_karco_tasks:0,total_kpi_videotel_tasks:0,kpi_CPP:0,kpi_karco_tasks:0,kpi_videotel_tasks:0,program_count:"",inActive_user:"",total_task_completed:"",userCounts:[],ttp:[],ships:[],userRankCount:[],rank:"",year:"",top_performers:[],top_performers_by_average:[],top_performers_by_task:[],total_tasks_performed:[],form:{year:""},from_date:"",to_date:"",years:[{value:"2020",text:"2020"},{value:"2021",text:"2021"},{value:"2022",text:"2022"},{value:"2023",text:"2023"},{value:"2024",text:"2024"},{value:"2025",text:"2025"}],searchShip:"",selectedShip:[],shipItems:[],searchPeriod:"",selectedPeriod:[]},Object(n["a"])(e,"selectedPeriod",[]),Object(n["a"])(e,"periodItems",[{id:"30",text:"1 Month"},{id:"90",text:"3 Month"},{id:"180",text:"6 Month"},{id:"365",text:"12 Month"},{id:"730",text:"24 Month"}]),Object(n["a"])(e,"searchRank",""),Object(n["a"])(e,"searchYear",""),Object(n["a"])(e,"selectedRank",[]),Object(n["a"])(e,"selectedYear",[]),Object(n["a"])(e,"selectedTopPerformerByAverageRank",[]),Object(n["a"])(e,"selectedTopPerformerByTaskRank",[]),Object(n["a"])(e,"selectedTopPerformerRank",[]),Object(n["a"])(e,"rankItems",[]),Object(n["a"])(e,"filter_type","Marks"),Object(n["a"])(e,"TopPerformerByAveragecolumns",[{label:"First Name",field:"first_name"},{label:"Last Name",field:"last_name"},{label:"Rank",field:"rank"},{label:"Nationality",field:"nationality"},{label:"Danos ID",field:"unique_id"},{label:"Gender",field:"gender"},{label:"Email",field:"email"},{label:"Average",field:"average"}]),Object(n["a"])(e,"TopPerformerByTaskcolumns",[{label:"First Name",field:"first_name"},{label:"Last Name",field:"last_name"},{label:"Rank",field:"rank"},{label:"Nationality",field:"nationality"},{label:"Danos ID",field:"unique_id"},{label:"Gender",field:"gender"},{label:"Email",field:"email"},{label:"Tasks Performed",field:"task_perfomed"}]),Object(n["a"])(e,"TopPerformercolumns",[{label:"First Name",field:"first_name"},{label:"Last Name",field:"last_name"},{label:"Rank",field:"rank"},{label:"Nationality",field:"nationality"},{label:"Danos ID",field:"unique_id"},{label:"Gender",field:"gender"},{label:"Email",field:"email"},{label:"Average",field:"average"},{label:"Tasks Performed",field:"task_perfomed"}]),Object(n["a"])(e,"cppGauge",null),Object(n["a"])(e,"karcoGauge",null),e},watch:{selectedShip:"getTotalTaskPerformed",selectedRank:"getTotalTaskPerformed",selectedTopPerformerByAverageRank:"getTopPerformers_by_Average",selectedTopPerformerByTaskRank:"getTopPerformers_by_Task",selectedTopPerformerRank:"getTopPerformers",selectedYear:"getTopPerformers",type:"getTopPerformers",selectedPeriod:"clearDateFilter",from_date:"clearPeriodFilter",to_date:"clearPeriodFilter"},mounted:function(){this.year=p()().year(),this.getData(this.year),this.getMasters(),this.kpiData(),this.selectedPeriod.push({id:"90",text:"3 Month"}),this.selectedYear.push({id:this.year,text:this.year}),this.cppGauge=m.gaugeChart(document.querySelector("#cpp-graph"),320,this.CPPtest.options),this.karcoGauge=m.gaugeChart(document.querySelector("#karco-graph"),320,this.KARCOtest.options)},methods:{clearPeriodFilter:function(){this.selectedPeriod=[],this.period=""},clearDateFilter:function(){this.selectedPeriod[0]&&(this.period=this.selectedPeriod[0]?this.selectedPeriod[0].id:"",this.from_date="",this.to_date="")},getData:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r,s,i,n,c,d,p;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.year=e,t.isLoading=!0,a.next=4,l.a.get("/user_counts?year=".concat(e));case 4:r=a.sent,t.userCounts=r.data.data,t.program_count=r.data.program_count,t.inActive_user=r.data.inActive_user,t.total_task_completed=r.data.total_task_completed,s=0,i=0,n={},c=0,d=0,p={},t.userCounts.forEach((function(e){if(null!=e.rank&&""!=e.rank&&"ETO"!=e.rank&&"Master"!=e.rank){var a=e.rank;switch(a){case"Deck Cadet":e.id=1;break;case"Engine Cadet":e.id=2;break;case"Third Officer A":s=e.userCount;break;case"Third Officer B":i=e.userCount;break;case"Fourth Engineer A":c=e.userCount;break;case"Second Engineer":e.id=5;break;case"Fourth Engineer B":d=e.userCount;break;case"Chief Engineer":e.id=6;break;case"Third Engineer":e.id=4;break;case"Second Officer":e.id=8;break;case"Chief Officer":e.id=9;break;default:console.log("Try looking up for a hint.")}e.id&&t.userRankCount.push(e)}})),n={id:7,rank:"Third Officer",userCount:s+i},t.userRankCount.push(n),p={id:3,rank:"Forth Engineer",userCount:c+d},t.userRankCount.push(p),t.userRankCount.sort((function(e,t){return e.id-t.id})),t.getTotalTaskPerformed(),t.getTopPerformers(),t.isLoading=!1;case 24:case"end":return a.stop()}}),a)})))()},getTopPerformers_by_Average:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,a=e.selectedTopPerformerByAverageRank[0]?e.selectedTopPerformerByAverageRank[0].id:"",t.next=4,l.a.get("/top_performers_by_average?year=".concat(e.year,"&rank=").concat(a));case 4:r=t.sent,e.top_performers_by_average=r.data.data,e.isLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},getTopPerformers_by_Task:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r,s;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,a=e.selectedTopPerformerByTaskRank[0]?e.selectedTopPerformerByTaskRank[0].id:"",r=e.selectedYear[0]?e.selectedYear[0].id:"",t.next=5,l.a.get("/top_performers_by_task?year=".concat(r,"&rank=").concat(a));case 5:s=t.sent,e.top_performers_by_task=s.data.data,e.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},getTopPerformers:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r,s;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,a=e.selectedTopPerformerRank[0]?e.selectedTopPerformerRank[0].id:"",r=e.selectedYear[0]?e.selectedYear[0].text:e.year,console.log(r),t.next=6,l.a.get("/top_performers?year=".concat(r,"&rank=").concat(a,"&type=").concat(e.type));case 6:s=t.sent,e.top_performers=s.data.data,e.filter_type=s.data.filter_type,e.isLoading=!1;case 10:case"end":return t.stop()}}),t)})))()},getTotalTaskPerformed:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,e.rank=e.selectedRank[0]?e.selectedRank[0].id:"",e.ships=[],e.selectedShip.forEach((function(t){e.ships.push(t.id)})),t.next=6,l.a.get("/total_tasks_performed?year=".concat(e.year,"&ship=").concat(e.ships,"&rank=").concat(e.rank));case 6:a=t.sent,e.total_tasks_performed=a.data.data,_.series[0].data=[],e.total_tasks_performed.forEach((function(e){_.series[0].data.push(e)})),e.total_karco_tasks_performed=a.data.total_karco_tasks_performed,_.series[1].data=[],e.total_karco_tasks_performed.forEach((function(e){_.series[1].data.push(e)})),e.total_videotel_tasks_performed=a.data.total_videotel_tasks_performed,_.series[2].data=[],e.total_videotel_tasks_performed.forEach((function(e){_.series[2].data.push(e)})),e.ttp=[],e.month=[],e.total_tasks_performed.forEach((function(t){e.ttp.push(t)})),e.isLoading=!1;case 20:case"end":return t.stop()}}),t)})))()},getMasters:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("analytics/masters");case 2:a=t.sent,a=a.data,a.ships.forEach((function(t){e.shipItems.push({id:t.id,text:t.description})})),a.posts.forEach((function(t){e.rankItems.push({id:t.id,text:t.description})}));case 6:case"end":return t.stop()}}),t)})))()},kpiData:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r,s,i,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.searchingStatus=!0,e.period="90",t.next=4,l.a.get("/kpi_data?year=".concat(e.year,"&from_date=").concat(e.from_date,"&to_date=").concat(e.to_date,"&period=").concat(e.period));case 4:a=t.sent,e.kpi_CPP=a.data.kpi_CPP_percentage,e.kpi_karco_tasks=a.data.kpi_karco_tasks_percentage,e.kpi_videotel_tasks=a.data.kpi_videotel_tasks_percentage,e.total_kpi_CPP=a.data.kpi_CPP,e.total_kpi_karco_tasks=a.data.kpi_karco_tasks,e.total_kpi_videotel_tasks=a.data.kpi_videotel_tasks,e.cpp_out_of=a.data.cpp_out_of,e.karco_videotel_out_of=a.data.karco_videotel_out_of,e.cppGauge.removeGauge(),r=3*e.cpp_out_of,e.CPPtest.options.arcDelimiters=[33.33],e.CPPtest.options.rangeLabel=["0",""+r],e.cppGauge=m.gaugeChart(document.querySelector("#cpp-graph"),320,e.CPPtest.options),s=e.total_kpi_CPP/r*100,e.cppGauge.updateNeedle(s),e.karcoGauge.removeGauge(),i=3*e.karco_videotel_out_of,e.KARCOtest.options.arcDelimiters=[33.33],e.KARCOtest.options.rangeLabel=["0",""+i],e.karcoGauge=m.gaugeChart(document.querySelector("#karco-graph"),320,e.KARCOtest.options),n=e.total_kpi_karco_tasks/i*100,e.karcoGauge.updateNeedle(n),e.searchingStatus=!1;case 28:case"end":return t.stop()}}),t)})))()}},computed:{filteredShipItems:function(){var e=this;return this.shipItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchShip.toLowerCase())}))},filteredRankItems:function(){var e=this;return this.rankItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchRank.toLowerCase())}))},filteredYearItems:function(){var e=this;return this.years.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchYear.toLowerCase())}))},filteredPeriodItems:function(){var e=this;return this.periodItems.filter((function(t){return-1!==t.text.toLowerCase().indexOf(e.searchPeriod.toLowerCase())}))}}},f="#c2c6dc",_={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"8%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value",min:0,max:500,interval:100,axisLabel:{formatter:"{value}",color:f,fontSize:12,fontStyle:"normal",fontWeight:400},axisLine:{show:!1,lineStyle:{color:f,width:1}},axisTick:{show:!1,lineStyle:{color:f,width:1}},splitLine:{lineStyle:{color:"#ddd",width:1,opacity:.5}}},xAxis:{type:"category",boundaryGap:!0,data:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],axisLabel:{formatter:"{value}",color:f,fontSize:12,fontStyle:"normal",fontWeight:400},axisLine:{show:!1,lineStyle:{color:f,width:1}},axisTick:{show:!1,lineStyle:{color:f,width:1}},splitLine:{show:!1,lineStyle:{color:f,width:1}}},series:[{color:"#3182bd",name:"CPP",type:"bar",barGap:0,label:{normal:{show:!1,position:"insideBottom",distance:5,align:"left",verticalAlign:"middle",rotate:90,formatter:"{c}  {name|{a}}",fontSize:14,fontWeight:"bold",rich:{name:{color:"#fff"}}}},data:[]},{color:"#74c475",name:"KARCO",type:"bar",label:{normal:{show:!1,position:"insideBottom",distance:5,align:"left",verticalAlign:"middle",rotate:90,formatter:"{c}  {name|{a}}",fontSize:14,fontWeight:"bold",rich:{name:{color:"#fff"}}}},data:[]},{color:"#e6550d",name:"Videotel",type:"bar",label:{normal:{show:!1,position:"insideBottom",distance:5,align:"left",verticalAlign:"middle",rotate:90,formatter:"{c}  {name|{a}}",fontSize:14,fontWeight:"bold",rich:{name:{color:"#fff"}}}},data:[]}]},h=u,b=(a("5e1c"),a("2877")),k=Object(b["a"])(h,r,s,!1,null,null,null);t["default"]=k.exports},ade3b:function(e,t,a){}}]);