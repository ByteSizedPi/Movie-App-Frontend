(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Personal\1 Coding\1 Angular\Movie App\src\main.ts */"zUnb");


/***/ }),

/***/ "1Bbu":
/*!*************************************************!*\
  !*** ./src/app/modules/movies/movies.module.ts ***!
  \*************************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/directives/directives.module */ "yGOH");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "gJ5v");
/* harmony import */ var _components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scroller/scroller.component */ "KK4Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class MoviesModule {
}
MoviesModule.ɵfac = function MoviesModule_Factory(t) { return new (t || MoviesModule)(); };
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__["DirectivesModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__["PipesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_3__["ScrollerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_1__["DirectivesModule"], _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__["PipesModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_3__["ScrollerComponent"]] }); })();


/***/ }),

/***/ "38SF":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/logo.pipe.ts ***!
  \*******************************************/
/*! exports provided: LogoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoPipe", function() { return LogoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LogoPipe {
    constructor() {
        this.BASE = "https://image.tmdb.org/t/p/original";
    }
    transform({ logo_path: url }) {
        return url ? this.BASE + url : "";
    }
}
LogoPipe.ɵfac = function LogoPipe_Factory(t) { return new (t || LogoPipe)(); };
LogoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "logo", type: LogoPipe, pure: true });


/***/ }),

/***/ "3paH":
/*!********************************************************!*\
  !*** ./src/app/shared/services/movie-modal.service.ts ***!
  \********************************************************/
/*! exports provided: MovieModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModalService", function() { return MovieModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "ONpJ");
/* harmony import */ var _modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/movies/services/movies.service */ "DAcT");




class MovieModalService {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.isOpen = false;
        this.colorLoaded = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openModal = (movie) => {
            const open = () => {
                this.onChange.emit(true);
                this.curMovie = movie;
                this.isOpen = true;
                this.lockScroll();
            };
            if (this.isOpen) {
                this.closeModal();
                setTimeout(() => open(), 201);
            }
            else {
                open();
            }
        };
        this.closeModal = () => {
            // console.log(this.curMovie.torrents[0]);
            Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["Id"])("movie-modal").style.animation = "slide-out .2s forwards";
            Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["Id"])("backdrop").style.animation = "fade-out .2s forwards";
            setTimeout(() => {
                this.isOpen = false;
                this.onChange.emit(false);
            }, 200);
            this.allowScroll();
        };
        this.lockScroll = () => (_Utils__WEBPACK_IMPORTED_MODULE_1__["BODY"].style.overflowY = "hidden");
        this.allowScroll = () => (_Utils__WEBPACK_IMPORTED_MODULE_1__["BODY"].style.overflowY = "auto");
    }
    get movie() {
        return Object.assign({}, this.curMovie);
    }
    recommendedScroller() {
        return {
            id: `recommended-scroller`,
            aspect: 3 / 2,
            movies: this.moviesService.getRecommended(this.curMovie.tmdb_id),
        };
    }
    similarScroller() {
        return {
            id: `similar-scroller`,
            aspect: 3 / 2,
            movies: this.moviesService.getSimilar(this.curMovie.tmdb_id),
        };
    }
}
MovieModalService.ɵfac = function MovieModalService_Factory(t) { return new (t || MovieModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
MovieModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieModalService, factory: MovieModalService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "3uMn":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/webtorrent.service.ts ***!
  \*******************************************************/
/*! exports provided: WebtorrentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebtorrentService", function() { return WebtorrentService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WebtorrentService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = "http://127.0.0.1:3000/api/torrent/";
        this.curMovie = "C31BF8F4BAF346FEACC597682FCF4453F86480EE";
        this.getMovies = () => this.http
            .get(this.BASE_URL + "add/" + this.curMovie, {
            responseType: "arraybuffer",
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((infoHash) => this.BASE_URL + "add/" + infoHash));
    }
    set hash(hash) {
        this.curMovie = hash;
    }
}
WebtorrentService.ɵfac = function WebtorrentService_Factory(t) { return new (t || WebtorrentService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WebtorrentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebtorrentService, factory: WebtorrentService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "5AVn":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/avatar.pipe.ts ***!
  \*********************************************/
/*! exports provided: AvatarPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarPipe", function() { return AvatarPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AvatarPipe {
    constructor() {
        this.BASE = "https://image.tmdb.org/t/p/original";
    }
    transform({ author_details: { avatar_path: url } }) {
        if (!url)
            return "";
        if (url.substring(1, 5) === "http")
            return url.substring(1);
        return this.BASE + url;
    }
}
AvatarPipe.ɵfac = function AvatarPipe_Factory(t) { return new (t || AvatarPipe)(); };
AvatarPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "avatar", type: AvatarPipe, pure: true });


/***/ }),

/***/ "6PR/":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/darken-color.pipe.ts ***!
  \***************************************************/
/*! exports provided: DarkenColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkenColorPipe", function() { return DarkenColorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DarkenColorPipe {
    transform(value, ...args) {
        return null;
    }
}
DarkenColorPipe.ɵfac = function DarkenColorPipe_Factory(t) { return new (t || DarkenColorPipe)(); };
DarkenColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "darkenColor", type: DarkenColorPipe, pure: true });


/***/ }),

/***/ "8GHg":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/movie-modal/movie-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: MovieModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModalComponent", function() { return MovieModalComponent; });
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Utils */ "ONpJ");
/* harmony import */ var src_app_shared_pipes_backdrop_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/pipes/backdrop.pipe */ "ewTE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_movie_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie-modal.service */ "3paH");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/colors.service */ "rTRm");
/* harmony import */ var _modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/movies/services/user.service */ "Q28f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/movies/components/scroller/scroller.component */ "KK4Z");
/* harmony import */ var _yt_player_yt_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../yt-player/yt-player.component */ "gKLn");
/* harmony import */ var src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/directives/img-load.directive */ "saem");
/* harmony import */ var _directives_stream_movie_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/stream-movie.directive */ "uNma");
/* harmony import */ var _pipes_runtime_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/runtime.pipe */ "LgQT");
/* harmony import */ var _pipes_logo_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/logo.pipe */ "38SF");
/* harmony import */ var _pipes_avatar_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/avatar.pipe */ "5AVn");















