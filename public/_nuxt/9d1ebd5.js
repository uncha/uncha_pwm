(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{408:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("7605f357",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(408)},411:function(t,e,n){(e=n(82)(!1)).push([t.i,".top-area[data-v-32ec9028]{position:fixed;top:0;background:#fff;z-index:999;width:100%;left:0;padding:2.875rem .625rem .625rem;margin-bottom:1.875rem}.btn-back[data-v-32ec9028]{width:auto;height:auto;padding:0 .625rem}.btn-link[data-v-32ec9028]{border:1px solid #ddd;border-radius:6.25rem;padding:.125rem .9375rem .125rem .125rem;font-size:.875rem;color:#000;text-decoration:none;margin-right:.75rem;left:-.75rem;position:relative}.btn-link.bg0[data-v-32ec9028]{background:#ff7ba6;color:#fff}.btn-link.bg1[data-v-32ec9028]{background:#7b97ff;color:#fff}.face[data-v-32ec9028]{width:2.75rem;height:2.75rem;border-radius:100%}.face[data-v-32ec9028],.face2[data-v-32ec9028]{margin-right:.375rem}.face2[data-v-32ec9028]{width:2.25rem;height:2rem}.message[data-v-32ec9028]{position:relative;left:-14px;top:2px}",""]),t.exports=e},412:function(t,e,n){"use strict";var o={components:{"side-bar":n(406).default},props:{linked:{type:Object,required:!1},backURL:{type:String,required:!1,default:null},theme:{type:String,require:!1,default:"black"}},methods:{back:function(){this.backURL?this.$router.push({path:this.backURL}):this.$router.go(-1)}}},r=(n(410),n(56)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-area"},[t.backURL?n("a",{staticClass:"btn-back",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.back(e)}}},[n("img",{attrs:{src:"/images/btn-back02.svg"}})]):t._e(),t._v(" "),t.linked.length>0?n("side-bar",{attrs:{linked:t.linked,theme:t.theme}}):t._e()],1)}),[],!1,null,"32ec9028",null);e.a=component.exports;installComponents(component,{SideBar:n(406).default})},434:function(t,e,n){var content=n(515);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(83).default)("1b2bb561",content,!0,{sourceMap:!1})},514:function(t,e,n){"use strict";n(434)},515:function(t,e,n){(e=n(82)(!1)).push([t.i,'.today-quest[data-v-9befb85c]{background:#497ff5;color:#fff;box-shadow:0 5px 10px #ccc;margin-bottom:1.875rem;padding:1.875rem 0}.today-quest .date[data-v-9befb85c]{position:relative;top:.125rem;font-size:1rem;margin-bottom:.625rem}.today-quest .title[data-v-9befb85c]{font-weight:600;font-size:1.25rem;margin-bottom:1.875rem}.today-quest .description[data-v-9befb85c]{font-size:.875rem;color:#497ff5;background:#fff;border-radius:2.5rem;width:12.5rem;line-height:2.5rem;text-align:center;margin:0 auto}.div[data-v-9befb85c]{background:#f5f5f5;height:1.125rem;position:absolute;width:100%;left:0}.quest-list[data-v-9befb85c]{margin-top:1.5625rem}.quest-list .t1[data-v-9befb85c]{font-size:1rem;line-height:1.875rem}.quest-list .quest-status[data-v-9befb85c]{font-size:.875rem;line-height:1.875rem;color:#497ff5;text-align:right}.total-success[data-v-9befb85c]{font-size:1.125rem;line-height:1.875rem;color:#000;margin-top:.625rem}.total-success .count[data-v-9befb85c]{color:#497ff5}.quest-list .date[data-v-9befb85c]{font-size:.8125rem;line-height:3rem;color:#aaa;font-family:NotoSansCJKkr-Regular}.quest-list .quest-title.success[data-v-9befb85c]{color:#497ff5;text-decoration:line-through}.quest-list .quest-title.failed[data-v-9befb85c]{color:#aaa;text-decoration:line-through}.gift[data-v-9befb85c]{margin-top:1.5625rem;margin-bottom:2.0625rem}.gift img[data-v-9befb85c]{max-width:100%;border-radius:.9375rem}.modal-body .quest-title[data-v-9befb85c]{font-size:1.5rem;margin-bottom:0;margin-top:1.875rem}.modal-body .question[data-v-9befb85c]{font-size:1.125rem;margin-bottom:3.75rem}.quest-list-total>ul[data-v-9befb85c]:after{clear:both;content:"";display:block}.quest-list-total>ul>li[data-v-9befb85c]{width:20%;float:left;margin-bottom:1.125rem}.quest-list-total>ul>li .ico[data-v-9befb85c]{width:3rem;height:3rem}.date[data-v-9befb85c]{font-size:.875rem}.execution-image[data-v-9befb85c]{width:2.75rem;height:2.75rem;border-radius:4px}.confirm-data-image[data-v-9befb85c]{width:100%;box-shadow:2px 2px 10px 5px rgba(0,0,0,.2);border-radius:5px;margin-bottom:2.5rem}',""]),t.exports=e},578:function(t,e,n){"use strict";n.r(e);n(7),n(4),n(103),n(10),n(17),n(11),n(33),n(63);var o=n(23),r={components:{top:n(412).a},data:function(){return{questList:[],selectGroup:"",confirmQuest:"",links:[],confirmData:"",intervalId:""}},computed:{authUser:function(){return this.$store.getters.authUser},selectLink:function(){return this.$store.getters.selectLink},giftImageURL:function(){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.selectGroup.success_gift):this.selectGroup.success_gift},confirmDataImageURL:function(){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.confirmData.execution_pic):this.confirmData.execution_pic},successCount:function(){return _.filter(this.questList,(function(t){return 1==t.success_state})).length},currentQuest:function(){var t=_.find(this.questList,(function(t){return moment(t.start_date).valueOf()<=moment().valueOf()}));return t},nextQuest:function(){var t=this,e=_.find(this.questList,(function(e){return moment(e.start_date).valueOf()>moment(t.currentQuest.start_date).valueOf()}));return e},executionList:function(){return _.filter(this.questList,(function(t){return 0!=t.complete_sate}))},successIndex:function(){var t=this,e=0,n=0;return _.forEach(this.questList,(function(o,i){1==o.success_state&&n<t.selectGroup.success_count&&(n++,e++)})),e==this.selectGroup.success_count?e:-1},linked:function(){return this.$store.getters["Baby/linked"]}},mounted:function(){var t=this;this.init(),this.intervalId=setInterval((function(){t.init()}),3e4)},methods:{init:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadQuestGroup();case 2:return n=e.sent,t.selectGroup=n[0],e.next=6,t.loadQuestList(t.selectGroup);case 6:return t.questList=e.sent,console.log("this.questList",t.questList),e.next=10,t.$axios.get("/api/linked/mom",{params:{mom_nick_name:t.authUser}}).then((function(e){t.links=e.data,console.log("RES.DATA4444",e)}));case 10:case"end":return e.stop()}}),e)})))()},questConfirm:function(t,e){this.confirmQuest=_.find(this.questList,(function(e){return e.id==t})),this.confirmData=e,this.$refs["modal-quest-confirm"].show()},loadQuestGroup:function(){var t=this;return new Promise((function(e){t.$axios.get("/api/selectQuestGroup/".concat(t.linked[0].id)).then((function(t){e(t.data)}))}))},loadSelectGroup:function(link){var t=this;return new Promise((function(e){t.$axios.get("/api/selectQuestGroup/".concat(link.id)).then((function(t){e(t.data)}))}))},loadQuestList:function(t){var e=this;return new Promise((function(n){e.$axios.get("/api/selectQuest/".concat(t.id)).then((function(t){var e=_.sortBy(t.data,(function(t){return t.start_date}));n(e)}))}))},getFormatDate:function(t){return"".concat(moment(t).month()+1,"월").concat(moment(t).date(),"일(").concat(this.getWeekName(moment(t).day()),")")},getFormatTime:function(t){var e=moment(t).hour();return e>12?"오후 ".concat(e-12):"오전 ".concat(e)},questStatus:function(){if(0==this.questList.length)return"";var t=moment(this.questList[0].start_date).diff(moment(),"day");return"".concat(t+1,"일째 진행중")},handleSuccess:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.confirmQuest),t.$axios.post("/api/selectQuest/".concat(t.confirmQuest.id),{success_state:1}).then((function(e){t.resetQuestList(),t.$refs["modal-quest-confirm"].hide()}));case 2:case"end":return e.stop()}}),e)})))()},handleFailed:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.post("/api/selectQuest/".concat(t.confirmQuest.id),{success_state:2}).then((function(e){t.resetQuestList(),t.$refs["modal-quest-confirm"].hide()}));case 1:case"end":return e.stop()}}),e)})))()},resetQuestList:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadQuestList(t.selectGroup);case 2:t.questList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},executionPicURL:function(t){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(t):t},completeCheck:function(){var t=this;this.$nextTick((function(){t.successCount!=t.questList.length&&t.successCount!=t.selectGroup.success_count||(console.log("complete"),t.$refs["modal-quest-complete"].show())}))},cancelComplete:function(){this.$refs["modal-quest-complete"].hide()},successComplete:function(){var t=this;this.$axios.post("/api/completeQuestGroup/".concat(this.selectGroup.id),{state:"1"}).then((function(e){t.$router.push({path:"/mom/quest/ing/complete"})}))}},destroyed:function(){this.intervalId&&window.clearInterval(this.intervalId)}},c=(n(514),n(56)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top",{attrs:{linked:t.linked,backURL:"/baby/quest/confirm"}}),t._v(" "),n("div",{staticClass:"quest-wrapper"},[n("b-row",[n("b-col",[n("p",{staticClass:"tit"},[t._v("퀘스트 완료현황")])]),t._v(" "),n("b-col",{staticClass:"text-right"})],1),t._v(" "),n("div",{staticClass:"quest-list-total"},[n("ul",t._l(t.questList,(function(e,i){return i<t.selectGroup.success_count?n("li",[i!=t.successIndex-1?[1==e.success_state?n("img",{staticClass:"ico",attrs:{src:"/images/ico-quest-success.svg"}}):n("img",{staticClass:"ico",attrs:{src:"/images/ico-quest-notyet.svg"}})]:[n("img",{staticClass:"ico",attrs:{src:"/images/quest-icon-complete.png"}})]],2):t._e()})),0)]),t._v(" "),n("div",{staticClass:"divine"}),t._v(" "),n("div",{staticClass:"quest-list"},[n("p",[t._v("퀘스트 달성현황")]),t._v(" "),n("ul",{staticClass:"list"},t._l(t.executionList,(function(e){return n("li",[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{cols:"2"}},[n("img",{staticClass:"execution-image",attrs:{src:t.executionPicURL(e.execution_pic)}})]),t._v(" "),n("b-col",{staticClass:"date",attrs:{cols:"10"}},[n("p",{staticClass:"mb-0"},[t._v(t._s(t.getFormatDate(e.execution_date)))]),t._v(" "),n("p",{staticClass:"quest-title",class:{success:1==e.success_state,failed:2==e.success_state},attrs:{cols:"7"}},[t._v(t._s(e.title)+"\n              ")])])],1)],1)})),0)]),t._v(" "),n("div",{staticClass:"divine"}),t._v(" "),n("div",{staticClass:"gift"},[n("p",[t._v("퀘스트 보상")]),t._v(" "),n("img",{staticClass:"upload-image",attrs:{src:t.giftImageURL}})])],1),t._v(" "),n("b-modal",{ref:"modal-quest-confirm",attrs:{centered:"","hide-header":"","hide-footer":""}},[n("div",{staticClass:"text-center"},[n("p",{staticClass:"quest-title"},[t._v('"'+t._s(t.confirmQuest.title)+'"')]),t._v(" "),n("p",{staticClass:"question"},[t._v("퀘스트를 달성했나요?")])]),t._v(" "),n("div",[n("img",{staticClass:"confirm-data-image",attrs:{src:t.confirmDataImageURL}})]),t._v(" "),n("div",{staticClass:"text-center"},[n("b-row",[n("b-col",{staticClass:"p-1"},[n("b-button",{attrs:{variant:"light"},on:{click:function(e){return t.handleFailed()}}},[t._v("실패\n          ")])],1),t._v(" "),n("b-col",{staticClass:"p-1"},[n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.handleSuccess()}}},[t._v("성공!\n          ")])],1)],1)],1)]),t._v(" "),n("b-modal",{ref:"modal-quest-complete",attrs:{centered:"","hide-header":"","hide-footer":""}},[n("div",{staticClass:"text-center"},[n("p",{staticClass:"quest-title"},[t._v('"퀘스트를 완료하시겠습니까?"')])]),t._v(" "),n("div",{staticClass:"text-center m-3"},[n("b-row",[n("b-col",{staticClass:"p-1",attrs:{cols:"5"}},[n("b-button",{attrs:{variant:"light"},on:{click:function(e){return t.cancelComplete()}}},[t._v("취소\n          ")])],1),t._v(" "),n("b-col",{staticClass:"p-1",attrs:{cols:"7"}},[n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.successComplete()}}},[t._v("완료\n          ")])],1)],1)],1)])],1)}),[],!1,null,"9befb85c",null);e.default=component.exports;installComponents(component,{Top:n(404).default})}}]);