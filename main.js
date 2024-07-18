(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    background-color: #f0f0f0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n  }\r\n  \r\n  p {\r\n    font-size: 22px; /* Increased font size */\r\n    font-weight: 500;\r\n    color: #091664;\r\n    text-align: center;\r\n    line-height: 1.5;\r\n    margin-top: 50px; /* Increased margin-top */\r\n  }\r\n  \r\n  .top-bar {\r\n    background-color: white;\r\n    color: #333;\r\n    padding: 15px; /* Increased padding */\r\n    display: flex;\r\n    align-items: center;\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Slightly increased shadow */\r\n  }\r\n  \r\n  .title {\r\n    font-size: 28px; /* Increased font size */;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .title .highlight {\r\n    color: mediumvioletred;\r\n  }\r\n  \r\n  .container {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .input {\r\n    padding: 15px; /* Increased padding */\r\n    font-size: 18px; /* Increased font size */\r\n    margin: 15px 0; /* Increased margin */\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .fetch-button {\r\n    padding: 15px 25px; /* Increased padding */\r\n    font-size: 18px; /* Increased font size */\r\n    background-color: #043466;\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .fetch-button:hover {\r\n    background-color: #0056b3;\r\n  }\r\n  \r\n  .data-container {\r\n    margin: 25px; /* Increased margin */\r\n    background-color: #fff;\r\n    padding: 25px; /* Increased padding */\r\n    border: 1px solid #dee2e6;\r\n    border-radius: 5px;\r\n    width: 80%; /* Adjust width to fit nicely in the view */\r\n    max-width: 700px; /* Increased max width for larger screens */\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCx5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxlQUFlLEVBQUUsd0JBQXdCO0lBQ3pDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBRSx5QkFBeUI7RUFDN0M7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3Q0FBd0MsRUFBRSw4QkFBOEI7RUFDMUU7O0VBRUE7SUFDRSxlQUFlLEVBQUUsd0JBQXdCO0lBQ3pDLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWEsRUFBRSxzQkFBc0I7SUFDckMsZUFBZSxFQUFFLHdCQUF3QjtJQUN6QyxjQUFjLEVBQUUscUJBQXFCO0lBQ3JDLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0IsRUFBRSxzQkFBc0I7SUFDMUMsZUFBZSxFQUFFLHdCQUF3QjtJQUN6Qyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWSxFQUFFLHFCQUFxQjtJQUNuQyxzQkFBc0I7SUFDdEIsYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVUsRUFBRSwyQ0FBMkM7SUFDdkQsZ0JBQWdCLEVBQUUsMkNBQTJDO0VBQy9EIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDsgLyogSW5jcmVhc2VkIGZvbnQgc2l6ZSAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDkxNjY0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7IC8qIEluY3JlYXNlZCBtYXJnaW4tdG9wICovXHJcbiAgfVxyXG4gIFxyXG4gIC50b3AtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiAxNXB4OyAvKiBJbmNyZWFzZWQgcGFkZGluZyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpOyAvKiBTbGlnaHRseSBpbmNyZWFzZWQgc2hhZG93ICovXHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7IC8qIEluY3JlYXNlZCBmb250IHNpemUgKi87XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUgLmhpZ2hsaWdodCB7XHJcbiAgICBjb2xvcjogbWVkaXVtdmlvbGV0cmVkO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7IC8qIEluY3JlYXNlZCBwYWRkaW5nICovXHJcbiAgICBmb250LXNpemU6IDE4cHg7IC8qIEluY3JlYXNlZCBmb250IHNpemUgKi9cclxuICAgIG1hcmdpbjogMTVweCAwOyAvKiBJbmNyZWFzZWQgbWFyZ2luICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAuZmV0Y2gtYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDsgLyogSW5jcmVhc2VkIHBhZGRpbmcgKi9cclxuICAgIGZvbnQtc2l6ZTogMThweDsgLyogSW5jcmVhc2VkIGZvbnQgc2l6ZSAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzQ2NjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmZldGNoLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gIH1cclxuICBcclxuICAuZGF0YS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyNXB4OyAvKiBJbmNyZWFzZWQgbWFyZ2luICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjVweDsgLyogSW5jcmVhc2VkIHBhZGRpbmcgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogODAlOyAvKiBBZGp1c3Qgd2lkdGggdG8gZml0IG5pY2VseSBpbiB0aGUgdmlldyAqL1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDsgLyogSW5jcmVhc2VkIG1heCB3aWR0aCBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\n  <div class=\"title\">\n    Place<span class=\"highlight\">OS</span>\n  </div>\n</div>\n\n<p>Please enter your email address or scan your QR code.</p>\n\n<div class=\"container\">\n  <input type=\"text\" [(ngModel)]=\"param1\" placeholder=\"Enter email\" class=\"input\">\n  <button (click)=\"getPeople()\" class=\"fetch-button\">Fetch Details</button>\n</div>\n\n<div *ngIf=\"data\" class=\"data-container\">\n  <pre>{{ data | json }}</pre>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place.service */ "./src/app/place.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(place) {
        this.place = place;
        this.title = 'kiosk';
        this.param1 = '';
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        var params = { email: this.param1 };
        this.place.getData(params).subscribe(function (response) {
            _this.data = response;
        }, function (error) {
            console.error('Error fetching data', error);
        });
    };
    AppComponent.prototype.getPeople = function () {
        var _this = this;
        this.place.getData().subscribe(function (response) {
            _this.data = response;
        }, function (error) {
            console.error('Error fetching data', error);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_place_service__WEBPACK_IMPORTED_MODULE_2__["PlaceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/place.service.ts":
/*!**********************************!*\
  !*** ./src/app/place.service.ts ***!
  \**********************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this.apiUrl = "/api/staff/v1/bookings";
        this.peopleUrl = "/api/staff/v1/people";
        this.apiKey = "aed95f28b5a445eb2b30243a8524d85f.gN36Ag5rR7d7FMsfta5YNLi0TBCpxeyBopqTQvSueXo";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'X-API-Key': this.apiKey
            })
        };
    }
    PlaceService.prototype.getData = function (params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    httpParams = httpParams.set(key, params[key]);
                }
            }
        }
        return this.http.get(this.apiUrl, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ params: httpParams }, this.httpOptions));
    };
    PlaceService.prototype.getPeople = function (params) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (params) {
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    httpParams = httpParams.set(key, params[key]);
                }
            }
        }
        return this.http.get(this.peopleUrl, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ params: httpParams }, this.httpOptions));
    };
    PlaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlaceService);
    return PlaceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PCS\Desktop\placeOS custom app\kiosk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map