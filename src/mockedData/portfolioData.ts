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
    decision?: SliderSectionType;
    titleListVideo?: SectionWithVideoType[];
    tasks?: TasksSectionDataType[];
};

export interface TasksSectionDataType {
    title: string;
    text: string[];
    icon: string;
}

export interface SliderType {
    slideLeft: SlideType[];
    slideRight: SlideType[];
}
export interface SliderSectionType {
    title: string;
    data: SliderType[];
}

export interface SectionWithVideoType {
    title: string;
    description: string[];
    video: string;
}

export interface AdaptiveImageType {
    url: string;
    width: number;
    height: number;
}
export interface AdaptiveSectionType {
    imageDesktop: AdaptiveImageType;
    imageMobile: AdaptiveImageType;
    imageMobileStatic: string;
}

export interface HeroMediaType {
    url: string;
    type: "video" | "image";
    poster?: string;
}

type TextType = { text: string[] };
type ImageType = { image: string; screenImage?: string };
type ScreenMobType = { screenImage: string };
type SlideType = TextType | ImageType | ScreenMobType;
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
    | "rtk-rtkq"
    | "astrojs"
    | "gsap"
    | "nodemailer"
    | "tailwind"
    | "js"
    | "html"
    | "vite"
    | "scss"
    | "swiper"
    | "emailjs"
    | "handlebars";

