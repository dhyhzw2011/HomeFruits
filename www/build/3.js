webpackJsonp([3],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalPageModule", function() { return PersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalPageModule = /** @class */ (function () {
    function PersonalPageModule() {
    }
    PersonalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */]),
            ],
        })
    ], PersonalPageModule);
    return PersonalPageModule;
}());

//# sourceMappingURL=personal.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
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


var PersonalPage = /** @class */ (function () {
    function PersonalPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [
            { title: "基本信息维护" },
            { title: "登录密码修改" },
            { title: "我的收货地址" }
        ];
    }
    PersonalPage.prototype.itemClick = function (item) {
        var options = {
            statusbar: {
                color: '#f8285c'
            },
            toolbar: {
                height: 44,
                color: '#f8285c'
            },
            title: {
                color: '#ffffffff',
                showPageTitle: true
            },
            backButton: {
                image: 'back',
                imagePressed: 'back_pressed',
                align: 'left',
                event: 'backPressed'
            },
            backButtonCanClose: true
        };
    };
    PersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal',template:/*ion-inline-start:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/personal/personal.html"*/'<ion-header>\n    <ion-navbar style="opacity: 0.8" no-border-bottom>\n      <ion-title>\n        个人中心\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let item of items" (click)="itemClick(item)">\n          {{item.title}}\n        </button>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/zyg/Documents/study/angular/ionic/HomeFruits/src/pages/personal/personal.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
    ], PersonalPage);
    return PersonalPage;
    var _a;
}());

//# sourceMappingURL=personal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map