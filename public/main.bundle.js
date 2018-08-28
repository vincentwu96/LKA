webpackJsonp([1,4],{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidateService = (function () {
    function ValidateService(flashMessage) {
        this.flashMessage = flashMessage;
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        else {
            return true;
        }
    };
    // Check for 2+ words for name
    ValidateService.prototype.validateName = function (user) {
        // capitalize all first letters in the name
        //user.name = user.name.toLowerCase().replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase());
        if (user.name.length > 50) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Name is limited to 50 characters', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
        var values = user.name.split(' ').filter(function (v) { return v !== ''; });
        if (values.length > 1) {
            return true;
        }
        else {
            window.scrollTo(0, 0);
            this.flashMessage.show('Please enter your full name', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
    };
    ValidateService.prototype.validateUsername = function (user) {
        if (user.username.length < 4) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Username is too short', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
        else if (user.username.length > 20) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Username is too long', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password.length < 6) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Password is too short', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
        else if (user.password.length > 20) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Password is too long', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object])
    ], ValidateService);
    return ValidateService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/validate.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(507);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(693),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/app.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_english_writing_english_writing_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_math_math_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_enrichment_enrichment_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_after_after_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_join_join_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























// import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'after-school', component: __WEBPACK_IMPORTED_MODULE_19__components_after_after_component__["a" /* AfterComponent */] },
    { path: 'english-writing', component: __WEBPACK_IMPORTED_MODULE_16__components_english_writing_english_writing_component__["a" /* EnglishWritingComponent */] },
    { path: 'math', component: __WEBPACK_IMPORTED_MODULE_17__components_math_math_component__["a" /* MathComponent */] },
    { path: 'enrichment-programs', component: __WEBPACK_IMPORTED_MODULE_18__components_enrichment_enrichment_component__["a" /* EnrichmentComponent */] },
    { path: 'join', component: __WEBPACK_IMPORTED_MODULE_20__components_join_join_component__["a" /* JoinComponent */] },
    { path: '**', redirectTo: '' },
];
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_english_writing_english_writing_component__["a" /* EnglishWritingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_after_after_component__["a" /* AfterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_math_math_component__["a" /* MathComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_enrichment_enrichment_component__["a" /* EnrichmentComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_join_join_component__["a" /* JoinComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_21_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AfterComponent = (function () {
    function AfterComponent() {
        this.pic1 = '/assets/images/after/pic1.JPG',
            this.pic2 = '/assets/images/after/pic2.JPG',
            this.pic3 = '/assets/images/after/pic3.JPG';
    }
    AfterComponent.prototype.ngOnInit = function () {
    };
    AfterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-after',
            template: __webpack_require__(694),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], AfterComponent);
    return AfterComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/after.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(695),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/contact.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (dashboard) {
            _this.user = dashboard.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(696),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnglishWritingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnglishWritingComponent = (function () {
    function EnglishWritingComponent() {
    }
    EnglishWritingComponent.prototype.ngOnInit = function () {
    };
    EnglishWritingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-english-writing',
            template: __webpack_require__(697),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], EnglishWritingComponent);
    return EnglishWritingComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/english-writing.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnrichmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EnrichmentComponent = (function () {
    function EnrichmentComponent() {
        this.chesspng = 'assets/images/enrichment/chess.png',
            this.competitivepng = 'assets/images/enrichment/competitive.png',
            this.intropng = 'assets/images/enrichment/intro.png';
    }
    EnrichmentComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    EnrichmentComponent.prototype.ngOnInit = function () {
    };
    EnrichmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enrichment',
            template: __webpack_require__(698),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], EnrichmentComponent);
    return EnrichmentComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/enrichment.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
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
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isIn = false; // store state
        this.fullImagePath = '/assets/images/bg.png';
    }
    HomeComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = !this.isIn;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        // User logged out
        this.router.navigate(['/login']);
        return false;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(699),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinComponent = (function () {
    function JoinComponent() {
    }
    JoinComponent.prototype.ngOnInit = function () {
    };
    JoinComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(700),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], JoinComponent);
    return JoinComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/join.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['dashboard']);
                window.scrollTo(0, 0);
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show('Invalid username or password', { cssClass: 'alert-danger', timeout: 3000 });
                console.log(data.msg);
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(701),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/login.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MathComponent = (function () {
    function MathComponent() {
        this.geometry = '/assets/images/math/geometry.png',
            this.algii = '/assets/images/math/algii.png',
            this.trig = '/assets/images/math/trig.png',
            this.phys = '/assets/images/math/phys.png',
            this.chem = '/assets/images/math/chem.png',
            this.sat = '/assets/images/math/sat.png';
    }
    MathComponent.prototype.ngOnInit = function () {
    };
    MathComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-math',
            template: __webpack_require__(702),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], MathComponent);
    return MathComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/math.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isIn = false; // store state
        this.fullImagePath = '/assets/images/LKA.png';
    }
    NavbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = !this.isIn;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        // User logged out
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(703),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(704),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/profile.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            return false;
        }
        // Validate Name
        if (!this.validateService.validateName(user)) {
            return false;
        }
        // Validate Username
        if (!this.validateService.validateUsername(user)) {
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            window.scrollTo(0, 0);
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-warning', timeout: 3000 });
            return false;
        }
        // Validate Password
        if (!this.validateService.validatePassword(user)) {
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                // User Registered
                _this.flashMessage.show('You are now registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
                window.scrollTo(0, 0);
            }
            else {
                window.scrollTo(0, 0);
                _this.flashMessage.show('Username is already taken', { cssClass: 'alert-warning', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(705),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/register.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/environment.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    // to update live site:
    // delete 'http://localhost:8080/
    // ng build in 'angular-src' folder
    // push to github and heroku
    // heroku ps:scale web=1
    // http://localhost:8080/
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        location.reload();
        window.scrollTo(0, 0);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/lka/lka/angular-src/src/auth.service.js.map

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ".center {\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n@media only screen\nand (min-width : 1024px) {\n\t#info-box {\n\t\theight: 450px;\n\t}\n\t#images{\n\t\twidth:265px;\n\t\theight:215px;\n\n\t}\n}\n.panel > .panel-heading {\n    background-color: #00008B;\n    color: white;\n}\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "ul.s{\r\n  font-size: 110%;\r\n}\r\n\r\n.center {\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n\r\nbutton {\r\n  width: 95%;\r\n\tdisplay: block;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n@media only screen\r\nand (min-width : 1024px) {\r\n\t#info-box {\r\n\t\theight: 250px;\r\n\t}\r\n\t#images{\r\n\t\theight:165px;\r\n    width:235px;\r\n\t}\r\n}\r\n.panel > .panel-heading {\r\n    background-color: #00008B;\r\n    color: white;\r\n}\r\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "ul.s{\n\tfont-size: 110%;\n}\n\n.panel{\n\twidth:65%;\n}\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "@media only screen\nand (min-width : 800px) {\n\t#login-box {\n\t\tborder: outset 2px;\n\t\twidth: 50%;\n\t\tmargin: 0;\n\t\tpadding: 30px;\n\t}\n}\n\np.s, label.s{\n\tfont-size:110%;\n}\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "ul.s{\n\tfont-size: 110%;\n}\n.center {\n\tdisplay: block;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n\n@media only screen\nand (min-width : 1024px) {\n\t#info-box {\n\t\theight: 450px;\n\t}\n\t#images{\n\t\twidth:265px;\n\t\theight:180px;\n\t}\n}\n.panel > .panel-heading {\n    background-color: #00008B;\n    color: white;\n}\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".horizontal-collapse {\r\n\theight: 70px;\r\n}\r\n.navbar-collapse.in {\r\n\toverflow-y: hidden;\r\n}\r\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "p.s, li.s, strong.s, b.s, Legend.s{\n\t        font-size: 110%;\n}\n\ntable, td, th {\n\tborder: 1px solid black;\n}\n\ntable {\n\t\n\twidth: auto;\n}\n\nth {\n\ttext-align: center;\n\theight: 50px;\n}\ntd, th{\n\tpadding: 10px;\n\ttext-align: center;\n}\ntr:nth-child(even) {background-color: #f2f2f2}\ntr:hover {background-color: #f5f5f5}\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "@media only screen\nand (min-width : 800px) {\n\t#register-box {\n\t\tborder: outset 2px;\n\t\twidth: 60%;\n\t\tmargin: 0;\n\t\tpadding: 30px;\n\t}\n\t.alert{\n\t\tdisplay:inline-block;\n\t}\n}\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"description\" content=\"Come in today to learn more about our After School Programs!\"/>\r\n\t<title>After School Program</title>\r\n</head>\r\n<body>\r\n\t<h2 class=\"page-header\">After School Program</h2>\r\n\r\n\t<div class=\"row\">\r\n\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">Happy and Cheerful Atmosphere</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\r\n\t\t\t\t\t<img class=\"center\" [src]=\"pic1\" id=\"images\">\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<p>At Light of Knowledge Academy, we hire the most experienced and caring teachers. In addition to offering optional English, Math, and Chinese class work, we first ensure that students finish homework from school.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">The Best of Both Western and Eastern Cultures</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\r\n\t\t\t\t\t<img class=\"center\" [src]=\"pic2\" id=\"images\">\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<p>We recognize the importance of building up good life-long habits. Thus, we prioritize our students' abilities to retain good habits. To integrate Western Culture, we cultivate leadership throughout our daily activities. Because of our Eastern influence, we emphasize building students' emotional intelligence.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-4\">\r\n\r\n\r\n\t\t\t<div class=\"panel panel-info\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">Individualized Curricula</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\r\n\t\t\t\t\t<img class=\"center\" [src]=\"pic3\" id=\"images\">\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<p>We offer a 1:10 student to instructor guarantee. We tailor our style and pace of instruction according to each student's abilities and personalities. We also strive to help students motivate themselves through friendly competitions.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<br>\r\n\r\n\t<div style=\"position:relative;height:0;padding-bottom:56.25%\"><iframe src=\"https://www.youtube.com/embed/ESNNlA8vq5U?ecver=2\" width=\"640\" height=\"360\" frameborder=\"0\" style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen></iframe></div>\r\n\t<br>\r\n</body>\r\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and muuch more! Learn more now!\"/>\r\n\t<title>Contact Us</title>\r\n</head>\r\n<body>\r\n\t<h2 class=\"page-header\">Contact Us</h2>\r\n\t<iframe src=\"https://docs.google.com/forms/u/0/d/e/1FAIpQLSecWLYKxqpHcrC0a0htLyugwrJxuLUD_X-Xi4Xp6A5DWRXdnw/viewform?embedded=true\" width=100% height=1650px frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\r\n</body>\r\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>Dashboard</title>\n</head>\n<body>\n\t<div *ngIf=\"user\">\n\t\t<h2 class=\"page-header\">Welcome back {{user.name}}.</h2>\n\n\t\t<a class=\"btn btn-primary\" target=\"_top\" [routerLink]=\"['/profile']\">View my profile</a>\n\n\t\t<p><br>Stay tuned for more updates!</p>\n\n\t\t<!--\n\t\t<Legend><br></Legend>\n\n\t\t<div class=\"panel panel-primary\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h3 class=\"panel-title\">Instructor Comments&nbsp;&nbsp;<span class=\"glyphicon glyphicon-comment\" aria-hidden=\"true\"></span></h3>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t{{user.generalComments}}\n\t\t\t</div>\n\t\t</div>\n\t\t-->\n\t</div>\n</body>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>English Writing</title>\n</head>\n<body>\n\t<h2 class=\"page-header\">English Writing</h2>\n\t<h5>New Teaching Strategies for the 2018-2019 School Year</h5>\n\t<p>Hello Parents and Students!</p>\n\t<p>In my English writing class this year, I am using some new and creative ideas to stimulate students to think more deeply about text that they read, to participate with more vigor during discussions, and eventually, to lead their own discussion regarding ideas and concepts that come up in the reading.\n\t\tSome of the strategies I will use are</p>\n\t<ol>\n\t\t<li>Socratic seminar, which is an activity designed to stimulate deeper, more philosophical thinking about complex issues.</li>\n\t\t<li>Town Hall Circle, which is a group activity designed to help students see different perspectives on an issue.</li>\n\t\t<li>Café Conversations, in which each student plays a role of a given character in a fictional or non-fiction story.</li>\n\t\t<li>Text to Self, Text to Text, and Text to World, a writing and discussion activity that helps students make connections between what they are reading in this class with what they are reading in other classes, and to think more deeply about what they are reading.</li>\n\t\t<li>“Keep it or Junk it”, which is a discussion-based, note-taking strategy that will help students write better essays.</li>\n\t</ol>\n\t<p>I will try out each of these activities and then repeat the activities that are the most popular and successful.  Also, in each of these exercises, students will be challenged to become directly involved with the text by reading text, answering questions about it, and then participating in various types of speaking and listening activities during class.  Also, the writing assignment for each week will be closely related to these exercises.     I look forward to the opportunity to use these new ideas in class this year!!!</p>\n\t<p>Sincerely,</p>\n\t<p>Michael N. Merrick (Mr. Mike)</p>\n\n\t<hr>\n\n\t<p>My program has two main emphases:</p>\n\t<p>Learn by Doing and Variety.</p>\n\n\t<p>What I mean by Learn by Doing is that since all writing is creative and subjective, I stimulate students' minds with student-friendly topics, give them a simple format to follow, and tell them to write. I do offer students ways to improve their writing, but I don't expect them to write exactly the same way as I do because I want  students' writing to grow organically and not artificially. It's a slow process but it happens. I'm also a big believer in re-writes. They are important,  not just to make an essay polished and complete, but for students' self-confidence.</p>\n\n\t<p>As far as Variety, I like to give students different types of assignments, such as reading comprehension, vocabulary and grammar. Reading comprehension is important because many studies have shown that one of the best ways to improve student writing is to read professional writing - both fiction and non-fiction-regularly.  Knowing this, I search out compelling stories for students to read so that they absorb a great writer's unique writing style. I am also using  new writing exercises this year that will push students to write with better sentence variety and better paragraph coherence and flow.  Vocabulary development is also very important; I expect students to complete at least one vocabulary chapter per week.  Last, I also assign periodic grammar exercises because students don't receive enough grammar instruction in school and knowledge of the rules of  grammar is a very important part of creating well-written essays.</p>\n\t<p>I hope this helps you understand my program better.</p>\n\t<p>Sincerely,</p>\n\t<p>Michael N. Merrick (Mr. Mike)</p>\n\n\t<!--\n\tDon't need PDFs anymore but leaving it here in case\n\t<div style=\"width: 100%; height: 1400px\">\n\t<ng2-pdfjs-viewer pdfSrc=\"../../pdfjs/web/TestPDF.pdf\">Resume</ng2-pdfjs-viewer>\n\t</div>\n\t-->\n\n<br><br>\n</body>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>Enrichment Programs</title>\n</head>\n<body>\n\t<h2 class=\"page-header\">Enrichment Programs</h2>\n\n\n\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Chess</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"chesspng\" id=\"images\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"scroll(chess)\">View Course</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Competitive Programming</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"competitivepng\" id=\"images\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"scroll(competitive)\">View Course</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\n\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Introduction to Programming</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"intropng\" id=\"images\">\n\t\t\t\t\t<br>\n\t\t\t\t\t<button class=\"btn btn-success\" (click)=\"scroll(intro)\">View Course</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<h2 class=\"page-header\" #chess>Chess</h2>\n\t<h3>Instructor: Albert Rich</h3>\n\t<ul class=\"s\">\n\t\t<li>USCF National Master 2004</li>\n\t\t<li>Peak Rating 2289</li>\n\t\t<li>USCF Life Member</li>\n\t\t<li>USCF Certified Chess Coach 2004</li>\n\t\t<li>1993 US Junior Open 19 year old Champion</li>\n\t\t<li>Former Top 50 in US for age group</li>\n\t\t<li>Twice West Valley H.S. Chess League MVP</li>\n\t\t<li>4 Time Kolty Chess Club Champion</li>\n\t\t<li>Kolty Club Blitz Champion</li>\n\t\t<li>=1st 2004 Stamer Memorial</li>\n\t\t<li>First Place in many other tournaments</li>\n\t\t<li>3rd 2005 US under 50 Championship</li>\n\t\t<li>Former #1 ranked human on USCL, USCF's official Internet Chess Server</li>\n\t\t<li>Several students ranked in US top 100 list </li>\n\t\t<li>USCF certified Tournament Director</li>\n\t\t<li>Over 100 tournaments directed</li>\n\t\t<li>Teaching chess to children since 2003</li>\n\t</ul>\n\t<p>Contact Information:<br>\n\t<a href=\"tel:1-408-348-9658\">(408)348-9658</a>\n\t<br>\n\t<a href=\"mailto:albertjrich@yahoo.com\" target=\"_top\">albertjrich@yahoo.com</a>\n\t</p>\n\t<br>\n\n<h2 class=\"page-header\" #competitive>Competitive Programming</h2>\n\t<p>This course will help students improve their skills in competitive programming, specifically USACO, as well as their problem solving and coding skills. The topics covered in this course are common interview questions in the field of Computer Science. Tentative topics include:</p>\n\t<ul class=\"s\">\n\t\t<li>Prefix Sums</li>\n\t\t<li>Sorting Algorithms</li>\n\t\t<li>Graph Theory</li>\n\t\t<li>Tree Traversal Algorithms</li>\n\t\t<li>Greedy Algorithms</li>\n\t\t<li>Hashing</li>\n\t\t<li>Dynamic Programming</li>\n\t\t<li>Computational Geometry</li>\n\t</ul>\n\n\t<br>\n\n\t<h2 class=\"page-header\" #intro>Introduction to Programming</h2>\n\t\t<h3>Java Greenfoot Summer Course</h3>\n\t\t<h3>Instructor: Martin Ly</h3>\n\t\t<p>This course is suitable for entry level students who are interested in learning Java programming and basic game development. Prior experience is not required.\n\t\tThe course will introduce the object-oriented Java programming language from the bottom up. Students will learn about good programming practices.\n\t\t<br>\n\t\tIn this course, students will:</p>\n\t\t<ul class=\"s\">\n\t\t\t<li>Learn Java syntax and their applications such as integrating input/output, calculations, logic/looping flow and control, object-oriented programming,\n\t\t\texception handling, multi-threading, etc.</li>\n\t\t\t<li>How to build a fully developed application or program using Java based on a simple idea or concept</li>\n\t\t\t<li>Follow step by step game examples and exercises, then applying these fundamental concepts to create more complicated applications</li>\n\t\t\t<li>Learn how to use a graphics editor to design simple 2D images</li>\n\t\t\t<li>Intermediate students will be encouraged to use Netbean and begin learning about topics covered in AP Computer Science</li>\n\t\t</ul>\n\n\n\t<h3>Android App Development Summer Course</h3>\n\t<p>Children of all ages can use our easy-to-learn online development tool to develop an Android application\n\tWe utilize user-friendly visual block programming, making this a great course for those without prior programming experience. Millions of applications and games can be built\n\tutilizing the built in abilities of the Android phone including the GPS tracking system, connection to the Web, gyro/magneto sensors, texting capabilities, email sending/receiving,\n\tvoice recognition, clock, etc.\n\t<br>\n\tIn this course, students will:</p>\n\t<ul class=\"s\">\n\t\t<li>Learn all the functions and elements of blocks</li>\n\t\t<li>Learn programming logic control and flow</li>\n\t\t<li>How to create a user interface and set its layout</li>\n\t\t<li>Learn about program animations and graphics, sensors and storage</li>\n\t\t<li>Follow simple steps to create basic applications and games</li>\n\t\t<li>Turn ideas into live applications</li>\n\t\t<li>Learn in small classes of 4 to 5 students</li>\n\t\t<li>Most suitable for students in grades 4 to 7</li>\n\t\t<li>Students will need to bring their own laptop, and have access to a Android phone/tablet that runs on the Android OS</li>\n\n\t</ul>\n\n\t<br><br><br><br><br>\n</body>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\r\n\t<title>Home Page</title>\r\n</head>\r\n<body>\r\n\t<div class=\"jumbotron text-center\">\r\n\t\t<h1>Light of Knowledge Academy</h1>\r\n\t\t<br>\r\n\t\t<p><a target=\"_blank\" title=\"Open in Google Maps\" href=\"https://www.google.com/maps/place/Light+Of+Knowledge/@37.3151035,-122.0332689,17z/data=!3m1!4b1!4m5!3m4!1s0x808fb5076a23cba5:0x64257984edd56321!8m2!3d37.3150993!4d-122.0310802\">20432 Silverado Ave. Ste. 6 | Cupertino, CA 95014</a>\r\n\t\t<br>Call us at: <a title=\"Phone\" href=\"tel:4089961236\">(408) 996-1236</a> | Text us at: <a title=\"Text\" href=\"tel: 4082181698\">(408) 218-1698</a>\r\n\t\t<br>Email: <a title=\"Email\" href=\"mailto:info.lkastaff@gmail.com\" target=\"_top\">info.lkastaff@gmail.com</a> | <a target=\"_blank\" title=\"Open in new tab\" href=\"http://facebook.com/LOKacademy\">Give us a like on our Facebook page!</a></p>\r\n\r\n\t\t<div>\r\n\t\t\t<a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/login']\">Login</a>\r\n\t\t\t<a *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\" class=\"btn btn-info\" target=\"_top\" [routerLink]=\"['/register']\">Register</a>\r\n\t\t\t<a class=\"btn btn-primary\" target=\"_top\" title=\"Join our team today!\" [routerLink]=\"['/join']\">Careers</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<img [src]=\"fullImagePath\" width=\"100%\">\r\n</body>\r\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>Join Our Team Today!</title>\n</head>\n<body>\n\t<h2 class=\"page-header\">Join Our Team Today!</h2>\n\t<p>At Light of Knowledge Academy, we are always seeking talented instructors to come work with us. We currently have one open position:<p>\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Instructor</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<strong>Job Description</strong>\n\t\t\t\t\t<ul class=\"s\">\n\t\t\t\t\t\t<li>You will be working with middle school students to help them understand and complete homework</li>\n\t\t\t\t\t\t<li>The ideal candidate should also be able to teach Middle School Math and English</li>\n\t\t\t\t\t\t<li>The ideal candidate is self-motivated and encourages their students to do the same</li>\n\t\t\t\t\t\t<li>Hours are from 3:30pm to 6:30pm</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<p>Interested? Send us your application at <a href=\"mailto:info.lkastaff@gmail.com\" target=\"_top\">info.lkastaff@gmail.com</a>, and we look forward to hearing from you!</p>\n\t</body>\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>Login to Continue</title>\n</head>\n<body>\n\t<h2 class=\"page-header\">Login</h2>\n\t<div id=\"login-box\">\n\t\t<form (submit)=\"onLoginSubmit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"s\">Username</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Enter username\" >\n\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"s\">Password</label>\n\t\t\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Enter password\">\n\t\t\t\t</div>\n\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" title=\"Submit\" value=\"Submit\">\n\t\t</form>\n\t\t<br>\n\t\t<p class=\"s\">Don't have an account yet? Click <a target=\"_top\" title=\"Register\" [routerLink]=\"['/register']\">here</a> to create one.</p>\n\t</div>\n</body>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>Math</title>\n</head>\n<body>\n\t<h2 class=\"page-header\">Math</h2>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Geometry</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"geometry\" id=\"images\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p>In our Geometry course, some of the topics we will cover include:</p>\n\t\t\t\t\t<ul class=\"s\">\n\t\t\t\t\t\t<li>Congruent and Similar Figures</li>\n\t\t\t\t\t\t<li>Perimeter and Circumference</li>\n\t\t\t\t\t\t<li>Surface Area</li>\n\t\t\t\t\t\t<li>Areas of Irregular Shapes</li>\n\t\t\t\t\t\t<li>3D Objects and their volumes</li>\n\t\t\t\t\t\t<li>Pythagorean Theorem</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Algebra II</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"algii\" id=\"images\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p>In our Algebra II course, some of the topics we will cover include:</p>\n\t\t\t\t\t<ul class=\"s\">\n\t\t\t\t\t\t<li>Functions</li>\n\t\t\t\t\t\t<li>Complex Numbers</li>\n\t\t\t\t\t\t<li>Polynomial Arithmetic</li>\n\t\t\t\t\t\t<li>Exponential Growth</li>\n\t\t\t\t\t\t<li>Logarithms</li>\n\t\t\t\t\t\t<li>Graphs of Polynomials</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\n\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Trigonometry</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"trig\">\n\t\t\t\t\t<p>In our Trigonometry course, some of the topics we will cover include:</p>\n\t\t\t\t\t<ul class=\"s\">\n\t\t\t\t\t\t<li>Radians</li>\n\t\t\t\t\t\t<li>Pythagorean Identity</li>\n\t\t\t\t\t\t<li>Trigonometric values of special angles</li>\n\t\t\t\t\t\t<li>Sine, cosine, tangent graphs</li>\n\t\t\t\t\t\t<li>Trigonometric identities</li>\n\t\t\t\t\t\t<li>Sinusoidal functions</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<Legend>Other Math Intensive Courses</Legend>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">AP Physics</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"phys\" id=\"images\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p>In our AP Physics course, some of the topics we will cover include:</p>\n\t\t\t\t\t<ul class=\"s\">\n\t\t\t\t\t\t<li>Newton's Three Laws of Motion</li>\n\t\t\t\t\t\t<li>Kinematics</li>\n\t\t\t\t\t\t<li>Torque</li>\n\t\t\t\t\t\t<li>Work, Power, Energy</li>\n\t\t\t\t\t\t<li>Gravitational and Circular Motion</li>\n\t\t\t\t\t\t<li>Linear Momentum</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-4\">\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">AP/Honors Chemistry</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"chem\" id=\"images\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p>In our AP/Honors Chemistry course, some of the topics we will cover include:</p>\n\t\t\t\t\t<ul class=\"s\">\n\t\t\t\t\t\t<li>Scientific Method</li>\n\t\t\t\t\t\t<li>Atomic Theory</li>\n\t\t\t\t\t\t<li>Chemical Bonding</li>\n\t\t\t\t\t\t<li>Molecular Gemoetry</li>\n\t\t\t\t\t\t<li>Molecular Models</li>\n\t\t\t\t\t\t<li>Mass spectrometry</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\n\n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">SAT Preparation Courses</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\" id=\"info-box\">\n\t\t\t\t\t<img class=\"center\" [src]=\"sat\" id=\"images\">\n\t\t\t\t\t<p></p>\n\t\t\t\t\t<p>Our SAT Preparation course will cover the main sections of the SAT test:</p>\n\t\t\t\t\t<ul class=\"s\">\n\t\t\t\t\t\t<li>Reading</li>\n\t\t\t\t\t\t<li>Writing and Language</li>\n\t\t\t\t\t\t<li>Math (No Calculator)</li>\n\t\t\t\t\t\t<li>Math (Calculator Allowed)</li>\n\t\t\t\t\t\t<li>Essay (Optional)</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--\n\t<h2 class=\"page-header\">Math</h2>\n\t<p>Courses Offered:</p>\n\t<ul>\n\t<li class=\"s\">Geometry</li>\n\t<li class=\"s\">Algebra II</li>\n\t<li class=\"s\">Trigonometry</li>\n</ul>\n<p>We also offer other math intensive courses such as AP Physics, AP/Honors Chemistry, and SAT Preparation Courses.</p>\n-->\n</body>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. Learn more now!\"/>\r\n</head>\r\n<body>\r\n\t<nav class=\"navbar navbar-default\">\r\n\t\t<div class=\"container-fluid\">\r\n\t\t\t<div class=\"navbar-header\">\r\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleState()\">\r\n\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t</button>\r\n\t\t\t\t<a target=\"_top\" title=\"Home\" class=\"navbar-brand\" href=\"#\"><img [src]=\"fullImagePath\"></a>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id=\"navbar\" class=\"collapse navbar-collapse in\" [ngClass]=\"{ 'in':isIn }\">\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-left\">\r\n\t\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/']\">Home <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span></a></li>\r\n\t\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/after-school']\">After School</a></li>\r\n\t\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/english-writing']\">English Writing</a></li>\r\n\t\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/math']\">Math</a></li>\r\n\t\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a></li>\r\n\t\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/contact']\">Contact Us <span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span></a></li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n\t\t\t\t\t<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/profile']\">Profile</a></li>\r\n\t\t\t\t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/login']\">Login</a></li>\r\n\t\t\t\t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a target=\"_top\" [routerLink]=\"['/register']\">Register</a></li>\r\n\t\t\t\t\t<li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</nav>\r\n</body>\r\n"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. Learn more now!\"/>\n\t<title>Profile</title>\n</head>\n<body>\n\t<h2 class=\"page-header\">Profile</h2>\n\t<div *ngIf=\"user\">\n\t\t<p>Username: {{user.username}}</p>\n\t\t<p>Email: {{user.email}}</p>\n\t\t<legend>Legend</legend>\n\t\t<p>Complete and of Excellent Quality = C*</p>\n\t\t<p>Complete and of Acceptable Quality = C</p>\n\t\t<p>Incomplete = INC</p>\n\n\t\t<!--\n\t\t<br>\n\t\t<strong>Essay Evaluation Criteria</strong>\n\t\t<p>Writing Conventions = WC</p>\n\t\t<p>Paragraph Coherence/Unity = PCU</p>\n\t\t<p>Sentence Variety = SV</p>\n\t\t<p>Ideas/Depth/Length = IDL</p>\n\t\t-->\n\n\t\t<br>\n\t\t<strong>For the Monthly Evaluative Essay Report, each of the following categories will be graded on a 1 to 6 scale:</strong>\n\t\t<p>Writing Conventions - Writer uses formal standard English and avoids banned words and overly informal language</p>\n\t\t<p>Paragraph Coherence/Unity - All sentences are arranged in a logical order and belong in the paragraph</p>\n\t\t<p>Sentence Variety - Sentence openers are not repetitive within a paragraph</p>\n\t\t<p>Ideas/Depth/Length - Writer includes original ideas and does not settle for a superficial discussion of the topic; each paragraph is at least 8 sentences long</p>\n\n\t\t<br>\n\t\t<b class=\"s\">Note:</b>\n\t\t<p>For Vocabulary, each student works at his/her own pace, so parents will need to check with the teacher if there are missing vocabulary assignments.</p>\n\t\t<p>Essays are often broken up into parts, and only one part is due each week.</p>\n\t\t<p>When fractions are used, the denominator represents the total number of assignments given, and the numerator represents the number of assignments completed and turned in.</p>\n\n\t\t<legend><br>Student Performance Report</legend>\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<th>Month</th>\n\t\t\t\t<th>Reading Comprehension</th>\n\t\t\t\t<th>Vocabulary</th>\n\t\t\t\t<th>Session Comments</th>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>September</td>\n\t\t\t\t<td>{{user.rc1}}</td>\n\t\t\t\t<td>{{user.v1}}</td>\n\t\t\t\t<td width=\"700px\">{{user.c1}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>October</td>\n\t\t\t\t<td>{{user.rc2}}</td>\n\t\t\t\t<td>{{user.v2}}</td>\n\t\t\t\t<td>{{user.c2}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>November</td>\n\t\t\t\t<td>{{user.rc3}}</td>\n\t\t\t\t<td>{{user.v3}}</td>\n\t\t\t\t<td>{{user.c3}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>January</td>\n\t\t\t\t<td>{{user.rc4}}</td>\n\t\t\t\t<td>{{user.v4}}</td>\n\t\t\t\t<td>{{user.c4}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>February</td>\n\t\t\t\t<td>{{user.rc5}}</td>\n\t\t\t\t<td>{{user.v5}}</td>\n\t\t\t\t<td>{{user.c5}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>March</td>\n\t\t\t\t<td>{{user.rc6}}</td>\n\t\t\t\t<td>{{user.v6}}</td>\n\t\t\t\t<td>{{user.c6}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>April</td>\n\t\t\t\t<td>{{user.rc7}}</td>\n\t\t\t\t<td>{{user.v7}}</td>\n\t\t\t\t<td>{{user.c7}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>May</td>\n\t\t\t\t<td>{{user.rc8}}</td>\n\t\t\t\t<td>{{user.v8}}</td>\n\t\t\t\t<td>{{user.c8}}</td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<br>\n\t\t<Legend>Monthly Evaluative Essay Report</Legend>\n\t\t<table width=\"500px\">\n\t\t\t<tr>\n\t\t\t\t<th>Month</th>\n\t\t\t\t<th>Writing Conventions</th>\n\t\t\t\t<th>Paragraph Coherence/Unity</th>\n\t\t\t\t<th>Sentence Variety</th>\n\t\t\t\t<th>Ideas/Depth/Length</th>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>September</td>\n\t\t\t\t<td>{{user.wc1}}</td>\n\t\t\t\t<td>{{user.pcu1}}</td>\n\t\t\t\t<td>{{user.sv1}}</td>\n\t\t\t\t<td>{{user.idl1}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>October</td>\n\t\t\t\t<td>{{user.wc2}}</td>\n\t\t\t\t<td>{{user.pcu2}}</td>\n\t\t\t\t<td>{{user.sv2}}</td>\n\t\t\t\t<td>{{user.idl2}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>November</td>\n\t\t\t\t<td>{{user.wc3}}</td>\n\t\t\t\t<td>{{user.pcu3}}</td>\n\t\t\t\t<td>{{user.sv3}}</td>\n\t\t\t\t<td>{{user.idl3}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>January</td>\n\t\t\t\t<td>{{user.wc4}}</td>\n\t\t\t\t<td>{{user.pcu4}}</td>\n\t\t\t\t<td>{{user.sv4}}</td>\n\t\t\t\t<td>{{user.idl4}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>February</td>\n\t\t\t\t<td>{{user.wc5}}</td>\n\t\t\t\t<td>{{user.pcu5}}</td>\n\t\t\t\t<td>{{user.sv5}}</td>\n\t\t\t\t<td>{{user.idl5}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>March</td>\n\t\t\t\t<td>{{user.wc6}}</td>\n\t\t\t\t<td>{{user.pcu6}}</td>\n\t\t\t\t<td>{{user.sv6}}</td>\n\t\t\t\t<td>{{user.idl6}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>April</td>\n\t\t\t\t<td>{{user.wc7}}</td>\n\t\t\t\t<td>{{user.pcu7}}</td>\n\t\t\t\t<td>{{user.sv7}}</td>\n\t\t\t\t<td>{{user.idl7}}</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>May</td>\n\t\t\t\t<td>{{user.wc8}}</td>\n\t\t\t\t<td>{{user.pcu8}}</td>\n\t\t\t\t<td>{{user.sv8}}</td>\n\t\t\t\t<td>{{user.idl8}}</td>\n\t\t\t</tr>\n\t\t</table>\n\t\t<br><br><br>\n\t</div>\n</body>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. Learn more now!\"/>\n\t<title>Register</title>\n</head>\n<body>\n\t<h2 class=\"page-header\">Register</h2>\n\n\t<div id=\"register-box\">\n\t\t<form (submit)=\"onRegisterSubmit()\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Name</label>\n\t\t\t\t<!-- style=\"text-transform: capitalize;\" -->\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter full name\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Username</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter username (4-20 characters)\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Email</label>\n\t\t\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>Password</label>\n\t\t\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter password (6-20 characters)\">\n\t\t\t</div>\n\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Create Account\">\n\t\t</form>\n\t\t<br>\n\t\t<p>Already have an account? Click <a target=\"_top\" title=\"Login\" [routerLink]=\"['/login']\">here</a> to login.</p>\n\t</div>\n\t<br><br>\n</body>\n"

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[729]);
//# sourceMappingURL=main.bundle.map