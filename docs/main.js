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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<h1>{{ title }}</h1>\n\n<hr>\n<app-counter></app-counter>\n<app-heroes-hero></app-heroes-hero>\n\n<app-heroes-list></app-heroes-list>-->\n\n<app-dbz-main-page></app-dbz-main-page>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'First Angular App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _counter_components_counter_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter/components/counter.module */ "./src/app/counter/components/counter.module.ts");
/* harmony import */ var _heroes_components_heroes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heroes/components/heroes.module */ "./src/app/heroes/components/heroes.module.ts");
/* harmony import */ var _dbz_dbz_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dbz/dbz.module */ "./src/app/dbz/dbz.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _counter_components_counter_module__WEBPACK_IMPORTED_MODULE_4__["CounterModule"],
                _heroes_components_heroes_module__WEBPACK_IMPORTED_MODULE_5__["HeroesModule"],
                _dbz_dbz_module__WEBPACK_IMPORTED_MODULE_6__["DbzModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter/components/counter.module.ts":
/*!******************************************************!*\
  !*** ./src/app/counter/components/counter.module.ts ***!
  \******************************************************/
/*! exports provided: CounterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterModule", function() { return CounterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/components/counter/counter.component.ts");



var CounterModule = /** @class */ (function () {
    function CounterModule() {
    }
    CounterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"]
            ],
            exports: [
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"]
            ]
        })
    ], CounterModule);
    return CounterModule;
}());



/***/ }),

/***/ "./src/app/counter/components/counter/counter.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/counter/components/counter/counter.component.ts ***!
  \*****************************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        this.counter = 10;
    }
    CounterComponent.prototype.increaseBy = function (value) {
        this.counter += value;
    };
    CounterComponent.prototype.resetCounter = function () {
        this.counter = 10;
    };
    CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-counter',
            template: "\n    <h3> Counter: {{ counter }} </h3>\n\n    <button (click)=\"increaseBy(1)\">+1</button>\n    <button (click)=\"resetCounter()\">Reset</button>\n    <button (click)=\"increaseBy(-1)\">-1</button>\n    <hr>\n\n  ",
        })
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/dbz/components/add-character/add-character.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/dbz/components/add-character/add-character.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Riei9jb21wb25lbnRzL2FkZC1jaGFyYWN0ZXIvYWRkLWNoYXJhY3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dbz/components/add-character/add-character.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dbz/components/add-character/add-character.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Agregar personaje</h4>\n\n<form class=\"row\" (ngSubmit)=\"emitCharacter()\">\n  <input type=\"text\" [(ngModel)]=\"character.name\" name=\"name\" class=\"form-control mb-2\" placeholder=\"Nombre\">\n  <input type=\"number\" [(ngModel)]=\"character.power\" name=\"power\" class=\"form-control mb-2\" placeholder=\"Poder\">\n\n  <button type=\"submit\" class=\"btn btn-primary\">Agregar</button>\n\n  <!--<pre> {{character | json }} </pre>-->\n</form>\n"

/***/ }),

/***/ "./src/app/dbz/components/add-character/add-character.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dbz/components/add-character/add-character.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCharacterComponent", function() { return AddCharacterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCharacterComponent = /** @class */ (function () {
    function AddCharacterComponent() {
        this.onNewCharacter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.character = {
            name: '',
            power: 0
        };
    }
    AddCharacterComponent.prototype.emitCharacter = function () {
        console.log(this.character);
        if (this.character.name.length === 0)
            return;
        this.onNewCharacter.emit(this.character);
        this.character = { name: '', power: 0 };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddCharacterComponent.prototype, "onNewCharacter", void 0);
    AddCharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dbz-add-character',
            template: __webpack_require__(/*! ./add-character.component.html */ "./src/app/dbz/components/add-character/add-character.component.html"),
            styles: [__webpack_require__(/*! ./add-character.component.css */ "./src/app/dbz/components/add-character/add-character.component.css")]
        })
    ], AddCharacterComponent);
    return AddCharacterComponent;
}());



/***/ }),

