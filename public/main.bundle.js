webpackJsonp([1,4],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
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
            alert('Password is too short');
            return false;
        }
        else if (user.password.length > 20) {
            alert('Password is too long');
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateUsername = function (user) {
        if (user.username.length < 4) {
            alert('Username is too short');
            return false;
        }
        else if (user.username.length > 20) {
            alert('Username is too long');
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/validate.service.js.map

/***/ }),

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(505);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/main.js.map

/***/ }),

/***/ 504:
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
            template: __webpack_require__(687),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/app.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contact_contact_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_english_writing_english_writing_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_math_math_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_enrichment_enrichment_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_after_after_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_join_join_component__ = __webpack_require__(512);
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
];
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
                __WEBPACK_IMPORTED_MODULE_20__components_join_join_component__["a" /* JoinComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/app.module.js.map

/***/ }),

/***/ 506:
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
    }
    AfterComponent.prototype.ngOnInit = function () {
    };
    AfterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-after',
            template: __webpack_require__(688),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], AfterComponent);
    return AfterComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/after.component.js.map

/***/ }),

/***/ 507:
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
            template: __webpack_require__(689),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/contact.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(690),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 509:
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
            template: __webpack_require__(691),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], EnglishWritingComponent);
    return EnglishWritingComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/english-writing.component.js.map

/***/ }),

/***/ 510:
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
    }
    EnrichmentComponent.prototype.ngOnInit = function () {
    };
    EnrichmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enrichment',
            template: __webpack_require__(692),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], EnrichmentComponent);
    return EnrichmentComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/enrichment.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function HomeComponent() {
        this.fullImagePath = '/assets/images/bg.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(693),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/home.component.js.map

/***/ }),

/***/ 512:
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
            template: __webpack_require__(694),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], JoinComponent);
    return JoinComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/join.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
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
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
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
            }
            else {
                alert(data.msg);
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(695),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/login.component.js.map

/***/ }),

