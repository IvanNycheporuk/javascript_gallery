/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gallery_GalleryContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery/GalleryContainer */ \"./src/Gallery/GalleryContainer.js\");\n/* harmony import */ var _Gallery_GalleryModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallery/GalleryModal */ \"./src/Gallery/GalleryModal.js\");\n/* harmony import */ var _Favorite_FavoriteStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Favorite/FavoriteStore */ \"./src/Favorite/FavoriteStore.js\");\n/* harmony import */ var _Favorite_FavoriteList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Favorite/FavoriteList */ \"./src/Favorite/FavoriteList.js\");\n\r\n\r\n\r\n\r\n//import data from './films.json';\r\n\r\nclass App {\r\n    constructor(el) {\r\n        this.el = el;\r\n        this.favoriteStore = [];\r\n        this.gallery = null;\r\n        this.favoriteList = null;\r\n        this.data = null;\r\n        this.modal = new _Gallery_GalleryModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n        this.favoriteStore = new _Favorite_FavoriteStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"]((data) => {\r\n            let items = this.data.filter(item => {\r\n                return data.indexOf(item.id) !== -1;\r\n            });\r\n\r\n            this.favoriteList.Update(items);\r\n        });\r\n        \r\n        this.GetData().then(res => {\r\n            this.data = res;\r\n            this.DefineFavorites(this.data);\r\n            this.Init(this.data);\r\n        });\r\n\r\n        // setTimeout(() => {\r\n        //     this.gallery.FilterByGenre('Drama');\r\n        // }, 1000);\r\n    }\r\n    \r\n    GetData() {\r\n        return new Promise(resolve => {\r\n            fetch('http://my-json-server.typicode.com/moviedb-tech/movies/list')\r\n                .then(resolve => {\r\n                    return resolve.json();\r\n                })\r\n                .then(res => {\r\n                    let transformedArr = res.map(item => {\r\n                        return {\r\n                            favorite: false,\r\n                            ...item\r\n                        }\r\n                    })\r\n    \r\n                    resolve(transformedArr);                \r\n                });\r\n        })        \r\n    }\r\n\r\n    Init(data) {      \r\n        this.gallery = new _Gallery_GalleryContainer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data, this.modal.Open, (item) => { this.favoriteStore.Toggle(item.id); });\r\n\r\n        let favoriteList = this.BuildFavoriteList(\r\n            (e, id) => {\r\n                this.gallery.UpdateMovieFavoriteState(id, false);\r\n                this.favoriteStore.Remove(id);\r\n            });\r\n        \r\n        this.el.appendChild(this.gallery.Build());\r\n        this.el.appendChild(favoriteList);\r\n    }\r\n\r\n    BuildFavoriteList(callback) {\r\n        let favorites = this.favoriteStore.GetData();\r\n        let items = this.data.filter(item => {\r\n            return favorites.indexOf(item.id) !== -1;\r\n        });\r\n\r\n        this.favoriteList = new _Favorite_FavoriteList__WEBPACK_IMPORTED_MODULE_3__[\"default\"](items, callback);\r\n\r\n        return this.favoriteList.Build();\r\n    }\r\n\r\n    DefineFavorites(items) {\r\n        let favorites = this.favoriteStore.GetData();\r\n        favorites.forEach(f => {\r\n            let item = items.find(x => x.id === f);\r\n            if (item !== null) item.favorite = true;\r\n        });\r\n    }\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    new App(document.getElementById('App'));\r\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Favorite/FavoriteList.js":
/*!**************************************!*\
  !*** ./src/Favorite/FavoriteList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FavoriteListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FavoriteListItem */ \"./src/Favorite/FavoriteListItem.js\");\n\r\n\r\nclass FavoriteList {\r\n    constructor(data, onClickRemoveHandler) {\r\n        this.data = data;\r\n        this.onClickRemoveHandler = onClickRemoveHandler;\r\n        this.el = null;\r\n\r\n        this.Update = this.Update.bind(this);\r\n    }\r\n    \r\n    ClearList() {\r\n        this.el.querySelector('ul').innerHTML = '';\r\n    }\r\n\r\n    Update(data) {\r\n        this.ClearList();\r\n        \r\n        let listContainer = this.el.querySelector('ul');\r\n        \r\n        data.forEach(item => {            \r\n            let favoriteItem = new _FavoriteListItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item, this.onClickRemoveHandler).Build();\r\n            \r\n            listContainer.appendChild(favoriteItem);\r\n        });\r\n    }\r\n\r\n    Build() {\r\n        let element = document.createElement('div');\r\n        let title = document.createElement('h2');\r\n        title.classList.add('title');        \r\n        title.innerText = 'Favorite List';\r\n        \r\n        let listContainer = document.createElement('ul');\r\n        element.classList.add('favorite-list');\r\n\r\n        if (this.data) {\r\n            this.data.forEach(item => {\r\n                let favoriteItem = new _FavoriteListItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item, this.onClickRemoveHandler).Build();\r\n                listContainer.appendChild(favoriteItem);\r\n            });\r\n        }\r\n        \r\n        element.appendChild(title);\r\n        element.appendChild(listContainer);\r\n\r\n        this.el = element;\r\n        \r\n        return element;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoriteList);\n\n//# sourceURL=webpack:///./src/Favorite/FavoriteList.js?");

