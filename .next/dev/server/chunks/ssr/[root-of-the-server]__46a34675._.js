module.exports = [
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/src/app/actions.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406e3405653d65e174f660fc48b6a1922983761d12":"roastUserAction","60d9fe79e76b1a05989be5e34f60e48cfebb8cb151":"generateMemeAction"},"",""] */ __turbopack_context__.s([
    "generateMemeAction",
    ()=>generateMemeAction,
    "roastUserAction",
    ()=>roastUserAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@google/genai'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/buffer [external] (buffer, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
// --- Configuration ---
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY || "";
const NEYNAR_API_URL = process.env.NEYNAR_API_URL || "https://api.neynar.com/v2/farcaster";
const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY
});
async function roastUserAction(username) {
    try {
        if (!GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY in .env.local");
        if (!NEYNAR_API_KEY) throw new Error("Missing NEYNAR_API_KEY in .env.local");
        const cleanUsername = username.replace(/^@/, '').trim().toLowerCase();
        // 1. Fetch User
        const userRes = await fetch(`${NEYNAR_API_URL}/user/by_username?username=${cleanUsername}&viewer_fid=3`, {
            headers: {
                'accept': 'application/json',
                'api_key': NEYNAR_API_KEY
            },
            cache: 'no-store'
        });
        if (!userRes.ok) {
            if (userRes.status === 404) throw new Error(`User @${cleanUsername} not found.`);
            if (userRes.status === 429) throw new Error("Neynar Rate limit hit. Wait a minute.");
            throw new Error("Failed to fetch user profile.");
        }
        const userData = await userRes.json();
        const user = userData.user;
        // 2. Fetch Casts (Increased limit and INCLUDED replies for the audit)
        const castsRes = await fetch(`${NEYNAR_API_URL}/feed/user/casts?fid=${user.fid}&limit=30&include_replies=true&include_recasts=false`, {
            headers: {
                'accept': 'application/json',
                'api_key': NEYNAR_API_KEY
            },
            cache: 'no-store'
        });
        let castTexts = "";
        let replyTexts = "";
        if (castsRes.ok) {
            const castsData = await castsRes.json();
            const allCasts = castsData.casts || [];
            // Separate primary casts from replies
            const primaryCasts = allCasts.filter((c)=>!c.parent_hash);
            const replies = allCasts.filter((c)=>c.parent_hash);
            castTexts = primaryCasts.slice(0, 10).map((c)=>`- ${c.text} (Likes: ${c.reactions.likes_count})`).join('\n');
            replyTexts = replies.slice(0, 10).map((c)=>`- ${c.text}`).join('\n');
        }
        // 3. Generate Roast - PSYCHOLOGICAL MIND READER PROMPT
        const ratio = user.follower_count > 0 ? (user.following_count / user.follower_count * 100).toFixed(0) : "0";
        const prompt = `
      TARGET: @${user.username} (${user.display_name})
      Bio: "${user.profile.bio.text}"
      Stats: ${user.follower_count} followers vs ${user.following_count} following (${ratio}% ratio).

      DATA DUMP (Their recent thoughts):
      ${castTexts}
      ${replyTexts || 'NO REPLIES (ghost account vibes)'}

      CRINGE AUDIT PARAMETERS:
      - Bio Cringe: Tryhard keywords, emoji spam, humblebrags.
      - Content Patterns: Crypto zombie slang, engagement farming, self-quotes.
      - Personality Flaws: Desperation, arrogance, boredom.

      TASK: Deliver a STAND-UP COMEDIAN HECKLER ROAST (Max 60 words).
      
      STRICT RULES:
      1. **NO QUOTES**: Do not quote their posts. Do not say "You said...".
      2. **NO DASHES/LISTS**: Write a cohesive paragraph.
      3. **MIND READER STYLE**: Look into their soul and describe their pathetic reality with additional savage.
      4. **BE BRUTAL**: Attack their specific insecurities revealed by the data (like, last 100 casts and replies).
      
      Example of Desired Style:
      be creative, brutal, and specific. be unpredictable too
    `;
        const roastRes = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: "You are a brutal, psychic roast master. You do not quote people; you analyze their soul and destroy them directly.",
                temperature: 1
            }
        });
        const roast = roastRes.text || "You're too boring to roast.";
        return {
            success: true,
            user,
            roast
        };
    } catch (error) {
        console.error('Roast Action Error:', error);
        return {
            success: false,
            error: error.message || 'Server error'
        };
    }
}
async function generateMemeAction(user, roast) {
    try {
        if (!GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY");
        // Helper to fetch image buffer
        async function urlToBase64(url) {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch image");
            const arrayBuffer = await response.arrayBuffer();
            const buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$buffer__$5b$external$5d$__$28$buffer$2c$__cjs$29$__["Buffer"].from(arrayBuffer);
            return {
                data: buffer.toString('base64'),
                mimeType: response.headers.get('content-type') || 'image/png'
            };
        }
        const imagePart = await urlToBase64(user.pfp_url);
        // Prompt: Focus on VISUAL DISTORTION ONLY. No text inside the image.
        const memePrompt = `
      This is the profile picture of a user who just got roasted.
      Roast context: "${roast}"
      
      TASK: Apply a heavy, funny visual filter/distortion to this face.
      Styles: Deep fried, clown makeup, melting, high contrast, or glitch art.
      
      IMPORTANT:
      - OUTPUT ASPECT RATIO MUST BE 1:1.
      - DO NOT ADD ANY TEXT TO THE IMAGE.
      - Keep the face recognizable but ridiculed.
    `;
        const memeRes = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
                parts: [
                    {
                        inlineData: imagePart
                    },
                    {
                        text: memePrompt
                    }
                ]
            },
            config: {
                imageConfig: {
                    aspectRatio: "1:1"
                }
            }
        });
        let memeUrl = null;
        for (const part of memeRes.candidates?.[0]?.content?.parts || []){
            if (part.inlineData) {
                memeUrl = `data:image/png;base64,${part.inlineData.data}`;
                break;
            }
        }
        if (!memeUrl) throw new Error("No image generated");
        return {
            success: true,
            memeUrl
        };
    } catch (error) {
        // Graceful handling for Rate Limits (429) so the app doesn't crash
        if (error.status === 429 || error.message?.includes('429')) {
            console.warn("Meme generation rate limited (local). Skipping.");
            return {
                success: false,
                error: "Rate limit hit (Meme skipped)"
            };
        }
        console.error("Meme Action Error:", error);
        return {
            success: false,
            error: "Failed to generate meme"
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    roastUserAction,
    generateMemeAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(roastUserAction, "406e3405653d65e174f660fc48b6a1922983761d12", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateMemeAction, "60d9fe79e76b1a05989be5e34f60e48cfebb8cb151", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.tsx [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.tsx [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "406e3405653d65e174f660fc48b6a1922983761d12",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["roastUserAction"],
    "60d9fe79e76b1a05989be5e34f60e48cfebb8cb151",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMemeAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.tsx [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.tsx [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/.pnpm/next@16.0.3_@babel+core@7.28.5_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__46a34675._.js.map