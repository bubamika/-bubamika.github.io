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

/***/ "./assets/js/components/burger.js":
/*!****************************************!*\
  !*** ./assets/js/components/burger.js ***!
  \****************************************/
/***/ (() => {

eval("window.onload = function () {\n  $(\".burger\").click(function () {\n    $(\".menu\").addClass(\"open\");\n  });\n  $(\".header__menu_close\").on(\"click\", function () {\n    $(\".menu\").removeClass(\"open\");\n  });\n};\n$(window).resize(function () {\n  if ($(window).width() > 768) {}\n});\n\n//# sourceURL=webpack://starterkit/./assets/js/components/burger.js?");

/***/ }),

/***/ "./assets/js/components/modal.js":
/*!***************************************!*\
  !*** ./assets/js/components/modal.js ***!
  \***************************************/
/***/ (() => {

eval("$(document).on(\"click\", \".custom-button\", function () {\n  $(\".popup\").addClass(\"open\");\n});\n$(document).on(\"click\", \".popup__close\", function () {\n  $(\".popup\").removeClass(\"open\");\n});\n$(document).on(\"click\", \".popup .custom-button\", function () {\n  if ($(\".popup__input\").val() == \"\" && $(\".popup__input-ph\").val() == \"\") {\n    $(\".popup__input\").addClass(\"danger\");\n    $(\".country-phone\").addClass(\"danger\");\n    $(\".popup__alarm\").removeClass(\"hide\");\n  } else if ($(\".popup__input-n\").val() == \"\") {\n    $(\".popup__input\").addClass(\"danger\");\n    $('.popup__input-n').parent().find(\".popup__alarm\").removeClass(\"hide\");\n  } else if ($(\"#phone\").val() == \"\") {\n    $(\".country-phone\").addClass(\"danger\");\n    $(\"#phone\").parent().parent().find(\".popup__alarm\").removeClass(\"hide\");\n  } else {\n    alert(\"To the Moon!!!\");\n  }\n});\n$(\"#phone\").mask(\"(99) 999-9999\");\n$('.popup__input').bind('input propertychange', function () {\n  $(this).removeClass(\"danger\");\n  $(this).parent().find(\".popup__alarm\").addClass(\"hide\");\n});\n$('.popup__input-ph').on(\"keyup\", function () {\n  let ph = $('.popup__input-ph').val();\n  if (ph != null) {\n    $(\".country-phone\").removeClass(\"danger\");\n    $(\".country-phone\").parent().find(\".popup__alarm\").addClass(\"hide\");\n  }\n});\n\n//# sourceURL=webpack://starterkit/./assets/js/components/modal.js?");

/***/ }),

/***/ "./assets/js/components/oneMoreScript.js":
/*!***********************************************!*\
  !*** ./assets/js/components/oneMoreScript.js ***!
  \***********************************************/
