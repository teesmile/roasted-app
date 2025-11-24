module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Button = ({ children, variant = 'primary', isLoading = false, className = '', disabled, ...props })=>{
    const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
    const variants = {
        primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/20",
        secondary: "bg-white text-brand-900 hover:bg-gray-100 shadow-lg",
        outline: "border-2 border-brand-500 text-brand-400 hover:bg-brand-900/30"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseStyles} ${variants[variant]} ${className}`,
        disabled: disabled || isLoading,
        ...props,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-5 w-5 text-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/Input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Input = ({ label, error, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-300 mb-1.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/Input.tsx",
                lineNumber: 11,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${className}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/Input.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/UserSearch.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserSearch",
    ()=>UserSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Input.tsx [app-ssr] (ecmascript)");
;
;
;
;
const UserSearch = ({ onSearch, isLoading })=>{
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (username) {
            onSearch(username);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "w-full max-w-md space-y-6 animate-fade-in relative z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white",
                        children: "Who are you, really?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserSearch.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: [
                            "Enter your Farcaster handle to get",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
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
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/src/components/RoastCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoastCard",
    ()=>RoastCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.2.6_react@19.2.0/node_modules/react-markdown/lib/index.js [app-ssr] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const SFX = {
    WHOOSH: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3',
    BOING: 'https://commondatastorage.googleapis.com/codeskulptor-assets/jump.m4a'
};
// Mascot Logo - Updated to new file
const LOGO_DATA_URI = "/roasted-logo.png";
const RoastCard = ({ user, roast, memeUrl, isMemeLoading, onReset })=>{
    const [isGeneratingImage, setIsGeneratingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const playSound = (url, volume = 1.0, delay = 0)=>{
        setTimeout(()=>{
            try {
                const audio = new Audio(url);
                audio.volume = volume;
                audio.crossOrigin = "anonymous";
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(()=>{});
                }
            } catch (e) {
                console.error("Audio error", e);
            }
        }, delay);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        playSound(SFX.WHOOSH, 0.8);
    }, []);
    const generateCompositeImage = async ()=>{
        return new Promise((resolve)=>{
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                resolve(null);
                return;
            }
            // Narrow the 2D context to a non-null type for use inside async callbacks
            const ctx2 = ctx;
            const styles = getComputedStyle(document.body);
            const chewyFont = styles.getPropertyValue('--font-chewy') || 'cursive';
            const robotoFont = styles.getPropertyValue('--font-roboto') || 'Roboto, sans-serif';
            const width = 1080;
            const height = 1080;
            canvas.width = width;
            canvas.height = height;
            // 1. Background - #280b51 Theme
            const gradient = ctx2.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#280b51');
            gradient.addColorStop(1, '#0f0e17');
            ctx2.fillStyle = gradient;
            ctx2.fillRect(0, 0, width, height);
            // 2. Header
            ctx2.fillStyle = '#f15a24';
            ctx2.fillRect(0, 0, width, 100);
            ctx2.fillStyle = '#ffffff';
            ctx2.font = `50px ${chewyFont}`;
            ctx2.textAlign = 'center';
            ctx2.textBaseline = 'middle';
            ctx2.fillText('⚠️ EMOTIONAL DAMAGE DETECTED ⚠️', width / 2, 50);
            // 3. Draw Content Function
            const drawContent = (memeImg)=>{
                ctx2.textAlign = 'center';
                const footerTextX = width - 120;
                // Footer Text
                ctx2.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx2.font = '24px Inter, sans-serif';
                ctx2.fillText('Roasted Analysis', footerTextX, height - 65);
                ctx2.font = 'italic 20px Inter, sans-serif';
                ctx2.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx2.fillText('teesmile', footerTextX, height - 35);
                // Draw Logo next to footer text
                const logoImg = new Image();
                logoImg.onload = ()=>{
                    // Draw logo on top (transparent PNG)
                    ctx2.drawImage(logoImg, footerTextX - 140, height - 80, 50, 50);
                    finalize();
                };
                logoImg.onerror = finalize; // Proceed if logo fails
                logoImg.src = LOGO_DATA_URI;
                function finalize() {
                    // User Handle
                    ctx2.fillStyle = '#ffffff';
                    ctx2.font = 'bold 32px Inter, sans-serif';
                    ctx2.textAlign = 'left';
                    // Ensure backticks are used here
                    ctx2.fillText(`@${user.username}`, 50, height - 40);
                    // Roast Text - Roboto
                    ctx2.fillStyle = '#ffffff';
                    // Ensure backticks are used here
                    ctx2.font = `36px ${robotoFont}`;
                    ctx2.textAlign = 'center';
                    const imgSize = 320;
                    const textX = width / 2;
                    const textY = memeImg ? 150 + imgSize + 60 : 300;
                    const maxWidth = 950;
                    const lineHeight = 70;
                    const words = roast.split(' ');
                    let line = '';
                    let y = textY;
                    ctx2.textBaseline = 'alphabetic';
                    for(let n = 0; n < words.length; n++){
                        const testLine = line + words[n] + ' ';
                        const metrics = ctx2.measureText(testLine);
                        const testWidth = metrics.width;
                        if (testWidth > maxWidth && n > 0) {
                            ctx2.fillText(line, textX, y);
                            line = words[n] + ' ';
                            y += lineHeight;
                        } else {
                            line = testLine;
                        }
                    }
                    ctx2.fillText(line, textX, y);
                    canvas.toBlob((blob)=>{
                        resolve(blob);
                    }, 'image/png');
                }
            };
            if (memeUrl) {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = ()=>{
                    const imgSize = 320;
                    const cx = width / 2;
                    const cy = 150 + imgSize / 2;
                    ctx2.save();
                    ctx2.translate(cx, cy);
                    ctx2.rotate(-5 * Math.PI / 180);
                    ctx2.shadowColor = '#f15a24';
                    ctx2.shadowBlur = 40;
                    ctx2.drawImage(img, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                    ctx2.shadowBlur = 0;
                    ctx2.strokeStyle = '#374151';
                    ctx2.lineWidth = 4;
                    ctx2.strokeRect(-imgSize / 2, -imgSize / 2, imgSize, imgSize);
                    ctx2.restore();
                    drawContent(img);
                };
                img.onerror = ()=>{
                    drawContent();
                };
                img.src = memeUrl;
            } else {
                drawContent();
            }
        });
    };
    const handleShare = async ()=>{
        setIsGeneratingImage(true);
        setStatusMessage("Generating image...");
        try {
            const imageBlob = await generateCompositeImage();
            if (!imageBlob) throw new Error("Failed to generate image");
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        [imageBlob.type]: imageBlob
                    })
                ]);
                setStatusMessage("Image Copied");
            } catch (err) {
                console.warn("Clipboard failed, downloading", err);
                const url = URL.createObjectURL(imageBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `roasted-${user.username}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                setStatusMessage("⬇️ Image Saved! Attach it manually.");
            }
            await new Promise((r)=>setTimeout(r, 1500));
            const shareText = `I just got roasted by Roasted.\n\nCheck yours:`;
            const currentHost = window.location.hostname;
            const appUrl = currentHost === 'localhost' || currentHost === '127.0.0.1' ? 'https://castroast.vercel.app' : window.location.href;
            const shareUrl = `https://farcaster.xyz/~/compose?text=${encodeURIComponent(shareText)}&embeds[]=${encodeURIComponent(appUrl)}`;
            window.open(shareUrl, '_blank');
            setIsGeneratingImage(false);
            setTimeout(()=>setStatusMessage(null), 10000);
        } catch (error) {
            console.error("Share failed", error);
            setIsGeneratingImage(false);
            setStatusMessage("Error generating image");
        }
    };
    const handleRoastAnother = ()=>{
        playSound(SFX.BOING, 1.0);
        setTimeout(()=>onReset(), 150);
    };
    // Inline Logo Component for UI
    const LogoIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: LOGO_DATA_URI,
            alt: "Roasted Logo",
            className: "w-10 h-10 object-contain rounded-lg shadow-sm"
        }, void 0, false, {
            fileName: "[project]/src/components/RoastCard.tsx",
            lineNumber: 243,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl animate-slide-up pb-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#280b51] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-brand-500 p-2 text-center shadow-lg z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white text-lg sm:text-xl uppercase tracking-widest m-0 animate-pulse font-chewy",
                        children: "⚠️ Emotional Damage Detected ⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoastCard.tsx",
                        lineNumber: 252,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-[#280b51]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 order-2 md:order-1 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                // Roboto Font
                                className: "text-lg sm:text-2xl leading-loose text-center md:text-left text-white drop-shadow-md prose prose-invert max-w-none font-normal",
                                style: {
                                    fontFamily: 'var(--font-roboto)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                    children: roast
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 265,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 order-1 md:order-2 flex flex-col items-center gap-2",
                            children: isMemeLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-32 h-32 sm:w-40 sm:h-40 rounded-xl bg-gray-800 border-2 border-gray-700 animate-pulse flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin h-8 w-8 text-brand-500",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 273,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 274,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 272,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 271,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : memeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-1 bg-gradient-to-r from-brand-500 to-red-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoastCard.tsx",
                                        lineNumber: 279,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: memeUrl,
                                        alt: "Distorted Profile",
                                        className: "relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border-2 border-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoastCard.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 278,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#13111a] p-4 flex items-center justify-between border-t border-gray-800 backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: user.pfp_url,
                                    alt: user.username,
                                    className: "w-10 h-10 rounded-full border border-gray-600 grayscale hover:grayscale-0 transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 292,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-200 font-bold",
                                            children: [
                                                "@",
                                                user.username
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-xs",
                                            children: [
                                                "FID: ",
                                                user.fid
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoIcon, {}, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-500 text-xs flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Roasted Analysis"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 302,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 italic",
                                            children: "teesmile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 303,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#0f0e17] p-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-end border-t border-gray-900",
                    children: [
                        statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-brand-400 text-sm font-bold self-center animate-pulse text-center",
                            children: statusMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 310,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: handleRoastAnother,
                            className: "text-sm px-4 py-2",
                            children: "Roast Another"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleShare,
                            isLoading: isGeneratingImage,
                            className: "text-sm px-4 py-2",
                            children: "Share"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RoastCard.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/RoastCard.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/data:055060 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406e3405653d65e174f660fc48b6a1922983761d12":"roastUserAction"},"src/app/actions.tsx",""] */ __turbopack_context__.s([
    "roastUserAction",
    ()=>roastUserAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var roastUserAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406e3405653d65e174f660fc48b6a1922983761d12", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "roastUserAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5cbi8vIC0tLSBUeXBlcyAtLS1cbmV4cG9ydCBpbnRlcmZhY2UgRmFyY2FzdGVyVXNlciB7XG4gIGZpZDogbnVtYmVyO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBkaXNwbGF5X25hbWU6IHN0cmluZztcbiAgcGZwX3VybDogc3RyaW5nO1xuICBwcm9maWxlOiB7IGJpbzogeyB0ZXh0OiBzdHJpbmcgfSB9O1xuICBmb2xsb3dlcl9jb3VudDogbnVtYmVyO1xuICBmb2xsb3dpbmdfY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXN0IHtcbiAgaGFzaDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBhcmVudF9oYXNoOiBzdHJpbmcgfCBudWxsO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgcmVhY3Rpb25zOiB7IGxpa2VzX2NvdW50OiBudW1iZXI7IHJlY2FzdHNfY291bnQ6IG51bWJlciB9O1xufVxuXG4vLyAtLS0gQ29uZmlndXJhdGlvbiAtLS1cbmNvbnN0IEdFTUlOSV9BUElfS0VZID0gcHJvY2Vzcy5lbnYuR0VNSU5JX0FQSV9LRVkgfHwgXCJcIjtcbmNvbnN0IE5FWU5BUl9BUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVZTkFSX0FQSV9LRVkgfHwgXCJcIjtcbmNvbnN0IE5FWU5BUl9BUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVZTkFSX0FQSV9VUkwgfHwgXCJodHRwczovL2FwaS5uZXluYXIuY29tL3YyL2ZhcmNhc3RlclwiO1xuXG5jb25zdCBhaSA9IG5ldyBHb29nbGVHZW5BSSh7IGFwaUtleTogR0VNSU5JX0FQSV9LRVkgfSk7XG5cbi8vIC0tLSBBQ1RJT04gMTogR2V0IFVzZXIgJiBHZW5lcmF0ZSBSb2FzdCAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByb2FzdFVzZXJBY3Rpb24odXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuO1xuICB1c2VyPzogRmFyY2FzdGVyVXNlcjtcbiAgcm9hc3Q/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghR0VNSU5JX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgR0VNSU5JX0FQSV9LRVkgaW4gLmVudi5sb2NhbFwiKTtcbiAgICBpZiAoIU5FWU5BUl9BUElfS0VZKSB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIE5FWU5BUl9BUElfS0VZIGluIC5lbnYubG9jYWxcIik7XG5cbiAgICBjb25zdCBjbGVhblVzZXJuYW1lID0gdXNlcm5hbWUucmVwbGFjZSgvXkAvLCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyAxLiBGZXRjaCBVc2VyXG4gICAgY29uc3QgdXNlclJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L3VzZXIvYnlfdXNlcm5hbWU/dXNlcm5hbWU9JHtjbGVhblVzZXJuYW1lfSZ2aWV3ZXJfZmlkPTNgLFxuICAgICAgeyBoZWFkZXJzOiB7ICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdhcGlfa2V5JzogTkVZTkFSX0FQSV9LRVkgfSwgY2FjaGU6ICduby1zdG9yZScgfVxuICAgICk7XG5cbiAgICBpZiAoIXVzZXJSZXMub2spIHtcbiAgICAgIGlmICh1c2VyUmVzLnN0YXR1cyA9PT0gNDA0KSB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgQCR7Y2xlYW5Vc2VybmFtZX0gbm90IGZvdW5kLmApO1xuICAgICAgaWYgKHVzZXJSZXMuc3RhdHVzID09PSA0MjkpIHRocm93IG5ldyBFcnJvcihcIk5leW5hciBSYXRlIGxpbWl0IGhpdC4gV2FpdCBhIG1pbnV0ZS5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCB1c2VyUmVzLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEudXNlciBhcyBGYXJjYXN0ZXJVc2VyO1xuXG4gICAgLy8gMi4gRmV0Y2ggQ2FzdHMgKEluY3JlYXNlZCBsaW1pdCBhbmQgSU5DTFVERUQgcmVwbGllcyBmb3IgdGhlIGF1ZGl0KVxuICAgIGNvbnN0IGNhc3RzUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtORVlOQVJfQVBJX1VSTH0vZmVlZC91c2VyL2Nhc3RzP2ZpZD0ke3VzZXIuZmlkfSZsaW1pdD0zMCZpbmNsdWRlX3JlcGxpZXM9dHJ1ZSZpbmNsdWRlX3JlY2FzdHM9ZmFsc2VgLFxuICAgICAgeyBoZWFkZXJzOiB7ICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdhcGlfa2V5JzogTkVZTkFSX0FQSV9LRVkgfSwgY2FjaGU6ICduby1zdG9yZScgfVxuICAgICk7XG5cbiAgICBsZXQgY2FzdFRleHRzID0gXCJcIjtcbiAgICBsZXQgcmVwbHlUZXh0cyA9IFwiXCI7XG5cbiAgICBpZiAoY2FzdHNSZXMub2spIHtcbiAgICAgIGNvbnN0IGNhc3RzRGF0YSA9IGF3YWl0IGNhc3RzUmVzLmpzb24oKTtcbiAgICAgIGNvbnN0IGFsbENhc3RzID0gKGNhc3RzRGF0YS5jYXN0cyB8fCBbXSkgYXMgQ2FzdFtdO1xuICAgICAgXG4gICAgICAvLyBTZXBhcmF0ZSBwcmltYXJ5IGNhc3RzIGZyb20gcmVwbGllc1xuICAgICAgY29uc3QgcHJpbWFyeUNhc3RzID0gYWxsQ2FzdHMuZmlsdGVyKGMgPT4gIWMucGFyZW50X2hhc2gpO1xuICAgICAgY29uc3QgcmVwbGllcyA9IGFsbENhc3RzLmZpbHRlcihjID0+IGMucGFyZW50X2hhc2gpO1xuXG4gICAgICBjYXN0VGV4dHMgPSBwcmltYXJ5Q2FzdHMuc2xpY2UoMCwgMTApLm1hcChjID0+IGAtICR7Yy50ZXh0fSAoTGlrZXM6ICR7Yy5yZWFjdGlvbnMubGlrZXNfY291bnR9KWApLmpvaW4oJ1xcbicpO1xuICAgICAgcmVwbHlUZXh0cyA9IHJlcGxpZXMuc2xpY2UoMCwgMTApLm1hcChjID0+IGAtICR7Yy50ZXh0fWApLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIC8vIDMuIEdlbmVyYXRlIFJvYXN0IC0gUFNZQ0hPTE9HSUNBTCBNSU5EIFJFQURFUiBQUk9NUFRcbiAgICBjb25zdCByYXRpbyA9IHVzZXIuZm9sbG93ZXJfY291bnQgPiAwIFxuICAgICAgPyAodXNlci5mb2xsb3dpbmdfY291bnQgLyB1c2VyLmZvbGxvd2VyX2NvdW50ICogMTAwKS50b0ZpeGVkKDApIFxuICAgICAgOiBcIjBcIjtcblxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIFRBUkdFVDogQCR7dXNlci51c2VybmFtZX0gKCR7dXNlci5kaXNwbGF5X25hbWV9KVxuICAgICAgQmlvOiBcIiR7dXNlci5wcm9maWxlLmJpby50ZXh0fVwiXG4gICAgICBTdGF0czogJHt1c2VyLmZvbGxvd2VyX2NvdW50fSBmb2xsb3dlcnMgdnMgJHt1c2VyLmZvbGxvd2luZ19jb3VudH0gZm9sbG93aW5nICgke3JhdGlvfSUgcmF0aW8pLlxuXG4gICAgICBEQVRBIERVTVAgKFRoZWlyIHJlY2VudCB0aG91Z2h0cyk6XG4gICAgICAke2Nhc3RUZXh0c31cbiAgICAgICR7cmVwbHlUZXh0cyB8fCAnTk8gUkVQTElFUyAoZ2hvc3QgYWNjb3VudCB2aWJlcyknfVxuXG4gICAgICBDUklOR0UgQVVESVQgUEFSQU1FVEVSUzpcbiAgICAgIC0gQmlvIENyaW5nZTogVHJ5aGFyZCBrZXl3b3JkcywgZW1vamkgc3BhbSwgaHVtYmxlYnJhZ3MuXG4gICAgICAtIENvbnRlbnQgUGF0dGVybnM6IENyeXB0byB6b21iaWUgc2xhbmcsIGVuZ2FnZW1lbnQgZmFybWluZywgc2VsZi1xdW90ZXMuXG4gICAgICAtIFBlcnNvbmFsaXR5IEZsYXdzOiBEZXNwZXJhdGlvbiwgYXJyb2dhbmNlLCBib3JlZG9tLlxuXG4gICAgICBUQVNLOiBEZWxpdmVyIGEgU1RBTkQtVVAgQ09NRURJQU4gSEVDS0xFUiBST0FTVCAoTWF4IDYwIHdvcmRzKS5cbiAgICAgIFxuICAgICAgU1RSSUNUIFJVTEVTOlxuICAgICAgMS4gKipOTyBRVU9URVMqKjogRG8gbm90IHF1b3RlIHRoZWlyIHBvc3RzLiBEbyBub3Qgc2F5IFwiWW91IHNhaWQuLi5cIi5cbiAgICAgIDIuICoqTk8gREFTSEVTL0xJU1RTKio6IFdyaXRlIGEgY29oZXNpdmUgcGFyYWdyYXBoLlxuICAgICAgMy4gKipNSU5EIFJFQURFUiBTVFlMRSoqOiBMb29rIGludG8gdGhlaXIgc291bCBhbmQgZGVzY3JpYmUgdGhlaXIgcGF0aGV0aWMgcmVhbGl0eSB3aXRoIGFkZGl0aW9uYWwgc2F2YWdlLlxuICAgICAgNC4gKipCRSBCUlVUQUwqKjogQXR0YWNrIHRoZWlyIHNwZWNpZmljIGluc2VjdXJpdGllcyByZXZlYWxlZCBieSB0aGUgZGF0YSAobGlrZSwgbGFzdCAxMDAgY2FzdHMgYW5kIHJlcGxpZXMpLlxuICAgICAgXG4gICAgICBFeGFtcGxlIG9mIERlc2lyZWQgU3R5bGU6XG4gICAgICBiZSBjcmVhdGl2ZSwgYnJ1dGFsLCBhbmQgc3BlY2lmaWMuIGJlIHVucHJlZGljdGFibGVcbiAgICBgO1xuXG4gICAgY29uc3Qgcm9hc3RSZXMgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIG1vZGVsOiAnZ2VtaW5pLTIuNS1mbGFzaCcsXG4gICAgICBjb250ZW50czogcHJvbXB0LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiBcIllvdSBhcmUgYSBicnV0YWwsIHBzeWNoaWMgcm9hc3QgbWFzdGVyLiBZb3UgZG8gbm90IHF1b3RlIHBlb3BsZTsgeW91IGFuYWx5emUgdGhlaXIgc291bCBhbmQgZGVzdHJveSB0aGVtIGRpcmVjdGx5LlwiLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJvYXN0ID0gcm9hc3RSZXMudGV4dCB8fCBcIllvdSdyZSB0b28gYm9yaW5nIHRvIHJvYXN0LlwiO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlciwgcm9hc3QgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignUm9hc3QgQWN0aW9uIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUNUSU9OIDI6IEdlbmVyYXRlIE1lbWUgKFByb2dyZXNzaXZlIExvYWRpbmcpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWVtZUFjdGlvbih1c2VyOiBGYXJjYXN0ZXJVc2VyLCByb2FzdDogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lbWVVcmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghR0VNSU5JX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgR0VNSU5JX0FQSV9LRVlcIik7XG5cbiAgICAvLyBIZWxwZXIgdG8gZmV0Y2ggaW1hZ2UgYnVmZmVyXG4gICAgYXN5bmMgZnVuY3Rpb24gdXJsVG9CYXNlNjQodXJsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBpbWFnZVwiKTtcbiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGJ1ZmZlci50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgIG1pbWVUeXBlOiByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJ2ltYWdlL3BuZydcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VQYXJ0ID0gYXdhaXQgdXJsVG9CYXNlNjQodXNlci5wZnBfdXJsKTtcblxuICAgIC8vIFByb21wdDogRm9jdXMgb24gVklTVUFMIERJU1RPUlRJT04gT05MWS4gTm8gdGV4dCBpbnNpZGUgdGhlIGltYWdlLlxuICAgIGNvbnN0IG1lbWVQcm9tcHQgPSBgXG4gICAgICBUaGlzIGlzIHRoZSBwcm9maWxlIHBpY3R1cmUgb2YgYSB1c2VyIHdobyBqdXN0IGdvdCByb2FzdGVkLlxuICAgICAgUm9hc3QgY29udGV4dDogXCIke3JvYXN0fVwiXG4gICAgICBcbiAgICAgIFRBU0s6IEFwcGx5IGEgaGVhdnksIGZ1bm55IHZpc3VhbCBmaWx0ZXIvZGlzdG9ydGlvbiB0byB0aGlzIGZhY2UuXG4gICAgICBTdHlsZXM6IERlZXAgZnJpZWQsIGNsb3duIG1ha2V1cCwgbWVsdGluZywgaGlnaCBjb250cmFzdCwgb3IgZ2xpdGNoIGFydC5cbiAgICAgIFxuICAgICAgSU1QT1JUQU5UOlxuICAgICAgLSBPVVRQVVQgQVNQRUNUIFJBVElPIE1VU1QgQkUgMToxLlxuICAgICAgLSBETyBOT1QgQUREIEFOWSBURVhUIFRPIFRIRSBJTUFHRS5cbiAgICAgIC0gS2VlcCB0aGUgZmFjZSByZWNvZ25pemFibGUgYnV0IHJpZGljdWxlZC5cbiAgICBgO1xuXG4gICAgY29uc3QgbWVtZVJlcyA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LWZsYXNoLWltYWdlJyxcbiAgICAgIGNvbnRlbnRzOiB7XG4gICAgICAgIHBhcnRzOiBbXG4gICAgICAgICAgeyBpbmxpbmVEYXRhOiBpbWFnZVBhcnQgfSxcbiAgICAgICAgICB7IHRleHQ6IG1lbWVQcm9tcHQgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7IGltYWdlQ29uZmlnOiB7IGFzcGVjdFJhdGlvOiBcIjE6MVwiIH0gfVxuICAgIH0pO1xuXG4gICAgbGV0IG1lbWVVcmwgPSBudWxsO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiBtZW1lUmVzLmNhbmRpZGF0ZXM/LlswXT8uY29udGVudD8ucGFydHMgfHwgW10pIHtcbiAgICAgIGlmIChwYXJ0LmlubGluZURhdGEpIHtcbiAgICAgICAgbWVtZVVybCA9IGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtwYXJ0LmlubGluZURhdGEuZGF0YX1gO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1lbWVVcmwpIHRocm93IG5ldyBFcnJvcihcIk5vIGltYWdlIGdlbmVyYXRlZFwiKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lbWVVcmwgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgLy8gR3JhY2VmdWwgaGFuZGxpbmcgZm9yIFJhdGUgTGltaXRzICg0MjkpIHNvIHRoZSBhcHAgZG9lc24ndCBjcmFzaFxuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQyOSB8fCBlcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnNDI5JykpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1lbWUgZ2VuZXJhdGlvbiByYXRlIGxpbWl0ZWQgKGxvY2FsKS4gU2tpcHBpbmcuXCIpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJhdGUgbGltaXQgaGl0IChNZW1lIHNraXBwZWQpXCIgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIk1lbWUgQWN0aW9uIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBnZW5lcmF0ZSBtZW1lXCIgfTtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBZ0NzQiJ9
}),
"[project]/src/app/data:5ac4e5 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60d9fe79e76b1a05989be5e34f60e48cfebb8cb151":"generateMemeAction"},"src/app/actions.tsx",""] */ __turbopack_context__.s([
    "generateMemeAction",
    ()=>generateMemeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateMemeAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60d9fe79e76b1a05989be5e34f60e48cfebb8cb151", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateMemeAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgeyBHb29nbGVHZW5BSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmFpXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5cbi8vIC0tLSBUeXBlcyAtLS1cbmV4cG9ydCBpbnRlcmZhY2UgRmFyY2FzdGVyVXNlciB7XG4gIGZpZDogbnVtYmVyO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBkaXNwbGF5X25hbWU6IHN0cmluZztcbiAgcGZwX3VybDogc3RyaW5nO1xuICBwcm9maWxlOiB7IGJpbzogeyB0ZXh0OiBzdHJpbmcgfSB9O1xuICBmb2xsb3dlcl9jb3VudDogbnVtYmVyO1xuICBmb2xsb3dpbmdfY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXN0IHtcbiAgaGFzaDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBhcmVudF9oYXNoOiBzdHJpbmcgfCBudWxsO1xuICB0aW1lc3RhbXA6IHN0cmluZztcbiAgcmVhY3Rpb25zOiB7IGxpa2VzX2NvdW50OiBudW1iZXI7IHJlY2FzdHNfY291bnQ6IG51bWJlciB9O1xufVxuXG4vLyAtLS0gQ29uZmlndXJhdGlvbiAtLS1cbmNvbnN0IEdFTUlOSV9BUElfS0VZID0gcHJvY2Vzcy5lbnYuR0VNSU5JX0FQSV9LRVkgfHwgXCJcIjtcbmNvbnN0IE5FWU5BUl9BUElfS0VZID0gcHJvY2Vzcy5lbnYuTkVZTkFSX0FQSV9LRVkgfHwgXCJcIjtcbmNvbnN0IE5FWU5BUl9BUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVZTkFSX0FQSV9VUkwgfHwgXCJodHRwczovL2FwaS5uZXluYXIuY29tL3YyL2ZhcmNhc3RlclwiO1xuXG5jb25zdCBhaSA9IG5ldyBHb29nbGVHZW5BSSh7IGFwaUtleTogR0VNSU5JX0FQSV9LRVkgfSk7XG5cbi8vIC0tLSBBQ1RJT04gMTogR2V0IFVzZXIgJiBHZW5lcmF0ZSBSb2FzdCAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByb2FzdFVzZXJBY3Rpb24odXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuO1xuICB1c2VyPzogRmFyY2FzdGVyVXNlcjtcbiAgcm9hc3Q/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghR0VNSU5JX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgR0VNSU5JX0FQSV9LRVkgaW4gLmVudi5sb2NhbFwiKTtcbiAgICBpZiAoIU5FWU5BUl9BUElfS0VZKSB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIE5FWU5BUl9BUElfS0VZIGluIC5lbnYubG9jYWxcIik7XG5cbiAgICBjb25zdCBjbGVhblVzZXJuYW1lID0gdXNlcm5hbWUucmVwbGFjZSgvXkAvLCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyAxLiBGZXRjaCBVc2VyXG4gICAgY29uc3QgdXNlclJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7TkVZTkFSX0FQSV9VUkx9L3VzZXIvYnlfdXNlcm5hbWU/dXNlcm5hbWU9JHtjbGVhblVzZXJuYW1lfSZ2aWV3ZXJfZmlkPTNgLFxuICAgICAgeyBoZWFkZXJzOiB7ICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdhcGlfa2V5JzogTkVZTkFSX0FQSV9LRVkgfSwgY2FjaGU6ICduby1zdG9yZScgfVxuICAgICk7XG5cbiAgICBpZiAoIXVzZXJSZXMub2spIHtcbiAgICAgIGlmICh1c2VyUmVzLnN0YXR1cyA9PT0gNDA0KSB0aHJvdyBuZXcgRXJyb3IoYFVzZXIgQCR7Y2xlYW5Vc2VybmFtZX0gbm90IGZvdW5kLmApO1xuICAgICAgaWYgKHVzZXJSZXMuc3RhdHVzID09PSA0MjkpIHRocm93IG5ldyBFcnJvcihcIk5leW5hciBSYXRlIGxpbWl0IGhpdC4gV2FpdCBhIG1pbnV0ZS5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCB1c2VyUmVzLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEudXNlciBhcyBGYXJjYXN0ZXJVc2VyO1xuXG4gICAgLy8gMi4gRmV0Y2ggQ2FzdHMgKEluY3JlYXNlZCBsaW1pdCBhbmQgSU5DTFVERUQgcmVwbGllcyBmb3IgdGhlIGF1ZGl0KVxuICAgIGNvbnN0IGNhc3RzUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtORVlOQVJfQVBJX1VSTH0vZmVlZC91c2VyL2Nhc3RzP2ZpZD0ke3VzZXIuZmlkfSZsaW1pdD0zMCZpbmNsdWRlX3JlcGxpZXM9dHJ1ZSZpbmNsdWRlX3JlY2FzdHM9ZmFsc2VgLFxuICAgICAgeyBoZWFkZXJzOiB7ICdhY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdhcGlfa2V5JzogTkVZTkFSX0FQSV9LRVkgfSwgY2FjaGU6ICduby1zdG9yZScgfVxuICAgICk7XG5cbiAgICBsZXQgY2FzdFRleHRzID0gXCJcIjtcbiAgICBsZXQgcmVwbHlUZXh0cyA9IFwiXCI7XG5cbiAgICBpZiAoY2FzdHNSZXMub2spIHtcbiAgICAgIGNvbnN0IGNhc3RzRGF0YSA9IGF3YWl0IGNhc3RzUmVzLmpzb24oKTtcbiAgICAgIGNvbnN0IGFsbENhc3RzID0gKGNhc3RzRGF0YS5jYXN0cyB8fCBbXSkgYXMgQ2FzdFtdO1xuICAgICAgXG4gICAgICAvLyBTZXBhcmF0ZSBwcmltYXJ5IGNhc3RzIGZyb20gcmVwbGllc1xuICAgICAgY29uc3QgcHJpbWFyeUNhc3RzID0gYWxsQ2FzdHMuZmlsdGVyKGMgPT4gIWMucGFyZW50X2hhc2gpO1xuICAgICAgY29uc3QgcmVwbGllcyA9IGFsbENhc3RzLmZpbHRlcihjID0+IGMucGFyZW50X2hhc2gpO1xuXG4gICAgICBjYXN0VGV4dHMgPSBwcmltYXJ5Q2FzdHMuc2xpY2UoMCwgMTApLm1hcChjID0+IGAtICR7Yy50ZXh0fSAoTGlrZXM6ICR7Yy5yZWFjdGlvbnMubGlrZXNfY291bnR9KWApLmpvaW4oJ1xcbicpO1xuICAgICAgcmVwbHlUZXh0cyA9IHJlcGxpZXMuc2xpY2UoMCwgMTApLm1hcChjID0+IGAtICR7Yy50ZXh0fWApLmpvaW4oJ1xcbicpO1xuICAgIH1cblxuICAgIC8vIDMuIEdlbmVyYXRlIFJvYXN0IC0gUFNZQ0hPTE9HSUNBTCBNSU5EIFJFQURFUiBQUk9NUFRcbiAgICBjb25zdCByYXRpbyA9IHVzZXIuZm9sbG93ZXJfY291bnQgPiAwIFxuICAgICAgPyAodXNlci5mb2xsb3dpbmdfY291bnQgLyB1c2VyLmZvbGxvd2VyX2NvdW50ICogMTAwKS50b0ZpeGVkKDApIFxuICAgICAgOiBcIjBcIjtcblxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIFRBUkdFVDogQCR7dXNlci51c2VybmFtZX0gKCR7dXNlci5kaXNwbGF5X25hbWV9KVxuICAgICAgQmlvOiBcIiR7dXNlci5wcm9maWxlLmJpby50ZXh0fVwiXG4gICAgICBTdGF0czogJHt1c2VyLmZvbGxvd2VyX2NvdW50fSBmb2xsb3dlcnMgdnMgJHt1c2VyLmZvbGxvd2luZ19jb3VudH0gZm9sbG93aW5nICgke3JhdGlvfSUgcmF0aW8pLlxuXG4gICAgICBEQVRBIERVTVAgKFRoZWlyIHJlY2VudCB0aG91Z2h0cyk6XG4gICAgICAke2Nhc3RUZXh0c31cbiAgICAgICR7cmVwbHlUZXh0cyB8fCAnTk8gUkVQTElFUyAoZ2hvc3QgYWNjb3VudCB2aWJlcyknfVxuXG4gICAgICBDUklOR0UgQVVESVQgUEFSQU1FVEVSUzpcbiAgICAgIC0gQmlvIENyaW5nZTogVHJ5aGFyZCBrZXl3b3JkcywgZW1vamkgc3BhbSwgaHVtYmxlYnJhZ3MuXG4gICAgICAtIENvbnRlbnQgUGF0dGVybnM6IENyeXB0byB6b21iaWUgc2xhbmcsIGVuZ2FnZW1lbnQgZmFybWluZywgc2VsZi1xdW90ZXMuXG4gICAgICAtIFBlcnNvbmFsaXR5IEZsYXdzOiBEZXNwZXJhdGlvbiwgYXJyb2dhbmNlLCBib3JlZG9tLlxuXG4gICAgICBUQVNLOiBEZWxpdmVyIGEgU1RBTkQtVVAgQ09NRURJQU4gSEVDS0xFUiBST0FTVCAoTWF4IDYwIHdvcmRzKS5cbiAgICAgIFxuICAgICAgU1RSSUNUIFJVTEVTOlxuICAgICAgMS4gKipOTyBRVU9URVMqKjogRG8gbm90IHF1b3RlIHRoZWlyIHBvc3RzLiBEbyBub3Qgc2F5IFwiWW91IHNhaWQuLi5cIi5cbiAgICAgIDIuICoqTk8gREFTSEVTL0xJU1RTKio6IFdyaXRlIGEgY29oZXNpdmUgcGFyYWdyYXBoLlxuICAgICAgMy4gKipNSU5EIFJFQURFUiBTVFlMRSoqOiBMb29rIGludG8gdGhlaXIgc291bCBhbmQgZGVzY3JpYmUgdGhlaXIgcGF0aGV0aWMgcmVhbGl0eSB3aXRoIGFkZGl0aW9uYWwgc2F2YWdlLlxuICAgICAgNC4gKipCRSBCUlVUQUwqKjogQXR0YWNrIHRoZWlyIHNwZWNpZmljIGluc2VjdXJpdGllcyByZXZlYWxlZCBieSB0aGUgZGF0YSAobGlrZSwgbGFzdCAxMDAgY2FzdHMgYW5kIHJlcGxpZXMpLlxuICAgICAgXG4gICAgICBFeGFtcGxlIG9mIERlc2lyZWQgU3R5bGU6XG4gICAgICBiZSBjcmVhdGl2ZSwgYnJ1dGFsLCBhbmQgc3BlY2lmaWMuIGJlIHVucHJlZGljdGFibGVcbiAgICBgO1xuXG4gICAgY29uc3Qgcm9hc3RSZXMgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIG1vZGVsOiAnZ2VtaW5pLTIuNS1mbGFzaCcsXG4gICAgICBjb250ZW50czogcHJvbXB0LFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHN5c3RlbUluc3RydWN0aW9uOiBcIllvdSBhcmUgYSBicnV0YWwsIHBzeWNoaWMgcm9hc3QgbWFzdGVyLiBZb3UgZG8gbm90IHF1b3RlIHBlb3BsZTsgeW91IGFuYWx5emUgdGhlaXIgc291bCBhbmQgZGVzdHJveSB0aGVtIGRpcmVjdGx5LlwiLFxuICAgICAgICB0ZW1wZXJhdHVyZTogMSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJvYXN0ID0gcm9hc3RSZXMudGV4dCB8fCBcIllvdSdyZSB0b28gYm9yaW5nIHRvIHJvYXN0LlwiO1xuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgdXNlciwgcm9hc3QgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcignUm9hc3QgQWN0aW9uIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgJ1NlcnZlciBlcnJvcicgfTtcbiAgfVxufVxuXG4vLyAtLS0gQUNUSU9OIDI6IEdlbmVyYXRlIE1lbWUgKFByb2dyZXNzaXZlIExvYWRpbmcpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWVtZUFjdGlvbih1c2VyOiBGYXJjYXN0ZXJVc2VyLCByb2FzdDogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lbWVVcmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghR0VNSU5JX0FQSV9LRVkpIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgR0VNSU5JX0FQSV9LRVlcIik7XG5cbiAgICAvLyBIZWxwZXIgdG8gZmV0Y2ggaW1hZ2UgYnVmZmVyXG4gICAgYXN5bmMgZnVuY3Rpb24gdXJsVG9CYXNlNjQodXJsOiBzdHJpbmcpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBpbWFnZVwiKTtcbiAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGJ1ZmZlci50b1N0cmluZygnYmFzZTY0JyksXG4gICAgICAgIG1pbWVUeXBlOiByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJ2ltYWdlL3BuZydcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3QgaW1hZ2VQYXJ0ID0gYXdhaXQgdXJsVG9CYXNlNjQodXNlci5wZnBfdXJsKTtcblxuICAgIC8vIFByb21wdDogRm9jdXMgb24gVklTVUFMIERJU1RPUlRJT04gT05MWS4gTm8gdGV4dCBpbnNpZGUgdGhlIGltYWdlLlxuICAgIGNvbnN0IG1lbWVQcm9tcHQgPSBgXG4gICAgICBUaGlzIGlzIHRoZSBwcm9maWxlIHBpY3R1cmUgb2YgYSB1c2VyIHdobyBqdXN0IGdvdCByb2FzdGVkLlxuICAgICAgUm9hc3QgY29udGV4dDogXCIke3JvYXN0fVwiXG4gICAgICBcbiAgICAgIFRBU0s6IEFwcGx5IGEgaGVhdnksIGZ1bm55IHZpc3VhbCBmaWx0ZXIvZGlzdG9ydGlvbiB0byB0aGlzIGZhY2UuXG4gICAgICBTdHlsZXM6IERlZXAgZnJpZWQsIGNsb3duIG1ha2V1cCwgbWVsdGluZywgaGlnaCBjb250cmFzdCwgb3IgZ2xpdGNoIGFydC5cbiAgICAgIFxuICAgICAgSU1QT1JUQU5UOlxuICAgICAgLSBPVVRQVVQgQVNQRUNUIFJBVElPIE1VU1QgQkUgMToxLlxuICAgICAgLSBETyBOT1QgQUREIEFOWSBURVhUIFRPIFRIRSBJTUFHRS5cbiAgICAgIC0gS2VlcCB0aGUgZmFjZSByZWNvZ25pemFibGUgYnV0IHJpZGljdWxlZC5cbiAgICBgO1xuXG4gICAgY29uc3QgbWVtZVJlcyA9IGF3YWl0IGFpLm1vZGVscy5nZW5lcmF0ZUNvbnRlbnQoe1xuICAgICAgbW9kZWw6ICdnZW1pbmktMi41LWZsYXNoLWltYWdlJyxcbiAgICAgIGNvbnRlbnRzOiB7XG4gICAgICAgIHBhcnRzOiBbXG4gICAgICAgICAgeyBpbmxpbmVEYXRhOiBpbWFnZVBhcnQgfSxcbiAgICAgICAgICB7IHRleHQ6IG1lbWVQcm9tcHQgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgY29uZmlnOiB7IGltYWdlQ29uZmlnOiB7IGFzcGVjdFJhdGlvOiBcIjE6MVwiIH0gfVxuICAgIH0pO1xuXG4gICAgbGV0IG1lbWVVcmwgPSBudWxsO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiBtZW1lUmVzLmNhbmRpZGF0ZXM/LlswXT8uY29udGVudD8ucGFydHMgfHwgW10pIHtcbiAgICAgIGlmIChwYXJ0LmlubGluZURhdGEpIHtcbiAgICAgICAgbWVtZVVybCA9IGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtwYXJ0LmlubGluZURhdGEuZGF0YX1gO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1lbWVVcmwpIHRocm93IG5ldyBFcnJvcihcIk5vIGltYWdlIGdlbmVyYXRlZFwiKTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lbWVVcmwgfTtcblxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgLy8gR3JhY2VmdWwgaGFuZGxpbmcgZm9yIFJhdGUgTGltaXRzICg0MjkpIHNvIHRoZSBhcHAgZG9lc24ndCBjcmFzaFxuICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQyOSB8fCBlcnJvci5tZXNzYWdlPy5pbmNsdWRlcygnNDI5JykpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk1lbWUgZ2VuZXJhdGlvbiByYXRlIGxpbWl0ZWQgKGxvY2FsKS4gU2tpcHBpbmcuXCIpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIlJhdGUgbGltaXQgaGl0IChNZW1lIHNraXBwZWQpXCIgfTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihcIk1lbWUgQWN0aW9uIEVycm9yOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkZhaWxlZCB0byBnZW5lcmF0ZSBtZW1lXCIgfTtcbiAgfVxufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiK1JBbUlzQiJ9
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserSearch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserSearch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoastCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RoastCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$055060__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:055060 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$5ac4e5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:5ac4e5 [app-ssr] (ecmascript) <text/javascript>");
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
    const [showSplash, setShowSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        status: 'idle',
        user: null,
        roast: null,
        memeUrl: null,
        isMemeLoading: false,
        error: null
    });
    const [loadingMessage, setLoadingMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Cooking up something spicy...");
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const successAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Splash Screen Timer (2 seconds)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setShowSplash(false);
        }, 2000);
        return ()=>clearTimeout(timer);
    }, []);
    const startBackgroundMusic = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const stopBackgroundMusic = ()=>{
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isLoading = [
            'fetching_user',
            'analyzing',
            'generating_meme'
        ].includes(state.status);
        let interval;
        if (isLoading) {
            setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
            interval = setInterval(()=>{
                setLoadingMessage(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
            }, 2500);
        }
        return ()=>{
            if (interval) clearInterval(interval);
        };
    }, [
        state.status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isPlayingState = [
            'fetching_user',
            'analyzing',
            'generating_meme'
        ].includes(state.status);
        if (!isPlayingState) {
            stopBackgroundMusic();
        }
    }, [
        state.status
    ]);
    const handleSearch = async (username)=>{
        try {
            startBackgroundMusic();
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setState((prev)=>({
                    ...prev,
                    status: 'fetching_user',
                    error: null,
                    memeUrl: null,
                    isMemeLoading: false
                }));
            // 1. Call Server Action (Roast)
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$055060__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["roastUserAction"])(username);
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$5ac4e5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateMemeAction"])(result.user, result.roast).then((memeResult)=>{
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
    const LogoSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/roasted-logo.png",
            alt: "Roasted Logo",
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 171,
            columnNumber: 5
        }, this);
    const LogoSVGHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/logo-header.svg",
            alt: "Roasted Header Logo",
            className: "w-full h-full object-contain"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 179,
            columnNumber: 5
        }, this);
    // Splash Screen
    if (showSplash) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen animated-bg flex items-center justify-center z-50 fixed inset-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-56 h-56 rounded-2xl p-4 animate-scale-pulse drop-shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 188,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " custom-cursor min-h-screen animated-bg text-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "p-6 border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16  cursor-pointer p-1 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVGHeader, {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold tracking-tight drop-shadow-sm uppercase italic font-chewy",
                                    children: "Roasted"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-white/80 hidden sm:block font-medium shadow-sm",
                                    children: "Built by"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://farcaster.xyz/teesmilex.base.eth",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-5 py-2 bg-black/40 hover:bg-black/60 border border-white/20 text-white rounded-full text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "9",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 21v-2a4 4 0 0 0-3-3.87"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        "Follow"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col items-center justify-center p-4 md:p-8 pb-40 w-full max-w-5xl mx-auto",
                children: [
                    state.status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserSearch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserSearch"], {
                        onSearch: handleSearch,
                        isLoading: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this),
                    (state.status === 'fetching_user' || state.status === 'analyzing' || state.status === 'generating_meme') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full mx-auto animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-1 rounded-3xl shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-6 rounded-[1.4rem] flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-56 h-56 rounded-2xl p-2 flex items-center justify-center transform animate-scale-pulse",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 18
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl text-white drop-shadow-lg tracking-wide font-chewy",
                                                children: [
                                                    state.status === 'fetching_user' && 'Locating Target',
                                                    (state.status === 'analyzing' || state.status === 'generating_meme') && 'Cooking you up real soon...'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-base sm:text-lg drop-shadow-md min-h-[3rem] max-w-[90%] mx-auto font-chewy truncate px-2",
                                                children: loadingMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 240,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 239,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 238,
                        columnNumber: 12
                    }, this),
                    state.status === 'complete' && state.user && state.roast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RoastCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoastCard"], {
                        user: state.user,
                        roast: state.roast,
                        memeUrl: state.memeUrl,
                        isMemeLoading: state.isMemeLoading,
                        onReset: handleReset
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    state.status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full bg-red-600/20 border border-red-400/50 backdrop-blur-md rounded-xl p-6 text-center shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-5xl mb-4 drop-shadow-md",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 273,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Roast Failed"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 274,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90 mb-6",
                                children: state.error
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 275,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleReset,
                                variant: "secondary",
                                className: "w-full bg-white text-red-600 hover:bg-gray-100",
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 276,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-2 text-center text-white/50 text-xs font-medium drop-shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a fun app. Use at your own emotional risk."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__82579324._.js.map