type DataType = {
    id: string;
    slug: Slug;
    siteLink?: string;
    imageForAllProjectsPage: string;
    mediaForHero?: HeroMediaType;
    behanceLink?: string;
    image: string;
    video?: string;
    implementations: string[];
    order: number;
    category: "landings" | "onlinestores" | "websites";
    adaptive?: AdaptiveSectionType;
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
            mediaForHero: {
                url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746034030/hero_xphcad.jpg",
                type: "image",
            },
            behanceLink:
                "https://www.behance.net/gallery/222106575/Landing-Page-for-Writer",
            implementations: [
                "Idea",
                "Design",
                "Development",
                "Delivery",
                "Support",
            ],
            category: "landings",
            adaptive: {
                imageDesktop: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745942505/adaptive-desktop_ggorin.jpg",
                    width: 1200,
                    height: 6683,
                },

                imageMobile: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745942506/adaptive-mobile_swvdw6.jpg",
                    width: 375,
                    height: 8330,
                },

                imageMobileStatic:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745942505/adaptive-static_srjbu8.jpg",
            },
            technologies: [
                "figma",
                "photoshop",
                "astrojs",
                "typescript",
                "tailwind",
                "gsap",
                "nodemailer",
            ],
        },
        ua: {
            name: "Алекс Чудов",
            siteView: "лендінг",
            subtitle: "Лендінг для автора книги",
            description: "",
            heroTitle: "Алекс Чудов",
            heroText: [
                "Проєкт розроблений для українсько-канадського письменника Алекса Чудова. Автор написав свою першу книгу “Wonder in the Universe”, в якій прагнув поділитись глибокими духовними сенсами, що накопичилися впродовж його життєвого шляху.",
                "Лендінг виконує роль візитівки особистого бренду автора та платформи для презентації книги. Сайт дозволяє користувачам познайомитись із життєвим шляхом письменника, переглянути інтерв’ю, дізнатись більше про книгу та перейти на Amazon для її придбання.",
            ],
            deadlines: {
                analysis: "2 тижні",
                design: "2 тижні",
                launch: "4 тижні",
                support: "за запитом",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Особистий бренд",
                    text: [
                        "Візуально підкреслити філософсько-духовний стиль автора",
                        "Підсвітити особистий бренд автора як людини з глибоким досвідом",
                        "Підібрати кольорову палітру, яка відповідає тематиці та стилю книги",
                        "Створити дизайн-концепт, готовий до масштабування",
                    ],
                },
                {
                    icon: "product",
                    title: "Про продукт",
                    text: [
                        "Зацікавити потенційного читача та викликати довіру до книги",
                        "Розкрити основні ідеї книги у простій, візуально-зрозумілій формі",
                        "Додати відгуки читачів, щоб підсилити довіру",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Функціональність",
                    text: [
                        "Інтегрувати маркетингові інструменти, які вже використовує автор для просування книги.",
                        "Реалізувати просту та інтуїтивну форму зворотного зв'язку",
                        "Забезпечити перехід на сторінку покупки книги на Amazon",
                        "Створити двомовну версію сайту: англійська та українська",
                    ],
                },
            ],
        },
        en: {
            name: "Alex Chudov",
            siteView: "landing page",
            subtitle: "Landing Page for a book author",
            description: "",
            heroTitle: "Alex Chudov",
            heroText: [
                "The project was created for Ukrainian-Canadian writer Alex Chudov. The author has written his debut book “Wonder in the Universe”, where he shares deep spiritual insights accumulated throughout his life journey.",
                "This landing  serves as both a personal brand introduction and a platform to showcase the book. The website allows visitors to learn about the author’s story, watch interviews, explore the essence of the book, and go directly to its Amazon page for purchase.",
            ],
            deadlines: {
                analysis: "2 weeks",
                design: "2 weeks",
                launch: "4 weeks",
                support: "on request",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Personal Brand",
                    text: [
                        "Visually emphasize the author's philosophical and spiritual style",
                        "Highlight the author’s personal brand as someone with deep life experience",
                        "Choose a color palette that reflects the book’s theme and tone",
                        "Develop a scalable design concept",
                    ],
                },
                {
                    icon: "product",
                    title: "About Product",
                    text: [
                        "Spark interest in potential readers and build trust in the book",
                        "PageContentListresent the main ideas of the book in a simple, visually clear way",
                        "Add reader testimonials to reinforce credibility",
                    ],
                },
                {
                    icon: "functionality",
                    title: " Functionality",
                    text: [
                        "Integrate the marketing tools the author already uses to promote the book",
                        "Implement a simple and intuitive feedback form",
                        "Provide a direct link to the book's purchase page on Amazon",
                        "Create a bilingual website version: English and Ukrainian",
                    ],
                },
            ],
        },
        pl: {
            name: "Alex Chudov",
            siteView: "strona docelowa",
            subtitle: "Landing page dla autora książki",
            description: "",
            heroTitle: "Alex Chudov",
            heroText: [
                'Projekt został opracowany dla ukraińsko-kanadyjskiego pisarza Alexa Chudova. Autor napisał swoją pierwszą książkę, "Wonder in the Universe", w której starał się podzielić głębokimi duchowymi przemyśleniami, które gromadziły się przez całe jego życie.',
                "Jednostronicowa strona docelowa służy jako wizytówka osobistej marki autora i platforma do prezentacji książki. Strona pozwala użytkownikom zapoznać się z historią życia pisarza, obejrzeć wywiady, dowiedzieć się więcej o samej książce, i przejść bezpośrednio do strony Amazon, aby ją kupić.",
            ],
            deadlines: {
                analysis: "2 tygodnie",
                design: "2 tygodnie",
                launch: "4 tygodnie",
                support: "na żądanie",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Marka osobista",
                    text: [
                        "Wizualne podkreślenie filozoficzno-duchowego stylu autora",
                        "Uwydatnienie marki osobistej autora jako osoby z głębokim życiowym doświadczeniem",
                        "Dobranie palety kolorów odpowiadającej tematyce i stylowi książki",
                        "Stworzenie koncepcji graficznej gotowej do skalowania",
                    ],
                },
                {
                    icon: "product",
                    title: "O produkcie",
                    text: [
                        "Zainteresowanie potencjalnego czytelnika i wzbudzenie zaufania do książki",
                        "Przedstawienie głównych idei książki w prosty i wizualnie zrozumiały sposób",
                        "Dodanie opinii czytelników w celu wzmocnienia zaufania",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Funkcjonalność",
                    text: [
                        "Integracja narzędzi marketingowych, już wykorzystywanych przez autora do promocji książki",
                        "Wdrożenie prostego i intuicyjnego formularza opinii",
                        "Udostępnienie linku do strony zakupu książki na Amazon",
                        "Stworzenie dwujęzycznej wersji strony: angielskiej i ukraińskiej",
                    ],
                },
            ],
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
            technologies: [
                "figma",
                "photoshop",
                "html",
                "scss",
                "js",
                "vite",
                "handlebars",
                "swiper",
                "emailjs",
            ],
            mediaForHero: {
                type: "image",
                url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746090666/hero_jzwnvx.jpg",
            },
            adaptive: {
                imageDesktop: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746090667/adaptive-desktop_ldgvmj.jpg",
                    width: 1200,
                    height: 6872,
                },
                imageMobile: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746090666/adaptive-mobile_ktwbgs.jpg",
                    width: 390,
                    height: 8231,
                },
                imageMobileStatic:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746090666/static-view_hez8sg.jpg",
            },
        },
        ua: {
            name: "Вікторія Забара",
            siteView: "лендінг",
            subtitle: "Лендінг для IT-рекрутера",
            description: "",
            heroTitle: "Вікторія Забара",
            heroText: [
                "Проєкт розроблений для рекрутерки, яка працює переважно на Британському ринку та спеціалізується на пошуку та підборі людей на складні посади, такі як пілоти, інженери, висококваліфіковані ІТ-спеціалісти та представники рідкісних професій.",
                "Це односторінковий лендінг, який поєднує роль візитівки особистого бренду рекрутерки та майданчик для презентації набору послуг, висвітлення її багаторічного досвіду та спеціалізації.",
            ],
            deadlines: {
                analysis: "2 тижні",
                design: "2 тижні",
                launch: "2 тижні",
                support: "за запитом",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Особистий бренд",
                    text: [
                        "Створити особистий бренд як клієнтоорієнтованої, дружньої та легкої в спілкуванні експертки з найму",
                        "Підкреслити досвід та надбання за 5+ років роботи у сфері рекрутингу",
                        "Передати tone of voice спілкування та відгуки від задоволених клієнтів",
                        "Підібрати кольорову палітру, яка відповідає персональному стилю експертки",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Функціональність",
                    text: [
                        "Створити англомовну версію сайту орієнтовану на ринок Британії",
                        "Розробити адаптивний дизайн для десктопної та мобільної версії",
                        "Розробити зручну та інтуїтивну навігацію по сторінці",
                        "Реалізувати просту та інтуїтивну форму зворотного зв'язку",
                    ],
                },
            ],
        },
        en: {
            name: "Victoriia Zabara",
            siteView: "landing page",
            subtitle: "Landing Page for an IT Recruiter",
            description: "",
            heroTitle: "Victoriia Zabara",
            heroText: [
                "This project was developed for a recruiter who primarily works in the UK market and specializes in sourcing and placing candidates in highly demanding roles such as pilots, engineers, highly skilled IT professionals, and other rare occupations.",
                "This is a one-page landing site that serves both as a personal brand business card and a platform to showcase her services, highlight her years of experience, and emphasize her niche expertise.",
            ],
            deadlines: {
                analysis: "2 weeks",
                design: "2 weeks",
                launch: "2 weeks",
                support: "on request",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Personal Brand",
                    text: [
                        "Establish a personal brand that reflects a client-oriented, friendly, and approachable hiring expert",
                        "Highlight 5+ years of experience and achievements in the recruitment industry",
                        "Convey the expert's tone of voice through communication style and testimonials from satisfied clients",
                        "Підібрати кольорову палітру, яка відповідає персональному стилю експертки",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Functionality",
                    text: [
                        "Create an English-language version of the website tailored to the UK market",
                        "Develop a responsive design for both desktop and mobile versions",
                        "Design a user-friendly and intuitive page navigation",
                        "Implement a simple and easy-to-use contact form",
                    ],
                },
            ],
        },
        pl: {
            name: "Victoriia Zabara",
            siteView: "strona docelowa",
            subtitle: "Landing page dla rekrutera IT",
            description: "",
            heroTitle: "Victoriia Zabara",
            heroText: [
                "Проєкт розроблений для рекрутерки, яка працює переважно на Британському ринку та спеціалізується на пошуку та підборі людей на складні посади, такі як пілоти, інженери, висококваліфіковані ІТ-спеціалісти та представники рідкісних професій.",
                "Це односторінковий лендінг, який поєднує роль візитівки особистого бренду рекрутерки та майданчик для презентації набору послуг, висвітлення її багаторічного досвіду та спеціалізації.",
            ],
            deadlines: {
                analysis: "2 tygodnie",
                design: "2 tygodnie",
                launch: "2 tygodnie",
                support: "na żądanie",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Marka osobista",
                    text: [
                        "Створити особистий бренд як клієнтоорієнтованої, дружньої та легкої в спілкуванні експертки з найму",
                        "Підкреслити досвід та надбання за 5+ років роботи у сфері рекрутингу",
                        "Передати tone of voice спілкування та відгуки від задоволених клієнтів",
                        "Підібрати кольорову палітру, яка відповідає персональному стилю експертки",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Funkcjonalność",
                    text: [
                        "Створити англомовну версію сайту орієнтовану на ринок Британії",
                        "Розробити адаптивний дизайн для десктопної та мобільної версії",
                        "Розробити зручну та інтуїтивну навігацію по сторінці",
                        "Реалізувати просту та інтуїтивну форму зворотного зв'язку",
                    ],
                },
            ],
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
                "https://www.behance.net/gallery/224420717/Smachno-na-seli-Online-Store-for-Natural-Products",
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1tgltGLTRcbdHia5fjV4K6sFVJlOyi14l",
            image: "https://drive.google.com/uc?export=view&id=19Go5FeHwvpALJUsmNSzBMCNRpmIXPnpB",
            mediaForHero: {
                url: "https://res.cloudinary.com/dvfu5vhjx/video/upload/v1745581355/hero-small-origin_fwixig.mp4",
                type: "video",
                poster: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745574266/hero-poster_m4xkvo.jpg",
            },

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
                imageDesktop: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745329031/adaptive-desktop_e1mcqy.jpg",
                    width: 861,
                    height: 3115,
                },

                imageMobile: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745329033/adaptive-mobile_hjxt6z.jpg",
                    width: 220,
                    height: 3064,
                },

                imageMobileStatic:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745340042/adaptive-static_xgjjsr.jpg",
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
            decision: {
                title: "<purple>Рішення</purple>, які були реалізовані",
                data: [
                    {
                        slideLeft: [
                            {
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395629/smachno1_pvmrru.jpg",
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
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395631/smachno5_sance0.jpg",
                                screenImage:
                                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1744972108/smachno_decision_monopay_npq66e.png",
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
                                screenImage:
                                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1744972108/smachno_decision_monopay_npq66e.png",
                            },
                        ],
                    },
                    {
                        slideLeft: [
                            {
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno4_uahocv.jpg",
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
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno2_karwqi.jpg",
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
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno3_ikpbqn.jpg",
                            },
                        ],
                    },
                ],
            },
            tasks: [
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

            titleListVideo: [
                {
                    title: "Особистий <purple>кабінет користувача</purple>",
                    description: [
                        "Збереження даних про доставку та отримувачів (кілька отримувачів)",
                        'Історія замовлень (для себе, для ЗСУ, "під майбутній врожай")',
                    ],
                    video: "WCsyXzpJ_Wg",
                },
                {
                    title: "Сторінка <purple>товару</purple>",
                    description: [
                        "Зручна та структурована подача інформації",
                        'Можливість замовити для себе, для ЗСУ або "під майбутній врожай"',
                    ],
                    video: "_TJX8SctBiM",
                },
                {
                    title: "Панель <purple>адміністратора</purple>",
                    description: [
                        "Управління товарами (додавання, редагування, видалення)",
                        "Управління наявністю товарів (сезон/не сезон)",
                        "База покупців та підписників",
                        'Історія замовлень (для себе, для ЗСУ, "під майбутній врожай")',
                        "Аналітика замовлень (оплачені/не оплачені, вислані/не вислані)",
                        "Вивантаження даних у Google Sheets",
                    ],

                    video: "oUDenMueap0",
                },
            ],
        },
        en: {
            name: "Smachno! na seli",
            siteView: "internetShop",
            subtitle: "Online Store for Natural Products",
            description: "descriptionId2",
            heroTitle: "<purple>Smachno!</purple> na seli",
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
            decision: {
                title: "<purple>The solutions</purple>, that were implemented",
                data: [
                    {
                        slideLeft: [
                            {
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395629/smachno1_pvmrru.jpg",
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
                                screenImage:
                                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1744972108/smachno_decision_monopay_npq66e.png",

                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395631/smachno5_sance0.jpg",
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
                                    'The idea and implementation of ordering vegetables "for the future harvest"',
                                ],
                            },
                            {
                                screenImage:
                                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1744972108/smachno_decision_monopay_npq66e.png",
                            },
                        ],
                    },
                    {
                        slideLeft: [
                            {
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno4_uahocv.jpg",
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
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno2_karwqi.jpg",
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
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno3_ikpbqn.jpg",
                            },
                        ],
                    },
                ],
            },
            tasks: [
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

            titleListVideo: [
                {
                    title: "Personal <purple>user panel</purple>",
                    description: [
                        "Saving data on delivery and recipients (multiple recipients)",
                        'Order history (for yourself, for the Armed Forces, "for the future harvest")',
                    ],
                    video: "WCsyXzpJ_Wg",
                },
                {
                    title: "Product <purple>page</purple>",
                    description: [
                        "Convenient and structured presentation of information",
                        'Possibility to order for yourself, for the Armed Forces, or "for the future harvest"',
                    ],
                    video: "_TJX8SctBiM",
                },
                {
                    title: "<purple>Admin</purple> panel",
                    description: [
                        "Product management (adding, editing, deleting)",
                        "Product availability management (season/out of season)",
                        "Base of customers and subscribers",
                        'Order history (for yourself, for the Armed Forces, "for the future harvest")',
                        "Order analytics (paid/not paid, sent/not sent)",
                        "Data export to Google Sheets",
                    ],

                    video: "oUDenMueap0",
                },
            ],
        },
        pl: {
            name: "Smachno! na seli",
            siteView: "internetShop",
            subtitle: "Sklep internetowy z produktami naturalnymi",
            description: "descriptionId2",
            heroTitle: "<purple>Smachno!</purple> na seli",
            heroText: [
                '"Smachno! na seli"– to sklep internetowy z domowymi warzywami, stworzony dla rolnika z ukraińskiego miasta Poltawa. Uprawia warzywa od 5 lat i postanowił przenieść sprzedaż do internetu, aby zwiększyć obroty i przyciągnąć nowych klientów.',
                " Projekt został zrealizowany przez zespół na wszystkich etapach tworzenia produktu: od pomysłu i analizy rynku oraz konkurencji, przez projektowanie, rozwój backendu, wizualizację, testowanie, ustawienie analityki sprzedaży, po integrację systemów płatności oraz wsparcie techniczne.",
            ],
            deadlines: {
                analysis: "2 miesiące",
                design: "2 miesiące",
                launch: "8 miesięcy",
                support: "4+ miesiące",
            },
            decision: {
                title: "<purple>Rozwiązania</purple>, które zostały wdrożone",
                data: [
                    {
                        slideLeft: [
                            {
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395629/smachno1_pvmrru.jpg",
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
                                screenImage:
                                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1744972108/smachno_decision_monopay_npq66e.png",

                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395631/smachno5_sance0.jpg",
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
                                screenImage:
                                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1744972108/smachno_decision_monopay_npq66e.png",
                            },
                        ],
                    },
                    {
                        slideLeft: [
                            {
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno4_uahocv.jpg",
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
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno2_karwqi.jpg",
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
                                image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745395630/smachno3_ikpbqn.jpg",
                            },
                        ],
                    },
                ],
            },
            tasks: [
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

            titleListVideo: [
                {
                    title: "Osobisty <purple>panel użytkownika</purple>",
                    description: [
                        "Zapis danych dotyczących dostawy i odbiorców (wielu odbiorców)",
                        "Historia zamówień (dla siebie, dla Sił Zbrojnych Ukrainy, „na przyszły plon”)",
                    ],
                    video: "WCsyXzpJ_Wg",
                },
                {
                    title: "Strona <purple>produktu</purple>",
                    description: [
                        "Wygodne i uporządkowane przedstawienie informacji",
                        "MemberCardModalBodyTabożliwość zamówienia dla siebie, dla Sił Zbrojnych Ukrainy lub „na przyszły plon”",
                    ],
                    video: "_TJX8SctBiM",
                },
                {
                    title: "Panel <purple>administratora</purple>",
                    description: [
                        "Zarządzanie produktami (dodawanie, edytowanie, usuwanie)",
                        "Zarządzanie dostępnością produktów (sezon/poza sezonem)",
                        "Baza klientów i subskrybentów",
                        'Historia zamówień (dla siebie, dla Sił Zbrojnych Ukrainy, "na przyszłe zbiory")',
                        "Analiza zamówień (opłacone/nieopłacone, wysłane/niewysłane)",
                        "Eksport danych do Google Sheets",
                    ],

                    video: "oUDenMueap0",
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
