(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$invicta1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/imagenes/invicta1.png.mjs { IMAGE => "[project]/imagenes/invicta1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$invicta2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/imagenes/invicta2.png.mjs { IMAGE => "[project]/imagenes/invicta2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$tecno1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/imagenes/tecno1.png.mjs { IMAGE => "[project]/imagenes/tecno1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$tecno2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/imagenes/tecno2.png.mjs { IMAGE => "[project]/imagenes/tecno2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const images = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$invicta1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$invicta2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$tecno1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$imagenes$2f$tecno2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    }
];
function Slider() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [ishovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const preSlide = ()=>{
        setCurrentIndex((index)=>(index - 1 + images.length) % images.length);
    };
    const nextSlide = ()=>{
        setCurrentIndex((index)=>(index + 1) % images.length);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>{
            if (!ishovered) {
                const interval = setInterval({
                    "Slider.useEffect.interval": ()=>{
                        setCurrentIndex({
                            "Slider.useEffect.interval": (index)=>(index + 1) % images.length
                        }["Slider.useEffect.interval"]);
                    }
                }["Slider.useEffect.interval"], 2000);
                return ({
                    "Slider.useEffect": ()=>{
                        clearInterval(interval);
                    }
                })["Slider.useEffect"];
            }
        }
    }["Slider.useEffect"], [
        ishovered
    ]);
    const handleMouseOver = ()=>{
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mx-auto mt-4 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group relative mx-12 h-[460px] hover:-translate-y-2",
                onMouseOver: handleMouseOver,
                onMouseLeave: handleMouseLeave,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: images[currentIndex].src,
                    alt: `Slider Image ${currentIndex + 1}`,
                    fill: true,
                    className: "cursor-pointer rounded-xl object-cover transition-all duration-500 ease-in-out"
                }, void 0, false, {
                    fileName: "[project]/app/components/slider.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/slider.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Imagen anterior",
                className: "group absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#111927]/70 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#111927] focus:outline-none focus:ring-2 focus:ring-white",
                onClick: preSlide,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "h-5 w-5 text-white/75 transition group-hover:text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/components/slider.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Imagen anterior"
                    }, void 0, false, {
                        fileName: "[project]/app/components/slider.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/slider.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Imagen siguiente",
                className: "group absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#111927]/70 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-[#111927] focus:outline-none focus:ring-2 focus:ring-white",
                onClick: nextSlide,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "h-5 w-5 text-white/75 transition group-hover:text-white"
                    }, void 0, false, {
                        fileName: "[project]/app/components/slider.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Imagen siguiente"
                    }, void 0, false, {
                        fileName: "[project]/app/components/slider.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/slider.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full bg-[#111927]/55 px-3 py-2 backdrop-blur-sm",
                children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-current": index === currentIndex ? "true" : undefined,
                        "aria-label": `Ir a la imagen ${index + 1}`,
                        className: `h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${index === currentIndex ? "w-8 bg-[#beff46]" : "w-2 bg-white/65 hover:bg-white"}`,
                        onClick: ()=>setCurrentIndex(index),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: [
                                "Imagen ",
                                index + 1
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/slider.tsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/components/slider.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/slider.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/slider.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
_s(Slider, "8YYQGNVi7iK45te9q+gMmOjyGw4=");
_c = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/inicio/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart-plus.mjs [app-client] (ecmascript) <export default as ShoppingCartPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Header() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    if (window.scrollY > 40) {
                        setIsScrolled(true);
                    } else {
                        setIsScrolled(false);
                    }
                }
            }["Header.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed bg-[#f3efe6]/70 backdrop-blur-md shadow-sm border-b border-white/20 py-3' : 'relative bg-[#f3efe6] py-5 border-b border-black/10'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-6 md:px-12 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 text-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "font-bold text-lg text-gray-900 inline-block",
                        children: "BlingTime & Perfum"
                    }, void 0, false, {
                        fileName: "[project]/app/inicio/header.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/inicio/header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                !isScrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-semibold text-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/catalogo/reloj",
                            className: "hover:text-amber-700 transition-colors",
                            children: "relojes"
                        }, void 0, false, {
                            fileName: "[project]/app/inicio/header.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/catalogo/perfume",
                            className: "hover:text-amber-700 transition-colors",
                            children: "Perfumes"
                        }, void 0, false, {
                            fileName: "[project]/app/inicio/header.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contacto",
                            className: "hover:text-amber-700 transition-colors",
                            children: "Contactanos"
                        }, void 0, false, {
                            fileName: "[project]/app/inicio/header.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#nosotros",
                            className: "hover:text-amber-700 transition-colors",
                            children: "nosotros"
                        }, void 0, false, {
                            fileName: "[project]/app/inicio/header.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/inicio/header.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex justify-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/catalogo/reloj",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2d$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCartPlus$3e$__["ShoppingCartPlus"], {
                                className: "w-6 h-6 text-gray-900"
                            }, void 0, false, {
                                fileName: "[project]/app/inicio/header.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gray-200/80 text-gray-800 text-xs font-bold px-2 py-0.5 rounded-full",
                                children: "0"
                            }, void 0, false, {
                                fileName: "[project]/app/inicio/header.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/inicio/header.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/inicio/header.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/inicio/header.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/inicio/header.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Header, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/imagenes/invicta1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/invicta1.3n9u13c0xth78.png");}),
