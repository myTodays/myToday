(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a14ad252"],{"350c":function(t,e,s){},"38e4":function(t,e,s){"use strict";s("a787")},"41cf":function(t,e,s){t.exports=s.p+"static/img/logo.ecba1844.gif"},5068:function(t,e,s){"use strict";s("350c")},5536:function(t,e,s){},a1c3:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("v-head"),s("v-sidebar"),s("div",{staticClass:"content-box",class:{"content-collapse":t.collapse}},[s("v-tags"),s("div",{staticClass:"content"},[s("transition",{attrs:{name:"move",mode:"out-in"}},[s("keep-alive",{attrs:{include:t.tagsList}},[s("router-view")],1)],1),s("el-backtop",{attrs:{target:".content"}})],1)],1)],1)},i=[],l=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"left"},[s("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[t.collapse?s("i",{staticClass:"el-icon-s-unfold"}):s("i",{staticClass:"el-icon-s-fold"})]),s("div",{staticClass:"logo"},[t._v("Hi "+t._s(t.username)+"~")])]),s("div",{staticClass:"header-right"},[s("div",{staticClass:"header-user-con"},[s("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[s("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[s("i",{staticClass:"el-icon-rank"})])],1),s("div",{staticClass:"btn-bell"},[s("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[s("router-link",{attrs:{to:"/tabs"}},[s("i",{staticClass:"el-icon-bell"})])],1)],1),t._m(0),s("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+"\n                    "),s("i",{staticClass:"el-icon-caret-bottom"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("a",{attrs:{href:"http://m.melikui.com",target:"_blank"}},[s("el-dropdown-item",[t._v("官网首页")])],1),s("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v("退出登录")])],1)],1)],1)])])}),a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:s("41cf")}})])}],o=(s("1c01"),s("58b2"),s("8e6e"),s("f3e2"),s("d25f"),s("ac6a"),s("456d"),s("bd86")),c=s("2b0e"),r=new c["default"],u=r,d=s("2f62");function m(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?m(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={data:function(){return{collapse:!1,fullscreen:!1,name:"myToday",message:2}},computed:{username:function(){var t=JSON.parse(localStorage.getItem("user_info")).username;return t||this.name}},methods:h(h({},Object(d["b"])(["logout"])),{},{handleCommand:function(t){"logout"==t&&(this.logout(),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,u.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}),mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},f=p,g=(s("e47e"),s("2877")),v=Object(g["a"])(f,l,a,!1,null,"a09d17f0",null),b=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar"},[s("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#383838","text-color":"#ddd","active-text-color":"#66B1FF","unique-opened":"",router:""}},[t._l(t.items,(function(e){return[e.subs?[s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._l(e.subs,(function(e){return[e.subs?s("el-submenu",{key:e.index,attrs:{index:e.index}},[s("template",{slot:"title"},[t._v(t._s(e.title))]),t._l(e.subs,(function(e,n){return s("el-menu-item",{key:n,attrs:{index:e.index}},[t._v(t._s(e.title))])}))],2):s("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v(t._s(e.title))])]}))],2)]:[s("el-menu-item",{key:e.index,attrs:{index:e.index}},[s("i",{class:e.icon}),s("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]}))],2)],1)},x=[],w=(s("a481"),{data:function(){return{collapse:!1,items:[{icon:"el-icon-lx-home",index:"dashboard",title:"系统首页"},{icon:"el-icon-user",index:"users",title:"会员管理"},{icon:"el-icon-date",index:"daily",title:"日报管理"},{icon:"el-icon-notebook-2",index:"project",title:"项目管理",subs:[{index:"project",title:"全部项目"},{index:"addproject",title:"添加项目"}]},{icon:"el-icon-document",index:"article",title:"文章管理",subs:[{index:"articles",title:"全部文章"},{index:"addarticle",title:"添加文章"}]},{icon:"el-icon-message",index:"messages",title:"留言管理"},{icon:"el-icon-setting",index:"setting",title:"网站设置"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;u.$on("collapse",(function(e){t.collapse=e,u.$emit("collapse-content",e)}))}}),C=w,k=(s("38e4"),Object(g["a"])(C,_,x,!1,null,"4e33e8d6",null)),O=k.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showTags?s("div",{staticClass:"tags"},[s("ul",t._l(t.tagsList,(function(e,n){return s("li",{key:n,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[s("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),s("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(n)}}},[s("i",{staticClass:"el-icon-close"})])],1)})),0),s("div",{staticClass:"tags-close-box"},[s("el-dropdown",{on:{command:t.handleTags}},[s("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),s("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},y=[],L=(s("759f"),{data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.tagsList=e},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));e||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),u.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),u.$on("close_current_tags",(function(){for(var e=0,s=t.tagsList.length;e<s;e++){var n=t.tagsList[e];if(n.path===t.$route.fullPath){e<s-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1);break}}}))}}),j=L,F=(s("5068"),Object(g["a"])(j,$,y,!1,null,null,null)),S=F.exports,P={data:function(){return{tagsList:[],collapse:!1}},components:{vHead:b,vSidebar:O,vTags:S},created:function(){var t=this;u.$on("collapse-content",(function(e){t.collapse=e})),u.$on("tags",(function(e){for(var s=[],n=0,i=e.length;n<i;n++)e[n].name&&s.push(e[n].name);t.tagsList=s}))}},T=P,E=Object(g["a"])(T,n,i,!1,null,null,null);e["default"]=E.exports},a787:function(t,e,s){},e47e:function(t,e,s){"use strict";s("5536")}}]);