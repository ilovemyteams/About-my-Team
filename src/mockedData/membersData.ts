export type MemberDataItemTranslation = {
    name: string;
    about: string;
    services: string;
    team: string;
};

export type SocialLinks = {
    linkedin: string;
    behance?: string;
    github?: string;
    telegram?: string;
    googleDrive?: string;
};

export type DataType = {
    id: string;
    projectId: string[];
    imageURL?: string;
    position: string;
    categoryName: string;
    pricePerHour?: string;
    projectsExperience: string[];
    socialLinks: SocialLinks;
    tools: string[];
};

export type MemberDataItemType = {
    data: DataType;
    ua: MemberDataItemTranslation;
    en: MemberDataItemTranslation;
    pl: MemberDataItemTranslation;
};

export const membersData: MemberDataItemType[] = [
    {
        data: {
            id: "SusannaSalataPM",
            projectId: ["1", "2", "3"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1O43w9-Ti3SwlLi4fO9Kl8-GwY1O1wpc0",
            position: "Product manager",
            categoryName: "manager",
            projectsExperience: [
                "ilovemyteam.online",
                "batatfarm.com",
                "theatermag.com.ua",
                "baza-trainee.tech",
            ],
            pricePerHour: "25",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/susanna-salata/",
                github: "https://github.com/Susanna-Salata",
                telegram: "https://t.me/Susanna_Salata",
                googleDrive:
                    "https://drive.google.com/drive/folders/1B1WBgmIX0vWCvLZKrqqsh5iwKYIRF-Gv?usp=sharing",
            },
            tools: [
                "SDLC",
                "Strategia",
                "Planning",
                "Budgeting",
                "Consulting",
                "Business Analysis",
                "Data Analysis",
                "A/B test",
            ],
        },
        ua: {
            name: "Сусанна Салата",
            about: "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services:
                "Консалтинг, аналіз та налаштування бізнес-процесів, стратегічне планування, бюджетування, управління проєктами та командами, розробка продуктів та антикризове управління проєктами та продуктами. Менторство для початківців в IT.",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Work should bring inspiration and satisfaction, not just money.",
            services:
                "Consulting, business process analysis and setup, strategic planning, budgeting, project and team management, product development, and crisis management for projects and products. Mentoring for beginners in IT.",
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: "Praca powinna dawać inspirację i satysfakcję, a nie tylko pieniądze.",
            services:
                "Konsulting, analiza procesów biznesowych, planowanie strategiczne, budżetowanie, zarządzanie projektami i zespołami, rozwój produktów. Mentoring dla początkujących w IT",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "MariiaPopova",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=16fccRTPiYw3lk-e2jddm8BCvD3KY6IhW",
            position: "Graphic Designer/ UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "14",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/mariia-popova-uiux",
                behance: "https://www.behance.net/64fee160",
                telegram: "https://t.me/MaraPopova",
            },
            tools: [
                "Graphic Design",
                "Figma",
                "Jira",
                "Procreate",
                "Adobe Photoshop",
            ],
        },
        ua: {
            name: "Марія Попова",
            about: "Що б ви не робили, робіть це з любов'ю. Зрештою, це відчується.",
            services:
                "Дизайн продуктів і веб-додатків, розробка логотипу, брендинг компанії, створення ілюстрацій. Медіа для соціальних мереж, типографіки, UX/UI дизайну та інфографіки.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Mariia Popova",
            about: "Whatever you do, do it with love. In the end, it will be felt.",
            services:
                "Product and web application design, logo development, company branding, and creation of illustrations. Media for social networks, typography, UX/UI design, and infographics.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Mariia Popova",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "SvitlanaKondratenko",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1LHJIjTws0sAAYnDztAepbuRq54OPydpH",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "10",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/svitlana-kondratenko-35b51228",
                github: "",
                telegram: "http://t.me/Svitlana_Kondr",
            },
            tools: [
                "BPMN 2.0",
                "SDLC",
                "User story",
                "Jira",
                "Confluence",
                "Trello",
                "Miro",
                "Figma",
                "Google Sheets/Docs",
                "Slack",
                "Teams",
            ],
        },
        ua: {
            name: "Світлана Кондратенко",
            about: `«Хтось має це розібратися?» - Я людина, яка розбирається!`,
            services:
                "Аналіз потреб клієнтів, аналіз ринку та конкурентів. Розробка, аналіз, організація та формалізація вимог. Написання технічної документації та історій користувачів. Знання SDLC, гнучких методологій та базові навички управління.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Svitlana Kondratenko",
            about: `"Someone needs to sort this out?" - I am the person who sorts it out! `,
            services:
                "Customer business needs analysis, market and competitor analysis. Development, analysis, organisation, and formalisation of requirements. Writing technical documentation, and user stories. Knowledge of SDLC, agile methodologies, and basic management skills.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Svitlana Kondratenko",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "VladShumkov",
            projectId: ["1", "2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1lxHatnNTUQSpKzf0cuAAMOLW_ym2DkC_",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online", "batatfarm.com"],
            pricePerHour: "20",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/vladyslav-shumkov/",
                github: "https://github.com/IiIymik",
                telegram: "https://t.me/IiIymik",
            },
            tools: [
                "Python",
                "JavaScript",
                "TypeScript",
                "React",
                "NextJS",
                "MongoDB",
                "PosgreSQL",
                "CI/CD",
                "Docker",
                "DevOps",
                "HTML",
                "CSS",
            ],
        },
        ua: {
            name: "Влад Шумков",
            about: "Мій акцент на чіткій комунікації гарантує, що кожен проект відповідає суворим стандартам і очікуванням клієнтів.",
            services:
                "Розробка сайтів будь-якої складності, інтернет-магазинів, посадкових сторінок. Наставництво для початківців Frontend-розробників",
            team: "Смачно! на селі",
        },
        en: {
            name: "Vlad Shumkov",
            about: "My emphasis on clear communication ensures that every project meets exacting standards and client expectations.",
            services:
                "Development of websites of any complexity, e-commerce stores, and landing pages. Mentoring for beginner Frontend Developers",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Vlad Shumkov",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "IhorDronishynets",
            projectId: ["1", "2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=14EYFUfVxF8bUaTQrS0lX0rzgVTJO-CG9",
            position: "Fullstack developer",
            categoryName: "developer",
            projectsExperience: [
                "ilovemyteam.online",
                "batatfarm.com",
                "baza-trainee.tech",
                //"https://murrfecto.site/",
            ],
            pricePerHour: "18",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ihordrn/",
                github: "https://github.com/Mazayw",
                telegram: "https://t.me/ihordrn",
            },
            tools: [
                "CI/CD",
                "Docker",
                "DevOps",
                "NextJS",
                "TypeScript",
                "JavaScript",
                "MongoDB",
                "PosgreSQL",
                "Figma",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "HTML",
                "CSS",
                "React",
            ],
        },
        ua: {
            name: "Ігор Дронішинець",
            about: "",
            services:
                "Розробка сайту повного циклу від створення логотипу та брендбуку до випуску продукції та передачі прав доступу замовнику. Графічний дизайн, розробка логотипу та фірмового стилю, виготовлення поліграфічної продукції, дизайн етикетки та упаковки, зовнішня реклама.",
            team: "I Love My Team",
        },
        en: {
            name: "Ihor Dronishynets",
            about: "",
            services:
                "Full-cycle website development from logo creation and brand book to production release and transfer of access rights to the customer. Graphic design, logo, and corporate identity development, printed matter production, label and packaging design, and outdoor advertising.",
            team: "I Love My Team",
        },
        pl: {
            name: "Ihor Dronishynets",
            about: "",
            services:
                "Pełny cykl rozwoju strony internetowej od logo i brandingu do wydania produktu i przekazania praw dostępu klientowi.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "IrynaStoliarova",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1wTpwfwGEQK2JHmyY7rJaZgJCqWyEcXM-",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online", "greyplaza.com.ua"],
            pricePerHour: "15",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/iryna-stoliarova",
                behance: "https://www.behance.net/iryna_stoliarova",
                telegram: "https://t.me/iryna_stoliarova",
            },
            tools: ["Figma", "Jira", "Adobe Photoshop", "Adobe Illustrator"],
        },
        ua: {
            name: "Ірина Столярова",
            about: "Хороший дизайн, в першу чергу, повинен вирішувати проблеми.",
            services:
                "Я надаю повний спектр послуг з розробки дизайну продуктів, включаючи дослідження ринку, аналіз конкурентів, дослідження користувачів, інформаційну архітектуру, та інтерактивні прототипи. ",
            team: "I Love My Team",
        },
        en: {
            name: "Iryna Stoliarova",
            about: "Good design, first of all, needs to solve problems.",
            services:
                "I’ve been providing the full design service for products, including market research, competitor analysis, user research, information architecture, concepts, interactive prototypes.",
            team: "I Love My Team",
        },
        pl: {
            name: "Iryna Stoliarova",
            about: "Dobry projekt powinien przede wszystkim rozwiązywać problemy.",
            services:
                "Zapewniam pełen zakres usług projektowania produktów, w tym badania rynku, analizę konkurencji, badania użytkowników, architekturę informacji i interaktywne prototypy.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "AnastasiiaNazarenko",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1RacOw9P_MUIelOTWaYpGzfT4ECV4gjrR",
            position: "Graphic Designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/anastasiya-nazarenko-a7aa4421b/",
                behance: "https://www.behance.net/nazarenko_anastasiya",
                telegram: "https://t.me/NazarenkoAnastasiya",
            },
            tools: [
                "figma",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "After Effects",
                "Jira",
            ],
        },
        ua: {
            name: "Анастасія Назаренко",
            about: "Дизайнер - це стратег з почуттям прекрасного.",
            services:
                "Розробка логотипів, брендинг компанії, малювання ілюстрацій, створення простих анімацій. Медіа для соціальних мереж, типографіки, UX/UI дизайну та інфографіки.",
            team: "I Love My Team",
        },
        en: {
            name: "Anastasiia Nazarenko",
            about: "Designer is a planner with a sense of beauty",
            services:
                "Development of logos, company branding, drawing illustrations, and creating simple animations. Media for social networks, typography, UX/UI design, and infographics.",
            team: "I Love My Team",
        },
        pl: {
            name: "Anastasiia Nazarenko",
            about: "Projektant to strateg z poczuciem piękna.",
            services:
                "Projektowanie logo, branding firmy, tworzenie ilustracji lub prostych animacji, obsługa portali społecznościowych, typografia, znajomość projektowania UX/UIinfografiki",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "EugeneSerdiuk",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1Me_DV0bkJvBLGxPBQbrmGjS5uK-VcW8z",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "7",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/eugene-serdyuk/",
                github: "https://github.com/Gituservn",
                telegram: "",
            },
            tools: [
                "JavaScript",
                "TypeScript",
                "React",
                "NextJS",
                "NodeJs",
                "ReduxJS",
                "MongoDB",
                "PosgreSQL",
                "HTML",
                "CSS",
            ],
        },
        ua: {
            name: "Євген Сердюк",
            about: "",
            services:
                "Розробка та оформлення веб-сторінок за допомогою HTML, CSS і JavaScript з увагою до семантики та реагування на різні розміри екрана. Створення інтерактивних та динамічних інтерфейсів за допомогою React та Next.js. Розробка бекенда за допомогою Node.js і NestJS.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Eugene Serdiuk",
            about: "",
            services:
                "Development and styling of web pages using HTML, CSS, and JavaScript with attention to semantics and responsiveness to different screen sizes. Creation of interactive and dynamic interfaces using React and Next.js. Backend development using Node.js and NestJS.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Eugene Serdiuk",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "IrynaTrynkal",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1V1LCyS8p91R7Py1swWeShuAymmBNn0I0",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "10",
            socialLinks: {
                linkedin: "http://linkedin.com/in/iryna-trynkal-41542311a",
                github: "https://github.com/IraMira333",
                telegram: "https://t.me/iramira333",
            },
            tools: [
                "HTML",
                "CSS",
                "Javascript",
                "React",
                "Next.JS",
                "TypeScript",
                "Node.js",
            ],
        },
        ua: {
            name: "Ірина Тринкаль",
            about: "Можливо все, на неможливе просто потрібно більше часу.",
            services:
                "Розробка та оформлення веб-сторінок за допомогою HTML, CSS і JavaScript з акцентом на семантику та реакцію на різні розміри екрана. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних додатків за допомогою JavaScript і Node.js. Створення та керування серверними API для забезпечення зв’язку між зовнішнім інтерфейсом і сервером. Впровадження автентифікації користувачів і контролю доступу для забезпечення безпеки програми. Інтеграція зовнішніх і бекенд-компонентів для створення єдиної функціональної програми.",
            team: "I Love My Team",
        },
        en: {
            name: "Iryna Trynkal",
            about: "Anything is possible, the impossible just takes longer.",
            services:
                "Development and styling of web pages using HTML, CSS, and JavaScript with a focus on semantics and responsiveness to different screen sizes. Creation of interactive and dynamic interfaces using the React library. Development of server applications using JavaScript and Node.js. Creation and management of backend APIs to ensure communication between frontend and server. Implementation of user authentication and access control to ensure application security. Integration of frontend and backend components to create a unified, functioning application.",
            team: "I Love My Team",
        },
        pl: {
            name: "Iryna Trynkal",
            about: "Wszystko jest możliwe, niemożliwe wymaga tylko więcej czasu.",
            services:
                "Projektowanie i tworzenie stron internetowych przy użyciu HTML, CSS i JavaScript z uwzględnieniem najlepszych praktyk. Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu biblioteki React. Tworzenie aplikacji po stronie serwera przy użyciu JavaScript i Node.js. Tworzenie i zarządzanie backendowymi interfejsami API w celu zapewnienia komunikacji między frontendem a serwerem. Wdrażanie uwierzytelniania użytkowników i przyznawanie praw dostępu w celu zapewnienia bezpieczeństwa dla aplikacji. Łączenie komponentów front-end i back-end w celu stworzenia pojedynczej, działającej aplikacji.",
            team: "I Love My Team",
        },
    },
    // {
    //     data: {
    //         id: "NataliiaPashchenko",
    //         projectId: ["1"],
    //         imageURL:
    //             "https://drive.google.com/uc?export=view&id=1N0oakYRn0f1YOAnieUE-adpZxotiolx6",
    //         position: "Fullstack Developer",
    //         categoryName: "developer",
    //         projectsExperience: ["https://www.website.ua"],
    //         pricePerHour: "",
    //         socialLinks: {
    //             linkedin:
    //                 "https://www.linkedin.com/in/nataliia-pashchenko-frontenddeveloper/",
    //             github: "https://github.com/NataPas2021",
    //             telegram: "https://t.me/NataFFFenka",
    //         },
    //         tools: [
    //             "React",
    //             "Next.js",
    //             "Node.js",
    //             "MongoDB",
    //             "Javascript",
    //             "Typescript",
    //             "Redux Toolkit",
    //             "HTML",
    //             "CSS",
    //             "Postman",
    //             "Jira",
    //             "Trello",
    //         ],
    //     },
    //     ua: {
    //         name: "Наталія Пащенко",
    //         about: "Можливо досягти чого завгодно, потрібно лише знайти правильний шлях",
    //         services: "Тут буде шось таки написано",
    //         team: "I Love My Team",
    //     },
    //     en: {
    //         name: "Nataliia Pashchenko",
    //         about: "All is possible, you just need to find the right way",
    //         services: "Text in en",
    //         team: "I Love My Team",
    //     },
    //     pl: {
    //         name: "Nataliia Pashchenko",
    //         about: "Wszystko jest możliwe, trzeba tylko znaleźć właściwą drogę",
    //         services: "There will be text in Polish",
    //         team: "I Love My Team",
    //     },
    // },
    {
        data: {
            id: "OlenaPosternak",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=10Nsf6MskUIsOC-yG4-cfv69lG8jRlyRb",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: [
                "ilovemyteam.online",
                "cosmith.io",
                "kuharskyivulyk.com.ua",
            ],
            pricePerHour: "10",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/posternak-olena/",
                github: "https://github.com/OlenaPosternak",
                telegram: "https://t.me/Posternak_Olena",
            },
            tools: [
                "React",
                "NextJS",
                "TypeScript",
                "JavaScript",
                "Tailwind",
                "MUI",
                "MongoDB",
                "Node.js",
                "HTML",
                "CSS",
            ],
        },
        ua: {
            name: "Олена Постернак",
            about: "Дрібниці важливі. Часто саме вони роблять життя комфортнішим.",
            services:
                "Спеціалізуюсь на розробці веб-додатків, з акцентом на семантику та реакцію на різні розміри екрану. Я створюю інтерактивні програми, використовуючи різні фреймворки та бібліотеки JavaScript. Моя головна мета — надати користувачам комфортні та зручні веб-додатки.",
            team: "I Love My Team",
        },
        en: {
            name: "Olena Posternak",
            about: "Small things matter. It’s often they, that make life more comfortable.",
            services:
                "I specialize in developing web applications with a focus on semantics and responsiveness to different screen sizes. I create interactive applications using various JavaScript frameworks and libraries. My primary goal is to provide users with a comfortable and convenient web application experience.",
            team: "I Love My Team",
        },
        pl: {
            name: "Olena Posternak",
            about: "Małe rzeczy są ważne. Często sprawiają, że życie staje się wygodniejsze.",
            services:
                "Specjalizuję się w tworzeniu aplikacji internetowych, biorąc pod uwagę najlepsze praktyki. Tworzę interaktywne aplikacje przy użyciu różnych frameworków i bibliotek JavaScript. Moim głównym celem jest zapewnienie użytkownikom wygodnego i komfortowego korzystania z aplikacji internetowych.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "OlgaMykhailova",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1vmhr46iyL0MySdSFi1KQW19qeQJIwQ1b",
            position: "FrontEnd Developer",
            categoryName: "developer",

            projectsExperience: [
                "ilovemyteam.online",
                "greyplaza.com.ua",
                "kuharskyivulyk.com.ua",
            ],

            pricePerHour: "10",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/olgamykhailova/",
                github: "https://github.com/OlgaMykhailova",
                telegram: "https://t.me/Olya_Kaktusya",
            },
            tools: [
                "React",
                "NextJS",
                "TypeScript",
                "JavaScript",
                "Tailwind",
                "React Native",
                "Node.js",
                "MongoDB",
                "HTML",
                "CSS",
            ],
        },
        ua: {
            name: "Ольга Михайлова",
            about: "Люблю знаходити елегантні рішення для складних задач.",
            services:
                "Створення зручних і ефективних для бізнесу веб-додатків різної складності. Зосередьтеся на поєднанні максимальної функціональності та естетики для досягнення бездоганних результатів.",
            team: "I Love My Team",
        },
        en: {
            name: "Olga Mykhailova",
            about: "I enjoy finding elegant solutions to difficult tasks.",
            services:
                "Creation of user-friendly and business-effective web applications of varying complexity. Focus on combining maximum functionality and aesthetics to achieve impeccable results.",
            team: "I Love My Team",
        },
        pl: {
            name: "Olga Mykhailova",
            about: "Lubię znajdować eleganckie rozwiązania złożonych problemów.",
            services:
                "Moim celem jest tworzenie aplikacji internetowych, które są bardzo łatwe w obsłudze i bardzo efektywne biznesowo. Staram się tworzyć produkty o różnym poziomie złożoności, które zapewniają nie tylko funkcjonalność, ale także estetykę. Moje podejście polega na pomaganiu klientom w osiąganiu najlepszych wyników poprzez łączenie maksymalnej użyteczności i atrakcyjnego wyglądu w każdym projekcie.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "KaterynaRubanik",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1Hl4YyM_odWo_I1ZUPSZ_q8RZusxeajCH",
            position: "QA engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online", "baza-trainee.tech"],
            pricePerHour: "5",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/kateryna-rubanik-6133a6224/",
                telegram: "https://t.me/R_Katrine",
                github: "",
            },
            tools: [
                "Postman",
                "Swagger",
                "Chrome DevTools",
                "SQL",
                "GitHub",
                "VSCode",
                "Jira",
                "Trello",
                "Testlink",
                "HTML",
                "CSS",
            ],
        },
        ua: {
            name: "Катерина Рубанік",
            about: "QA-інженер з досвідом у тестуванні ПЗ. Володію навичками тестування, аналізу та виявлення помилок для забезпечення бездоганної якості продукту",
            services:
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування APIСтворення тестової документації (плани тестування, чек-листи, тестові випадки, звіти про помилки). Проведення веб/мобільного тестування, тестування API.",
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Rubanik",
            about: "QA engineer with experience in software testing. I have the skills to test, analyze and identify errors to ensure flawless product quality.",
            services:
                "Creation of test documentation (test plan, checklists, test cases, bug reports). Conducting web/mobile testing, API testing.Creation of test documentation (test plans, checklists, test cases, bug reports). Conducting web/mobile testing, API testing.",
            team: "I Love My Team",
        },
        pl: {
            name: "Kateryna Rubanik",
            about: "QA Inżynier z doświadczeniem w testowaniu oprogramowania. Posiadam umiejętności testowania, analizowania i wykrywania błędów w celu zapewnienia nienagannej jakości produktu",
            services:
                "Tworzenie dokumentacji testów (plan testów, listy kontrolne, przypadki testowe, raporty błędów). Wykonanie testów internetowych/mobilnych, testów API.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "KaterynaPogrebna",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1nCpjMU476VbcnV3IrejBUZV0hzQWBVuy",
            position: "QA engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/katerynapogrebna",
                github: "https://github.com/KaterynaPogrebna/QA_Portfolio/tree/416fd293cdd4fac83f5101e6e5768c52188af7a6/API",
                telegram: "https://t.me/ek_kat",
                googleDrive:
                    "https://drive.google.com/drive/folders/1AtVB7EfFCwlPvOVaLdxYSC8Clo7Hp-rN?usp=sharing",
            },
            tools: [
                "Postman",
                "Fiddler",
                "SQL",
                "Chrome DevTools",
                "JMeter",
                "Testomat.io",
                "Testlink",
                "Redmine",
                "VS Code",
                "WordPress",
                "CS-Cart",
                "HTML",
                "CSS",
                "REST API",
                "JSON",
                "Jira",
                "Trello",
                "Atlassian",
                "Exploratory Testing Chrome Extension",
            ],
        },
        ua: {
            name: "Катерина Погребна",
            about: "Орієнтований на результат QA-інженер з досвідом тестування понад 2 роки, зокрема спеціалізується на платформах роздрібної торгівлі в Інтернеті, веб-додатках і системах обміну повідомленнями. ",
            services:
                "Ручне функціональне та нефункціональне тестування. Тестування UI/UX, API, баз даних і продуктивності. Тестування вимог, аналіз середовища, міжплатформне тестування, дослідження продукту, аналіз домену, тестування ролей доступу, пошукове тестування, регресійне тестування. Документація: історія користувача, план тестування, стратегія тестування, контрольний список, тестовий приклад, звіт про помилку, звіт про тестування.",
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Pogrebna",
            about: "Result-oriented QA engineer with over 2 years of testing experience, specializing in online retail platforms, web applications, and messaging systems. ",
            services:
                "Manual functional and non-functional testing. Testing UI/UX, API, databases, and performance. Requirements testing, environment analysis, cross-platform testing, product research, domain analysis, access role testing, exploratory testing, regression testing. Documentation: User Story, Test Plan, Test Strategy, Checklist, Test Case, Bug Report, Test Report.",
            team: "I Love My Team",
        },
        pl: {
            name: "Kateryna Pogrebna",
            about: "Zorientowany na wyniki inżynier QA z ponad 2-letnim doświadczeniem w testowaniu, specjalizujący się w internetowych platformach sprzedaży detalicznej, aplikacjach internetowych i systemach przesyłania wiadomości. ",
            services:
                "Manualne testowanie funkcjonalne i niefunkcjonalne. Testowanie UI/UX, API, bazy danych i wydajności. Testowanie wymagań, analiza środowiska, testowanie integracyjne, badanie produktu, analiza domeny, testowanie ról i dostępów, testowanie eksploarycjne, testowanie regresyjne. Dokumentacja: User Stories, Plan testów, Strategia testów, Lista kontrolna, Przypadki testowe, Raport błędów, Raport z testów.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "DariaCherviakova",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=18zah41aiSfjQTae2kVeE_ABnfmUqQ3mK",
            position: "Project Manager/ Scrum Master",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://linkedin.com/in/dari-cherviakova-3a521a27b",
                telegram: "https://t.me/Dari_Chap",
            },
            tools: [
                "Jira",
                "Confluence",
                "Trello",
                "Google Sheets/Docs",
                "Slack",
                "Microsoft Teams",
                "Miro",
                "Figma",
                "Easy Retro",
                "Gantt Chart",
            ],
        },
        ua: {
            name: "Дар'я Червякова",
            about: "Юніор Project Manager/ Scrum Master з прагненням до професійного зростання. Керую процесом, забезпечую ефективну комунікацію та виконання цілей.",
            services:
                "Надаю послуги як юніор Project Manager. Координую та сприяю виконанню проектів у відповідності до методології Scrum.",
            team: "I Love My Team",
        },
        en: {
            name: "Daria Cherviakova",
            about: "Junior Project Manager/ Scrum Master with a desire for professional growth. I manage the process, ensure effective communication and fulfillment of goals.",
            services:
                "I provide services as a junior Project Manager. I coordinate and facilitate the implementation of projects in accordance with the Scrum methodology.",
            team: "I Love My Team",
        },
        pl: {
            name: "Daria Cherviakova",
            about: "Junior Project Manager/ Scrum Master z chęcią rozwoju zawodowego. Zarządzam procesem, zapewniam efektywną komunikację i realizację celów.",
            services:
                "Świadczę usługi jako Młodszy Kierownik Projektu. Koordynuję i ułatwiam realizację projektów zgodnie z metodologią Scrum.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "SusannaSalataBA",
            projectId: [],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1O43w9-Ti3SwlLi4fO9Kl8-GwY1O1wpc0",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: [
                "ilovemyteam.online",
                "batatfarm.com",
                "theatermag.com.ua",
                "baza-trainee.tech",
            ],
            pricePerHour: "25",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/susanna-salata/",
                github: "https://github.com/Susanna-Salata",
                telegram: "https://t.me/Susanna_Salata",
                googleDrive:
                    "https://drive.google.com/drive/folders/1B1WBgmIX0vWCvLZKrqqsh5iwKYIRF-Gv?usp=sharing",
            },
            tools: [
                "BPMN 2.0",
                "SDLC",
                "User story",
                "Jira",
                "Trello",
                "Confluence",
                "Slack",
                "Figma",
                "Miro",
                "Google Sheets/Docs",
                "SQL",
                "Python",
            ],
        },
        ua: {
            name: "Сусанна Салата",
            about: "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services:
                "Аналіз потреб клієнтів, аналіз ринку та конкурентів, а також аналіз маркетингових і виробничих даних. Розробка, аналіз, організація та формалізація вимог. Управління вимогами, координація розробників і зацікавлених сторін. Аналіз та управління ризиками. Менторство для початківців в ІТ.",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Work should bring inspiration and satisfaction, not just money.",
            services:
                "Customer business needs analysis, market and competitor analysis, and analysis of marketing and production data. Development, analysis, organization, and formalization of requirements. Requirements management, developer and stakeholder coordination. Risk analysis and management. Mentoring for IT beginners.",
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: "Praca powinna dawać inspirację i satysfakcję, a nie tylko pieniądze.",
            services: "",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "OlhaKuchalska",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1bvQXDyYD1PZdGyBPKszt-ukvB1OL2NqX",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/olha-kuchalska",
                telegram: "https://t.me/o_kuchalska",
            },
            tools: [
                "Jira",
                "Confluence",
                "Google Sheets/Docs.",
                "UML",
                "BPMN notations",
                "Draw.io",
                "Visio",
                "Lucidchart",
                "Figma",
            ],
        },
        ua: {
            name: "Ольга Кучальська",
            about: "",
            services:
                "Аналіз потреб бізнесу клієнтів. Аналіз даних. Аналіз ринку та конкурентів. Розробка, аналіз, організація та формалізація вимог. Управління вимогами між розробниками та зацікавленими сторонами. Написання технічної документації та історій користувачів. Базові навички тестування та знання SQL. Розуміння SDLC, гнучких методологій та базових навичок управління. Відмінні комунікативні навички.",
            team: "I Love My Team",
        },
        en: {
            name: "Olha Kuchalska",
            about: "",
            services:
                "Customer business needs analysis. Data analysis. Market and competitor analysis. Development, analysis, organisation, and formalisation of requirements. Requirements management between developers and stakeholders. Writing technical documentation and user stories. Basic testing skills and knowledge of SQL. Understanding of SDLC, agile methodologies, and basic management skills. Excellent communication skills.",
            team: "I Love My Team",
        },
        pl: {
            name: "Olha Kuchalska",
            about: "h",
            services:
                "Analiza potrzeb biznesowych klienta. Analiza danych. Analiza rynku i konkurencji. Opracowywanie, analizowanie, organizowanie i formułowanie wymagań. Zarządzanie wymaganiami pomiędzy programistami i interesariuszami. Pisanie dokumentacji technicznej, historii użytkownika. Podstawowe umiejętności testowania i znajomość SQL. Znajomość SDLC, metodyk zwinnych i podstaw zarządzania. Doskonałe umiejętności komunikacyjne.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "DenisSlivinskyi",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=19t3e6QnD3Xm5Pwtq5NRdElfN5OAr9GB3",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["batatfarm.com", "zolochivska.com.ua"],
            pricePerHour: "7",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/denis-slivinskyi/",
                github: "https://github.com/Denis-isnotavailable",
                telegram: "https://t.me/d_e_n_i_s_s_s_s",
            },
            tools: [
                "JavaScript",
                "TypeScript",
                "React",
                "NextJS",
                "NodeJs",
                "ReduxJS",
                "MongoDB",
                "PosgreSQL",
                "Jira",
                "Postman",
                "Figma",
                "Git/GitHub",
                "HTML",
                "CSS",
            ],
        },
        ua: {
            name: "Денис Слівінський",
            about: "Справжня дурість щоразу перемагає штучний інтелект",
            services:
                "Розробка та оформлення веб-сторінок за допомогою HTML, CSS і JavaScript з акцентом на семантику та реакцію на різні розміри екрана. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних додатків за допомогою JavaScript і Node.js.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Denis Slivinskyi",
            about: "Real stupidity beats artificial intelligence every time",
            services:
                "Development and styling of web pages using HTML, CSS, and JavaScript with a focus on semantics and responsiveness to different screen sizes. Creation of interactive and dynamic interfaces using the React library. Development of server applications using JavaScript and Node.js.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Denis Slivinskyi",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "VolodymyrDehtiarev",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1nfCVkBnKMTCaP8p504qw3kUGv4i_nl4i",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["batatfarm.com", "zolochivska.com.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/volodymyr-dehtiarev",
                github: "https://github.com/VladimirDegt",
                telegram: "https://t.me/VladimirDegtr",
            },
            tools: [
                "React",
                "Redux",
                "NextJs",
                "NestJS",
                "PosgreSQL",
                "MongoDB",
                "TypeScript",
                "CI/CD",
                "Docker",
            ],
        },
        ua: {
            name: "Володимир Дегтярев",
            about: "Нічого не вийде, якщо ви цього не зробите",
            services:
                "Розробка та оформлення веб-сторінок за допомогою HTML, CSS і JavaScript з акцентом на семантику та реакцію на різні розміри екрана. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних додатків за допомогою JavaScript і Node.js.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Volodymyr Dehtiarev",
            about: "Nothing will work unless you do",
            services:
                "Development and styling of web pages using HTML, CSS, and JavaScript with a focus on semantics and responsiveness to different screen sizes. Creation of interactive and dynamic interfaces using React and Next.js. Backend development using Node.js and NestJS. ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Volodymyr Dehtiarev",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "OlenaChornobryvets",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1dgTU9cl1a02ZoC35oCDbjnANSX_HX0kY",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "10",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/olenachornobryvets",
                github: "https://github.com/alen8d",
                telegram: "",
            },
            tools: [
                "Postman",
                "SQL",
                "Jira",
                "Azure DevOps",
                "Git",
                "DevTools",
            ],
        },
        ua: {
            name: "Олена Чорнобривець",
            about: "Забезпечення якості означає запобігання помилкам.",
            services:
                "Ручне мобільне/веб-тестування, тестування API, створення тестової документації: тестові випадки, чек-листи, звіти про помилки.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Olena Chornobryvets",
            about: "Quality assurance means preventing errors.",
            services:
                "Manual mobile/web testing, API testing, creation of test documentation: test cases, checklists, bug reports.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Olena Chornobryvets",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "HannaHorbenko",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1fp6JW8_U85A9JRP3GWZ8wq9TgmP1mggd",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "5",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/hanna-horbenko-80a589279/",
                github: "https://github.com/hanna-horbenko",
                telegram: "https://t.me/hanna_horbenko",
            },
            tools: [
                "Postman",
                "SQL",
                "DevTools",
                "Jira",
                "TestRail",
                "Figma",
                "DBeaver",
                "Android Studio",
                "Genymotion",
                "Git/GitHub",
                "Terminal",
                "VSCode",
            ],
        },
        ua: {
            name: "Ганна Горбенко",
            about: "QA для мене це як цифровий детектив. Процес розслідування мене захоплює!",
            services:
                "Ручна перевірка якості, чорно-сіре тестування, веб-тестування/тестування мобільних пристроїв, системне тестування, регресія, осудність, дим, спеціальне тестування, із тестовими випадками, функціональність, сумісність, зручність використання, методи розробки тестів. Тестова документація: тестовий план, тестові випадки, контрольні списки, звіти про помилки, знання SDLC, Waterfall, знання концепцій Agile (Scrum, Kanban), знання STLC, Git і Terminal, SQL (MySQL, SQLite, DBeaver).",
            team: "Смачно! на селі",
        },
        en: {
            name: "Hanna Horbenko",
            about: "QA for me it's like a digital detective. The investigation process fascinates me!",
            services:
                "Manual QA, Black/Grey testing, Web/Mobile testing, System testing, Regression, Sanity, Smoke, Ad-Hoc, With test cases, Functional, Compatibility, Usability, Test design techniques. Test documentation: Test plan, Test cases, Checklists, Bug reports, Knowledge of SDLC, Waterfall, Agile concepts knowledge (Scrum, Kanban), Knowledge of STLC, Git and Terminal, SQL (MySQL, SQLite, DBeaver).",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Hanna Horbenko",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "AnnaKlyba",
            projectId: ["2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1V-icZV2Ugq3h5uP89suS4qbNeF4Crcd7",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com", "baza-trainee.tech"],
            pricePerHour: "10",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/anna-klyba/",
                github: "https://github.com/AnnaKlyba",
                telegram: "",
            },
            tools: [
                "Postman",
                "Swagger",
                "Web DevTools",
                "SQL",
                "Git",
                "Jira",
                "Trello",
                "TestRail",
                "HTML/CSS",
                "Terminal",
                "DBeaver",
                "Zendesk",
            ],
        },
        ua: {
            name: "Анна Клиба",
            about: "QA є ключем до надійності та довіри до продукту",
            services:
                "Створення тестової документації (плани тестування, чек-листи, тестові випадки, звіти про помилки). Проведення веб/мобільного тестування, тестування API.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Anna Klyba",
            about: "QA is the key to reliability and trust in the product",
            services:
                "Creation of test documentation (test plans, checklists, test cases, bug reports). Conducting web/mobile testing, API testing.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Anna Klyba",
            about: "",
            services: "",
            team: "Smachno! na seli",
        },
    },
];
