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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// const\n// useEffect(() => {}, []);\nvar Index = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var descriptions = [\n        \"Brushed French Terry Fabric\",\n        \"Peached Finishing For Extra Softness\",\n        \"Made with 460GSM 100% Cotton\",\n        \"Made in Australia\", \n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), toggle = ref[0], setToggle = ref[1];\n    console.log(\"data\", query.nftId);\n    // var cardData = data.find((obj) => obj.id == nftId);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" flex flex-col max-w-[450px] pl-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"py-2 md:grid-cols-4 gap-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                    src: \"/assets/tees/Brown Choco.mp4\",\n                    autoPlay: true,\n                    loop: true,\n                    muted: true,\n                    className: \"w-100\"\n                }, void 0, false, {\n                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        display: \"none\"\n                    },\n                    children: query.nftId\n                }, void 0, false, {\n                    fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/danish/work/FamilyHackathon/pages/nftdetail/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"gSWciKNHBPyZ0S3nLKx8bN6GCMY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Index;\n{\n/* <BuyForm /> */ // <div className=\"flex flex-col \">\n//       {descriptions.map((desc, index) => (\n//         <div className=\"flex items-center\" key={index}>\n//           <div className=\"w-2 h-2 rounded-full bg-red-600 mr-2\"></div>\n//           <span className=\"text-white font-lato text-sm\">{desc}</span>\n//         </div>\n//       ))}\n//     </div>\n//     <div className=\"flex items-center justify-between py-4 w-full\">\n//       <span\n//         className=\"text-blue-600 text-sm tracking-[-0.1em] cursor-pointer hover:text-blue-400\"\n//         onClick={() => setToggle(true)}\n//       >\n//         Size Chart\n//       </span>\n//       <span className=\"text-xl tracking-tighter text-yellow-400 \">\n//         <button\n//           // onClick={}\n//           className=\"text-base text-white ml-2 bg-blue-400 px-5 py-2.4 rounded\"\n//         >\n//           Buy Now\n//         </button>\n//       </span>\n//     </div>\n// <Popup2 toggle={toggle} setToggle={setToggle}>\n//   <div className=\"flex items-center justify-center p-8 text-white bg-red-300 w-[95vw] max-w-2xl\">\n//     <img src=\"/assets/images/sizechart.png\" alt=\"\" />\n//   </div>\n// </Popup2>;\n}/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZnRkZXRhaWwvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQW1EO0FBRVg7QUFHeEMsUUFBUTtBQUNSLDJCQUEyQjtBQUUzQixJQUFNRyxLQUFLLEdBQUcsV0FBTTs7SUFDbEIsSUFBTSxLQUFPLEdBQUtELHNEQUFTLEVBQUUsQ0FBckJFLEtBQUs7SUFFYixJQUFNQyxZQUFZLEdBQUc7UUFDbkIsNkJBQTZCO1FBQzdCLHNDQUFzQztRQUN0Qyw4QkFBOEI7UUFDOUIsbUJBQW1CO0tBQ3BCO0lBRUQsSUFBNEJKLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENLLE1BQU0sR0FBZUwsR0FBZSxHQUE5QixFQUFFTSxTQUFTLEdBQUlOLEdBQWUsR0FBbkI7SUFDeEJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUwsS0FBSyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUNqQyxzREFBc0Q7SUFDdEQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1DQUFtQztrQkFFaEQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7OEJBQ3hDLDhEQUFDQyxPQUFLO29CQUNKQyxHQUFHLEVBQUUsOEJBQThCO29CQUNuQ0MsUUFBUTtvQkFDUkMsSUFBSTtvQkFDSkMsS0FBSztvQkFDTEwsU0FBUyxFQUFDLE9BQU87Ozs7O3lCQUNWOzhCQUNULDhEQUFDTSxHQUFDO29CQUFDQyxLQUFLLEVBQUU7d0JBQUVDLE9BQU8sRUFBRSxNQUFNO3FCQUFFOzhCQUFHaEIsS0FBSyxDQUFDTSxLQUFLOzs7Ozt5QkFBSzs7Ozs7O2lCQUM1Qzs7Ozs7YUFDRixDQUVOO0NBQ0g7R0E3QktQLEtBQUs7O1FBQ1NELGtEQUFTOzs7QUFEdkJDLEtBQUFBLEtBQUs7QUE4Qlg7QUFDRSxlQUFlLEdBQ2YsbUNBQW1DO0FBQ25DLDZDQUE2QztBQUM3QywwREFBMEQ7QUFDMUQseUVBQXlFO0FBQ3pFLHlFQUF5RTtBQUN6RSxpQkFBaUI7QUFDakIsWUFBWTtBQUNaLGFBQWE7QUFDYixzRUFBc0U7QUFDdEUsY0FBYztBQUNkLGlHQUFpRztBQUNqRywwQ0FBMEM7QUFDMUMsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIscUVBQXFFO0FBQ3JFLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsa0ZBQWtGO0FBQ2xGLFlBQVk7QUFDWixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsaURBQWlEO0FBQ2pELG9HQUFvRztBQUNwRyx3REFBd0Q7QUFDeEQsV0FBVztBQUNYLGFBQWE7Q0FDZCwrREFDY0EsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25mdGRldGFpbC9pbmRleC50c3g/Y2IzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1eUZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV5Rm9ybVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQb3B1cCwgUG9wdXAyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9wdXBcIjtcblxuLy8gY29uc3Rcbi8vIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25zID0gW1xuICAgIFwiQnJ1c2hlZCBGcmVuY2ggVGVycnkgRmFicmljXCIsXG4gICAgXCJQZWFjaGVkIEZpbmlzaGluZyBGb3IgRXh0cmEgU29mdG5lc3NcIixcbiAgICBcIk1hZGUgd2l0aCA0NjBHU00gMTAwJSBDb3R0b25cIixcbiAgICBcIk1hZGUgaW4gQXVzdHJhbGlhXCIsXG4gIF07XG5cbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIHF1ZXJ5Lm5mdElkKTtcbiAgLy8gdmFyIGNhcmREYXRhID0gZGF0YS5maW5kKChvYmopID0+IG9iai5pZCA9PSBuZnRJZCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBtYXgtdy1bNDUwcHhdIHBsLTVcIj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLVs4MHZoXSBibG9jayBcIj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTVcIj5cbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgc3JjPXtcIi9hc3NldHMvdGVlcy9Ccm93biBDaG9jby5tcDRcIn1cbiAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgIGxvb3BcbiAgICAgICAgICBtdXRlZFxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgPjwvdmlkZW8+XG4gICAgICAgIDxwIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19PntxdWVyeS5uZnRJZH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn07XG57XG4gIC8qIDxCdXlGb3JtIC8+ICovXG4gIC8vIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBcIj5cbiAgLy8gICAgICAge2Rlc2NyaXB0aW9ucy5tYXAoKGRlc2MsIGluZGV4KSA9PiAoXG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiIGtleT17aW5kZXh9PlxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1yZWQtNjAwIG1yLTJcIj48L2Rpdj5cbiAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1sYXRvIHRleHQtc21cIj57ZGVzY308L3NwYW4+XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICkpfVxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS00IHctZnVsbFwiPlxuICAvLyAgICAgICA8c3BhblxuICAvLyAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdGV4dC1zbSB0cmFja2luZy1bLTAuMWVtXSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNDAwXCJcbiAgLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUodHJ1ZSl9XG4gIC8vICAgICAgID5cbiAgLy8gICAgICAgICBTaXplIENoYXJ0XG4gIC8vICAgICAgIDwvc3Bhbj5cbiAgLy8gICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCB0cmFja2luZy10aWdodGVyIHRleHQteWVsbG93LTQwMCBcIj5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICAvLyBvbkNsaWNrPXt9XG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC13aGl0ZSBtbC0yIGJnLWJsdWUtNDAwIHB4LTUgcHktMi40IHJvdW5kZWRcIlxuICAvLyAgICAgICAgID5cbiAgLy8gICAgICAgICAgIEJ1eSBOb3dcbiAgLy8gICAgICAgICA8L2J1dHRvbj5cbiAgLy8gICAgICAgPC9zcGFuPlxuICAvLyAgICAgPC9kaXY+XG4gIC8vIDxQb3B1cDIgdG9nZ2xlPXt0b2dnbGV9IHNldFRvZ2dsZT17c2V0VG9nZ2xlfT5cbiAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtOCB0ZXh0LXdoaXRlIGJnLXJlZC0zMDAgdy1bOTV2d10gbWF4LXctMnhsXCI+XG4gIC8vICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3NpemVjaGFydC5wbmdcIiBhbHQ9XCJcIiAvPlxuICAvLyAgIDwvZGl2PlxuICAvLyA8L1BvcHVwMj47XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSW5kZXgiLCJxdWVyeSIsImRlc2NyaXB0aW9ucyIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImNvbnNvbGUiLCJsb2ciLCJuZnRJZCIsImRpdiIsImNsYXNzTmFtZSIsInZpZGVvIiwic3JjIiwiYXV0b1BsYXkiLCJsb29wIiwibXV0ZWQiLCJwIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/nftdetail/index.tsx\n"));

/***/ })

});