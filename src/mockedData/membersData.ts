import { Institution } from "@/types/Education";
import { Language } from "@/types/Language";

import { Slug } from "./portfolioData";

export type MemberDataItemTranslation = {
    name: string;
    about: string[];
    shortQuote: string;
    services?: string[];
    team: string;
    languages?: Language[];
    education?: Institution[];
    certificates?: Institution[];
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
    projectId: Slug[];
    imageURL?: string;
    position: string;
    categoryName: string;
    pricePerHour?: string;
    projectsExperience: string[];
    socialLinks: SocialLinks;
    tools: string[];
    isEndInAboutMT?: boolean;
    careerStart: string;
    commercialExperience?: string;
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
            id: "susanna-salata-product-manager",

            projectId: [
                "ilovemyteam-online",
                "batatfarm-com",
                "theatermag-com-ua",
                "alex-chudov",
                "viktoriia-zabara",
                "hoida-liudmyla",
                "hanna-balabushko",
            ],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560762/SusannaSalata_kpudlm.jpg",
            position: "Product manager",
            categoryName: "manager",

            projectsExperience: [
                "ilovemyteam.online",
                "batatfarm.com",
                "theatermag.com.ua",
                "baza-trainee.tech",
                "choodov.com",
                "viktoriia-recruiting.com.ua",
                "career-coach.com.ua",
                "balabushko.com",
            ],
            pricePerHour: "24",
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
            careerStart: "2022-11",
        },
        ua: {
            name: "Сусанна Салата",
            about: [""],
            shortQuote:
                "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services: [""],
            team: "I Love My Team",
            languages: [
                { name: "Українська", level: "Рідна" },
                { name: "Англійська", level: "Середній" },
                { name: "Польська", level: "Середній" },
            ],
        },
        en: {
            name: "Susanna Salata",
            about: [""],
            shortQuote:
                "Work should bring inspiration and satisfaction, not just money.",
            services: [""],
            team: "I Love My Team",
            languages: [
                { name: "Ukrainian", level: "Native" },
                { name: "English", level: "Intermediate" },
                { name: "Polish", level: "Intermediate" },
            ],
        },
        pl: {
            name: "Susanna Salata",
            about: [""],
            shortQuote:
                "Praca powinna dawać inspirację i satysfakcję, a nie tylko pieniądze.",
            services: [""],
            team: "I Love My Team",
            languages: [
                { name: "Ukraiński", level: "Ojczysty" },
                { name: "Angielski", level: "Średni" },
                { name: "Polski", level: "Średni" },
            ],
        },
    },
    {
        data: {
            id: "mariia-popova-designer-graphic-designer-ui-ux-designer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560761/mariia-popova_aan7kg.jpg",
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
            careerStart: "2023-06",
        },
        ua: {
            name: "Марія Попова",
            about: [""],
            shortQuote:
                "Що б ви не робили, робіть це з любов'ю. Зрештою, це відчується.",
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Mariia Popova",
            about: [""],
            shortQuote:
                "Whatever you do, do it with love. In the end, it will be felt.",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Mariia Popova",
            about: [""],
            shortQuote:
                "Cokolwiek robisz, rób to z miłością. W końcu to się odczuwa.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "svitlana-kondratenko-business-analyst",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560763/svitlana-kondratenko_isz00m.jpg",
            position: "Business Analyst",
            categoryName: "business-analyst",
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
            careerStart: "2023-03",
        },
        ua: {
            name: "Світлана Кондратенко",
            about: [""],
            shortQuote: `"Хтось має з тим розібратись?" - Я людина, яка з тим розбирається!`,
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Svitlana Kondratenko",
            about: [""],
            shortQuote: `"Someone needs to sort this out?" - I am the person who sorts it out!`,
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Svitlana Kondratenko",
            about: [""],
            shortQuote:
                "„Ktoś musi się tym zająć?” - Ja jestem osobą, która to zrobi!",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "vlad-shumkov-fullstack-developer",
            projectId: ["ilovemyteam-online", "batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742559492/Shymkov_tntedf.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online", "batatfarm.com"],

            socialLinks: {
                linkedin: "https://www.linkedin.com/in/vladyslav-shumkov/",
                github: "https://github.com/IiIymik",
                telegram: "https://t.me/IiIymik",
            },
            isEndInAboutMT: true,
            careerStart: "2020-07",
            tools: [
                "Python",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
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
            about: [""],
            shortQuote:
                "Мій акцент на чіткій комунікації гарантує, що кожен проект відповідає суворим стандартам і очікуванням клієнтів.",
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Vlad Shumkov",
            about: [""],
            shortQuote:
                "My emphasis on clear communication ensures that every project meets exacting standards and client expectations.",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Vlad Shumkov",
            about: [""],
            shortQuote:
                "Stawiam na jasną komunikację, dzięki czemu każdy projekt spełnia rygorystyczne standardy i oczekiwania klientów.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "ihor-dronishynets-fullstack-developer",
            projectId: ["ilovemyteam-online", "batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560759/Igor_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B0_ixtmyr.png",
            position: "Fullstack developer",
            categoryName: "developer",

            projectsExperience: [
                "ilovemyteam.online",
                "batatfarm.com",
                "baza-trainee.tech",
                //"https://murrfecto.site/",
            ],

            socialLinks: {
                linkedin: "https://www.linkedin.com/in/ihordrn/",
                github: "https://github.com/Mazayw",
                telegram: "https://t.me/ihordrn",
            },
            tools: [
                "CI/CD",
                "Docker",
                "DevOps",
                "Next.js",
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
            careerStart: "2021-03",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Ігор Дронішинець",
            about: [""],
            shortQuote:
                "Ефективно перетворюю складні завдання на прості та зрозумілі рішення.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Ihor Dronishynets",
            about: [""],
            shortQuote:
                "Effectively transform complex tasks into simple and comprehensible solutions.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Ihor Dronishynets",
            about: [""],
            shortQuote:
                "Skutecznie zamieniam złożone zadania w proste i przejrzyste rozwiązania.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "iryna-stoliarova-ui-ux-designer",

            projectId: [
                "ilovemyteam-online",
                "protection-in-ua",
                "alex-chudov",
                "willow-motion",
            ],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560757/Iryna_Stoliarova_sfjhav.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: [
                "ilovemyteam.online",
                "greyplaza.com.ua",
                "protection.in.ua",
                "choodov.com",
                "willow-motion.space",
            ],
            pricePerHour: "14",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/iryna-stoliarova",
                behance: "https://www.behance.net/iryna_stoliarova",
                telegram: "https://t.me/iryna_stoliarova",
            },
            tools: ["Figma", "Jira", "Adobe Photoshop", "Adobe Illustrator"],
            careerStart: "2023-03",
        },
        ua: {
            name: "Ірина Столярова",
            about: [
                "Я надаю повний спектр послуг з розробки дизайну продуктів, включаючи дослідження ринку, аналіз конкурентів, дослідження користувачів, інформаційну архітектуру, та інтерактивні прототипи. ",
            ],
            shortQuote:
                "Хороший дизайн, в першу чергу, повинен вирішувати проблеми.",
            services: undefined,
            team: "I Love My Team",
        },
        en: {
            name: "Iryna Stoliarova",
            about: [
                "I’ve been providing the full design service for products, including market research, competitor analysis, user research, information architecture, concepts, interactive prototypes.",
            ],
            shortQuote: "Good design, first of all, needs to solve problems.",
            services: undefined,
            team: "I Love My Team",
        },
        pl: {
            name: "Iryna Stoliarova",
            about: [
                "Zapewniam pełen zakres usług projektowania produktów, w tym badania rynku, analizę konkurencji, badania użytkowników, architekturę informacji i interaktywne prototypy.",
            ],
            shortQuote:
                "Dobry design powinien przede wszystkim rozwiązywać problemy.",
            services: undefined,
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "anastasiia-nazarenko-graphic-designer",
            projectId: ["ilovemyteam-online", "protection-in-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742559492/Nazarenko_rk3nvk.jpg",
            position: "Graphic Designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online", "protection.in.ua"],
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
            careerStart: "2022-12",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Анастасія Назаренко",
            about: [""],
            shortQuote: "Дизайнер - це стратег з почуттям прекрасного.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Anastasiia Nazarenko",
            about: [""],
            shortQuote: "Designer is a planner with a sense of beauty.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Anastasiia Nazarenko",
            about: [""],
            shortQuote: "Projektant to strateg z wyczuciem piękna.",
            services: [""],
            team: "I Love My Team",
        },
    },

    {
        data: {
            id: "iryna-trynkal-fullstack-developer",

            projectId: [
                "ilovemyteam-online",
                "protection-in-ua",
                "willow-motion",
            ],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560760/IrynaTrynkal_o5cfzy.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: [
                "ilovemyteam.online",
                "protection.in.ua",
                "willow-motion.space",
            ],
            pricePerHour: "15",
            socialLinks: {
                linkedin: "http://linkedin.com/in/iryna-trynkal-41542311a",
                github: "https://github.com/IraMira333",
                telegram: "https://t.me/iramira333",
            },
            tools: [
                "Javascript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Tailwind",
                "MUI",
                "HTML",
                "CSS",
            ],
            careerStart: "2022-11",
            commercialExperience: "2023-11",
        },
        ua: {
            name: "Ірина Тринкаль",
            about: [
                "Full-stack розробник із сильним фокусом на Frontend, глибокою експертизою в Next.js, React та TypeScript. Спеціалізуюсь на створенні адаптивних, швидких та SEO-оптимізованих інтерфейсів, інтегрованих із сучасними API та надійним бекендом. Професійно працюю з Sanity CMS — створюю гнучкі схеми даних, налаштовую Studio, темізацію, кастомні компоненти, локалізацію, створюю структуру контенту та інтегрую CMS у продакшн-проєкти з урахуванням продуктивності та зручності редакторів. Володію складними анімаціями (Framer Motion, GSAP), роботою з динамічним контентом, багатомовністю та UX-покращеннями.",
                "Орієнтована на системне мислення, чистий код та стабільний користувацький досвід.",
            ],
            shortQuote:
                "Можливо все, на неможливе просто потрібно більше часу.",
            services: [
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів.",
                "Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React.",
                "Розробка серверних застосунків з використанням JavaScript та Node.js.",
                "Створення та управління бекенд API для забезпечення комунікації між фронтендом та сервером.",
                "Впровадження аутентифікації користувачів та надання прав доступу для забезпечення безпеки додатків.",
                "Поєднання компонентів фронтенду та бекенду для створення єдиної, працюючої програми.",
            ],
            team: "I Love My Team",
            languages: [
                { name: "Українська", level: "Рідна" },
                { name: "Англійська", level: "Середній" },
            ],
            education: [
                {
                    institution:
                        'Національний технічний університет України "Київський політехнічний інститут"',
                    degree: "Інженер-еколог",
                    yearStart: 2002,
                    yearEnd: 2008,
                },
            ],
            certificates: [
                {
                    institution: "GoIT",
                    degree: "Full Stack Developer",
                    yearStart: 2022,
                    yearEnd: 2023,
                },
            ],
        },
        en: {
            name: "Iryna Trynkal",
            about: [
                "Full-stack developer with a strong focus on Frontend and deep expertise in Next.js, React, and TypeScript. I specialize in building adaptive, high-performance, SEO-optimized interfaces integrated with modern APIs and robust backend solutions. I work professionally with Sanity CMS — creating flexible data schemas, configuring Studio, theming, custom components, localization, structuring content, and integrating the CMS into production projects with attention to performance and editor experience. Skilled in advanced animations (Framer Motion, GSAP), dynamic content workflows, multilingual setups, and UX improvements.",
                "Oriented toward systematic thinking, clean code, and a stable user experience.",
            ],
            shortQuote:
                "Anything is possible, the impossible just takes longer.",
            services: [
                "Development and style web pages using HTML, CSS, and JavaScript with a focus on semantics and responsiveness to different screen sizes.",
                "Creation of interactive and dynamic interfaces using the React library.",
                "Development of server applications using JavaScript and Node.js.",
                "Creation and management of backend APIs to ensure communication between frontend and server.",
                "Implementation of user authentication and access control to ensure application security.",
                "Integration of frontend and backend components to create a unified, functioning application.",
            ],
            team: "I Love My Team",
            languages: [
                { name: "Ukrainian", level: "Native" },
                { name: "English", level: "Intermediate" },
            ],
            education: [
                {
                    institution:
                        'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
                    degree: "Environmental engineer",
                    yearStart: 2002,
                    yearEnd: 2008,
                },
            ],
            certificates: [
                {
                    institution: "GoIT",
                    degree: "Full Stack Developer",
                    yearStart: 2022,
                    yearEnd: 2023,
                },
            ],
        },
        pl: {
            name: "Iryna Trynkal",
            about: [
                "Full-stack developerka ze strongnym naciskiem na Frontend oraz dużą znajomością Next.js, React i TypeScript. Specjalizuję się w tworzeniu adaptacyjnych, szybkich i SEO-optymalizowanych interfejsów, zintegrowanych z nowoczesnymi API i solidnym backendem. Profesjonalnie pracuję z Sanity CMS — tworzę elastyczne schematy danych, konfiguruję Studio, motywy, komponenty customowe, lokalizację, strukturę treści oraz integruję CMS w projektach produkcyjnych, dbając o wydajność i wygodę pracy edytorów. Znam się na zaawansowanych animacjach (Framer Motion, GSAP), dynamicznym contencie, wielojęzyczności i ulepszeniach UX.",
                "Kieruję się systemowym myśleniem, czystym kodem i stabilnym doświadczeniem użytkownika.",
            ],
            shortQuote:
                "Wszystko jest możliwe, niemożliwe wymaga tylko więcej czasu.",
            services: [
                "Tworzenie i projektowanie stron internetowych przy użyciu HTML, CSS i JavaScript z naciskiem na semantykę i responsywność dla różnych rozmiarów ekranu.",
                "Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu biblioteki React.",
                "Tworzenie aplikacji po stronie serwera przy użyciu JavaScript i Node.js.",
                "Tworzenie i zarządzanie API serwera w celu zapewnienia komunikacji między interfejsem zewnętrznym a serwerem.",
                "Wdrażanie uwierzytelniania użytkowników i kontroli dostępu w celu zapewnienia bezpieczeństwa aplikacji.",
                "Integracja komponentów zewnętrznych i backendowych w celu stworzenia jednej funkcjonalnej aplikacji.",
            ],
            team: "I Love My Team",
            languages: [
                { name: "Ukraiński", level: "Ojczysty" },
                { name: "Angielski", level: "Średni" },
            ],
            education: [
                {
                    institution:
                        'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
                    degree: "Environmental engineer",
                    yearStart: 2002,
                    yearEnd: 2008,
                },
            ],
            certificates: [
                {
                    institution: "GoIT",
                    degree: "Full Stack Developer",
                    yearStart: 2022,
                    yearEnd: 2023,
                },
            ],
        },
    },
    {
        data: {
            id: "olena-posternak-frontend-developer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560764/OlenaPosternak_ywdiuy.jpg",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online", "kuharskyivulyk.com.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/posternak-olena/",
                github: "https://github.com/OlenaPosternak",
                telegram: "https://t.me/Posternak_Olena",
            },
            tools: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind",
                "MUI",
                "MongoDB",
                "Node.js",
                "HTML",
                "CSS",
            ],
            careerStart: "2023-12",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Олена Постернак",
            about: [""],
            shortQuote:
                "Дрібниці важливі. Часто саме вони роблять життя комфортнішим.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Olena Posternak",
            about: [""],
            shortQuote:
                "Small things matter. It’s often they, that make life more comfortable.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Olena Posternak",
            about: [""],
            shortQuote:
                "Małe rzeczy są ważne. Często sprawiają, że życie staje się wygodniejsze.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "olga-mykhailova-frontend-developer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560762/OlgaMykhailova_v9nbxu.jpg",
            position: "FrontEnd Developer",
            categoryName: "developer",

            projectsExperience: [
                "ilovemyteam.online",
                "greyplaza.com.ua",
                "kuharskyivulyk.com.ua",
            ],

            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/olgamykhailova/",
                github: "https://github.com/OlgaMykhailova",
                telegram: "https://t.me/Olya_Kaktusya",
            },
            tools: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Tailwind",
                "React Native",
                "Node.js",
                "MongoDB",
                "HTML",
                "CSS",
            ],
            careerStart: "2023-12",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Ольга Михайлова",
            about: [""],
            shortQuote: "Люблю знаходити елегантні рішення для складних задач.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Olga Mykhailova",
            about: [""],
            shortQuote: "I enjoy finding elegant solutions to difficult tasks.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Olga Mykhailova",
            about: [""],
            shortQuote:
                "Uwielbiam znajdować eleganckie rozwiązania złożonych problemów.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "kateryna-rubanik-qa-engineer",
            projectId: ["ilovemyteam-online", "protection-in-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560763/Rubanik_swr3v3.png",
            position: "QA engineer",
            categoryName: "qa",
            projectsExperience: [
                "ilovemyteam.online",
                "protection.in.ua",
                "baza-trainee.tech",
            ],
            pricePerHour: "8",
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

            careerStart: "2023-07",
        },
        ua: {
            name: "Катерина Рубанік",
            about: [
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування API.",
            ],
            shortQuote: "Жодна дрібниця не дрібниця, коли йдеться про якість.",
            services: undefined,
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Rubanik",
            about: [
                "Creation of test documentation (test plans, checklists, test cases, bug reports). Conducting web/mobile testing, API testing.",
            ],
            shortQuote: "No detail is minor when it comes to quality.",
            services: undefined,
            team: "I Love My Team",
        },
        pl: {
            name: "Kateryna Rubanik",
            about: [
                "Tworzenie dokumentacji testowej (plany testów, listy kontrolne, przypadki testowe, raporty błędów). Przeprowadzanie testów internetowych/mobilnych, testów API.",
            ],
            shortQuote:
                "Żaden szczegół nie jest drobiazgiem, gdy chodzi o jakość.",
            services: undefined,
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "eugene-serdiuk-fullstack-developer",
            projectId: ["batatfarm-com", "ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560758/eugene-serdiuk_wmghk8.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["batatfarm.com", "ilovemyteam-online"],
            pricePerHour: "9",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/eugene-serdyuk/",
                github: "https://github.com/Gituservn",
                telegram: "",
            },
            tools: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "ReduxJS",
                "MongoDB",
                "PosgreSQL",
                "HTML",
                "CSS",
            ],
            careerStart: "2023-07",
        },
        ua: {
            name: "Євген Сердюк",
            about: [
                "Розробка та підтримка Web-додатків з урахуванням семантичної верстки та адаптивного дизайну до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних застосунків з використанням JavaScript та NodeJS. Робота з базами даних MongoDB, PosgreSQ.",
            ],
            shortQuote: "Зараз все зробимо!",
            services: undefined,
            team: "Смачно! на селі",
        },
        en: {
            name: "Eugene Serdiuk",
            about: [
                "Development and support of Web applications with semantic layout and responsive design for different screen sizes. Creating interactive and dynamic interfaces using the React library. Development of server-side applications using JavaScript and NodeJS. Working with MongoDB, PosgreSQ databases.",
            ],
            shortQuote: "We'll do it now!",
            services: undefined,
            team: "Smachno! na seli",
        },
        pl: {
            name: "Eugene Serdiuk",
            about: [
                "Rozwój i wsparcie aplikacji internetowych z semantycznym układem i responsywnym designem dla różnych rozmiarów ekranu. Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu biblioteki React. Rozwój aplikacji serwerowych. przy użyciu JavaScript i NodeJS. Praca z bazami danych MongoDB i PosgreSQ.",
            ],
            shortQuote: "Teraz to zrobimy!",
            services: undefined,
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "susanna-salata-business-analyst",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560762/SusannaSalata_kpudlm.jpg",
            position: "Business Analyst",
            categoryName: "business-analyst",
            projectsExperience: [
                "ilovemyteam.online",
                "batatfarm.com",
                "theatermag.com.ua",
                "baza-trainee.tech",
            ],
            pricePerHour: "24",
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
            careerStart: "2021-11",
        },
        ua: {
            name: "Сусанна Салата",
            about: [""],
            shortQuote:
                "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: [""],
            shortQuote:
                "Work should bring inspiration and satisfaction, not just money.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: [""],
            shortQuote:
                "Praca powinna dawać inspirację i satysfakcję, a nie tylko pieniądze.",
            services: [""],
            team: "I Love My Team",
        },
    },

    {
        data: {
            id: "denis-slivinskyi-fullstack-developer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742559492/Slivinskyi_xvvwbs.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["batatfarm.com", "zolochivska.com.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/denis-slivinskyi/",
                github: "https://github.com/Denis-isnotavailable",
                telegram: "https://t.me/d_e_n_i_s_s_s_s",
            },
            tools: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
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
            careerStart: "2022-12",
        },
        ua: {
            name: "Денис Слівінський",
            about: [""],
            shortQuote: "Справжня дурість щоразу перемагає штучний інтелект",
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Denis Slivinskyi",
            about: [""],
            shortQuote:
                "Real stupidity beats artificial intelligence every time",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Denis Slivinskyi",
            about: [""],
            shortQuote:
                "Prawdziwa głupota za każdym razem pokonuje sztuczną inteligencję.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "volodymyr-dehtiarev-fullstack-developer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742559492/volodymyr_dehtiarev_pwh5v7.jpg",
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
                "Next.js",
                "NestJS",
                "PosgreSQL",
                "MongoDB",
                "TypeScript",
                "CI/CD",
                "Docker",
            ],
            careerStart: "2023-10",
        },
        ua: {
            name: "Володимир Дегтярев",
            about: [""],
            shortQuote: "Нічого не вийде, якщо ви цього не зробите",
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Volodymyr Dehtiarev",
            about: [""],
            shortQuote: "Nothing will work unless you do",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Volodymyr Dehtiarev",
            about: [""],
            shortQuote: "Nie będzie działać, jeśli tego nie zrobisz.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "olena-chornobryvets-qa-engineer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742559492/Chornobryvec_a5gkha.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "",
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
            careerStart: "2023-06",
        },
        ua: {
            name: "Олена Чорнобривець",
            about: [""],
            shortQuote: "Забезпечення якості означає запобігання помилкам.",
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Olena Chornobryvets",
            about: [""],
            shortQuote: "Quality assurance means preventing errors.",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Olena Chornobryvets",
            about: [""],
            shortQuote: "Zapewnienie jakości to zapobieganie błędom.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "hanna-horbenko-qa-engineer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742561627/Hanna_Horbenko_ynmaef.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "",
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
            careerStart: "2023-07",
        },
        ua: {
            name: "Ганна Горбенко",
            about: [""],
            shortQuote:
                "QA для мене це як цифровий детектив. Процес розслідування мене захоплює!",
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Hanna Horbenko",
            about: [""],
            shortQuote:
                "QA for me it's like a digital detective. The investigation process fascinates me!",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Hanna Horbenko",
            about: [""],
            shortQuote:
                "QA jest dla mnie jak cyfrowy detektyw. Proces śledczy jest dla mnie fascynujący!",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "anna-klyba-qa-engineer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560758/Anna_Klyba_faaoeq.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com", "baza-trainee.tech"],
            pricePerHour: "",
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
            careerStart: "2023-11",
        },
        ua: {
            name: "Анна Клиба",
            about: [""],
            shortQuote: "QA є ключем до надійності та довіри до продукту",
            services: [""],
            team: "Смачно! на селі",
        },
        en: {
            name: "Anna Klyba",
            about: [""],
            shortQuote: "QA is the key to product reliability and trust.",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Anna Klyba",
            about: [""],
            shortQuote:
                "QA jest kluczem do niezawodności i zaufania do produktu.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "oksana-luchko-qa-engineer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560788/oksana-luchko_qotwzx.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online", "irynaprudko.com.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/oksana-luchko-3a5b2b289",
                github: "",
                telegram: "https://t.me/Sysen8474",
            },
            tools: [
                "TestRail",
                "Jira",
                "Trello",
                "Chrome Devtools",
                "JMeter",
                "GitHub",
                "Postman",
                "Figma",
            ],
            isEndInAboutMT: true,
            careerStart: "2024-03",
        },
        ua: {
            name: "Оксана Лучко",
            about: [""],
            shortQuote:
                "Я завжди готова вчитися новому та застосовувати свої знання на практиці. Буду рада долучитися до вашої команди та внести свій внесок у забезпечення якості програмного забезпечення.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Oksana Luchko",
            about: [""],
            shortQuote:
                "I am always ready to learn new things and apply my knowledge in practice. I would be happy to join your team and contribute to software quality assurance.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Oksana Luchko",
            about: [""],
            shortQuote:
                "Zawsze jestem gotowa uczyć się nowych rzeczy i wykorzystywać zdobytą wiedzę w praktyce. Chętnie dołączę do Twojego zespołu i przyczynię się do zapewnienia jakości oprogramowania.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "nadia-hubchuk-qa-engineer",
            projectId: ["ilovemyteam-online", "alex-chudov"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560759/nadia-hubchuk_c4pyg4.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online", "choodov.com"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/nadia-hubchuk",
                github: "",
                telegram: "",
            },
            tools: [
                "Postman",
                "Chrome DevTools",
                "SQL",
                "Jira",
                "VSCode",
                "TestRail",
                "REST",
                "HTML/CSS",
                "Trello",
                "GitHub",
                "Swager",
            ],
            careerStart: "2024-03",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Надія Губчук",
            about: [""],
            shortQuote:
                "Основна моя задача впевнитися, що продукт працює без збоїв, виявляючи помилки та недоліки, які можуть завадити вашим користувачам насолоджуватися ним. Чим раніше, тим краще!",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Nadia Hubchuk",
            about: [""],
            shortQuote:
                "My top priority is making sure your product runs smoothly by spotting any bugs or issues that could affect user enjoyment. The sooner, the better!",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Nadia Hubchuk",
            about: [""],
            shortQuote:
                "Moim głównym zadaniem jest upewnianie się, że produkt działa płynnie, znajdowanie błędów i wad, które mogą uniemożliwić użytkownikom korzystanie z niego. Im szybciej tym lepiej!",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "tetiana-seletska-project-manager-scrum-master",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560799/tetiana-seletska_skb82g.jpg",
            position: "Project Manager/ Scrum Master",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/tetiana-seletska",
                telegram: "https://t.me/Tatrusha1",
            },
            tools: [
                "Jira",
                "Confluence",
                "Miro",
                "Figma",
                "Notion",
                "Google Sheets/Docs",
                "Slack",
                "Teams",
            ],
            careerStart: "2023-12",
        },
        ua: {
            name: "Тетяна Селецька",
            about: [
                "Займаюся організацією та плануванням проєктів, включаючи розробку детальних планів і визначення ключових етапів для успішного виконання. Відповідаю за координацію команди, забезпечуючи чітку комунікацію та ефективну співпрацю між учасниками. Регулярно відстежую прогрес на щоденних мітингах, аналізую виконання завдань і вчасно виявляю відхилення. Активно займаюся вирішенням виникаючих проблем і питань, що дозволяє уникнути затримок і забезпечити дотримання термінів.",
            ],
            shortQuote:
                "Мета без плану - це просто бажання. В мене завжди є план.",
            services: undefined,
            team: "I Love My Team",
        },
        en: {
            name: "Tetiana Seletska",
            about: [
                "I organize and plan projects, including developing detailed plans and identifying key milestones for successful execution. I am responsible for coordinating the team, ensuring clear communication and effective collaboration between participants. I regularly monitor progress at daily meetings, analyze the implementation of tasks and identify deviations in a timely manner. I am actively involved in solving problems and issues that arise, which allows me to avoid delays and ensure that deadlines are met.",
            ],
            shortQuote:
                "A goal without a plan is just a wish. I always have a plan.",
            services: undefined,
            team: "I Love My Team",
        },
        pl: {
            name: "Tetiana Seletska",
            about: [
                "Organizuję i planuję projekty, w tym opracowuję szczegółowe plany i określam kluczowe kamienie milowe dla pomyślnej realizacji. Odpowiadam za koordynację zespołu, zapewniając jasną komunikację i efektywną współpracę między uczestnikami. Regularnie monitoruję postępy podczas codziennych spotkań, analizuję realizację zadań i w odpowiednim czasie identyfikuję odchylenia. Proaktywnie odpowiadam na wszelkie pojawiające się kwestie i pytania, co pomaga uniknąć opóźnień i zapewnić dotrzymanie terminów.",
            ],
            shortQuote: "Cel bez planu to tylko życzenie. Ja zawsze mam plan.",
            services: undefined,
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "daria-cherviakova-project-manager-scrum-master",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560757/DariaCherviakova_dktdja.jpg",
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
            isEndInAboutMT: true,
            careerStart: "2023-10",
        },
        ua: {
            name: "Дар'я Червякова",
            about: [""],
            shortQuote:
                "Юніор Project Manager/ Scrum Master з прагненням до професійного зростання. Керую процесом, забезпечую ефективну комунікацію та виконання цілей.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Daria Cherviakova",
            about: [""],
            shortQuote:
                "Junior Project Manager/ Scrum Master with a desire for professional growth. I manage the process, ensure effective communication and fulfillment of goals.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Daria Cherviakova",
            about: [""],
            shortQuote:
                "Junior Project Manager/ Scrum Master z chęcią rozwoju zawodowego. Zarządzam procesem, zapewniam efektywną komunikację i osiąganie celów.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "hanna-truba-marketer",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560758/Anna_Truba_q79zxy.jpg",
            position: "Marketer",
            categoryName: "marketer",
            projectsExperience: [],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/hanna-truba-032964227",
                telegram: "https://t.me/Hanna_Truba",
            },
            tools: [
                "Wrike",
                "Jira",
                "Google Sheets",
                "Google Analytics",
                "Tableau",
                "Mindmaps",
                "Canva",
            ],
            careerStart: "2024-02",
        },
        ua: {
            name: "Ганна Труба",
            about: [""],
            shortQuote:
                "Люди йдуть до людей! Ніколи не нехтуй людським фактором у бізнесі!",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Hanna Truba",
            about: [""],
            shortQuote:
                "People go to people! Never neglect the human factor in business!",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Hanna Truba",
            about: [""],
            shortQuote:
                "Ludzie idą do ludzi! Nigdy nie lekceważ czynnika ludzkiego w biznesie!",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "olena-holubonkova-marketer",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560763/olena-holubonkova_onfmob.jpg",
            position: "Marketer",
            categoryName: "marketer",
            projectsExperience: [],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/olena-holubonkova/",
                telegram: "https://t.me/Golubyonkova",
            },
            tools: [
                "PESTEL",
                "SWOT",
                "JBD",
                "BKG matrix",
                "McKinsey matrix",
                "7P model",
                "Mindmaps",
            ],
            careerStart: "2020-04",
        },
        ua: {
            name: "Олена Голубьонкова",
            about: [""],
            shortQuote: "Маркетинг - це все! І все є маркетингом!",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Olena Holubonkova",
            about: [""],
            shortQuote: "Marketing is everything! And everything is marketing!",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Olena Holubonkova",
            about: [""],
            shortQuote:
                "Marketing jest wszystkim! A wszystko jest marketingiem!",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "marta-morintseva-qa-engineer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560758/Marta_Morintseva_crc9p8.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/marta-morincewa",
                telegram: "",
                github: "",
            },
            tools: [
                "ISTQB",
                "Jira",
                "Postman",
                "Swagger",
                "SQL",
                "Git",
                "DBeaver",
                "JSON",
                "XML",
                "Zephyr Squad",
                "Java",
                "Docker",
            ],
            careerStart: "2023-03",
        },
        ua: {
            name: "Марта Морінцева",
            about: [""],
            shortQuote:
                "Командна робота — це мистецтво перетворювати індивідуальні таланти у досконалий продукт.",
            services: [""],
            team: "Smachno! na seli",
        },
        en: {
            name: "Marta Morintseva",
            about: [""],
            shortQuote:
                "Teamwork is the art of transforming individual talents into a perfect product.",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Marta Morintseva",
            about: [""],
            shortQuote:
                "Praca zespołowa to sztuka przekształcania indywidualnych talentów w doskonały produkt.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "iryna-shevchenko-business-analyst",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560760/iryna-shevchenko_t7gfpu.jpg",
            position: "Business Analyst",
            categoryName: "business-analyst",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/miro-iryna/",
                telegram: "https://t.me/Bickac",
                github: "",
            },
            tools: [
                "Jira",
                "Confluence",
                "Google Sheets/Docs/Forms",
                "BPMN notations (Draw.io, Miro, Camunda)",
                "Slack",
                "Notion",
                "SDLC",
                "User story",
                "Figma",
                "Moqups",
                "Balsamiq",
            ],
            careerStart: "2024-05",
        },
        ua: {
            name: "Ірина Шевченко",
            about: [""],
            shortQuote: "Зараз подумаємо, потім обговоримо, а далі реалізуємо.",
            services: [""],
            team: "Smachno! na seli",
        },
        en: {
            name: "Iryna Shevchenko",
            about: [""],
            shortQuote:
                "Now we'll think, then we'll discuss, and after that, we'll implement.",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Iryna Shevchenko",
            about: [""],
            shortQuote:
                "Teraz pomyślimy, potem omówimy, a następnie zrealizujemy.",
            services: [""],
            team: "Smachno! na seli",
        },
    },

    {
        data: {
            id: "natali-istomina-marketer",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560763/natali-istomina_ag13hs.jpg",
            position: "Marketer",
            categoryName: "marketer",
            projectsExperience: [],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/natali-istomina/",
                telegram: "https://t.me/istomina_nn",
            },
            tools: [
                "Product Management",
                "Building a go-to-market strategy",
                "New product development and launch",
                "Outdoor advertising",
                "Audio advertising",
                "Brand marketing",
                "PR",
                "SMM",
                "Project Management",
            ],
            careerStart: "2015-07",
        },
        ua: {
            name: "Наталі Істоміна",
            about: [""],
            shortQuote:
                "Я знаю як успішно вивести ваш продукт на ринок і почати заробляти на ньому.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Natali Istomina",
            about: [""],
            shortQuote:
                "I know how to successfully bring your product to the market and start making money on it.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Natali Istomina",
            about: [""],
            shortQuote:
                "Wiem, jak skutecznie wprowadzić Twój produkt na rynek i zacząć na nim zarabiać.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "natali-istomina-business-analyst",
            projectId: ["theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560763/natali-istomina_ag13hs.jpg",
            position: "Business Analyst",
            categoryName: "business-analyst",
            projectsExperience: ["theatermag.com.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/natali-istomina/",
                telegram: "https://t.me/istomina_nn",
            },
            tools: [
                "Business Analysis",
                "User Stories",
                "Use Cases",
                "User flow",
                "SRS",
                "BPMN",
                "Wireframes",
                "Software requirements",
            ],
            careerStart: "2024-02",
        },
        ua: {
            name: "Наталі Істоміна",
            about: [""],
            shortQuote:
                "Будь-які неструктуровані вимоги до продукту я можу передати в схемах, діаграмах чи таблицях  ",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Natali Istomina",
            about: [""],
            shortQuote:
                "I can present any unstructured product requirements in diagrams, charts, or tables.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Natali Istomina",
            about: [""],
            shortQuote:
                "Wszelkie niestrukturalne wymagania dotyczące produktu mogę przekazać w schematach, diagramach lub tabelach.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "veronika-zlobina-ui-ux-designer",
            projectId: ["theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560764/Veronika_Zlobina_njpuov.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["theatermag.com.ua"],
            pricePerHour: "9",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/vrnkzlbn/",
                telegram: "https://t.me/vronells",
                behance: "https://www.behance.net/vrnkzlbn",
            },
            tools: [
                "Figma",
                "Adobe Photoshop",
                "competitor and TA analysis",
                "user personas",
                "user flow",
                "JTBD",
                "CJM",
                "understanding basic principles of composition",
                "color theory",
                "typography",
                "prototyping",
                "animation",
            ],
            careerStart: "2023-08",
        },
        ua: {
            name: "Вероніка Злобіна",
            about: [""],
            shortQuote:
                "Успішний дизайн — це не тільки краса, але й простота, яка допомагає користувачам досягти мети без зайвих зусиль.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Veronika Zlobina",
            about: [""],
            shortQuote:
                "Successful design is not only about beauty, but also about simplicity, which helps users achieve their goals without any extra effort.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Veronika Zlobina",
            about: [""],
            shortQuote:
                "Udany projekt to nie tylko piękno, ale także prostota, która pomaga użytkownikom osiągnąć ich cele bez dodatkowego wysiłku.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "mila-maksymenko-ui-ux-designer",

            projectId: [
                "ilovemyteam-online",
                "theatermag-com-ua",
                "viktoriia-zabara",
                "alex-chudov",
                "hoida-liudmyla",
                "hanna-balabushko",
            ],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560782/Mila_Maksymenko_gfxjbp.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: [
                "theatermag.com.ua",
                "ilovemyteam.online",
                "viktoriia-recruiting.com.ua",
                "choodov.com",
                "career-coach.com.ua",
                "balabushko.com",
            ],
            pricePerHour: "9",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/liudmyla-maksymenko-748938229/",
                telegram: "https://t.me/luma1990",
                behance: "https://www.behance.net/4b4ea84c",
            },
            tools: [
                "Figma",
                "Photoshop",
                "Adobe Illustrator",
                "Jira",
                "prototyping",
                "CJM",
                "user persona",
                "empathy mapping",
                "user flow",
                "user interviews",
                "competitor analysis",
                "understanding of basic principles of composition",
                "typography",
                "color theory",
            ],
            careerStart: "2023-03",
        },
        ua: {
            name: "Міла Максименко",
            about: [
                "Створення дизайну для вебсайтів та мобільних застосунків враховуючи цілі бізнесу та потреби користувачів. Респонсивний дизайн. Проведення досліджень (опитування користувачів, глибинні інтерв'ю, аналіз конкурентів). Опрацювання отриманої інформації, створення персон, юзер флоу, карт емпатій. Розробка варфреймів, UI дизайну, UI кітів. ",
            ],
            shortQuote: "Краса в деталях.",
            services: undefined,
            team: "Український театр",
        },
        en: {
            name: "Mila Maksymenko",
            about: [
                "Creation of design for websites and mobile applications, taking into account business goals and user needs. Responsive design. Conducting research (user surveys, in-depth interviews, competitor analysis). Processing of received information, creation of personas, user flow, empathy maps. Development of wireframes, UI design, UI ki",
            ],
            shortQuote: "Beauty is in the details.",
            services: undefined,
            team: "Ukrainian theater",
        },
        pl: {
            name: "Mila Maksymenko",
            about: [
                "Tworzenie projektów dla stron internetowych i aplikacji mobilnych, uwzględniając cele biznesowe i potrzeby użytkowników. Projektowanie responsywne. Przeprowadzanie badań (ankiety użytkowników, wywiady pogłębione, analiza konkurencji). Analiza zebranych informacji, tworzenie person, ścieżek użytkownika, map empatii. Opracowywanie makietów, projektowanie UI, zestawów UI.",
            ],
            shortQuote: "Piękno tkwi w szczegółach.",
            services: undefined,
            team: "Ukrainian theater",
        },
    },

    {
        data: {
            id: "anton-chertok-frontend-developer",
            projectId: ["theatermag-com-ua", "batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560758/Anton_Chertok_ocqrx9.jpg",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: ["theatermag.com.ua", "batatfarm.com"],
            pricePerHour: "9",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/anton-chertok/",
                telegram: "https://t.me/chertoha",
                github: "https://github.com/chertoha",
            },
            tools: [
                "React.js",
                "Next.js",
                "JS",
                "TS",
                "Redux",
                "Tailwind",
                "Material UI",
                "Node.js",
                "Express",
                "Nest.js",
                "Postgres",
                "Docker",
                "CI/CD",
            ],
            careerStart: "2023-05",
        },
        ua: {
            name: "Антон Черток",
            about: [""],
            shortQuote:
                "Великий результат досягається через увагу до деталей і прагнення до простоти.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Anton Chertok",
            about: [""],
            shortQuote:
                "Great results are achieved through attention to detail and a pursuit of simplicity.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Anton Chertok",
            about: [""],
            shortQuote:
                "Doskonałe wyniki osiąga się dzięki dbałości o szczegóły i przywiązaniu do prostoty.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "dmytro-bulakhov-frontend-developer",

            projectId: [
                "theatermag-com-ua",
                "batatfarm-com",
                "viktoriia-zabara",
                "hanna-balabushko",
            ],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560781/dmytro-bulakhov_uhrnzs.jpg",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: [
                "theatermag.com.ua",
                "batatfarm.com",
                "viktoriia-recruiting.com.ua",
                "balabushko.com",
            ],
            pricePerHour: "9",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/dmytro-bulakhov/",
                telegram: "https://t.me/psycameron",
                github: "https://github.com/Psycameron",
            },
            tools: [
                "React.js",
                "Next.js",
                "JS",
                "TS",
                "Redux",
                "Tailwind",
                "MUI",
                "Node.js",
                "Express",
                "RTK Query",
            ],
            careerStart: "2023-05",
        },
        ua: {
            name: "Дмитро Булахов",
            about: [""],
            shortQuote: "Випадковості - не випадкові.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Dmytro Bulakhov",
            about: [""],
            shortQuote: "Accidents are not random.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Dmytro Bulakhov",
            about: [""],
            shortQuote: "Przypadki nie są przypadkowe.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "evhen-malysh-backend-developer",
            projectId: ["theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560782/evhen-malysh_mcxosc.jpg",
            position: "Backend Developer",
            categoryName: "developer",
            projectsExperience: ["theatermag.com.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/evhen-malysh-0443231a5/",
                github: "https://github.com/malyshevhen",
            },
            tools: [
                "Java",
                "Maven",
                "Spring",
                "Spring Boot",
                "Security OAuth2",
                "PostgreSQL",
                "Hibernate",
                "Swagger",
                "CI/CD",
                "JUnit 5",
                "Spock",
                "Testcontainers",
            ],
            careerStart: "2022-10",
        },
        ua: {
            name: "Євген Малиш",
            about: [""],
            shortQuote: "Я можу зробити все, що завгодно. Питання лише в часі",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Evhen Malysh",
            about: [""],
            shortQuote: "I can do anything. It's just a matter of time.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Evhen Malysh",
            about: [""],
            shortQuote: "Mogę zrobić wszystko. To tylko kwestia czasu.",
            services: [""],
            team: "Ukrainian theater",
        },
    },

    {
        data: {
            id: "anatolii-omelchenko-backend-developer",
            projectId: ["theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560763/Omelchenko_Anatolii_v41sue.jpg",
            position: "Backend Developer",
            categoryName: "developer",
            projectsExperience: ["theatermag.com.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/anatolii-omelchenko/",
                telegram: "https://t.me/Anatolii_Omelchenko",
                github: "https://github.com/Anatolii-Omelchenko",
            },
            tools: [
                "Java",
                "Kotlin",
                "Spring",
                "Spring Boot",
                "Hibernate",
                "Redis",
                "Postgres",
                "Docker",
                "CI/CD",
                "REST",
            ],
            careerStart: "2022-10",
        },
        ua: {
            name: "Анатолій Омельченко",
            about: [""],
            shortQuote:
                "Я завжди прагну, щоб усе працювало ідеально. Можливо, це трохи перфекціонізм, але я вірю, що якість у деталях.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Anatolii Omelchenko",
            about: [""],
            shortQuote:
                "I always strive to make everything work perfectly. It might be a bit of perfectionism, but I believe that quality lies in the details.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Anatolii Omelchenko",
            about: [""],
            shortQuote:
                "Zawsze chcę, aby wszystko działało idealnie.  Może to odrobina perfekcjonizmu, ale wierzę, że jakość tkwi w szczegółach.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "oleksandr-meshcherskyi-fullstack-developer",
            projectId: ["batatfarm-com", "theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560789/oleksandr-meshcherskyi_cyuio8.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["theatermag.com.ua", "batatfarm.com"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/alexandr-mescherskiy/",
                telegram: "https://t.me/AlexandrMescherskiy",
                github: "https://github.com/mescherskiy",
            },
            tools: [
                "Java",
                "Spring Boot",
                "SQL",
                "PostgreSQL",
                "Hibernate",
                "Docker",
                "OpenAPI",
                "MinIO",
                "Groovy",
            ],
            careerStart: "2024-04",
        },
        ua: {
            name: "Олександр Мещерський",
            about: [""],
            shortQuote: "Ніколи не здавайтеся.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Oleksandr Meshcherskyi",
            about: [""],
            shortQuote: "Never give up.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Oleksandr Meshcherskyi",
            about: [""],
            shortQuote: "Nigdy się nie poddawaj.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "svitlana-krokhmalna-qa-engineer",
            projectId: ["theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1744802867/Svitlana_Krokhmalna_wqiqqt.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["theatermag.com.ua"],
            pricePerHour: "9",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/krokhmalna/",
                telegram: "https://t.me/SvitlanaKrokh",
                github: "http://github.com/SvitlanaKrok",
            },
            tools: [
                "Jira",
                "Postman",
                "SQL",
                "HTML/CSS",
                "JavaScript",
                "Cypress",
                "TypeScript",
            ],
            careerStart: "2023-06",
        },
        ua: {
            name: "Світлана Крохмальна",
            about: [""],
            shortQuote:
                "Гарно розроблений та відтестований продукт принесе користь та задоволення замовнику. Якісна та тісна робота в команді створить цей продукт.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Svitlana Krokhmalna",
            about: [""],
            shortQuote:
                "A well-designed and tested product will bring value and satisfaction to the customer. High-quality and close teamwork will create this product.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Svitlana Krokhmalna",
            about: [""],
            shortQuote:
                "Dobrze zaprojektowany i przetestowany produkt przyniesie klientowi korzyści i satysfakcję. Wysoka jakość i ścisła praca zespołowa pozwolą stworzyć ten produkt.",
            services: [""],
            team: "Ukrainian theater",
        },
    },

    {
        data: {
            id: "oksana-onopriienko-qa-engineer",
            projectId: ["theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560789/Oksana_Onopriienko_fgilcy.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["theatermag.com.ua"],
            pricePerHour: "9",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/oksana-onopriienko",
                telegram: "https://t.me/Oksana_Onopriienko",
                github: "https://github.com/Ksenya-77",
            },
            tools: [
                "Jira",
                "Postman",
                "SQL",
                "TestRail",
                "JSON",
                "HTML",
                "CSS",
                "Trello",
            ],
            careerStart: "2024-05",
        },
        ua: {
            name: "Оксана Онопрієнко",
            about: [""],
            shortQuote: "На мене можна покластися в будь-яких умовах!",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Oksana Onopriienko",
            about: [""],
            shortQuote: "You can rely on me in any situation!",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Oksana Onopriienko",
            about: [""],
            shortQuote: "Na mnie można polegać w każdej sytuacji!",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "olena-halushka-ui-ux-designer",
            projectId: ["batatfarm-com", "theatermag-com-ua"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560761/Olena_Halushka_tdfnpu.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["batatfarm.com", "theatermag.com.ua"],

            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/olena-halushka",
                behance: "https://www.behance.net/olenahalushka",
                telegram: "https://t.me/rainy_bird",
            },
            tools: [
                "Figma",
                "Photoshop",
                "Maze",
                "ProtoPie",
                "Notion",
                "Jira",
                "Confluence",
                "Bootstrap grid system",
                "color theory",
                "typography",
                "prototyping",
                "quantitative research",
                "interwievs",
                "CJM",
                "Kano model",
                "user flow",
                "information architecture",
            ],
            careerStart: "2023-03",
        },
        ua: {
            name: "Олена Галушка",
            about: [""],
            shortQuote:
                "Дизайн не повинен бути складним; часто найпростіше рішення є найкращим.",
            services: [""],
            team: "Український театр",
        },
        en: {
            name: "Olena Halushka",
            about: [""],
            shortQuote:
                "Design doesn’t have to be complicated; often the simplest solution is the best.",
            services: [""],
            team: "Ukrainian theater",
        },
        pl: {
            name: "Olena Halushka",
            about: [""],
            shortQuote:
                "Design nie musi być skomplikowany; często najprostsze rozwiązanie jest najlepsze.",
            services: [""],
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "mariia-cherevko-ui-ux-designer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560761/Mariia_Cherevko_ieqg8o.png",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online"],

            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/maria-cherevko",
                telegram: "https://t.me/masha_ichr",
            },
            tools: [
                "Figma",
                "Adobe Illustrator",
                "Jira",
                "Miro",
                "Leonardo.ai",
                "Trello",
                "Slack",
                "Google",
                "Discord",
            ],
            careerStart: "2024-10",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Марія Черевко",
            about: [""],
            shortQuote:
                "Хороший дизайн - це як хороший жарт: якщо треба пояснювати, він не працює.",
            services: [""],
            team: "i love my team",
        },
        en: {
            name: "Mariia Cherevko",
            about: [""],
            shortQuote:
                "Good design is like a good joke: if you have to explain it, it doesn't work.",
            services: [""],
            team: "i love my team",
        },
        pl: {
            name: "Mariia Cherevko",
            about: [""],
            shortQuote:
                "Dobry design jest jak dobry żart: jeśli trzeba go tłumaczyć, to nie działa.",
            services: [""],
            team: "i love my team",
        },
    },
    {
        data: {
            id: "anna-prutnik-frontend-developer",
            projectId: ["ilovemyteam-online", "alex-chudov", "hoida-liudmyla"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1757583804/Anna_Prutnik_yd99is.jpg",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: [
                "ilovemyteam.online",
                "choodov.com",
                "career-coach.com.ua",
            ],

            pricePerHour: "10",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/anna-prutnik/",
                github: "https://github.com/AnnaPrutnik",
                telegram: "https://t.me/AnnaPrutnik",
            },
            tools: [
                "React",
                "Typescript",
                "Mui",
                "Tailwind",
                "Redux RTK",
                "Zustand",
                "Formik",
                "React Hook Form",
                "Jira",
                "Styled Components",
                "Trello",
                "HTML",
                "CSS",
            ],
            careerStart: "2022-03",
            commercialExperience: "2023-12",
        },
        ua: {
            name: "Анна Прутнік",
            about: [
                "Основний фокус моєї роботи як Frontend developer — створення інтерфейсів, які не просто виглядають привабливо, а вирішують бізнес-задачі та впливають на результат продукту. Мені подобається, що кілька рядків коду можуть підвищити ефективність, покращити взаємодію користувача або збільшити конверсію.",
                "Тому для мене важливо розуміти логіку бізнесу, поведінку користувачів і цілі проєкту. Це дозволяє створювати адаптивні, продуктивні та стабільні рішення, які добре працюють на всіх пристроях.",
                "Працювала над проєктами різної складності: від лендінгів із фокусом на конверсію до веб-ресурсів і платформ, де ключові — швидкість, UX, доступність та архітектура контенту. У роботі увагу приділяю деталям, мікровзаємодіям і логіці компонування. Використовую сучасний стек — React, Next.js, Astro.js, TypeScript, UI-бібліотеки, створюю кастомні компоненти й оптимізовані анімації. Не прив’язуюся до інструментів: обираю технології під задачу й швидко адаптуюсь. Прагну зростати, брати складніші задачі та підсилювати цінність продукту.",
            ],
            shortQuote:
                "Робота займатиме велику частину нашого життя, і єдиний спосіб бути по-справжньому задоволеним — це робити те, що ви любите.",
            services: [
                "Розробка адаптивних веб-інтерфейсів",
                "Створення сучасних лендінгів та промосторінок",
                "Інтеграція фронтенду з API та зовнішніми сервісами",
                "Реалізація анімацій та мікровзаємодій",
                "Оптимізація продуктивності інтерфейсу",
                "Підготовка SEO-орієнтованих сторінок",
            ],
            team: "i love my team",
            languages: [
                { name: "Українська", level: "Рідна" },
                { name: "Англійська", level: "Середній" },
            ],
            education: [
                {
                    institution:
                        "Yurii Kondratiuk Poltava National Technical University",
                    degree: "Master's degree of Economic Cybernetics",
                    yearStart: 2003,
                    yearEnd: 2008,
                },
            ],
            certificates: [
                {
                    institution: "GoIT",
                    degree: "Full Stack Developer",
                    yearStart: 2021,
                    yearEnd: 2022,
                },
                {
                    institution: "English For IT",
                    degree: "English For Tech (level 1)",
                    yearStart: 2023,
                    yearEnd: 2023,
                },
            ],
        },
        en: {
            name: "Anna Prutnik",
            about: [
                "My main focus as a Frontend Developer is creating interfaces that not only look appealing but directly solve business problems and influence product outcomes. I enjoy how a few lines of code can improve efficiency, enhance user interaction, or increase conversion.",
                "Understanding business logic, user behavior, and project goals is essential for me. This allows me to build adaptive, high-performance, and stable solutions that work well across all devices.",
                "I’ve worked on projects of various complexity: from landing pages focused on conversion to web platforms where speed, UX, accessibility, and content architecture are key. I pay great attention to details, micro-interactions, and layout logic. I work with a modern stack — React, Next.js, Astro.js, TypeScript, UI libraries — creating custom components and optimized animations. I don’t stick to specific tools: I choose technologies based on the task and adapt quickly. I aim to grow, take on more complex challenges, and strengthen product value.",
            ],
            shortQuote: "Happiness is doing what you love.",
            services: [
                "Responsive web interface development",
                "Creation of modern landing pages and promo websites",
                "Frontend integration with APIs and external services",
                "Implementation of animations and micro-interactions",
                "Interface performance optimization",
                "Preparation of SEO-oriented pages",
            ],
            team: "i love my team",
            languages: [
                { name: "Ukrainian", level: "Native" },
                { name: "English", level: "Intermediate" },
            ],
            education: [
                {
                    institution:
                        "Yurii Kondratiuk Poltava National Technical University",
                    degree: "Master's degree of Economic Cybernetics",
                    yearStart: 2003,
                    yearEnd: 2008,
                },
            ],
            certificates: [
                {
                    institution: "GoIT",
                    degree: "Full Stack Developer",
                    yearStart: 2021,
                    yearEnd: 2022,
                },
                {
                    institution: "English For IT",
                    degree: "English For Tech (level 1)",
                    yearStart: 2023,
                    yearEnd: 2023,
                },
            ],
        },
        pl: {
            name: "Anna Prutnik",
            about: [
                "Moim głównym celem jako Frontend Developer jest tworzenie interfejsów, które nie tylko dobrze wyglądają, ale realnie rozwiązują problemy biznesowe i wpływają na wyniki produktu. Lubię, że kilka linijek kodu może poprawić efektywność, interakcję użytkownika lub konwersję.",
                "Kluczowe jest dla mnie zrozumienie logiki biznesu, zachowań użytkowników i celów projektu, co pozwala tworzyć adaptacyjne, wydajne i stabilne rozwiązania działające na wszystkich urządzeniach.",
                "Pracowałam nad projektami o różnej złożoności — od landing page’y nastawionych na konwersję po serwisy i platformy, w których liczą się szybkość, UX, dostępność i przejrzysta architektura treści. Zwracam uwagę na detale i mikrointerakcje. Pracuję z nowoczesnym stackiem (React, Next.js, Astro.js, TypeScript), tworzę komponenty niestandardowe i zoptymalizowane animacje, szybko dostosowuję się do nowych narzędzi. Dążę do rozwoju i realizacji zadań, które zwiększają wartość produktu.",
            ],
            shortQuote: "Szczęście to robić to, co się kocha.",
            services: [
                "Tworzenie responsywnych interfejsów webowych",
                "Projektowanie nowoczesnych landing page’y i stron promocyjnych",
                "Integracja frontendu z API i usługami zewnętrznymi",
                "Implementacja animacji i mikrointerakcji",
                "Optymalizacja wydajności interfejsu",
                "Przygotowanie stron zorientowanych na SEO",
            ],
            team: "i love my team",
            languages: [
                { name: "Ukraiński", level: "Ojczysty" },
                { name: "Angielski", level: "Średni" },
            ],
            education: [
                {
                    institution:
                        "Yurii Kondratiuk Poltava National Technical University",
                    degree: "Master's degree of Economic Cybernetics",
                    yearStart: 2003,
                    yearEnd: 2008,
                },
            ],
            certificates: [
                {
                    institution: "GoIT",
                    degree: "Full Stack Developer",
                    yearStart: 2021,
                    yearEnd: 2022,
                },
                {
                    institution: "English For IT",
                    degree: "English For Tech (level 1)",
                    yearStart: 2023,
                    yearEnd: 2023,
                },
            ],
        },
    },
    {
        data: {
            id: "oleksandr-petrychuk-fullstack-developer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560772/Alex_Petrychuk_jwgo0v.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online"],

            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/oleksandr-petrychuk/",
                github: "https://github.com/petalser",
            },
            tools: [
                "React",
                "Express",
                "Next",
                "MongoDB",
                "PostgreSQL",
                "JWT",
                "Node.js",
                "Bootstrap",
                "TailwindCSS",
            ],
            careerStart: "2024-07",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Олександр Петричук",
            about: [""],
            shortQuote:
                "Перш ніж намагатися вразити користувача, не змушуй його чекати та не змушуй його страждати.",
            services: [""],
            team: "i love my team",
        },
        en: {
            name: "Oleksandr Petrychuk",
            about: [""],
            shortQuote:
                "Before trying to impress the user, don't make them wait and don't make them suffer.",
            services: [""],
            team: "i love my team",
        },
        pl: {
            name: "Oleksandr Petrychuk",
            about: [""],
            shortQuote:
                "Zanim spróbujesz zaimponować użytkownikowi, nie każ mu czekać i nie każ mu cierpieć.",
            services: [""],
            team: "i love my team",
        },
    },
    {
        data: {
            id: "eugene-siedinin-qa-engineer",
            projectId: ["batatfarm-com"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560781/eugene-siedinin_oqebmc.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["batatfarm.com"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/eugene-sedinin/",
                telegram: "https://t.me/Siedinin",
                github: "https://github.com/qaEug",
            },
            tools: [
                "Jira",
                "Postman",
                "Swagger",
                "DBeaver",
                "SQL",
                "Terminal",
                "Git",
                "DevTools",
                "VSCode",
            ],
            careerStart: "2023-08",
        },
        ua: {
            name: "Євген Сєдінін",
            about: [""],
            shortQuote: "QA тоненькою ниточкою проходить крізь всі тонкощі IT.",
            services: [""],
            team: "Smachno! na seli",
        },
        en: {
            name: "Eugene Siedinin",
            about: [""],
            shortQuote:
                "QA weaves a fine thread through all the intricacies of IT.",
            services: [""],
            team: "Smachno! na seli",
        },
        pl: {
            name: "Eugene Siedinin",
            about: [""],
            shortQuote:
                "QA cienką nicią przechodzi przez wszystkie zawiłości IT.",
            services: [""],
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "oleksandr-shcherbak-qa-engineer",
            projectId: ["ilovemyteam-online", "willow-motion"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1743177906/Alex_Shcherbak_wo0hqq.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online", "willow-motion.space"],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "http://www.linkedin.com/in/oleksandr-shcherbak-69376130a",
                telegram: "https://t.me/alexxxandr2001",
            },
            tools: [
                "Postman",
                "Swagger",
                "Chrome DevTools",
                "SQL",
                "Git",
                "VSCode",
                "Jira",
                "ClickUp",
                "Trello",
                "TestRail",
                "Figma",
                "HTML/CSS",
            ],
            careerStart: "2024-12",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Олександр Щербак",
            about: [""],
            shortQuote: "Все, що не знайдеш ти, знайду я.",
            services: [""],
            team: "i love my team",
        },
        en: {
            name: "Oleksandr Shcherbak",
            about: [""],
            shortQuote: "What you can't find, I will.",
            services: [""],
            team: "i love my team",
        },
        pl: {
            name: "Oleksandr Shcherbak",
            about: [""],
            shortQuote: "To, czego nie znajdziesz, ja znajdę.",
            services: [""],
            team: "i love my team",
        },
    },
    {
        data: {
            id: "solomiia-lutska-project-project-manager-scrum-master",
            projectId: ["ilovemyteam-online", "alex-chudov"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560797/Solomia_l5xk4b.jpg",
            position: "Project Manager/ Scrum Master",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online", "choodov.com"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/solomiia-lutska",
            },
            tools: [
                "Jira",
                "Confluence",
                "Miro",
                "Figma",
                "Trello",
                "Google Sheets/Docs",
                "Slack",
                "Teams",
                "Microsoft Office",
            ],
            careerStart: "2024-06",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Соломія Луцька ",
            shortQuote: "",
            about: [""],
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Solomiia Lutska",
            shortQuote: "",
            about: [""],
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Solomiia Lutska",
            shortQuote: "",
            about: [""],
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "oksana-arpul-qa-engineer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1744795126/Oksana_QA_lnllhm.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "5",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/oksana-arpul/",
                telegram: "https://t.me/ArpulOksana",
            },
            tools: [
                "Postman",
                "Swagger",
                "Chrome DevTools",
                "SQL",
                "Jira",
                "Trello",
                "TestRail",
                "Figma",
                "HTML/CSS",
            ],
            careerStart: "2024-03",
        },
        ua: {
            name: "Оксана Арпуль",
            about: [
                "Займаюся ручним тестуванням різних типів (функціональне, нефункціональне, UI/UX, API, бази даних, продуктивність), аналізую вимоги, досліджую поведінку продукту, використовую різні підходи до тестування та створюю тестову документацію (test cases, checklists, bug reports).",
            ],
            shortQuote: "Якість - це ключ до впевненості в продукті.",
            services: undefined,
            team: "i love my team",
        },
        en: {
            name: "Oksana Arpul",
            about: [
                "I perform manual testing of various types (functional, non-functional, UI/UX, API, database, and performance), analyze requirements, explore product behavior, apply different testing approaches, and create test documentation (test cases, checklists, bug reports).",
            ],
            shortQuote: "Quality is the key to confidence in a product.",
            services: undefined,
            team: "i love my team",
        },
        pl: {
            name: "Oksana Arpul",
            about: [
                "Zajmuję się testowaniem manualnym różnych typów (funkcjonalne, niefunkcjonalne, UI/UX, API, bazy danych i wydajność), analizuję wymagania, badam zachowanie produktu, stosuję różne podejścia do testowania i tworzę dokumentację testową (przypadki testowe, listy kontrolne, raporty o błędach).",
            ],
            shortQuote: "Jakość to klucz do zaufania do produktu.",
            services: undefined,
            team: "i love my team",
        },
    },
    {
        data: {
            id: "viktoriia-lapina-ui-ux-designer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1744827270/Viktoriia_UIUX_m5lnsb.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/viktoria-lapina",
                behance: "https://www.behance.net/0dd36bf6",
                telegram: "https://t.me/viktoria_lapina",
            },
            tools: ["Figma", "Adobe Photoshop", "Jira"],
            careerStart: "2025-02",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Вікторія Лапіна",
            about: [""],
            shortQuote:
                "Хороший дизайн - це результат злиття естетики та функціональності.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Viktoriia Lapina",
            about: [""],
            shortQuote:
                "Good design is the result of merging aesthetics and functionality.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Viktoriia Lapina",
            about: [""],
            shortQuote:
                "Dobry design to efekt połączenia estetyki i funkcjonalności.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "stepan-kozurak-project-project-manager",
            projectId: ["ilovemyteam-online", "willow-motion"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1744830870/Stepan_PM_crqljr.jpg",
            position: "Project Manager",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online", "willow-motion.space"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/stepan-kozurak-a8931a9b",
                telegram: "https://t.me/StepsKos",
            },
            tools: [
                "Jira",
                "Confluence",
                "Google Sheets/Docs",
                "ClickUp",
                "Trello",
                "Notion",
                "SDLC",
                "User story",
                "User flow",
                "BPMN",
                "Slack",
                "Discord",
                "Miro",
                "Figma",
                "Lucidchart",
                "Microsoft Office",
            ],
            careerStart: "2025-02",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Степан Козурак",
            about: [""],
            shortQuote: "Робота - не вовк, ліс - не великий.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Stepan Kozurak",
            about: [""],
            shortQuote: "Work isn’t a wolf, and the forest isn’t that big.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Stepan Kozurak",
            about: [""],
            shortQuote: "Robota to nie wilk, las nie jest taki wielki.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "oksana-zhmurko-business-analyst",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1744830866/Oksana_BA_pnmuxb.jpg",
            position: "Business Analyst",
            categoryName: "business-analyst",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "7",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/oksana-zhmurko-9521b8266",
                telegram: "https://t.me/Ribesaur",
                github: "",
            },
            tools: [
                "Jira",
                "Confluence",
                "Balsamiq",
                "Draw.io",
                "Google Sheets",
                "Miro",
                "Figma",
                "Search IP",
                "Madrid Monitor",
                "TMview",
            ],
            careerStart: "2024-12",
        },
        ua: {
            name: "Оксана Жмурко",
            about: [
                "Аналіз бізнес-потреб замовників. Аналіз стейкхолдерів. Виявлення, аналіз та документування вимог в форматах User Story, Use Case, SRS, Wireframes. Моделювання BPMN, UML. Розуміння SDLC.",
                "Визначення об'єктів права інтелектуальної власності, розробка стратегії їх правової охорони. Оцінювання відповідності торговельних марок, аналіз ризиків виходу їх на ринок. Підготовка до реєстрації об'єктів інтелектуальної власності.",
            ],
            shortQuote:
                "Успіх прямо пропорційний зусиллям, які ми докладаємо. Аналіз бізнесу та обрана  стратегія захисту інтелектуальної власності - це вже половина успіху!",
            services: undefined,
            team: "I Love My Team",
        },
        en: {
            name: "Oksana Zhmurko",
            about: [
                "Analysis of customer business needs. Stakeholder analysis. Requirements elicitation, analysis, and documentation in User Story, Use Case, SRS, and Wireframes formats. BPMN and UML modelling. Understanding of the SDLC.",
                "Determining intellectual property objects, developing strategies for their legal protection. Assessment of trademarks and analysis of their market entry risks. Preparation for the registration of intellectual property rights.",
            ],
            shortQuote:
                "Success is directly proportional to the effort we apply. Business analysis and a chosen intellectual property strategy are already half the success!",
            services: undefined,
            team: "I Love My Team",
        },
        pl: {
            name: "Oksana Zhmurko",
            about: [
                "Analiza biznesowych potrzeb klientów. Analiza interesariuszy. Identyfikacja, analiza i dokumentacja wymagań w formatach User Story, Use Case, SRS, Wireframes. Modelowanie w notacji BPMN i UML. Znajomość cyklu życia oprogramowania (SDLC).",
                "Identyfikacja przedmiotów prawa własności intelektualnej, opracowywanie strategii ich ochrony prawnej. Ocena zgodności znaków towarowych, analiza ryzyka  związanego z ich wprowadzeniem na rynek. Przygotowywanie do rejestracji przedmiotów własności intelektualnej.",
            ],
            shortQuote:
                "Sukces jest wprost proporcjonalny do wysiłku, który wkładamy. Analiza biznesu i wybrana strategia  własności intelektualnej to już połowa sukcesu!",
            services: undefined,
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "diana-dudnyk-ui-ux-designer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1757583644/Diana_Dudnyk_sokqpn.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "5",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/dianadudnyk",
                behance: "https://www.behance.net/DudnykDiana",
                telegram: "https://t.me/diana_dudnyk",
            },
            tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Jira"],
            careerStart: "2025-01",
        },
        ua: {
            name: "Діана Дудник",
            about: [
                "Створюю інтерфейси, які поєднують функціональність, зручність та естетику. Моє головне завдання — зробити взаємодію користувача з продуктом інтуїтивно зрозумілою. Завжди орієнтуюсь на дослідження, потреби цільової аудиторії та чітку структуру. Вірю, що хороший дизайн починається з глибокого розуміння користувача та його очікувань.",
            ],
            shortQuote:
                "Мистецтво дизайну - це трансформація хаосу в чітку структуру.",
            services: undefined,
            team: "I Love My Team",
        },
        en: {
            name: "Diana Dudnyk",
            about: [
                "I create interfaces that combine functionality, usability, and aesthetics. My main goal is to make the user’s interaction with the product intuitively clear.I always focus on research, the needs of the target audience and a well-defined structure. I believe that great design starts with a deep understanding of the user and their expectations.",
            ],
            shortQuote:
                "Art of design is transforming chaos into a clear structure.",
            services: undefined,
            team: "I Love My Team",
        },
        pl: {
            name: "Diana Dudnyk",
            about: [
                "Tworzę interfejsy, które łączą w sobie funkcjonalność, wygodę i estetykę. Moim głównym zadaniem jest sprawienie, aby interakcja użytkownika z produktem była intuicyjna. Zawsze skupiam się na badaniach, potrzebach grupy docelowej i przejrzystej strukturze. Wierzę, że dobry projekt zaczyna się od głębokiego zrozumienia użytkownika i jego oczekiwań.",
            ],
            shortQuote:
                "Sztuka projektowania to przekształcanie chaosu w przejrzystą strukturę.",
            services: undefined,
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "vladyslava-bobko-ui-ux-designer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1757583644/Vladyslava_a7cvmi.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/vladyslava-bobko-4b424932b",
                behance: "https://www.behance.net/delfina2",
                telegram: "https://t.me/queenbvlv",
            },
            tools: [
                "Figma",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Jira",
                "Sketch",
                "ClickUp",
            ],
            careerStart: "2025-02",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Владислава Бобко",
            about: [""],
            shortQuote:
                "Мій підхід - це баланс витонченості та логіки: дизайн, гідний королівської уваги.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Vladyslava Bobko",
            about: [""],
            shortQuote:
                "My approach is about balancing elegance and logic: design is worthy of royal attention.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Vladyslava Bobko",
            about: [""],
            shortQuote:
                "Moje podejście to równowaga między finezją a logiką - design godny królewskiej uwagi.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "kateryna-pogrebna-qa-engineer",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560758/KaterynaPogrebna_cwu2q7.jpg",
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
            careerStart: "2023-07",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Катерина Погребна",
            about: [""],
            shortQuote:
                "Орієнтований на результат QA-інженер з досвідом тестування понад 2 роки, зокрема спеціалізується на платформах роздрібної торгівлі в Інтернеті, веб-додатках і системах обміну повідомленнями. ",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Pogrebna",
            about: [""],
            shortQuote:
                "Result-oriented QA engineer with over 2 years of testing experience, specializing in online retail platforms, web applications, and messaging systems. ",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Kateryna Pogrebna",
            about: [""],
            shortQuote:
                "Zorientowany na wyniki inżynier QA z ponad 2-letnim doświadczeniem w testowaniu, specjalizujący się w internetowych platformach sprzedaży detalicznej, aplikacjach internetowych i systemach przesyłania wiadomości. ",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "yuliya-borys-business-analyst",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560801/yuliya-borys_rwhbnu.jpg",
            position: "Business Analyst",
            categoryName: "business-analyst",
            projectsExperience: [],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/yuliya-borys-0ba014213/",
                telegram: "http://t.me/yuliyaborys",
            },
            tools: [
                "Jira",
                "Confluence",
                "Google Forms",
                "BPML (Draw.io, Figma)",
                "Miro",
            ],
            careerStart: "2023-05",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Юлія Борис",
            about: [""],
            shortQuote:
                "Бізнес-аналітик – це місток між бізнесом та командою розробки!",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Yuliya Borys",
            about: [""],
            shortQuote:
                "A business analyst is a bridge between the business and the development team!",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Yuliya Borys",
            about: [""],
            shortQuote:
                "Analityk biznesowy to pomost pomiędzy biznesem a zespołem programistów!",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "olha-kuchalska-business-analyst",
            projectId: [],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560789/OlhaKuchalska_j6guiu.jpg",
            position: "Business Analyst",
            categoryName: "business-analyst",
            projectsExperience: [],
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
            careerStart: "2023-09",
        },
        ua: {
            name: "Ольга Кучальська",
            about: [""],
            shortQuote:
                "Єдиний спосіб робити свою роботу добре — це любити її. Я люблю свою роботу!",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Olha Kuchalska",
            about: [""],
            shortQuote:
                "The only way to do your job well is to love it. I love my job!",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Olha Kuchalska",
            about: [""],
            shortQuote:
                "Jedynym sposobem, aby dobrze wykonywać swoją pracę, jest ją kochać. Kocham swoją pracę!",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "natalia-kalabanova-scrum-master",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1757583644/Natalia_Scrum_r8hmyz.jpg",
            position: "Project Manager/ Scrum Master",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "http://www.linkedin.com/in/natalia-kalabanova-625638153",
                telegram: "https://t.me/Natalia_myname",
            },
            tools: [
                "Jira",
                "Confluence",
                "Google Sheets",
                "Trello",
                "Notion",
                "SDLC",
                "User story",
                "User flow",
                "BPMN",
                "Google Docs",
                "Discord",
                "Miro",
                "Figma",
            ],
            careerStart: "2025-02",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Наталя Калабанова",
            about: [""],
            shortQuote: "Менше - це більше.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Natalia Kalabanova",
            about: [""],
            shortQuote: "Less is more.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Natalia Kalabanova",
            about: [""],
            shortQuote: "Mniej znaczy więcej.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "tetiana-drofa-project-manager",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1746727912/Tanya_PM_cj71fj.jpg",
            position: "Project Manager",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/tetiana-drofa/",
                telegram: "https://t.me/Tetyana_Drofa",
            },
            tools: [
                "Jira",
                "Confluence",
                "Google Sheets",
                "ClickUp",
                "Trello",
                "Notion",
                "SDLC",
                "User story",
                "User flow",
                "BPMN",
                "Slack",
                "Google Docs",
                "Discord",
                "Miro",
                "Figma",
                "Microsoft Office",
                "HTML",
                "CSS",
                "JavaScript",
            ],
            careerStart: "2025-02",
            isEndInAboutMT: true,
        },
        ua: {
            name: "Тетяна Дрофа",
            about: [""],
            shortQuote:
                "Моя мета - досягати результатів вчасно, якісно та з командною підтримкою.",
            services: [""],
            team: "I Love My Team",
        },
        en: {
            name: "Tetiana Drofa",
            about: [""],
            shortQuote:
                "My goal is to achieve results on time, with quality, and with the support of the team.",
            services: [""],
            team: "I Love My Team",
        },
        pl: {
            name: "Tetiana Drofa",
            about: [""],
            shortQuote:
                "Moim celem jest osiągnięcie wyników na czas, z zachowaniem jakości i przy wsparciu zespołu.",
            services: [""],
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "olga-ustymenko-qa",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1757583644/Olga_Ustymenko_jfbfzp.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "5",
            socialLinks: {
                linkedin: "www.linkedin.com/in/olha-ustymenko/",
                telegram: "https://t.me/olgaus91",
            },
            tools: [
                "Postman",
                "Swagger",
                "Chrome DevTools",
                "SQL",
                "Jira",
                "Trello",
                "TestRail",
                "Figma",
                "HTML/CSS",
            ],
            careerStart: "2025-01",
        },
        ua: {
            name: "Ольга Устименко",
            about: [""],
            shortQuote:
                "Підходжу до тестування з ентузіазмом, прагнучи забезпечити високу якість продукту.",
            services: undefined,
            team: "I Love My Team",
            languages: [
                { name: "Українська", level: "Рідна" },
                { name: "Англійська", level: "Середній" },
            ],
            education: [
                {
                    institution: "Kyiv National University of Culture and Arts",
                    degree: "Specialist in Computer Science",
                    yearStart: 2008,
                    yearEnd: 2014,
                },
            ],
            certificates: [
                {
                    institution: "Prometheus",
                    degree: "QA Manual from GlobalLogic",
                    yearStart: 2022,
                    yearEnd: 2023,
                },
                {
                    institution: "Prometheus",
                    degree: "QA Manual 2.0 Internship Program",
                    yearStart: 2023,
                    yearEnd: 2024,
                },
            ],
        },
        en: {
            name: "Olga Ustymenko",
            about: [""],
            shortQuote:
                "I approach testing with enthusiasm, striving to ensure high product quality.",
            services: undefined,
            team: "I Love My Team",
            languages: [
                { name: "Ukrainian", level: "Native" },
                { name: "English", level: "Intermediate" },
            ],
            education: [
                {
                    institution: "Kyiv National University of Culture and Arts",
                    degree: "Specialist in Computer Science",
                    yearStart: 2008,
                    yearEnd: 2014,
                },
            ],
            certificates: [
                {
                    institution: "Prometheus",
                    degree: "QA Manual from GlobalLogic",
                    yearStart: 2022,
                    yearEnd: 2023,
                },
                {
                    institution: "Prometheus",
                    degree: "QA Manual 2.0 Internship Program",
                    yearStart: 2023,
                    yearEnd: 2024,
                },
            ],
        },
        pl: {
            name: "Olga Ustymenko",
            about: [""],
            shortQuote:
                "Podchodzę do testowania z entuzjazmem, dążąc do zapewnienia wysokiej jakości produktu.",
            services: undefined,
            team: "I Love My Team",
            languages: [
                { name: "Ukraiński", level: "Ojczysty" },
                { name: "Angielski", level: "Średni" },
            ],
            education: [
                {
                    institution: "Kyiv National University of Culture and Arts",
                    degree: "Specialist in Computer Science",
                    yearStart: 2008,
                    yearEnd: 2014,
                },
            ],
            certificates: [
                {
                    institution: "Prometheus",
                    degree: "QA Manual from GlobalLogic",
                    yearStart: 2022,
                    yearEnd: 2023,
                },
                {
                    institution: "Prometheus",
                    degree: "QA Manual 2.0 Internship Program",
                    yearStart: 2023,
                    yearEnd: 2024,
                },
            ],
        },
    },
    {
        data: {
            id: "iryna-andrushchenko-ui-ux-designer",
            projectId: ["ilovemyteam-online"],

            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1757583644/Iryna_Andrushchenko_osltqv.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "10",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/iryna-andrushchenko/",
                behance: "https://www.behance.net/andrushchenko",
                telegram: "https://t.me/ignis_creatio",
            },
            tools: [
                "Figma",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Cinema 4D",
                "ProtoPie",
            ],
            careerStart: "2023-04",
        },
        ua: {
            name: "Ірина Андрущенко",
            about: [
                "Я людина, а не робот — моя креативність, ідеї та увага до деталей надають кожному проєкту унікальності. Як UI/UX та вебдизайнер, я зосереджуюсь на гармонійному поєднанні естетики й функціональності, створюючи інтуїтивні та захопливі користувацькі досвіди.",
                "Я досягаю найкращих результатів у командному середовищі, де цінують відкритість, обмін ідеями та співпрацю. Впевнено працюю у Figma, приділяю багато уваги деталям і постійно вдосконалюю свої навички, вивчаючи нові методології та надихаючись сучасними тенденціями у дизайні.",
            ],
            shortQuote:
                "Хороший дизайн непомітний, але його вплив залишається назавжди.",
            services: undefined,
            team: "I Love My Team",
        },
        en: {
            name: "Iryna Andrushchenko",
            about: [
                "I am a human, not a robot — my creativity, ideas, and attention to detail bring uniqueness to every project. As a UI/UX and web designer, I focus on seamlessly combining aesthetics with functionality to deliver intuitive and engaging user experiences.",
                "I thrive in collaborative environments that value openness, idea exchange, and teamwork. Proficient in Figma, I pay close attention to detail and continuously enhance my skills by exploring new methodologies and staying inspired by the latest design trends.",
            ],
            shortQuote: "Great design is invisible, yet its influence endures.",
            services: undefined,
            team: "I Love My Team",
        },
        pl: {
            name: "Iryna Andrushchenko",
            about: [
                "Jestem człowiekiem, a nie robotem — moja kreatywność, pomysły i dbałość o szczegóły nadają każdemu projektowi wyjątkowy charakter. Jako projektant UI/UX i stron internetowych koncentruję się na harmonijnym łączeniu estetyki z funkcjonalnością, aby tworzyć intuicyjne i angażujące doświadczenia użytkownika.",
                "Najlepiej odnajduję się w środowiskach zespołowych, w których ceni się otwartość, wymianę pomysłów i współpracę. Biegle posługuję się Figmą, zwracam dużą uwagę na detale i nieustannie rozwijam swoje umiejętności, poznając nowe metody oraz inspirując się najnowszymi trendami w projektowaniu.",
            ],
            shortQuote:
                "Dobry projekt pozostaje niewidoczny, lecz jego oddziaływanie trwa wiecznie.",
            services: undefined,
            team: "I Love My Team",
        },
    },
];
