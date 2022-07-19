/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/k3u992g4dk',
        permanent: false,
      },
      {
        source: '/twitch',
        destination: 'https://twitch.tv/pe3epwithyou',
        permanent: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/pe3ep',
        permanent: false,
      },
    ]
  },
}
