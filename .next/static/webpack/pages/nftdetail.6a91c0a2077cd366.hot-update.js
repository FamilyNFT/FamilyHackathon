"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nftdetail",{

/***/ "./pages/nftdetail/index.tsx":
/*!***********************************!*\
  !*** ./pages/nftdetail/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Popup */ \"./components/Popup.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// const\n// useEffect(() => {}, []);\nvar Index = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var descriptions = [\n        \"Brushed French Terry Fabric\",\n        \"Peached Finishing For Extra Softness\",\n        \"Made with 460GSM 100% Cotton\",\n        \"Made in Australia\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    console.log(\"data\", query.nftId);\n    // var cardData = data.find((obj) => obj.id == nftId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex min-h-[80vh] flex flex-col \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-[80vh] block \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-2 md:grid-cols-4 gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: \"/assets/tees/Brown Choco.mp4\",\n                            autoPlay: true,\n                            loop: true,\n                            muted: true,\n                            className: \"w-100\"\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                display: \"none\"\n                            },\n                            children: query.nftId\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col \",\n                            children: descriptions.map(function(desc, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-2 h-2 rounded-full bg-red-600 mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white font-lato text-sm\",\n                                            children: desc\n                                        }, void 0, false, {\n                                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between py-4 w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-blue-600 text-sm tracking-[-0.1em] cursor-pointer hover:text-blue-400\",\n                                    onClick: function() {\n                                        return setToggle(true);\n                                    },\n                                    children: \"Size Chart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xl tracking-tighter text-yellow-400 \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        // onClick={}\n                                        className: \"text-base text-white ml-2 bg-blue-400 px-5 py-2.4 rounded\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_3__.Popup2, {\n                    toggle: toggle,\n                    setToggle: setToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center p-8 text-white bg-red-300 w-[95vw] max-w-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/assets/images/sizechart.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"gSWciKNHBPyZ0S3nLKx8bN6GCMY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRkZXRhaWwvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUFtRDtBQUVYO0FBQ2U7QUFFdkQsUUFBUTtBQUNSLDJCQUEyQjtBQUUzQixJQUFNSSxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBTSxLQUFPLEdBQUtGLHNEQUFTLEVBQUUsQ0FBckJHLEtBQUs7SUFFYixJQUFNQyxZQUFZLEdBQUc7UUFDbkIsNkJBQTZCO1FBQzdCLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsbUJBQW1CO0tBQ3BCO0lBRUQsSUFBNEJMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENNLE1BQU0sR0FBZU4sR0FBZSxHQUE5QixFQUFFTyxTQUFTLEdBQUlQLEdBQWUsR0FBbkI7SUFDeEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUwsS0FBSyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUNqQyxzREFBc0Q7SUFDdEQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1DQUFtQztrQkFDaEQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7OEJBQ2xDLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsMkJBQTJCOztzQ0FFeEMsOERBQUNDLE9BQUs7NEJBQ0pDLEdBQUcsRUFBRSw4QkFBOEI7NEJBQ25DQyxRQUFROzRCQUNSQyxJQUFJOzRCQUNKQyxLQUFLOzRCQUNMTCxTQUFTLEVBQUMsT0FBTzs7Ozs7aUNBQ1Y7c0NBQ1QsOERBQUNNLEdBQUM7NEJBQUNDLEtBQUssRUFBRTtnQ0FBRUMsT0FBTyxFQUFFLE1BQU07NkJBQUU7c0NBQUdoQixLQUFLLENBQUNNLEtBQUs7Ozs7O2lDQUFLO3NDQUNoRCw4REFBQ0MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjtzQ0FDNUJQLFlBQVksQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7cURBQzVCLDhEQUFDWixLQUFHO29DQUFDQyxTQUFTLEVBQUMsbUJBQW1COztzREFDaEMsOERBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyxzQ0FBc0M7Ozs7O2lEQUFPO3NEQUM1RCw4REFBQ1ksTUFBSTs0Q0FBQ1osU0FBUyxFQUFDLDhCQUE4QjtzREFBRVUsSUFBSTs7Ozs7aURBQVE7O21DQUZ0QkMsS0FBSzs7Ozt5Q0FHdkM7NkJBQ1AsQ0FBQzs7Ozs7aUNBQ0U7c0NBQ04sOERBQUNaLEtBQUc7NEJBQUNDLFNBQVMsRUFBQywrQ0FBK0M7OzhDQUM1RCw4REFBQ1ksTUFBSTtvQ0FDSFosU0FBUyxFQUFDLDRFQUE0RTtvQ0FDdEZhLE9BQU8sRUFBRTsrQ0FBTWxCLFNBQVMsQ0FBQyxJQUFJLENBQUM7cUNBQUE7OENBQy9CLFlBRUQ7Ozs7O3lDQUFPOzhDQUNQLDhEQUFDaUIsTUFBSTtvQ0FBQ1osU0FBUyxFQUFDLDJDQUEyQzs4Q0FDekQsNEVBQUNjLFFBQU07d0NBQ0wsYUFBYTt3Q0FDYmQsU0FBUyxFQUFDLDJEQUEyRDtrREFDdEUsU0FFRDs7Ozs7NkNBQVM7Ozs7O3lDQUNKOzs7Ozs7aUNBQ0g7Ozs7Ozt5QkFDRjs4QkFDTiw4REFBQ1YscURBQU07b0JBQUNJLE1BQU0sRUFBRUEsTUFBTTtvQkFBRUMsU0FBUyxFQUFFQSxTQUFTOzhCQUMxQyw0RUFBQ0ksS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLCtFQUErRTtrQ0FDNUYsNEVBQUNlLEtBQUc7NEJBQUNiLEdBQUcsRUFBQyw4QkFBOEI7NEJBQUNjLEdBQUcsRUFBQyxFQUFFOzs7OztpQ0FBRzs7Ozs7NkJBQzdDOzs7Ozt5QkFDQzs7Ozs7O2lCQUNMOzs7OzthQUNGLENBQ047Q0FDSDtHQTNES3pCLEtBQUs7O1FBQ1NGLGtEQUFTOzs7QUFEdkJFLEtBQUFBLEtBQUs7QUE2RFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZnRkZXRhaWwvaW5kZXgudHN4P2NiM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXlGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1eUZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUG9wdXAsIFBvcHVwMiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvcHVwXCI7XG5cbi8vIGNvbnN0XG4vLyB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9ucyA9IFtcbiAgICBcIkJydXNoZWQgRnJlbmNoIFRlcnJ5IEZhYnJpY1wiLFxuICAgIFwiUGVhY2hlZCBGaW5pc2hpbmcgRm9yIEV4dHJhIFNvZnRuZXNzXCIsXG4gICAgXCJNYWRlIHdpdGggNDYwR1NNIDEwMCUgQ290dG9uXCIsXG4gICAgXCJNYWRlIGluIEF1c3RyYWxpYVwiLFxuICBdO1xuXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBxdWVyeS5uZnRJZCk7XG4gIC8vIHZhciBjYXJkRGF0YSA9IGRhdGEuZmluZCgob2JqKSA9PiBvYmouaWQgPT0gbmZ0SWQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggbWluLWgtWzgwdmhdIGZsZXggZmxleC1jb2wgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLVs4MHZoXSBibG9jayBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yIG1kOmdyaWQtY29scy00IGdhcC01XCI+XG4gICAgICAgICAgey8qIDxCdXlGb3JtIC8+ICovfVxuICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgc3JjPXtcIi9hc3NldHMvdGVlcy9Ccm93biBDaG9jby5tcDRcIn1cbiAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICBsb29wXG4gICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgID48L3ZpZGVvPlxuICAgICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PntxdWVyeS5uZnRJZH08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIFwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ucy5tYXAoKGRlc2MsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMiBoLTIgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgbXItMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1sYXRvIHRleHQtc21cIj57ZGVzY308L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNCB3LWZ1bGxcIj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdGV4dC1zbSB0cmFja2luZy1bLTAuMWVtXSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaXplIENoYXJ0XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC15ZWxsb3ctNDAwIFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LXdoaXRlIG1sLTIgYmctYmx1ZS00MDAgcHgtNSBweS0yLjQgcm91bmRlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCdXkgTm93XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBvcHVwMiB0b2dnbGU9e3RvZ2dsZX0gc2V0VG9nZ2xlPXtzZXRUb2dnbGV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC04IHRleHQtd2hpdGUgYmctcmVkLTMwMCB3LVs5NXZ3XSBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2l6ZWNoYXJ0LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9wdXAyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUG9wdXAyIiwiSW5kZXgiLCJxdWVyeSIsImRlc2NyaXB0aW9ucyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJuZnRJZCIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvIiwic3JjIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJwIiwic3R5bGUiLCJkaXNwbGF5IiwibWFwIiwiZGVzYyIsImluZGV4Iiwic3BhbiIsIm9uQ2xpY2siLCJidXR0b24iLCJpbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nftdetail/index.tsx\n"));

/***/ })

});