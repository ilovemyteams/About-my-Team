/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL,
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: "monthly",
    priority: "0,7",
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
    additionalPaths: async config => {
        const staticPages = [
            {
                loc: "/",
                changefreq: "weekly",
                priority: 1.0,
            },
        ];

        const dynamicPages = [
            "/member/SusannaSalataPM",
            "/member/MariiaPopova",
            "/member/SvitlanaKondratenko",
            "/member/VladShumkov",
            "/member/IhorDronishynets",
            "/member/IrynaStoliarova",
            "/member/AnastasiiaNazarenko",
            "/member/EugeneSerdiuk",
            "/member/IrynaTrynkal",
            "/member/OlenaPosternak",
            "/member/OlgaMykhailova",
            "/member/KaterynaRubanik",
            "/member/KaterynaPogrebna",
            "/member/DariaCherviakova",
            "/member/SusannaSalataBA",
            "/member/OlhaKuchalska",
            "/member/DenisSlivinskyi",
            "/member/VolodymyrDehtiarev",
            "/member/OlenaChornobryvets",
            "/member/HannaHorbenko",
            "/member/AnnaKlyba",
            "/member/OksanaLuchko",
            "/member/NadiaHubchuk",
            "/member/TetianaSeletska",
            "/member/YuliyaBorys",
            "/member/HannaTruba",
            "/member/OlenaHolubonkova",
        ];
        const staticPaths = await Promise.all(
            staticPages.map(async page => {
                const transformed = await config.transform(config, page.loc);
                return {
                    ...transformed,
                    changefreq: page.changefreq,
                    priority: page.priority,
                };
            })
        );

        return [
            ...staticPaths,
            ...(await Promise.all(
                dynamicPages.map(page => config.transform(config, page))
            )),
        ];
    },
};
