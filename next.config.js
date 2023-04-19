/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["testyourapp.online"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
