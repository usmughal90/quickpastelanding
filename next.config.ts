import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns:[{
      pathname:'/**',
    }],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'landing.codematics.co',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;