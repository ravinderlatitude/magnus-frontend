/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["testyourapp.online"],
    // domains: ["magnuslatitude.com"],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
