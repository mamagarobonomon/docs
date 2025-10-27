/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  assetPrefix: process.env.NODE_ENV === 'production' ? '/docs' : '',
}

module.exports = nextConfig
