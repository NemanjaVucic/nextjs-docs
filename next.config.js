const path=require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // sassOptions: {includePaths: [path.join(__dirname,'styles')]},
  images: {
    remotePatterns: [
      // setup your remote image domains here
      {
        protocol:'https',
        hostname:'s3.amazonaws.com',
        port:'',
        pathname:'/my-bucket-name/**',
      }
    ],
  },
  experimental: {
    appDir: true,
    // typedRoutes:true,
    // If both are configured, the subset in the function call is used & this one will be ignored.
    fontLoaders:[{
      loader:'@next/font/google',
      options:{
        subsets:['latin']
      }
    }]
  },
}

module.exports = nextConfig
