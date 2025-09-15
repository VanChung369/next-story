import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  swcMinify: true,

  compiler: {
    // automatically add display names for styled-components
    styledComponents: true,
    // support for the `@emotion/css` and `@emotion/react` packages
    emotion: true,

    removeConsole: {
      exclude: ["error", "warn"],
    },
  },

  experimental: {
    reactCompiler: true,
  },

  reactRemoveProperties: true,
  removeProperties: true,
};

export default nextConfig;
