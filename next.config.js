/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ Allow builds to succeed even if there are TypeScript errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Allow builds to succeed even if there are ESLint errors/warnings
    ignoreDuringBuilds: true,
  },
  images: {
    // Optional: allow external domains if using <Image src="https://..."/>
    domains: ['yourdomain.com'],
  },
};

module.exports = nextConfig;
