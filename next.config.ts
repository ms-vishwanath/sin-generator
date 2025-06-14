import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,
  },
  experimental: {
    cssChunking: true,
  },
  expireTime: 3600,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  trailingSlash: true,
};

export default nextConfig;
