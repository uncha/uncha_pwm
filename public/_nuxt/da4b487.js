(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{439:function(t,e,r){var content=r(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("fd0b9fbc",content,!0,{sourceMap:!1})},440:function(t,e,r){var content=r(447);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("3959ffe5",content,!0,{sourceMap:!1})},441:function(t,e,r){var content=r(450);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("6bfefa63",content,!0,{sourceMap:!1})},442:function(t,e,r){"use strict";r.r(e);r(52);var n={props:{linked:{type:Array,required:!0}},data:function(){return{userProfile:""}},computed:{authUser:function(){return this.$store.getters.authUser}},mounted:function(){var t=this;this.$axios.get("/api/user/".concat(this.authUser)).then((function(e){t.userProfile=e.data[0]}))},methods:{getProfileImageURL:function(t){return"localhost:3000"==window.location.host?"http://localhost:8001".concat(t):t},getlinkedtatusLabel:function(t){return 1==t?"연결된 엄마":"연결 전"},logout:function(){var t=this,e=window.open("https://nid.naver.com/nidlogin.logout","PopupWin","width=500,height=600");setTimeout((function(){e.close(),t.$router.push({path:"/"})}),100)}}},o=(r(444),r(82)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"side-bar"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],staticClass:"btn-toggle",attrs:{variant:"white"}},[r("b-icon",{attrs:{icon:"list",scale:"1.2"}})],1),t._v(" "),r("b-sidebar",{attrs:{id:"sidebar-right",right:"",shadow:""}},[r("div",{staticClass:"sidebar-right-cont"},[r("div",{staticClass:"profile text-center"},[r("img",{staticClass:"profile-image",attrs:{src:t.getProfileImageURL(t.userProfile.profile_image)}}),t._v(" "),r("p",{staticClass:"label"},[t._v("닉네임")]),t._v(" "),r("p",{staticClass:"nick-name"},[t._v(t._s(t.userProfile.nick_name))]),t._v(" "),r("div",{staticClass:"buttons"},[r("b-button",{attrs:{variant:"light"},on:{click:t.logout}},[t._v("로그아웃")]),t._v(" "),r("b-button",{attrs:{variant:"light"}},[t._v("수정")])],1)]),t._v(" "),r("div",{staticClass:"divine"}),t._v(" "),r("div",{staticClass:"linked-list"},[r("ul",t._l(t.linked,(function(link,i){return r("li",[r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("img",{staticClass:"profile-image children",attrs:{src:t.getProfileImageURL(link.profile_image)}})]),t._v(" "),r("b-col",{attrs:{cols:"6"}},[r("p",{staticClass:"label"},[t._v(t._s(t.getlinkedtatusLabel(link.status)))]),t._v(" "),r("p",{staticClass:"nick-name"},[t._v(t._s(link.mom_nick_name))])]),t._v(" "),r("b-col",{attrs:{cols:"4"}},[1==link.status?r("b-button",{attrs:{variant:"light"}},[t._v("연결 해제")]):t._e()],1)],1)],1)})),0)]),t._v(" "),r("div",{staticClass:"footer-cont"},[r("p",{staticClass:"text-right version"},[t._v("버전정보 1.00")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"info"},[r("p",{staticClass:"company mb-0"},[t._v("㈜엑스티")]),t._v(" "),r("p",{staticClass:"details"},[t._v("서울시 관악구 남부순환로 1531, 2층"),r("br"),t._v("\n          사업자등록번호 822-88-00882"),r("br"),t._v("\n          대표 김현수, 송의택"),r("br"),t._v("\n          TEL 02-853-6582")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,r){"use strict";r.r(e);r(25),r(26),r(93);var n=r(41),o={components:{"side-bar":r(448).a},props:{link:{type:Object,required:!1},message:{type:String,required:!1},backURL:{type:String,required:!1,default:null}},computed:{authUser:function(){return this.$store.getters.authUser}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/linked/mom",{params:{mom_nick_name:t.authUser}}).then((function(e){t.links=e.data,_.forEach(t.links,(function(e,i){t.$axios.get("/api/user/".concat(e.baby_nick_names)).then((function(r){t.$set(e,"profile_image",r.data[0].profile_image)}))}))}));case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{links:[]}},methods:{back:function(){this.backURL?this.$router.push({path:this.backURL}):this.$router.go(-1)}}},l=(r(449),r(82)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"top-area"},[r("a",{staticClass:"btn-back",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.back(e)}}},[r("img",{attrs:{src:"/images/btn_back.png"}})]),t._v(" "),t.link?r("b-button",{staticClass:"btn-link bg0"},[r("img",{staticClass:"face",attrs:{src:"/images/face.png"}}),t._v("\n      "+t._s(t.link.baby_nick_names)+"\n  ")]):t._e(),t._v(" "),r("span",{staticClass:"message"},[t._v(t._s(t.message))]),t._v(" "),t.links.length>0?r("side-bar",{attrs:{links:t.links}}):t._e()],1)}),[],!1,null,"36b3259c",null);e.default=component.exports;installComponents(component,{SideBar:r(442).default})},444:function(t,e,r){"use strict";r(439)},445:function(t,e,r){(e=r(91)(!1)).push([t.i,"#side-bar .btn-toggle{position:fixed;top:17px;right:12px}#side-bar .b-sidebar-header{position:absolute;top:15px;right:5px}#side-bar .b-sidebar-header .close{color:#000!important}#sidebar-right{width:100%;background:#fff!important}#sidebar-right .sidebar-right-cont{padding:70px 24px 24px}#sidebar-right .profile-image{width:80px;height:80px;border-radius:100%}#sidebar-right .profile-image.children{width:48px;height:48px}#sidebar-right .label{font-size:14px;color:#aaa;margin-top:10px;margin-bottom:0}#sidebar-right .nick-name{font-size:20px}#sidebar-right button.btn{width:auto;height:auto;font-size:12px}#sidebar-right .buttons{margin-bottom:30px}#sidebar-right .footer-cont{margin-top:60px}#sidebar-right .footer-cont .info{color:#aaa;font-size:12px;line-height:18px}#sidebar-right .footer-cont .info .company{line-height:30px}#sidebar-right .footer-cont .version{font-size:12px;color:#aaa;margin-bottom:0}#sidebar-right .footer-cont hr{margin:.5rem 0}#sidebar-right .linked-list>ul>li{padding:20px 0;border-bottom:1px solid #eee}#sidebar-right .linked-list>ul>li .label{margin:0;font-size:12px}#sidebar-right .linked-list>ul>li .nick-name{margin:0;font-size:16px}#sidebar-right .linked-list>ul>li button.btn{float:right;font-size:12px;margin-top:8px}#sidebar-right .linked-list>ul>li button.btn.add-chilren{background:#497ff5}#sidebar-right .linked-list>ul>li:last-child{border-bottom:0}",""]),t.exports=e},446:function(t,e,r){"use strict";r(440)},447:function(t,e,r){(e=r(91)(!1)).push([t.i,"#side-bar .btn-toggle{position:fixed;top:17px;right:12px}#side-bar .b-sidebar-header{position:absolute;top:15px;right:5px}#side-bar .b-sidebar-header .close{color:#000!important}#sidebar-right{width:100%;background:#fff!important}#sidebar-right .sidebar-right-cont{padding:70px 24px 24px}#sidebar-right .profile-image{width:80px;height:80px;border-radius:100%}#sidebar-right .profile-image.children{width:48px;height:48px}#sidebar-right .label{font-size:14px;color:#aaa;margin-top:10px;margin-bottom:0}#sidebar-right .nick-name{font-size:20px}#sidebar-right button.btn{width:auto;height:auto;font-size:12px}#sidebar-right .buttons{margin-bottom:30px}#sidebar-right .footer-cont{margin-top:60px}#sidebar-right .footer-cont .info{color:#aaa;font-size:12px;line-height:18px}#sidebar-right .footer-cont .info .company{line-height:30px}#sidebar-right .footer-cont .version{font-size:12px;color:#aaa;margin-bottom:0}#sidebar-right .footer-cont hr{margin:.5rem 0}#sidebar-right .linked-list>ul>li{padding:20px 0;border-bottom:1px solid #eee}#sidebar-right .linked-list>ul>li .label{margin:0;font-size:12px}#sidebar-right .linked-list>ul>li .nick-name{margin:0;font-size:16px}#sidebar-right .linked-list>ul>li button.btn{float:right;font-size:12px;margin-top:8px}#sidebar-right .linked-list>ul>li button.btn.add-chilren{background:#497ff5}#sidebar-right .linked-list>ul>li:last-child{border-bottom:0}",""]),t.exports=e},448:function(t,e,r){"use strict";r(52);var n={props:{links:{type:Array,required:!0}},data:function(){return{userProfile:""}},computed:{authUser:function(){return this.$store.getters.authUser}},mounted:function(){var t=this;this.$axios.get("/api/user/".concat(this.authUser)).then((function(e){t.userProfile=e.data[0]}))},methods:{getProfileImageURL:function(t){return"localhost:3000"==window.location.host?"http://localhost:8001".concat(t):t},getLinkStatusLabel:function(t){return 1==t?"연결된 자녀":"연결 전"},logout:function(){var t=this,e=window.open("https://nid.naver.com/nidlogin.logout","PopupWin","width=500,height=600");setTimeout((function(){e.close(),t.$router.push({path:"/"})}),100)}}},o=(r(446),r(82)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"side-bar"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],staticClass:"btn-toggle",attrs:{variant:"white"}},[r("b-icon",{attrs:{icon:"list",scale:"1.2"}})],1),t._v(" "),r("b-sidebar",{attrs:{id:"sidebar-right",right:"",shadow:""}},[r("div",{staticClass:"sidebar-right-cont"},[r("div",{staticClass:"profile text-center"},[r("img",{staticClass:"profile-image",attrs:{src:t.getProfileImageURL(t.userProfile.profile_image)}}),t._v(" "),r("p",{staticClass:"label"},[t._v("닉네임")]),t._v(" "),r("p",{staticClass:"nick-name"},[t._v(t._s(t.userProfile.nick_name))]),t._v(" "),r("div",{staticClass:"buttons"},[r("b-button",{attrs:{variant:"light"},on:{click:t.logout}},[t._v("로그아웃")]),t._v(" "),r("b-button",{attrs:{variant:"light"}},[t._v("수정")])],1)]),t._v(" "),r("div",{staticClass:"divine"}),t._v(" "),r("div",{staticClass:"linked-list"},[r("ul",[t._l(t.links,(function(link,i){return r("li",[r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("img",{staticClass:"profile-image children",attrs:{src:t.getProfileImageURL(link.profile_image)}})]),t._v(" "),r("b-col",{attrs:{cols:"6"}},[r("p",{staticClass:"label"},[t._v(t._s(t.getLinkStatusLabel(link.status)))]),t._v(" "),r("p",{staticClass:"nick-name"},[t._v(t._s(link.baby_nick_names))])]),t._v(" "),r("b-col",{attrs:{cols:"4"}},[1==link.status?r("b-button",{attrs:{variant:"light"}},[t._v("연결 해제")]):t._e()],1)],1)],1)})),t._v(" "),r("li",[r("b-button",{staticClass:"add-chilren",attrs:{variant:"primary"},on:{click:function(e){return t.$router.push({path:"/mom/search-baby"})}}},[t._v("자녀 추가하기")])],1)],2)]),t._v(" "),r("div",{staticClass:"footer-cont"},[r("p",{staticClass:"text-right version"},[t._v("버전정보 1.00")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"info"},[r("p",{staticClass:"company mb-0"},[t._v("㈜엑스티")]),t._v(" "),r("p",{staticClass:"details"},[t._v("서울시 관악구 남부순환로 1531, 2층"),r("br"),t._v("\n          사업자등록번호 822-88-00882"),r("br"),t._v("\n          대표 김현수, 송의택"),r("br"),t._v("\n          TEL 02-853-6582")])])])])])],1)}),[],!1,null,null,null);e.a=component.exports},449:function(t,e,r){"use strict";r(441)},450:function(t,e,r){(e=r(91)(!1)).push([t.i,".top-area[data-v-36b3259c]{position:fixed;top:0;background:#fff;z-index:999;width:100%;left:0;padding:.875rem .625rem 1.125rem}.top-area .btn-back img[data-v-36b3259c]{width:3rem;height:3rem}.btn-link[data-v-36b3259c]{border:1px solid #ddd;border-radius:6.25rem;padding:.125rem .9375rem .125rem .125rem;font-size:.875rem;color:#000;text-decoration:none;margin-right:.75rem;left:-.75rem;position:relative}.btn-link.bg0[data-v-36b3259c]{background:#ff7ba6;color:#fff}.btn-link.bg1[data-v-36b3259c]{background:#7b97ff;color:#fff}.face[data-v-36b3259c]{width:2.75rem;height:2.75rem;border-radius:100%}.face[data-v-36b3259c],.face2[data-v-36b3259c]{margin-right:.375rem}.face2[data-v-36b3259c]{width:2.25rem;height:2rem}.message[data-v-36b3259c]{position:relative;left:-14px;top:2px}",""]),t.exports=e},472:function(t,e,r){var content=r(540);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("bf4d4a14",content,!0,{sourceMap:!1})},539:function(t,e,r){"use strict";r(472)},540:function(t,e,r){(e=r(91)(!1)).push([t.i,".title[data-v-54a9767a]{font-size:1.25rem;line-height:1.875rem;margin-top:11.375rem}.buttons[data-v-54a9767a]{position:absolute;bottom:3.75rem;left:0;right:0;padding:0 1.5rem}",""]),t.exports=e},603:function(t,e,r){"use strict";r.r(e);r(443);var n={},o=(r(539),r(82)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("top"),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"buttons"},[r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$router.push({path:"/mom/qr-link"})}}},[t._v("\n      아니오, 설치해야 해요\n    ")]),t._v(" "),r("b-button",{staticClass:"mt-2",attrs:{variant:"primary"},on:{click:function(e){return t.$router.push({path:"/mom/search-baby"})}}},[t._v("\n      네! 설치되어 있어요\n    ")])],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"title text-center"},[this._v("\n    자녀의 휴대폰에도"),e("br"),this._v("\n    엄마의 퀘스트가"),e("br"),this._v("\n    설치되어 있나요?\n  ")])}],!1,null,"54a9767a",null);e.default=component.exports;installComponents(component,{Top:r(443).default})}}]);