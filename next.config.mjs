import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache",
          },
          {
            key: "CDN-Cache-Control",
            value: "max-age=60",
          },
          {
            key: "Vercel-CDN-Cache-Control",
            value: "max-age=60",
          },
        ],
      },
    ];
  },
  // experimental: { urlImports: ["https://themer.sanity.build/"] },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
