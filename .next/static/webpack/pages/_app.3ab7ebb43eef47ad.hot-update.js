"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AppContext */ \"./context/AppContext.tsx\");\n/* harmony import */ var _utils_functions_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functions/utils */ \"./utils/functions/utils.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_WalletContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/WalletContext */ \"./context/WalletContext.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Nav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_2__.AppContext), contextState = ref.contextState, setContextState = ref.setContextState;\n    var ref1 = (0,_context_WalletContext__WEBPACK_IMPORTED_MODULE_5__.useWalletContext)(), wallet = ref1.wallet, connectWallet = ref1.connectWallet;\n    // async function connectWallet() {\n    //   const { ethereum } = window as any;\n    //   if (!ethereum) {\n    //     window.alert(\"You must install MetaMask to use this website\");\n    //     return;\n    //   }\n    //   let provider = new ethers.providers.Web3Provider(ethereum, \"any\");\n    //   let network = await provider.getNetwork();\n    //   const addr = await provider.send(\"eth_requestAccounts\", []);\n    //   alert(addr[0]);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center sticky-top bg-black justify-between w-full py-4 px-5 lg:px-16 top-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl lg:text-3xl text-white\",\n                children: \"FamilyNFT\"\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:flex hidden gap-5 text-lg text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/order\",\n                        children: \"Order\"\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/inventory\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Inventory, {}, void 0, false, {\n                            fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/marketplace\",\n                        children: \"Marketplace\"\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            wallet ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white\",\n                children: (0,_utils_functions_utils__WEBPACK_IMPORTED_MODULE_3__.trimAddress)(wallet)\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-8 py-2.5 uppercase bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600\",\n                onClick: function() {\n                    return connectWallet();\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-white text-lg font-medium\",\n                    children: \"Connect\"\n                }, void 0, false, {\n                    fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/danish/work/FamilyHackathon/components/Nav.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_s(Nav, \"fXQBuW9RwBK88CPtgLgjZtCvtVc=\", false, function() {\n    return [\n        _context_WalletContext__WEBPACK_IMPORTED_MODULE_5__.useWalletContext\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUN5QjtBQUNLO0FBQ0Q7QUFFMUI7QUFDK0I7QUFFN0MsU0FBU00sR0FBRyxHQUFHOztJQUM1QixJQUEwQ0osR0FBc0IsR0FBdEJBLGlEQUFVLENBQUNELDJEQUFVLENBQUMsRUFBeERNLFlBQVksR0FBc0JMLEdBQXNCLENBQXhESyxZQUFZLEVBQUVDLGVBQWUsR0FBS04sR0FBc0IsQ0FBMUNNLGVBQWU7SUFDckMsSUFBa0NILElBQWtCLEdBQWxCQSx3RUFBZ0IsRUFBRSxFQUE1Q0ksTUFBTSxHQUFvQkosSUFBa0IsQ0FBNUNJLE1BQU0sRUFBRUMsYUFBYSxHQUFLTCxJQUFrQixDQUFwQ0ssYUFBYTtJQUM3QixtQ0FBbUM7SUFDbkMsd0NBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixxRUFBcUU7SUFDckUsY0FBYztJQUNkLE1BQU07SUFDTix1RUFBdUU7SUFDdkUsK0NBQStDO0lBRS9DLGlFQUFpRTtJQUNqRSxvQkFBb0I7SUFDcEIsSUFBSTtJQUVKLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx1RkFBdUY7OzBCQUNwRyw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLGdDQUFnQzswQkFBQyxXQUFTOzs7OztvQkFBSzswQkFDN0QsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx5Q0FBeUM7O2tDQUN0RCw4REFBQ1Isa0RBQUk7d0JBQUNVLElBQUksRUFBRSxRQUFRO2tDQUFFLE9BQUs7Ozs7OzRCQUFPO2tDQUNsQyw4REFBQ1Ysa0RBQUk7d0JBQUNVLElBQUksRUFBRSxZQUFZO2tDQUN0Qiw0RUFBQ0MsU0FBUzs7OztnQ0FBRzs7Ozs7NEJBQ1I7a0NBQ1AsOERBQUNYLGtEQUFJO3dCQUFDVSxJQUFJLEVBQUUsY0FBYztrQ0FBRSxhQUFXOzs7Ozs0QkFBTzs7Ozs7O29CQUMxQztZQUNMTCxNQUFNLGlCQUNMLDhEQUFDRSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsWUFBWTswQkFBRVQsbUVBQVcsQ0FBQ00sTUFBTSxDQUFDOzs7OztvQkFBTyxpQkFFdkQsOERBQUNFLEtBQUc7Z0JBQ0ZDLFNBQVMsRUFBQywrRUFBK0U7Z0JBQ3pGSSxPQUFPLEVBQUU7MkJBQU1OLGFBQWEsRUFBRTtpQkFBQTswQkFFOUIsNEVBQUNPLE1BQUk7b0JBQUNMLFNBQVMsRUFBQyxnQ0FBZ0M7OEJBQUUsU0FBUzs7Ozs7d0JBQVE7Ozs7O29CQUMvRDs7Ozs7O1lBRUosQ0FDTjtDQUNIO0dBdEN1Qk4sR0FBRzs7UUFFU0Qsb0VBQWdCOzs7QUFGNUJDLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYudHN4P2U2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L0FwcENvbnRleHRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRyaW1BZGRyZXNzIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9ucy91dGlsc1wiO1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlV2FsbGV0Q29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1dhbGxldENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCB7IGNvbnRleHRTdGF0ZSwgc2V0Q29udGV4dFN0YXRlIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCB7IHdhbGxldCwgY29ubmVjdFdhbGxldCB9ID0gdXNlV2FsbGV0Q29udGV4dCgpO1xuICAvLyBhc3luYyBmdW5jdGlvbiBjb25uZWN0V2FsbGV0KCkge1xuICAvLyAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdyBhcyBhbnk7XG4gIC8vICAgaWYgKCFldGhlcmV1bSkge1xuICAvLyAgICAgd2luZG93LmFsZXJ0KFwiWW91IG11c3QgaW5zdGFsbCBNZXRhTWFzayB0byB1c2UgdGhpcyB3ZWJzaXRlXCIpO1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy8gICBsZXQgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0sIFwiYW55XCIpO1xuICAvLyAgIGxldCBuZXR3b3JrID0gYXdhaXQgcHJvdmlkZXIuZ2V0TmV0d29yaygpO1xuXG4gIC8vICAgY29uc3QgYWRkciA9IGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKTtcbiAgLy8gICBhbGVydChhZGRyWzBdKTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzdGlja3ktdG9wIGJnLWJsYWNrIGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcHktNCBweC01IGxnOnB4LTE2IHRvcC0wXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBsZzp0ZXh0LTN4bCB0ZXh0LXdoaXRlXCI+RmFtaWx5TkZUPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleCBoaWRkZW4gZ2FwLTUgdGV4dC1sZyB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL29yZGVyXCJ9Pk9yZGVyPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtcIi9pbnZlbnRvcnlcIn0+XG4gICAgICAgICAgPEludmVudG9yeSAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL21hcmtldHBsYWNlXCJ9Pk1hcmtldHBsYWNlPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICB7d2FsbGV0ID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57dHJpbUFkZHJlc3Mod2FsbGV0KX08L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTIuNSB1cHBlcmNhc2UgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY29ubmVjdFdhbGxldCgpfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+e1wiQ29ubmVjdFwifTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQ29udGV4dCIsInVzZUNvbnRleHQiLCJ0cmltQWRkcmVzcyIsIkxpbmsiLCJ1c2VXYWxsZXRDb250ZXh0IiwiTmF2IiwiY29udGV4dFN0YXRlIiwic2V0Q29udGV4dFN0YXRlIiwid2FsbGV0IiwiY29ubmVjdFdhbGxldCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaHJlZiIsIkludmVudG9yeSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.tsx\n"));

/***/ })

});