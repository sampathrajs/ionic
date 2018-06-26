webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.users = [{
                "username": "neels",
                "password": "1234"
            },
            {
                "username": "sampath",
                "password": "1234"
            },
            {
                "username": "demouser",
                "password": "1234"
            }];
    }
    AuthProvider.prototype.checkuser = function (usercredientals) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var isvalid = false;
            _this.users.forEach(function (user) {
                if (usercredientals.username == user.username && usercredientals.password == user.password) {
                    isvalid = true;
                }
            });
            if (isvalid) {
                observer.next({
                    "status": "valid"
                });
            }
            else {
                observer.next({
                    "status": "invalid"
                });
            }
            observer.complete();
        });
    };
    AuthProvider.prototype.setloggeduser = function (user) {
        window.localStorage.setItem("loggeduser", JSON.stringify(user));
        return true;
    };
    AuthProvider.prototype.getloggeduser = function () {
        var loggeduser = window.localStorage.getItem("loggeduser");
        if (loggeduser) {
            return JSON.parse(loggeduser);
        }
        return {};
    };
    AuthProvider.prototype.removeloggeduser = function () {
        if (window.localStorage.getItem("loggeduser")) {
            window.localStorage.removeItem("loggeduser");
        }
        return true;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mycart_mycart__ = __webpack_require__(27);
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
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, home, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = home;
        this.app = app;
        this.ProcessItems = [];
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CheckoutPage');
        this.ProcessItems = this.home.getCheckOutItems();
        this.totalamount = 0;
        this.ProcessItems.forEach(function (item) {
            _this.totalamount = _this.totalamount + parseFloat(item.price.substring(1));
        });
    };
    CheckoutPage.prototype.pay = function () {
        this.home.removeCartItems(this.ProcessItems);
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */]);
    };
    CheckoutPage.prototype.gotohome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    CheckoutPage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_mycart_mycart__["a" /* MycartPage */]);
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\checkout\checkout.html"*/'<!--\n  Generated template for the CheckoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton="true">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title align="center">Payment</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="gocart()">\n          <ion-icon name="ios-cart"></ion-icon>\n        </button>\n        <button ion-button (click)="gohome()">\n          <ion-icon name="ios-home"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content >\n    <ion-row>\n        <ion-col col-12>\n          <ion-list>\n            <ion-list-header>\n              <p ion-text color="orange">Items Added for Payment</p>\n            </ion-list-header>\n            <ion-item *ngFor="let item of ProcessItems" no-lines>\n              <p item-start>{{item.desc}}</p>\n              <p item-end>{{item.price}}</p>\n            </ion-item>            \n            <ion-item>\n                <p item-start ion-text color="orange">\n                  <b>Total</b>\n                </p>\n                <p item-end ion-text color="orange">\n                  <b>${{totalamount}}</b>\n                </p>\n              </ion-item>\n          </ion-list>         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 padding>\n          <button ion-button block color="orange" (click)="pay()">\n            Pay Now\n          </button>\n        </ion-col>\n      </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_home_home__["a" /* HomeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mycart_mycart__ = __webpack_require__(27);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.backtohome = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PaymentPage.prototype.gotohome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PaymentPage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mycart_mycart__["a" /* MycartPage */]);
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton="true">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title align="center">Payment</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="gocart()">\n          <ion-icon name="ios-cart"></ion-icon>\n        </button>\n        <button ion-button (click)="gohome()">\n          <ion-icon name="ios-home"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content >\n    <ion-row>\n        <ion-col col-12 padding align="center">\n          <ion-icon name="ios-checkmark-circle-outline" color="secondary" [ngClass]="\'completedicon\'"></ion-icon>\n          <p ion-text color="gray">Payment Completed, your product is ready to shipping</p>\n          <button ion-button color="secondary" (click)="backtohome()">\n            Back to Home\n          </button>\n        </ion-col>\n      </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/checkout/checkout.module": [
		284,
		4
	],
	"../pages/mycart/mycart.module": [
		285,
		3
	],
	"../pages/payment/payment.module": [
		286,
		2
	],
	"../pages/product-detail/product-detail.module": [
		287,
		1
	],
	"../pages/search/search.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
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
    function LoginComponent(navCtrl, app, auth, events) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.auth = auth;
        this.events = events;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
    }
    LoginComponent.prototype.checkuser = function () {
        var _this = this;
        var isrequirederror = this.loginForm.get('username').errors && (this.loginForm.get('username').errors.required || this.loginForm.get('password').errors.required);
        if (!isrequirederror) {
            var user = {
                "username": this.loginForm.value.username,
                "password": this.loginForm.value.password
            };
            this.auth.checkuser(user).subscribe(function (res) {
                if (res.status == "valid") {
                    _this.auth.setloggeduser(user);
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                    _this.events.publish('user:changed', user);
                }
                else {
                    _this.message = "Invalid username or password";
                }
            });
        }
        else {
            this.message = "username and password is required";
        }
    };
    LoginComponent.prototype.skiplogin = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\components\login\login.html"*/'<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 [ngClass]="\'loginform\'">\n				<p align="center"><ion-icon name="ios-cart-outline" [ngClass]="\'logincarticon\'"></ion-icon></p>\n				<h4 align="center">Sign in</h4>\n				<form [formGroup]="loginForm">\n					<ion-input type="text" placeholder="Username" formControlName="username"></ion-input>\n					<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n					<p ion-text color="danger" align="center">{{message}}</p>\n					<button ion-button block color="orange" (click)="checkuser()">\n						Sign in\n					</button>\n				</form>\n				<p ion-text align="center" color="gray">Create a new account?\n					<span ion-text color="orange">Sign up</span>\n				</p>\n				<p ion-text align="center" color="gray">Forgot Password</p>\n				<p ion-text align="center" color="primary" (click)="skiplogin()">Skip login</p>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\components\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_product_product__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_detail_product_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_mycart_mycart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Main Components