function MovieModalComponent_app_yt_player_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-yt-player", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("url", ctx_r0.getTrailer());
} }
function MovieModalComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "backdrop");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, ctx_r1.movie, 3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { color: a0 }; };
function MovieModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieModalComponent_div_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.toggleList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " My List ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("streamMovie", ctx_r2.modal.movie);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r2.getStyles())("disabled", ctx_r2.listPending);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r2.borderTop());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r2.getStyles());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.getListIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx_r2.getTextColor(ctx_r2.colors.curColors.vibrant)));
} }
function MovieModalComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r9.getGenre());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", genre_r10, " ");
} }
function MovieModalComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieModalComponent_div_14_div_1_Template, 2, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.movie.genres);
} }
function MovieModalComponent_div_15_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "released:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r11.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.movie.year, " ");
} }
function MovieModalComponent_div_15_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "mpa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r12.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.movie.mpa_rating, " ");
} }
function MovieModalComponent_div_15_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "runtime:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "runtime");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx_r13.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx_r13.movie.runtime), " ");
} }
function MovieModalComponent_div_15_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "language:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r14.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.movie.language, " ");
} }
function MovieModalComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MovieModalComponent_div_15_div_8_Template, 5, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MovieModalComponent_div_15_div_9_Template, 5, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MovieModalComponent_div_15_div_10_Template, 6, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MovieModalComponent_div_15_div_11_Template, 5, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r4.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 7, ctx_r4.movie.rating, "1.1-1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx_r4.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.movie.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.movie.mpa_rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.movie.runtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.movie.language);
} }
const _c1 = function (a0) { return { "border-color": a0 }; };
function MovieModalComponent_div_16_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r17.colors.curColors.darkMuted))("src", member_r16.url_small_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](member_r16.character_name);
} }
function MovieModalComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieModalComponent_div_16_div_1_div_1_Template, 7, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", member_r16.url_small_image);
} }
function MovieModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MovieModalComponent_div_16_div_1_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.movie.cast);
} }
function MovieModalComponent_div_17_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "budget:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", ctx_r19.movie.budget / 1000000, "M");
} }
function MovieModalComponent_div_17_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "revenue:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 1, ctx_r20.movie.revenue / 1000000, "1.0-0"), "M");
} }
function MovieModalComponent_div_17_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const provider_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, provider_r25), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](provider_r25.provider_name);
} }
function MovieModalComponent_div_17_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Providers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MovieModalComponent_div_17_div_17_div_4_Template, 6, 4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r21.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r21.movie.providers);
} }
function MovieModalComponent_div_17_h3_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r22.colors.curColors.lightVibrant));
} }
function MovieModalComponent_div_17_div_20_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, review_r26.author_details.rating, "1.1-1"), " ");
} }
function MovieModalComponent_div_17_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MovieModalComponent_div_17_div_20_h3_7_Template, 4, 4, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, review_r26), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](review_r26.author_details.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", review_r26.author_details.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", review_r26.content, " ");
} }
const _c2 = function () { return { height: "auto" }; };
const _c3 = function () { return { height: "0" }; };
function MovieModalComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieModalComponent_div_17_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.toggleMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "IMDB ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MovieModalComponent_div_17_div_15_Template, 5, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MovieModalComponent_div_17_div_16_Template, 6, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MovieModalComponent_div_17_div_17_Template, 5, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MovieModalComponent_div_17_h3_18_Template, 2, 3, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MovieModalComponent_div_17_div_20_Template, 10, 6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.showMore ? "fas fa-chevron-up" : "fas fa-chevron-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r6.showMore ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx_r6.colors.curColors.lightVibrant));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.movie.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.movie.budget);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.movie.revenue);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.movie.providers[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.movie.reviews[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.movie.reviews);
} }
class MovieModalComponent {
    constructor(modal, colors, user) {
        this.modal = modal;
        this.colors = colors;
        this.user = user;
        this.trailerShown = false;
        this.listPending = false;
        this.isListed = false;
        this.colorsLoaded = false;
        this.movie = this.modal.movie;
        this.showMore = false;
        this.getTextColor = _services_Utils__WEBPACK_IMPORTED_MODULE_0__["getTextColor"];
        this.getTrailer = () => this.movie.yt_trailer;
        this.getStyles = () => {
            return {
                backgroundColor: Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["darkenColor"])(this.colors.curColors.vibrant, this.listPending ? 0.5 : 1),
                color: this.colors.curColors.vibrant,
            };
        };
        this.getListIcon = () => `assets/${this.isListed ? "minus-" : "plus-"}${this.getIconColor()}.svg`;
        this.getIconColor = () => Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["getTextColor"])(this.colors.curColors.vibrant) === "#fff" ? "white" : "black";
    }
    ngOnInit() {
        this.colors
            .getPalette(new src_app_shared_pipes_backdrop_pipe__WEBPACK_IMPORTED_MODULE_1__["BackdropPipe"]().transform(this.movie, 3))
            .then(() => (this.colorsLoaded = true));
    }
    getGenre() {
        return {
            color: this.colors.curColors.lightVibrant,
            backgroundColor: `${this.colors.curColors.darkMuted}40`,
            border: `1px solid ${this.colors.curColors.lightVibrant}`,
        };
    }
    // toggleTrailer() {
    //   this.trailerShown = !this.trailerShown;
    //   query(".button-container").classList.toggle("shift-up");
    // }
    toggleList() {
        this.listPending = true;
        this.user.appendShowList(this.movie).subscribe((results) => (this.listPending = false), (err) => console.log(err));
    }
    toggleMore() {
        this.showMore = !this.showMore;
    }
    borderTop() {
        return { borderTop: `5rem solid${this.colors.curColors.vibrant}` };
    }
}
MovieModalComponent.ɵfac = function MovieModalComponent_Factory(t) { return new (t || MovieModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_3__["MovieModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_colors_service__WEBPACK_IMPORTED_MODULE_4__["ColorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
MovieModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MovieModalComponent, selectors: [["app-movie-modal"]], decls: 25, vars: 11, consts: [["id", "backdrop", 1, "container", 3, "click"], ["id", "movie-modal", 1, "mh-100"], [1, "trailer", "w-100"], ["id", "trailer", 3, "url", 4, "ngIf"], ["imgLoad", "", "class", "backdrop", "alt", "", 3, "src", 4, "ngIf"], ["class", "row button-container", 4, "ngIf"], ["id", "title"], ["id", "x", "src", "assets/x.svg", "alt", "", 3, "click"], [1, "row", "space-between"], [1, "description"], ["class", "row wrap genres", 4, "ngIf"], ["class", "column content-container", 4, "ngIf"], ["class", "row wrap cast", 4, "ngIf"], ["id", "more", 4, "ngIf"], [1, "recommendations", "w-100"], [3, "init"], ["id", "trailer", 3, "url"], ["imgLoad", "", "alt", "", 1, "backdrop", 3, "src"], [1, "row", "button-container"], ["id", "play-button", 1, "center", 3, "streamMovie"], [1, "fas", "fa-play"], ["id", "list-button", 1, "center", 3, "ngStyle", "disabled", "click"], [1, "loading", 3, "ngStyle"], [1, "row", "center", "list-container", "container", 3, "ngStyle"], [3, "src"], [3, "ngStyle"], [1, "row", "wrap", "genres"], ["class", "genre", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "genre", 3, "ngStyle"], [1, "column", "content-container"], [1, "row"], [1, "fas", "fa-star", 3, "ngStyle"], ["class", "row", 4, "ngIf"], [1, "row", "wrap", "cast"], [4, "ngFor", "ngForOf"], ["class", "cast-member row center", 4, "ngIf"], [1, "cast-member", "row", "center"], ["alt", "", 3, "ngStyle", "src"], [1, "left-align"], [1, "name"], [1, "char"], ["id", "more"], [3, "ngClass", "click"], ["id", "more-content", 3, "ngStyle"], [1, "column", "w-100"], [1, "column", "more-info"], ["class", "column w-100 providers", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [1, "column"], ["class", "review column", 4, "ngFor", "ngForOf"], [1, "column", "w-100", "providers"], ["class", "column", 4, "ngFor", "ngForOf"], [1, "row", "center-vertical"], ["alt", "", 3, "src"], [1, "review", "column"], ["class", "review-rating center-vertical", 4, "ngIf"], [1, "review-rating", "center-vertical"], [1, "fas", "fa-star"]], template: function MovieModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieModalComponent_Template_span_click_0_listener() { return ctx.modal.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MovieModalComponent_app_yt_player_4_Template, 1, 1, "app-yt-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MovieModalComponent_img_5_Template, 2, 4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MovieModalComponent_div_6_Template, 11, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MovieModalComponent_Template_img_click_9_listener() { return ctx.modal.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MovieModalComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MovieModalComponent_div_15_Template, 12, 14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MovieModalComponent_div_16_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MovieModalComponent_div_17_Template, 21, 13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Similar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-scroller", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "app-scroller", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.movie.yt_trailer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.movie.yt_trailer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.colorsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.movie.summary);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.colorsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.colorsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.colorsLoaded && ctx.movie.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.colorsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("init", ctx.modal.similarScroller());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("init", ctx.modal.recommendedScroller());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_7__["ScrollerComponent"], _yt_player_yt_player_component__WEBPACK_IMPORTED_MODULE_8__["YtPlayerComponent"], src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_9__["ImgLoadDirective"], _directives_stream_movie_directive__WEBPACK_IMPORTED_MODULE_10__["StreamMovieDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [src_app_shared_pipes_backdrop_pipe__WEBPACK_IMPORTED_MODULE_1__["BackdropPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _pipes_runtime_pipe__WEBPACK_IMPORTED_MODULE_11__["RuntimePipe"], _pipes_logo_pipe__WEBPACK_IMPORTED_MODULE_12__["LogoPipe"], _pipes_avatar_pipe__WEBPACK_IMPORTED_MODULE_13__["AvatarPipe"]], styles: ["section[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: var(--modal-width);\n  margin: 0 calc((100vw - var(--modal-width)) / 2);\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n#movie-modal[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4.5rem;\n  width: var(--modal-width);\n  background: var(--bg);\n  border-radius: var(--radius-l) var(--radius-l) 0 0;\n  box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 15px;\n  animation: slide-in 0.2s;\n  padding-bottom: var(--ml);\n  overflow: hidden;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  opacity: 0;\n  animation: fade-in 0.4s 0.5s forwards;\n  transition: opacity 0.2s;\n  padding: 0.75rem var(--mm);\n}\n\n.trailer[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: calc(0.5625 * var(--modal-width));\n}\n\n.trailer[_ngcontent-%COMP%]   .backdrop[_ngcontent-%COMP%] {\n  height: calc(0.5625 * var(--modal-width));\n  border-radius: var(--radius-l);\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 2.75rem;\n  border-radius: calc(var(--radius-s) + 4px);\n  padding: 4px;\n  box-shadow: rgba(0, 0, 0, 0.7) 0px 4px 10px 2px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: filter 0.1s;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\nbutton[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(0.7);\n}\n\nbutton[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  padding: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n  margin: 0.5rem 0 0.5rem 0.5rem;\n}\n\nbutton[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(97%);\n}\n\n#play-button[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  margin-right: 0.75rem;\n  width: 6.75rem;\n}\n\n#play-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 1.2rem;\n  margin: 0.5rem 0 0.5rem 0.5rem;\n}\n\n.list-container[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-s);\n}\n\n.loading[_ngcontent-%COMP%] {\n  position: absolute;\n  border-bottom: 5rem solid transparent;\n  width: 10rem;\n  height: 0;\n  animation: rotate-360 1s forwards infinite linear;\n}\n\n@keyframes rotate-360 {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#x[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 2rem;\n  height: 2rem;\n  margin: 1rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 50%;\n  transition: 0.1s;\n  background: rgba(0, 0, 0, 0.4);\n  opacity: 1;\n}\n\n#x[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.7);\n}\n\n#backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.85);\n  animation: fade-in 0.2s;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(50vh);\n    opacity: 0;\n  }\n}\n\n@keyframes slide-in {\n  from {\n    transform: translateY(50vh);\n  }\n  to {\n    transform: translateY(0vh);\n  }\n}\n\n.content-container[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.2rem;\n  margin: var(--mm);\n  border-radius: calc(var(--radius-s) + 4px);\n  opacity: 0;\n  animation: fade-in 0.4s 0.2s forwards;\n  background-color: var(--bg-hover);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n#title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 23rem 0 1rem 2rem;\n  margin: 0;\n  font-size: 2rem;\n  line-height: 2rem;\n  pointer-events: none;\n  color: white;\n  background: linear-gradient(22.5deg, black 0%, rgba(0, 0, 0, 0) 50%);\n  border-radius: 0 0 var(--radius-l) var(--radius-l);\n}\n\nh3[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  font-size: 1.2rem;\n  margin: 0.2rem 0.75rem;\n  width: 6rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: #b8b8b8;\n  margin: 3rem var(--mm) 1rem var(--mm);\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: var(--mm);\n  padding: 0;\n}\n\n.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 3rem;\n  margin-top: 0;\n  margin-left: var(--ms);\n  font-size: 1.1rem;\n}\n\n.genre[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  padding: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;\n  border-radius: 2rem;\n  border: 2px solid white;\n}\n\n.genre[_ngcontent-%COMP%]:nth-of-type(1) {\n  margin-left: 0;\n}\n\n.left-align[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n\n.left-align[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0.25rem 1rem;\n}\n\n.cast[_ngcontent-%COMP%] {\n  margin: var(--mm);\n}\n\n.cast[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  margin-bottom: 0.5rem;\n  border: 4px solid black;\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;\n}\n\n.cast[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 400;\n  text-align: center;\n  margin-bottom: 0.25rem;\n}\n\n.cast[_ngcontent-%COMP%]   .char[_ngcontent-%COMP%] {\n  color: var(--light-text);\n  font-weight: 200;\n  text-align: center;\n}\n\n#more[_ngcontent-%COMP%] {\n  padding: 0 var(--mm);\n  overflow: hidden;\n}\n\n#more[_ngcontent-%COMP%]   #more-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n#more[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n#more[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%], #more[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  padding: 0.5rem;\n}\n\n#more[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]:hover, #more[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: var(--bg-hover);\n}\n\n#more[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%] {\n  background-color: var(--bg-hover);\n  border-radius: calc(var(--radius-s) + 4px);\n  margin: 0.5rem 0 1.75rem 0.75rem;\n  padding: 0.75rem 0.2rem;\n}\n\n#more[_ngcontent-%COMP%]   .w-100[_ngcontent-%COMP%]   .more-info[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n#more[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%] {\n  background-color: var(--bg-hover);\n  border-radius: calc(var(--radius-s) + 4px);\n  margin: 0.5rem 0 0.5rem 0.75rem;\n  padding: var(--ms);\n  max-height: 12rem;\n  overflow: hidden;\n}\n\n#more[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 0 0 var(--ms);\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n}\n\n#more[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n#more[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--light-text);\n  margin: 0;\n  padding: var(--ms);\n}\n\n#more[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%] {\n  color: goldenrod;\n}\n\n#more[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n\n#more[_ngcontent-%COMP%]   .providers[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  margin: calc(var(--ms) / 2) var(--ms);\n}\n\n#more[_ngcontent-%COMP%]   .providers[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: auto;\n}\n\n.recommendations[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: var(--mm);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbW92aWUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7RUFDQSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUFFO0VBQ0UseUNBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUVBO0VBQ0UsZUFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlFO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtBQUhKOztBQU9BO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSkY7O0FBTUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQUpKOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsaURBQUE7QUFMRjs7QUFPRTtFQUNFO0lBQ0Usb0JBQUE7RUFMSjtFQVFFO0lBQ0UseUJBQUE7RUFOSjtBQUNGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtBQVBGOztBQVNFO0VBQ0UsOEJBQUE7QUFQSjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0FBUkY7O0FBV0E7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQVJGO0VBVUE7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFSRjtBQUNGOztBQVdBO0VBQ0U7SUFDRSwyQkFBQTtFQVRGO0VBV0E7SUFDRSwwQkFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxvRUFBQTtFQUNBLGtEQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0FBVkY7O0FBYUE7RUFRRSxpQkFBQTtFQUNBLFVBQUE7QUFqQkY7O0FBU0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQVBKOztBQWFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFZRTtFQUNFLGNBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0FBWEY7O0FBWUU7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQkFBQTtBQVZKOztBQWFBO0VBQ0UsaUJBQUE7QUFWRjs7QUFZRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJDQUFBO0FBVko7O0FBYUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBWEo7O0FBY0U7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFnQkE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBZUU7RUFDRSxnQkFBQTtBQWJKOztBQWdCRTtFQUNFLGNBQUE7QUFkSjs7QUFpQkU7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0FBZko7O0FBZ0JJOztFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBYk47O0FBaUJFO0VBQ0UsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFmSjs7QUFrQkU7RUFDRSxZQUFBO0FBaEJKOztBQW1CRTtFQUNFLGlDQUFBO0VBQ0EsMENBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQWpCSjs7QUFtQkk7RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFqQk47O0FBb0JJO0VBQ0UsV0FBQTtBQWxCTjs7QUFxQkk7RUFDRSx3QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQW5CTjs7QUFzQkk7RUFDRSxnQkFBQTtBQXBCTjs7QUFzQk07RUFDRSxvQkFBQTtBQXBCUjs7QUEwQkk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7QUF4Qk47O0FBMkJJO0VBQ0UsV0FBQTtBQXpCTjs7QUErQkU7RUFDRSxpQkFBQTtBQTVCSiIsImZpbGUiOiJtb3ZpZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IHZhcigtLW1vZGFsLXdpZHRoKTtcclxuICBtYXJnaW46IDAgY2FsYygoMTAwdncgLSB2YXIoLS1tb2RhbC13aWR0aCkpIC8gMik7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuI21vdmllLW1vZGFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0LjVyZW07XHJcbiAgd2lkdGg6IHZhcigtLW1vZGFsLXdpZHRoKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWwpIHZhcigtLXJhZGl1cy1sKSAwIDA7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjgpIDBweCA1cHggMTVweDtcclxuICBhbmltYXRpb246IHNsaWRlLWluIDAuMnM7XHJcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLW1sKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjRzIDAuNXMgZm9yd2FyZHM7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gdmFyKC0tbW0pO1xyXG59XHJcblxyXG4udHJhaWxlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBjYWxjKDAuNTYyNSAqIHZhcigtLW1vZGFsLXdpZHRoKSk7XHJcbiAgLmJhY2tkcm9wIHtcclxuICAgIGhlaWdodDogY2FsYygwLjU2MjUgKiB2YXIoLS1tb2RhbC13aWR0aCkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWwpO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1yYWRpdXMtcykgKyA0cHgpO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNykgMHB4IDRweCAxMHB4IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMXM7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NyUpO1xyXG4gIH1cclxufVxyXG5cclxuI3BsYXktYnV0dG9uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG4gIHdpZHRoOiA2Ljc1cmVtO1xyXG5cclxuICBpIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgbWFyZ2luOiAwLjVyZW0gMCAwLjVyZW0gMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3QtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXMpO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwcmVtO1xyXG4gIGhlaWdodDogMDtcclxuICBhbmltYXRpb246IHJvdGF0ZS0zNjAgMXMgZm9yd2FyZHMgaW5maW5pdGUgbGluZWFyO1xyXG5cclxuICBAa2V5ZnJhbWVzIHJvdGF0ZS0zNjAge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiN4IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgb3BhY2l0eTogMTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG59XHJcblxyXG4jYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuMnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwdmgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwdmgpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHZoKTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwLjJyZW07XHJcbiAgbWFyZ2luOiB2YXIoLS1tbSk7XHJcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1yYWRpdXMtcykgKyA0cHgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuNHMgMC4ycyBmb3J3YXJkcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ob3Zlcik7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjNyZW0gMCAxcmVtIDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyLjVkZWcsIHJnYmEoMCwgMCwgMCwgMSkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkaXVzLWwpIHZhcigtLXJhZGl1cy1sKTtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMC4ycmVtIDAuNzVyZW07XHJcbiAgd2lkdGg6IDZyZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogI2I4YjhiODtcclxuICBtYXJnaW46IDNyZW0gdmFyKC0tbW0pIDFyZW0gdmFyKC0tbW0pO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIHAge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbXMpO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIG1hcmdpbjogdmFyKC0tbW0pO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5nZW5yZSB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAwcHggNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgJjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5sZWZ0LWFsaWduIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgaDMge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtIDFyZW07XHJcbiAgfVxyXG59XHJcbi5jYXN0IHtcclxuICBtYXJnaW46IHZhcigtLW1tKTtcclxuXHJcbiAgaW1nIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogNHJlbTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDBweCA1cHggMTVweDtcclxuICB9XHJcblxyXG4gIC5uYW1lIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNoYXIge1xyXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiNtb3JlIHtcclxuICBwYWRkaW5nOiAwIHZhcigtLW1tKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAjbW9yZS1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5mYS1jaGV2cm9uLWRvd24sXHJcbiAgLmZhLWNoZXZyb24tdXAge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1ob3Zlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW9yZS1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWhvdmVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcmFkaXVzLXMpICsgNHB4KTtcclxuICAgIG1hcmdpbjogMC41cmVtIDAgMS43NXJlbSAwLjc1cmVtO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAwLjJyZW07XHJcbiAgfVxyXG5cclxuICAudy0xMDAgLm1vcmUtaW5mbyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmV2aWV3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWhvdmVyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcmFkaXVzLXMpICsgNHB4KTtcclxuICAgIG1hcmdpbjogMC41cmVtIDAgMC41cmVtIDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1tcyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMnJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMCB2YXIoLS1tcyk7XHJcbiAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQtdGV4dCk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogdmFyKC0tbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZXZpZXctcmF0aW5nIHtcclxuICAgICAgY29sb3I6IGdvbGRlbnJvZDtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvdmlkZXJzIHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1tcykgLyAyKSB2YXIoLS1tcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZWNvbW1lbmRhdGlvbnMge1xyXG4gIGgyIHtcclxuICAgIG1hcmdpbjogdmFyKC0tbW0pO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "8ifR":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Utils */ "ONpJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "AB0y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.component */ "KPdS");






const _c0 = function (a0) { return { opacity: a0 }; };
function NavbarComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_img_14_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r0.searchService.isOpen ? "1" : "0"));
} }
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/user"]; };
class NavbarComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.input = ({ target: { value } }) => {
            if (value != this.curValue)
                this.searchService.search(value);
            this.curValue = value;
        };
    }
    ngOnInit() { }
    close() {
        this.curValue = undefined;
        Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["query"])("input").value = "";
        this.searchService.closeModal();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 21, vars: 7, consts: [["id", "navbar", 1, "row", "space-between", "center-vertical", "w-100"], [1, "row"], [3, "routerLink", "click"], [1, "end", "center-vertical"], ["id", "search"], ["type", "text", "placeholder", "search", "spellcheck", "false", 3, "input", "focus"], ["src", "assets/x.svg", "id", "close-search", 3, "ngStyle", "click", 4, "ngIf"], ["src", "assets/user_icon.jpg", "alt", "", "id", "user-icon", 1, "icon", 3, "routerLink"], [1, "chat", "center", "notification", "icon"], ["src", "assets/send.svg", "id", "chat-img", "alt", ""], [1, "settings", "center", "icon"], ["src", "assets/settings.svg", "id", "chat-img", "alt", ""], ["src", "assets/x.svg", "id", "close-search", 3, "ngStyle", "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_h5_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_h5_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "series");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function NavbarComponent_Template_input_input_12_listener($event) { return ctx.input($event); })("focus", function NavbarComponent_Template_input_focus_12_listener($event) { return ctx.input($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_img_14_Template, 1, 3, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-search");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchService.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["nav[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  padding: 0 var(--ml);\n  height: 4.5rem;\n  background: rgba(6, 6, 6, 0.3);\n  background: linear-gradient(180deg, #141414 0%, #14141400 100%);\n}\n\nimg[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#search[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  background-color: #353535;\n  border-radius: 8px;\n  padding-left: 2.8rem;\n  height: 2.6rem;\n  margin: 0 0.5rem;\n  width: 15rem;\n  color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;\n}\n\n#search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #949494;\n}\n\n#search[_ngcontent-%COMP%]::after {\n  content: url(\"/assets/search.svg\");\n  position: absolute;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  width: 3rem;\n  padding-top: 4px;\n  height: 100%;\n  left: 0.5rem;\n}\n\n#search[_ngcontent-%COMP%]   #close-search[_ngcontent-%COMP%] {\n  margin: 0.2rem;\n  padding: 0.2rem;\n  position: absolute;\n  top: 0;\n  right: 0.5rem;\n  border-radius: 8px;\n  height: calc(100% - 0.8rem);\n  transition: opacity 0.2s;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n#search[_ngcontent-%COMP%]   #close-search[_ngcontent-%COMP%]:hover {\n  background-color: #292929;\n}\n\n#nav-user[_ngcontent-%COMP%] {\n  position: relative;\n  color: white;\n  margin: 0 0.5rem;\n}\n\n#nav-user[_ngcontent-%COMP%]   .nav-user-info[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n#nav-user[_ngcontent-%COMP%]   #user-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;\n}\n\n#nav-user[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: white;\n  margin: 0 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: 0.4s;\n  position: relative;\n  padding-bottom: 8px;\n}\n\nh5[_ngcontent-%COMP%]::after {\n  position: absolute;\n  content: \"\";\n  bottom: 0px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  border-radius: 2px;\n  background-color: transparent;\n  transition: 0.4s;\n}\n\nh5[_ngcontent-%COMP%]:hover::after {\n  background-color: white;\n}\n\n.icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  margin: 0 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;\n  cursor: pointer;\n}\n\n.chat[_ngcontent-%COMP%], .settings[_ngcontent-%COMP%] {\n  background: #272727;\n  transition: background 0.2s;\n}\n\n.chat[_ngcontent-%COMP%]:hover, .settings[_ngcontent-%COMP%]:hover {\n  background: #353535;\n}\n\n.notification[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  width: 10px;\n  height: 10px;\n  background-color: red;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0RBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSwyQ0FBQTtBQURKOztBQUdJO0VBQ0UsY0FBQTtBQUROOztBQUtFO0VBQ0Usa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU1JO0VBQ0UseUJBQUE7QUFKTjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBUUU7RUFDRSxrQkFBQTtBQU5KOztBQVNFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FBUEo7O0FBVUU7RUFDRSxlQUFBO0FBUko7O0FBWUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVRGOztBQVdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQVRKOztBQWFJO0VBQ0UsdUJBQUE7QUFYTjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWdCQTs7RUFFRSxtQkFBQTtFQUNBLDJCQUFBO0FBYkY7O0FBZUU7O0VBQ0UsbUJBQUE7QUFaSjs7QUFpQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWRKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMCB2YXIoLS1tbCk7XHJcbiAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSg2LCA2LCA2LCAwLjMpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxNDE0MTQgMCUsICMxNDE0MTQwMCAxMDAlKTtcclxufVxyXG5cclxuaW1nIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jc2VhcmNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTM1MzU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjhyZW07XHJcbiAgICBoZWlnaHQ6IDIuNnJlbTtcclxuICAgIG1hcmdpbjogMCAwLjVyZW07XHJcbiAgICB3aWR0aDogMTVyZW07XHJcblxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCA1cHggMTBweDtcclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL3NlYXJjaC5zdmdcIik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gICNjbG9zZS1zZWFyY2gge1xyXG4gICAgbWFyZ2luOiAwLjJyZW07XHJcbiAgICBwYWRkaW5nOiAwLjJyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAwLjhyZW0pO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNuYXYtdXNlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgMC41cmVtO1xyXG5cclxuICAubmF2LXVzZXItaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAjdXNlci1pY29uIHtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggNXB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIuNXJlbTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luOiAwIDAuNXJlbTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDVweCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYXQsXHJcbi5zZXR0aW5ncyB7XHJcbiAgYmFja2dyb3VuZDogIzI3MjcyNztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzM1MzUzNTtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ge1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgcmlnaHQ6IC0zcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9Xeq":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _as_title_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./as-title.pipe */ "B0mY");
/* harmony import */ var _avatar_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.pipe */ "5AVn");
/* harmony import */ var _text_color_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-color.pipe */ "f9PJ");
/* harmony import */ var _darken_color_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darken-color.pipe */ "6PR/");
/* harmony import */ var _backdrop_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backdrop.pipe */ "ewTE");
/* harmony import */ var _poster_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poster.pipe */ "nOVp");
/* harmony import */ var _runtime_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runtime.pipe */ "LgQT");
/* harmony import */ var _logo_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo.pipe */ "38SF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









