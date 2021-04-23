/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\r\n\r\nclass Clock {\r\n    constructor() {\r\n      // 1. Create a Date object.\r\n      const currentTime = new Date();\r\n  \r\n      // 2. Store the hour, minute, and second.\r\n      this.hours = currentTime.getHours();\r\n      this.minutes = currentTime.getMinutes();\r\n      this.seconds = currentTime.getSeconds();\r\n  \r\n      // 3. Call printTime.\r\n      (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\r\n  \r\n      // 4. Schedule the tick at 1 second intervals.\r\n      setInterval(this._tick.bind(this), 1000);\r\n    }\r\n  \r\n    printTime() {\r\n      // Format the time in HH:MM:SS\r\n      const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\r\n  \r\n      // Use console.log to print it.\r\n      return timeString;\r\n    }\r\n  \r\n    _tick() {\r\n      // 1. Increment the time by one second.\r\n      this._incrementSeconds();\r\n  \r\n      // 2. Call printTime.\r\n      (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), clockElement);\r\n    }\r\n  \r\n    _incrementSeconds() {\r\n      // 1. Increment the time by one second.\r\n      this.seconds += 1;\r\n      if (this.seconds === 60) {\r\n        this.seconds = 0;\r\n        this._incrementMinutes();\r\n      }\r\n    }\r\n  \r\n    _incrementMinutes() {\r\n      this.minutes += 1;\r\n      if (this.minutes === 60) {\r\n        this.minutes = 0;\r\n        this._incrementHours();\r\n      }\r\n    }\r\n  \r\n    _incrementHours() {\r\n      this.hours = (this.hours + 1) % 24;\r\n    }\r\n  }\r\n  \r\n  const clockElement = document.getElementById('clock');\r\n  const clock = new Clock();\r\n\r\n  \n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\r\nconst dogs = {\r\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\r\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\r\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\r\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\r\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\r\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\r\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \r\n};\r\n\r\nconst dogLinkCreator = (dogs) => {\r\n    const dogNames = Object.keys(dogs);\r\n    const dogLinks = [];\r\n\r\n  dogNames.forEach((dog) => {\r\n    const dogsLink = document.createElement('a');\r\n    const li = document.createElement('li');\r\n\r\n    li.classList.add(\"dog-link\")\r\n    dogsLink.innerHTML = dog;\r\n    dogsLink.href = dogs[dog];\r\n\r\n    li.appendChild(dogsLink);\r\n    dogLinks.push(li);\r\n  });\r\n\r\n  return dogLinks;\r\n}\r\n\r\nconst attachDogLinks = () => {\r\n  const dogDropdown = document.querySelector(\".drop-down-dog-list\")\r\n  const dogsLink = dogLinkCreator(dogs);\r\n  // debugger\r\n  dogsLink.forEach((dogLink) => {\r\n    dogDropdown.appendChild(dogLink)\r\n  });\r\n}\r\n\r\nattachDogLinks();\r\n\r\nconst handleEnter = () => {\r\n  // debugger\r\n  const dogLink = Array.from(document.querySelectorAll(\".dog-link\"))\r\n  dogLink.forEach(li => li.classList.toggle(\"open\"));\r\n  \r\n}\r\n\r\nconst handleLeave = () => {\r\n  // debugger\r\n  const dogLink = Array.from(document.querySelectorAll(\".dog-link\"))\r\n  dogLink.forEach(li => li.classList.toggle(\"open\"));\r\n  \r\n}\r\n\r\nconst list = document.querySelector(\".drop-down-dog-nav\")\r\nlist.addEventListener(\"mouseenter\", handleEnter)\r\nlist.addEventListener(\"mouseleave\", handleLeave)\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n\n    if (htmlElement.children) {\n        Array.from(htmlElement.children).forEach((el) => el.remove());\n    }\n\n    const pTag = document.createElement(\"p\");\n    pTag.textContent = string;\n    htmlElement.append(pTag);\n\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n// We'll warm up with something simple. Head to src/warmup.js. Once here you'll be see a function named htmlGenerator. \n// The htmlGenerator function will take two arguments: a string, and a HTML Element. The desired behavior of this function is the input string will be converted into a \n// <p> tag and then appended to the input HTML Element. Never be afraid to look up the documentation for how to interact with HTML Elements if you need a reminder.\n\n// Since the DOM is a traversable tree you can add to - use your htmlGenerator to add a fun phrase like \"I <3 Vanilla DOM manipulation.\" to your h1 tag. \n// Now whenever you reload the page your htmlGenerator will append a p tag below your h1 tag. Neat! Let's move on to the next phase.\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;