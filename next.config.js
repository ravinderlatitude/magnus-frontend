/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: getEnvConfig(),
  images: {
    domains: [getEnvConfig().DOMAIN],
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

function getEnvConfig() {
  const environment = process.env.TARGET_ENV || process.env.NODE_ENV;
  try {
    return require(`./env-${environment}.json`);
  } catch (err) {
    return require("./env.json");
  }
};

module.exports = {
  basePath: '/', // Replace 'your-base-path' with your actual base path.
};
