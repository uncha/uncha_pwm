(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{427:function(t,o,e){var content=e(501);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(83).default)("bdf3bad0",content,!0,{sourceMap:!1})},500:function(t,o,e){"use strict";e(427)},501:function(t,o,e){(o=e(82)(!1)).push([t.i,".des{font-size:12px;margin-top:10px}",""]),t.exports=o},572:function(t,o,e){"use strict";e.r(o);e(33);var n=e(415),r=e(416),l={components:{top:e(404).default},mixins:[n.validationMixin],data:function(){return{form:{profile_image:[],nick_name:"",profile_image_path:""},confirmed:"",uploadImage:""}},validations:{form:{nick_name:{required:r.required,minLength:Object(r.minLength)(2)}}},computed:{socialId:function(){return this.$store.getters.socialId},socialLoginType:function(){return this.$store.getters.socialLoginType},profileImageURL:function(){return"localhost:3000"==window.location.host?"http://localhost:9102".concat(this.uploadImage):this.uploadImage}},mounted:function(){this.socialId||this.$router.push({path:"/"})},methods:{validateState:function(t){var o=this.$v.form[t],e=o.$dirty,n=o.$error;return e?!n:null},onSubmit:function(){var t=this;this.$v.form.$touch(),this.$v.form.$anyError||this.$axios.get("/api/user/".concat(this.form.nick_name)).then((function(o){o.data.length>0?t.confirmed=!1:t.confirmed=!0}))},onStart:function(){var t=this;this.form.user_type="mom",this.form.socialLoginType=this.socialLoginType,this.form.socialId=this.socialId;this.$axios.post("/api/user",this.form).then((function(o){t.login()}))},login:function(){var t=this;this.$axios.post("/api/login",{loginType:this.socialLoginType,id:this.socialId}).then((function(o){console.log("RES",o),t.$store.commit("setUser",o.data.nick_name),t.$router.push({path:"/mom/install"})}))},onUploadImage:function(){var t=this,o=new FormData;window.setTimeout((function(){o.append("profile_image",t.form.profile_image),t.$axios.post("/api/upload",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(o){t.uploadImage="/uploads/".concat(o.data),t.form.profile_image_path="/uploads/".concat(o.data),t.$forceUpdate()}))}))}}},c=(e(500),e(56)),component=Object(c.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"create-nickname"}},[e("top"),t._v(" "),e("b-form",{on:{submit:function(o){return o.stopPropagation(),o.preventDefault(),t.onSubmit(o)}}},[e("b-row",[e("b-col",{attrs:{cols:"3"}},[e("div",{staticClass:"profile-image-wrapper"},[e("div",{staticClass:"upload-image"},[t.uploadImage?[e("p",{staticStyle:{width:"100%",height:"100%"},style:{background:"url("+t.profileImageURL+")","background-size":"cover"}})]:[e("img",{attrs:{src:"/images/icon-mom-face2.svg"}})]],2),t._v(" "),e("div",{staticClass:"box-file-input"},[e("label",[e("b-form-group",{attrs:{label:""}},[e("b-form-file",{staticClass:"mt-3",attrs:{accept:"image/jpeg, image/png, image/gif",plain:""},on:{change:t.onUploadImage},model:{value:t.form.profile_image,callback:function(o){t.$set(t.form,"profile_image",o)},expression:"form.profile_image"}})],1)],1)])])]),t._v(" "),e("b-col",{attrs:{cols:"9"}},[e("div",{staticClass:"form-wrap"},[e("b-form-group",{attrs:{label:""}},[e("b-input",{attrs:{state:t.validateState("nick_name"),disabled:1==t.confirmed,placeholder:"닉네임을 입력해 주세요.",type:"text"},model:{value:t.$v.form.nick_name.$model,callback:function(o){t.$set(t.$v.form.nick_name,"$model",o)},expression:"$v.form.nick_name.$model"}})],1),t._v(" "),""!==t.confirmed?[0==t.confirmed?[e("p",{staticClass:"des text-danger",staticStyle:{color:"#1773e2"}},[t._v("이미 사용중인 닉네임 입니다!")])]:[e("p",{staticClass:"des",staticStyle:{color:"#1773e2"}},[t._v("사용 가능한 닉네임 입니다!")])]]:t._e()],2)])],1),t._v(" "),e("div",{staticClass:"bottom-wrap"},[""===t.confirmed?[e("b-button",{staticClass:"position-bottom",attrs:{type:"submit",variant:"primary"}},[t._v("확인")])]:[0==t.confirmed?[e("b-button",{staticClass:"position-bottom",attrs:{type:"submit",variant:"primary"}},[t._v("확인")])]:[e("b-button",{staticClass:"position-bottom",attrs:{variant:"primary"},on:{click:t.onStart}},[t._v("확인")])]]],2)],1)],1)}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Top:e(404).default})}}]);