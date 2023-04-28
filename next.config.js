// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    environment: process.env.ENVIRONMENT || "local",
    baseUrl: process.env.BASE_URL || "http://localhost:8888",
    s3BucketUrl: `https://${process.env.S3_BEATRICECOX_BUCKET}.s3.amazonaws.com`,
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  images: {
    domains: [
      "upload.wikimedia.org",
      "beatricecox-dev.s3.amazonaws.com",
      "beatricecox.s3.amazonaws.com",
    ],
    minimumCacheTTL: 60,
  },
};

module.exports = withPlaiceholder(nextConfig);
