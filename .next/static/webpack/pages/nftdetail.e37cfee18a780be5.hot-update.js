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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// const\n// useEffect(() => {}, []);\nvar Index = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var descriptions = [\n        \"Brushed French Terry Fabric\",\n        \"Peached Finishing For Extra Softness\",\n        \"Made with 460GSM 100% Cotton\",\n        \"Made in Australia\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    console.log(\"data\", query.nftId);\n    // var cardData = data.find((obj) => obj.id == nftId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex flex-col w-50 pl-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-[80vh] block \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-2 md:grid-cols-4 gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                src: \"/assets/tees/Brown Choco.mp4\",\n                                autoPlay: true,\n                                loop: true,\n                                muted: true,\n                                className: \"w-100\"\n                            }, void 0, false, {\n                                fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    display: \"none\"\n                                },\n                                children: query.nftId\n                            }, void 0, false, {\n                                fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: descriptions.map(function(desc, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-2 h-2 rounded-full bg-red-600 mr-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-white font-lato text-sm\",\n                                        children: desc\n                                    }, void 0, false, {\n                                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"gSWciKNHBPyZ0S3nLKx8bN6GCMY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n{\n/* <BuyForm /> */ //     <div className=\"flex items-center justify-between py-4 w-full\">\n//       <span\n//         className=\"text-blue-600 text-sm tracking-[-0.1em] cursor-pointer hover:text-blue-400\"\n//         onClick={() => setToggle(true)}\n//       >\n//         Size Chart\n//       </span>\n//       <span className=\"text-xl tracking-tighter text-yellow-400 \">\n//         <button\n//           // onClick={}\n//           className=\"text-base text-white ml-2 bg-blue-400 px-5 py-2.4 rounded\"\n//         >\n//           Buy Now\n//         </button>\n//       </span>\n//     </div>\n// <Popup2 toggle={toggle} setToggle={setToggle}>\n//   <div className=\"flex items-center justify-center p-8 text-white bg-red-300 w-[95vw] max-w-2xl\">\n//     <img src=\"/assets/images/sizechart.png\" alt=\"\" />\n//   </div>\n// </Popup2>;\n}/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRkZXRhaWwvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBRVg7QUFHeEMsUUFBUTtBQUNSLDJCQUEyQjtBQUUzQixJQUFNRyxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBTSxLQUFPLEdBQUtELHNEQUFTLEVBQUUsQ0FBckJFLEtBQUs7SUFFYixJQUFNQyxZQUFZLEdBQUc7UUFDbkIsNkJBQTZCO1FBQzdCLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsbUJBQW1CO0tBQ3BCO0lBRUQsSUFBNEJKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENLLE1BQU0sR0FBZUwsR0FBZSxHQUE5QixFQUFFTSxTQUFTLEdBQUlOLEdBQWUsR0FBbkI7SUFDeEJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUwsS0FBSyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUNqQyxzREFBc0Q7SUFDdEQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ3BCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywwQkFBMEI7c0JBQ3ZDLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCOztrQ0FDbEMsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7OzBDQUN4Qyw4REFBQ0MsT0FBSztnQ0FDSkMsR0FBRyxFQUFFLDhCQUE4QjtnQ0FDbkNDLFFBQVE7Z0NBQ1JDLElBQUk7Z0NBQ0pDLEtBQUs7Z0NBQ0xMLFNBQVMsRUFBQyxPQUFPOzs7OztxQ0FDVjswQ0FDVCw4REFBQ00sR0FBQztnQ0FBQ0MsS0FBSyxFQUFFO29DQUFFQyxPQUFPLEVBQUUsTUFBTTtpQ0FBRTswQ0FBR2hCLEtBQUssQ0FBQ00sS0FBSzs7Ozs7cUNBQUs7Ozs7Ozs2QkFDNUM7a0NBQ04sOERBQUNDLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7a0NBQzVCUCxZQUFZLENBQUNnQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLO2lEQUM1Qiw4REFBQ1osS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7a0RBQ2hDLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsc0NBQXNDOzs7Ozs2Q0FBTztrREFDNUQsOERBQUNZLE1BQUk7d0NBQUNaLFNBQVMsRUFBQyw4QkFBOEI7a0RBQUVVLElBQUk7Ozs7OzZDQUFROzsrQkFGdEJDLEtBQUs7Ozs7cUNBR3ZDO3lCQUNQLENBQUM7Ozs7OzZCQUNFOzs7Ozs7cUJBQ0Y7Ozs7O2lCQUNGOzs7OzthQUNGLENBQ047Q0FDSDtHQXZDS3BCLEtBQUs7O1FBQ1NELGtEQUFTOzs7QUFEdkJDLEtBQUFBLEtBQUs7QUF3Q1g7QUFDRSxlQUFlLEdBQ2Ysc0VBQXNFO0FBQ3RFLGNBQWM7QUFDZCxpR0FBaUc7QUFDakcsMENBQTBDO0FBQzFDLFVBQVU7QUFDVixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLHFFQUFxRTtBQUNyRSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGtGQUFrRjtBQUNsRixZQUFZO0FBQ1osb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLGlEQUFpRDtBQUNqRCxvR0FBb0c7QUFDcEcsd0RBQXdEO0FBQ3hELFdBQVc7QUFDWCxhQUFhO0NBQ2QsK0RBQ2NBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZnRkZXRhaWwvaW5kZXgudHN4P2NiM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXlGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1eUZvcm1cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUG9wdXAsIFBvcHVwMiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvcHVwXCI7XG5cbi8vIGNvbnN0XG4vLyB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9ucyA9IFtcbiAgICBcIkJydXNoZWQgRnJlbmNoIFRlcnJ5IEZhYnJpY1wiLFxuICAgIFwiUGVhY2hlZCBGaW5pc2hpbmcgRm9yIEV4dHJhIFNvZnRuZXNzXCIsXG4gICAgXCJNYWRlIHdpdGggNDYwR1NNIDEwMCUgQ290dG9uXCIsXG4gICAgXCJNYWRlIGluIEF1c3RyYWxpYVwiLFxuICBdO1xuXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBxdWVyeS5uZnRJZCk7XG4gIC8vIHZhciBjYXJkRGF0YSA9IGRhdGEuZmluZCgob2JqKSA9PiBvYmouaWQgPT0gbmZ0SWQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wgdy01MCBwbC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtWzgwdmhdIGJsb2NrIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBtZDpncmlkLWNvbHMtNCBnYXAtNVwiPlxuICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgIHNyYz17XCIvYXNzZXRzL3RlZXMvQnJvd24gQ2hvY28ubXA0XCJ9XG4gICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgPjwvdmlkZW8+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT57cXVlcnkubmZ0SWR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbnMubWFwKChkZXNjLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIG1yLTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtbGF0byB0ZXh0LXNtXCI+e2Rlc2N9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbntcbiAgLyogPEJ1eUZvcm0gLz4gKi9cbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTQgdy1mdWxsXCI+XG4gIC8vICAgICAgIDxzcGFuXG4gIC8vICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB0ZXh0LXNtIHRyYWNraW5nLVstMC4xZW1dIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS00MDBcIlxuICAvLyAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZSh0cnVlKX1cbiAgLy8gICAgICAgPlxuICAvLyAgICAgICAgIFNpemUgQ2hhcnRcbiAgLy8gICAgICAgPC9zcGFuPlxuICAvLyAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC15ZWxsb3ctNDAwIFwiPlxuICAvLyAgICAgICAgIDxidXR0b25cbiAgLy8gICAgICAgICAgIC8vIG9uQ2xpY2s9e31cbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LXdoaXRlIG1sLTIgYmctYmx1ZS00MDAgcHgtNSBweS0yLjQgcm91bmRlZFwiXG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgQnV5IE5vd1xuICAvLyAgICAgICAgIDwvYnV0dG9uPlxuICAvLyAgICAgICA8L3NwYW4+XG4gIC8vICAgICA8L2Rpdj5cbiAgLy8gPFBvcHVwMiB0b2dnbGU9e3RvZ2dsZX0gc2V0VG9nZ2xlPXtzZXRUb2dnbGV9PlxuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC04IHRleHQtd2hpdGUgYmctcmVkLTMwMCB3LVs5NXZ3XSBtYXgtdy0yeGxcIj5cbiAgLy8gICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2l6ZWNoYXJ0LnBuZ1wiIGFsdD1cIlwiIC8+XG4gIC8vICAgPC9kaXY+XG4gIC8vIDwvUG9wdXAyPjtcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJJbmRleCIsInF1ZXJ5IiwiZGVzY3JpcHRpb25zIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwiY29uc29sZSIsImxvZyIsIm5mdElkIiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW8iLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsInAiLCJzdHlsZSIsImRpc3BsYXkiLCJtYXAiLCJkZXNjIiwiaW5kZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/nftdetail/index.tsx\n"));

/***/ })

});