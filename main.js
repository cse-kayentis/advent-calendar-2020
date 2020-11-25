(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projets\ChrismatsCalendar\src\main.ts */"zUnb");


/***/ }),

/***/ "7mpd":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _box_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box/box.component */ "T9Eg");
/* harmony import */ var _box_boxPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box/boxPosition */ "PT05");
/* harmony import */ var _calendar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.directive */ "kX7q");







class CalendarComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        this.generate_grid();
        this.screenViewContainerRef = this.calendarDirective.viewContainerRef;
        const componentFactory = this.resolver.resolveComponentFactory(_box_box_component__WEBPACK_IMPORTED_MODULE_2__["BoxComponent"]);
        const grid = this.generate_grid();
        for (const position of grid) {
            const componentRef = this.screenViewContainerRef.createComponent(componentFactory);
            componentRef.instance.boxPosition = position;
        }
    }
    generate_grid() {
        const positions = [];
        let days = Array.from(Array(26).keys());
        days = days.filter(d => d !== 0);
        const screenWidth = window.innerWidth;
        const sliceWidth = screenWidth / 6;
        const screenHeight = window.innerHeight;
        const sliceHeight = screenHeight / 6;
        for (let col = 0; col < 5; col++) {
            for (let row = 0; row < 5; row++) {
                const colPosition = sliceWidth * col + sliceWidth / 1.1;
                const rowPosition = sliceHeight * row + sliceHeight / 1.4;
                const day = days[Math.floor(Math.random() * days.length)];
                const position = new _box_boxPosition__WEBPACK_IMPORTED_MODULE_3__["BoxPosition"](colPosition, rowPosition, day);
                days = days.filter(d => d !== day);
                positions.push(position);
            }
        }
        return lodash__WEBPACK_IMPORTED_MODULE_1__["shuffle"](positions);
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_calendar_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarDirective"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.calendarDirective = _t.first);
    } }, decls: 46, vars: 0, consts: [[1, "calendar"], [1, "lightrope"], [1, "app-calendar-screen"], ["appCalendarScreen", ""]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](45, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_calendar_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarDirective"]], styles: [".lightrope[_ngcontent-%COMP%] {\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  margin: -15px 0 0 0;\n  padding: 0;\n  pointer-events: none;\n  width: 100%;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  animation-fill-mode: both;\n  animation-iteration-count: infinite;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: block;\n  width: 12px;\n  height: 28px;\n  border-radius: 50%;\n  margin: 20px;\n  display: inline-block;\n  background: #00f7a5;\n  box-shadow: 0px 4.6666666667px 24px 3px #00f7a5;\n  animation-name: flash-1;\n  animation-duration: 2s;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n+1) {\n  background: aqua;\n  box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.5);\n  animation-name: flash-2;\n  animation-duration: 0.4s;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4n+2) {\n  background: #f70094;\n  box-shadow: 0px 4.6666666667px 24px 3px #f70094;\n  animation-name: flash-3;\n  animation-duration: 1.1s;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\n  animation-duration: 1.8s;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3n+1) {\n  animation-duration: 1.4s;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  background: #222;\n  width: 10px;\n  height: 9.3333333333px;\n  border-radius: 3px;\n  top: -4.6666666667px;\n  left: 1px;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: -14px;\n  left: 9px;\n  position: absolute;\n  width: 52px;\n  height: 18.6666666667px;\n  border-bottom: solid #222 2px;\n  border-radius: 50%;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:after {\n  content: none;\n}\n.lightrope[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: -40px;\n}\n@keyframes flash-1 {\n  0%, 100% {\n    background: #00f7a5;\n    box-shadow: 0px 4.6666666667px 24px 3px #00f7a5;\n  }\n  50% {\n    background: rgba(0, 247, 165, 0.4);\n    box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 247, 165, 0.2);\n  }\n}\n@keyframes flash-2 {\n  0%, 100% {\n    background: aqua;\n    box-shadow: 0px 4.6666666667px 24px 3px aqua;\n  }\n  50% {\n    background: rgba(0, 255, 255, 0.4);\n    box-shadow: 0px 4.6666666667px 24px 3px rgba(0, 255, 255, 0.2);\n  }\n}\n@keyframes flash-3 {\n  0%, 100% {\n    background: #f70094;\n    box-shadow: 0px 4.6666666667px 24px 3px #f70094;\n  }\n  50% {\n    background: rgba(247, 0, 148, 0.4);\n    box-shadow: 0px 4.6666666667px 24px 3px rgba(247, 0, 148, 0.2);\n  }\n}\n.calendar[_ngcontent-%COMP%] {\n  height: 100%;\n  background-image: url('calendar-background.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBTkY7QUFPRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0F6Qlk7RUEwQlosWUF6Qlk7RUEwQlosa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUxKO0FBTUk7RUFDRSxnQkFBQTtFQUNBLDhEQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUpOO0FBTUk7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQUpOO0FBTUk7RUFDRSx3QkFBQTtBQUpOO0FBTUk7RUFDRSx3QkFBQTtBQUpOO0FBTUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBSk47QUFNSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUpOO0FBTUk7RUFDRSxhQUFBO0FBSk47QUFNSTtFQUNFLGtCQUFBO0FBSk47QUFRQTtFQUNFO0lBQVcsbUJBQUE7SUFDVCwrQ0FBQTtFQUpGO0VBS0E7SUFBTSxrQ0FBQTtJQUNKLDhEQUFBO0VBRkY7QUFDRjtBQUdBO0VBQ0U7SUFBVyxnQkFBQTtJQUNULDRDQUFBO0VBQUY7RUFDQTtJQUFNLGtDQUFBO0lBQ0osOERBQUE7RUFFRjtBQUNGO0FBREE7RUFDRTtJQUFXLG1CQUFBO0lBQ1QsK0NBQUE7RUFJRjtFQUhBO0lBQU0sa0NBQUE7SUFDSiw4REFBQTtFQU1GO0FBQ0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxnREFBQTtFQUlBLHNCQUFBO0FBS0YiLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ2xvYmUtd2lkdGg6ICAgMTJweDtcclxuJGdsb2JlLWhlaWdodDogIDI4cHg7XHJcbiRnbG9iZS1zcGFjaW5nOiA0MHB4O1xyXG4kZ2xvYmUtc3ByZWFkOiAzcHg7XHJcbiRsaWdodC1vZmYtb3BhY2l0eTogMC40O1xyXG5cclxuXHJcbi5saWdodHJvcGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbWFyZ2luOiAtMTVweCAwIDAgMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAkZ2xvYmUtd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRnbG9iZS1oZWlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46ICRnbG9iZS1zcGFjaW5nLzI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMjQ3LDE2NSwxKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAkZ2xvYmUtaGVpZ2h0LzYgJGdsb2JlLXdpZHRoKjIgJGdsb2JlLXNwcmVhZCByZ2JhKDAsMjQ3LDE2NSwxKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmbGFzaC0xO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICY6bnRoLWNoaWxkKDJuKzEpIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDI1NSwyNTUsMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAkZ2xvYmUtaGVpZ2h0LzYgJGdsb2JlLXdpZHRoKjIgJGdsb2JlLXNwcmVhZCByZ2JhKDAsMjU1LDI1NSwwLjUpO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogZmxhc2gtMjtcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoNG4rMikge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywwLDE0OCwxKTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4ICRnbG9iZS1oZWlnaHQvNiAkZ2xvYmUtd2lkdGgqMiAkZ2xvYmUtc3ByZWFkIHJnYmEoMjQ3LDAsMTQ4LDEpO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogZmxhc2gtMztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjFzO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDNuKzEpIHtcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgIHdpZHRoOiAoJGdsb2JlLXdpZHRoIC0gMik7XHJcbiAgICAgIGhlaWdodDogJGdsb2JlLWhlaWdodC8zO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIHRvcDogKDAgLSAoJGdsb2JlLWhlaWdodC82KSk7XHJcbiAgICAgIGxlZnQ6IDFweDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB0b3A6ICgwIC0gJGdsb2JlLWhlaWdodC8yKTtcclxuICAgICAgbGVmdDogJGdsb2JlLXdpZHRoIC0gMztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogJGdsb2JlLXNwYWNpbmcgKyAxMjtcclxuICAgICAgaGVpZ2h0OiAoJGdsb2JlLWhlaWdodC8zICogMik7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkICMyMjIgMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBub25lO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJGdsb2JlLXNwYWNpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmxhc2gtMSB7XHJcbiAgMCUsIDEwMCUgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMjQ3LDE2NSwxKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAkZ2xvYmUtaGVpZ2h0LzYgJGdsb2JlLXdpZHRoKjIgJGdsb2JlLXNwcmVhZCByZ2JhKDAsMjQ3LDE2NSwxKTt9XHJcbiAgNTAlIHsgYmFja2dyb3VuZDogcmdiYSgwLDI0NywxNjUsJGxpZ2h0LW9mZi1vcGFjaXR5KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAkZ2xvYmUtaGVpZ2h0LzYgJGdsb2JlLXdpZHRoKjIgJGdsb2JlLXNwcmVhZCByZ2JhKDAsMjQ3LDE2NSwwLjIpO31cclxufVxyXG5Aa2V5ZnJhbWVzIGZsYXNoLTIge1xyXG4gIDAlLCAxMDAlIHsgYmFja2dyb3VuZDogcmdiYSgwLDI1NSwyNTUsMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggJGdsb2JlLWhlaWdodC82ICRnbG9iZS13aWR0aCoyICRnbG9iZS1zcHJlYWQgcmdiYSgwLDI1NSwyNTUsMSk7fVxyXG4gIDUwJSB7IGJhY2tncm91bmQ6IHJnYmEoMCwyNTUsMjU1LCRsaWdodC1vZmYtb3BhY2l0eSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggJGdsb2JlLWhlaWdodC82ICRnbG9iZS13aWR0aCoyICRnbG9iZS1zcHJlYWQgcmdiYSgwLDI1NSwyNTUsMC4yKTt9XHJcbn1cclxuQGtleWZyYW1lcyBmbGFzaC0zIHtcclxuICAwJSwgMTAwJSB7IGJhY2tncm91bmQ6IHJnYmEoMjQ3LDAsMTQ4LDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4ICRnbG9iZS1oZWlnaHQvNiAkZ2xvYmUtd2lkdGgqMiAkZ2xvYmUtc3ByZWFkIHJnYmEoMjQ3LDAsMTQ4LDEpO31cclxuICA1MCUgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0NywwLDE0OCwkbGlnaHQtb2ZmLW9wYWNpdHkpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4ICRnbG9iZS1oZWlnaHQvNiAkZ2xvYmUtd2lkdGgqMiAkZ2xvYmUtc3ByZWFkIHJnYmEoMjQ3LDAsMTQ4LDAuMik7fVxyXG59XHJcblxyXG5cclxuLmNhbGVuZGFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calendar',
                templateUrl: './calendar.component.html',
                styleUrls: ['./calendar.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { calendarDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_calendar_directive__WEBPACK_IMPORTED_MODULE_4__["CalendarDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "FADI":
/*!**************************************************!*\
  !*** ./src/app/shared/calendar-guard.service.ts ***!
  \**************************************************/
/*! exports provided: CalendarGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarGuard", function() { return CalendarGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _gift_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gift-manager.service */ "cX07");




class CalendarGuard {
    constructor(router, giftManagerService) {
        this.router = router;
        this.giftManagerService = giftManagerService;
    }
    canActivate(route, state) {
        if (this.giftManagerService.currentUserEmail === '') {
            this.router.navigate(['/login']);
        }
        return true;
    }
}
CalendarGuard.ɵfac = function CalendarGuard_Factory(t) { return new (t || CalendarGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_gift_manager_service__WEBPACK_IMPORTED_MODULE_2__["GiftManagerService"])); };
CalendarGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalendarGuard, factory: CalendarGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _gift_manager_service__WEBPACK_IMPORTED_MODULE_2__["GiftManagerService"] }]; }, null); })();