/***/ "./src/app/dbz/components/list/list.component.css":
/*!********************************************************!*\
  !*** ./src/app/dbz/components/list/list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGJ6L2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGJ6L2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dbz/components/list/list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/dbz/components/list/list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Listado</h4>\r\n<ul class=\"list-group\">\r\n  <li *ngFor=\"let character of characterList;\r\n      let i = index;\r\n      let isFirst = first;\r\n      let isLast = last;\r\n      let isEven = even;\r\n      let isOdd = odd;\"\r\n      class=\"list-group-item d-flex justify-content-between\"\r\n      [ngClass]=\"{\r\n        'list-group-item-dark': isLast,\r\n        'list-group-item-primary': isEven\r\n    }\">\r\n    <div>\r\n      <span class=\"text-primary\"> {{ i + 1 }}. </span>\r\n      <span>{{ character.name }} - </span>\r\n      <strong> Power: </strong>\r\n      <span>{{ character.power }}</span>\r\n    </div>\r\n\r\n    <button class=\"btn btn-danger\" (click)=\"onDeleteCharacter( character.id )\">X</button>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/dbz/components/list/list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dbz/components/list/list.component.ts ***!
  \*******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.characterList = [{
                name: 'Trunks',
                power: 10
            }];
        //onDeleteID = index value: number
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListComponent.prototype.onDeleteCharacter = function (id) {
        if (!id)
            return;
        this.onDelete.emit(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListComponent.prototype, "characterList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "onDelete", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dbz-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/dbz/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/dbz/components/list/list.component.css")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/dbz/dbz.module.ts":
/*!***********************************!*\
  !*** ./src/app/dbz/dbz.module.ts ***!
  \***********************************/
/*! exports provided: DbzModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbzModule", function() { return DbzModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main-page.component */ "./src/app/dbz/pages/main-page.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/dbz/components/list/list.component.ts");
/* harmony import */ var _components_add_character_add_character_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-character/add-character.component */ "./src/app/dbz/components/add-character/add-character.component.ts");







var DbzModule = /** @class */ (function () {
    function DbzModule() {
    }
    DbzModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pages_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _components_add_character_add_character_component__WEBPACK_IMPORTED_MODULE_6__["AddCharacterComponent"]
            ],
            exports: [
                _pages_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], DbzModule);
    return DbzModule;
}());



/***/ }),

/***/ "./src/app/dbz/pages/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/dbz/pages/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>DBZ Main Page</h1>\r\n<hr>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <!--<dbz-list [characterList]=\"dbzService.characters\" (ondDelete)=\"dbzService.onDeleteCharacter($event)\"></dbz-list>-->\r\n    <dbz-list [characterList]=\"characters\" (onDelete)=\"onDeleteCharacter($event)\"></dbz-list>\r\n  </div>\r\n\r\n  <div class=\"col\">\r\n    <dbz-add-character (onNewCharacter)=\"onNewCharacter($event)\"></dbz-add-character>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dbz/pages/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dbz/pages/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dbz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dbz.service */ "./src/app/dbz/services/dbz.service.ts");



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(dbzService) {
        this.dbzService = dbzService;
    }
    Object.defineProperty(MainPageComponent.prototype, "characters", {
        get: function () {
            return this.dbzService.characters.slice();
        },
        enumerable: true,
        configurable: true
    });
    MainPageComponent.prototype.onDeleteCharacter = function (id) {
        this.dbzService.deleteCharacterByID(id);
    };
    MainPageComponent.prototype.onNewCharacter = function (character) {
        this.dbzService.addCharacter(character);
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dbz-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/dbz/pages/main-page.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dbz_service__WEBPACK_IMPORTED_MODULE_2__["DbzService"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/dbz/services/dbz.service.ts":
/*!*********************************************!*\
  !*** ./src/app/dbz/services/dbz.service.ts ***!
  \*********************************************/
/*! exports provided: DbzService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbzService", function() { return DbzService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var DbzService = /** @class */ (function () {
    function DbzService() {
        this.characters = [{
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
                name: 'Krillin',
                power: 1000
            },
            {
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
                name: 'Goku',
                power: 9500
            },
            {
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
                name: 'Vegeta',
                power: 7500
            }];
    }
    DbzService.prototype.addCharacter = function (character) {
        var newCharacter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])() }, character);
        this.characters.push(newCharacter);
    };
    //onDeleteCharacter( index: number) {
    //this.characters.splice(index,1);
    DbzService.prototype.deleteCharacterByID = function (id) {
        if (!id)
            return;
        this.characters = this.characters.filter(function (character) { return character.id !== id; });
    };
    DbzService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], DbzService);
    return DbzService;
}());



