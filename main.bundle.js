webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bundle_bundle_component__ = __webpack_require__("../../../../../src/app/bundle/bundle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulate_simulate_component__ = __webpack_require__("../../../../../src/app/simulate/simulate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__multiguna_multiguna_component__ = __webpack_require__("../../../../../src/app/multiguna/multiguna.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'bundle', redirectTo: 'bundle/landing' },
    // { path: 'bundle', redirectTo: 'bundle/multiguna' },
    { path: 'bundle', component: __WEBPACK_IMPORTED_MODULE_2__bundle_bundle_component__["a" /* BundleComponent */],
        children: [
            { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */] },
            { path: 'simulate', component: __WEBPACK_IMPORTED_MODULE_4__simulate_simulate_component__["a" /* SimulateComponent */] },
            { path: 'order', component: __WEBPACK_IMPORTED_MODULE_5__order_order_component__["b" /* OrderComponent */] },
            { path: 'multiguna', component: __WEBPACK_IMPORTED_MODULE_6__multiguna_multiguna_component__["a" /* MultigunaComponent */] },
        ] },
    // otherwise redirect to home
    { path: '**', redirectTo: 'bundle/landing' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_pick_datetime__ = __webpack_require__("../../../../ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__banner_banner_component__ = __webpack_require__("../../../../../src/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bundle_bundle_component__ = __webpack_require__("../../../../../src/app/bundle/bundle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_objectgroup_service__ = __webpack_require__("../../../../../src/app/services/objectgroup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_objectbrand_service__ = __webpack_require__("../../../../../src/app/services/objectbrand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_objectmodel_service__ = __webpack_require__("../../../../../src/app/services/objectmodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__simulate_simulate_component__ = __webpack_require__("../../../../../src/app/simulate/simulate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__province_code_pipe__ = __webpack_require__("../../../../../src/app/province-code.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__order_order_component__ = __webpack_require__("../../../../../src/app/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_province_service__ = __webpack_require__("../../../../../src/app/services/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_kota_service__ = __webpack_require__("../../../../../src/app/services/kota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_simulasi_service__ = __webpack_require__("../../../../../src/app/services/simulasi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_kecamatan_service__ = __webpack_require__("../../../../../src/app/services/kecamatan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_kelurahan_service__ = __webpack_require__("../../../../../src/app/services/kelurahan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_submit_order_service__ = __webpack_require__("../../../../../src/app/services/submit-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__year_picker_component_year_picker_component__ = __webpack_require__("../../../../../src/app/year-picker-component/year-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__multiguna_multiguna_component__ = __webpack_require__("../../../../../src/app/multiguna/multiguna.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__safeurl_pipe__ = __webpack_require__("../../../../../src/app/safeurl.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__bundle_bundle_component__["a" /* BundleComponent */],
                __WEBPACK_IMPORTED_MODULE_18__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__simulate_simulate_component__["a" /* SimulateComponent */],
                __WEBPACK_IMPORTED_MODULE_20__province_code_pipe__["a" /* ProvinceCodePipe */],
                __WEBPACK_IMPORTED_MODULE_23__order_order_component__["b" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_31__year_picker_component_year_picker_component__["a" /* YearPickerComponent */],
                __WEBPACK_IMPORTED_MODULE_32__multiguna_multiguna_component__["a" /* MultigunaComponent */],
                __WEBPACK_IMPORTED_MODULE_33__safeurl_pipe__["a" /* SafeurlPipe */],
                __WEBPACK_IMPORTED_MODULE_23__order_order_component__["a" /* Modal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["K" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["L" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["M" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["N" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["J" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng2_currency_mask__["CurrencyMaskModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_objectgroup_service__["a" /* ObjectgroupService */], __WEBPACK_IMPORTED_MODULE_15__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_16__services_objectbrand_service__["a" /* ObjectbrandService */], __WEBPACK_IMPORTED_MODULE_17__services_objectmodel_service__["a" /* ObjectmodelService */], __WEBPACK_IMPORTED_MODULE_22__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_24__services_province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_25__services_kota_service__["a" /* KotaService */], __WEBPACK_IMPORTED_MODULE_26__services_simulasi_service__["a" /* SimulasiService */], __WEBPACK_IMPORTED_MODULE_27__services_kecamatan_service__["a" /* KecamatanService */], __WEBPACK_IMPORTED_MODULE_28__services_kelurahan_service__["a" /* KelurahanService */], __WEBPACK_IMPORTED_MODULE_29__services_global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_30__services_submit_order_service__["a" /* SubmitOrderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]], entryComponents: [__WEBPACK_IMPORTED_MODULE_23__order_order_component__["a" /* Modal */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/banner/banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel{\r\n    overflow:hidden;\r\n    width:100%;\r\n}\r\n\r\n.slides{\r\n    margin: 0px;\r\n    list-style:none;\r\n    position:relative;\r\n    width:500%;\r\n    /* Number of panes * 100% */\r\n    /* Slide effect Animations*/\r\n    -webkit-animation:carousel 150s infinite;\r\n    animation:carousel 150s infinite;\r\n}\r\n\r\n.slides > li{\r\n    position:relative;\r\n    float:left;\r\n    width: 20%; /* 100 / number of panes */\r\n}\r\n\r\n.carousel img{\r\n    display:block;\r\n    width:100%;\r\n}\r\n\r\n@-webkit-keyframes carousel{\r\n    0%    { left:-2.5%; }\r\n    11%   { left:-2.5%; }\r\n    12.5% { left:-102.5%; }\r\n    23.5% { left:-102.5%; }\r\n    25%   { left:-202.5%; }\r\n    36%   { left:-202.5%; }\r\n    37.5% { left:-302.5%; }\r\n    48.5% { left:-302.5%; }\r\n    50%   { left:-403%; }\r\n    61%   { left:-403%; }\r\n    62.5% { left:-302.5%; }\r\n    73.5% { left:-302.5%; }\r\n    75%   { left:-203%; }\r\n    86%   { left:-203%; }\r\n    87.5% { left:-102.5%; }\r\n    98.5% { left:-102.5%; }\r\n    100%    { left:-2.5%; }\r\n}\r\n\r\n@keyframes carousel{\r\n    0%    { left:-2.5%; }\r\n    11%   { left:-2.5%; }\r\n    12.5% { left:-102.5%; }\r\n    23.5% { left:-102.5%; }\r\n    25%   { left:-202.5%; }\r\n    36%   { left:-202.5%; }\r\n    37.5% { left:-302.5%; }\r\n    48.5% { left:-302.5%; }\r\n    50%   { left:-403%; }\r\n    61%   { left:-403%; }\r\n    62.5% { left:-302.5%; }\r\n    73.5% { left:-302.5%; }\r\n    75%   { left:-203%; }\r\n    86%   { left:-203%; }\r\n    87.5% { left:-102.5%; }\r\n    98.5% { left:-102.5%; }\r\n    100%    { left:-2.5%; }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n  <ul class=\"slides\">\n    <li *ngFor=\"let image of images\">\n      <img src=\"{{image.url}}\" alt=\"\">\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.images = IMAGES;
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__("../../../../../src/app/banner/banner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());

var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());
var IMAGES = [
    { "title": "", "url": "assets/img/banner2.jpg" },
    { "title": "", "url": "assets/img/banner4.jpg" },
    { "title": "", "url": "assets/img/banner2.jpg" },
    { "title": "", "url": "assets/img/banner4.jpg" },
    { "title": "", "url": "assets/img/banner2.jpg" }
];


/***/ }),

/***/ "../../../../../src/app/bundle/bundle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    max-width: 100%;\r\n    margin: 0px auto;\r\n}\r\n\r\n.bundle-header {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    z-index: 5;\r\n}\r\n\r\n.bundle-banner {\r\n    -webkit-box-shadow: 0 5px 3px -3px #000;\r\n    box-shadow: 0 5px 3px -3px #000;\r\n}\r\n\r\n.bundle-footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    z-index: -1;\r\n}\r\n\r\n.help {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 20px;\r\n    width: 317px;\r\n    border: 1px solid #000;\r\n}\r\n\r\n.helpcare {\r\n    width: 317px;\r\n    border: none;\r\n    overflow: hidden;\r\n    height: 329px;\r\n}\r\n\r\n.minimized-i {\r\n    float: right;\r\n    margin-right: 5px;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n}\r\n\r\n.toolbar-help {\r\n    background: #003665;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    width: 308px;\r\n    font-size: 12px;\r\n}\r\n\r\n@media (max-width:1600px) {\r\n    .container {\r\n        max-width: 100%;\r\n        margin: 0px auto;\r\n    }\r\n    .bundle-header {\r\n        position: fixed;\r\n        top: 0;\r\n        width: 100%;\r\n        z-index: 5;\r\n    }\r\n    .bundle-banner {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        height: 80%;\r\n        overflow: hidden;\r\n        opacity: 0.9;\r\n        z-index: -1;\r\n    }\r\n    .toolbar-help {\r\n        background: #fff;\r\n        color: #003665;\r\n        cursor: pointer;\r\n        width: 307px;\r\n        font-size: 12px;\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\n@media (max-width:900px) {\r\n    .bundle-banner {\r\n        position: relative;\r\n        z-index: -1;\r\n        display: none;\r\n    }\r\n    .toolbar-help {\r\n        background: #003665;\r\n        color: #fff;\r\n        cursor: pointer;\r\n        width: 309px;\r\n        font-size: 12px;\r\n        padding: 5px;\r\n    }\r\n}\r\n\r\n@media (max-width:500px) {\r\n    .bundle-banner {\r\n        position: relative;\r\n        z-index: -1;\r\n        display: none;\r\n    }\r\n    .help {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bundle/bundle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header class=\"bundle-header\"></app-header>\n    <app-banner class=\"bundle-banner\"></app-banner>\n    <router-outlet></router-outlet>\n    <app-footer class=\"bundle-footer\"></app-footer>\n    <!-- <div class=\"help\">\n        <div class=\"toolbar-help\" (click)=\"showHelp()\">Bantuan\n            <span class=\"minimized-i\" *ngIf=\"helpShow\"><i class=\"fa fa-minus-square\" aria-hidden=\"true\"></i></span>\n            <span class=\"minimized-i\" *ngIf=\"!helpShow\"><i class=\"fa fa-external-link-square\" aria-hidden=\"true\"></i></span>\n        </div>\n        <iframe *ngIf=\"helpShow\" class=\"helpcare\" [src]='srcHelp | safeurl' width=\"309\"></iframe>\n    </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/bundle/bundle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BundleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_objectgroup_service__ = __webpack_require__("../../../../../src/app/services/objectgroup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_objectbrand_service__ = __webpack_require__("../../../../../src/app/services/objectbrand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_objectmodel_service__ = __webpack_require__("../../../../../src/app/services/objectmodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BundleComponent = /** @class */ (function () {
    function BundleComponent(_formBuilder, objectGroupService, objectBrandService, objectModelService, globalService) {
        this._formBuilder = _formBuilder;
        this.objectGroupService = objectGroupService;
        this.objectBrandService = objectBrandService;
        this.objectModelService = objectModelService;
        this.globalService = globalService;
        this.isLinear = false;
        this.srcHelp = "";
        this.helpShow = false;
        this.produkCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
    }
    BundleComponent.prototype.showHelp = function () {
        if (this.helpShow)
            this.helpShow = false;
        else
            this.helpShow = true;
    };
    BundleComponent.prototype.ngOnInit = function () {
        this.srcHelp = this.globalService.botUrl;
        this.valueHarga = 0;
        this.dataBrand = false;
        this.dataModel = false;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    BundleComponent.prototype.ngOnSelectGroup = function (objectGroup) {
        var _this = this;
        this.Objectbrands = null;
        this.Objectmodels = null;
        this.dataBrand = true;
        this.objectBrandService.getObjectBrand(objectGroup)
            .subscribe(function (data) {
            _this.Objectbrands = data;
            _this.dataBrand = false;
            console.log(_this.Objectbrands);
        }, function (error) { });
    };
    BundleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bundle',
            template: __webpack_require__("../../../../../src/app/bundle/bundle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bundle/bundle.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__services_objectgroup_service__["a" /* ObjectgroupService */],
            __WEBPACK_IMPORTED_MODULE_3__services_objectbrand_service__["a" /* ObjectbrandService */],
            __WEBPACK_IMPORTED_MODULE_4__services_objectmodel_service__["a" /* ObjectmodelService */],
            __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */]])
    ], BundleComponent);
    return BundleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    width: 100%;\r\n}\r\n\r\n.footer div {\r\n    float: left;\r\n}\r\n\r\n.decor1,\r\n.decor2 {\r\n    width: 20%;\r\n}\r\n\r\n.decor1 img {\r\n    width: 30%;\r\n    height: 20%;\r\n    float: left;\r\n}\r\n\r\n.decor2 img {\r\n    width: 30%;\r\n    height: 20%;\r\n    float: right;\r\n}\r\n\r\n.content {\r\n    width: 60%;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    color: #fff;\r\n    margin-top: 3%;\r\n    text-shadow: 1px 0 8px #000000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n    <div class=\"decor1\">\n        <img src=\"./assets/decor2.png\" alt=\"\" />\n    </div>\n    <div class=\"content\">\n        Copyright 2018<br/>PT. Mandiri Utama Finance. All Rights Reserved.\n    </div>\n    <div class=\"decor2\">\n        <img src=\"./assets/decor1.png\" alt=\"\" />\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    margin-left: 3%;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    font-family: 'Roboto Condensed';\r\n    color: #003665;\r\n    text-shadow: 0px 1px 6px rgb(255, 255, 255);\r\n}\r\n\r\nbutton i {\r\n    color: #fff;\r\n}\r\n\r\n.home-logo img {\r\n    margin-top: 8px !important;\r\n}\r\n\r\n.home-toolbar {\r\n    /* background: linear-gradient(to right,  #ffffff,#ffffff, #e4e4e4); */\r\n    background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 60%, #b62b2d 60%, #b62b2d 65%, rgb(131, 3, 3) 75%, #fff 75%, rgba(255, 255, 255, 1) 78%, rgb(255, 175, 0) 78%, rgb(255, 175, 0) 80%, #003665 80%, #003665 100%);\r\n    opacity: 0.9;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n.upper-menu {\r\n    margin-bottom: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\ndiv.collapsed {\r\n    overflow: hidden;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    z-index: 5;\r\n}\r\n\r\ndiv.collapsed button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    padding: 8px;\r\n    color: #003665;\r\n    border: #003665 solid 1px;\r\n    border-radius: 1%;\r\n    background: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\ndiv.collapsed button i {\r\n    color: #003665;\r\n}\r\n\r\ndiv.collapsed button:hover {\r\n    background: rgb(228, 228, 228);\r\n}\r\n\r\n.focused {\r\n    opacity: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"home-toolbar effect2\" [class.focused]=\"isCollapsed\">\n    <!-- <div class=\"home-toolbar-menu\" *ngIf=> -->\n    <mat-toolbar-row *ngIf=\"isCollapsed\" class=\"upper-menu\">\n        <!-- <div [class.collapsed]=\"isCollapsed\" [style.height]=\"isCollapsed ? maxHeight+'px' : 'auto'\">\n            <button (click)=\"showBot()\">\n              <span><i class=\"fa fa-question-circle\"></i> BANTUAN</span>\n          </button>\n        </div> -->\n    </mat-toolbar-row>\n    <mat-toolbar-row>\n        <div class=\"home-logo\">\n            <img src=\"assets/mandiriutamafinance.jpg\" alt=\"Mandiri Utama Finance\" />\n        </div>\n        <span class=\"right-spacer\"><span *ngIf=\"Harga.length > 0\">Harga Unit {{this.Harga | currency:'Rp.':'false':'2.0-4'}}</span></span>\n        <button mat-icon-button (click)=\"toggleMenu()\">\n          <i *ngIf=\"!isCollapsed\" class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>\n          <i *ngIf=\"isCollapsed\" class=\"fa fa-chevron-up\" aria-hidden=\"true\"></i>\n        </button>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data, botUrl) {
        this.data = data;
        this.botUrl = botUrl;
        this.isCollapsed = false;
        this.isCollapsable = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentSimulasi.subscribe(function (obj) { return _this.Harga = obj == null ? "" : obj.simulasiHarga.toString(); });
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    HeaderComponent.prototype.showBot = function () {
        var args = "toolbar=no,menubar=no,location=no,resizable=no,scrollbar=no,status=no,width=320,height=325,screenX=500,screenY=10";
        window.open(this.botUrl.botUrl, "HelpCare", args);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* GlobalService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-spinner {\r\n    width: 1px;\r\n    height: 1px;\r\n}\r\n\r\n.drawer-container {\r\n    width: 100% !important;\r\n    margin: 0 auto;\r\n    padding-bottom: 20px !important;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n\r\n.square-apps {\r\n    width: 26% !important;\r\n    min-width: 80px;\r\n    font-size: 75%;\r\n    color: #fff;\r\n    float: left;\r\n    background: #003665;\r\n    margin: 5px;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 5px 3px -3px #777;\r\n    box-shadow: 0 5px 3px -3px #777;\r\n    border-radius: 5px;\r\n    cursor: pointer !important;\r\n    z-index: 11;\r\n}\r\n\r\n.square-apps:hover {\r\n    background: #00549e;\r\n    -webkit-box-shadow: 1px 10px 6px -6px #777;\r\n    box-shadow: 1px 10px 6px -6px #777;\r\n}\r\n\r\n@media (max-width:1600px) {\r\n     ::ng-deep snack-bar-container.success-snackbar {\r\n        background-color: #fff;\r\n        color: red;\r\n    }\r\n    .bundle-card {\r\n        position: absolute;\r\n        top: 13%;\r\n        width: 90%;\r\n        margin-left: 5%;\r\n    }\r\n    .bundle-card div {\r\n        width: 46%;\r\n        float: left;\r\n        padding: 1% 2% 1% 2%;\r\n    }\r\n    .motto .m1 {\r\n        font-size: 400%;\r\n        font-family: 'Anton';\r\n        width: 100%;\r\n        line-height: 120%;\r\n        letter-spacing: 5px;\r\n        color: #fff;\r\n        text-shadow: 1px 0 8px #000;\r\n        float: none;\r\n    }\r\n    .motto .m2 {\r\n        font-size: 150%;\r\n        font-family: 'Roboto Condensed';\r\n        line-height: 80%;\r\n        letter-spacing: 3px;\r\n        color: #fff;\r\n        text-shadow: 2px 0 5px #000000;\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n    .form-face {\r\n        background: rgba(255, 255, 255, 0.8);\r\n        font-size: 17px !important;\r\n        -webkit-box-shadow: 0 10px 6px -6px #777;\r\n        box-shadow: 0 10px 6px -6px #777;\r\n        border: #ccc solid 1px;\r\n        position: relative;\r\n        width: calc(46% - 2px) !important;\r\n    }\r\n    .form-face mat-form-field {\r\n        padding: 0 5px 0 16px !important;\r\n        display: block;\r\n        z-index: 0 !important;\r\n    }\r\n    .form-face button {\r\n        margin-left: 2% !important;\r\n    }\r\n    .form-face .message {\r\n        /* margin-right: 5%;\r\n        margin-top:0;\r\n        font-size: 15px;\r\n        float:right !important; */\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width:900px) {\r\n     ::ng-deep snack-bar-container.success-snackbar {\r\n        background-color: #fff;\r\n        color: red;\r\n    }\r\n    .bundle-card {\r\n        position: absolute;\r\n        top: 12%;\r\n        max-width: 80%;\r\n        margin-left: 10%;\r\n    }\r\n    .bundle-card div {\r\n        width: 46%;\r\n        float: left;\r\n        padding: 1% 2% 1% 2%;\r\n    }\r\n    .motto {\r\n        width: 100%;\r\n    }\r\n    .motto .m1 {\r\n        font-size: 270%;\r\n        font-family: 'Anton';\r\n        width: 100%;\r\n        line-height: 100%;\r\n        letter-spacing: 5px;\r\n        color: #fff;\r\n        text-shadow: 1px 0 8px #000000;\r\n        float: none;\r\n    }\r\n    .motto .m2 {\r\n        font-size: 110%;\r\n        font-family: 'Roboto Condensed';\r\n        line-height: 70%;\r\n        letter-spacing: 3px;\r\n        color: #fff;\r\n        text-shadow: 2px 0 5px #000000;\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n    .form-face {\r\n        width: 100%;\r\n        height: 100%;\r\n        background: rgba(255, 255, 255, 0.8);\r\n        font-size: 18px !important;\r\n        padding-top: 5px;\r\n    }\r\n    .form-face mat-form-field {\r\n        display: block;\r\n    }\r\n    .form-face button {\r\n        width: 90% !important;\r\n        margin-left: 6% !important;\r\n    }\r\n    .form-face .message {\r\n        /* margin-right: 5%;\r\n        margin-top:0;\r\n        font-size: 15px;\r\n        float:right !important; */\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width:500px) {\r\n     ::ng-deep snack-bar-container.success-snackbar {\r\n        background-color: rgb(48, 48, 48);\r\n        color: #fff;\r\n    }\r\n    .bundle-card {\r\n        position: absolute;\r\n        top: 10%;\r\n        width: 96% !important;\r\n        max-width: 96% !important;\r\n        padding: 0 2% 0 2% !important;\r\n        margin-left: 0% !important;\r\n        margin-bottom: 10% !important;\r\n        z-index: 1;\r\n    }\r\n    .bundle-card div {\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n    .motto {\r\n        width: 96% !important;\r\n        padding: 2% 2% 2% 2% !important;\r\n        margin-bottom: 10px;\r\n    }\r\n    .motto .m1 {\r\n        font-size: 200%;\r\n        font-family: 'Anton';\r\n        width: 100%;\r\n        line-height: 110%;\r\n        letter-spacing: 5px;\r\n        color: #fff;\r\n        text-shadow: 1px 0 8px #000000;\r\n        float: none;\r\n    }\r\n    .motto .m2 {\r\n        font-size: 130%;\r\n        font-family: 'Roboto Condensed';\r\n        line-height: 50%;\r\n        letter-spacing: 3px;\r\n        color: #fff;\r\n        text-shadow: 2px 0 5px #000000;\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n    .form-face {\r\n        width: 96% !important;\r\n        padding: 2% 2% 2% 2% !important;\r\n        height: 100%;\r\n        background: rgba(255, 255, 255, 0.8);\r\n        font-size: 18px !important;\r\n        margin-bottom: 5% !important;\r\n    }\r\n    .form-face mat-form-field {\r\n        display: block;\r\n    }\r\n    .form-face button,\r\n    .message {\r\n        width: 90% !important;\r\n        margin-left: 5% !important;\r\n    }\r\n}\r\n\r\n.message {\r\n    color: red;\r\n    text-align: center;\r\n}\r\n\r\n.checked {\r\n    color: rgb(255, 217, 0);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bundle-card\">\n    <div class=\"motto\">\n        <div class=\"m1\">AJUKAN SEKARANG JUGA!</div>\n        <div class=\"m2\">It's time to make your muf!</div>\n    </div>\n    <div class=\"form-face\">\n        <div class=\"drawer-container\">\n            <div class=\"square-apps badge\" *ngFor=\"let objProduct of objProductType\" (click)=\"ngOnClickProduct(objProduct)\">\n                <input type=\"text\" style=\"display:none\" value=\"{{objProduct.product}}\">\n                <i class=\"{{objProduct.icon}}\" aria-hidden=\"true\"></i>&nbsp;\n                <i class=\"fa fa-check-circle checked\" aria-hidden=\"true\" *ngIf=\"objProduct.selected\"></i><br/> {{objProduct.title}}\n            </div>\n        </div>\n        <br/>\n        <form id=\"form-inp-simulasi\" class=\"example-form\" (ngSubmit)=\"ngOnClickSubmit()\" validation>\n            <mat-form-field>\n                <mat-progress-spinner *ngIf=\"!this.objProvince\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n                <mat-select [disabled]=\"this.objProvince? false : true\" placeholder=\"Provinsi\" required name=\"Provinsi\" [(ngModel)]=\"modelSimulasi.simulasiProvince.provinsi_id\" (ngModelChange)=\"ngOnSelectProvince(modelSimulasi.simulasiProvince)\">\n                    <mat-option *ngFor=\"let objPrv of objProvince\" [value]=\"objPrv.provinsi_id\">\n                        {{ objPrv.provinsi_name }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-progress-spinner *ngIf=\"!this.objKota\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n                <mat-select [disabled]=\"this.objKota? false : true\" placeholder=\"Kota\" required name=\"Kota\" [(ngModel)]=\"modelSimulasi.simulasiKota.kabupaten_id\" (ngModelChange)=\"ngOnSelectKota(modelSimulasi.simulasiKota)\">\n                    <mat-option *ngFor=\"let objKota of objKota\" [value]=\"objKota.kabupaten_id\">\n                        {{ objKota.kabupaten_name }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <input currencyMask matInput placeholder=\"Harga Kendaraan\" required name=\"Harga\" [options]=\"{ prefix: 'Rp ', thousands: ',', decimal: '.', align:'left', allowNegative:false, precision:0}\" [(ngModel)]=\"modelSimulasi.simulasiHarga\" />\n                <button mat-button *ngIf=\"modelSimulasi.simulasiHarga\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"modelSimulasi.simulasiHarga=''\">\n                <i class=\"fa fa-times-circle\"></i>\n                </button>\n                <!-- <mat-hint align=\"end\">Harga minimal Rp.1.000.000</mat-hint> -->\n            </mat-form-field>\n            <mat-form-field>\n                <input currencyMask matInput placeholder=\"{{captionUangMuka}}\" required name=\"Uang Muka\" [options]=\"{ prefix: 'Rp ', thousands: ',', decimal: '.', align:'left', allowNegative:false, precision:0}\" [(ngModel)]=\"modelSimulasi.simulasiUangMuka\" />\n                <button mat-button *ngIf=\"modelSimulasi.simulasiUangMuka\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"modelSimulasi.simulasiUangMuka=''\">\n                <i class=\"fa fa-times-circle\"></i>\n                </button>\n                <!-- <mat-hint align=\"end\">Nilai minimal Rp.1.000.000</mat-hint> -->\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\">\n                <i class=\"fa fa-calculator\" aria-hidden=\"true\"></i> \n                SIMULASIKAN\n            </button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_province_service__ = __webpack_require__("../../../../../src/app/services/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_kota_service__ = __webpack_require__("../../../../../src/app/services/kota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_simulasi_service__ = __webpack_require__("../../../../../src/app/services/simulasi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LandingComponent = /** @class */ (function () {
    function LandingComponent(router, route, data, snackBar, provinceService, kotaService, simulasiService) {
        this.router = router;
        this.route = route;
        this.data = data;
        this.snackBar = snackBar;
        this.provinceService = provinceService;
        this.kotaService = kotaService;
        this.simulasiService = simulasiService;
        this.objProductType = objProduct;
        this.objProvince = [];
        this.objKota = [];
        this.captionUangMuka = 'Uang Muka';
        this.modelSimulasi = modelSimulasi;
        this.formOrder = {
            "sumber_order": "05",
            "nama_nasabah": "",
            "hp_nasabah": "",
            "produk": "",
            "object": "",
            "object_brand": "",
            "object_type": "",
            "object_model": "",
            "object_price": 0,
            "object_year": "",
            "tenor": 0,
            "total_dp": 0,
            "angsuran": 0,
            "total_pinjaman": 0,
            "alamat_nasabah": "",
            "kelurahan_id": "",
            "kecamatan_id": "",
            "kota_id": "",
            "provinsi_id": "",
            "kode_pos": "",
            "no_ktp": "",
            "email_nasabah": "",
            "tanggal_lahir": "",
            "waktu_dihubungi": ""
        };
        this.paramVal = "05";
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (param) {
            console.log(param.so);
            if (param.so) {
                _this.paramVal = param.so;
            }
        });
        //init province
        if (!localStorage.getItem("provinsi")) {
            localStorage.setItem("provinsi", JSON.stringify({ "provinsi_id": "", "provinsi_name": "" }));
        }
        this.provinceService.getProvince().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.objProvince = res;
                //console.log(this.objProvince);
                if (this.objProvince.length > 0) {
                    if (localStorage.getItem("provinsi")) {
                        if (this.objProvince) {
                            this.modelSimulasi.simulasiProvince = JSON.parse(localStorage.getItem("provinsi"));
                            //console.log(this.prov);
                        }
                    }
                }
                return [2 /*return*/];
            });
        }); });
        if (!localStorage.getItem("product")) {
            localStorage.setItem("product", this.objProductType[0].product);
        }
        else {
            if (localStorage.getItem("product") == '01') {
                if (localStorage.getItem("uang_muka")) {
                    this.modelSimulasi.simulasiUangMuka = +localStorage.getItem("uang_muka");
                    this.captionUangMuka = 'Uang Muka';
                }
            }
            else if (localStorage.getItem("product") == '02') {
                if (localStorage.getItem("pinjaman")) {
                    this.modelSimulasi.simulasiUangMuka = +localStorage.getItem("pinjaman");
                    this.captionUangMuka = 'Pinjaman';
                }
            }
        }
        if (JSON.parse(localStorage.getItem("provinsi")).provinsi_id !== "") {
            this.ngOnSelectProvince(JSON.parse(localStorage.getItem("provinsi")));
        }
        if (localStorage.getItem("kota_id")) {
            this.modelSimulasi.simulasiKota = JSON.parse(localStorage.getItem("kota_id"));
        }
        if (localStorage.getItem("object")) {
        }
        if (localStorage.getItem("harga")) {
            this.modelSimulasi.simulasiHarga = +localStorage.getItem("harga");
        }
        if (JSON.parse(localStorage.getItem("provinsi")).provinsi_id == "") {
            modelSimulasi.simulasiHarga = 0;
            modelSimulasi.simulasiUangMuka = 0;
        }
    };
    LandingComponent.prototype.ngOnClickProduct = function (obj) {
        var _this = this;
        this.objProductType.forEach(function (element) {
            element.selected = false;
            if (element.product == obj.product && element.object == obj.object) {
                element.selected = true;
                _this.modelSimulasi.simulasiObject = obj;
                if (obj.product == '01') {
                    _this.captionUangMuka = 'Uang Muka';
                }
                else if (obj.product == '02') {
                    _this.captionUangMuka = 'Pinjaman';
                }
            }
        });
        localStorage.setItem("product", obj.product);
    };
    LandingComponent.prototype.ngOnSelectProvince = function (obj) {
        var _this = this;
        //console.log(obj);
        this.kotaService.getKota(obj.provinsi_id).subscribe(function (res) {
            _this.objKota = res;
            localStorage.setItem("provinsi", JSON.stringify(obj));
        });
    };
    LandingComponent.prototype.ngOnSelectKota = function (kota) {
        localStorage.setItem("kota_id", JSON.stringify(kota));
    };
    LandingComponent.prototype.ngOnClickSubmit = function () {
        var _this = this;
        //validation
        if (this.modelSimulasi.simulasiProvince.provinsi_id === "") {
            this.snackBar.open("Provinsi belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiKota.kabupaten_id === "") {
            this.snackBar.open("Kota belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiHarga == 0) {
            this.snackBar.open("Harga harus lebih dari 0", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiUangMuka == 0 && this.modelSimulasi.simulasiObject.product == '02') {
            this.snackBar.open("Uang Muka harus lebih dari 0", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiUangMuka == 0 && this.modelSimulasi.simulasiObject.product == '02') {
            this.snackBar.open("Pinjaman harus lebih dari 0", "", {
                duration: 3000,
            });
            return false;
        }
        if ((this.modelSimulasi.simulasiObject.object == '002' || this.modelSimulasi.simulasiObject.object == '004') && this.modelSimulasi.simulasiObject.product == '02') {
            this.formOrder.sumber_order = this.paramVal;
            this.formOrder.produk = this.modelSimulasi.simulasiObject.product;
            this.formOrder.object = this.modelSimulasi.simulasiObject.object;
            this.formOrder.object_price = this.modelSimulasi.simulasiHarga;
            this.formOrder.total_dp = 0;
            this.formOrder.provinsi_id = this.modelSimulasi.simulasiProvince.provinsi_id;
            this.formOrder.kota_id = this.modelSimulasi.simulasiKota.kabupaten_id;
            console.log(this.formOrder);
            var objMulti_1 = {
                "object": this.modelSimulasi.simulasiObject.object,
                "price": this.modelSimulasi.simulasiHarga,
                "kota_id": this.modelSimulasi.simulasiKota.kabupaten_id,
                "pinjaman": this.modelSimulasi.simulasiUangMuka
            };
            this.simulasiService.hitungAngsuranMulti(objMulti_1).subscribe(function (res) {
                console.log(res);
                if (res['status'] == false) {
                    _this.snackBar.open(res['message'], "", {
                        duration: 3000,
                    });
                    return false;
                }
                _this.data.setObjFormOrder(_this.formOrder);
                _this.data.setSimulasiMultiRes(res['data'], objMulti_1);
                localStorage.setItem('simulasi_card', JSON.stringify(res['data']));
                _this.router.navigate(['bundle/simulate']);
            });
        }
        else {
            this.formOrder.sumber_order = this.paramVal;
            this.formOrder.produk = this.modelSimulasi.simulasiObject.product;
            this.formOrder.object = this.modelSimulasi.simulasiObject.object;
            this.formOrder.object_price = this.modelSimulasi.simulasiHarga;
            this.formOrder.total_dp = this.modelSimulasi.simulasiUangMuka;
            this.formOrder.provinsi_id = this.modelSimulasi.simulasiProvince.provinsi_id;
            this.formOrder.kota_id = this.modelSimulasi.simulasiKota.kabupaten_id;
            var objReg_1 = {
                "object": this.modelSimulasi.simulasiObject.object,
                "price": this.modelSimulasi.simulasiHarga,
                "kota_id": this.modelSimulasi.simulasiKota.kabupaten_id,
                "uang_muka": this.modelSimulasi.simulasiUangMuka
            };
            this.simulasiService.hitungAngsuranReg(objReg_1).subscribe(function (res) {
                //console.log(res);
                if (res['status'] == false) {
                    _this.snackBar.open(res['message'], '', {
                        duration: 3000,
                    });
                    return false;
                }
                _this.data.setObjFormOrder(_this.formOrder);
                _this.data.setSimulasiRegRes(res['data'], objReg_1);
                localStorage.setItem('simulasi_card', JSON.stringify(res['data']));
                _this.router.navigate(['bundle/simulate']);
            });
        }
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__services_province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_5__services_kota_service__["a" /* KotaService */], __WEBPACK_IMPORTED_MODULE_6__services_simulasi_service__["a" /* SimulasiService */]])
    ], LandingComponent);
    return LandingComponent;
}());

var objProduct = [
    { "title": "Motor Baru", "icon": "fa fa-motorcycle", "selected": true, "product": "01", "object": "001" },
    { "title": "Motor Bekas", "icon": "fa fa-motorcycle", "selected": null, "product": "01", "object": "002" },
    { "title": "Mobil Baru", "icon": "fa fa-car", "selected": null, "product": "01", "object": "003" },
    { "title": "Mobil Bekas", "icon": "fa fa-car", "selected": null, "product": "01", "object": "004" },
    { "title": "Multiguna", "icon": "fa fa-motorcycle", "selected": null, "product": "02", "object": "002" },
    { "title": "Multiguna", "icon": "fa fa-car", "selected": null, "product": "02", "object": "004" },
];
var modelSimulasi = {
    "simulasiHarga": 0,
    "simulasiUangMuka": 0,
    "simulasiKota": { kabupaten_id: "", kabupaten_name: "", provinsi_id: "" },
    "simulasiProvince": this.objProvince == null ? { provinsi_id: "", provinsi_name: "" } : this.objProvince[0],
    "simulasiObject": this.objProductType == null ? { "title": "Motor Baru", "icon": "fa fa-motorcycle", "selected": true, "product": "01", "object": "001" } : this.objProduct[0]
};


/***/ }),

/***/ "../../../../../src/app/multiguna/multiguna.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-spinner {\r\n    width: 1px;\r\n    height: 1px;\r\n}\r\n\r\n.drawer-container {\r\n    width: 100% !important;\r\n    margin: 0 auto;\r\n    padding-bottom: 20px !important;\r\n    z-index: 10;\r\n    position: relative;\r\n}\r\n\r\n.square-apps {\r\n    width: 26% !important;\r\n    min-width: 80px;\r\n    font-size: 75%;\r\n    color: #fff;\r\n    float: left;\r\n    background: #003665;\r\n    margin: 5px;\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 5px 3px -3px #777;\r\n    box-shadow: 0 5px 3px -3px #777;\r\n    border-radius: 5px;\r\n    cursor: pointer !important;\r\n    z-index: 11;\r\n}\r\n\r\n.square-apps:hover {\r\n    background: #00549e;\r\n    -webkit-box-shadow: 1px 10px 6px -6px #777;\r\n    box-shadow: 1px 10px 6px -6px #777;\r\n}\r\n\r\n@media (max-width:1600px) {\r\n     ::ng-deep snack-bar-container.success-snackbar {\r\n        background-color: #fff;\r\n        color: red;\r\n    }\r\n    .bundle-card {\r\n        position: absolute;\r\n        top: 13%;\r\n        width: 90%;\r\n        margin-left: 5%;\r\n    }\r\n    .bundle-card div {\r\n        width: 46%;\r\n        float: left;\r\n        padding: 1% 2% 1% 2%;\r\n    }\r\n    .motto .m1 {\r\n        font-size: 400%;\r\n        font-family: 'Anton';\r\n        width: 100%;\r\n        line-height: 120%;\r\n        letter-spacing: 5px;\r\n        color: #fff;\r\n        text-shadow: 1px 0 8px #000;\r\n        float: none;\r\n    }\r\n    .motto .m2 {\r\n        font-size: 150%;\r\n        font-family: 'Roboto Condensed';\r\n        line-height: 80%;\r\n        letter-spacing: 3px;\r\n        color: #fff;\r\n        text-shadow: 2px 0 5px #000000;\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n    .form-face {\r\n        background: rgba(255, 255, 255, 0.8);\r\n        font-size: 17px !important;\r\n        -webkit-box-shadow: 0 10px 6px -6px #777;\r\n        box-shadow: 0 10px 6px -6px #777;\r\n        border: #ccc solid 1px;\r\n        position: relative;\r\n        width: calc(46% - 2px) !important;\r\n    }\r\n    .form-face mat-form-field {\r\n        padding: 0 5px 0 16px !important;\r\n        display: block;\r\n        z-index: 0 !important;\r\n    }\r\n    .form-face button {\r\n        margin-left: 2% !important;\r\n    }\r\n    .form-face .message {\r\n        /* margin-right: 5%;\r\n        margin-top:0;\r\n        font-size: 15px;\r\n        float:right !important; */\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width:900px) {\r\n     ::ng-deep snack-bar-container.success-snackbar {\r\n        background-color: #fff;\r\n        color: red;\r\n    }\r\n    .bundle-card {\r\n        position: absolute;\r\n        top: 12%;\r\n        max-width: 80%;\r\n        margin-left: 10%;\r\n    }\r\n    .bundle-card div {\r\n        width: 46%;\r\n        float: left;\r\n        padding: 1% 2% 1% 2%;\r\n    }\r\n    .motto {\r\n        width: 100%;\r\n    }\r\n    .motto .m1 {\r\n        font-size: 270%;\r\n        font-family: 'Anton';\r\n        width: 100%;\r\n        line-height: 100%;\r\n        letter-spacing: 5px;\r\n        color: #fff;\r\n        text-shadow: 1px 0 8px #000000;\r\n        float: none;\r\n    }\r\n    .motto .m2 {\r\n        font-size: 110%;\r\n        font-family: 'Roboto Condensed';\r\n        line-height: 70%;\r\n        letter-spacing: 3px;\r\n        color: #fff;\r\n        text-shadow: 2px 0 5px #000000;\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n    .form-face {\r\n        width: 100%;\r\n        height: 100%;\r\n        background: rgba(255, 255, 255, 0.8);\r\n        font-size: 18px !important;\r\n        padding-top: 5px;\r\n    }\r\n    .form-face mat-form-field {\r\n        display: block;\r\n    }\r\n    .form-face button {\r\n        width: 90% !important;\r\n        margin-left: 6% !important;\r\n    }\r\n    .form-face .message {\r\n        /* margin-right: 5%;\r\n        margin-top:0;\r\n        font-size: 15px;\r\n        float:right !important; */\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width:500px) {\r\n     ::ng-deep snack-bar-container.success-snackbar {\r\n        background-color: rgb(48, 48, 48);\r\n        color: #fff;\r\n    }\r\n    .bundle-card {\r\n        position: absolute;\r\n        top: 10%;\r\n        width: 96% !important;\r\n        max-width: 96% !important;\r\n        padding: 0 2% 0 2% !important;\r\n        margin-left: 0% !important;\r\n        margin-bottom: 10% !important;\r\n        z-index: 1;\r\n    }\r\n    .bundle-card div {\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n    .motto {\r\n        width: 96% !important;\r\n        padding: 2% 2% 2% 2% !important;\r\n        margin-bottom: 10px;\r\n    }\r\n    .motto .m1 {\r\n        font-size: 200%;\r\n        font-family: 'Anton';\r\n        width: 100%;\r\n        line-height: 110%;\r\n        letter-spacing: 5px;\r\n        color: #fff;\r\n        text-shadow: 1px 0 8px #000000;\r\n        float: none;\r\n    }\r\n    .motto .m2 {\r\n        font-size: 130%;\r\n        font-family: 'Roboto Condensed';\r\n        line-height: 50%;\r\n        letter-spacing: 3px;\r\n        color: #fff;\r\n        text-shadow: 2px 0 5px #000000;\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n    .form-face {\r\n        width: 96% !important;\r\n        padding: 2% 2% 2% 2% !important;\r\n        height: 100%;\r\n        background: rgba(255, 255, 255, 0.8);\r\n        font-size: 18px !important;\r\n        margin-bottom: 5% !important;\r\n    }\r\n    .form-face mat-form-field {\r\n        display: block;\r\n    }\r\n    .form-face button,\r\n    .message {\r\n        width: 90% !important;\r\n        margin-left: 5% !important;\r\n    }\r\n}\r\n\r\n.message {\r\n    color: red;\r\n    text-align: center;\r\n}\r\n\r\n.checked {\r\n    color: rgb(255, 217, 0);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/multiguna/multiguna.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bundle-card\">\n    <div class=\"motto\">\n        <div class=\"m1\">AJUKAN SEKARANG JUGA!</div>\n        <div class=\"m2\">It's time to make your muf!</div>\n    </div>\n    <div class=\"form-face\">\n        <div class=\"drawer-container\">\n            <div class=\"square-apps badge\" *ngFor=\"let objProduct of Objectproducttypes\" (click)=\"ngOnClickProduct(objProduct)\">\n                <input type=\"text\" style=\"display:none\" value=\"{{objProduct.product}}\">\n                <i class=\"{{objProduct.icon}}\" aria-hidden=\"true\"></i>&nbsp;\n                <i class=\"fa fa-check-circle checked\" aria-hidden=\"true\" *ngIf=\"objProduct.selected\"></i><br/> {{objProduct.title}}\n            </div>\n        </div>\n        <br/>\n        <form id=\"form-inp-simulasi\" class=\"example-form\" (ngSubmit)=\"ngOnClickSubmit()\" validation>\n            <mat-form-field>\n                <mat-progress-spinner *ngIf=\"!this.Objectprovinces\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n                <mat-select [disabled]=\"this.Objectprovinces? false : true\" placeholder=\"Provinsi\" required name=\"Provinsi\" [(ngModel)]=\"modelSimulasi.simulasiProvince\" (ngModelChange)=\"ngOnSelectProvince(modelSimulasi.simulasiProvince)\">\n                    <mat-option *ngFor=\"let obj of Objectprovinces\" [value]=\"obj\">\n                        {{ obj.provinsi_name }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-progress-spinner *ngIf=\"!this.Objectkotas\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n                <mat-select [disabled]=\"this.Objectkotas? false : true\" placeholder=\"Kota\" required name=\"Kota\" [(ngModel)]=\"modelSimulasi.simulasiKota\" (ngModelChange)=\"ngOnSelectKota(modelSimulasi.simulasiKota)\">\n                    <mat-option *ngFor=\"let obj of Objectkotas\" [value]=\"obj\">\n                        {{ obj.kabupaten_name }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field>\n                <input currencyMask matInput placeholder=\"Harga Kendaraan\" required name=\"Harga\" [options]=\"{ prefix: 'Rp ', thousands: ',', decimal: '.', align:'left', allowNegative:false, precision:0}\" [(ngModel)]=\"modelSimulasi.simulasiHarga\" />\n                <button mat-button *ngIf=\"modelSimulasi.simulasiHarga\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"modelSimulasi.simulasiHarga=''\">\n                <i class=\"fa fa-times-circle\"></i>\n                </button>\n                <!-- <mat-hint align=\"end\">Harga minimal Rp.1.000.000</mat-hint> -->\n            </mat-form-field>\n            <mat-form-field>\n                <input currencyMask matInput placeholder=\"{{captionUangMuka}}\" required name=\"Uang Muka\" [options]=\"{ prefix: 'Rp ', thousands: ',', decimal: '.', align:'left', allowNegative:false, precision:0}\" [(ngModel)]=\"modelSimulasi.simulasiUangMuka\" />\n                <button mat-button *ngIf=\"modelSimulasi.simulasiUangMuka\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"modelSimulasi.simulasiUangMuka=''\">\n                <i class=\"fa fa-times-circle\"></i>\n                </button>\n                <!-- <mat-hint align=\"end\">Nilai minimal Rp.1.000.000</mat-hint> -->\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\">\n                <i class=\"fa fa-calculator\" aria-hidden=\"true\"></i> \n                SIMULASIKAN\n            </button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/multiguna/multiguna.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultigunaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_province_service__ = __webpack_require__("../../../../../src/app/services/province.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_kota_service__ = __webpack_require__("../../../../../src/app/services/kota.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_simulasi_service__ = __webpack_require__("../../../../../src/app/services/simulasi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MultigunaComponent = /** @class */ (function () {
    function MultigunaComponent(router, route, data, snackBar, provinceService, kotaService, simulasiService) {
        this.router = router;
        this.route = route;
        this.data = data;
        this.snackBar = snackBar;
        this.provinceService = provinceService;
        this.kotaService = kotaService;
        this.simulasiService = simulasiService;
        this.Objectproducttypes = ProcuctTypes;
        this.Objectprovinces = [];
        this.Objectkotas = [];
        this.captionUangMuka = 'Pinjaman';
        this.formOrder = {
            "sumber_order": "",
            "nama_nasabah": "",
            "hp_nasabah": "",
            "produk": "",
            "object": "",
            "object_brand": "",
            "object_type": "",
            "object_model": "",
            "object_price": 0,
            "object_year": "",
            "tenor": 0,
            "total_dp": 0,
            "angsuran": 0,
            "total_pinjaman": 0,
            "alamat_nasabah": "",
            "kelurahan_id": "",
            "kecamatan_id": "",
            "kota_id": "",
            "provinsi_id": "",
            "kode_pos": "",
            "no_ktp": "",
            "email_nasabah": "",
            "tanggal_lahir": "",
            "waktu_dihubungi": ""
        };
        this.paramVal = '05';
    }
    MultigunaComponent.prototype.ngOnInit = function () {
        var _this = this;
        //init model
        this.route.queryParams.subscribe(function (param) {
            console.log(param.so);
            if (param.so) {
                _this.paramVal = param.so;
            }
        });
        this.provinceService.getProvince().subscribe(function (res) { return _this.Objectprovinces = res; });
        this.modelSimulasi = {
            "simulasiHarga": 0,
            "simulasiUangMuka": 0,
            "simulasiKota": null,
            "simulasiProvince": this.Objectprovinces == null ? null : this.Objectprovinces[0],
            "simulasiObject": this.Objectproducttypes == null ? null : this.Objectproducttypes[0]
        };
    };
    MultigunaComponent.prototype.ngOnClickProduct = function (obj) {
        var _this = this;
        this.Objectproducttypes.forEach(function (element) {
            element.selected = false;
            if (element.product == obj.product && element.object == obj.object) {
                element.selected = true;
                _this.modelSimulasi.simulasiObject = obj;
                if (obj.product == '01') {
                    _this.captionUangMuka = 'Uang Muka';
                }
                else if (obj.product == '02') {
                    _this.captionUangMuka = 'Pinjaman';
                }
            }
        });
    };
    MultigunaComponent.prototype.ngOnSelectProvince = function (obj) {
        var _this = this;
        this.kotaService.getKota(obj.provinsi_id).subscribe(function (res) { return _this.Objectkotas = res; });
    };
    MultigunaComponent.prototype.ngOnSelectKota = function (obj) {
    };
    MultigunaComponent.prototype.ngOnClickSubmit = function () {
        var _this = this;
        //validation
        if (this.modelSimulasi.simulasiProvince == null || this.modelSimulasi.simulasiProvince.provinsi_name == "") {
            this.snackBar.open("Provinsi belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiKota == null || this.modelSimulasi.simulasiKota.kabupaten_name == "") {
            this.snackBar.open("Kota belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiHarga == 0) {
            this.snackBar.open("Harga harus lebih dari 0", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiUangMuka == 0 && this.modelSimulasi.simulasiObject.product == '02') {
            this.snackBar.open("Uang Muka harus lebih dari 0", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.modelSimulasi.simulasiUangMuka == 0 && this.modelSimulasi.simulasiObject.product == '02') {
            this.snackBar.open("Pinjaman harus lebih dari 0", "", {
                duration: 3000,
            });
            return false;
        }
        if ((this.modelSimulasi.simulasiObject.object == '002' || this.modelSimulasi.simulasiObject.object == '004') && this.modelSimulasi.simulasiObject.product == '02') {
            this.formOrder.sumber_order = this.paramVal;
            this.formOrder.produk = this.modelSimulasi.simulasiObject.product;
            this.formOrder.object = this.modelSimulasi.simulasiObject.object;
            this.formOrder.object_price = this.modelSimulasi.simulasiHarga;
            this.formOrder.total_dp = 0;
            this.formOrder.provinsi_id = this.modelSimulasi.simulasiProvince.provinsi_id;
            this.formOrder.kota_id = this.modelSimulasi.simulasiKota.kabupaten_id;
            console.log(this.formOrder);
            var objMulti_1 = {
                "object": this.modelSimulasi.simulasiObject.object,
                "price": this.modelSimulasi.simulasiHarga,
                "kota_id": this.modelSimulasi.simulasiKota.kabupaten_id,
                "pinjaman": this.modelSimulasi.simulasiUangMuka
            };
            this.simulasiService.hitungAngsuranMulti(objMulti_1).subscribe(function (res) {
                console.log(res);
                if (res['status'] == false) {
                    _this.snackBar.open(res['message'], "", {
                        duration: 3000,
                    });
                    return false;
                }
                _this.data.setObjFormOrder(_this.formOrder);
                _this.data.setSimulasiMultiRes(res['data'], objMulti_1);
                _this.router.navigate(['bundle/simulate']);
            });
        }
        else {
            this.formOrder.sumber_order = this.paramVal;
            this.formOrder.produk = this.modelSimulasi.simulasiObject.product;
            this.formOrder.object = this.modelSimulasi.simulasiObject.object;
            this.formOrder.object_price = this.modelSimulasi.simulasiHarga;
            this.formOrder.total_dp = this.modelSimulasi.simulasiUangMuka;
            this.formOrder.provinsi_id = this.modelSimulasi.simulasiProvince.provinsi_id;
            this.formOrder.kota_id = this.modelSimulasi.simulasiKota.kabupaten_id;
            var objReg_1 = {
                "object": this.modelSimulasi.simulasiObject.object,
                "price": this.modelSimulasi.simulasiHarga,
                "kota_id": this.modelSimulasi.simulasiKota.kabupaten_id,
                "uang_muka": this.modelSimulasi.simulasiUangMuka
            };
            this.simulasiService.hitungAngsuranReg(objReg_1).subscribe(function (res) {
                //console.log(res);
                if (res['status'] == false) {
                    _this.snackBar.open(res['message'], "", {
                        duration: 3000,
                    });
                    return false;
                }
                _this.data.setObjFormOrder(_this.formOrder);
                _this.data.setSimulasiRegRes(res['data'], objReg_1);
                _this.router.navigate(['bundle/simulate']);
            });
        }
    };
    MultigunaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-multiguna',
            template: __webpack_require__("../../../../../src/app/multiguna/multiguna.component.html"),
            styles: [__webpack_require__("../../../../../src/app/multiguna/multiguna.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__services_province_service__["a" /* ProvinceService */], __WEBPACK_IMPORTED_MODULE_5__services_kota_service__["a" /* KotaService */], __WEBPACK_IMPORTED_MODULE_6__services_simulasi_service__["a" /* SimulasiService */]])
    ], MultigunaComponent);
    return MultigunaComponent;
}());

var ProcuctTypes = [
    { "title": "Multiguna Motor", "icon": "fa fa-motorcycle", "selected": true, "product": "02", "object": "002" },
    { "title": "Multiguna Mobil", "icon": "fa fa-car", "selected": null, "product": "02", "object": "004" },
];


/***/ }),

/***/ "../../../../../src/app/order/modal.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Pengajuan Berhasil Dikirim</h1>\r\n<div mat-dialog-content>\r\n    <p>No. Order : {{data.order_id}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"onOkClick()\">OK</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".order-container {\r\n    background: #fff;\r\n    width: 50%;\r\n    padding: 2% 5% 5% 5%;\r\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n    font-family: 'Roboto Condensed';\r\n}\r\n\r\n.form-pengajuan>* {\r\n    width: 100%;\r\n    display: block;\r\n    padding-top: 2%;\r\n}\r\n\r\napp-year-picker .mat-form-field {\r\n    width: 100% !important;\r\n}\r\n\r\n.summary-label {\r\n    color: #8a8a8a;\r\n    font-size: 16px;\r\n}\r\n\r\n.summary-value {\r\n    color: #003665;\r\n    font-size: 18px;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.order-title {\r\n    font-size: 24px;\r\n    border-bottom: 1px red solid;\r\n}\r\n\r\n@media (max-width:1600px) {\r\n    .order-container {\r\n        margin: 6% auto;\r\n    }\r\n}\r\n\r\n@media (max-width:900px) {\r\n    .order-container {\r\n        margin: 5% auto;\r\n    }\r\n}\r\n\r\n@media (max-width:500px) {\r\n    .order-container {\r\n        margin: 20% auto;\r\n        min-width: 300px;\r\n    }\r\n}\r\n\r\n.blocking {\r\n    position: fixed;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1;\r\n    background: rgba(255, 255, 255, 0.6);\r\n}\r\n\r\n.blocking span {\r\n    margin-left: 50%;\r\n    margin-top: 250px;\r\n    position: absolute;\r\n}\r\n\r\n.error-patern {\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blocking\" *ngIf=\"blocking\">\n    <span><mat-progress-spinner class=\"loading-spinner\" diameter=\"40\" mode=\"indeterminate\"></mat-progress-spinner></span>\n</div>\n<div class=\"order-container\">\n    <div class=\"order-title\">Ringkasan Pembayaran</div>\n    <br/>\n    <div class=\"summary\" *ngFor=\"let pilih of modelAngsuranReg\">\n        <div class=\"summary-label\">Harga</div>\n        <div class=\"summary-value\">{{pilih.harga | currency:'Rp.':'false':'2.0-4'}},-</div>\n        <div class=\"summary-label\">Tenor</div>\n        <div class=\"summary-value\">{{pilih.tenor}} Bulan</div>\n        <div class=\"summary-label\">Angsuran</div>\n        <div class=\"summary-value\">{{pilih.angsuran | currency:'Rp.':'false':'2.0-4'}},- /bulan</div>\n        <div class=\"summary-label\" *ngIf=\"pilih.uang_muka\">Uang Muka</div>\n        <div class=\"summary-value\" *ngIf=\"pilih.uang_muka\">{{pilih.uang_muka | currency:'Rp.':'false':'2.0-4'}},-</div>\n\n        <div class=\"summary-label\" *ngIf=\"pilih.pinjaman\">Total Pinjaman</div>\n        <div class=\"summary-value\" *ngIf=\"pilih.pinjaman\">{{pilih.pinjaman | currency:'Rp.':'false':'2.0-4'}},-</div>\n    </div>\n    <br/>\n    <form class=\"form-pengajuan\" (ngSubmit)=\"ngOnClickSubmit(noKtp, noHp, email, nama)\">\n        <div class=\"order-title\">Pengisian Data Kendaraan</div>\n        <br/>\n        <mat-form-field>\n            <mat-progress-spinner *ngIf=\"!this.objObjectBrand\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n            <mat-select placeholder=\"Merk Kendaraan\" name=\"Brand\" [(ngModel)]=\"obj_brand_code\" (ngModelChange)=\"ngOnSelectBrand(obj_brand_code)\" required>\n                <mat-option *ngFor=\"let obj of objObjectBrand\" [value]=\"obj.obj_brand_code\">\n                    {{ obj.obj_brand_desc }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-progress-spinner *ngIf=\"!this.objObjectModel\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n            <mat-select [disabled]=\"objObjectModel ? false : true\" placeholder=\"Model Kendaraan\" name=\"Model\" [(ngModel)]=\"formOrder.object_model\" required>\n                <mat-option *ngFor=\"let obj of objObjectModel\" [value]=\"obj.OBJ_MODEL\" (click)=\"ngOnSelectModel(obj)\">\n                    {{ obj.OBJ_MODEL_DESC }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <app-year-picker *ngIf=\"mode === 'YEAR'\" label=\"Tahun Kendaraan\" [max]=\"currentYear\" [min]=\"2000\" touchUi=\"true\">\n        </app-year-picker>\n        <div class=\"order-title\">Pengisian Data Diri</div>\n        <br/>\n        <mat-form-field>\n            <input matInput placeholder=\"Nama Lengkap\" [(ngModel)]=\"formOrder.nama_nasabah\" name=\"Nama Nasabah\" required maxlength=\"60\" [pattern]=\"namaPattern\" #nama=\"ngModel\">\n        </mat-form-field>\n        <span class=\"error-patern\" *ngIf=\"nama.errors?.pattern\">\n            *Illegal string of character\n        </span>\n        <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"No. Handphone\" [(ngModel)]=\"formOrder.hp_nasabah\" name=\"HP Nasabah\" required maxlength=\"20\" [pattern]=\"ktpPattern\" #noHp=\"ngModel\">\n        </mat-form-field>\n        <span class=\"error-patern\" *ngIf=\"noHp.errors?.pattern\">\n            *Illegal string of character\n        </span>\n        <mat-form-field>\n            <input type=\"email\" matInput placeholder=\"Email\" [(ngModel)]=\"formOrder.email_nasabah\" name=\"Email Nasabah\" required maxlength=\"40\" [pattern]=\"emailPattern\" #email=\"ngModel\">\n        </mat-form-field>\n        <span class=\"error-patern\" *ngIf=\"email.errors?.pattern\">\n            *Illegal string of character\n        </span>\n        <mat-form-field>\n            <!-- <input matInput placeholder=\"Tanggal Lahir\" [(ngModel)]=\"formOrder.tanggal_lahir\" name=\"Tanggal Lahir\"> -->\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Tanggal Lahir\" readonly (click)=\"_openDatepickerOnClick(picker)\" [(ngModel)]=\"tglLahir\" name=\"Tanggal Lahir\" [max]=\"currentDate\" required>\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker touchUi=\"true\"></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field>\n            <input type=\"text\" matInput placeholder=\"No. KTP\" numbers-only [(ngModel)]=\"formOrder.no_ktp\" name=\"No KTP\" required maxlength=\"17\" [pattern]=\"ktpPattern\" #noKtp=\"ngModel\">\n        </mat-form-field>\n        <span class=\"error-patern\" *ngIf=\"noKtp.errors?.pattern\">\n            *Illegal string of character\n        </span>\n        <mat-form-field>\n            <input matInput placeholder=\"Alamat\" [(ngModel)]=\"formOrder.alamat_nasabah\" name=\"Alamat Nasabah\" required maxlength=\"60\">\n        </mat-form-field>\n        <mat-form-field>\n            <mat-progress-spinner *ngIf=\"!this.objAddressCode\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n            <mat-select placeholder=\"Kecamatan\" name=\"Kecamatan\" [(ngModel)]=\"obj_kecamatan_code\" (ngModelChange)=\"ngOnSelectKec(obj_kecamatan_code)\" required>\n                <mat-option *ngFor=\"let obj of objAddressCode\" [value]=\"obj.kecamatan_id\">\n                    {{ obj.kecamatan_name }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n            <mat-progress-spinner *ngIf=\"!this.objAddressCodeKel\" class=\"loading-spinner\" diameter=\"20\" color=\"accent\" mode=\"indeterminate\"></mat-progress-spinner>\n            <mat-select [disabled]=\"objAddressCodeKel ? false : true\" placeholder=\"Kelurahan\" name=\"Kelurahan\" [(ngModel)]=\"formOrder.kelurahan_id\" required>\n                <mat-option *ngFor=\"let obj of objAddressCodeKel\" [value]=\"obj.kelurahan_id\" (click)=\"ngOnSelectKel(obj)\">\n                    {{ obj.kelurahan_name }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n            <!-- <input matInput placeholder=\"Waktu Survey\" [(ngModel)]=\"formOrder.waktu_dihubungi\" name=\"Waktu Survey\"> -->\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"Tanggal Survey\" readonly (click)=\"_openDatepickerOnClick(picker2)\" [(ngModel)]=\"tglSurvey\" name=\"Tanggal Survey\" [min]=\"currentDate2\" required>\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 touchUi=\"true\"></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput [owlDateTimeTrigger]=\"dt4\" [owlDateTime]=\"dt4\" placeholder=\"Waktu Survey\" [(ngModel)]=\"jamSurvey\" name=\"Jam Survey\">\n        </mat-form-field>\n        <owl-date-time [pickerType]=\"'timer'\" #dt4 [hour12Timer]=\"false\"></owl-date-time>\n        <div class=\"action-control\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n            <button mat-raised-button color=\"primary\" fxFlex=\"45%\"> <i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i> &nbsp; AJUKAN </button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MY_FORMATS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_objectbrand_service__ = __webpack_require__("../../../../../src/app/services/objectbrand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_objectmodel_service__ = __webpack_require__("../../../../../src/app/services/objectmodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_kecamatan_service__ = __webpack_require__("../../../../../src/app/services/kecamatan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_kelurahan_service__ = __webpack_require__("../../../../../src/app/services/kelurahan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_submit_order_service__ = __webpack_require__("../../../../../src/app/services/submit-order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__year_picker_component_year_picker_component__ = __webpack_require__("../../../../../src/app/year-picker-component/year-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
















var moment = __WEBPACK_IMPORTED_MODULE_11_moment__ || __WEBPACK_IMPORTED_MODULE_11_moment__;
var MY_FORMATS = {
    parse: {
        dateInput: 'DD-MMM-YYYY',
    },
    display: {
        dateInput: 'DD-MMM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var OrderComponent = /** @class */ (function () {
    function OrderComponent(data, router, snackBar, objectBrandService, objectModelService, objectAddress, objAddressKel, submitOrderService, platformHref, dialog) {
        this.data = data;
        this.router = router;
        this.snackBar = snackBar;
        this.objectBrandService = objectBrandService;
        this.objectModelService = objectModelService;
        this.objectAddress = objectAddress;
        this.objAddressKel = objAddressKel;
        this.submitOrderService = submitOrderService;
        this.platformHref = platformHref;
        this.dialog = dialog;
        this.blocking = false;
        this.mode = 'YEAR';
        this.currentDate = new Date();
        this.currentDate2 = new Date();
        this.currentYear = new Date().getFullYear();
        this.emailPattern = "^[a-zA-Z0-9@_.-]*$";
        this.ktpPattern = "^[0-9]*$";
        this.namaPattern = "^[a-zA-Z ]*$";
        this.formOrder = {
            "sumber_order": "",
            "nama_nasabah": "",
            "hp_nasabah": "",
            "produk": "",
            "object": "",
            "object_brand": "",
            "object_type": "",
            "object_model": "",
            "object_price": 0,
            "object_year": "",
            "tenor": 0,
            "total_dp": 0,
            "angsuran": 0,
            "total_pinjaman": 0,
            "alamat_nasabah": "",
            "kelurahan_id": "",
            "kecamatan_id": "",
            "kota_id": "",
            "provinsi_id": "",
            "kode_pos": "",
            "no_ktp": "",
            "email_nasabah": "",
            "tanggal_lahir": "",
            "waktu_dihubungi": ""
        };
        this.objObjectBrand = [];
        this.objObjectModel = [];
        this.objAddressCode = [];
        this.objAddressCodeKel = [];
        this.objGroup = '';
    }
    OrderComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.childYear.tahun);
    };
    OrderComponent.prototype.openDialog = function (order_id, sumber_order) {
        var _this = this;
        var dialogRef = this.dialog.open(Modal, {
            width: '250px',
            data: { order_id: order_id, sumber_order: sumber_order }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            localStorage.clear();
            window.location.href = _this.platformHref.location.origin + _this.platformHref.location.pathname + '#/bundle/landing?so=' + sumber_order;
        });
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentObjFormOrder.subscribe(function (obj) { return obj == null ? _this.router.navigate(['bundle']) : _this.objFormOrder = obj; });
        if (this.objFormOrder.object == '001' || this.objFormOrder.object == '002') {
            this.objGroup = '001';
            this.objectBrandService.getObjectBrand(this.objGroup).subscribe(function (res) {
                _this.objObjectBrand = res;
                _this.objObjectBrand.sort(function (a, b) {
                    return a.obj_brand_desc.localeCompare(b.obj_brand_desc);
                });
            });
            this.objectAddress.getKecamatan(this.objFormOrder.kota_id).subscribe(function (res) {
                _this.objAddressCode = res;
                var i = 0;
                var newKec = [{
                        "provinsi_id": "",
                        "provinsi_name": "",
                        "kab_kot_id": "",
                        "kab_kot_name": "",
                        "kecamatan_id": "",
                        "kecamatan_name": ""
                    }];
                _this.objAddressCode.forEach(function (element) {
                    if (i == 0) {
                        newKec.pop();
                        newKec.push(element);
                    }
                    if (newKec.filter(function (kec) { return kec.kecamatan_id == element.kecamatan_id; }).length == 0) {
                        newKec.push(element);
                    }
                    i++;
                });
                newKec.sort(function (a, b) {
                    return a.kecamatan_name.localeCompare(b.kecamatan_name);
                });
                _this.objAddressCode = newKec;
            });
        }
        else if (this.objFormOrder.object == '003' || this.objFormOrder.object == '004') {
            this.objGroup = '002';
            this.objectBrandService.getObjectBrand(this.objGroup).subscribe(function (res) {
                _this.objObjectBrand = res;
                _this.objObjectBrand.sort(function (a, b) {
                    return a.obj_brand_desc.localeCompare(b.obj_brand_desc);
                });
            });
            this.objectAddress.getKecamatan(this.objFormOrder.kota_id).subscribe(function (res) {
                _this.objAddressCode = res;
                var i = 0;
                var newKec = [{
                        "provinsi_id": "",
                        "provinsi_name": "",
                        "kab_kot_id": "",
                        "kab_kot_name": "",
                        "kecamatan_id": "",
                        "kecamatan_name": ""
                    }];
                _this.objAddressCode.forEach(function (element) {
                    if (i == 0) {
                        newKec.pop();
                        newKec.push(element);
                    }
                    if (newKec.filter(function (kec) { return kec.kecamatan_id == element.kecamatan_id; }).length == 0) {
                        newKec.push(element);
                    }
                    i++;
                });
                console.log(newKec);
                newKec.sort(function (a, b) {
                    return a.kecamatan_name.localeCompare(b.kecamatan_name);
                });
                _this.objAddressCode = newKec;
            });
        }
        else {
            this.snackBar.open("Object Group tidak valid", "", {
                duration: 3000,
            });
            return false;
        }
        this.data.currentSimulasiRegRes.subscribe(function (obj) { return obj == null ? _this.router.navigate(['bundle']) : _this.modelAngsuranReg = obj; });
    };
    OrderComponent.prototype.ngOnSelectBrand = function (objBrand) {
        var _this = this;
        this.formOrder.object_brand = objBrand;
        this.objectModelService.getObjectmodel(this.objGroup, objBrand).subscribe(function (res) {
            _this.objObjectModel = res;
            _this.objObjectModel.sort(function (a, b) {
                return a.OBJ_MODEL_DESC.localeCompare(b.OBJ_MODEL_DESC);
            });
        });
    };
    OrderComponent.prototype.ngOnSelectModel = function (obj) {
        console.log(obj);
        this.formOrder.object_model = obj.OBJ_MODEL;
        this.formOrder.object_type = obj.OBJ_TYPE_CODE;
    };
    OrderComponent.prototype.ngOnSelectKec = function (objAddressKec) {
        var _this = this;
        this.formOrder.kecamatan_id = objAddressKec;
        this.objAddressKel.getKelurahan(objAddressKec).subscribe(function (res) {
            _this.objAddressCodeKel = res;
            _this.objAddressCodeKel.sort(function (a, b) {
                return a.kelurahan_name.localeCompare(b.kelurahan_name);
            });
        });
    };
    OrderComponent.prototype.ngOnSelectKel = function (obj) {
        this.formOrder.kelurahan_id = obj.kelurahan_id;
        this.formOrder.kode_pos = obj.zip_code;
    };
    OrderComponent.prototype.ngOnClickSubmit = function (noKtp, noHp, email, nama) {
        //this.objFormOrder.sumber_order = this.formOrder.sumber_order;
        //console.log(this.objFormOrder);
        var _this = this;
        if (this.formOrder.object_brand == null || this.formOrder.object_brand == "") {
            this.snackBar.open("Merk Kendaraan belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.object_model == null || this.formOrder.object_model == "") {
            this.snackBar.open("Model Kendaraan belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.childYear.tahun == null || this.childYear.tahun == "") {
            this.snackBar.open("Tahun Kendaraan belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.nama_nasabah == null || this.formOrder.nama_nasabah == "") {
            this.snackBar.open("Nama Lengkap belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (nama.errors) {
            this.snackBar.open("Nama tidak sesuai", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.hp_nasabah == null || this.formOrder.hp_nasabah == "") {
            this.snackBar.open("No. Handphone belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (noHp.errors) {
            this.snackBar.open("No. Handphone tidak sesuai", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.email_nasabah == null || this.formOrder.email_nasabah == "") {
            this.snackBar.open("Email belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.email_nasabah.includes(" ")) {
            this.snackBar.open("Email tidak boleh mengandung spasi", "", {
                duration: 3000,
            });
            return false;
        }
        if (email.errors || !this.formOrder.email_nasabah.includes("@") || !this.formOrder.email_nasabah.includes(".")) {
            this.snackBar.open("Email tidak sesuai", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.tglLahir == null) {
            this.snackBar.open("Tanggal Lahir belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.no_ktp == null || this.formOrder.no_ktp == "") {
            this.snackBar.open("No. KTP belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (noKtp.errors) {
            this.snackBar.open("No. KTP tidak sesuai", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.alamat_nasabah == null || this.formOrder.alamat_nasabah == "") {
            this.snackBar.open("Alamat belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.kecamatan_id == null || this.formOrder.kecamatan_id == "") {
            this.snackBar.open("Kecamatan belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.kelurahan_id == null || this.formOrder.kelurahan_id == "") {
            this.snackBar.open("Kelurahan belum dipilih", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.formOrder.nama_nasabah == null || this.formOrder.nama_nasabah == "") {
            this.snackBar.open("Nama Lengkap belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        if (this.tglSurvey == null) {
            this.snackBar.open("Tanggal Survey belum diisi", "", {
                duration: 3000,
            });
            return false;
        }
        this.blocking = true;
        this.objFormOrder.nama_nasabah = this.formOrder.nama_nasabah.toUpperCase();
        this.objFormOrder.object_year = this.childYear.tahun.get("YEAR").toString();
        this.objFormOrder.alamat_nasabah = this.formOrder.alamat_nasabah.toUpperCase();
        this.objFormOrder.hp_nasabah = this.formOrder.hp_nasabah;
        this.objFormOrder.email_nasabah = this.formOrder.email_nasabah.toUpperCase();
        this.objFormOrder.tanggal_lahir = this.tglLahir.format("DD-MMM-YYYY").toUpperCase();
        this.objFormOrder.no_ktp = this.formOrder.no_ktp;
        if (this.jamSurvey) {
            this.objFormOrder.waktu_dihubungi = this.tglSurvey.format("DD-MMM-YYYY").toUpperCase() + " " + this.jamSurvey.getHours() + ":" + this.jamSurvey.getMinutes();
        }
        else {
            this.objFormOrder.waktu_dihubungi = this.tglSurvey.format("DD-MMM-YYYY").toUpperCase();
        }
        this.objFormOrder.object_brand = this.formOrder.object_brand;
        this.objFormOrder.object_model = this.formOrder.object_model;
        this.objFormOrder.object_type = this.formOrder.object_type;
        this.objFormOrder.kecamatan_id = this.formOrder.kecamatan_id;
        this.objFormOrder.kelurahan_id = this.formOrder.kelurahan_id;
        this.objFormOrder.kode_pos = this.formOrder.kode_pos;
        this.data.setObjFormOrder(this.objFormOrder);
        console.log(this.objFormOrder);
        //return;
        this.submitOrderService.submitOrder(this.objFormOrder).subscribe(function (res) {
            console.log(res);
            if (res['status'] == true) {
                _this.openDialog(res['data']['orderId'][0], _this.objFormOrder.sumber_order);
                /* this.snackBar.open("Pengajuan Berhasil Dikirim", "", {
                  duration: 3000,
                });
                //return true;
                //this.router.navigate(['bundle/landing?so='+this.objFormOrder.sumber_order]);
                localStorage.clear();
                setTimeout(()=>{
                window.location.href = (this.platformHref as any).location.origin+(this.platformHref as any).location.pathname+'#/bundle/landing?so='+this.objFormOrder.sumber_order}, 3100); */
            }
            else {
                _this.snackBar.open(res['message'], "", {
                    duration: 3000,
                });
                _this.blocking = false;
            }
        });
    };
    OrderComponent.prototype._openDatepickerOnClick = function (datepicker) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__year_picker_component_year_picker_component__["a" /* YearPickerComponent */]),
        __metadata("design:type", Object)
    ], OrderComponent.prototype, "childYear", void 0);
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order',
            template: __webpack_require__("../../../../../src/app/order/order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order/order.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_12__angular_material_moment_adapter__["a" /* MomentDateAdapter */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: MY_FORMATS }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__services_objectbrand_service__["a" /* ObjectbrandService */], __WEBPACK_IMPORTED_MODULE_6__services_objectmodel_service__["a" /* ObjectmodelService */], __WEBPACK_IMPORTED_MODULE_7__services_kecamatan_service__["a" /* KecamatanService */], __WEBPACK_IMPORTED_MODULE_8__services_kelurahan_service__["a" /* KelurahanService */], __WEBPACK_IMPORTED_MODULE_9__services_submit_order_service__["a" /* SubmitOrderService */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["PlatformLocation"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDialog */]])
    ], OrderComponent);
    return OrderComponent;
}());

var Modal = /** @class */ (function () {
    function Modal(dialogRef, data, router, platformHref) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
        this.platformHref = platformHref;
    }
    Modal.prototype.onOkClick = function () {
        this.dialogRef.close();
        localStorage.clear();
        window.location.href = this.platformHref.location.origin + this.platformHref.location.pathname + '#/bundle/landing?so=' + this.data.sumber_order;
    };
    Modal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal',
            template: __webpack_require__("../../../../../src/app/order/modal.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["PlatformLocation"]])
    ], Modal);
    return Modal;
}());



/***/ }),

/***/ "../../../../../src/app/province-code.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvinceCodePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProvinceCodePipe = /** @class */ (function () {
    function ProvinceCodePipe() {
    }
    ProvinceCodePipe.prototype.transform = function (allKota, provinsi_id) {
        return allKota.filter(function (kota) { return kota.provinsi_id == provinsi_id; });
    };
    ProvinceCodePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'provinceCode'
        })
    ], ProvinceCodePipe);
    return ProvinceCodePipe;
}());



/***/ }),

/***/ "../../../../../src/app/safeurl.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeurlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeurlPipe = /** @class */ (function () {
    function SafeurlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeurlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeurlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safeurl'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeurlPipe);
    return SafeurlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.configUrl = 'assets/config.json';
    }
    ConfigService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.simulasiSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentSimulasi = this.simulasiSource.asObservable();
        this.angsuranSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentAngsuran = this.angsuranSource.asObservable();
        this.simulasiRegSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentSimulasiReg = this.simulasiRegSource.asObservable();
        this.simulasiRegResSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentSimulasiRegRes = this.simulasiRegResSource.asObservable();
        this.simulasiMultiSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentSimulasiMulti = this.simulasiMultiSource.asObservable();
        this.simulasiMultiResSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentSimulasiMultiRes = this.simulasiMultiResSource.asObservable();
        this.objFormOrder = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentObjFormOrder = this.objFormOrder.asObservable();
        this.objAddressCode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentObjAddressCode = this.objAddressCode.asObservable();
        this.objAddressCodeKel = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.currentObjAddressCodeKel = this.objAddressCodeKel.asObservable();
    }
    DataService.prototype.setSimulasi = function (simulasi) {
        this.simulasiSource.next(simulasi);
    };
    DataService.prototype.setAngsuran = function (angsuran) {
        this.angsuranSource.next(angsuran);
    };
    DataService.prototype.setSimulasiReg = function (simulasiReg) {
        this.simulasiRegSource.next(simulasiReg);
    };
    DataService.prototype.setSimulasiRegRes = function (simulasiRegRes, objReg) {
        this.simulasiRegResSource.next(simulasiRegRes);
        localStorage.setItem('object', objReg.object);
        localStorage.setItem('harga', objReg.price.toString());
        //localStorage.setItem('kota_id', objReg.kota_id);
        localStorage.setItem('uang_muka', objReg.uang_muka.toString());
    };
    DataService.prototype.setSimulasiMulti = function (simulasiMulti) {
        this.simulasiMultiSource.next(simulasiMulti);
    };
    DataService.prototype.setSimulasiMultiRes = function (simulasiMultiRes, objMulti) {
        this.simulasiMultiResSource.next(simulasiMultiRes);
        localStorage.setItem('object', objMulti.object);
        localStorage.setItem('harga', objMulti.price.toString());
        //localStorage.setItem('kota_id', objMulti.kota_id);
        localStorage.setItem('pinjaman', objMulti.pinjaman.toString());
    };
    DataService.prototype.setObjFormOrder = function (objFormOrder) {
        this.objFormOrder.next(objFormOrder);
    };
    DataService.prototype.setObjAddressCode = function (objAddress) {
        this.objAddressCode.next(objAddress);
    };
    DataService.prototype.setObjAddressCodeKel = function (objAddress) {
        this.objAddressCodeKel.next(objAddress);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.botUrl = "http://mufondev.muf.co.id/mufbot";
        this.checkProtocol();
    }
    GlobalService.prototype.checkProtocol = function () {
        if (location.protocol != 'https:') {
            this.baseUrl = "http://mufondev.muf.co.id/web_ordering/api";
        }
        else {
            this.baseUrl = "https://mufondev.muf.co.id/web_ordering/api";
        }
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "../../../../../src/app/services/kecamatan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KecamatanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KecamatanService = /** @class */ (function () {
    function KecamatanService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrl = this.configUrl.baseUrl + '/list_kecamatan';
    }
    KecamatanService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    KecamatanService.prototype.getKecamatan = function (kotaId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.apiUrl, { kota_id: kotaId }).map(function (res) {
            console.log(res);
            return res['result']['data'];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    KecamatanService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], KecamatanService);
    return KecamatanService;
}());



/***/ }),

/***/ "../../../../../src/app/services/kelurahan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KelurahanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KelurahanService = /** @class */ (function () {
    function KelurahanService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrl = this.configUrl.baseUrl + '/list_kelurahan';
    }
    KelurahanService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    KelurahanService.prototype.getKelurahan = function (kecamatanId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        console.log(kecamatanId);
        return this.http.post(this.apiUrl, { kecamatan_id: kecamatanId }).map(function (res) {
            console.log(res);
            return res['result']['data'];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    KelurahanService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], KelurahanService);
    return KelurahanService;
}());



