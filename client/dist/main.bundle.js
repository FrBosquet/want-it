webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n  <div class='wrapper'>\n    <router-outlet></router-outlet>\n  </div>\n  <app-user-bullet *ngIf=\"session.user\"></app-user-bullet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin: 0 auto;\n  max-width: 100%;\n  width: 1280px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        console.log('current user', this.session);
        this.session.getSession();
    };
    AppComponent.prototype.logout = function () {
        this.session.unsetSession();
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__button_button_component__ = __webpack_require__("../../../../../src/app/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_view_login_view_component__ = __webpack_require__("../../../../../src/app/login-view/login-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wish_card_wish_card_component__ = __webpack_require__("../../../../../src/app/wish-card/wish-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__post_card_post_card_component__ = __webpack_require__("../../../../../src/app/post-card/post-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_view_profile_view_component__ = __webpack_require__("../../../../../src/app/profile-view/profile-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__new_wish_view_new_wish_view_component__ = __webpack_require__("../../../../../src/app/new-wish-view/new-wish-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__brand_selector_brand_selector_component__ = __webpack_require__("../../../../../src/app/brand-selector/brand-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__brand_card_brand_card_component__ = __webpack_require__("../../../../../src/app/brand-card/brand-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__product_selector_product_selector_component__ = __webpack_require__("../../../../../src/app/product-selector/product-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__product_card_product_card_component__ = __webpack_require__("../../../../../src/app/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__edition_selector_edition_selector_component__ = __webpack_require__("../../../../../src/app/edition-selector/edition-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__edition_card_edition_card_component__ = __webpack_require__("../../../../../src/app/edition-card/edition-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__new_brand_modal_new_brand_modal_component__ = __webpack_require__("../../../../../src/app/new-brand-modal/new-brand-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__new_product_modal_new_product_modal_component__ = __webpack_require__("../../../../../src/app/new-product-modal/new-product-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__new_edition_modal_new_edition_modal_component__ = __webpack_require__("../../../../../src/app/new-edition-modal/new-edition-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__wish_view_wish_view_component__ = __webpack_require__("../../../../../src/app/wish-view/wish-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__state_selector_state_selector_component__ = __webpack_require__("../../../../../src/app/state-selector/state-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__new_post_modal_new_post_modal_component__ = __webpack_require__("../../../../../src/app/new-post-modal/new-post-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__google_search_google_search_component__ = __webpack_require__("../../../../../src/app/google-search/google-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__photo_uploader_photo_uploader_component__ = __webpack_require__("../../../../../src/app/photo-uploader/photo-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_bullet_user_bullet_component__ = __webpack_require__("../../../../../src/app/user-bullet/user-bullet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__post_view_post_view_component__ = __webpack_require__("../../../../../src/app/post-view/post-view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__login_view_login_view_component__["a" /* LoginViewComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_16__profile_view_profile_view_component__["a" /* ProfileViewComponent */] },
    { path: 'new-wish', component: __WEBPACK_IMPORTED_MODULE_17__new_wish_view_new_wish_view_component__["a" /* NewWishViewComponent */] },
    { path: 'wish/:id', component: __WEBPACK_IMPORTED_MODULE_27__wish_view_wish_view_component__["a" /* WishViewComponent */] },
    { path: 'post/:id', component: __WEBPACK_IMPORTED_MODULE_33__post_view_post_view_component__["a" /* PostViewComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__button_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_view_login_view_component__["a" /* LoginViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__wish_card_wish_card_component__["a" /* WishCardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__post_card_post_card_component__["a" /* PostCardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__profile_view_profile_view_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__new_wish_view_new_wish_view_component__["a" /* NewWishViewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__brand_selector_brand_selector_component__["a" /* BrandSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_19__brand_card_brand_card_component__["a" /* BrandCardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__product_selector_product_selector_component__["a" /* ProductSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_21__product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__edition_selector_edition_selector_component__["a" /* EditionSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_23__edition_card_edition_card_component__["a" /* EditionCardComponent */],
            __WEBPACK_IMPORTED_MODULE_24__new_brand_modal_new_brand_modal_component__["a" /* NewBrandModalComponent */],
            __WEBPACK_IMPORTED_MODULE_25__new_product_modal_new_product_modal_component__["a" /* NewProductModalComponent */],
            __WEBPACK_IMPORTED_MODULE_26__new_edition_modal_new_edition_modal_component__["a" /* NewEditionModalComponent */],
            __WEBPACK_IMPORTED_MODULE_27__wish_view_wish_view_component__["a" /* WishViewComponent */],
            __WEBPACK_IMPORTED_MODULE_28__state_selector_state_selector_component__["a" /* StateSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_29__new_post_modal_new_post_modal_component__["a" /* NewPostModalComponent */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_30__google_search_google_search_component__["a" /* GoogleSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_31__photo_uploader_photo_uploader_component__["a" /* PhotoUploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_32__user_bullet_user_bullet_component__["a" /* UserBulletComponent */],
            __WEBPACK_IMPORTED_MODULE_33__post_view_post_view_component__["a" /* PostViewComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_13__services_session_service__["a" /* SessionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/brand-card/brand-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='brand-card'>\n  <div class=\"img\" [ngStyle]=\"{'background-image': photoURI}\">\n  </div>\n  <h6>{{brand.name}}</h6>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/brand-card/brand-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc( 100% - 5px);\n  height: 140px; }\n  @media screen and (max-width: 48em) {\n    .brand-card {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .brand-card .img {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    cursor: pointer;\n    max-width: 90%;\n    margin: 0 auto; }\n  .brand-card .img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .brand-card h6 {\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 80%; }\n  .brand-card .img {\n    height: 60px;\n    width: 60px;\n    background-size: cover;\n    background-position: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brand-card/brand-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandCardComponent = (function () {
    function BrandCardComponent() {
    }
    BrandCardComponent.prototype.ngOnInit = function () {
        console.log(this.brand);
        this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (this.brand.logoURI || 'default') + ")";
    };
    return BrandCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BrandCardComponent.prototype, "brand", void 0);
BrandCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brand-card',
        template: __webpack_require__("../../../../../src/app/brand-card/brand-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/brand-card/brand-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BrandCardComponent);

//# sourceMappingURL=brand-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/brand-selector/brand-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <h3>Select a brand</h3>\n  <input type=\"text\" name=\"brandName\" value=\"\" (ngModelChange)=\"change($event)\" [(ngModel)]=\"brandName\">\n  <div class=\"brand-container\">\n    <app-brand-card *ngFor='let brand of visibleBrands' (click)=\"select(brand)\" [brand]='brand'></app-brand-card>\n    <app-brand-card (click)=\"showBrandModal()\" [brand]='{name:\"New Brand\"}'></app-brand-card>\n  </div>\n</div>\n<app-new-brand-modal\n  *ngIf=\"brandModal\"\n  (onClickOutside)=\"hideBrandModal()\"\n  (onFinish)=\"newBrand($event)\">\n</app-new-brand-modal>\n"

/***/ }),

/***/ "../../../../../src/app/brand-selector/brand-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 400px;\n  border-radius: 2px;\n  width: 80%;\n  margin: 15px auto;\n  padding: 15px; }\n  .wrapper .brand-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 15px; }\n    @media screen and (max-width: 48em) {\n      .wrapper .brand-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n    .wrapper .brand-container app-brand-card {\n      width: calc((100% - 30px) / 5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brand-selector/brand-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandSelectorComponent = (function () {
    function BrandSelectorComponent(request) {
        this.request = request;
        this.onSelectBrand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.maxVisibleBrands = 9;
    }
    BrandSelectorComponent.prototype.showBrandModal = function (event) {
        this.brandModal = true;
    };
    BrandSelectorComponent.prototype.hideBrandModal = function (event) {
        this.brandModal = false;
    };
    BrandSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.request.get('/brand')
            .subscribe(function (res) {
            _this.brandList = res.brands;
            _this.visibleBrands = _this.brandList.slice(0, _this.maxVisibleBrands);
        });
    };
    BrandSelectorComponent.prototype.change = function (event) {
        this.visibleBrands = this.brandList
            .filter(function (elm) {
            return (new RegExp(event, 'i')).test(elm['name']);
        })
            .slice(0, this.maxVisibleBrands);
    };
    BrandSelectorComponent.prototype.select = function (brand) {
        this.onSelectBrand.emit(brand);
    };
    BrandSelectorComponent.prototype.newBrand = function (event) {
        console.log("Received", event);
        if (event['name']) {
            console.log('This brand exist');
            this.brandName = event['name'];
            this.change(event['name']);
        }
        else {
            this.brandList.push(event['brand']);
            this.brandName = event['brand']['name'];
            this.change(event['brand']['name']);
        }
    };
    return BrandSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], BrandSelectorComponent.prototype, "onSelectBrand", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], BrandSelectorComponent.prototype, "brandModal", void 0);
BrandSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brand-selector',
        template: __webpack_require__("../../../../../src/app/brand-selector/brand-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/brand-selector/brand-selector.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], BrandSelectorComponent);

var _a;
//# sourceMappingURL=brand-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/button/button.component.html":
/***/ (function(module, exports) {

module.exports = "<button>{{label}}</button>\n"

/***/ }),

/***/ "../../../../../src/app/button/button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  font-family: 'Questrial', sans-serif;\n  font-size: 1.3em;\n  border: none;\n  background: none;\n  color: #333;\n  cursor: pointer;\n  padding: 8px;\n  transition: all 0.3s;\n  -webkit-transform: translate(0px, 0px);\n          transform: translate(0px, 0px);\n  text-shadow: 0px 0px 0px #888; }\n\nbutton:hover {\n  -webkit-transform: translate(-2px, -7px);\n          transform: translate(-2px, -7px);\n  text-shadow: 2px 7px 3px #888; }\n\nbutton:focus {\n  outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/button/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    return ButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "label", void 0);
ButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-button',
        template: __webpack_require__("../../../../../src/app/button/button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/button/button.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ButtonComponent);

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/app/edition-card/edition-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='edition-card'>\n  <div class=\"img\" [ngStyle]=\"{'background-image': photoURI}\"></div>\n  <h6>{{edition.name}}</h6>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edition-card/edition-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edition-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc( 100% - 5px);\n  height: 140px; }\n  @media screen and (max-width: 48em) {\n    .edition-card {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .edition-card .img {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    cursor: pointer;\n    max-width: 90%;\n    margin: 0 auto; }\n  .edition-card .img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .edition-card h6 {\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 80%; }\n  .edition-card .img {\n    height: 60px;\n    width: 60px;\n    background-size: cover;\n    background-position: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edition-card/edition-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditionCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditionCardComponent = (function () {
    function EditionCardComponent(request) {
        this.request = request;
    }
    EditionCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.edition['productId']) {
            this.request.get("/post/edition/one/" + this.edition['_id'])
                .subscribe(function (res) {
                _this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (res.post ? res.post.photoURI : 'default') + ")";
            });
        }
        else {
            this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint + "/images/default)";
        }
    };
    return EditionCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditionCardComponent.prototype, "edition", void 0);
EditionCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edition-card',
        template: __webpack_require__("../../../../../src/app/edition-card/edition-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edition-card/edition-card.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], EditionCardComponent);

var _a;
//# sourceMappingURL=edition-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/edition-selector/edition-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <h3>Select a edition</h3>\n  <input type=\"text\" name=\"editionName\" value=\"\" (ngModelChange)=\"change($event)\" [(ngModel)]=\"editionName\">\n  <div class=\"edition-container\">\n    <app-edition-card *ngFor='let edition of visibleEdition' (click)=\"select(edition)\" [edition]='edition'></app-edition-card>\n    <app-edition-card (click)=\"showEditionModal()\" [edition]='{name:\"New Edition\"}'></app-edition-card>\n  </div>\n</div>\n<app-new-edition-modal\n  *ngIf=\"editionModal\"\n  (onClickOutside)=\"hideEditionModal()\"\n  (onFinish)=\"newEdition($event)\"\n  [productId]=\"productId\">\n</app-new-edition-modal>\n"

/***/ }),

/***/ "../../../../../src/app/edition-selector/edition-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 400px;\n  border-radius: 2px;\n  width: 80%;\n  margin: 15px auto;\n  padding: 15px; }\n  .wrapper .edition-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 15px; }\n    @media screen and (max-width: 48em) {\n      .wrapper .edition-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n    .wrapper .edition-container app-edition-card {\n      width: calc((100% - 30px) / 5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edition-selector/edition-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditionSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditionSelectorComponent = (function () {
    function EditionSelectorComponent(request) {
        this.request = request;
        this.onSelectEdition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.maxVisibleEditions = 9;
    }
    EditionSelectorComponent.prototype.showEditionModal = function (event) {
        console.log("Show modal");
        this.editionModal = true;
    };
    EditionSelectorComponent.prototype.hideEditionModal = function (event) {
        this.editionModal = false;
    };
    EditionSelectorComponent.prototype.change = function (event) {
        this.visibleEdition = this.editionList
            .filter(function (elm) {
            return (new RegExp(event, 'i')).test(elm['name']);
        })
            .slice(0, this.maxVisibleEditions);
        console.log(this.visibleEdition);
    };
    EditionSelectorComponent.prototype.select = function (edition) {
        this.onSelectEdition.emit(edition);
    };
    EditionSelectorComponent.prototype.newEdition = function (event) {
        console.log("Received", event);
        if (event['name']) {
            console.log('This edition exist');
            this.editionName = event['name'];
            this.change(event['name']);
        }
        else {
            this.editionList.push(event['edition']);
            this.editionName = event['edition']['name'];
            this.change(event['edition']['name']);
        }
    };
    return EditionSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], EditionSelectorComponent.prototype, "editionList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], EditionSelectorComponent.prototype, "visibleEdition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditionSelectorComponent.prototype, "productId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditionSelectorComponent.prototype, "editionModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditionSelectorComponent.prototype, "onSelectEdition", void 0);
EditionSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edition-selector',
        template: __webpack_require__("../../../../../src/app/edition-selector/edition-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edition-selector/edition-selector.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], EditionSelectorComponent);

var _a;
//# sourceMappingURL=edition-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/google-search/google-search.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Useful links</h2>\n<div class='links'>\n  <div *ngFor='let link of links'>\n    <a href=\"{{link.link}}\" target=\"_blank\"><h6>{{link.title}}</h6></a>\n    <p>{{link.description}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/google-search/google-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  @media screen and (max-width: 48em) {\n    .links {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .links div {\n    width: calc( 100% / 5); }\n    .links div a h6 {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/google-search/google-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleSearchComponent = (function () {
    function GoogleSearchComponent(request) {
        this.request = request;
    }
    GoogleSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('received', this.product);
        var query = this.product.brandId.name + " " + this.product.name;
        this.request.post('/shop', { query: query })
            .subscribe(function (res) {
            console.log(res);
            _this.links = res.links;
        });
    };
    return GoogleSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GoogleSearchComponent.prototype, "product", void 0);
GoogleSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-google-search',
        template: __webpack_require__("../../../../../src/app/google-search/google-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/google-search/google-search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], GoogleSearchComponent);

var _a;
//# sourceMappingURL=google-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"wrapper\">\n    <h1 class='title'>\n      WantIt\n    </h1>\n    <nav class=\"menu\">\n      <app-button [label]=\"'home'\" (click)='enroute(\"home\")'></app-button>\n      <app-button *ngIf='!session.user' [label]=\"'login'\" (click)='enroute(\"login\")'></app-button>\n      <app-button *ngIf='session.user' [label]=\"'new wish'\" (click)='enroute(\"new-wish\")'></app-button>\n      <app-button *ngIf='session.user' [label]=\"'profile'\" (click)='enroute(\"profile/\" + session.user._id)'></app-button>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  padding: 0px 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  box-shadow: 0px 5px 5px 0px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  margin-bottom: 70px;\n  background-color: #F9F9F9;\n  border-bottom: 2px solid #851479; }\n  @media screen and (max-width: 48em) {\n    header {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n\nheader .wrapper {\n  margin: 0 auto;\n  max-width: 100%;\n  width: 1280px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nheader .wrapper h1.title {\n  text-transform: none;\n  color: #333;\n  font-family: 'Monoton', sans-serif;\n  margin: auto;\n  font-size: 2.5em;\n  font-weight: normal;\n  line-height: 80px;\n  text-shadow: 1px 1px 0px #851479; }\n\nheader .wrapper .menu {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: right; }\n  @media screen and (max-width: 48em) {\n    header .wrapper .menu {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.enroute = function (to) {
        this.router.navigate(["/" + to]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Latest posts</h1>\n<div class=\"wish-container\">\n  <app-post-card *ngFor='let post of posts' [post]='post'></app-post-card>\n</div>\n\n<h1>Latest wishes</h1>\n<div class=\"wish-container\">\n  <app-wish-card *ngFor='let wish of wishes' [wish]='wish'></app-wish-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wish-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  @media screen and (max-width: 48em) {\n    .wish-container {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wish-container app-wish-card, .wish-container app-post-card {\n    width: 20%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(request) {
        this.request = request;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.request.get('/wish')
            .subscribe(function (res) {
            console.log(res.wishes);
            _this.wishes = res.wishes
                .sort(function (a, b) { return a['created_at'] - b['created_at']; })
                .slice(0, 10);
        });
        this.request.get('/post')
            .subscribe(function (res) {
            console.log(res.posts);
            _this.posts = res.posts
                .sort(function (a, b) { return a['created_at'] - b['created_at']; })
                .slice(0, 10);
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-view/login-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>Session</h1>\n  <p>Login using your credentials. If you don't have an account yet, you can sign up for one. Its INSTANT and its FREE. Have fun!</p>\n  <div class=\"error\">\n    {{error}}\n  </div>\n  <div class=\"forms-wrapper\">\n    <form class=\"auth-form\" #loginForm=\"ngForm\">\n      <h3>Login</h3>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"loginUsername\" value=\"\" placeholder=\"Your username\">\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"loginPassword\" value=\"\" placeholder=\"Your password\">\n      <app-button [label]=\"'login'\" (click)='login(loginForm)'></app-button>\n    </form>\n\n    <form class=\"auth-form\" #signupForm=\"ngForm\">\n      <h3>Signup</h3>\n      <app-photo-uploader (onPhotoChange)=\"photoChange($event)\"></app-photo-uploader>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"signupUsername\" value=\"\" placeholder=\"Your username name\">\n      <label for=\"username\">Full name:</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"signupName\" value=\"\" placeholder=\"Your full name\">\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"signupPassword\" value=\"\" placeholder=\"Your password\">\n      <label for=\"email\">Email:</label>\n      <input type=\"text\" name=\"email\" [(ngModel)]=\"signupEmail\" value=\"\" placeholder=\"Your email\">\n      <app-button [label]=\"'signup'\" (click)='signup(signupForm)'></app-button>\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/login-view/login-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  @media screen and (max-width: 48em) {\n    .forms-wrapper {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .forms-wrapper .auth-form {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    box-shadow: 0px 5px 5px 0px #888;\n    margin-bottom: 10px;\n    border: 1px solid #CCC;\n    width: 50%;\n    margin: 15px;\n    padding: 10px 30px 25px 30px; }\n    .forms-wrapper .auth-form app-button {\n      padding: 15px;\n      display: block;\n      text-align: right;\n      width: 100%; }\n    .forms-wrapper .auth-form app-photo-uploader {\n      display: block;\n      width: 30%;\n      margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-view/login-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginViewComponent = (function () {
    function LoginViewComponent(router, request, session) {
        this.router = router;
        this.request = request;
        this.session = session;
        this.error = '';
    }
    LoginViewComponent.prototype.ngOnInit = function () {
    };
    LoginViewComponent.prototype.photoChange = function (photo) {
        console.log('photo');
        this.signupPhoto = photo;
    };
    LoginViewComponent.prototype.login = function (form) {
        var _this = this;
        if (!this.loginUsername ||
            !this.loginPassword) {
            this.error = "Fulfill all the fields";
            return;
        }
        console.log(form.value);
        this.request.post('/user/login', form.value)
            .subscribe(function (res) {
            console.log(res.user);
            _this.session.setSession(res.user);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log('Nombre de usuario o contraseña incorrectos');
            _this.error = 'Incorrect username or password';
        });
    };
    LoginViewComponent.prototype.signup = function (form) {
        var _this = this;
        if (!this.signupUsername ||
            !this.signupName ||
            !this.signupPassword ||
            !this.signupEmail ||
            !this.signupPhoto) {
            this.error = "Fulfill all the fields";
            return;
        }
        var args = Object.assign({}, form.value, { photoURI: this.signupPhoto });
        console.log(args);
        this.request.post('/user/signup', args)
            .subscribe(function (res) {
            var path = "/photo/save";
            _this.request.post(path, { id: _this.signupPhoto })
                .subscribe(function (saveRes) {
                console.log('saved the earth', res);
                _this.session.setSession(res.user);
                _this.router.navigate(['/']);
            });
        }, function (err) { return console.log('Error al hacer login'); });
    };
    return LoginViewComponent;
}());
LoginViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-view',
        template: __webpack_require__("../../../../../src/app/login-view/login-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-view/login-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], LoginViewComponent);

var _a, _b, _c;
//# sourceMappingURL=login-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-brand-modal/new-brand-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"occluder\" (click)=\"hideBrandModal()\"></div>\n<div class=\"wrapper\">\n  <div class=\"modal\">\n\n    <div class=\"logo\">\n      <app-photo-uploader (onPhotoChange)=\"photoChange($event)\"></app-photo-uploader>\n    </div>\n\n    <div class=\"form\">\n      <label for=\"shortname\">Short name</label>\n      <input type=\"text\" name=\"shortname\" [(ngModel)]=\"shortName\" (change)=\"wikiRef()\">\n      <label for=\"longname\">Long name</label>\n      <input type=\"text\" name=\"longname\"  [(ngModel)]=\"longName\">\n      <label for=\"country\">Country</label>\n      <input type=\"text\" name=\"country\"  [(ngModel)]=\"country\">\n      <app-button [label]=\"'create'\" (click)=\"createBrand()\"></app-button>\n    </div>\n\n    <div class=\"wiki-suggest\">\n      <h6 *ngIf=\"nonsuggested\" (click)=\"pickSuggestion(-1, true)\">{{nonsuggested}}</h6>\n      <h6 *ngFor=\"let sugest of wikiSugestion, let i=index\" (click)=\"pickSuggestion(i, true)\">{{sugest}}</h6>\n    </div>\n\n    <div class=\"wiki-search\">\n      <h5>{{wikiTitle}}</h5>\n      <p>{{wikiDesc}}</p>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-brand-modal/new-brand-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".occluder {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 460px;\n  background-color: #333;\n  opacity: 0.5;\n  z-index: 100; }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 460px;\n  pointer-events: none;\n  z-index: 101; }\n  @media screen and (max-width: 48em) {\n    .wrapper {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper .modal {\n    box-shadow: 0px 5px 5px 0px #888;\n    margin-bottom: 10px;\n    border: 1px solid #CCC;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #F9F9F9;\n    width: 720px;\n    padding: 30px;\n    pointer-events: all; }\n    @media screen and (max-width: 48em) {\n      .wrapper .modal {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n    .wrapper .modal .logo {\n      width: 120px; }\n    .wrapper .modal .form {\n      width: 250px; }\n    .wrapper .modal .wiki-suggest {\n      width: 100px;\n      overflow: hidden; }\n      .wrapper .modal .wiki-suggest h6 {\n        cursor: pointer;\n        line-height: 15px;\n        margin: 2px;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n    .wrapper .modal .wiki-search {\n      width: 250px; }\n      .wrapper .modal .wiki-search p {\n        height: 100px;\n        overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-brand-modal/new-brand-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBrandModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewBrandModalComponent = (function () {
    function NewBrandModalComponent(request, zone, http) {
        this.request = request;
        this.zone = zone;
        this.http = http;
        this.onClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.wikiTitle = "This is a wikipedia search!";
        this.wikiDesc = "You could find some nice reference here";
    }
    NewBrandModalComponent.prototype.ngOnInit = function () {
    };
    NewBrandModalComponent.prototype.wikiRef = function () {
        var _this = this;
        this.wikiTitle = "Searching...";
        this.request.wiki(this.shortName, function (err, data) {
            _this.nonsuggested = undefined;
            _this.wikiSugestion = data[1];
            _this.wikiDescriptions = data[2];
            if (_this.wikiSugestion.indexOf(_this.shortName) === -1) {
                _this.nonsuggested = _this.shortName;
                _this.pickSuggestion(-1, false);
            }
            else {
                _this.pickSuggestion(0, false);
            }
            _this.zone.run(function () { return true; });
        });
    };
    NewBrandModalComponent.prototype.pickSuggestion = function (idx, auto) {
        if (idx === -1) {
            this.shortName = this.nonsuggested;
            this.longName = "";
            this.wikiTitle = this.nonsuggested;
            this.wikiDesc = "This brand did not exist in wikipedia ¿Are you shure its spelled like that? In that case, its ok to create this brand. You are too trendy for wikipedia!";
            return;
        }
        var reg = new RegExp('refer', 'i');
        if (reg.test(this.wikiSugestion[idx])) {
            this.pickSuggestion(idx + 1, auto);
        }
        else {
            this.wikiTitle = this.wikiSugestion[idx];
            if (auto)
                this.shortName = this.wikiTitle;
            this.wikiDesc = this.wikiDescriptions[idx];
            var prob = this.wikiDesc.substring(0, this.wikiDesc.indexOf('is') - 1);
            if (auto)
                this.longName = prob;
        }
    };
    NewBrandModalComponent.prototype.createBrand = function () {
        var _this = this;
        if (!this.shortName || !this.country || !this.longName)
            return;
        this.request.post('/brand/name', { term: this.shortName })
            .subscribe(function (res) {
            if (res.brands.length != 0) {
                console.log('This brand already exists!');
                _this.onFinish.emit({ name: _this.shortName });
                _this.onClickOutside.emit();
            }
            else {
                _this.request.post('/brand/create', {
                    name: _this.shortName,
                    fullName: _this.longName,
                    country: _this.country,
                    logoURI: _this.brandUrl
                })
                    .subscribe(function (res) {
                    var path = "/photo/save";
                    _this.request.post(path, { id: _this.brandUrl })
                        .subscribe(function (saveRes) {
                        console.log('saved the earth', res);
                        _this.onFinish.emit({ brand: res.brand });
                        _this.onClickOutside.emit();
                    });
                });
            }
        });
    };
    NewBrandModalComponent.prototype.photoChange = function (uri) {
        this.brandUrl = uri;
    };
    NewBrandModalComponent.prototype.hideBrandModal = function () {
        this.onClickOutside.emit();
    };
    return NewBrandModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewBrandModalComponent.prototype, "onClickOutside", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewBrandModalComponent.prototype, "onFinish", void 0);
NewBrandModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-brand-modal',
        template: __webpack_require__("../../../../../src/app/new-brand-modal/new-brand-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-brand-modal/new-brand-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object])
], NewBrandModalComponent);

var _a, _b, _c;
//# sourceMappingURL=new-brand-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-edition-modal/new-edition-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"occluder\" (click)=\"hideEditionModal()\"></div>\n<div class=\"wrapper\">\n  <div class=\"modal\">\n\n    <div class=\"form\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n      <label for=\"ref\">Reference code</label>\n      <input type=\"text\" name=\"ref\"  [(ngModel)]=\"ref\">\n      <label for=\"specs\">Tags (Spec:Value. Separated by commas)</label>\n      <textarea name=\"specs\"  [(ngModel)]=\"specs\" rows=\"5\" cols=\"80\" (keyup)=\"updateSpecs()\">\n\n      </textarea>\n      <app-button [label]=\"'create'\" (click)=\"createEdition()\"></app-button>\n    </div>\n\n    <div class=\"specs\">\n      <h5>Specs</h5>\n      <div class=\"specArray\">\n        <span class='spec' *ngFor='let spec of specArray'>{{spec}}</span>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-edition-modal/new-edition-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".occluder {\n  position: absolute;\n  top: 865px;\n  left: 0;\n  width: 100%;\n  height: 460px;\n  background-color: #333;\n  opacity: 0.5;\n  z-index: 100; }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 865px;\n  left: 0;\n  width: 100%;\n  height: 460px;\n  pointer-events: none;\n  z-index: 101; }\n  @media screen and (max-width: 48em) {\n    .wrapper {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper .modal {\n    box-shadow: 0px 5px 5px 0px #888;\n    margin-bottom: 10px;\n    border: 1px solid #CCC;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    background-color: #F9F9F9;\n    width: 600px;\n    padding: 30px;\n    pointer-events: all; }\n    @media screen and (max-width: 48em) {\n      .wrapper .modal {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n    .wrapper .modal > div {\n      width: 45%; }\n    .wrapper .modal .specs .specArray {\n      margin: 0px;\n      margin-top: 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      overflow-x: hidden;\n      overflow-y: auto;\n      scroll-behavior: smooth;\n      max-height: 200px; }\n      @media screen and (max-width: 48em) {\n        .wrapper .modal .specs .specArray {\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column; } }\n      .wrapper .modal .specs .specArray .spec {\n        display: block;\n        width: 100%;\n        color: #851479;\n        margin: 8px 8px 0 0;\n        padding: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-edition-modal/new-edition-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEditionModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewEditionModalComponent = (function () {
    function NewEditionModalComponent(request, zone) {
        this.request = request;
        this.zone = zone;
        this.onClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.specs = '';
    }
    NewEditionModalComponent.prototype.ngOnInit = function () {
    };
    NewEditionModalComponent.prototype.updateSpecs = function (event) {
        var reg = /([A-Za-z ]+:[0-9A-Za-z \._\-\+]+)/i; //new RegExp('([A-Za-z ]+:[A-Za-z \._\-\+]+)','i');
        this.specArray =
            this.specs
                .split(',')
                .map(function (e) { return e.replace(/^\s+|\s+$/g, ''); })
                .filter(function (e) { return e !== '' && reg.test(e); })
                .map(function (e) { return [e[0].toUpperCase(), e.slice(1).toLowerCase()].join(''); });
        console.log(this.specArray);
    };
    NewEditionModalComponent.prototype.createEdition = function () {
        var _this = this;
        console.log(this.name, this.ref, this.specArray, this.productId);
        if (!this.name || !this.specArray || this.specArray.length === 0)
            return;
        if (!this.ref)
            this.ref = this.name.toLowerCase();
        var features = this.specArray.map(function (s) {
            var split = s.split(':');
            return {
                spec: split[0],
                value: split[1]
            };
        });
        console.log(features);
        this.request.post('/edition/name', { name: this.name, productId: this.productId })
            .subscribe(function (res) {
            if (res.edition.length !== 0) {
                console.log("This edition already exists");
                _this.onFinish.emit({ name: _this.name });
                _this.onClickOutside.emit();
                return;
            }
            _this.request.post('/edition/create', {
                productId: _this.productId,
                name: _this.name,
                ref: _this.ref,
                features: features
            }).subscribe(function (res) {
                _this.onFinish.emit({ edition: res.edition });
                _this.onClickOutside.emit();
            });
        });
    };
    NewEditionModalComponent.prototype.hideEditionModal = function () {
        this.onClickOutside.emit();
    };
    return NewEditionModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewEditionModalComponent.prototype, "onClickOutside", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewEditionModalComponent.prototype, "onFinish", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NewEditionModalComponent.prototype, "productId", void 0);
NewEditionModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-edition-modal',
        template: __webpack_require__("../../../../../src/app/new-edition-modal/new-edition-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-edition-modal/new-edition-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], NewEditionModalComponent);

var _a, _b;
//# sourceMappingURL=new-edition-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-post-modal/new-post-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"occluder\" (click)=\"hidePostModal()\"></div>\n<div class=\"wrapper\">\n  <div class=\"modal\">\n    <app-photo-uploader (onPhotoChange)=\"photoChange($event)\"></app-photo-uploader>\n    <textarea name=\"name\" rows=\"8\" [(ngModel)]=\"content\"></textarea>\n    <app-button [label]=\"'Send'\" (click)=\"createPost()\"></app-button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-post-modal/new-post-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".occluder {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #333;\n  opacity: 0.5;\n  z-index: 100; }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: 101; }\n  @media screen and (max-width: 48em) {\n    .wrapper {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper .modal {\n    box-shadow: 0px 5px 5px 0px #888;\n    margin-bottom: 10px;\n    border: 1px solid #CCC;\n    background-color: #F9F9F9;\n    width: 400px;\n    padding: 30px;\n    pointer-events: all; }\n    .wrapper .modal app-photo-uploader {\n      width: 100%; }\n    .wrapper .modal textarea {\n      box-sizing: border-box;\n      width: 100%;\n      margin: 10px 0 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-post-modal/new-post-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewPostModalComponent = (function () {
    function NewPostModalComponent(request) {
        this.request = request;
        this.onClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSavePost = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.content = '';
        console.log();
    }
    NewPostModalComponent.prototype.ngOnInit = function () { };
    NewPostModalComponent.prototype.photoChange = function (fileName) {
        this.fileName = fileName;
    };
    NewPostModalComponent.prototype.createPost = function () {
        var _this = this;
        if (this.fileName && this.content.length !== 0 && this.wish) {
            var params = {
                wishId: this.wish['_id'],
                comment: this.content,
                photoURI: this.fileName
            };
            console.log('create post with params', params);
            this.request.post('/post/create', params)
                .subscribe(function (res) {
                var path = "/photo/save";
                _this.request.post(path, { id: _this.fileName })
                    .subscribe(function (saveRes) {
                    console.log('saved the earth', res);
                    _this.onSavePost.emit(res);
                });
            }, function (err) { return console.log(err); });
        }
        else {
            console.log('Fulfill every field');
        }
    };
    NewPostModalComponent.prototype.hidePostModal = function () {
        this.onClickOutside.emit();
    };
    return NewPostModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NewPostModalComponent.prototype, "wish", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewPostModalComponent.prototype, "onClickOutside", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewPostModalComponent.prototype, "onSavePost", void 0);
NewPostModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-post-modal',
        template: __webpack_require__("../../../../../src/app/new-post-modal/new-post-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-post-modal/new-post-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], NewPostModalComponent);

var _a;
//# sourceMappingURL=new-post-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-product-modal/new-product-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"occluder\" (click)=\"hideProductModal()\"></div>\n<div class=\"wrapper\">\n  <div class=\"modal\">\n\n    <div class=\"form\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n      <label for=\"ref\">Reference code</label>\n      <input type=\"text\" name=\"ref\"  [(ngModel)]=\"ref\">\n      <label for=\"tags\">Tags (Separated by commas)</label>\n      <textarea name=\"tags\"  [(ngModel)]=\"tags\" rows=\"5\" cols=\"80\" (keyup)=\"updateTags()\">\n\n      </textarea>\n      <app-button [label]=\"'create'\" (click)=\"createProduct()\"></app-button>\n    </div>\n\n    <div class=\"tags\">\n      <h5>Tags</h5>\n      <div class=\"tagArray\">\n        <span class='bullet' *ngFor='let tag of tagArray'>{{tag}}</span>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-product-modal/new-product-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".occluder {\n  position: absolute;\n  top: 435px;\n  left: 0;\n  width: 100%;\n  height: 460px;\n  background-color: #333;\n  opacity: 0.5;\n  z-index: 100; }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  top: 435px;\n  left: 0;\n  width: 100%;\n  height: 460px;\n  pointer-events: none;\n  z-index: 101; }\n  @media screen and (max-width: 48em) {\n    .wrapper {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper .modal {\n    box-shadow: 0px 5px 5px 0px #888;\n    margin-bottom: 10px;\n    border: 1px solid #CCC;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    background-color: #F9F9F9;\n    width: 600px;\n    padding: 30px;\n    pointer-events: all; }\n    @media screen and (max-width: 48em) {\n      .wrapper .modal {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n    .wrapper .modal > div {\n      width: 45%; }\n    .wrapper .modal .tags .tagArray {\n      margin: 0px;\n      margin-top: 15px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      overflow: hidden; }\n      @media screen and (max-width: 48em) {\n        .wrapper .modal .tags .tagArray {\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column; } }\n      .wrapper .modal .tags .tagArray .bullet {\n        background-color: #851479;\n        color: #F9F9F9;\n        margin: 8px 8px 0 0;\n        padding: 4px;\n        border-radius: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-product-modal/new-product-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewProductModalComponent = (function () {
    function NewProductModalComponent(request, zone) {
        this.request = request;
        this.zone = zone;
        this.onClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFinish = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tags = '';
    }
    NewProductModalComponent.prototype.ngOnInit = function () {
    };
    NewProductModalComponent.prototype.updateTags = function (event) {
        this.tagArray =
            this.tags
                .split(',')
                .map(function (e) { return e.replace(/^\s+|\s+$/g, ''); })
                .filter(function (e) { return e !== ''; })
                .map(function (e) { return [e[0].toUpperCase(), e.slice(1).toLowerCase()].join(''); });
    };
    NewProductModalComponent.prototype.createProduct = function () {
        var _this = this;
        console.log(this.name, this.ref, this.tagArray, this.brandId);
        if (!this.name || !this.tagArray || this.tagArray.length === 0)
            return;
        if (!this.ref)
            this.ref = this.name.toLowerCase();
        this.request.post('/product/name', { name: this.name, brandId: this.brandId })
            .subscribe(function (res) {
            if (res.product.length !== 0) {
                console.log("This product already exists");
                _this.onFinish.emit({ name: _this.name });
                _this.onClickOutside.emit();
                return;
            }
            _this.request.post('/product/create', {
                brandId: _this.brandId,
                name: _this.name,
                ref: _this.ref,
                tags: _this.tagArray
            }).subscribe(function (res) {
                _this.onFinish.emit({ product: res.product });
                _this.onClickOutside.emit();
            });
        });
    };
    NewProductModalComponent.prototype.hideProductModal = function () {
        this.onClickOutside.emit();
    };
    return NewProductModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewProductModalComponent.prototype, "onClickOutside", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewProductModalComponent.prototype, "onFinish", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NewProductModalComponent.prototype, "brandId", void 0);
NewProductModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-product-modal',
        template: __webpack_require__("../../../../../src/app/new-product-modal/new-product-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-product-modal/new-product-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], NewProductModalComponent);

var _a, _b;
//# sourceMappingURL=new-product-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-wish-view/new-wish-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>New wish</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <h3 class=\"selection\">\n    Selected :\n    <strong *ngIf=\"selectedBrand\">{{selectedBrand.name}}</strong>\n    <strong *ngIf=\"selectedProduct\">{{selectedProduct.name}}</strong>\n    <strong *ngIf=\"selectedEdition\">{{selectedEdition.name}}</strong>\n    <span class=\"backbutton\" *ngIf=\"selectedBrand\" (click)=\"reset()\"> - back</span>\n  </h3>\n  <div class=\"wrapper\">\n    <div [ngClass]=\"{'runner': true, 'product': selectedBrand, 'edition': selectedProduct, 'finished': selectedEdition}\">\n      <app-brand-selector\n        (onSelectBrand)=\"selectBrand($event)\"\n        [brandModal]=\"brandModal\">\n      </app-brand-selector>\n      <app-product-selector\n        (onSelectProduct)=\"selectProduct($event)\"\n        [brandId]=\"selectedBrand ? selectedBrand._id : undefined\"\n        [productList]=\"brandProducts\"\n        [visibleProduct]=\"brandProducts\"\n        [productModal]=\"productModal\">\n      </app-product-selector>\n      <app-edition-selector\n        (onSelectEdition)=\"selectEdition($event)\"\n        [productId]=\"selectedProduct ? selectedProduct._id : undefined\"\n        [editionList]=\"productEditions\"\n        [visibleEdition]=\"productEditions\"\n        [editionModal]=\"editionModal\">\n      </app-edition-selector>\n      <div class=\"options\">\n        <app-state-selector [state]=\"state\" (onStateChange)=\"setState($event)\"></app-state-selector>\n        <app-button (click)=\"createWish()\" [label]=\"'Make a wish'\"></app-button>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/new-wish-view/new-wish-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  box-shadow: inset 0px 2px 10px 2px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  width: calc(100% - 200px);\n  margin: 0 auto;\n  height: 400px;\n  overflow: hidden; }\n  .wrapper .runner {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px); }\n    .wrapper .runner.product {\n      -webkit-transform: translateY(-460px);\n              transform: translateY(-460px); }\n    .wrapper .runner.edition {\n      -webkit-transform: translateY(-920px);\n              transform: translateY(-920px); }\n    .wrapper .runner.finished {\n      -webkit-transform: translateY(-1380px);\n              transform: translateY(-1380px); }\n\n.selection {\n  margin-left: 100px; }\n  .selection .backbutton {\n    display: inline-block;\n    cursor: pointer;\n    transition: opacity 0.5s;\n    opacity: 0.2; }\n    .selection .backbutton:hover {\n      opacity: 1; }\n\n.options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  box-sizing: border-box;\n  height: 400px;\n  padding: 30px;\n  margin: 30px; }\n  @media screen and (max-width: 48em) {\n    .options {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-wish-view/new-wish-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewWishViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewWishViewComponent = (function () {
    function NewWishViewComponent(router, request, session) {
        this.router = router;
        this.request = request;
        this.session = session;
        this.brandProducts = [];
        this.productEditions = [];
        this.state = 1;
        this.brandModal = true;
        this.productModal = true;
        this.editionModal = true;
        this.selectedBrand = undefined;
    }
    NewWishViewComponent.prototype.ngOnInit = function () {
        this.brandModal = false;
        this.productModal = false;
        this.editionModal = false;
    };
    NewWishViewComponent.prototype.setState = function (val) {
        this.state = val;
    };
    NewWishViewComponent.prototype.selectBrand = function (brand) {
        var _this = this;
        this.selectedBrand = brand;
        this.brandProducts = [];
        this.request.get("/product/brand/" + brand['_id'])
            .subscribe(function (res) {
            _this.brandProducts = res.products;
        });
    };
    NewWishViewComponent.prototype.selectProduct = function (product) {
        var _this = this;
        this.selectedProduct = product;
        this.productEditions = [];
        this.request.get("/edition/product/" + product['_id'])
            .subscribe(function (res) {
            _this.productEditions = res.editions;
        });
    };
    NewWishViewComponent.prototype.selectEdition = function (edition) {
        this.selectedEdition = edition;
        console.log("Reached here");
    };
    NewWishViewComponent.prototype.createWish = function () {
        var _this = this;
        var editionId = this.selectedEdition['_id'];
        var userId = this.session.user['_id'];
        this.request.post('/wish/create', { editionId: editionId, userId: userId, state: this.state })
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/']);
        });
    };
    NewWishViewComponent.prototype.reset = function () {
        if (this.selectedEdition) {
            this.selectedEdition = undefined;
        }
        else if (this.selectedProduct) {
            this.selectedProduct = undefined;
        }
        else {
            this.selectedBrand = undefined;
        }
        this.brandModal = false;
        this.productModal = false;
        this.editionModal = false;
        console.log(this.brandModal, this.productModal, this.editionModal);
    };
    return NewWishViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('productSelector'),
    __metadata("design:type", Object)
], NewWishViewComponent.prototype, "productSelector", void 0);
NewWishViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-wish-view',
        template: __webpack_require__("../../../../../src/app/new-wish-view/new-wish-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-wish-view/new-wish-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], NewWishViewComponent);

var _a, _b, _c;
//# sourceMappingURL=new-wish-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/photo-uploader/photo-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"{{ fileURI }}\" alt=\"placehold\">\n<div class=\"photoUL\" *ngIf=\"!fileName\">\n  <label for=\"photo\">Choose a file</label>\n  <input\n    type=\"file\"\n    id='photo'\n    name=\"photo\"\n    ng2FileSelect\n    [uploader]=\"uploader\"\n    (change)=\"uploadPhoto()\">\n</div>\n<button\n  *ngIf=\"fileName\"\n  type=\"button\"\n  class=\"resetButton\"\n  (click)=\"resetPhoto()\">\n  Reset photo\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/photo-uploader/photo-uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%; }\n\n.photoUL input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.photoUL label {\n  background-color: #851479;\n  color: #F9F9F9;\n  margin: 8px 8px 0 0;\n  padding: 4px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  padding: 12px;\n  cursor: pointer;\n  width: 100%; }\n\n.resetButton {\n  background-color: #851479;\n  color: #F9F9F9;\n  margin: 8px 8px 0 0;\n  padding: 4px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  padding: 12px;\n  cursor: pointer;\n  width: 100%;\n  font-family: 'Questrial', sans-serif;\n  text-align: left;\n  border: none;\n  font-size: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photo-uploader/photo-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoUploaderComponent = (function () {
    function PhotoUploaderComponent(request) {
        this.request = request;
        this.onPhotoChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "/photo"
        });
    }
    PhotoUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPhoto();
        this.uploader.onSuccessItem = function (item, response) {
            _this.fileName = JSON.parse(response)['filename'];
            _this.fileURI = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "/images/stage/" + _this.fileName;
            _this.emitChange();
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            console.log(response);
        };
    };
    PhotoUploaderComponent.prototype.resetPhoto = function () {
        if (this.fileName) {
            var path = "/photo/delete";
            this.request.post(path, { id: this.fileName })
                .subscribe(function (res) {
                console.log(res);
            });
        }
        this.fileName = undefined;
        this.fileURI = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "/images/default";
        this.emitChange();
    };
    PhotoUploaderComponent.prototype.emitChange = function () {
        this.onPhotoChange.emit(this.fileName);
    };
    PhotoUploaderComponent.prototype.uploadPhoto = function () {
        console.log('Trying to upload...');
        this.uploader.uploadAll();
    };
    return PhotoUploaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PhotoUploaderComponent.prototype, "onPhotoChange", void 0);
PhotoUploaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photo-uploader',
        template: __webpack_require__("../../../../../src/app/photo-uploader/photo-uploader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photo-uploader/photo-uploader.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], PhotoUploaderComponent);

var _a;
//# sourceMappingURL=photo-uploader.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-card/post-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='post-card nav' (click)=\"goToDetail()\">\n  <div class=\"img\" [ngStyle]=\"{'background-image': photoURI}\">\n  </div>\n  <p>\"{{comment}}\"</p>\n  <footer><strong>{{ brand.name }} {{product.name}} {{edition.name}}</strong> by <strong> @{{user.username}} </strong></footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/post-card/post-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-card {\n  box-shadow: 0px 5px 5px 0px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  margin: 10px; }\n  .post-card .img {\n    width: calc( 100% - 20px);\n    margin: 10px;\n    background-position: center;\n    background-size: cover;\n    padding-top: calc( 2 * 100% / 3);\n    border: 1px solid #CCC; }\n  .post-card p {\n    height: 18px;\n    overflow-y: hidden;\n    text-align: left;\n    margin: auto 0px; }\n  .post-card footer {\n    overflow-y: hidden;\n    padding: 10px;\n    height: 32px;\n    font-size: 0.8em;\n    color: #888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-card/post-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostCardComponent = (function () {
    function PostCardComponent(router) {
        this.router = router;
    }
    PostCardComponent.prototype.ngOnInit = function () {
        this.edition = this.post.wishId.editionId;
        this.product = this.edition['productId'];
        this.brand = this.product['brandId'];
        this.user = this.post.wishId.userId;
        this.comment = this.post.comment;
        this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (this.post.photoURI || 'default') + ")";
    };
    PostCardComponent.prototype.goToDetail = function () {
        console.log('got to detail');
        this.router.navigate(["post/" + this.post._id]);
        ;
    };
    return PostCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostCardComponent.prototype, "post", void 0);
PostCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-card',
        template: __webpack_require__("../../../../../src/app/post-card/post-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-card/post-card.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PostCardComponent);

var _a;
//# sourceMappingURL=post-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-view/post-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"post\">\n  <div class=\"wrapper\">\n    <div class=\"left-column\">\n      <h2>{{post.wishId.editionId.productId.name}} {{post.wishId.editionId.name}}</h2>\n      <h5>by {{post.wishId.editionId.productId.brandId.name}}</h5>\n      <img src=\"{{photoURI}}\" alt=\"\">\n    </div>\n    <div class=\"right-column\">\n      <h2 class=\"comment\">\"{{post.comment}}\"</h2>\n      <span>From a <strong class=\"nav\" (click)=\"goToWish(post.wishId._id)\">wish</strong> of <strong class=\"nav\" (click)=\"goToUser(post.wishId.userId._id)\">{{post.wishId.userId.name}}</strong></span>\n      <div class=\"comment-box\">\n        <div *ngFor=\"let comment of post.comments\">\n          <span class=\"content\">\"{{comment.content}}\"</span>\n          <span class=\"author nav\" (click)=\"goToUser(comment.authorId)\">@{{comment.author}}</span>\n        </div>\n      </div>\n      <textarea name=\"name\" [(ngModel)]=\"newContent\">\n      </textarea>\n      <app-button [label]=\"'send'\" (click)=\"newComment()\"></app-button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/post-view/post-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding: 10px; }\n  @media screen and (max-width: 48em) {\n    .wrapper {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper > div {\n    padding: 15px; }\n  .wrapper .left-column {\n    width: 400px; }\n    .wrapper .left-column img {\n      width: 100%;\n      border: 1px solid #CCC; }\n  .wrapper .right-column {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    .wrapper .right-column > h2 {\n      border-bottom: 2px solid #851479; }\n    .wrapper .right-column > span {\n      margin-left: 30px; }\n    .wrapper .right-column .comment {\n      padding: 10px;\n      font-size: 1.2em; }\n    .wrapper .right-column .comment-box {\n      margin-top: 25px;\n      overflow-y: scroll;\n      height: 300px; }\n      .wrapper .right-column .comment-box div {\n        padding: 5px;\n        margin: 5px;\n        border: 1px solid #CCC;\n        border-radius: 5px; }\n        .wrapper .right-column .comment-box div .content {\n          display: inline-block;\n          width: 80%; }\n        .wrapper .right-column .comment-box div .author {\n          color: #333;\n          display: inline-block;\n          width: 10%; }\n    .wrapper .right-column app-button {\n      display: block;\n      width: 100%;\n      text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-view/post-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostViewComponent = (function () {
    function PostViewComponent(route, session, request, router) {
        this.route = route;
        this.session = session;
        this.request = request;
        this.router = router;
    }
    PostViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.request.get("/post/" + params['id'])
                .subscribe(function (res) {
                console.log(res);
                _this.post = res.post;
                if (_this.post['comments'] === undefined)
                    _this.post['comments'] = [];
                _this.photoURI = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + res.post.photoURI;
            });
        });
    };
    PostViewComponent.prototype.newComment = function () {
        if (this.newContent !== '') {
            this.post['comments'].push({
                content: this.newContent,
                author: this.session.user['username'],
                authorId: this.session.user['_id']
            });
            this.newContent = '';
            this.request.put("/post/edit/" + this.post['_id'], {
                comments: this.post['comments']
            })
                .subscribe(function (res) { return console.log(res); });
        }
    };
    PostViewComponent.prototype.goToWish = function (id) {
        this.router.navigate(["/wish/" + id]);
    };
    PostViewComponent.prototype.goToUser = function (id) {
        this.router.navigate(["/profile/" + id]);
    };
    return PostViewComponent;
}());
PostViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-post-view',
        template: __webpack_require__("../../../../../src/app/post-view/post-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-view/post-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PostViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='product-card'>\n  <div class=\"img\" [ngStyle]=\"{'background-image': photoURI}\"></div>\n  <h6>{{product.name}}</h6>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc( 100% - 5px);\n  height: 140px; }\n  @media screen and (max-width: 48em) {\n    .product-card {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .product-card .img {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    cursor: pointer;\n    max-width: 90%;\n    margin: 0 auto; }\n  .product-card .img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .product-card h6 {\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 80%; }\n  .product-card .img {\n    height: 60px;\n    width: 60px;\n    background-size: cover;\n    background-position: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = (function () {
    function ProductCardComponent(request) {
        this.request = request;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.request.get("/post/product/one/" + this.product['_id'])
            .subscribe(function (res) {
            _this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (res.post ? res.post.photoURI : 'default') + ")";
        });
    };
    return ProductCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductCardComponent.prototype, "product", void 0);
ProductCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-card',
        template: __webpack_require__("../../../../../src/app/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-card/product-card.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], ProductCardComponent);

var _a;
//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-selector/product-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <h3>Select a product</h3>\n  <input type=\"text\" name=\"productName\" value=\"\" (ngModelChange)=\"change($event)\" [(ngModel)]=\"productName\">\n  <div class=\"product-container\">\n    <app-product-card *ngFor='let product of visibleProduct' (click)=\"select(product)\" [product]='product'></app-product-card>\n    <app-product-card (click)=\"showProductModal()\" [product]='{name:\"New Product\"}'></app-product-card>\n  </div>\n</div>\n<app-new-product-modal\n  *ngIf=\"productModal\"\n  (onClickOutside)=\"hideProductModal()\"\n  (onFinish)=\"newProduct($event)\"\n  [brandId]=\"brandId\">\n</app-new-product-modal>\n"

/***/ }),

/***/ "../../../../../src/app/product-selector/product-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  height: 400px;\n  border-radius: 2px;\n  width: 80%;\n  margin: 15px auto;\n  padding: 15px; }\n  .wrapper .product-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 15px; }\n    @media screen and (max-width: 48em) {\n      .wrapper .product-container {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n    .wrapper .product-container app-product-card {\n      width: calc((100% - 30px) / 5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-selector/product-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductSelectorComponent = (function () {
    function ProductSelectorComponent(request) {
        this.request = request;
        this.onSelectProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.maxVisibleProducts = 9;
    }
    ProductSelectorComponent.prototype.showProductModal = function (event) {
        this.productModal = true;
    };
    ProductSelectorComponent.prototype.hideProductModal = function (event) {
        this.productModal = false;
    };
    ProductSelectorComponent.prototype.change = function (event) {
        this.visibleProduct = this.productList
            .filter(function (elm) {
            return (new RegExp(event, 'i')).test(elm['name']);
        })
            .slice(0, this.maxVisibleProducts);
        console.log(this.visibleProduct);
    };
    ProductSelectorComponent.prototype.select = function (product) {
        this.onSelectProduct.emit(product);
    };
    ProductSelectorComponent.prototype.newProduct = function (event) {
        console.log("Received", event);
        if (event['name']) {
            console.log('This brand exist');
            this.productName = event['name'];
            this.change(event['name']);
        }
        else {
            this.productList.push(event['product']);
            this.productName = event['product']['name'];
            this.change(event['product']['name']);
        }
    };
    return ProductSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ProductSelectorComponent.prototype, "productList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ProductSelectorComponent.prototype, "visibleProduct", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProductSelectorComponent.prototype, "brandId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ProductSelectorComponent.prototype, "productModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ProductSelectorComponent.prototype, "onSelectProduct", void 0);
ProductSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-selector',
        template: __webpack_require__("../../../../../src/app/product-selector/product-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-selector/product-selector.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], ProductSelectorComponent);

var _a;
//# sourceMappingURL=product-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-view/profile-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"left-column\">\n    <h1>Profile</h1>\n    <div class=\"user-photo\" [ngStyle]=\"{'background-image': photoURI}\"></div>\n    <h3>{{name}}</h3>\n    <h6>@{{username}}</h6>\n  </div>\n  <div *ngIf=\"wishList.length !== 0\" class=\"center-column\">\n    <h2 >Wishes</h2>\n    <div class=\"wish\" *ngFor=\"let wish of wishList\">\n      <span\n        class=\"delete\"\n        *ngIf=\"user && session.user && user._id === session.user._id\"\n        (click)=\"deleteWish(wish._id)\">\n          [delete]\n      </span>\n      <span class=\"link\" (click)=\"goToWish(wish._id)\">\n        {{wish.editionId.productId.brandId.name}}\n        {{wish.editionId.productId.name}}\n      </span>\n    </div>\n  </div>\n  <div class=\"right-column\">\n    <h2 *ngIf=\"postList.length !== 0\">Posts</h2>\n    <div class=\"post\" *ngFor=\"let post of postList\">\n      <span\n        class=\"delete\"\n        *ngIf=\"user && session.user && user._id === session.user._id\"\n        (click)=\"deletePost(post._id)\">\n          [delete]\n      </span>\n      <span class=\"link\" (click)=\"goToPost(post._id)\">\n        <strong><em>\"{{post.comment}}\"</em></strong> on\n        {{post.wishId.editionId.productId.brandId.name}}\n        {{post.wishId.editionId.productId.name}}\n      </span>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/profile-view/profile-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding: 10px; }\n  @media screen and (max-width: 48em) {\n    section {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  section .left-column {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n    section .left-column .user-photo {\n      width: 100%;\n      padding-top: 100%;\n      background-position: center;\n      background-size: cover; }\n  section .center-column {\n    -webkit-box-flex: 5;\n        -ms-flex-positive: 5;\n            flex-grow: 5; }\n    section .center-column .wish {\n      cursor: pointer;\n      margin-left: 25px;\n      margin-top: 5px; }\n  section .right-column {\n    -webkit-box-flex: 10;\n        -ms-flex-positive: 10;\n            flex-grow: 10; }\n    section .right-column .post {\n      cursor: pointer;\n      margin-left: 25px;\n      margin-top: 5px; }\n\n.delete {\n  cursor: pointer;\n  color: #851479; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-view/profile-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileViewComponent = (function () {
    function ProfileViewComponent(route, router, session, request) {
        this.route = route;
        this.router = router;
        this.session = session;
        this.request = request;
        this.wishList = [];
        this.postList = [];
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            if (param['id']) {
                _this.request.get("/user/get/" + param['id'])
                    .subscribe(function (res) {
                    _this.username = res.user.username;
                    _this.name = res.user.username;
                    _this.user = res.user;
                    _this.request.get("/wish/user/" + res.user['_id'])
                        .subscribe(function (res) {
                        _this.wishList = res.wishes;
                    });
                    _this.request.get("/post/user/" + res.user['_id'])
                        .subscribe(function (res) {
                        _this.postList = res.posts;
                    });
                    _this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (res.user.photoURI || 'default') + ")";
                });
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    ProfileViewComponent.prototype.deleteWish = function (id) {
        var _this = this;
        this.request.delete("/wish/remove/" + id)
            .subscribe(function (res) {
            _this.wishList = _this.wishList.filter(function (elm) { return elm['_id'] !== id; });
            _this.postList = _this.postList.filter(function (elm) { return elm['wishId']['_id'] !== id; });
        });
    };
    ProfileViewComponent.prototype.goToWish = function (id) {
        this.router.navigate(["/wish/" + id]);
    };
    ProfileViewComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.request.delete("/post/remove/" + id)
            .subscribe(function (res) {
            _this.postList = _this.postList.filter(function (elm) { return elm['_id'] !== id; });
        });
    };
    ProfileViewComponent.prototype.goToPost = function (id) {
        this.router.navigate(["/post/" + id]);
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile-view',
        template: __webpack_require__("../../../../../src/app/profile-view/profile-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-view/profile-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]) === "function" && _d || Object])
], ProfileViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonp__ = __webpack_require__("../../../../jsonp/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
        this.options = {
            withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
    }
    RequestService.prototype.get = function (query) {
        console.log("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + query);
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + query, this.options)
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.delete = function (query) {
        // console.log(`${environment.apiEndpoint}${query}`);
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + query, this.options)
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.post = function (query, data) {
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + query, data, this.options)
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.put = function (query, data) {
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + query, data, this.options)
            .map(function (res) { return res.json(); });
    };
    RequestService.prototype.wiki = function (query, callback) {
        var urlQuery = query.split(' ').join('+');
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + urlQuery + "&format=json";
        __WEBPACK_IMPORTED_MODULE_2_jsonp___default()(url, null, callback);
    };
    return RequestService;
}());
RequestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RequestService);

var _a;
//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionService = (function () {
    function SessionService(request) {
        this.request = request;
        this.user = undefined;
        this.photoURI = '';
        // this.getSession();
    }
    SessionService.prototype.setSession = function (user) {
        this.user = user;
        this.setUserPhoto();
    };
    SessionService.prototype.unsetSession = function () {
        var _this = this;
        this.request.get('/user/logout')
            .subscribe(function (res) {
            _this.user = undefined;
            _this.setUserPhoto();
        });
    };
    SessionService.prototype.setUserPhoto = function () {
        console.log('session state', this);
        this.photoURI = this.user ?
            "url(" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (this.user.photoURI || 'default') + ")" :
            "url(" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "/images/default)";
    };
    SessionService.prototype.getSession = function () {
        var _this = this;
        this.request.get('/user/getuser')
            .subscribe(function (res) {
            console.log('get sessio', res);
            _this.user = res.user;
        });
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/state-selector/state-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <span [ngClass]=\"{'state-sel': true, 'state-choosen': state === 1}\" (click)=\"setState(1)\">I want it</span>\n  <span [ngClass]=\"{'state-sel': true, 'state-choosen': state === 2}\" (click)=\"setState(2)\">I have it</span>\n  <span [ngClass]=\"{'state-sel': true, 'state-choosen': state === 3}\" (click)=\"setState(3)\">I had it</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/state-selector/state-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  margin: 30px; }\n\n.state-sel {\n  background-color: #851479;\n  color: #F9F9F9;\n  margin: 8px 8px 0 0;\n  padding: 4px;\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 12px;\n  transition: all 0.5s; }\n  .state-sel.state-choosen {\n    font-size: 1.5em;\n    font-weight: bold;\n    background-color: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/state-selector/state-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateSelectorComponent = (function () {
    function StateSelectorComponent() {
        this.onStateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    StateSelectorComponent.prototype.ngOnInit = function () {
    };
    StateSelectorComponent.prototype.setState = function (value) {
        this.onStateChange.emit(value);
    };
    return StateSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StateSelectorComponent.prototype, "onStateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StateSelectorComponent.prototype, "state", void 0);
StateSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-state-selector',
        template: __webpack_require__("../../../../../src/app/state-selector/state-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/state-selector/state-selector.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StateSelectorComponent);

var _a;
//# sourceMappingURL=state-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-bullet/user-bullet.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"logout()\" class='user-bullet'>\n  <div class=\"user-photo\" [ngStyle]=\"{'background-image': photoURI}\"></div>\n  <span class=\"username\">{{session.user.name}}</span>\n  <span class=\"logout\">logout</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-bullet/user-bullet.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-bullet {\n  box-shadow: 0px 5px 5px 0px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100px;\n  height: 100px;\n  background-color: #851479;\n  color: #F9F9F9;\n  border-radius: 50%;\n  position: fixed;\n  right: 30px;\n  bottom: 15px;\n  padding: 5px;\n  cursor: pointer;\n  z-index: 100; }\n  @media screen and (max-width: 48em) {\n    .user-bullet {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .user-bullet span {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    position: absolute;\n    background-color: #851479;\n    display: inline-block;\n    width: 90%;\n    text-align: center;\n    padding: 3px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .user-bullet .user-photo {\n    -webkit-filter: none;\n            filter: none;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s;\n    background-position: center;\n    background-size: cover;\n    border-radius: 50%;\n    width: 80%;\n    padding-top: 80%;\n    position: absolute;\n    top: 10%; }\n  .user-bullet .username {\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n  .user-bullet .logout {\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scaleY(0.05);\n            transform: scaleY(0.05); }\n  .user-bullet:hover .user-photo {\n    -webkit-filter: blur(2px);\n            filter: blur(2px); }\n  .user-bullet:hover .username {\n    -webkit-transform: scaleY(0.05);\n            transform: scaleY(0.05); }\n  .user-bullet:hover .logout {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-bullet/user-bullet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBulletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserBulletComponent = (function () {
    function UserBulletComponent(router, session, request) {
        this.router = router;
        this.session = session;
        this.request = request;
    }
    UserBulletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.request.get('/user/getuser')
            .subscribe(function (res) {
            console.log('get sessio', res);
            _this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (res.user.photoURI || 'default') + ")";
        });
    };
    UserBulletComponent.prototype.logout = function () {
        this.session.unsetSession();
        this.router.navigate(['/']);
    };
    return UserBulletComponent;
}());
UserBulletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-bullet',
        template: __webpack_require__("../../../../../src/app/user-bullet/user-bullet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-bullet/user-bullet.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_request_service__["a" /* RequestService */]) === "function" && _c || Object])
], UserBulletComponent);

