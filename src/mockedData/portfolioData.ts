type PortfolioDataItemTranslation = {
    name: string;
    siteView: string;

    description: string;
};
type DataType = {
    id: string;
    siteLink?: string;
    image: string;
    video?: string;
    implementations: string[];
    order: number;
};
export type PortfolioDataItemType = {
    data: DataType;
    ua: PortfolioDataItemTranslation;
    en: PortfolioDataItemTranslation;
    pl: PortfolioDataItemTranslation;
};

export const portfolioData: PortfolioDataItemType[] = [
    {
        data: {
            id: "1",
            siteLink: "ilovemyteam.online",
            image: "https://drive.google.com/uc?export=view&id=14zu-CX8qKSEIqsec_R1lW9S-HITsaG_s",

            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            order: 4,
        },
        ua: {
            name: "i love my team",
            siteView: "вебсайт",
            description:
                "На нашому сайті ви знайдете інформацію про вже реалізовані проекти та команди, які стояли за їхнім створенням",
        },
        en: {
            name: "i love my team",
            siteView: "website",
            description: "descriptionId1",
        },
        pl: {
            name: "i love my team",
            siteView: "website",
            description: "descriptionId1",
        },
    },
    {
        data: {
            id: "2",
            siteLink: "batatfarm.com",
            image: "https://drive.google.com/uc?export=view&id=19Go5FeHwvpALJUsmNSzBMCNRpmIXPnpB",
            order: 3,
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
        },
        ua: {
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
            siteLink: "theatermag.com.ua",
            order: 1,
            image: "https://drive.google.com/uc?export=view&id=1_za8Na2MjieHDq2a5-aArjOHyloyDYe3",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
        },
        ua: {
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
    {
        data: {
            id: "4",
            siteLink: "protection.in.ua",
            order: 2,
            image: "https://drive.google.com/uc?export=view&id=1G8Z-YAOZV5g9s0qim-zRPpdoVx2v97Sd",
            implementations: ["Design", "Development", "Testing", "Support"],
        },
        ua: {
            name: "Міграційний Адвокат",
            siteView: "вебсайт",
            description:
                "Сайт пропонує юридичні послуги в сфері міграційного права, включаючи захист прав громадян у Державній міграційній службі України та консультації з питань громадянства. Тут можна знайти інформацію про адвокатів, їхні послуги та контакти для зв'язку.",
        },
        en: {
            name: "Migration Lawyer",
            siteView: "website",
            description:
                "The website offers legal services in the field of migration law, including the protection of citizens' rights in the State Migration Service of Ukraine and consultations on citizenship issues. Here you can find information about lawyers, their services, and contact details.",
        },
        pl: {
            name: "Prawnik imigracyjny",
            siteView: "website",
            description:
                "Strona internetowa oferuje usługi prawne w zakresie prawa migracyjnego, w tym ochronę praw obywateli w Państwowej Służbie Migracyjnej Ukrainy oraz konsultacje w sprawach obywatelstwa. Tutaj można znaleźć informacje o prawnikach, ich usługach i dane kontaktowe.",
        },
    },
    {
        data: {
            id: "5",
            siteLink: "viktoriia-zabara.netlify.app",
            order: 5,
            image: "https://drive.google.com/uc?export=view&id=1KFlUqkjP-225Ro3A0gCkNQq5R1zUI17i",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
        },
        ua: {
            name: "IT-рекрутер",
            siteView: "лендінг",
            description: "",
        },
        en: {
            name: "IT-recruiter",
            siteView: "landing page",
            description: "",
        },
        pl: {
            name: "IT-rekruter",
            siteView: "strona docelowa",
            description: "",
        },
    },
];
