/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://checkin-ui-seven.vercel.app/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  