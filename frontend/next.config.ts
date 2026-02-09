import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@try-workspaces/shared"],
};

export default nextConfig;
