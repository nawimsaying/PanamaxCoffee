module.exports = [
"[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "header-module__RALKoq__active",
  "burger": "header-module__RALKoq__burger",
  "button_group": "header-module__RALKoq__button_group",
  "hamburger_mobile": "header-module__RALKoq__hamburger_mobile",
  "header": "header-module__RALKoq__header",
  "logo": "header-module__RALKoq__logo",
  "mobile_button": "header-module__RALKoq__mobile_button",
  "mobile_header_container": "header-module__RALKoq__mobile_header_container",
  "mobile_link": "header-module__RALKoq__mobile_link",
  "mobile_menu": "header-module__RALKoq__mobile_menu",
  "mobile_nav": "header-module__RALKoq__mobile_nav",
  "open": "header-module__RALKoq__open",
  "padding": "header-module__RALKoq__padding",
});
}),
"[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/hamburger-react/dist-esm/Fade.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Header() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const body = document.body;
        const html = document.documentElement;
        return ()=>{
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.overflow = "";
            html.style.overflow = "";
        };
    }, [
        isOpen,
        scrollY
    ]);
    const ScrollTo = (id)=>{
        setIsOpen(false);
        setTimeout(()=>{
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 0;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].padding,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo.png",
                        alt: "Panamax Logo",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button_group,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                onClick: ()=>ScrollTo("products"),
                                children: "АССОРТИМЕНТ"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                onClick: ()=>ScrollTo("about"),
                                children: "О НАС"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                onClick: ()=>ScrollTo("contact"),
                                children: "КОНТАКТЫ"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>ScrollTo("contact"),
                                className: "header-button",
                                children: "Заказать зерна"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hamburger_mobile,
                        onClick: ()=>setIsOpen(!isOpen),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$hamburger$2d$react$2f$dist$2d$esm$2f$Fade$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fade"], {
                            toggled: isOpen,
                            toggle: setIsOpen
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobile_header_container} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].open : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobile_nav,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>ScrollTo("products"),
                            children: "АССОРТИМЕНТ"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>ScrollTo("about"),
                            children: "О НАС"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            onClick: ()=>ScrollTo("contact"),
                            children: "КОНТАКТЫ"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "footer": "footer-module__mMcBmG__footer",
  "mono": "footer-module__mMcBmG__mono",
  "padding": "footer-module__mMcBmG__padding",
  "section": "footer-module__mMcBmG__section",
  "socials": "footer-module__mMcBmG__socials",
  "title": "footer-module__mMcBmG__title",
});
}),
"[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.module.css [app-ssr] (css module)");
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].padding,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "АДРЕС"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 8,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mono,
                            children: "г. Волгоград, ул. 8-й Воздушной Армии, д. 11Б"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "ТЕЛЕФОН"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mono,
                            children: "+7 (995) 696-62-25"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "ПОЧТА"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mono,
                            children: "test@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: "НАШИ СОЦ. СЕТИ"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socials,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/tg.svg",
                                    alt: "Telegram",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social_icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/vk.svg",
                                    alt: "VK",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social_icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/wapp.svg",
                                    alt: "WhatsApp",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social_icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "about-btn": "ui-module__PxwlUG__about-btn",
  "about_container": "ui-module__PxwlUG__about_container",
  "about_flex": "ui-module__PxwlUG__about_flex",
  "about_left": "ui-module__PxwlUG__about_left",
  "about_right": "ui-module__PxwlUG__about_right",
  "about_text": "ui-module__PxwlUG__about_text",
  "block": "ui-module__PxwlUG__block",
  "card": "ui-module__PxwlUG__card",
  "card_bottom": "ui-module__PxwlUG__card_bottom",
  "card_button": "ui-module__PxwlUG__card_button",
  "card_desc": "ui-module__PxwlUG__card_desc",
  "card_flex": "ui-module__PxwlUG__card_flex",
  "card_img": "ui-module__PxwlUG__card_img",
  "card_specifications": "ui-module__PxwlUG__card_specifications",
  "card_title": "ui-module__PxwlUG__card_title",
  "card_top": "ui-module__PxwlUG__card_top",
  "card_type": "ui-module__PxwlUG__card_type",
  "contact-section": "ui-module__PxwlUG__contact-section",
  "contact_container": "ui-module__PxwlUG__contact_container",
  "contact_desc": "ui-module__PxwlUG__contact_desc",
  "contact_flex": "ui-module__PxwlUG__contact_flex",
  "contact_flex_top": "ui-module__PxwlUG__contact_flex_top",
  "divider": "ui-module__PxwlUG__divider",
  "error_text": "ui-module__PxwlUG__error_text",
  "h1": "ui-module__PxwlUG__h1",
  "h2": "ui-module__PxwlUG__h2",
  "h3": "ui-module__PxwlUG__h3",
  "header-button": "ui-module__PxwlUG__header-button",
  "hero_block_sep_vert_left": "ui-module__PxwlUG__hero_block_sep_vert_left",
  "hero_block_sep_vert_right": "ui-module__PxwlUG__hero_block_sep_vert_right",
  "hero_container": "ui-module__PxwlUG__hero_container",
  "hero_img": "ui-module__PxwlUG__hero_img",
  "hero_img_1": "ui-module__PxwlUG__hero_img_1",
  "hero_img_2": "ui-module__PxwlUG__hero_img_2",
  "hero_img_right": "ui-module__PxwlUG__hero_img_right",
  "hero_line": "ui-module__PxwlUG__hero_line",
  "hero_line_p": "ui-module__PxwlUG__hero_line_p",
  "hero_title": "ui-module__PxwlUG__hero_title",
  "hero_title_flex": "ui-module__PxwlUG__hero_title_flex",
  "img": "ui-module__PxwlUG__img",
  "img_about": "ui-module__PxwlUG__img_about",
  "img_container_1": "ui-module__PxwlUG__img_container_1",
  "input_div": "ui-module__PxwlUG__input_div",
  "main_padding": "ui-module__PxwlUG__main_padding",
  "marquee": "ui-module__PxwlUG__marquee",
  "marquee_track": "ui-module__PxwlUG__marquee_track",
  "p": "ui-module__PxwlUG__p",
  "products_container": "ui-module__PxwlUG__products_container",
  "products_list": "ui-module__PxwlUG__products_list",
  "social": "ui-module__PxwlUG__social",
  "socials": "ui-module__PxwlUG__socials",
  "span": "ui-module__PxwlUG__span",
});
}),
"[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/widgets/header/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/widgets/footer/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
;
function HomePage() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [website, setWebsite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const handleSubmit = async ()=>{
        const newErrors = {
            name: "",
            email: "",
            message: ""
        };
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedMessage = message.trim();
        // name validation
        if (!trimmedName) {
            newErrors.name = "Введите имя";
        } else if (trimmedName.length < 2) {
            newErrors.name = "Имя слишком короткое";
        }
        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!trimmedEmail) {
            newErrors.email = "Введите email";
        } else if (!emailRegex.test(trimmedEmail)) {
            newErrors.email = "Некорректный email";
        }
        setErrors(newErrors);
        if (newErrors.name || newErrors.email) {
            return;
        }
        try {
            setLoading(true);
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    website
                })
            });
            const data = await response.json();
            if (data.success) {
                alert("Сообщение отправлено!");
                setName("");
                setEmail("");
                setMessage("");
                setErrors({
                    name: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            console.error(error);
            alert("Ошибка отправки");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const body = document.body;
        const html = document.documentElement;
        if (isOpen) {
            // Сохраняем текущий скролл
            const y = window.scrollY;
            setScrollY(y);
            // Фиксируем страницу
            body.style.overflow = "hidden";
            body.style.touchAction = "none";
        } else {
            // Разблокируем страницу
            body.style.overflow = "";
            body.style.touchAction = "";
            // Возвращаем страницу в сохраненную позицию
            window.scrollTo({
                top: scrollY,
                behavior: 'auto'
            });
        }
        return ()=>{
            // Очистка стилей при размонтировании компонента
            body.style.position = '';
            body.style.top = '';
            body.style.left = '';
            body.style.right = '';
            body.style.overflow = '';
            html.style.overflow = '';
        };
    }, [
        isOpen
    ]);
    const ScrollTo = (id)=>{
        setIsOpen(false); // Закрываем мобильное меню
        // Ждем завершения анимации закрытия меню
        setTimeout(()=>{
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 0; // Высота заголовка в пикселях
                // Используем scrollIntoView для надежной прокрутки
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Дополнительно корректируем позицию, если есть смещение
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 200); // Задержка в 400 мс соответствует времени анимации в CSS
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$header$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_container,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_block_sep_vert_left,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_img_1,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].img,
                                            src: "/hero-1.webp",
                                            alt: "Panamax Coffee",
                                            width: 800,
                                            height: 600
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 165,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                        lineNumber: 164,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marquee,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marquee_track,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line_p,
                                                        children: "panamax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/coffee.png",
                                                        alt: "Panamax Coffee logo",
                                                        width: 46,
                                                        height: 66,
                                                        style: {
                                                            objectFit: "contain",
                                                            marginRight: '10px',
                                                            marginLeft: '10px',
                                                            scale: '1.2'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line_p,
                                                        children: "panamax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/coffee.png",
                                                        alt: "Panamax Coffee logo",
                                                        width: 46,
                                                        height: 66,
                                                        style: {
                                                            objectFit: "contain",
                                                            marginRight: '10px',
                                                            marginLeft: '10px',
                                                            scale: '1.2'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line_p,
                                                        children: "panamax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/coffee.png",
                                                        alt: "Panamax Coffee logo",
                                                        width: 46,
                                                        height: 66,
                                                        style: {
                                                            objectFit: "contain",
                                                            marginRight: '10px',
                                                            marginLeft: '10px',
                                                            scale: '1.2'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line_p,
                                                        children: "panamax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/coffee.png",
                                                        alt: "Panamax Coffee logo",
                                                        width: 46,
                                                        height: 66,
                                                        style: {
                                                            objectFit: "contain",
                                                            marginRight: '10px',
                                                            marginLeft: '10px',
                                                            scale: '1.2'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line_p,
                                                        children: "panamax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/coffee.png",
                                                        alt: "Panamax Coffee logo",
                                                        width: 46,
                                                        height: 66,
                                                        style: {
                                                            objectFit: "contain",
                                                            marginRight: '10px',
                                                            marginLeft: '10px',
                                                            scale: '1.2'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line_p,
                                                        children: "panamax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/coffee.png",
                                                        alt: "Panamax Coffee logo",
                                                        width: 46,
                                                        height: 66,
                                                        style: {
                                                            objectFit: "contain",
                                                            marginRight: '10px',
                                                            marginLeft: '10px',
                                                            scale: '1.2'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_line_p,
                                                        children: "panamax"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/coffee.png",
                                                        alt: "Panamax Coffee logo",
                                                        width: 46,
                                                        height: 66,
                                                        style: {
                                                            objectFit: "contain",
                                                            marginRight: '10px',
                                                            marginLeft: '10px',
                                                            scale: '1.2'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 169,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                        lineNumber: 168,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_img_2,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].img,
                                            src: "/hero-2.webp",
                                            alt: "HPanamax Coffee",
                                            width: 800,
                                            height: 600
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 196,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                        lineNumber: 195,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                lineNumber: 163,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_block_sep_vert_right,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_title_flex,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_title,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].h1,
                                                    children: "Panamax"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].h2,
                                                    children: "coffee roasters"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].p,
                                                    children: [
                                                        "КОФЕЙНЯ • МАГАЗИН КОФЕ • ОБЖАРКА",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 85
                                                        }, this),
                                                        "В ВОЛГОГРАДЕ"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 202,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                        lineNumber: 201,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hero_img_right,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/hero-3.webp",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].img,
                                            alt: "Panamax Coffee",
                                            width: 800,
                                            height: 600
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 213,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                        lineNumber: 212,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                lineNumber: 200,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                        lineNumber: 162,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].products_container,
                        id: "products",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main_padding,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].h3,
                                    children: "АССОРТИМЕНТ"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                    lineNumber: 220,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].products_list,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_top,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_img,
                                                        src: "/product_1.png",
                                                        alt: "Фильтр-пакеты Гондурас Ксинакла натуральная",
                                                        width: 800,
                                                        height: 600,
                                                        style: {
                                                            objectFit: 'contain'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_bottom,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_title,
                                                            children: "Фильтр-пакеты Гондурас Ксинакла натуральная"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_type,
                                                            children: "натуральный"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_desc,
                                                            children: "Сладкий кофе со вкусом цитрусов и яблочного пирога"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_flex,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_specifications,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "250 гр"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 237,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "1000 гр"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 238,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "1259 руб"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 242,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "3778 руб"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 243,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>ScrollTo("contact"),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_button,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/Arrow/Arrow_Right_LG.svg",
                                                                        alt: "Заказать",
                                                                        style: {
                                                                            margin: 'auto'
                                                                        },
                                                                        width: 36,
                                                                        height: 36
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 223,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_top,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_img,
                                                        width: 800,
                                                        height: 600,
                                                        src: "/product_1.png",
                                                        alt: "Фильтр-пакеты Гондурас Ксинакла натуральная",
                                                        style: {
                                                            objectFit: 'contain'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_bottom,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_title,
                                                            children: "Фильтр-пакеты Гондурас Ксинакла натуральная"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_type,
                                                            children: "натуральный"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_desc,
                                                            children: "Сладкий кофе со вкусом цитрусов и яблочного пирога"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_flex,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_specifications,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "250 гр"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 268,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "1000 гр"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 269,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "1259 руб"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 273,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "3778 руб"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 274,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                            lineNumber: 272,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                    lineNumber: 266,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>ScrollTo("contact"),
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_button,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/Arrow/Arrow_Right_LG.svg",
                                                                        alt: "Заказать",
                                                                        style: {
                                                                            margin: 'auto'
                                                                        },
                                                                        width: 36,
                                                                        height: 36
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 254,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_top,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_img,
                                                        src: "/product_1.png",
                                                        alt: "Фильтр-пакеты Гондурас Ксинакла натуральная",
                                                        width: 800,
                                                        height: 600,
                                                        style: {
                                                            objectFit: 'contain'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 33
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_bottom,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_title,
                                                            children: "Фильтр-пакеты Гондурас Ксинакла натуральная"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_type,
                                                            children: "натуральный"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_desc,
                                                            children: "Сладкий кофе со вкусом цитрусов и яблочного пирога"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_flex,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_specifications,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "250 гр"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 299,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "1000 гр"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 300,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                            lineNumber: 298,
                                                                            columnNumber: 41
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "1259 руб"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 304,
                                                                                    columnNumber: 45
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    children: "3778 руб"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                                    lineNumber: 305,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                            lineNumber: 303,
                                                                            columnNumber: 41
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                    lineNumber: 297,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card_button,
                                                                    onClick: ()=>ScrollTo("contact"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/Arrow/Arrow_Right_LG.svg",
                                                                        alt: "Заказать",
                                                                        style: {
                                                                            margin: 'auto'
                                                                        },
                                                                        width: 36,
                                                                        height: 36
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 285,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                    lineNumber: 222,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                            lineNumber: 219,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                        lineNumber: 218,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                        id: "about"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                        lineNumber: 319,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].about_container,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main_padding,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].about_flex,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].about_left,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].h3,
                                                style: {
                                                    margin: '0'
                                                },
                                                children: "О НАС"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                lineNumber: 325,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].about_text,
                                                children: "Panamax Coffee — это не просто кофейня в Волгограде, а место, где кофе раскрывается во всей полноте вкуса. Мы сами обжариваем зёрна, поэтому в вашей чашке всегда свежий и ароматный напиток."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                lineNumber: 327,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].about_text,
                                                children: "Наша команда — это эксперты, которые подберут для вас идеальный вариант: от классического эспрессо до фильтр-кофе или авторских рецептов. Мы радуем гостей не только кофе, но и уютной атмосферой, а также неизменно вежливым обслуживанием, за что нас ценят и выбирают снова и снова."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                lineNumber: 329,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>ScrollTo("contact"),
                                                className: "header-button about-btn",
                                                children: "Заказать зерна"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                lineNumber: 331,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                        lineNumber: 324,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].about_right,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].img_about,
                                            src: "/about.webp",
                                            alt: "Panamax About",
                                            width: 800,
                                            height: 600
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 337,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                        lineNumber: 336,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                lineNumber: 323,
                                columnNumber: 21
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                            lineNumber: 322,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                        lineNumber: 321,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].block,
                        id: "contact"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                        lineNumber: 343,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contact_container,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main_padding,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].h3,
                                    children: [
                                        "ОСТАВЬТЕ ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].span,
                                            children: "ЗАЯВКУ"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 347,
                                            columnNumber: 56
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 347,
                                            columnNumber: 99
                                        }, this),
                                        "И МЫ С ВАМИ СВЯЖЕМСЯ"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                    lineNumber: 347,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contact_desc,
                                    children: "(ИЛИ НАПИШИТЕ НАМ В СОЦ. СЕТЯХ)"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                    lineNumber: 349,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socials,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social,
                                            src: "/wapp.svg",
                                            alt: "whatsapp",
                                            width: 800,
                                            height: 600
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 352,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social,
                                            src: "/tg.svg",
                                            alt: "telegram",
                                            width: 800,
                                            height: 600
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 353,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].social,
                                            src: "/vk.svg",
                                            alt: "vk",
                                            width: 800,
                                            height: 600
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 354,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                    lineNumber: 351,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contact_flex,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contact_flex_top,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input_div,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "contact-input",
                                                            placeholder: "ВАШЕ ИМЯ",
                                                            value: name,
                                                            onChange: (e)=>{
                                                                setName(e.target.value);
                                                                if (errors.name) {
                                                                    setErrors((prev)=>({
                                                                            ...prev,
                                                                            name: ""
                                                                        }));
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 33
                                                        }, this),
                                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error_text,
                                                            children: errors.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 377,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input_div,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "contact-input",
                                                            placeholder: "ВАШ EMAIL",
                                                            value: email,
                                                            onChange: (e)=>{
                                                                setEmail(e.target.value);
                                                                if (errors.email) {
                                                                    setErrors((prev)=>({
                                                                            ...prev,
                                                                            email: ""
                                                                        }));
                                                                }
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 33
                                                        }, this),
                                                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error_text,
                                                            children: errors.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                            lineNumber: 401,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: website,
                                                    onChange: (e)=>setWebsite(e.target.value),
                                                    autoComplete: "new-password",
                                                    tabIndex: -1,
                                                    style: {
                                                        position: "absolute",
                                                        left: "-9999px",
                                                        opacity: 0,
                                                        pointerEvents: "none"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 358,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "contact-input message-textarea",
                                                    placeholder: "СООБЩЕНИЕ...",
                                                    value: message,
                                                    onChange: (e)=>{
                                                        setMessage(e.target.value);
                                                        if (errors.message) {
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    message: ""
                                                                }));
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 29
                                                }, this),
                                                errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$features$2f$home$2f$ui$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error_text,
                                                    children: errors.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                            lineNumber: 422,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                    lineNumber: 357,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "header-button send-form-btn",
                                    onClick: handleSubmit,
                                    disabled: loading,
                                    children: loading ? "Отправка..." : "Отправить"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                                    lineNumber: 447,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                            lineNumber: 346,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                        lineNumber: 345,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$widgets$2f$footer$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/Documents/GitHub/PanamaxCoffee/features/home/ui.tsx",
                lineNumber: 458,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/GitHub/PanamaxCoffee/app/ClearHash.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClearHash",
    ()=>ClearHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function ClearHash() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const clear = ()=>{
            if (window.location.hash) {
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }
        };
        const onLoad = ()=>setTimeout(clear, 0);
        const onPageShow = ()=>setTimeout(clear, 0);
        window.addEventListener("load", onLoad);
        window.addEventListener("pageshow", onPageShow);
        return ()=>{
            window.removeEventListener("load", onLoad);
            window.removeEventListener("pageshow", onPageShow);
        };
    }, []);
    return null;
}
}),
];

//# sourceMappingURL=Documents_GitHub_PanamaxCoffee_04472.b._.js.map