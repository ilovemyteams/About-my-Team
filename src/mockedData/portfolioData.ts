export type DeadlineType = {
    analysis?: string;
    design?: string;
    launch?: string;
    support?: string;
};

type PortfolioDataItemTranslation = {
    name: string;
    heroTitle?: string;
    siteView: string;
    subtitle: string;
    description: string;
    heroText?: string[];
    deadlines?: DeadlineType;
    content?: (
        | ScrollSectionType
        | SliderSectionType
        | SectionWithVideoType
        | AdaptiveDesignSection
    )[];
};

export interface ScrollSectionDataType {
    title: string;
    text: string[];
    icon: string;
}
export interface ScrollSectionType {
    layout: "scroll";
    title: string;
    data: ScrollSectionDataType[];
}

export interface SliderSectionDataType {
    slideLeft: SlideType[];
    slideRight: SlideType[];
}
interface SliderSectionType {
    layout: "slider";
    title: string;
    data: SliderSectionDataType[];
}

interface SectionWithVideoType {
    layout: "video";
    title: string;
    description: string[];
    video: string;
}

interface AdaptiveDesignSection {
    layout: "adaptive";
    title: string;
    imageDesktop: string;
    imageMobile1: string;
    imageMobile2: string;
}
type TextType = { text: string[] };
type ImageType = { image: string };
type SlideType = TextType | ImageType;
export type Slug =
    | "protection-in-ua"
    | "viktoriia-zabara"
    | "theatermag-com-ua"
    | "batatfarm-com"
    | "ilovemyteam-online"
    | "alex-chudov";

export type Technology =
    | "typescript"
    | "figma"
    | "photoshop"
    | "illustrator"
    | "typeorm"
    | "react-toastify"
    | "nextjs"
    | "postgresql"
    | "nestjs"
    | "rtk-rtkq";

