webpackJsonp([24],{Qmvt:function(t,i){},yVrJ:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a,n=s("bOdI"),e=s.n(n),c=(s("jydU"),s("WQwN")),v=s.n(c),o=(s("tLo2"),s("blRl")),l=s.n(o),r=s("xO/y"),d=s("0xDb"),u={data:function(){return{picUrl:"http://222.73.44.144:8300",show:!1,user:{},activity:{}}},mounted:function(){var t=this,i=d.c.getLocalStorage("userInfo").userInfo;i&&(this.user=JSON.parse(i)),Object(r.a)({id:123456}).then(function(i){t.activity=i.new})},activated:function(){},methods:{joinActivity:function(){var t=this;this.user?Object(r.e)({activityId:123456,ownerId:this.user.id}).then(function(i){i.new?t.$toast("您已经参加次活动！"):Object(r.f)({activityId:123456,ownerId:t.user.id}).then(function(t){})}):this.$router.push({path:"/home/login"})},onClickLeft:function(){this.$router.go(-1)}},components:(a={},e()(a,l.a.name,l.a),e()(a,v.a.name,v.a),a)},_={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("van-nav-bar",{staticStyle:{"z-index":"10"},attrs:{title:"新人有礼","left-text":"","right-text":"","left-arrow":"",fixed:!0},on:{"click-left":t.onClickLeft}}),t._v(" "),s("div",{staticClass:"page mTop"},[s("div",{staticClass:"in-banner"},[s("div",{staticClass:"in-rule",on:{click:function(i){t.show=!0}}})]),t._v(" "),s("div",{staticClass:"bottom-background"},[s("div",{staticClass:"in-coupons-wrap"},[t._m(0),t._v(" "),s("div",{staticClass:"in-btn",on:{click:function(i){t.joinActivity()}}},[t._v("一键领取")])]),t._v(" "),s("div",{staticClass:"in-title-wrap"}),t._v(" "),t._m(1)]),t._v(" "),s("van-popup",{model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-title"}),t._v(" "),s("p",{staticClass:"text-txt",domProps:{innerHTML:t._s(t.activity.activityRule)}}),t._v(" "),s("div",{staticClass:"callservice"},[t._v("客服电话：4008-851-877")])]),t._v(" "),s("div",{staticClass:"modal-close",on:{click:function(i){t.show=!1}}},[s("van-icon",{attrs:{name:"close"}})],1)])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"in-coupons clear"},[i("div",{staticClass:"in-coupon-item in-coupon-item-space"}),this._v(" "),i("div",{staticClass:"in-coupon-item"}),this._v(" "),i("div",{staticClass:"in-coupon-item in-coupon-item-space"}),this._v(" "),i("div",{staticClass:"in-coupon-item"})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"in-item-wrap clear"},[s("div",{staticClass:"in-item"},[s("div",{staticClass:"in-img in-img-sheng"}),t._v(" "),s("div",{staticClass:"in-gray-words"},[t._v("4S店养车")]),t._v(" "),s("div",{staticClass:"in-gray-title"},[t._v("总价低至5折")])]),t._v(" "),s("div",{staticClass:"in-item"},[s("div",{staticClass:"in-img in-img-4s"}),t._v(" "),s("div",{staticClass:"in-gray-words"},[t._v("80家大品牌")]),t._v(" "),s("div",{staticClass:"in-gray-title"},[t._v("4000家4S店任你选")])]),t._v(" "),s("div",{staticClass:"in-item"},[s("div",{staticClass:"in-img in-img-pei"}),t._v(" "),s("div",{staticClass:"in-gray-words"},[t._v("100%品牌配件")]),t._v(" "),s("div",{staticClass:"in-gray-title"},[t._v("明码标价")])]),t._v(" "),s("div",{staticClass:"in-item"},[s("div",{staticClass:"in-img in-img-ji"}),t._v(" "),s("div",{staticClass:"in-gray-words"},[t._v("在线预约")]),t._v(" "),s("div",{staticClass:"in-gray-title"},[t._v("到店0等待")])])])}]};var m=s("VU/8")(u,_,!1,function(t){s("Qmvt")},"data-v-6c73ee29",null);i.default=m.exports}});
//# sourceMappingURL=24.6e56fcb9eb3c84d7011a.js.map