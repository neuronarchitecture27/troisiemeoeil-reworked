
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
 
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
