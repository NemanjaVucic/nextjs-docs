const path=require('path');
const withMDX = require('@next/mdx');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // sassOptions: {includePaths: [path.join(__dirname,'styles')]},
  pageExtensions:['tsx','ts','jsx','js','mdx'],
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
    mdxRs:true,
    typedRoutes:true,
    serverComponentsExternalPackages:['@acme/ui'],
    // If both are configured, the subset in the function call is used & this one will be ignored.
    fontLoaders:[{
      loader:'@next/font/google',
      options:{
        subsets:['latin']
      }
    }],
  },
  transpilePackages:['@acme/ui','loadash-es'],
}

module.exports = withMDX(nextConfig)
