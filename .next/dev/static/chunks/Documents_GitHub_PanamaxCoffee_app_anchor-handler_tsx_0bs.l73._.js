(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/PanamaxCoffee/app/anchor-handler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnchorHandler",
    ()=>AnchorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/PanamaxCoffee/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function AnchorHandler() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$PanamaxCoffee$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnchorHandler.useEffect": ()=>{
            const handleScroll = {
                "AnchorHandler.useEffect.handleScroll": (e)=>{
                    const target = e.target.closest('a[data-scroll-to]');
                    if (!target) return;
                    const targetId = target.getAttribute('data-scroll-to');
                    if (!targetId) return;
                    e.preventDefault();
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            }["AnchorHandler.useEffect.handleScroll"];
            // Handle click events
            document.addEventListener('click', handleScroll, true);
            // Handle touch events for iOS
            document.addEventListener('touchend', handleScroll, true);
            return ({
                "AnchorHandler.useEffect": ()=>{
                    document.removeEventListener('click', handleScroll, true);
                    document.removeEventListener('touchend', handleScroll, true);
                }
            })["AnchorHandler.useEffect"];
        }
    }["AnchorHandler.useEffect"], []);
    return null;
}
_s(AnchorHandler, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AnchorHandler;
var _c;
__turbopack_context__.k.register(_c, "AnchorHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_PanamaxCoffee_app_anchor-handler_tsx_0bs.l73._.js.map