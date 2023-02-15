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
      {
        source: '/donate',
        destination: 'https://www.donationalerts.com/r/pe3ep',
        permanent: false,
      },
      {
        source: '/school',
        destination: 'https://docs.google.com/presentation/d/1Tg-UwFQkpvazF40xU_PaD7RD23Dltd65B3RpkvxdItI/edit?usp=sharing',
        permanent: false,
      },
    ]
  },
}
