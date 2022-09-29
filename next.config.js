/** @type {import('next').NextConfig} */
// Watch from type of development
const dev = process.env.NODE_ENV !== 'production'

// Config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Env
  env: {
    SITE_URL: dev ? 'http://localhost:3000' : '',
    APOLLO_URI: dev ? 'http://localhost:3000/api/graphql' : '',
  },
  // Images domains
  images: {
    domains: [''],
  },
  // Icons config
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