const PIPES = [
    _backdrop_pipe__WEBPACK_IMPORTED_MODULE_4__["BackdropPipe"],
    _poster_pipe__WEBPACK_IMPORTED_MODULE_5__["PosterPipe"],
    _runtime_pipe__WEBPACK_IMPORTED_MODULE_6__["RuntimePipe"],
    _darken_color_pipe__WEBPACK_IMPORTED_MODULE_3__["DarkenColorPipe"],
    _text_color_pipe__WEBPACK_IMPORTED_MODULE_2__["TextColorPipe"],
    _avatar_pipe__WEBPACK_IMPORTED_MODULE_1__["AvatarPipe"],
    _logo_pipe__WEBPACK_IMPORTED_MODULE_7__["LogoPipe"],
    _as_title_pipe__WEBPACK_IMPORTED_MODULE_0__["AsTitlePipe"],
];
class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_backdrop_pipe__WEBPACK_IMPORTED_MODULE_4__["BackdropPipe"],
        _poster_pipe__WEBPACK_IMPORTED_MODULE_5__["PosterPipe"],
        _runtime_pipe__WEBPACK_IMPORTED_MODULE_6__["RuntimePipe"],
        _darken_color_pipe__WEBPACK_IMPORTED_MODULE_3__["DarkenColorPipe"],
        _text_color_pipe__WEBPACK_IMPORTED_MODULE_2__["TextColorPipe"],
        _avatar_pipe__WEBPACK_IMPORTED_MODULE_1__["AvatarPipe"],
        _logo_pipe__WEBPACK_IMPORTED_MODULE_7__["LogoPipe"],
        _as_title_pipe__WEBPACK_IMPORTED_MODULE_0__["AsTitlePipe"]], exports: [_backdrop_pipe__WEBPACK_IMPORTED_MODULE_4__["BackdropPipe"],
        _poster_pipe__WEBPACK_IMPORTED_MODULE_5__["PosterPipe"],
        _runtime_pipe__WEBPACK_IMPORTED_MODULE_6__["RuntimePipe"],
        _darken_color_pipe__WEBPACK_IMPORTED_MODULE_3__["DarkenColorPipe"],
        _text_color_pipe__WEBPACK_IMPORTED_MODULE_2__["TextColorPipe"],
        _avatar_pipe__WEBPACK_IMPORTED_MODULE_1__["AvatarPipe"],
        _logo_pipe__WEBPACK_IMPORTED_MODULE_7__["LogoPipe"],
        _as_title_pipe__WEBPACK_IMPORTED_MODULE_0__["AsTitlePipe"]] }); })();


