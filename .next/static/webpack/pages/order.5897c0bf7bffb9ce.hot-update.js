"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order",{

/***/ "./components/NFTCard.tsx":
/*!********************************!*\
  !*** ./components/NFTCard.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_danish_work_FamilyHackathon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_danish_work_FamilyHackathon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_danish_work_FamilyHackathon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AppContext */ \"./context/AppContext.tsx\");\n/* harmony import */ var _context_ContractProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/ContractProvider */ \"./context/ContractProvider.tsx\");\n/* harmony import */ var _context_WalletContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/WalletContext */ \"./context/WalletContext.tsx\");\n/* harmony import */ var _context_Web3StorageProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/Web3StorageProvider */ \"./context/Web3StorageProvider.tsx\");\n/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Popup */ \"./components/Popup.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar colors = [\n    \"Natural\",\n    \"Blue\",\n    \"Olive\",\n    \"Brown Choco\",\n    \"Green\"\n];\nvar sizes = [\n    \"XS\",\n    \"S\",\n    \"M\",\n    \"L\",\n    \"XL\"\n];\nvar sizeOptions = [\n    {\n        value: \"0\",\n        label: \"XS\"\n    },\n    {\n        value: \"1\",\n        label: \"S\"\n    },\n    {\n        value: \"2\",\n        label: \"M\"\n    },\n    {\n        value: \"3\",\n        label: \"L\"\n    },\n    {\n        value: \"4\",\n        label: \"XL\"\n    }, \n];\nvar descriptions = [\n    \"Brushed French Terry Fabric\",\n    \"Peached Finishing For Extra Softness\",\n    \"Made with 460GSM 100% Cotton\",\n    \"Made in Australia\", \n];\nfunction NFTCard(param) {\n    var color = param.color, data = param.data;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppContext), contextState = ref.contextState, setContextState = ref.setContextState;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), selectedSize = ref1[0], setSelectedSize = ref1[1];\n    var contract = (0,_context_ContractProvider__WEBPACK_IMPORTED_MODULE_4__.useContract)().contract;\n    var wallet = (0,_context_WalletContext__WEBPACK_IMPORTED_MODULE_5__.useWalletContext)().wallet;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), toggle = ref2[0], setToggle = ref2[1];\n    var storeJson = (0,_context_Web3StorageProvider__WEBPACK_IMPORTED_MODULE_6__.useStorage)().storeJson;\n    var handleMint = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_home_danish_work_FamilyHackathon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var json, jsonUri, hash;\n            return _home_danish_work_FamilyHackathon_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        json = JSON.stringify({\n                            drop: \"Hackathon Test\",\n                            minter: \"wallet\",\n                            type: \"Jumper\",\n                            size: \"Demo\",\n                            color: data.color\n                        });\n                        _ctx.next = 3;\n                        return storeJson(json);\n                    case 3:\n                        jsonUri = _ctx.sent;\n                        _ctx.next = 6;\n                        return contract().mint(wallet, jsonUri);\n                    case 6:\n                        hash = _ctx.sent;\n                        alert(\"Minted Succesfully at hash \".concat(hash));\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleMint() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center flex-col rounded-lg border-4 border-white p-4 w-full max-w-[380px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"video\", {\n                src: \"/assets/tees/\" + data.color + \".mp4\",\n                autoPlay: true,\n                loop: true,\n                muted: true,\n                className: \"w-48\"\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"text-xl mt-4 text-red-500\",\n                        children: data.color\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col \",\n                        children: descriptions.map(function(desc, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"w-2 h-2 rounded-full bg-red-600 mr-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        className: \"text-white font-lato text-sm\",\n                                        children: desc\n                                    }, void 0, false, {\n                                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between space-x-2 w-full pt-4\",\n                children: sizes.map(function(size, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return setSelectedSize(index);\n                        },\n                        className: \"text-white py-1 px-2 cursor-pointer \".concat(selectedSize == index ? \"bg-blue-500\" : \"bg-gray-800 hover:bg-gray-900\", \" flex-1 text-center\"),\n                        children: size\n                    }, index, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"text-blue-600 text-sm tracking-[-0.1em] cursor-pointer hover:text-blue-400\",\n                        onClick: function() {\n                            return setToggle(true);\n                        },\n                        children: \"Size Chart\"\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"text-xl tracking-tighter text-yellow-400 \",\n                        children: [\n                            contextState.stocks.length > 0 && contextState.stocks[color][selectedSize],\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return handleMint();\n                                },\n                                className: \"text-base text-white ml-2 bg-blue-400 px-5 py-2.4 rounded\"\n                            }, void 0, false, {\n                                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            contextState.stocks.length > 0 && contextState.stocks[color][selectedSize] > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"text-lg bg-red-300 px-6 py-1 rounded-lg cursor-pointer hover:bg-red-400 select-none\",\n                onClick: function() {\n                    return console.log(\"Minting\");\n                },\n                children: contextState.isLoading ? \"Minting..\" : \"Mint\"\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                lineNumber: 107,\n                columnNumber: 11\n            }, this),\n            contextState.stocks.length > 0 && contextState.stocks[color][selectedSize] == 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"text-lg bg-red-300 px-6 py-1 rounded-lg cursor-pointer hover:bg-red-400 select-none\",\n                children: \"Out Of Stock\"\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                lineNumber: 116,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Popup__WEBPACK_IMPORTED_MODULE_7__.Popup2, {\n                toggle: toggle,\n                setToggle: setToggle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center p-8 text-white bg-red-300 w-[95vw] max-w-2xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: \"/assets/images/sizechart.png\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/danish/work/FamilyHackathon/components/NFTCard.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(NFTCard, \"TcgnZ2/whlnjkx2qNkTUvW5TVAM=\", false, function() {\n    return [\n        _context_ContractProvider__WEBPACK_IMPORTED_MODULE_4__.useContract,\n        _context_WalletContext__WEBPACK_IMPORTED_MODULE_5__.useWalletContext,\n        _context_Web3StorageProvider__WEBPACK_IMPORTED_MODULE_6__.useStorage\n    ];\n});\n_c = NFTCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTCard);\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUErRTs4QkFDNUYsNEVBQUNpQixLQUFHO3dCQUFDZixHQUFHLEVBQUMsOEJBQThCO3dCQUFDZ0IsR0FBRyxFQUFDLEVBQUU7Ozs7OzRCQUFHOzs7Ozt3QkFDN0M7Ozs7O29CQUNDOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7R0EvRlEzQyxPQUFPOztRQUdPVixrRUFBVztRQUNiQyxvRUFBZ0I7UUFFYkMsb0VBQVU7OztBQU56QlEsS0FBQUEsT0FBTztBQWlHaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05GVENhcmQudHN4PzBlZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250cmFjdCB9IGZyb20gXCIuLi9jb250ZXh0L0NvbnRyYWN0UHJvdmlkZXJcIjtcbmltcG9ydCB7IHVzZVdhbGxldENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9XYWxsZXRDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VTdG9yYWdlIH0gZnJvbSBcIi4uL2NvbnRleHQvV2ViM1N0b3JhZ2VQcm92aWRlclwiO1xuaW1wb3J0IHsgYnV5RmFtaWx5IH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9ucy9GYW1pbHlGdW5jdGlvbnNcIjtcbmltcG9ydCB7IFBvcHVwLCBQb3B1cDIgfSBmcm9tIFwiLi9Qb3B1cFwiO1xuXG50eXBlIE1ldGEgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgaWQ6IHN0cmluZyB8IG51bWJlcjtcbn07XG5jb25zdCBjb2xvcnMgPSBbXCJOYXR1cmFsXCIsIFwiQmx1ZVwiLCBcIk9saXZlXCIsIFwiQnJvd24gQ2hvY29cIiwgXCJHcmVlblwiXTtcbmNvbnN0IHNpemVzID0gW1wiWFNcIiwgXCJTXCIsIFwiTVwiLCBcIkxcIiwgXCJYTFwiXTtcbmNvbnN0IHNpemVPcHRpb25zID0gW1xuICB7IHZhbHVlOiBcIjBcIiwgbGFiZWw6IFwiWFNcIiB9LFxuICB7IHZhbHVlOiBcIjFcIiwgbGFiZWw6IFwiU1wiIH0sXG4gIHsgdmFsdWU6IFwiMlwiLCBsYWJlbDogXCJNXCIgfSxcbiAgeyB2YWx1ZTogXCIzXCIsIGxhYmVsOiBcIkxcIiB9LFxuICB7IHZhbHVlOiBcIjRcIiwgbGFiZWw6IFwiWExcIiB9LFxuXTtcblxuY29uc3QgZGVzY3JpcHRpb25zID0gW1xuICBcIkJydXNoZWQgRnJlbmNoIFRlcnJ5IEZhYnJpY1wiLFxuICBcIlBlYWNoZWQgRmluaXNoaW5nIEZvciBFeHRyYSBTb2Z0bmVzc1wiLFxuICBcIk1hZGUgd2l0aCA0NjBHU00gMTAwJSBDb3R0b25cIixcbiAgXCJNYWRlIGluIEF1c3RyYWxpYVwiLFxuXTtcblxuZnVuY3Rpb24gTkZUQ2FyZCh7IGNvbG9yLCBkYXRhIH06IHsgY29sb3I6IG51bWJlcjsgZGF0YTogYW55IH0pIHtcbiAgY29uc3QgeyBjb250ZXh0U3RhdGUsIHNldENvbnRleHRTdGF0ZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3NlbGVjdGVkU2l6ZSwgc2V0U2VsZWN0ZWRTaXplXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB7IGNvbnRyYWN0IH0gPSB1c2VDb250cmFjdCgpO1xuICBjb25zdCB7IHdhbGxldCB9ID0gdXNlV2FsbGV0Q29udGV4dCgpO1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHN0b3JlSnNvbiB9ID0gdXNlU3RvcmFnZSgpO1xuICBjb25zdCBoYW5kbGVNaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBkcm9wOiBcIkhhY2thdGhvbiBUZXN0XCIsXG4gICAgICBtaW50ZXI6IFwid2FsbGV0XCIsXG4gICAgICB0eXBlOiBcIkp1bXBlclwiLFxuICAgICAgc2l6ZTogXCJEZW1vXCIsXG4gICAgICBjb2xvcjogZGF0YS5jb2xvcixcbiAgICB9KTtcbiAgICBjb25zdCBqc29uVXJpID0gYXdhaXQgc3RvcmVKc29uKGpzb24pO1xuICAgIC8vIGNvbnNvbGUubG9nKGF3YWl0IGNvbnRyYWN0KCkuYmFsYW5jZU9mKHdhbGxldCkpO1xuICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBjb250cmFjdCgpLm1pbnQod2FsbGV0LCBqc29uVXJpKTtcbiAgICBhbGVydChgTWludGVkIFN1Y2Nlc2Z1bGx5IGF0IGhhc2ggJHtoYXNofWApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCByb3VuZGVkLWxnIGJvcmRlci00IGJvcmRlci13aGl0ZSBwLTQgdy1mdWxsIG1heC13LVszODBweF1cIj5cbiAgICAgIDx2aWRlb1xuICAgICAgICBzcmM9e1wiL2Fzc2V0cy90ZWVzL1wiICsgZGF0YS5jb2xvciArIFwiLm1wNFwifVxuICAgICAgICBhdXRvUGxheVxuICAgICAgICBsb29wXG4gICAgICAgIG11dGVkXG4gICAgICAgIGNsYXNzTmFtZT1cInctNDhcIlxuICAgICAgPjwvdmlkZW8+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG10LTQgdGV4dC1yZWQtNTAwXCI+e2RhdGEuY29sb3J9PC9zcGFuPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgICAgICAgICB7ZGVzY3JpcHRpb25zLm1hcCgoZGVzYywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIG1yLTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWxhdG8gdGV4dC1zbVwiPntkZXNjfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0yIHctZnVsbCBwdC00XCI+XG4gICAgICAgIHtzaXplcy5tYXAoKHNpemUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkU2l6ZShpbmRleCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHB5LTEgcHgtMiBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICBzZWxlY3RlZFNpemUgPT0gaW5kZXhcbiAgICAgICAgICAgICAgICA/IFwiYmctYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTkwMFwiXG4gICAgICAgICAgICB9IGZsZXgtMSB0ZXh0LWNlbnRlcmB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NpemV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS00IHctZnVsbFwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdGV4dC1zbSB0cmFja2luZy1bLTAuMWVtXSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9XG4gICAgICAgID5cbiAgICAgICAgICBTaXplIENoYXJ0XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCB0cmFja2luZy10aWdodGVyIHRleHQteWVsbG93LTQwMCBcIj5cbiAgICAgICAgICB7Y29udGV4dFN0YXRlLnN0b2Nrcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBjb250ZXh0U3RhdGUuc3RvY2tzW2NvbG9yXVtzZWxlY3RlZFNpemVdfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1pbnQoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LXdoaXRlIG1sLTIgYmctYmx1ZS00MDAgcHgtNSBweS0yLjQgcm91bmRlZFwiXG4gICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjb250ZXh0U3RhdGUuc3RvY2tzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgY29udGV4dFN0YXRlLnN0b2Nrc1tjb2xvcl1bc2VsZWN0ZWRTaXplXSA+IDAgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgYmctcmVkLTMwMCBweC02IHB5LTEgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1yZWQtNDAwIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKFwiTWludGluZ1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y29udGV4dFN0YXRlLmlzTG9hZGluZyA/IFwiTWludGluZy4uXCIgOiBcIk1pbnRcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIHtjb250ZXh0U3RhdGUuc3RvY2tzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgY29udGV4dFN0YXRlLnN0b2Nrc1tjb2xvcl1bc2VsZWN0ZWRTaXplXSA9PSAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgYmctcmVkLTMwMCBweC02IHB5LTEgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1yZWQtNDAwIHNlbGVjdC1ub25lXCI+XG4gICAgICAgICAgICBPdXQgT2YgU3RvY2tcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDxQb3B1cDIgdG9nZ2xlPXt0b2dnbGV9IHNldFRvZ2dsZT17c2V0VG9nZ2xlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTggdGV4dC13aGl0ZSBiZy1yZWQtMzAwIHctWzk1dnddIG1heC13LTJ4bFwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvc2l6ZWNoYXJ0LnBuZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qb3B1cDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5GVENhcmQ7XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsInVzZUNvbnRyYWN0IiwidXNlV2FsbGV0Q29udGV4dCIsInVzZVN0b3JhZ2UiLCJQb3B1cDIiLCJjb2xvcnMiLCJzaXplcyIsInNpemVPcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsImRlc2NyaXB0aW9ucyIsIk5GVENhcmQiLCJjb2xvciIsImRhdGEiLCJjb250ZXh0U3RhdGUiLCJzZXRDb250ZXh0U3RhdGUiLCJzZWxlY3RlZFNpemUiLCJzZXRTZWxlY3RlZFNpemUiLCJjb250cmFjdCIsIndhbGxldCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInN0b3JlSnNvbiIsImhhbmRsZU1pbnQiLCJqc29uIiwianNvblVyaSIsImhhc2giLCJKU09OIiwic3RyaW5naWZ5IiwiZHJvcCIsIm1pbnRlciIsInR5cGUiLCJzaXplIiwibWludCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwidmlkZW8iLCJzcmMiLCJhdXRvUGxheSIsImxvb3AiLCJtdXRlZCIsInNwYW4iLCJtYXAiLCJkZXNjIiwiaW5kZXgiLCJvbkNsaWNrIiwic3RvY2tzIiwibGVuZ3RoIiwiYnV0dG9uIiwiY29uc29sZSIsImxvZyIsImlzTG9hZGluZyIsImltZyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NFTCard.tsx\n"));

/***/ })

});