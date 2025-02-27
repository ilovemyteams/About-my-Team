type ProjectDataItemTranslation = {
    title: string;
    subtitle: string;
};
type DataType = {
    id: string;
    siteLink?: string;
    image: string;
    video?: string;
    category: "landing" | "website" | "shop";
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
            siteLink: "https://viktoriia-zabara.netlify.app/",
            image: "https://drive.google.com/uc?export=view&id=18RWpznE25pfHZpFXStzp4MujPpm0cwbI",
            category: "landing",
        },

        ua: {
            title: "ІТ рекрутер",
            subtitle: "Лендінг для IT-рекрутера",
        },
        en: { title: "string", subtitle: "string" },
        pl: { title: "string", subtitle: "string" },
    },
    {
        data: {
            id: "04",
            siteLink: "https://protection.in.ua/",
            image: "https://drive.google.com/uc?export=view&id=11FGZgLaN9t04MQCCBGyVIveLNszNZaY6",
            category: "website",
        },

        ua: {
            title: "Міграційний адвокат",
            subtitle: "Вебсайт для міграційного адвоката",
        },
        en: { title: "string", subtitle: "string" },
        pl: { title: "string", subtitle: "string" },
    },
    {
        data: {
            id: "03",
            siteLink: "https://theatermag.com.ua/",
            image: "https://drive.google.com/uc?export=view&id=1VQJcG8uJi6bSKhlDfY9bd3608dxhGJTQ",
            category: "website",
        },

        ua: {
            title: "Український театр",
            subtitle: "Вебсайт для ГО “Український театр”",
        },
        en: { title: "string", subtitle: "string" },
        pl: { title: "string", subtitle: "string" },
    },
    {
        data: {
            id: "02",
            siteLink: "https://batatfarm.com/",
            image: "https://drive.google.com/uc?export=view&id=1tgltGLTRcbdHia5fjV4K6sFVJlOyi14l",
            category: "shop",
        },

        ua: {
            title: "Смачно! на селі",
            subtitle: "Інтернет магазин натуральних продуктів",
        },
        en: { title: "", subtitle: "" },
        pl: { title: "", subtitle: "" },
    },
    {
        data: {
            id: "01",
            siteLink: "https://www.ilovemyteam.online/",
            image: "https://drive.google.com/uc?export=view&id=1euhTPDYseSUaGESWCxCcdZ0IAlp-mGVX",
            category: "website",
        },

        ua: {
            title: "i love my team",
            subtitle: "Вебсайт для IT команди",
        },
        en: { title: "", subtitle: "" },
        pl: { title: "", subtitle: "" },
    },
];
