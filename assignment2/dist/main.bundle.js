webpackJsonp(["main"],{

/***/ "../../../../../assignment/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "../../../../../assignment/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
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


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

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

module.exports = "<router-outlet></router-outlet>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_user_login_login_component__ = __webpack_require__("../../../../../src/app/views/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/views/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_user_register_register_component__ = __webpack_require__("../../../../../src/app/views/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__views_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__assignment_directives_sortable_directive__ = __webpack_require__("../../../../../assignment/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__assignment_pipes_safe_pipe__ = __webpack_require__("../../../../../assignment/pipes/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__views_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__views_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__views_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__views_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__views_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__assignment_pipes_safe_pipe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_26__assignment_directives_sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_28__views_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_29__views_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
                __WEBPACK_IMPORTED_MODULE_30__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__["a" /* QuillEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_31__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_32__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_33__services_auth_guard_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_user_login_login_component__ = __webpack_require__("../../../../../src/app/views/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/views/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_user_register_register_component__ = __webpack_require__("../../../../../src/app/views/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__views_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__views_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__views_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__views_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website', component: __WEBPACK_IMPORTED_MODULE_4__views_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/new', component: __WEBPACK_IMPORTED_MODULE_5__views_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__views_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__views_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__views_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__views_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__views_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__views_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__views_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'profile/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_13__views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuard */]] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
// export const routing = RouterModule.forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(id, name, websiteId, title) {
        this._id = id;
        this.name = name;
        this.websiteId = websiteId;
        this.title = title;
    }
    return Page;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(id, type, pageId, size, text, width, url, placeholder, formatted, name) {
        this._id = id;
        this.type = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
        this.placeholder = placeholder;
        this.formatted = formatted;
        this.name = name;
    }
    return Widget;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service_client__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '71d1d71c0731a2d0446a1d7ffb9299b4';
        this.secret = 'f789628e2e8f5595';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageService = /** @class */ (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (response) {
            return response.json();
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = null;
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUserInServer = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUserInServer = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (response) {
            return response;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteService = /** @class */ (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsiteInServer = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/website/' + websiteId, website)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsiteInServer = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/website/' + websiteId)
            .map(function (response) {
            return response.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetService = /** @class */ (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidgetInServer = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidgetInServer = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgetsInServer = function (pageId, indexes) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId +
            '/widget?initial=' + indexes.startIndex + '&final=' + indexes.endIndex, '')
            .map(function (response) {
            return response.json();
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "../../../../../src/app/views/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Edit Page\n    </a>\n    <a (click)=\"updatePage()\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <label for=\"Edit-Page-Name\">Name</label>\n  <input id=\"Edit-Page-Name\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"Blog Post\"\n         [(ngModel)]=\"page.name\"/>\n  <label for=\"Edit-Page-Title\">Title</label>\n  <input id=\"Edit-Page-Title\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"Page Title\"\n         [(ngModel)]=\"page.title\"/>\n  <a class=\"btn btn-success btn-block\" (click)=\"updatePage()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"deletePage()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
        this.errorFlag = false;
        this.errorMsg = 'Page name cannot be empty!';
        this.page = new __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__["a" /* Page */]('', '', '', '');
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.pageService.findPageById(_this.pageId).subscribe(function (page) {
                _this.page = page;
            }, function (error) { return console.log(error); });
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        if (!this.page.name) {
            this.errorFlag = true;
            return;
        }
        this.pageService.updatePage(this.pageId, this.page).subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("../../../../../src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"../../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Pages\n    </a>\n    <a routerLink=\"./new\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <ul class=\"ul-no-style\" *ngFor=\"let p of pages\">\n    <li class=\"li-margin\">\n      <a routerLink=\"./{{p._id}}/widget\">\n        {{p.name}}\n      </a>\n      <a routerLink=\"./{{p._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right icon-padding\"></span>\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\" class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span></a>\n    <a routerLink=\"/profile\" class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageService.findPageByWebsiteId(params['wid']).subscribe(function (pages) {
                _this.pages = pages;
            }, function (error) { return console.log(error); });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("../../../../../src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Edit Page\n    </a>\n    <button (click)=\"createPage()\" [disabled]=\"!p.valid\"\n            class=\"black-text navbar-text btn-link pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </button>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <form (ngSubmit)=\"createPage()\" #p=\"ngForm\">\n    <label for=\"New-Page-Name\">Name</label>\n    <input id=\"New-Page-Name\"\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"Page Name\"\n           name=\"pageName\"\n           ngModel required #pageName=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!pageName.valid && pageName.touched\">\n      Please enter page name!\n      </span>\n    <label for=\"New-Page-Title\">Title</label>\n    <input id=\"New-Page-Title\"\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"Page Description\"\n           name=\"pageDescription\"\n           [(ngModel)]=\"pageDescription\"/>\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!p.valid\">Create</button>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\" class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span></a>\n    <a routerLink=\"/profile\" class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(route, router, pageService) {
        this.route = route;
        this.router = router;
        this.pageService = pageService;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.pageName = this.pageForm.value.pageName;
        this.pageDescription = this.pageForm.value.pageDescription;
        var page = new __WEBPACK_IMPORTED_MODULE_4__models_page_model_client__["a" /* Page */]('', this.pageName, this.websiteId, this.pageDescription);
        this.pageService.createPage(this.websiteId, page).subscribe(function (data) {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('p'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("../../../../../src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container container-padding\">\n  <h1>Login</h1>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n    <input type=\"text\"\n           class=\"form-control\"\n           placeholder=\"username\"\n           name=\"username\"\n           ngModel required #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"password\"\n           name=\"password\"\n           ngModel required #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Login</button>\n  </form>\n  <a href=\"{{baseUrl}}/facebook/login\" class=\"btn btn-primary btn-block\">\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </a>\n  <a class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorFlag = false;
        this.errorMsg = 'Invalid username or password!';
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password)
            .subscribe(function (user) {
            _this.sharedService.user = user;
            _this.router.navigate(['/profile']);
        }, function (error) {
            console.log(error);
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top nav-blue\">\n  <div class = \"container-fluid row\">\n    <a routerLink='/profile' class=\"navbar-text white-text pull-left\">Profile</a>\n    <a (click)=\"updateUser()\" class=\"navbar-text white-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n\n  <div *ngIf=\"updateFlag\"\n       class=\"alert alert-success\">\n    {{updateMsg}}\n  </div>\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h2>User: {{user.username}}</h2>\n  <form>\n    <label for=\"Username\">Username</label>\n    <input id=\"Username\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"username\"\n           placeholder=\"username\"\n           [(ngModel)]=\"user.username\"/>\n    <label for=\"FirstName\">First Name</label>\n    <input id=\"FirstName\"\n           type=\"text\"\n           class=\"form-control\"\n           name=\"firstname\"\n           placeholder=\"first name\"\n           [(ngModel)]=\"user.firstName\"/>\n    <label for=\"LastName\">Last Name</label>\n    <input id=\"LastName\"\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"last name\"\n           name=\"lastname\"\n           [(ngModel)]=\"user.lastName\"/>\n    <label for=\"Email\">Email</label>\n    <input id=\"Email\"\n           type=\"email\"\n           class=\"form-control\"\n           placeholder=\"email\"\n           name=\"email\"\n           [(ngModel)]=\"user.email\"/>\n  </form>\n\n  <a class=\"btn btn-success btn-block\" (click)=\"updateUser()\">Update</a>\n  <a class=\"btn btn-warning btn-block\" (click)=\"deleteUser()\">Delete</a>\n  <span class=\"help-block\" *ngIf=\"updateFlag\"></span>\n  <span class=\"help-block\" *ngIf=\"errorFlag\"></span>\n  <a class=\"btn btn-primary btn-block\" routerLink='/profile/website'>Websites</a>\n  <a class=\"btn btn-danger btn-block\" (click)=\"logout()\">Logout</a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, router, route, sharedService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        this.updateFlag = false;
        this.updateMsg = 'Profile updated!';
        this.errorFlag = false;
        this.errorMsg = 'Username cannot be empty!';
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user_model_client__["a" /* User */](null, '', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.sharedService.user;
        this.errorFlag = false;
        this.updateFlag = false;
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.errorFlag = false;
        this.updateFlag = false;
        if (!this.user.username || !this.user.password) {
            this.errorFlag = true;
            this.updateFlag = false;
            return;
        }
        this.userService.updateUserInServer(this.user._id, this.user).subscribe(function (user) {
            _this.user = user;
            _this.updateFlag = true;
            _this.errorFlag = false;
        }, function (error) { return console.log(error); });
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUserInServer(this.user._id).subscribe(function () {
            _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); }, function (error) { return console.log(error); });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container container-padding\">\n  <h1>Register</h1>\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <form (ngSubmit)=\"register()\" #r=\"ngForm\">\n    <input type=\"text\"\n           class=\"form-control\"\n           placeholder=\"username\"\n           name=\"username\"\n           ngModel required #username=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"password\"\n           name=\"password\"\n           ngModel required #password=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <input type=\"password\"\n           class=\"form-control\"\n           placeholder=\"verify password\"\n           name=\"vpassword\"\n           ngModel required #vpassword=\"ngModel\"/>\n    <span class=\"help-block\" *ngIf=\"!vpassword.valid && vpassword.touched\">\n      Please verify password!\n    </span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!r.valid\">Register</button>\n  </form>\n  <a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorFlag = false;
        this.errorMsg = 'Passwords mismatch!';
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.vpassword = this.registerForm.value.vpassword;
        if (this.vpassword === this.password) {
            this.userService.register(this.username, this.password).subscribe(function (data) {
                _this.errorFlag = false;
                _this.router.navigate(['/profile']);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.errorFlag = true;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('r'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top nav-blue\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <div class = \"container-fluid row\">\n      <a routerLink='../'\n         class=\"navbar-text white-text icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n      <a routerLink='../'\n         class=\"navbar-text white-text pull-left\">\n        Websites\n      </a>\n      <a routerLink='../new'\n         class=\"navbar-text white-text pull-right icon-padding\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-8\">\n    <div class=\"container-fluid row\">\n      <a routerLink='./'\n         class=\"navbar-text white-text pull-left\">\n        Edit Website\n      </a>\n      <a (click)=\"updateWebsite()\"\n         class=\"navbar-text white-text pull-right icon-padding\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-height\">\n  <div class=\"col-xs-4 hidden-xs divider\">\n    <ul class=\"ul-no-style\" *ngFor=\"let web of websites\">\n      <li class=\"li-margin\">\n        <a routerLink=\"../{{web._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right icon-padding\"></span>\n        </a>\n        <a routerLink=\"../{{web._id}}/page\">\n          {{web.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-xs-8 container-padding\">\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <label for=\"Edit-Website-Name\">Website Name</label>\n    <input id=\"Edit-Website-Name\"\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"Blogger\"\n           [(ngModel)]=\"website.name\"/>\n    <label for=\"Edit-Website-Description\">Website Description</label>\n    <textarea id=\"Edit-Website-Description\"\n              class=\"form-control\"\n              rows=\"8\"\n              placeholder=\"Add a description for your website.\"\n              [(ngModel)]=\"website.description\">\n    </textarea>\n    <a class=\"btn btn-success btn-block\" (click)=\"updateWebsite()\">\n      Update\n    </a>\n    <a class=\"btn btn-danger btn-block\" (click)=\"deleteWebsite()\">\n      Delete\n    </a>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-blue\">\n  <div class=\"container-fluid\">\n    <a routerLink='/login'\n       class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink='/profile'\n       class=\"navbar-text white-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, route, router, sharedService) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.errorFlag = false;
        this.errorMsg = 'Website name cannot be empty!';
        this.website = new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('', '', '', '');
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            _this.websiteService.findWebsiteById(_this.websiteId).subscribe(function (website) {
                _this.website = website;
            }, function (error) { return console.log(error); });
            _this.websiteService.findWebsitesByUser(_this.sharedService.user._id).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) { return console.log(error); });
        });
    };
    WebsiteEditComponent.prototype.updateWebsite = function () {
        var _this = this;
        if (!this.website.name) {
            this.errorFlag = true;
            return;
        }
        this.websiteService.updateWebsiteInServer(this.websiteId, this.website).subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsiteInServer(this.websiteId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("../../../../../src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top nav-blue\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text white-text pull-left\">\n      Websites\n    </a>\n    <a routerLink=\"./new\"\n       class=\"navbar-text white-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <ul class=\"ul-no-style\" *ngFor=\"let web of websites\">\n    <li class=\"li-margin\">\n      <a routerLink=\"./{{web._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right icon-padding\"></span>\n      </a>\n      <a routerLink=\"./{{web._id}}/page\">\n        {{web.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-blue\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text white-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, route, sharedService) {
        this.websiteService = websiteService;
        this.route = route;
        this.sharedService = sharedService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.websiteService.findWebsitesByUser(_this.sharedService.user._id).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) { return console.log(error); });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("../../../../../src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top nav-blue\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <div class = \"container-fluid\">\n      <a routerLink=\"../../\"\n         class=\"navbar-text white-text icon-padding\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n      <a routerLink=\"../\"\n         class=\"navbar-text white-text pull-left\">\n        Websites\n      </a>\n      <a routerLink=\"./\"\n         class=\"navbar-text white-text pull-right icon-padding\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-8\">\n    <div class = \"container-fluid\">\n      <a routerLink=\"./\"\n         class=\"navbar-text white-text pull-left\">\n        New Website\n      </a>\n      <button (click)=\"createWebsite()\" [disabled]=\"!w.valid\"\n         class=\"navbar-text btn-link white-text pull-right icon-padding\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </button>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-height\">\n  <div class=\"col-xs-4 hidden-xs divider\">\n    <ul class=\"ul-no-style\" *ngFor=\"let web of websites\">\n      <li class=\"li-margin\">\n        <a routerLink=\"../{{web._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right icon-padding\"></span>\n        </a>\n        <a routerLink=\"../{{web._id}}/page\">\n          {{web.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-xs-8 container-padding\">\n    <form (ngSubmit)=\"createWebsite()\" #w=\"ngForm\">\n      <label for=\"Website-Name\">Name</label>\n      <input id=\"Website-Name\"\n             type=\"text\"\n             class=\"form-control\"\n             placeholder=\"Name\"\n             name=\"websiteName\"\n             ngModel required #websiteName=\"ngModel\"/>\n      <label for=\"Website-Description\">Description</label>\n      <textarea id=\"Website-Description\"\n                class=\"form-control\"\n                rows=\"8\"\n                placeholder=\"Add a description for your website.\"\n                name=\"websiteDescription\"\n                [(ngModel)]=\"websiteDescription\">\n      </textarea>\n      <button class=\"btn btn-primary btn-block\"\n              type=\"submit\"\n              [disabled]=\"!w.valid\">Create</button>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-blue\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text white-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text white-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, route, router, sharedService) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.route.params.subscribe(function (params) {
            _this.websiteService.findWebsitesByUser(_this.user._id).subscribe(function (websites) {
                _this.websites = websites;
            }, function (error) { return console.log(error); });
        });
    };
    WebsiteNewComponent.prototype.createWebsite = function () {
        var _this = this;
        this.websiteName = this.webForm.value.websiteName;
        this.websiteDescription = this.webForm.value.websiteDescription;
        var website = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */]('', this.websiteName, this.user._id, this.websiteDescription);
        this.websiteService.createWebsite(this.user._id, website).subscribe(function (data) {
            _this.router.navigate(['/profile/website']);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('w'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */])
    ], WebsiteNewComponent.prototype, "webForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("../../../../../src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedService */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Choose Widget\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <ul class=\"ul-no-style\">\n    <li class=\"li-margin\">\n      <a (click)=\"createWidget('HEADING')\">\n        Header\n      </a>\n    </li>\n    <li class=\"li-margin\">\n      <a (click)=\"createWidget('IMAGE')\">\n        Image\n      </a>\n    </li>\n    <li class=\"li-margin\">\n      <a (click)=\"createWidget('YOUTUBE')\">\n        YouTube\n      </a>\n    </li>\n    <li class=\"li-margin\">\n      <a (click)=\"createWidget('HTML')\">\n        HTML\n      </a>\n    </li>\n    <li class=\"li-margin\">\n      <a (click)=\"createWidget('TEXT')\">\n        TEXT\n      </a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.createWidget = function (type) {
        var _this = this;
        var widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */](null, type, this.pageId, null, null, null, null, null, null, null);
        this.widgetService.createWidget(this.pageId, widget).subscribe(function (data) {
            widget = data;
            _this.router.navigate(['../', widget._id], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.type\">\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', '', '', 1, '', '', '', '', false, null);
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Widget Edit\n    </a>\n    <a (click)=\"updateWidget()\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <label for=\"WidgetHeaderName\">Widget Name</label>\n  <input id=\"WidgetHeaderName\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"name\"\n         [(ngModel)]=\"widget.name\"/>\n  <label for=\"WidgetHeaderText\">Text</label>\n  <input id=\"WidgetHeaderText\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"Text\"\n         [(ngModel)]=\"widget.text\"/>\n  <label for=\"WidgetHeaderSize\">Size</label>\n  <input id=\"WidgetHeaderSize\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"3\"\n         [(ngModel)]=\"widget.size\"/>\n\n  <a class=\"btn btn-success btn-block\"\n     (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.errorFlag = false;
        this.errorMsg = 'Widget name cannot be empty!';
        this.widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */](null, 'HEADING', null, 1, null, null, null, null, false, null);
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetHeaderComponent.prototype.updateWidget = function () {
        var _this = this;
        if (!this.widget.name) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidgetInServer(this.widgetId, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidgetInServer(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Widget Edit\n    </a>\n    <a (click)=\"updateWidget()\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <label for=\"WidgetHtmlName\">Widget Name</label>\n  <input id=\"WidgetHtmlName\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"name\"\n         [(ngModel)]=\"widget.name\"/>\n  <label>HTML</label>\n  <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n  <br/>\n\n  <a class=\"btn btn-success btn-block\"\n     (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.errorFlag = false;
        this.errorMsg = 'Widget name cannot be empty!';
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', '', '', 1, '', '', '', '', false, null);
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        if (!this.widget.name) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidgetInServer(this.widgetId, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidgetInServer(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Search Flickr\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\"\n           type=\"text\"\n           placeholder=\"Search Images\"\n           class=\"form-control\">\n    <span class=\"input-group-btn\">\n         <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n         </a>\n    </span>\n  </div>\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\"\n         class=\"col-xs-4\">\n      <img (click)=\"selectPhoto(pic)\"\n           width=\"100%\"\n           [src]=\"['https://farm' + pic.farm + '.staticflickr.com/'\n           + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg']\"/>\n      <p></p>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(route, router, flickrService, widgetService) {
        this.route = route;
        this.router = router;
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.errorFlag = false;
        this.errorMsg = 'Search text cannot be empty!';
        this.widget = new __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__["a" /* Widget */]('', '', '', 1, '', '', '', '', false, null);
        this.photos = [null];
    }
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        if (!this.searchText) {
            this.errorFlag = true;
            return;
        }
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        this.widgetService
            .updateWidgetInServer(this.widgetId, this.widget)
            .subscribe(function (data) {
            _this.widget = data;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    FlickrImageSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_flickr_service_client__["a" /* FlickrService */],
            __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Widget Edit\n    </a>\n    <a (click)=\"updateWidget()\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <form>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <label for=\"WidgetImageName\">Widget Name</label>\n    <input id=\"WidgetImageName\"\n           name=\"WidgetImageName\"\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"name\"\n           [(ngModel)]=\"widget.name\"/>\n    <label for=\"WidgetImageURL\">URL</label>\n    <input id=\"WidgetImageURL\"\n           name=\"WidgetImageURL\"\n           type=\"url\"\n           class=\"form-control\"\n           placeholder=\"URL\"\n           [(ngModel)]=\"widget.url\"/>\n    <label for=\"WidgetImageWidth\">Width</label>\n    <input id=\"WidgetImageWidth\"\n           name=\"WidgetImageWidth\"\n           type=\"text\"\n           class=\"form-control\"\n           placeholder=\"100%\"\n           [(ngModel)]=\"widget.width\"/>\n  </form>\n\n  <label for=\"WidgetImageUpload\">Upload</label>\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <input  name=\"myFile\"\n            id=\"WidgetImageUpload\"\n            placeholder=\"No file chosen\"\n            type=\"file\" class=\"form-control\"/>\n    <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n  </form>\n  <p></p>\n\n  <a class=\"btn btn-warning btn-block\"\n     routerLink=\"flickr\">\n    Search on Flickr\n  </a>\n  <a class=\"btn btn-success btn-block\"\n     (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.errorFlag = false;
        this.errorMsg = 'Widget name cannot be empty!';
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', '', '', 1, '', '', '', '', false, null);
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.userId = params['userId'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetImageComponent.prototype.updateWidget = function () {
        var _this = this;
        if (!this.widget.name) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidgetInServer(this.widgetId, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidgetInServer(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Widget Edit\n    </a>\n    <a (click)=\"updateWidget()\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <label for=\"WidgetTextName\">Widget Name</label>\n  <input id=\"WidgetTextName\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"name\"\n         [(ngModel)]=\"widget.name\"/>\n  <label for=\"WidgetTextText\">Text</label>\n  <input id=\"WidgetTextText\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"Text\"\n         [(ngModel)]=\"widget.text\"/>\n  <label for=\"WidgetTextRows\">Rows</label>\n  <input id=\"WidgetTextRows\"\n         type=\"number\"\n         class=\"form-control\"\n         placeholder=\"3\"\n         [(ngModel)]=\"widget.size\"/>\n  <label for=\"WidgetTextPlaceholder\">Placeholder</label>\n  <input id=\"WidgetTextPlaceholder\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"Placeholder\"\n         [(ngModel)]=\"widget.placeholder\"/>\n  <p></p>\n  <div class=\"input-group\">\n    <label for=\"formatted\" class=\"form-control\">Formatted</label>\n    <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\"\n               id=\"formatted\"\n               class=\"pull-right\"\n               type=\"checkbox\"/>\n    </span>\n  </div>\n\n  <br/>\n  <a class=\"btn btn-success btn-block\"\n     (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.errorFlag = false;
        this.errorMsg = 'Widget name cannot be empty!';
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', '', '', 1, '', '', '', '', false, null);
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        if (!this.widget.name) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidgetInServer(this.widgetId, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidgetInServer(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Widget Edit\n    </a>\n    <a (click)=\"updateWidget()\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <label for=\"WidgetYoutubeName\">Widget Name</label>\n  <input id=\"WidgetYoutubeName\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"name\"\n         [(ngModel)]=\"widget.name\"/>\n  <label for=\"WidgetYoutubeURL\">URL</label>\n  <input id=\"WidgetYoutubeURL\"\n         type=\"url\"\n         class=\"form-control\"\n         placeholder=\"URL\"\n         [(ngModel)]=\"widget.url\"/>\n  <label for=\"WidgetYoutubeWidth\">Width</label>\n  <input id=\"WidgetYoutubeWidth\"\n         type=\"text\"\n         class=\"form-control\"\n         placeholder=\"100%\"\n         [(ngModel)]=\"widget.width\"/>\n\n  <a class=\"btn btn-success btn-block\"\n     (click)=\"updateWidget()\">\n    Update\n  </a>\n  <a class=\"btn btn-danger btn-block\"\n     (click)=\"deleteWidget()\">\n    Delete\n  </a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.errorFlag = false;
        this.errorMsg = 'Widget name cannot be empty!';
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', '', '', 1, '', '', '', '', false, null);
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetYoutubeComponent.prototype.updateWidget = function () {
        var _this = this;
        if (!this.widget.name) {
            this.errorFlag = true;
            return;
        }
        this.widgetService.updateWidgetInServer(this.widgetId, this.widget).subscribe(function (widget) {
            _this.widget = widget;
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this.widgetService.deleteWidgetInServer(this.widgetId).subscribe(function () {
            _this.router.navigate(['../'], { relativeTo: _this.route });
        }, function (error) { return console.log(error); });
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav-grey navbar-fixed-top\">\n  <div class = \"container-fluid row\">\n    <a routerLink=\"../../\"\n       class=\"navbar-text black-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n    <a routerLink=\"./\"\n       class=\"navbar-text grey-text pull-left\">\n      Widgets\n    </a>\n    <a routerLink=\"./new\"\n       class=\"black-text navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container container-padding\">\n  <ul class=\"ul-no-style\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n    <li class=\"widget\" *ngFor=\"let wid of widgets\">\n      <div class=\"widget-icons\">\n        <a routerLink=\"./\" class=\"pull-right black-text\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </a>\n        <a routerLink=\"./{{wid._id}}\" class=\"pull-right\">\n          <span class=\"glyphicon glyphicon-cog\"></span>\n        </a>\n      </div>\n      <div [ngSwitch]=\"wid.type\">\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div [ngSwitch]=\"wid.size\">\n            <div *ngSwitchCase=\"'1'\">\n              <h1>{{wid.text}}</h1>\n            </div>\n            <div *ngSwitchCase=\"'2'\">\n              <h2>{{wid.text}}</h2>\n            </div>\n            <div *ngSwitchCase=\"'3'\">\n              <h3>{{wid.text}}</h3>\n            </div>\n            <div *ngSwitchCase=\"'4'\">\n              <h4>{{wid.text}}</h4>\n            </div>\n            <div *ngSwitchCase=\"'5'\">\n              <h5>{{wid.text}}</h5>\n            </div>\n            <div *ngSwitchCase=\"'6'\">\n              <h6>{{wid.text}}</h6>\n            </div>\n            <div *ngSwitchDefault>\n              <h1>{{wid.text}}</h1>\n            </div>\n          </div>\n        </div>\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <img class=\"img-responsive widget-image\" [width]= \"wid.width\"\n               [src]=\"wid.url\"/>\n        </div>\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"embed-responsive embed-responsive-16by9 youtube-widget\">\n            <iframe [width]=\"wid.width\" [src]=\"wid.url | safe\"\n                    frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n        <div *ngSwitchCase=\"'HTML'\" [innerHTML]=\"wid.text\"></div>\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div *ngIf=\"wid.formatted\">\n            <quill-editor [(ngModel)]=\"wid.text\"></quill-editor>\n          </div>\n          <input *ngIf=\"!wid.formatted && (!wid.size || wid.size===1)\"\n                 placeholder=\"{{wid.placeholder}}\" class=\"form-control\"/>\n          <textarea *ngIf=\"!wid.formatted && (wid.size > 1)\"\n                    rows=\"{{wid.size}}\" placeholder=\"{{wid.placeholder}}\"\n                    class=\"form-control\">{{wid.text}}</textarea>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom nav-grey\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/login\"\n       class=\"navbar-text pull-left icon-padding\">\n      <span class=\"glyphicon glyphicon-home\"></span>\n    </a>\n    <a routerLink=\"/profile\"\n       class=\"navbar-text pull-right icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/views/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(route, widgetService) {
        this.route = route;
        this.widgetService = widgetService;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
            }, function (error) { return console.log(error); });
        });
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        this.widgetService.reorderWidgetsInServer(this.pageId, indexes).subscribe(function () { }, function (error) { return console.log(error); });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("../../../../../src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
    production: false,
    // baseUrl: 'http://localhost:3100'
    baseUrl: 'https://cs5610-assignment2.herokuapp.com/'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map