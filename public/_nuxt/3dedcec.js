(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{406:function(t,e,r){"use strict";r.r(e);r(17),r(33),r(63);var n=r(23),o={props:{linked:{type:Array,required:!0},theme:{type:String,require:!1,default:"black"}},data:function(){return{userProfile:"",form:{profile_image_url:"",profile_image:""},mom:"",profileImageUrl:""}},computed:{authUser:function(){return this.$store.getters.authUser},profileImage:function(){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.profileImageUrl):this.profileImageUrl}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.init();case 1:case"end":return e.stop()}}),e)})))()},methods:{init:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$axios.get("/api/user/".concat(t.authUser)).then((function(e){t.userProfile=e.data[0],t.form.profile_image_url=t.userProfile.profile_image})),!(t.linked.length>0)){e.next=6;break}return e.next=4,t.loadMom();case 4:t.mom=e.sent,t.profileImageUrl=t.mom.profile_image;case 6:case"end":return e.stop()}}),e)})))()},getProfileImageURL:function(t){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(t):t},getlinkedtatusLabel:function(t){return 1==t?"연결된 엄마":"연결 전"},logout:function(){var t=this,e=window.open("https://nid.naver.com/nidlogin.logout","PopupWin","width=500,height=600");setTimeout((function(){e.close(),t.$router.push({path:"/"})}),500)},loadMom:function(){var t=this;return new Promise((function(e){t.$axios.get("/api/user/".concat(t.linked[0].mom_nick_name)).then((function(t){e(t.data[0])}))}))},onUploadImage:function(){var t=this,e=new FormData;window.setTimeout((function(){e.append("profile_image",t.form.profile_image),t.$axios.post("/api/upload",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.form.profile_image_url="/uploads/".concat(e.data),t.$forceUpdate()}))}))},cancelModify:function(){this.$refs["modify-modal"].hide(),this.form.profile_image_url=this.userProfile.profile_image},saveModify:function(){var t=this;this.$axios.post("/api/user/".concat(this.authUser),{profile_image:this.form.profile_image_url}).then((function(e){t.init(),t.$refs["modify-modal"].hide()}))},disconnection:function(link){var t=this;console.log("LINK",link),this.$axios.post("/api/disconnection/".concat(link.id)).then((function(e){console.log("RES",e),t.$router.push({path:"/"})}))}}},l=(r(413),r(56)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"side-bar-baby"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],staticClass:"btn-toggle",attrs:{variant:"white"}},["black"==t.theme?r("img",{attrs:{src:"/images/btn-list.svg"}}):r("img",{attrs:{src:"/images/btn-list-white.svg"}})]),t._v(" "),r("b-sidebar",{attrs:{id:"sidebar-right",right:"",shadow:""}},[r("div",{staticClass:"sidebar-right-cont"},[r("div",{staticClass:"profile text-center"},[r("img",{staticClass:"profile-image",style:{background:"url("+t.getProfileImageURL(t.userProfile.profile_image)+")"}}),t._v(" "),r("p",{staticClass:"label"},[t._v("kyutae21c@naver.com")]),t._v(" "),r("p",{staticClass:"nick-name"},[t._v(t._s(t.userProfile.nick_name))]),t._v(" "),r("div",{staticClass:"buttons"},[r("b-button",{attrs:{variant:"light"},on:{click:t.logout}},[t._v("로그아웃")]),t._v(" "),r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$refs["modify-modal"].show()}}},[t._v("정보수정")])],1)]),t._v(" "),r("div",{staticClass:"divine"}),t._v(" "),r("div",{staticClass:"linked-list"},[r("ul",t._l(t.linked,(function(link,i){return r("li",[r("b-row",[r("b-col",{attrs:{cols:"2"}},[r("div",{staticClass:"profile-image",style:{background:"url("+t.profileImage+")",width:"54px",height:"54px","border-radius":"100%"}})]),t._v(" "),r("b-col",{attrs:{cols:"6"}},[r("p",{staticClass:"label"},[t._v(t._s(t.getlinkedtatusLabel(link.status)))]),t._v(" "),r("p",{staticClass:"nick-name"},[t._v(t._s(link.mom_nick_name))])]),t._v(" "),r("b-col",{attrs:{cols:"4"}},[1==link.status?r("b-button",{attrs:{variant:"light"},on:{click:function(e){return t.disconnection(link)}}},[t._v("연결 해제")]):t._e()],1)],1)],1)})),0)]),t._v(" "),r("div",{staticClass:"footer-cont"},[r("p",{staticClass:"text-right version"},[t._v("버전정보 1.00")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"info"},[r("p",{staticClass:"company mb-0"},[t._v("㈜엑스티")]),t._v(" "),r("p",{staticClass:"details"},[t._v("서울시 관악구 남부순환로 1531, 2층"),r("br"),t._v("\n            사업자등록번호 822-88-00882"),r("br"),t._v("\n            대표 김현수, 송의택"),r("br"),t._v("\n            TEL 02-853-6582")])])])])]),t._v(" "),r("b-modal",{ref:"modify-modal",attrs:{id:"modify-modal",title:"프로필 수정","hide-footer":"",centered:""}},[r("div",{staticClass:"profile text-center"},[r("div",{staticClass:"profile-image",style:{background:"url("+t.getProfileImageURL(t.form.profile_image_url)+")",width:"100px",height:"100px","border-radius":"100%","backbround-size":"cover !important"}}),t._v(" "),r("div",{staticClass:"profile-image-wrapper"},[r("div",{staticClass:"box-file-input"},[r("label",[r("b-form-group",{attrs:{label:""}},[r("b-form-file",{staticClass:"mt-3",attrs:{accept:"image/jpeg, image/png, image/gif",plain:""},on:{change:t.onUploadImage},model:{value:t.form.profile_image,callback:function(e){t.$set(t.form,"profile_image",e)},expression:"form.profile_image"}})],1)],1),t._v(" "),r("p",[t._v("\n            사진등록\n          ")])])]),t._v(" "),r("b-row",[r("b-col",{staticClass:"pl-1 pr-1",attrs:{cols:"5"}},[r("b-button",{attrs:{variant:"light"},on:{click:t.cancelModify}},[t._v("취소")])],1),t._v(" "),r("b-col",{staticClass:"pl-1 pr-1",attrs:{cols:"7"}},[r("b-button",{attrs:{variant:"primary"},on:{click:t.saveModify}},[t._v("저장")])],1)],1)],1)])],1)}),[],!1,null,"cf3ad8c0",null);e.default=component.exports},409:function(t,e,r){var content=r(414);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("358f28eb",content,!0,{sourceMap:!1})},413:function(t,e,r){"use strict";r(409)},414:function(t,e,r){(e=r(82)(!1)).push([t.i,'#modify-modal .profile-image{width:80px;height:80px;border-radius:100%;margin:0 auto}#modify-modal .profile-image.children{width:48px;height:48px}#modify-modal .profile-image-wrapper{position:relative;margin:0 auto;top:-5rem}#modify-modal .profile-image-wrapper .box-file-input{position:absolute;z-index:6;text-align:center;left:0;right:0}#modify-modal .profile-image-wrapper .box-file-input .form-group{margin-bottom:0}#modify-modal .profile-image-wrapper .box-file-input label{display:inline-block;background:#497ff5;color:#fff;cursor:pointer;border-radius:100%}#modify-modal .profile-image-wrapper .box-file-input label:after{background-size:2rem 2rem;display:inline-block;background-position:0 0;background-repeat:no-repeat;width:2rem;height:2rem;content:"";background-image:url(/images/icon_camera_02.png)}#modify-modal .profile-image-wrapper .box-file-input input[type=file]{display:none}#modify-modal .profile-image-wrapper .box-file-input .filename{display:inline-block;padding-left:.625rem}#side-bar-baby .btn{line-height:1.5rem!important;border-radius:.75rem!important}#side-bar-baby .btn-toggle{position:fixed;top:2.4375rem;right:.75rem;width:auto}#side-bar-baby .b-sidebar-header{position:absolute;top:1.5rem;right:.3125rem}#side-bar-baby .b-sidebar-header .close{color:#000!important}.profile-image{background-size:cover!important}#sidebar-right{width:100%;background:#fff!important}#sidebar-right .sidebar-right-cont{padding:70px 24px 24px}#sidebar-right .profile-image{width:80px;height:80px;border-radius:100%;background-size:cover!important}#sidebar-right .profile-image.children{width:48px;height:48px}#sidebar-right .label{font-size:14px;color:#aaa;margin-top:10px;margin-bottom:0}#sidebar-right .nick-name{font-size:20px}#sidebar-right button.btn{width:auto;height:auto;font-size:12px}#sidebar-right .buttons{margin-bottom:30px}#sidebar-right .footer-cont{margin-top:60px}#sidebar-right .footer-cont .info{color:#aaa;font-size:12px;line-height:18px}#sidebar-right .footer-cont .info .company{line-height:30px}#sidebar-right .footer-cont .version{font-size:12px;color:#aaa;margin-bottom:0}#sidebar-right .footer-cont hr{margin:.5rem 0}#sidebar-right .linked-list>ul>li{padding:20px 0;border-bottom:1px solid #eee}#sidebar-right .linked-list>ul>li .label{margin:0;font-size:12px}#sidebar-right .linked-list>ul>li .nick-name{margin:0;font-size:16px}#sidebar-right .linked-list>ul>li button.btn{float:right;font-size:12px;margin-top:8px}#sidebar-right .linked-list>ul>li button.btn.add-chilren{background:#497ff5}#sidebar-right .linked-list>ul>li:last-child{border-bottom:0}',""]),t.exports=e},425:function(t,e,r){var content=r(497);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("3c485ebd",content,!0,{sourceMap:!1})},426:function(t,e,r){var content=r(499);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("13d54027",content,!0,{sourceMap:!1})},496:function(t,e,r){"use strict";r(425)},497:function(t,e,r){(e=r(82)(!1)).push([t.i,"#linked[data-v-126c0dee]{position:fixed;top:5rem;left:0;right:0}.linked-babies .btn-link[data-v-126c0dee]{border:1px solid #ddd;border-radius:6.25rem;padding:.125rem .9375rem .125rem .125rem;font-size:.875rem;color:#000;text-decoration:none;margin-right:.75rem;left:-.75rem;position:relative}.linked-babies .btn-link.bg0[data-v-126c0dee]{background:#ff7ba6;color:#fff}.linked-babies .btn-link.bg1[data-v-126c0dee]{background:#7b97ff;color:#fff}.linked-babies.not-linked .exclamation[data-v-126c0dee]{position:relative;top:-50px;right:-75px}.linked-babies.not-linked .exclamation img[data-v-126c0dee]{width:1.5rem}.face[data-v-126c0dee]{width:2.75rem;height:2.75rem;border-radius:100%}.face[data-v-126c0dee],.face2[data-v-126c0dee]{margin-right:.375rem}.face2[data-v-126c0dee]{width:2.25rem;height:2rem}",""]),t.exports=e},498:function(t,e,r){"use strict";r(426)},499:function(t,e,r){(e=r(82)(!1)).push([t.i,".stay[data-v-63df2986]{position:fixed;bottom:50px}.stay .txt[data-v-63df2986]{color:#1d7ff1;text-decoration:underline;font-size:12px;font-family:NotoSansMonoCJKkr-Regular}.stay-quest-box .description[data-v-63df2986]{color:#1d7ff1;margin-top:-1.875rem}.profile-image[data-v-63df2986]{width:80px;height:80px;border-radius:100%;margin:0 auto;background-size:cover!important}.question[data-v-63df2986]{font-size:.75rem;font-weight:400;font-family:NotoSansMonoCJKkr-Regular}",""]),t.exports=e},566:function(t,e,r){"use strict";r.r(e);r(4),r(17),r(33),r(63);var n=r(23),o=r(406),l=(r(10),r(11),{props:{linked:{type:Array,required:!0}},data:function(){return{}},computed:{mom:function(){return console.log("THIS.$STORE",this.$store),this.$store.getters["Baby/mom"]},profileImageURL:function(){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.mom.profile_image):this.mom.profile_image},completeLinked:function(){var t=this,e=_.filter(this.linked,(function(t){return 1==t.status}));return _.forEach(e,function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r,i){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadMom(r);case 2:n=e.sent,t.$set(r,"profile_image",n[0].profile_image);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),e}},mounted:function(){},methods:{loadMom:function(t){var e=this;return new Promise((function(r){e.$axios.get("/api/user/".concat(t.mom_nick_name)).then((function(t){r(t.data)}))}))},getProfileImageURL:function(t){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(t):t}}}),c=(r(496),r(56)),d={components:{"linked-mom":Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"linked"}},[t.completeLinked.length>0?r("div",{staticClass:"linked-babies text-center"},t._l(t.completeLinked,(function(link,i){return r("b-button",{staticClass:"btn-link",class:{"bg-white":0==link.status,bg0:1==link.status&&0==i,bg1:1==link.status&&1==i}},[r("img",{staticClass:"face",attrs:{src:t.getProfileImageURL(link.profile_image)}}),t._v(" "),0==link.status?[t._v("\n              "+t._s(link.mom_nick_name)+" 연결중...\n            ")]:[t._v("\n              "+t._s(link.mom_nick_name)+"\n            ")]],2)})),1):r("div",{staticClass:"linked-babies not-linked text-center"},[r("b-button",{staticClass:"btn-link",attrs:{variant:"white"}},[r("img",{staticClass:"face2",attrs:{src:"/images/icon_mom.png"}}),t._v(" 엄마의 신호가 필요해요\n      ")]),t._v(" "),t._m(0)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"exclamation"},[e("img",{attrs:{src:"/images/icon_warning.png"}})])}],!1,null,"126c0dee",null).exports,"side-bar":o.default},data:function(){return{linked:[],questGroup:"",mom:"",render:!1,intervalId:""}},computed:{authUser:function(){return this.$store.getters.authUser},profileImageURL:function(){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.mom.profile_image):this.mom.profile_image},linkedStay:function(){return _.filter(this.linked,(function(t){return 0==t.status}))},linkedComplete:function(){return _.filter(this.linked,(function(t){return 1==t.status}))}},mounted:function(){var t=this;this.init(),this.intervalId=window.setInterval((function(){t.init()}),3e3)},methods:{init:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:if(t.linked=e.sent,!(t.linked.length>0)){e.next=16;break}return e.next=6,t.loadQuestGroup();case 6:return t.questGroup=e.sent,t.questGroup?t.$router.push({path:"/baby/quest/start"}):t.render=!0,e.next=10,t.loadMom();case 10:t.mom=e.sent,console.log("THIS.MOM",t.mom),t.$store.commit("Baby/setMom",t.mom),t.linkedStay.length>0&&t.$refs["linked-mom-modal"].show(),e.next=17;break;case 16:t.render=!0;case 17:case"end":return e.stop()}}),e)})))()},loadData:function(){var t=this;return new Promise((function(e){t.$axios.get("/api/linked/baby",{params:{baby_nick_names:t.authUser}}).then((function(t){e(t.data)}))}))},loadMom:function(){var t=this;return new Promise((function(e){t.$axios.get("/api/user/".concat(t.linked[0].mom_nick_name)).then((function(t){e(t.data[0])}))}))},loadQuestGroup:function(){var t=this;return new Promise((function(e){t.$axios.get("/api/selectQuestGroup/".concat(t.linked[0].id)).then((function(t){e(t.data[0])}))}))},updateLinkedStatus:function(){var t=this;return new Promise((function(e){t.$axios.post("/api/update-linked/".concat(t.linked[0].id),{status:1}).then((function(t){e(t.data)}))}))},deleteLinkedStatus:function(){var t=this;return new Promise((function(e){t.$axios.post("/api/delete-linked/".concat(t.linked[0].id)).then((function(t){e(t.data)}))}))},yes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateLinkedStatus();case 2:return t.$refs["linked-mom-modal"].hide(),e.next=5,t.loadData();case 5:t.linked=e.sent;case 6:case"end":return e.stop()}}),e)})))()},no:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.deleteLinkedStatus();case 2:t.$refs["linked-mom-modal"].hide();case 3:case"end":return e.stop()}}),e)})))()},linkedSuccess:function(){this.$refs["linked-mom-modal"].hide()}},destroyed:function(){window.clearInterval(this.intervalId)}},m=(r(498),Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[1==t.render?r("div",{attrs:{id:"search-mom"}},[r("side-bar",{attrs:{linked:t.linked}}),t._v(" "),r("div",{staticClass:"cont"},[0==t.linked.length?[t._m(0)]:[t.questGroup?t._e():[t._m(1)]]],2),t._v(" "),(t.linkedComplete.length,r("div",{staticClass:"stay"},[r("p",[r("img",{attrs:{src:"/images/icon-baby-face.svg"}}),t._v(" "),r("b-icon",{staticStyle:{color:"#bbb"},attrs:{icon:"three-dots",animation:"cylon","font-scale":"2"}})],1),t._v(" "),r("p",{staticClass:"txt"},[t._v("\n        엄마를 하염없이 기다리는 중…\n      ")])])),t._v(" "),r("b-modal",{ref:"linked-mom-modal",attrs:{id:"linked-mom-modal","hide-header":"","hide-footer":"",centered:"","no-close-on-backdrop":!0}},[t.linkedStay.length>0?[r("div",{staticClass:"text-center"},[r("p",{staticClass:"upload-image mb-0"},[t.mom.profile_image?[r("img",{staticClass:"profile-image",style:{background:"url("+t.profileImageURL+")"}})]:t._e()],2),t._v(" "),r("h1",{staticClass:"mt-0 mb-1"},[t._v(t._s(t.mom.nick_name))]),t._v(" "),r("p",{staticClass:"question text-primary mb-6"},[t._v("엄마가 맞나요?")])]),t._v(" "),r("b-row",[r("b-col",{},[r("b-button",{attrs:{variant:"light"},on:{click:t.no}},[t._v("아니에요")])],1),t._v(" "),r("b-col",{},[r("b-button",{attrs:{variant:"primary"},on:{click:t.yes}},[t._v("네, 맞아요")])],1)],1)]:[r("div",{staticClass:"text-center"},[r("p",{staticClass:"primary"},[t._v(t._s(t.mom.nick_name))]),t._v(" "),r("p",[t._v("연결이 완료 되었습니다.")])]),t._v(" "),r("b-row",[r("b-col",{staticClass:"p-2"},[r("b-button",{attrs:{variant:"primary"},on:{click:t.linkedSuccess}},[t._v("확인")])],1)],1)]],2)],1):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",[this._v("\n          엄마의 신호가\n          올때까지"),e("br"),this._v(" 잠시만\n          기다려볼까요?\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"stay-quest-box"},[e("h1",[this._v("\n              아직,\n              퀘스트가"),e("br"),this._v(" 도착하지\n              않았습니다."),e("br")]),this._v(" "),e("p",{staticClass:"description"},[this._v("\n              엄마가 퀘스트를 줄 때까지 "),e("br"),this._v("\n              잠깐만 기다려주세요.\n            ")])])}],!1,null,"63df2986",null));e.default=m.exports;installComponents(m,{SideBar:r(406).default})}}]);