/***/ (() => {

eval("function check__skill() {\n  var hero__param__array = document.querySelectorAll(\".hero__param\");\n  for (let i = 0; i < hero__param__array.length; i++) {\n    if (hero__param__array[i].textContent < 6) {\n      $(hero__param__array).eq(i).parent().find(\".hero__characteristics-title\").css(\"color\", \"red\");\n    } else if (hero__param__array[i].textContent < 9) {\n      $(hero__param__array).eq(i).parent().find(\".hero__characteristics-title\").css(\"color\", \"orange\");\n    } else if (hero__param__array[i].textContent <= 11) {\n      $(hero__param__array).eq(i).parent().find(\".hero__characteristics-title\").css(\"color\", \"green\");\n    } else if (hero__param__array[i].textContent == 12) {\n      $(hero__param__array).eq(i).parent().find(\".hero__characteristics-title\").css(\"color\", \"blue\");\n    }\n  }\n}\n;\ncheck__skill();\n///////////////////////////////////\n\nvar hero__array_length = document.querySelectorAll(\".hero\").length;\n// var current_param;\nfunction randomize_choose_hero(min, max) {\n  let rand = min + Math.random() * (max + 1 - min);\n  let indexwin = Math.floor(rand);\n  $('.main__slider').slick('slickGoTo', indexwin);\n}\n;\n$(\".hero__apply_random\").click(function () {\n  randomize_choose_hero(0, hero__array_length);\n});\nconst param_array = [];\n$(\".hero__apply_this\").click(function () {\n  let hero__data = $(\".slick-current\").html();\n  $(\".step2__hero\").html(hero__data);\n  var name = $(\".main__slider .slick-current .hero__name\").text();\n  $(\".step2\").removeClass(\"hide\");\n  $(\".main\").addClass(\"hide\");\n  $(\".step2 .name\").text(name);\n  var minus = \"<span class='minus'>-</span>\";\n  var plus = \"<span class='plus'>+</span>\";\n  $(minus).insertBefore($(\".hero__param\"));\n  $(plus).insertAfter($(\".hero__param\"));\n  $(\".step2__exp\").append('<div class=\"step2__next\">Продолжить!</div>');\n  var current_param = document.querySelectorAll(\".slick-current .hero__param\");\n  for (var i = 0; i < current_param.length; i++) {\n    param_array.push(current_param[i].innerHTML);\n  }\n});\n\n/////////////////////\nvar exp = $(\".step2__exp-val\").text();\n$(document).on('click', '.minus', function () {\n  var hero__param = $(this).parent().find(\".hero__param\").text();\n  var index_of_param = $(this).parent().index();\n  if (hero__param == param_array[index_of_param]) {\n    return;\n  } else {\n    $(this).parent().find(\".hero__param\").text(--hero__param);\n    $(\".step2__exp-val\").text(++exp);\n  }\n  check__skill();\n});\n$(document).on('click', '.plus', function () {\n  var hero__param = $(this).parent().find(\".hero__param\").text();\n  check__skill();\n  if (exp < 1) {\n    return;\n  } else if ($(this).parent().find(\".hero__param\").text() > 11) {\n    return;\n  } else {\n    $(this).parent().find(\".hero__param\").text(++hero__param);\n    $(\".step2__exp-val\").text(--exp);\n  }\n  check__skill();\n});\nfunction check_exp() {\n  if (exp > 0) {\n    confirm(\"У вас ещё есть нераспределенный опыт, прекратить распределение?\", \"\");\n  }\n}\n$(document).on('click', '.step2__next', function () {\n  // check_exp();\n  let hero__data = $(\".step2__hero\").html();\n  $(\".step3__hero\").html(hero__data);\n  $(\".step2\").addClass(\"hide\");\n  $(\".step3\").removeClass(\"hide\");\n});\n\n//# sourceURL=webpack://starterkit/./assets/js/components/oneMoreScript.js?");

/***/ }),

/***/ "./assets/js/components/owl.js":
/*!*************************************!*\
  !*** ./assets/js/components/owl.js ***!
  \*************************************/
/***/ (() => {

eval("$('.main__slider').slick({\n  infinite: true,\n  slidesToShow: 1,\n  slidesToScroll: 1,\n  variableWidth: true,\n  slide: \".hero\",\n  responsive: [{\n    breakpoint: 768,\n    settings: {\n      slidesToShow: 1,\n      dots: true,\n      variableWidth: true\n    }\n  }, {\n    breakpoint: 576,\n    settings: {\n      slidesToShow: 1,\n      dots: true,\n      variableWidth: true\n    }\n  }, {\n    breakpoint: 450,\n    settings: {\n      slidesToShow: 1,\n      dots: true,\n      variableWidth: true\n    }\n  }]\n});\n$(\".slider__nav img:first-child\").click(function () {\n  $(\".slick-prev\").click();\n});\n$(\".slider__nav img:last-child\").click(function () {\n  $(\".slick-next\").click();\n});\n\n//# sourceURL=webpack://starterkit/./assets/js/components/owl.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const oneMoreScript = __webpack_require__(/*! ./components/oneMoreScript.js */ \"./assets/js/components/oneMoreScript.js\");\nconst modal = __webpack_require__(/*! ./components/modal.js */ \"./assets/js/components/modal.js\");\nconst owl = __webpack_require__(/*! ./components/owl.js */ \"./assets/js/components/owl.js\");\nconst burger = __webpack_require__(/*! ./components/burger.js */ \"./assets/js/components/burger.js\");\n\n//# sourceURL=webpack://starterkit/./assets/js/index.js?");

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://starterkit/./assets/scss/app.scss?");

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
/******/ 	__webpack_require__("./assets/js/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scss/app.scss");
/******/ 	
/******/ })()
;