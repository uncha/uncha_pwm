(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{469:function(e,t,o){var content=o(539);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(92).default)("6398b68b",content,!0,{sourceMap:!1})},470:function(e,t,o){var content=o(541);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(92).default)("43acb82e",content,!0,{sourceMap:!1})},538:function(e,t,o){"use strict";o(469)},539:function(e,t,o){(t=o(91)(!1)).push([e.i,'#create-nickname .profile-image-wrapper{position:relative;margin:10.625rem auto 2.0625rem;height:6.25rem;width:6.25rem}#create-nickname .profile-image-wrapper:after{content:"";display:block;width:5.6875rem;height:5.6875rem;border:1px dashed #fff;border-radius:100%;position:absolute;left:.3125rem;top:.3125rem}#create-nickname .profile-image-wrapper .upload-image{position:absolute;width:6.25rem;height:6.25rem;background:#f1cef5;border-radius:100%;overflow:hidden;z-index:5}#create-nickname .profile-image-wrapper .upload-image img{width:100%;height:100%}#create-nickname .profile-image-wrapper .box-file-input{position:absolute;z-index:6;top:4.5625rem;left:4.25rem}#create-nickname .profile-image-wrapper .box-file-input .form-group{margin-bottom:0}#create-nickname .profile-image-wrapper .box-file-input label{display:inline-block;background:#1ec89b;color:#fff;cursor:pointer;border-radius:100%}#create-nickname .profile-image-wrapper .box-file-input label:after{background-size:1.875rem 1.875rem;display:inline-block;background-position:0 0;background-repeat:no-repeat;width:1.875rem;height:25px;content:"";background-image:url(/images/icon_camera.png)}#create-nickname .profile-image-wrapper .box-file-input input[type=file]{display:none}#create-nickname .profile-image-wrapper .box-file-input .filename{display:inline-block;padding-left:10px}',""]),e.exports=t},540:function(e,t,o){"use strict";o(470)},541:function(e,t,o){(t=o(91)(!1)).push([e.i,".title[data-v-32130967]{font-size:1.5rem;font-family:NotoSansMonoCJKkr-Regular;margin-bottom:8.125rem}.form-wrap[data-v-32130967]{position:relative;overflow:hidden}.form-wrap .des[data-v-32130967]{font-size:.75rem;position:relative;bottom:2.9375rem;left:calc(100% - 100px)}",""]),e.exports=t},605:function(e,t,o){"use strict";o.r(t);o(52);var r=o(451),n=o(453),l={components:{top:o(439).default},mixins:[r.validationMixin],data:function(){return{form:{profile_image:[],nick_name:"",profile_image_path:""},confirmed:"",uploadImage:""}},validations:{form:{nick_name:{required:n.required,minLength:Object(n.minLength)(3)}}},computed:{socialId:function(){return this.$store.getters.socialId},socialLoginType:function(){return this.$store.getters.socialLoginType},profileImageURL:function(){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.uploadImage):this.uploadImage}},mounted:function(){this.socialId||this.$router.push({path:"/"})},methods:{validateState:function(e){var t=this.$v.form[e],o=t.$dirty,r=t.$error;return o?!r:null},onSubmit:function(){var e=this;this.$v.form.$touch(),this.$v.form.$anyError||this.$axios.get("/api/user/".concat(this.form.nick_name)).then((function(t){t.data.length>0?e.confirmed=!1:e.confirmed=!0}))},onStart:function(){var e=this;this.form.user_type="mom",this.form.socialLoginType=this.socialLoginType,this.form.socialId=this.socialId;this.$axios.post("/api/user",this.form).then((function(t){e.login()}))},login:function(){var e=this;this.$axios.post("/api/login",{loginType:this.socialLoginType,id:this.socialId}).then((function(t){console.log("RES",t),e.$store.commit("setUser",t.data.nick_name),e.$router.push({path:"/mom/install"})}))},onUploadImage:function(){var e=this,t=new FormData;window.setTimeout((function(){t.append("profile_image",e.form.profile_image),e.$axios.post("/api/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.uploadImage="/uploads/".concat(t.data),e.form.profile_image_path="/uploads/".concat(t.data),e.$forceUpdate()}))}))}}},c=(o(538),o(540),o(82)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"create-nickname"}},[o("top"),e._v(" "),o("b-row",{},[o("b-col",[o("b-form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.onSubmit(t)}}},[o("div",{staticClass:"profile-image-wrapper"},[o("p",{staticClass:"upload-image"},[e.uploadImage?[o("img",{attrs:{src:e.profileImageURL}})]:[o("img",{attrs:{src:"/images/img_profile.png"}})]],2),e._v(" "),o("div",{staticClass:"box-file-input"},[o("label",[o("b-form-group",{attrs:{label:""}},[o("b-form-file",{staticClass:"mt-3",attrs:{accept:"video/*;capture=camcorder",plain:""},on:{change:e.onUploadImage},model:{value:e.form.profile_image,callback:function(t){e.$set(e.form,"profile_image",t)},expression:"form.profile_image"}})],1)],1)])]),e._v(" "),o("p",{staticClass:"text-center title"},[e._v("\n                    사용 할 닉네임을"),o("br"),e._v("\n                    정해주세요!\n                ")]),e._v(" "),o("div",{staticClass:"form-wrap"},[o("b-form-group",{attrs:{label:""}},[o("b-input",{attrs:{state:e.validateState("nick_name"),disabled:1==e.confirmed,placeholder:"넥네임을 입력해 주세요.",type:"text"},model:{value:e.$v.form.nick_name.$model,callback:function(t){e.$set(e.$v.form.nick_name,"$model",t)},expression:"$v.form.nick_name.$model"}}),e._v(" "),o("b-form-invalid-feedback",[e._v("넥네임을 입력해 주세요.")])],1),e._v(" "),""===e.confirmed?[o("b-button",{staticClass:"position-bottom",attrs:{type:"submit",variant:"primary"}},[e._v("확인")])]:[0==e.confirmed?[o("p",{staticClass:"des text-danger"},[e._v("사용불가\n                            ")]),e._v(" "),o("b-button",{staticClass:"position-bottom",attrs:{type:"submit",variant:"primary"}},[e._v("확인")])]:[o("p",{staticClass:"des",staticStyle:{color:"#1773e2"}},[e._v("사용가능\n                            ")]),e._v(" "),o("b-button",{staticClass:"position-bottom",attrs:{variant:"primary"},on:{click:e.onStart}},[e._v("시작하기")])]]],2)])],1)],1)],1)}),[],!1,null,"32130967",null);t.default=component.exports;installComponents(component,{Top:o(439).default})}}]);