"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_DEVELOPER_Desktop_NextJS_Tiles_Web_next_js_tiles_web_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\DEVELOPER\\\\Desktop\\\\NextJS_Tiles_Web\\\\next_js_tiles_web\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_DEVELOPER_Desktop_NextJS_Tiles_Web_next_js_tiles_web_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNERVZFTE9QRVIlNUNEZXNrdG9wJTVDTmV4dEpTX1RpbGVzX1dlYiU1Q25leHRfanNfdGlsZXNfd2ViJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNERVZFTE9QRVIlNUNEZXNrdG9wJTVDTmV4dEpTX1RpbGVzX1dlYiU1Q25leHRfanNfdGlsZXNfd2ViJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMyRDtBQUN4STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1c2lvbi1zdGFydGVyLz9kMjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXERFVkVMT1BFUlxcXFxEZXNrdG9wXFxcXE5leHRKU19UaWxlc19XZWJcXFxcbmV4dF9qc190aWxlc193ZWJcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcREVWRUxPUEVSXFxcXERlc2t0b3BcXFxcTmV4dEpTX1RpbGVzX1dlYlxcXFxuZXh0X2pzX3RpbGVzX3dlYlxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNrQjtBQUVuRCxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0Msa0RBQVdBO0FBRU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdXNpb24tc3RhcnRlci8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2F1dGhcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/User */ \"(rsc)/./lib/models/User.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                try {\n                    await (0,_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n                        email: credentials.email,\n                        isActive: true,\n                        role: \"admin\"\n                    });\n                    if (!user) {\n                        return null;\n                    }\n                    const isPasswordValid = await user.comparePassword(credentials.password);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    // Update last login\n                    await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndUpdate(user._id, {\n                        lastLogin: new Date()\n                    });\n                    return {\n                        id: user._id.toString(),\n                        email: user.email,\n                        name: user.name,\n                        role: user.role\n                    };\n                } catch (error) {\n                    console.error(\"Authentication error:\", error);\n                    return null;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.sub;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/admin/login\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2tFO0FBQ2hDO0FBQ0Q7QUFFMUIsTUFBTUcsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEosMkVBQW1CQSxDQUFDO1lBQ2xCSyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQVE7Z0JBQ3ZDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVU7b0JBQ2pELE9BQU87Z0JBQ1Q7Z0JBRUEsSUFBSTtvQkFDRixNQUFNVCxvREFBU0E7b0JBRWYsTUFBTVcsT0FBTyxNQUFNVixvREFBSUEsQ0FBQ1csT0FBTyxDQUFDO3dCQUM5Qk4sT0FBT0QsWUFBWUMsS0FBSzt3QkFDeEJPLFVBQVU7d0JBQ1ZDLE1BQU07b0JBQ1I7b0JBRUEsSUFBSSxDQUFDSCxNQUFNO3dCQUNULE9BQU87b0JBQ1Q7b0JBRUEsTUFBTUksa0JBQWtCLE1BQU1KLEtBQUtLLGVBQWUsQ0FDaERYLFlBQVlJLFFBQVE7b0JBR3RCLElBQUksQ0FBQ00saUJBQWlCO3dCQUNwQixPQUFPO29CQUNUO29CQUVBLG9CQUFvQjtvQkFDcEIsTUFBTWQsb0RBQUlBLENBQUNnQixpQkFBaUIsQ0FBQ04sS0FBS08sR0FBRyxFQUFFO3dCQUFFQyxXQUFXLElBQUlDO29CQUFPO29CQUUvRCxPQUFPO3dCQUNMQyxJQUFJVixLQUFLTyxHQUFHLENBQUNJLFFBQVE7d0JBQ3JCaEIsT0FBT0ssS0FBS0wsS0FBSzt3QkFDakJGLE1BQU1PLEtBQUtQLElBQUk7d0JBQ2ZVLE1BQU1ILEtBQUtHLElBQUk7b0JBQ2pCO2dCQUNGLEVBQUUsT0FBT1MsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7b0JBQ3ZDLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDREUsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFbEIsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1JrQixNQUFNZixJQUFJLEdBQUdILEtBQUtHLElBQUk7WUFDeEI7WUFDQSxPQUFPZTtRQUNUO1FBQ0EsTUFBTUosU0FBUSxFQUFFQSxPQUFPLEVBQUVJLEtBQUssRUFBRTtZQUM5QixJQUFJQSxPQUFPO2dCQUNUSixRQUFRZCxJQUFJLENBQUNVLEVBQUUsR0FBR1EsTUFBTUMsR0FBRztnQkFDM0JMLFFBQVFkLElBQUksQ0FBQ0csSUFBSSxHQUFHZSxNQUFNZixJQUFJO1lBQ2hDO1lBQ0EsT0FBT1c7UUFDVDtJQUNGO0lBQ0FNLE9BQU87UUFDTEMsUUFBUTtJQUNWO0lBQ0FDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVzaW9uLXN0YXJ0ZXIvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi9tb25nb2RiXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuL21vZGVscy9Vc2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xyXG4gICAgICAgICAgICBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICByb2xlOiBcImFkbWluXCIsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgdXNlci5jb21wYXJlUGFzc3dvcmQoXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBVcGRhdGUgbGFzdCBsb2dpblxyXG4gICAgICAgICAgYXdhaXQgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh1c2VyLl9pZCwgeyBsYXN0TG9naW46IG5ldyBEYXRlKCkgfSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoZW50aWNhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YiE7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlIGFzIHN0cmluZztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiBcIi9hZG1pbi9sb2dpblwiLFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdERCIiwiVXNlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXIiLCJmaW5kT25lIiwiaXNBY3RpdmUiLCJyb2xlIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZVBhc3N3b3JkIiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJfaWQiLCJsYXN0TG9naW4iLCJEYXRlIiwiaWQiLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic3ViIiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/models/User.ts":
/*!****************************!*\
  !*** ./lib/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        lowercase: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: true,\n        minlength: 6\n    },\n    name: {\n        type: String,\n        required: true,\n        trim: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"admin\",\n            \"user\"\n        ],\n        default: \"user\"\n    },\n    isActive: {\n        type: Boolean,\n        default: true\n    },\n    lastLogin: {\n        type: Date\n    }\n}, {\n    timestamps: true\n});\n// Hash password before saving\nUserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) return next();\n    try {\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genSalt(12);\n        this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(this.password, salt);\n        next();\n    } catch (error) {\n        next(error);\n    }\n});\n// Method to compare password\nUserSchema.methods.comparePassword = async function(password) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(password, this.password);\n};\n// Remove password from JSON output\nUserSchema.methods.toJSON = function() {\n    const user = this.toObject();\n    delete user.password;\n    return user;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNGO0FBRTlCLE1BQU1FLGFBQWEsSUFBSUYsd0RBQWUsQ0FDcEM7SUFDRUksT0FBTztRQUNMQyxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsV0FBVztRQUNYQyxNQUFNO0lBQ1I7SUFDQUMsVUFBVTtRQUNSTixNQUFNQztRQUNOQyxVQUFVO1FBQ1ZLLFdBQVc7SUFDYjtJQUNBQyxNQUFNO1FBQ0pSLE1BQU1DO1FBQ05DLFVBQVU7UUFDVkcsTUFBTTtJQUNSO0lBQ0FJLE1BQU07UUFDSlQsTUFBTUM7UUFDTlMsTUFBTTtZQUFDO1lBQVM7U0FBTztRQUN2QkMsU0FBUztJQUNYO0lBQ0FDLFVBQVU7UUFDUlosTUFBTWE7UUFDTkYsU0FBUztJQUNYO0lBQ0FHLFdBQVc7UUFDVGQsTUFBTWU7SUFDUjtBQUNGLEdBQ0E7SUFDRUMsWUFBWTtBQUNkO0FBR0YsOEJBQThCO0FBQzlCbkIsV0FBV29CLEdBQUcsQ0FBQyxRQUFRLGVBQWdCQyxJQUFJO0lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxhQUFhLE9BQU9EO0lBRXpDLElBQUk7UUFDRixNQUFNRSxPQUFPLE1BQU14Qix3REFBYyxDQUFDO1FBQ2xDLElBQUksQ0FBQ1UsUUFBUSxHQUFHLE1BQU1WLHFEQUFXLENBQUMsSUFBSSxDQUFDVSxRQUFRLEVBQUVjO1FBQ2pERjtJQUNGLEVBQUUsT0FBT0ssT0FBTztRQUNkTCxLQUFLSztJQUNQO0FBQ0Y7QUFFQSw2QkFBNkI7QUFDN0IxQixXQUFXMkIsT0FBTyxDQUFDQyxlQUFlLEdBQUcsZUFBZ0JuQixRQUFnQjtJQUNuRSxPQUFPVix3REFBYyxDQUFDVSxVQUFVLElBQUksQ0FBQ0EsUUFBUTtBQUMvQztBQUVBLG1DQUFtQztBQUNuQ1QsV0FBVzJCLE9BQU8sQ0FBQ0csTUFBTSxHQUFHO0lBQzFCLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxRQUFRO0lBQzFCLE9BQU9ELEtBQUt0QixRQUFRO0lBQ3BCLE9BQU9zQjtBQUNUO0FBRUEsaUVBQWVqQyx3REFBZSxDQUFDb0MsSUFBSSxJQUFJcEMscURBQWMsQ0FBQyxRQUFRRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnVzaW9uLXN0YXJ0ZXIvLi9saWIvbW9kZWxzL1VzZXIudHM/YjRhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB1bmlxdWU6IHRydWUsXHJcbiAgICAgIGxvd2VyY2FzZTogdHJ1ZSxcclxuICAgICAgdHJpbTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICBtaW5sZW5ndGg6IDYsXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB0cmltOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBlbnVtOiBbXCJhZG1pblwiLCBcInVzZXJcIl0sXHJcbiAgICAgIGRlZmF1bHQ6IFwidXNlclwiLFxyXG4gICAgfSxcclxuICAgIGlzQWN0aXZlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbGFzdExvZ2luOiB7XHJcbiAgICAgIHR5cGU6IERhdGUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9LFxyXG4pO1xyXG5cclxuLy8gSGFzaCBwYXNzd29yZCBiZWZvcmUgc2F2aW5nXHJcblVzZXJTY2hlbWEucHJlKFwic2F2ZVwiLCBhc3luYyBmdW5jdGlvbiAobmV4dCkge1xyXG4gIGlmICghdGhpcy5pc01vZGlmaWVkKFwicGFzc3dvcmRcIikpIHJldHVybiBuZXh0KCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTIpO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xyXG4gICAgbmV4dCgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBuZXh0KGVycm9yIGFzIEVycm9yKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gTWV0aG9kIHRvIGNvbXBhcmUgcGFzc3dvcmRcclxuVXNlclNjaGVtYS5tZXRob2RzLmNvbXBhcmVQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uIChwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkKTtcclxufTtcclxuXHJcbi8vIFJlbW92ZSBwYXNzd29yZCBmcm9tIEpTT04gb3V0cHV0XHJcblVzZXJTY2hlbWEubWV0aG9kcy50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgdXNlciA9IHRoaXMudG9PYmplY3QoKTtcclxuICBkZWxldGUgdXNlci5wYXNzd29yZDtcclxuICByZXR1cm4gdXNlcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiYmNyeXB0IiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwibG93ZXJjYXNlIiwidHJpbSIsInBhc3N3b3JkIiwibWlubGVuZ3RoIiwibmFtZSIsInJvbGUiLCJlbnVtIiwiZGVmYXVsdCIsImlzQWN0aXZlIiwiQm9vbGVhbiIsImxhc3RMb2dpbiIsIkRhdGUiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJzYWx0IiwiZ2VuU2FsdCIsImhhc2giLCJlcnJvciIsIm1ldGhvZHMiLCJjb21wYXJlUGFzc3dvcmQiLCJjb21wYXJlIiwidG9KU09OIiwidXNlciIsInRvT2JqZWN0IiwibW9kZWxzIiwiVXNlciIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/User.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose || {\n    conn: null,\n    promise: null\n};\nif (!global.mongoose) {\n    global.mongoose = cached;\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts);\n    }\n    try {\n        cached.conn = await cached.promise;\n        console.log(\"✅ Connected to MongoDB\");\n    } catch (e) {\n        cached.promise = null;\n        console.error(\"❌ MongoDB connection error:\", e);\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXLElBQUk7QUFFL0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUjtBQUVKO0FBV0EsSUFBSUMsU0FBd0JDLE9BQU9OLFFBQVEsSUFBSTtJQUFFTyxNQUFNO0lBQU1DLFNBQVM7QUFBSztBQUUzRSxJQUFJLENBQUNGLE9BQU9OLFFBQVEsRUFBRTtJQUNwQk0sT0FBT04sUUFBUSxHQUFHSztBQUNwQjtBQUVBLGVBQWVJO0lBQ2IsSUFBSUosT0FBT0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsT0FBT0UsSUFBSTtJQUNwQjtJQUVBLElBQUksQ0FBQ0YsT0FBT0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTO0lBQ2pEO0lBRUEsSUFBSTtRQUNGTCxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztRQUNsQ0ssUUFBUUMsR0FBRyxDQUFDO0lBQ2QsRUFBRSxPQUFPQyxHQUFHO1FBQ1ZWLE9BQU9HLE9BQU8sR0FBRztRQUNqQkssUUFBUUcsS0FBSyxDQUFDLCtCQUErQkQ7UUFDN0MsTUFBTUE7SUFDUjtJQUVBLE9BQU9WLE9BQU9FLElBQUk7QUFDcEI7QUFFQSxpRUFBZUUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1c2lvbi1zdGFydGVyLy4vbGliL21vbmdvZGIudHM/MDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBNT05HT0RCX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJIHx8IFwiXCI7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiLFxyXG4gICk7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNb25nb29zZUNhY2hlIHtcclxuICBjb25uOiB0eXBlb2YgbW9uZ29vc2UgfCBudWxsO1xyXG4gIHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGw7XHJcbn1cclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICB2YXIgbW9uZ29vc2U6IE1vbmdvb3NlQ2FjaGUgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQ6IE1vbmdvb3NlQ2FjaGUgPSBnbG9iYWwubW9uZ29vc2UgfHwgeyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcblxyXG5pZiAoIWdsb2JhbC5tb25nb29zZSkge1xyXG4gIGdsb2JhbC5tb25nb29zZSA9IGNhY2hlZDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cyk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICAgIGNvbnNvbGUubG9nKFwi4pyFIENvbm5lY3RlZCB0byBNb25nb0RCXCIpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOlwiLCBlKTtcclxuICAgIHRocm93IGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEVELOPER%5CDesktop%5CNextJS_Tiles_Web%5Cnext_js_tiles_web&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();