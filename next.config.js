/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/hoge/:path*',
        destination: '/user/:path*',
      },
      {
        source: '/',
        destination: '/hello/home',
      },
    ];
  },
}

module.exports = nextConfig