/***/ }),

/***/ "../../../../../src/app/services/kota.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KotaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KotaService = /** @class */ (function () {
    function KotaService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrl = this.configUrl.baseUrl + '/list_kota';
    }
    KotaService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    KotaService.prototype.getKota = function (provinsi_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.apiUrl, { provinsi_id: provinsi_id }).map(function (res) {
            return res["result"]["data"];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    KotaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], KotaService);
    return KotaService;
}());



/***/ }),

/***/ "../../../../../src/app/services/objectbrand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectbrandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ObjectbrandService = /** @class */ (function () {
    function ObjectbrandService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrl = this.configUrl.baseUrl + '/list_merk';
    }
    ObjectbrandService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    ObjectbrandService.prototype.getObjectBrand = function (objGroupCode) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.apiUrl, { object_group: objGroupCode }).map(function (res) {
            console.log(res);
            return res['result']['data'];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    ObjectbrandService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], ObjectbrandService);
    return ObjectbrandService;
}());



/***/ }),

/***/ "../../../../../src/app/services/objectgroup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectgroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObjectgroupService = /** @class */ (function () {
    function ObjectgroupService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = 'http://mufondev.muf.co.id/mufon_new/muf_on_new/api/c_search_object_group';
    }
    ObjectgroupService.prototype.getObjectgroup = function () {
        return this.http
            .get(this.apiUrl)
            .map(function (res) {
            return res;
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    ObjectgroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */]])
    ], ObjectgroupService);
    return ObjectgroupService;
}());