/***/ }),

/***/ "./src/Favorite/FavoriteListItem.js":
/*!******************************************!*\
  !*** ./src/Favorite/FavoriteListItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FavoriteListItem {\r\n    constructor(data, onClickHandler) {\r\n        this.data = data;\r\n        this.onClickHandler = onClickHandler;\r\n    }\r\n\r\n    Build() {\r\n        let listItem = document.createElement('li');\r\n        listItem.classList.add('list-item');\r\n\r\n        listItem.innerHTML = `\r\n            <p>${this.data.name}</p>\r\n            <span class=\"remove-favorite-item\">&#10006;</span>\r\n        `;\r\n\r\n        listItem.querySelector('.remove-favorite-item').addEventListener('click', (e) => {this.onClickHandler(e, this.data.id)} );\r\n\r\n        return listItem;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoriteListItem);\n\n//# sourceURL=webpack:///./src/Favorite/FavoriteListItem.js?");

/***/ }),

/***/ "./src/Favorite/FavoriteStore.js":
/*!***************************************!*\
  !*** ./src/Favorite/FavoriteStore.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FavoriteStore {\r\n    constructor(onUpdatedHandler) {\r\n        this.data = [];\r\n        this.onUpdatedHandler = onUpdatedHandler;\r\n\r\n        this.FethDataFromStore();\r\n        \r\n        this.Add = this.Add.bind(this);\r\n        this.Remove = this.Remove.bind(this);\r\n        this.Toggle = this.Toggle.bind(this);\r\n    }\r\n\r\n    Add(item) {\r\n        if (this.Has(item)) return;\r\n\r\n        this.data.push(item);\r\n        localStorage.setItem('favoriteFilms', JSON.stringify(this.data));\r\n\r\n        this.onUpdatedHandler(this.data);\r\n    }\r\n\r\n    Remove(id) {\r\n        this.data = this.data.filter(x => {\r\n            return x !== id;\r\n        });\r\n\r\n        localStorage.setItem('favoriteFilms', JSON.stringify(this.data));\r\n        \r\n        this.onUpdatedHandler(this.data);\r\n    }\r\n\r\n    FethDataFromStore() {\r\n        if (localStorage.getItem('favoriteFilms')) {\r\n            this.data = JSON.parse(localStorage.getItem('favoriteFilms'));\r\n        }\r\n    }\r\n\r\n    Toggle(item) {\r\n        if (this.Has(item)) {\r\n            this.Remove(item);\r\n        }\r\n        else {\r\n            this.Add(item);\r\n        }\r\n    }\r\n\r\n    Has(id) {\r\n        return this.data.some(x => x === id);\r\n    }\r\n\r\n    GetData() {\r\n        return this.data;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoriteStore);\n\n//# sourceURL=webpack:///./src/Favorite/FavoriteStore.js?");

/***/ }),

