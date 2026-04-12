import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       pathname: "/**",
  //     },
  //   ],
  // },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