/***/ }),

/***/ "../../../../../src/app/services/objectmodel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectmodelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ObjectmodelService = /** @class */ (function () {
    function ObjectmodelService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrl = this.configUrl.baseUrl + '/list_model';
    }
    ObjectmodelService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    ObjectmodelService.prototype.getObjectmodel = function (objGroup, objBrand) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        console.log(objGroup);
        return this.http.post(this.apiUrl, { object_group: objGroup, object_brand: objBrand }).map(function (res) {
            console.log(res);
            return res['result']['data'];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    ObjectmodelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], ObjectmodelService);
    return ObjectmodelService;
}());



/***/ }),

/***/ "../../../../../src/app/services/province.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvinceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProvinceService = /** @class */ (function () {
    function ProvinceService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrl = this.configUrl.baseUrl + '/list_provinsi';
    }
    ProvinceService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    ProvinceService.prototype.getProvince = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.apiUrl).map(function (res) {
            return res["result"]["data"];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    ProvinceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], ProvinceService);
    return ProvinceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/simulasi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulasiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SimulasiService = /** @class */ (function () {
    function SimulasiService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrlReg = this.configUrl.baseUrl + '/hitung_angsuran';
        this.apiUrlMulti = this.configUrl.baseUrl + '/hitung_angsuran_multiguna';
    }
    SimulasiService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    SimulasiService.prototype.hitungAngsuranReg = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.apiUrlReg, obj).map(function (res) {
            return res["result"];
        }, function (err) {
            console.log(err.error.result);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    SimulasiService.prototype.hitungAngsuranMulti = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(this.apiUrlMulti, obj).map(function (res) {
            return res["result"];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    SimulasiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], SimulasiService);
    return SimulasiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/submit-order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitOrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__("../../../../../src/app/services/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_global_service__ = __webpack_require__("../../../../../src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmitOrderService = /** @class */ (function () {
    function SubmitOrderService(http, configService, configUrl) {
        this.http = http;
        this.configService = configService;
        this.configUrl = configUrl;
        this.apiUrl = this.configUrl.baseUrl + '/kirim_pengajuan';
    }
    SubmitOrderService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    SubmitOrderService.prototype.submitOrder = function (formOrder) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        this.createAuthorizationHeader(headers);
        //console.log(formOrder);
        return this.http.post(this.apiUrl, formOrder).map(function (res) {
            console.log(res);
            return res['result'];
        }, function (err) {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
    };
    SubmitOrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__services_global_service__["a" /* GlobalService */]])
    ], SubmitOrderService);
    return SubmitOrderService;
}());