/***/ "./src/Gallery/Builders/CardGalleryItemBuilder.js":
/*!********************************************************!*\
  !*** ./src/Gallery/Builders/CardGalleryItemBuilder.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass CardGalleryItemBuilder {\r\n    Build(data, favoriteStar) {\r\n        let item = document.createElement('div');\r\n        item.classList.add('gallery-item', 'card');\r\n        item.dataset.id = data.id;\r\n\r\n        item.innerHTML = `\r\n            <div class=\"gallery-img\" style=\"background-image: url('${data.img}')\"></div>\r\n            <div class=\"gallery-text\">\r\n                <p>${data.name}</p>\r\n                <p>${data.year}</p>\r\n            </div>           \r\n        `;\r\n\r\n        item.appendChild(favoriteStar.Render());\r\n\r\n        return item;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardGalleryItemBuilder);\n\n//# sourceURL=webpack:///./src/Gallery/Builders/CardGalleryItemBuilder.js?");

/***/ }),

/***/ "./src/Gallery/Builders/ListGalleryItemBuilder.js":
/*!********************************************************!*\
  !*** ./src/Gallery/Builders/ListGalleryItemBuilder.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ListGalleryItemBuilder {\r\n    Build(data, favoriteStar) {\r\n        let item = document.createElement('div');\r\n        item.classList.add('gallery-item', 'list');\r\n        item.dataset.id = data.id;\r\n\r\n        item.innerHTML = `\r\n            <div class=\"gallery-text\">\r\n                List: <p>${data.name}</p>\r\n            </div>           \r\n        `;\r\n\r\n        item.appendChild(favoriteStar.Render());\r\n\r\n        return item;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListGalleryItemBuilder);\n\n//# sourceURL=webpack:///./src/Gallery/Builders/ListGalleryItemBuilder.js?");

/***/ }),