// Providers


// Components and Pages








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mycart_mycart__["a" /* MycartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* PaymentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mycart/mycart.module#MycartPageModule', name: 'MycartPage', segment: 'mycart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-detail/product-detail.module#ProductDetailPageModule', name: 'ProductDetailPage', segment: 'product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_mycart_mycart__["a" /* MycartPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_payment_payment__["a" /* PaymentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_home_home__["a" /* HomeProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mycart_mycart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(44);
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
    function HomePage(navCtrl, home, events) {
        this.navCtrl = navCtrl;
        this.home = home;
        this.events = events;
        this.products = [];
        var b = this;
        this.products = this.home.getProducts();
        events.subscribe('badge:changed', function (badge) {
            b.badgeCount = badge;
        });
    }
    HomePage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mycart_mycart__["a" /* MycartPage */]);
    };
    HomePage.prototype.gotosearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Eshop</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="gotosearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button (click)="gotocart()">\n        <ion-icon name="ios-cart">\n            <ion-badge id="notifications-badge" *ngIf="badgeCount>0" color="danger">{{badgeCount}}</ion-badge>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col no-padding col-6 *ngFor="let p of products">\n        <product [product]="p"></product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_home_home__["a" /* HomeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_checkout__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(44);
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
 * Generated class for the MycartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MycartPage = /** @class */ (function () {
    function MycartPage(navCtrl, navParams, home) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = home;
        this.cartItems = [];
    }
    MycartPage.prototype.ionViewDidLoad = function () {
        this.cartItems = this.home.getCartItems();
        console.log(this.cartItems.length);
    };
    MycartPage.prototype.updateitem = function (id) {
        this.home.updateCart(id);
    };
    MycartPage.prototype.processtoCheckout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_checkout__["a" /* CheckoutPage */]);
    };
    MycartPage.prototype.gotohome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MycartPage.prototype.gotosearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    MycartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mycart',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\mycart\mycart.html"*/'<!--\n  Generated template for the MycartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">My Cart</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="gotosearch()">\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n      <button ion-button (click)="gotohome()">\n        <ion-icon name="ios-home"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n      <ion-col col-12 [ngClass]="\'cartempty\'" *ngIf="cartItems.length==0" align="center">\n          <ion-icon name="ios-cart" color="gray"></ion-icon>\n          <p ion-text color="gray">No Items added in the cart, your cart is empty</p>\n          <p ion-text color="orange" (click)="gotohome()"><b>Back to Home</b></p>\n      </ion-col>\n    <ion-col col-12 col-sm-6 col-md-4  *ngFor="let cartItem of cartItems">\n      <ion-card no-padding>\n        <ion-card-content>\n          <ion-checkbox [ngClass]="\'addcheckbox\'" mode="ios" color="orange" checked="{{cartItem.checked}}" (ionChange)="updateitem(cartItem.cart_id)"></ion-checkbox>\n          <ion-img [ngClass]="\'relatedproductimg\'" src="{{cartItem.img}}">\n          </ion-img>\n          <h5 [ngClass]="\'company ellipsis\'" ion-text color="dark">\n            <strong>{{cartItem.name}}</strong>\n          </h5>\n          <p [ngClass]="\'product ellipsis\'" ion-text color="dark">{{cartItem.desc}}</p>\n          <p [ngClass]="\'details ellipsis\'">Price:\n            <span ion-text color="danger">\n              <b>{{cartItem.price}}</b>\n            </span>\n          </p>\n        </ion-card-content>\n      </ion-card>   \n      \n    </ion-col>    \n  </ion-row>\n  <ion-row *ngIf="cartItems.length>0">\n    <ion-col col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 padding>\n      <button ion-button block color="orange" (click)="processtoCheckout()">\n        Proceed to checkout\n      </button>\n    </ion-col>\n  </ion-row>\n  <!-- \n  <ion-row>\n    <ion-col col-12>\n      <ion-list>\n        <ion-list-header>\n          <p ion-text color="orange">Items Added for Payment</p>\n        </ion-list-header>\n        <ion-item>\n          <p item-start>School bag gray</p>\n          <p item-end>$30</p>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>\n          <p item-start>School bag gray</p>\n          <p item-end>$30</p>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>\n          <p item-start>School bag gray</p>\n          <p item-end>$30</p>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-item>\n          <p item-start>School bag gray</p>\n          <p item-end>$30</p>\n        </ion-item>\n      </ion-list>\n      <ion-item-divider></ion-item-divider>\n      <ion-list>\n        <ion-item>\n          <p item-start ion-text color="orange">\n            <b>Total</b>\n          </p>\n          <p item-end ion-text color="orange">\n            <b>$300</b>\n          </p>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12 padding>\n      <button ion-button block color="orange">\n        Pay Now\n      </button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12 padding align="center">\n      <ion-icon name="ios-checkmark-circle-outline" color="secondary" [ngClass]="\'completedicon\'"></ion-icon>\n      <p ion-text color="gray">Payment Completed, your product is ready to shipping</p>\n      <button ion-button color="secondary">\n        Back to Home\n      </button>\n    </ion-col>\n  </ion-row> -->\n</ion-content>'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\mycart\mycart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_home_home__["a" /* HomeProvider */]])
    ], MycartPage);
    return MycartPage;
}());

