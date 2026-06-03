module.exports = [
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

//# sourceMappingURL=Documents_GitHub_PanamaxCoffee_app_ClearHash_ts_13y_auu._.js.map