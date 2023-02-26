const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = withContentlayer(options);