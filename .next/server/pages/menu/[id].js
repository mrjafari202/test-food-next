(() => {
var exports = {};
exports.id = 980;
exports.ids = [980];
exports.modules = {

/***/ 7794:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "DetailsPage_container__o9R6h",
	"banner": "DetailsPage_banner__dDQVJ",
	"location": "DetailsPage_location__1eWD9",
	"discount": "DetailsPage_discount__rUNzN",
	"introduction": "DetailsPage_introduction__u6dUF",
	"details": "DetailsPage_details__TJErk",
	"recipe": "DetailsPage_recipe__fknFS",
	"odd": "DetailsPage_odd__GrAGg",
	"even": "DetailsPage_even__uKwA5"
};


/***/ }),

/***/ 9675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/templates/DetailsPage.module.css
var DetailsPage_module = __webpack_require__(7794);
var DetailsPage_module_default = /*#__PURE__*/__webpack_require__.n(DetailsPage_module);
// EXTERNAL MODULE: ./components/icons/Location.js
var Location = __webpack_require__(4334);
// EXTERNAL MODULE: ./components/icons/Dollar.js
var Dollar = __webpack_require__(8280);
;// CONCATENATED MODULE: ./components/templates/DetailsPage.js




function DetailsPage(props) {
    const { id , name , price , discount , introduction , details , ingredients , recipe  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (DetailsPage_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Details"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (DetailsPage_module_default()).subContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (DetailsPage_module_default()).banner,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: `/images/${id}.jpeg`,
                                alt: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        children: name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (DetailsPage_module_default()).location,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Location/* default */.Z, {}),
                                            details[0].Cuisine
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (DetailsPage_module_default()).price,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Dollar/* default */.Z, {}),
                                            discount ? price * (100 - discount) / 100 : price,
                                            "$"
                                        ]
                                    }),
                                    discount ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (DetailsPage_module_default()).discount,
                                        children: [
                                            discount,
                                            "$ OFF"
                                        ]
                                    }) : null
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (DetailsPage_module_default()).introduction,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: introduction
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (DetailsPage_module_default()).details,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Details"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: details.map((detail, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    Object.keys(detail)[0],
                                                    ": "
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: Object.values(detail)[0]
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (DetailsPage_module_default()).details,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Ingredients"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: ingredients.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: item
                                        })
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (DetailsPage_module_default()).recipe,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Recipe"
                            }),
                            recipe.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: index % 2 ? (DetailsPage_module_default()).odd : (DetailsPage_module_default()).even,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: index + 1
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: item
                                        })
                                    ]
                                }, index))
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Add to Cart"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const templates_DetailsPage = (DetailsPage);

;// CONCATENATED MODULE: ./pages/menu/[id].js



function Details({ data  }) {
    const router = (0,router_.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
            children: "Loading Page..."
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(templates_DetailsPage, {
        ...data
    });
}
/* harmony default export */ const _id_ = (Details);
async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const json = await res.json();
    const data = json.slice(0, 10);
    const paths = data.map((food)=>({
            params: {
                id: food.id.toString()
            }
        }));
    return {
        paths,
        fallback: true
    };
}
async function getStaticProps(context) {
    const { params: { id  }  } = context;
    const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
    const data = await res.json();
    if (!data.id) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data
        },
        revalidate: +process.env.REVALIDATE
    };
}


/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [725], () => (__webpack_exec__(9675)));
module.exports = __webpack_exports__;

})();