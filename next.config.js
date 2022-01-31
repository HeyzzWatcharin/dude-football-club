/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['crests.football-data.org'],
  },
};

module.exports = nextConfig;
