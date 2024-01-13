const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    mdxOptions: {
        layoutPath: 'src/app/blog/template', // specify the folder where your layout components are stored
        defaultLayout: true,   // specify the default layout component
      },
    images: {
        domains: ['localhost', "rfkdwkpnnalilegqqggx.supabase.co"],
      },
      experimental: {
        serverComponentsExternalPackages: [
            'resend', "@react-email"
        ]
    }
}

module.exports = nextConfig
