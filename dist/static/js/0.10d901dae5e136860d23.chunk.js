(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/view/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.5@babel-loader/lib!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/view/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'index',
  data: function data() {
    return {};
  },

  methods: {
    routerToCase: function routerToCase() {
      this.$router.push({ path: '/case' });
    }
  }
});

/***/ }),

/***/ "./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/view/index.vue?vue&type=template&id=4f795181&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./src/view/index.vue?vue&type=template&id=4f795181& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "index", on: { click: _vm.routerToCase } }, [
    _vm._v("\n  我是index\n  "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "index-image" }, [
      _c("img", { attrs: { src: "/static/image/1212.png", alt: "" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./src/view/index.vue":
/*!****************************!*\
  !*** ./src/view/index.vue ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4f795181___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4f795181& */ "./src/view/index.vue?vue&type=template&id=4f795181&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/view/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.7.0@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4f795181___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4f795181___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/view/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/view/index.vue?vue&type=script&lang=js&":
/*!*****************************************************!*\
  !*** ./src/view/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.5@babel-loader/lib!../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/view/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/view/index.vue?vue&type=template&id=4f795181&":
/*!***********************************************************!*\
  !*** ./src/view/index.vue?vue&type=template&id=4f795181& ***!
  \***********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4f795181___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.7.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4f795181& */ "./node_modules/_vue-loader@15.7.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.0@vue-loader/lib/index.js?!./src/view/index.vue?vue&type=template&id=4f795181&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4f795181___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4f795181___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=0.10d901dae5e136860d23.chunk.js.map