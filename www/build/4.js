webpackJsonp([4],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/order/order.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #f5f5f5">\n  <div class="ordercont">\n    <div class="dw_img">\n      <img src="/assets/imgs/position.png" style="width: 60%; height: 60%;margin: 13px;">\n    </div>\n    <p>\n      <font class="f14" style="font-size: 14px;">张浩宁&nbsp;&nbsp;15161819190</font>\n      <br> 收货地址：浙江省宁波市海曙区君和院小区\n      <ion-icon name="arrow-forward" style="margin-left: 12%;"></ion-icon>\n    </p>\n    <!-- <p>\n      <font class="f14" style="font-size: 14px;"></font>\n      <br> 您还没有默认的收货地址信息。\n    </p> -->\n    <div>\n    </div>\n  </div>\n\n  <div class="mybuy_cont">\n    <ul>\n      <li style="padding: 2% 0;margin-bottom: 3%;padding-left: 4%;">\n        <span class="linkimg">\n          <a>\n            <img src="/assets/imgs/1.jpg" style="width: 72px; height: 72px;">\n          </a>\n        </span>\n        <span class="linktitlen">\n          <span class="linkt2">\n            <a>象山枇杷</a>\n          </span>\n          <span class="linkt3">\n            <span class="fright">\n              <input value="X1" id="ss" style="width: 100%;text-align: right;"  class="buynum_button02" readonly>\n            </span>\n            <div class="c5 fleft tleft" style="margin-top: 20px;">\n              <font class="fred fbold f14">¥\n                <span class="f20">20.00</span>\n              </font>\n            </div>\n          </span>\n        </span>\n      </li>\n    </ul>\n  </div>\n  \n  <div class="add_contlist">\n    <div style="padding: 2% 0;padding-left: 4%;border: 0;">\n      <span style="width: 0.225rem;" class="input-label">备注:</span>\n      <input type="text" placeholder="如有其他要求请注明" style="width: 300px;"/>\n    </div>\n  </div>\n\n  <div class="buy_jiesuan">\n    <div class="buy_total_left" style="width: 100%">\n      <span class="buytotal" style="font-size: 12px;">总计:\n        <font class="fred fbold f12">¥\n          <span class="f16">88</span>\n        </font>(含运费：¥0)</span>\n    </div>\n    <button class="fright jiesuanbg" style="margin-right: 10px;font-family: \'黑体\';">立即购买</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=4.js.map