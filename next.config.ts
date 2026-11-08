import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/over-mij",
        destination: "/over-ons",
        permanent: true,
      },
      {
        source: "/over-vania",
        destination: "/over-ons",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
