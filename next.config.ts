import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // ✅ ADD THIS BLOCK
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'teenversehub.in',
          },
        ],
        destination: 'https://www.teenversehub.in/:path*',
        permanent: true, // 🔥 converts 307 → 308
      },
    ];
  },
};

export default nextConfig;