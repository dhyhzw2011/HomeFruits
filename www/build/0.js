webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(287);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(httpProvider, navCtrl) {
        this.httpProvider = httpProvider;
        this.navCtrl = navCtrl;
        this.slides = [];
        this.categories = [];
        this.products = [];
        this.spinner1 = false;
        this.params = {
            favoritesId: 2054400,
            pageNo: 1,
            pageSize: 20
        };
        this.initSlides(); //测试
        this.initCategories();
        //this.getSlides(); //生产采用服务端获取
        //this.getCategories();
        this.getProducts();
    }
    // 初始化slides  
    HomePage.prototype.initSlides = function () {
        this.slides = [
            { PictUrl: 'assets/imgs/logo1.jpg', Title: '图片1' },
            { PictUrl: 'assets/imgs/logo1.jpg', Title: '图片2' },
            { PictUrl: 'assets/imgs/logo1.jpg', Title: '图片3' }
        ];
    };
    // 初始化categories 
    HomePage.prototype.initCategories = function () {
        this.categories = [
            { Icon: 'assets/imgs/nav1.png', FavoritesTitle: '图片1' },
            { Icon: 'assets/imgs/nav2.png', FavoritesTitle: '图片2' },
            { Icon: 'assets/imgs/nav3.png', FavoritesTitle: '图片3' },
            { Icon: 'assets/imgs/nav4.png', FavoritesTitle: '图片4' }
        ];
    };
    // 初始化categories 
    HomePage.prototype.initProducts = function () {
        this.products = [
            { Icon: 'assets/imgs/nav1.png', FavoritesTitle: '图片1' },
            { Icon: 'assets/imgs/nav2.png', FavoritesTitle: '图片2' },
            { Icon: 'assets/imgs/nav3.png', FavoritesTitle: '图片3' },
            { Icon: 'assets/imgs/nav4.png', FavoritesTitle: '图片4' }
        ];
    };
    //获取幻灯片
    HomePage.prototype.getSlides = function () {
        var _this = this;
        var params = {
            favoritesId: 2056439,
            pageNo: 1,
            pageSize: 5
        };
        this.httpProvider.httpGet(__WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* AppGlobal */].API.getProducts, params, function (rs) {
            console.debug(rs);
            _this.slides = rs.data;
            _this.spinner1 = false;
        });
    };
    //获取分类
    HomePage.prototype.getCategories = function () {
        var _this = this;
        this.httpProvider.httpGet(__WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* AppGlobal */].API.getCategories, { appTag: 'dress' }, function (rs) {
            console.debug(rs);
            _this.categories = rs.data;
        });
    };
    //获取首页推荐列表
    HomePage.prototype.getProducts = function () {
        var _this = this;
        this.httpProvider.httpGet(__WEBPACK_IMPORTED_MODULE_0__providers_http_http__["a" /* AppGlobal */].API.getProducts, this.params, function (rs) {
            console.debug(rs);
            _this.products = rs.data;
        });
    };
    //商品详情
    HomePage.prototype.goDetails = function (item) {
        this.navCtrl.push("DetailsPage");
    };
    //解决切换其他页面回去轮播图不动问题
    HomePage.prototype.ionViewWillEnter = function () {
        this.slds.startAutoplay();
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.slds.stopAutoplay();
    };
    HomePage.prototype.ionViewDidEnter = function () {
        //修复轮播手动滑动后不能自动轮播问题
        this.slds.autoplayDisableOnInteraction = false;
        //console.log(this.slides)
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slds", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar style="opacity: 0.8" no-border-bottom color="primary">\n    <ion-title>首页</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n<ion-content fullscreen style="background-color: #efefef">\n  <ion-row *ngIf="spinner1">\n    <ion-col text-center>\n      <ion-spinner></ion-spinner>\n    </ion-col>\n  </ion-row>\n\n  <div>\n    <ion-slides pager autoplay="1000" speed="1200" loop="true" autoplayDisableOnInteration="true">\n      <ion-slide *ngFor="let item of slides" (click)="goDetails(item)">\n        <img src="{{item.PictUrl}}" alt="">\n        <!-- <div class="cover"></div> -->\n        <span class="title">{{item.Title}}</span>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div style="height: 140px; background: #fff;position: relative;clear: both;">\n    <div class="miliftop3" style="margin-top:0;">\n      <div class="milifeslider-1">\n        <div class="miiner1">\n          <div class="imageContent">\n            <img style="width: 3px; height: 16px;" src="/assets/imgs/smallsu.png" />\n          </div>\n          时令抢购\n          <font class="milittlef">&nbsp;&nbsp;欢迎购买，不甜不要钱</font>\n        </div>\n        <div class="miiner2" ng-show="goods.isSale||goods.BeginState">\n          <span class="smallcolock2">20天24:21:28</span>\n        </div>\n      </div>\n      <div class="milifeslider-2">\n        <div class="miiner3">\n          <img style="width: 72px; height: 72px;" src="/assets/imgs/buy1.jpg">\n        </div>\n        <div class="miiner4">\n          <div class="miinersub1"> 正宗象山樊岙枇杷&nbsp;\n            <div style="display: block;">特惠价</div>\n          </div>\n          <div class="miinersub2">\n            <font class="milittlef1">￥88.88</font>\n            &nbsp;&nbsp;\n            <font class="milittlef2">￥108.88</font>\n            <span class="milifespan1" (click)="goDetails()">立即抢购</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- // -->\n\n  <div class="miliftop5">\n\n    <div class="milifeslider-1">\n      <div class="miiner1">\n        <div class="imageContent">\n          <img style="width: 3px; height: 16px;" src="/assets/imgs/smallsu.png" />\n        </div>\n        购买记录\n        <font class="milittlef">&nbsp;&nbsp;每一颗果实都是精选，天然无农药，良心价</font>\n      </div>\n    </div>\n    <div class="milifeslider-3" id="milife_slider_1" style="white-space: nowrap; left: 0;">\n      <ion-slides style="height: 100%;" autoplay="800" speed="800" loop="true" autoplayDisableOnInteration="true">\n        <ion-slide *ngFor="let item of slides" (click)="goDetails(item)"> \n          <div class="miiner-1">\n            <div class="miinersub-1">\n                <img src="/assets/imgs/ba.png" alt="">\n            </div>\n            <div class="miinersub-2">客户：十年砍柴</div>\n            <div class="miinersub-3">购买3件</div>\n          </div>\n          <div class="miiner-1">\n            <div class="miinersub-1">\n                <img src="/assets/imgs/ba.png" alt="">\n            </div>\n            <div class="miinersub-2">客户：十年砍柴</div>\n            <div class="miinersub-3">购买3件</div>\n          </div>\n          <div class="miiner-1">\n            <div class="miinersub-1">\n                <img src="/assets/imgs/ba.png" alt="">\n            </div>\n            <div class="miinersub-2">客户：十年砍柴</div>\n            <div class="miinersub-3">购买3件</div>\n          </div>\n          <div class="miiner-1">\n            <div class="miinersub-1">\n                <img src="/assets/imgs/ba.png" alt="">\n            </div>\n            <div class="miinersub-2">客户：十年砍柴</div>\n            <div class="miinersub-3">购买3件</div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <!-- 新鲜事儿（新闻页） -->\n  <news></news>\n\n</ion-content>'/*ion-inline-end:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_http_http__["b" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_news__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__news_news__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__news_news__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the NewsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        console.log('Hello NewsComponent Component');
        this.text = 'Hello World';
    }
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'news',template:/*ion-inline-start:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/components/news/news.html"*/'<div class="miliftop3 myorder_top3_4">\n  <div class="cardtop_6_4">\n    <div class="miiner1" style="display:inline-block;">\n      <div class="imageContent">\n        <img style="width: 3px; height: 15px;" src="/assets/imgs/smallsu.png" />\n      </div>\n      新鲜事儿\n    </div>\n  </div>\n\n  <div class="myorder_top4">\n    <div class="myorder_top4_1">\n      <img style="width: 72px; height: 72px;" src="/assets/imgs/1.jpg">\n    </div>\n    <div class="myorder_top4_2">\n      <div class="myorder_top4_3">\n        <span class="myorder_top4_6" style=\'width: calc(100% - 66px);\'>\n          象山樊岙枇杷节 </span></div>\n      <div style="padding-top:3px;">\n        <font class="newsBody">&nbsp;&nbsp;五月枇杷黄似橘，年年新果第一枝。又到了枇杷上市的时节.新桥镇分管农业工作的副镇长陈顶</font>\n      </div>\n    </div>\n  </div>\n  <div class="myorder_top4">\n    <div class="myorder_top4_1">\n      <img style="width: 72px; height: 72px;" src="/assets/imgs/2.jpg">\n    </div>\n    <div class="myorder_top4_2">\n      <div class="myorder_top4_3">\n        <span class="myorder_top4_6" style=\'width: calc(100% - 66px);\'>\n          象山樊岙枇杷节 </span></div>\n      <div style="padding-top:3px;">\n        <font class="newsBody">&nbsp;&nbsp;白沙枇杷难以存放，所以价格一直居高不下，今年应天气自然原因，枇杷上市时间比往年稍晚。鹤浦镇樊岙村地理位置优越</font>\n      </div>\n    </div>\n  </div>\n  <div class="myorder_top4">\n    <div class="myorder_top4_1">\n      <img style="width: 72px; height: 72px;" src="/assets/imgs/3.jpg">\n    </div>\n    <div class="myorder_top4_2">\n      <div class="myorder_top4_3">\n        <span class="myorder_top4_6" style=\'width: calc(100% - 66px);\'>\n          象山樊岙枇杷节 </span></div>\n      <div style="padding-top:3px;">\n        <font class="newsBody">&nbsp;&nbsp;2004年，村里组建了全县首家枇杷专业合作社——海岛枇杷合作社，成立牛头山、半岛两家枇杷销售龙头企业，注册樊岙牌商标。</font>\n      </div>\n    </div>\n  </div>\n  <div class="myorder_top4">\n    <div class="myorder_top4_1">\n      <img style="width: 72px; height: 72px;" src="/assets/imgs/4.jpg">\n    </div>\n    <div class="myorder_top4_2">\n      <div class="myorder_top4_3">\n        <span class="myorder_top4_6" style=\'width: calc(100% - 66px);\'>\n          象山樊岙枇杷节 </span></div>\n      <div style="padding-top:3px;">\n        <font class="newsBody">&nbsp;&nbsp;“樊岙”枇杷先后被认定为浙江省绿色农产品、国家无公害农产品，同时樊岙枇杷基地也被授予市绿色农产品基地。</font>\n      </div>\n    </div>\n  </div>\n  \n\n</div>'/*ion-inline-end:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/components/news/news.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        console.log('Hello LoginComponent Component');
        this.text = 'Hello World';
    }
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/components/login/login.html"*/'<!-- Generated template for the LoginComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/components/login/login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        console.log('Hello RegisterComponent Component');
        this.text = 'Hello World';
    }
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register',template:/*ion-inline-start:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/components/register/register.html"*/'<!-- Generated template for the RegisterComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/components/register/register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=0.js.map