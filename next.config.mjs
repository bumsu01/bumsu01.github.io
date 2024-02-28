/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: ".",
  env: {
    PUBLIC_URL: "/",
  },
  images: {
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
  trailingSlash: true,
};

export default nextConfig;
