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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Popup */ \"./components/Popup.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// const\n// useEffect(() => {}, []);\nvar Index = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var descriptions = [\n        \"Brushed French Terry Fabric\",\n        \"Peached Finishing For Extra Softness\",\n        \"Made with 460GSM 100% Cotton\",\n        \"Made in Australia\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    console.log(\"data\", query.nftId);\n    // var cardData = data.find((obj) => obj.id == nftId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex min-h-[80vh] flex flex-col \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex min-h-[80vh] block \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-2 md:grid-cols-4 gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            src: \"/assets/tees/Brown Choco.mp4\",\n                            autoPlay: true,\n                            loop: true,\n                            muted: true,\n                            className: \"w-100\"\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                display: \"none\"\n                            },\n                            children: query.nftId\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col \",\n                            children: descriptions.map(function(desc, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-2 h-2 rounded-full bg-red-600 mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-white font-lato text-sm\",\n                                            children: desc\n                                        }, void 0, false, {\n                                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-blue-600 text-sm tracking-[-0.1em] cursor-pointer hover:text-blue-400\",\n                                    onClick: function() {\n                                        return setToggle(true);\n                                    },\n                                    children: \"Size Chart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xl tracking-tighter text-yellow-400 \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        // onClick={}\n                                        className: \"text-base text-white ml-2 bg-blue-400 px-5 py-2.4 rounded\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Popup__WEBPACK_IMPORTED_MODULE_3__.Popup2, {\n                    toggle: toggle,\n                    setToggle: setToggle,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center p-8 text-white bg-red-300 w-[95vw] max-w-2xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/assets/images/sizechart.png\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"gSWciKNHBPyZ0S3nLKx8bN6GCMY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRkZXRhaWwvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUFtRDtBQUVYO0FBQ2U7QUFFdkQsUUFBUTtBQUNSLDJCQUEyQjtBQUUzQixJQUFNSSxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBTSxLQUFPLEdBQUtGLHNEQUFTLEVBQUUsQ0FBckJHLEtBQUs7SUFFYixJQUFNQyxZQUFZLEdBQUc7UUFDbkIsNkJBQTZCO1FBQzdCLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsbUJBQW1CO0tBQ3BCO0lBRUQsSUFBNEJMLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENNLE1BQU0sR0FBZU4sR0FBZSxHQUE5QixFQUFFTyxTQUFTLEdBQUlQLEdBQWUsR0FBbkI7SUFDeEJRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUwsS0FBSyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUNqQyxzREFBc0Q7SUFDdEQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1DQUFtQztrQkFDaEQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7OEJBQ3hDLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsMkJBQTJCOztzQ0FFeEMsOERBQUNDLE9BQUs7NEJBQ0pDLEdBQUcsRUFBRSw4QkFBOEI7NEJBQ25DQyxRQUFROzRCQUNSQyxJQUFJOzRCQUNKQyxLQUFLOzRCQUNMTCxTQUFTLEVBQUMsT0FBTzs7Ozs7aUNBQ1Y7c0NBQ1QsOERBQUNNLEdBQUM7NEJBQUNDLEtBQUssRUFBRTtnQ0FBRUMsT0FBTyxFQUFFLE1BQU07NkJBQUU7c0NBQUdoQixLQUFLLENBQUNNLEtBQUs7Ozs7O2lDQUFLO3NDQUNoRCw4REFBQ0MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjtzQ0FDNUJQLFlBQVksQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7cURBQzVCLDhEQUFDWixLQUFHO29DQUFDQyxTQUFTLEVBQUMsbUJBQW1COztzREFDaEMsOERBQUNELEtBQUc7NENBQUNDLFNBQVMsRUFBQyxzQ0FBc0M7Ozs7O2lEQUFPO3NEQUM1RCw4REFBQ1ksTUFBSTs0Q0FBQ1osU0FBUyxFQUFDLDhCQUE4QjtzREFBRVUsSUFBSTs7Ozs7aURBQVE7O21DQUZ0QkMsS0FBSzs7Ozt5Q0FHdkM7NkJBQ1AsQ0FBQzs7Ozs7aUNBQ0U7c0NBQ04sOERBQUNaLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxTQUFTOzs4Q0FDdEIsOERBQUNZLE1BQUk7b0NBQ0haLFNBQVMsRUFBQyw0RUFBNEU7b0NBQ3RGYSxPQUFPLEVBQUU7K0NBQU1sQixTQUFTLENBQUMsSUFBSSxDQUFDO3FDQUFBOzhDQUMvQixZQUVEOzs7Ozt5Q0FBTzs4Q0FDUCw4REFBQ2lCLE1BQUk7b0NBQUNaLFNBQVMsRUFBQywyQ0FBMkM7OENBQ3pELDRFQUFDYyxRQUFNO3dDQUNMLGFBQWE7d0NBQ2JkLFNBQVMsRUFBQywyREFBMkQ7a0RBQ3RFLFNBRUQ7Ozs7OzZDQUFTOzs7Ozt5Q0FDSjs7Ozs7O2lDQUNIOzs7Ozs7eUJBQ0Y7OEJBQ04sOERBQUNWLHFEQUFNO29CQUFDSSxNQUFNLEVBQUVBLE1BQU07b0JBQUVDLFNBQVMsRUFBRUEsU0FBUzs4QkFDMUMsNEVBQUNJLEtBQUc7d0JBQUNDLFNBQVMsRUFBQywrRUFBK0U7a0NBQzVGLDRFQUFDZSxLQUFHOzRCQUFDYixHQUFHLEVBQUMsOEJBQThCOzRCQUFDYyxHQUFHLEVBQUMsRUFBRTs7Ozs7aUNBQUc7Ozs7OzZCQUM3Qzs7Ozs7eUJBQ0M7Ozs7OztpQkFDTDs7Ozs7YUFDRixDQUNOO0NBQ0g7R0EzREt6QixLQUFLOztRQUNTRixrREFBUzs7O0FBRHZCRSxLQUFBQSxLQUFLO0FBNkRYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmZ0ZGV0YWlsL2luZGV4LnRzeD9jYjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV5Rm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXlGb3JtXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBvcHVwLCBQb3B1cDIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3B1cFwiO1xuXG4vLyBjb25zdFxuLy8gdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbnMgPSBbXG4gICAgXCJCcnVzaGVkIEZyZW5jaCBUZXJyeSBGYWJyaWNcIixcbiAgICBcIlBlYWNoZWQgRmluaXNoaW5nIEZvciBFeHRyYSBTb2Z0bmVzc1wiLFxuICAgIFwiTWFkZSB3aXRoIDQ2MEdTTSAxMDAlIENvdHRvblwiLFxuICAgIFwiTWFkZSBpbiBBdXN0cmFsaWFcIixcbiAgXTtcblxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zb2xlLmxvZyhcImRhdGFcIiwgcXVlcnkubmZ0SWQpO1xuICAvLyB2YXIgY2FyZERhdGEgPSBkYXRhLmZpbmQoKG9iaikgPT4gb2JqLmlkID09IG5mdElkKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IG1pbi1oLVs4MHZoXSBmbGV4IGZsZXgtY29sIFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBtaW4taC1bODB2aF0gYmxvY2sgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBtZDpncmlkLWNvbHMtNCBnYXAtNVwiPlxuICAgICAgICAgIHsvKiA8QnV5Rm9ybSAvPiAqL31cbiAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgIHNyYz17XCIvYXNzZXRzL3RlZXMvQnJvd24gQ2hvY28ubXA0XCJ9XG4gICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICA+PC92aWRlbz5cbiAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT57cXVlcnkubmZ0SWR9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbnMubWFwKChkZXNjLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIG1yLTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbGF0byB0ZXh0LXNtXCI+e2Rlc2N9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbFwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB0ZXh0LXNtIHRyYWNraW5nLVstMC4xZW1dIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpemUgQ2hhcnRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgdHJhY2tpbmctdGlnaHRlciB0ZXh0LXllbGxvdy00MDAgXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHRleHQtd2hpdGUgbWwtMiBiZy1ibHVlLTQwMCBweC01IHB5LTIuNCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJ1eSBOb3dcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UG9wdXAyIHRvZ2dsZT17dG9nZ2xlfSBzZXRUb2dnbGU9e3NldFRvZ2dsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTggdGV4dC13aGl0ZSBiZy1yZWQtMzAwIHctWzk1dnddIG1heC13LTJ4bFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9zaXplY2hhcnQucG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qb3B1cDI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQb3B1cDIiLCJJbmRleCIsInF1ZXJ5IiwiZGVzY3JpcHRpb25zIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiY29uc29sZSIsImxvZyIsIm5mdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW8iLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsInAiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXAiLCJkZXNjIiwiaW5kZXgiLCJzcGFuIiwib25DbGljayIsImJ1dHRvbiIsImltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nftdetail/index.tsx\n"));

/***/ })

});