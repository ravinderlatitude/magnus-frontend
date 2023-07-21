/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["magnuslatitude.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig; */

// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'https://api.magnuslatitude.com/api:path*',
          },
        ]
      },
  };
