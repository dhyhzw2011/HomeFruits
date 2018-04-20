webpackJsonp([5],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage.prototype.goShopCart = function () {
        this.navCtrl.push("ShopCartPage");
    };
    DetailsPage.prototype.goOrder = function () {
        this.navCtrl.push("OrderPage");
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="red">\n    <ion-title>商品详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content style="background-color: #f5f5f5;overflow-x: hidden;">\n\n  <div style="display:block;position:relative;">\n    <div class="index_focus">\n      <img src="/assets/imgs/1.jpg" style="width: 100%;height: 250px;">\n    </div>\n    <div class="add_contlist" style="margin-top: 0;border-bottom:1px rgba(211,211,211,0.50) solid;padding: 0 15px;">\n      <span class="pallmall_goods_2">时令水果&nbsp;&nbsp;象山枇杷</span>\n      <span class="pallmall_goods_2" style="margin-top: 0;">\n        <span class="pallmall_goodsfont1 fleft">¥88.88</span>\n        <span class="pallmall_goodsfont2 fright" style="padding-left: 2px;">\n          剩余：4000件 </span>\n        <span class="pallmall_goodsfont2 fright">\n          已售：1件 </span>\n      </span>\n    </div>\n\n    <div class="pallmall_goods_6" style="margin-top:0;">\n      <span class="pallmall_goodsfont2 fleft">\n        产品说明：\n      </span>\n      <span class="pallmall_goodsfont3 fleft">\n        &nbsp;5斤装小果，顺丰包邮\n      </span>\n      <a class="fright">\n        <ion-icon ios="ios-more"></ion-icon>\n      </a>\n    </div>\n\n    <div class="pallmall_goods_6" style="margin-top:10px;">\n      <span class="pallmall_goodsfont2 fleft">购买数量(无限制)</span>\n      <span class="linkt1" style="margin: 0 0 0 0;vertical-align: middle;width:40%;">\n        <span class="addbutp">\n          <img src="/assets/imgs/min.png" style="width: 16px;height: 16px;margin-bottom: -3px;" />\n        </span>\n        <input style="width: 25%; min-width: 35px; height: 10px;" class="buynum_button02" value="1" />\n        <span class="addbutp">\n          <img src="/assets/imgs/add.png" style="width: 16px;height: 16px;margin-bottom: -3px;" />\n        </span>\n      </span>\n    </div>\n\n\n    <div class="pallmall_goods_4">\n      <div class="pallmall_goods_3">\n        <span>售后服务</span>\n      </div>\n      <div class="grouptop1_12">\n        <div class="grouptop1_13" style="padding:5px 0;">\n          <div class="" style="  float: left;height: initial;width: 100%;margin-top: 0;line-height: 20px;">\n            <dd class="pallmall_goods_5" style="margin-bottom:10px;"> 个电饭锅违法&nbsp;&nbsp;环境很干净</dd>\n            <dd class="pallmall_goods_5">十大</dd>\n            <dd class="pallmall_goods_5" style="margin-top:10px;">售后服务:</dd>\n            <dd class="pallmall_goods_5">发射方式</dd>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-list>\n    <img src="/assets/imgs/1.jpg">\n    <img src="/assets/imgs/1.jpg">\n    <img src="/assets/imgs/1.jpg">\n  </ion-list>\n\n  <div class="shops_totalnew1">\n    <div class="fleft boomtom" style="border-top: 1px solid #ddd;height:50px">\n      <div style="color: #626262; " class="pallmall_goods_7">\n        <div class="boomtomnew" style="height:32px;line-height:32px;text-align:center;">\n          <img src="/assets/imgs/buyicon.png" style="width:24px;height:24px;margin-top:8px;" />\n        </div>\n        <div class="boomtomnew" style="height:18px;line-height:18px;" (click)="goShopCart()"> 购物车</div>\n      </div>&nbsp;&nbsp;\n    </div>\n    <div class="fleft  paybuttonRR2">\n      <span>\n        <font class="fontYuan">加入购物车</font>\n      </span>\n    </div>\n    <div class="fleft paybuttonRR">\n      <span>\n        <font class="fontYuan" (click)="goOrder()">立即购买</font>\n      </span>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map