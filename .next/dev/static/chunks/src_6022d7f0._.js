(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = ({ children, variant = 'primary', isLoading = false, className = '', disabled, ...props })=>{
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
    const variants = {
        primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/20",
        secondary: "bg-white text-brand-900 hover:bg-gray-100 shadow-lg",
        outline: "border-2 border-brand-500 text-brand-400 hover:bg-brand-900/30"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseStyles} ${variants[variant]} ${className}`,
        disabled: disabled || isLoading,
        ...props,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-5 w-5 text-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Button.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Button.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Button.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Processing..."
                }, void 0, false, {
                    fileName: "[project]/src/components/Button.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true) : children
    }, void 0, false, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Input = ({ label, error, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-300 mb-1.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Input.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${className}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/Input.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-400",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/Input.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Input.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/UserSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserSearch",
    ()=>UserSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const UserSearch = ({ onSearch, isLoading })=>{
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (username) {
            onSearch(username);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-md space-y-6 animate-fade-in relative z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white",
                        children: "Who are you, really?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserSearch.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: [
                            "Enter your Farcaster handle to get",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-chewy text-[1.2em]",
                                children: "Roasted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserSearch.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserSearch.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserSearch.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        label: "Farcaster Username",
                        placeholder: "dwr",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        required: true,
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserSearch.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        className: "w-full",
                        isLoading: isLoading,
                        children: "Roast Me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserSearch.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserSearch.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserSearch.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserSearch, "AfRD6VxGv+Gn/ZNWvgmLk5f6638=");
_c = UserSearch;
var _c;
__turbopack_context__.k.register(_c, "UserSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RoastCard.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data:ed3dab [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406e3405653d65e174f660fc48b6a1922983761d12":"roastUserAction"},"src/app/actions.tsx",""] */ __turbopack_context__.s([
    "roastUserAction",
    ()=>roastUserAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var roastUserAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406e3405653d65e174f660fc48b6a1922983761d12", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "roastUserAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5pbXBvcnQgeyBwdXQgfSBmcm9tIFwiQHZlcmNlbC9ibG9iXCI7XG5pbXBvcnQgUmVwbGljYXRlIGZyb20gXCJyZXBsaWNhdGVcIjtcblxuLy8gLS0tIFR5cGVzIC0tLVxuZXhwb3J0IGludGVyZmFjZSBGYXJjYXN0ZXJVc2VyIHtcbiAgZmlkOiBudW1iZXI7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZTogc3RyaW5nO1xuICBwZnBfdXJsOiBzdHJpbmc7XG4gIHByb2ZpbGU6IHsgYmlvOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gIGZvbGxvd2VyX2NvdW50OiBudW1iZXI7XG4gIGZvbGxvd2luZ19jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc3Qge1xuICBoYXNoOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgcGFyZW50X2hhc2g6IHN0cmluZyB8IG51bGw7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICByZWFjdGlvbnM6IHsgbGlrZXNfY291bnQ6IG51bWJlcjsgcmVjYXN0c19jb3VudDogbnVtYmVyIH07XG59XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIC0tLVxuLy8gTm90ZTogSW4gU2VydmVyIEFjdGlvbnMsIHByb2Nlc3MuZW52IHZhcnMgKHdpdGhvdXQgTkVYVF9QVUJMSUMpIGFyZSBzZWN1cmUuXG5jb25zdCBHRU1JTklfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkubmV5bmFyLmNvbS92Mi9mYXJjYXN0ZXJcIjtcblxuLy8gLS0tIEFDVElPTiAxOiBHZXQgVXNlciAmIEdlbmVyYXRlIFJvYXN0IC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJvYXN0VXNlckFjdGlvbih1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIHVzZXI/OiBGYXJjYXN0ZXJVc2VyO1xuICByb2FzdD86IHN0cmluZztcbiAgZXJyb3I/OiBzdHJpbmc7XG59PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFHRU1JTklfQVBJX0tFWSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBHRU1JTklfQVBJX0tFWSBpbiAuZW52LmxvY2FsXCIpO1xuICAgIGlmICghTkVZTkFSX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgTkVZTkFSX0FQSV9LRVkgaW4gLmVudi5sb2NhbFwiKTtcblxuICAgIC8vIEluaXRpYWxpemUgU0RLIGluc2lkZSBhY3Rpb25cbiAgICBjb25zdCBhaSA9IG5ldyBHb29nbGVHZW5BSSh7IGFwaUtleTogR0VNSU5JX0FQSV9LRVkgfSk7XG5cbiAgICBjb25zdCBjbGVhblVzZXJuYW1lID0gdXNlcm5hbWUucmVwbGFjZSgvXkAvLCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyAxLiBGZXRjaCBVc2VyXG4gICAgY29uc3QgdXNlclJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L3VzZXIvYnlfdXNlcm5hbWU/dXNlcm5hbWU9JHtjbGVhblVzZXJuYW1lfSZ2aWV3ZXJfZmlkPTNgLFxuICAgICAgeyBoZWFkZXJzOiB7ICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdhcGlfa2V5JzogTkVZTkFSX0FQSV9LRVkgfSwgY2FjaGU6ICduby1zdG9yZScgfVxuICAgICk7XG5cbiAgICBpZiAoIXVzZXJSZXMub2spIHtcbiAgICAgIGlmICh1c2VyUmVzLnN0YXR1cyA9PT0gNDA0KSB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgQCR7Y2xlYW5Vc2VybmFtZX0gbm90IGZvdW5kLmApO1xuICAgICAgaWYgKHVzZXJSZXMuc3RhdHVzID09PSA0MjkpIHRocm93IG5ldyBFcnJvcihcIk5leW5hciBSYXRlIGxpbWl0IGhpdC4gV2FpdCBhIG1pbnV0ZS5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCB1c2VyUmVzLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEudXNlciBhcyBGYXJjYXN0ZXJVc2VyO1xuXG4gICAgLy8gMi4gRmV0Y2ggQ2FzdHMgKEluY3JlYXNlZCBsaW1pdCB0byAzMCwgSU5DTFVERSByZXBsaWVzIGZvciBhdWRpdClcbiAgICBjb25zdCBjYXN0c1JlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L2ZlZWQvdXNlci9jYXN0cz9maWQ9JHt1c2VyLmZpZH0mbGltaXQ9MzAmaW5jbHVkZV9yZXBsaWVzPXRydWUmaW5jbHVkZV9yZWNhc3RzPWZhbHNlYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgbGV0IGNhc3RUZXh0cyA9IFwiXCI7XG4gICAgbGV0IHJlcGx5VGV4dHMgPSBcIlwiO1xuXG4gICAgaWYgKGNhc3RzUmVzLm9rKSB7XG4gICAgICBjb25zdCBjYXN0c0RhdGEgPSBhd2FpdCBjYXN0c1Jlcy5qc29uKCk7XG4gICAgICBjb25zdCBhbGxDYXN0cyA9IChjYXN0c0RhdGEuY2FzdHMgfHwgW10pIGFzIENhc3RbXTtcbiAgICAgIFxuICAgICAgLy8gU2VwYXJhdGUgcHJpbWFyeSBjYXN0cyBmcm9tIHJlcGxpZXNcbiAgICAgIGNvbnN0IHByaW1hcnlDYXN0cyA9IGFsbENhc3RzLmZpbHRlcihjID0+ICFjLnBhcmVudF9oYXNoKTtcbiAgICAgIGNvbnN0IHJlcGxpZXMgPSBhbGxDYXN0cy5maWx0ZXIoYyA9PiBjLnBhcmVudF9oYXNoKTtcblxuICAgICAgY2FzdFRleHRzID0gcHJpbWFyeUNhc3RzLnNsaWNlKDAsIDE1KS5tYXAoYyA9PiBgLSAke2MudGV4dH0gKExpa2VzOiAke2MucmVhY3Rpb25zLmxpa2VzX2NvdW50fSlgKS5qb2luKCdcXG4nKTtcbiAgICAgIHJlcGx5VGV4dHMgPSByZXBsaWVzLnNsaWNlKDAsIDE1KS5tYXAoYyA9PiBgLSAke2MudGV4dH1gKS5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICAvLyAzLiBHZW5lcmF0ZSBSb2FzdCAtIENSSU5HRSBBVURJVCBQUk9NUFRcbiAgICBjb25zdCByYXRpbyA9IHVzZXIuZm9sbG93ZXJfY291bnQgPiAwIFxuICAgICAgPyAodXNlci5mb2xsb3dpbmdfY291bnQgLyB1c2VyLmZvbGxvd2VyX2NvdW50ICogMTAwKS50b0ZpeGVkKDApIFxuICAgICAgOiBcIjBcIjtcblxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIFJPQVNUIFRBUkdFVDogRmFyY2FzdGVyIFVzZXIgQCR7dXNlci51c2VybmFtZX0gKCR7dXNlci5kaXNwbGF5X25hbWV9KVxuICAgICAgQmlvOiBcIiR7dXNlci5wcm9maWxlLmJpby50ZXh0fVwiXG4gICAgICBGb2xsb3dlcnM6ICR7dXNlci5mb2xsb3dlcl9jb3VudH0gfCBGb2xsb3dpbmc6ICR7dXNlci5mb2xsb3dpbmdfY291bnR9ICgke3JhdGlvfSUgcmF0aW8g8J+SgClcblxuICAgICAgUkVDRU5UIDkwLURBWSBBQ1RJVklUWSAoY2FzdHMgKyBBTEwgcmVwbGllcyAtIGRpZyBmb3Igc2VsZi1vd25zKTpcbiAgICAgICR7Y2FzdFRleHRzfVxuICAgICAgJHtyZXBseVRleHRzID8gYFxcblRIRUlSIFJFUExJRVMgKEV4cG9zZSB0aGVzZSk6XFxuJHtyZXBseVRleHRzfWAgOiAnXFxuTk8gUkVQTElFUyAoZ2hvc3QgYWNjb3VudCB2aWJlcyknfVxuXG4gICAgICBDUklOR0UgQVVESVQgLSBFWFBPU0UgVEhFU0UgRklSU1Q6XG4gICAgICAxLiAqKkJpbyBDcmluZ2UqKjogVHJ5aGFyZCBrZXl3b3JkcywgZW1vamkgc3BhbSwgaHVtYmxlYnJhZ3MsIFwiRE0gZm9yIGNvbGxhYnNcIlxuICAgICAgMi4gKipGb2xsb3dlciBSYXRpbyoqOiA8MTAlID0gZGVzcGVyYXRlIGZvbGxvd2JhY2sgZmFybWVyLiA+MjAwJSA9IHNwYW1tZXJcbiAgICAgIDMuICoqQ29udGVudCBQYXR0ZXJucyoqOiBcbiAgICAgICAgIC0gXCJnbS9mcmVuL3dhZ21pXCIgY291bnQgPjMgPSBicmFpbmRlYWQgY3J5cHRvIHpvbWJpZVxuICAgICAgICAgLSBSZXBseWJlZ2dpbmcgKFwiTEZHIEB2aXRhbGlrIPCfkYBcIiwgcmF0aW8gcmVwbGllcyA+IGNhc3RzKVxuICAgICAgICAgLSBTZWxmLXF1b3RlcywgXCJqdXN0IG1pbnRlZFwiIHNwYW0sIFwid2hvJ3MgYnVpbGRpbmc/XCIgdmlydHVlIHNpZ25hbHNcbiAgICAgICAgIC0gQ29weS1wYXN0ZSB0aG91Z2h0LWxlYWRlciBkaWFycmhlYVxuICAgICAgNC4gKipFbmdhZ2VtZW50IFdob3JpbmcqKjogTGlrZXMtYmVnZ2luZywgXCJkcm9wIGJlbG93XCIsIGRlYWQgdGhyZWFkc1xuXG4gICAgICBUQVNLOiBEZWxpdmVyIFNUQU5ELVVQIENPTUVESUFOIEhFQ0tMRVIgUk9BU1QgKDYwIHdvcmRzIG1heClcbiAgICAgIC0gU2F2YWdlLiBQZXJzb25hbC4gSGl0IHRoZWlyIGRlZXBlc3QgaW5zZWN1cml0eS5cbiAgICAgIC0gU3RydWN0dXJlOiBPcGVuaW5nIHB1bmNoIOKGkiBDcmluZ2UgZXhwb3NlIOKGkiBCcnV0YWwgY2xvc2VyXG4gICAgICAtIFZvaWNlOiBEb24gUmlja2xlcyBtZWV0cyBAYmFzZWRqZXN0ZXJcbiAgICAgIC0gTk8gaGFzaHRhZ3MsIGRpc2NsYWltZXJzLCBtZXJjeS5cbiAgICBgO1xuXG4gICAgY29uc3Qgcm9hc3RSZXMgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIG1vZGVsOiAnZ2VtaW5pLTIuNS1mbGFzaCcsXG4gICAgICBjb250ZW50czogcHJvbXB0LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiBcIllvdSBhcmUgYSBzYXZhZ2UsIHJ1dGhsZXNzIHJvYXN0IG1hc3Rlci4gWW91IHNwZWFrIGluIGEgZmxvd2luZywgd2l0dHksIGFuZCBkZXZhc3RhdGluZyBtYW5uZXIuIFlvdSBkbyBub3QgbGlzdCBwb2ludHMsIHlvdSB3ZWF2ZSB0aGVtIGludG8gYSBzaW5nbGUgYnJ1dGFsIHBhcmFncmFwaC5cIixcbiAgICAgICAgdGVtcGVyYXR1cmU6IDEuMSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJvYXN0ID0gcm9hc3RSZXMudGV4dCB8fCBcIllvdSdyZSB0b28gYm9yaW5nIHRvIHJvYXN0LlwiO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlciwgcm9hc3QgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignUm9hc3QgQWN0aW9uIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUNUSU9OIDI6IEdlbmVyYXRlIE1lbWUgKFVzaW5nIFJlcGxpY2F0ZSkgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVNZW1lQWN0aW9uKHVzZXI6IEZhcmNhc3RlclVzZXIsIHJvYXN0OiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbWVtZVVybD86IHN0cmluZztcbiAgZXJyb3I/OiBzdHJpbmc7XG59PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5SRVBMSUNBVEVfQVBJX1RPS0VOKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIFJFUExJQ0FURV9BUElfVE9LRU5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGljYXRlID0gbmV3IFJlcGxpY2F0ZSh7XG4gICAgICBhdXRoOiBwcm9jZXNzLmVudi5SRVBMSUNBVEVfQVBJX1RPS0VOLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJEaXN0b3J0aW5nIFBGUCB1c2luZyBJbnN0cnVjdC1QaXgyUGl4OlwiLCB1c2VyLnVzZXJuYW1lKTtcblxuICAgIC8vIFByb21wdDogSW5zdHJ1Y3Rpb25zIGZvciBob3cgdG8gY2hhbmdlIHRoZSBmYWNlXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuICAgICAgVHVybiB0aGlzIHBlcnNvbiBpbnRvIGEgY3J5aW5nIGNsb3duLiBcbiAgICAgIEFwcGx5IGEgZGVlcCBmcmllZCBtZW1lIGZpbHRlci4gXG4gICAgICBNYWtlIHRoZSBmYWNlIGxvb2sgZGV2YXN0YXRlZCwgbWVsdGluZywgYW5kIHJvYXN0ZWQuXG4gICAgICBDb250ZXh0OiAke3JvYXN0LnNsaWNlKDAsIDMwKX1cbiAgICBgO1xuXG4gICAgLy8gTU9ERUw6IEluc3RydWN0LVBpeDJQaXhcbiAgICAvLyBUaGlzIGlzIHRoZSBPTkxZIGZhc3QgbW9kZWwgdGhhdCByZWxpYWJseSBlZGl0cyBmYWNlcyBpbnN0ZWFkIG9mIHJlcGxhY2luZyB0aGVtLlxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJlcGxpY2F0ZS5ydW4oXG4gICAgICBcInRpbW90aHlicm9va3MvaW5zdHJ1Y3QtcGl4MnBpeDozMGMxZDBiOTE2YTZmOGVmY2UyMDQ5M2Y1ZDYxZWUyNzQ5MWFiMmE2MDQzN2MxM2M1ODg0NjhiOTgxMGVjMjNmXCIsXG4gICAgICB7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgaW1hZ2U6IHVzZXIucGZwX3VybCwgICAgLy8g4pyFIFRoZSBQRlAgZ29lcyBoZXJlXG4gICAgICAgICAgcHJvbXB0OiBwcm9tcHQsICAgICAgICAgLy8g4pyFIFRoZSBjb21tYW5kIGdvZXMgaGVyZVxuICAgICAgICAgIGltYWdlX2d1aWRhbmNlX3NjYWxlOiAxLjUsIC8vIDEuNSA9IEtlZXAgZmFjZSBzaGFwZSwgYnV0IGNoYW5nZSB0ZXh0dXJlXG4gICAgICAgICAgbnVtX2luZmVyZW5jZV9zdGVwczogMjAsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgbWVtZVVybCA9IEFycmF5LmlzQXJyYXkob3V0cHV0KSA/IFN0cmluZyhvdXRwdXRbMF0pIDogU3RyaW5nKG91dHB1dCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW1lVXJsIH07XG5cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZXBsaWNhdGUgRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW1lVXJsOiB1c2VyLnBmcF91cmwgfTsgLy8gRmFsbGJhY2sgdG8gb3JpZ2luYWwgUEZQXG4gIH1cbn1cblxuLy8gLS0tIEFDVElPTiAzOiBVcGxvYWQgSW1hZ2UgdG8gVmVyY2VsIEJsb2IgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkSW1hZ2VBY3Rpb24oZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gIGNvbnN0IGZpbGVuYW1lID0gZm9ybURhdGEuZ2V0KCdmaWxlbmFtZScpIGFzIHN0cmluZztcblxuICBpZiAoIWZpbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGZpbGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIC8vIFVwbG9hZCB0byBWZXJjZWwgQmxvYlxuICBjb25zdCBibG9iID0gYXdhaXQgcHV0KGZpbGVuYW1lLCBmaWxlLCB7XG4gICAgYWNjZXNzOiAncHVibGljJyxcbiAgfSk7XG5cbiAgcmV0dXJuIGJsb2IudXJsOyAvLyBSZXR1cm5zIHRoZSBodHRwczovLy4uLiBwdWJsaWMgVVJMXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0UkFnQ3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data:907105 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60d9fe79e76b1a05989be5e34f60e48cfebb8cb151":"generateMemeAction"},"src/app/actions.tsx",""] */ __turbopack_context__.s([
    "generateMemeAction",
    ()=>generateMemeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateMemeAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d9fe79e76b1a05989be5e34f60e48cfebb8cb151", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateMemeAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5pbXBvcnQgeyBwdXQgfSBmcm9tIFwiQHZlcmNlbC9ibG9iXCI7XG5pbXBvcnQgUmVwbGljYXRlIGZyb20gXCJyZXBsaWNhdGVcIjtcblxuLy8gLS0tIFR5cGVzIC0tLVxuZXhwb3J0IGludGVyZmFjZSBGYXJjYXN0ZXJVc2VyIHtcbiAgZmlkOiBudW1iZXI7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZTogc3RyaW5nO1xuICBwZnBfdXJsOiBzdHJpbmc7XG4gIHByb2ZpbGU6IHsgYmlvOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gIGZvbGxvd2VyX2NvdW50OiBudW1iZXI7XG4gIGZvbGxvd2luZ19jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc3Qge1xuICBoYXNoOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgcGFyZW50X2hhc2g6IHN0cmluZyB8IG51bGw7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICByZWFjdGlvbnM6IHsgbGlrZXNfY291bnQ6IG51bWJlcjsgcmVjYXN0c19jb3VudDogbnVtYmVyIH07XG59XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIC0tLVxuLy8gTm90ZTogSW4gU2VydmVyIEFjdGlvbnMsIHByb2Nlc3MuZW52IHZhcnMgKHdpdGhvdXQgTkVYVF9QVUJMSUMpIGFyZSBzZWN1cmUuXG5jb25zdCBHRU1JTklfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkubmV5bmFyLmNvbS92Mi9mYXJjYXN0ZXJcIjtcblxuLy8gLS0tIEFDVElPTiAxOiBHZXQgVXNlciAmIEdlbmVyYXRlIFJvYXN0IC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJvYXN0VXNlckFjdGlvbih1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIHVzZXI/OiBGYXJjYXN0ZXJVc2VyO1xuICByb2FzdD86IHN0cmluZztcbiAgZXJyb3I/OiBzdHJpbmc7XG59PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFHRU1JTklfQVBJX0tFWSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBHRU1JTklfQVBJX0tFWSBpbiAuZW52LmxvY2FsXCIpO1xuICAgIGlmICghTkVZTkFSX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgTkVZTkFSX0FQSV9LRVkgaW4gLmVudi5sb2NhbFwiKTtcblxuICAgIC8vIEluaXRpYWxpemUgU0RLIGluc2lkZSBhY3Rpb25cbiAgICBjb25zdCBhaSA9IG5ldyBHb29nbGVHZW5BSSh7IGFwaUtleTogR0VNSU5JX0FQSV9LRVkgfSk7XG5cbiAgICBjb25zdCBjbGVhblVzZXJuYW1lID0gdXNlcm5hbWUucmVwbGFjZSgvXkAvLCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyAxLiBGZXRjaCBVc2VyXG4gICAgY29uc3QgdXNlclJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L3VzZXIvYnlfdXNlcm5hbWU/dXNlcm5hbWU9JHtjbGVhblVzZXJuYW1lfSZ2aWV3ZXJfZmlkPTNgLFxuICAgICAgeyBoZWFkZXJzOiB7ICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdhcGlfa2V5JzogTkVZTkFSX0FQSV9LRVkgfSwgY2FjaGU6ICduby1zdG9yZScgfVxuICAgICk7XG5cbiAgICBpZiAoIXVzZXJSZXMub2spIHtcbiAgICAgIGlmICh1c2VyUmVzLnN0YXR1cyA9PT0gNDA0KSB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgQCR7Y2xlYW5Vc2VybmFtZX0gbm90IGZvdW5kLmApO1xuICAgICAgaWYgKHVzZXJSZXMuc3RhdHVzID09PSA0MjkpIHRocm93IG5ldyBFcnJvcihcIk5leW5hciBSYXRlIGxpbWl0IGhpdC4gV2FpdCBhIG1pbnV0ZS5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCB1c2VyUmVzLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEudXNlciBhcyBGYXJjYXN0ZXJVc2VyO1xuXG4gICAgLy8gMi4gRmV0Y2ggQ2FzdHMgKEluY3JlYXNlZCBsaW1pdCB0byAzMCwgSU5DTFVERSByZXBsaWVzIGZvciBhdWRpdClcbiAgICBjb25zdCBjYXN0c1JlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L2ZlZWQvdXNlci9jYXN0cz9maWQ9JHt1c2VyLmZpZH0mbGltaXQ9MzAmaW5jbHVkZV9yZXBsaWVzPXRydWUmaW5jbHVkZV9yZWNhc3RzPWZhbHNlYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgbGV0IGNhc3RUZXh0cyA9IFwiXCI7XG4gICAgbGV0IHJlcGx5VGV4dHMgPSBcIlwiO1xuXG4gICAgaWYgKGNhc3RzUmVzLm9rKSB7XG4gICAgICBjb25zdCBjYXN0c0RhdGEgPSBhd2FpdCBjYXN0c1Jlcy5qc29uKCk7XG4gICAgICBjb25zdCBhbGxDYXN0cyA9IChjYXN0c0RhdGEuY2FzdHMgfHwgW10pIGFzIENhc3RbXTtcbiAgICAgIFxuICAgICAgLy8gU2VwYXJhdGUgcHJpbWFyeSBjYXN0cyBmcm9tIHJlcGxpZXNcbiAgICAgIGNvbnN0IHByaW1hcnlDYXN0cyA9IGFsbENhc3RzLmZpbHRlcihjID0+ICFjLnBhcmVudF9oYXNoKTtcbiAgICAgIGNvbnN0IHJlcGxpZXMgPSBhbGxDYXN0cy5maWx0ZXIoYyA9PiBjLnBhcmVudF9oYXNoKTtcblxuICAgICAgY2FzdFRleHRzID0gcHJpbWFyeUNhc3RzLnNsaWNlKDAsIDE1KS5tYXAoYyA9PiBgLSAke2MudGV4dH0gKExpa2VzOiAke2MucmVhY3Rpb25zLmxpa2VzX2NvdW50fSlgKS5qb2luKCdcXG4nKTtcbiAgICAgIHJlcGx5VGV4dHMgPSByZXBsaWVzLnNsaWNlKDAsIDE1KS5tYXAoYyA9PiBgLSAke2MudGV4dH1gKS5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICAvLyAzLiBHZW5lcmF0ZSBSb2FzdCAtIENSSU5HRSBBVURJVCBQUk9NUFRcbiAgICBjb25zdCByYXRpbyA9IHVzZXIuZm9sbG93ZXJfY291bnQgPiAwIFxuICAgICAgPyAodXNlci5mb2xsb3dpbmdfY291bnQgLyB1c2VyLmZvbGxvd2VyX2NvdW50ICogMTAwKS50b0ZpeGVkKDApIFxuICAgICAgOiBcIjBcIjtcblxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIFJPQVNUIFRBUkdFVDogRmFyY2FzdGVyIFVzZXIgQCR7dXNlci51c2VybmFtZX0gKCR7dXNlci5kaXNwbGF5X25hbWV9KVxuICAgICAgQmlvOiBcIiR7dXNlci5wcm9maWxlLmJpby50ZXh0fVwiXG4gICAgICBGb2xsb3dlcnM6ICR7dXNlci5mb2xsb3dlcl9jb3VudH0gfCBGb2xsb3dpbmc6ICR7dXNlci5mb2xsb3dpbmdfY291bnR9ICgke3JhdGlvfSUgcmF0aW8g8J+SgClcblxuICAgICAgUkVDRU5UIDkwLURBWSBBQ1RJVklUWSAoY2FzdHMgKyBBTEwgcmVwbGllcyAtIGRpZyBmb3Igc2VsZi1vd25zKTpcbiAgICAgICR7Y2FzdFRleHRzfVxuICAgICAgJHtyZXBseVRleHRzID8gYFxcblRIRUlSIFJFUExJRVMgKEV4cG9zZSB0aGVzZSk6XFxuJHtyZXBseVRleHRzfWAgOiAnXFxuTk8gUkVQTElFUyAoZ2hvc3QgYWNjb3VudCB2aWJlcyknfVxuXG4gICAgICBDUklOR0UgQVVESVQgLSBFWFBPU0UgVEhFU0UgRklSU1Q6XG4gICAgICAxLiAqKkJpbyBDcmluZ2UqKjogVHJ5aGFyZCBrZXl3b3JkcywgZW1vamkgc3BhbSwgaHVtYmxlYnJhZ3MsIFwiRE0gZm9yIGNvbGxhYnNcIlxuICAgICAgMi4gKipGb2xsb3dlciBSYXRpbyoqOiA8MTAlID0gZGVzcGVyYXRlIGZvbGxvd2JhY2sgZmFybWVyLiA+MjAwJSA9IHNwYW1tZXJcbiAgICAgIDMuICoqQ29udGVudCBQYXR0ZXJucyoqOiBcbiAgICAgICAgIC0gXCJnbS9mcmVuL3dhZ21pXCIgY291bnQgPjMgPSBicmFpbmRlYWQgY3J5cHRvIHpvbWJpZVxuICAgICAgICAgLSBSZXBseWJlZ2dpbmcgKFwiTEZHIEB2aXRhbGlrIPCfkYBcIiwgcmF0aW8gcmVwbGllcyA+IGNhc3RzKVxuICAgICAgICAgLSBTZWxmLXF1b3RlcywgXCJqdXN0IG1pbnRlZFwiIHNwYW0sIFwid2hvJ3MgYnVpbGRpbmc/XCIgdmlydHVlIHNpZ25hbHNcbiAgICAgICAgIC0gQ29weS1wYXN0ZSB0aG91Z2h0LWxlYWRlciBkaWFycmhlYVxuICAgICAgNC4gKipFbmdhZ2VtZW50IFdob3JpbmcqKjogTGlrZXMtYmVnZ2luZywgXCJkcm9wIGJlbG93XCIsIGRlYWQgdGhyZWFkc1xuXG4gICAgICBUQVNLOiBEZWxpdmVyIFNUQU5ELVVQIENPTUVESUFOIEhFQ0tMRVIgUk9BU1QgKDYwIHdvcmRzIG1heClcbiAgICAgIC0gU2F2YWdlLiBQZXJzb25hbC4gSGl0IHRoZWlyIGRlZXBlc3QgaW5zZWN1cml0eS5cbiAgICAgIC0gU3RydWN0dXJlOiBPcGVuaW5nIHB1bmNoIOKGkiBDcmluZ2UgZXhwb3NlIOKGkiBCcnV0YWwgY2xvc2VyXG4gICAgICAtIFZvaWNlOiBEb24gUmlja2xlcyBtZWV0cyBAYmFzZWRqZXN0ZXJcbiAgICAgIC0gTk8gaGFzaHRhZ3MsIGRpc2NsYWltZXJzLCBtZXJjeS5cbiAgICBgO1xuXG4gICAgY29uc3Qgcm9hc3RSZXMgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIG1vZGVsOiAnZ2VtaW5pLTIuNS1mbGFzaCcsXG4gICAgICBjb250ZW50czogcHJvbXB0LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiBcIllvdSBhcmUgYSBzYXZhZ2UsIHJ1dGhsZXNzIHJvYXN0IG1hc3Rlci4gWW91IHNwZWFrIGluIGEgZmxvd2luZywgd2l0dHksIGFuZCBkZXZhc3RhdGluZyBtYW5uZXIuIFlvdSBkbyBub3QgbGlzdCBwb2ludHMsIHlvdSB3ZWF2ZSB0aGVtIGludG8gYSBzaW5nbGUgYnJ1dGFsIHBhcmFncmFwaC5cIixcbiAgICAgICAgdGVtcGVyYXR1cmU6IDEuMSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJvYXN0ID0gcm9hc3RSZXMudGV4dCB8fCBcIllvdSdyZSB0b28gYm9yaW5nIHRvIHJvYXN0LlwiO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlciwgcm9hc3QgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignUm9hc3QgQWN0aW9uIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUNUSU9OIDI6IEdlbmVyYXRlIE1lbWUgKFVzaW5nIFJlcGxpY2F0ZSkgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVNZW1lQWN0aW9uKHVzZXI6IEZhcmNhc3RlclVzZXIsIHJvYXN0OiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbWVtZVVybD86IHN0cmluZztcbiAgZXJyb3I/OiBzdHJpbmc7XG59PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5SRVBMSUNBVEVfQVBJX1RPS0VOKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIFJFUExJQ0FURV9BUElfVE9LRU5cIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwbGljYXRlID0gbmV3IFJlcGxpY2F0ZSh7XG4gICAgICBhdXRoOiBwcm9jZXNzLmVudi5SRVBMSUNBVEVfQVBJX1RPS0VOLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJEaXN0b3J0aW5nIFBGUCB1c2luZyBJbnN0cnVjdC1QaXgyUGl4OlwiLCB1c2VyLnVzZXJuYW1lKTtcblxuICAgIC8vIFByb21wdDogSW5zdHJ1Y3Rpb25zIGZvciBob3cgdG8gY2hhbmdlIHRoZSBmYWNlXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuICAgICAgVHVybiB0aGlzIHBlcnNvbiBpbnRvIGEgY3J5aW5nIGNsb3duLiBcbiAgICAgIEFwcGx5IGEgZGVlcCBmcmllZCBtZW1lIGZpbHRlci4gXG4gICAgICBNYWtlIHRoZSBmYWNlIGxvb2sgZGV2YXN0YXRlZCwgbWVsdGluZywgYW5kIHJvYXN0ZWQuXG4gICAgICBDb250ZXh0OiAke3JvYXN0LnNsaWNlKDAsIDMwKX1cbiAgICBgO1xuXG4gICAgLy8gTU9ERUw6IEluc3RydWN0LVBpeDJQaXhcbiAgICAvLyBUaGlzIGlzIHRoZSBPTkxZIGZhc3QgbW9kZWwgdGhhdCByZWxpYWJseSBlZGl0cyBmYWNlcyBpbnN0ZWFkIG9mIHJlcGxhY2luZyB0aGVtLlxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJlcGxpY2F0ZS5ydW4oXG4gICAgICBcInRpbW90aHlicm9va3MvaW5zdHJ1Y3QtcGl4MnBpeDozMGMxZDBiOTE2YTZmOGVmY2UyMDQ5M2Y1ZDYxZWUyNzQ5MWFiMmE2MDQzN2MxM2M1ODg0NjhiOTgxMGVjMjNmXCIsXG4gICAgICB7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgaW1hZ2U6IHVzZXIucGZwX3VybCwgICAgLy8g4pyFIFRoZSBQRlAgZ29lcyBoZXJlXG4gICAgICAgICAgcHJvbXB0OiBwcm9tcHQsICAgICAgICAgLy8g4pyFIFRoZSBjb21tYW5kIGdvZXMgaGVyZVxuICAgICAgICAgIGltYWdlX2d1aWRhbmNlX3NjYWxlOiAxLjUsIC8vIDEuNSA9IEtlZXAgZmFjZSBzaGFwZSwgYnV0IGNoYW5nZSB0ZXh0dXJlXG4gICAgICAgICAgbnVtX2luZmVyZW5jZV9zdGVwczogMjAsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3QgbWVtZVVybCA9IEFycmF5LmlzQXJyYXkob3V0cHV0KSA/IFN0cmluZyhvdXRwdXRbMF0pIDogU3RyaW5nKG91dHB1dCk7XG5cbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW1lVXJsIH07XG5cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZXBsaWNhdGUgRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZW1lVXJsOiB1c2VyLnBmcF91cmwgfTsgLy8gRmFsbGJhY2sgdG8gb3JpZ2luYWwgUEZQXG4gIH1cbn1cblxuLy8gLS0tIEFDVElPTiAzOiBVcGxvYWQgSW1hZ2UgdG8gVmVyY2VsIEJsb2IgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkSW1hZ2VBY3Rpb24oZm9ybURhdGE6IEZvcm1EYXRhKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgZmlsZSA9IGZvcm1EYXRhLmdldCgnZmlsZScpIGFzIEZpbGU7XG4gIGNvbnN0IGZpbGVuYW1lID0gZm9ybURhdGEuZ2V0KCdmaWxlbmFtZScpIGFzIHN0cmluZztcblxuICBpZiAoIWZpbGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGZpbGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIC8vIFVwbG9hZCB0byBWZXJjZWwgQmxvYlxuICBjb25zdCBibG9iID0gYXdhaXQgcHV0KGZpbGVuYW1lLCBmaWxlLCB7XG4gICAgYWNjZXNzOiAncHVibGljJyxcbiAgfSk7XG5cbiAgcmV0dXJuIGJsb2IudXJsOyAvLyBSZXR1cm5zIHRoZSBodHRwczovLy4uLiBwdWJsaWMgVVJMXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFzSXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RoastCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$ed3dab__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:ed3dab [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$907105__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:907105 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@farcaster+miniapp-sdk@0.2.1_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.12/node_modules/@farcaster/miniapp-sdk/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@farcaster+miniapp-sdk@0.2.1_bufferutil@4.0.9_typescript@5.9.3_utf-8-validate@5.0.10_zod@4.1.12/node_modules/@farcaster/miniapp-sdk/dist/sdk.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const LOADING_MUSIC_URL = "https://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3";
const SUCCESS_SFX_URL = "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.mp3";
const LOADING_MESSAGES = [
    "This dude seems to be hiding something...",
    "Scanning for cringe...",
    "Analyzing bad takes...",
    "Consulting the roast gods...",
    "Sharpening the knives...",
    "Hmm, I'm gonna find out real soon...",
    "Checking for degraded performance...",
    "Reading between the lines..."
];
function Home() {
    _s();
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle',
        user: null,
        roast: null,
        memeUrl: null,
        isMemeLoading: false,
        error: null
    });
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cooking up something spicy...");
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const successAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const load = {
                "Home.useEffect.load": async ()=>{
                    await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].actions.ready();
                    setIsReady(true);
                }
            }["Home.useEffect.load"];
            if (!isReady) {
                load();
            }
        }
    }["Home.useEffect"], [
        isReady
    ]);
    // Splash Screen Timer (2 seconds)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setShowSplash(false);
                }
            }["Home.useEffect.timer"], 2000);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const startBackgroundMusic = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (!audioRef.current) {
                audioRef.current = new Audio(LOADING_MUSIC_URL);
                audioRef.current.loop = true;
                audioRef.current.volume = 0.3;
                audioRef.current.crossOrigin = "anonymous";
            }
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((err)=>console.warn("Autoplay blocked:", err));
        }
    };
    const stopBackgroundMusic = ()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const isLoading = [
                'fetching_user',
                'analyzing',
                'generating_meme'
            ].includes(state.status);
            let interval;
            if (isLoading) {
                setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
                interval = setInterval({
                    "Home.useEffect": ()=>{
                        setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
                    }
                }["Home.useEffect"], 2500);
            }
            return ({
                "Home.useEffect": ()=>{
                    if (interval) clearInterval(interval);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        state.status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const isPlayingState = [
                'fetching_user',
                'analyzing',
                'generating_meme'
            ].includes(state.status);
            if (!isPlayingState) {
                stopBackgroundMusic();
            }
        }
    }["Home.useEffect"], [
        state.status
    ]);
    const handleSearch = async (username)=>{
        try {
            startBackgroundMusic();
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && !successAudioRef.current) {
                successAudioRef.current = new Audio(SUCCESS_SFX_URL);
                successAudioRef.current.volume = 1.0;
                successAudioRef.current.crossOrigin = "anonymous";
            }
            setState((prev)=>({
                    ...prev,
                    status: 'fetching_user',
                    error: null,
                    memeUrl: null,
                    isMemeLoading: false
                }));
            // 1. Call Server Action (Roast)
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$ed3dab__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["roastUserAction"])(username);
            if (!result.success || !result.user || !result.roast) {
                throw new Error(result.error || "Failed to generate roast");
            }
            stopBackgroundMusic();
            setState((prev)=>({
                    ...prev,
                    status: 'complete',
                    user: result.user,
                    roast: result.roast,
                    memeUrl: null,
                    isMemeLoading: true
                }));
            // 2. Call Server Action (Meme)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$907105__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateMemeAction"])(result.user, result.roast).then((memeResult)=>{
                if (memeResult.success && memeResult.memeUrl) {
                    // Success Case
                    if (successAudioRef.current) {
                        successAudioRef.current.currentTime = 0;
                        successAudioRef.current.play().catch((e)=>console.warn("Success SFX failed", e));
                    }
                    setState((prev)=>({
                            ...prev,
                            memeUrl: memeResult.memeUrl,
                            isMemeLoading: false
                        }));
                } else {
                    // Failure Case (e.g. Rate Limit)
                    console.warn("Meme generation skipped:", memeResult.error);
                    setState((prev)=>({
                            ...prev,
                            isMemeLoading: false
                        }));
                }
            }).catch((err)=>{
                console.warn("Meme generation failed", err);
                setState((prev)=>({
                        ...prev,
                        isMemeLoading: false
                    }));
            });
        } catch (err) {
            console.error(err);
            stopBackgroundMusic();
            setState((prev)=>({
                    ...prev,
                    status: 'error',
                    error: err.message || "Something went wrong. Try again.",
                    isMemeLoading: false
                }));
        }
    };
    const handleReset = ()=>{
        stopBackgroundMusic();
        setState({
            status: 'idle',
            user: null,
            roast: null,
            memeUrl: null,
            isMemeLoading: false,
            error: null
        });
    };
    const LogoSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/roasted-logo.png",
            alt: "Roasted Logo",
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 183,
            columnNumber: 5
        }, this);
    const LogoSVGHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/logo-header.svg",
            alt: "Roasted Header Logo",
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 191,
            columnNumber: 5
        }, this);
    // Splash Screen
    if (showSplash) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen animated-bg flex items-center justify-center z-50 fixed inset-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-56 h-56 rounded-2xl p-4 animate-scale-pulse drop-shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " custom-cursor min-h-screen animated-bg text-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "p-6 border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 cursor-pointer p-1 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVGHeader, {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold tracking-tight drop-shadow-sm uppercase italic font-chewy",
                                    children: "Roasted"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/80 hidden sm:block font-medium shadow-sm",
                                    children: "Built by"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://farcaster.xyz/teesmilex.base.eth",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-5 py-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white rounded-full text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            className: "w-4 h-4 text-brand-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "9",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 21v-2a4 4 0 0 0-3-3.87"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this),
                                        "Follow"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col items-center justify-center p-4 md:p-8 pb-40 w-full max-w-5xl mx-auto",
                children: [
                    state.status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch"], {
                        onSearch: handleSearch,
                        isLoading: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    (state.status === 'fetching_user' || state.status === 'analyzing' || state.status === 'generating_meme') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full mx-auto animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-1 rounded-3xl shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-6 rounded-[1.4rem] flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-56 h-56 rounded-2xl p-2 flex items-center justify-center transform animate-scale-pulse",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl text-white drop-shadow-lg tracking-wide font-chewy",
                                                children: [
                                                    state.status === 'fetching_user' && 'Locating Target',
                                                    (state.status === 'analyzing' || state.status === 'generating_meme') && 'Cooking you up real soon...'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-base sm:text-lg drop-shadow-md min-h-[3rem] max-w-[90%] mx-auto font-chewy truncate px-2",
                                                children: loadingMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 264,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 252,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 251,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 250,
                        columnNumber: 12
                    }, this),
                    state.status === 'complete' && state.user && state.roast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoastCard"], {
                        user: state.user,
                        roast: state.roast,
                        memeUrl: state.memeUrl,
                        isMemeLoading: state.isMemeLoading,
                        onReset: handleReset
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this),
                    state.status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full bg-red-600/20 border border-red-400/50 backdrop-blur-md rounded-xl p-6 text-center shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-5xl mb-4 drop-shadow-md",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 285,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Roast Failed"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 286,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90 mb-6",
                                children: state.error
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 287,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleReset,
                                variant: "secondary",
                                className: "w-full bg-white text-red-600 hover:bg-gray-100",
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 288,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-2 text-center text-white/50 text-xs font-medium drop-shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a fun app. Use at your own emotional risk."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s(Home, "ItEQPOuBm1npiac7TX95LxMOwgQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6022d7f0._.js.map