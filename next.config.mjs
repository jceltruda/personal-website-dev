/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Serve the resume PDF at the clean /resume path.
      { source: '/resume', destination: '/resume.pdf' },
    ];
  },
};

export default nextConfig;
