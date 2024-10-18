/** @type {import('next-sitemap').IConfig} */

const membersId = [
    "SusannaSalataPM",
    "MariiaPopova",
    "SvitlanaKondratenko",
    "VladShumkov",
    "IhorDronishynets",
    "IrynaStoliarova",
    "AnastasiiaNazarenko",
    "EugeneSerdiuk",
    "IrynaTrynkal",
    "OlenaPosternak",
    "OlgaMykhailova",
    "KaterynaRubanik",
    "KaterynaPogrebna",
    "DariaCherviakova",
    "SusannaSalataBA",
    "OlhaKuchalska",
    "DenisSlivinskyi",
    "VolodymyrDehtiarev",
    "OlenaChornobryvets",
    "HannaHorbenko",
    "AnnaKlyba",
    "OksanaLuchko",
    "NadiaHubchuk",
    "TetianaSeletska",
    "YuliyaBorys",
    "HannaTruba",
    "OlenaHolubonkova",
    "MartaMorintseva",
    "IrynaShevchenko",
    "NataliIstominaMarket",
    "NataliIstominaBA",
    "VeronikaZlobina",
    "MilaMaksymenko",
    "AntonChertok",
    "DmytroBulakhov",
    "EvhenMalysh",
    "AnatoliiOmelchenko",
    "OleksandrMeshcherskyi",
    "SvitlanaKrokhmalna",
    "OksanaOnopriienko",
    "OlenaHalushka",
];

async function getDynamicMemberPages() {
    return membersId.map(id => `/member/${id}`);
}

const faqSlugs = [
    "i-need-a-website-where-should-i-start",
    "what-to-choose-a-landing-page-or-a-website",
    "what-are-the-terms-of-the-development-of-the-fully-functional-website",
    "how-much-does-development-cost",
    "can-i-choose-which-team-will-work-on-my-order",
];

async function getDynamicFaqPages() {
    return faqSlugs.map(slug => `/faq/${slug}`);
}

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: "monthly",
    priority: 0.7,
    exclude: ["/api/*"],
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
            {
                loc: "/about",
                changefreq: "monthly",
                priority: 0.8,
            },
            {
                loc: "/faq",
                changefreq: "weekly",
                priority: 0.8,
            },
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

        const dynamicPages = await getDynamicPages(config);
        const dynamicPaths = await Promise.all(
            dynamicPages.map(page => config.transform(config, page))
        );

        return [...staticPaths, ...dynamicPaths];
    },
};

async function getDynamicPages() {
    const memberPages = await getDynamicMemberPages();
    const faqPages = await getDynamicFaqPages();

    return [...memberPages, ...faqPages];
}
