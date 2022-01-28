/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    localeDetection: false,
  },
  images: {
    domains: ['crests.football-data.org'],
  },
}

module.exports = nextConfig
