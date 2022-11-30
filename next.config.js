/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid"
]);
const nextConfig = withTM({
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? '/spruha/preview' : undefined,
  assetPrefix : isProd ? 'https://nextjs.spruko.com/spruha/preview/' : undefined,
  images: {
    loader:"akamai",
    path:""
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/components/dashboard/dashboard',
  //       permanent: true
  //     }
  //   ]
  // },
})

module.exports = nextConfig
