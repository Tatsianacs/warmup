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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppView */ \"./js/AppView.js\");\n/* harmony import */ var _AppModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppModel */ \"./js/AppModel.js\");\n/* harmony import */ var _AppController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppController */ \"./js/AppController.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.view = new _AppView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.model = new _AppModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.controller = new _AppController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.view, this.model);\n  }\n\n  _createClass(App, [{\n    key: \"start\",\n    value: function start() {\n      this.controller.init();\n    }\n  }]);\n\n  return App;\n}();\n\n\n\n//# sourceURL=webpack:///./js/App.js?");

/***/ }),

/***/ "./js/AppController.js":
/*!*****************************!*\
  !*** ./js/AppController.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppController; });\n/* harmony import */ var _AppView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppView */ \"./js/AppView.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AppController =\n/*#__PURE__*/\nfunction () {\n  function AppController(view, model) {\n    _classCallCheck(this, AppController);\n\n    this.model = model;\n    this.view = view;\n  }\n\n  _createClass(AppController, [{\n    key: \"init\",\n    value: function init() {\n      _AppView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].drawContainer();\n      this.view.onClickGetVideos = this.onClickGetVideos.bind(this);\n      this.view.onDownGetTooltip = this.onDownGetTooltip.bind(this);\n      this.view.onUpHideTooltip = AppController.onUpHideTooltip.bind(this);\n      this.input = document.querySelector('.search-box');\n      var videoContainer = document.getElementById('video_container');\n      videoContainer.addEventListener('touchstart', this.onTouchStartGetStartX.bind(this));\n      videoContainer.addEventListener('touchend', this.onTouchEndGetVideos.bind(this));\n      videoContainer.addEventListener('mousedown', this.onMouseStartGetStartX.bind(this));\n      videoContainer.addEventListener('mouseup', this.onMouseEndGetVideos.bind(this));\n      document.querySelector('.submit').addEventListener('click', this.getResults.bind(this));\n      document.querySelector('.search-box').addEventListener('keydown', this.onKeyDownShowResults.bind(this));\n      window.addEventListener('resize', this.resizeThrottler.bind(this), false);\n    }\n  }, {\n    key: \"onDownGetTooltip\",\n    value: function onDownGetTooltip(e) {\n      if (e.cancelable) {\n        e.preventDefault();\n      }\n\n      var tooltip = document.querySelector('.tooltiptext');\n      tooltip.innerText = \"Current page is \".concat(this.currentPage + 1);\n      tooltip.classList.add('visible');\n    }\n  }, {\n    key: \"getResults\",\n    value: function getResults() {\n      var _this = this;\n\n      var inputData = this.input.value.trim().replace(/\\s/g, '+');\n\n      if (inputData.length !== 0) {\n        _AppView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLoader();\n        var queryPart = \"&q=\".concat(inputData);\n        this.calculateSize();\n        this.clear();\n        this.model.search(queryPart, function (data, arrayStat) {\n          _this.view.drawVideos(data, arrayStat);\n\n          var videoContainer = document.getElementById('video_container');\n          var paginationWrapper = document.querySelector('.pagination-wrapper');\n\n          if (videoContainer.contains(paginationWrapper)) {\n            _this.checkButtons();\n          }\n        });\n      }\n    }\n  }, {\n    key: \"onKeyDownShowResults\",\n    value: function onKeyDownShowResults(evt) {\n      var e = evt || window.event;\n      var key = e.key;\n\n      if (key === 'Enter') {\n        this.getResults();\n      }\n\n      evt.stopPropagation();\n    }\n  }, {\n    key: \"calculateSize\",\n    value: function calculateSize() {\n      var windowWidth = window.innerWidth || document.body.offsetWidth || document.body.clientWidth;\n\n      if (windowWidth >= 1600) {\n        this.numOfBlocks = 4;\n      } else if (windowWidth < 1600 && windowWidth >= 1200) {\n        this.numOfBlocks = 3;\n      } else if (windowWidth < 1200 && windowWidth >= 800) {\n        this.numOfBlocks = 2;\n      } else {\n        this.numOfBlocks = 1;\n      }\n\n      document.querySelector('.gallery').style.width = \"\".concat(this.numOfBlocks * 400, \"px\");\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      var videoContainer = document.getElementById('video_container');\n      var divNoResults = document.querySelector('.text-no-results');\n      var list = videoContainer.querySelector('.videos');\n      var paginationWrapper = document.querySelector('.pagination-wrapper');\n\n      if (videoContainer.contains(divNoResults)) {\n        divNoResults.remove();\n      }\n\n      list.innerHTML = '';\n      list.style.marginLeft = '0px';\n      this.currentPage = 0;\n      this.allPages = 0;\n      this.position = 0;\n      this.model.lengthOfItems = 0;\n\n      if (videoContainer.contains(paginationWrapper)) {\n        paginationWrapper.remove();\n      }\n    }\n  }, {\n    key: \"right\",\n    value: function right() {\n      var _this2 = this;\n\n      var videoContainer = document.getElementById('video_container');\n      var paginationWrapper = document.querySelector('.pagination-wrapper');\n      var list = videoContainer.querySelector('.videos');\n      paginationWrapper.classList.add('transition-next');\n      this.currentPage += 1;\n      var listElems = videoContainer.querySelectorAll('.video-item');\n      var positionArgFirst = this.position - AppController.blockWidth * this.numOfBlocks;\n      var positionArgSectond = -AppController.blockWidth * (listElems.length - this.numOfBlocks);\n      this.position = Math.max(positionArgFirst, positionArgSectond);\n      list.style.marginLeft = \"\".concat(this.position, \"px\");\n      setTimeout(AppController.cleanClasses.bind(this), 500);\n      this.checkButtons();\n      this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);\n      var inputData = this.input.value.trim().replace(/\\s/g, '+');\n\n      if (inputData) {\n        var queryPart = \"&q=\".concat(inputData);\n\n        if (this.model.lengthOfItems < this.model.totalResults && this.allPages - this.currentPage <= 2) {\n          this.model.loadNextPage(queryPart, function (data, arrayStat) {\n            _this2.view.drawVideos(data, arrayStat);\n          });\n        }\n      }\n    }\n  }, {\n    key: \"left\",\n    value: function left() {\n      var videoContainer = document.getElementById('video_container');\n      var paginationWrapper = document.querySelector('.pagination-wrapper');\n      var list = videoContainer.querySelector('.videos');\n      paginationWrapper.classList.add('transition-prev');\n      this.currentPage -= 1;\n      this.position = Math.min(this.position + AppController.blockWidth * this.numOfBlocks, 0);\n      list.style.marginLeft = \"\".concat(this.position, \"px\");\n      setTimeout(AppController.cleanClasses.bind(this), 500);\n\n      if (this.currentPage === 0) {\n        this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);\n      }\n\n      this.checkButtons();\n    }\n  }, {\n    key: \"onClickGetVideos\",\n    value: function onClickGetVideos(e) {\n      if (e.currentTarget.classList.contains('btn--prev')) {\n        this.left();\n      } else if (e.currentTarget.classList.contains('btn--next')) {\n        this.right();\n      }\n    }\n  }, {\n    key: \"isNextDisabled\",\n    value: function isNextDisabled() {\n      this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);\n      return this.currentPage + 1 === this.allPages;\n    }\n  }, {\n    key: \"isPrevDisabled\",\n    value: function isPrevDisabled() {\n      return this.currentPage === 0;\n    }\n  }, {\n    key: \"checkButtons\",\n    value: function checkButtons() {\n      _AppView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].redrawPagination(this.isPrevDisabled(), this.isNextDisabled());\n    } // Handle swipe\n\n  }, {\n    key: \"onTouchStartGetStartX\",\n    value: function onTouchStartGetStartX(e) {\n      this.startX = e.touches[0].clientX;\n    }\n  }, {\n    key: \"onTouchEndGetVideos\",\n    value: function onTouchEndGetVideos(e) {\n      this.endX = e.changedTouches[0].clientX;\n\n      if (Math.abs(this.endX - this.startX) > AppController.treshold) {\n        if (this.endX - this.startX < 0) {\n          if (!this.isNextDisabled()) {\n            this.right();\n          }\n        } else if (!this.isPrevDisabled()) {\n          this.left();\n        }\n      }\n    }\n  }, {\n    key: \"onMouseStartGetStartX\",\n    value: function onMouseStartGetStartX(e) {\n      e.preventDefault(); // prevent user select\n\n      this.startX = e.clientX;\n    }\n  }, {\n    key: \"onMouseEndGetVideos\",\n    value: function onMouseEndGetVideos(e) {\n      e.preventDefault();\n      this.endX = e.clientX;\n\n      if (Math.abs(this.endX - this.startX) > AppController.treshold) {\n        if (this.endX - this.startX < 0) {\n          if (!this.isNextDisabled()) {\n            this.right();\n          }\n        } else if (!this.isPrevDisabled()) {\n          this.left();\n        }\n      }\n    } // Handle re-size\n\n  }, {\n    key: \"actualResizeHandler\",\n    value: function actualResizeHandler() {\n      var previousSize = this.numOfBlocks;\n      var previousNumberOfResults = this.currentPage * previousSize;\n      this.calculateSize();\n      var newSizeOfBlocks = this.numOfBlocks;\n      this.currentPage = Math.ceil(previousNumberOfResults / newSizeOfBlocks);\n\n      if (previousNumberOfResults % newSizeOfBlocks === 0) {\n        this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks);\n      } else this.allPages = Math.ceil(this.model.lengthOfItems / this.numOfBlocks) + 1;\n\n      var videoContainer = document.getElementById('video_container');\n      var paginationWrapper = document.querySelector('.pagination-wrapper');\n\n      if (videoContainer.contains(paginationWrapper)) {\n        this.checkButtons();\n      }\n    }\n  }, {\n    key: \"resizeThrottler\",\n    value: function resizeThrottler() {\n      var _this3 = this;\n\n      var resizeTimeout; // ignore resize events as long as an actualResizeHandler execution is in the queue\n\n      if (!resizeTimeout) {\n        resizeTimeout = setTimeout(function () {\n          resizeTimeout = null;\n\n          _this3.actualResizeHandler(); // The actualResizeHandler will execute at a rate of 15fps\n\n        }, 66);\n      }\n    }\n  }], [{\n    key: \"onUpHideTooltip\",\n    value: function onUpHideTooltip() {\n      var tooltip = document.querySelector('.tooltiptext');\n\n      if (document.body.contains(tooltip)) {\n        tooltip.classList.remove('visible');\n      }\n    }\n  }, {\n    key: \"cleanClasses\",\n    value: function cleanClasses() {\n      _AppView__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetPagination();\n    }\n  }]);\n\n  return AppController;\n}();\n\n\nAppController.blockWidth = 400;\nAppController.treshold = 100;\n\n//# sourceURL=webpack:///./js/AppController.js?");

