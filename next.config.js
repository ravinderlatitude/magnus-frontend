/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["magnuslatitude.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
