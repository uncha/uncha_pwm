(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{601:function(t,e,n){"use strict";n.r(e);n(19),n(29),n(35);var o={data:function(){return{}},mounted:function(){this.$route.hash.replace("#access_token=","").split("&")[0];var t=new naver.LoginWithNaverId({clientId:"tGaG875x4UFcnesQHT5p",callbackUrl:"".concat(window.location.origin,"/callback/Naver")}),e=this;t.init(),t.getLoginStatus((function(n){n&&e.$axios.$post("/api/login",{loginType:"naver_id",id:t.loginStatus.naverUser.email,isPopup:!1,callbackHandle:!0}).then((function(n){""==n?(e.$store.commit("setSocialId",t.loginStatus.naverUser.email),e.$store.commit("setSocialLoginType","naver_id"),e.$router.push({path:"/choice-user"})):e.login(t.loginStatus.naverUser.email,"naver_id")}))}))},methods:{login:function(t,e){var n=this;this.$axios.post("/api/login",{loginType:e,id:t}).then((function(t){n.$store.commit("setUser",t.data.nick_name),"mom"==t.data.user_type?n.$axios.get("/api/linked/mom",{params:{mom_nick_name:t.data.nick_name}}).then((function(t){t.data.length>0?n.$router.push({path:"/mom/quest/create/start"}):n.$router.push({path:"/mom/search-baby"})})):n.$router.push({path:"/baby/search-mom"})}))}}},r=n(82),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports}}]);