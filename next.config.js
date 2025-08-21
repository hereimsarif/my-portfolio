/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
