import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '.'),
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  },
};

export default nextConfig;
