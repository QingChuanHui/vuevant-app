webpackJsonp([1],{"+TIe":function(t,e,a){t.exports=a.p+"static/img/4.a79db18.png"},"6xqC":function(t,e,a){"use strict";e.__esModule=!0;var n=c(a("Dd8w")),o=c(a("woOf")),i=c(a("//Fk")),s=c(a("7+uW")),r=c(a("KHko"));function c(t){return t&&t.__esModule?t:{default:t}}var l=void 0,u=function(t){return new i.default(function(e,a){l||((l=new(s.default.extend(r.default))({el:document.createElement("div")})).$on("input",function(t){l.value=t}),document.body.appendChild(l.$el)),(0,o.default)(l,(0,n.default)({resolve:e,reject:a},t))})};u.defaultOptions={value:!0,title:"",message:"",overlay:!0,lockScroll:!0,beforeClose:null,confirmButtonText:"",cancelButtonText:"",showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,callback:function(t){l["confirm"===t?"resolve":"reject"](t)}},u.alert=function(t){return u((0,n.default)({},u.currentOptions,t))},u.confirm=function(t){return u((0,n.default)({},u.currentOptions,{showCancelButton:!0},t))},u.close=function(){l&&(l.value=!1)},u.setDefaultOptions=function(t){(0,o.default)(u.currentOptions,t)},u.resetDefaultOptions=function(){u.currentOptions=(0,n.default)({},u.defaultOptions)},u.install=function(){s.default.use(r.default)},s.default.prototype.$dialog=u,u.resetDefaultOptions(),e.default=u},"8urd":function(t,e,a){"use strict";e.a=function(t){return n.a.fetchPost("/v1/app/sysArea/selectList",t)};var n=a("cKc3")},C7sf:function(t,e){},FfJW:function(t,e){},GTFK:function(t,e){},KHko:function(t,e,a){"use strict";e.__esModule=!0;var n=s(a("ArwO")),o=s(a("w+oK")),i=s(a("/4KT"));function s(t){return t&&t.__esModule?t:{default:t}}e.default=(0,n.default)({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"van-dialog-bounce"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],class:t.b()},[t.title?a("div",{class:t.b("header"),domProps:{textContent:t._s(t.title)}}):t._e(),a("div",{staticClass:"van-hairline",class:t.b("content")},[t._t("default",[t.message?a("div",{class:t.b("message",{withtitle:t.title}),domProps:{innerHTML:t._s(t.message)}}):t._e()])],2),a("div",{class:t.b("footer",{buttons:t.showCancelButton&&t.showConfirmButton})},[a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showCancelButton,expression:"showCancelButton"}],class:t.b("cancel"),attrs:{loading:t.loading.cancel,size:"large"},on:{click:function(e){t.handleAction("cancel")}}},[t._v("\n        "+t._s(t.cancelButtonText||t.$t("cancel"))+"\n      ")]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showConfirmButton,expression:"showConfirmButton"}],class:[t.b("confirm"),{"van-hairline--left":t.showCancelButton&&t.showConfirmButton}],attrs:{size:"large",loading:t.loading.confirm},on:{click:function(e){t.handleAction("confirm")}}},[t._v("\n        "+t._s(t.confirmButtonText||t.$t("confirm"))+"\n      ")])],1)])])},name:"dialog",components:{VanButton:o.default},mixins:[i.default],props:{title:String,message:String,callback:Function,beforeClose:Function,confirmButtonText:String,cancelButtonText:String,showCancelButton:Boolean,showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!1}},data:function(){return{loading:{confirm:!1,cancel:!1}}},methods:{handleAction:function(t){var e=this;this.beforeClose?(this.loading[t]=!0,this.beforeClose(t,function(){e.onClose(t),e.loading[t]=!1})):this.onClose(t)},onClose:function(t){this.$emit("input",!1),this.$emit(t),this.callback&&this.callback(t)}}})},LHqX:function(t,e,a){t.exports=a.p+"static/img/3.5ab33c0.png"},LOA1:function(t,e,a){t.exports=a.p+"static/img/1.2c67681.png"},MHRi:function(t,e,a){a("xL5C"),a("itIU"),a("GTFK")},NKGv:function(t,e,a){t.exports=a.p+"static/img/2.0df1589.png"},xoPN:function(t,e,a){"use strict";var n,o=a("bOdI"),i=a.n(o),s=(a("dKGA"),a("kSul")),r=a.n(s),c=(a("jgNZ"),a("syWm")),l=a.n(c),u=(a("Mcfu"),a("r9aq")),p=a.n(u),d=(a("cnGM"),a("S6j6")),f=a.n(d),h=a("Xxa5"),g=a.n(h),v=a("Gu7T"),m=a.n(v),y=a("exGp"),C=a.n(y),w=a("vMJZ"),b={data:function(){return{pages:{perPage:10,currPage:1,pageCount:1},loading:!1,noMore:!1,isEmpty:!1}},methods:{resetInit:function(){this.pages={perPage:10,currPage:1,pageCount:1},this.noMore=!1,this.isEmpty=!1},loadMore:function(){var t=this;this.pages.pageCount<this.pages.currPage?this.isNoMore():this.initData().then(function(e){t.$nextTick(function(){t.setPages(e)})})},isNoMore:function(){this.noMore=!0,this.loading=!1},nextPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pages.currPage+=1,this.pages.pageCount=t},setPages:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.isEmpty=0===t,this.loading=!1,t<=this.pages.perPage?this.noMore=!0:this.nextPage(Math.ceil(t/this.pages.perPage))}}},_=a("iR6O"),k=a.n(_),x={mixins:[b],name:"comment",props:{checktype:0},data:function(){return{list:[],picIp:"http://222.73.44.144:8300",finished:!1,loading:!1,companyId:"",defaultTop:k.a}},mounted:function(){this.$route.query.id&&(this.companyId=this.$route.query.id),this.resetInit()},watch:{checktype:function(t){this.resetInit(),this.list=[]}},methods:{initData:function(){var t=this;return C()(g.a.mark(function e(){var a,n,o;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=""===t.companyId?1:0,n={pageNo:t.pages.currPage,pageSize:t.pages.perPage,companyId:t.companyId,flagHot:a},1===t.checktype?n.isGreatEvaluate=1:2===t.checktype?n.havePic=1:3===t.checktype&&(n.isGreatEvaluate=0),e.next=5,Object(w.b)(n,!0).then(function(e){var a;e.page.records&&(a=t.list).push.apply(a,m()(e.page.records));return e.page.total});case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e,t)}))()}},components:(n={},i()(n,f.a.name,f.a),i()(n,p.a.name,p.a),i()(n,l.a.name,l.a),i()(n,r.a.name,r.a),n)},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-list",{staticClass:"backColor",attrs:{finished:t.noMore},on:{load:t.loadMore},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e,n){return a("van-cell",{key:n,staticStyle:{"margin-bottom":"0.7rem"},attrs:{to:{path:"/user/myOrder/reviewDetail",query:{id:e.id}}}},[a("div",{staticClass:"show-top"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:{src:t.picIp+e.ownerHeadPic,loading:t.defaultTop,error:t.defaultTop},expression:"{ src:picIp+item.ownerHeadPic,loading:defaultTop,error:defaultTop}",arg:"background-image"}],staticClass:"show-user-photo"}),t._v(" "),a("div",{staticClass:"show-name-date"},[a("div",{staticClass:"show-name"},[t._v(t._s(e.nickName?e.nickName:e.ownerPhone))]),t._v(" "),a("div",{staticStyle:{color:"rgb(177, 173, 173)"}},[t._v(t._s(e.evaluateDate))])])]),t._v(" "),a("van-row",{staticClass:"showCarType"},[a("van-col",{attrs:{span:"10"}},[t._v("\n        车型："+t._s(e.pBrand+e.pType)+"\n      ")]),t._v(" "),a("van-col",{attrs:{span:"14"}},[t._v("\n        花费：￥"+t._s(e.billMoney)),a("span",{staticStyle:{color:"red"}},[t._v("（省￥"+t._s(e.discountMoney)+"）")])])],1),t._v(" "),a("div",{staticClass:"show-cont",domProps:{innerHTML:t._s(e.evaluateContent?e.evaluateContent:"这个人很懒，什么都没留下！")}},[a("span",{staticStyle:{color:"#64739c"}},[t._v("更多")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.mgrBillEvaluatePicList.length,expression:"item.mgrBillEvaluatePicList.length"}],staticClass:"flexbox"},t._l(e.mgrBillEvaluatePicList,function(e,n){return a("div",{key:n,staticClass:"flexTop1"},[a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:t.picIp+e.path,expression:"picIp+item1.path",arg:"background-image"}],staticClass:"flex-img"})])})),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.companyId,expression:"!companyId"}],staticClass:"show-cont",staticStyle:{color:"#64739c"}},[a("van-icon",{staticStyle:{float:"left",margin:"5px 8px auto auto"},attrs:{name:"shop"}}),t._v(" "+t._s(e.companyName)+"\n    ")],1)],1)}))},staticRenderFns:[]};var $=a("VU/8")(x,S,!1,function(t){a("C7sf")},"data-v-706ebb8f",null);e.a=$.exports},zD9L:function(t,e,a){"use strict";e.a=function(t){return new o.a(function(t,e){if("undefined"!=typeof BMap)return t(BMap),!0;window.onBMapCallback=function(){console.log("百度地图脚本初始化成功..."),t(BMap)};var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src","https://api.map.baidu.com/api?v=2.0&ak=Zgvao4zZE6L1DYqiGocXjkSSULStabdQ&s=1&callback=onBMapCallback"),document.body.appendChild(a)})},e.b=function(t){return new o.a(function(e,a){s.a.get("http://api.map.baidu.com/geocoder/v2/?location="+t+"&output=json&coordtype=bd09ll,wgs84ll&pois=1&ak="+r).then(function(t){e(t)},function(t){a(t)}).catch(function(t){a(t)})})};var n=a("//Fk"),o=a.n(n),i=a("mtWM"),s=a.n(i),r="Zgvao4zZE6L1DYqiGocXjkSSULStabdQ"},zKIK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=a("bOdI"),i=a.n(o),s=(a("MHRi"),a("6xqC")),r=a.n(s),c=(a("Mcfu"),a("r9aq")),l=a.n(c),u=(a("dKGA"),a("kSul")),p=a.n(u),d=(a("jgNZ"),a("syWm")),f=a.n(d),h=(a("G/J0"),a("beN6")),g=a.n(h),v=(a("08XL"),a("24wo")),m=a.n(v),y=a("mvHQ"),C=a.n(y),w=a("xoPN"),b=a("xO/y"),_=a("L9TO"),k=a("S49b"),x=a("bh5B"),S=a("zD9L"),$=a("8urd"),L=a("P8HK"),O=a("0xDb"),M={data:function(){return{picUrl:"http://222.73.44.144:8300",imgList:[],topMenu:[],opacityS:{opacity:0},colorL:1,showBorder:1,rgbaS:{"background-color":"rgba(0,0,0,0)"},cssH:{height:window.innerHeight-50+"px"},textList:[],meallist:[],user:{}}},watch:{"$store.getters.currentCity":function(t){var e=this;this.$nextTick(function(){e.getCarousel(),e.category(),e.getNewsHot()})}},mounted:function(){this.$nextTick(function(){this.getCarousel(),this.category(),this.getNewsHot(),this.getmealHot(),this.location()})},activated:function(){this.$store.dispatch("scrollTo",this.$route),this.$refs.scroll.refresh();var t=O.c.getLocalStorage("userInfo").userInfo;this.user=t?JSON.parse(t):{}},methods:{location:function(){var t=this;O.c.removeLocalStorage("locationCity"),L.a.LatAndLon(function(e){var a=JSON.parse(e);t.$store.commit("SET_WGS",JSON.parse(e)),"abc"!==a.latitude?Object(S.b)(a.latitude+","+a.longitude).then(function(e){console.log("百度定位成功"),0===e.data.status&&Object($.a)({pageNo:1,pageSize:1,isShow:1,province:e.data.result.addressComponent.province,city:e.data.result.addressComponent.city}).then(function(e){if(0!==e.page.records.length){var a=e.page.records[0];O.c.setLocalStorage({locationCity:C()(a)}),""===t.$store.getters.currentCity.city?(O.c.setLocalStorage({currentCity:C()(a)}),t.$store.commit("SET_CURRENTCITY",a)):t.$store.getters.currentCity.city!==a.city&&t.$dialog.confirm({message:"当前定位您在"+a.city+",是否切换到"+a.city+"?"}).then(function(){O.c.setLocalStorage({currentCity:C()(a)}),t.$store.commit("SET_CURRENTCITY",a)}).catch(function(){})}else""===t.$store.getters.currentCity.city&&t.defaultCity()})},function(){t.defaultCity()}).catch(function(){t.defaultCity()}):t.defaultCity()})},defaultCity:function(){var t=this;Object($.a)({pageNo:1,pageSize:1,isShow:1,city:"上海市"}).then(function(e){if(0!==e.page.records.length){var a=e.page.records[0];O.c.setLocalStorage({currentCity:C()(a)}),t.$store.commit("SET_CURRENTCITY",a)}else t.$toast("没有开通业务的地区..")})},goCar:function(){this.$router.push({path:"/user/myCar"})},onPullingDown:function(){var t=this;this.category(),this.getNewsHot(),this.getCarousel(),setTimeout(function(){t.$refs.scroll.forceUpdate()},1e3)},getNewsHot:function(){var t=this;this.textList=[],Object(_.e)({pageNo:1,pageSize:8,isShow:1,areaId:this.$store.getters.currentCity.id,flagHot:1},!0).then(function(e){e.page.records&&(t.textList=e.page.records)})},getmealHot:function(){var t=this;this.meallist=[],Object(k.e)({pageNo:1,pageSize:4}).then(function(e){e.page.records&&(t.meallist=e.page.records)})},clickMenuItem:function(t){t&&(t.indexOf("http")>=0?window.location.href=t:this.$router.push({path:t}))},clickBaoyang:function(){this.user.id?this.$router.push({path:"/shop/maintain/handbook"}):this.$router.push({path:"/home/login"})},getCarousel:function(){var t=this;this.imgList=[],Object(b.c)({areaId:this.$store.getters.currentCity.id,isShow:1}).then(function(e){t.imgList=e.carouselList})},category:function(){var t=this;this.topMenu=[],Object(b.d)({areaId:this.$store.getters.currentCity.id,isShow:1}).then(function(e){t.topMenu=e.carouselList})},handleScroll:function(t){var e=this.$refs.swipe.height-46,a=0;this.showBorder=1,this.colorL=0,t.y>0?(this.colorL=1,a=0):(t.y=Math.abs(t.y),t.y>=0&&t.y<=40?(this.colorL=1,a=0):t.y>40&&t.y<e?a=t.y/e:(a=1,this.showBorder=0)),this.opacityS={opacity:a},this.rgbaS={"background-color":"rgba(255,255,255,"+a+")"}},urlArea:function(){this.$router.push({path:"/home/area"})}},components:(n={},i()(n,m.a.name,m.a),i()(n,g.a.name,g.a),i()(n,f.a.name,f.a),i()(n,p.a.name,p.a),i()(n,l.a.name,l.a),i()(n,r.a.name,r.a),i()(n,"comment",w.a),i()(n,"Scroll",x.a),n)},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.cssH},[n("van-nav-bar",{class:{border0:t.showBorder},style:t.rgbaS,attrs:{"left-arrow":!1,fixed:!0,"z-index":10}},[n("div",{class:{leftColr:t.colorL},attrs:{slot:"left"},on:{click:function(e){t.urlArea()}},slot:"left"},[t._v(t._s(t.$store.getters.currentCity.city))]),t._v(" "),n("div",{style:t.opacityS,attrs:{slot:"title"},slot:"title"},[t._v("驷惠车服")])]),t._v(" "),n("scroll",{ref:"scroll",attrs:{pullDownRefresh:!0,pullUpLoad:!1,listenScroll:!0},on:{pullingDown:t.onPullingDown,scroll:t.handleScroll}},[n("van-swipe",{ref:"swipe",staticStyle:{height:"12rem"},attrs:{autoplay:3e3,touchable:!1}},t._l(t.imgList,function(e,a){return n("van-swipe-item",{key:a,nativeOn:{click:function(a){t.clickMenuItem(e.url)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.picUrl+e.imgPath,expression:"picUrl+img.imgPath"}],attrs:{height:"100%",width:"100%"}})])})),t._v(" "),n("div",{staticClass:"flexbox"},t._l(t.topMenu,function(e,a){return n("div",{key:a,staticClass:"flexTop1",on:{click:function(a){t.clickMenuItem(e.url)}}},[n("div",{staticClass:"iconimg"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.picUrl+e.imgPath,expression:"picUrl+item.imgPath"}],attrs:{alt:""}})]),t._v(" "),n("div",{staticClass:"itemname"},[t._v("\n          "+t._s(e.title)+"\n        ")])])})),t._v(" "),n("van-cell-group",[n("van-cell",[n("van-row",{attrs:{gutter:"10"}},[n("van-col",{attrs:{span:"4"}},[n("span",{staticClass:"jian"},[t._v("推荐")])]),t._v(" "),n("van-col",{staticClass:"colClass",attrs:{span:"20"}},[n("van-swipe",{staticClass:"overflow colClass",attrs:{autoplay:3e3,vertical:"","show-indicators":!1,touchable:!1}},t._l(t.textList,function(e,a){return n("van-swipe-item",{key:a,nativeOn:{click:function(a){t.$router.push({path:"/news/detail",query:{id:e.id}})}}},[t._v("\n                "+t._s(e.title)+"\n              ")])}))],1)],1)],1)],1),t._v(" "),n("van-cell-group",{staticClass:"topGroup"},[n("van-row",[n("van-col",{staticClass:"guanggao",staticStyle:{"border-right":"1px solid #f1f1f1","border-bottom":"1px solid #f1f1f1"},attrs:{span:"12"},nativeOn:{click:function(e){t.clickMenuItem("/home/activity/newcomer")}}},[n("img",{attrs:{src:a("LOA1")}})]),t._v(" "),n("van-col",{staticClass:"guanggao",staticStyle:{"border-bottom":"1px solid #f1f1f1"},attrs:{span:"12"},nativeOn:{click:function(e){t.clickBaoyang()}}},[n("img",{attrs:{src:a("LHqX")}})])],1),t._v(" "),n("van-row",[n("van-col",{staticClass:"guanggao",staticStyle:{"border-right":"1px solid #f1f1f1"},attrs:{span:"12"},nativeOn:{click:function(e){t.clickMenuItem("/user/integral")}}},[n("img",{attrs:{src:a("NKGv")}})]),t._v(" "),n("van-col",{staticClass:"guanggao",attrs:{span:"12"},nativeOn:{click:function(e){t.clickMenuItem("/shop/washCar")}}},[n("img",{attrs:{src:a("+TIe")}})])],1)],1),t._v(" "),n("van-cell-group",{staticClass:"topGroup"},[t.$store.getters.myDefaultCar.carType?n("van-cell",{attrs:{icon:"",title:t.$store.getters.myDefaultCar.carType,"is-link":""},on:{click:function(e){t.goCar()}}},[n("svg-icon",{staticStyle:{color:"#f00","margin-right":"10px"},attrs:{slot:"icon","icon-class":"car"},slot:"icon"})],1):t._e()],1),t._v(" "),n("van-cell-group",{staticClass:"topGroup"},[n("van-cell",{attrs:{title:"热门套餐",icon:"wap-nav"}},[t.$store.getters.myDefaultCar.carType?t._e():n("div",{staticStyle:{color:"#ffa028"},on:{click:function(e){t.$router.push({path:"/user/myCar"})}}},[n("van-icon",{attrs:{name:"add"}}),t._v(" 添加爱车")],1)]),t._v(" "),n("van-cell",[n("van-row",{attrs:{gutter:"10"}},t._l(t.meallist,function(e,a){return n("van-col",{key:a,attrs:{span:"6"},nativeOn:{click:function(a){t.$router.push({path:"/shop/companyList",query:{type:999,remarks:e.id}})}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.picUrl+e.picture,expression:"picUrl+meal.picture"}],attrs:{alt:"",height:"100%",width:"100%"}})])}))],1)],1),t._v(" "),n("van-cell-group",{staticClass:"topGroup"},[n("van-cell",{attrs:{title:"车主评价",icon:"wap-nav"}}),t._v(" "),n("comment")],1)],1)],1)},staticRenderFns:[]};var B=a("VU/8")(M,T,!1,function(t){a("FfJW")},"data-v-10e06689",null);e.default=B.exports}});
//# sourceMappingURL=1.2dd311f3abe38536f72a.js.map