/***/ "./src/Gallery/GalleryContainer.js":
/*!*****************************************!*\
  !*** ./src/Gallery/GalleryContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GalleryItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryItem */ \"./src/Gallery/GalleryItem.js\");\n/* harmony import */ var _Builders_CardGalleryItemBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builders/CardGalleryItemBuilder */ \"./src/Gallery/Builders/CardGalleryItemBuilder.js\");\n/* harmony import */ var _Builders_ListGalleryItemBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builders/ListGalleryItemBuilder */ \"./src/Gallery/Builders/ListGalleryItemBuilder.js\");\n\r\n\r\n\r\n\r\nclass GalleryContainer {\r\n    constructor(data, onMovieClickHandler, onStarClickHandler, onFilterHandler) {\r\n        this.data = data;\r\n        this.onMovieClickHandler = onMovieClickHandler;\r\n        this.onStarClickHandler = onStarClickHandler;\r\n        this.onFilterHandler = onFilterHandler;\r\n        this.galleryItems = [];\r\n        this.galleryContainer = null;\r\n\r\n        this.builders = {\r\n            'list': new _Builders_ListGalleryItemBuilder__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\r\n            'card': new _Builders_CardGalleryItemBuilder__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\n        };\r\n        this.itemRenderType = 'card';\r\n        this.filteringGenre = '';\r\n    }\r\n\r\n    Build() {\r\n        this.galleryContainer = document.createElement('div');\r\n        this.galleryContainer.classList.add('gallery-container');\r\n\r\n        let titleHeader = document.createElement('div');\r\n        titleHeader.classList.add('gallery-header');\r\n        titleHeader.innerHTML = `\r\n            <select></select>\r\n            <h2>Movies Gallery</h2>\r\n            <div class=\"view-switcher\">\r\n                <button class='card'>Card</button>\r\n                <button class='list'>List</button>\r\n            </div>\r\n        `;\r\n        this.galleryContainer.appendChild(titleHeader);\r\n\r\n        let galleryWrapper = document.createElement('div');\r\n        galleryWrapper.classList.add('gallery-wrapper');\r\n\r\n        this.galleryContainer.appendChild(galleryWrapper);\r\n        this.RenderItems(this.data);\r\n\r\n        this.galleryContainer.querySelector('.card').addEventListener('click', () => {\r\n            this.SetItemRenderType('card');\r\n        });\r\n\r\n        this.galleryContainer.querySelector('.list').addEventListener('click', () => {\r\n            this.SetItemRenderType('list');\r\n        });\r\n\r\n        this.BuildSelect();\r\n\r\n        return this.galleryContainer;\r\n    }\r\n\r\n    BuildSelect() {\r\n        let select = this.galleryContainer.querySelector('select');\r\n        select.appendChild(new Option('-choose genre-', '', true, true))\r\n\r\n        let genresArr = this.data.map(item => {\r\n            return item.genres.map(genre => genre.toLowerCase());\r\n        });\r\n        let uniqueGenres = [];\r\n\r\n        for (var i = 0; i < genresArr.length; i++) {\r\n            for (var j = 0; j < genresArr[i].length; j++) {\r\n                if (!uniqueGenres.includes(genresArr[i][j])) {\r\n                    uniqueGenres.push(genresArr[i][j]);\r\n                }\r\n            }\r\n        }\r\n\r\n        uniqueGenres.forEach(genre => {\r\n            let option = new Option(genre, genre);\r\n            select.appendChild(option);\r\n        });\r\n\r\n        select.addEventListener('input', (e) => {\r\n            console.log('asdasd');\r\n            this.FilterByGenre(e.target.value);\r\n        })\r\n    }\r\n\r\n    RenderItems(data) {\r\n        let itemsContainer = this.galleryContainer.querySelector('.gallery-wrapper');\r\n        itemsContainer.innerHTML = '';\r\n\r\n        this.galleryItems = data.map(item => {\r\n            let galleryItem = new _GalleryItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item, this.onMovieClickHandler, (item) => {\r\n                this.onStarClickHandler(item);\r\n            });\r\n            return galleryItem;\r\n        });\r\n\r\n        this.galleryItems.forEach(item => {\r\n            let html = item.Render(this.builders[this.itemRenderType]);\r\n            itemsContainer.appendChild(html);\r\n        });       \r\n    }\r\n\r\n    SetItemRenderType(type) {\r\n        if (type in this.builders) {\r\n            this.itemRenderType = type;\r\n            this.RenderItems(this.data);\r\n            this.FilterByGenre(this.filteringGenre);\r\n        }\r\n    }\r\n\r\n    UpdateMovieFavoriteState(id, value) {\r\n        let item = this.galleryItems.find(x => x.data.id === id);\r\n        item.SetFavorite(value);\r\n    }\r\n\r\n    FilterByGenre(genre) {\r\n        let items = this.galleryItems;\r\n        this.filteringGenre = genre;\r\n\r\n        if (genre.length > 0) {\r\n            items = items.filter(item => {\r\n                return !item.data.genres.some(x => x.toLowerCase() === genre);\r\n            });\r\n        }\r\n\r\n        for (let i = 0; i < this.galleryItems.length; i++) {\r\n            let item = this.galleryItems[i];\r\n\r\n            if (items.some(x => x.data.id === item.data.id)) {\r\n                item.el.classList.remove('hidden');\r\n            } else {\r\n                item.el.classList.add('hidden');\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryContainer);\n\n//# sourceURL=webpack:///./src/Gallery/GalleryContainer.js?");

/***/ }),

/***/ "./src/Gallery/GalleryItem.js":
/*!************************************!*\
  !*** ./src/Gallery/GalleryItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GalleryStar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryStar */ \"./src/Gallery/GalleryStar.js\");\n\r\n\r\nclass GalleryItem {\r\n    constructor(data, onMovieClickHandler, onStarClickcHandler) {\r\n        this.data = data;\r\n        this.onMovieClickHandler = onMovieClickHandler;\r\n        this.onStarClickcHandler = onStarClickcHandler;\r\n        this.el = null;\r\n\r\n        let isFavorite = this.data.favorite;\r\n        this.favoriteStar = new _GalleryStar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](isFavorite, () => {\r\n            this.data.favorite = this.favoriteStar.value;\r\n            this.onStarClickcHandler(this.data);\r\n        });\r\n    }\r\n\r\n    Render(builder) {\r\n        let item = builder.Build(this.data, this.favoriteStar);\r\n        item.addEventListener('click', (e) => {\r\n            this.onMovieClickHandler(e, this.data);\r\n        });\r\n\r\n        this.el = item;\r\n        return item;\r\n    }\r\n\r\n    SetFavorite(value) {\r\n        this.data.favorite = value;\r\n        this.favoriteStar.SetValue(value);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryItem);\n\n//# sourceURL=webpack:///./src/Gallery/GalleryItem.js?");

