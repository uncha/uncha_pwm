(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{441:function(t,e,r){"use strict";e.a={computed:{authUser:function(){return this.$store.getters.authUser}},mounted:function(){}}},475:function(t,e,r){var content=r(551);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("38a3e17e",content,!0,{sourceMap:!1})},550:function(t,e,r){"use strict";r(475)},551:function(t,e,r){(e=r(91)(!1)).push([t.i,".title[data-v-40315322]{margin-top:12.6875rem;font-family:NotoSansCJKkr-Regular;line-height:1.875rem;letter-spacing:-1px;margin-bottom:2.3125rem}.name[data-v-40315322],.title[data-v-40315322]{font-size:1.5rem}.face[data-v-40315322]{width:6.25rem;height:6.25rem;border-radius:100%;overflow:hidden;margin:0 auto}.face img[data-v-40315322]{width:100%}.complete-message[data-v-40315322]{color:#1773e2;font-size:.875rem}",""]),t.exports=e},611:function(t,e,r){"use strict";r.r(e);r(21);var n=r(441),o=r(449),c=r(452),l={components:{top:r(439).default},mixins:[o.validationMixin,n.a],data:function(){return{linkedComplete:!1,form:{nickName:"test"},searchFailed:!1,searchBaby:null}},validations:{form:{nickName:{required:c.required}}},computed:{authUser:function(){return this.$store.getters.authUser},profileImageURL:function(){return this.searchBaby?"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.searchBaby[0].profile_image):this.searchBaby[0].profile_image:""}},methods:{validateState:function(t){var e=this.$v.form[t],r=e.$dirty,n=e.$error;return r?!n:null},onSubmit:function(){var t=this;this.$v.form.$touch(),this.$v.form.$anyError||this.$axios.get("/api/search-baby/".concat(this.authUser,"/").concat(this.form.nickName)).then((function(e){console.log("RES.DATA@@@@",e.data),0==e.data.length?t.searchFailed=!0:(t.searchFailed=!1,t.searchBaby=e.data,t.$refs["modal-link-child"].show())}))},yes:function(){var t=this;this.$axios.post("/api/linked",{mom_nick_name:this.authUser,baby_nick_names:this.form.nickName}).then((function(e){console.log("RES",e),t.linkedComplete=!0}))}}},m=(r(550),r(82)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("top"),t._v(" "),r("div",{},[t._m(0),t._v(" "),r("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[r("b-form-group",[r("b-input",{attrs:{state:t.validateState("nickName")},model:{value:t.$v.form.nickName.$model,callback:function(e){t.$set(t.$v.form.nickName,"$model",e)},expression:"$v.form.nickName.$model"}}),t._v(" "),r("b-form-invalid-feedback",[t._v("This is a required field.")])],1),t._v(" "),r("div",{staticClass:"text-center"},[1==t.searchFailed?r("p",{staticClass:"text-danger"},[t._v("\n                    닉네임을 찾을 수 없습니다.\n                ")]):t._e(),t._v(" "),r("b-button",{staticClass:"mt-4 text-center",attrs:{type:"submit",variant:"primary"}},[t._v("확인\n                ")])],1)],1)],1),t._v(" "),r("b-modal",{ref:"modal-link-child",attrs:{"hide-header":"","hide-footer":"",centered:""}},[r("p",{staticClass:"face"},[r("img",{attrs:{src:t.profileImageURL}})]),r("p"),t._v(" "),r("p",{staticClass:"text-center name"},[t._v(t._s(t.form.nickName))]),t._v(" "),0==t.linkedComplete?[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{staticClass:"p-1",attrs:{cols:"4"}},[r("b-button",{attrs:{variant:"light"},on:{click:function(e){return t.$refs["modal-link-child"].hide()}}},[t._v("아니에요\n                ")])],1),t._v(" "),r("b-col",{staticClass:"p-1",attrs:{cols:"8"}},[r("b-button",{attrs:{variant:"primary"},on:{click:t.yes}},[t._v("네, 맞아요!\n                ")])],1)],1)]:[r("div",{staticClass:"text-center"},[r("p",{staticClass:"complete-message"},[t._v("연결 신청이 완료 되었습니다!")]),t._v(" "),r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$router.push({path:"/mom/quest/create/start"})}}},[t._v("확인")])],1)]],2)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"text-center title"},[this._v("자녀의 닉네임을"),e("br"),this._v("입력해주세요.\n        ")])}],!1,null,"40315322",null);e.default=component.exports;installComponents(component,{Top:r(439).default})}}]);