/***/ 514:
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
    }
    MathComponent.prototype.ngOnInit = function () {
    };
    MathComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-math',
            template: __webpack_require__(696),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], MathComponent);
    return MathComponent;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/math.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
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
        this.fullImagePath = '/assets/images/LKA.png';
    }
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
            template: __webpack_require__(697),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(78);
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
            template: __webpack_require__(698),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/profile.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(78);
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
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
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
            alert('Please fill in all fields');
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            alert('Please use a valid email');
            return false;
        }
        // Validate Password
        if (!this.validateService.validatePassword(user)) {
            return false;
        }
        // Validate Username
        if (!this.validateService.validateUsername(user)) {
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                // User Registered
                alert('You are now registered');
                _this.router.navigate(['/login']);
            }
            else {
                alert('Something went wrong');
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(699),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/register.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
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
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 519:
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
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/environment.js.map

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "/*@media screen and (max-width: 1020px) {\n\t#container, #header, #content, #footer {\n\t\tfloat: none;\n\t\twidth: auto;\n\t}\n\t#subtitle, #share, #slider, #sidebar{\n\t\tdisplay:none;\n\t}\n\tp{ font-size: 2em; }\n}*/\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "/*div {\nheight: 333px;\nwidth: 100%;\n}\n\n@media screen and (max-width: 1020px) {\n#container, #header, #content, #footer {\nfloat: none;\nwidth: auto;\n}\n#subtitle, #share, #slider, #sidebar{\ndisplay:none;\n}\np{ font-size: 2em; }\n}*/\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ".tab { margin-left: 40px; }\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "#login-box {\n\tborder: outset 2px;\n\twidth: 50%;\n\tmargin: 0;\n\tpadding: 30px;\n}\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ".horizontal-collapse {\r\n    height: 70px;\r\n  }\r\n  .navbar-collapse.in {\r\n    overflow-y: hidden;\r\n  }"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "table, td, th {\n\tborder: 1px solid black;\n}\n\ntable {\n\tborder-collapse: collapse;\n\twidth: 700px;\n\t/*width: 100%;*/\n}\n\nth {\n\ttext-align: center;\n\theight: 50px;\n}\ntd, th{\n\n\tpadding: 15px;\n\ttext-align: center;\n}\ntr:nth-child(even) {background-color: #f2f2f2}\ntr:hover {background-color: #f5f5f5}\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "#register-box {\n\tborder: outset 2px;\n\twidth: 60%;\n\tmargin: 0;\n\tpadding: 30px;\n}\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<meta charset=\"utf-8\">\r\n<meta name=\"description\" content=\"Come in today to learn more about our After School Programs!\"/>\r\n<title>After School Program</title>\r\n<h2 class=\"page-header\">After School Program</h2>\r\n<div class=\"row\">\r\n\t<div class=\"col-md-4\">\r\n\t\t<h3><font color=\"#00008B\">Happy and Cheerful Atmosphere</font></h3>\r\n\t\t<p><font color=\"#C70039\">At Light of Knowledge Academy, we hire the most experienced and caring teachers. In addition to offering optional English, Math, and Chinese class work, we first ensure that students finish homework from school.</font></p>\r\n\t</div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<h3><font color=\"#00008B\">The Best of Both Western and Eastern Cultures</font></h3>\r\n\t\t<p><font color=\"#C70039\">In both cultures we recognize the importance of building up good habits for life, thus, we prioritize our student's ability to retain good habits. Additionally, to integrate Western Culture, we cultivate leadership throughout our daily activities. Because of our Eastern influence, we also emphasize building our student's emotional intelligence.</font></p>\r\n\t</div>\r\n\t<div class=\"col-md-4\">\r\n\t\t<h3><font color=\"#00008B\">Individualized Curricula</font></h3><br>\r\n\t\t<p><font color=\"#C70039\">We offer a 1:10 student to instructor guarantee. Parents will receive weekly progress reports to monitor their child's progress. We strive to help students motivate themselves through friendly competitions.</font></p>\r\n\t</div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div style=\"position:relative;height:0;padding-bottom:56.25%\"><iframe src=\"https://www.youtube.com/embed/ESNNlA8vq5U?ecver=2\" width=\"640\" height=\"360\" frameborder=\"0\" style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen></iframe></div>\r\n\r\n<br><br><br>\r\n\r\n<div class =\"btn-group btn-group-justified\">\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/english-writing']\">English Writing</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and muuch more! Learn more now!\"/>\r\n\t<title>Contact Us</title>\r\n\t<form class=\"form-horizontal\">\r\n\t\t<fieldset>\r\n\t\t\t<h2 class=\"page-header\">Contact Us</h2>\r\n\r\n\t\t\t<!--\r\n\t   <div class=\"form-group\">\r\n\t   <label for=\"firstName\" class=\"col-lg-2 control-label\">Parent's First Name</label>\r\n\t   <div class=\"col-lg-10\">\r\n\t   <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Parent's First Name\">\r\n\t   </div>\r\n\t   </div>\r\n\t   <div class=\"form-group\">\r\n\t   <label for=\"lastName\" class=\"col-lg-2 control-label\">Parent's Last Name</label>\r\n\t   <div class=\"col-lg-10\">\r\n\t   <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Parent's Last Name\">\r\n\t   </div>\r\n\t   </div>\r\n\t   <div class=\"form-group\">\r\n\t   <label for=\"email\" class=\"col-lg-2 control-label\">Email</label>\r\n\t   <div class=\"col-lg-10\">\r\n\t   <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n\r\n\t   <div class=\"checkbox\">\r\n\t   <label>\r\n\t   <input type=\"checkbox\">\r\n\t   </label>\r\n\t   </div>\r\n\t   </div>\r\n\t   </div>\r\n\t   <div class=\"form-group\">\r\n\t   <label for=\"textArea\" class=\"col-lg-2 control-label\">Questions?</label>\r\n\t   <div class=\"col-lg-10\">\r\n\t   <textarea class=\"form-control\" rows=\"3\" id=\"textArea\"></textarea>\r\n\t   </div>\r\n\t   </div>\r\n\t   <div class=\"form-group\">\r\n\t   <div class=\"col-lg-10 col-lg-offset-2\">\r\n\t   <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\r\n\t   <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n\t   </div>\r\n\t   </div>\r\n\t\t\t-->\r\n\t\t\t<iframe src=\"https://docs.google.com/forms/u/0/d/e/1FAIpQLSecWLYKxqpHcrC0a0htLyugwrJxuLUD_X-Xi4Xp6A5DWRXdnw/viewform?embedded=true\" width=100% height=\"1700\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\r\n\t\t</fieldset>\r\n\t</form>\r\n\r\n\r\n\t<br>\r\n\r\n\t<div class =\"btn-group btn-group-justified\">\r\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\r\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/english-writing']\">English Writing</a>\r\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\r\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\r\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\r\n\t</div>\r\n\r\n\t<br>\r\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<a class=\"btn btn-primary\" [routerLink]=\"['/profile']\">Go to your profile</a>\n<p><br>Thank you for creating an account, stay tuned for more updates!</p>\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>English Writing</title>\n\t<h2 class=\"page-header\">English Writing</h2>\n\n\t<p>My program has two main emphases:</p>\n\t<p>Learn by doing and Variety.</p>\n\n\t<p>What I mean by Learn by Doing is that since all writing is creative and subjective, I stimulate students' minds with student-friendly topics, give them a simple format to follow, and tell them to write. I do offer students ways to improve their writing, but I don't expect them to write exactly the same way as I do because I want  students' writing to grow organically and not artificially. It's a slow process but it happens. I'm also a big believer in re-writes. They are important,  not just to make an essay polished and complete, but for students' self-confidence.</p>\n\n\t<p>As far as Variety, I like to give students different types of assignments, such as reading comprehension, vocabulary and grammar. Reading comprehension is important because many studies have shown that one of the best ways to improve student writing is to read professional writing - both fiction and non-fiction-regularly.  Knowing this, I search out compelling stories for students to read so that they absorb a great writer's unique writing style. I am also using  new writing exercises this year that will push students to write with better sentence variety and better paragraph coherence and flow.  Vocabulary development is also very important; I expect students to complete at least one vocabulary chapter per week.  Last, I also assign periodic grammar exercises because students don't receive enough grammar instruction in school and knowledge of the rules of  grammar is a very important part of creating well-written essays.</p>\n\n\t<p>Michael N. Merrick</p>\n\n\t<p>(Mr. Mike)</p>\n\n\t<br>\n\t<div class =\"btn-group btn-group-justified\">\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/english-writing']\">English Writing</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\n\t</div>\n\t<br>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<meta charset=\"utf-8\">\n<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n<title>Enrichment Programs</title>\n<h2 class=\"page-header\">Chess</h2>\n<h3>Instructor: Albert Rich</h3>\n<ul>\n\t<li>USCF National Master 2004</li>\n\t<li>Peak Rating 2289</li>\n\t<li>USCF Life Member</li>\n\t<li>USCF Certified Chess Coach 2004</li>\n\t<li>1993 US Junior Open 19 year old Champion</li>\n\t<li>Former Top 50 in US for age group</li>\n\t<li>Twice West Valley H.S. Chess League MVP</li>\n\t<li>4 Time Kolty Chess Club Champion</li>\n\t<li>Kolty Club Blitz Champion</li>\n\t<li>=1st 2004 Stamer Memorial</li>\n\t<li>First Place in many other tournaments</li>\n\t<li>3rd 2005 US under 50 Championship</li>\n\t<li>Former #1 ranked human on USCL, USCF's official Internet Chess Server</li>\n\t<li>Several students ranked in US top 100 list </li>\n\t<li>USCF certified Tournament Director</li>\n\t<li>Over 100 tournaments directed</li>\n\t<li>Teaching chess to children since 2003</li>\n</ul>\n<p>Contact Information:</p>\n<a href=\"tel:1-408-348-9658\">(408)348-9658</a>\n<br>\n<a href=\"mailto:albertjrich@yahoo.com\" target=\"_top\">albertjrich@yahoo.com</a>\n<br>\n<h2 class=\"page-header\">Introduction to Programming</h2>\n<p>Introduction to Programming Description</p>\n<br><br><br><br><br>\n<h2 class=\"page-header\">Art</h2>\n<p>Art Description</p>\n<br><br><br><br><br>\n<div class =\"btn-group btn-group-justified\">\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/englis-writing']\">English Writing</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\n</div>\n<br>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n\t<meta charset=\"utf-8\">\r\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\r\n\t<title>Home Page</title>\r\n\r\n<div class=\"jumbotron text-center\">\r\n\t<h1>Light of Knowledge Academy</h1>\r\n\t<br>\r\n\t<p><a target=\"_blank\" href=\"https://www.google.com/maps/place/20432+Silverado+Ave,+Cupertino,+CA+95014/@37.3149792,-122.0334717,17z/data=!3m1!4b1!4m5!3m4!1s0x808fb5076a61d76f:0x640ac354a2071531!8m2!3d37.3149792!4d-122.031283\">20432 Silverado Ave. Ste. 6 | Cupertino, CA 95014</a>\r\n\t<br>Call us at: <a href=\"tel:4089961236\">(408) 996-1236</a> | Text us at: <a href=\"tel: 4082181698\">(408) 218-1698</a>\r\n\t<br>Email: <a href=\"mailto:info.lkastaff@gmail.com\" target=\"_top\">info.lkastaff@gmail.com</a> | <a target=\"_blank\" href=\"http://facebook.com/LOKacademy\">Give us a like on our Facebook page!</a></p>\r\n\r\n\t<div>\r\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Login</a>\r\n\t\t<a class=\"btn btn-info\" [routerLink]=\"['/register']\">Register</a>\r\n\t</div>\r\n</div>\r\n<img [src]=\"fullImagePath\" width=\"100%\">\r\n\r\n<!--\r\n<div class=\"row\">\r\n\t<div class=\"col-md-3\">\r\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/after-school-care']\">After School Care</a>\r\n\t</div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/english-writing']\">English Writing</a>\r\n\r\n\t</div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<a class=\"btn btn-default\" [routerLink]=\"['/math']\">Math</a>\r\n\t</div>\r\n\t<div class=\"col-md-3\">\r\n\t\t<a class=\"btn btn-danger\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\r\n\t</div>\r\n</div>\r\n-->\r\n\r\n<div class =\"btn-group btn-group-justified\">\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/english-writing']\">English Writing</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\r\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>Join Our Team Today!</title>\n\t<h2 class=\"page-header\">Join Our Team Today!</h2>\n\t<h3>At Light of Knowledge Academy, we are always seeking talented instructors to come work with us. We currently have one open position:</h3>\n\t<h4 class=\"tab\"><b>Instructor</b></h4>\n\t<h5 class=\"tab\">You will be working with middle school students to help understand and complete homework</h5>\n\t<h5 class=\"tab\">The ideal candidate should also be able to teach Middle School Math and English</h5>\n\t<h5 class=\"tab\">Hours are from 3:30pm to 6:30pm</h5>\n\t<h5 class=\"tab\">The ideal candidate is self-motivated and encourages their students to do the same</h5>\n\t\n\t<h4>Interested? Send us your application at <a href=\"mailto:info.lkastaff@gmail.com\" target=\"_top\">info.lkastaff@gmail.com</a>, and we look forward to hearing from you!</h4>\n\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<meta charset=\"utf-8\">\n<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n<title>Login to Continue</title>\n<h2 class=\"page-header\">Login</h2>\n\n<div id=\"login-box\">\n\t<form (submit)=\"onLoginSubmit()\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Username</label>\n\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Enter username\" >\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Password</label>\n\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Enter password\">\n\t\t</div>\n\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n\t</form>\n</div>\n<br><br><br><br><br><br><br><br><br><br><br><br>\n<div class =\"btn-group btn-group-justified\">\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/english-writing']\">English Writing</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\n</div>\n<br>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n\t<meta charset=\"utf-8\">\n\t<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. We offer After School Programs, English Writing, Math Tutoring and much more! Learn more now!\"/>\n\t<title>Math</title>\n\n\t<h2 class=\"page-header\">Math</h2>\n\t<p>Math Description</p>\n\n\n\n\t<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n\t<div class =\"btn-group btn-group-justified\">\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/english-writing']\">English Writing</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\n\t\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\n\t</div>\n\t<br>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\r\n<meta charset=\"utf-8\">\r\n<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. Learn more now!\"/>\r\n\r\n<nav class=\"navbar navbar-default\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<!--\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t-->\r\n\t\t\t<a class=\"navbar-brand\" href=\"#\"><img [src]=\"fullImagePath\"></a>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n\t\t\t<ul class=\"nav navbar-nav navbar-left\">\r\n\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span></a></li>\r\n\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/contact']\">Contact Us</a></li>\r\n\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/after-school']\">After School</a></li>\r\n\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/english-writing']\">English Writing</a></li>\r\n\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/math']\">Math</a></li>\r\n\t\t\t\t<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a></li>\r\n\t\t\t</ul>\r\n\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n\t\t\t\t<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\r\n\t\t\t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\r\n\t\t\t\t<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\r\n\t\t\t\t<li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n\t\t\t</ul>\r\n\t\t</div><!--/.nav-collapse -->\r\n\t</div>\r\n</nav>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<meta charset=\"utf-8\">\n<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. Learn more now!\"/>\n<title>Profile</title>\n<div *ngIf=\"user\">\n\t<h2 class=\"page-header\">Welcome back {{user.name}}.</h2>\n\t<!--\n\t <ul class=\"list-group\">\n\t <li class=\"list-group-item\">Username: {{user.username}}</li>\n\t <li class=\"list-group-item\">Email: {{user.email}}</li>\n\t </ul>\n\t-->\n\t<p>Username: {{user.username}}</p>\n\t<p>Email: {{user.email}}</p>\n\n\t<br>\n\n\t<legend>Legend</legend>\n\t<p>Complete and of Excellent Qualty = C*</p>\n\t<p>Complete and of Acceptable Quality = C</p>\n\t<p>Late and Finished in Class = LFIC</p>\n\t<p>Incomplete = I</p>\n\t<p>Not Turned In = NTI</p>\n\t<p>Not Assigned = NA</p>\n\t<br>\n\t<b>Note:</b>\n\t<p>For Reading Comprehension, the story number assigned will match the week number.</p>\n\t<p>For Vocabulary, each student works at his/her own pace, so parents will need to check with the teacher if there are missing vocabulary assignments.</p>\n\t<p>For Essay, essays are assigned periodically and not weekly due to the need for re-writes. Therefore, a \"C\" indicates that either a first draft or later draft was turned in.</p>\n\t<p>Also, essays are often broken up into two parts, and only one part is due each week.</p>\n\t<p>For Grammar, assignments are assigned at most every other week.</p>\n\n\t<legend><br>Grades</legend>\n\t<table>\n\t\t<tr>\n\t\t\t<th>Week No.</th>\n\t\t\t<th>Reading Comprehension</th>\n\t\t\t<th>Vocabulary</th>\n\t\t\t<th>Essay</th>\n\t\t\t<th>Grammar</th>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 1</td>\n\t\t\t<td>{{user.rc1}}</td>\n\t\t\t<td>{{user.v1}}</td>\n\t\t\t<td>{{user.e1}}</td>\n\t\t\t<td>{{user.g1}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 2</td>\n\t\t\t<td>{{user.rc2}}</td>\n\t\t\t<td>{{user.v2}}</td>\n\t\t\t<td>{{user.e2}}</td>\n\t\t\t<td>NA</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 3</td>\n\t\t\t<td>{{user.rc3}}</td>\n\t\t\t<td>{{user.v3}}</td>\n\t\t\t<td>{{user.e3}}</td>\n\t\t\t<td>{{user.g3}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 4</td>\n\t\t\t<td>{{user.rc4}}</td>\n\t\t\t<td>{{user.v4}}</td>\n\t\t\t<td>{{user.e4}}</td>\n\t\t\t<td>NA</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 5</td>\n\t\t\t<td>{{user.rc5}}</td>\n\t\t\t<td>{{user.v5}}</td>\n\t\t\t<td>{{user.e5}}</td>\n\t\t\t<td>{{user.g5}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 6</td>\n\t\t\t<td>{{user.rc6}}</td>\n\t\t\t<td>{{user.v6}}</td>\n\t\t\t<td>{{user.e6}}</td>\n\t\t\t<td>NA</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 7</td>\n\t\t\t<td>{{user.rc7}}</td>\n\t\t\t<td>{{user.v7}}</td>\n\t\t\t<td>{{user.e7}}</td>\n\t\t\t<td>{{user.g7}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 8</td>\n\t\t\t<td>{{user.rc8}}</td>\n\t\t\t<td>{{user.v8}}</td>\n\t\t\t<td>{{user.e8}}</td>\n\t\t\t<td>NA</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 9</td>\n\t\t\t<td>{{user.rc9}}</td>\n\t\t\t<td>{{user.v9}}</td>\n\t\t\t<td>{{user.e9}}</td>\n\t\t\t<td>{{user.g9}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 10</td>\n\t\t\t<td>{{user.rc10}}</td>\n\t\t\t<td>{{user.v10}}</td>\n\t\t\t<td>{{user.e10}}</td>\n\t\t\t<td>NA</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 11</td>\n\t\t\t<td>{{user.rc11}}</td>\n\t\t\t<td>{{user.v11}}</td>\n\t\t\t<td>{{user.e11}}</td>\n\t\t\t<td>{{user.g11}}</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td>Week 12</td>\n\t\t\t<td>{{user.rc12}}</td>\n\t\t\t<td>{{user.v12}}</td>\n\t\t\t<td>{{user.e12}}</td>\n\t\t\t<td>NA</td>\n\t\t</tr>\n\t</table>\n\t<br><br><br>\n</div>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE HTML>\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"description\" content=\"Official website for Light of Knowledge Academy. Learn more now!\"/>\n<title>Register</title>\n</head>\n<h2 class=\"page-header\">Register</h2>\n<div id=\"register-box\">\n<form (submit)=\"onRegisterSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter full name\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Enter username (4-20 characters)\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Enter password (6-20 characters)\">\n\t</div>\n\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Create Account\">\n</form>\n</div>\n<br><br><br><br>\n<!--style=\"position: absolute; bottom:0%; right: 0%;\"-->\n<div class =\"btn-group btn-group-justified\">\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/after-school']\">After School</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/english-writing']\">Engish Writng</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/math']\">Math</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/enrichment-programs']\">Enrichment Programs</a>\n\t<a class=\"btn btn-default\" target=\"_top\" [routerLink]=\"['/join']\">Join Our Team Today!</a>\n</div>\n<br>\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(520);
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
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
// http://localhost:8080/
//# sourceMappingURL=C:/Users/Wendy/Desktop/LKA/LKA/angular-src/src/auth.service.js.map

/***/ })

},[723]);
//# sourceMappingURL=main.bundle.map