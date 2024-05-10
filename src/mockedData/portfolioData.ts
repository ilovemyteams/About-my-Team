type PortfolioDataItemTranslation = {
    name: string;
    siteView: string;

    description: string;
};
type DataType = {
    id: string;
    image: string;
    video?: string;
    implementations: string[];
};
export type PortfolioDataItemType = {
    data: DataType;
    uk: PortfolioDataItemTranslation;
    en: PortfolioDataItemTranslation;
    pl: PortfolioDataItemTranslation;
};

export const portfolioData: PortfolioDataItemType[] = [
    {
        data: {
            id: "1",
            image: "https://drive.google.com/uc?export=view&id=1IKcAJZnWJFqIM-3X-WSAxwS3mysVVsYw",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
        },
        uk: {
            name: "i love my team",
            siteView: "лендінг",
            description:
                "На нашому сайті ви знайдете інформацію про вже реалізовані проекти та команди, які стояли за їхнім створенням",
        },
        en: {
            name: "i love my team",
            siteView: "lending",
            description: "descriptionId1",
        },
        pl: {
            name: "i love my team",
            siteView: "lending",
            description: "descriptionId1",
        },
    },
    {
        data: {
            id: "2",
            image: "https://drive.google.com/uc?export=view&id=1gYYRuu7SMlrk8tsRI9-BcS_fqYUdsjoU",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
        },
        uk: {
            name: "Смачно! на селі",
            siteView: "інтернет магазин",
            description:
                "Алісі набридло сидіти без діла на березі. Разів зо два вона зазирнула в книжку, що її читала сестра, але там не було ні рисунків, ні малюнків, а без них книжка не книжка, — гадала Аліса.",
        },
        en: {
            name: "Smachno! na seli",
            siteView: "internetShop",
            description: "descriptionId2",
        },
        pl: {
            name: "Smachno! na seli",
            siteView: "internetShop",
            description: "descriptionId2",
        },
    },
    {
        data: {
            id: "3",
            image: "https://drive.google.com/uc?export=view&id=11KnheYYs0CKXVkSPDmqnAHCJeVbP8f6D",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            video: "https://res.cloudinary.com/dxvtacrde/video/upload/v1709063030/samples/dance-2.mp4",
        },
        uk: {
            name: "Український театр",
            siteView: "вебсайт",
            description:
                "Довга товстезна гадюка обплелась навколо стовпа і ритмічно похитувала своєю плескатою головою. І чимало ще всіляких див і страхітливих речей було в просторій печері Гінгеми.",
        },
        en: {
            name: "Ukrainian theater",
            siteView: "website",
            description: "descriptionId3",
        },
        pl: {
            name: "Ukrainian theater",
            siteView: "website",
            description: "descriptionId3",
        },
    },
];
