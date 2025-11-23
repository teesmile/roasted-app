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
;
;
;
;
const SFX = {
    WHOOSH: 'https://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3',
    BOING: 'https://commondatastorage.googleapis.com/codeskulptor-assets/jump.m4a'
};
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
            const width = 1080;
            const height = 1080;
            canvas.width = width;
            canvas.height = height;
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#1a1625');
            gradient.addColorStop(1, '#0f0e17');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#f15a24';
            ctx.fillRect(0, 0, width, 100);
            ctx.fillStyle = '#ffffff';
            ctx.font = '50px "Chewy", cursive';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('⚠️ EMOTIONAL DAMAGE DETECTED ⚠️', width / 2, 50);
            const drawContent = (memeImg)=>{
                ctx.textAlign = 'center';
                const footerTextX = width - 120;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.font = '24px Inter, sans-serif';
                ctx.fillText('Roasted Analysis', footerTextX, height - 65);
                ctx.font = 'italic 20px Inter, sans-serif';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fillText('teesmile', footerTextX, height - 35);
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 32px Inter, sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(`@${user.username}`, 50, height - 40);
                ctx.fillStyle = '#ffffff';
                ctx.font = '36px "Comic Sans MS", "Comic Sans", cursive';
                ctx.textAlign = 'center';
                const imgSize = 320;
                const textX = width / 2;
                const textY = memeImg ? 150 + imgSize + 60 : 300;
                const maxWidth = 950;
                const lineHeight = 70;
                const words = roast.split(' ');
                let line = '';
                let y = textY;
                ctx.textBaseline = 'alphabetic';
                for(let n = 0; n < words.length; n++){
                    const testLine = line + words[n] + ' ';
                    const metrics = ctx.measureText(testLine);
                    const testWidth = metrics.width;
                    if (testWidth > maxWidth && n > 0) {
                        ctx.fillText(line, textX, y);
                        line = words[n] + ' ';
                        y += lineHeight;
                    } else {
                        line = testLine;
                    }
                }
                ctx.fillText(line, textX, y);
                canvas.toBlob((blob)=>{
                    resolve(blob);
                }, 'image/png');
            };
            if (memeUrl) {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = ()=>{
                    const imgSize = 320;
                    const cx = width / 2;
                    const cy = 150 + imgSize / 2;
                    ctx.save();
                    ctx.translate(cx, cy);
                    ctx.rotate(-5 * Math.PI / 180);
                    ctx.shadowColor = '#f15a24';
                    ctx.shadowBlur = 40;
                    ctx.drawImage(img, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
                    ctx.shadowBlur = 0;
                    ctx.strokeStyle = '#374151';
                    ctx.lineWidth = 4;
                    ctx.strokeRect(-imgSize / 2, -imgSize / 2, imgSize, imgSize);
                    ctx.restore();
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
                setStatusMessage("Image copied to clipboard!");
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
                setStatusMessage("Image downloaded! Attach it to your cast.");
            }
            setTimeout(()=>{
                const shareText = `I just got roasted by Roasted.\n\nCheck yours:`;
                const appUrl = window.location.href;
                const shareUrl = `https://farcaster.xyz/~/compose?text=${encodeURIComponent(shareText)}&embeds[]=${encodeURIComponent(appUrl)}`;
                window.open(shareUrl, '_blank');
                setIsGeneratingImage(false);
                setStatusMessage(null);
            }, 1500);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-2xl animate-slide-up pb-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#1a1625] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 relative flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-brand-500 p-2 text-center shadow-lg z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-white text-lg sm:text-xl uppercase tracking-widest m-0 animate-pulse font-chewy",
                        children: "⚠️ Emotional Damage Detected ⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RoastCard.tsx",
                        lineNumber: 209,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 bg-[#1a1625]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 order-2 md:order-1 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg sm:text-2xl leading-loose text-center md:text-left text-white drop-shadow-md prose prose-invert max-w-none font-normal font-comic",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$6_react$40$19$2e$2$2e$0$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
                                    children: roast
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 217,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 215,
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
                                            lineNumber: 225,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RoastCard.tsx",
                                            lineNumber: 226,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 224,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 223,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : memeUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -inset-1 bg-gradient-to-r from-brand-500 to-red-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoastCard.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: memeUrl,
                                        alt: "Distorted Profile",
                                        className: "relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border-2 border-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RoastCard.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RoastCard.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 214,
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
                                    lineNumber: 244,
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
                                            lineNumber: 246,
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
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 245,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 text-xs flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Roasted Analysis"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 251,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 italic",
                                    children: "teesmile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RoastCard.tsx",
                                    lineNumber: 252,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#0f0e17] p-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-end border-t border-gray-900",
                    children: [
                        statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-brand-400 text-sm font-bold self-center animate-pulse",
                            children: statusMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 258,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: handleRoastAnother,
                            className: "text-sm px-4 py-2",
                            children: "Roast Another"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleShare,
                            isLoading: isGeneratingImage,
                            className: "text-sm px-4 py-2",
                            children: "Share Link"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RoastCard.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RoastCard.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RoastCard.tsx",
            lineNumber: 205,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/RoastCard.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/data:0bac29 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"401e6139cb5f8ae9d2de21053de30fd0708bce5b42":"roastUserAction"},"src/app/action.tsx",""] */ __turbopack_context__.s([
    "roastUserAction",
    ()=>roastUserAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var roastUserAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("401e6139cb5f8ae9d2de21053de30fd0708bce5b42", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "roastUserAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IEdvb2dsZUdlbkFJIH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcblxuLy8gLS0tIFR5cGVzIC0tLVxuZXhwb3J0IGludGVyZmFjZSBGYXJjYXN0ZXJVc2VyIHtcbiAgZmlkOiBudW1iZXI7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZTogc3RyaW5nO1xuICBwZnBfdXJsOiBzdHJpbmc7XG4gIHByb2ZpbGU6IHsgYmlvOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gIGZvbGxvd2VyX2NvdW50OiBudW1iZXI7XG4gIGZvbGxvd2luZ19jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc3Qge1xuICBoYXNoOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIHJlYWN0aW9uczogeyBsaWtlc19jb3VudDogbnVtYmVyOyByZWNhc3RzX2NvdW50OiBudW1iZXIgfTtcbn1cblxuLy8gLS0tIENvbmZpZ3VyYXRpb24gLS0tXG4vLyBUaGVzZSBhY2Nlc3MgdGhlIHNlY3JldHMgZnJvbSAuZW52LmxvY2FsIGNvcnJlY3RseSBvbiB0aGUgc2VydmVyXG5jb25zdCBHRU1JTklfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkubmV5bmFyLmNvbS92Mi9mYXJjYXN0ZXJcIjtcblxuY29uc3QgYWkgPSBuZXcgR29vZ2xlR2VuQUkoeyBhcGlLZXk6IEdFTUlOSV9BUElfS0VZIH0pO1xuXG4vLyAtLS0gQUNUSU9OIDE6IEdldCBVc2VyICYgR2VuZXJhdGUgUm9hc3QgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcm9hc3RVc2VyQWN0aW9uKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgdXNlcj86IEZhcmNhc3RlclVzZXI7XG4gIHJvYXN0Pzogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbn0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIUdFTUlOSV9BUElfS0VZKSB0aHJvdyBuZXcgRXJyb3IoXCJTZXJ2ZXIgQ29uZmlnIEVycm9yOiBNaXNzaW5nIEdFTUlOSV9BUElfS0VZIGluIC5lbnYubG9jYWxcIik7XG4gICAgaWYgKCFORVlOQVJfQVBJX0tFWSkgdGhyb3cgbmV3IEVycm9yKFwiU2VydmVyIENvbmZpZyBFcnJvcjogTWlzc2luZyBORVlOQVJfQVBJX0tFWSBpbiAuZW52LmxvY2FsXCIpO1xuXG4gICAgY29uc3QgY2xlYW5Vc2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoL15ALywgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gMS4gRmV0Y2ggVXNlciBmcm9tIE5leW5hclxuICAgIGNvbnN0IHVzZXJSZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke05FWU5BUl9BUElfVVJMfS91c2VyL2J5X3VzZXJuYW1lP3VzZXJuYW1lPSR7Y2xlYW5Vc2VybmFtZX0mdmlld2VyX2ZpZD0zYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgaWYgKCF1c2VyUmVzLm9rKSB7XG4gICAgICBpZiAodXNlclJlcy5zdGF0dXMgPT09IDQwNCkgdGhyb3cgbmV3IEVycm9yKGBVc2VyIEAke2NsZWFuVXNlcm5hbWV9IG5vdCBmb3VuZC5gKTtcbiAgICAgIGlmICh1c2VyUmVzLnN0YXR1cyA9PT0gNDI5KSB0aHJvdyBuZXcgRXJyb3IoXCJSYXRlIGxpbWl0IGhpdC4gV2FpdCBhIG1pbnV0ZS5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCB1c2VyUmVzLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEudXNlciBhcyBGYXJjYXN0ZXJVc2VyO1xuXG4gICAgLy8gMi4gRmV0Y2ggVXNlciBDYXN0c1xuICAgIGNvbnN0IGNhc3RzUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtORVlOQVJfQVBJX1VSTH0vZmVlZC91c2VyL2Nhc3RzP2ZpZD0ke3VzZXIuZmlkfSZsaW1pdD0xNSZpbmNsdWRlX3JlcGxpZXM9ZmFsc2UmaW5jbHVkZV9yZWNhc3RzPWZhbHNlYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgbGV0IGNhc3RUZXh0cyA9IFwiXCI7XG4gICAgaWYgKGNhc3RzUmVzLm9rKSB7XG4gICAgICBjb25zdCBjYXN0c0RhdGEgPSBhd2FpdCBjYXN0c1Jlcy5qc29uKCk7XG4gICAgICBjb25zdCBjYXN0cyA9IChjYXN0c0RhdGEuY2FzdHMgfHwgW10pIGFzIENhc3RbXTtcbiAgICAgIGNhc3RUZXh0cyA9IGNhc3RzLm1hcChjID0+IGAtIFwiJHtjLnRleHR9XCIgKExpa2VzOiAke2MucmVhY3Rpb25zLmxpa2VzX2NvdW50fSlgKS5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICAvLyAzLiBHZW5lcmF0ZSBSb2FzdFxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIElkZW50aWZ5OiBGYXJjYXN0ZXIgVXNlciBAJHt1c2VyLnVzZXJuYW1lfSAoJHt1c2VyLmRpc3BsYXlfbmFtZX0pXG4gICAgICBCaW86IFwiJHt1c2VyLnByb2ZpbGUuYmlvLnRleHR9XCJcbiAgICAgIEZvbGxvd2VyczogJHt1c2VyLmZvbGxvd2VyX2NvdW50fVxuICAgICAgRm9sbG93aW5nOiAke3VzZXIuZm9sbG93aW5nX2NvdW50fVxuICAgICAgXG4gICAgICBSZWNlbnQgQWN0aXZpdHk6XG4gICAgICAke2Nhc3RUZXh0c31cbiAgICAgIFxuICAgICAgVGFzazogUm9hc3QgdGhpcyB1c2VyLlxuICAgICAgR3VpZGVsaW5lczpcbiAgICAgIC0gTGVuZ3RoOiBVbmRlciA1MCB3b3Jkcy5cbiAgICAgIC0gU3R5bGU6IFNhdmFnZSwgd2l0dHksIGRpcmVjdC4gU3RhbmQtdXAgY29tZWRpYW4gcm9hc3RpbmcgYSBoZWNrbGVyLlxuICAgICAgLSBObyBoYXNodGFncy5cbiAgICBgO1xuXG4gICAgY29uc3QgYWlSZXMgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIG1vZGVsOiAnZ2VtaW5pLTIuNS1mbGFzaCcsXG4gICAgICBjb250ZW50czogcHJvbXB0LFxuICAgICAgY29uZmlnOiB7IHRlbXBlcmF0dXJlOiAxIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJvYXN0ID0gYWlSZXMudGV4dCB8fCBcIllvdSBhcmUgdG9vIGJvcmluZyB0byByb2FzdC5cIjtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXIsIHJvYXN0IH07XG5cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSb2FzdCBBY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIiB9O1xuICB9XG59XG5cbi8vIC0tLSBBQ1RJT04gMjogR2VuZXJhdGUgTWVtZSAoQ2FsbGVkIHNlcGFyYXRlbHkgZm9yIHByb2dyZXNzaXZlIGxvYWRpbmcpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWVtZUFjdGlvbih1c2VyOiBGYXJjYXN0ZXJVc2VyLCByb2FzdDogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lbWVVcmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghR0VNSU5JX0FQSV9LRVkpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBUEkgS2V5IE1pc3NpbmdcIiB9O1xuXG4gICAgLy8gMS4gRmV0Y2ggUEZQIHNlcnZlci1zaWRlIHRvIGF2b2lkIENPUlNcbiAgICBjb25zdCBpbWdSZXMgPSBhd2FpdCBmZXRjaCh1c2VyLnBmcF91cmwpO1xuICAgIGlmICghaW1nUmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYWNjZXNzIHByb2ZpbGUgcGljdHVyZS5cIik7XG4gICAgXG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBpbWdSZXMuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCBiYXNlNjREYXRhID0gQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICBjb25zdCBtaW1lVHlwZSA9IGltZ1Jlcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJ2ltYWdlL3BuZyc7XG5cbiAgICAvLyAyLiBHZW5lcmF0ZSBNZW1lXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuICAgICAgQ29udGV4dDogUHJvZmlsZSBwaWN0dXJlIG9mIGEgcm9hc3RlZCB1c2VyLlxuICAgICAgUm9hc3Q6IFwiJHtyb2FzdH1cIlxuICAgICAgVGFzazogQ3JlYXRlIGEgZGlzdG9ydGVkIFwibWVtZVwiIHZlcnNpb24gb2YgdGhpcyBpbWFnZS5cbiAgICAgIFN0eWxlOiBEZWVwIGZyaWVkLCBnbGl0Y2gsIG1lbHRpbmcsIG9yIGNsb3duIG1ha2V1cC4gXG4gICAgICBJTVBPUlRBTlQ6IE5PIFRFWFQuIFB1cmUgdmlzdWFsIGRpc3RvcnRpb24uXG4gICAgICBPdXRwdXQ6IDE6MSBBc3BlY3QgUmF0aW8uXG4gICAgYDtcblxuICAgIGNvbnN0IGFpUmVzID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgICBtb2RlbDogJ2dlbWluaS0yLjUtZmxhc2gtaW1hZ2UnLFxuICAgICAgY29udGVudHM6IHtcbiAgICAgICAgcGFydHM6IFtcbiAgICAgICAgICB7IGlubGluZURhdGE6IHsgbWltZVR5cGUsIGRhdGE6IGJhc2U2NERhdGEgfSB9LFxuICAgICAgICAgIHsgdGV4dDogcHJvbXB0IH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzogeyBpbWFnZUNvbmZpZzogeyBhc3BlY3RSYXRpbzogXCIxOjFcIiB9IH1cbiAgICB9KTtcblxuICAgIC8vIDMuIEV4dHJhY3QgSW1hZ2VcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgYWlSZXMuY2FuZGlkYXRlcz8uWzBdPy5jb250ZW50Py5wYXJ0cyB8fCBbXSkge1xuICAgICAgaWYgKHBhcnQuaW5saW5lRGF0YSkge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLCBcbiAgICAgICAgICBtZW1lVXJsOiBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7cGFydC5pbmxpbmVEYXRhLmRhdGF9YCBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkFJIGdlbmVyYXRlZCBubyBpbWFnZS5cIiB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTWVtZSBBY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyUkFnQ3NCIn0=
}),
"[project]/src/app/data:12e3b7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"607833dc1c5672c535aad402fbbfaccd40622d19c0":"generateMemeAction"},"src/app/action.tsx",""] */ __turbopack_context__.s([
    "generateMemeAction",
    ()=>generateMemeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateMemeAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("607833dc1c5672c535aad402fbbfaccd40622d19c0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateMemeAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IEdvb2dsZUdlbkFJIH0gZnJvbSBcIkBnb29nbGUvZ2VuYWlcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcblxuLy8gLS0tIFR5cGVzIC0tLVxuZXhwb3J0IGludGVyZmFjZSBGYXJjYXN0ZXJVc2VyIHtcbiAgZmlkOiBudW1iZXI7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlfbmFtZTogc3RyaW5nO1xuICBwZnBfdXJsOiBzdHJpbmc7XG4gIHByb2ZpbGU6IHsgYmlvOiB7IHRleHQ6IHN0cmluZyB9IH07XG4gIGZvbGxvd2VyX2NvdW50OiBudW1iZXI7XG4gIGZvbGxvd2luZ19jb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc3Qge1xuICBoYXNoOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdGltZXN0YW1wOiBzdHJpbmc7XG4gIHJlYWN0aW9uczogeyBsaWtlc19jb3VudDogbnVtYmVyOyByZWNhc3RzX2NvdW50OiBudW1iZXIgfTtcbn1cblxuLy8gLS0tIENvbmZpZ3VyYXRpb24gLS0tXG4vLyBUaGVzZSBhY2Nlc3MgdGhlIHNlY3JldHMgZnJvbSAuZW52LmxvY2FsIGNvcnJlY3RseSBvbiB0aGUgc2VydmVyXG5jb25zdCBHRU1JTklfQVBJX0tFWSA9IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX0tFWSA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfS0VZIHx8IFwiXCI7XG5jb25zdCBORVlOQVJfQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWU5BUl9BUElfVVJMIHx8IFwiaHR0cHM6Ly9hcGkubmV5bmFyLmNvbS92Mi9mYXJjYXN0ZXJcIjtcblxuY29uc3QgYWkgPSBuZXcgR29vZ2xlR2VuQUkoeyBhcGlLZXk6IEdFTUlOSV9BUElfS0VZIH0pO1xuXG4vLyAtLS0gQUNUSU9OIDE6IEdldCBVc2VyICYgR2VuZXJhdGUgUm9hc3QgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcm9hc3RVc2VyQWN0aW9uKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgdXNlcj86IEZhcmNhc3RlclVzZXI7XG4gIHJvYXN0Pzogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbn0+IHtcbiAgdHJ5IHtcbiAgICBpZiAoIUdFTUlOSV9BUElfS0VZKSB0aHJvdyBuZXcgRXJyb3IoXCJTZXJ2ZXIgQ29uZmlnIEVycm9yOiBNaXNzaW5nIEdFTUlOSV9BUElfS0VZIGluIC5lbnYubG9jYWxcIik7XG4gICAgaWYgKCFORVlOQVJfQVBJX0tFWSkgdGhyb3cgbmV3IEVycm9yKFwiU2VydmVyIENvbmZpZyBFcnJvcjogTWlzc2luZyBORVlOQVJfQVBJX0tFWSBpbiAuZW52LmxvY2FsXCIpO1xuXG4gICAgY29uc3QgY2xlYW5Vc2VybmFtZSA9IHVzZXJuYW1lLnJlcGxhY2UoL15ALywgJycpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gMS4gRmV0Y2ggVXNlciBmcm9tIE5leW5hclxuICAgIGNvbnN0IHVzZXJSZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke05FWU5BUl9BUElfVVJMfS91c2VyL2J5X3VzZXJuYW1lP3VzZXJuYW1lPSR7Y2xlYW5Vc2VybmFtZX0mdmlld2VyX2ZpZD0zYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgaWYgKCF1c2VyUmVzLm9rKSB7XG4gICAgICBpZiAodXNlclJlcy5zdGF0dXMgPT09IDQwNCkgdGhyb3cgbmV3IEVycm9yKGBVc2VyIEAke2NsZWFuVXNlcm5hbWV9IG5vdCBmb3VuZC5gKTtcbiAgICAgIGlmICh1c2VyUmVzLnN0YXR1cyA9PT0gNDI5KSB0aHJvdyBuZXcgRXJyb3IoXCJSYXRlIGxpbWl0IGhpdC4gV2FpdCBhIG1pbnV0ZS5cIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdXNlciBwcm9maWxlLlwiKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCB1c2VyUmVzLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gdXNlckRhdGEudXNlciBhcyBGYXJjYXN0ZXJVc2VyO1xuXG4gICAgLy8gMi4gRmV0Y2ggVXNlciBDYXN0c1xuICAgIGNvbnN0IGNhc3RzUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtORVlOQVJfQVBJX1VSTH0vZmVlZC91c2VyL2Nhc3RzP2ZpZD0ke3VzZXIuZmlkfSZsaW1pdD0xNSZpbmNsdWRlX3JlcGxpZXM9ZmFsc2UmaW5jbHVkZV9yZWNhc3RzPWZhbHNlYCxcbiAgICAgIHsgaGVhZGVyczogeyAnYWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBpX2tleSc6IE5FWU5BUl9BUElfS0VZIH0sIGNhY2hlOiAnbm8tc3RvcmUnIH1cbiAgICApO1xuXG4gICAgbGV0IGNhc3RUZXh0cyA9IFwiXCI7XG4gICAgaWYgKGNhc3RzUmVzLm9rKSB7XG4gICAgICBjb25zdCBjYXN0c0RhdGEgPSBhd2FpdCBjYXN0c1Jlcy5qc29uKCk7XG4gICAgICBjb25zdCBjYXN0cyA9IChjYXN0c0RhdGEuY2FzdHMgfHwgW10pIGFzIENhc3RbXTtcbiAgICAgIGNhc3RUZXh0cyA9IGNhc3RzLm1hcChjID0+IGAtIFwiJHtjLnRleHR9XCIgKExpa2VzOiAke2MucmVhY3Rpb25zLmxpa2VzX2NvdW50fSlgKS5qb2luKCdcXG4nKTtcbiAgICB9XG5cbiAgICAvLyAzLiBHZW5lcmF0ZSBSb2FzdFxuICAgIGNvbnN0IHByb21wdCA9IGBcbiAgICAgIElkZW50aWZ5OiBGYXJjYXN0ZXIgVXNlciBAJHt1c2VyLnVzZXJuYW1lfSAoJHt1c2VyLmRpc3BsYXlfbmFtZX0pXG4gICAgICBCaW86IFwiJHt1c2VyLnByb2ZpbGUuYmlvLnRleHR9XCJcbiAgICAgIEZvbGxvd2VyczogJHt1c2VyLmZvbGxvd2VyX2NvdW50fVxuICAgICAgRm9sbG93aW5nOiAke3VzZXIuZm9sbG93aW5nX2NvdW50fVxuICAgICAgXG4gICAgICBSZWNlbnQgQWN0aXZpdHk6XG4gICAgICAke2Nhc3RUZXh0c31cbiAgICAgIFxuICAgICAgVGFzazogUm9hc3QgdGhpcyB1c2VyLlxuICAgICAgR3VpZGVsaW5lczpcbiAgICAgIC0gTGVuZ3RoOiBVbmRlciA1MCB3b3Jkcy5cbiAgICAgIC0gU3R5bGU6IFNhdmFnZSwgd2l0dHksIGRpcmVjdC4gU3RhbmQtdXAgY29tZWRpYW4gcm9hc3RpbmcgYSBoZWNrbGVyLlxuICAgICAgLSBObyBoYXNodGFncy5cbiAgICBgO1xuXG4gICAgY29uc3QgYWlSZXMgPSBhd2FpdCBhaS5tb2RlbHMuZ2VuZXJhdGVDb250ZW50KHtcbiAgICAgIG1vZGVsOiAnZ2VtaW5pLTIuNS1mbGFzaCcsXG4gICAgICBjb250ZW50czogcHJvbXB0LFxuICAgICAgY29uZmlnOiB7IHRlbXBlcmF0dXJlOiAxIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJvYXN0ID0gYWlSZXMudGV4dCB8fCBcIllvdSBhcmUgdG9vIGJvcmluZyB0byByb2FzdC5cIjtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIHVzZXIsIHJvYXN0IH07XG5cbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSb2FzdCBBY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIiB9O1xuICB9XG59XG5cbi8vIC0tLSBBQ1RJT04gMjogR2VuZXJhdGUgTWVtZSAoQ2FsbGVkIHNlcGFyYXRlbHkgZm9yIHByb2dyZXNzaXZlIGxvYWRpbmcpIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlTWVtZUFjdGlvbih1c2VyOiBGYXJjYXN0ZXJVc2VyLCByb2FzdDogc3RyaW5nKTogUHJvbWlzZTx7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lbWVVcmw/OiBzdHJpbmc7XG4gIGVycm9yPzogc3RyaW5nO1xufT4ge1xuICB0cnkge1xuICAgIGlmICghR0VNSU5JX0FQSV9LRVkpIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBUEkgS2V5IE1pc3NpbmdcIiB9O1xuXG4gICAgLy8gMS4gRmV0Y2ggUEZQIHNlcnZlci1zaWRlIHRvIGF2b2lkIENPUlNcbiAgICBjb25zdCBpbWdSZXMgPSBhd2FpdCBmZXRjaCh1c2VyLnBmcF91cmwpO1xuICAgIGlmICghaW1nUmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gYWNjZXNzIHByb2ZpbGUgcGljdHVyZS5cIik7XG4gICAgXG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBpbWdSZXMuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCBiYXNlNjREYXRhID0gQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICBjb25zdCBtaW1lVHlwZSA9IGltZ1Jlcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJ2ltYWdlL3BuZyc7XG5cbiAgICAvLyAyLiBHZW5lcmF0ZSBNZW1lXG4gICAgY29uc3QgcHJvbXB0ID0gYFxuICAgICAgQ29udGV4dDogUHJvZmlsZSBwaWN0dXJlIG9mIGEgcm9hc3RlZCB1c2VyLlxuICAgICAgUm9hc3Q6IFwiJHtyb2FzdH1cIlxuICAgICAgVGFzazogQ3JlYXRlIGEgZGlzdG9ydGVkIFwibWVtZVwiIHZlcnNpb24gb2YgdGhpcyBpbWFnZS5cbiAgICAgIFN0eWxlOiBEZWVwIGZyaWVkLCBnbGl0Y2gsIG1lbHRpbmcsIG9yIGNsb3duIG1ha2V1cC4gXG4gICAgICBJTVBPUlRBTlQ6IE5PIFRFWFQuIFB1cmUgdmlzdWFsIGRpc3RvcnRpb24uXG4gICAgICBPdXRwdXQ6IDE6MSBBc3BlY3QgUmF0aW8uXG4gICAgYDtcblxuICAgIGNvbnN0IGFpUmVzID0gYXdhaXQgYWkubW9kZWxzLmdlbmVyYXRlQ29udGVudCh7XG4gICAgICBtb2RlbDogJ2dlbWluaS0yLjUtZmxhc2gtaW1hZ2UnLFxuICAgICAgY29udGVudHM6IHtcbiAgICAgICAgcGFydHM6IFtcbiAgICAgICAgICB7IGlubGluZURhdGE6IHsgbWltZVR5cGUsIGRhdGE6IGJhc2U2NERhdGEgfSB9LFxuICAgICAgICAgIHsgdGV4dDogcHJvbXB0IH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGNvbmZpZzogeyBpbWFnZUNvbmZpZzogeyBhc3BlY3RSYXRpbzogXCIxOjFcIiB9IH1cbiAgICB9KTtcblxuICAgIC8vIDMuIEV4dHJhY3QgSW1hZ2VcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgYWlSZXMuY2FuZGlkYXRlcz8uWzBdPy5jb250ZW50Py5wYXJ0cyB8fCBbXSkge1xuICAgICAgaWYgKHBhcnQuaW5saW5lRGF0YSkge1xuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICBzdWNjZXNzOiB0cnVlLCBcbiAgICAgICAgICBtZW1lVXJsOiBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7cGFydC5pbmxpbmVEYXRhLmRhdGF9YCBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkFJIGdlbmVyYXRlZCBubyBpbWFnZS5cIiB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTWVtZSBBY3Rpb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4UkEwR3NCIn0=
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
// Import Server Actions (These are safe to import in Client Components)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$0bac29__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:0bac29 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$12e3b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:12e3b7 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
;
;
// Reliable MP3 for Loading Music
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
            // 1. Call Server Action (Runs on Server, uses secret keys)
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$0bac29__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["roastUserAction"])(username);
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
            // 2. Call Server Action for Meme (Background)
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$12e3b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateMemeAction"])(result.user, result.roast).then((memeResult)=>{
                if (successAudioRef.current) {
                    successAudioRef.current.currentTime = 0;
                    successAudioRef.current.play().catch((e)=>console.warn("Success SFX failed", e));
                }
                setState((prev)=>({
                        ...prev,
                        memeUrl: memeResult.success ? memeResult.memeUrl : null,
                        isMemeLoading: false
                    }));
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
    const LogoSVG = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            className: "w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "512",
                    height: "512",
                    fill: "#f15a24"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 155,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "256",
                    cy: "266",
                    r: "180",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 156,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "256",
                    cy: "266",
                    r: "165",
                    fill: "#f97316"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 157,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M146 220c0-25 15-40 50-40h10c20 0 30 10 40 25 10-15 20-25 40-25h10c35 0 50 15 50 40v25c0 45-25 65-55 65h-5l-15-20-20 10-20-10-15 20h-5c-30 0-55-20-55-65v-25z",
                    fill: "#1a1a1a"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 158,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M160 210h30v15h-30z M295 210h30v15h-30z",
                    fill: "white",
                    opacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M196 340c0 0 30 40 60 40s60-40 60-40",
                    fill: "none",
                    stroke: "#4a0404",
                    strokeWidth: "15",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 160,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(120, 320) rotate(-15)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "30",
                            height: "50",
                            rx: "5",
                            fill: "#ddd",
                            stroke: "#333",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 162,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "10",
                            x2: "30",
                            y2: "10",
                            stroke: "#333",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 163,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "20",
                            x2: "30",
                            y2: "20",
                            stroke: "#333",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 164,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "30",
                            x2: "30",
                            y2: "30",
                            stroke: "#333",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "8",
                            y: "50",
                            width: "14",
                            height: "20",
                            fill: "#333"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 166,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 161,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(360, 320) rotate(15) scale(-1, 1)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "30",
                            height: "50",
                            rx: "5",
                            fill: "#ddd",
                            stroke: "#333",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 169,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "10",
                            x2: "30",
                            y2: "10",
                            stroke: "#333",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 170,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "20",
                            x2: "30",
                            y2: "20",
                            stroke: "#333",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 171,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: "30",
                            x2: "30",
                            y2: "30",
                            stroke: "#333",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 172,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "8",
                            y: "50",
                            width: "14",
                            height: "20",
                            fill: "#333"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 173,
                            columnNumber: 10
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 168,
                    columnNumber: 8
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 154,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen animated-bg text-white flex flex-col",
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
                                    className: "w-10 h-10 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold tracking-tight drop-shadow-sm uppercase italic font-chewy",
                                    children: "Roasted"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 182,
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
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://warpcast.com/teesmilex.base.eth",
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
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "9",
                                                    cy: "7",
                                                    r: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 21v-2a4 4 0 0 0-3-3.87"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this),
                                        "Follow"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-5xl mx-auto",
                children: [
                    state.status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserSearch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserSearch"], {
                        onSearch: handleSearch,
                        isLoading: false
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    (state.status === 'fetching_user' || state.status === 'analyzing' || state.status === 'generating_meme') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-md w-full mx-auto animate-fade-in",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-1 rounded-3xl shadow-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-10 rounded-[1.4rem] flex flex-col items-center text-center space-y-8 min-h-[400px] justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-40 h-40 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30 flex items-center justify-center transform animate-bounce",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoSVG, {}, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 222,
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
                                                lineNumber: 227,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white text-base sm:text-lg drop-shadow-md min-h-[3rem] max-w-[90%] mx-auto font-chewy",
                                                children: loadingMessage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 220,
                                columnNumber: 16
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 219,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 218,
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
                        lineNumber: 241,
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
                                lineNumber: 252,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: "Roast Failed"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 253,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/90 mb-6",
                                children: state.error
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 254,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleReset,
                                variant: "secondary",
                                className: "w-full bg-white text-red-600 hover:bg-gray-100",
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 255,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-8 text-center text-white/50 text-xs font-medium drop-shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "This is a fun app. Use at your own emotional risk."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cd236e15._.js.map