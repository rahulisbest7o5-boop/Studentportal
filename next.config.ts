import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Studentportal",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;