var _a, _b, _c;
//# sourceMappingURL=user-bullet.component.js.map

/***/ }),

/***/ "../../../../../src/app/wish-card/wish-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wish-card' (click)=\"goToDetail()\">\n  <!-- <img src=\"{{photoURI}}\" alt=\"placehold\"> -->\n  <div class=\"img\" [ngStyle]=\"{'background-image': photoURI}\"></div>\n  <p><strong>{{ brand.name }} {{product.name}} {{edition.name}}</strong></p>\n  <footer>by <strong> @{{user.username}} </strong></footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wish-card/wish-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wish-card {\n  box-shadow: 0px 5px 5px 0px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  margin: 10px;\n  cursor: pointer; }\n  .wish-card .img {\n    width: calc( 100% - 20px);\n    margin: 10px;\n    background-position: center;\n    background-size: cover;\n    padding-top: calc( 2 * 100% / 3);\n    border: 1px solid #CCC; }\n  .wish-card p {\n    height: 18px;\n    overflow-y: hidden;\n    text-align: left;\n    margin: auto 0px; }\n  .wish-card footer {\n    overflow-y: hidden;\n    padding: 10px;\n    height: 32px;\n    font-size: 0.8em;\n    color: #888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wish-card/wish-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WishCardComponent = (function () {
    function WishCardComponent(router, request) {
        this.router = router;
        this.request = request;
    }
    WishCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edition = this.wish.editionId;
        this.product = this.edition['productId'];
        this.brand = this.product['brandId'];
        this.user = this.wish.userId;
        this.request.get("/post/product/one/" + this.product['_id'])
            .subscribe(function (res) {
            return _this.photoURI = "url(" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (res.post ? res.post['photoURI'] : 'default') + ")";
        });
    };
    WishCardComponent.prototype.goToDetail = function () {
        console.log('got to detail');
        this.router.navigate(["wish/" + this.wish._id]);
        ;
    };
    return WishCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WishCardComponent.prototype, "wish", void 0);
WishCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wish-card',
        template: __webpack_require__("../../../../../src/app/wish-card/wish-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wish-card/wish-card.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _b || Object])
], WishCardComponent);

var _a, _b;
//# sourceMappingURL=wish-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/wish-view/wish-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"wrapper\">\n  <div class=\"heading\">\n    <div class=\"wish\">\n      <h1><strong>{{product?.name}}</strong>  {{edition?.name}}</h1>\n      <h2>by {{brand?.name}}</h2>\n    </div>\n    <div class=\"owner\">\n      <h2 *ngIf=\"user && session.user && user._id !== session.user._id\" (click)=\"goToUser(user._id)\">A wish of <strong>@{{user?.username}}</strong></h2>\n      <h2 *ngIf=\"user && session.user && user._id === session.user._id\" (click)=\"goToUser(user._id)\">A wish of you</h2>\n    </div>\n  </div>\n  <div class=\"photos\">\n    <div *ngFor='let post of posts' class=\"nav\" (click)=\"goToPost(post._id)\">\n      <span>\"{{post.comment}}\"</span>\n      <img src=\"{{post.photoURI}}\" alt=\"placehold\">\n    </div>\n    <div *ngIf=\"posts.length === 0\">\n      <span>There is no post of this product yet</span>\n      <img src=\"images/default\" alt=\"placehold\">\n    </div>\n  </div>\n  <div class=\"info\">\n    <div class=\"dates\">\n      <p>This wish was created on {{wish?.created_at |  date:'dd/MM/yyyy'}} at {{wish?.created_at |  date:'hh:mm'}}</p>\n      <p *ngIf=\"wish?.haveDate\">This wish came true on {{wish?.haveDate |  date:'dd/MM/yyyy'}} at {{wish?.haveDate |  date:'hh:mm'}}</p>\n      <p *ngIf=\"wish?.hadDate\">This wish had gone on {{wish?.hadDate |  date:'dd/MM/yyyy'}} at {{wish?.hadDate |  date:'hh:mm'}}</p>\n    </div>\n    <div class=\"foreign\" *ngIf=\"user && session.user && user._id !== session.user._id\">\n      <span class=\"state clickable\" *ngIf=\"wish.state === 1 && !wish.birthdayLock\" (click)=\"giftThis()\">\n        <span class=\"default\">Nobody is going gift this</span>\n        <span class=\"hidden\">Actually i'm going to</span>\n      </span>\n      <span class=\"state clickable\" *ngIf=\"wish.state === 1 && wish.birthdayLock && wish.birthdayGifter == session.user._id\" (click)=\"ungiftThis()\">\n        <span class=\"default\">You are going to gift this</span>\n        <span class=\"hidden\">Well, i regret</span>\n      </span>\n      <span class=\"state not-clickable\"*ngIf=\"wish.state === 1 && wish.birthdayLock && wish.birthdayGifter !== session.user._id\">Somebody is going to gift this</span>\n      <span class=\"state\" *ngIf=\"wish && wish.state === 1\">{{user.name}} want this!</span>\n      <span class=\"state\" *ngIf=\"wish && wish.state === 2\">{{user.name}} have this</span>\n      <span class=\"state\" *ngIf=\"wish && wish.state === 3\">{{user.name}} once had this</span>\n    </div>\n    <div class=\"user\" *ngIf=\"user && session.user && user._id === session.user._id\">\n      <app-button (click)=\"showPostModal()\" [label]=\"'Make a post about this'\"></app-button>\n      <app-state-selector [state]=\"wish.state\" (onStateChange)=\"stateChange($event)\"></app-state-selector>\n    </div>\n  </div>\n  <div class=\"google-search\">\n    <app-google-search *ngIf=\"product\" [product]=\"product\"></app-google-search>\n  </div>\n</section>\n<app-new-post-modal\n  *ngIf='postModal'\n  (onSavePost)=\"newPost($event)\"\n  (onClickOutside)=\"hidePostModal()\"\n  [wish]=\"wish\"></app-new-post-modal>\n"

