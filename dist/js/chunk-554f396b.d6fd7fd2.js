(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-554f396b"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"26f3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-admin-wraps layout-sidebar-large clearfix"},[e("top-nav"),e("sub-header"),e("main",[e("div",{staticClass:"main-content-wrap horizontalbar-content d-flex flex-column flex-grow-1"},[e("transition",{attrs:{name:"page",mode:"out-in"}},[e("router-view")],1),e("div",{staticClass:"flex-grow-1"}),e("appFooter")],1)])],1)},i=[],n=a("5530"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-header"},[t._m(0),e("div",{staticClass:"d-flex align-items-center"},[e("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeMegaMenu,expression:"closeMegaMenu"}],staticClass:"dropdown mega-menu d-none d-md-block",class:{show:t.isMegaMenuOpen}},[e("a",{staticClass:"btn text-muted dropdown-toggle mr-3",attrs:{href:"#",id:"dropdownMegaMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{click:t.toggleMegaMenu}},[t._v("Mega Menu")]),e("div",{staticClass:"dropdown-menu text-left",class:{show:t.isMegaMenuOpen},attrs:{"aria-labelledby":"dropdownMenuButton"}},[t._m(1)])]),e("div",{staticClass:"search-bar",on:{click:t.toggleSearch}},[e("input",{attrs:{type:"text",placeholder:"Search"}}),e("i",{staticClass:"search-icon text-muted i-Magnifi-Glass1"})])]),e("div",{staticStyle:{margin:"auto"}}),e("div",{staticClass:"header-part-right"},[e("i",{staticClass:"i-Full-Screen header-icon d-none d-sm-inline-block",on:{click:t.handleFullScreen}}),e("div",{staticClass:"dropdown"},[e("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown",text:"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[e("template",{slot:"button-content"},[e("i",{staticClass:"i-Safe-Box text-muted header-icon",attrs:{role:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),e("div",{staticClass:"menu-icon-grid"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Shop-4"}),t._v(" Home ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Library"}),t._v(" UI Kits ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Drop"}),t._v(" Apps ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-File-Clipboard-File--Text"}),t._v(" Forms ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Checked-User"}),t._v(" Sessions ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Ambulance"}),t._v(" Support ")])])],2)],1),e("div",{staticClass:"dropdown"},[e("b-dropdown",{staticClass:"m-md-2 badge-top-container",attrs:{id:"dropdown-1",text:"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[e("template",{slot:"button-content"},[e("span",{staticClass:"badge badge-primary"},[t._v("3")]),e("i",{staticClass:"i-Bell text-muted header-icon"})]),e("vue-perfect-scrollbar",{ref:"myData",staticClass:"dropdown-menu-right rtl-ps-none notification-dropdown ps scroll",class:{open:t.getSideBarToggleProperties.isSideNavOpen},attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[e("div",{staticClass:"dropdown-item d-flex"},[e("div",{staticClass:"notification-icon"},[e("i",{staticClass:"i-Speach-Bubble-6 text-primary mr-1"})]),e("div",{staticClass:"notification-details flex-grow-1"},[e("p",{staticClass:"m-0 d-flex align-items-center"},[e("span",[t._v("New message")]),e("span",{staticClass:"flex-grow-1"}),e("span",{staticClass:"text-small text-muted ml-auto"},[t._v("10 sec ago")])]),e("p",{staticClass:"text-small text-muted m-0"},[t._v(" James: Hey! are you busy? ")])])]),e("div",{staticClass:"dropdown-item d-flex"},[e("div",{staticClass:"notification-icon"},[e("i",{staticClass:"i-Receipt-3 text-success mr-1"})]),e("div",{staticClass:"notification-details flex-grow-1"},[e("p",{staticClass:"m-0 d-flex align-items-center"},[e("span",[t._v("New order received")]),e("span",{staticClass:"flex-grow-1"}),e("span",{staticClass:"text-small text-muted ml-auto"},[t._v("2 hours ago")])]),e("p",{staticClass:"text-small text-muted m-0"},[t._v("1 Headphone, 3 iPhone x")])])]),e("div",{staticClass:"dropdown-item d-flex"},[e("div",{staticClass:"notification-icon"},[e("i",{staticClass:"i-Empty-Box text-danger mr-1"})]),e("div",{staticClass:"notification-details flex-grow-1"},[e("p",{staticClass:"m-0 d-flex align-items-center"},[e("span",[t._v("Product out of stock")]),e("span",{staticClass:"flex-grow-1"}),e("span",{staticClass:"text-small text-muted ml-auto"},[t._v("10 hours ago")])]),e("p",{staticClass:"text-small text-muted m-0"},[t._v(" Headphone E67, R98, XL90, Q77 ")])])]),e("div",{staticClass:"dropdown-item d-flex"},[e("div",{staticClass:"notification-icon"},[e("i",{staticClass:"i-Data-Power text-success mr-1"})]),e("div",{staticClass:"notification-details flex-grow-1"},[e("p",{staticClass:"m-0 d-flex align-items-center"},[e("span",[t._v("Server Up!")]),e("span",{staticClass:"flex-grow-1"}),e("span",{staticClass:"text-small text-muted ml-auto"},[t._v("14 hours ago")])]),e("p",{staticClass:"text-small text-muted m-0"},[t._v(" Server rebooted successfully ")])])])])],2)],1),e("div",{staticClass:"dropdown"},[e("b-dropdown",{staticClass:"m-md-2 user col align-self-end",attrs:{id:"dropdown-1",text:"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"",variant:"link"}},[e("template",{slot:"button-content"},[e("img",{attrs:{src:a("6f92"),id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),e("div",{staticClass:"dropdown-menu-right",attrs:{"aria-labelledby":"userDropdown"}},[e("div",{staticClass:"dropdown-header"},[e("i",{staticClass:"i-Lock-User mr-1"}),t._v(" Timothy Carlson ")]),e("a",{staticClass:"dropdown-item"},[t._v("Account settings")]),e("a",{staticClass:"dropdown-item"},[t._v("Billing history")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logoutUser.apply(null,arguments)}}},[t._v("Sign out")])])],2)],1)]),e("search-component",{attrs:{isSearchOpen:t.isSearchOpen},on:{"update:isSearchOpen":function(e){t.isSearchOpen=e},"update:is-search-open":function(e){t.isSearchOpen=e},closeSearch:t.toggleSearch}})],1)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a("9d64"),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row m-0"},[e("div",{staticClass:"col-md-4 p-4 text-left bg-img"},[e("h2",{staticClass:"title"},[t._v(" Mega Menu "),e("br"),t._v("Sidebar ")]),e("p",[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores natus laboriosam fugit, consequatur. ")]),e("p",{staticClass:"mb-30"},[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem odio amet eos dolore suscipit placeat. ")]),e("button",{staticClass:"btn btn-lg btn-rounded btn-outline-warning"},[t._v(" Learn More ")])]),e("div",{staticClass:"col-md-4 p-4 text-left"},[e("p",{staticClass:"text-primary text--cap border-bottom-primary d-inline-block"},[t._v(" Features ")]),e("div",{staticClass:"menu-icon-grid w-auto p-0"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Shop-4"}),t._v(" Home ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Library"}),t._v(" UI Kits ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Drop"}),t._v(" Apps ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-File-Clipboard-File--Text"}),t._v(" Forms ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Checked-User"}),t._v(" Sessions ")]),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"i-Ambulance"}),t._v(" Support ")])])]),e("div",{staticClass:"col-md-4 p-4 text-left"},[e("p",{staticClass:"text-primary text--cap border-bottom-primary d-inline-block"},[t._v(" Components ")]),e("ul",{staticClass:"links"},[e("li",[e("a",{attrs:{href:"accordion.html"}},[t._v("Accordion")])]),e("li",[e("a",{attrs:{href:"alerts.html"}},[t._v("Alerts")])]),e("li",[e("a",{attrs:{href:"buttons.html"}},[t._v("Buttons")])]),e("li",[e("a",{attrs:{href:"badges.html"}},[t._v("Badges")])]),e("li",[e("a",{attrs:{href:"carousel.html"}},[t._v("Carousels")])]),e("li",[e("a",{attrs:{href:"lists.html"}},[t._v("Lists")])]),e("li",[e("a",{attrs:{href:"popover.html"}},[t._v("Popover")])]),e("li",[e("a",{attrs:{href:"tables.html"}},[t._v("Tables")])]),e("li",[e("a",{attrs:{href:"datatables.html"}},[t._v("Datatables")])]),e("li",[e("a",{attrs:{href:"modals.html"}},[t._v("Modals")])]),e("li",[e("a",{attrs:{href:"nouislider.html"}},[t._v("Sliders")])]),e("li",[e("a",{attrs:{href:"tabs.html"}},[t._v("Tabs")])])])])])}],l=a("ed08"),c=a("9ea9"),d=a("9029"),p=a("2f62"),u=a("c7db"),h={mixins:[u["mixin"]],components:{searchComponent:c["a"]},data:function(){return{isDisplay:!0,isStyle:!0,isSearchOpen:!1,isMouseOnMegaMenu:!0,isMegaMenuOpen:!1}},mounted:function(){},computed:Object(n["a"])({},Object(p["c"])(["getSideBarToggleProperties"])),methods:Object(n["a"])(Object(n["a"])({},Object(p["b"])(["changeSecondarySidebarProperties","changeSidebarProperties","changeThemeMode","signOut"])),{},{handleFullScreen:function(){l["a"].toggleFullScreen()},logoutUser:function(){this.signOut(),this.$router.push("/app/sessions/signIn")},closeMegaMenu:function(){this.isMegaMenuOpen=!1},toggleMegaMenu:function(){this.isMegaMenuOpen=!this.isMegaMenuOpen},toggleSearch:function(){this.isSearchOpen=!this.isSearchOpen},sideBarToggle:function(t){this.getSideBarToggleProperties.isSideNavOpen&&this.getSideBarToggleProperties.isSecondarySideNavOpen&&d["isMobile"]?(this.changeSidebarProperties(),this.changeSecondarySidebarProperties()):this.getSideBarToggleProperties.isSideNavOpen&&this.getSideBarToggleProperties.isSecondarySideNavOpen?this.changeSecondarySidebarProperties():this.getSideBarToggleProperties.isSideNavOpen?this.changeSidebarProperties():this.getSideBarToggleProperties.isSideNavOpen||this.getSideBarToggleProperties.isSecondarySideNavOpen||this.getSideBarToggleProperties.isActiveSecondarySideNav?this.getSideBarToggleProperties.isSideNavOpen||this.getSideBarToggleProperties.isSecondarySideNavOpen||(this.changeSidebarProperties(),this.changeSecondarySidebarProperties()):this.changeSidebarProperties()}})},m=h,g=a("2877"),f=Object(g["a"])(m,o,r,!1,null,null,null),v=f.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"subheader shadow-sm"},[e("div",{staticClass:"d-flex subheader-navbar"},[e("vue-navigation-bar",{attrs:{options:t.navbarOptions}})],1)])},x=[],C={data:function(){return{navbarOptions:{elementId:"main-navbar",isUsingVueRouter:!0,mobileBreakpoint:992,brandImagePath:"./",brandImageAltText:"brand-image",collapseButtonOpenColor:"#661c23",collapseButtonCloseColor:"#661c23",showBrandImageInMobilePopup:!0,ariaLabelMainNav:"Main Navigation",tooltipAnimationType:"shift-away",menuOptionsLeft:[{type:"link",text:"Dashboard",iconLeft:'<i class="nav-icon mr-2 i-Bar-Chart"></i>',subMenuOptions:[{type:"link",text:"Version 1",path:{name:"dashboard.v1"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Version 2",path:{name:"dashboard.v2"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Version 3",path:{name:"dashboard.v3"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Version 4",path:{name:"dashboard.v4"},iconLeft:'<i class=" i-Right1"></i>'}]},{type:"link",text:"Ui Kits",iconLeft:'<i class="nav-icon mr-2 i-Suitcase"></i>',subMenuOptions:[{type:"link",text:"Alerts",path:{name:"alerts"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Accordion",path:{name:"accordion"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Badges",path:{name:"badges"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Buttons",path:{name:"buttons"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Bootstrap Tab",path:{name:"bootstrap-tab"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Buttons",path:{name:"buttons"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Accordion",path:{name:"accordion"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"List",path:{name:"list"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Pagination",path:{name:"pagination"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Popover",path:{name:"popover"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Progressbar",path:{name:"progressbar"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Modals",path:{name:"modals"},iconLeft:'<i class=" i-Right1"></i>'}]},{type:"link",text:"Datatables",iconLeft:'<i class="nav-icon mr-2 i-Computer-Secure"></i>',subMenuOptions:[{type:"link",text:"Paging",path:{name:"paging"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Filter",path:{name:"filter"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"List",path:{name:"list"},iconLeft:'<i class=" i-Right1"></i>'},{type:"link",text:"Vue Good Tables",path:{name:"vue-good-table"},iconLeft:'<i class=" i-Right1"></i>'}]}]}}}},w=C,S=(a("3902"),Object(g["a"])(w,b,x,!1,null,null,null)),_=S.exports,y=a("1e5d"),k={components:{TopNav:v,SubHeader:_,appFooter:y["a"]},data:function(){return{}},computed:Object(n["a"])({},Object(p["c"])(["getSideBarToggleProperties"])),methods:{}},O=k,M=(a("7768"),Object(g["a"])(O,s,i,!1,null,null,null));e["default"]=M.exports},3902:function(t,e,a){"use strict";a("4a98")},"466d":function(t,e,a){"use strict";var s=a("c65b"),i=a("d784"),n=a("825a"),o=a("7234"),r=a("50c4"),l=a("577e"),c=a("1d80"),d=a("dc4a"),p=a("8aa5"),u=a("14c3");i("match",(function(t,e,a){return[function(e){var a=c(this),i=o(e)?void 0:d(e,t);return i?s(i,e,a):new RegExp(e)[t](l(a))},function(t){var s=n(this),i=l(t),o=a(e,s,i);if(o.done)return o.value;if(!s.global)return u(s,i);var c=s.unicode;s.lastIndex=0;var d,h=[],m=0;while(null!==(d=u(s,i))){var g=l(d[0]);h[m]=g,""===g&&(s.lastIndex=p(i,r(s.lastIndex),c)),m++}return 0===m?null:h}]}))},"4a98":function(t,e,a){},7768:function(t,e,a){"use strict";a("a461")},"841c":function(t,e,a){"use strict";var s=a("c65b"),i=a("d784"),n=a("825a"),o=a("7234"),r=a("1d80"),l=a("129f"),c=a("577e"),d=a("dc4a"),p=a("14c3");i("search",(function(t,e,a){return[function(e){var a=r(this),i=o(e)?void 0:d(e,t);return i?s(i,e,a):new RegExp(e)[t](c(a))},function(t){var s=n(this),i=c(t),o=a(e,s,i);if(o.done)return o.value;var r=s.lastIndex;l(r,0)||(s.lastIndex=0);var d=p(s,i);return l(s.lastIndex,r)||(s.lastIndex=r),null===d?-1:d.index}]}))},"9d64":function(t,e,a){t.exports=a.p+"img/logo.ee613c1b.png"},"9ea9":function(t,e,a){"use strict";a("ac1f"),a("841c");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-ui",class:{open:t.isSearchOpen}},[e("div",{staticClass:"search-header"},[e("img",{staticClass:"logo",attrs:{src:a("9d64"),alt:""}}),e("button",{staticClass:"search-close btn btn-icon bg-transparent float-right mt-2",on:{click:t.closeSearch}},[e("i",{staticClass:"i-Close-Window text-22 text-muted"})])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search-input",attrs:{type:"text",placeholder:"Type here",autofocus:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._m(0),e("vue-perfect-scrollbar",{staticClass:"search-height rtl-ps-none ps",attrs:{settings:{suppressScrollX:!0,wheelPropagation:!1}}},[e("div",{staticClass:"search-results list-horizontal"},t._l(t.filterProducts,(function(a,s){return e("router-link",{key:s,staticClass:"list-item col-md-12 p-0",attrs:{tag:"div",to:"/app/apps/product-detail"}},[e("div",{staticClass:"card o-hidden flex-row mb-30 d-flex"},[e("div",{staticClass:"list-thumb d-flex"},[e("img",{attrs:{src:a.img,alt:""}})]),e("div",{staticClass:"flex-grow-1 pl-2 d-flex"},[e("div",{staticClass:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center flex-lg-row"},[e("a",{staticClass:"w-40 w-sm-100",attrs:{href:""}},[e("div",{staticClass:"item-title"},[t._v(t._s(a.title))])]),e("p",{staticClass:"m-0 text-muted text-small w-15 w-sm-100"},[t._v("Gadget")]),e("p",{staticClass:"m-0 text-muted text-small w-15 w-sm-100"},[t._v(" $ "+t._s(a.productPrice)+" ")]),e("p",{staticClass:"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"},[e("span",{staticClass:"badge",class:a.badgeColor},[t._v(t._s(a.discount))])])])])])])})),1)])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-title"},[e("span",{staticClass:"text-muted"},[t._v("Search results")])])}],n=(a("4de4"),a("d3b7"),a("466d"),a("157e")),o={props:["isSearchOpen"],data:function(){return{issearchClose:!1,products:n["a"],search:""}},methods:{closeSearch:function(){this.$emit("closeSearch",{isSearchOpen:!1})}},computed:{filterProducts:function(){var t=this;return this.products.filter((function(e){return e.title.toLowerCase().match(t.search.toLowerCase())}))}}},r=o,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=c.exports},a461:function(t,e,a){}}]);