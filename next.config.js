/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@opensearch-project/opensearch'],
  },
};

export default nextConfig;
