(() => {
var exports = {};
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 7126:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CategoriesPage_container__mCcfe",
	"select": "CategoriesPage_select___SYR_",
	"cards": "CategoriesPage_cards__Dlb9n"
};


/***/ }),

/***/ 3619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ categories),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/modules/Card.js
var Card = __webpack_require__(2200);
// EXTERNAL MODULE: ./components/templates/CategoriesPage.module.css
var CategoriesPage_module = __webpack_require__(7126);
var CategoriesPage_module_default = /*#__PURE__*/__webpack_require__.n(CategoriesPage_module);
;// CONCATENATED MODULE: ./components/templates/CategoriesPage.js





function CategoriesPage({ data  }) {
    const router = (0,router_.useRouter)();
    const [query, setQuery] = (0,external_react_.useState)({
        difficulty: "",
        time: ""
    });
    (0,external_react_.useEffect)(()=>{
        const { difficulty , time  } = router.query;
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({
                difficulty,
                time
            });
        }
    }, []);
    const changeHandler = (e)=>{
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        });
    };
    const searchHandler = ()=>{
        router.push({
            pathname: "/categories",
            query
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CategoriesPage_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Categories"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CategoriesPage_module_default()).subContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CategoriesPage_module_default()).select,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                value: query.difficulty,
                                name: "difficulty",
                                onChange: changeHandler,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "",
                                        children: "Difficulty"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Easy",
                                        children: "Easy"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Medium",
                                        children: "Medium"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "Hard",
                                        children: "Hard"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                value: query.time,
                                name: "time",
                                onChange: changeHandler,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "",
                                        children: "Cooking Time"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "more",
                                        children: "More than 30 min"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                        value: "less",
                                        children: "Less than 30 min"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: searchHandler,
                                children: "Search"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CategoriesPage_module_default()).cards,
                        children: [
                            !data.length ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/search.png",
                                alt: "Category"
                            }) : null,
                            data.map((food)=>/*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
                                    ...food
                                }, food.id))
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const templates_CategoriesPage = (CategoriesPage);

;// CONCATENATED MODULE: ./pages/categories/index.js


function Categories({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(templates_CategoriesPage, {
        data: data
    });
}
/* harmony default export */ const categories = (Categories);
async function getServerSideProps(context) {
    const { query: { difficulty , time  }  } = context;
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const data = await res.json();
    const filteredData = data.filter((item)=>{
        const difficultyResult = item.details.filter((detail)=>detail.Difficulty && detail.Difficulty === difficulty);
        const timeResult = item.details.filter((detail)=>{
            const cookingTime = detail["Cooking Time"] || "";
            const [timeDetail] = cookingTime.split(" ");
            if (time === "less" && timeDetail && +timeDetail <= 30) {
                return detail;
            } else if (time === "more" && +timeDetail > 30) {
                return detail;
            }
        });
        if (time && difficulty && timeResult.length && difficultyResult.length) {
            return item;
        } else if (!time && difficulty && difficultyResult.length) {
            return item;
        } else if (time && !difficulty && timeResult.length) {
            return item;
        }
    });
    return {
        props: {
            data: filteredData
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,725,200], () => (__webpack_exec__(3619)));
module.exports = __webpack_exports__;

})();