/***/ }),

/***/ "PT05":
/*!*********************************************!*\
  !*** ./src/app/calendar/box/boxPosition.ts ***!
  \*********************************************/
/*! exports provided: BoxPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxPosition", function() { return BoxPosition; });
class BoxPosition {
    constructor(x, y, day) {
        this.x = x;
        this.y = y;
        this.day = day;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ChristmasCalendar';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "content"], ["alt", "logoCSE", "src", "assets/images/cse.jpg", 1, "logo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".content[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n\r\n.logo[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 70px;\r\n  bottom:20px;\r\n  right: 20px;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuLmxvZ297XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGJvdHRvbToyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "T9Eg":
/*!***********************************************!*\
  !*** ./src/app/calendar/box/box.component.ts ***!
  \***********************************************/
/*! exports provided: BoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxComponent", function() { return BoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialogs_dialog_open_box_dialog_open_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialogs/dialog-open-box/dialog-open-box.component */ "sVCs");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_gift_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/gift-manager.service */ "cX07");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["container"];
function BoxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Le contenu saisi ici sera ignor\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoxComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} }
function BoxComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoxComponent_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.imagePrize, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BoxComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BoxComponent_ng_template_6_div_0_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoxComponent_ng_template_6_div_1_Template, 2, 1, "div", 8);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.userPrize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.userPrize);
} }
class BoxComponent {
    constructor(dialog, giftManagerService) {
        this.dialog = dialog;
        this.giftManagerService = giftManagerService;
        this.containerStyle = {};
    }
    ngOnInit() {
        this.setIsOpenedGift();
        this.setPrize();
        this.containerStyle.position = 'absolute';
        this.containerStyle.left = this.boxPosition.x + 'px';
        this.containerStyle.top = this.boxPosition.y + 'px';
    }
    openDialog() {
        this.dialog.open(_dialogs_dialog_open_box_dialog_open_box_component__WEBPACK_IMPORTED_MODULE_1__["DialogOpenBoxComponent"], {
            data: { isWinningBox: this.prize, isOpenedGift: this.isOpenedGift }
        });
    }
    setPrize() {
        const currentUser = this.giftManagerService.getCurrentUser();
        this.userPrize = currentUser.gifts.filter(p => p.day === this.boxPosition.day)[0];
        if (this.userPrize) {
            const prize = this.giftManagerService.christmasData.prizes.find(p => p.id === this.userPrize.prizeId);
            this.prize = prize;
            this.imagePrize = prize.minImageUrl;
            this.containerStyle.color = 'red';
        }
    }
    setIsOpenedGift() {
        const date = new Date();
        this.isOpenedGift = date.getDate() < this.boxPosition.day;
    }
}
BoxComponent.ɵfac = function BoxComponent_Factory(t) { return new (t || BoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_gift_manager_service__WEBPACK_IMPORTED_MODULE_3__["GiftManagerService"])); };
BoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoxComponent, selectors: [["app-box"]], viewQuery: function BoxComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerRef = _t.first);
    } }, decls: 10, vars: 5, consts: [[3, "ngStyle"], ["container", ""], [1, "box", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["futur", ""], ["past", ""], [1, "text"], ["alt", "gift", "src", "../../../assets/images/gift.png", 1, "gift"], [4, "ngIf"], ["alt", "openedGifg", "src", "../../../assets/images/opened_gift.png", 1, "gift"], ["alt", "miniatureGift", 1, "gift-image-miniature", 3, "src"]], template: function BoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoxComponent_Template_div_click_2_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BoxComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BoxComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoxComponent_ng_template_6_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.containerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpenedGift)("ngIfThen", _r2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boxPosition.day);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n}\n\n.box[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n}\n\n.gift[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: block;\n}\n\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  font-size: large;\n}\n\n.gift-image-miniature[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwiZmlsZSI6ImJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG4uYm94IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdpZnR7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NTBweDtcclxuICBsZWZ0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5naWZ0LWltYWdlLW1pbmlhdHVyZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-box',
                templateUrl: './box.component.html',
                styleUrls: ['./box.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _shared_gift_manager_service__WEBPACK_IMPORTED_MODULE_3__["GiftManagerService"] }]; }, { containerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true }]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _calendar_box_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar/box/box.component */ "T9Eg");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar/calendar.component */ "7mpd");
/* harmony import */ var _calendar_calendar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar/calendar.directive */ "kX7q");
/* harmony import */ var _calendar_dialogs_dialog_open_box_dialog_open_box_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar/dialogs/dialog-open-box/dialog-open-box.component */ "sVCs");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _shared_data_resolver_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/data-resolver.service */ "jy4u");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_shared_data_resolver_service__WEBPACK_IMPORTED_MODULE_15__["DataResolver"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_11__["CalendarComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _calendar_box_box_component__WEBPACK_IMPORTED_MODULE_10__["BoxComponent"],
        _calendar_calendar_directive__WEBPACK_IMPORTED_MODULE_12__["CalendarDirective"],
        _calendar_dialogs_dialog_open_box_dialog_open_box_component__WEBPACK_IMPORTED_MODULE_13__["DialogOpenBoxComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_11__["CalendarComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _calendar_box_box_component__WEBPACK_IMPORTED_MODULE_10__["BoxComponent"],
                    _calendar_calendar_directive__WEBPACK_IMPORTED_MODULE_12__["CalendarDirective"],
                    _calendar_dialogs_dialog_open_box_dialog_open_box_component__WEBPACK_IMPORTED_MODULE_13__["DialogOpenBoxComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
                ],
                providers: [_shared_data_resolver_service__WEBPACK_IMPORTED_MODULE_15__["DataResolver"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cX07":
/*!************************************************!*\
  !*** ./src/app/shared/gift-manager.service.ts ***!
  \************************************************/
/*! exports provided: GiftManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftManagerService", function() { return GiftManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GiftManagerService {
    constructor(http) {
        this.http = http;
        this._currentUserEmail = '';
    }
    getChristmasData() {
        return this.http.get('../assets/data.json');
    }
    getCurrentUser() {
        return this.christmasData.users.filter(user => user.email === this._currentUserEmail)[0];
    }
    get currentUserEmail() {
        return this._currentUserEmail;
    }
    set currentUserEmail(value) {
        this._currentUserEmail = value;
    }
}
GiftManagerService.ɵfac = function GiftManagerService_Factory(t) { return new (t || GiftManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GiftManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GiftManagerService, factory: GiftManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiftManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "jy4u":
/*!*************************************************!*\
  !*** ./src/app/shared/data-resolver.service.ts ***!
  \*************************************************/
/*! exports provided: DataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataResolver", function() { return DataResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _gift_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gift-manager.service */ "cX07");





class DataResolver {
    constructor(giftManagerService) {
        this.giftManagerService = giftManagerService;
    }
    resolve(route) {
        if (this.giftManagerService.christmasData) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.giftManagerService.christmasData);
        }
        else {
            return this.giftManagerService.getChristmasData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => {
                this.giftManagerService.christmasData = res;
                return res;
            }));
        }
    }
}
DataResolver.ɵfac = function DataResolver_Factory(t) { return new (t || DataResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_gift_manager_service__WEBPACK_IMPORTED_MODULE_3__["GiftManagerService"])); };
DataResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataResolver, factory: DataResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _gift_manager_service__WEBPACK_IMPORTED_MODULE_3__["GiftManagerService"] }]; }, null); })();


