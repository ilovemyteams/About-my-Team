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
    decision?: DecisionType[];
    titleListVideo?: SectionWithVideoType[];
    tasks?: TasksSectionDataType[];
};

export interface TasksSectionDataType {
    title: string;
    text: string[];
    icon: string;
}

export interface DecisionType {
    slideLeft: SlideType[];
    slideRight: SlideType[];
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
    | "handlebars"
    | "next-auth"
    | "formik"
    | "swiper"
    | "momentjs"
    | "react"
    | "editorjs"
    | "material-ui"
    | "redux"
    | "axios"
    | "react-easy-crop"
    | "java"
    | "spring-boot"
    | "spring-data"
    | "spring-security"
    | "hibernate"
    | "redis"
    | "flyway"
    | "junit"
    | "mockito"
    | "testcontainers"
    | "lombok"
    | "maven"
    | "docker"
    | "dayjs"
    | "react-datapicker"
    | "yup"
    | "html-react-parser"
    | "yet-another-react-lightbox"
    | "sharp";

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
                        "Інтегрувати маркетингові інструменти, які вже використовує автор для просування книги",
                        "Реалізувати просту та інтуїтивну форму зворотного зв'язку",
                        "Забезпечити перехід на сторінку покупки книги на Amazon",
                        "Створити двомовну версію сайту: англійська та українська",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122407/decision-1_dzjghu.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Ключові ідеї подані у вигляді клаптиків паперу на зоряному тлі, як символ особистих сенсів, фрагментів Всесвіту",
                                "Кольорова палітра підібрана відповідно до емоційної тематики книги - світло, внутрішній спокій, надія, любов",
                                "Реалізована плавна навігація та скрол-анімація для комфортного UX",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122405/decision-2_wpk11a.jpg",
                        },
                        {
                            text: [
                                "Реалізовано структуру, що веде користувача м’яко і логічно до головної дії — купівлі книги",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Інтегровані інструменти для email-маркетингу",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122404/decision-3_i3jmfg.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122410/decision-4_mnsvn8.jpg",
                        },
                        {
                            text: [
                                "Реалізована двомовність на сайті  (EN/UA)",
                                "Впроваджено програвач для перегляду інтерв’ю прямо на сайті",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: ["Додані реальні відгуки з Amazon"],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122408/decision-5_hnyz3l.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Особливості <purple>взаємодії</purple>",
                    description: [
                        "Історія автора подана у вигляді слайдера з анімацією, який відображає ключові події життя",
                        "Кожен фрагмент підкріплений пам’ятною фотокарткою та коротким описом, що дозволяє відчути шлях автора як мандрівку",
                        "Слайдер адаптовано для мобільних пристроїв зі збереженням анімованих ефектів",
                    ],
                    video: "BUakAviL66o",
                },

                {
                    title: "<purple>Цікаві</purple> елементи інтерфейсу",
                    description: [
                        'Між секцією інтерв’ю та розділом "Про книгу" реалізована плавна, кінематографічна анімація, де обкладинка книги буквально “переїжджає” в наступний блок, перетворюючись із декору в функціональний об\'єкт',
                    ],
                    video: "LTH4tfWJ3-w",
                },
                {
                    title: "Просування <purple>книги</purple>",
                    description: [
                        "Додано можливість ознайомитись зі змістом книги прямо на сайті",
                        "Додано можливість завантаження перших розділів книги для ознайомлення",
                        "Додано посилання на Amazon як основний канал продажу",
                    ],
                    video: "PNjx5vTrqYI",
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
                    title: "Personal brand",
                    text: [
                        "Visually emphasize the author's philosophical and spiritual style",
                        "Highlight the author’s personal brand as someone with deep life experience",
                        "Choose a color palette that reflects the book’s theme and tone",
                        "Develop a scalable design concept",
                    ],
                },
                {
                    icon: "product",
                    title: "About product",
                    text: [
                        "Spark interest in potential readers and build trust in the book",
                        "Present the main ideas of the book in a simple, visually clear way",
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
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122407/decision-1_dzjghu.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Key ideas presented as paper scraps on a starry background, symbolizing personal meanings — fragments of the Universe",
                                "Color palette chosen to reflect the book’s emotional tone — light, inner peace, hope, and love",
                                "Smooth navigation and scroll animations for a comfortable user experience",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122405/decision-2_wpk11a.jpg",
                        },
                        {
                            text: [
                                "Structure designed to guide the user gently and logically to the main action — purchasing the book",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: ["Integrated tools for email marketing"],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122404/decision-3_i3jmfg.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122410/decision-4_mnsvn8.jpg",
                        },
                        {
                            text: [
                                "Bilingual site implemented (EN/UA)",
                                "Embedded video player for watching interviews directly on the website",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: ["Real reviews from Amazon included"],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122408/decision-5_hnyz3l.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Interactive <purple>experience</purple>",
                    description: [
                        "The author’s story is presented as an animated slider highlighting key life moments",
                        "Each slide is paired with a memorable photo and a short description, allowing users to experience the author’s journey as a meaningful path",
                        "The slider is mobile-optimized, with preserved animation effects",
                    ],
                    video: "BUakAviL66o",
                },

                {
                    title: "<purple>Unique</purple> interface elements",
                    description: [
                        "Between the interview section and the “About the Book” block, there is a smooth, cinematic animation where the book cover literally “slides” into the next section — transforming from a decorative image into a functional object",
                    ],
                    video: "LTH4tfWJ3-w",
                },
                {
                    title: "<purple>Book</purple> promotion",
                    description: [
                        "Visitors can explore the book’s contents directly on the website",
                        "Option to download the first chapters of the book for preview",
                        "Added Amazon link as the primary sales channel",
                    ],
                    video: "PNjx5vTrqYI",
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
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122407/decision-1_dzjghu.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Kluczowe idee przedstawione są w formie skrawków papieru na gwieździstym tle jako symbol osobistych znaczeń, fragmentów Wszechświata",
                                "Paleta kolorów została dobrana zgodnie z emocjonalnym tematem książki - światło, wewnętrzny spokój, nadzieja, miłość",
                                "Wdrożono płynną nawigację i animację przewijania dla wygodnego UX",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122405/decision-2_wpk11a.jpg",
                        },
                        {
                            text: [
                                "Zaimplementowano strukturę, która łagodnie i logicznie prowadzi użytkownika do głównej akcji - zakupu książki",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Zintegrowane narzędzia do e-mail marketingu",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122404/decision-3_i3jmfg.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122410/decision-4_mnsvn8.jpg",
                        },
                        {
                            text: [
                                "Wdrożono dwujęzyczność na stronie (EN/UA) ",
                                "Wdrożono odtwarzacz do oglądania wywiadów bezpośrednio na stronie",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: ["Dodano prawdziwe recenzje z Amazon"],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746122408/decision-5_hnyz3l.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Cechy <purple>interakcji</purple>",
                    description: [
                        "Historia autora przedstawiona jest w formie slajdera z animacją, która odzwierciedla kluczowe wydarzenia z jego życia",
                        "Każdy fragment wsparty jest zapadającym w pamięć zdjęciem i krótkim opisem, co sprawia, że drogę autora odczuwa się jak podróż",
                        "Slajder został dostosowany do urządzeń mobilnych z zachowaniem efektów animacji",
                    ],
                    video: "BUakAviL66o",
                },

                {
                    title: "<purple>Ciekawe</purple> elementy interfejsu",
                    description: [
                        "Pomiędzy sekcją wywiadu a rozdziałem „O książce” zastosowano płynną, filmową animację, w której okładka książki dosłownie „przesuwa się” do następnego bloku, przekształcając się z elementu dekoracyjnego w funkcjonalny obiekt",
                    ],
                    video: "LTH4tfWJ3-w",
                },
                {
                    title: "Promocja <purple>książki</purple>",
                    description: [
                        "Dodano możliwość zapoznania się z treścią książki bezpośrednio na stronie",
                        "Dodano możliwość pobrania pierwszych rozdziałów książki do recenzji",
                        "Dodano link do Amazon jako głównego kanału sprzedaży",
                    ],
                    video: "PNjx5vTrqYI",
                },
            ],
        },
    },
    {
        data: {
            id: "5",
            slug: "viktoriia-zabara",
            siteLink: "https://viktoriia-recruiting.com.ua/",
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
            behanceLink:
                "https://www.behance.net/gallery/225444197/Landing-page-for-IT-Recruiter",
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
                        "Підібрати кольорову палітру, яка відповідає персональному стилю та подачі експертки в соціальних мережах",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Функціональність",
                    text: [
                        "Створити англомовну версію сайту орієнтовану на ринок Британії",
                        "Розробити адаптивний дизайн для десктопної та мобільної версії сайту",
                        "Розробити зручну та інтуїтивну навігацію по сторінці",
                        "Реалізувати просту та інтуїтивну форму зворотного зв'язку",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120386/decision-1_b2gybf.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Візуальний концепт базується на поєднанні кольорів, які були використовувані в соцмережах для підкріплення асоціації - дружність, відкритість, довіра",
                                "Використані елементи рукописних шрифтів та замальовок олівцем в блокноті, як асоціація індивідуального підходу та нотування в блокноті від руки",
                                "Створено персоналізований логотип",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120383/dicision-2_wfcqnz.jpg",
                        },
                        {
                            text: [
                                "Великі фото та описи в блоку “про себе” надають ефект першого знайомства та формування довіри до експертки",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Візуальні елементи органічно поєднують блоки та ведуть користувача шляхом співпраці покроково",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120385/dicision-3_ryblem.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "<purple>Огляд</purple> сайту",
                    description: [
                        "Передбачено додаткову зручну навігацію по сайту",
                        "Розроблено зручну та просту форму зворотного зв'язку відповідно до вимог",
                        "Секцію з кейсами реалізовано як слайдер для зручного перегляду та кращого сприйняття інформації",
                    ],
                    video: "ipjksRRHOkU",
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
                    title: "Personal brand",
                    text: [
                        "Establish a personal brand that reflects a client-oriented, friendly, and approachable hiring expert",
                        "Highlight 5+ years of experience and achievements in the recruitment industry",
                        "Convey the expert's tone of voice through communication style and testimonials from satisfied clients",
                        "Select a color palette that aligns with the expert’s personal style and social media presence",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Functionality",
                    text: [
                        "Create an English-language version of the website tailored to the UK market",
                        "Develop a responsive design for both desktop and mobile versions of the website",
                        "Design a user-friendly and intuitive page navigation",
                        "Implement a simple and easy-to-use contact form",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120386/decision-1_b2gybf.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "The visual concept is based on a color palette used in social media to reinforce associations with friendliness, openness, and trust",
                                "Handwritten fonts and pencil sketch elements are used to evoke an individual approach and note-taking by hand",
                                "A personalized logo image is created",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120383/dicision-2_wfcqnz.jpg",
                        },
                        {
                            text: [
                                "Large photos and detailed descriptions in the “About Me” section create a feeling of first acquaintance and build trust in the expert",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Visual elements seamlessly connect sections and guide the user step by step through the collaboration process",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120385/dicision-3_ryblem.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Website <purple>overview</purple>",
                    description: [
                        "Additional convenient site navigation is implemented for a smoother user experience",
                        "A simple and user-friendly contact form is developed according to requirements",
                        "The case study section is presented as a slider to make browsing easier and improve content perception",
                    ],
                    video: "ipjksRRHOkU",
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
                "Projekt został opracowany dla rekruterki, która działa głównie na rynku brytyjskim i specjalizuje się w wyszukiwaniu oraz rekrutacji osób na wymagające stanowiska, takie jak piloci, inżynierowie, wysoko wykwalifikowani specjaliści IT oraz przedstawiciele rzadkich zawodów.",
                "Jest to jednostronicowa strona docelowa, która łączy funkcję wizytówki marki osobistej rekruterki z platformą do prezentacji zakresu usług, podkreślając jej wieloletnie doświadczenie i specjalizację.",
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
                        "Stworzenie marki osobistej jako klientocentrycznej, przyjaznej i łatwej w komunikacji ekspertki ds. rekrutacji",
                        "Podkreślenie doświadczenia i osiągnięć zdobytych w ciągu 5+ lat pracy w branży rekrutacyjnej",
                        "Przekazanie tone of voice w komunikacji oraz opinii od zadowolonych klientów",
                        "Dobór palety kolorów odpowiadającej osobistemu stylowi i prezentacji ekspertki w mediach społecznościowych",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Funkcjonalność",
                    text: [
                        "Stworzenie anglojęzycznej wersji strony internetowej, skoncentrowanej na rynku brytyjskim",
                        "Opracowanie responsywnego designu dla wersji desktopowej i mobilnej strony internetowej",
                        "Zaprojektowanie wygodnej i intuicyjnej nawigacji po stronie",
                        "Wdrożenie prostego i intuicyjnego formularza kontaktowego",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120386/decision-1_b2gybf.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Koncepcja wizualna opiera się na połączeniu kolorów wykorzystanych w mediach społecznościowych, aby wzmocnić skojarzenia z życzliwością, otwartością i zaufaniem",
                                "Wykorzystano elementy odręcznych czcionek i szkiców ołówkiem w notatniku jako nawiązanie do indywidualnego podejścia oraz ręcznych notatek",
                                "Stworzono spersonalizowane logo",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120383/dicision-2_wfcqnz.jpg",
                        },
                        {
                            text: [
                                "Duże zdjęcia i opisy w sekcji „o mnie” tworzą efekt pierwszego spotkania i budują zaufanie do ekspertki",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Elementy wizualne organicznie łączą sekcje i prowadzą użytkownika przez proces współpracy krok po kroku",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1746120385/dicision-3_ryblem.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "<purple>Przegląd</purple> strony",
                    description: [
                        "Zapewniono dodatkową wygodną nawigację po stronie",
                        "Opracowano wygodny i intuicyjny formularz opinii zgodnie z wymaganiami",
                        "Sekcje z case studies zostały wdrożone w formie slajdera, by ułatwić odbiór i zwiększyć przejrzystość treści",
                    ],
                    video: "ipjksRRHOkU",
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
            behanceLink:
                "https://www.behance.net/gallery/206025559/UkrainianTheatre-web-UIUX-case-studyukranskij-teatr",
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
            mediaForHero: {
                type: "image",
                url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166845/hero_o32gvb.jpg",
            },
            category: "websites",
            adaptive: {
                imageDesktop: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166840/adaptive-desktop_pw7zna.jpg",
                    width: 1200,
                    height: 5434,
                },

                imageMobile: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166840/adaptive-mobile_hx4x6j.jpg",
                    width: 400,
                    height: 8435,
                },

                imageMobileStatic:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166840/adaptive-static_wpmcu1.jpg",
            },
            technologies: [
                "figma",
                "photoshop",
                "illustrator",
                "nextjs",
                "tailwind",
                "next-auth",
                "formik",
                "swiper",
                "momentjs",
                "react",
                "editorjs",
                "material-ui",
                "redux",
                "axios",
                "react-easy-crop",
                "java",
                "spring-boot",
                "spring-data",
                "spring-security",
                "hibernate",
                "postgresql",
                "redis",
                "flyway",
                "junit",
                "mockito",
                "testcontainers",
                "lombok",
                "maven",
                "docker",
                "dayjs",
                "react-datapicker",
                "yup",
                "html-react-parser",
                "yet-another-react-lightbox",
                "sharp",
            ],
        },
        ua: {
            name: "Український театр",
            heroTitle: "<purple>Український</purple> театр",
            heroText: [
                '"Український театр" – це сучасний онлайн-майданчик, створений для підтримки українського театру в часи змін. Платформа об’єднує публікації, рецензії, афішу та аналітику, стаючи місцем зустрічі театру з глядачем. Редакція театрального медіа прагнула зробити контент доступнішим, а взаємодію з глядачами — живою та безперервною.',
                "Проєкт втілено командою на всіх етапах: від ідеї та аналізу ринку до дизайну, розробки, тестування, та інтеграції платіжних систем для збору донатів, з подальшою технічною підтримкою.",
            ],

            siteView: "вебсайт",
            subtitle: "Вебсайт для ГО “Український театр”",
            description:
                "Довга товстезна гадюка обплелась навколо стовпа і ритмічно похитувала своєю плескатою головою. І чимало ще всіляких див і страхітливих речей було в просторій печері Гінгеми.",
            deadlines: {
                analysis: "2 місяці",
                design: "2 місяці",
                launch: "8 місяців",
                support: "постійно",
            },
            tasks: [
                {
                    title: "Цінність:",
                    text: [
                        "Популяризувати діяльність Українського театру",
                        "Забезпечити регулярну публікацію аналітичного, критичного або культурно важливого контенту",
                        "Надати користувачам можливість стежити за життям театру, навіть якщо вони не відвідують вистави",
                        "Можливість стати співавтором публікацій на сайті, а також підтримка молодих авторів",
                    ],
                    icon: "light",
                },
                {
                    title: "Клієнтський досвід",
                    text: [
                        "Забезпечити зручну навігацію та швидкий доступ до актуального контенту",
                        "Підвищити взаємодію користувачів з сайтом та залученість аудиторії",
                        "Створити ефективну систему інформування про театральні події",
                        "Управління контентом та адміністрування сайту співробітниками редакції",
                    ],
                    icon: "people",
                },
                {
                    title: "Бізнес-процеси",
                    text: [
                        "Забезпечити інструменти для регулярного та незалежного оновлення та управління контентом театру",
                        "Стимулювати підтримку редакції журналу через цифрові інструменти",
                        "Інтегрувати механізми підписки, розсилок, а також управління правами доступу редакторів, користувачів, підписників і авторів публікацій",
                        "Оптимізація часу і зусиль на управління контентом та адміністрування сайту",
                    ],
                    icon: "settings",
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166840/decision1_agerur.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Створено зручну навігацію сайту із постійно доступним пошуком і фільтрацією за кількома параметрами",
                                "Упорядковано публікації за категоріями: Інтерв’ю, Рецензії, Статті, Події, Історичні факти",
                                "Відображення найновіших публікацій на головній сторінці допомагає швидко донести інформацію про актуальні події користувачу та збільшує взаємодію із сайтом",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166840/decision3_cjxyy2.jpg",
                        },
                        {
                            text: [
                                "На головній сторінці розміщено динамічні банери з анонсами найближчих подій",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Створено можливість легко підтримати проєкт фінансово через кнопку донату на головній сторінці та в хедері",
                                "Користувач має змогу оформити підписку та отримувати найсвіжіші публікації на пошту, а також відмовитись від розсилки",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166840/decision2_nwq274.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166842/decision4_grtb3i.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Для зручності користувача було створено можливість сортувати події за актуальністю та функцію поширення публікації у соціальних мережах",
                                "Було реалізовано особистий кабінет користувача в якому можна зберігати чи впорядковувати цікаві публікації",
                                "Вбудовані функції пошуку та фільтрації допоможуть швидше знайти необхідну публікацію",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166843/decision6_qubrjd.jpg",
                        },
                        {
                            text: [
                                "До функціоналу адміністративної панелі було інтегровано можливість створювати розсилки з останніми новинами на електронні пошти підписників сайту",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Функціонал сайту включає можливість видаляти профілі за потреби та вивантажувати базу підписників",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166843/decision5_ct91us.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166845/decision8_jwcwka.jpg",
                        },
                        {
                            text: [
                                "Впроваджено механізм створення, редагування та видалення: публікацій, рецензій, подій, статтей та журналів",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Налаштовано функціонал для додавання,  видалення, редагування даних про: авторів, редакторів, співробітників",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1750166844/decision7_yw5aee.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Cторінка <purple>публікації</purple>",
                    description: [
                        "Слайдер головних новин — візуальний акцент на актуальних подіях та матеріалах",
                        "Розділи контенту — окремі блоки для рецензій, інтерв’ю, історій, статей та журналів",
                        "Анотації та цитати — короткі описи до кожного матеріалу для швидкого ознайомлення",
                        "Промоблок журналів — виділений розділ для популяризації друкованих випусків",
                        "Футер з контактами: логотип, соцмережі, контактна інформація та згадка партнерів",
                    ],
                    video: "6plqlrHLJmA",
                },
                {
                    title: "Особистий <purple>кабінет користувача</purple>",
                    description: [
                        "Редагування профілю — зміна імені, email, розсилок та пароля",
                        "Збережені та вподобані публікації — окремі категорії для швидкого доступу",
                        "Видалення акаунту — можливість повністю прибрати профіль",
                        "Перегляд збережених матеріалів — карточки публікацій із датою, тегами, вподобаннями",
                        "Підписка на оновлення — проста форма для email-сповіщень у футері",
                    ],
                    video: "6plqlrHLJmA",
                },
                {
                    title: "<purple>Навігація</purple> по контенту <purple>сайту</purple>",
                    description: [
                        "Слайдер головних новин — візуальний акцент на актуальних подіях з коротким описом та датою",
                        "Категоризація контенту (події, рецензії, інтерв'ю, історія, статті, журнали)",
                        "База авторів та експертів (біографії, публікації, інтерв’ю)",
                        "Розсилка оновлень (нові матеріали, новини театру, спецтеми)",
                        "Інтеграція з соцмережами (поширення новин у Facebook, Twitter, Instagram)",
                    ],
                    video: "6plqlrHLJmA",
                },
                {
                    title: "<purple>Цікаві</purple> елементи <purple>інтерфейсу</purple>",
                    description: [
                        "Пошук публікацій — швидкий доступ до потрібного матеріалу за ключовими словами без зайвих переходів між сторінками",
                        "Фільтр публікацій — можливість обрати тип матеріалу, автора, статус публікації та інші параметри для точного відбору контенту",
                        "Вибір дати — зручне встановлення початкової та кінцевої дати для пошуку або сортування публікацій за періодами",
                        "Підписка на оновлення — функція отримання актуальних новин і публікацій на електронну пошту",
                        "Легка відписка від розсилки — можливість у будь-який момент скасувати підписку без додаткових дій чи підтверджень",
                    ],
                    video: "6plqlrHLJmA",
                },
                {
                    title: "<purple>Адмін-панель</purple> для керування <purple>публікаціями</purple> театрального порталу",
                    description: [
                        "Список публікацій — зручне відображення усіх матеріалів з візуалізацією статусу (опубліковано / чернетка) та швидким доступом до редагування",
                        "Фільтр і пошук — можливість сортувати публікації за датою, автором, статусом чи ключовим словом для швидкого знаходження потрібного матеріалу",
                        "Календар подій — вибір дати події під час створення чи редагування публікації для автоматичного сортування за актуальністю",
                        "Категорії та теги — додавання категорій (події, рецензії, інтерв’ю тощо) та хештегів для структурованого відображення контенту на сайті",
                        "Призначення автора — фіксація автора публікації для прозорості роботи редакційної команди",
                        "Редакторські нотатки — окреме поле для внутрішніх коментарів та інструкцій щодо матеріалу",
                    ],
                    video: "6plqlrHLJmA",
                },
                {
                    title: "<purple>Інтерфейс</purple> управління журналами <purple>театрального</purple> порталу",
                    description: [
                        "Список журналів — візуальне представлення випусків із обкладинками, роком видання та статусом публікації для швидкого огляду",
                        "Пошук та фільтрація — зручний пошук за назвою журналу, роком, статусом чи датою створення для оперативної роботи з архівом",
                        "Сортування за датою — можливість переглядати журнали у хронологічному порядку або за індивідуально обраними періодами",
                        "Редагування журналів — доступ до розширеного режиму редагування (як у публікаціях), де можна змінювати обкладинку, опис, рік випуску та інші дані",
                        "Статус публікації — позначення, якщо випуск опубліковано, та можливість змінити цей статус у кілька кліків",
                    ],
                    video: "6plqlrHLJmA",
                },
                {
                    title: "<purple>Адміністрування</purple> авторів, редакторів і <purple>підписників</purple>",
                    description: [
                        "Автори — можливість додавати нових авторів із зазначенням імені та завантаженням фото, а також видаляти їх при потребі",
                        "Редактори — гнучке керування редакторами: додавання нових, редагування та видалення даних за необхідності",
                        "Користувачі — перегляд і сортування списку користувачів, швидкий доступ до інформації про них та можливість видалення безпосередньо з цього розділу",
                        "Підписники — той самий функціонал, що й для редакторів (додавання, видалення), але додатково реалізована кнопка експорту даних для зручного завантаження списків підписників",
                    ],
                    video: "6plqlrHLJmA",
                },
                {
                    title: "<purple>Редагування</purple> розділу «Про нас» та <purple>контактів</purple>",
                    description: [
                        "Розділ «Про нас» - можливість додавати нових контактних осіб із зазначенням імені, посади, телефону, електронної пошти та фото. Також доступна функція видалення для актуалізації інформації",
                        "Контакти - це блок для заповнення загальної контактної інформації організації: телефонів, адрес електронної пошти та посилань на соцмережі. Для збереження даних передбачена окрема кнопка «Зберегти»",
                    ],
                    video: "6plqlrHLJmA",
                },
            ],
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
            decision: [
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
            decision: [
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
            decision: [
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
