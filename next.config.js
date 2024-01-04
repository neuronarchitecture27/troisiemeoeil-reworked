/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        domains: ['localhost'],
      },
      experimental: {
        serverComponentsExternalPackages: [
            'resend', "@react-email"
        ]
    }
}

module.exports = nextConfig