/***/ }),

/***/ "kX7q":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.directive.ts ***!
  \************************************************/
/*! exports provided: CalendarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDirective", function() { return CalendarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CalendarDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
CalendarDirective.ɵfac = function CalendarDirective_Factory(t) { return new (t || CalendarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
CalendarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CalendarDirective, selectors: [["", "appCalendarScreen", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCalendarScreen]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "sVCs":
/*!*******************************************************************************!*\
  !*** ./src/app/calendar/dialogs/dialog-open-box/dialog-open-box.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DialogOpenBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOpenBoxComponent", function() { return DialogOpenBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function DialogOpenBoxComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DialogOpenBoxComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.prize.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.prize.maxImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DialogOpenBoxComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " you loose today, maybe you will win tomorow ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DialogOpenBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogOpenBoxComponent_div_1_div_1_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogOpenBoxComponent_div_1_div_2_Template, 4, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogOpenBoxComponent_div_1_div_3_Template, 2, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showImage && ctx_r0.prize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showImage && !ctx_r0.prize);
} }
function DialogOpenBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " You cannot open this box yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DialogOpenBoxComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOpenBoxComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DialogOpenBoxComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.showImage = true;
    }
    ngOnInit() {
        this.prize = this.data.isWinningBox;
        this.canOpenGift = !this.data.isOpenedGift;
        setTimeout(() => {
            this.showImage = false;
        }, 4500);
    }
    close() {
        this.dialogRef.close();
    }
}
DialogOpenBoxComponent.ɵfac = function DialogOpenBoxComponent_Factory(t) { return new (t || DialogOpenBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
DialogOpenBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOpenBoxComponent, selectors: [["app-dialog-open-box"]], decls: 4, vars: 3, consts: [[1, "gift-dialog"], [4, "ngIf"], ["mat-raised-button", "", 3, "click", 4, "ngIf"], ["alt", "opengift", "src", "assets/images/openGift.gif", 1, "gift"], [1, "description"], ["alt", "gift-image", 1, "gift-image", 3, "src"], ["mat-raised-button", "", 3, "click"]], template: function DialogOpenBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DialogOpenBoxComponent_div_1_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DialogOpenBoxComponent_div_2_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DialogOpenBoxComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canOpenGift);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.canOpenGift);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showImage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".gift-image[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  margin: 50px;\r\n}\r\n\r\n.gift-dialog[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-weight: bold;\r\n  font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1vcGVuLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiZGlhbG9nLW9wZW4tYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2lmdC1pbWFnZSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogNTBweDtcclxufVxyXG5cclxuLmdpZnQtZGlhbG9nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOpenBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-open-box',
                templateUrl: './dialog-open-box.component.html',
                styleUrls: ['./dialog-open-box.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar/calendar.component */ "7mpd");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _shared_calendar_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/calendar-guard.service */ "FADI");
