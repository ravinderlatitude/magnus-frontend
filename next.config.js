/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["testyourapp.online"],
    // domains: ["magnuslatitude.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
