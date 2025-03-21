type PortfolioDataItemTranslation = {
    name: string;
    heroName?: string;
    siteView: string;
    subtitle: string;
    description: string;
    heroText?: string[];
    statistics?: {
        analysis: string;
        design: string;
        launch: string;
        support: string;
    };
    content?: (ScrollSectionType | SliderSectionType | SectionWithVideoType)[];
};

interface ScrollSectionType {
    layout: "scroll";
    title: string;
    data: { title: string; text: string[]; icon: string }[];
}

interface SliderSectionType {
    layout: "slider";
    title: string;
    data: { slideLeft: SlideType[]; slideRight: SlideType[] }[];
}

interface SectionWithVideoType {
    layout: "video";
    title: string;
    description: string[];
    video: string;
}
type TextType = { text: string[] };
type ImageType = { image: string };
type SlideType = TextType | ImageType;

type DataType = {
    id: string;
    slug: string;
    siteLink?: string;
    imageForAllProjectsPage: string;
    imageForHero?: string;
    bechanceLink?: string;
    image: string;
    video?: string;
    implementations: string[];
    order: number;
    category: "landings" | "onlinestores" | "websites";
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
            id: "5",
            slug: "viktoriia-zabara",
            siteLink: "viktoriia-zabara.netlify.app",
            order: 5,
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=18RWpznE25pfHZpFXStzp4MujPpm0cwbI",
            image: "https://drive.google.com/uc?export=view&id=1KFlUqkjP-225Ro3A0gCkNQq5R1zUI17i",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            category: "landings",
        },
        ua: {
            name: "IT-рекрутер",
            siteView: "лендінг",
            subtitle: "Лендінг для IT-рекрутера",
            description: "",
        },
        en: {
            name: "IT-recruiter",
            siteView: "landing page",
            subtitle: "Landing Page for an IT Recruiter",
            description: "",
        },
        pl: {
            name: "IT-rekruter",
            siteView: "strona docelowa",
            subtitle: "Landing page dla rekrutera IT",
            description: "",
        },
    },
    {
        data: {
            id: "4",
            slug: "protection-in-ua",
            siteLink: "protection.in.ua",
            order: 4,
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=11FGZgLaN9t04MQCCBGyVIveLNszNZaY6",
            image: "https://drive.google.com/uc?export=view&id=1G8Z-YAOZV5g9s0qim-zRPpdoVx2v97Sd",
            implementations: ["Design", "Development", "Testing", "Support"],
            category: "websites",
        },
        ua: {
            name: "Міграційний Адвокат",
            siteView: "вебсайт",
            subtitle: "Вебсайт для міграційного адвоката",
            description:
                "Сайт пропонує юридичні послуги в сфері міграційного права, включаючи захист прав громадян у Державній міграційній службі України та консультації з питань громадянства. Тут можна знайти інформацію про адвокатів, їхні послуги та контакти для зв'язку.",
        },
        en: {
            name: "Migration Lawyer",
            siteView: "website",
            subtitle: "Website for a Migration Lawyer",
            description:
                "The website offers legal services in the field of migration law, including the protection of citizens' rights in the State Migration Service of Ukraine and consultations on citizenship issues. Here you can find information about lawyers, their services, and contact details.",
        },
        pl: {
            name: "Prawnik imigracyjny",
            siteView: "website",
            subtitle: "Strona internetowa dla prawnika ds. migracji",
            description:
                "Strona internetowa oferuje usługi prawne w zakresie prawa migracyjnego, w tym ochronę praw obywateli w Państwowej Służbie Migracyjnej Ukrainy oraz konsultacje w sprawach obywatelstwa. Tutaj można znaleźć informacje o prawnikach, ich usługach i dane kontaktowe.",
        },
    },
    {
        data: {
            id: "3",
            slug: "theatermag-com-ua",
            siteLink: "theatermag.com.ua",
            order: 3,
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1VQJcG8uJi6bSKhlDfY9bd3608dxhGJTQ",
            image: "https://drive.google.com/uc?export=view&id=1_za8Na2MjieHDq2a5-aArjOHyloyDYe3",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            category: "websites",
        },
        ua: {
            name: "Український театр",
            siteView: "вебсайт",
            subtitle: "Вебсайт для ГО “Український театр”",
            description:
                "Довга товстезна гадюка обплелась навколо стовпа і ритмічно похитувала своєю плескатою головою. І чимало ще всіляких див і страхітливих речей було в просторій печері Гінгеми.",
        },
        en: {
            name: "Ukrainian theater",
            siteView: "website",
            subtitle: `Website for the NGO "Ukrainian Theater"`,
            description: "descriptionId3",
        },
        pl: {
            name: "Ukrainian theater",
            siteView: "website",
            subtitle: `Strona internetowa dla NGO "Ukraiński Teatr"`,
            description: "descriptionId3",
        },
    },
    {
        data: {
            id: "2",
            slug: "batatfarm-com",
            siteLink: "batatfarm.com",
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1tgltGLTRcbdHia5fjV4K6sFVJlOyi14l",
            image: "https://drive.google.com/uc?export=view&id=19Go5FeHwvpALJUsmNSzBMCNRpmIXPnpB",
            order: 2,
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            category: "onlinestores",
        },
        ua: {
            name: "Смачно! на селі",
            heroName: "<purple>Смачно!</purple> на селі",
            siteView: "інтернет магазин",
            subtitle: "Інтернет магазин натуральних продуктів",
            description: "",
            heroText: [
                '"Смачно! на селі" – це інтернет-магазин домашньої городини, розроблений для фермера з українського міста Полтава. Він вирощує овочі вже 5 років і наважився на вихід в інтернет для збільшення продажів та залучення нових клієнтів.',
                "Проєкт реалізований командою на всіх етапах створення продукту: ідея, аналітика ринку і конкурентів, дизайн, розробка бекенду, візуалізація, тестування, налаштування аналітики продажів, підключення платіжних систем та технічна підтримка.",
            ],
            statistics: {
                analysis: "2 місяці",
                design: "2 місяці",
                launch: "8 місяців",
                support: "4+ місяці",
            },
            content: [
                {
                    layout: "scroll",
                    title: "<purple>Завдання</purple>, над якими ми працювали",
                    data: [
                        {
                            title: "Унікальність",
                            text: [
                                "Створити унікальний та впізнаваний стиль і головного героя",
                                'Реалізувати бізнес-процес замовлення "під майбутній врожай" із можливістю передоплати та отримання продукції пізніше',
                                "Реалізувати можливість донатів на відправлення продукції до підрозділу ЗСУ зі збереженням історії замовлень",
                            ],
                            icon: "light",
                        },
                        {
                            title: "Клієнтський досвід",
                            text: [
                                "Підвищити лояльність постійних покупців та привернути увагу ЗМІ",
                                "Залучити нових покупців і збільшити продажі",
                                "Забезпечити відмінний досвід користувачів – як відвідувачів, так і постійних клієнтів",
                                "Додати функцію підписки на оновлення асортименту та сповіщення про початок сезону конкретного продукту",
                            ],
                            icon: "people",
                        },
                        {
                            title: "Бізнес-процеси",
                            text: [
                                "Провести аналітику та запропонувати оптимальні рішення для втілення бізнес-процесів вирощування, продажу й доставки продукції",
                                "Оптимізувати бізнес-процеси, зокрема оформлення замовлення та доставки",
                                "Забезпечити надійний та стабільний процес оплати і автоматизувати облік покупців і замовлень",
                                "Налаштувати аналітику продажів",
                            ],
                            icon: "settings",
                        },
                    ],
                },
                {
                    layout: "slider",
                    title: "<purple>Рішення</purple>, які були реалізовані",
                    data: [
                        {
                            slideLeft: [{ image: "" }],
                            slideRight: [
                                {
                                    text: [
                                        "Розроблено унікального маскота, прототипом якого став реальний кіт фермера — власника магазину",
                                        "Усі ілюстрації створені індивідуально та відмальовані вручну, також продумано набір сувенірної продукції, що підвищило лояльність покупців і збільшило залучення нових клієнтів із дітьми",
                                        "Ідея та реалізація замовлення для ЗСУ з доставкою в регіони, де немає доставки Новою Поштою",
                                    ],
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "",
                                },
                                {
                                    text: [
                                        "Підключено оплату через Monopay та автоматизовано процес оплати й аналітики замовлень",
                                    ],
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "Проведено аналітику врожайності та вартості сезонних овочів і запропоновано перелік найбільш маржинальних культур",
                                        'Ідея та реалізація замовлення овочів "під майбутній врожай"',
                                    ],
                                },
                                { image: "" },
                            ],
                        },
                        {
                            slideLeft: [{ image: "" }],
                            slideRight: [
                                {
                                    text: [
                                        'Розроблено внутрішню CMS для відстежування історії замовлень за типами продукції, замовниками, оплаченими/неоплаченими замовленнями, замовленнями "під майбутній врожай" та для ЗСУ',
                                        "Автоматизовано звітність з продажів",
                                        "Впроваджено інструменти для оптимізації бізнес-процесів оформлення замовлення, доставки та формування звітності для подальшого аналізу",
                                    ],
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                { image: "" },
                                {
                                    text: [
                                        "Реалізовано систему e-mail сповіщень про оновлення асортименту та початок сезону конкретного продукту",
                                    ],
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "Збільшилася присутність у соціальних мережах та привабливість бренду для ЗМІ",
                                    ],
                                },
                                { image: "" },
                            ],
                        },
                    ],
                },
                {
                    layout: "video",
                    title: "Особистий <purple>кабінет користувача</purple>",
                    description: [
                        "Збереження даних про доставку та отримувачів (кілька отримувачів)",
                        'Історія замовлень (для себе, для ЗСУ, "під майбутній врожай")',
                    ],
                    video: "uC7nWNG3PPc",
                },
                {
                    layout: "video",
                    title: "Сторінка <purple>товару</purple>",
                    description: [
                        "Зручна та структурована подача інформації",
                        'Можливість замовити для себе, для ЗСУ або "під майбутній врожай"',
                    ],
                    video: "uC7nWNG3PPc",
                },
                {
                    layout: "video",
                    title: "Панель <purple>адміністратора</purple>",
                    description: [
                        "Управління товарами (додавання, редагування, видалення)",
                        "Управління наявністю товарів (сезон/не сезон)",
                        "База покупців та підписників",
                        'Історія замовлень (для себе, для ЗСУ, "під майбутній врожай")',
                        "Аналітика замовлень (оплачені/не оплачені, вислані/не вислані)",
                        "Вивантаження даних у Google Sheets",
                    ],

                    video: "uC7nWNG3PPc",
                },
            ],
        },
        en: {
            name: "Smachno! na seli",
            siteView: "internetShop",
            subtitle: "Online Store for Natural Products",
            description: "descriptionId2",
        },
        pl: {
            name: "Smachno! na seli",
            siteView: "internetShop",
            subtitle: "Sklep internetowy z produktami naturalnymi",
            description: "descriptionId2",
        },
    },
    {
        data: {
            id: "1",
            slug: "ilovemyteam-online",
            siteLink: "ilovemyteam.online",
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1euhTPDYseSUaGESWCxCcdZ0IAlp-mGVX",
            image: "https://drive.google.com/uc?export=view&id=14zu-CX8qKSEIqsec_R1lW9S-HITsaG_s",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            order: 1,
            category: "websites",
        },
        ua: {
            name: "i love my team",
            siteView: "вебсайт",
            subtitle: "Вебсайт для IT команди",
            description:
                "На нашому сайті ви знайдете інформацію про вже реалізовані проекти та команди, які стояли за їхнім створенням",
        },
        en: {
            name: "i love my team",
            siteView: "website",
            subtitle: "Website for an IT Team",
            description: "descriptionId1",
        },
        pl: {
            name: "i love my team",
            siteView: "website",
            subtitle: "Strona internetowa dla zespołu IT",
            description: "descriptionId1",
        },
    },
];
