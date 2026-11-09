import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Roast card PNGs are capped at 3 MB in uploadImageAction; allow multipart overhead.
      bodySizeLimit: "4mb",
    },
  },
};

export default nextConfig;