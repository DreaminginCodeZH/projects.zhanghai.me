webpackJsonp([1],{"/Geq":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"project-link",attrs:{href:t.project.url,target:"_blank"}},[a("md-card",{attrs:{"md-with-hover":""}},[a("md-card-media",{style:{"padding-bottom":100*t.project.image.height/t.project.image.width+"%"}},[a("img",{attrs:{src:"assets/"+t.project.image.url}})]),t._v(" "),a("md-card-header",[a("div",{staticClass:"md-title"},[t._v(t._s(t.project.title))]),t._v(" "),a("div",{staticClass:"md-subhead"},[t._v(t._s(t.project.description))])]),t._v(" "),t.isTouchDevice?t._e():a("md-ink-ripple")],1)],1)},r=[],n={render:i,staticRenderFns:r};e.a=n},"6xdD":function(t,e,a){"use strict";function i(t){a("qji8")}var r=a("863F"),n=a("/Geq"),o=a("VU/8"),s=i,c=o(r.a,n.a,s,"data-v-e249db32",null);e.a=c.exports},"863F":function(t,e,a){"use strict";e.a={name:"project-view",props:{project:Object},data:function(){return{isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints}}}},"9xfW":function(t,e){},Crj5:function(t,e,a){"use strict";function i(t){a("ftoC")}var r=a("uxAe"),n=a("nBdR"),o=a("VU/8"),s=i,c=o(r.a,n.a,s,"data-v-7038c425",null);e.a=c.exports},DPBI:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{ref:"appBar",staticClass:"appbar"},[a("div",[a("md-toolbar",[a("h1",{staticClass:"md-title"},[t._v("My Projects")])]),t._v(" "),a("md-tabs",{ref:"tabs",attrs:{"md-dynamic-height":!1},on:{change:t.onTabChange}},[a("md-tab",{attrs:{"md-label":"All"}}),t._v(" "),t._l(t.tags,function(t){return a("md-tab",{key:t,attrs:{"md-label":t}})})],2),t._v(" "),a("a",{staticClass:"fab",attrs:{href:"//resume.zhanghai.me",title:"Resume",target:"_blank"}},[a("md-button",{staticClass:"md-fab"},[a("md-icon",[t._v("portrait")])],1)],1)],1)]),t._v(" "),a("router-view",{key:t.$route.path,ref:"content",staticClass:"content"})],1)},r=[],n={render:i,staticRenderFns:r};e.a=n},H0Uf:function(t,e){},M93x:function(t,e,a){"use strict";function i(t){a("9xfW"),a("H0Uf"),a("rpiC")}var r=a("xJD8"),n=a("DPBI"),o=a("VU/8"),s=i,c=o(r.a,n.a,s,"data-v-10a625cf",null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),r=a("Lgyv"),n=a.n(r),o=a("tzNG"),s=(a.n(o),a("aGna")),c=a("M93x"),l=a("YaEn");i.default.config.productionTip=!1,i.default.use(s.a),i.default.use(n.a),i.default.material.registerTheme({default:{primary:{color:"blue",hue:600},accent:"red"}}),new i.default({el:"#app",router:l.a,template:"<App />",components:{App:c.a}})},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),r=a("/ocq"),n=a("Crj5");i.default.use(r.a),e.a=new r.a({routes:[{path:"/",component:n.a},{path:"/:tag",component:n.a,props:!0}]})},aGna:function(t,e,a){"use strict";var i=a("c/Tr"),r=a.n(i),n=a("BO1k"),o=a.n(n),s=a("vgcP"),c=a.n(s),l=a("E84t"),p=a.n(l),u=a("FWuv"),d=a.n(u),m=a("7+uW"),h={},g={itemSelector:String,columnWidth:h,gutter:Number,horizontalOrder:Boolean,percentPosition:Boolean,stamp:String,fitWidth:Boolean,originLeft:Boolean,originTop:Boolean,containerStyle:String,transitionDuration:String,stagger:String,resize:Boolean,initLayout:Boolean},f="vue-masonry.item-added",v=new m.default({}),b={install:function(t,e){t.directive("masonry",{inserted:function(e){if(!d.a)throw new Error("Masonry plugin is not defined. Please check it's connected and parsed correctly.");var a={},i=!0,n=!1,s=void 0;try{for(var l,p=o()(r()(e.attributes));!(i=(l=p.next()).done);i=!0){var u=l.value,m=c()(u.name),b=g[m];switch(b===h&&(b=isNaN(u.value)?String:Number),b){case Boolean:a[m]="true"===u.value;break;case Number:a[m]=Number(u.value);break;case String:a[m]=u.value}}}catch(t){n=!0,s=t}finally{try{!i&&p.return&&p.return()}finally{if(n)throw s}}var w=new d.a(e,a),y=function(){w.reloadItems(),w.layout()};t.nextTick(y),v.$on(f,y),v.$on("vue-masonry.item-removed",y),v.$on("vue-masonry.image-loaded",y)}}),t.directive("masonryTile",{inserted:function(t){v.$emit(f),new p.a(t,function(){v.$emit("vue-masonry.image-loaded")})},beforeDestroy:function(t){v.$emit("vue-masonry.item-removed")}}),t.prototype.$redrawVueMasonry=function(){v.$emit(f)}}};e.a=b},ftoC:function(t,e){},ithi:function(t,e){t.exports={tags:["Android","Web","Desktop"],projects:[{title:"Douya (3200+ stars)",description:"A third-party Material Design mobile application for Douban.com",image:{url:"douya.jpg",width:1024,height:500},url:"https://github.com/zhanghai/Douya/blob/master/README-en.md",tags:["Android","Application","GitHub","Open Source"],span:!0},{title:"MaterialProgressBar (1300+ stars)",description:"Material Design ProgressBar with consistent appearance on Android 4.0+",image:{url:"material-progress-bar.png",width:1080,height:1920},url:"https://github.com/zhanghai/MaterialProgressBar",tags:["Android","GitHub","Library","Open Source"]},{title:"QSC Mobile V3 (6000+ DAU)",description:"An Android campus application for Zhejiang University",image:{url:"qsc-mobile-v3.jpg",width:1080,height:1920},url:"https://play.google.com/store/apps/details?id=com.myqsc.mobile3",tags:["Android","Application"]},{title:"MaterialRatingBar (900+ stars)",description:"Material Design RatingBar with better appearance, compatible with Android 3.0+",image:{url:"material-rating-bar.png",width:1080,height:1920},url:"https://github.com/zhanghai/MaterialRatingBar",tags:["Android","GitHub","Library","Open Source"]},{title:"Join Screenshots (8000+ MAU)",description:"Join movie screenshots together with selected region of subtitle, implemented with Vue.js and HTML5 canvas and file API",image:{url:"join-screenshots.png",width:800,height:450},url:"http://join-screenshots.zhanghai.me",tags:["Web"],span:!0},{title:"WeChat Notification Tweaks (6000+ MAU)",description:"An Android application for tweaking notifications from WeChat by adding recent Android notification features with NotificationListenerService",image:{url:"wechat-notification-tweaks.png",width:1080,height:1920},url:"https://play.google.com/store/apps/details?id=me.zhanghai.android.wechatnotificationtweaks2",tags:["Android","Application"]},{title:"MipsAsm (Adopted by ZJU)",description:"A cross-platform MIPS assembler and IDE built with Java and SWT, adopted by the Computer Organization course in Zhejiang University",image:{url:"mipsasm.png",width:"853",height:"571"},url:"https://github.com/zhanghai/mipsasm",tags:["Desktop","Open Source"],span:!0},{title:"Douban YearProgress (4500+ followers)",description:"A Douban bot that announces the progress of current year at 10 AM every day",image:{url:"douban-year-progress.png",width:433,height:525},url:"https://www.douban.com/people/year-progress/",tags:["Open Source","Server"]},{title:"Solar System",description:"Animated solar system model implemented with OpenGL and FreeGLUT in C",image:{url:"solar-system.jpg",width:1200,height:640},url:"https://github.com/zhanghai/opengl-c-solarsystem",tags:["Computer Graphics","Desktop","Open Source"],span:!0}]}},nBdR:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-list"},[a("transition-group",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{name:"project-list",tag:"div",css:!1,appear:"","column-width":".project-item-masonry-sizer","item-selector":".project-item","percent-position":"true"},on:{"before-appear":t.beforeProjectItemAppear,appear:t.projectItemAppear}},[a("div",{key:"masonry-sizer",staticClass:"project-item-masonry-sizer"}),t._v(" "),t._l(t.projects,function(t,e){return a("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t.title,staticClass:"project-item",class:{"project-item-span":t.span},attrs:{"data-index":e}},[a("project-view",{attrs:{project:t}})],1)})],2)],1)},r=[],n={render:i,staticRenderFns:r};e.a=n},qji8:function(t,e){},rpiC:function(t,e){},tzNG:function(t,e){},uxAe:function(t,e,a){"use strict";var i=a("Xwks"),r=a.n(i),n=a("ithi"),o=a.n(n),s=a("6xdD");e.a={name:"project-list-view",components:{ProjectView:s.a},props:{tag:{type:String,default:null}},computed:{projects:function(){var t=this;return this.tag?o.a.projects.filter(function(e){return e.tags.some(function(e){return r()(e)===t.tag})}):o.a.projects}},methods:{beforeProjectItemAppear:function(t){t.classList.add("project-item-appear-active","project-item-before-appear")},projectItemAppear:function(t,e){setTimeout(function(){t.classList.remove("project-item-before-appear"),setTimeout(function(){t.classList.remove("project-item-appear-active"),e()},400)},100*t.dataset.index)}}}},xJD8:function(t,e,a){"use strict";var i=a("Xwks"),r=a.n(i),n=(a("7+uW"),a("ithi")),o=a.n(n),s=a("YaEn");e.a={name:"app",data:function(){var t=this;return{tags:o.a.tags,onScrollListener:function(){return window.requestAnimationFrame(t.onScroll)}}},mounted:function(){this.onScrollListener(),window.addEventListener("scroll",this.onScrollListener,!1),window.addEventListener("resize",this.onScrollListener,!1)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScrollListener,!1),window.removeEventListener("resize",this.onScrollListener,!1)},methods:{onScroll:function(){var t=this.$refs,e=t.appBar,a=t.content.$el,i=window.getComputedStyle(e,null),r=window.getComputedStyle(a,null),n=function(t,e){var a=t.getPropertyValue(e);if(!a.endsWith("px"))throw new Error(e+" must end in 'px'");return Number(a.substring(0,a.length-2))},o=n(r,"margin-top"),s=n(i,"min-height"),c=n(i,"max-height"),l=o-s,p=l>0?Math.min(window.pageYOffset/l,1):1;e.style.height=s+(1-p)*(c-s)+"px",1===p?(e.classList.add("md-whiteframe-4dp"),e.style.zIndex="8"):(e.classList.remove("md-whiteframe-4dp"),e.style.zIndex="0")},onTabChange:function(){var t=this.$refs.tabs,e=t.tabList[t.activeTab].label,a=r()(e);"all"===a&&(a="/"),s.a.replace(a),window.scrollTo(0,0)}}}}},["NHnr"]);
//# sourceMappingURL=app.7a4c414634e221c56356.js.map