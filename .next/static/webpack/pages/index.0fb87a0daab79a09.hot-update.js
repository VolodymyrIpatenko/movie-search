"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Main.styled */ \"./src/styles/Main.styled.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [searchError, setSearchError] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const handleSearchInputChange = (event)=>{\n        setSearchQuery(event.target.value);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleClick = (movieId)=>{\n        router.push(\"\".concat(movieId));\n    };\n    const handleSearch = async ()=>{\n        var _response_data;\n        if (!searchQuery.trim()) return;\n        const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://www.omdbapi.com/?s=\".concat(searchQuery, \"&apikey=\").concat(\"9002be4f\"));\n        if ((_response_data = response.data) === null || _response_data === void 0 ? void 0 : _response_data.Search) {\n            const moviesWithIds = response.data.Search.map((movie)=>({\n                    ...movie,\n                    imdbID: movie.imdbID\n                }));\n            setMovies(moviesWithIds);\n            setSearchError(\"\");\n        } else {\n            setMovies([]);\n            setSearchError(\"No results found. Please try a different search query.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Movie Search NextJS App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        \"http-equiv\": \"Content-Security-Policy\",\n                        content: \"upgrade-insecure-requests\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__.Main, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Movie Search App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__.SearchSection, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__.InputElem, {\n                                type: \"text\",\n                                value: searchQuery,\n                                onChange: handleSearchInputChange\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__.SearchButton, {\n                                onClick: handleSearch,\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__.MoviesSection, {\n                            children: movies.map((param)=>/*#__PURE__*/ {\n                                let { imdbID , Title , Type , Year , Poster  } = param;\n                                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__.MovieItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: Poster,\n                                            alt: Title,\n                                            width: \"300\",\n                                            height: \"400\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: Title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: Year\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: Type\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Main_styled__WEBPACK_IMPORTED_MODULE_3__.DetailsBtn, {\n                                            onClick: ()=>handleClick(imdbID),\n                                            children: \"More Details\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, imdbID, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Рабочий стол\\\\tribute page\\\\movie-search\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"Pj4pmk2X7aPLiT1PWmKxj1vh7wo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHtcbiAgTWFpbixcbiAgTW92aWVzU2VjdGlvbixcbiAgTW92aWVJdGVtLFxuICBTZWFyY2hCdXR0b24sXG4gIERldGFpbHNCdG4sXG4gIElucHV0RWxlbSxcbiAgU2VhcmNoU2VjdGlvbixcbn0gZnJvbSAnQC9zdHlsZXMvTWFpbi5zdHlsZWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHR5cGUgTW92aWUgZnJvbSAnQC9lbnRpdGllcy9Nb3ZpZURhdGEnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG50eXBlIFNlYXJjaFJlc3BvbnNlID0ge1xuICBTZWFyY2g6IE1vdmllW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlPE1vdmllW10+KFtdKTtcbiAgY29uc3QgW3NlYXJjaEVycm9yLCBzZXRTZWFyY2hFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldFNlYXJjaFF1ZXJ5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAobW92aWVJZDogc3RyaW5nKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYCR7bW92aWVJZH1gKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZWFyY2hRdWVyeS50cmltKCkpIHJldHVybjtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PFNlYXJjaFJlc3BvbnNlPihcbiAgICAgIGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9zPSR7c2VhcmNoUXVlcnl9JmFwaWtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX09NREJfQVBJX0tFWX1gXG4gICAgKTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhPy5TZWFyY2gpIHtcbiAgICAgIGNvbnN0IG1vdmllc1dpdGhJZHMgPSByZXNwb25zZS5kYXRhLlNlYXJjaC5tYXAobW92aWUgPT4gKHtcbiAgICAgICAgLi4ubW92aWUsXG4gICAgICAgIGltZGJJRDogbW92aWUuaW1kYklELFxuICAgICAgfSkpO1xuICAgICAgc2V0TW92aWVzKG1vdmllc1dpdGhJZHMpO1xuICAgICAgc2V0U2VhcmNoRXJyb3IoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb3ZpZXMoW10pO1xuICAgICAgc2V0U2VhcmNoRXJyb3IoJ05vIHJlc3VsdHMgZm91bmQuIFBsZWFzZSB0cnkgYSBkaWZmZXJlbnQgc2VhcmNoIHF1ZXJ5LicpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vdmllIFNlYXJjaCBOZXh0SlMgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIGh0dHAtZXF1aXY9XCJDb250ZW50LVNlY3VyaXR5LVBvbGljeVwiXG4gICAgICAgICAgY29udGVudD1cInVwZ3JhZGUtaW5zZWN1cmUtcmVxdWVzdHNcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFpbj5cbiAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+TW92aWUgU2VhcmNoIEFwcDwvaDE+XG5cbiAgICAgICAgPFNlYXJjaFNlY3Rpb24+XG4gICAgICAgICAgPElucHV0RWxlbVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaElucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlYXJjaEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9PlNlYXJjaDwvU2VhcmNoQnV0dG9uPlxuICAgICAgICA8L1NlYXJjaFNlY3Rpb24+XG5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPE1vdmllc1NlY3Rpb24+XG4gICAgICAgICAgICB7bW92aWVzLm1hcCgoeyBpbWRiSUQsIFRpdGxlLCBUeXBlLCBZZWFyLCBQb3N0ZXIgfSkgPT4gKFxuICAgICAgICAgICAgICA8TW92aWVJdGVtIGtleT17aW1kYklEfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtQb3N0ZXJ9IGFsdD17VGl0bGV9IHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiNDAwXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGgyPntUaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPHA+e1llYXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e1R5cGV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxEZXRhaWxzQnRuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGltZGJJRCl9PlxuICAgICAgICAgICAgICAgICAgTW9yZSBEZXRhaWxzXG4gICAgICAgICAgICAgICAgPC9EZXRhaWxzQnRuPlxuICAgICAgICAgICAgICA8L01vdmllSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvTW92aWVzU2VjdGlvbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9NYWluPlxuICAgIDwvPlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiTWFpbiIsIk1vdmllc1NlY3Rpb24iLCJNb3ZpZUl0ZW0iLCJTZWFyY2hCdXR0b24iLCJEZXRhaWxzQnRuIiwiSW5wdXRFbGVtIiwiU2VhcmNoU2VjdGlvbiIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJIb21lIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIm1vdmllcyIsInNldE1vdmllcyIsInNlYXJjaEVycm9yIiwic2V0U2VhcmNoRXJyb3IiLCJoYW5kbGVTZWFyY2hJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsIm1vdmllSWQiLCJwdXNoIiwiaGFuZGxlU2VhcmNoIiwicmVzcG9uc2UiLCJ0cmltIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX09NREJfQVBJX0tFWSIsImRhdGEiLCJTZWFyY2giLCJtb3ZpZXNXaXRoSWRzIiwibWFwIiwibW92aWUiLCJpbWRiSUQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImh0dHAtZXF1aXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsImgxIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJ0eXBlIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwic2VjdGlvbiIsIlRpdGxlIiwiVHlwZSIsIlllYXIiLCJQb3N0ZXIiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});