/***/ }),

/***/ "AB0y":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "ONpJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _types_Types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/Types */ "sUaV");
/* harmony import */ var _modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/movies/services/movies.service */ "DAcT");
/* harmony import */ var src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/movie-modal.service */ "3paH");






class SearchService {
    constructor(movies_service, modalService) {
        this.movies_service = movies_service;
        this.modalService = modalService;
        this.open = false;
        this.animation = "slide-in 0.2s";
        this.emitSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.search = (query) => {
            this.searchTerm = query;
            if (!this.open)
                this.openModal();
            if (this.modalService.isOpen)
                this.modalService.closeModal();
            let { searchMovies, getMovieGroup } = this.movies_service;
            this.emitSearch.emit(query ? searchMovies(query) : getMovieGroup(_types_Types__WEBPACK_IMPORTED_MODULE_2__["MovieGroup"].Trending));
        };
        this.results = () => this.movies;
        this.closeModal = () => {
            this.animation = "fade-out 0.2s";
            setTimeout(() => {
                this.open = false;
                _Utils__WEBPACK_IMPORTED_MODULE_0__["BODY"].style.overflowY = "auto";
                this.animation = "fade-in 0.2s";
                this.onChange.emit(false);
            }, 200);
        };
        this.openModal = () => {
            _Utils__WEBPACK_IMPORTED_MODULE_0__["BODY"].style.overflowY = "hidden";
            this.open = true;
            this.onChange.emit(true);
        };
    }
    get isOpen() {
        return this.open;
    }
    get term() {
        return this.searchTerm;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_4__["MovieModalService"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "Avrn":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/movies/services/user.service */ "Q28f");



class AuthGuardService {
    constructor(router, user) {
        this.router = router;
        this.user = user;
    }
    canActivate(route, state) {
        // if (!this.user.userExists()) this.router.navigate(['/login']);
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: "root" });


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
    production: false,
    API_KEY: "affbb38166ff1d75c2f1739788504ee7",
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

/***/ "B0mY":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/as-title.pipe.ts ***!
  \***********************************************/
/*! exports provided: AsTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsTitlePipe", function() { return AsTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AsTitlePipe {
    constructor() {
        this.transform = (value) => value.replace(/_/g, " ");
    }
}
AsTitlePipe.ɵfac = function AsTitlePipe_Factory(t) { return new (t || AsTitlePipe)(); };
AsTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "asTitle", type: AsTitlePipe, pure: true });


/***/ }),

/***/ "DAcT":
/*!***********************************************************!*\
  !*** ./src/app/modules/movies/services/movies.service.ts ***!
  \***********************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "Q28f");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MoviesService {
    constructor(user_api, http) {
        this.user_api = user_api;
        this.http = http;
        this.BASE_URL = "http://127.0.0.1:3000/api/movies/";
        this.httpGet = (query) => this.http.get(this.BASE_URL + query);
        this.searchMovies = (query) => this.httpGet(`search=${query}`);
        this.getMovieGroup = (group) => this.httpGet(`group=${group}`);
        this.getRecommended = (tmdb_id) => this.httpGet(`recommended=${tmdb_id}`);
        this.getSimilar = (tmdb_id) => this.httpGet(`similar=${tmdb_id}`);
        this.getShowList = () => this.user_api.getShowList();
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "K9yR":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/movies/services/movies.service */ "DAcT");
/* harmony import */ var _views_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/movie-player/movie-player.component */ "lccz");



class TestComponent {
    constructor(movies) {
        this.movies = movies;
    }
    ngOnInit() { }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"])); };
TestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], decls: 1, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-player");
    } }, directives: [_views_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_2__["MoviePlayerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "KK4Z":
/*!**************************************************************************!*\
  !*** ./src/app/modules/movies/components/scroller/scroller.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony import */ var _shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../shared/services/Utils */ "ONpJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/movie-modal.service */ "3paH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/directives/img-load.directive */ "saem");
/* harmony import */ var _shared_directives_view_movie_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/directives/view-movie.directive */ "uhu2");
/* harmony import */ var _shared_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pipes/poster.pipe */ "nOVp");








