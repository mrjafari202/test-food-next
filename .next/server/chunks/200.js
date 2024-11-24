exports.id = 200;
exports.ids = [200];
exports.modules = {

/***/ 6739:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Card_container__ZixcK",
	"details": "Card_details__CIUKV",
	"price": "Card_price__Vp1Ef",
	"discount": "Card_discount__wfDEY",
	"badge": "Card_badge__Kij8r"
};


/***/ }),

/***/ 2200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6739);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4334);
/* harmony import */ var _icons_Dollar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8280);





function Card(props) {
    const { id , name , price , details , discount  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: `/images/${id}.jpeg`,
                alt: name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().details),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Location__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                            details[0].Cuisine
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().price),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Dollar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    discount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().discount),
                        children: [
                            price * (100 - discount) / 100,
                            "$"
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            price,
                            "$"
                        ]
                    }),
                    discount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),
                        children: [
                            discount,
                            "%"
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/menu/${id}`,
                children: "See Details"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ })

};
;