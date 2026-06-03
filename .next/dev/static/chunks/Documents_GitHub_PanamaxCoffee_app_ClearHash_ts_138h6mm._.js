(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/PanamaxCoffee/app/ClearHash.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClearHash",
    ()=>ClearHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ClearHash() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClearHash.useEffect": ()=>{
            const clear = {
                "ClearHash.useEffect.clear": ()=>{
                    if (window.location.hash) {
                        history.replaceState(null, "", window.location.pathname + window.location.search);
                    }
                }
            }["ClearHash.useEffect.clear"];
            const onLoad = {
                "ClearHash.useEffect.onLoad": ()=>setTimeout(clear, 0)
            }["ClearHash.useEffect.onLoad"];
            const onPageShow = {
                "ClearHash.useEffect.onPageShow": ()=>setTimeout(clear, 0)
            }["ClearHash.useEffect.onPageShow"];
            window.addEventListener("load", onLoad);
            window.addEventListener("pageshow", onPageShow);
            return ({
                "ClearHash.useEffect": ()=>{
                    window.removeEventListener("load", onLoad);
                    window.removeEventListener("pageshow", onPageShow);
                }
            })["ClearHash.useEffect"];
        }
    }["ClearHash.useEffect"], []);
    return null;
}
_s(ClearHash, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ClearHash;
var _c;
__turbopack_context__.k.register(_c, "ClearHash");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_PanamaxCoffee_app_ClearHash_ts_138h6mm._.js.map