(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{568:function(t,e,o){"use strict";o.r(e);var r=o(415),n=o(416),m={mixins:[r.validationMixin],data:function(){return{form:{email:"",password:"",type:"mom"}}},validations:{form:{email:{required:n.required}}},methods:{validateState:function(t){var e=this.$v.form[t],o=e.$dirty,r=e.$error;return o?!r:null},onSubmit:function(){var t=this;this.$v.form.$touch(),this.$v.form.$anyError||this.$axios.$post("/api/login",{loginType:"naver_id",id:this.form.email}).then((function(e){console.log("RES",e),""==e?(t.$store.commit("setSocialId",t.form.email),t.$store.commit("setSocialLoginType","naver_id"),t.$router.push({path:"/choice-user"})):t.login(t.form.email,"naver_id")}))},login:function(t,e){var o=this;this.$axios.post("/api/login",{loginType:e,id:t}).then((function(t){o.$store.commit("setUser",t.data.nick_name),"mom"==t.data.user_type?o.$axios.get("/api/linked/mom",{params:{mom_nick_name:t.data.nick_name}}).then((function(t){t.data.length>0?o.$router.push({path:"/mom/quest/create/start"}):o.$router.push({path:"/mom/search-baby"})})):o.$router.push({path:"/baby/search-mom"})}))}}},l=o(56),component=Object(l.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-form",{staticClass:"join-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("b-form-group",{attrs:{label:"아이디"}},[o("b-form-input",{attrs:{state:t.validateState("email"),"aria-describedby":"email-feedback"},model:{value:t.$v.form.email.$model,callback:function(e){t.$set(t.$v.form.email,"$model",e)},expression:"$v.form.email.$model"}}),t._v(" "),o("b-form-invalid-feedback",{attrs:{id:"email-feedback"}},[t._v("아이디를 입력해 주세요")])],1),t._v(" "),o("b-button",{staticClass:"mt-4",attrs:{variant:"primary",type:"submit"}},[t._v("확인")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);