/***/ }),

/***/ "./js/AppModel.js":
/*!************************!*\
  !*** ./js/AppModel.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppModel; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint no-console: [\"error\", { allow: [\"warn\", \"error\"] }] */\nvar AppModel =\n/*#__PURE__*/\nfunction () {\n  function AppModel() {\n    _classCallCheck(this, AppModel);\n\n    this.baseLinksSearch = 'https://www.googleapis.com/youtube/v3/search?';\n    this.baseLinksStat = 'https://www.googleapis.com/youtube/v3/videos?';\n    this.settings = {\n      apiKey: 'AIzaSyAdN8-ADK8taSLMpdFXguKfp9NXH4g6UtE'\n    };\n    this.filterPart = '&type=video&part=snippet&maxResults=15';\n  }\n\n  _createClass(AppModel, [{\n    key: \"makeUrl\",\n    value: function makeUrl(queryP) {\n      var keyPart = \"key=\".concat(this.settings.apiKey);\n      return this.baseLinksSearch + keyPart + this.filterPart + queryP;\n    }\n  }, {\n    key: \"makeUrlForToken\",\n    value: function makeUrlForToken(queryP, token) {\n      var keyPart = \"key=\".concat(this.settings.apiKey);\n      return this.baseLinksSearch + keyPart + this.filterPart + queryP + token;\n    }\n  }, {\n    key: \"makeUrlForStat\",\n    value: function makeUrlForStat(videoId) {\n      var keyPart = \"key=\".concat(this.settings.apiKey);\n      return \"\".concat(this.baseLinksStat).concat(keyPart, \"&id=\").concat(videoId, \"&part=statistics\");\n    }\n  }, {\n    key: \"search\",\n    value: function search(queryP, callback) {\n      var _this = this;\n\n      fetch(this.makeUrl(queryP)).then(AppModel.handleErrors).then(function (data) {\n        _this.lengthOfItems += Array.from(data.items).length;\n        _this.nextPageToken = data.nextPageToken;\n        _this.totalResults = data.pageInfo.totalResults;\n        var promises = data.items.map(function (item) {\n          var videoItemId = item.id.videoId;\n          return fetch(_this.makeUrlForStat(videoItemId)).then(AppModel.handleErrors);\n        });\n        Promise.all(promises).then(function (allCounts) {\n          var videoStat = allCounts.map(function (VideoItem) {\n            return VideoItem.items[0].statistics.viewCount;\n          });\n          callback(data, videoStat);\n        }).catch(function (err) {\n          console.error(err);\n        });\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    }\n  }, {\n    key: \"loadNextPage\",\n    value: function loadNextPage(queryP, callback) {\n      var _this2 = this;\n\n      var nextPage = \"&pageToken=\".concat(this.nextPageToken);\n      fetch(this.makeUrlForToken(queryP, nextPage)).then(AppModel.handleErrors).then(function (data) {\n        _this2.lengthOfItems += Array.from(data.items).length;\n        _this2.nextPageToken = data.nextPageToken;\n        var promises = data.items.map(function (item) {\n          var videoItemId = item.id.videoId;\n          return fetch(_this2.makeUrlForStat(videoItemId)).then(AppModel.handleErrors);\n        });\n        Promise.all(promises).then(function (allCounts) {\n          var videoStat = allCounts.map(function (VideoItem) {\n            return VideoItem.items[0].statistics.viewCount;\n          });\n          callback(data, videoStat);\n        }).catch(function (err) {\n          console.error(err);\n        });\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    }\n  }], [{\n    key: \"handleErrors\",\n    value: function handleErrors(response) {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n\n      return response.json();\n    }\n  }]);\n\n  return AppModel;\n}();\n\n\n\n//# sourceURL=webpack:///./js/AppModel.js?");

/***/ }),

/***/ "./js/AppView.js":
/*!***********************!*\
  !*** ./js/AppView.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppView; });\n/* harmony import */ var _Videos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Videos */ \"./js/Videos.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar AppView =\n/*#__PURE__*/\nfunction () {\n  function AppView() {\n    _classCallCheck(this, AppView);\n\n    this.videos = new _Videos__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.onClickGetVideos = null;\n    this.onDownGetTooltip = null;\n    this.onUpHideTooltip = null;\n  } // function to handle hover issues on touch devices\n\n\n  _createClass(AppView, [{\n    key: \"drawVideos\",\n    value: function drawVideos(data, arrStat) {\n      var videoContainer = document.getElementById('video_container');\n      var paginationWrapper = document.querySelector('.pagination-wrapper');\n      AppView.removeLoader();\n      var newArrayOfData = Array.from(data.items);\n\n      if (newArrayOfData && newArrayOfData.length) {\n        for (var i = 0; i < newArrayOfData.length; i += 1) {\n          var videoCount = void 0;\n\n          if (arrStat && arrStat.length) {\n            videoCount = arrStat[i];\n          } else videoCount = 0;\n\n          _Videos__WEBPACK_IMPORTED_MODULE_0__[\"default\"].draw(newArrayOfData[i], videoCount);\n        }\n\n        if (!videoContainer.contains(paginationWrapper)) {\n          this.drawPagination();\n        }\n      } else {\n        if (videoContainer.contains(paginationWrapper)) {\n          paginationWrapper.remove();\n        }\n\n        AppView.drawNoResults();\n      }\n    }\n  }, {\n    key: \"drawPagination\",\n    value: function drawPagination() {\n      // Create navigation bar\n      var arrowLeft = document.createElement('i');\n      arrowLeft.classList.add('fa', 'fa-chevron-left', 'btn', 'btn--prev');\n      var arrowRight = document.createElement('i');\n      arrowRight.classList.add('fa', 'fa-chevron-right', 'btn', 'btn--next');\n      var paginationWrapper = document.createElement('div');\n      paginationWrapper.classList.add('pagination-wrapper');\n      var paginationContainer = document.createElement('div');\n      paginationContainer.classList.add('pagination-container');\n      var dotLittleF = document.createElement('div');\n      dotLittleF.classList.add('little-dot', 'little-dot--first');\n      var divLittle = document.createElement('div');\n      divLittle.classList.add('little-dot');\n      var dotBigContainer = document.createElement('div');\n      dotBigContainer.classList.add('big-dot-container');\n      var dotBig = document.createElement('div');\n      dotBig.classList.add('big-dot');\n      var dotLittleL = document.createElement('div');\n      dotLittleL.classList.add('little-dot', 'little-dot--last');\n      dotBigContainer.appendChild(dotBig);\n      divLittle.appendChild(dotBigContainer);\n      paginationContainer.append(dotLittleF, divLittle, dotLittleL);\n      paginationWrapper.append(arrowLeft, paginationContainer, arrowRight);\n      var videoContainer = document.getElementById('video_container');\n      videoContainer.appendChild(paginationWrapper); // Create a tooltip\n\n      var tooltip = document.createElement('span');\n      tooltip.classList.add('tooltiptext');\n      dotBig.appendChild(tooltip);\n      arrowLeft.addEventListener('click', this.onClickGetVideos);\n      arrowRight.addEventListener('click', this.onClickGetVideos);\n      dotBig.addEventListener('mousedown', this.onDownGetTooltip);\n      window.addEventListener('mouseup', this.onUpHideTooltip);\n      dotBig.addEventListener('touchstart', this.onDownGetTooltip);\n      window.addEventListener('touchend', this.onUpHideTooltip);\n    }\n  }], [{\n    key: \"isTouchDevice\",\n    value: function isTouchDevice() {\n      return 'ontouchstart' in window;\n    }\n  }, {\n    key: \"drawContainer\",\n    value: function drawContainer() {\n      var container = document.createElement('div');\n      container.classList.add('.main-container');\n      var sectionSearch = document.createElement('section');\n      sectionSearch.classList.add('search-container');\n      var videoContainer = document.createElement('section');\n      videoContainer.classList.add('video-container');\n      videoContainer.setAttribute('id', 'video_container');\n      var h1 = document.createElement('h1');\n      var logo = document.createElement('img');\n      h1.classList.add('youtube-logo');\n      logo.src = 'img/youtube-logo.png';\n      logo.setAttribute('alt', 'Youtube search client');\n      var linkToYoutube = document.createElement('a');\n      linkToYoutube.setAttribute('target', '_blank');\n      linkToYoutube.setAttribute('href', 'https://www.youtube.com');\n      linkToYoutube.appendChild(logo);\n      h1.appendChild(linkToYoutube);\n      var gallery = document.createElement('div');\n      gallery.classList.add('gallery');\n      var videos = document.createElement('div');\n      videos.classList.add('videos');\n      gallery.appendChild(videos);\n      videoContainer.appendChild(gallery); // Create a search box\n\n      var searchBox = document.createElement('input');\n      searchBox.type = 'text';\n      searchBox.classList.add('search-box');\n      searchBox.setAttribute('placeholder', 'Search...');\n      var submit = document.createElement('button');\n      submit.classList.add('submit');\n      submit.type = 'button';\n      var searchIcon = document.createElement('i');\n      searchIcon.className = 'fa fa-search';\n      submit.appendChild(searchIcon);\n      sectionSearch.append(h1, searchBox, submit);\n      container.append(sectionSearch, videoContainer);\n      document.body.insertBefore(container, document.body.firstChild);\n\n      if (AppView.isTouchDevice()) {\n        container.classList.add('touch');\n      } else {\n        container.classList.add('no-touch');\n      }\n    }\n  }, {\n    key: \"drawNoResults\",\n    value: function drawNoResults() {\n      var divNoResults = document.createElement('div');\n      var searchNoResults = document.createElement('h2');\n      searchNoResults.textContent = 'No results found';\n      var searchSuggestion = document.createElement('span');\n      searchSuggestion.textContent = 'Try different keywords';\n      divNoResults.classList.add('text-no-results');\n      divNoResults.append(searchNoResults, searchSuggestion);\n      var videoContainer = document.getElementById('video_container');\n      videoContainer.appendChild(divNoResults);\n    }\n  }, {\n    key: \"addLoader\",\n    value: function addLoader() {\n      var loadingIcon = document.createElement('i');\n      loadingIcon.className = 'fa fa-spinner fa-spin';\n      document.body.appendChild(loadingIcon);\n    }\n  }, {\n    key: \"removeLoader\",\n    value: function removeLoader() {\n      var loadingIcon = document.querySelector('.fa-spinner');\n\n      if (document.body.contains(loadingIcon)) {\n        document.body.removeChild(loadingIcon);\n      }\n    }\n  }, {\n    key: \"redrawPagination\",\n    value: function redrawPagination(leftState, rightState) {\n      var arrowLeft = document.querySelector('.btn--prev');\n      var arrowRight = document.querySelector('.btn--next');\n      var dotLittleF = document.querySelector('.little-dot--first');\n      var dotLittleL = document.querySelector('.little-dot--last');\n\n      if (leftState) {\n        arrowLeft.classList.add('disabled');\n        dotLittleF.classList.add('disabled');\n      } else if (arrowLeft.classList.contains('disabled')) {\n        arrowLeft.classList.remove('disabled');\n        dotLittleF.classList.remove('disabled');\n      }\n\n      if (rightState) {\n        arrowRight.classList.add('disabled');\n        dotLittleL.classList.add('disabled');\n      } else if (arrowRight.classList.contains('disabled')) {\n        arrowRight.classList.remove('disabled');\n        dotLittleL.classList.remove('disabled');\n      }\n    }\n  }, {\n    key: \"resetPagination\",\n    value: function resetPagination() {\n      var paginationWrapper = document.querySelector('.pagination-wrapper');\n\n      if (paginationWrapper.classList.contains('transition-next')) {\n        paginationWrapper.classList.remove('transition-next');\n      } else if (paginationWrapper.classList.contains('transition-prev')) {\n        paginationWrapper.classList.remove('transition-prev');\n      }\n    }\n  }]);\n\n  return AppView;\n}();\n\n\n\n//# sourceURL=webpack:///./js/AppView.js?");