const _c0 = ["scroller"];
function ScrollerComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", movie_r6.title ? "" : "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewMovie", movie_r6)("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 4, movie_r6, 3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngStyle", ctx_r3.size());
} }
function ScrollerComponent_div_0_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollerComponent_div_0_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.translate(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScrollerComponent_div_0_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollerComponent_div_0_i_5_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.translate(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScrollerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ScrollerComponent_div_0_Template_section_resize_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.translate(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScrollerComponent_div_0_div_3_Template, 3, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ScrollerComponent_div_0_i_4_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ScrollerComponent_div_0_i_5_Template, 1, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.movies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.canRight);
} }
function ScrollerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r1.init.id);
} }
class ScrollerComponent {
    constructor(modal) {
        this.modal = modal;
        this.offset = 0;
        this.itemsInARow = 0;
        this.padding = 8;
        this.canLeft = false;
        this.canRight = false;
        this.dataLoaded = false;
        this.setTempCards = () => {
            let temp = [];
            Object(_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["For"])(() => temp.push(_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["EMPTYMOVIE"]), 12);
            return temp;
        };
        this.calcMargins = () => 2 * document.documentElement.clientWidth * 0.04;
        this.scrollerEl = () => this.scroller.nativeElement;
        this.size = () => ({
            width: `${this.calcWidth()}px`,
            height: `${this.calcWidth() * 1.5}px`,
        });
    }
    ngOnInit() {
        this.init.movies.subscribe((movies) => {
            this.movies = movies;
            this.dataLoaded = true;
            this.translate();
        });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.movies = this.setTempCards();
            this.calcWidth();
        }, 0);
    }
    translate(dir = 0) {
        if (!this.movies)
            return;
        this.calcOffset(dir);
        this.scrollerEl().style.transition = dir === 0 ? "none" : "transform .5s";
        const newWidth = this.calcWidth();
        const translate = `translateX(${-this.offset * (newWidth + this.padding)}px)`;
        this.scrollerEl().style.transform = translate;
        this.canScroll();
    }
    calcOffset(dir = 0) {
        const newOffset = this.offset + dir * this.itemsInARow;
        var len = this.movies.length;
        var max_offset = Object(_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["constrain"])(len - this.itemsInARow, 0, len);
        this.offset = Object(_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["constrain"])(newOffset, 0, max_offset);
    }
    calcWidth() {
        const max_width = 180;
        const contWidth = this.scrollerEl().clientWidth - this.calcMargins();
        this.itemsInARow = Math.ceil(contWidth / max_width);
        return contWidth / this.itemsInARow - this.padding;
    }
    canScroll() {
        var _a;
        this.canRight = this.offset < ((_a = this.movies) === null || _a === void 0 ? void 0 : _a.length) - this.itemsInARow;
        this.canLeft = this.offset > 0;
    }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_2__["MovieModalService"])); };
ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScrollerComponent, selectors: [["app-scroller"]], viewQuery: function ScrollerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    } }, inputs: { init: "init" }, decls: 2, vars: 2, consts: [["class", "item-container", 4, "ngIf"], [3, "id", 4, "ngIf"], [1, "item-container"], [1, "row", "w-100", 3, "resize"], ["scroller", ""], ["class", "img-container", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "fas fa-chevron-left center h-100", 3, "click", 4, "ngIf"], ["class", "fas fa-chevron-right center h-100", 3, "click", 4, "ngIf"], [1, "img-container", 3, "ngClass"], ["imgLoad", "", 3, "viewMovie", "src", "ngStyle"], [1, "fas", "fa-chevron-left", "center", "h-100", 3, "click"], [1, "fas", "fa-chevron-right", "center", "h-100", 3, "click"], [3, "id"]], template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ScrollerComponent_div_0_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScrollerComponent_div_1_Template, 3, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dataLoaded || ctx.movies[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dataLoaded && !ctx.movies[0]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_4__["ImgLoadDirective"], _shared_directives_view_movie_directive__WEBPACK_IMPORTED_MODULE_5__["ViewMovieDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], pipes: [_shared_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_6__["PosterPipe"]], styles: [".item-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.item-container[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nsection[_ngcontent-%COMP%] {\n  transition: transform 0.5s;\n  margin: 0 var(--ml);\n}\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px;\n  border-radius: calc(var(--radius-s) + 2px);\n}\nsection[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  margin: 0 0.25rem;\n}\nsection[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: var(--radius-s);\n  animation: load 0.5s infinite alternate;\n}\n@keyframes load {\n  from {\n    background-color: #202020;\n  }\n  to {\n    background-color: #303030;\n  }\n}\ni[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  font-size: 2rem;\n  width: calc(var(--ml) - 0.25rem + 1px);\n  transition: opacity 0.2s, background 0.1s;\n  cursor: pointer;\n  color: white;\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 0;\n}\ni[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.85);\n}\ni[_ngcontent-%COMP%]:active {\n  color: gray;\n}\n.fa-chevron-left[_ngcontent-%COMP%] {\n  left: 0;\n  border-radius: 0 var(--radius-s) var(--radius-s) 0;\n}\n.fa-chevron-right[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: var(--radius-s) 0 0 var(--radius-s);\n}\nh3[_ngcontent-%COMP%] {\n  color: gray;\n  margin-left: var(--mm);\n}\nhr[_ngcontent-%COMP%] {\n  height: 5px;\n  position: relative;\n  margin: 0.5rem 1rem;\n  border: none;\n  border-left: 60px solid red;\n  border-radius: 2px;\n  background: #424242;\n  width: calc(100% - 2rem - $width);\n  height: 3px;\n}\n.hr[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjcm9sbGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUFDRDtBQUNDO0VBQ0MsVUFBQTtBQUNGO0FBR0E7RUFDQywwQkFBQTtFQUNBLG1CQUFBO0FBQUQ7QUFFQztFQUNDLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLDBDQUFBO0FBQUY7QUFHQztFQUNDLGlCQUFBO0FBREY7QUFJQzs7RUFFQyw4QkFBQTtFQUNBLHVDQUFBO0FBRkY7QUFJRTtFQUNDO0lBQ0MseUJBQUE7RUFGRjtFQUlDO0lBQ0MseUJBQUE7RUFGRjtBQUNGO0FBT0E7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FBSkQ7QUFNQztFQUNDLCtCQUFBO0FBSkY7QUFPQztFQUNDLFdBQUE7QUFMRjtBQVNBO0VBQ0MsT0FBQTtFQUNBLGtEQUFBO0FBTkQ7QUFTQTtFQUNDLFFBQUE7RUFDQSxrREFBQTtBQU5EO0FBU0E7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7QUFORDtBQVNBO0VBRUMsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBUEQ7QUFVQTtFQUNDLFVBQUE7QUFQRCIsImZpbGUiOiJzY3JvbGxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHQmOmhvdmVyIGkge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG5cdG1hcmdpbjogMCB2YXIoLS1tbCk7XHJcblxyXG5cdGltZyB7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDVweCAxMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1yYWRpdXMtcykgKyAycHgpO1xyXG5cdH1cclxuXHJcblx0LmltZy1jb250YWluZXIge1xyXG5cdFx0bWFyZ2luOiAwIDAuMjVyZW07XHJcblx0fVxyXG5cclxuXHRpbWcsXHJcblx0LmNhcmQge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXMpO1xyXG5cdFx0YW5pbWF0aW9uOiBsb2FkIDAuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG5cclxuXHRcdEBrZXlmcmFtZXMgbG9hZCB7XHJcblx0XHRcdGZyb20ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XHJcblx0XHRcdH1cclxuXHRcdFx0dG8ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmkge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdHdpZHRoOiBjYWxjKHZhcigtLW1sKSAtIDAuMjVyZW0gKyAxcHgpO1xyXG5cdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgYmFja2dyb3VuZCAwLjFzO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcblx0fVxyXG5cclxuXHQmOmFjdGl2ZSB7XHJcblx0XHRjb2xvcjogZ3JheTtcclxuXHR9XHJcbn1cclxuXHJcbi5mYS1jaGV2cm9uLWxlZnQge1xyXG5cdGxlZnQ6IDA7XHJcblx0Ym9yZGVyLXJhZGl1czogMCB2YXIoLS1yYWRpdXMtcykgdmFyKC0tcmFkaXVzLXMpIDA7XHJcbn1cclxuXHJcbi5mYS1jaGV2cm9uLXJpZ2h0IHtcclxuXHRyaWdodDogMDtcclxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtcykgMCAwIHZhcigtLXJhZGl1cy1zKTtcclxufVxyXG5cclxuaDMge1xyXG5cdGNvbG9yOiBncmF5O1xyXG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1tbSk7XHJcbn1cclxuXHJcbmhyIHtcclxuXHQkd2lkdGg6IDYwcHg7XHJcblx0aGVpZ2h0OiA1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdG1hcmdpbjogMC41cmVtIDFyZW07XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1sZWZ0OiAkd2lkdGggc29saWQgcmVkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoNjYsIDY2LCA2Nik7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0gLSAkd2lkdGgpO1xyXG5cdGhlaWdodDogM3B4O1xyXG59XHJcblxyXG4uaHIge1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "KPdS":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Utils */ "ONpJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "AB0y");
/* harmony import */ var _services_movie_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movie-modal.service */ "3paH");
/* harmony import */ var src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/movies/services/movies.service */ "DAcT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/directives/img-load.directive */ "saem");
/* harmony import */ var _directives_view_movie_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/view-movie.directive */ "uhu2");
/* harmony import */ var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/poster.pipe */ "nOVp");









function SearchComponent_section_0_div_2_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Search results for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.searchService.term, " ");
} }
function SearchComponent_section_0_div_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "poster");
} if (rf & 2) {
    const movie_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewMovie", movie_r5)("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 3, movie_r5, 3), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngStyle", ctx_r4.size());
} }
function SearchComponent_section_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_section_0_div_2_h3_1_Template, 4, 1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchComponent_section_0_div_2_img_3_Template, 2, 6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.searchService.term);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.movies);
} }
function SearchComponent_section_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { animation: a0 }; };
function SearchComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SearchComponent_section_0_Template_section_resize_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.resize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchComponent_section_0_div_2_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchComponent_section_0_div_3_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.searchService.animation));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.movies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.movies && !ctx_r0.loaded);
} }
class SearchComponent {
    constructor(searchService, modal, moviesService) {
        this.searchService = searchService;
        this.modal = modal;
        this.moviesService = moviesService;
        this.itemsInARow = 0;
        this.gap = 4;
        this.loaded = false;
        this.searchService.emitSearch.subscribe((obs) => {
            var _a;
            this.loaded = false;
            this.movies = undefined;
            (_a = this.movieSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            this.movieSub = obs.subscribe((movies) => {
                var _a;
                this.loaded = true;
                if (movies[0])
                    this.movies = movies;
                (_a = this.movieSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            });
        });
    }
    ngOnInit() {
        this.resize();
    }
    resize() {
        if (Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["Id"])("search-container"))
            this.calcWidth();
    }
    size() {
        const newWidth = this.calcWidth();
        return {
            width: `${newWidth}px`,
            height: `${(3 / 2) * newWidth}px`,
        };
    }
    calcWidth() {
        let width = Object(_services_Utils__WEBPACK_IMPORTED_MODULE_0__["Id"])("search-container").clientWidth;
        const max_width = 160;
        this.itemsInARow = Math.ceil(width / max_width);
        return Math.floor(width / this.itemsInARow - 2 * this.gap - 0.1);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_3__["MovieModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 1, vars: 1, consts: [[3, "ngStyle", "resize", 4, "ngIf"], [3, "ngStyle", "resize"], ["id", "search-section"], ["id", "search-container", 4, "ngIf"], ["class", "container center", 4, "ngIf"], ["id", "search-container"], ["class", "row center-vertical", 4, "ngIf"], [1, "row", "wrap"], ["imgLoad", "", 3, "viewMovie", "src", "ngStyle", 4, "ngFor", "ngForOf"], [1, "row", "center-vertical"], ["imgLoad", "", 3, "viewMovie", "src", "ngStyle"], [1, "container", "center"], [1, "loader", "center"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchComponent_section_0_Template, 4, 5, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchService.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_6__["ImgLoadDirective"], _directives_view_movie_directive__WEBPACK_IMPORTED_MODULE_7__["ViewMovieDirective"]], pipes: [_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_8__["PosterPipe"]], styles: ["section[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  background: var(--bg);\n}\n\nimg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: calc(var(--radius-s) + 2px);\n  margin: 0.25rem;\n}\n\n#search-section[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 7rem);\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n#search-container[_ngcontent-%COMP%] {\n  margin: var(--ml);\n  padding-top: 3rem;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: white;\n  margin: 0 0 0 0.5rem;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 1rem 0.25rem;\n  font-size: 1.4rem;\n  font-weight: 400;\n  color: var(--light-text);\n}\n\n.loader[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  animation-fill-mode: both;\n  animation: load7 1.8s infinite ease-in-out;\n}\n\n.loader[_ngcontent-%COMP%] {\n  color: var(--light-text);\n  font-size: 10px;\n  margin: 80px auto;\n  position: relative;\n  text-indent: -9999em;\n  transform: translateZ(0);\n  animation-delay: -0.16s;\n}\n\n.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n}\n\n.loader[_ngcontent-%COMP%]:before {\n  left: -3.5em;\n  animation-delay: -0.32s;\n}\n\n.loader[_ngcontent-%COMP%]:after {\n  left: 3.5em;\n}\n\n@keyframes load7 {\n  0%, 80%, 100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n\n@keyframes slide-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes slide-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBQ0Q7O0FBRUE7RUFDQyw4QkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtBQUNEOztBQUVBO0VBQ0MsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRDs7QUFFQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDRDs7QUFFQTtFQUNDLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBQ0Q7O0FBRUE7OztFQUdDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FBQ0Q7O0FBQ0E7RUFDQyx3QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0FBRUQ7O0FBQUE7O0VBRUMsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQUdEOztBQURBO0VBQ0MsWUFBQTtFQUNBLHVCQUFBO0FBSUQ7O0FBRkE7RUFDQyxXQUFBO0FBS0Q7O0FBRkE7RUFDQztJQUdDLDRCQUFBO0VBR0E7RUFERDtJQUNDLHVCQUFBO0VBR0E7QUFDRjs7QUFBQTtFQUNDO0lBRUMsVUFBQTtFQUNBO0VBQ0Q7SUFFQyxVQUFBO0VBQUE7QUFDRjs7QUFHQTtFQUNDO0lBRUMsVUFBQTtFQUZBO0VBSUQ7SUFFQyxVQUFBO0VBSEE7QUFDRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ei1pbmRleDogMjtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWJnKTtcclxufVxyXG5cclxuaW1nIHtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1yYWRpdXMtcykgKyAycHgpO1xyXG5cdG1hcmdpbjogMC4yNXJlbTtcclxufVxyXG5cclxuI3NlYXJjaC1zZWN0aW9uIHtcclxuXHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gN3JlbSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNzZWFyY2gtY29udGFpbmVyIHtcclxuXHRtYXJnaW46IHZhcigtLW1sKTtcclxuXHRwYWRkaW5nLXRvcDogM3JlbTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuXHRmb250LXNpemU6IDEuNHJlbTtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW46IDAgMCAwIDAuNXJlbTtcclxufVxyXG5cclxuaDMge1xyXG5cdG1hcmdpbjogMXJlbSAwLjI1cmVtO1xyXG5cdGZvbnQtc2l6ZTogMS40cmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6IHZhcigtLWxpZ2h0LXRleHQpO1xyXG59XHJcblxyXG4ubG9hZGVyLFxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHdpZHRoOiAyLjVlbTtcclxuXHRoZWlnaHQ6IDIuNWVtO1xyXG5cdGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcblx0YW5pbWF0aW9uOiBsb2FkNyAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sb2FkZXIge1xyXG5cdGNvbG9yOiB2YXIoLS1saWdodC10ZXh0KTtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0bWFyZ2luOiA4MHB4IGF1dG87XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuXHRhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxufVxyXG4ubG9hZGVyOmJlZm9yZSxcclxuLmxvYWRlcjphZnRlciB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG59XHJcbi5sb2FkZXI6YmVmb3JlIHtcclxuXHRsZWZ0OiAtMy41ZW07XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbn1cclxuLmxvYWRlcjphZnRlciB7XHJcblx0bGVmdDogMy41ZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZDcge1xyXG5cdDAlLFxyXG5cdDgwJSxcclxuXHQxMDAlIHtcclxuXHRcdGJveC1zaGFkb3c6IDAgMi41ZW0gMCAtMS4zZW07XHJcblx0fVxyXG5cdDQwJSB7XHJcblx0XHRib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcclxuXHRmcm9tIHtcclxuXHRcdC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0Ly8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwdmgpO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xyXG5cdGZyb20ge1xyXG5cdFx0Ly8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwdmgpO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblx0dG8ge1xyXG5cdFx0Ly8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDB2aCk7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "LgQT":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/runtime.pipe.ts ***!
  \**********************************************/
/*! exports provided: RuntimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimePipe", function() { return RuntimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RuntimePipe {
    constructor() {
        this.transform = (mins) => `${Math.floor(mins / 60)}h${mins % 60}min`;
    }
}
RuntimePipe.ɵfac = function RuntimePipe_Factory(t) { return new (t || RuntimePipe)(); };
RuntimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "runtime", type: RuntimePipe, pure: true });


/***/ }),

/***/ "ONpJ":
/*!******************************************!*\
  !*** ./src/app/shared/services/Utils.ts ***!
  \******************************************/
/*! exports provided: mod, constrain, asTitle, onLoad, getTextColor, darkenColor, EMPTYMOVIE, EMPTYTMDB, For, Id, query, BODY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constrain", function() { return constrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asTitle", function() { return asTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLoad", function() { return onLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextColor", function() { return getTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkenColor", function() { return darkenColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTYMOVIE", function() { return EMPTYMOVIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTYTMDB", function() { return EMPTYTMDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "For", function() { return For; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Id", function() { return Id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BODY", function() { return BODY; });
const mod = (val, base) => (base + (val % base)) % base;
const constrain = (num, min, max) => min * +(num < min) + max * +(num > max) + num * +(num <= max && num >= min);
const asTitle = (title) => title.replace(/_/g, " ");
const onLoad = ({ target }) => {
    target.style.opacity = "1";
};
const getTextColor = (hex = "#fff") => {
    return getHex(hex, 1, 3) * 0.299 +
        getHex(hex, 3, 5) * 0.587 +
        getHex(hex, 5, 7) * 0.114 >
        150
        ? "#000"
        : "#fff";
};
const getHex = (hex, from, to) => parseInt(hex.substring(from, to), 16);
const darkenColor = (hex = "#000000", perc) => {
    let r = getHex(hex, 1, 3) * perc;
    let g = getHex(hex, 3, 5) * perc;
    let b = getHex(hex, 5, 7) * perc;
    return `rgb(${r},${g},${b})`;
};
const EMPTYMOVIE = {
    yts_id: 0,
    tmdb_id: 0,
    imdb_id: "",
    title: "",
    year: 0,
    rating: 0,
    runtime: 0,
    budget: 0,
    revenue: 0,
    genres: [],
    summary: "",
    description_full: "",
    yt_trailer: "",
    language: "",
    mpa_rating: "",
    poster: "",
    backdrop: "",
    cast: [],
    torrents: [],
    reviews: [],
    providers: [],
};
const EMPTYTMDB = {
    id: 0,
    imdb_id: "",
    poster_path: "",
    backdrop_path: "",
    overview: "",
    budget: 0,
    revenue: 0,
    reviews: [],
    providers: [],
};
const For = (fn, num) => {
    for (let i = 0; i < num; i++)
        fn();
};
const Id = (s) => document.getElementById(s);
const query = (s) => document.querySelector(s);
const BODY = query("body");


/***/ }),

/***/ "Q28f":
/*!*********************************************************!*\
  !*** ./src/app/modules/movies/services/user.service.ts ***!
  \*********************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = "http://localhost:3000/api/users/";
        this.user = false;
        this.isRefreshing = false;
        this.username = "johan";
        this.getShowList = () => this.http.get(`${this.BASE_URL}list/username=${this.username}`);
        this.appendShowList = (movie) => {
            this.refreshList();
            return this.http.post(`${this.BASE_URL}list/username=${this.username}`, {
                show: movie,
            });
        };
        this.refreshList = () => {
            this.isRefreshing = true;
            setTimeout(() => (this.isRefreshing = false), 10);
        };
        this.userExists = () => this.user;
        this.login = () => (this.user = true);
        this.logout = () => (this.user = false);
        this.verifyUsername = (username) => this.http.get(this.BASE_URL + username);
        this.verifyUser = (body) => this.http.post(this.BASE_URL, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            this.user = !res.error;
            this.username = body.username;
            return res;
        }));
        this.toggleListItem = (movie) => {
            // this.refreshList();
            return this.http.post(`${this.BASE_URL}list/${this.username}`, {
                imdb_id: movie.imdb_id,
            });
        };
        this.getListIDs = () => this.http.get(`${this.BASE_URL}list/${this.username}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/movies/services/user.service */ "Q28f");
