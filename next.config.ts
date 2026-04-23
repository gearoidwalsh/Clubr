import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "blockchain.berkeley.edu" },
    ],
  },
  async redirects() {
    return [
      { source: "/journey", destination: "/guide", permanent: true },
      { source: "/recruiting", destination: "/guide?tab=recruiting", permanent: true },
      { source: "/resources", destination: "/guide?tab=resources", permanent: true },
      { source: "/transfers", destination: "/your-path", permanent: true },
      { source: "/first-years", destination: "/your-path?tab=first-years", permanent: true },
    ];
  },
};

export default nextConfig;