/***/ }),

/***/ "../../../../../src/app/simulate/simulate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".simulate-container{\r\n  position: absolute;\r\n  top: 10%;\r\n  left: 8%;\r\n  right: 8%;\r\n  margin: auto;\r\n  margin-bottom: 5%;\r\n  z-index: 2 !important;\r\n}\r\n\r\n\r\n\r\n.opsi-card {\r\n  /* min-width: 100px;\r\n  max-width: 135px; */\r\n  width: 38.5%;\r\n  max-width: 160px;\r\n  float: left;\r\n  margin: 1%;\r\n}\r\n\r\n\r\n\r\n.opsi-card:hover{\r\n  -webkit-box-shadow: 0px 0px 3px 3px #ff2600;\r\n    box-shadow: 0px 0px 3px 3px #ff2600;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.opsi-card mat-card-title{\r\n  font-size: 170%;\r\n  font-weight: bold;\r\n  border-bottom: 1px solid #ff2600;\r\n  color:#003665;\r\n  font-family: 'Roboto Condensed';\r\n}\r\n\r\n\r\n\r\n.card-content-label{\r\n  color:#8a8a8a;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n\r\n.card-content-value{\r\n  color:#003665;\r\n  font-family:Arial, Helvetica, sans-serif;\r\n  font-size: 115%;\r\n  padding-bottom: 8px;\r\n  padding-top: 5px;\r\n}\r\n\r\n\r\n\r\n.mat-card-header{\r\n  display: block !important;\r\n}\r\n\r\n\r\n\r\n@media (max-width:500px) {\r\n  .simulate-container{\r\n      position: absolute;\r\n      top: 10%;\r\n      left: 1%;\r\n      right: 1%;\r\n      margin: auto;\r\n      margin-bottom: 15%;\r\n  }\r\n  /* .opsi-card {\r\n    width: 38%;\r\n    max-width: 150px;\r\n    float: left;\r\n    margin: 1%;\r\n  } */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simulate/simulate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"simulate-container\">\n    <mat-card class=\"opsi-card\" *ngFor=\"let objOpsi of opsi\" (click)=\"onSelectOpsi(objOpsi)\">\n        <mat-card-header>\n            <mat-card-title>{{objOpsi.title}}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <div class=\"card-content-label\">Angsuran</div>\n            <div class=\"card-content-value\">{{objOpsi.angsuran | currency:'Rp.':'false':'2.0-4'}},-\n                <div>/bulan</div>\n            </div>\n            <div class=\"card-content-label\">Jangka Waktu</div>\n            <div class=\"card-content-value\">{{objOpsi.tenor}} Bulan</div>\n            <div class=\"card-content-label\" *ngIf=\"objOpsi.uang_muka\">Uang Muka</div>\n            <div class=\"card-content-value\" *ngIf=\"objOpsi.uang_muka\">{{objOpsi.uang_muka | currency:'Rp.':'false':'2.0-4'}}</div>\n\n            <div class=\"card-content-label\" *ngIf=\"objOpsi.pinjaman\">Total Pinjaman</div>\n            <div class=\"card-content-value\" *ngIf=\"objOpsi.pinjaman\">{{objOpsi.pinjaman | currency:'Rp.':'false':'2.0-4'}}</div>\n        </mat-card-content>\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/simulate/simulate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimulateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_simulasi_service__ = __webpack_require__("../../../../../src/app/services/simulasi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SimulateComponent = /** @class */ (function () {
    function SimulateComponent(router, data, simulasiService) {
        this.router = router;
        this.data = data;
        this.simulasiService = simulasiService;
        this.opsi = [{ "title": "", "harga": 0, "tenor": 0, "angsuran": 0, "uang_muka": 0, "pinjaman": 0 }];
        this.opsiMulti = [{ "title": "", "harga": 0, "tenor": 0, "angsuran": 0, "pinjaman": 0 }];
    }
    SimulateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentObjFormOrder.subscribe(function (obj) { return obj == null ? _this.router.navigate(['bundle']) : _this.formOrder = obj; });
        //console.log(this.formOrder);
        if (this.formOrder.produk == '01') {
            if (localStorage.getItem('simulasi_card')) {
                this.objSimulasiReg = JSON.parse(localStorage.getItem('simulasi_card'));
                this.opsi.pop();
                this.objSimulasiReg.forEach(function (element) {
                    _this.opsi.push({
                        "title": element.title,
                        "harga": element.harga,
                        "tenor": element.tenor,
                        "angsuran": element.angsuran,
                        "uang_muka": element.uang_muka,
                        "pinjaman": 0
                    });
                });
            }
            else {
                this.data.currentSimulasiRegRes.subscribe(function (obj) { return obj == null ? _this.router.navigate(['bundle']) : _this.objSimulasiReg = obj; });
                //console.log(this.objSimulasiReg);
                this.opsi.pop();
                this.objSimulasiReg.forEach(function (element) {
                    _this.opsi.push({
                        "title": element.title,
                        "harga": element.harga,
                        "tenor": element.tenor,
                        "angsuran": element.angsuran,
                        "uang_muka": element.uang_muka,
                        "pinjaman": 0
                    });
                });
            }
        }
        else if (this.formOrder.produk == '02') {
            this.data.currentSimulasiMultiRes.subscribe(function (obj) { return obj == null ? _this.router.navigate(['bundle']) : _this.objSimulasiMulti = obj; });
            console.log(this.objSimulasiMulti);
            this.opsi.pop();
            this.objSimulasiMulti.forEach(function (element) {
                _this.opsi.push({
                    "title": element.title,
                    "harga": element.harga,
                    "tenor": element.tenor,
                    "angsuran": element.angsuran,
                    "uang_muka": 0,
                    "pinjaman": element.pinjaman
                });
            });
        }
    };
    SimulateComponent.prototype.onSelectOpsi = function (obj) {
        var pilih = [{
                "title": obj.title,
                "harga": obj.harga,
                "tenor": obj.tenor,
                "angsuran": obj.angsuran,
                "uang_muka": obj.uang_muka,
                "pinjaman": obj.pinjaman
            }];
        var objSim = {
            "object": localStorage.getItem("object"),
            "price": obj.harga,
            "kota_id": localStorage.getItem("kota_id"),
            "uang_muka": obj.uang_muka
        };
        this.formOrder.tenor = obj.tenor;
        this.formOrder.angsuran = obj.angsuran;
        this.formOrder.total_pinjaman = obj.pinjaman;
        this.data.setObjFormOrder(this.formOrder);
        this.data.setSimulasiRegRes(pilih, objSim);
        this.router.navigate(['bundle/order']);
    };
    SimulateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simulate',
            template: __webpack_require__("../../../../../src/app/simulate/simulate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/simulate/simulate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__services_simulasi_service__["a" /* SimulasiService */]])
    ], SimulateComponent);
    return SimulateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/year-picker-component/year-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field style=\"width: 100% !important;\">\r\n    <mat-label>{{label}}</mat-label>\r\n    <input matInput [matDatepicker]=\"datepicker\" [max]=\"_max\" [min]=\"_min\" [formControl]=\"_inputCtrl\" (click)=\"_openDatepickerOnClick(datepicker)\" (focus)=\"_openDatepickerOnFocus(datepicker)\" [(ngModel)]=\"tahun\" readonly>\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n</mat-form-field>\r\n<mat-datepicker #datepicker [touchUi]=\"touchUi\" startView=\"multi-year\" (yearSelected)=\"_yearSelectedHandler($event,datepicker)\" panelClass=\"year-picker\">\r\n</mat-datepicker>"

