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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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

module.exports = "<div>\n  <app-header></app-header>\n  <div class='wrapper'>\n    <router-outlet></router-outlet>\n  </div>\n  <div (click)=\"logout()\" *ngIf=\"session.user\" class='user-bullet'>\n    <span class=\"username\">{{session.user.name}}</span>\n    <span class=\"logout\">logout</span>\n  </div>\n</div>\n"

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
    AppComponent.prototype.requestSession = function () {
        this.session.getSession();
    };
    AppComponent.prototype.logout = function () {
        this.session.unsetSession();
        this.router.navigate(['/']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__button_button_component__ = __webpack_require__("../../../../../src/app/button/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_view_login_view_component__ = __webpack_require__("../../../../../src/app/login-view/login-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__wish_card_wish_card_component__ = __webpack_require__("../../../../../src/app/wish-card/wish-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__post_card_post_card_component__ = __webpack_require__("../../../../../src/app/post-card/post-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_view_profile_view_component__ = __webpack_require__("../../../../../src/app/profile-view/profile-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__new_wish_view_new_wish_view_component__ = __webpack_require__("../../../../../src/app/new-wish-view/new-wish-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__brand_selector_brand_selector_component__ = __webpack_require__("../../../../../src/app/brand-selector/brand-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__brand_card_brand_card_component__ = __webpack_require__("../../../../../src/app/brand-card/brand-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_selector_product_selector_component__ = __webpack_require__("../../../../../src/app/product-selector/product-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__product_card_product_card_component__ = __webpack_require__("../../../../../src/app/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__edition_selector_edition_selector_component__ = __webpack_require__("../../../../../src/app/edition-selector/edition-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__edition_card_edition_card_component__ = __webpack_require__("../../../../../src/app/edition-card/edition-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__new_brand_modal_new_brand_modal_component__ = __webpack_require__("../../../../../src/app/new-brand-modal/new-brand-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_view_login_view_component__["a" /* LoginViewComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__profile_view_profile_view_component__["a" /* ProfileViewComponent */] },
    { path: 'new-wish', component: __WEBPACK_IMPORTED_MODULE_16__new_wish_view_new_wish_view_component__["a" /* NewWishViewComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__button_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_view_login_view_component__["a" /* LoginViewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__wish_card_wish_card_component__["a" /* WishCardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__post_card_post_card_component__["a" /* PostCardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__profile_view_profile_view_component__["a" /* ProfileViewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__new_wish_view_new_wish_view_component__["a" /* NewWishViewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__brand_selector_brand_selector_component__["a" /* BrandSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_18__brand_card_brand_card_component__["a" /* BrandCardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__product_selector_product_selector_component__["a" /* ProductSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_20__product_card_product_card_component__["a" /* ProductCardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__edition_selector_edition_selector_component__["a" /* EditionSelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_22__edition_card_edition_card_component__["a" /* EditionCardComponent */],
            __WEBPACK_IMPORTED_MODULE_23__new_brand_modal_new_brand_modal_component__["a" /* NewBrandModalComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_12__services_session_service__["a" /* SessionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/brand-card/brand-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='brand-card'>\n  <img src=\"http://via.placeholder.com/60x60\" alt=\"\">\n  <h4>{{brand.name}}</h4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/brand-card/brand-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc( 100% - 5px);\n  height: 140px; }\n  .brand-card img {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    cursor: pointer;\n    max-width: 90%;\n    margin: 0 auto; }\n  .brand-card img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .brand-card h4 {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brand-card/brand-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    };
    return BrandCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BrandCardComponent.prototype, "brand", void 0);
BrandCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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

module.exports = "<div class='wrapper'>\n  <h3>Select a brand</h3>\n  <input type=\"text\" name=\"brandName\" value=\"\" (ngModelChange)=\"change($event)\" [(ngModel)]=\"brandName\">\n  <div class=\"brand-container\">\n    <app-brand-card *ngFor='let brand of visibleBrands' (click)=\"select(brand)\" [brand]='brand'></app-brand-card>\n    <app-brand-card (click)=\"requestBrandModal()\" [brand]='{name:\"New Brand\"}'></app-brand-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/brand-selector/brand-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  box-shadow: inset 0px 2px 10px 2px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n  width: 80%;\n  margin: 15px auto;\n  padding: 15px; }\n  .wrapper .brand-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 15px; }\n    .wrapper .brand-container app-brand-card {\n      width: calc((100% - 30px) / 5); }\n", ""]);

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
        this.onSelectBrand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.onRequestBrandModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.maxVisibleBrands = 9;
    }
    BrandSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.request.get('/brand')
            .subscribe(function (res) {
            _this.brandList = res.brands;
            _this.visibleBrands = _this.brandList.slice(0, _this.maxVisibleBrands);
        });
    };
    BrandSelectorComponent.prototype.requestBrandModal = function () {
        this.onRequestBrandModal.emit(true);
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
    return BrandSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], BrandSelectorComponent.prototype, "onSelectBrand", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], BrandSelectorComponent.prototype, "onRequestBrandModal", void 0);
BrandSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "label", void 0);
ButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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

module.exports = "<div class='edition-card'>\n  <img src=\"http://via.placeholder.com/60x60\" alt=\"\">\n  <h4>{{edition.name}}</h4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edition-card/edition-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edition-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc( 100% - 5px);\n  height: 140px; }\n  .edition-card img {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    cursor: pointer;\n    max-width: 90%;\n    margin: 0 auto; }\n  .edition-card img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .edition-card h4 {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edition-card/edition-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function EditionCardComponent() {
    }
    EditionCardComponent.prototype.ngOnInit = function () {
    };
    return EditionCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], EditionCardComponent.prototype, "edition", void 0);
EditionCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edition-card',
        template: __webpack_require__("../../../../../src/app/edition-card/edition-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edition-card/edition-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditionCardComponent);

//# sourceMappingURL=edition-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/edition-selector/edition-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <h3>Select a edition</h3>\n  <input type=\"text\" name=\"editionName\" value=\"\" (ngModelChange)=\"change($event)\" [(ngModel)]=\"editionName\">\n  <div class=\"edition-container\">\n    <app-edition-card *ngFor='let edition of visibleEdition' (click)=\"select(edition)\" [edition]='edition'></app-edition-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edition-selector/edition-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  box-shadow: inset 0px 2px 10px 2px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n  width: 80%;\n  margin: 15px auto;\n  padding: 15px; }\n  .wrapper .edition-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 15px; }\n    .wrapper .edition-container app-edition-card {\n      width: calc((100% - 30px) / 5); }\n", ""]);

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
        this.onSelectEdition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.maxVisibleEditions = 9;
    }
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
    return EditionSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], EditionSelectorComponent.prototype, "editionList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], EditionSelectorComponent.prototype, "visibleEdition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], EditionSelectorComponent.prototype, "onSelectEdition", void 0);
EditionSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edition-selector',
        template: __webpack_require__("../../../../../src/app/edition-selector/edition-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edition-selector/edition-selector.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], EditionSelectorComponent);

var _a;
//# sourceMappingURL=edition-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"wrapper\">\n    <h1 class='title'>\n      WantIt\n    </h1>\n    <nav class=\"menu\">\n      <app-button [label]=\"'home'\" (click)='enroute(\"home\")'></app-button>\n      <app-button *ngIf='!session.user' [label]=\"'login'\" (click)='enroute(\"login\")'></app-button>\n      <app-button *ngIf='session.user' [label]=\"'new wish'\" (click)='enroute(\"new-wish\")'></app-button>\n      <app-button *ngIf='session.user' [label]=\"'profile'\" (click)='enroute(\"profile\")'></app-button>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\n  padding: 0px 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  box-shadow: 0px 5px 5px 0px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  background-color: #F9F9F9;\n  border-bottom: 2px solid #851479; }\n\nheader .wrapper {\n  margin: 0 auto;\n  max-width: 100%;\n  width: 1280px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nheader .wrapper h1.title {\n  text-transform: none;\n  color: #333;\n  font-family: 'Monoton', sans-serif;\n  margin: auto;\n  font-size: 2.5em;\n  font-weight: normal;\n  line-height: 80px;\n  text-shadow: 1px 1px 0px #851479; }\n\nheader .wrapper .menu {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: right; }\n", ""]);

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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

module.exports = "<h1>Popular wishes</h1>\n<div class=\"wish-container\">\n  <app-wish-card *ngFor='let wish of wishes' [wish]='wish'></app-wish-card>\n</div>\n<h1>Popular posts</h1>\n<div class=\"wish-container\">\n  <app-post-card *ngFor='let post of posts' [post]='post'></app-post-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wish-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .wish-container app-wish-card, .wish-container app-post-card {\n    width: 20%; }\n", ""]);

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
            _this.wishes = res.wishes;
        });
        this.request.get('/post')
            .subscribe(function (res) {
            console.log(res.posts);
            _this.posts = res.posts;
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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

module.exports = "<section>\n  <h1>Session</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <div class=\"forms-wrapper\">\n    <form class=\"auth-form\" #loginForm=\"ngForm\">\n      <h3>Login</h3>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"loginUsername\" value=\"\" placeholder=\"Your username\">\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"loginPassword\" value=\"\" placeholder=\"Your password\">\n      <app-button [label]=\"'login'\" (click)='login(loginForm)'></app-button>\n    </form>\n\n    <form class=\"auth-form\" (ngSubmit)=\"submitSignup(signupForm)\" #signupForm=\"ngForm\">\n      <h3>Signup</h3>\n      <label for=\"username\">Username:</label>\n      <input type=\"text\" name=\"username\" value=\"\" placeholder=\"Your username\">\n      <label for=\"password\">Password:</label>\n      <input type=\"password\" name=\"password\" value=\"\" placeholder=\"Your password\">\n      <label for=\"email\">Email:</label>\n      <input type=\"text\" name=\"text\" value=\"\" placeholder=\"Your email\">\n      <!-- <app-button [label]=\"'signup'\" (click)='signup()'></app-button> -->\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/login-view/login-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .forms-wrapper .auth-form {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    box-shadow: 0px 5px 5px 0px #888;\n    margin-bottom: 10px;\n    border: 1px solid #CCC;\n    margin: 15px;\n    padding: 10px 30px 25px 30px;\n    height: 300px; }\n    .forms-wrapper .auth-form app-button {\n      position: absolute;\n      right: 25px;\n      bottom: 25px; }\n", ""]);

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
    }
    LoginViewComponent.prototype.ngOnInit = function () {
    };
    LoginViewComponent.prototype.login = function (form) {
        var _this = this;
        console.log(form.value);
        this.request.post('/user/login', form.value)
            .subscribe(function (res) {
            console.log(res.user);
            _this.session.setSession(res.user);
            _this.router.navigate(['/']);
        }, function (err) { return console.log('Nombre de usuario o contraseña incorrectos'); });
    };
    return LoginViewComponent;
}());
LoginViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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

module.exports = "<div class=\"occluder\" (click)=\"hideBrandModal()\">\n  &nbsp\n</div>\n<div class=\"wrapper\">\n  <div class=\"modal\">\n    <div class=\"form\">\n      <label for=\"shortname\">Short name</label>\n      <input type=\"text\" name=\"shortname\" [(ngModel)]=\"shortName\" (change)=\"wikiRef()\">\n      <label for=\"longname\">Long name</label>\n      <input type=\"text\" name=\"longname\"  [(ngModel)]=\"longName\">\n      <label for=\"country\">Country</label>\n      <input type=\"text\" name=\"country\"  [(ngModel)]=\"country\">\n      <app-button [label]=\"'create'\" (click)=\"createBrand()\"></app-button>\n    </div>\n    <div class=\"wiki-suggest\">\n      <h6 *ngFor=\"let sugest of wikiSugestion, let i=index\" (click)=\"pickSuggestion(i)\"> {{sugest}}</h6>\n    </div>\n    <div class=\"wiki-search\">\n      <h5>{{wikiTitle}}</h5>\n      <p>{{wikiDesc}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-brand-modal/new-brand-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".occluder {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #333;\n  opacity: 0.5;\n  z-index: 100; }\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  pointer-events: none;\n  z-index: 101; }\n  .wrapper .modal {\n    box-shadow: 0px 5px 5px 0px #888;\n    margin-bottom: 10px;\n    border: 1px solid #CCC;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #F9F9F9;\n    width: 600px;\n    padding: 30px;\n    pointer-events: all; }\n    .wrapper .modal div {\n      width: 40%; }\n    .wrapper .modal .wiki-suggest {\n      width: 20%;\n      overflow: hidden; }\n      .wrapper .modal .wiki-suggest h6 {\n        cursor: pointer;\n        line-height: 15px;\n        margin: 2px;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n    .wrapper .modal .wiki-search p {\n      height: 100px;\n      overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-brand-modal/new-brand-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__("../../../../../src/app/services/request.service.ts");
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
    function NewBrandModalComponent(request) {
        this.request = request;
        this.onClickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.wikiTitle = "This is a wikipedia search!";
        this.wikiDesc = "You could find some nice reference here";
    }
    NewBrandModalComponent.prototype.ngOnInit = function () {
    };
    NewBrandModalComponent.prototype.wikiRef = function () {
        var _this = this;
        this.wikiTitle = "Searching...";
        this.request.wiki(this.shortName, function (err, data) {
            console.log(data);
            _this.wikiSugestion = data[1];
            _this.wikiDescriptions = data[2];
            _this.pickSuggestion(0);
        });
    };
    NewBrandModalComponent.prototype.pickSuggestion = function (idx) {
        console.log(idx);
        var reg = new RegExp('may refer to', 'i');
        if (reg.test(this.wikiSugestion[idx])) {
            this.pickSuggestion(idx + 1);
        }
        else {
            this.wikiTitle = this.wikiSugestion[idx];
            this.wikiDesc = this.wikiDescriptions[idx];
        }
    };
    NewBrandModalComponent.prototype.createBrand = function () {
        console.log(this.shortName, this.longName, this.country);
        if (this.shortName) {
            this.request.post('/brand/name', { term: this.shortName })
                .subscribe(function (res) {
                if (res.brands.length != 0) {
                }
            });
        }
    };
    NewBrandModalComponent.prototype.hideBrandModal = function () {
        console.log("emiting");
        this.onClickOutside.emit();
    };
    return NewBrandModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], NewBrandModalComponent.prototype, "onClickOutside", void 0);
NewBrandModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new-brand-modal',
        template: __webpack_require__("../../../../../src/app/new-brand-modal/new-brand-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-brand-modal/new-brand-modal.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _a || Object])
], NewBrandModalComponent);

var _a;
//# sourceMappingURL=new-brand-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-wish-view/new-wish-view.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>New wish</h1>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  <h3 class=\"selection\">\n    Selected :\n    <strong *ngIf=\"selectedBrand\">{{selectedBrand.name}}</strong>\n    <strong *ngIf=\"selectedProduct\">{{selectedProduct.name}}</strong>\n    <strong *ngIf=\"selectedEdition\">{{selectedEdition.name}}</strong>\n    <span class=\"backbutton\" *ngIf=\"selectedBrand\" (click)=\"reset()\"> - back</span>\n  </h3>\n  <app-brand-selector\n    (onSelectBrand)=\"selectBrand($event)\"\n    (onRequestBrandModal)=\"showBrandModal($event)\"\n    [hidden]=\"selectedBrand\">\n  </app-brand-selector>\n  <app-product-selector\n    (onSelectProduct)=\"selectProduct($event)\"\n    [hidden]=\"!selectedBrand || selectedProduct\"\n    [productList]=\"brandProducts\"\n    [visibleProduct]=\"brandProducts\">\n  </app-product-selector>\n  <app-edition-selector\n    (onSelectEdition)=\"selectEdition($event)\"\n    [hidden]=\"!selectedProduct || selectedEdition\"\n    [editionList]=\"productEditions\"\n    [visibleEdition]=\"productEditions\">\n  </app-edition-selector>\n  <div class=\"options\" *ngIf='selectedEdition'>\n    <h4>want it</h4>\n    <h4>have it</h4>\n    <h4>had it</h4>\n    <app-button (click)=\"createWish()\" [label]=\"'Make a wish'\"></app-button>\n  </div>\n  <app-new-brand-modal *ngIf=\"brandModal\" (onClickOutside)=\"hideBrandModal()\"></app-new-brand-modal>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/new-wish-view/new-wish-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  box-shadow: inset 0px 2px 10px 2px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC; }\n\n.selection .backbutton {\n  display: inline-block;\n  cursor: pointer;\n  transition: opacity 0.5s;\n  opacity: 0.2; }\n  .selection .backbutton:hover {\n    opacity: 1; }\n", ""]);

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
        this.brandModal = false;
        this.productModal = false;
        this.editionModal = false;
        this.selectedBrand = undefined;
    }
    NewWishViewComponent.prototype.ngOnInit = function () {
    };
    NewWishViewComponent.prototype.selectBrand = function (brand) {
        var _this = this;
        this.selectedBrand = brand;
        this.request.get("/product/brand/" + brand['_id'])
            .subscribe(function (res) {
            _this.brandProducts = res.products;
        });
    };
    NewWishViewComponent.prototype.selectProduct = function (product) {
        var _this = this;
        this.selectedProduct = product;
        this.request.get("/edition/product/" + product['_id'])
            .subscribe(function (res) {
            _this.productEditions = res.editions;
        });
    };
    NewWishViewComponent.prototype.selectEdition = function (edition) {
        this.selectedEdition = edition;
    };
    NewWishViewComponent.prototype.showBrandModal = function (event) {
        this.brandModal = true;
    };
    NewWishViewComponent.prototype.hideBrandModal = function (event) {
        this.brandModal = false;
    };
    NewWishViewComponent.prototype.createWish = function () {
        var _this = this;
        var editionId = this.selectedEdition['_id'];
        var userId = this.session.user['_id'];
        this.request.post('/wish/create', { editionId: editionId, userId: userId })
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
            this.productEditions = [];
        }
        else {
            this.selectedBrand = undefined;
            this.brandProducts = [];
        }
    };
    return NewWishViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('productSelector'),
    __metadata("design:type", Object)
], NewWishViewComponent.prototype, "productSelector", void 0);
NewWishViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-new-wish-view',
        template: __webpack_require__("../../../../../src/app/new-wish-view/new-wish-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-wish-view/new-wish-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], NewWishViewComponent);

var _a, _b, _c;
//# sourceMappingURL=new-wish-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-card/post-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='post-card'>\n  <img src=\"http://via.placeholder.com/240x200\" alt=\"placehold\">\n  <p>\"{{comment}}\"</p>\n  <p><strong>{{ brand.name }} {{product.name}} {{edition.name}}</strong> by <strong> @{{user.username}} </strong></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/post-card/post-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".post-card {\n  box-shadow: 0px 5px 5px 0px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  margin: 10px; }\n  .post-card img {\n    width: 90%;\n    margin: 10px; }\n  .post-card p {\n    height: 25px;\n    overflow-y: hidden;\n    text-align: left;\n    margin: auto 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-card/post-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function PostCardComponent() {
    }
    PostCardComponent.prototype.ngOnInit = function () {
        this.edition = this.post.wishId.editionId;
        this.product = this.edition['productId'];
        this.brand = this.product['brandId'];
        this.user = this.post.wishId.userId;
        this.comment = this.post.comment;
    };
    return PostCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PostCardComponent.prototype, "post", void 0);
PostCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-post-card',
        template: __webpack_require__("../../../../../src/app/post-card/post-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-card/post-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PostCardComponent);

//# sourceMappingURL=post-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='product-card'>\n  <img src=\"http://via.placeholder.com/60x60\" alt=\"\">\n  <h4>{{product.name}}</h4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: calc( 100% - 5px);\n  height: 140px; }\n  .product-card img {\n    transition: -webkit-transform 0.5s;\n    transition: transform 0.5s;\n    transition: transform 0.5s, -webkit-transform 0.5s;\n    cursor: pointer;\n    max-width: 90%;\n    margin: 0 auto; }\n  .product-card img:hover {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n  .product-card h4 {\n    text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function ProductCardComponent() {
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    return ProductCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ProductCardComponent.prototype, "product", void 0);
ProductCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-product-card',
        template: __webpack_require__("../../../../../src/app/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-card/product-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductCardComponent);

//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/product-selector/product-selector.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wrapper'>\n  <h3>Select a product</h3>\n  <input type=\"text\" name=\"productName\" value=\"\" (ngModelChange)=\"change($event)\" [(ngModel)]=\"productName\">\n  <div class=\"product-container\">\n    <app-product-card *ngFor='let product of visibleProduct' (click)=\"select(product)\" [product]='product'></app-product-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-selector/product-selector.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  box-shadow: inset 0px 2px 10px 2px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  border-radius: 2px;\n  width: 80%;\n  margin: 15px auto;\n  padding: 15px; }\n  .wrapper .product-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 15px; }\n    .wrapper .product-container app-product-card {\n      width: calc((100% - 30px) / 5); }\n", ""]);

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
        this.onSelectProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.maxVisibleProducts = 9;
    }
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
    return ProductSelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ProductSelectorComponent.prototype, "productList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ProductSelectorComponent.prototype, "visibleProduct", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], ProductSelectorComponent.prototype, "onSelectProduct", void 0);
ProductSelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
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

module.exports = "<section>\n  <h1>Profile</h1>\n  <img src=\"http://via.placeholder.com/200x200\" alt=\"placehold\">\n  <h3>{{name}}</h3>\n  <h6>@{{username}}</h6>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/profile-view/profile-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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
    function ProfileViewComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        if (this.session.user) {
            this.username = this.session.user['username'];
            this.name = this.session.user['name'];
        }
        else {
            this.router.navigate(['/']);
        }
    };
    return ProfileViewComponent;
}());
ProfileViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile-view',
        template: __webpack_require__("../../../../../src/app/profile-view/profile-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-view/profile-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], ProfileViewComponent);

var _a, _b;
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
    RequestService.prototype.post = function (query, data) {
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + query, data, this.options)
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
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
        this.getSession();
    }
    SessionService.prototype.setSession = function (user) {
        this.user = user;
    };
    SessionService.prototype.unsetSession = function () {
        var _this = this;
        this.request.get('/user/logout')
            .subscribe(function (res) {
            console.log(res);
            _this.user = undefined;
        });
    };
    SessionService.prototype.getSession = function () {
        var _this = this;
        this.request.get('/user/getuser')
            .subscribe(function (res) {
            console.log(res);
            _this.user = res.user;
        });
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/wish-card/wish-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wish-card'>\n  <img src=\"http://via.placeholder.com/240x200\" alt=\"placehold\">\n  <p><strong>{{ brand.name }} {{product.name}} {{edition.name}}</strong> by <strong> @{{user.username}} </strong></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wish-card/wish-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wish-card {\n  box-shadow: 0px 5px 5px 0px #888;\n  margin-bottom: 10px;\n  border: 1px solid #CCC;\n  margin: 10px; }\n  .wish-card img {\n    width: 90%;\n    margin: 10px; }\n  .wish-card p {\n    height: 25px;\n    overflow-y: hidden;\n    text-align: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wish-card/wish-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function WishCardComponent() {
    }
    WishCardComponent.prototype.ngOnInit = function () {
        this.edition = this.wish.editionId;
        this.product = this.edition['productId'];
        this.brand = this.product['brandId'];
        this.user = this.wish.userId;
    };
    return WishCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WishCardComponent.prototype, "wish", void 0);
WishCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-wish-card',
        template: __webpack_require__("../../../../../src/app/wish-card/wish-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wish-card/wish-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WishCardComponent);

//# sourceMappingURL=wish-card.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
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