/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 1,
    exclude: "/api/*",
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
            { userAgent: "*", disallow: "/api/*" },
        ],
    },
    alternateRefs: [
        {
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
            hreflang: "en",
        },
        {
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/pl`,
            hreflang: "pl",
        },
    ],
};
