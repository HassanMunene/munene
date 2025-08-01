import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export', // Enables static export
  distDir: 'out', // Output directory
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Ensures proper file paths
};

export default nextConfig;