/***/ }),

/***/ "../../../../../src/app/year-picker-component/year-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export YEAR_MODE_FORMATS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YearPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YEAR_MODE_FORMATS = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var YearPickerComponent = /** @class */ (function () {
    function YearPickerComponent() {
        /** Component label */
        this.label = '';
        this.touchUi = false;
        this._inputCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        // Function to call when the date changes.
        this.onChange = function (year) { };
        // Function to call when the input is touched (when a star is clicked).
        this.onTouched = function () { };
    }
    YearPickerComponent_1 = YearPickerComponent;
    Object.defineProperty(YearPickerComponent.prototype, "max", {
        get: function () {
            return this._max ? this._max.year() : undefined;
        },
        set: function (max) {
            if (max) {
                var momentDate = typeof max === 'number' ? __WEBPACK_IMPORTED_MODULE_4_moment__([max, 0, 1]) : __WEBPACK_IMPORTED_MODULE_4_moment__(max);
                this._max = momentDate.isValid() ? momentDate : undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPickerComponent.prototype, "min", {
        get: function () {
            return this._min ? this._min.year() : undefined;
        },
        set: function (min) {
            if (min) {
                var momentDate = typeof min === 'number' ? __WEBPACK_IMPORTED_MODULE_4_moment__([min, 0, 1]) : __WEBPACK_IMPORTED_MODULE_4_moment__(min);
                this._min = momentDate.isValid() ? momentDate : undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    YearPickerComponent.prototype.writeValue = function (date) {
        if (date && this._isYearEnabled(date.getFullYear())) {
            var momentDate = __WEBPACK_IMPORTED_MODULE_4_moment__(date);
            if (momentDate.isValid()) {
                this._inputCtrl.setValue(__WEBPACK_IMPORTED_MODULE_4_moment__(date), { emitEvent: false });
            }
        }
    };
    YearPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    YearPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    // Allows Angular to disable the input.
    YearPickerComponent.prototype.setDisabledState = function (isDisabled) {
        isDisabled ? this._picker.disabled = true : this._picker.disabled = false;
        isDisabled ? this._inputCtrl.disable() : this._inputCtrl.enable();
    };
    YearPickerComponent.prototype._yearSelectedHandler = function (chosenDate, datepicker) {
        // as I'm using the focus event to open the calendar, this is necessary
        // so the calendar isn't opened again after a selection.
        datepicker.disabled = true;
        if (!this._isYearEnabled(chosenDate.year())) {
            datepicker.close();
            // wait for some time before enabling the calendar again
            setTimeout(function () { return datepicker.disabled = false; }, 600);
            return;
        }
        this._inputCtrl.setValue(chosenDate, { emitEvent: false });
        this.onChange(chosenDate.toDate());
        this.onTouched();
        datepicker.close();
        // wait for some time before enabling the calendar again
        setTimeout(function () { return datepicker.disabled = false; }, 600);
    };
    YearPickerComponent.prototype._openDatepickerOnClick = function (datepicker) {
        if (!datepicker.opened) {
            datepicker.open();
        }
    };
    YearPickerComponent.prototype._openDatepickerOnFocus = function (datepicker) {
        setTimeout(function () {
            if (!datepicker.opened) {
                datepicker.open();
            }
        });
    };
    /** Whether the given year is enabled. */
    YearPickerComponent.prototype._isYearEnabled = function (year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this._max && year > this._max.year()) ||
            (this._min && year < this._min.year())) {
            return false;
        }
        return true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], YearPickerComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], YearPickerComponent.prototype, "max", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], YearPickerComponent.prototype, "min", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], YearPickerComponent.prototype, "touchUi", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDatepicker */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatDatepicker */])
    ], YearPickerComponent.prototype, "_picker", void 0);
    YearPickerComponent = YearPickerComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-year-picker',
            template: __webpack_require__("../../../../../src/app/year-picker-component/year-picker.component.html"),
            styleUrls: [],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_material_moment_adapter__["a" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: YEAR_MODE_FORMATS },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return YearPickerComponent_1; }),
                    multi: true,
                },
            ],
        })
    ], YearPickerComponent);
    return YearPickerComponent;
    var YearPickerComponent_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map