/* harmony import */ var src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/movies/services/movies.service */ "DAcT");
/* harmony import */ var _modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/movies/components/scroller/scroller.component */ "KK4Z");






class LoginComponent {
    constructor(router, user, movies) {
        this.router = router;
        this.user = user;
        this.movies = movies;
        this.usernameFocussed = false;
        this.passwordErr = "";
        this.submitPending = false;
        this.verifyUsername = (control) => new Promise((resolve) => this.user
            .verifyUsername(control.value)
            .subscribe((res) => resolve(res.userExists ? null : { err: "" })));
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            // this.verifyUsername.bind(this)
            ),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
        this.username = this.loginForm.get("username");
        this.password = this.loginForm.get("password");
    }
    usernameIsLoading() {
        var _a;
        return ((_a = this.loginForm.get("username")) === null || _a === void 0 ? void 0 : _a.pending) && !this.usernameFocussed;
    }
    usernameError() {
        var _a, _b, _c, _d;
        let err = !this.usernameFocussed &&
            !((_a = this.username) === null || _a === void 0 ? void 0 : _a.pending) && ((_b = this.username) === null || _b === void 0 ? void 0 : _b.touched) && ((_c = this.username) === null || _c === void 0 ? void 0 : _c.invalid) && ((_d = this.username) === null || _d === void 0 ? void 0 : _d.value);
        return err ? "user does not exist" : null;
    }
    passwordError(message) {
        this.passwordErr = message;
    }
    onSubmit() {
        this.router.navigate(["/home"]);
        // this.submitPending = true;
        // const body = {
        //   username: this.username?.value,
        //   password: this.password?.value,
        // };
        // this.user.verifyUser(body).subscribe((res: any) => {
        //   this.router.navigate(["/home"]);
        // this.submitPending = false;
        //   this.passwordErr = "incorrect password";
        // });
    }
    asScroller(i) {
        return {
            id: `list-scroller-${i}`,
            aspect: !(i % 2) ? 3 / 2 : 9 / 16,
            movies: this.movies.searchMovies("shrek"),
        };
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [[3, "init"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-scroller", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("init", ctx.asScroller(15));
    } }, directives: [_modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_5__["ScrollerComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  height: 100vh;\n  opacity: 0;\n  animation: fade-in 0.5s forwards;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100vw;\n  height: 100vh;\n  filter: brightness(0.5);\n}\n\n#login-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(min(15rem, calc(100vw - 4rem)));\n  background: #151515cc;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.6) 0px 5px 10px;\n  padding: 1rem 2rem;\n  overflow: hidden;\n}\n\n#login-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  height: 5px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 1rem;\n  align-self: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  outline: none;\n  height: 2.3rem;\n  margin: 1rem 0 0 0;\n  padding-left: 0.5rem;\n  font-size: 1rem;\n  border-radius: 5px;\n  border: none;\n  width: calc(100% - 0.5rem);\n  border-bottom: 4px solid transparent;\n  border-top: 4px solid transparent;\n  transition: border-bottom-color 0.2s;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  margin: 3rem 0 1rem 0;\n  height: calc(2.5rem + 0);\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: white;\n  padding: 0.75rem 0;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n#login[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  background-color: red;\n  transition: 0.2s;\n}\n\n#login[_ngcontent-%COMP%]:active {\n  background-color: #c40000;\n}\n\n#login[_ngcontent-%COMP%]:disabled {\n  background-color: #860000;\n  color: gray;\n  cursor: default;\n}\n\n.valid[_ngcontent-%COMP%] {\n  border-bottom: 4px solid lime;\n}\n\n#signup[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  background-color: #3b3b3b;\n}\n\n#signup[_ngcontent-%COMP%]:active {\n  background-color: #2f2f2f;\n}\n\np[_ngcontent-%COMP%] {\n  color: #ff2e2e;\n  height: 1rem;\n  margin: 0.5rem 0 0 0;\n  padding-left: 0.25rem;\n  font-weight: 500;\n  line-height: 1rem;\n  transition: 0.2s;\n  height: 0;\n  opacity: 0;\n}\n\n.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  height: 1rem;\n}\n\nhr[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  width: calc(100% + 2px);\n  margin: 0;\n  margin-top: -3px;\n  height: 4px;\n  border: none;\n  background-color: transparent;\n  border-radius: 0 0 5px 5px;\n}\n\n.submit-pending[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: red;\n  animation: pending 1.25s forwards infinite ease-out;\n}\n\n.pending[_ngcontent-%COMP%] {\n  background-color: red;\n  animation: pending 1.25s forwards infinite ease-out;\n}\n\n@keyframes pending {\n  0% {\n    -webkit-clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);\n            clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);\n  }\n  25% {\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n  }\n  50% {\n    -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);\n            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);\n  }\n  75% {\n    -webkit-clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);\n            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);\n  }\n  100% {\n    -webkit-clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);\n            clip-path: polygon(0 0, 0% 0, 0% 100%, 0 100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdFO0VBQ0Usc0JBQUE7QUFESjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUlFO0VBQ0UseUJBQUE7QUFGSjs7QUFLRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjs7QUFPQTtFQUNFLDZCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBSkY7O0FBS0U7RUFDRSx5QkFBQTtBQUhKOztBQU9BO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQUpGOztBQVFFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbURBQUE7QUFMSjs7QUFTQTtFQUNFLHFCQUFBO0VBQ0EsbURBQUE7QUFORjs7QUFTQTtFQUNFO0lBQ0Usc0RBQUE7WUFBQSw4Q0FBQTtFQU5GO0VBUUE7SUFDRSwwREFBQTtZQUFBLGtEQUFBO0VBTkY7RUFRQTtJQUNFLGdFQUFBO1lBQUEsd0RBQUE7RUFORjtFQVFBO0lBQ0UsZ0VBQUE7WUFBQSx3REFBQTtFQU5GO0VBUUE7SUFDRSxzREFBQTtZQUFBLDhDQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IGZhZGUtaW4gMC41cyBmb3J3YXJkcztcclxufVxyXG5cclxuaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XHJcbn1cclxuXHJcbiNsb2dpbi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogY2FsYyhtaW4oMTVyZW0sIGNhbGMoMTAwdncgLSA0cmVtKSkpO1xyXG4gIGJhY2tncm91bmQ6ICMxNTE1MTVjYztcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC42KSAwcHggNXB4IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuaDIge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGhlaWdodDogMi4zcmVtO1xyXG4gIG1hcmdpbjogMXJlbSAwIDAgMDtcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMC41cmVtKTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4ycztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICB3aWR0aDogY2FsYyg1MCUgLSAxcmVtKTtcclxuICBtYXJnaW46IDNyZW0gMCAxcmVtIDA7XHJcbiAgaGVpZ2h0OiBjYWxjKDIuNXJlbSArIDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwO1xyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxufVxyXG5cclxuI2xvZ2luIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDAsIDApO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG4udmFsaWQge1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBsaW1lO1xyXG59XHJcblxyXG4jc2lnbnVwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgNDcsIDQ3KTtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCA0NiwgNDYpO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBtYXJnaW46IDAuNXJlbSAwIDAgMDtcclxuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIGhlaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmhyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogY2FsYygxMDAlICsgMnB4KTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogLTNweDtcclxuICBoZWlnaHQ6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtcGVuZGluZyB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGFuaW1hdGlvbjogcGVuZGluZyAxLjI1cyBmb3J3YXJkcyBpbmZpbml0ZSBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcbi5wZW5kaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgYW5pbWF0aW9uOiBwZW5kaW5nIDEuMjVzIGZvcndhcmRzIGluZmluaXRlIGVhc2Utb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHBlbmRpbmcge1xyXG4gIDAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAlIDAsIDAlIDEwMCUsIDAgMTAwJSk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAxMDAlIDEwMCUpO1xyXG4gIH1cclxuICA3NSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMCUgMCwgMCUgMTAwJSwgMCAxMDAlKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var src_app_shared_types_Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/types/Types */ "sUaV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/movies/services/movies.service */ "DAcT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/movies/components/scroller/scroller.component */ "KK4Z");
/* harmony import */ var _shared_pipes_as_title_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/as-title.pipe */ "B0mY");






function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "asTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-scroller", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx_r0.groups[i_r2])));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("init", ctx_r0.asScroller(i_r2));
} }
class HomeComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.groups = [
            // MovieGroup.NowPlaying,
            // MovieGroup.Popular,
            // MovieGroup.TopRated,
            src_app_shared_types_Types__WEBPACK_IMPORTED_MODULE_0__["MovieGroup"].Upcoming,
        ];
    }
    asScroller(i) {
        return {
            movies: this.moviesService.getMovieGroup(this.groups[i]),
        };
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 1, consts: [[1, "column"], [4, "ngFor", "ngForOf"], [3, "init"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 6, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_4__["ScrollerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _shared_pipes_as_title_pipe__WEBPACK_IMPORTED_MODULE_5__["AsTitlePipe"]], styles: ["section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: calc(var(--preview-height) - 8rem);\n  margin-bottom: calc(var(--ml) + 0.25rem);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: white;\n  font-weight: 600;\n  margin: var(--ml) 0 var(--ms) calc(var(--ml) + 0.25rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7RUFDQSx3Q0FBQTtBQUNEOztBQUVBO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtBQUNEIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxuXHRtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXByZXZpZXctaGVpZ2h0KSAtIDhyZW0pO1xyXG5cdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tbWwpICsgMC4yNXJlbSk7XHJcbn1cclxuXHJcbmgzIHtcclxuXHRmb250LXNpemU6IDEuNHJlbTtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRtYXJnaW46IHZhcigtLW1sKSAwIHZhcigtLW1zKSBjYWxjKHZhcigtLW1sKSArIDAuMjVyZW0pO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/movie-modal.service */ "3paH");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_movie_modal_movie_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/movie-modal/movie-modal.component */ "8GHg");






function AppComponent_app_movie_modal_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie-modal");
} }
class AppComponent {
    constructor(modal) {
        this.modal = modal;
        this.title = "IMDB-clone";
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_1__["MovieModalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_movie_modal_2_Template, 1, 0, "app-movie-modal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal.isOpen);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_movie_modal_movie_modal_component__WEBPACK_IMPORTED_MODULE_5__["MovieModalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


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
/* harmony import */ var _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/pipes/pipes.module */ "9Xeq");
/* harmony import */ var _modules_movies_movies_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movies/movies.module */ "1Bbu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _shared_components_movie_modal_movie_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/movie-modal/movie-modal.component */ "8GHg");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _views_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/user.component */ "zntH");
/* harmony import */ var _shared_components_yt_player_yt_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/yt-player/yt-player.component */ "gKLn");
/* harmony import */ var _views_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/movie-player/movie-player.component */ "lccz");
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/search/search.component */ "KPdS");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/directives/directives.module */ "yGOH");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./test/test.component */ "K9yR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _modules_movies_movies_module__WEBPACK_IMPORTED_MODULE_1__["MoviesModule"],
            _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_16__["DirectivesModule"],
            _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__["PipesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _shared_components_movie_modal_movie_modal_component__WEBPACK_IMPORTED_MODULE_8__["MovieModalComponent"],
        _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _views_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
        _shared_components_yt_player_yt_player_component__WEBPACK_IMPORTED_MODULE_11__["YtPlayerComponent"],
        _views_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_12__["MoviePlayerComponent"],
        _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _test_test_component__WEBPACK_IMPORTED_MODULE_17__["TestComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__["YouTubePlayerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _modules_movies_movies_module__WEBPACK_IMPORTED_MODULE_1__["MoviesModule"],
        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_16__["DirectivesModule"],
        _shared_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__["PipesModule"]] }); })();


/***/ }),

/***/ "ewTE":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/backdrop.pipe.ts ***!
  \***********************************************/
