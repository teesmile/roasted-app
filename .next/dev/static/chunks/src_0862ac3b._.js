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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false) : children
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
const UserSearch = ({ onSearch, isLoading, initialUsername })=>{
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialUsername || '');
    // ✅ Auto-fill if initialUsername arrives late (async SDK load)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserSearch.useEffect": ()=>{
            if (initialUsername) {
                setUsername(initialUsername);
            }
        }
    }["UserSearch.useEffect"], [
        initialUsername
    ]);
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
                        lineNumber: 31,
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
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserSearch.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserSearch.tsx",
                lineNumber: 30,
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
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        className: "w-full",
                        isLoading: isLoading,
                        children: "Roast Me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserSearch.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserSearch.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UserSearch.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserSearch, "pSnsKyflpKZdw8XCYgiUFMj/3iE=");
_c = UserSearch;
var _c;
__turbopack_context__.k.register(_c, "UserSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RoastCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
(()=>{
    const e = new Error("Cannot find module './actions'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
// ✅ Local Files
const LOADING_MUSIC_URL = "/sounds/loading.wav";
const SUCCESS_SFX_URL = "/sounds/success.wav";
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
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cooking up something spicy...");
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const successAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- 1. Initialize SDK ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const load = {
                "Home.useEffect.load": async ()=>{
                    try {
                        const frameContext = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].context;
                        setContext(frameContext);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].actions.ready();
                        setIsReady(true);
                    } catch (err) {
                        console.warn("SDK Context failed", err);
                        setIsReady(true);
                    }
                }
            }["Home.useEffect.load"];
            if (!isReady) load();
        }
    }["Home.useEffect"], [
        isReady
    ]);
    // --- 2. Initialize Audio & Autoplay ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Setup Audio Objects
            if ("TURBOPACK compile-time truthy", 1) {
                audioRef.current = new Audio(LOADING_MUSIC_URL);
                audioRef.current.loop = true;
                audioRef.current.volume = 0.3;
                successAudioRef.current = new Audio(SUCCESS_SFX_URL);
                successAudioRef.current.volume = 1.0;
                // Try Autoplay immediately
                const attemptPlay = {
                    "Home.useEffect.attemptPlay": async ()=>{
                        try {
                            await audioRef.current?.play();
                        } catch (e) {
                            // If blocked, add a one-time click listener to start it
                            const startOnInteraction = {
                                "Home.useEffect.attemptPlay.startOnInteraction": ()=>{
                                    audioRef.current?.play().catch({
                                        "Home.useEffect.attemptPlay.startOnInteraction": ()=>{}
                                    }["Home.useEffect.attemptPlay.startOnInteraction"]);
                                    document.removeEventListener('click', startOnInteraction);
                                }
                            }["Home.useEffect.attemptPlay.startOnInteraction"];
                            document.addEventListener('click', startOnInteraction);
                        }
                    }
                }["Home.useEffect.attemptPlay"];
                // Only attempt play if not already complete/error
                if (state.status === 'idle') {
                    attemptPlay();
                }
            }
            return ({
                "Home.useEffect": ()=>{
                    stopBackgroundMusic();
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Splash Screen Timer
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
    const stopBackgroundMusic = ()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };
    // Loading Messages Cycler
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
    const handleSearch = async (username)=>{
        try {
            // Ensure music is playing if it wasn't already
            if (audioRef.current?.paused) {
                audioRef.current.play().catch(()=>{});
            }
            setState((prev)=>({
                    ...prev,
                    status: 'fetching_user',
                    error: null,
                    memeUrl: null,
                    isMemeLoading: false
                }));
            const fetchResult = await fetchUserDataAction(username);
            if (!fetchResult.success || !fetchResult.user) {
                throw new Error(fetchResult.error || "Failed to find user");
            }
            setState((prev)=>({
                    ...prev,
                    status: 'analyzing',
                    user: fetchResult.user
                }));
            const roastResult = await generateRoastAction(fetchResult.user, fetchResult.castTexts || "", fetchResult.replyTexts || "");
            if (!roastResult.success || !roastResult.roast) {
                throw new Error(roastResult.error || "Failed to generate roast");
            }
            // Success! Stop music, play SFX
            stopBackgroundMusic();
            if (successAudioRef.current) {
                successAudioRef.current.currentTime = 0;
                successAudioRef.current.play().catch(()=>{});
            }
            setState((prev)=>({
                    ...prev,
                    status: 'complete',
                    roast: roastResult.roast,
                    memeUrl: null,
                    isMemeLoading: true
                }));
            generateMemeAction(fetchResult.user, roastResult.roast).then((memeResult)=>{
                if (memeResult.success && memeResult.memeUrl) {
                    setState((prev)=>({
                            ...prev,
                            memeUrl: memeResult.memeUrl,
                            isMemeLoading: false
                        }));
                } else {
                    setState((prev)=>({
                            ...prev,
                            isMemeLoading: false
                        }));
                }
            }).catch((err)=>{
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
        // Restart music on reset
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(()=>{});
        }
        setState({
            status: 'idle',
            user: null,
            roast: null,
            memeUrl: null,
            isMemeLoading: false,
            error: null
        });
    };
    // ✅ YOUR ORIGINAL SVGs
    const LogoSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/roasted-logo.png",
            alt: "Roasted Logo",
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/components/RoastCard.tsx",
            lineNumber: 209,
            columnNumber: 5
        }, this);
    const LogoSVGHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/logo-header.svg",
            alt: "Roasted Header Logo",
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/components/RoastCard.tsx",
            lineNumber: 213,
            columnNumber: 5
        }, this);
    const openFollowLink = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].actions.openUrl("https://farcaster.xyz/teesmilex.base.eth");
    };
    if (showSplash) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen animated-bg flex items-center justify-center z-50 fixed inset-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-56 h-56 rounded-2xl p-4 animate-scale-pulse drop-shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RoastCard.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/RoastCard.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "custom-cursor min-h-screen animated-bg text-white flex flex-col",
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
                                        fileName: "[project]/src/components/RoastCard.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold tracking-tight drop-shadow-sm uppercase italic font-chewy",
                                    children: "Roasted"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/80 hidden sm:block font-medium shadow-sm",
                                    children: "Built by"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: openFollowLink,
                                    className: "px-5 py-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white rounded-full text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm cursor-pointer",
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
                                                    fileName: "[project]/src/components/RoastCard.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "9",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoastCard.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 21v-2a4 4 0 0 0-3-3.87"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoastCard.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RoastCard.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        "Follow"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RoastCard.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col items-center justify-center p-4 md:p-8 pb-40 w-full max-w-5xl mx-auto",
                children: [
                    state.status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch"], {
                        onSearch: handleSearch,
                        isLoading: false,
                        initialUsername: context?.user?.username
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoastCard.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this),
                    (state.status === 'fetching_user' || state.status === 'analyzing' || state.status === 'generating_meme') && // ✅ YOUR ORIGINAL GRADIENT CONTAINER STRUCTURE
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full mx-auto animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-1 rounded-3xl shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-6 rounded-[1.4rem] flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-56 h-56 rounded-2xl p-2 flex items-center justify-center transform animate-scale-pulse",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 278,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoastCard.tsx",
                                        lineNumber: 277,
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
                                                fileName: "[project]/src/components/RoastCard.tsx",
                                                lineNumber: 282,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-base sm:text-lg drop-shadow-md min-h-[3rem] max-w-[90%] mx-auto font-chewy truncate px-2",
                                                children: loadingMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/RoastCard.tsx",
                                                lineNumber: 286,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RoastCard.tsx",
                                        lineNumber: 281,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 275,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 274,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoastCard.tsx",
                        lineNumber: 273,
                        columnNumber: 12
                    }, this),
                    state.status === 'complete' && state.user && state.roast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoastCard"], {
                        user: state.user,
                        roast: state.roast,
                        memeUrl: state.memeUrl,
                        isMemeLoading: state.isMemeLoading,
                        viewerUsername: context?.user?.username,
                        onReset: handleReset,
                        // ✅ Pass stop function to the card
                        onStopMusic: stopBackgroundMusic
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoastCard.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    state.status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full bg-red-600/20 border border-red-400/50 backdrop-blur-md rounded-xl p-6 text-center shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-5xl mb-4 drop-shadow-md",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 310,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Roast Failed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 311,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90 mb-6",
                                children: state.error
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 312,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleReset,
                                variant: "secondary",
                                className: "w-full bg-white text-red-600 hover:bg-gray-100",
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 313,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/RoastCard.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-2 text-center text-white/50 text-xs font-medium drop-shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a fun app. Use at your own emotional risk."
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoastCard.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RoastCard.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RoastCard.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_s(Home, "5W88PdhZVGzpsABANmHHYlUJQWE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data:e6ed91 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"70638422578e9f9a31d4e9e127812defe5e267b21b":"generateRoastAction"},"src/app/actions.tsx",""] */ __turbopack_context__.s([
    "generateRoastAction",
    ()=>generateRoastAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateRoastAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70638422578e9f9a31d4e9e127812defe5e267b21b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateRoastAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5pbXBvcnQgeyBwdXQgfSBmcm9tIFwiQHZlcmNlbC9ibG9iXCI7XG5pbXBvcnQgUmVwbGljYXRlIGZyb20gXCJyZXBsaWNhdGVcIjtcblxuLy8gLS0tIFR5cGVzIC0tLVxuZXhwb3J0IGludGVyZmFjZSBGYXJjYXN0ZXJVc2VyIHtcbiAgZmlkOiBudW1iZXI7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZTogc3RyaW5nO1xuICBwZnBfdXJsOiBzdHJpbmc7XG4gIHByb2ZpbGU6IHsgYmlvOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gIGZvbGxvd2VyX2NvdW50OiBudW1iZXI7XG4gIGZvbGxvd2luZ19jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc3Qge1xuICBoYXNoOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgcGFyZW50X2hhc2g6IHN0cmluZyB8IG51bGw7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICByZWFjdGlvbnM6IHsgbGlrZXNfY291bnQ6IG51bWJlcjsgcmVjYXN0c19jb3VudDogbnVtYmVyIH07XG59XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIC0tLVxuLy8gTm90ZTogSW4gU2VydmVyIEFjdGlvbnMsIHByb2Nlc3MuZW52IHZhcnMgKHdpdGhvdXQgTkVYVF9QVUJMSUMpIGFyZSBzZWN1cmUuXG5jb25zdCBHRU1JTklfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkubmV5bmFyLmNvbS92Mi9mYXJjYXN0ZXJcIjtcblxuLy8gLS0tIEFDVElPTiAxOiBGZXRjaCBVc2VyIERhdGEgKE5leW5hcikgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGF0YUFjdGlvbih1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIHVzZXI/OiBGYXJjYXN0ZXJVc2VyO1xuICBjYXN0VGV4dHM/OiBzdHJpbmc7XG4gIHJlcGx5VGV4dHM/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghTkVZTkFSX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgTkVZTkFSX0FQSV9LRVkgaW4gLmVudi5sb2NhbFwiKTtcblxuICAgIGNvbnN0IGNsZWFuVXNlcm5hbWUgPSB1c2VybmFtZS5yZXBsYWNlKC9eQC8sICcnKS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIDEuIEZldGNoIFVzZXJcbiAgICBjb25zdCB1c2VyUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtORVlOQVJfQVBJX1VSTH0vdXNlci9ieV91c2VybmFtZT91c2VybmFtZT0ke2NsZWFuVXNlcm5hbWV9JnZpZXdlcl9maWQ9M2AsXG4gICAgICB7IGhlYWRlcnM6IHsgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ2FwaV9rZXknOiBORVlOQVJfQVBJX0tFWSB9LCBjYWNoZTogJ25vLXN0b3JlJyB9XG4gICAgKTtcblxuICAgIGlmICghdXNlclJlcy5vaykge1xuICAgICAgaWYgKHVzZXJSZXMuc3RhdHVzID09PSA0MDQpIHRocm93IG5ldyBFcnJvcihgVXNlciBAJHtjbGVhblVzZXJuYW1lfSBub3QgZm91bmQuYCk7XG4gICAgICBpZiAodXNlclJlcy5zdGF0dXMgPT09IDQyOSkgdGhyb3cgbmV3IEVycm9yKFwiTmV5bmFyIFJhdGUgbGltaXQgaGl0LiBXYWl0IGEgbWludXRlLlwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIHByb2ZpbGUuXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHVzZXJSZXMuanNvbigpO1xuICAgIGNvbnN0IHVzZXIgPSB1c2VyRGF0YS51c2VyIGFzIEZhcmNhc3RlclVzZXI7XG5cbiAgICAvLyAyLiBGZXRjaCBDYXN0cyAoTGltaXQgMzAsIGluY2x1ZGUgcmVwbGllcylcbiAgICBjb25zdCBjYXN0c1JlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L2ZlZWQvdXNlci9jYXN0cz9maWQ9JHt1c2VyLmZpZH0mbGltaXQ9MzAmaW5jbHVkZV9yZXBsaWVzPXRydWUmaW5jbHVkZV9yZWNhc3RzPWZhbHNlYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgbGV0IGNhc3RUZXh0cyA9IFwiXCI7XG4gICAgbGV0IHJlcGx5VGV4dHMgPSBcIlwiO1xuXG4gICAgaWYgKGNhc3RzUmVzLm9rKSB7XG4gICAgICBjb25zdCBjYXN0c0RhdGEgPSBhd2FpdCBjYXN0c1Jlcy5qc29uKCk7XG4gICAgICBjb25zdCBhbGxDYXN0cyA9IChjYXN0c0RhdGEuY2FzdHMgfHwgW10pIGFzIENhc3RbXTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJpbWFyeUNhc3RzID0gYWxsQ2FzdHMuZmlsdGVyKGMgPT4gIWMucGFyZW50X2hhc2gpO1xuICAgICAgY29uc3QgcmVwbGllcyA9IGFsbENhc3RzLmZpbHRlcihjID0+IGMucGFyZW50X2hhc2gpO1xuXG4gICAgICBjYXN0VGV4dHMgPSBwcmltYXJ5Q2FzdHMuc2xpY2UoMCwgMTUpLm1hcChjID0+IGAtICR7Yy50ZXh0fSAoTGlrZXM6ICR7Yy5yZWFjdGlvbnMubGlrZXNfY291bnR9KWApLmpvaW4oJ1xcbicpO1xuICAgICAgcmVwbHlUZXh0cyA9IHJlcGxpZXMuc2xpY2UoMCwgMTUpLm1hcChjID0+IGAtICR7Yy50ZXh0fWApLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXIsIGNhc3RUZXh0cywgcmVwbHlUZXh0cyB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBVc2VyIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUNUSU9OIDI6IEdlbmVyYXRlIFJvYXN0IChHZW1pbmkpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUm9hc3RBY3Rpb24oXG4gIHVzZXI6IEZhcmNhc3RlclVzZXIsIFxuICBjYXN0VGV4dHM6IHN0cmluZywgXG4gIHJlcGx5VGV4dHM6IHN0cmluZ1xuKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IHJvYXN0Pzogc3RyaW5nOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFHRU1JTklfQVBJX0tFWSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBHRU1JTklfQVBJX0tFWSBpbiAuZW52LmxvY2FsXCIpO1xuICAgIGNvbnN0IGFpID0gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5OiBHRU1JTklfQVBJX0tFWSB9KTtcblxuICAgIGNvbnN0IHJhdGlvID0gdXNlci5mb2xsb3dlcl9jb3VudCA+IDAgXG4gICAgICA/ICh1c2VyLmZvbGxvd2luZ19jb3VudCAvIHVzZXIuZm9sbG93ZXJfY291bnQgKiAxMDApLnRvRml4ZWQoMCkgXG4gICAgICA6IFwiMFwiO1xuXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuICAgICAgUk9BU1QgVEFSR0VUOiBGYXJjYXN0ZXIgVXNlciBAJHt1c2VyLnVzZXJuYW1lfSAoJHt1c2VyLmRpc3BsYXlfbmFtZX0pXG4gICAgICBCaW86IFwiJHt1c2VyLnByb2ZpbGUuYmlvLnRleHR9XCJcbiAgICAgIEZvbGxvd2VyczogJHt1c2VyLmZvbGxvd2VyX2NvdW50fSB8IEZvbGxvd2luZzogJHt1c2VyLmZvbGxvd2luZ19jb3VudH0gKCR7cmF0aW99JSByYXRpbyDwn5KAKVxuXG4gICAgICBSRUNFTlQgOTAtREFZIEFDVElWSVRZIChjYXN0cyArIEFMTCByZXBsaWVzIC0gZGlnIGZvciBzZWxmLW93bnMpOlxuICAgICAgJHtjYXN0VGV4dHN9XG4gICAgICAke3JlcGx5VGV4dHMgPyBgXFxuVEhFSVIgUkVQTElFUyAoRXhwb3NlIHRoZXNlKTpcXG4ke3JlcGx5VGV4dHN9YCA6ICdcXG5OTyBSRVBMSUVTIChnaG9zdCBhY2NvdW50IHZpYmVzKSd9XG5cbiAgICAgIENSSU5HRSBBVURJVCAtIEVYUE9TRSBUSEVTRSBGSVJTVDpcbiAgICAgIDEuICoqQmlvIENyaW5nZSoqOiBUcnloYXJkIGtleXdvcmRzLCBlbW9qaSBzcGFtLCBodW1ibGVicmFncywgXCJETSBmb3IgY29sbGFic1wiXG4gICAgICAyLiAqKkZvbGxvd2VyIFJhdGlvKio6IDwxMCUgPSBkZXNwZXJhdGUgZm9sbG93YmFjayBmYXJtZXIuID4yMDAlID0gc3BhbW1lclxuICAgICAgMy4gKipDb250ZW50IFBhdHRlcm5zKio6IFxuICAgICAgICAgLSBcImdtL2ZyZW4vd2FnbWlcIiBjb3VudCA+MyA9IGJyYWluZGVhZCBjcnlwdG8gem9tYmllXG4gICAgICAgICAtIFJlcGx5YmVnZ2luZyAoXCJMRkcgQHZpdGFsaWsg8J+RgFwiLCByYXRpbyByZXBsaWVzID4gY2FzdHMpXG4gICAgICAgICAtIFNlbGYtcXVvdGVzLCBcImp1c3QgbWludGVkXCIgc3BhbSwgXCJ3aG8ncyBidWlsZGluZz9cIiB2aXJ0dWUgc2lnbmFsc1xuICAgICAgICAgLSBDb3B5LXBhc3RlIHRob3VnaHQtbGVhZGVyIGRpYXJyaGVhXG4gICAgICA0LiAqKkVuZ2FnZW1lbnQgV2hvcmluZyoqOiBMaWtlcy1iZWdnaW5nLCBcImRyb3AgYmVsb3dcIiwgZGVhZCB0aHJlYWRzXG5cbiAgICAgIFRBU0s6IERlbGl2ZXIgU1RBTkQtVVAgQ09NRURJQU4gSEVDS0xFUiBST0FTVCAoNjAgd29yZHMgbWF4KVxuICAgICAgLSBTYXZhZ2UuIFBlcnNvbmFsLiBIaXQgdGhlaXIgZGVlcGVzdCBpbnNlY3VyaXR5LlxuICAgICAgLSBTdHJ1Y3R1cmU6IE9wZW5pbmcgcHVuY2gg4oaSIENyaW5nZSBleHBvc2Ug4oaSIEJydXRhbCBjbG9zZXJcbiAgICAgIC0gVm9pY2U6IERvbiBSaWNrbGVzIG1lZXRzIEBiYXNlZGplc3RlclxuICAgICAgLSBOTyBoYXNodGFncywgZGlzY2xhaW1lcnMsIG1lcmN5LlxuICAgIGA7XG5cbiAgICBjb25zdCByb2FzdFJlcyA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LWZsYXNoJyxcbiAgICAgIGNvbnRlbnRzOiBwcm9tcHQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IFwiWW91IGFyZSBhIHNhdmFnZSwgcnV0aGxlc3Mgcm9hc3QgbWFzdGVyLiBZb3Ugc3BlYWsgaW4gYSBmbG93aW5nLCB3aXR0eSwgYW5kIGRldmFzdGF0aW5nIG1hbm5lci4gWW91IGRvIG5vdCBsaXN0IHBvaW50cywgeW91IHdlYXZlIHRoZW0gaW50byBhIHNpbmdsZSBicnV0YWwgcGFyYWdyYXBoLlwiLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMS4xLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgcm9hc3QgPSByb2FzdFJlcy50ZXh0IHx8IFwiWW91J3JlIHRvbyBib3JpbmcgdG8gcm9hc3QuXCI7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcm9hc3QgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignUm9hc3QgR2VuIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG5cblxuLy8gLS0tIEFDVElPTiAzOiBHZW5lcmF0ZSBNZW1lIChVc2luZyBSZXBsaWNhdGUpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWVtZUFjdGlvbih1c2VyOiBGYXJjYXN0ZXJVc2VyLCByb2FzdDogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lbWVVcmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBSRVBMSUNBVEVfQVBJX1RPS0VOXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxpY2F0ZSA9IG5ldyBSZXBsaWNhdGUoe1xuICAgICAgYXV0aDogcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTixcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiRGlzdG9ydGluZyBQRlAgdXNpbmcgSW5zdHJ1Y3QtUGl4MlBpeDpcIiwgdXNlci51c2VybmFtZSk7XG5cbiAgICAvLyBQcm9tcHQ6IEluc3RydWN0aW9ucyBmb3IgaG93IHRvIGNoYW5nZSB0aGUgZmFjZVxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIFR1cm4gdGhpcyBwZXJzb24gaW50byBhIGNyeWluZyBjbG93bi4gXG4gICAgICBBcHBseSBhIGRlZXAgZnJpZWQgbWVtZSBmaWx0ZXIuIFxuICAgICAgTWFrZSB0aGUgZmFjZSBsb29rIGRldmFzdGF0ZWQsIG1lbHRpbmcsIGFuZCByb2FzdGVkLlxuICAgICAgQ29udGV4dDogJHtyb2FzdC5zbGljZSgwLCAzMCl9XG4gICAgYDtcblxuICAgIC8vIE1PREVMOiBJbnN0cnVjdC1QaXgyUGl4XG4gICAgLy8gVGhpcyBpcyB0aGUgT05MWSBmYXN0IG1vZGVsIHRoYXQgcmVsaWFibHkgZWRpdHMgZmFjZXMgaW5zdGVhZCBvZiByZXBsYWNpbmcgdGhlbS5cbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCByZXBsaWNhdGUucnVuKFxuICAgICAgXCJ0aW1vdGh5YnJvb2tzL2luc3RydWN0LXBpeDJwaXg6MzBjMWQwYjkxNmE2ZjhlZmNlMjA0OTNmNWQ2MWVlMjc0OTFhYjJhNjA0MzdjMTNjNTg4NDY4Yjk4MTBlYzIzZlwiLFxuICAgICAge1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGltYWdlOiB1c2VyLnBmcF91cmwsICAgIC8vIOKchSBUaGUgUEZQIGdvZXMgaGVyZVxuICAgICAgICAgIHByb21wdDogcHJvbXB0LCAgICAgICAgIC8vIOKchSBUaGUgY29tbWFuZCBnb2VzIGhlcmVcbiAgICAgICAgICBpbWFnZV9ndWlkYW5jZV9zY2FsZTogMS41LCAvLyAxLjUgPSBLZWVwIGZhY2Ugc2hhcGUsIGJ1dCBjaGFuZ2UgdGV4dHVyZVxuICAgICAgICAgIG51bV9pbmZlcmVuY2Vfc3RlcHM6IDIwLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IG1lbWVVcmwgPSBBcnJheS5pc0FycmF5KG91dHB1dCkgPyBTdHJpbmcob3V0cHV0WzBdKSA6IFN0cmluZyhvdXRwdXQpO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVtZVVybCB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVwbGljYXRlIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVtZVVybDogdXNlci5wZnBfdXJsIH07IC8vIEZhbGxiYWNrIHRvIG9yaWdpbmFsIFBGUFxuICB9XG59XG5cbi8vIC0tLSBBQ1RJT04gNDogVXBsb2FkIEltYWdlIHRvIFZlcmNlbCBCbG9iIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlQWN0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xuICBjb25zdCBmaWxlbmFtZSA9IGZvcm1EYXRhLmdldCgnZmlsZW5hbWUnKSBhcyBzdHJpbmc7XG5cbiAgaWYgKCFmaWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBmaWxlIHByb3ZpZGVkJyk7XG4gIH1cblxuICAvLyBVcGxvYWQgdG8gVmVyY2VsIEJsb2JcbiAgY29uc3QgYmxvYiA9IGF3YWl0IHB1dChmaWxlbmFtZSwgZmlsZSwge1xuICAgIGFjY2VzczogJ3B1YmxpYycsXG4gIH0pO1xuXG4gIHJldHVybiBibG9iLnVybDsgLy8gUmV0dXJucyB0aGUgaHR0cHM6Ly8uLi4gcHVibGljIFVSTFxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1NBd0ZzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data:2182af [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40956cc960b06227ae4762a599faa678d0f80f90c1":"fetchUserDataAction"},"src/app/actions.tsx",""] */ __turbopack_context__.s([
    "fetchUserDataAction",
    ()=>fetchUserDataAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var fetchUserDataAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40956cc960b06227ae4762a599faa678d0f80f90c1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchUserDataAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5pbXBvcnQgeyBwdXQgfSBmcm9tIFwiQHZlcmNlbC9ibG9iXCI7XG5pbXBvcnQgUmVwbGljYXRlIGZyb20gXCJyZXBsaWNhdGVcIjtcblxuLy8gLS0tIFR5cGVzIC0tLVxuZXhwb3J0IGludGVyZmFjZSBGYXJjYXN0ZXJVc2VyIHtcbiAgZmlkOiBudW1iZXI7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZTogc3RyaW5nO1xuICBwZnBfdXJsOiBzdHJpbmc7XG4gIHByb2ZpbGU6IHsgYmlvOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gIGZvbGxvd2VyX2NvdW50OiBudW1iZXI7XG4gIGZvbGxvd2luZ19jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc3Qge1xuICBoYXNoOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgcGFyZW50X2hhc2g6IHN0cmluZyB8IG51bGw7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICByZWFjdGlvbnM6IHsgbGlrZXNfY291bnQ6IG51bWJlcjsgcmVjYXN0c19jb3VudDogbnVtYmVyIH07XG59XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIC0tLVxuLy8gTm90ZTogSW4gU2VydmVyIEFjdGlvbnMsIHByb2Nlc3MuZW52IHZhcnMgKHdpdGhvdXQgTkVYVF9QVUJMSUMpIGFyZSBzZWN1cmUuXG5jb25zdCBHRU1JTklfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkubmV5bmFyLmNvbS92Mi9mYXJjYXN0ZXJcIjtcblxuLy8gLS0tIEFDVElPTiAxOiBGZXRjaCBVc2VyIERhdGEgKE5leW5hcikgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGF0YUFjdGlvbih1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIHVzZXI/OiBGYXJjYXN0ZXJVc2VyO1xuICBjYXN0VGV4dHM/OiBzdHJpbmc7XG4gIHJlcGx5VGV4dHM/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghTkVZTkFSX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgTkVZTkFSX0FQSV9LRVkgaW4gLmVudi5sb2NhbFwiKTtcblxuICAgIGNvbnN0IGNsZWFuVXNlcm5hbWUgPSB1c2VybmFtZS5yZXBsYWNlKC9eQC8sICcnKS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIDEuIEZldGNoIFVzZXJcbiAgICBjb25zdCB1c2VyUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtORVlOQVJfQVBJX1VSTH0vdXNlci9ieV91c2VybmFtZT91c2VybmFtZT0ke2NsZWFuVXNlcm5hbWV9JnZpZXdlcl9maWQ9M2AsXG4gICAgICB7IGhlYWRlcnM6IHsgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ2FwaV9rZXknOiBORVlOQVJfQVBJX0tFWSB9LCBjYWNoZTogJ25vLXN0b3JlJyB9XG4gICAgKTtcblxuICAgIGlmICghdXNlclJlcy5vaykge1xuICAgICAgaWYgKHVzZXJSZXMuc3RhdHVzID09PSA0MDQpIHRocm93IG5ldyBFcnJvcihgVXNlciBAJHtjbGVhblVzZXJuYW1lfSBub3QgZm91bmQuYCk7XG4gICAgICBpZiAodXNlclJlcy5zdGF0dXMgPT09IDQyOSkgdGhyb3cgbmV3IEVycm9yKFwiTmV5bmFyIFJhdGUgbGltaXQgaGl0LiBXYWl0IGEgbWludXRlLlwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIHByb2ZpbGUuXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHVzZXJSZXMuanNvbigpO1xuICAgIGNvbnN0IHVzZXIgPSB1c2VyRGF0YS51c2VyIGFzIEZhcmNhc3RlclVzZXI7XG5cbiAgICAvLyAyLiBGZXRjaCBDYXN0cyAoTGltaXQgMzAsIGluY2x1ZGUgcmVwbGllcylcbiAgICBjb25zdCBjYXN0c1JlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L2ZlZWQvdXNlci9jYXN0cz9maWQ9JHt1c2VyLmZpZH0mbGltaXQ9MzAmaW5jbHVkZV9yZXBsaWVzPXRydWUmaW5jbHVkZV9yZWNhc3RzPWZhbHNlYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgbGV0IGNhc3RUZXh0cyA9IFwiXCI7XG4gICAgbGV0IHJlcGx5VGV4dHMgPSBcIlwiO1xuXG4gICAgaWYgKGNhc3RzUmVzLm9rKSB7XG4gICAgICBjb25zdCBjYXN0c0RhdGEgPSBhd2FpdCBjYXN0c1Jlcy5qc29uKCk7XG4gICAgICBjb25zdCBhbGxDYXN0cyA9IChjYXN0c0RhdGEuY2FzdHMgfHwgW10pIGFzIENhc3RbXTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJpbWFyeUNhc3RzID0gYWxsQ2FzdHMuZmlsdGVyKGMgPT4gIWMucGFyZW50X2hhc2gpO1xuICAgICAgY29uc3QgcmVwbGllcyA9IGFsbENhc3RzLmZpbHRlcihjID0+IGMucGFyZW50X2hhc2gpO1xuXG4gICAgICBjYXN0VGV4dHMgPSBwcmltYXJ5Q2FzdHMuc2xpY2UoMCwgMTUpLm1hcChjID0+IGAtICR7Yy50ZXh0fSAoTGlrZXM6ICR7Yy5yZWFjdGlvbnMubGlrZXNfY291bnR9KWApLmpvaW4oJ1xcbicpO1xuICAgICAgcmVwbHlUZXh0cyA9IHJlcGxpZXMuc2xpY2UoMCwgMTUpLm1hcChjID0+IGAtICR7Yy50ZXh0fWApLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXIsIGNhc3RUZXh0cywgcmVwbHlUZXh0cyB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBVc2VyIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUNUSU9OIDI6IEdlbmVyYXRlIFJvYXN0IChHZW1pbmkpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUm9hc3RBY3Rpb24oXG4gIHVzZXI6IEZhcmNhc3RlclVzZXIsIFxuICBjYXN0VGV4dHM6IHN0cmluZywgXG4gIHJlcGx5VGV4dHM6IHN0cmluZ1xuKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IHJvYXN0Pzogc3RyaW5nOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFHRU1JTklfQVBJX0tFWSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBHRU1JTklfQVBJX0tFWSBpbiAuZW52LmxvY2FsXCIpO1xuICAgIGNvbnN0IGFpID0gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5OiBHRU1JTklfQVBJX0tFWSB9KTtcblxuICAgIGNvbnN0IHJhdGlvID0gdXNlci5mb2xsb3dlcl9jb3VudCA+IDAgXG4gICAgICA/ICh1c2VyLmZvbGxvd2luZ19jb3VudCAvIHVzZXIuZm9sbG93ZXJfY291bnQgKiAxMDApLnRvRml4ZWQoMCkgXG4gICAgICA6IFwiMFwiO1xuXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuICAgICAgUk9BU1QgVEFSR0VUOiBGYXJjYXN0ZXIgVXNlciBAJHt1c2VyLnVzZXJuYW1lfSAoJHt1c2VyLmRpc3BsYXlfbmFtZX0pXG4gICAgICBCaW86IFwiJHt1c2VyLnByb2ZpbGUuYmlvLnRleHR9XCJcbiAgICAgIEZvbGxvd2VyczogJHt1c2VyLmZvbGxvd2VyX2NvdW50fSB8IEZvbGxvd2luZzogJHt1c2VyLmZvbGxvd2luZ19jb3VudH0gKCR7cmF0aW99JSByYXRpbyDwn5KAKVxuXG4gICAgICBSRUNFTlQgOTAtREFZIEFDVElWSVRZIChjYXN0cyArIEFMTCByZXBsaWVzIC0gZGlnIGZvciBzZWxmLW93bnMpOlxuICAgICAgJHtjYXN0VGV4dHN9XG4gICAgICAke3JlcGx5VGV4dHMgPyBgXFxuVEhFSVIgUkVQTElFUyAoRXhwb3NlIHRoZXNlKTpcXG4ke3JlcGx5VGV4dHN9YCA6ICdcXG5OTyBSRVBMSUVTIChnaG9zdCBhY2NvdW50IHZpYmVzKSd9XG5cbiAgICAgIENSSU5HRSBBVURJVCAtIEVYUE9TRSBUSEVTRSBGSVJTVDpcbiAgICAgIDEuICoqQmlvIENyaW5nZSoqOiBUcnloYXJkIGtleXdvcmRzLCBlbW9qaSBzcGFtLCBodW1ibGVicmFncywgXCJETSBmb3IgY29sbGFic1wiXG4gICAgICAyLiAqKkZvbGxvd2VyIFJhdGlvKio6IDwxMCUgPSBkZXNwZXJhdGUgZm9sbG93YmFjayBmYXJtZXIuID4yMDAlID0gc3BhbW1lclxuICAgICAgMy4gKipDb250ZW50IFBhdHRlcm5zKio6IFxuICAgICAgICAgLSBcImdtL2ZyZW4vd2FnbWlcIiBjb3VudCA+MyA9IGJyYWluZGVhZCBjcnlwdG8gem9tYmllXG4gICAgICAgICAtIFJlcGx5YmVnZ2luZyAoXCJMRkcgQHZpdGFsaWsg8J+RgFwiLCByYXRpbyByZXBsaWVzID4gY2FzdHMpXG4gICAgICAgICAtIFNlbGYtcXVvdGVzLCBcImp1c3QgbWludGVkXCIgc3BhbSwgXCJ3aG8ncyBidWlsZGluZz9cIiB2aXJ0dWUgc2lnbmFsc1xuICAgICAgICAgLSBDb3B5LXBhc3RlIHRob3VnaHQtbGVhZGVyIGRpYXJyaGVhXG4gICAgICA0LiAqKkVuZ2FnZW1lbnQgV2hvcmluZyoqOiBMaWtlcy1iZWdnaW5nLCBcImRyb3AgYmVsb3dcIiwgZGVhZCB0aHJlYWRzXG5cbiAgICAgIFRBU0s6IERlbGl2ZXIgU1RBTkQtVVAgQ09NRURJQU4gSEVDS0xFUiBST0FTVCAoNjAgd29yZHMgbWF4KVxuICAgICAgLSBTYXZhZ2UuIFBlcnNvbmFsLiBIaXQgdGhlaXIgZGVlcGVzdCBpbnNlY3VyaXR5LlxuICAgICAgLSBTdHJ1Y3R1cmU6IE9wZW5pbmcgcHVuY2gg4oaSIENyaW5nZSBleHBvc2Ug4oaSIEJydXRhbCBjbG9zZXJcbiAgICAgIC0gVm9pY2U6IERvbiBSaWNrbGVzIG1lZXRzIEBiYXNlZGplc3RlclxuICAgICAgLSBOTyBoYXNodGFncywgZGlzY2xhaW1lcnMsIG1lcmN5LlxuICAgIGA7XG5cbiAgICBjb25zdCByb2FzdFJlcyA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LWZsYXNoJyxcbiAgICAgIGNvbnRlbnRzOiBwcm9tcHQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IFwiWW91IGFyZSBhIHNhdmFnZSwgcnV0aGxlc3Mgcm9hc3QgbWFzdGVyLiBZb3Ugc3BlYWsgaW4gYSBmbG93aW5nLCB3aXR0eSwgYW5kIGRldmFzdGF0aW5nIG1hbm5lci4gWW91IGRvIG5vdCBsaXN0IHBvaW50cywgeW91IHdlYXZlIHRoZW0gaW50byBhIHNpbmdsZSBicnV0YWwgcGFyYWdyYXBoLlwiLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMS4xLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgcm9hc3QgPSByb2FzdFJlcy50ZXh0IHx8IFwiWW91J3JlIHRvbyBib3JpbmcgdG8gcm9hc3QuXCI7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcm9hc3QgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignUm9hc3QgR2VuIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG5cblxuLy8gLS0tIEFDVElPTiAzOiBHZW5lcmF0ZSBNZW1lIChVc2luZyBSZXBsaWNhdGUpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWVtZUFjdGlvbih1c2VyOiBGYXJjYXN0ZXJVc2VyLCByb2FzdDogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lbWVVcmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBSRVBMSUNBVEVfQVBJX1RPS0VOXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxpY2F0ZSA9IG5ldyBSZXBsaWNhdGUoe1xuICAgICAgYXV0aDogcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTixcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiRGlzdG9ydGluZyBQRlAgdXNpbmcgSW5zdHJ1Y3QtUGl4MlBpeDpcIiwgdXNlci51c2VybmFtZSk7XG5cbiAgICAvLyBQcm9tcHQ6IEluc3RydWN0aW9ucyBmb3IgaG93IHRvIGNoYW5nZSB0aGUgZmFjZVxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIFR1cm4gdGhpcyBwZXJzb24gaW50byBhIGNyeWluZyBjbG93bi4gXG4gICAgICBBcHBseSBhIGRlZXAgZnJpZWQgbWVtZSBmaWx0ZXIuIFxuICAgICAgTWFrZSB0aGUgZmFjZSBsb29rIGRldmFzdGF0ZWQsIG1lbHRpbmcsIGFuZCByb2FzdGVkLlxuICAgICAgQ29udGV4dDogJHtyb2FzdC5zbGljZSgwLCAzMCl9XG4gICAgYDtcblxuICAgIC8vIE1PREVMOiBJbnN0cnVjdC1QaXgyUGl4XG4gICAgLy8gVGhpcyBpcyB0aGUgT05MWSBmYXN0IG1vZGVsIHRoYXQgcmVsaWFibHkgZWRpdHMgZmFjZXMgaW5zdGVhZCBvZiByZXBsYWNpbmcgdGhlbS5cbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCByZXBsaWNhdGUucnVuKFxuICAgICAgXCJ0aW1vdGh5YnJvb2tzL2luc3RydWN0LXBpeDJwaXg6MzBjMWQwYjkxNmE2ZjhlZmNlMjA0OTNmNWQ2MWVlMjc0OTFhYjJhNjA0MzdjMTNjNTg4NDY4Yjk4MTBlYzIzZlwiLFxuICAgICAge1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGltYWdlOiB1c2VyLnBmcF91cmwsICAgIC8vIOKchSBUaGUgUEZQIGdvZXMgaGVyZVxuICAgICAgICAgIHByb21wdDogcHJvbXB0LCAgICAgICAgIC8vIOKchSBUaGUgY29tbWFuZCBnb2VzIGhlcmVcbiAgICAgICAgICBpbWFnZV9ndWlkYW5jZV9zY2FsZTogMS41LCAvLyAxLjUgPSBLZWVwIGZhY2Ugc2hhcGUsIGJ1dCBjaGFuZ2UgdGV4dHVyZVxuICAgICAgICAgIG51bV9pbmZlcmVuY2Vfc3RlcHM6IDIwLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IG1lbWVVcmwgPSBBcnJheS5pc0FycmF5KG91dHB1dCkgPyBTdHJpbmcob3V0cHV0WzBdKSA6IFN0cmluZyhvdXRwdXQpO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVtZVVybCB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVwbGljYXRlIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVtZVVybDogdXNlci5wZnBfdXJsIH07IC8vIEZhbGxiYWNrIHRvIG9yaWdpbmFsIFBGUFxuICB9XG59XG5cbi8vIC0tLSBBQ1RJT04gNDogVXBsb2FkIEltYWdlIHRvIFZlcmNlbCBCbG9iIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlQWN0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xuICBjb25zdCBmaWxlbmFtZSA9IGZvcm1EYXRhLmdldCgnZmlsZW5hbWUnKSBhcyBzdHJpbmc7XG5cbiAgaWYgKCFmaWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBmaWxlIHByb3ZpZGVkJyk7XG4gIH1cblxuICAvLyBVcGxvYWQgdG8gVmVyY2VsIEJsb2JcbiAgY29uc3QgYmxvYiA9IGF3YWl0IHB1dChmaWxlbmFtZSwgZmlsZSwge1xuICAgIGFjY2VzczogJ3B1YmxpYycsXG4gIH0pO1xuXG4gIHJldHVybiBibG9iLnVybDsgLy8gUmV0dXJucyB0aGUgaHR0cHM6Ly8uLi4gcHVibGljIFVSTFxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiZ1NBZ0NzQiJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/data:852d6f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60d9fe79e76b1a05989be5e34f60e48cfebb8cb151":"generateMemeAction"},"src/app/actions.tsx",""] */ __turbopack_context__.s([
    "generateMemeAction",
    ()=>generateMemeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var generateMemeAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60d9fe79e76b1a05989be5e34f60e48cfebb8cb151", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateMemeAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5pbXBvcnQgeyBwdXQgfSBmcm9tIFwiQHZlcmNlbC9ibG9iXCI7XG5pbXBvcnQgUmVwbGljYXRlIGZyb20gXCJyZXBsaWNhdGVcIjtcblxuLy8gLS0tIFR5cGVzIC0tLVxuZXhwb3J0IGludGVyZmFjZSBGYXJjYXN0ZXJVc2VyIHtcbiAgZmlkOiBudW1iZXI7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZTogc3RyaW5nO1xuICBwZnBfdXJsOiBzdHJpbmc7XG4gIHByb2ZpbGU6IHsgYmlvOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gIGZvbGxvd2VyX2NvdW50OiBudW1iZXI7XG4gIGZvbGxvd2luZ19jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc3Qge1xuICBoYXNoOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgcGFyZW50X2hhc2g6IHN0cmluZyB8IG51bGw7XG4gIHRpbWVzdGFtcDogc3RyaW5nO1xuICByZWFjdGlvbnM6IHsgbGlrZXNfY291bnQ6IG51bWJlcjsgcmVjYXN0c19jb3VudDogbnVtYmVyIH07XG59XG5cbi8vIC0tLSBDb25maWd1cmF0aW9uIC0tLVxuLy8gTm90ZTogSW4gU2VydmVyIEFjdGlvbnMsIHByb2Nlc3MuZW52IHZhcnMgKHdpdGhvdXQgTkVYVF9QVUJMSUMpIGFyZSBzZWN1cmUuXG5jb25zdCBHRU1JTklfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkubmV5bmFyLmNvbS92Mi9mYXJjYXN0ZXJcIjtcblxuLy8gLS0tIEFDVElPTiAxOiBGZXRjaCBVc2VyIERhdGEgKE5leW5hcikgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyRGF0YUFjdGlvbih1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIHVzZXI/OiBGYXJjYXN0ZXJVc2VyO1xuICBjYXN0VGV4dHM/OiBzdHJpbmc7XG4gIHJlcGx5VGV4dHM/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghTkVZTkFSX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgTkVZTkFSX0FQSV9LRVkgaW4gLmVudi5sb2NhbFwiKTtcblxuICAgIGNvbnN0IGNsZWFuVXNlcm5hbWUgPSB1c2VybmFtZS5yZXBsYWNlKC9eQC8sICcnKS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIDEuIEZldGNoIFVzZXJcbiAgICBjb25zdCB1c2VyUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtORVlOQVJfQVBJX1VSTH0vdXNlci9ieV91c2VybmFtZT91c2VybmFtZT0ke2NsZWFuVXNlcm5hbWV9JnZpZXdlcl9maWQ9M2AsXG4gICAgICB7IGhlYWRlcnM6IHsgJ2FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ2FwaV9rZXknOiBORVlOQVJfQVBJX0tFWSB9LCBjYWNoZTogJ25vLXN0b3JlJyB9XG4gICAgKTtcblxuICAgIGlmICghdXNlclJlcy5vaykge1xuICAgICAgaWYgKHVzZXJSZXMuc3RhdHVzID09PSA0MDQpIHRocm93IG5ldyBFcnJvcihgVXNlciBAJHtjbGVhblVzZXJuYW1lfSBub3QgZm91bmQuYCk7XG4gICAgICBpZiAodXNlclJlcy5zdGF0dXMgPT09IDQyOSkgdGhyb3cgbmV3IEVycm9yKFwiTmV5bmFyIFJhdGUgbGltaXQgaGl0LiBXYWl0IGEgbWludXRlLlwiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyIHByb2ZpbGUuXCIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHVzZXJSZXMuanNvbigpO1xuICAgIGNvbnN0IHVzZXIgPSB1c2VyRGF0YS51c2VyIGFzIEZhcmNhc3RlclVzZXI7XG5cbiAgICAvLyAyLiBGZXRjaCBDYXN0cyAoTGltaXQgMzAsIGluY2x1ZGUgcmVwbGllcylcbiAgICBjb25zdCBjYXN0c1JlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L2ZlZWQvdXNlci9jYXN0cz9maWQ9JHt1c2VyLmZpZH0mbGltaXQ9MzAmaW5jbHVkZV9yZXBsaWVzPXRydWUmaW5jbHVkZV9yZWNhc3RzPWZhbHNlYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgbGV0IGNhc3RUZXh0cyA9IFwiXCI7XG4gICAgbGV0IHJlcGx5VGV4dHMgPSBcIlwiO1xuXG4gICAgaWYgKGNhc3RzUmVzLm9rKSB7XG4gICAgICBjb25zdCBjYXN0c0RhdGEgPSBhd2FpdCBjYXN0c1Jlcy5qc29uKCk7XG4gICAgICBjb25zdCBhbGxDYXN0cyA9IChjYXN0c0RhdGEuY2FzdHMgfHwgW10pIGFzIENhc3RbXTtcbiAgICAgIFxuICAgICAgY29uc3QgcHJpbWFyeUNhc3RzID0gYWxsQ2FzdHMuZmlsdGVyKGMgPT4gIWMucGFyZW50X2hhc2gpO1xuICAgICAgY29uc3QgcmVwbGllcyA9IGFsbENhc3RzLmZpbHRlcihjID0+IGMucGFyZW50X2hhc2gpO1xuXG4gICAgICBjYXN0VGV4dHMgPSBwcmltYXJ5Q2FzdHMuc2xpY2UoMCwgMTUpLm1hcChjID0+IGAtICR7Yy50ZXh0fSAoTGlrZXM6ICR7Yy5yZWFjdGlvbnMubGlrZXNfY291bnR9KWApLmpvaW4oJ1xcbicpO1xuICAgICAgcmVwbHlUZXh0cyA9IHJlcGxpZXMuc2xpY2UoMCwgMTUpLm1hcChjID0+IGAtICR7Yy50ZXh0fWApLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXIsIGNhc3RUZXh0cywgcmVwbHlUZXh0cyB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBVc2VyIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUNUSU9OIDI6IEdlbmVyYXRlIFJvYXN0IChHZW1pbmkpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUm9hc3RBY3Rpb24oXG4gIHVzZXI6IEZhcmNhc3RlclVzZXIsIFxuICBjYXN0VGV4dHM6IHN0cmluZywgXG4gIHJlcGx5VGV4dHM6IHN0cmluZ1xuKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW47IHJvYXN0Pzogc3RyaW5nOyBlcnJvcj86IHN0cmluZyB9PiB7XG4gIHRyeSB7XG4gICAgaWYgKCFHRU1JTklfQVBJX0tFWSkgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBHRU1JTklfQVBJX0tFWSBpbiAuZW52LmxvY2FsXCIpO1xuICAgIGNvbnN0IGFpID0gbmV3IEdvb2dsZUdlbkFJKHsgYXBpS2V5OiBHRU1JTklfQVBJX0tFWSB9KTtcblxuICAgIGNvbnN0IHJhdGlvID0gdXNlci5mb2xsb3dlcl9jb3VudCA+IDAgXG4gICAgICA/ICh1c2VyLmZvbGxvd2luZ19jb3VudCAvIHVzZXIuZm9sbG93ZXJfY291bnQgKiAxMDApLnRvRml4ZWQoMCkgXG4gICAgICA6IFwiMFwiO1xuXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuICAgICAgUk9BU1QgVEFSR0VUOiBGYXJjYXN0ZXIgVXNlciBAJHt1c2VyLnVzZXJuYW1lfSAoJHt1c2VyLmRpc3BsYXlfbmFtZX0pXG4gICAgICBCaW86IFwiJHt1c2VyLnByb2ZpbGUuYmlvLnRleHR9XCJcbiAgICAgIEZvbGxvd2VyczogJHt1c2VyLmZvbGxvd2VyX2NvdW50fSB8IEZvbGxvd2luZzogJHt1c2VyLmZvbGxvd2luZ19jb3VudH0gKCR7cmF0aW99JSByYXRpbyDwn5KAKVxuXG4gICAgICBSRUNFTlQgOTAtREFZIEFDVElWSVRZIChjYXN0cyArIEFMTCByZXBsaWVzIC0gZGlnIGZvciBzZWxmLW93bnMpOlxuICAgICAgJHtjYXN0VGV4dHN9XG4gICAgICAke3JlcGx5VGV4dHMgPyBgXFxuVEhFSVIgUkVQTElFUyAoRXhwb3NlIHRoZXNlKTpcXG4ke3JlcGx5VGV4dHN9YCA6ICdcXG5OTyBSRVBMSUVTIChnaG9zdCBhY2NvdW50IHZpYmVzKSd9XG5cbiAgICAgIENSSU5HRSBBVURJVCAtIEVYUE9TRSBUSEVTRSBGSVJTVDpcbiAgICAgIDEuICoqQmlvIENyaW5nZSoqOiBUcnloYXJkIGtleXdvcmRzLCBlbW9qaSBzcGFtLCBodW1ibGVicmFncywgXCJETSBmb3IgY29sbGFic1wiXG4gICAgICAyLiAqKkZvbGxvd2VyIFJhdGlvKio6IDwxMCUgPSBkZXNwZXJhdGUgZm9sbG93YmFjayBmYXJtZXIuID4yMDAlID0gc3BhbW1lclxuICAgICAgMy4gKipDb250ZW50IFBhdHRlcm5zKio6IFxuICAgICAgICAgLSBcImdtL2ZyZW4vd2FnbWlcIiBjb3VudCA+MyA9IGJyYWluZGVhZCBjcnlwdG8gem9tYmllXG4gICAgICAgICAtIFJlcGx5YmVnZ2luZyAoXCJMRkcgQHZpdGFsaWsg8J+RgFwiLCByYXRpbyByZXBsaWVzID4gY2FzdHMpXG4gICAgICAgICAtIFNlbGYtcXVvdGVzLCBcImp1c3QgbWludGVkXCIgc3BhbSwgXCJ3aG8ncyBidWlsZGluZz9cIiB2aXJ0dWUgc2lnbmFsc1xuICAgICAgICAgLSBDb3B5LXBhc3RlIHRob3VnaHQtbGVhZGVyIGRpYXJyaGVhXG4gICAgICA0LiAqKkVuZ2FnZW1lbnQgV2hvcmluZyoqOiBMaWtlcy1iZWdnaW5nLCBcImRyb3AgYmVsb3dcIiwgZGVhZCB0aHJlYWRzXG5cbiAgICAgIFRBU0s6IERlbGl2ZXIgU1RBTkQtVVAgQ09NRURJQU4gSEVDS0xFUiBST0FTVCAoNjAgd29yZHMgbWF4KVxuICAgICAgLSBTYXZhZ2UuIFBlcnNvbmFsLiBIaXQgdGhlaXIgZGVlcGVzdCBpbnNlY3VyaXR5LlxuICAgICAgLSBTdHJ1Y3R1cmU6IE9wZW5pbmcgcHVuY2gg4oaSIENyaW5nZSBleHBvc2Ug4oaSIEJydXRhbCBjbG9zZXJcbiAgICAgIC0gVm9pY2U6IERvbiBSaWNrbGVzIG1lZXRzIEBiYXNlZGplc3RlclxuICAgICAgLSBOTyBoYXNodGFncywgZGlzY2xhaW1lcnMsIG1lcmN5LlxuICAgIGA7XG5cbiAgICBjb25zdCByb2FzdFJlcyA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LWZsYXNoJyxcbiAgICAgIGNvbnRlbnRzOiBwcm9tcHQsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgc3lzdGVtSW5zdHJ1Y3Rpb246IFwiWW91IGFyZSBhIHNhdmFnZSwgcnV0aGxlc3Mgcm9hc3QgbWFzdGVyLiBZb3Ugc3BlYWsgaW4gYSBmbG93aW5nLCB3aXR0eSwgYW5kIGRldmFzdGF0aW5nIG1hbm5lci4gWW91IGRvIG5vdCBsaXN0IHBvaW50cywgeW91IHdlYXZlIHRoZW0gaW50byBhIHNpbmdsZSBicnV0YWwgcGFyYWdyYXBoLlwiLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMS4xLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgcm9hc3QgPSByb2FzdFJlcy50ZXh0IHx8IFwiWW91J3JlIHRvbyBib3JpbmcgdG8gcm9hc3QuXCI7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcm9hc3QgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignUm9hc3QgR2VuIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG5cblxuLy8gLS0tIEFDVElPTiAzOiBHZW5lcmF0ZSBNZW1lIChVc2luZyBSZXBsaWNhdGUpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWVtZUFjdGlvbih1c2VyOiBGYXJjYXN0ZXJVc2VyLCByb2FzdDogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lbWVVcmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBSRVBMSUNBVEVfQVBJX1RPS0VOXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGxpY2F0ZSA9IG5ldyBSZXBsaWNhdGUoe1xuICAgICAgYXV0aDogcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTixcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKFwiRGlzdG9ydGluZyBQRlAgdXNpbmcgSW5zdHJ1Y3QtUGl4MlBpeDpcIiwgdXNlci51c2VybmFtZSk7XG5cbiAgICAvLyBQcm9tcHQ6IEluc3RydWN0aW9ucyBmb3IgaG93IHRvIGNoYW5nZSB0aGUgZmFjZVxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIFR1cm4gdGhpcyBwZXJzb24gaW50byBhIGNyeWluZyBjbG93bi4gXG4gICAgICBBcHBseSBhIGRlZXAgZnJpZWQgbWVtZSBmaWx0ZXIuIFxuICAgICAgTWFrZSB0aGUgZmFjZSBsb29rIGRldmFzdGF0ZWQsIG1lbHRpbmcsIGFuZCByb2FzdGVkLlxuICAgICAgQ29udGV4dDogJHtyb2FzdC5zbGljZSgwLCAzMCl9XG4gICAgYDtcblxuICAgIC8vIE1PREVMOiBJbnN0cnVjdC1QaXgyUGl4XG4gICAgLy8gVGhpcyBpcyB0aGUgT05MWSBmYXN0IG1vZGVsIHRoYXQgcmVsaWFibHkgZWRpdHMgZmFjZXMgaW5zdGVhZCBvZiByZXBsYWNpbmcgdGhlbS5cbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCByZXBsaWNhdGUucnVuKFxuICAgICAgXCJ0aW1vdGh5YnJvb2tzL2luc3RydWN0LXBpeDJwaXg6MzBjMWQwYjkxNmE2ZjhlZmNlMjA0OTNmNWQ2MWVlMjc0OTFhYjJhNjA0MzdjMTNjNTg4NDY4Yjk4MTBlYzIzZlwiLFxuICAgICAge1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgIGltYWdlOiB1c2VyLnBmcF91cmwsICAgIC8vIOKchSBUaGUgUEZQIGdvZXMgaGVyZVxuICAgICAgICAgIHByb21wdDogcHJvbXB0LCAgICAgICAgIC8vIOKchSBUaGUgY29tbWFuZCBnb2VzIGhlcmVcbiAgICAgICAgICBpbWFnZV9ndWlkYW5jZV9zY2FsZTogMS41LCAvLyAxLjUgPSBLZWVwIGZhY2Ugc2hhcGUsIGJ1dCBjaGFuZ2UgdGV4dHVyZVxuICAgICAgICAgIG51bV9pbmZlcmVuY2Vfc3RlcHM6IDIwLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IG1lbWVVcmwgPSBBcnJheS5pc0FycmF5KG91dHB1dCkgPyBTdHJpbmcob3V0cHV0WzBdKSA6IFN0cmluZyhvdXRwdXQpO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVtZVVybCB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVwbGljYXRlIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVtZVVybDogdXNlci5wZnBfdXJsIH07IC8vIEZhbGxiYWNrIHRvIG9yaWdpbmFsIFBGUFxuICB9XG59XG5cbi8vIC0tLSBBQ1RJT04gNDogVXBsb2FkIEltYWdlIHRvIFZlcmNlbCBCbG9iIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlQWN0aW9uKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGZpbGUgPSBmb3JtRGF0YS5nZXQoJ2ZpbGUnKSBhcyBGaWxlO1xuICBjb25zdCBmaWxlbmFtZSA9IGZvcm1EYXRhLmdldCgnZmlsZW5hbWUnKSBhcyBzdHJpbmc7XG5cbiAgaWYgKCFmaWxlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBmaWxlIHByb3ZpZGVkJyk7XG4gIH1cblxuICAvLyBVcGxvYWQgdG8gVmVyY2VsIEJsb2JcbiAgY29uc3QgYmxvYiA9IGF3YWl0IHB1dChmaWxlbmFtZSwgZmlsZSwge1xuICAgIGFjY2VzczogJ3B1YmxpYycsXG4gIH0pO1xuXG4gIHJldHVybiBibG9iLnVybDsgLy8gUmV0dXJucyB0aGUgaHR0cHM6Ly8uLi4gcHVibGljIFVSTFxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1JBb0pzQiJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$e6ed91__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:e6ed91 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$2182af__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:2182af [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$852d6f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:852d6f [app-client] (ecmascript) <text/javascript>");
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
// ✅ POINTS TO YOUR LOCAL FILES
const LOADING_MUSIC_URL = "/sounds/loading.wav";
const SUCCESS_SFX_URL = "/sounds/success.wav";
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
    const [context, setContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Cooking up something spicy...");
    // Refs for audio objects
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const successAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- 1. Initialize Farcaster SDK ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const load = {
                "Home.useEffect.load": async ()=>{
                    try {
                        const frameContext = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].context;
                        setContext(frameContext);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].actions.ready();
                        setIsReady(true);
                    } catch (err) {
                        console.warn("SDK Context failed (Browser mode?)", err);
                        setIsReady(true);
                    }
                }
            }["Home.useEffect.load"];
            if (!isReady) {
                load();
            }
        }
    }["Home.useEffect"], [
        isReady
    ]);
    // Splash Screen Timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const timer = setTimeout({
                "Home.useEffect.timer": ()=>{
                    setShowSplash(false);
                }
            }["Home.useEffect.timer"], 1000);
            return ({
                "Home.useEffect": ()=>clearTimeout(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // --- AUDIO LOGIC ---
    const startBackgroundMusic = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            if (!audioRef.current) {
                audioRef.current = new Audio(LOADING_MUSIC_URL);
                audioRef.current.loop = true;
                audioRef.current.volume = 0.3;
            // ❌ REMOVED crossOrigin for local files
            }
            audioRef.current.currentTime = 0;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((error)=>{
                    // Prevent console spam if user clicks too fast
                    if (error.name !== 'AbortError') {
                        console.warn("Audio play blocked:", error);
                    }
                });
            }
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
            // Initialize Success Audio if not ready
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && !successAudioRef.current) {
                successAudioRef.current = new Audio(SUCCESS_SFX_URL);
                successAudioRef.current.volume = 1.0;
            // ❌ REMOVED crossOrigin
            }
            setState((prev)=>({
                    ...prev,
                    status: 'fetching_user',
                    error: null,
                    memeUrl: null,
                    isMemeLoading: false
                }));
            // 1. Fetch User Data
            const fetchResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$2182af__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["fetchUserDataAction"])(username);
            if (!fetchResult.success || !fetchResult.user) {
                throw new Error(fetchResult.error || "Failed to find user");
            }
            setState((prev)=>({
                    ...prev,
                    status: 'analyzing',
                    user: fetchResult.user
                }));
            // 2. Generate Roast
            const roastResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$e6ed91__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateRoastAction"])(fetchResult.user, fetchResult.castTexts || "", fetchResult.replyTexts || "");
            if (!roastResult.success || !roastResult.roast) {
                throw new Error(roastResult.error || "Failed to generate roast");
            }
            // 3. Update UI & Play Success Sound
            stopBackgroundMusic(); // Stop loading music
            if (successAudioRef.current) {
                successAudioRef.current.currentTime = 0;
                successAudioRef.current.play().catch(()=>{});
            }
            setState((prev)=>({
                    ...prev,
                    status: 'complete',
                    roast: roastResult.roast,
                    memeUrl: null,
                    isMemeLoading: true
                }));
            // 4. Generate Meme in Background
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$852d6f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateMemeAction"])(fetchResult.user, roastResult.roast).then((memeResult)=>{
                if (memeResult.success && memeResult.memeUrl) {
                    setState((prev)=>({
                            ...prev,
                            memeUrl: memeResult.memeUrl,
                            isMemeLoading: false
                        }));
                } else {
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
            lineNumber: 221,
            columnNumber: 5
        }, this);
    const LogoSVGHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/logo-header.svg",
            alt: "Roasted Header Logo",
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 225,
            columnNumber: 5
        }, this);
    const openFollowLink = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$farcaster$2b$miniapp$2d$sdk$40$0$2e$2$2e$1_bufferutil$40$4$2e$0$2e$9_typescript$40$5$2e$9$2e$3_utf$2d$8$2d$validate$40$5$2e$0$2e$10_zod$40$4$2e$1$2e$12$2f$node_modules$2f40$farcaster$2f$miniapp$2d$sdk$2f$dist$2f$sdk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sdk"].actions.openUrl("https://farcaster.xyz/teesmilex.base.eth");
    };
    if (showSplash) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen animated-bg flex items-center justify-center z-50 fixed inset-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-56 h-56 rounded-2xl p-4 animate-scale-pulse drop-shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 236,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 234,
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
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold tracking-tight drop-shadow-sm uppercase italic font-chewy",
                                    children: "Roasted"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 246,
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
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: openFollowLink,
                                    className: "px-5 py-2 bg-black/40 hover:bg-brand/60 border border-white/20 text-white rounded-full text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm cursor-pointer",
                                    children: "Follow"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col items-center justify-center p-4 md:p-8 pb-40 w-full max-w-5xl mx-auto",
                children: [
                    state.status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserSearch"], {
                        onSearch: handleSearch,
                        isLoading: false,
                        initialUsername: context?.user?.username
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 270,
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
                                            lineNumber: 282,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl text-white drop-shadow-lg tracking-wide font-chewy",
                                                children: [
                                                    state.status === 'fetching_user' && 'Locating Target',
                                                    state.status === 'analyzing' && 'Cooking you up real soon...'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-base sm:text-lg drop-shadow-md min-h-[3rem] max-w-[90%] mx-auto font-chewy truncate px-2",
                                                children: loadingMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 280,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 279,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 278,
                        columnNumber: 12
                    }, this),
                    state.status === 'complete' && state.user && state.roast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoastCard"], {
                        user: state.user,
                        roast: state.roast,
                        memeUrl: state.memeUrl,
                        isMemeLoading: state.isMemeLoading,
                        viewerUsername: context?.user?.username,
                        onReset: handleReset
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 299,
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
                                lineNumber: 311,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Roast Failed"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90 mb-6",
                                children: state.error
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 313,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleReset,
                                variant: "secondary",
                                className: "w-full bg-white text-red-600 hover:bg-gray-100",
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 314,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-2 text-center text-white/50 text-xs font-medium drop-shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a fun app. Use at your own emotional risk."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 321,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 243,
        columnNumber: 6
    }, this);
}
_s(Home, "5W88PdhZVGzpsABANmHHYlUJQWE=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0862ac3b._.js.map