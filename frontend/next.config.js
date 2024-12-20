/** @type {import('next').NextConfig} */
// Watch from type of development
// const dev = process.env.NODE_ENV !== 'production'

// Config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Env
  env: {
    SITE_URL: process.env.SITE_URL,
  },
  // Images domains
  images: {
    domains: ['efiterminal.com'],
  },
  // // Locale
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
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
