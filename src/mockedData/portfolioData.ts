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
    ua: PortfolioDataItemTranslation;
    en: PortfolioDataItemTranslation;
    pl: PortfolioDataItemTranslation;
};

export const portfolioData: PortfolioDataItemType[] = [
    {
        data: {
            id: "1",
            image: "https://drive.google.com/uc?export=view&id=1tUrY_zuSgKXBiYC3L_Fub_Zlec4mZ-L5",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
        },
        ua: {
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
            image: "https://drive.google.com/uc?export=view&id=1-zVmDm8fSgCwP3TzDVQM_Hu08vCbJi2A",
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
            image: "https://drive.google.com/uc?export=view&id=1sNkFBnVPZzAenkxUzKwnecwNoOkMJDYl",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            video: "https://res.cloudinary.com/dxvtacrde/video/upload/v1709063030/samples/dance-2.mp4",
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
            image: "",
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
            name: "Adwokat ds. migracji",
            siteView: "website",
            description:
                "Strona internetowa oferuje usługi prawne w zakresie prawa migracyjnego, w tym ochronę praw obywateli w Państwowej Służbie Migracyjnej Ukrainy oraz konsultacje w sprawach obywatelstwa. Tutaj można znaleźć informacje o prawnikach, ich usługach i dane kontaktowe.",
        },
    },
];