/*! exports provided: BackdropPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackdropPipe", function() { return BackdropPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BackdropPipe {
    constructor() {
        this.backdropSizes = ["w300", "w780", "w1280", "original"];
        this.BASE = "https://image.tmdb.org/t/p/";
    }
    transform({ backdrop: url }, res) {
        return url
            ? this.BASE + this.backdropSizes[res] + url
            : "src/assets/no-image-1.png";
    }
}
BackdropPipe.ɵfac = function BackdropPipe_Factory(t) { return new (t || BackdropPipe)(); };
BackdropPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "backdrop", type: BackdropPipe, pure: true });


/***/ }),

/***/ "f9PJ":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/text-color.pipe.ts ***!
  \*************************************************/
/*! exports provided: TextColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextColorPipe", function() { return TextColorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TextColorPipe {
    transform(value, ...args) {
        return null;
    }
}
TextColorPipe.ɵfac = function TextColorPipe_Factory(t) { return new (t || TextColorPipe)(); };
TextColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "textColor", type: TextColorPipe, pure: true });


/***/ }),

/***/ "gJ5v":
/*!**********************************************************************!*\
  !*** ./src/app/modules/movies/components/header/header.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/Utils */ "ONpJ");
/* harmony import */ var src_app_shared_types_Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/types/Types */ "sUaV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_pipes_backdrop_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipes/backdrop.pipe */ "ewTE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/movies/services/movies.service */ "DAcT");
/* harmony import */ var src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/movie-modal.service */ "3paH");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../shared/services/search.service */ "AB0y");
/* harmony import */ var src_app_shared_services_colors_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/colors.service */ "rTRm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/directives/img-load.directive */ "saem");
/* harmony import */ var _shared_directives_stream_movie_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/directives/stream-movie.directive */ "uNma");
/* harmony import */ var _shared_directives_view_movie_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/directives/view-movie.directive */ "uhu2");















function HeaderComponent_section_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("streamMovie", ctx_r1.movie)("ngStyle", ctx_r1.getStyles("vibrant"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("viewMovie", ctx_r1.movie)("ngStyle", ctx_r1.getStyles("muted"));
} }
function HeaderComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "backdrop");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HeaderComponent_section_0_div_5_Template, 12, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, ctx_r0.movie, 3), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.colorsLoaded);
} }
class HeaderComponent {
    constructor(moviesService, modalService, searchService, colors, router) {
        this.moviesService = moviesService;
        this.modalService = modalService;
        this.searchService = searchService;
        this.colors = colors;
        this.router = router;
        this.offset = 0;
        this.lockCount = 1;
        this.movies = [];
        this.colorsLoaded = false;
        this.pauseSlideShow = () => {
            this.lockCount++;
            // console.log("end:", this.lockCount);
            clearInterval(this.interval);
            this.interval = undefined;
        };
        this.getColors = () => this.colors
            .getPalette(new src_app_shared_pipes_backdrop_pipe__WEBPACK_IMPORTED_MODULE_3__["BackdropPipe"]().transform(this.movie, 3))
            .then(() => (this.colorsLoaded = true));
        this.decide = (arg) => this[arg ? "startSlideShow" : "pauseSlideShow"]();
        this.getStyles = (kind) => {
            return {
                backgroundColor: this.colors.curColors[kind],
                color: Object(src_app_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["getTextColor"])(this.colors.curColors[kind]),
            };
        };
        this.getMovie = () => {
            this.movie = this.movies[Object(src_app_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["mod"])(this.offset++, this.movies.length)];
            this.getColors();
        };
        let r = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                r.unsubscribe();
                this.pauseSlideShow();
            }
        });
    }
    ngOnInit() {
        this.modalService.onChange.subscribe((event) => {
            this.decide(!event);
        });
        this.searchService.onChange.subscribe((event) => {
            this.decide(!event);
        });
        this.detectVisibility();
        let movieSub = this.moviesService
            .getMovieGroup(src_app_shared_types_Types__WEBPACK_IMPORTED_MODULE_1__["MovieGroup"].Trending)
            .subscribe((movies) => {
            movieSub.unsubscribe();
            this.movies = movies;
            this.getMovie();
            this.startSlideShow();
            this.getColors();
        });
    }
    startSlideShow() {
        this.lockCount--;
        if (this.interval || this.lockCount > 0)
            return;
        // console.log("start:", this.lockCount);
        this.interval = setInterval(() => {
            Object(src_app_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["Id"])("header-img").style.opacity = "0";
            Object(src_app_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["query"])(".title").style.opacity = "0";
            setTimeout(this.getMovie, 400);
            setTimeout(() => {
                Object(src_app_shared_services_Utils__WEBPACK_IMPORTED_MODULE_0__["query"])(".title").style.opacity = "1";
            }, 800);
        }, 20000);
    }
    detectVisibility() {
        document.addEventListener("visibilitychange", () => this.decide(document.visibilityState === "visible"));
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_6__["MovieModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_colors_service__WEBPACK_IMPORTED_MODULE_8__["ColorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["imgLoad", "", "id", "header-img", 3, "src"], [1, "gradient", "w-100"], ["id", "title-container", 1, "column", "end", "w-100"], ["class", "title", 4, "ngIf"], [1, "title"], [1, "button-container", "row"], [1, "play", "row", "center", "space-around", 3, "streamMovie", "ngStyle"], [1, "fas", "fa-play"], [1, "info", "row", "center", "space-around", 3, "viewMovie", "ngStyle"], [1, "fas", "fa-info"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HeaderComponent_section_0_Template, 6, 5, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_10__["ImgLoadDirective"], _shared_directives_stream_movie_directive__WEBPACK_IMPORTED_MODULE_11__["StreamMovieDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _shared_directives_view_movie_directive__WEBPACK_IMPORTED_MODULE_12__["ViewMovieDirective"]], pipes: [src_app_shared_pipes_backdrop_pipe__WEBPACK_IMPORTED_MODULE_3__["BackdropPipe"]], styles: ["section[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: -1;\n  width: 100vw;\n  height: var(--preview-height);\n  object-position: center top;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  height: 25%;\n  position: absolute;\n  z-index: 0;\n  top: calc(var(--preview-height) - 25%);\n  background: linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%);\n}\n\n#title-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: var(--preview-height);\n  padding-bottom: 10rem;\n  background: linear-gradient(22.5deg, #141414 0%, rgba(20, 20, 20, 0) 50%);\n}\n\n#title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-left: calc(var(--ml) + 0.25rem);\n  transition: opacity 0.5s;\n}\n\n#title-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  height: 2.75rem;\n}\n\n#title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.75rem;\n  border-radius: calc(var(--radius-s) + 4px);\n  padding: 0.25rem 0.75rem;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 10px 2px;\n  cursor: pointer;\n  position: relative;\n  color: black;\n  background-color: white;\n  margin-right: 0.75rem;\n  width: 6.75rem;\n  transition: filter 0.1s;\n}\n\n#title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(97%);\n}\n\n#title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.7);\n}\n\n#title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  padding: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n#title-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0.5rem 0 0.5rem 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDRDs7QUFFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7RUFDQSx1RUFBQTtBQUNEOztBQUVBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHlFQUFBO0FBQ0Q7O0FBQ0M7RUFDQyxzQ0FBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUM7RUFDQyxlQUFBO0FBQUY7O0FBR0M7RUFDQyxlQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFHRTtFQUNDLHFCQUFBO0FBREg7O0FBSUU7RUFDQyx1QkFBQTtBQUZIOztBQUtFO0VBQ0MsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEg7O0FBTUU7RUFFQyxlQUFBO0VBQ0EsOEJBQUE7QUFMSCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IC0xO1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IHZhcigtLXByZXZpZXctaGVpZ2h0KTtcclxuXHRvYmplY3QtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbn1cclxuXHJcbmgxIHtcclxuXHRtYXJnaW46IDFyZW0gMDtcclxufVxyXG5cclxuLmdyYWRpZW50IHtcclxuXHRoZWlnaHQ6IDI1JTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMDtcclxuXHR0b3A6IGNhbGModmFyKC0tcHJldmlldy1oZWlnaHQpIC0gMjUlKTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMCwgMjAsIDIwLCAxKSAwJSwgcmdiYSgyMCwgMjAsIDIwLCAwKSAxMDAlKTtcclxufVxyXG5cclxuI3RpdGxlLWNvbnRhaW5lciB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0aGVpZ2h0OiB2YXIoLS1wcmV2aWV3LWhlaWdodCk7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMi41ZGVnLCByZ2JhKDIwLCAyMCwgMjAsIDEpIDAlLCByZ2JhKDIwLCAyMCwgMjAsIDApIDUwJSk7XHJcblxyXG5cdC50aXRsZSB7XHJcblx0XHRtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1tbCkgKyAwLjI1cmVtKTtcclxuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcclxuXHR9XHJcblxyXG5cdC5idXR0b24tY29udGFpbmVyIHtcclxuXHRcdGhlaWdodDogMi43NXJlbTtcclxuXHR9XHJcblxyXG5cdGJ1dHRvbiB7XHJcblx0XHRoZWlnaHQ6IDIuNzVyZW07XHJcblx0XHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJhZGl1cy1zKSArIDRweCk7XHJcblx0XHRwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcblx0XHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDRweCAxMHB4IDJweDtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGNvbG9yOiBibGFjaztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xyXG5cdFx0d2lkdGg6IDYuNzVyZW07XHJcblx0XHR0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xcztcclxuXHJcblx0XHQmOmFjdGl2ZSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoOTclKTtcclxuXHRcdH1cclxuXHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuNyk7XHJcblx0XHR9XHJcblxyXG5cdFx0aDQge1xyXG5cdFx0XHRtYXJnaW46IDAuNXJlbTtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aSB7XHJcblx0XHRcdC8vIGNvbG9yOiBibGFjaztcclxuXHRcdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0XHRtYXJnaW46IDAuNXJlbSAwIDAuNXJlbSAwLjVyZW07XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "gKLn":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/yt-player/yt-player.component.ts ***!
  \********************************************************************/
/*! exports provided: YTPlayerModule, YtPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YTPlayerModule", function() { return YTPlayerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YtPlayerComponent", function() { return YtPlayerComponent; });
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const _c0 = ["player"];
class YTPlayerModule {
}
YTPlayerModule.ɵfac = function YTPlayerModule_Factory(t) { return new (t || YTPlayerModule)(); };
YTPlayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: YTPlayerModule });
YTPlayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_youtube_player__WEBPACK_IMPORTED_MODULE_0__["YouTubePlayerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](YTPlayerModule, { imports: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_0__["YouTubePlayerModule"]] }); })();
class YtPlayerComponent {
    set url(id) {
        this.videoId = `${id}?controls=0&modestbranding=1&autoplay=1&muted=1`;
    }
    ngOnInit() {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}
YtPlayerComponent.ɵfac = function YtPlayerComponent_Factory(t) { return new (t || YtPlayerComponent)(); };
YtPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YtPlayerComponent, selectors: [["app-yt-player"]], viewQuery: function YtPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.player = _t.first);
    } }, inputs: { url: "url" }, decls: 2, vars: 1, consts: [[3, "videoId"], ["player", ""]], template: function YtPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "youtube-player", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoId", ctx.videoId);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_0__["YouTubePlayer"]], encapsulation: 2 });


/***/ }),

/***/ "lccz":
/*!**************************************************************!*\
  !*** ./src/app/views/movie-player/movie-player.component.ts ***!
  \**************************************************************/
/*! exports provided: MoviePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePlayerComponent", function() { return MoviePlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_webtorrent_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/webtorrent.service */ "3uMn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MoviePlayerComponent_video_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.movieStream), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MoviePlayerComponent {
    constructor(torrentService) {
        this.torrentService = torrentService;
    }
    ngOnInit() {
        this.movieStream = this.torrentService.getMovies();
    }
}
MoviePlayerComponent.ɵfac = function MoviePlayerComponent_Factory(t) { return new (t || MoviePlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_webtorrent_service__WEBPACK_IMPORTED_MODULE_1__["WebtorrentService"])); };
MoviePlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviePlayerComponent, selectors: [["app-movie-player"]], decls: 1, vars: 1, consts: [["autoplay", "", "preload", "", "controls", "", "poster", "../../../assets/poster.jpg", "type", "video/mp4", "id", "video-player", 3, "src", 4, "ngIf"], ["autoplay", "", "preload", "", "controls", "", "poster", "../../../assets/poster.jpg", "type", "video/mp4", "id", "video-player", 3, "src"]], template: function MoviePlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MoviePlayerComponent_video_0_Template, 2, 3, "video", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieStream);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["video[_ngcontent-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  background-color: black;\n  opacity: 0;\n  animation: fade-in 0.5s 1s forwards;\n}\n\n.center[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n}\n\n.lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #757575;\n  margin: -4px 0 0 -4px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.036s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.072s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.108s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.144s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.18s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.216s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -0.252s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -0.288s;\n}\n\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZpZS1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUNBQUE7QUFDRDs7QUFFQTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRDs7QUFBQTtFQUNDLGdFQUFBO0VBQ0EsMkJBQUE7QUFHRDs7QUFEQTtFQUNDLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUlEOztBQUZBO0VBQ0Msd0JBQUE7QUFLRDs7QUFIQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBTUQ7O0FBSkE7RUFDQyx3QkFBQTtBQU9EOztBQUxBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFRRDs7QUFOQTtFQUNDLHdCQUFBO0FBU0Q7O0FBUEE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQVVEOztBQVJBO0VBQ0Msd0JBQUE7QUFXRDs7QUFUQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBWUQ7O0FBVkE7RUFDQyx1QkFBQTtBQWFEOztBQVhBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFjRDs7QUFaQTtFQUNDLHdCQUFBO0FBZUQ7O0FBYkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQWdCRDs7QUFkQTtFQUNDLHdCQUFBO0FBaUJEOztBQWZBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFrQkQ7O0FBaEJBO0VBQ0Msd0JBQUE7QUFtQkQ7O0FBakJBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFvQkQ7O0FBbEJBO0VBQ0M7SUFDQyx1QkFBQTtFQXFCQTtFQW5CRDtJQUNDLHlCQUFBO0VBcUJBO0FBQ0YiLCJmaWxlIjoibW92aWUtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDB2dztcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdG1heC13aWR0aDogMTAwdnc7XHJcblx0bWF4LWhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0b3BhY2l0eTogMDtcclxuXHRhbmltYXRpb246IGZhZGUtaW4gMC41cyAxcyBmb3J3YXJkcztcclxufVxyXG5cclxuLmNlbnRlciB7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHR3aWR0aDogMTAwdnc7XHJcbn1cclxuLmxkcy1yb2xsZXIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDgwcHg7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdiB7XHJcblx0YW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuXHR0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuXHRjb250ZW50OiBcIiBcIjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMTE3LCAxMTcsIDExNyk7XHJcblx0bWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xyXG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcclxuXHR0b3A6IDYzcHg7XHJcblx0bGVmdDogNjNweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuXHRhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XHJcblx0dG9wOiA2OHB4O1xyXG5cdGxlZnQ6IDU2cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xyXG5cdHRvcDogNzFweDtcclxuXHRsZWZ0OiA0OHB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xyXG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcclxuXHR0b3A6IDcycHg7XHJcblx0bGVmdDogNDBweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuXHRhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcclxuXHR0b3A6IDcxcHg7XHJcblx0bGVmdDogMzJweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcclxuXHRhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XHJcblx0dG9wOiA2OHB4O1xyXG5cdGxlZnQ6IDI0cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xyXG5cdHRvcDogNjNweDtcclxuXHRsZWZ0OiAxN3B4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xyXG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcclxuXHR0b3A6IDU2cHg7XHJcblx0bGVmdDogMTJweDtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xyXG5cdDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "nOVp":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/poster.pipe.ts ***!
  \*********************************************/
/*! exports provided: PosterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterPipe", function() { return PosterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PosterPipe {
    constructor() {
        this.posterSizes = [
            "w92",
            "w154",
            "w185",
            "w342",
            "w500",
            "w780",
            "original",
        ];
        this.BASE = "https://image.tmdb.org/t/p/";
    }
    transform({ poster: url }, res) {
        return url ? this.BASE + this.posterSizes[res] + url : "";
        // : "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        // : "src/assets/empty.png";
    }
}
PosterPipe.ɵfac = function PosterPipe_Factory(t) { return new (t || PosterPipe)(); };
PosterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "poster", type: PosterPipe, pure: true });


/***/ }),

