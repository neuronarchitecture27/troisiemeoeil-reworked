/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
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