//# sourceMappingURL=mycart.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mycart_mycart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, auth, events) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.auth = auth;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.loggeduser = {};
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'My Cart', component: __WEBPACK_IMPORTED_MODULE_6__pages_mycart_mycart__["a" /* MycartPage */] }
        ];
        this.loggeduser = this.auth.getloggeduser();
        var me = this;
        events.subscribe('user:changed', function (user) {
            me.loggeduser = user;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.logout = function () {
        this.auth.removeloggeduser();
        this.loggeduser = {};
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.gologin = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_login_login__["a" /* LoginComponent */]);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\app\app.html"*/'<ion-menu [content]="content" persistent="true">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <span *ngIf="loggeduser.username"><ion-icon name="ios-contact"></ion-icon> {{loggeduser.username}}</span>\n        <span *ngIf="!loggeduser.username" menuClose (click)="gologin()"><ion-icon name="ios-contact"></ion-icon> <i>Hello, Sign in</i></span>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding>\n    <ion-list>\n      <button menuClose ion-item no-lines [ngClass]="\'menuitem\'" *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <ion-item menuClose no-lines *ngIf="!loggeduser.username" (click)="gologin()">\n          <p ion-text color="orange"><b>Sign in</b></p>\n      </ion-item>\n      <ion-item menuClose no-lines *ngIf="loggeduser.username" (click)="logout()">\n          <p ion-text color="orange"><b>Sign out</b></p>\n      </ion-item> \n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_product_detail_product_detail__ = __webpack_require__(54);
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
 * Generated class for the ProductComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProductComponent = /** @class */ (function () {
    function ProductComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProductComponent.prototype.openproductpage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_product_detail_product_detail__["a" /* ProductDetailPage */], { id: id });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'product',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\components\product\product.html"*/'<ion-card (click)="openproductpage(product.id)">\n  <img [ngClass]="\'displayimg\'" src="{{product.img}}"/>\n  <ion-card-content>\n      <h5 [ngClass]="\'company ellipsis\'" ion-text color="dark"><strong>{{product.name}}</strong></h5>\n      <p [ngClass]="\'product ellipsis\'" ion-text color="dark">{{product.desc}}</p>\n      <h4 ion-text color="danger"><b>{{product.price}}</b></h4>      \n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\components\product\product.html"*/,
            inputs: ['product'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ProductComponent);
    return ProductComponent;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
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
// import { HttpClient } from '@angular/common/http';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HomeProvider = /** @class */ (function () {
    function HomeProvider() {
        this.products = [{
                "id": 100,
                "name": "Nike",
                "desc": "School bag - gray",
                "price": "$300",
                "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg",
                "relevantProduct": [
                    {
                        "id": 104,
                        "name": "Reebook",
                        "desc": "Bags - black color",
                        "price": "$110",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl"
                    },
                    {
                        "id": 105,
                        "name": "Nike",
                        "desc": "Mountain Climber bag",
                        "price": "$210",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg"
                    }
                ]
            }, {
                "id": 101,
                "name": "Reebook",
                "desc": "Watches for mens",
                "price": "$12",
                "img": "https://images-na.ssl-images-amazon.com/images/I/71aYczGyLDL._UL1500_.jpg",
                "relevantProduct": [
                    {
                        "id": 103,
                        "name": "Espoir",
                        "desc": "Watch for stylish men",
                        "price": "$30",
                        "img": "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg"
                    },
                    {
                        "id": 104,
                        "name": "Reebook",
                        "desc": "Bags - black color",
                        "price": "$110",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl"
                    }
                ]
            }, {
                "id": 102,
                "name": "General Electrical",
                "desc": "Chip reader",
                "price": "$30",
                "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
                "relevantProduct": [
                    {
                        id: 108,
                        "name": "TM Electricals",
                        "desc": "Chip reader ",
                        "price": "$25",
                        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
                    },
                    {
                        id: 109,
                        "name": "VC Electricals",
                        "desc": "Chip reader",
                        "price": "$40",
                        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
                    }
                ]
            }, {
                "id": 103,
                "name": "Espoir",
                "desc": "Watch for stylish men",
                "price": "$30",
                "img": "https://images-na.ssl-images-amazon.com/images/I/71X-m4MRMFL._UL1500_.jpg",
                "relevantProduct": [
                    {
                        "id": 101,
                        "name": "Reebook",
                        "desc": "Watches for mens",
                        "price": "$12",
                        "img": "https://images-na.ssl-images-amazon.com/images/I/71aYczGyLDL._UL1500_.jpg"
                    }
                ]
            },
            {
                "id": 104,
                "name": "Reebook",
                "desc": "Bags - black color",
                "price": "$110",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl",
                "relevantProduct": [
                    {
                        "id": 100,
                        "name": "Nike",
                        "desc": "School bag - gray",
                        "price": "$300",
                        "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg"
                    },
                    {
                        "id": 105,
                        "name": "Nike",
                        "desc": "Mountain Climber bag",
                        "price": "$210",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg"
                    }
                ]
            },
            {
                "id": 105,
                "name": "Nike",
                "desc": "Mountain Climber bag",
                "price": "$210",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg",
                "relevantProduct": [
                    {
                        "id": 104,
                        "name": "Reebook",
                        "desc": "Bags - black color",
                        "price": "$110",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl",
                    },
                    {
                        "id": 100,
                        "name": "Nike",
                        "desc": "School bag - gray",
                        "price": "$300",
                        "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg"
                    }
                ]
            },
            {
                "id": 106,
                "name": "Aldof",
                "desc": "Causal Tshirts - blue tshirt",
                "price": "$210",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                "relevantProduct": [
                    {
                        "id": 110,
                        "name": "Polo",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$250",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                    },
                    {
                        "id": 111,
                        "name": "Parx",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$400",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                    },
                    {
                        "id": 112,
                        "name": "Polo",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$350",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                    }
                ]
            },
            {
                "id": 107,
                "name": "Britain",
                "desc": "Handbag for womens",
                "price": "$350",
                "img": "https://cdn.shopclues.com/images/thumbnails/37639/320/320/Sn72main1468223963.jpg",
                "relevantProduct": [
                    {
                        "id": 104,
                        "name": "Reebook",
                        "desc": "Bags - black color",
                        "price": "$110",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWB84rYWdFWZt3knybBD4Djd5TSu62mjx6XJTe5MZ-Uo_HMAl",
                    },
                    {
                        "id": 100,
                        "name": "Nike",
                        "desc": "School bag - gray",
                        "price": "$300",
                        "img": "https://5.imimg.com/data5/CC/JL/MY-29211282/designer-school-bag-500x500.jpg"
                    }, {
                        "id": 105,
                        "name": "Nike",
                        "desc": "Mountain Climber bag",
                        "price": "$210",
                        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZsfmzX3Er0bo0vjZy2oV2zZtitT4WJ58QmaKpZQVD6EEfNWg"
                    }
                ]
            },
            {
                id: 108,
                "name": "TM Electricals",
                "desc": "Chip reader ",
                "price": "$25",
                "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
                "relevantProduct": [
                    {
                        "name": "VC Electricals",
                        "desc": "Chip reader",
                        "price": "$40",
                        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
                    }, {
                        "id": 102,
                        "name": "General Electrical",
                        "desc": "Chip reader",
                        "price": "$30",
                        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
                    }
                ]
            }, {
                id: 109,
                "name": "VC Electricals",
                "desc": "Chip reader",
                "price": "$40",
                "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539",
                "relevantProduct": [
                    {
                        "id": 102,
                        "name": "General Electrical",
                        "desc": "Chip reader",
                        "price": "$30",
                        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
                    },
                    {
                        id: 108,
                        "name": "TM Electricals",
                        "desc": "Chip reader ",
                        "price": "$25",
                        "img": "https://solidshop-production-f.squarecdn.com/spree/images/31/modal/tile-contactless-chip-reader.jpg?1474072539"
                    }
                ]
            }, {
                "id": 110,
                "name": "Polo",
                "desc": "Causal Tshirts - blue tshirt",
                "price": "$250",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                "relevantProduct": [
                    {
                        "id": 111,
                        "name": "Parx",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$400",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                    },
                    {
                        "id": 112,
                        "name": "Polo",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$350",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                    }
                ]
            },
            {
                "id": 111,
                "name": "Parx",
                "desc": "Causal Tshirts - blue tshirt",
                "price": "$400",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                "relevantProduct": [
                    {
                        "id": 110,
                        "name": "Polo",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$250",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                    },
                    {
                        "id": 112,
                        "name": "Polo",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$350",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                    }
                ]
            },
            {
                "id": 112,
                "name": "Polo",
                "desc": "Causal Tshirts - blue tshirt",
                "price": "$350",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg",
                "relevantProduct": [
                    {
                        "id": 110,
                        "name": "Polo",
                        "desc": "Causal Tshirts - blue tshirt",
                        "price": "$250",
                        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
                    }
                ]
            }];
        this.cartItems = [];
        this.cartID = 0;
    }
    HomeProvider.prototype.getCount = function () {
        return this.cartItems.length;
    };
    HomeProvider.prototype.getProducts = function () {
        return this.products;
    };
    HomeProvider.prototype.getProduct = function (id) {
        return this.products.filter(function (item) { return item.id == id; });
    };
    HomeProvider.prototype.getCartItems = function () {
        return this.cartItems;
    };
    HomeProvider.prototype.getCartID = function () {
        var currentcartID = this.cartID;
        this.cartID = this.cartID + 1;
        return currentcartID;
    };
    HomeProvider.prototype.setCartItems = function (item) {
        item.cart_id = this.getCartID();
        this.cartItems.push(item);
    };
    HomeProvider.prototype.updateCart = function (cart_id) {
        this.cartItems.forEach(function (Item) {
            if (Item.cart_id == cart_id) {
                if (Item.checked) {
                    Item.checked = false;
                }
                else {
                    Item.checked = true;
                }
            }
        });
    };
    HomeProvider.prototype.getCheckOutItems = function () {
        return this.cartItems.filter(function (item) { return item.checked == true; });
    };
    HomeProvider.prototype.removeCartItems = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.cartItems = _this.cartItems.filter(function (cartitem) { return cartitem.id != item.id; });
        });
    };
    HomeProvider.prototype.searchItems = function (val) {
        var filterproducts = [];
        if (val && val.trim() !== '') {
            filterproducts = this.products.filter(function (item) {
                return item.name.toLowerCase().includes(val.toLowerCase());
            });
        }
        return filterproducts;
    };
    HomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HomeProvider);
    return HomeProvider;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mycart_mycart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__ = __webpack_require__(54);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, home) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = home;
        this.items = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mycart_mycart__["a" /* MycartPage */]);
    };
    SearchPage.prototype.gotohome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SearchPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        this.searchtext = val;
        var searchresults = this.home.searchItems(val);
        if (searchresults) {
            this.items = searchresults;
        }
    };
    SearchPage.prototype.openProduct = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_detail_product_detail__["a" /* ProductDetailPage */], { id: id });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align="center">Eshop</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="gotohome()">\n        <ion-icon name="ios-home"></ion-icon>\n      </button>\n      <button ion-button (click)="gotocart()">\n        <ion-icon name="ios-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="filterItems($event)"></ion-searchbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col col-12 col-sm-6 col-md-6 *ngFor="let item of items">\n      <ion-card no-padding (click)="openProduct(item.id)">\n        <ion-card-content>\n          <img [ngClass]="\'relatedproductimg\'" src="{{item.img}}"/>\n          <h5 [ngClass]="\'company ellipsis\'" ion-text color="dark">\n            <strong>{{item.name}}</strong>\n          </h5>\n          <p [ngClass]="\'product ellipsis\'" ion-text color="dark">{{item.desc}}</p>\n          <p [ngClass]="\'details ellipsis\'">Price:\n            <span ion-text color="danger">\n              <b>{{item.price}}</b>\n            </span>\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-col>\n    <ion-col col-12 [ngClass]="\'nosearchresult\'" align="center" *ngIf="items.length==0  && searchtext">\n        <ion-icon color="gray" name="ios-alert-outline"></ion-icon>\n        <p ion-text color="gray">No results found for <b>&quot;{{searchtext}}&quot;</b></p>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_home_home__["a" /* HomeProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_mycart_mycart__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(44);
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
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(navCtrl, navParams, home, app, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = home;
        this.app = app;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.selectedproduct = {};
        this.badgeCount = 0;
        this.id = this.navParams.get('id');
    }
    ProductDetailPage_1 = ProductDetailPage;
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        this.selectedproduct = this.home.getProduct(this.id)[0];
    };
    ProductDetailPage.prototype.gotohome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    ProductDetailPage.prototype.gotocart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_mycart_mycart__["a" /* MycartPage */]);
    };
    ProductDetailPage.prototype.gotosearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    ProductDetailPage.prototype.addItem = function (selectedproduct) {
        selectedproduct.checked = true;
        var toast = this.toastCtrl.create({
            message: 'Item added to cart',
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "ok"
        });
        toast.present();
        this.home.setCartItems(Object.assign({}, selectedproduct));
        this.events.publish('badge:changed', this.count);
        var b = this;
        this.count = this.home.getCount();
        this.events.subscribe('badge:changed', function (badge) {
            b.badgeCount = badge;
        });
    };
    ProductDetailPage.prototype.openproductpage = function (id) {
        this.navCtrl.push(ProductDetailPage_1, { id: id });
    };
    ProductDetailPage = ProductDetailPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\product-detail\product-detail.html"*/'<!--\n  Generated template for the ProductDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar hideBackButton="true">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title align="center" (click)="gotohome()">Eshop</ion-title>\n		<ion-buttons end>\n			<button ion-button (click)="gotosearch()">\n				<ion-icon name="search"></ion-icon>\n			</button>\n			<button ion-button (click)="gotocart()">\n				<ion-icon name="ios-cart" >			\n							\n					<ion-badge id="notifications-badge" *ngIf="badgeCount>0" color="danger">{{badgeCount}}</ion-badge>\n				</ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12 align="right">\n				<p ion-text color="primary" (click)="gotohome()">Back to Home</p>\n			</ion-col>\n			<ion-col col-12 no-padding align="center">\n				<ion-slides pager>\n					<ion-slide>\n						<ion-img [ngClass]="\'productimg\'" src="{{selectedproduct.img}}">\n						</ion-img>\n					</ion-slide>\n					<ion-slide>\n						<ion-img [ngClass]="\'productimg\'" src="{{selectedproduct.img}}">\n						</ion-img>\n					</ion-slide>\n					<ion-slide>\n						<ion-img [ngClass]="\'productimg\'" src="{{selectedproduct.img}}">\n						</ion-img>\n					</ion-slide>\n				</ion-slides>\n			</ion-col>\n			<ion-col col-12>\n				<h5 ion-text color="dark">\n					<strong>{{selectedproduct.name}}</strong>\n				</h5>\n				<p ion-text color="gray">{{selectedproduct.desc}}</p>\n				<p ion-text>Price :\n					<span ion-text color="danger">{{selectedproduct.price}}</span>\n				</p>\n			</ion-col>\n			<ion-col col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3>\n				<button ion-button block color="orange" icon-start (click)="addItem(selectedproduct)">\n					<ion-icon name="cart"></ion-icon>\n					Add to Cart\n				</button>\n			</ion-col>\n			<ion-col col-12>\n				<p color="dark">Related Products</p>\n			</ion-col>\n\n			<ion-col col-12 col-sm-6 col-md-4 *ngFor="let relproduct of selectedproduct.relevantProduct">\n				<ion-card (click)="openproductpage(relproduct.id)">\n					<ion-card-content>\n						<ion-img [ngClass]="\'relatedproductimg\'" src="{{relproduct.img}}">\n						</ion-img>\n						<h5 ion-text color="dark">\n							<strong>{{relproduct.name}}</strong>\n						</h5>\n						<p [ngClass]="\'product ellipsis\'" ion-text color="dark">{{relproduct.desc}}</p>\n						<h4 [ngClass]="\'details ellipsis\'" ion-text color="danger">\n							<b>{{relproduct.price}}</b>\n						</h4>\n					</ion-card-content>\n				</ion-card>\n			</ion-col>\n\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\sampath.k\Desktop\Internal\Ionic\eshop@alpha_1.0.0\src\pages\product-detail\product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_home_home__["a" /* HomeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ProductDetailPage);
    return ProductDetailPage;
    var ProductDetailPage_1;
}());

//# sourceMappingURL=product-detail.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map