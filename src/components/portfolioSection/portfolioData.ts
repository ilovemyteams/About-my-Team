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
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",
            implementations: ["Design", "Logo Design", "Web Development"],
        },
        uk: {
            name: "I love my team",
            siteView: "лендінг",
            description:
                "На нашому сайті ви знайдете інформацію про вже реалізовані проекти та команди, які стояли за їхнім створенням",
        },
        en: {
            name: "I love my team",
            siteView: "lending",
            description: "descriptionId1",
        },
        pl: {
            name: "siteNameWithId1",
            siteView: "lending",
            description: "descriptionId1",
        },
    },
    {
        data: {
            id: "2",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146269/cld-sample-4.jpg",
            implementations: ["Design", "Web Development"],
        },
        uk: {
            name: "Аліса в країні чудес",
            siteView: "персональний сайт",
            description:
                "Алісі набридло сидіти без діла на березі. Разів зо два вона зазирнула в книжку, що її читала сестра, але там не було ні рисунків, ні малюнків, а без них книжка не книжка, — гадала Аліса.",
        },
        en: {
            name: "Alisa in Wonderwold",
            siteView: "site",
            description: "descriptionId2",
        },
        pl: {
            name: "siteNameWithId2",
            siteView: "site",
            description: "descriptionId2",
        },
    },
    {
        data: {
            id: "3",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146240/samples/people/jazz.jpg",
            implementations: ["Design", "Logo Design", "Web Development"],
            video: "https://res.cloudinary.com/dxvtacrde/video/upload/v1709063030/samples/dance-2.mp4",
        },
        uk: {
            name: "Смарагдове місто",
            siteView: "інтернет магазин",
            description:
                "Довга товстезна гадюка обплелась навколо стовпа і ритмічно похитувала своєю плескатою головою. І чимало ще всіляких див і страхітливих речей було в просторій печері Гінгеми.",
        },
        en: {
            name: "siteNameWithId3",
            siteView: "internetShop",
            description: "descriptionId3",
        },
        pl: {
            name: "siteNameWithId3",
            siteView: "internetShop",
            description: "descriptionId3",
        },
    },
    {
        data: {
            id: "4",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146260/samples/balloons.jpg",
            implementations: ["Design", "Business Analysis", "Web Development"],
        },
        uk: {
            name: "Барон Мюнхаузен",
            siteView: "сайт візитівка",
            description:
                "Прокинувшись, Мюнхгаузен побачив, що лежить не в полі, а в якомусь містечку, а згори почулося іржання. Кінь висів на вершку дзвіниці, прив'язаний просто до хреста.",
        },
        en: {
            name: "siteNameWithId4",
            siteView: "businessCard",
            description: "descriptionId4",
        },
        pl: {
            name: "siteNameWithId4",
            siteView: "businessCard",
            description: "descriptionId4",
        },
    },
    {
        data: {
            id: "5",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146244/samples/ecommerce/accessories-bag.jpg",
            implementations: ["Design", "Logo Design", "Web Development"],
        },
        uk: {
            name: "Маломандер",
            siteView: "корпоративний сайт",
            description:
                "Герберт і Вайолет беруться відшукати хоч якісь зачіпки... що приводять їх до легенди про моторошного маламандера..",
        },
        en: {
            name: "siteNameWithId5",
            siteView: "corporateSite",
            description: "descriptionId5",
        },
        pl: {
            name: "siteNameWithId5",
            siteView: "corporateSite",
            description: "descriptionId5",
        },
    },
    {
        data: {
            id: "6",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146267/cld-sample.jpg",
            implementations: [
                "Business Analysis",
                "Web Development",
                "Testing",
            ],
        },
        uk: {
            name: "Джуді Муді",
            siteView: "блог",
            description:
                "На Вас чекає знайомство з кумедною дівчинкою на ім’я Джуді Муді, у якої частенько змінюється настрій.",
        },
        en: {
            name: "siteNameWithId6",
            siteView: "blog",
            description: "descriptionId6",
        },
        pl: {
            name: "siteNameWithId6",
            siteView: "blog",
            description: "descriptionId6",
        },
    },
];