/***/ }),

/***/ "./src/app/heroes/components/hero/hero.component.css":
/*!***********************************************************!*\
  !*** ./src/app/heroes/components/hero/hero.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  font-size: 50px;\r\n}\r\n\r\ndd {\r\n  font-size: 2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlcm9lcy9jb21wb25lbnRzL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG5cclxuZGQge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/heroes/components/hero/hero.component.html":
/*!************************************************************!*\
  !*** ./src/app/heroes/components/hero/hero.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ name }}</h1>\n\n<dl>\n  <td>Nombre:</td>\n  <dd> {{ name }} </dd>\n\n  <td>Edad:</td>\n  <dd> {{ age }} </dd>\n\n  <td>Método:</td>\n  <dd> {{ getHeroDescription() }} </dd>\n\n  <td>Capitalizado:</td>\n  <dd> {{ capitalizedName }} </dd>\n</dl>\n\n<button *ngIf=\"name !== 'Spiderman'\" class=\"btn btn-primary mx-2\" (click)=\"changeHero()\">Cambiar Nombre</button>\n<button *ngIf=\"age !== 25\" class=\"btn btn-primary\" (click)=\"changeAge()\">Cambiar Edad</button>\n\n<button class=\"btn btn-primary mx-2\" (click)=\"resetForm()\">Reset Form</button>\n"

/***/ }),

/***/ "./src/app/heroes/components/hero/hero.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/heroes/components/hero/hero.component.ts ***!
  \**********************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        this.name = 'Ironman';
        this.age = 45;
    }
    Object.defineProperty(HeroComponent.prototype, "capitalizedName", {
        get: function () {
            return this.name.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    HeroComponent.prototype.getHeroDescription = function () {
        return this.name + " - " + this.age;
    };
    HeroComponent.prototype.changeHero = function () {
        this.name = 'Spiderman';
    };
    HeroComponent.prototype.changeAge = function () {
        this.age = 25;
    };
    HeroComponent.prototype.resetForm = function () {
        this.name = 'Ironman';
        this.age = 45;
        //document.querySelectorAll('h1')!.forEach( element => {
        //  element.innerHTML = '<h1>Desde Angular</h1>';
        //})
    };
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/heroes/components/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/heroes/components/hero/hero.component.css")]
        })
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/heroes/components/heroes.module.ts":
/*!****************************************************!*\
  !*** ./src/app/heroes/components/heroes.module.ts ***!
  \****************************************************/
/*! exports provided: HeroesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesModule", function() { return HeroesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/heroes/components/hero/hero.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/heroes/components/list/list.component.ts");





var HeroesModule = /** @class */ (function () {
    function HeroesModule() {
    }
    HeroesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__["HeroComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
            ],
            exports: [
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__["HeroComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], HeroesModule);
    return HeroesModule;
}());



/***/ }),

/***/ "./src/app/heroes/components/list/list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/heroes/components/list/list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm9lcy9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/heroes/components/list/list.component.html":
/*!************************************************************!*\
  !*** ./src/app/heroes/components/list/list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Listado de héroes</h3>\n\n<div *ngIf=\"deletedHero; else nothigWasDeleted\">\n  <h3>Héroe eliminado: <small class=\"text-danger\"> {{ deletedHero }} </small> </h3>\n</div>\n<ng-template #nothingWasDeleted>\n  <h3>No se ha eliminado nada.</h3>\n</ng-template>\n\n<button\n  *ngIf=\"heroNames.length > 0\"\n  (click)=\"removeLastHero()\"\n  class=\"btn btn-outline-danger\">\n  Eliminar último héroe\n</button>\n\n<ul class=\"mt-2 list-group\">\n  <li *ngFor=\"let name of heroNames\" class=\"list-group-item\">{{ name }}</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/heroes/components/list/list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/heroes/components/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.heroNames = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
    }
    ListComponent.prototype.removeLastHero = function () {
        this.deletedHero = this.heroNames.pop();
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/heroes/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/heroes/components/list/list.component.css")]
        })
    ], ListComponent);
    return ListComponent;
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

module.exports = __webpack_require__(/*! C:\Users\DIbarraC\Documents\AngularProjects\02-bases\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map