"[project]/imagenes/invicta1.png.mjs { IMAGE => \"[project]/imagenes/invicta1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/imagenes/invicta1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42mWPTwvBcBjHx2HNv59MM3LQVsp97SAHc5g/ERcnIaWUI1MSS0mtyEW2Hb2FmYOL8g6Ui5uXIHepn61Y/nyOz/N9er4fBHlhM6BpOsaybBIA4Ed+IUkyrKrqQdf1G8dxXfPGWtoNsrncaCJNH0t1BQVB2KIo6rACwAuC5UbllKqXYLpahANxeMZxPGgFnB53oNCqHOO1PEw2i3C8kC7GywjyUdCeymf6ojK/z9Yy7PSEHYZhrq+SBEGEZEXZaxvtyvN8+8/C1KQoKsowTMLQ9L3nT9gCNFnhFHZdAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/imagenes/invicta2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/invicta2.2gh1dj-nqf7f-.png");}),
"[project]/imagenes/invicta2.png.mjs { IMAGE => \"[project]/imagenes/invicta2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/imagenes/invicta2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$invicta2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 600,
    height: 600,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyElEQVR42mWPTwvBYBzHx/N4xoUc/C/eAKWJKEm5iBxG2lqtlpqyIicXOTiwg3LbaUgKQ3LZwasiXoCHHcT4HH99fn2/X4L4IujzhJPxaMHtcoaIX0gS2Yc9UT3M5Hs+Q40sL0xCNk2V1+rkomsKFlh6AwCAn2+EkMDVdgLP4E5LwN0mp9sgJE0Cz9AaU6exJPK43ageIYTIFJHLJCrb+fR63isPkS0ugdUKTILDTjrGfWl1Wsi3Uj41+CtpEAp4IykqZsz0v29PcVcv09c4lewAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/imagenes/tecno1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/tecno1.2d34ail2c_vn1.png");}),
"[project]/imagenes/tecno1.png.mjs { IMAGE => \"[project]/imagenes/tecno1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/imagenes/tecno1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAz0lEQVR42mWPOQrCUBRFMzpgvvkGCwOmEkEtkhBMvmbQFIJCJEgKBwKSlbgEcQEuQXAb9jYuQJtU9grf3xgcbvnefe/eQ1Ef4jhO4nleYVkWUL8SyyXZRdqhb2kXqQL3DMPAbEkuiqir7pI4eiRxiJHeTPP5nJoZAABt33Nu8yjEw4GLFwG612sSygyCILR8z75OJyNs9ywcjc20VhWNzEDyCralb9fL2TNZBdhUGycSW/kqCUWgOEg/WkbnDMXyhqZp9o+EYEKCKZOPxffsBVLtJWTqCw7hAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/imagenes/tecno2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/tecno2.077s9uthsac-e.png");}),
"[project]/imagenes/tecno2.png.mjs { IMAGE => \"[project]/imagenes/tecno2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/imagenes/tecno2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$imagenes$2f$tecno2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 500,
    height: 500,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzklEQVR42l2PsQqCUBiFNcWuooNwHbSgoAi6QRmVQYtYFKVZFoYgDbW09XgVPUX0EA1tDSHU4E0hjDzTz/m/4TsE8Q1JkhmWZSs8z7cYhskR6Yii2FYbjWsNoXt0n2iaVpInC4DU62hHd7EMHd3ABVl+AgCMBMgrirm2Z8F+s8W+NcVGXX1LELo/QJYnvmkFO3eFneEIGx3tFQFeAoBsVupp3YNnz8Nxf4DLheItEkVpSbWlNi8IoQeE8ExRlPgHxDM5jqsKgqBHgqW4ivsPKfUpWHkEihkAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_169uzba._.js.map