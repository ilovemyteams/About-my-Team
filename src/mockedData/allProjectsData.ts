type ProjectDataItemTranslation = {
    title: string;
    subtitle: string;
};
export type DataType = {
    id: string;
    slug: string;
    siteLink?: string;
    image: string;
    video?: string;
    category: "LandingProjects" | "ECommerceProjects" | "Websites";
};
export type ProjectDataItemType = {
    data: DataType;
    ua: ProjectDataItemTranslation;
    en: ProjectDataItemTranslation;
    pl: ProjectDataItemTranslation;
};

export const allProjectsData: ProjectDataItemType[] = [
    {
        data: {
            id: "05",
            slug: "viktoriia-zabara",
            siteLink: "https://viktoriia-zabara.netlify.app/",
            image: "https://drive.google.com/uc?export=view&id=18RWpznE25pfHZpFXStzp4MujPpm0cwbI",
            category: "LandingProjects",
        },
        ua: {
            title: "ІТ рекрутер",
            subtitle: "Лендінг для IT-рекрутера",
        },
        en: {
            title: "IT Recruiter",
            subtitle: "Landing Page for an IT Recruiter",
        },
        pl: {
            title: "Rekruter IT",
            subtitle: "Landing page dla rekrutera IT",
        },
    },
    {
        data: {
            id: "04",
            slug: "protection-in-ua",
            siteLink: "https://protection.in.ua/",
            image: "https://drive.google.com/uc?export=view&id=11FGZgLaN9t04MQCCBGyVIveLNszNZaY6",
            category: "Websites",
        },
        ua: {
            title: "Міграційний адвокат",
            subtitle: "Вебсайт для міграційного адвоката",
        },
        en: {
            title: "Migration Lawyer",
            subtitle: "Website for a Migration Lawyer",
        },
        pl: {
            title: "Prawnik ds. migracji",
            subtitle: "Strona internetowa dla prawnika ds. migracji",
        },
    },
    {
        data: {
            id: "03",
            slug: "theatermag-com-ua",
            siteLink: "https://theatermag.com.ua/",
            image: "https://drive.google.com/uc?export=view&id=1VQJcG8uJi6bSKhlDfY9bd3608dxhGJTQ",
            category: "Websites",
        },
        ua: {
            title: "Український театр",
            subtitle: "Вебсайт для ГО “Український театр”",
        },
        en: {
            title: "Ukrainian Theater",
            subtitle: `Website for the NGO "Ukrainian Theater"`,
        },
        pl: {
            title: "Ukraiński Teatr",
            subtitle: `Strona internetowa dla NGO "Ukraiński Teatr"`,
        },
    },
    {
        data: {
            id: "02",
            slug: "batatfarm-com",
            siteLink: "https://batatfarm.com/",
            image: "https://drive.google.com/uc?export=view&id=1tgltGLTRcbdHia5fjV4K6sFVJlOyi14l",
            category: "ECommerceProjects",
        },
        ua: {
            title: "Смачно! на селі",
            subtitle: "Інтернет магазин натуральних продуктів",
        },
        en: {
            title: "Smachno! na seli",
            subtitle: "Online Store for Natural Products",
        },
        pl: {
            title: "Smachno! na seli",
            subtitle: "Sklep internetowy z produktami naturalnymi",
        },
    },
    {
        data: {
            id: "01",
            slug: "ilovemyteam-online",
            siteLink: "https://www.ilovemyteam.online/",
            image: "https://drive.google.com/uc?export=view&id=1euhTPDYseSUaGESWCxCcdZ0IAlp-mGVX",
            category: "Websites",
        },
        ua: {
            title: "i love my team",
            subtitle: "Вебсайт для IT команди",
        },
        en: {
            title: "i love my team",
            subtitle: "Website for an IT Team",
        },
        pl: {
            title: "i love my team",
            subtitle: "Strona internetowa dla zespołu IT",
        },
    },
];