/***/ }),

/***/ "../../../../../src/app/wish-view/wish-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper .heading {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media screen and (max-width: 48em) {\n    .wrapper .heading {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper .heading .wish h1 {\n    font-size: 2.8em; }\n  .wrapper .heading .wish h2 {\n    font-size: 1.7em;\n    text-transform: none; }\n  .wrapper .heading .owner h2 {\n    text-transform: none; }\n\n.wrapper .photos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  overflow-x: auto;\n  padding: 4px 0;\n  border-top: 2px solid #851479;\n  border-bottom: 2px solid #851479; }\n  @media screen and (max-width: 48em) {\n    .wrapper .photos {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper .photos div {\n    position: relative;\n    margin-right: 4px; }\n    .wrapper .photos div img {\n      height: 200px; }\n    .wrapper .photos div span {\n      text-transform: none;\n      position: absolute;\n      bottom: 8px;\n      left: 0px;\n      padding: 5px;\n      display: inline-block;\n      word-wrap: normal;\n      color: #F9F9F9;\n      box-sizing: border-box;\n      background-color: rgba(51, 51, 51, 0.5);\n      width: 100%; }\n\n.wrapper .info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media screen and (max-width: 48em) {\n    .wrapper .info {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .wrapper .info .dates p {\n    font-size: 0.8em;\n    padding: 0px;\n    margin: 4px; }\n  .wrapper .info .foreign {\n    margin: 0;\n    margin-top: 30px; }\n    .wrapper .info .foreign .state {\n      background-color: #851479;\n      color: #F9F9F9;\n      margin: 8px 8px 0 0;\n      padding: 4px;\n      border-radius: 8px;\n      padding: 12px;\n      margin-right: 0; }\n      .wrapper .info .foreign .state.clickable {\n        cursor: pointer;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n        .wrapper .info .foreign .state.clickable span {\n          transition: -webkit-transform 0.5s;\n          transition: transform 0.5s;\n          transition: transform 0.5s, -webkit-transform 0.5s; }\n        .wrapper .info .foreign .state.clickable .default {\n          -webkit-transform-origin: 50% 0%;\n                  transform-origin: 50% 0%; }\n        .wrapper .info .foreign .state.clickable .hidden {\n          position: absolute;\n          -webkit-transform-origin: 50% 100%;\n                  transform-origin: 50% 100%;\n          -webkit-transform: scaleY(0.05);\n                  transform: scaleY(0.05); }\n      .wrapper .info .foreign .state.clickable:hover .default {\n        -webkit-transform-origin: 50% 0%;\n                transform-origin: 50% 0%;\n        -webkit-transform: scaleY(0.05);\n                transform: scaleY(0.05); }\n      .wrapper .info .foreign .state.clickable:hover .hidden {\n        -webkit-transform-origin: 50% 100%;\n                transform-origin: 50% 100%;\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1); }\n  .wrapper .info .user {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media screen and (max-width: 48em) {\n      .wrapper .info .user {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wish-view/wish-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishViewComponent = (function () {
    function WishViewComponent(route, session, request, router) {
        var _this = this;
        this.route = route;
        this.session = session;
        this.request = request;
        this.router = router;
        this.posts = [];
        this.postModal = false;
        this.route.params.subscribe(function (params) {
            _this.request.get("/wish/" + params['id'])
                .subscribe(function (res) {
                _this.wish = res.wish;
                if (!_this.wish['state'])
                    _this.wish['state'] = 1;
                _this.edition = _this.wish['editionId'];
                _this.product = _this.edition['productId'];
                _this.brand = _this.product['brandId'];
                _this.user = _this.wish['userId'];
                _this.request.get("/post/product/" + _this.product['_id'])
                    .subscribe(function (res) {
                    _this.posts = res.posts.map(function (e) { return ({ _id: e._id, comment: e.comment, photoURI: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + (e.photoURI || 'default') }); }).slice(0, 10);
                    console.log(_this.posts);
                });
            }, function (err) { return _this.router.navigate(['/']); });
        });
    }
    WishViewComponent.prototype.ngOnInit = function () {
    };
    WishViewComponent.prototype.showPostModal = function () {
        this.postModal = true;
    };
    WishViewComponent.prototype.hidePostModal = function () {
        this.postModal = false;
    };
    WishViewComponent.prototype.giftThis = function () {
        var _this = this;
        this.request.put("/wish/edit/" + this.wish['_id'], {
            birthdayLock: true,
            birthdayGifter: this.session.user['_id']
        })
            .subscribe(function (res) {
            console.log(res);
            _this.wish = res.wish;
        });
    };
    WishViewComponent.prototype.ungiftThis = function () {
        var _this = this;
        this.request.put("/wish/edit/" + this.wish['_id'], {
            birthdayLock: false,
            birthdayGifter: undefined
        })
            .subscribe(function (res) {
            console.log(res);
            _this.wish = res.wish;
        });
    };
    WishViewComponent.prototype.newPost = function (post) {
        this.hidePostModal();
        this.posts.unshift({
            comment: post.post.comment,
            _id: post.post._id,
            photoURI: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/images/" + post.post.photoURI
        });
    };
    WishViewComponent.prototype.stateChange = function (event) {
        var _this = this;
        this.request.put("/wish/edit/" + this.wish['_id'], { state: event })
            .subscribe(function (res) {
            _this.wish = res.wish;
        });
    };
    WishViewComponent.prototype.goToWish = function (id) {
        this.router.navigate(["/wish/" + id]);
    };
    WishViewComponent.prototype.goToUser = function (id) {
        this.router.navigate(["/profile/" + id]);
    };
    WishViewComponent.prototype.goToPost = function (id) {
        this.router.navigate(["/post/" + id]);
    };
    return WishViewComponent;
}());
WishViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wish-view',
        template: __webpack_require__("../../../../../src/app/wish-view/wish-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wish-view/wish-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WishViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=wish-view.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiEndpoint: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map