const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = withContentlayer(options);
