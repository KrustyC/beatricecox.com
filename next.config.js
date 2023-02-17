// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:8888",
    s3BucketUrl: `https://${process.env.S3_BEATRICECOX_BUCKET}.s3.amazonaws.com`,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "beatricecox-dev.s3.amazonaws.com",
      "beatricecox.s3.amazonaws.com",
    ],
    minimumCacheTTL: 60,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/sitemap-generator.js");
    }
    return config;
  },
};

module.exports = withPlaiceholder(nextConfig);