/***/ "rTRm":
/*!***************************************************!*\
  !*** ./src/app/shared/services/colors.service.ts ***!
  \***************************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-vibrant */ "BiEO");
/* harmony import */ var node_vibrant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_vibrant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ColorsService {
    constructor() {
        this.getPalette = (url) => new node_vibrant__WEBPACK_IMPORTED_MODULE_0___default.a(url).getPalette().then((palette) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            this.colors = {
                vibrant: (_a = palette.Vibrant) === null || _a === void 0 ? void 0 : _a.getHex(),
                muted: (_b = palette.Muted) === null || _b === void 0 ? void 0 : _b.getHex(),
                lightVibrant: (_c = palette.LightVibrant) === null || _c === void 0 ? void 0 : _c.getHex(),
                lightMuted: (_d = palette.LightMuted) === null || _d === void 0 ? void 0 : _d.getHex(),
                darkVibrant: (_e = palette.DarkVibrant) === null || _e === void 0 ? void 0 : _e.getHex(),
                darkMuted: (_f = palette.DarkMuted) === null || _f === void 0 ? void 0 : _f.getHex(),
                v_text: (_g = palette.Vibrant) === null || _g === void 0 ? void 0 : _g.getTitleTextColor(),
                m_text: (_h = palette.Muted) === null || _h === void 0 ? void 0 : _h.getTitleTextColor(),
                lv_text: (_j = palette.LightVibrant) === null || _j === void 0 ? void 0 : _j.getTitleTextColor(),
                lm_text: (_k = palette.LightMuted) === null || _k === void 0 ? void 0 : _k.getTitleTextColor(),
                dv_text: (_l = palette.DarkVibrant) === null || _l === void 0 ? void 0 : _l.getTitleTextColor(),
                dm_text: (_m = palette.DarkMuted) === null || _m === void 0 ? void 0 : _m.getTitleTextColor(),
            };
            return Object.assign({}, this.colors);
        });
    }
    get curColors() {
        return this.colors;
    }
}
ColorsService.ɵfac = function ColorsService_Factory(t) { return new (t || ColorsService)(); };
ColorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ColorsService, factory: ColorsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "sUaV":
/*!***************************************!*\
  !*** ./src/app/shared/types/Types.ts ***!
  \***************************************/
/*! exports provided: MovieGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieGroup", function() { return MovieGroup; });
var MovieGroup;
(function (MovieGroup) {
    MovieGroup["NowPlaying"] = "now_playing";
    MovieGroup["Popular"] = "popular";
    MovieGroup["TopRated"] = "top_rated";
    MovieGroup["Upcoming"] = "upcoming";
    MovieGroup["Trending"] = "trending";
})(MovieGroup || (MovieGroup = {}));


/***/ }),

/***/ "saem":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/img-load.directive.ts ***!
  \*********************************************************/
/*! exports provided: ImgLoadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgLoadDirective", function() { return ImgLoadDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ImgLoadDirective {
    constructor({ nativeElement: img }) {
        img.style.opacity = 0;
        img.setAttribute("loading", "lazy");
        img.onload = () => (img.style.opacity = 1);
    }
}
ImgLoadDirective.ɵfac = function ImgLoadDirective_Factory(t) { return new (t || ImgLoadDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ImgLoadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImgLoadDirective, selectors: [["", "imgLoad", ""]] });


/***/ }),

/***/ "uNma":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/stream-movie.directive.ts ***!
  \*************************************************************/
/*! exports provided: StreamMovieDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamMovieDirective", function() { return StreamMovieDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/movie-modal.service */ "3paH");
/* harmony import */ var src_app_shared_services_webtorrent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/webtorrent.service */ "3uMn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class StreamMovieDirective {
    constructor(modalService, torrentService, router) {
        this.modalService = modalService;
        this.torrentService = torrentService;
        this.router = router;
        this.onClick = () => {
            this.modalService.closeModal();
            const { torrents } = this.streamMovie;
            const { hash } = torrents.find((t) => t.quality === "1080p");
            this.torrentService.hash = hash;
            this.router.navigate(["/watch"]);
        };
    }
}
StreamMovieDirective.ɵfac = function StreamMovieDirective_Factory(t) { return new (t || StreamMovieDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_1__["MovieModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_webtorrent_service__WEBPACK_IMPORTED_MODULE_2__["WebtorrentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StreamMovieDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StreamMovieDirective, selectors: [["", "streamMovie", ""]], hostBindings: function StreamMovieDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StreamMovieDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { streamMovie: "streamMovie" } });


/***/ }),

/***/ "uhu2":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/view-movie.directive.ts ***!
  \***********************************************************/
/*! exports provided: ViewMovieDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMovieDirective", function() { return ViewMovieDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/movie-modal.service */ "3paH");


class ViewMovieDirective {
    constructor(modalService) {
        this.modalService = modalService;
        this.onClick = () => this.modalService.openModal(this.viewMovie);
    }
}
ViewMovieDirective.ɵfac = function ViewMovieDirective_Factory(t) { return new (t || ViewMovieDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_movie_modal_service__WEBPACK_IMPORTED_MODULE_1__["MovieModalService"])); };
ViewMovieDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ViewMovieDirective, selectors: [["", "viewMovie", ""]], hostBindings: function ViewMovieDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewMovieDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { viewMovie: "viewMovie" } });


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
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test/test.component */ "K9yR");
/* harmony import */ var _views_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/movie-player/movie-player.component */ "lccz");
/* harmony import */ var _views_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/user/user.component */ "zntH");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "Avrn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "home", canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "user", canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], component: _views_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"] },
    { path: "watch", component: _views_movie_player_movie_player_component__WEBPACK_IMPORTED_MODULE_1__["MoviePlayerComponent"] },
    { path: "test", component: _test_test_component__WEBPACK_IMPORTED_MODULE_0__["TestComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();


/***/ }),

/***/ "yGOH":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/directives.module.ts ***!
  \********************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/directives/img-load.directive */ "saem");
/* harmony import */ var _view_movie_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-movie.directive */ "uhu2");
/* harmony import */ var _stream_movie_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stream-movie.directive */ "uNma");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




const DIRECTIVES = [src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_0__["ImgLoadDirective"], _view_movie_directive__WEBPACK_IMPORTED_MODULE_1__["ViewMovieDirective"], _stream_movie_directive__WEBPACK_IMPORTED_MODULE_2__["StreamMovieDirective"]];
class DirectivesModule {
}
DirectivesModule.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); };
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_0__["ImgLoadDirective"], _view_movie_directive__WEBPACK_IMPORTED_MODULE_1__["ViewMovieDirective"], _stream_movie_directive__WEBPACK_IMPORTED_MODULE_2__["StreamMovieDirective"]], exports: [src_app_shared_directives_img_load_directive__WEBPACK_IMPORTED_MODULE_0__["ImgLoadDirective"], _view_movie_directive__WEBPACK_IMPORTED_MODULE_1__["ViewMovieDirective"], _stream_movie_directive__WEBPACK_IMPORTED_MODULE_2__["StreamMovieDirective"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


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

/***/ }),

/***/ "zntH":
/*!**********************************************!*\
  !*** ./src/app/views/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/movies/services/user.service */ "Q28f");
/* harmony import */ var src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/movies/services/movies.service */ "DAcT");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/movies/components/scroller/scroller.component */ "KK4Z");






function UserComponent_app_scroller_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-scroller", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("init", ctx_r0.asScroller(0));
} }
class UserComponent {
    constructor(user, moviesService) {
        this.user = user;
        this.moviesService = moviesService;
        this.loaded = false;
    }
    ngOnInit() { }
    asScroller(i) {
        return {
            id: `home-scroller-${i}`,
            aspect: !(i % 2) ? 3 / 2 : 9 / 16,
            movies: this.moviesService.getShowList(),
        };
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_movies_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_movies_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 5, vars: 1, consts: [["id", "user-container"], [3, "init", 4, "ngIf"], [3, "init"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserComponent_app_scroller_4_Template, 1, 1, "app-scroller", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user.isRefreshing);
    } }, directives: [_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _modules_movies_components_scroller_scroller_component__WEBPACK_IMPORTED_MODULE_5__["ScrollerComponent"]], styles: ["section[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n}\nsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: white;\n  font-weight: 600;\n  margin: var(--ml) 0 var(--ms) calc(var(--ml) + 0.25rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtBQUNKIiwiZmlsZSI6InVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogNHJlbTtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1tbCkgMCB2YXIoLS1tcykgY2FsYyh2YXIoLS1tbCkgKyAwLjI1cmVtKTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map