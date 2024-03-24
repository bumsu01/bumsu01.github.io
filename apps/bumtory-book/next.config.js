/**
 * @type {import('next').NextConfig}
 */
// const withTM = require('next-transpile-modules')([]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  //   images: {
  //     domains: [
  //       { protocol: 'https', hostname: '**.github.co(m|.kr)' },
  //       { protocol: 'http', hostname: '**.localhost.co(m|.kr)' },
  //     ],
  //   },
  //   env: {
  //     STAGE: process.env.STAGE,
  //   },
  compiler: {
    emotion: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

module.exports = nextConfig;
