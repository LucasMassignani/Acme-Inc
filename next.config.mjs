/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
