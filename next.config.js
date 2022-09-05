/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: !debug ? '/pokemon-search-nextjs' : '',
  assetPrefix: !debug ? '/pokemon-search-nextjs/' : '',

}

module.exports = nextConfig
// const debug = process.env.NODE_ENV !== 'production'

// module.exports = {
//   basePath: !debug ? '/pokemon-search-nextjs' : '',
//   assetPrefix: !debug ? '/pokemon-search-nextjs/' : '',
// }