/***/ }),

/***/ "./src/Gallery/GalleryModal.js":
/*!*************************************!*\
  !*** ./src/Gallery/GalleryModal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GalleryStar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryStar */ \"./src/Gallery/GalleryStar.js\");\n\r\n\r\nclass GalleryModal {\r\n    constructor() {\r\n        this.el = null;\r\n        this.Render();\r\n        this.Open = this.Open.bind(this);\r\n    }\r\n\r\n    Open(e, data) {\r\n        this.SetData(data);\r\n\r\n        this.el.classList.add('show');\r\n    }\r\n\r\n    Close(e) {\r\n        let modal = e.target.closest('.gallery-modal');\r\n        modal.querySelector('.modal-content').remove();\r\n        modal.classList.remove('show');\r\n    }\r\n\r\n    AddEventListeners() {\r\n        // how to add global event on click outside of modal to close it - !!!! \r\n        // click on body and via mathces add event\r\n    }\r\n\r\n    SetData(data) {\r\n        let modal = this.el;\r\n        let movieFullInfo = document.createElement('div');\r\n        movieFullInfo.classList.add('modal-content');\r\n\r\n        let galleryStar = new _GalleryStar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data.favorite).Render();\r\n        galleryStar.classList.add('modal-view');\r\n\r\n        let actors = this.RenderDetails(data.starring);\r\n        let genres = this.RenderDetails(data.genres);\r\n\r\n        movieFullInfo.innerHTML = `\r\n            <div class=\"modal-info\">\r\n                <div class=\"img-wrap\" style=\"background-image: url('${data.img}')\">\r\n                    ${galleryStar.outerHTML}\r\n                </div>\r\n                <div class=\"movie-general-info\">\r\n                    <p class=\"movie-title\"><b>Title:</b> ${data.name}</p>\r\n                    <p class=\"movie-director\"><b>Director:</b> ${data.director}</p>\r\n                    <p class=\"movie-description\"><b>Description:</b> ${data.description}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-additional\">\r\n                <p class=\"movie-year\"><b>Year</b>: ${data.year}</p>\r\n                <p class=\"movie-genres\"><b>Genres:</b> ${genres}</p>\r\n                <p class=\"movie-actors\"><b>Actors: </b> ${actors}</p>\r\n            </div>       \r\n        `\r\n        modal.querySelector('.modal-wrap').appendChild(movieFullInfo);\r\n    }\r\n\r\n    RenderDetails(details) {\r\n        let detailsList = '';\r\n        details.forEach(detail => {\r\n            let detailItem = document.createElement('span');\r\n            detailItem.innerText = `${detail}`;\r\n            detailsList += detailItem.outerHTML;\r\n        });\r\n\r\n        return detailsList;\r\n    }\r\n\r\n    Render() {\r\n        let modal = document.createElement('div');\r\n        modal.classList.add('gallery-modal');\r\n\r\n        modal.innerHTML = `\r\n            <div class=\"modal-wrap\">\r\n                <span class=\"close-modal\">&#10006;</span>\r\n            </div>\r\n        `;\r\n        \r\n        this.el = modal;\r\n\r\n        modal.querySelector('.close-modal').addEventListener('click', this.Close);\r\n\r\n        document.body.appendChild(modal);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryModal);\n\n//# sourceURL=webpack:///./src/Gallery/GalleryModal.js?");

/***/ }),

