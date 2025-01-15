/** @type {import('next-sitemap').IConfig} */

const membersId = [
  "susanna-salata-product-manager",
  "mariia-popova-designer-graphic-designer-ui-ux-designer",
  "svitlana-kondratenko-business-analyst",
  "vlad-shumkov-fullstack-developer",
  "ihor-dronishynets-fullstack-developer",
  "iryna-stoliarova-ui-ux-designer",
  "anastasiia-nazarenko-graphic-designer",
  "eugene-serdiuk-fullstack-developer",
  "iryna-trynkal-fullstack-developer",
  "olena-posternak-frontend-developer",
  "olga-mykhailova-frontend-developer",
  "kateryna-rubanik-qa-engineer",
  "susanna-salata-business-analyst",
  "denis-slivinskyi-fullstack-developer",
  "volodymyr-dehtiarev-fullstack-developer",
  "olena-chornobryvets-qa-engineer",
  "hanna-horbenko-qa-engineer",
  "anna-klyba-qa-engineer",
  "oksana-luchko-qa-engineer",
  "nadia-hubchuk-qa-engineer",
  "tetiana-seletska-project-manager-scrum-master",
  "daria-cherviakova-project-manager-scrum-master",
  "hanna-truba-marketer",
  "olena-holubonkova-marketer",
  "marta-morintseva-qa-engineer",
  "iryna-shevchenko-business-analyst",
  "natali-istomina-marketer",
  "natali-istomina-business-analyst",
  "veronika-zlobina-ui-ux-designer",
  "mila-maksymenko-ui-ux-designer",
  "anton-chertok-frontend-developer",
  "dmytro-bulakhov-frontend-developer",
  "evhen-malysh-backend-developer",
  "anatolii-omelchenko-backend-developer",
  "oleksandr-meshcherskyi-fullstack-developer",
  "svitlana-krokhmalna-qa-engineer",
  "oksana-onopriienko-qa-engineer",
  "olena-halushka-ui-ux-designer",
  "mariia-cherevko-ui-ux-designer",
  "anna-prutnik-frontend-developer",
  "oleksandr-petrychuk-fullstack-developer",
  "eugene-siedinin-qa-engineer",
  "kateryna-pogrebna-qa-engineer",
  "yuliya-borys-business-analyst",
  "olha-kuchalska-business-analyst",
  "solomiia-lutska-project-project-manager-scrum-master",
];

async function getDynamicMemberPages() {
  return membersId.map((id) => `/member/${id}`);
}

const faqSlugs = [
  "i-need-a-website-where-should-i-start",
  "what-to-choose-a-landing-page-or-a-website",
  "what-are-the-terms-of-the-development-of-the-fully-functional-website",
  "how-much-does-development-cost",
  "can-i-choose-which-team-will-work-on-my-order",
  "can-i-make-changes-during-the-development-process",
  "do-you-provide-post-launch-support",
  "what-is-a-landing-page-and-who-needs-it",
];
async function getDynamicFaqPages() {
  return faqSlugs.map((slug) => `/faq/${slug}`);
}
const servicesSlug = [
  "business-analysis",
  "design",
  "development",
  "testing",
  "support",
  "comprehensive-service",
  "landing",
  "website",
  "online-store",
];

async function getDynamicServicesPages() {
  return servicesSlug.map((slug) => `/services/${slug}`);
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
  additionalPaths: async (config) => {
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
        changefreq: "monthly",
        priority: 0.8,
      },
      {
        loc: "/services",
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        loc: "/events",
        changefreq: "weekly",
        priority: 0.8,
      },
    ];

    const staticPaths = await Promise.all(
      staticPages.map(async (page) => {
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
      dynamicPages.map((page) => config.transform(config, page))
    );

    return [...staticPaths, ...dynamicPaths];
  },
};

async function getDynamicPages() {
  const memberPages = await getDynamicMemberPages();
  const faqPages = await getDynamicFaqPages();
  const servicesPages = await getDynamicServicesPages();

  return [...memberPages, ...faqPages, ...servicesPages];
}
