/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "jusapp.s3.eu-central-1.amazonaws.com",
      "logos-download.com",
      "seeklogo.com",
      "miro.medium.com",
      "v4.mui.com",
    ],
  },
};

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}
