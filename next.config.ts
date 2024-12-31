import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["imgur.com"], // Add imgur.com to allowed domains
  },
};

export default nextConfig;
