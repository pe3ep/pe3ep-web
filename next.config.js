/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/k3u992g4dk',
        permanent: true,
      },
      {
        source: '/twitch',
        destination: 'https://twitch.tv/pe3epwithyou',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/pe3ep',
        permanent: true,
      },
      {
        source: '/donate',
        destination: 'https://www.donationalerts.com/r/pe3ep',
        permanent: true,
      },
      {
        source: '/tg',
        destination: 'https://t.me/pe3epwithyou',
        permanent: true,
      },
    ]
  },
}