/* harmony import */ var _shared_data_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/data-resolver.service */ "jy4u");
// configures NgModule imports and exports








const routes = [
    { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"],
        resolve: {
            data: _shared_data_resolver_service__WEBPACK_IMPORTED_MODULE_5__["DataResolver"],
        },
        canActivate: [
            _shared_calendar_guard_service__WEBPACK_IMPORTED_MODULE_4__["CalendarGuard"]
        ] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        resolve: {
            data: _shared_data_resolver_service__WEBPACK_IMPORTED_MODULE_5__["DataResolver"],
        } },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_gift_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/gift-manager.service */ "cX07");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email not existing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, giftManagerService) {
        this.router = router;
        this.giftManagerService = giftManagerService;
        this.hideUnknownError = true;
    }
    ngOnInit() {
    }
    login() {
        this.giftManagerService.currentUserEmail = this.email;
        if (this.testUserExist()) {
            this.router.navigate(['calendar']);
        }
    }
    testUserExist() {
        this.hideUnknownError = this.giftManagerService.christmasData.users.some(user => user.email === this.email);
        return this.hideUnknownError;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_gift_manager_service__WEBPACK_IMPORTED_MODULE_2__["GiftManagerService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 39, vars: 2, consts: [["aria-hidden", "true", 1, "snowflakes"], [1, "snowflake"], [1, "login-page"], [1, "login-form"], ["appearance", "fill"], ["label", "email", "matInput", "", 1, "login-form-input", 3, "ngModel", "ngModelChange"], [1, "send-button"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u2745 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2746 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u2745 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u2746 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u2745 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u2746 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u2745 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u2746 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u2745 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u2746 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u2745 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u2746 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Christmas Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Insert your Kayentis Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_34_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_36_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LoginComponent_div_38_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideUnknownError);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["[_ngcontent-%COMP%]::selection {\n  background: rgba(255, 255, 0, 0.5);\n}\n\nh1[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Arial Black\";\n  margin-bottom: 70px;\n  font-size: xx-large;\n}\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-image: url('login-christmas.jpg');\n  background-size: cover;\n}\n\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-transition-delay: 9999s;\n}\n\n.send-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.snowflake[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1em;\n  font-family: Arial, sans-serif;\n  text-shadow: 0 0 5px #000;\n}\n\n@keyframes snowflakes-fall {\n  0% {\n    top: -10%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n\n@keyframes snowflakes-shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(80px);\n  }\n}\n\n.snowflake[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -10%;\n  z-index: 9999;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default;\n  -webkit-animation-name: snowflakes-fall, snowflakes-shake;\n  -webkit-animation-duration: 10s, 3s;\n  -webkit-animation-timing-function: linear, ease-in-out;\n  -webkit-animation-iteration-count: infinite, infinite;\n  -webkit-animation-play-state: running, running;\n  animation-name: snowflakes-fall, snowflakes-shake;\n  animation-duration: 10s, 3s;\n  animation-timing-function: linear, ease-in-out;\n  animation-iteration-count: infinite, infinite;\n  animation-play-state: running, running;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(0) {\n  left: 1%;\n  animation-delay: 0s, 0s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(1) {\n  left: 10%;\n  animation-delay: 1s, 1s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(2) {\n  left: 20%;\n  animation-delay: 6s, 0.5s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(3) {\n  left: 30%;\n  animation-delay: 4s, 2s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(4) {\n  left: 40%;\n  animation-delay: 2s, 2s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(5) {\n  left: 50%;\n  animation-delay: 8s, 3s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(6) {\n  left: 60%;\n  animation-delay: 6s, 2s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(7) {\n  left: 70%;\n  animation-delay: 2.5s, 1s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(8) {\n  left: 80%;\n  animation-delay: 1s, 0s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(9) {\n  left: 90%;\n  animation-delay: 3s, 1.5s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(10) {\n  left: 25%;\n  animation-delay: 2s, 0s;\n}\n\n.snowflake[_ngcontent-%COMP%]:nth-of-type(11) {\n  left: 65%;\n  animation-delay: 4s, 2.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0NBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0VBSUEsc0JBQUE7QUFBRjs7QUFHQTs7OztFQUlFLCtCQUFBO0FBQUY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdxTztFQUEyQjtJQUFHLFNBQUE7RUFvQmpRO0VBcEIwUTtJQUFLLFNBQUE7RUF1Qi9RO0FBQ0Y7O0FBeEIyUjtFQUE0QjtJQUFRLHdCQUFBO0VBNEI3VDtFQTVCcVY7SUFBSSwyQkFBQTtFQStCelY7QUFDRjs7QUFoQ3VYO0VBQVcsZUFBQTtFQUFlLFNBQUE7RUFBUyxhQUFBO0VBQWEseUJBQUE7RUFBb0UsaUJBQUE7RUFBaUIsZUFBQTtFQUFlLHlEQUFBO0VBQXdELG1DQUFBO0VBQWtDLHNEQUFBO0VBQXFELHFEQUFBO0VBQW9ELDhDQUFBO0VBQTZDLGlEQUFBO0VBQWdELDJCQUFBO0VBQTBCLDhDQUFBO0VBQTZDLDZDQUFBO0VBQTRDLHNDQUFBO0FBb0Q5NUI7O0FBcERtOEI7RUFBMEIsUUFBQTtFQUFzQyx1QkFBQTtBQTBEbmdDOztBQTFEeWhDO0VBQTBCLFNBQUE7RUFBdUMsdUJBQUE7QUFnRTFsQzs7QUFoRWduQztFQUEwQixTQUFBO0VBQXdDLHlCQUFBO0FBc0VsckM7O0FBdEV5c0M7RUFBMEIsU0FBQTtFQUF1Qyx1QkFBQTtBQTRFMXdDOztBQTVFZ3lDO0VBQTBCLFNBQUE7RUFBdUMsdUJBQUE7QUFrRmoyQzs7QUFsRnUzQztFQUEwQixTQUFBO0VBQXVDLHVCQUFBO0FBd0Z4N0M7O0FBeEY4OEM7RUFBMEIsU0FBQTtFQUF1Qyx1QkFBQTtBQThGL2dEOztBQTlGcWlEO0VBQTBCLFNBQUE7RUFBeUMseUJBQUE7QUFvR3htRDs7QUFwR2dvRDtFQUEwQixTQUFBO0VBQXVDLHVCQUFBO0FBMEdqc0Q7O0FBMUd1dEQ7RUFBMEIsU0FBQTtFQUF5Qyx5QkFBQTtBQWdIMXhEOztBQWhIa3pEO0VBQTJCLFNBQUE7RUFBdUMsdUJBQUE7QUFzSHAzRDs7QUF0SDA0RDtFQUEyQixTQUFBO0VBQXlDLHlCQUFBO0FBNEg5OEQiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOjpzZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwwLDAuNSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWwgQmxhY2tcIjtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4tY2hyaXN0bWFzLmpwZ1wiKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcclxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogOTk5OXM7XHJcbn1cclxuXHJcblxyXG4uc2VuZC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uc25vd2ZsYWtlIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzAwMDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNub3dmbGFrZXMtZmFsbHswJXt0b3A6LTEwJX0xMDAle3RvcDoxMDAlfX1ALXdlYmtpdC1rZXlmcmFtZXMgc25vd2ZsYWtlcy1zaGFrZXswJSwxMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoODBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoODBweCl9fUBrZXlmcmFtZXMgc25vd2ZsYWtlcy1mYWxsezAle3RvcDotMTAlfTEwMCV7dG9wOjEwMCV9fUBrZXlmcmFtZXMgc25vd2ZsYWtlcy1zaGFrZXswJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTUwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCg4MHB4KX19LnNub3dmbGFrZXtwb3NpdGlvbjpmaXhlZDt0b3A6LTEwJTt6LWluZGV4Ojk5OTk7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c25vd2ZsYWtlcy1mYWxsLHNub3dmbGFrZXMtc2hha2U7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MTBzLDNzOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIsZWFzZS1pbi1vdXQ7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlLGluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZyxydW5uaW5nO2FuaW1hdGlvbi1uYW1lOnNub3dmbGFrZXMtZmFsbCxzbm93Zmxha2VzLXNoYWtlO2FuaW1hdGlvbi1kdXJhdGlvbjoxMHMsM3M7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIsZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZSxpbmZpbml0ZTthbmltYXRpb24tcGxheS1zdGF0ZTpydW5uaW5nLHJ1bm5pbmd9LnNub3dmbGFrZTpudGgtb2YtdHlwZSgwKXtsZWZ0OjElOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjBzLDBzO2FuaW1hdGlvbi1kZWxheTowcywwc30uc25vd2ZsYWtlOm50aC1vZi10eXBlKDEpe2xlZnQ6MTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjFzLDFzO2FuaW1hdGlvbi1kZWxheToxcywxc30uc25vd2ZsYWtlOm50aC1vZi10eXBlKDIpe2xlZnQ6MjAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjZzLC41czthbmltYXRpb24tZGVsYXk6NnMsLjVzfS5zbm93Zmxha2U6bnRoLW9mLXR5cGUoMyl7bGVmdDozMCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6NHMsMnM7YW5pbWF0aW9uLWRlbGF5OjRzLDJzfS5zbm93Zmxha2U6bnRoLW9mLXR5cGUoNCl7bGVmdDo0MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MnMsMnM7YW5pbWF0aW9uLWRlbGF5OjJzLDJzfS5zbm93Zmxha2U6bnRoLW9mLXR5cGUoNSl7bGVmdDo1MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6OHMsM3M7YW5pbWF0aW9uLWRlbGF5OjhzLDNzfS5zbm93Zmxha2U6bnRoLW9mLXR5cGUoNil7bGVmdDo2MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6NnMsMnM7YW5pbWF0aW9uLWRlbGF5OjZzLDJzfS5zbm93Zmxha2U6bnRoLW9mLXR5cGUoNyl7bGVmdDo3MCU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6Mi41cywxczthbmltYXRpb24tZGVsYXk6Mi41cywxc30uc25vd2ZsYWtlOm50aC1vZi10eXBlKDgpe2xlZnQ6ODAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjFzLDBzO2FuaW1hdGlvbi1kZWxheToxcywwc30uc25vd2ZsYWtlOm50aC1vZi10eXBlKDkpe2xlZnQ6OTAlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjNzLDEuNXM7YW5pbWF0aW9uLWRlbGF5OjNzLDEuNXN9LnNub3dmbGFrZTpudGgtb2YtdHlwZSgxMCl7bGVmdDoyNSU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MnMsMHM7YW5pbWF0aW9uLWRlbGF5OjJzLDBzfS5zbm93Zmxha2U6bnRoLW9mLXR5cGUoMTEpe2xlZnQ6NjUlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjRzLDIuNXM7YW5pbWF0aW9uLWRlbGF5OjRzLDIuNXN9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_gift_manager_service__WEBPACK_IMPORTED_MODULE_2__["GiftManagerService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map