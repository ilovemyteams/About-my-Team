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
type VideoType = { video: string };

type SlideType = TextType | ImageType | ScreenMobType | VideoType;
export type Slug =
    | "protection-in-ua"
    | "viktoriia-zabara"
    | "theatermag-com-ua"
    | "batatfarm-com"
    | "ilovemyteam-online"
    | "alex-chudov"
    | "hoida-liudmyla"
    | "hanna-balabushko"
    | "willow-motion";

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
    | "sharp"
    | "framer-motion"
    | "calendly"
    | "telegram"
    | "react-hook-form"
    | "zod"
    | "embla-carousel";

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
            id: "9",
            slug: "willow-motion",
            siteLink: "https://willow-motion.space/",
            order: 8,
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=11AjMZ8-S4FgRdXshbxeVzsA7Wd973Ia2",

            image: "https://drive.google.com/uc?export=view&id=1DjuIATAnXRrruZr24vdVZaCbOYyQuLt3",
            mediaForHero: {
                url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1754949327/willow-motion_kycm7m.jpg",
                type: "image",
            },
            behanceLink: "",
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
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1754944189/adaptivePC_asnlwr.jpg",
                    width: 1280,
                    height: 7412,
                },

                imageMobile: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1754944189/adaptiveMob_wtosgm.jpg",
                    width: 320,
                    height: 7253,
                },

                imageMobileStatic:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1754944564/adaptiveState_yb9cyy.jpg",
            },
            technologies: [
                "figma",
                "photoshop",
                "astrojs",
                "typescript",
                "tailwind",
                "react",
                "embla-carousel",
                "gsap",
            ],
        },
        ua: {
            name: "Willow-Motion",
            siteView: "лендінг",
            subtitle: "Лендінг для студії з відеомонтажу",
            description: "",
            heroTitle: "Willow-Motion",
            heroText: [
                "Лендінг для студії відеомонтажу, яка майстерно перетворює ідеї та сирі кадри на цілісні, динамічні історії.",
                "Він виконує роль візитної картки творчого підходу та водночас є ефективною платформою для демонстрації цінності продукту й емоційного залучення глядача. Сайт дозволяє користувачам відчути унікальний стиль кожного відео, ознайомитися з портфоліо та легко зв’язатися із монтажеркою для обговорення майбутнього проєкту.",
            ],
            deadlines: {
                analysis: "2 тижні",
                design: "3 тижні",
                launch: "3 тижні",
                support: "за запитом",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Особистий бренд",
                    text: [
                        "Передати професійну спеціалізацію через стиль подачі матеріалів і приклади робіт",
                        "Підкреслити роботу з різними типами контенту - від особистих історій до комерційних проєктів",
                        "Показати, що робота з клієнтами відбувається з урахуванням їхнього контексту та емоційної складової матеріалу",
                        "Додати реальні відгуки клієнтів як доказ професійності та уваги до деталей.",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Функціональність",
                    text: [
                        "Створити зручну, логічно структуровану навігацію, яка дозволяє швидко знайти інформацію про послуги, формат роботи, терміни та вартість",
                        "Розробити розділ із відповідями на ключові питання, що зазвичай виникають під час замовлення відеомонтажу",
                        "Реалізувати двомовність сайту (українська та англійська) для роботи з клієнтами в Україні та за кордоном",
                        "Додати прості та швидкі способи зв’язку без складних форм та забезпечити збір даних для аналітики сайту",
                    ],
                },
                {
                    icon: "light",
                    title: "Візуальні підсилення",
                    text: [
                        "Зробити максимальний акцент на ідентичності та професіоналізмі",
                        "Підкреслити індивідуальний підхід та увагу до потреб замовника та контексту майбутнього відео",
                        "Сконцентрувати увагу відвідувачів сайту на самих важливих елементах та спонукати до активних дій та взаємодії",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            text: [
                                "Реалізовано інтегровану систему швидкого зв’язку, що дозволяє користувачам легко контактувати з Willow Motion через соціальні мережі, месенджери та електронну пошту",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755025792/decision1_ptxmnm.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755026926/decision6_r0pe7k.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Секція з послугами представлена у форматі повноекранного блоку з прикладами відео монтажу для різних типів замовлень. Якісне відео з продуманим фокусом, яке виглядає бездоганно на всіх типах девайсів",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Створено дизайн, у якому кожна секція підкреслює послуги студії: логотип у стилі монтажної іконки, графічні елементи, що нагадують плівку, відгуки оформлені у вигляді кінострічки та розміщені у слайдері, використання фото та відеоматеріалів із тематикою зйомки",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755029574/decision3_fw4xwc.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755028441/decision2_hlbptm.jpg",
                        },
                        {
                            text: [
                                "Запроваджено двомовність сайту (українська та англійська), а весь контент адаптовано під обидві версії",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "FAQ у форматі інтерактивних карток. При кліку картка розгортається з відповіддю, фокусуючи увагу на одному питанні.",
                            ],
                        },

                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755029787/decision4_u1sokg.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Стартове <purple>промо-відео</purple>",
                    description: [
                        "На старті сайту користувач бачить відео на весь екран, яке виконує роль своєрідного лоадера та одразу занурює в атмосферу бренду",
                        "Під час прокручування сторінки ключовий текст зменшується, переміщується в інше місце, а на екрані з’являються меню, опис і кнопки",
                        "Відео адаптовано під різні формати екранів — від моніторів до мобільних пристроїв, щоб перше враження було однаково ефектним на будь-якому девайсі",
                    ],
                    video: "QoJEc-w_biA",
                },

                {
                    title: "Динамічний <purple>градієнт</purple>, що <purple>оживає</purple> при скролі",
                    description: [
                        "При прокручуванні сторінки плавно змінюється колір фону у вигляді градієнта, створюючи ефект живого дизайну та підсилюючи емоційне сприйняття контенту та залученість глядача",
                    ],
                    video: "g2RUUjkXzXE",
                },
                {
                    title: "<purple>Відео-роботи</purple>: переглядайте, перемикайте, обирайте в один клік",
                    description: [
                        "Секція портфоліо представлена у вигляді інтерактивних карток, які змінюють положення при виборі, дозволяючи швидко переглядати різні приклади",
                        "Кожне відео запускається у форматі короткого демонстраційного ролика, що передає стиль та професійний підхід до відеомонтажу",
                    ],
                    video: "hDsboOo7k2I",
                },
                {
                    title: "<purple>Анімаційні ефекти</purple>, що ведуть користувача до дії ",
                    description: [
                        "Бігучий рядок із закликом замовити послугу, який зупиняється при наведенні та відкриває форму з контактами при кліку",
                        "Анімація тексту на кнопках при наведенні курсору для привернення уваги",
                        "CTA-секція з чорним фоном, який при скролі звужується, фокусуючи увагу на кнопці «Зв’язатися зі мною»",
                    ],
                    video: "m2RohfcC3IY",
                },
            ],
        },
        en: {
            name: "Willow-Motion",
            siteView: "Landing",
            subtitle: "Landing page for a video editing studio",
            description: "",
            heroTitle: "Willow-Motion",
            heroText: [
                "A landing page for a video editing studio that masterfully transforms ideas and raw footage into cohesive, dynamic stories.",
                "It serves as both a calling card for a creative approach and an effective platform for showcasing the product’s value and emotionally engaging the viewer. The website allows users to experience the unique style of each video, explore the portfolio, and easily get in touch with the editor to discuss an upcoming project.",
            ],
            deadlines: {
                analysis: "2 weeks",
                design: "3 weeks",
                launch: "3 weeks",
                support: "on request",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Personal brand",
                    text: [
                        "Convey professional expertise through the presentation style and work examples",
                        "Highlight experience with various types of content — from personal stories to commercial projects",
                        "Demonstrate a client-centered approach that considers both context and the emotional core of the material",
                        "Include real client testimonials as proof of professionalism and attention to detail",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Functionality",
                    text: [
                        "Create user-friendly, logically structured navigation that allows quick access to information about services, workflow, timelines, and pricing",
                        "Develop a section with answers to key questions that typically arise when ordering video editing services",
                        "Implement bilingual functionality (Ukrainian and English) to support clients both in Ukraine and internationally",
                        "Add simple and fast contact options without complicated forms, while enabling data collection for site analytics",
                    ],
                },
                {
                    icon: "light",
                    title: "Visual enhancements",
                    text: [
                        "Place strong emphasis on brand identity and professionalism",
                        "Emphasize a personalized approach and attention to the client's needs and the context of the upcoming video",
                        "Direct visitors’ attention to the most important elements and encourage active engagement and interaction",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            text: [
                                "An integrated quick-contact system has been implemented, allowing users to easily reach Willow Motion via social media, messengers, and email",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755025792/decision1_ptxmnm.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755026926/decision6_r0pe7k.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "The services section is presented as a full-screen block featuring video editing examples for different types of projects. High-quality videos with thoughtful framing ensure a flawless appearance across all device types",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "A design has been created where each section emphasizes the studio’s services: a logo styled as an editing icon, graphic elements reminiscent of film strips, testimonials displayed as a cinematic reel in a slider, and the use of photos and videos themed around filmmaking",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755029574/decision3_fw4xwc.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755028441/decision2_hlbptm.jpg",
                        },
                        {
                            text: [
                                "Bilingual support (Ukrainian and English) has been introduced, with all content adapted for both language versions",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "FAQ presented as interactive cards. On click, a card expands to reveal the answer, focusing the user’s attention on a single question.",
                            ],
                        },

                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755029787/decision4_u1sokg.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Intro <purple>promo video</purple>",
                    description: [
                        "At the start of the website, users see a full-screen video that acts as a branded loader, instantly immersing them in the atmosphere of the brand",
                        "As the page scrolls, the main text shrinks and moves to a new position, while the menu, descriptions, and buttons gradually appear",
                        "The video is fully responsive, ensuring an equally impactful first impression across all devices — from desktops to mobile screens",
                    ],
                    video: "QoJEc-w_biA",
                },

                {
                    title: "Dynamic <purple>gradient</purple> that <purple>comes to life</purple> on scrolling",
                    description: [
                        "As users scroll down the page, the background color shifts gradually through a dynamic gradient. This creates a sense of a “living” design, enhancing emotional engagement and drawing users deeper into the content",
                    ],
                    video: "g2RUUjkXzXE",
                },
                {
                    title: "<purple>Video portfolio</purple>: watch, switch, choose in one click",
                    description: [
                        "The portfolio section is presented through interactive cards that rearrange when selected, allowing users to seamlessly browse different samples",
                        "Each video launches as a short showcase reel, demonstrating the unique editing style and professional quality of the work",
                    ],
                    video: "hDsboOo7k2I",
                },
                {
                    title: "<purple>Animation effects</purple> that guide user action",
                    description: [
                        "A scrolling ticker with a call to action to order a service — it pauses on hover and opens a contact form on click",
                        "Text animations on buttons that activate on hover to attract attention",
                        "A CTA section with a black background that narrows on scroll, drawing focus directly to the “Get in Touch” button",
                    ],
                    video: "m2RohfcC3IY",
                },
            ],
        },
        pl: {
            name: "Willow-Motion",
            siteView: "strona docelowa",
            subtitle: "Landing page dla studia montażu wideo",
            description: "",
            heroTitle: "Willow-Motion",
            heroText: [
                "Strona docelowa dla studia montażu wideo, które umiejętnie przekształca pomysły i surowy materiał filmowy w spójne, dynamiczne historie.",
                "Służy jako wizytówka kreatywnego podejścia, a jednocześnie jest skuteczną platformą do demonstrowania wartości produktu i emocjonalnego zaangażowania widza. Strona internetowa pozwala użytkownikom doświadczyć unikalnego stylu każdego filmu, przeglądać portfolio i łatwo skontaktować się z montażystą w celu omówienia nadchodzącego projektu.",
            ],
            deadlines: {
                analysis: "2 tygodnie",
                design: "3 tygodnie",
                launch: "3 tygodnie",
                support: "na żądanie",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Marka osobista",
                    text: [
                        "Przekazać profesjonalną specjalizację poprzez styl prezentacji materiałów i przykłady realizacji",
                        "Podkreślić pracę z różnymi typami treści – od osobistych historii po projekty komercyjne",
                        "Pokazać, że współpraca z klientami odbywa się z uwzględnieniem ich kontekstu oraz emocjonalnego wymiaru materiału",
                        "Dodać prawdziwe opinie klientów jako dowód profesjonalizmu i dbałości o szczegóły",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Funkcjonalność",
                    text: [
                        "Stworzyć wygodną, logicznie uporządkowaną nawigację, która pozwoli szybko znaleźć informacje o usługach, formacie współpracy, terminach oraz kosztach",
                        "Opracować sekcję z odpowiedziami na kluczowe pytania, które zazwyczaj pojawiają się podczas zamawiania montażu wideo",
                        "Wdrożyć dwujęzyczność strony (ukraiński i angielski) w celu obsługi klientów w Ukrainie i za granicą",
                        "Dodać proste i szybkie sposoby kontaktu bez skomplikowanych formularzy oraz zapewnić gromadzenie danych do analityki strony",
                    ],
                },
                {
                    icon: "light",
                    title: "Wizualne ulepszenia",
                    text: [
                        "Położyć maksymalny nacisk na tożsamość i profesjonalizm",
                        "Podkreślić indywidualne podejście oraz uwagę na potrzeby klienta i kontekst tworzonego wideo",
                        "Skupić uwagę odwiedzających stronę na najważniejszych elementach oraz zachęcić do podejmowania aktywnych działań i interakcji",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            text: [
                                " Wdrożyliśmy zintegrowany system szybkiej komunikacji, który umożliwia użytkownikom łatwy kontakt z Willow Motion za pośrednictwem sieci społecznościowych, komunikatorów i poczty elektronicznej",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755025792/decision1_ptxmnm.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755026926/decision6_r0pe7k.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Sekcja usług jest prezentowana jako pełnoekranowy blok z przykładami edycji wideo dla różnych typów zleceń. Wysokiej jakości wideo z przemyślanym ukierunkowaniem, które wygląda bezbłędnie na wszystkich typach urządzeń",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Opracowano projekt, w którym każda sekcja podkreśla usługi studia: logo w stylu ikony montażu, elementy graficzne przypominające taśmę filmową, opinie zaprezentowane w formie kliszy filmowej i umieszczone w sliderze, a także wykorzystanie zdjęć i materiałów wideo o tematyce filmowej",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755029574/decision3_fw4xwc.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755028441/decision2_hlbptm.jpg",
                        },
                        {
                            text: [
                                "Wprowadzono dwujęzyczność strony (ukraiński i angielski), a cała treść została dostosowana do obu wersji",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "FAQ w formacie interaktywnych kart. Po kliknięciu karta rozwija się wraz z odpowiedzią, skupiając uwagę na jednym pytaniu",
                            ],
                        },

                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1755029787/decision4_u1sokg.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Uruchomienie <purple>filmu promocyjnego</purple>",
                    description: [
                        "Na początku strony użytkownik widzi pełnoekranowe wideo, które pełni rolę ładowarki i natychmiast zanurza w atmosferę marki",
                        "Podczas przewijania strony kluczowy tekst zmniejsza się, przenosi w inne miejsce, a na ekranie pojawiają się menu, opis i przyciski",
                        "Wideo zostało dostosowane do różnych formatów ekranów – od monitorów po urządzenia mobilne – tak, aby pierwsze wrażenie było równie efektowne na każdym urządzeniu",
                    ],
                    video: "QoJEc-w_biA",
                },

                {
                    title: "Dynamiczny <purple>gradient</purple>, który <purple>ożywa</purple> podczas przewijania",
                    description: [
                        "Podczas przewijania strony kolor tła zmienia się płynnie w formie gradientu, tworząc efekt żywego projektu i zwiększając emocjonalne postrzeganie treści oraz zaangażowanie widzów",
                    ],
                    video: "g2RUUjkXzXE",
                },
                {
                    title: "<purple>Prace wideo</purple>: oglądaj, przełączaj, wybieraj jednym kliknięciem",
                    description: [
                        "Sekcja portfolio została zaprezentowana w formie interaktywnych kart, które zmieniają położenie po ich wybraniu, umożliwiając szybkie przeglądanie różnych przykładów",
                        "Każde wideo uruchamia się w formacie krótkiego filmu demonstracyjnego, który oddaje styl i profesjonalne podejście do montażu wideo",
                    ],
                    video: "hDsboOo7k2I",
                },
                {
                    title: "<purple>Efekty animacyjne</purple> prowadzące użytkownika do działania",
                    description: [
                        "Przewijający się pasek z wezwaniem do zamówienia usługi, który zatrzymuje się po najechaniu kursorem i po kliknięciu otwiera formularz kontaktowy",
                        "Animacja tekstu na przyciskach po najechaniu kursorem w celu przyciągnięcia uwagi",
                        "Sekcja CTA z czarnym tłem, które podczas przewijania zwęża się, koncentrując uwagę na przycisku «Skontaktuj się ze mną»",
                    ],
                    video: "m2RohfcC3IY",
                },
            ],
        },
    },
    {
        data: {
            id: "8",
            slug: "hanna-balabushko",
            siteLink: "https://balabushko.com",
            order: 7,
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1qQI5-QKeXJw0kKb_JipvBEZ4j6WnrQYX",

            image: "https://drive.google.com/uc?export=view&id=1DjuIATAnXRrruZr24vdVZaCbOYyQuLt3",
            mediaForHero: {
                url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753090338/hero_tfpey2.jpg",
                type: "image",
            },
            behanceLink:
                "https://www.behance.net/gallery/231579623/Landing-page-for-Mentor",
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
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753092172/desktop_ktkzej.jpg",
                    width: 1000,
                    height: 6764,
                },

                imageMobile: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753092173/mobile_acj0re.jpg",
                    width: 433,
                    height: 9778,
                },

                imageMobileStatic:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753092171/static_ydrhyv.jpg",
            },
            technologies: [
                "figma",
                "photoshop",
                "astrojs",
                "typescript",
                "tailwind",
                "react",
                "swiper",
                "gsap",
                "react-hook-form",
                "zod",
            ],
        },
        ua: {
            name: "Анна Балабушко",
            siteView: "лендінг",
            subtitle: "Лендінг для QA менторки",
            description: "",
            heroTitle: "Анна Балабушко",
            heroText: [
                "Проєкт створено для досвідченої QA менторки та Technical Team Lead з понад 10-річним досвідом роботи у сфері IT. Анна активно ділиться експертизою через індивідуальні менторські програми, а також у межах глобальних ініціатив Women in Engineering (WINE) та Women for the Future.",
                "Основна мета сайту - представити Анну як експертку, яка допомагає світчерам упевнено увійти в ІТ, а фахівцям всіх рівнів - прокачати кар’єрні навички, підготуватись до технічних інтерв’ю, створити персоналізований роадмап розвитку та зростати до лідерських позицій.",
            ],
            deadlines: {
                analysis: "2 тижні",
                design: "3 тижні",
                launch: "3 тижні",
                support: "за запитом",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Особистий бренд",
                    text: [
                        "Розкрити багатогранний образ експертки, яка працює не лише з початківцями та світчерами, а й з досвідченими фахівцями, що прагнуть нових можливостей для розвитку в QA",
                        "Створити структуру лендінгу, яка навіть при «холодних» контактах максимально чітко та широко демонструє експертність і підхід Анни",
                        "Передати через світлу кольорову гаму, візуальний стиль і тексти відчуття спокою, підтримки та впевненості, щоб сайт став не просто презентацією послуг, а відображенням особистості, стилю роботи та цінностей експертки",
                    ],
                },
                {
                    icon: "light",
                    title: "Цінність",
                    text: [
                        "Створити мінімалістичний дизайн, що висвітлює не лише послуги, а й досвід, підхід і цінності експертки",
                        "Донести головну ідею: допомога світчерам і тестувальникам знайти кар'єрний шлях, створення персоналізованого роадмап, підготовка до співбесід і зростання до лідерства",
                        "Показати широку цільову аудиторію - від початківців до досвідчених, які потребують підтримки, фідбеку й структурованого розвитку",
                        "Підкреслити формати співпраці: разові консультації, менторські програми з роадмапами й індивідуальним супроводом",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Функціональність",
                    text: [
                        "Сконцентрувати головний канал комунікації навколо форми зворотного зв’язку, а не на прямих повідомленнях у соцмережах",
                        "Додати сучасні інтерактивні елементи та анімації, що підсилюють враження, але не перевантажують інтерфейс",
                        "Створити структуру, яка відображає очікування замовниці: сайт має бути «про неї» та про можливість замовити індивідуальні консультації й менторські програми - як для тих, хто вже працює в QA, так і для світчерів, що роблять перші кроки в сфері ІТ",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753097903/decision2_er7mh7.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Продумана структура сторінки: від першого екрану з акцентом на особистий бренд до блоків із переліком послуг, перевагами, статистикою та формою зворотного зв’язку",
                                "По всьому сайту інтегровані фото експертки на фоні, що підсилюють особистий бренд через візуальну присутність та створюють ефект живого спілкування",
                                "Дизайн сайту продуманий для трьох типів пристроїв: десктоп, планшет і мобільний телефон",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Текстура бетонної стіни у фоні головних секцій  як метафора надійного фундаменту знань і досвіду, який експертка допомагає закласти менті",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753106488/decision1-1_opzxfv.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753106486/decision1_v97crl.jpg",
                        },
                        {
                            text: [
                                "Світла мінімалістична кольорова палітра з акцентним блакитним тоном, що викликає відчуття спокою, підтримки та довіри - ключових цінностей експертки",
                            ],
                        },
                    ],
                },

                {
                    slideLeft: [
                        {
                            text: [
                                "Блок зі статистикою створений з фокусом на велике фото експертки та анімацію левітації цифр, що підкреслює реальний досвід і досягнення. Такий підхід демонструє експертизу й робить інформацію доступною й переконливою",
                                "Секція з послугами побудована так, що середня картка візуально виділяється, фокусуючи увагу користувача на ключовому пакеті послуг, який експертка прагне просувати як  найбільш оптимальний за співвідношенням ціни та цінності",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753104812/decision3_sgnts4.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753105068/decision4_qev1kj.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Форма зворотного зв’язку як головний канал комунікації: дозволяє отримувати заявки від зацікавлених користувачів, зменшуючи потребу в прямих повідомлень у соцмережах",
                                "Блок із посиланнями на активні соцмережі (LinkedIn, Instagram) розміщено у футері, де розкривається ще більше діяльності експертки,  водночас основна ціль користувача - заповнення форми заявки",
                            ],
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Навігаційне <purple>меню</purple>, що працює на <purple>бренд</purple>",
                    description: [
                        "Навігаційне меню реалізоване у вигляді звичної для мобільних пристроїв бургер-іконки, що зберігає фокус на експертці на першому екрані",
                        "При наведені курсору до пункту меню реалізовано додатковий ефект зміни фотографії експертки в блоці",
                        "Це рішення додає сайту інтерактивності та підсилює особистий бренд через візуальну динаміку",
                    ],
                    video: "Wv3fpM_ptjY",
                },

                {
                    title: "<purple>Анімації</purple>: єдина <purple>стилістика</purple> руху",
                    description: [
                        "Анімації підібрані мінімалістичні та делікатні, щоб не перевантажувати інтерфейс і зберегти відчуття легкості",
                        "Головний задум - створити єдиний стиль анімації, який об'єднує різні блоки сторінки та підсилює фокус на ключових смислах: ефект левітації карток з описом цільових аудиторій та цифр у блоці статистики; плавна поява тексту у секції «Етапи співпраці», що створюють відчуття послідовності",
                        "Такі деталі роблять сайт сучасним і живим, але водночас відповідають стилю експертки, яка прагне уникати зайвого візуального шуму",
                    ],
                    video: "h3bPidDVLVQ",
                },
                {
                    title: "Динамічна стрічка <purple>переваг</purple>",
                    description: [
                        "Секція з перевагами реалізована у вигляді автопрокручуваної стрічки: такий формат дозволяє компактно подати багато інформації, зберігаючи легкість дизайну та сучасний вигляд інтерфейсу",
                        "Ключова ідея секції: показати, що переваги не просто перелік, а важливий елемент позиціювання експертки",
                        "Інтерактивність полегшує сприйняття: при наведенні курсору на секцію, прокрутка зупиняється і користувач може спокійно ознайомитись з повним текстом",
                    ],
                    video: "zkaXTX0Ti9Q",
                },
            ],
        },
        en: {
            name: "Hanna Balabushko",
            siteView: "Landing",
            subtitle: "Landing page for a Coach",
            description: "",
            heroTitle: "Hanna Balabushko",
            heroText: [
                "The project was created for an experienced QA mentor and Technical Team Lead with over 10 years of experience in the IT industry. Anna actively shares her expertise through one-on-one mentoring programs as well as within global initiatives such as Women in Engineering (WINE) and Women for the Future.",
                "The main goal of the website is to present Anna as an expert who helps career switchers confidently enter the IT field and supports specialists at all levels in developing their career skills, preparing for technical interviews, creating a personalized growth roadmap, and progressing toward leadership positions.",
            ],
            deadlines: {
                analysis: "2 weeks",
                design: "3 weeks",
                launch: "3 weeks",
                support: "on request",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Personal brand",
                    text: [
                        "To reflect the multifaceted image of an expert who works not only with beginners and career switchers but also with experienced professionals seeking new opportunities for growth in QA",
                        "To create a landing page structure that clearly and broadly communicates Anna’s expertise and approach - even during “cold” interactions",
                        "To convey a sense of calm, support, and confidence through a light color palette, visual style, and tone of voice, so that the website becomes not just a service presentation, but a reflection of the expert’s personality, working style, and values",
                    ],
                },
                {
                    icon: "light",
                    title: "Value",
                    text: [
                        "Create a minimalist design that highlights not only the services, but also the expert’s experience, approach, and values",
                        "Communicate the core idea: helping career switchers and testers find their career path, build a personalized roadmap, prepare for interviews, and grow into leadership roles",
                        "Show the broad target audience - from beginners to experienced professionals who need support, feedback, and structured growth",
                        "Emphasize the formats of collaboration: one-time consultations, mentoring programs with roadmaps, and individual guidance",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Functionality",
                    text: [
                        "Focus the main communication channel around the contact form rather than direct messages on social media",
                        "Add modern interactive elements and animations that enhance the user experience without overloading the interface",
                        "Build a structure that reflects the client’s expectations: the website should be “about her” and highlight the possibility to book individual consultations and mentoring programs - both for those already working in QA and for career switchers just entering the IT field",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753097903/decision2_er7mh7.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "A well-thought-out page structure: from the hero section focused on personal branding to blocks showcasing services, benefits, statistics and a contact form",
                                "Throughout the site, background photos of the expert are integrated to reinforce her personal brand through visual presence and create a sense of live communication",
                                "The website design is optimized for three types of devices: desktop, tablet, and mobile",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "A concrete wall texture in the background of key sections, used as a metaphor for the solid foundation of knowledge and experience that the expert helps mentees build",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753106488/decision1-1_opzxfv.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753106486/decision1_v97crl.jpg",
                        },
                        {
                            text: [
                                "A light minimalist color palette with an accent blue tone that evokes a sense of calm, support, and trust - the expert’s core values",
                            ],
                        },
                    ],
                },

                {
                    slideLeft: [
                        {
                            text: [
                                "The statistics block is designed with a focus on a large photo of the expert and animated floating numbers, highlighting her real experience and achievements. This approach showcases expertise and makes the information both accessible and convincing",
                                "The services section is structured so that the center card visually stands out, drawing the user’s attention to the key service package the expert aims to promote as the most optimal in terms of price and value",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753104812/decision3_sgnts4.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753105068/decision4_qev1kj.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "The contact form serves as the main communication channel: it allows the expert to receive requests from interested users, reducing the need for direct messages via social media",
                                "A block with links to active social media accounts (LinkedIn, Instagram) is placed in the footer, where more of the expert’s activity is showcased - while the main goal for the user remains filling out the request form",
                            ],
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "A navigation <purple>menu</purple> that supports <purple>the brand</purple>",
                    description: [
                        "The navigation menu is implemented as a familiar mobile-style burger icon, keeping the focus on the expert in the hero section",
                        "When hovering over a menu item, an additional effect changes the expert’s photo in the main block",
                        "This solution adds interactivity to the site and strengthens the personal brand through visual dynamics",
                    ],
                    video: "Wv3fpM_ptjY",
                },

                {
                    title: "<purple>Animations</purple>: a unified <purple>motion</purple> style",
                    description: [
                        "Animations are selected to be minimalistic and subtle in order to avoid overloading the interface and to maintain a sense of lightness",
                        "The main idea is to create a consistent animation style that connects different sections of the page and emphasizes key messages - such as a floating effect on cards describing target audiences and numbers in the statistics block, smooth text appearance in the “Collaboration Stages” section - which together create a sense of continuity",
                        "These details make the website feel modern and alive, while still aligning with the expert’s style, which aims to avoid unnecessary visual noise",
                    ],
                    video: "h3bPidDVLVQ",
                },
                {
                    title: "Dynamic <purple>Advantages</purple> Carousel",
                    description: [
                        "The advantages section is implemented as an auto-scrolling carousel - this format makes it possible to present a large amount of information in a compact way, while keeping the design light and the interface modern",
                        "The key idea of this section is to show that these advantages are not just a list, but an essential part of the expert’s positioning",
                        "Interactivity improves perception: when the user hovers over the section, the scrolling stops, allowing them to read the full text comfortably",
                    ],
                    video: "zkaXTX0Ti9Q",
                },
            ],
        },
        pl: {
            name: "Hanna Balabushko",
            siteView: "strona docelowa",
            subtitle: "Landing page dla mentora QA",
            description: "",
            heroTitle: "Hanna Balabushko",
            heroText: [
                "Projekt został stworzony dla doświadczonego mentora QA i lidera zespołu technicznego z ponad 10-letnim doświadczeniem w IT. Anna aktywnie dzieli się swoją wiedzą poprzez indywidualne programy mentorskie, a także w ramach globalnych inicjatyw Women in Engineering (WINE) i Women for the Future.",
                "Głównym celem strony internetowej jest przedstawienie Anny jako eksperta, który pomaga świeżo upieczonym informatykom wejść do IT z pewnością siebie, a profesjonalistom na wszystkich poziomach poprawić swoje umiejętności zawodowe, przygotować się do rozmów technicznych, stworzyć spersonalizowaną mapę drogową rozwoju i awansować na stanowiska kierownicze.",
            ],
            deadlines: {
                analysis: "2 tygodnie",
                design: "3 tygodnie",
                launch: "3 tygodnie",
                support: "na żądanie",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Marka osobista",
                    text: [
                        "Ukazać wszechstronny wizerunek ekspertki, która pracuje nie tylko z osobami początkującymi i przebranżawiającymi się, ale także z doświadczonymi specjalistami poszukującymi nowych możliwości rozwoju w obszarze QA",
                        "Stworzyć strukturę landing page’a, która nawet przy „zimnych” kontaktach maksymalnie jasno i szeroko demonstruje ekspertyzę oraz podejście Anny",
                        "Przekazać poprzez jasną kolorystykę, styl wizualny i teksty poczucie spokoju, wsparcia i pewności siebie — tak, by strona była nie tylko prezentacją usług, ale też odzwierciedleniem osobowości, stylu pracy i wartości ekspertki",
                    ],
                },
                {
                    icon: "light",
                    title: "Wartość",
                    text: [
                        "Stworzyć minimalistyczny design, który podkreśla nie tylko usługi, ale także doświadczenie, podejście i wartości ekspertki",
                        "Przekazać główną ideę: pomoc osobom zmieniającym branżę (switcherom) i testerom w odnalezieniu ścieżki kariery, tworzeniu spersonalizowanego roadmapu, przygotowaniu do rozmów kwalifikacyjnych oraz rozwoju w kierunku przywództwa",
                        "Pokazać szeroką grupę docelową – od początkujących po doświadczonych specjalistów, którzy potrzebują wsparcia, informacji zwrotnej i uporządkowanego rozwoju",
                        "Podkreślić formy współpracy: jednorazowe konsultacje, programy mentoringowe z mapami drogowymi i indywidualnym wsparciem",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Funkcjonalność",
                    text: [
                        "Skoncentrować główny kanał komunikacji wokół formularza kontaktowego, a nie bezpośrednich wiadomości w mediach społecznościowych",
                        "Dodać nowoczesne interaktywne elementy i animacje, które wzmacniają odbiór strony, ale nie przeciążają interfejsu",
                        "Stworzyć strukturę odpowiadającą oczekiwaniom klientki: strona ma być „o niej” oraz o możliwości zamówienia indywidualnych konsultacji i programów mentoringowych – zarówno dla osób już pracujących w QA, jak i dla switcherów, którzy stawiają pierwsze kroki w branży IT",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753097903/decision2_er7mh7.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Struktura strony jest dobrze przemyślana: od pierwszego ekranu z naciskiem na markę osobistą do bloków z listą usług, korzyści, statystyk i formularzem opinii",
                                "Na całej stronie zintegrowano zdjęcia ekspertki w tle, które wzmacniają osobistą markę poprzez wizualną obecność i tworzą efekt żywej komunikacji",
                                "Projekt strony został zaprojektowany dla trzech typów urządzeń: komputera stacjonarnego, tabletu i telefonu komórkowego.",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Tekstura betonowej ściany w tle głównych sekcji jako metafora solidnego fundamentu wiedzy i doświadczenia, które ekspert pomaga zbudować swoim podopiecznym",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753106488/decision1-1_opzxfv.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753106486/decision1_v97crl.jpg",
                        },
                        {
                            text: [
                                "Jasna, minimalistyczna paleta kolorów z niebieskim akcentem, który wywołuje poczucie spokoju, wsparcia i zaufania - kluczowych wartości eksperta",
                            ],
                        },
                    ],
                },

                {
                    slideLeft: [
                        {
                            text: [
                                "Blok ze statystykami został stworzony z naciskiem na duże zdjęcie ekspertki i animację lewitujących cyfr, co podkreśla rzeczywiste doświadczenie i osiągnięcia. Takie podejście pokazuje wiedzę ekspercką i sprawia, że informacje są dostępne i przekonujące",
                                "Sekcja z usługami jest zbudowana tak, że średnia karta wyróżnia się wizualnie, skupiając uwagę użytkownika na kluczowym pakiecie usług, który ekspertka chce promować jako najbardziej optymalny pod względem stosunku ceny do wartości",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753104812/decision3_sgnts4.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1753105068/decision4_qev1kj.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Formularz zwrotny jako główny kanał komunikacji: pozwala na otrzymywanie zgłoszeń od zainteresowanych użytkowników, zmniejszając potrzebę bezpośrednich wiadomości w sieciach społecznościowych",
                                "Blok z linkami do aktywnych sieci społecznościowych (LinkedIn, Instagram) jest umieszczony w stopce, co ujawnia jeszcze więcej działań eksperta, podczas gdy głównym celem użytkownika jest wypełnienie formularza zgłoszeniowego",
                            ],
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "<purple>Menu</purple> nawigacyjne wspierająceа <purple>markę osobistą</purple>",
                    description: [
                        "Menu nawigacyjne zostało zaprojektowane w formie dobrze znanej ikony hamburgera, typowej dla urządzeń mobilnych, co pozwala zachować pełne skupienie na ekspertce na pierwszym ekranie",
                        "Po najechaniu kursorem na elementy menu, uruchamiany jest dodatkowy efekt zmiany zdjęcia ekspertki w bloku",
                        "To rozwiązanie dodaje stronie interaktywności i wzmacnia markę osobistą poprzez wizualną dynamikę.",
                    ],
                    video: "Wv3fpM_ptjY",
                },

                {
                    title: "<purple>Animacje</purple>: jednolity <purple>styl</purple> ruchu",
                    description: [
                        "Animacje są minimalistyczne i delikatne, aby nie przeciążać interfejsu i zachować poczucie lekkości",
                        "Główną ideą jest stworzenie jednego stylu animacji, który łączy różne bloki strony i wzmacnia koncentrację na kluczowych znaczeniach: efekt lewitacji kart opisujących docelowych odbiorców i liczby w bloku statystyk; płynne pojawianie się tekstu w sekcji «Etapy współpracy», które razem tworzą poczucie spójności",
                        "Takie szczegóły sprawiają, że strona wygląda nowocześnie i żywo, ale jednocześnie pasuje do stylu ekspertki, która stara się unikać niepotrzebnego szumu wizualnego",
                    ],
                    video: "h3bPidDVLVQ",
                },
                {
                    title: "Przewijany pasek z <purple>zaletami</purple>",
                    description: [
                        "Sekcja zalet została zaprojektowana jako automatycznie przewijającego się paska – taki format umożliwia przedstawienie dużej ilości informacji w kompaktowy sposób, zachowując lekkość designu i nowoczesny wygląd interfejsu",
                        "Kluczowym celem tej sekcji jest pokazanie, że zalety to nie tylko zwykła lista, ale istotny element pozycjonowania ekspertki",
                        "Interaktywność ułatwia odbiór treści – po najechaniu kursorem na sekcję przewijanie zatrzymuje się, co pozwala użytkownikowi spokojnie zapoznać się z pełnym tekstem",
                    ],
                    video: "zkaXTX0Ti9Q",
                },
            ],
        },
    },
    {
        data: {
            id: "7",
            slug: "hoida-liudmyla",
            siteLink: "https://career-coach.com.ua",
            order: 7,
            imageForAllProjectsPage:
                "https://drive.google.com/uc?export=view&id=1U6IMo1By3u6_5cHZN47vkephFfI3yd5-",
            image: "https://drive.google.com/uc?export=view&id=1E-rbGYwz8LEX7MVzBINw7oNIX3-B9DA-",
            mediaForHero: {
                url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751447605/hero_ykjlzb.jpg",
                type: "image",
            },

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
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751477618/Desktop_axyrju.jpg",
                    width: 1280,
                    height: 11094,
                },

                imageMobile: {
                    url: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751477615/Mobile_xyen4w.jpg",
                    width: 400,
                    height: 12370,
                },

                imageMobileStatic:
                    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751477612/static_n4uggh.jpg",
            },
            technologies: [
                "figma",
                "photoshop",
                "astrojs",
                "typescript",
                "tailwind",
                "react",
                "swiper",
                "framer-motion",
                "calendly",
                "telegram",
                "formik",
                "yup",
            ],
        },
        ua: {
            name: "Гойда Людмила",
            siteView: "лендінг",
            subtitle: "Лендінг для коуча",
            description: "",
            heroTitle: "Гойда Людмила",
            heroText: [
                "Проєкт створений для кар'єрної консультантки та коуча - експертки з понад 20-річним досвідом у сфері рекрутингу. Сайт став наступним кроком у розвитку її професійного напряму - індивідуального коучингу з фокусом на підтримку людей у кар'єрних трансформаціях.",
                "Це односторінковий ресурс, який поєднує функції онлайн-візитівки з інструментами для зручного першого контакту з потенційними клієнтами. Головна мета лендінгу - допомогти користувачеві зрозуміти, з якими запитами можна звернутись, які послуги надає експертка та якою буде вартість співпраці.",
            ],
            deadlines: {
                analysis: "2 тижні",
                design: "3 тижні",
                launch: "3 тижні",
                support: "за запитом",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Особистий бренд",
                    text: [
                        "Візуально та стилістично поєднати сайт із вже сформованим образом експертки у соціальних мережах: палітра кольорів, тон спілкування, структура цінностей",
                        "Продумати структуру сторінки так, щоб користувач одразу побачив не лише компетенції та індивідуальний підхід, а й людяність експертки: фото, принципи роботи, реальні відгуки клієнтів",
                    ],
                },
                {
                    icon: "light",
                    title: "Цінність",
                    text: [
                        "Висвітлити ключову ідею: коучинг від експертки з досвідом у рекрутингу - це поєднання підтримки з глибоким розумінням ринку, процесів змін і точок  зростання",
                        'Показати, що експертка працює не з "кар\'єрою", а з людиною в моменті змін: пошук нової роботи, вихід зі стагнації, виявлення нових напрямів розвитку',
                        "Відобразити безоціночний підхід  як основу її взаємодії з клієнтами",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Функціональність",
                    text: [
                        "Сайт мав виконувати роль не просто візитівки, а інструменту першого контакту",
                        "Передбачити декілька каналів зв'язку: прямі повідомлення в соцмережі (Linkedin, Telegram), простий запис на консультацію",
                        "Показати гнучкість у форматах співпраці: від разової зустрічі до тривалої коуч-сесії, з можливістю адаптації під кожен запит",
                        "Реалізувати зручну навігацію, дизайн, який викликає довіру до експертки, повну адаптивність під мобільні пристрої",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751462927/desicion1_wbqsdb.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Фокусування на ключових повідомленнях на першому екрані: велике фото експертки з прямим зоровим контактом, великий шрифт, посилання на основні соціальні мережі для швидкої комунікації",
                                "Навігаційне меню приховане, як у мобільних версіях, щоб не розпорошувати увагу",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Використано брендований колір замовниці, доповнено кольоровою палітрою, що психологічно асоціюється з довірою та експертністю",
                                "Окремою секцією виділені два підходи до роботи, які використовує експертка. Ці блоки при скролі зближаються, щоб показати взаємодоповнення коучингу та рекрутингової експертизи",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751548850/decision2_kzgkna.webp",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751464167/decision3_t8gl7q.jpg",
                        },
                        {
                            text: [
                                "По всьому сайту використано символіку зростання: сходи в блоці з запитами та послугами - метафора розвитку, а також візуальна підказка, яким шляхом може пройти користувач",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Картки з пакетами послуг візуально розміщені поряд для зручного і швидкого порівняння, а також включають пояснення, які запити покриває кожен формат",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751470550/desicion4_dbjugs.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Реалізована інтеграція з сервісом Calendly для швидкого запису на первинну консультацію",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751471393/desicion5_x1ij9r.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751471393/desicion6_sfj9z0.jpg",
                        },
                        {
                            text: [
                                "Форма зворотного зв'язку підключена до Telegram-бота для зручності комунікації та збереження історії спілкування",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751474792/decision8_fxewcw.jpg",
                        },
                        {
                            text: [
                                "Додані посилання на соціальні мережі в хедері та футері - як альтернативний канал комунікації",
                                "На сайт додані юридичні документи: Політика конфіденційності та Договір публічної оферти, які обумовлюють правові аспекти співпраці та забезпечують прозорість взаємодії",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Лендінг адаптований під три типи екрану: мобільний, планшетний та десктопний, також додатково враховано балансування контенту для великоформатних екранів",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751475015/decision7_jymkng.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Візуальний <purple>концепт</purple> - <purple>фокус на</purple> м'якість, <purple>довіру</purple> та глибину",
                    description: [
                        "У дизайні поєднано декілька символічних візуальних ефектів: темний фон перегукується з секціями з водною текстурою, що створює відчуття глибини - як метафору для внутрішніх трансформацій, які відбуваються під час коучингу",
                        "Пом'якшення сприйняття досягнуто завдяки образам сходів, крапель, води, пісочного годинника - символів часу, зростання і занурення в себе",
                        'Секція, знайомства з експерткою включає в себе її цитату, що йде після блоку з морським фоном та утворює емоційний зв\'язок між змістом та дизайном. Фраза "Я не оцінюю, я допомагаю" візуально виділена, що підкреслює фокус на підтримку',
                    ],
                    video: "70RYEhjEafY",
                },

                {
                    title: "<purple>Анімації</purple> як <purple>інструмент</purple> присутності",
                    description: [
                        "Ефект друку тексту в онлайн-режимі в секції із запитами створює враження живого контакту - так, ніби користувачі самі звертаються до експертки зі своїми запитами",
                        'Секція "Про експертку" поєднує анімовану появу тексту, фото з теплими емоціями, а також сертифікати з даними про досвід - для формування відчуття залученості, довіри та експертності. Це дає користувачу побачити не просто експертку, а людину, яка «поруч» і справді розуміє його запити',
                    ],
                    video: "PStAu3Jmfrw",
                },
                {
                    title: "<purple>Відгуки</purple> - підкріплення <purple>довіри</purple>",
                    description: [
                        "Блок з відгуками реалізовано у форматі анімованого слайдера - для легшого сприйняття і візуального зацікавлення",
                        "Усі відгуки клієнтів не редаговані і супроводжуються ніками або іменами їх авторів з соцмереж, щоб підкреслити їхню справжність. Цей блок - не просто підтвердження, а соціальний доказ ефективності роботи коуча, який залишає емоційний слід",
                    ],
                    video: "qjd4TOPv9Rw",
                },
            ],
        },
        en: {
            name: "Liudmyla Hoida",
            siteView: "landing page",
            subtitle: "Landing page for a Coach",
            description: "",
            heroTitle: "Liudmyla Hoida",
            heroText: [
                "This project was created for a career consultant and coach - an expert with over 20 years of experience in the recruitment field. The website became the next step in the development of her professional path, focusing on individual coaching and supporting people through career transformations.",
                "It is a one-page resource that combines the functions of an online business card with tools for easy first contact with potential clients. The main goal of the landing page is to help the user understand what kinds of requests they can address, what services the expert provides, and what the cost of cooperation will be.",
            ],
            deadlines: {
                analysis: "2 weeks",
                design: "3 weeks",
                launch: "3 weeks",
                support: "on request",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Personal brand",
                    text: [
                        "Visually and stylistically align the website with the expert’s established presence on social media - including her color palette, tone of voice, and value framework",
                        "Design the page structure so that users immediately perceive not only her competence and personalized approach, but also her human side - through photos, working principles, and authentic client testimonials",
                    ],
                },
                {
                    icon: "light",
                    title: "Value",
                    text: [
                        "Highlight the core idea: coaching from an expert with recruitment experience is a combination of support and deep understanding of the market, change processes, and growth points",
                        "Show that the expert doesn’t work with a “career” in isolation, but with a person in a moment of transition — searching for a new job, emerging from stagnation, or discovering new directions for development",
                        "Convey a non-judgmental approach as the foundation of her interaction with clients",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Functionality",
                    text: [
                        "The website was designed to serve not just as a digital business card, but as a tool for initial contact",
                        "Provide multiple communication channels: direct messages via social media (LinkedIn, Telegram) and a simple consultation booking option",
                        "Showcase flexibility in collaboration formats - from a one-time session to long-term coaching, with the ability to adapt to each client’s request",
                        "Implement intuitive navigation, a design that builds trust in the expert, and full mobile responsiveness",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751462927/desicion1_wbqsdb.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Focus on key messages in the hero section: a large photo of the expert with direct eye contact, bold typography, and links to primary social media platforms for quick communication",
                                "The navigation menu is hidden, as in mobile versions, to minimize distraction",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "The expert’s branded color is used, complemented by a color palette that psychologically evokes trust and expertise",
                                "A separate section highlights the two approaches the expert uses in her work. As the user scrolls, these blocks move closer together to illustrate the complementarity of coaching and recruitment expertise",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751548850/decision2_kzgkna.webp",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751464167/decision3_t8gl7q.jpg",
                        },
                        {
                            text: [
                                "Symbolism of growth is used throughout the site: the staircase in the section with requests and services serves as a metaphor for development and a visual cue for the path the user may take",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Service package cards are placed side by side for easy and quick comparison, and each includes an explanation of which requests the format is designed to address",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751470550/desicion4_dbjugs.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Integrated with Calendly for quick booking of an initial consultation",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751471393/desicion5_x1ij9r.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751471393/desicion6_sfj9z0.jpg",
                        },
                        {
                            text: [
                                "The contact form is connected to a Telegram bot for convenient communication and to preserve the message history",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751474792/decision8_fxewcw.jpg",
                        },
                        {
                            text: [
                                "Links to social media are placed in the header and footer as alternative communication channels",
                                "Legal documents have been added to the site: the Privacy Policy and Public Offer Agreement define the legal aspects of cooperation and ensure transparency in communication",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "The landing page is adapted for three screen types - mobile, tablet, and desktop - with additional content balancing for large-format displays",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751475015/decision7_jymkng.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "Visual <purple>Concept</purple> - <purple>Focus on</purple> Softness, <purple>Trust</purple>, and Depth",
                    description: [
                        "The design incorporates several symbolic visual elements: a dark background echoes sections with a water texture, creating a sense of depth - a metaphor for the internal transformations that take place during coaching",
                        "The perception is softened through the use of imagery such as stairs, droplets, water, and an hourglass - symbols of time, growth, and introspection",
                        'The introduction section about the expert includes her quote, which follows a block with a sea-themed background and forms an emotional connection between content and design. The phrase "I don’t judge - I support" is visually emphasized, reinforcing the focus on care and guidance',
                    ],
                    video: "At48IVZ81Zc",
                },

                {
                    title: "<purple>Animations </purple> as <purple>a Tool</purple> of Presence",
                    description: [
                        'The typing animation in the "Requests" section creates the impression of live interaction - as if users are reaching out to the expert with their own questions',
                        'The "About the Expert" section combines animated text appearance, a warm and emotionally engaging photo, and certificates with experience details - all aimed at creating a sense of involvement, trust, and expertise. This allows the user to see not just a professional, but a person who feels "close" and truly understands their needs',
                    ],
                    video: "hcIJJCkDW78",
                },
                {
                    title: "<purple>Testimonials</purple> - Reinforcing <purple>Trust</purple>",
                    description: [
                        "The testimonial block is implemented as an animated slider to make the content more engaging and easier to absorb",
                        "All client reviews are unedited and accompanied by usernames or real names from social media, emphasizing their authenticity. This block is not just confirmation - it's social proof of the coach’s effectiveness that leaves an emotional impact",
                    ],
                    video: "83nil65Pyj4",
                },
            ],
        },
        pl: {
            name: "Liudmyla Hoida",
            siteView: "strona docelowa",
            subtitle: "Landing page dla coacha",
            description: "",
            heroTitle: "Liudmyla Hoida",
            heroText: [
                "Projekt został stworzony dla doradczyni zawodowej i coacha – ekspertki z ponad 20-letnim doświadczeniem w branży rekrutacyjnej. Strona internetowa stanowi kolejny krok w rozwoju jej ścieżki zawodowej, skoncentrowanej na indywidualnym coachingu wspierającym osoby w transformacjach kariery.",
                "Jest to jednostronicowy serwis, który łączy funkcje internetowej wizytówki z narzędziami umożliwiającymi wygodny pierwszy kontakt z potencjalnymi klientami. Głównym celem landing page’a jest pomoc użytkownikowi w zrozumieniu, z jakimi potrzebami może się zgłosić, jakie usługi oferuje ekspertka oraz jaki będzie koszt współpracy.",
            ],
            deadlines: {
                analysis: "2 tygodnie",
                design: "3 tygodnie",
                launch: "3 tygodnie",
                support: "na żądanie",
            },
            tasks: [
                {
                    icon: "brand",
                    title: "Marka osobista",
                    text: [
                        "Wizualnie i stylistycznie połączyć stronę z już ugruntowanym wizerunkiem eksperta w mediach społecznościowych: paleta kolorów, ton komunikacji, struktura wartości",
                        "Przemyśleć strukturę strony tak, aby użytkownik od razu dostrzegł nie tylko kompetencje i indywidualne podejście, ale także ludzką stronę ekspertki: zdjęcia, zasady pracy, prawdziwe opinie klientów",
                    ],
                },
                {
                    icon: "light",
                    title: "Wartość",
                    text: [
                        "Pokazać ideę kluczową: coaching od ekspertki z doświadczeniem w rekrutacji to połączenie wsparcia z głębokim zrozumieniem rynku, procesów zmian i punktów wzrostu",
                        "Pokazać, że ekspertka pracuje nie z „karierą”, lecz z człowiekiem w momencie zmian: poszukiwanie nowej pracy, wyjście ze stagnacji, odkrywanie nowych kierunków rozwoju",
                        "Odzwierciedlić nieoceniające podejście jako podstawy interakcji z klientami",
                    ],
                },
                {
                    icon: "functionality",
                    title: "Funkcjonalność",
                    text: [
                        "Strona internetowa miała służyć nie tylko jako wizytówka, ale jako narzędzie pierwszego kontaktu",
                        "Zapewnienie kilku kanałów komunikacji: bezpośrednie wiadomości w mediach społecznościowych (Linkedin, Telegram), prosta rejestracja na konsultacje",
                        "Wykazać elastyczność w formatach współpracy: od jednorazowego spotkania po długoterminową sesję coachingową, z możliwością dostosowania się do każdej prośby",
                        "Wdrożenie łatwej nawigacji, designu, który wzbudza zaufanie do eksperta i pełnej adaptacji do urządzeń mobilnych",
                    ],
                },
            ],
            decision: [
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751462927/desicion1_wbqsdb.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Skupienie się na kluczowych wiadomościach na pierwszym ekranie: duże zdjęcie eksperta z bezpośrednim kontaktem wzrokowym, duża czcionka, linki do głównych sieci społecznościowych w celu szybkiej komunikacji",
                                "Menu nawigacyjne jest ukryte, podobnie jak w wersjach mobilnych, aby nie rozpraszać uwagi",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Zastosowano kolor marki klienta, uzupełniony paletą kolorów, która psychologicznie kojarzy się z zaufaniem i wiedzą specjalistyczną",
                                "Dwa podejścia do pracy stosowane przez eksperta są wyróżnione w osobnej sekcji. Te bloki podczas przewijania zbliżają się do siebie, aby pokazać wzajemne dopełnianie się coachingu i ekspertyzy rekrutacyjnej",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751548850/decision2_kzgkna.webp",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751464167/decision3_t8gl7q.jpg",
                        },
                        {
                            text: [
                                "Symbolika wzrostu jest używana w całej stronie: schody w bloku z prośbami i usługami są metaforą rozwoju, a także wizualną wskazówką dotyczącą ścieżki, którą może podążać użytkownik",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Karty z pakietami usług są wizualnie umieszczone obok siebie w celu łatwego i szybkiego porównania, a także zawierają wyjaśnienie, jakie żądania obejmuje każdy format",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751470550/desicion4_dbjugs.jpg",
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            text: [
                                "Wdrożono integrację z usługą Calendly w celu szybkiego umówienia się na wstępną konsultację",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751471393/desicion5_x1ij9r.jpg",
                        },
                    ],
                    slideRight: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751471393/desicion6_sfj9z0.jpg",
                        },
                        {
                            text: [
                                "Formularz opinii jest połączony z botem Telegram, co ułatwia komunikację i zapisywanie historii komunikacji",
                            ],
                        },
                    ],
                },
                {
                    slideLeft: [
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751474792/decision8_fxewcw.jpg",
                        },
                        {
                            text: [
                                "Dodano linki do sieci społecznościowych w nagłówku i stopce jako alternatywny kanał komunikacji",
                                "Na stronie zostały dodane dokumenty prawne: Polityka Prywatności i Umowa o Ofercie Publicznej, które określają prawne aspekty współpracy i zapewniają przejrzystość interakcji",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Strona docelowa jest dostosowana do trzech typów ekranów: telefonu komórkowego, tabletu i komputera stacjonarnego, a także uwzględniono równoważenie treści dla dużych ekranów",
                            ],
                        },
                        {
                            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1751475015/decision7_jymkng.jpg",
                        },
                    ],
                },
            ],
            titleListVideo: [
                {
                    title: "<purple>Koncepcja </purple> wizualna - <purple>skupienie się na</purple> miękkości, <purple>zaufaniu</purple> i głębi",
                    description: [
                        "Projekt łączy w sobie kilka symbolicznych efektów wizualnych: ciemne tło odzwierciedla sekcje z teksturą wody, co tworzy poczucie głębi - jako metafora wewnętrznych przemian zachodzących podczas coachingu",
                        "Zmiękczenie percepcji osiąga się poprzez obrazy schodów, kropli, wody i klepsydry - symboli czasu, wzrostu i zanurzenia",
                        "Sekcja przedstawiająca ekspertkę zawiera jej cytat, który podąża za blokiem z morskim tłem i tworzy emocjonalne połączenie między treścią a projektem. Fraza „Nie oceniam, pomagam” jest wizualnie wyróżniona, podkreślając nacisk na wsparcie",
                    ],
                    video: "At48IVZ81Zc",
                },

                {
                    title: "<purple>Animacje</purple> jako <purple>narzędzie</purple> obecności",
                    description: [
                        "Efekt drukowania tekstu online w sekcji zapytań stwarza wrażenie kontaktu na żywo, tak jakby użytkownicy zwracali się do eksperta z własnymi zapytaniami",
                        'Sekcja "O ekspercie" łączy animowany tekst, zdjęcia z ciepłymi emocjami i certyfikaty z danymi o doświadczeniu, aby stworzyć poczucie zaangażowania, zaufania i wiedzy specjalistycznej. Pozwala to użytkownikowi zobaczyć nie tylko eksperta, ale osobę, która jest „blisko” i naprawdę rozumie jego potrzeby',
                    ],
                    video: "hcIJJCkDW78",
                },
                {
                    title: "<purple>Referencje</purple> budują <purple>zaufanie</purple>",
                    description: [
                        "Blok opinii jest zaimplementowany w formacie animowanego suwaka dla łatwiejszej percepcji i wizualnego zainteresowania",
                        "Wszystkie opinie klientów są nieedytowane i opatrzone pseudonimami lub nazwiskami ich autorów z mediów społecznościowych, aby podkreślić ich autentyczność. Ten blok nie jest tylko potwierdzeniem, ale społecznym dowodem skuteczności trenera, który pozostawia emocjonalny ślad",
                    ],
                    video: "83nil65Pyj4",
                },
            ],
        },
    },
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
            subtitle: "Landing page for a book author",
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
            subtitle: "Landing page for an IT Recruiter",
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
                '"Український театр" - це сучасний онлайн-майданчик, створений для підтримки українського театру в часи змін. Платформа об’єднує публікації, рецензії, афішу та аналітику, стаючи місцем зустрічі театру з глядачем. Редакція театрального медіа прагнула зробити контент доступнішим, а взаємодію з глядачами - живою та безперервною.',
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
                    title: "Цінність",
                    text: [
                        "Популяризувати діяльність Українського театру",
                        "Забезпечити регулярну публікацію аналітичного, критичного або культурно важливого контенту",
                        "Надати користувачам можливість стежити за життям театру, навіть якщо вони не відвідують вистави",
                        "Можливість стати співавтором публікацій на сайті, а також підтримка молодих авторів",
                    ],
                    icon: "light",
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
                {
                    title: "Користувацький досвід",
                    text: [
                        "Забезпечити зручну навігацію та швидкий доступ до актуального контенту",
                        "Підвищити взаємодію користувачів з сайтом та залученість аудиторії",
                        "Створити ефективну систему інформування про театральні події",
                        "Управління контентом та адміністрування сайту співробітниками редакції",
                    ],
                    icon: "people",
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
                        "Слайдер головних новин - візуальний акцент на актуальних подіях та матеріалах",
                        "Розділи контенту - окремі блоки для рецензій, інтерв’ю, історій, статей та журналів",
                        "Анотації та цитати - короткі описи до кожного матеріалу для швидкого ознайомлення",
                        "Промоблок журналів - виділений розділ для популяризації друкованих випусків",
                        "Футер з контактами - логотип, соцмережі, контактна інформація та згадка партнерів",
                    ],
                    video: "W8fQwxRJNUE",
                },
                {
                    title: "Особистий <purple>кабінет користувача</purple>",
                    description: [
                        "Редагування профілю - зміна імені, email, розсилок та пароля",
                        "Збережені та вподобані публікації - окремі категорії для швидкого доступу",
                        "Видалення акаунту - можливість повністю прибрати профіль",
                        "Перегляд збережених матеріалів - карточки публікацій із датою, тегами, вподобаннями",
                        "Підписка на оновлення - проста форма для email-сповіщень у футері",
                    ],
                    video: "nKWPYTlamDk",
                },
                {
                    title: "<purple>Навігація</purple> по контенту <purple>сайту</purple>",
                    description: [
                        "Слайдер головних новин - візуальний акцент на актуальних подіях з коротким описом та датою",
                        "Категоризація контенту - події, рецензії, інтерв'ю, історія, статті, журнали",
                        "База авторів та експертів - біографії, публікації, інтерв’ю",
                        "Розсилка оновлень - нові матеріали, новини театру, спецтеми",
                        "Інтеграція з соцмережами - поширення новин у Facebook, Twitter, Instagram",
                    ],
                    video: "dz_xV4pySrU",
                },
                {
                    title: "<purple>Цікаві</purple> елементи <purple>інтерфейсу</purple>",
                    description: [
                        "Пошук публікацій - швидкий доступ до потрібного матеріалу за ключовими словами без зайвих переходів між сторінками",
                        "Фільтр публікацій - можливість обрати тип матеріалу, автора, статус публікації та інші параметри для точного відбору контенту",
                        "Вибір дати - зручне встановлення початкової та кінцевої дати для пошуку або сортування публікацій за періодами",
                        "Підписка на оновлення - функція отримання актуальних новин і публікацій на електронну пошту",
                        "Легка відписка від розсилки - можливість у будь-який момент скасувати підписку без додаткових дій чи підтверджень",
                    ],
                    video: "vhOP774QkQM",
                },
                {
                    title: "<purple>Адмін-панель</purple> для керування <purple>публікаціями</purple> театрального порталу",
                    description: [
                        "Список публікацій - зручне відображення усіх матеріалів з візуалізацією статусу (опубліковано / чернетка) та швидким доступом до редагування",
                        "Фільтр і пошук - можливість сортувати публікації за датою, автором, статусом чи ключовим словом для швидкого знаходження потрібного матеріалу",
                        "Календар подій - вибір дати події під час створення чи редагування публікації для автоматичного сортування за актуальністю",
                        "Категорії та теги - додавання категорій (події, рецензії, інтерв’ю тощо) та хештегів для структурованого відображення контенту на сайті",
                        "Призначення автора - фіксація автора публікації для прозорості роботи редакційної команди",
                        "Редакторські нотатки - окреме поле для внутрішніх коментарів та інструкцій щодо матеріалу",
                    ],
                    video: "xA3MilF6cNU",
                },
                {
                    title: "<purple>Інтерфейс</purple> управління журналами <purple>театрального</purple> порталу",
                    description: [
                        "Список журналів - візуальне представлення випусків із обкладинками, роком видання та статусом публікації для швидкого огляду",
                        "Пошук та фільтрація - зручний пошук за назвою журналу, роком, статусом чи датою створення для оперативної роботи з архівом",
                        "Сортування за датою - можливість переглядати журнали у хронологічному порядку або за індивідуально обраними періодами",
                        "Редагування журналів - доступ до розширеного режиму редагування (як у публікаціях), де можна змінювати обкладинку, опис, рік випуску та інші дані",
                        "Статус публікації - позначення, якщо випуск опубліковано, та можливість змінити цей статус у кілька кліків",
                    ],
                    video: "5D04AJqTz0w",
                },
                {
                    title: "<purple>Адміністрування</purple> авторів, редакторів і <purple>підписників</purple>",
                    description: [
                        "Автори - можливість додавати нових авторів із зазначенням імені та завантаженням фото, а також видаляти їх при потребі",
                        "Редактори - гнучке керування редакторами: додавання нових, редагування та видалення даних за необхідності",
                        "Користувачі - перегляд і сортування списку користувачів, швидкий доступ до інформації про них та можливість видалення безпосередньо з цього розділу",
                        "Підписники - той самий функціонал, що й для редакторів (додавання, видалення), але додатково реалізована кнопка експорту даних для зручного завантаження списків підписників",
                    ],
                    video: "Bi2TNaVxD3o",
                },
                {
                    title: '<purple>Редагування</purple> розділу "Про нас" та <purple>контактів</purple>',
                    description: [
                        'Розділ "Про нас" - можливість додавати нових контактних осіб із зазначенням імені, посади, телефону, електронної пошти та фото. Також доступна функція видалення для актуалізації інформації',
                        'Контакти - це блок для заповнення загальної контактної інформації організації: телефонів, адрес електронної пошти та посилань на соцмережі. Для збереження даних передбачена окрема кнопка "Зберегти"',
                    ],
                    video: "A29QCmCyWLg",
                },
            ],
        },
        en: {
            name: "Ukrainian theater",
            siteView: "website",
            subtitle: `Website for the NGO "Ukrainian Theater"`,
            description: "descriptionId3",
            heroTitle: "<purple>Ukrainian</purple> Theater",
            heroText: [
                '"Ukrainian Theater" is a modern online platform created to support Ukrainian theater in times of change. This space brings together publications, reviews, event listings, and in-depth analysis - becoming a meeting point between theater and its audience. The editorial team behind this theater media project aimed to make content more accessible and audience engagement more vibrant and continuous.',
                "The project was brought to life by a dedicated team at every stage: from concept and market research to design, development, testing, and the integration of payment systems for collecting donations - all backed by ongoing technical support.",
            ],
            deadlines: {
                analysis: "2 months",
                design: "2 months",
                launch: "8 months",
                support: "ongoing",
            },
            tasks: [
                {
                    title: "Value",
                    text: [
                        "Promote the activities of Ukrainian Theater",
                        "Ensure regular publication of analytical, critical, and culturally significant content",
                        "Allow users to stay connected with theater life, even if they don’t attend performances",
                        "Offer the opportunity to co-author publications on the site and support emerging writers",
                    ],
                    icon: "light",
                },
                {
                    title: "Business processes",
                    text: [
                        "Provide tools for regular and independent content updates and management",
                        "Encourage support for the magazine’s editorial team through digital tools",
                        "Integrate subscription mechanisms, newsletters, along with access management of editors, users, subscribers, and publication authors",
                        "Optimize time and effort spent on content management and website administration",
                    ],
                    icon: "settings",
                },
                {
                    title: "User experience",
                    text: [
                        "Provide intuitive navigation and quick access to up-to-date content",
                        "Increase user interaction and audience engagement",
                        "Create an effective system for informing users about theater events",
                        "Enable editorial staff to manage content and administer the website",
                    ],
                    icon: "people",
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
                                "Implemented user-friendly site navigation with always-available search and multi-parameter filters",
                                "Organized publications into clear categories: Interviews, Reviews, Articles, Events, Historical Facts",
                                "Displaying the latest publications on the homepage helps quickly deliver relevant updates to users and boosts engagement with the site",
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
                                "Dynamic banners on the homepage highlight upcoming events and announcements",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Easy financial support through a donation button on the homepage and in the header",
                                "Users can subscribe to receive the latest publications by email - with the option to unsubscribe at any time",
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
                                "Users can sort events by relevance and easily share publications on social media",
                                "A personal account allows users to save and organize their favorite publications",
                                "Built-in search and filtering tools help quickly find the content they need",
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
                                "The admin panel includes the ability to create and send newsletters with the latest updates to site subscribers via email",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "The platform allows for user profile deletion when needed, as well as exporting the subscriber database",
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
                                "A full content management system is implemented for creating, editing, and deleting: publications, reviews, events, articles, and magazine issues",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Functionality is configured for adding, editing, and removing data related to authors, editors, and staff members",
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
                    title: "<purple>Publication</purple> Page",
                    description: [
                        "Main News Slider - visual highlight on current events and featured materials",
                        "Content Sections - dedicated blocks for reviews, interviews, stories, articles, and magazines",
                        "Annotations & Quotes - short descriptions for quick content previews",
                        "Magazine Promo Block - a featured section to promote printed issues",
                        "Footer with Contacts - with logo, social media links, contact info, and partner mentions",
                    ],
                    video: "W8fQwxRJNUE",
                },
                {
                    title: "<purple>User</purple> Account",
                    description: [
                        "Profile Editing - change name, email, newsletter preferences, and password",
                        "Saved & Liked Publications - organized into separate categories for quick access",
                        "Account Deletion - an option to permanently remove the user profile",
                        "Saved Content Preview - publication cards with date, tags, and likes",
                        "Email Subscription - a quick sign-up form in the footer for updates",
                    ],
                    video: "nKWPYTlamDk",
                },
                {
                    title: "Content <purple>Navigation</purple>",
                    description: [
                        "Main News Slider - a visual highlight oncurrent events with short descriptions and dates",
                        "Content Categorization - structured sections for events, reviews, interviews, history, articles, and magazines",
                        "Author & Expert Database - includes biographies, publications, and interviews",
                        "Update Newsletter - regular updates on new materials, theater news, and special topics",
                        "Social Media Integration - easy sharing of news on Facebook, Twitter, and Instagram",
                    ],
                    video: "dz_xV4pySrU",
                },
                {
                    title: "<purple>Notable</purple> Interface <purple>Features</purple>",
                    description: [
                        "Publication Search - quick access to relevant content using keywords, without unnecessary page-to-page navigation",
                        "Content Filter - select material type, author, publication status, and other parameters for precise content selection",
                        "Date Picker - easily set start and end dates to search or sort publications by time periods",
                        "Email Subscription - receive the latest news and publications directly to your inbox",
                        "Easy Unsubscribe - cancel your subscription at any time with no extra steps or confirmations",
                    ],
                    video: "vhOP774QkQM",
                },
                {
                    title: "<purple>Admin Panel</purple> for Managing Theater Portal <purple>Publications</purple>",
                    description: [
                        "Publication List - a convenient overview of all materials with visual status indicators (Published / Draft) and quick access to editing",
                        "Filter & Search - sort publications by date, author, status, or keyword for fast and efficient content management",
                        "Event Calendar - select event dates when creating or editing a publication to enable automatic sorting by relevance",
                        "Categories & Tags - assign categories (e.g., Events, Reviews, Interviews) and hashtags for structured content display on the site",
                        "Author Assignment - attribute each publication to an author for editorial transparency",
                        "Editorial Notes - a dedicated field for internal comments and editorial instructions",
                    ],
                    video: "xA3MilF6cNU",
                },
                {
                    title: "Magazine Management <purple>Interface</purple> for the <purple>Theater</purple> Portal",
                    description: [
                        "Magazine List - a visual display of issues with covers, publication year, and status for quick overview",
                        "Search & Filtering - easily search by magazine title, year, status, or creation date for efficient archive management",
                        "Date Sorting - view magazines in chronological order or by custom date ranges",
                        "Magazine Editing - access advanced editing mode (similar to publications) to update cover image, description, release year, and other details",
                        "Publication Status - clearly marked status if published with the ability to change it in just a few clicks",
                    ],
                    video: "5D04AJqTz0w",
                },
                {
                    title: "<purple>Administration</purple> of Authors, Editors, and <purple>Subscribers</purple>",
                    description: [
                        "Authors - add new authors by entering their name and uploading a photo; remove authors when needed",
                        "Editors - flexible editor management: add new editors, edit their details, or remove them as necessary",
                        "Users - view and sort the user list, quickly access user information, and delete users directly from this section",
                        "Subscribers - same functionality as for editors (add, delete), with an additional data export button for easy download of subscriber lists",
                    ],
                    video: "Bi2TNaVxD3o",
                },
                {
                    title: "<purple>Editing</purple> the “About Us” Section and <purple>Contact</purple> Information",
                    description: [
                        "About Us Section - add new contact persons by entering their name, position, phone number, email address, and uploading a photo. A delete option is available to keep the information up to date",
                        "Contacts - a dedicated block for entering the organization’s general contact details: phone numbers, email addresses, and social media links. A separate “Save” button is provided to store the updated information",
                    ],
                    video: "A29QCmCyWLg",
                },
            ],
        },
        pl: {
            name: "Ukraiński teatr",
            siteView: "website",
            subtitle: `Strona internetowa dla NGO "Ukraiński teatr"`,
            description: "descriptionId3",
            heroTitle: "<purple>Ukraiński</purple> teatr",
            heroText: [
                '"Ukraiński teatr" to nowoczesna platforma internetowa stworzona w celu wspierania ukraińskiego teatru w czasach zmian. Platforma łączy publikacje, recenzje, afisze i analizy, stając się miejscem spotkań teatru i widzów. Redakcja tego teatralnego medium dążyła do tego, by uczynić treści bardziej dostępnymi, a kontakt z publicznością - żywym i nieprzerwanym.',
                "Projekt został wdrożony przez zespół na wszystkich etapach: od pomysłu i analizy rynku po projektowanie, programowanie, testowanie i integrację systemów płatności do zbierania darowizn, wraz z dalszym wsparciem technicznym.",
            ],
            deadlines: {
                analysis: "2 miesiące",
                design: "2 miesiące",
                launch: "8 miesięcy",
                support: "na bieżąco",
            },
            tasks: [
                {
                    title: "Wartość",
                    text: [
                        "Promować działalność Ukraińskiego teatru",
                        "Zapewnienie regularnej publikacji treści analitycznych, krytycznych lub ważnych kulturowo",
                        "Umożliwienie użytkownikom śledzenia życia teatru,  nawet jeśli nie chodzą na spektakle",
                        "Możliwość współtworzenia publikacji na stronie oraz wsparcie dla młodych autorów",
                    ],
                    icon: "light",
                },
                {
                    title: "Procesy biznesowe",
                    text: [
                        "Zapewnienie narzędzi do regularnej i niezależnej aktualizacji i zarządzania treściami teatru",
                        "Stymulowanie wsparcia redakcji magazynu za pomocą narzędzi cyfrowych",
                        "Integracja mechanizmów subskrypcji, wysyłki i zarządzania prawami dostępu dla redaktorów, użytkowników, subskrybentów i autorów publikacji",
                        "Optymalizacja czasu i wysiłku związanego z zarządzaniem treścią i administrację strony",
                    ],
                    icon: "settings",
                },
                {
                    title: "Doświadczenie użytkownika",
                    text: [
                        "Zapewnienie łatwej nawigacji i szybkiego dostępu do odpowiednich treści",
                        "Zwiększenie interakcji użytkowników ze stroną internetową i zaangażowania odbiorców",
                        "Stworzenie skutecznego systemu informowania o wydarzeniach teatralnych",
                        "Zarządzanie treścią i administrowanie stroną przez zespół redakcyjny",
                    ],
                    icon: "people",
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
                                "Stworzono wygodną nawigację na stronie z zawsze dostępną wyszukiwarką i filtrowaniem według wielu parametrów",
                                "Publikacje zostały uporządkowane według kategorii: Wywiady, Recenzje, Artykuły, Wydarzenia, Fakty historyczne",
                                "Wyświetlanie najnowszych publikacji na stronie głównej pomaga szybko przekazać użytkownikowi informacje o aktualnych wydarzeniach i zwiększa interakcję ze stroną",
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
                                "Na stronie głównej umieszczono dynamiczne banery z zapowiedziami nadchodzących wydarzeń",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Umożliwiono łatwe wsparcie projektu finansowo poprzez przycisk do przekazywania darowizn na stronie głównej oraz w nagłówku",
                                "Użytkownik ma możliwość zasubskrybowania newslettera i otrzymywania najnowszych publikacji na e-mail, a także rezygnacji z subskrypcji",
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
                                "Dla wygody użytkownika stworzono możliwość sortowania wydarzeń według aktualności oraz funkcję udostępniania publikacji w mediach społecznościowych",
                                "Zrealizowano panel użytkownika, w którym można zapisywać i porządkować interesujące publikacje",
                                "Wbudowane funkcje wyszukiwania i filtrowania ułatwiają szybkie odnalezienie potrzebnych treści",
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
                                "Do panelu administracyjnego zintegrowano funkcję tworzenia newsletterów z najnowszymi wiadomościami, wysyłanych na adresy e-mail subskrybentów strony",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Funkcjonalność strony obejmuje możliwość usuwania profili w razie potrzeby oraz eksportowania bazy subskrybentów",
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
                                "Wdrożono mechanizmy tworzenia, edytowania i usuwania: publikacji, recenzji, wydarzeń, artykułów i magazynów",
                            ],
                        },
                    ],
                    slideRight: [
                        {
                            text: [
                                "Skonfigurowano funkcjonalność dodawania, usuwania i edytowania danych o: autorach, redaktorach, pracownikach",
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
                    title: "Strona <purple>publikacji</purple>",
                    description: [
                        "Slider najważniejszych wiadomości - wizualne wyróżnienie aktualnych wydarzeń i materiałów",
                        "Sekcje treści - oddzielne bloki na recenzje, wywiady, historie, artykuły i magazyny",
                        "Adnotacje i cytaty - krótkie opisy do każdego materiału dla szybkiego zapoznania się z treścią",
                        "Blok promujący magazyny - wydzielona sekcja służąca popularyzacji wydań drukowanych",
                        "Stopka z danymi kontaktowymi - logo, media społecznościowe, dane kontaktowe oraz wzmianka o partnerach",
                    ],
                    video: "W8fQwxRJNUE",
                },
                {
                    title: "Panel <purple>użytkownika</purple>",
                    description: [
                        "Edycja profilu - możliwość zmiany imienia, adresu e-mail, ustawień newslettera oraz hasła",
                        "Zapisane i polubione publikacje - oddzielne kategorie dla szybkiego dostępu",
                        "Usunięcie konta - możliwość całkowitego usunięcia profilu",
                        "Przegląd zapisanych materiałów - karty publikacji z datą, tagami i polubieniami",
                        "Subskrypcja aktualizacji - prosty formularz do powiadomień e-mailowych w stopce",
                    ],
                    video: "nKWPYTlamDk",
                },
                {
                    title: "<purple>Nawigacja</purple> po treściach na <purple>stronie</purple>",
                    description: [
                        "Slider najważniejszych wiadomości - wizualne wyróżnienie aktualnych wydarzeń z krótkim opisem i datą",
                        "Kategoryzacja treści - wydarzenia, recenzje, wywiady, historia, artykuły, magazyny",
                        "Baza autorów i ekspertów - biografie, publikacje, wywiady",
                        "Newsletter z aktualizacjami - nowe materiały, wiadomości teatralne, tematy specjalne",
                        "Integracja z mediami społecznościowymi - udostępnianie wiadomości na Facebooku, Twitterze, Instagramie",
                    ],
                    video: "dz_xV4pySrU",
                },
                {
                    title: "<purple>Ciekawe</purple> elementy <purple>interfejsu</purple>",
                    description: [
                        "Wyszukiwanie publikacji - szybki dostęp do potrzebnego materiału za pomocą słów kluczowych, bez zbędnych przejść między stronami",
                        "Filtr publikacji - możliwość wyboru typu materiału, autora, statusu publikacji oraz innych parametrów w celu dokładnego doboru treści",
                        "Wybór daty - wygodne ustawienie daty początkowej i końcowej do wyszukiwania lub sortowania publikacji według okresów",
                        "Subskrypcja aktualizacji - funkcja otrzymywania najnowszych wiadomości i publikacji na e-mail",
                        "Łatwa rezygnacja z subskrypcji - możliwość anulowania subskrypcji w dowolnym momencie bez dodatkowych działań czy potwierdzeń",
                    ],
                    video: "vhOP774QkQM",
                },
                {
                    title: "<purple>Panel administracyjny</purple> do zarządzania <purple>publikacjami</purple> na portalu teatralnym",
                    description: [
                        "Lista publikacji - wygodne wyświetlanie wszystkich materiałów z wizualizacją statusu (opublikowane / szkic) oraz szybki dostęp do edycji",
                        "Filtr i wyszukiwanie - możliwość sortowania publikacji według daty, autora, statusu lub słowa kluczowego w celu szybkiego znalezienia potrzebnego materiału",
                        "Kalendarz wydarzeń - wybór daty wydarzenia podczas tworzenia lub edytowania publikacji, aby automatycznie sortować je według aktualności",
                        "Kategorie i tagi - dodawanie kategorii (wydarzenia, recenzje, wywiady itp.) oraz hashtagów do strukturalnego wyświetlania treści na stronie",
                        "Przypisanie autora - przypisanie autora publikacji dla przejrzystości pracy zespołu redakcyjnego",
                        "Notatki redakcyjne - oddzielne pole do wewnętrznych komentarzy i instrukcji dotyczących materiału",
                    ],
                    video: "xA3MilF6cNU",
                },
                {
                    title: "<purple>Interfejs</purple> zarządzania magazynami na portalu <purple>teatralnym</purple>",
                    description: [
                        "Lista magazynów - wizualne przedstawienie wydań z okładkami, rokiem wydania i statusami publikacji dla szybkiego przeglądu",
                        "Wyszukiwanie i filtracja - wygodne wyszukiwanie według tytułu magazynu, roku, statusu lub daty utworzenia dla sprawnej pracy z archiwum",
                        "Sortowanie według daty - możliwość przeglądania magazynów w porządku chronologicznym lub według indywidualnie wybranych okresów",
                        "Edycja magazynów - dostęp do rozszerzonego trybu edycji (jak w publikacjach), gdzie można zmieniać okładkę, opis, rok wydania i inne dane",
                        "Status publikacji - oznaczenie, jeśli numer został opublikowany, oraz możliwość zmiany tego statusu w kilku kliknięciach",
                    ],
                    video: "5D04AJqTz0w",
                },
                {
                    title: "<purple>Administracja</purple> autorami, redaktorami i <purple>subskrybentami</purple>",
                    description: [
                        "Autorzy - możliwość dodawania nowych autorów z podaniem imienia i załadowaniem zdjęcia, a także usuwania ich w razie potrzeby",
                        "Redaktorzy - elastyczne zarządzanie redaktorami: dodawanie nowych, edytowanie oraz usuwanie danych w razie potrzeby",
                        "Użytkownicy - przeglądanie i sortowanie listy użytkowników, szybki dostęp do ich informacji oraz możliwość usunięcia bezpośrednio z tego działu",
                        "Subskrybenci - ta sama funkcjonalność, co dla redaktorów (dodawanie, usuwanie), ale dodatkowo zrealizowana funkcja eksportu danych dla wygodnego pobierania list subskrybentów",
                    ],
                    video: "Bi2TNaVxD3o",
                },
                {
                    title: '<purple>Edycja</purple> sekcji "O nas" i danych <purple>kontaktowych</purple>',
                    description: [
                        'Sekcja "O nas" - umożliwia dodawanie nowych osób kontaktowych z podaniem imienia, stanowiska, numeru telefonu, adresu e-mail oraz zdjęcia. Dostępna jest również funkcja usuwania w celu aktualizacji informacji',
                        'Kontakty - to blok do uzupełniania ogólnych danych kontaktowych organizacji: numerów telefonów, adresów e-mail oraz linków do mediów społecznościowych. Do zapisania danych służy oddzielny przycisk "Zapisz"',
                    ],
                    video: "A29QCmCyWLg",
                },
            ],
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
            siteView: "інтернет-магазин",
            subtitle: "Інтернет-магазин натуральних продуктів",
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
                    title: "Бізнес-процеси",
                    text: [
                        "Провести аналітику та запропонувати оптимальні рішення для втілення бізнес-процесів вирощування, продажу й доставки продукції",
                        "Оптимізувати бізнес-процеси, зокрема оформлення замовлення та доставки",
                        "Забезпечити надійний та стабільний процес оплати і автоматизувати облік покупців і замовлень",
                        "Налаштувати аналітику продажів",
                    ],
                    icon: "settings",
                },
                {
                    title: "Користувацький досвід",
                    text: [
                        "Підвищити лояльність постійних покупців та привернути увагу ЗМІ",
                        "Залучити нових покупців і збільшити продажі",
                        "Забезпечити відмінний досвід користувачів – як відвідувачів, так і постійних клієнтів",
                        "Додати функцію підписки на оновлення асортименту та сповіщення про початок сезону конкретного продукту",
                    ],
                    icon: "people",
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
                    title: "Business processes",
                    text: [
                        "Analyze and offer optimal solutions for the implementation of business processes for growing, selling and delivering products",
                        "Optimize business processes, including ordering and delivery",
                        "Ensure a reliable and stable payment process and automate customer and order accounting",
                        "Set up sales analytics",
                    ],
                    icon: "settings",
                },
                {
                    title: "User experience",
                    text: [
                        "Increase loyalty of regular customers and attract media attention",
                        "Attract new customers and increase sales",
                        "Provide an excellent user experience for both visitors and regular customers",
                        "Add a subscription function to updates of the assortment and notify you when the season for a particular product starts",
                    ],
                    icon: "people",
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
                    title: "Procesy biznesowe",
                    text: [
                        "Przeprowadzić analizę i zaproponować optymalne rozwiązania do realizacji procesów biznesowych związanych z uprawą, sprzedażą i dostawą produktów",
                        "Optymalizować procesy biznesowe, w tym składanie zamówień i dostawę",
                        "Zapewnić niezawodny i stabilny proces płatności oraz zautomatyzować ewidencję klientów i zamówień",
                        "Skonfigurować analitykę sprzedaży",
                    ],
                    icon: "settings",
                },
                {
                    title: "Doświadczenie użytkownika",
                    text: [
                        "Zwiększyć lojalność stałych klientów oraz przyciągnąć uwagę mediów",
                        "Pozyskać nowych klientów i zwiększyć sprzedaż",
                        "Zapewnić doskonałe doświadczenie użytkowników – zarówno odwiedzających, jak i stałych klientów",
                        "Dodać funkcję subskrypcji aktualizacji asortymentu oraz powiadomienia o rozpoczęciu sezonu danego produktu",
                    ],
                    icon: "people",
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