/***/ }),

/***/ "./js/Videos.js":
/*!**********************!*\
  !*** ./js/Videos.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Videos; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Videos =\n/*#__PURE__*/\nfunction () {\n  function Videos() {\n    _classCallCheck(this, Videos);\n  }\n\n  _createClass(Videos, null, [{\n    key: \"draw\",\n    value: function draw(idx, videoCount) {\n      var divFlex = document.createElement('div');\n      divFlex.classList.add('video-item');\n      var linkToClip = document.createElement('a');\n      linkToClip.setAttribute('target', '_blank');\n      linkToClip.setAttribute('href', \"https://www.youtube.com/watch?v=\".concat(idx.id.videoId));\n      var cloneOfLink = linkToClip.cloneNode(true);\n      linkToClip.textContent = idx.snippet.title;\n      linkToClip.classList.add('video-title');\n      var previewImage = document.createElement('img');\n      previewImage.classList.add('clip-preview');\n      previewImage.src = idx.snippet.thumbnails.high.url;\n      previewImage.setAttribute('alt', 'video preview');\n      cloneOfLink.appendChild(previewImage);\n      var description = document.createElement('span');\n      description.classList.add('description');\n      description.innerHTML = \"<i class=\\\"fa fa-youtube\\\" aria-hidden=\\\"true\\\"></i>\".concat(idx.snippet.description);\n      var author = document.createElement('span');\n      author.classList.add('author');\n      author.innerHTML = \"<i class=\\\"fa fa-user\\\" aria-hidden=\\\"true\\\"></i>\".concat(idx.snippet.channelTitle);\n      var date = document.createElement('span');\n      date.classList.add('date');\n      var dateFormatted = idx.snippet.publishedAt.slice(0, 10);\n      date.innerHTML = \"<i class=\\\"fa fa-calendar\\\"></i>\".concat(dateFormatted);\n      var rate = document.createElement('span');\n      rate.classList.add('rate');\n      rate.innerHTML = \"<i class=\\\"fa fa-eye\\\"></i>\".concat(videoCount);\n      divFlex.append(cloneOfLink, linkToClip, description, author, date, rate);\n      var videoContainer = document.getElementById('video_container');\n      var list = videoContainer.querySelector('.videos');\n      list.appendChild(divFlex);\n    }\n  }]);\n\n  return Videos;\n}();\n\n\n\n//# sourceURL=webpack:///./js/Videos.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./js/App.js\");\n\nvar app = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.start();\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });