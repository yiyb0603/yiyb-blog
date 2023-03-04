const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const options = {
  reactStrictMode: false,
  swcMinify: false,
};

module.exports = withContentlayer(options);