type DataType = {
    id: string;
    slug: Slug;
    siteLink?: string;
    imageForAllProjectsPage: string;
    imageForHero?: string;
    behanceLink?: string;
    image: string;
    video?: string;
    implementations: string[];
    order: number;
    category: "landings" | "onlinestores" | "websites";
    adaptive?: {
        imageDesktop: string;
        imageMobileLeft: string;
        imageMobileRight: string;
    };
    technologies?: Technology[];
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
            id: "6",
            slug: "alex-chudov",
            siteLink: "https://www.choodov.com",
            order: 6,
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1ovMudsfQyZ3-7hphCNhrtFTpcPjY_-KB",
            image: "https://drive.google.com/uc?export=view&id=1qp6lKJ4e3-qtlVT2VMoXgckO6DBkWl2o",
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
            name: "Алекс Чудов",
            siteView: "лендінг",
            subtitle: "Лендінг для автора книги",
            description: "",
        },
        en: {
            name: "Alex Chudov",
            siteView: "landing page",
            subtitle: "Landing Page for a book author",
            description: "",
        },
        pl: {
            name: "Alex Chudov",
            siteView: "strona docelowa",
            subtitle: "Landing page dla autora książki",
            description: "",
        },
    },
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
            name: "Вікторія Забара рекрутер",
            siteView: "лендінг",
            subtitle: "Лендінг для IT-рекрутера",
            description: "",
        },
        en: {
            name: "Victoriia Zabara recruiter",
            siteView: "landing page",
            subtitle: "Landing Page for an IT Recruiter",
            description: "",
        },
        pl: {
            name: "Victoriia Zabara rekruter",
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
            behanceLink:
                "https://www.behance.net/gallery/222106575/Landing-Page-for-Writer",
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1tgltGLTRcbdHia5fjV4K6sFVJlOyi14l",
            image: "https://drive.google.com/uc?export=view&id=19Go5FeHwvpALJUsmNSzBMCNRpmIXPnpB",
            imageForHero:
                "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666872/hero_twdpkc.jpg",
            order: 2,
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            category: "onlinestores",
            adaptive: {
                imageDesktop:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742670197/adaptive-desktop_snygs0.png",
                imageMobileLeft:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742670189/adaptive-mobile1_bt6ztj.png",
                imageMobileRight:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742670257/adaptive-mobile2_xsbddb.png",
            },
            technologies: [
                "typescript",
                "figma",
                "photoshop",
                "illustrator",
                "typeorm",
                "react-toastify",
                "nextjs",
                "postgresql",
                "nestjs",
                "rtk-rtkq",
            ],
        },
        ua: {
            name: "Смачно! на селі",
            heroTitle: "<purple>Смачно!</purple> на селі",
            siteView: "інтернет магазин",
            subtitle: "Інтернет магазин натуральних продуктів",
            description: "",
            heroText: [
                '"Смачно! на селі" – це інтернет-магазин домашньої городини, розроблений для фермера з українського міста Полтава. Він вирощує овочі вже 5 років і наважився на вихід в інтернет для збільшення продажів та залучення нових клієнтів.',
                "Проєкт реалізований командою на всіх етапах створення продукту: ідея, аналітика ринку і конкурентів, дизайн, розробка бекенду, візуалізація, тестування, налаштування аналітики продажів, підключення платіжних систем та технічна підтримка.",
            ],
            deadlines: {
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
                            slideLeft: [
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666360/feature1_p3udby.jpg",
                                },
                            ],
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
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666361/feature2_jwrrkj.jpg",
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
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668183/feature3_lq2w84.png",
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "ihttps://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668204/feature4_dkhsjw.jpg",
                                },
                            ],
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
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668211/feature5_fo7cpt.jpg",
                                },
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
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668217/feature6_gixnnh.png",
                                },
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
            heroText: [
                '"Smachno! na seli" - is an online store for home-grown vegetables developed for a farmer from the Ukrainian city of Poltava. He has been growing vegetables for 5 years and decided to go online to increase sales and attract new customers.',
                "The project was implemented by the team at all stages of product creation: idea, market and competitor analytics, design, backend development, visualization, testing, setting up sales analytics, connecting payment systems, and technical support.",
            ],
            deadlines: {
                analysis: "2 months",
                design: "2 months",
                launch: "8 months",
                support: "4+ months",
            },
            content: [
                {
                    layout: "scroll",
                    title: "<purple>The tasks</purple>, we worked on",
                    data: [
                        {
                            title: "Uniqueness",
                            text: [
                                "Create a unique and recognizable style and the main character",
                                'Implement the business process of ordering "for the future harvest" with the possibility of prepayment and receiving products later',
                                "Implement the possibility of donations to send products to the Armed Forces of Ukraine with the preservation of order history",
                            ],
                            icon: "light",
                        },
                        {
                            title: "Customer experience",
                            text: [
                                "Increase loyalty of regular customers and attract media attention",
                                "Attract new customers and increase sales",
                                "Provide an excellent user experience for both visitors and regular customers",
                                "Add a subscription function to updates of the assortment and notify you when the season for a particular product starts",
                            ],
                            icon: "people",
                        },
                        {
                            title: "Business processes",
                            text: [
                                "Analyze and offer optimal solutions for the implementation of business processes for growing, selling and delivering products",
                                "Optimize business processes, including ordering and delivery",
                                "Ensure a reliable and stable payment process and automate customer and order accounting",
                                "Set up sales analytics",
                            ],
                            icon: "settings",
                        },
                    ],
                },
                {
                    layout: "slider",
                    title: "<purple>The solutions</purple>, that were implemented",
                    data: [
                        {
                            slideLeft: [
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666360/feature1_p3udby.jpg",
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "A unique mascot was developed, the prototype of which was a real cat of a farmer who owns the store",
                                        "All illustrations are individually created and hand-drawn, and a set of souvenir products has been developed, which has increased customer loyalty and attracted new customers with children",
                                        "Idea and implementation of an order for the Armed Forces of Ukraine with delivery to regions where there is no delivery by Nova Poshta",
                                    ],
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666361/feature2_jwrrkj.jpg",
                                },
                                {
                                    text: [
                                        "Monopay payment system was connected and the payment and order analytics process is automated",
                                    ],
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "The analysis of the yield and cost of seasonal vegetables is carried out and a list of the most marginal crops is proposed",
                                        'The idea and implementation of ordering vegetables "for the future harvest""',
                                    ],
                                },
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668183/feature3_lq2w84.png",
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "ihttps://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668204/feature4_dkhsjw.jpg",
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "An internal CMS was developed to track order history by product type, customer, paid/unpaid orders, orders for future harvest and for the Armed Forces of Ukraine",
                                        "Sales reporting has been automated",
                                        "Implemented tools to optimize business processes of ordering, delivery and reporting for further analysis",
                                    ],
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668211/feature5_fo7cpt.jpg",
                                },
                                {
                                    text: [
                                        "Implemented a system of e-mail notifications about assortment updates and the start of the season for a particular product",
                                    ],
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "Increased presence in social networks and brand attractiveness for the media",
                                    ],
                                },
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668217/feature6_gixnnh.png",
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: "video",
                    title: "Personal <purple>user panel</purple>",
                    description: [
                        "Saving data on delivery and recipients (multiple recipients)",
                        'Order history (for yourself, for the Armed Forces, "for the future harvest")',
                    ],
                    video: "uC7nWNG3PPc",
                },
                {
                    layout: "video",
                    title: "Product <purple>page</purple>",
                    description: [
                        "Convenient and structured presentation of information",
                        'Possibility to order for yourself, for the Armed Forces, or "for the future harvest"',
                    ],
                    video: "uC7nWNG3PPc",
                },
                {
                    layout: "video",
                    title: "<purple>Admin</purple> panel",
                    description: [
                        "Product management (adding, editing, deleting)",
                        "Product availability management (season/out of season)",
                        "Base of customers and subscribers",
                        'Order history (for yourself, for the Armed Forces, "for the future harvest")',
                        "Order analytics (paid/not paid, sent/not sent)",
                        "Data export to Google Sheets",
                    ],

                    video: "uC7nWNG3PPc",
                },
            ],
        },
        pl: {
            name: "Smachno! na seli",
            siteView: "internetShop",
            subtitle: "Sklep internetowy z produktami naturalnymi",
            description: "descriptionId2",
            heroText: [
                '"Smachno! na seli"– to sklep internetowy z domowymi warzywami, stworzony dla rolnika z ukraińskiego miasta Poltawa. Uprawia warzywa od 5 lat i postanowił przenieść sprzedaż do internetu, aby zwiększyć obroty i przyciągnąć nowych klientów.',
                " Projekt został zrealizowany przez zespół na wszystkich etapach tworzenia produktu: od pomysłu i analizy rynku oraz konkurencji, przez projektowanie, rozwój backendu, wizualizację, testowanie, ustawienie analityki sprzedaży, po integrację systemów płatności oraz wsparcie techniczne.",
            ],
            deadlines: {
                analysis: "2 miesiące",
                design: "2 miesiące",
                launch: "8 miesięcy",
                support: "4+ miesięcy",
            },
            content: [
                {
                    layout: "scroll",
                    title: "<purple>Zadania</purple>, nad którymi pracowaliśmy",
                    data: [
                        {
                            title: "Unikalność",
                            text: [
                                "Stworzyć unikalny i rozpoznawalny styl oraz głównego bohatera",
                                "Zrealizować proces zamówienia „na przyszły plon” z możliwością przedpłaty i odbioru produktów później",
                                "Wprowadzić możliwość darowizn na wysyłkę produktów do jednostek Sił Zbrojnych Ukrainy z zachowaniem historii zamówień",
                            ],
                            icon: "light",
                        },
                        {
                            title: "Doświadczenie klienta",
                            text: [
                                "Zwiększyć lojalność stałych klientów oraz przyciągnąć uwagę mediów",
                                "Pozyskać nowych klientów i zwiększyć sprzedaż",
                                "Zapewnić doskonałe doświadczenie użytkowników – zarówno odwiedzających, jak i stałych klientów",
                                "Dodać funkcję subskrypcji aktualizacji asortymentu oraz powiadomienia o rozpoczęciu sezonu danego produktu",
                            ],
                            icon: "people",
                        },
                        {
                            title: "Procesy biznesowe",
                            text: [
                                "Przeprowadzić analizę i zaproponować optymalne rozwiązania do realizacji procesów biznesowych związanych z uprawą, sprzedażą i dostawą produktów",
                                "Optymalizować procesy biznesowe, w tym składanie zamówień i dostawę",
                                "Zapewnić niezawodny i stabilny proces płatności oraz zautomatyzować ewidencję klientów i zamówień",
                                "Skonfigurować analitykę sprzedaży",
                            ],
                            icon: "settings",
                        },
                    ],
                },
                {
                    layout: "slider",
                    title: "<purple>Rozwiązania</purple>, które zostały wdrożone",
                    data: [
                        {
                            slideLeft: [
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666360/feature1_p3udby.jpg",
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "Stworzono unikalnego maskota, którego prototypem stał się prawdziwy kot właściciela sklepu – rolnika",
                                        "Wszystkie ilustracje zostały stworzone indywidualnie i ręcznie namalowane, opracowano również zestaw produktów upominkowych, które zwiększyły lojalność klientów i przyciągnęły nowych, zwłaszcza z dziećmi",
                                        "Pomysł i realizacja zamówienia dla Sił Zbrojnych Ukrainy z dostawą do regionów, gdzie nie ma dostawy przez Nową Pocztę",
                                    ],
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742666361/feature2_jwrrkj.jpg",
                                },
                                {
                                    text: [
                                        "Podłączono płatności przez Monopay oraz zautomatyzowano proces płatności i analityki zamówień",
                                    ],
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "Przeprowadzono analizę plonów i kosztów sezonowych warzyw oraz zaproponowano listę najbardziej dochodowych roślin",
                                        "Pomysł i realizacja zamówienia warzyw „na przyszły plon”",
                                    ],
                                },
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668183/feature3_lq2w84.png",
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "ihttps://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668204/feature4_dkhsjw.jpg",
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "Opracowano wewnętrzny CMS do śledzenia historii zamówień według rodzajów produktów, zamawiających, zamówień opłaconych/nieopłaconych, zamówień „na przyszły plon” i dla Sił Zbrojnych Ukrainy",
                                        "Zautomatyzowano raportowanie sprzedaży",
                                        "Wdrożono narzędzia do optymalizacji procesów biznesowych, takich jak składanie zamówień, dostawy oraz tworzenie raportów do dalszej analizy",
                                    ],
                                },
                            ],
                        },
                        {
                            slideLeft: [
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668211/feature5_fo7cpt.jpg",
                                },
                                {
                                    text: [
                                        "Zrealizowano system powiadomień e-mail o aktualizacji asortymentu oraz rozpoczęciu sezonu dla konkretnego produktu",
                                    ],
                                },
                            ],
                            slideRight: [
                                {
                                    text: [
                                        "Zwiększona obecność w mediach społecznościowych oraz atrakcyjność marki dla mediów",
                                    ],
                                },
                                {
                                    image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742668217/feature6_gixnnh.png",
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: "video",
                    title: "Osobisty <purple>panel użytkownika</purple>",
                    description: [
                        "Zapis danych dotyczących dostawy i odbiorców (wielu odbiorców)",
                        "Historia zamówień (dla siebie, dla Sił Zbrojnych Ukrainy, „na przyszły plon”)",
                    ],
                    video: "uC7nWNG3PPc",
                },
                {
                    layout: "video",
                    title: "Strona <purple>produktu</purple>",
                    description: [
                        "Wygodne i uporządkowane przedstawienie informacji",
                        "MemberCardModalBodyTabożliwość zamówienia dla siebie, dla Sił Zbrojnych Ukrainy lub „na przyszły plon”",
                    ],
                    video: "uC7nWNG3PPc",
                },
                {
                    layout: "video",
                    title: "Panel <purple>administratora</purple>",
                    description: [
                        "Zarządzanie produktami (dodawanie, edytowanie, usuwanie)",
                        "Zarządzanie dostępnością produktów (sezon/poza sezonem)",
                        "Baza klientów i subskrybentów",
                        'Historia zamówień (dla siebie, dla Sił Zbrojnych Ukrainy, "na przyszłe zbiory")',
                        "Analiza zamówień (opłacone/nieopłacone, wysłane/niewysłane)",
                        "Eksport danych do Google Sheets",
                    ],

                    video: "uC7nWNG3PPc",
                },
            ],
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
