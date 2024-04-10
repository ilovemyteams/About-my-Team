import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ],
        domains: ["drive.google.com"],
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
