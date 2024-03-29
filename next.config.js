/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  output: "export",
  // assetPrefix: ".", // static Page 이기 떄문에 설정 시 css 못잡음
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  env: {
    PUBLIC_URL: "/",
  },
  images: {
    loader: "akamai",
    path: "/",
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_WEB_DOMAIN,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8080",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};
module.exports = withVanillaExtract(nextConfig);
