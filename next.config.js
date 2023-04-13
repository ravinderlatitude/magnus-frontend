/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["testyourapp.online"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
