/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "cdn.sanity.io",
          port: '',
        },
      ],
    },
    eslint: {
      // Warning: This will ignore ESLint errors during builds!
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  