/***/ "./src/Gallery/GalleryStar.js":
/*!************************************!*\
  !*** ./src/Gallery/GalleryStar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GalleryStar {\r\n    constructor(value, onClickHandler) {\r\n        this.onClickHandler = onClickHandler;\r\n        this.value = value;\r\n        this.el = this._Prepare();\r\n\r\n        this.Render = this.Render.bind(this);\r\n    }\r\n    \r\n    Toggle() {\r\n        this.value = !this.value;\r\n        this.el.classList.toggle('active', this.value);\r\n    }\r\n\r\n    Render() {\r\n        return this.el;\r\n    }\r\n\r\n    SetValue(value) {\r\n        this.value = value;\r\n        this.el.classList.toggle('active', value);\r\n    }\r\n\r\n    _Prepare() {\r\n        let element = document.createElement('div');\r\n        element.classList.add('gallery-star');\r\n\r\n        if (this.value) {\r\n            element.classList.add('active');\r\n        }\r\n\r\n        element.innerHTML = `\r\n            <svg height=\"511pt\" viewBox=\"0 -10 511.98645 511\" width=\"511pt\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m499.574219 188.503906c-3.199219-9.921875-11.988281-16.9375-22.398438-17.898437l-141.355469-12.84375-55.894531-130.835938c-4.117187-9.578125-13.503906-15.765625-23.933593-15.765625-10.433594 0-19.820313 6.207032-23.9375 15.808594l-55.890626 130.816406-141.378906 12.839844c-10.386718.941406-19.175781 7.957031-22.378906 17.878906-3.21875 9.921875-.234375 20.777344 7.617188 27.648438l106.859374 93.695312-31.511718 138.773438c-2.300782 10.199218 1.664062 20.734375 10.136718 26.878906 4.519532 3.328125 9.875 4.992188 15.230469 4.992188 4.628907 0 9.238281-1.234376 13.355469-3.710938l121.898438-72.894531 121.875 72.875c8.917968 5.351562 20.160156 4.882812 28.609374-1.238281 8.46875-6.144532 12.4375-16.683594 10.132813-26.882813l-31.507813-138.769531 106.859376-93.699219c7.847656-6.867187 10.835937-17.726563 7.613281-27.667969zm0 0\" /><path d=\"m114.617188 491.136719c-5.632813 0-11.203126-1.746094-15.957032-5.183594-8.855468-6.398437-12.992187-17.429687-10.582031-28.09375l32.9375-145.066406-111.703125-97.964844c-8.210938-7.1875-11.347656-18.515625-7.976562-28.90625 3.371093-10.367187 12.542968-17.726563 23.402343-18.730469l147.820313-13.417968 58.410156-136.746094c4.308594-10.046875 14.121094-16.535156 25.023438-16.535156 10.902343 0 20.714843 6.488281 25.023437 16.511718l58.410156 136.769532 147.796875 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.386718.253906 21.738281-7.980469 28.90625l-111.679688 97.941406 32.9375 145.066406c2.414063 10.667969-1.726562 21.695313-10.578125 28.09375-8.8125 6.378906-20.566406 6.914063-29.890625 1.324219l-127.464843-76.160156-127.445313 76.203125c-4.308594 2.582031-9.109375 3.859375-13.929687 3.859375zm141.375-112.871094c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.769532 1.089843-19.925782 8.621093-26.515625l105.472657-92.523438-139.542969-12.671875c-10.003906-.894531-18.667969-7.1875-22.59375-16.46875l-55.101562-129.046875-55.148438 129.066407c-3.902344 9.238281-12.5625 15.53125-22.589844 16.429687l-139.519531 12.671875 105.46875 92.519531c7.554687 6.59375 10.839844 16.769531 8.621094 26.539063l-31.082031 136.941406 120.277343-71.9375c4.328125-2.558594 9.128907-3.859375 13.972657-3.859375zm-84.585938-221.824219v.019532zm169.152344-.066406v.023438s0 0 0-.023438zm0 0\"/></svg>\r\n        `;\r\n\r\n        element.addEventListener('click', (e) => {\r\n            e.stopPropagation();\r\n\r\n            this.Toggle();\r\n            this.onClickHandler(this.value);\r\n        });\r\n\r\n        return element;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryStar);\n\n//# sourceURL=webpack:///./src/Gallery/GalleryStar.js?");

/***/ })

/******/ });