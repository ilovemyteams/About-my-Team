import { Slug } from "./portfolioData";

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
    projectId: Slug[];
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
            id: "susanna-salata-product-manager",
            projectId: [
                "ilovemyteam-online",
                "batatfarm-com",
                "theatermag-com-ua",
                "alex-chudov",
                "viktoriia-zabara",
                "hoida-liudmyla",
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
                "viktoriia-zabara.netlify.app",
                "liudmyla-hoida-landing.netlify.app",
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
        },
        ua: {
            name: "Сусанна Салата",
            about: "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services:
                "Консультування, аналіз бізнес-процесів, стратегічне планування, бюджетування, управління проєктами та командами, розвиток продуктів. Менторинг для початківців в ІТ.",
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
                "Doradztwo, analiza i dostosowywanie procesów biznesowych, planowanie strategiczne, budżetowanie, zarządzanie projektami i zespołami, rozwój produktów oraz zarządzanie kryzysowe projektami i produktami. Mentoring dla początkujących w IT.",
            team: "I Love My Team",
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
        },
        ua: {
            name: "Марія Попова",
            about: "Що б ви не робили, робіть це з любов'ю. Зрештою, це відчується.",
            services:
                "Розробка дизайну продуктів та веб застосунків, розробка логотипів, брендінгу компаній, створення ілюстрацій. Медіа для соц мереж, типографія, розробка UX/UI дизайну, інфографіка.",
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
            about: "Cokolwiek robisz, rób to z miłością. W końcu to się odczuwa.",
            services:
                "Projektowanie produktów i aplikacji internetowych, tworzenie logo, branding firmy, ilustracje. Media dla sieci społecznościowych, typografia, projektowanie UX/UI, infografiki.",
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
            about: `"Хтось має з тим розібратись?" - Я людина, яка з тим розбирається!`,
            services:
                "Аналіз бізнес-потреб замовника, ринку і конкурентів. Розробка, аналіз, впорядкування та формалізація вимог. Написання технічної документації,user-story. Знання SDLC, гнучких методологій та базові знання менеджменту.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Svitlana Kondratenko",
            about: `"Someone needs to sort this out?" - I am the person who sorts it out! `,
            services:
                "Analysis of the customer's business needs, market and competitor analysis. Development, analysis, organization, and formalization of requirements. Writing technical documentation, and user stories. Knowledge of SDLC, agile methodologies, and basic management skills.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Svitlana Kondratenko",
            about: "„Ktoś musi się tym zająć?” - Ja jestem osobą, która to zrobi!",
            services:
                "Analiza potrzeb biznesowych klienta, rynku i konkurencji. Opracowywanie, analizowanie, organizowanie i formalizowanie wymagań. Pisanie dokumentacji technicznej, user-story. Znajomość SDLC, metodyk zwinnych i podstaw zarządzania.",
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
            about: "Мій акцент на чіткій комунікації гарантує, що кожен проект відповідає суворим стандартам і очікуванням клієнтів.",
            services:
                "Розробка сайтів будь-якої складності, інтернет-магазинів, посадкових сторінок. Наставництво для початківців Frontend-розробників.",
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
            about: "Stawiam na jasną komunikację, dzięki czemu każdy projekt spełnia rygorystyczne standardy i oczekiwania klientów.",
            services:
                "Tworzenie stron internetowych o dowolnej złożoności, sklepów internetowych, stron docelowych. Mentoring dla początkujących programistów Frontend.",
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
        },
        ua: {
            name: "Ігор Дронішинець",
            about: "Ефективно перетворюю складні завдання на прості та зрозумілі рішення.",
            services:
                "Повний цикл розробки сайтів від створення логотипу та бренд буку до релізу на прод та передачі прав доступу Замовнику. Графічний дизайн, розробка логотипу та фірмового стилю, виготовлення поліграфічної продукції, дизайн етикетки та упаковки, зовнішня реклама.",
            team: "I Love My Team",
        },
        en: {
            name: "Ihor Dronishynets",
            about: "Effectively transform complex tasks into simple and comprehensible solutions.",
            services:
                "Full-cycle website development from logo creation and brand book to production release and transfer of access rights to the customer. Graphic design, logo, and corporate identity development, printed matter production, label and packaging design, and outdoor advertising.",
            team: "I Love My Team",
        },
        pl: {
            name: "Ihor Dronishynets",
            about: "Skutecznie zamieniam złożone zadania w proste i przejrzyste rozwiązania.",
            services:
                "Tworzenie stron internetowych w pełnym cyklu, od stworzenia logo i księgi znaku po wprowadzenie produktu na rynek i przekazanie praw dostępu klientowi. Projektowanie graficzne, opracowywanie logo i identyfikacji wizualnej, drukowanie, projektowanie etykiet i opakowań, reklama zewnętrzna.",
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
            ],
            pricePerHour: "14",
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
            about: "Dobry design powinien przede wszystkim rozwiązywać problemy.",
            services:
                "Zapewniam pełen zakres usług projektowania produktów, w tym badania rynku, analizę konkurencji, badania użytkowników, architekturę informacji i interaktywne prototypy.",
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
        },
        ua: {
            name: "Анастасія Назаренко",
            about: "Дизайнер - це стратег з почуттям прекрасного.",
            services:
                "Я пропоную широкий спектр творчих послуг, включаючи розробку логотипів та брендинг компанії. Моя спеціалізація охоплює створення 2D ілюстрацій (растрових і векторних) та простих анімацій для візуалізації ваших ідей. Я також займаюся розробкою медіа для соціальних мереж, типографіки та інфографіки. Маю ґрунтовні знання у сфері UX/UI дизайну, що забезпечує естетичність і зручність використання ваших проектів.",
            team: "I Love My Team",
        },
        en: {
            name: "Anastasiia Nazarenko",
            about: "Designer is a planner with a sense of beauty",
            services:
                "I offer a range of creative services including logo design and company branding. I specialize in crafting 2D illustrations, both raster and vector, and can create simple animations to bring your ideas to life. My expertise extends to designing media for social networks, typography, and infographics. I also have a solid foundation in UX/UI design, ensuring that your projects are not only visually appealing but also user-friendly and effective.",
            team: "I Love My Team",
        },
        pl: {
            name: "Anastasiia Nazarenko",
            about: "Projektant to strateg z wyczuciem piękna.",
            services:
                "Oferuję szeroki zakres usług kreatywnych, w tym projektowanie logo i branding firmy. Specjalizuję się w tworzeniu ilustracji 2D, zarówno rastrowych, jak i wektorowych, oraz prostych animacji, które ożywią Twoje pomysły. Moja ekspertyza obejmuje również projektowanie mediów społecznościowych, typografię i infografiki. Posiadam solidne podstawy w projektowaniu UX/UI, co gwarantuje, że Twoje projekty będą nie tylko estetyczne, ale także przyjazne dla użytkownika i skuteczne.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "eugene-serdiuk-fullstack-developer",
            projectId: ["batatfarm-com"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560758/eugene-serdiuk_wmghk8.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["batatfarm.com"],
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
        },
        ua: {
            name: "Євген Сердюк",
            about: "Зараз все зробимо!",
            services:
                "Розробка та підтримка Web-додатків з урахуванням семантичної верстки та адаптивного дизайну до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних застосунків з використанням JavaScript та NodeJS. Робота з базами даних MongoDB, PosgreSQ.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Eugene Serdiuk",
            about: "We'll do it now!",
            services:
                "Development and support of Web applications with semantic layout and responsive design for different screen sizes. Creating interactive and dynamic interfaces using the React library. Development of server-side applications using JavaScript and NodeJS. Working with MongoDB, PosgreSQ databases.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Eugene Serdiuk",
            about: "Teraz to zrobimy!",
            services:
                "Rozwój i wsparcie aplikacji internetowych z semantycznym układem i responsywnym designem dla różnych rozmiarów ekranu. Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu biblioteki React. Rozwój aplikacji serwerowych. przy użyciu JavaScript i NodeJS. Praca z bazami danych MongoDB i PosgreSQ.",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "iryna-trynkal-fullstack-developer",
            projectId: ["ilovemyteam-online", "protection-in-ua"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560760/IrynaTrynkal_o5cfzy.jpg",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online", "protection.in.ua"],
            pricePerHour: "12",
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
        },
        ua: {
            name: "Ірина Тринкаль",
            about: "Можливо все, на неможливе просто потрібно більше часу.",
            services:
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних застосунків з використанням JavaScript та Node.js. Створення та управління бекенд API для забезпечення комунікації між фронтендом та сервером. Впровадження аутентифікації користувачів та надання прав доступу для забезпечення безпеки додатків. Поєднання компонентів фронтенду та бекенду для створення єдиної, працюючої програми.",
            team: "I Love My Team",
        },
        en: {
            name: "Iryna Trynkal",
            about: "Anything is possible, the impossible just takes longer.",
            services:
                "Development and style web pages using HTML, CSS, and JavaScript with a focus on semantics and responsiveness to different screen sizes. Creation of interactive and dynamic interfaces using the React library. Development of server applications using JavaScript and Node.js. Creation and management of backend APIs to ensure communication between frontend and server. Implementation of user authentication and access control to ensure application security. Integration of frontend and backend components to create a unified, functioning application.",
            team: "I Love My Team",
        },
        pl: {
            name: "Iryna Trynkal",
            about: "Wszystko jest możliwe, niemożliwe wymaga tylko więcej czasu.",
            services:
                "Tworzenie i projektowanie stron internetowych przy użyciu HTML, CSS i JavaScript z naciskiem na semantykę i responsywność dla różnych rozmiarów ekranu. Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu biblioteki React. Tworzenie aplikacji po stronie serwera przy użyciu JavaScript i Node.js. Tworzenie i zarządzanie API serwera w celu zapewnienia komunikacji między interfejsem zewnętrznym a serwerem. Wdrażanie uwierzytelniania użytkowników i kontroli dostępu w celu zapewnienia bezpieczeństwa aplikacji. Integracja komponentów zewnętrznych i backendowych w celu stworzenia jednej funkcjonalnej aplikacji.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "olena-posternak-frontend-developer",
            projectId: [],
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
        },
        ua: {
            name: "Олена Постернак",
            about: "Дрібниці важливі. Часто саме вони роблять життя комфортнішим.",
            services:
                "Спеціалізуюсь на розробці веб-додатків, з урахуванням семантичності та адаптивності до різних розмірів екранів. Створюю інтерактивні застосунки, використовуючи різноманітні JavaScript-фреймворки та бібліотеки. Моя основна мета - забезпечити користувачам комфортний та зручний досвід використання веб-додатків.",
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
                "Specjalizuje się w tworzeniu aplikacji internetowych z naciskiem na semantykę i responsywność na różnych rozmiarach ekranu. Tworzę interaktywne aplikacje przy użyciu różnych frameworków i bibliotek JavaScript. Moim głównym celem jest zapewnienie użytkownikom wygodnych i funkcjonalnych aplikacji internetowych.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "olga-mykhailova-frontend-developer",
            projectId: [],
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
        },
        ua: {
            name: "Ольга Михайлова",
            about: "Люблю знаходити елегантні рішення для складних задач.",
            services:
                "Створення зручних для користувачів та ефективних для бізнесу web-застосунків різного рівня складності. Фокусуюсь на поєднанні максимальної функціональності та естетичності для досягнення бездоганного результату.",
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
            about: "Uwielbiam znajdować eleganckie rozwiązania złożonych problemów.",
            services:
                "Tworzenie przyjaznych dla użytkownika i skutecznych aplikacji biznesowych o różnym stopniu złożoności. Koncentrujemy się na łączeniu maksymalnej funkcjonalności i estetyki, aby osiągnąć nieskazitelne rezultaty.",
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
        },
        ua: {
            name: "Катерина Рубанік",
            about: "QA-інженер з досвідом у тестуванні ПЗ. Володію навичками тестування, аналізу та виявлення помилок для забезпечення бездоганної якості продукту.",
            services:
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування API.",
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Rubanik",
            about: "QA engineer with experience in software testing. I have the skills to test, analyze and identify errors to ensure flawless product quality.",
            services:
                "Creation of test documentation (test plan, checklists, test cases, bug reports). Conducting web/mobile testing, API testing.",
            team: "I Love My Team",
        },
        pl: {
            name: "Kateryna Rubanik",
            about: "Inżynier QA z doświadczeniem w testowaniu oprogramowania. Posiadam umiejętności testowania, analizowania i wykrywania błędów w celu zapewnienia nienagannej jakości produktu.",
            services:
                "Tworzenie dokumentacji testowej (plany testów, listy kontrolne, przypadki testowe, raporty błędów). Przeprowadzanie testów internetowych/mobilnych, testów API.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "susanna-salata-business-analyst",
            projectId: [],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560762/SusannaSalata_kpudlm.jpg",
            position: "Business Analyst",
            categoryName: "business-analytic",
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
        },
        ua: {
            name: "Сусанна Салата",
            about: "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services:
                "Аналіз потреб клієнтів, аналіз ринку та конкурентів, а також аналіз маркетингових і виробничих даних. Розробка, аналіз, організація та формалізація вимог. Управління вимогами, координація розробників і зацікавлених сторін. Аналіз та управління ризиками. Менторство для початківців ІТ.",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Work should bring inspiration and satisfaction, not just money.",
            services:
                "Analysis of customer needs, market and competitor analysis, as well as analysis of marketing and production data. Development, analysis, organization, and formalization of requirements. Requirements management, developer and stakeholder coordination. Risk analysis and management. Mentoring for IT beginners.",
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: "Praca powinna dawać inspirację i satysfakcję, a nie tylko pieniądze.",
            services:
                "Analiza potrzeb klientów, analiza rynku i konkurencji oraz analiza danych marketingowych i produkcyjnych. Rozwój, analiza, organizacja i formalizacja wymagań. Zarządzanie wymaganiami, koordynacja deweloperów i interesariuszy. Analiza i zarządzanie ryzykiem. Mentoring dla początkujących w IT.",
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
        },
        ua: {
            name: "Денис Слівінський",
            about: "Справжня дурість щоразу перемагає штучний інтелект",
            services:
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних застосунків з використанням JavaScript та Node.js.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Denis Slivinskyi",
            about: "Real stupidity beats artificial intelligence every time",
            services:
                "Develop and style web pages using HTML, CSS, and JavaScript, taking into account semantics and adaptability to different screen sizes. Creating interactive and dynamic interfaces using the React library. Development of server-side applications using JavaScript and Node.js.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Denis Slivinskyi",
            about: "Prawdziwa głupota za każdym razem pokonuje sztuczną inteligencję.",
            services:
                "Tworzenie i stylizowanie stron internetowych przy użyciu HTML, CSS i JavaScript, z uwzględnieniem semantyki i możliwości dostosowania do różnych rozmiarów ekranu. Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu biblioteki React. Tworzenie aplikacji po stronie serwera przy użyciu JavaScript i Node.js.",
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
        },
        ua: {
            name: "Володимир Дегтярев",
            about: "Нічого не вийде, якщо ви цього не зробите",
            services:
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою React та Next.js. Розробка бекенду з використанням Node.js та NestJS.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Volodymyr Dehtiarev",
            about: "Nothing will work unless you do",
            services:
                "Develop and style web pages using HTML, CSS, and JavaScript, taking into account semantics and adaptability to different screen sizes. Creating interactive and dynamic interfaces using React and Next.js. Backend development using Node.js and NestJS.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Volodymyr Dehtiarev",
            about: "Nie będzie działać, jeśli tego nie zrobisz.",
            services:
                "Tworzenie i stylizacja stron internetowych przy użyciu HTML, CSS i JavaScript, z uwzględnieniem semantyki i możliwości dostosowania do różnych rozmiarów ekranu. Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu React i Next.js. Rozwój backendu przy użyciu Node.js i NestJS.",
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
        },
        ua: {
            name: "Олена Чорнобривець",
            about: "Забезпечення якості означає запобігання помилкам.",
            services:
                "Ручне мобільне/веб тестування, API тестування, створення тестової документації: тест кейс, чекліст, баг репорт.",
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
            about: "Zapewnienie jakości to zapobieganie błędom.",
            services:
                "Ręczne testowanie mobilne/webowe, testowanie API, tworzenie dokumentacji testowej: przypadek testowy, lista kontrolna, raport o błędach.",
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
        },
        ua: {
            name: "Ганна Горбенко",
            about: "QA для мене це як цифровий детектив. Процес розслідування мене захоплює!",
            services:
                "Ручне тестування, Чорне/Сіре тестування, Веб/Мобільне тестування, Системне тестування, Регресійне тестування, Sanity тестування, Димове тестування, Спонтанне тестування, З тестовими випадками, Функціональне тестування, Тестування сумісності, Тестування зручності використання, Техніки дизайну тестів. Документація тестування: План тестування, Тестові випадки, Чеклісти, Звіти про помилки. Знання SDLC, Водоспадної моделі, Концепцій Agile (Scrum, Kanban), STLC, Git та Терминала, SQL (MySQL, SQLite, DBeaver).",
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
            about: "QA jest dla mnie jak cyfrowy detektyw. Proces śledczy jest dla mnie fascynujący!",
            services:
                "Testowanie ręczne, testowanie czarne/szare, testowanie sieciowe/mobilne, testowanie systemowe, testowanie regresji, testowanie poprawności, dymne testowanie, testowanie spontaniczne, z przypadkami testowymi, testowanie funkcjonalne, testowanie kompatybilności, testowanie użyteczności, techniki projektowania testów. Dokumentacja testowa: Plan testów, Przypadki testowe, Listy kontrolne, Raporty błędów. Znajomość SDLC, modelu Waterfall, koncepcji Agile (Scrum, Kanban), STLC, Git i Terminal, SQL (MySQL, SQLite, DBeaver).",
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
        },
        ua: {
            name: "Анна Клиба",
            about: "QA є ключем до надійності та довіри до продукту",
            services:
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування API.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Anna Klyba",
            about: "QA is the key to product reliability and trust.",
            services:
                "Creation of test documentation (test plans, checklists, test cases, bug reports). Conducting web/mobile testing, API testing.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Anna Klyba",
            about: "QA jest kluczem do niezawodności i zaufania do produktu.",
            services:
                "Tworzenie dokumentacji testowej (plan testów, listy kontrolne, przypadki testowe, raporty błędów). Testy internetowe/mobilne, testy API.",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "oksana-luchko-qa-engineer",
            projectId: [],
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
        },
        ua: {
            name: "Оксана Лучко",
            about: "Я завжди готова вчитися новому та застосовувати свої знання на практиці. Буду рада долучитися до вашої команди та внести свій внесок у забезпечення якості програмного забезпечення.",
            services:
                "Створення тестової документації (чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування API.",
            team: "I Love My Team",
        },
        en: {
            name: "Oksana Luchko",
            about: "I am always ready to learn new things and apply my knowledge in practice. I would be happy to join your team and contribute to software quality assurance.",
            services:
                "Creation of test documentation (checklists, test cases, bug reports). Conducting web/mobile testing, API testing.",
            team: "I Love My Team",
        },
        pl: {
            name: "Oksana Luchko",
            about: "Zawsze jestem gotowa uczyć się nowych rzeczy i wykorzystywać zdobytą wiedzę w praktyce. Chętnie dołączę do Twojego zespołu i przyczynię się do zapewnienia jakości oprogramowania.",
            services:
                "Tworzenie dokumentacji testowej (listy kontrolne, przypadki testowe, raporty błędów). Przeprowadzanie testów internetowych/mobilnych, testów API.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "nadia-hubchuk-qa-engineer",
            projectId: ["alex-chudov"],
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
        },
        ua: {
            name: "Надія Губчук",
            about: "Основна моя задача впевнитися, що продукт працює без збоїв, виявляючи помилки та недоліки, які можуть завадити вашим користувачам насолоджуватися ним. Чим раніше, тим краще!",
            services:
                "Створення test-case, checklist, bug report. Рев’ю вимог. Тестування web- та mob- додатків. Тестування API Postman.",
            team: "I Love My Team",
        },
        en: {
            name: "Nadia Hubchuk",
            about: "My top priority is making sure your product runs smoothly by spotting any bugs or issues that could affect user enjoyment. The sooner, the better!",
            services:
                "Creating test cases, checklists, bug reports. Requirements review. Testing of web and mob applications. Testing Postman API.",
            team: "I Love My Team",
        },
        pl: {
            name: "Nadia Hubchuk",
            about: "Moim głównym zadaniem jest upewnianie się, że produkt działa płynnie, znajdowanie błędów i wad, które mogą uniemożliwić użytkownikom korzystanie z niego. Im szybciej tym lepiej!",
            services:
                "Tworzenie przypadku testowego, listy kontrolnej, raportu o błędzie. Przegląd wymagań. Testowanie aplikacji webowych i mobowych. Testowanie API Postmana.",
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
        },
        ua: {
            name: "Тетяна Селецька",
            about: "Мета без плану - це просто бажання. В мене завжди є план.",
            services:
                "Займаюся організацією та плануванням проєктів, включаючи розробку детальних планів і визначення ключових етапів для успішного виконання. Відповідаю за координацію команди, забезпечуючи чітку комунікацію та ефективну співпрацю між учасниками. Регулярно відстежую прогрес на щоденних мітингах, аналізую виконання завдань і вчасно виявляю відхилення. Активно займаюся вирішенням виникаючих проблем і питань, що дозволяє уникнути затримок і забезпечити дотримання термінів.",
            team: "I Love My Team",
        },
        en: {
            name: "Tetiana Seletska",
            about: "A goal without a plan is just a wish. I always have a plan.",
            services:
                "I organize and plan projects, including developing detailed plans and identifying key milestones for successful execution. I am responsible for coordinating the team, ensuring clear communication and effective collaboration between participants. I regularly monitor progress at daily meetings, analyze the implementation of tasks and identify deviations in a timely manner. I am actively involved in solving problems and issues that arise, which allows me to avoid delays and ensure that deadlines are met.",
            team: "I Love My Team",
        },
        pl: {
            name: "Tetiana Seletska",
            about: "Cel bez planu to tylko życzenie. Ja zawsze mam plan.",
            services:
                "Organizuję i planuję projekty, w tym opracowuję szczegółowe plany i określam kluczowe kamienie milowe dla pomyślnej realizacji. Odpowiadam za koordynację zespołu, zapewniając jasną komunikację i efektywną współpracę między uczestnikami. Regularnie monitoruję postępy podczas codziennych spotkań, analizuję realizację zadań i w odpowiednim czasie identyfikuję odchylenia. Proaktywnie odpowiadam na wszelkie pojawiające się kwestie i pytania, co pomaga uniknąć opóźnień i zapewnić dotrzymanie terminów.",
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
            about: "Junior Project Manager/ Scrum Master z chęcią rozwoju zawodowego. Zarządzam procesem, zapewniam efektywną komunikację i osiąganie celów.",
            services:
                "Świadczę usługi jako Młodszy Kierownik Projektu. Koordynuję i ułatwiam realizację projektów zgodnie z metodologią Scrum.",
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
        },
        ua: {
            name: "Ганна Труба",
            about: "Люди йдуть до людей! Ніколи не нехтуй людським фактором у бізнесі!",
            services:
                "Досвідчений бізнес-аналітик з понад трьома роками роботи в міжнародному холдингу, спеціалізуюсь на аналізі та налаштуванні бізнес-процесів, стратегічному плануванні, бюджетуванні, управлінні проєктами, розробці продуктів. Мої компетенції уналежнюють розробку та реалізацію стратегій позиціонування, аналіз ринку та конкурентів, створення ефективних маркетингових кампаній. Активно користуюсь сучасними методами дослідження, такі як критичний дискурс-аналіз, для глибшого розуміння комунікацій та їхнього впливу.",
            team: "I Love My Team",
        },
        en: {
            name: "Hanna Truba",
            about: "People go to people! Never neglect the human factor in business!",
            services:
                "An experienced business analyst with over three years of work in an international holding, specializing in business process analysis and optimization, strategic planning, budgeting, project management, and product development. My competencies include the development and implementation of positioning strategies, market and competitor analysis, and the creation of effective marketing campaigns. I actively use modern research methods, such as critical discourse analysis, for a deeper understanding of communications and their impact.",
            team: "I Love My Team",
        },
        pl: {
            name: "Hanna Truba",
            about: "Ludzie idą do ludzi! Nigdy nie lekceważ czynnika ludzkiego w biznesie!",
            services:
                "Doświadczony analityk biznesowy z ponad trzyletnim doświadczeniem w pracy w międzynarodowym holdingu, specjalizujący się w analizie i optymalizacji procesów biznesowych, planowaniu strategicznym, budżetowaniu, zarządzaniu projektami oraz rozwoju produktów. Moje kompetencje obejmują opracowywanie i wdrażanie strategii pozycjonowania, analizę rynku i konkurencji oraz tworzenie skutecznych kampanii marketingowych. Aktywnie korzystam z nowoczesnych metod badawczych, takich jak krytyczna analiza dyskursu, aby głębiej zrozumieć komunikację i jej wpływ.",
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
        },
        ua: {
            name: "Олена Голубьонкова",
            about: "Маркетинг - це все! І все є маркетингом!",
            services:
                "Маркетингові дослідження галузі, ринку, споживачів. Системний стратегічний аналіз. Допомога у формулюванні та структуруванні цілей бізнесу. Розробка системи маркетингових стратегій для досягнення поставлених цілей. Система маркетингу для створення нових продуктів (товарів, послуг, програмних продуктів) та виведення їх на ринок.",
            team: "I Love My Team",
        },
        en: {
            name: "Olena Holubonkova",
            about: "Marketing is everything! And everything is marketing!",
            services:
                "Marketing research of industry, market, and consumers. System strategic analysis. Help in formulating and structuring business goals. Development of a system of marketing strategies to achieve the set goals. Marketing system for creating new products (goods, services, software products) and bringing them to market.",
            team: "I Love My Team",
        },
        pl: {
            name: "Olena Holubonkova",
            about: "Marketing jest wszystkim! A wszystko jest marketingiem!",
            services:
                "Badania marketingowe branży, rynku, konsumentów. Usystematyzowana analiza strategiczna. Pomoc w formułowaniu i strukturyzacji celów biznesowych. Opracowanie systemu strategii marketingowych umożliwiających osiągnięcie wyznaczonych celów. Marketingowy system tworzenia nowych produktów (towarów, usług, oprogramowania) i wprowadzania ich na rynek.",
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
        },
        ua: {
            name: "Марта Морінцева",
            about: "Командна робота — це мистецтво перетворювати індивідуальні таланти у досконалий продукт.",
            services:
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти).  Проведення веб тестування, UX/UI тестування, Functional testing. тестування API. Робота з Базами даних.",
            team: "Smachno! na seli",
        },
        en: {
            name: "Marta Morintseva",
            about: "Teamwork is the art of transforming individual talents into a perfect product.",
            services:
                "Creation of test documentation (test plan, checklists, test cases, bug reports). Web testing, UX/UI testing, Functional testing, API testing. Working with databases.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Marta Morintseva",
            about: "Praca zespołowa to sztuka przekształcania indywidualnych talentów w doskonały produkt.",
            services:
                "Tworzenie dokumentacji testowej (plan testów, listy kontrolne, przypadki testowe, raporty błędów). Testowanie stron internetowych, testowanie UX/UI, testowanie funkcjonalne, testowanie API. Praca z bazami danych.",
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
            categoryName: "business-analytic",
            projectsExperience: ["batatfarm.com", "ilovemyteam.online"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/irishashevchenko",
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
        },
        ua: {
            name: "Ірина Шевченко",
            about: "Зараз подумаємо, потім обговоримо, а далі реалізуємо.",
            services:
                "Комунікативні навички. Збір та аналіз вимог, їх опис в User Story, оновлення документації, малювання BPMN-діаграм. Створення скетчів, мокапів, варфреймів. Розуміння SDLC, гнучких методологій та навичок управління.",
            team: "Smachno! na seli",
        },
        en: {
            name: "Iryna Shevchenko",
            about: "Now we'll think, then we'll discuss, and after that, we'll implement.",
            services:
                "Communication skills. Gathering and analyzing requirements, documenting them in User Stories, updating documentation, creating BPMN diagrams. Creating sketches, mockups, wireframes. Understanding SDLC, agile methodologies, and management skills.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Iryna Shevchenko",
            about: "Teraz pomyślimy, potem omówimy, a następnie zrealizujemy.",
            services:
                "Umiejętności komunikacyjne. Zbieranie i analizowanie wymagań, ich opis w User Stories, aktualizacja dokumentacji, rysowanie diagramów BPMN. Tworzenie szkiców, mockupów, makietów. Zrozumienie SDLC, zwinnych metodologii i umiejętności zarządzania.",
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
        },
        ua: {
            name: "Наталі Істоміна",
            about: "Я знаю як успішно вивести ваш продукт на ринок і почати заробляти на ньому.",
            services:
                "Спеціаліст з продуктового маркетингу. Маю досвід у розробці та виведенні на ринок нових продуктів (солодощі для ринку retail), створенні стратегій виходу на ринок, а також у брендінгу, PR, SMM та розробці рекламних кампаній (outdoor, audio). Володію навичками управління проєктами та розробкою споживчих упаковок.",
            team: "Український театр",
        },
        en: {
            name: "Natali Istomina",
            about: "I know how to successfully bring your product to the market and start making money on it.",
            services:
                "Product Marketing Specialist. Experienced in developing and launching new retail confectionery products. Skilled in go-to-market strategies, branding, PR, SMM, and outdoor/audio advertising. Proficient in project management and consumer packaging design.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Natali Istomina",
            about: "Wiem, jak skutecznie wprowadzić Twój produkt na rynek i zacząć na nim zarabiać.",
            services:
                "Specjalista ds. marketingu produktowego. Mam doświadczenie w rozwijaniu i wprowadzaniu na rynek nowych produktów (słodycze na rynek detaliczny), tworzeniu strategii wejścia na rynek, a także w brandingu, PR, SMM i opracowywaniu kampanii reklamowych (outdoor, audio). Posiadam umiejętności zarządzania projektami oraz doświadczenie w projektowaniu opakowań.",
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
            categoryName: "business-analytic",
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
        },
        ua: {
            name: "Наталі Істоміна",
            about: "Будь-які неструктуровані вимоги до продукту я можу передати в схемах, діаграмах чи таблицях  ",
            services:
                "Спеціалізуюсь на аналізі бізнес-процесів, розробці користувацьких історій, сценаріїв використання та вимог до програмного забезпечення. Маю досвід роботи з BPMN, створюю вайрфрейми та технічні завдання.",
            team: "Український театр",
        },
        en: {
            name: "Natali Istomina",
            about: "I can present any unstructured product requirements in diagrams, charts, or tables.",
            services:
                "I specialize in business process analysis, developing user stories, use cases, and software requirements. I have experience in BPMN, wireframing, and creating detailed technical specifications.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Natali Istomina",
            about: "Wszelkie niestrukturalne wymagania dotyczące produktu mogę przekazać w schematach, diagramach lub tabelach.",
            services:
                "Specjalizuję się w analizie procesów biznesowych, tworzeniu historii użytkowników, scenariuszy użycia i wymagań dotyczących oprogramowania. Mam doświadczenie w pracy z BPMN, tworzę makiety i specyfikacje techniczne.",
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
        },
        ua: {
            name: "Вероніка Злобіна",
            about: "Успішний дизайн — це не тільки краса, але й простота, яка допомагає користувачам досягти мети без зайвих зусиль.",
            services:
                "Створення дизайну для лендінгів, вебсайтів та мобільних додатків. Проведення UX досліджень(аналіз конкурентів та цільової аудиторії, інтерв'ю), опрацювання ТЗ, створення юзер флоу та інформаційної архітектури, JTBD та CJM; UX/UI дизайн, адаптивний дизайн, створення стилів, слідування айдентиці, прототипи та анімація. Створення банерів та постів для інстаграм або картинок для телеграм-ботів.",
            team: "Український театр",
        },
        en: {
            name: "Veronika Zlobina",
            about: "Successful design is not only about beauty, but also about simplicity, which helps users achieve their goals without any extra effort.",
            services:
                "Design for landing pages, websites, and mobile applications. Conducting UX research (competitor and target audience analysis, interviews), developing technical specifications, creating user flow and information architecture, JTBD and CJM; UX/UI design, responsive design, style creation, identity following, prototyping and animation. Creation of banners and posts for Instagram or pictures for Telegram bots.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Veronika Zlobina",
            about: "Udany projekt to nie tylko piękno, ale także prostota, która pomaga użytkownikom osiągnąć ich cele bez dodatkowego wysiłku.",
            services:
                "Tworzenie projektów stron landing page, stron internetowych i aplikacji mobilnych. Prowadzenie badań UX (analiza konkurencji i grupy docelowej, wywiady), opracowywanie specyfikacji technicznych, tworzenie przepływu użytkowników i architektury informacji, JTBD i CJM; Projektowanie UX/UI, projektowanie responsywne, tworzenie stylu, przestrzeganie identyfikacji wizualnej, prototypowanie i animacja. Tworzenie banerów i postów na Instagram lub zdjęć dla botów w Telegramie.",
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
            ],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560782/Mila_Maksymenko_gfxjbp.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: [
                "theatermag.com.ua",
                "ilovemyteam.online",
                "viktoriia-zabara.netlify.app",
                "choodov.com",
                "liudmyla-hoida-landing.netlify.app",
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
        },
        ua: {
            name: "Міла Максименко",
            about: "Краса в деталях.",
            services:
                "Створення дизайну для вебсайтів та мобільних застосунків враховуючи цілі бізнесу та потреби користувачів. Респонсивний дизайн. Проведення досліджень (опитування користувачів, глибинні інтерв'ю, аналіз конкурентів). Опрацювання отриманої інформації, створення персон, юзер флоу, карт емпатій. Розробка варфреймів, UI дизайну, UI кітів. ",
            team: "Український театр",
        },
        en: {
            name: "Mila Maksymenko",
            about: "Beauty is in the details.",
            services:
                "Creation of design for websites and mobile applications, taking into account business goals and user needs. Responsive design. Conducting research (user surveys, in-depth interviews, competitor analysis). Processing of received information, creation of personas, user flow, empathy maps. Development of wireframes, UI design, UI kit.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Mila Maksymenko",
            about: "Piękno tkwi w szczegółach.",
            services:
                "Tworzenie projektów dla stron internetowych i aplikacji mobilnych, uwzględniając cele biznesowe i potrzeby użytkowników. Projektowanie responsywne. Przeprowadzanie badań (ankiety użytkowników, wywiady pogłębione, analiza konkurencji). Analiza zebranych informacji, tworzenie person, ścieżek użytkownika, map empatii. Opracowywanie makietów, projektowanie UI, zestawów UI.",
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
        },
        ua: {
            name: "Антон Черток",
            about: "Великий результат досягається через увагу до деталей і прагнення до простоти.",
            services:
                "Спеціалізуюся на створенні сучасних, адаптивних і високоефективних інтерфейсів користувача, приділяючи особливу увагу якості коду, зменшенню кількості помилок і простоті підтримки. Використовую найкращі підходи для забезпечення швидкої розробки та масштабованості проєктів. Маю досвід розробки додатків, які можуть працювати як повністю на стороні користувача, так і частково на сервері, що забезпечує оптимальну швидкість завантаження, високу продуктивність і кращу видимість у пошукових системах. Створюю стильні та зручні інтерфейси, що відповідають сучасним стандартам дизайну. Також забезпечую повну інтеграцію з необхідними сервісами та автоматизацію процесів розробки, що дозволяє швидко і ефективно впроваджувати нові функції та оновлення.",
            team: "Український театр",
        },
        en: {
            name: "Anton Chertok",
            about: "Great results are achieved through attention to detail and a pursuit of simplicity.",
            services:
                "Specializes in creating modern, adaptive, and high-performance user interfaces, with a strong focus on code quality, reducing errors, and ease of maintenance. Best practices are employed to ensure the rapid development and scalability of projects. Experience includes developing applications that can operate entirely on the client side or partially on the server side, ensuring optimal load times, high performance, and better search engine visibility. Designs are stylish and user-friendly, adhering to modern design standards. Seamless integration with necessary services is ensured, along with automation of development processes, allowing for the quick and efficient implementation of new features and updates.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Anton Chertok",
            about: "Doskonałe wyniki osiąga się dzięki dbałości o szczegóły i przywiązaniu do prostoty.",
            services:
                "Specjalizuję się w tworzeniu nowoczesnych, responsywnych i wysoce wydajnych interfejsów użytkownika, zwracając szczególną uwagę na jakość kodu, redukcję błędów i łatwość wsparcia. Korzystam z najlepszych praktyk, aby zapewnić szybki rozwój i skalowalność projektów. Mam doświadczenie w tworzeniu aplikacji, które mogą działać zarówno w pełni po stronie użytkownika, jak i częściowo na serwerze, co zapewnia optymalną szybkość ładowania, wysoką wydajność i lepszą widoczność w wyszukiwarkach. Tworzę stylowe i przyjazne dla użytkownika interfejsy, które spełniają nowoczesne standardy projektowania. Zapewniam również pełną integrację z niezbędnymi usługami i automatyzuję procesy deweloperskie, co pozwala na szybkie i sprawne wdrażanie nowych funkcji i aktualizacji.",
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
            ],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742560781/dmytro-bulakhov_uhrnzs.jpg",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: [
                "theatermag.com.ua",
                "batatfarm.com",
                "viktoriia-zabara.netlify.app",
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
        },
        ua: {
            name: "Дмитро Булахов",
            about: "Випадковості - не випадкові.",
            services:
                "Створення сучасних вебдодатків різної складності. Забезпечення повної адаптивності та оптимізації всіх вебдодатків для різних пристроїв і розмірів екранів. Впровадження безпечних механізмів аутентифікації та авторизації.",
            team: "Український театр",
        },
        en: {
            name: "Dmytro Bulakhov",
            about: "Accidents are not random.",
            services:
                "Development of modern web applications of varying complexity. Ensuring full adaptability and optimization of all web applications for different devices and screen sizes. Implementation of secure authentication and authorization mechanisms.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Dmytro Bulakhov",
            about: "Przypadki nie są przypadkowe.",
            services:
                "Rozwój nowoczesnych aplikacji internetowych o różnym stopniu złożoności. Zapewnienie pełnej adaptowalności i optymalizacji wszystkich aplikacji internetowych dla różnych urządzeń i rozmiarów ekranu. Wdrożenie bezpiecznych mechanizmów uwierzytelniania i autoryzacji.",
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
        },
        ua: {
            name: "Євген Малиш",
            about: "Я можу зробити все, що завгодно. Питання лише в часі",
            services:
                "Розробка та підтримка безпечного високопродуктивного API-сервера на Java з повнотекстовим пошуком на базі Hibernate ORM, Search Apache Lucene. Cтворення Open-API документації для REST API. Реалізація безпеки на основі OAuth2, OpenID Connect з використанням Spring Secutiry на основі JWT токенів.",
            team: "Український театр",
        },
        en: {
            name: "Evhen Malysh",
            about: "I can do anything. It's just a matter of time.",
            services:
                "Development and support of a secure high-performance Java API server with full-text search based on Hibernate ORM, Search Apache Lucene. Creation of Open-API documentation for the REST API. Implementation of security based on OAuth2, OpenID Connect using Spring Security based on JWT tokens",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Evhen Malysh",
            about: "Mogę zrobić wszystko. To tylko kwestia czasu.",
            services:
                "Rozwój i wsparcie bezpiecznego, wysokowydajnego serwera Java API z wyszukiwaniem pełnotekstowym opartym na Hibernate ORM, Search Apache Lucene. Stworzenie dokumentacji Open-API dla REST API. Wdrożenie zabezpieczeń opartych na OAuth2, OpenID Connect przy użyciu Spring Security w oparciu o tokeny JWT.",
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
        },
        ua: {
            name: "Анатолій Омельченко",
            about: "Я завжди прагну, щоб усе працювало ідеально. Можливо, це трохи перфекціонізм, але я вірю, що якість у деталях.",
            services:
                "Розробка та підтримка серверних додатків на Java/Kotlin, створення та інтеграція REST API, оптимізація продуктивності систем, управління базами даних, забезпечення високого рівня безпеки, автоматизація бізнес-процесів.",
            team: "Український театр",
        },
        en: {
            name: "Anatolii Omelchenko",
            about: "I always strive to make everything work perfectly. It might be a bit of perfectionism, but I believe that quality lies in the details.",
            services:
                "Development and maintenance of server applications in Java/Kotlin, creation and integration of REST APIs, system performance optimization, database management, high-level security assurance, and business process automation.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Anatolii Omelchenko",
            about: "Zawsze chcę, aby wszystko działało idealnie.  Może to odrobina perfekcjonizmu, ale wierzę, że jakość tkwi w szczegółach.",
            services:
                "Tworzenie i utrzymanie aplikacji serwerowych w Java/Kotlin, tworzenie i integracja REST API, optymalizacja wydajności systemów, zarządzanie bazami danych, zapewnienie wysokiego poziomu bezpieczeństwa oraz automatyzacja procesów biznesowych.",
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
        },
        ua: {
            name: "Олександр Мещерський",
            about: "Ніколи не здавайтеся.",
            services:
                "Розробляю сучасні серверні додатки, інтегрую бізнес-логіку, особливу увагу приділяю безпеці та в той же час простоті коду. Працюю з SQL та NoSQL, хмарними сервісами, REST, меседж-брокерами. Також маю досвід та навички роботи з фронтенд-інструментами (JavaScript, TypeScript, React, Next, Redux, RTK Query).",
            team: "Український театр",
        },
        en: {
            name: "Oleksandr Meshcherskyi",
            about: "Never give up.",
            services:
                "I develop modern server applications, integrate business logic, and pay special attention to security and simplicity of code. I work with SQL and NoSQL, cloud services, REST, and message brokers. I also have experience and skills in front-end tools (JavaScript, TypeScript, React, Next, Redux, RTK Query).",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Oleksandr Meshcherskyi",
            about: "Nigdy się nie poddawaj.",
            services:
                "Tworzę nowoczesne aplikacje serwerowe, integruję logikę biznesową, zwracam szczególną uwagę na bezpieczeństwo i prostotę kodu. Pracuję z SQL i NoSQL, usługami w chmurze, REST i brokerami wiadomości. Posiadam również doświadczenie i umiejętności w zakresie narzędzi front-endowych (JavaScript, TypeScript, React, Next, Redux, RTK Query).",
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
        },
        ua: {
            name: "Світлана Крохмальна",
            about: "Гарно розроблений та відтестований продукт принесе користь та задоволення замовнику. Якісна та тісна робота в команді створить цей продукт.",
            services:
                "Створення тест плану та тестової стратегії. Написання тест кейсів, smoke та regression checklists. Виконання: smoke, API, functional, non-functional, regression, retesting and end-to-end тестування. Створення багрепортів в Jira. Супровід процесів розвитку команди.",
            team: "Український театр",
        },
        en: {
            name: "Svitlana Krokhmalna",
            about: "A well-designed and tested product will bring value and satisfaction to the customer. High-quality and close teamwork will create this product.",
            services:
                "Creating a test plan and test strategy. Writing test cases, smoke and regression checklists. Execution: smoke, API, functional, non-functional, regression, retesting and end-to-end testing. Creating bug reports in Jira. Support of team development processes.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Svitlana Krokhmalna",
            about: "Dobrze zaprojektowany i przetestowany produkt przyniesie klientowi korzyści i satysfakcję. Wysoka jakość i ścisła praca zespołowa pozwolą stworzyć ten produkt.",
            services:
                "Tworzenie planu testów i strategii testowania. Pisanie przypadków testowych, list kontrolnych testów dymnych i regresji. Wykonywanie: testów dymnych, API, funkcjonalnych, niefunkcjonalnych, regresji, ponownych testów i testów kompleksowych. Tworzenie raportów błędów w Jira. Wsparcie procesów rozwoju zespołu.",
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
        },
        ua: {
            name: "Оксана Онопрієнко",
            about: "На мене можна покластися в будь-яких умовах!",
            services:
                "Проведення ручного тестування програмного забезпечення. Написання тест-кейсів, чеклістів та звітів про помилки. API тестування з використанням Postman. Впровадження процесів якості та зниження дефектів після релізу.",
            team: "Український театр",
        },
        en: {
            name: "Oksana Onopriienko",
            about: "You can rely on me in any situation!",
            services:
                "Conducting manual software testing. Writing test cases, checklists, and bug reports. API testing using Postman. Implementation of quality processes and post-release defect reduction.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Oksana Onopriienko",
            about: "Na mnie można polegać w każdej sytuacji!",
            services:
                "Przeprowadzanie ręcznych testów oprogramowania. Pisanie przypadków testowych, list kontrolnych i raportów o błędach. Testowanie API przy użyciu Postman. Wdrażanie procesów jakości i redukcja defektów po wersji.",
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
        },
        ua: {
            name: "Олена Галушка",
            about: "Дизайн не повинен бути складним; часто найпростіше рішення є найкращим.",
            services:
                "Створення дизайну для мобільних застосунків та вебсайтів. Проведення UX досліджень (опитування користувачів, глибинні інтерв'ю, аналіз конкурентів, job stories). Складання юзер флоу, інформаційної архітектури, персони. Також продуктові гіпотези, jobs to be done, Customer Journey Map, пріоритизація по Kano model. Прототипи, UI дизайн, адаптиви створення UI кітів, стилі, змінні. Немодероване юзабіліті тестування. Презентація. Обробка фото та зображень.",
            team: "Український театр",
        },
        en: {
            name: "Olena Halushka",
            about: "Design doesn’t have to be complicated; often the simplest solution is the best.",
            services:
                "Designing mobile apps and websites. Conducting UX research (user surveys, in-depth interviews, competitor analysis, job stories). Creation of user flow, information architecture, personas. Also, product hypotheses, jobs to be done, Customer Journey Map, prioritization by Kano model. Prototypes, UI design, adaptive UI cats, styles, variables. Unmoderated User testing. Presentation. Photo and image processing.",
            team: "Ukrainian theater",
        },
        pl: {
            name: "Olena Halushka",
            about: "Design nie musi być skomplikowany; często najprostsze rozwiązanie jest najlepsze.",
            services:
                "Projektowanie aplikacji mobilnych i stron internetowych. Prowadzenie badań UX (ankiety z użytkownikami, pogłębione wywiady, analiza konkurencji, historie pracy). Tworzenie przepływu użytkowników, architektury informacji, person. Również hipotezy produktu, zadania do wykonania, Customer Journey Map, priorytetyzacja według modelu Kano. Prototypy, projektowanie interfejsu użytkownika, adaptacyjne koty interfejsu użytkownika, style, zmienne. Niemoderowane testy użytkowników. Prezentacja. Przetwarzanie zdjęć i obrazów.",
            team: "Ukrainian theater",
        },
    },
    {
        data: {
            id: "mariia-cherevko-ui-ux-designer",
            projectId: [],

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
        },
        ua: {
            name: "Марія Черевко",
            about: "Хороший дизайн — це як хороший жарт: якщо треба пояснювати, він не працює.",
            services:
                "Як UX/UI дизайнер, я починаю з аналізу потреб клієнта і користувачів. Досліджую ринок і визначаю ключові вимоги до продукту, аналізую цільову аудиторію і визначаю її майбутній шлях на продукті. Потім створюю концепцію, прототипи і тестую їх з користувачами. Після цього розробляю візуальний дизайн і співпрацюю з розробниками для його впровадження. Після запуску вдосконалюю продукт на основі відгуків користувачів.",
            team: "i love my team",
        },
        en: {
            name: "Mariia Cherevko",
            about: "Good design is like a good joke: if you have to explain it, it doesn't work",
            services:
                "As a UX/UI designer, I start by analyzing the needs of the client and users. I research the market and identify key product requirements, analyze the target audience, and define their future journey with the product. Then, I create a concept, prototypes, and test them with users. After that, I develop the visual design and collaborate with developers for implementation. Following the launch, I refine the product based on user feedback.",
            team: "i love my team",
        },
        pl: {
            name: "Mariia Cherevko",
            about: "Dobry design jest jak dobry żart: jeśli trzeba go tłumaczyć, to nie działa.",
            services:
                "Jako projektant UX/UI zaczynam od analizy potrzeb klienta i użytkowników. Badam rynek i określam kluczowe wymagania dotyczące produktu, analizuję grupę docelową i definiuję jej przyszłą ścieżkę w produkcie. Następnie tworzę koncepcję, prototypy i testuję je z użytkownikami. Po tym opracowuję projekt wizualny i współpracuję z deweloperami nad jego wdrożeniem. Po uruchomieniu produktu, udoskonalam go na podstawie opinii użytkowników.",
            team: "i love my team",
        },
    },
    {
        data: {
            id: "anna-prutnik-frontend-developer",
            projectId: ["ilovemyteam-online", "alex-chudov", "hoida-liudmyla"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1742559492/Anet_Prutnik_lvgflg.jpg",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: [
                "ilovemyteam.online",
                "choodov.com",
                "liudmyla-hoida-landing.netlify.app",
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
        },
        ua: {
            name: "Анна Прутнік",
            about: "Робота займатиме велику частину нашого життя, і єдиний спосіб бути по-справжньому задоволеним — це робити те, що ви любите.",
            services:
                "Створення адаптивних веб-додатків з сучасним, зручним та інтуїтивним інтерфейсом, що вирішують конкретні бізнес-завдання та забезпечують стабільну роботу.",
            team: "i love my team",
        },
        en: {
            name: "Anna Prutnik",
            about: "Work will take up a large part of our lives, and the only way to be truly satisfied is to do what you love.",
            services:
                "Creating responsive web applications with a modern, user-friendly, and intuitive interface that solves specific business tasks and ensures stable performance.",
            team: "i love my team",
        },
        pl: {
            name: "Anna Prutnik",
            about: "Praca będzie zajmować dużą część naszego życia, a jedyny sposób, aby być naprawdę zadowolonym, to robić to, co się kocha.",
            services:
                "Tworzenie responsywnych aplikacji internetowych z nowoczesnym, przyjaznym i intuicyjnym interfejsem, które rozwiązują konkretne zadania biznesowe i zapewniają stabilne działanie.",
            team: "i love my team",
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

            pricePerHour: "7",
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
        },
        ua: {
            name: "Олександр Петричук",
            about: "Перш ніж намагатися вразити користувача, не змушуй його чекати та не змушуй його страждати.",
            services:
                "Розширення функціоналу наявних веб-додатків і створення нових з нуля. Клієнтська та/або серверна частини.",
            team: "i love my team",
        },
        en: {
            name: "Oleksandr Petrychuk",
            about: "Before trying to impress the user, don't make them wait and don't make them suffer.",
            services:
                "Expanding the functionality of existing web applications and creating new ones from scratch. Client-side and/or server-side.",
            team: "i love my team",
        },
        pl: {
            name: "Oleksandr Petrychuk",
            about: "Zanim spróbujesz zaimponować użytkownikowi, nie każ mu czekać i nie każ mu cierpieć.",
            services:
                "Rozszerzenie funkcjonalności istniejących aplikacji internetowych i tworzenie nowych od podstaw. Część kliencka i/lub serwerowa.",
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
        },
        ua: {
            name: "Євген Сєдінін",
            about: "QA тоненькою ниточкою проходить крізь всі тонкощі IT.",
            services:
                "Ручне тестування, десктоп та мобільне тестування, API тестування, робота з тестовою документацією (тест кейс, чекліст, баг репорт).",
            team: "Smachno! na seli",
        },
        en: {
            name: "Eugene Siedinin",
            about: "QA weaves a fine thread through all the intricacies of IT.",
            services:
                "Manual testing, desktop and mobile testing, API testing, work with test documentation (test case, checklist, bug report).",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Eugene Siedinin",
            about: "QA cienką nicią przechodzi przez wszystkie zawiłości IT.",
            services:
                "Testowanie manualne, testowanie desktopowe i mobilne, testowanie API, praca z dokumentacją testową (przypadek testowy, lista kontrolna, raport błędu).",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "oleksandr-shcherbak-qa-engineer",
            projectId: ["ilovemyteam-online"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1743177906/Alex_Shcherbak_wo0hqq.jpg",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "5",
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
        },
        ua: {
            name: "Олександр Щербак",
            about: "Все, що не знайдеш ти, знайду я.",
            services:
                "Займаюся ручним тестуванням: функціональним, нефункціональним, UI/UX, API, баз даних і продуктивності. Аналізую вимоги, досліджую продукт і застосовую різноманітні методи тестування. Розробляю тестову документацію та складаю звіти про дефекти.",
            team: "i love my team",
        },
        en: {
            name: "Oleksandr Shcherbak",
            about: "What you can't find, I will.",
            services:
                "I perform manual testing: functional, non-functional, UI/UX, API, database, and performance testing. I analyze requirements, study the product, and apply various testing methods. I develop test documentation and prepare defect reports.",
            team: "i love my team",
        },
        pl: {
            name: "Oleksandr Shcherbak",
            about: "To, czego nie znajdziesz, ja znajdę.",
            services:
                "Wykonuję testowanie manualne: funkcjonalne, niefunkcjonalne, UI/UX, API, baz danych i wydajnościowe. Analizuję wymagania, badam produkt i stosuję różne metody testowania. Tworzę dokumentację testową i przygotowuję raporty o defektach. ",
            team: "i love my team",
        },
    },
    {
        data: {
            id: "solomiia-lutska-project-project-manager-scrum-master",
            projectId: ["alex-chudov"],
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
        },
        ua: {
            name: "Соломія Луцька ",
            about: "",
            services:
                "В якості Project Manager я організовую роботу команди, проводжу щоденні мітинги для синхронізації роботи, забезпечую ефективну комунікацію між розробниками, дизайнерами та іншими учасниками. Координую виконання певних завдань, дотримання термінів і займаюся загальною організацією процесів. Моя роль включає планування, управління ризиками та контроль прогресу, щоб забезпечити якісну реалізацію проєкту.",
            team: "I Love My Team",
        },
        en: {
            name: "Solomiia Lutska",
            about: "",
            services:
                "As a Project Manager, I organize the team's work, conduct daily meetings to synchronize activities, and ensure effective communication between developers, designers, and other participants. I coordinate the completion of specific tasks, adherence to deadlines, and manage the overall organization of processes. My role includes planning, risk management, and progress control to ensure the successful implementation of the project.",
            team: "I Love My Team",
        },
        pl: {
            name: "Solomiia Lutska",
            about: "",
            services:
                "Jako Project Manager organizuję pracę zespołu, prowadzę codzienne spotkania w celu synchronizacji działań oraz zapewniam skuteczną komunikację między programistami, projektantami i innymi uczestnikami. Koordynuję realizację konkretnych zadań, dotrzymywanie terminów i zajmuję się ogólną organizacją procesów. Moja rola obejmuje planowanie, zarządzanie ryzykiem i kontrolę postępów, aby zapewnić pomyślną realizację projektu.",
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
            pricePerHour: "",
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
        },
        ua: {
            name: "Оксана Арпуль",
            about: "Якість - це ключ до впевненості в продукті",
            services:
                "Займаюся ручним тестуванням різних типів (функціональне, нефункціональне, UI/UX, API, бази даних, продуктивність), аналізую вимоги, досліджую поведінку продукту, використовую різні підходи до тестування та створюю тестову документацію (test cases, checklists, bug reports).",
            team: "i love my team",
        },
        en: {
            name: "Oksana Arpul",
            about: "Quality is the key to confidence in a product",
            services:
                "I perform manual testing of various types (functional, non-functional, UI/UX, API, database, and performance), analyze requirements, explore product behavior, apply different testing approaches, and create test documentation (test cases, checklists, bug reports).",
            team: "i love my team",
        },
        pl: {
            name: "Oksana Arpul",
            about: "Jakość to klucz do zaufania do produktu",
            services:
                "Zajmuję się testowaniem manualnym różnych typów (funkcjonalne, niefunkcjonalne, UI/UX, API, bazy danych i wydajność), analizuję wymagania, badam zachowanie produktu, stosuję różne podejścia do testowania i tworzę dokumentację testową (przypadki testowe, listy kontrolne, raporty o błędach).",
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
            pricePerHour: "5",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/viktoria-lapina",
                behance: "https://www.behance.net/0dd36bf6",
                telegram: "https://t.me/viktoria_lapina",
            },
            tools: ["Figma", "Adobe Photoshop", "Jira"],
        },
        ua: {
            name: "Вікторія Лапіна",
            about: "Хороший дизайн - це результат злиття естетики та функціональності.",
            services:
                "Створюю дизайн сайтів та мобільних додатків — від дослідження до фінального інтерфейсу. Аналізую конкурентів, визначаю цільову аудиторію та її потреби, розробляю користувацькі сценарії (user flow), вайрфрейми й інтерактивні прототипи. Працюю з адаптивним дизайном, а також створюю UI kit для зручності розробки та підтримки продукту.",
            team: "I Love My Team",
        },
        en: {
            name: "Viktoriia Lapina",
            about: "Good design is the result of merging aesthetics and functionality.",
            services:
                "I design websites and mobile applications — from research to the final interface. I analyze competitors, identify the target audience and its needs, and develop user flows, wireframes, and interactive prototypes. I work with responsive design and also create UI kits to facilitate development and product maintenance.",
            team: "I Love My Team",
        },
        pl: {
            name: "Viktoriia Lapina",
            about: "Dobry design to efekt połączenia estetyki i funkcjonalności.",
            services:
                "Tworzę projekty stron internetowych i aplikacji mobilnych — od badań po finalny interfejs. Analizuję konkurencję, określam grupę docelową i jej potrzeby, opracowuję scenariusze użytkownika (user flow), makiety (wireframes) i interaktywne prototypy. Pracuję z designem responsywnym, a także tworzę UI kit w celu ułatwienia rozwoju i utrzymania produktu.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "stepan-kozurak-project-project-manager",
            projectId: ["ilovemyteam-online"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1744830870/Stepan_PM_crqljr.jpg",
            position: "Project Manager",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online"],
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
        },
        ua: {
            name: "Степан Козурак",
            about: "Робота - не вовк, ліс - не великий...",
            services:
                "Планування та робота з командою; збереження продуктивності членів команди, запобігання вигорянню. Ризик менеджмент та конфліктологія. Продуктова психологія, її вплив на проєктний менеджмент та взаємозв’язок з ринковими потребами.",
            team: "I Love My Team",
        },
        en: {
            name: "Stepan Kozurak",
            about: "Work isn’t a wolf, and the forest isn’t that big...",
            services:
                "Team planning and collaboration; maintaining team performance and preventing burnout. Risk management and conflict resolution. Product psychology, its impact on project management, and its alignment with market needs.",
            team: "I Love My Team",
        },
        pl: {
            name: "Stepan Kozurak",
            about: "Robota to nie wilk, las nie jest taki wielki...",
            services:
                "Planowanie i współpraca zespołowa; utrzymanie wydajności członków zespołu oraz zapobieganie wypaleniu zawodowemu. Zarządzanie ryzykiem i rozwiązywanie konfliktów. Psychologia produktu, jej wpływ na zarządzanie projektami oraz powiązanie z potrzebami rynkowymi.",
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
            categoryName: "business-analytic",
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
        },
        ua: {
            name: "Оксана Жмурко",
            about: "Успіх прямо пропорційний зусиллям, які ми докладаємо. Аналіз бізнесу та обрана  стратегія захисту інтелектуальної власності - це вже половина успіху!",
            services:
                "Аналіз бізнес-потреб замовників. Аналіз стейкхолдерів. Виявлення, аналіз та документування вимог в форматах User Story, Use Case, SRS, Wireframes. Моделювання BPMN, UML. Розуміння SDLC.",
            team: "I Love My Team",
        },
        en: {
            name: "Oksana Zhmurko",
            about: "Success is directly proportional to the effort we apply. Business analysis and a chosen intellectual property strategy are already half the success!",
            services:
                "Analysis of customer business needs. Stakeholder analysis. Requirements elicitation, analysis, and documentation in User Story, Use Case, SRS, and Wireframes formats. BPMN and UML modelling. Understanding of the SDLC.",
            team: "I Love My Team",
        },
        pl: {
            name: "Oksana Zhmurko",
            about: "Sukces jest wprost proporcjonalny do wysiłku, który wkładamy. Analiza biznesu i wybrana strategia  własności intelektualnej to już połowa sukcesu!",
            services:
                "Analiza biznesowych potrzeb klientów. Analiza interesariuszy. Identyfikacja, analiza i dokumentacja wymagań w formatach User Story, Use Case, SRS, Wireframes. Modelowanie w notacji BPMN i UML. Znajomość cyklu życia oprogramowania (SDLC).",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "diana-dudnyk-ui-ux-designer",
            projectId: ["ilovemyteam-online"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1749811083/Diana_Dudnyk_vnqr9p.jpg",
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
        },
        ua: {
            name: "Діана Дудник",
            about: "Мистецтво дизайну — це трансформація хаосу в чітку структуру.",
            services:
                "Створюю інтерфейси, які поєднують функціональність, зручність та естетику. Моє головне завдання — зробити взаємодію користувача з продуктом інтуїтивно зрозумілою. Завжди орієнтуюсь на дослідження, потреби цільової аудиторії та чітку структуру. Вірю, що хороший дизайн починається з глибокого розуміння користувача та його очікувань. ",
            team: "I Love My Team",
        },
        en: {
            name: "Diana Dudnyk",
            about: "Art of design is transforming chaos into a clear structure.",
            services:
                "I create interfaces that combine functionality, usability, and aesthetics. My main goal is to make the user’s interaction with the product intuitively clear.I always focus on research, the needs of the target audience and a well-defined structure. I believe that great design starts with a deep understanding of the user and their expectations.",
            team: "I Love My Team",
        },
        pl: {
            name: "Diana Dudnyk",
            about: "Sztuka projektowania to przekształcanie chaosu w przejrzystą strukturę.",
            services:
                "Tworzę interfejsy, które łączą w sobie funkcjonalność, wygodę i estetykę. Moim głównym zadaniem jest sprawienie, aby interakcja użytkownika z produktem była intuicyjna. Zawsze skupiam się na badaniach, potrzebach grupy docelowej i przejrzystej strukturze. Wierzę, że dobry projekt zaczyna się od głębokiego zrozumienia użytkownika i jego oczekiwań.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "vladyslava-bobko-ui-ux-designer",
            projectId: ["ilovemyteam-online"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1749811083/Vladyslava_ob9fnl.jpg",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "5",
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
        },
        ua: {
            name: "Владислава Бобко",
            about: "Мій підхід — це баланс витонченості та логіки: дизайн, гідний королівської уваги.",
            services:
                "Я UX/UI дизайнер, який створює інтуїтивні та привабливі цифрові продукти. Починаю з дослідження користувачів, аналізу ринку та визначення бізнес-цілей. На основі цього формую структуру інтерфейсу, розробляю прототипи та перевіряю їх у тестуванні. Потім створюю візуальний дизайн, що поєднує естетику та функціональність. Упроваджую рішення разом із командою розробників і вдосконалюю продукт на основі зворотного зв’язку.",
            team: "I Love My Team",
        },
        en: {
            name: "Vladyslava Bobko",
            about: "My approach is about balancing elegance and logic: design is worthy of royal attention.",
            services:
                "I am a UX/UI designer who creates intuitive and engaging digital products. I start with researching users, analyzing the market and identifying business goals. Based on this, I formulate the structure of the interface, I develop prototypes and test them. Then I create a visual design that combines aesthetics and functionality. I implement solutions together with the development team and improve the product based on feedback.",
            team: "I Love My Team",
        },
        pl: {
            name: "Vladyslava Bobko",
            about: "Moje podejście to równowaga między finezją a logiką — design godny królewskiej uwagi.",
            services:
                "Jestem projektantem UX/UI, który tworzy intuicyjne i atrakcyjne produkty cyfrowe. Zaczynam od badania użytkowników, analizy rynku i definiowania celów biznesowych. Na tej podstawie kształtuję strukturę interfejsu, opracowuję prototypy i waliduję je w testach. Następnie tworzę projekt wizualny, który łączy estetykę i funkcjonalność. Wdrażam rozwiązanie wraz z zespołem programistów i ulepszam produkt w oparciu o informacje zwrotne.",
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
                "Ręczne testowanie funkcjonalne i niefunkcjonalne. Testowanie UI/UX, API, bazy danych i wydajności. Testowanie wymagań, analiza środowiska, testowanie międzyplatformowe, badanie produktu, analiza domeny, testowanie ról dostępu, testowanie eksploracyjne, testowanie regresyjne. Dokumentacja: historia użytkownika, plan testów, strategia testów, lista kontrolna, przypadek testowy, raport o błędzie, raport z testów.",
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
            categoryName: "business-analytic",
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
        },
        ua: {
            name: "Юлія Борис",
            about: "Бізнес-аналітик – це місток між бізнесом та командою розробки!",
            services:
                "Дослідження та аналіз бізнес-процесів, виявлення проблеми та можливості для поліпшення ефективності, збір та аналіз вимог, розробка та управління бізнес-вимогами, колаборація з командою, документація,  BRD, SRS, Use Case, User Story, User Guide/Manual, Reports, Політика Конфіденційності. Проведення мануального тестування, юридична підтримка проекту.",
            team: "I Love My Team",
        },
        en: {
            name: "Yuliya Borys",
            about: "A business analyst is a bridge between the business and the development team!",
            services:
                "Research and analysis of business processes, identification of problems and opportunities for efficiency improvement, requirements gathering and analysis, development and management of business requirements, team collaboration, documentation, BRD, SRS, Use Case, User Story, User Guide/Manual, Reports, Privacy Policy. Conducting manual testing, legal support of the project.",
            team: "I Love My Team",
        },
        pl: {
            name: "Yuliya Borys",
            about: "Analityk biznesowy to pomost pomiędzy biznesem a zespołem programistów!",
            services:
                "Analiza procesów biznesowych, identyfikacja problemów i możliwości poprawy efektywności, zbieranie i analiza wymagań, opracowywanie i zarządzanie wymaganiami biznesowymi, współpraca z zespołem, dokumentacja, BRD, SRS, Use Case, User Story, User Guide/Manual, raporty, polityka prywatności. Przeprowadzanie testów manualnych, wsparcie prawne projektu.",
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
            categoryName: "business-analytic",
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
        },
        ua: {
            name: "Ольга Кучальська",
            about: "Єдиний спосіб робити свою роботу добре — це любити її. Я люблю свою роботу!",
            services:
                "Аналіз бізнес-потреб замовника. Аналіз даних. Аналіз ринку і конкурентів. Розробка, аналіз, впорядкування та формалізація вимог. Управління вимогами між розробниками і стейкхолдерами. Написання технічної документації,user-story. Базові навички тестування та знання SQL. Знання SDLC, гнучких методологій та базові знання менеджменту. Відмінні комунікативні навички.",
            team: "I Love My Team",
        },
        en: {
            name: "Olha Kuchalska",
            about: "The only way to do your job well is to love it. I love my job!",
            services:
                "Customer business needs analysis. Data analysis. Market and competitor analysis. Development, analysis, organisation, and formalisation of requirements. Requirements management between developers and stakeholders. Writing technical documentation and user stories. Basic testing skills and knowledge of SQL. Understanding of SDLC, agile methodologies, and basic management skills. Excellent communication skills.",
            team: "I Love My Team",
        },
        pl: {
            name: "Olha Kuchalska",
            about: "Jedynym sposobem, aby dobrze wykonywać swoją pracę, jest ją kochać. Kocham swoją pracę!",
            services:
                "Analiza potrzeb biznesowych klientów. Analiza danych. Analiza rynku i konkurencji. Rozwój, analiza, organizacja i formalizacja wymagań. Zarządzanie wymaganiami między programistami i interesariuszami. Pisanie dokumentacji technicznej i historyjek użytkownika. Podstawowe umiejętności testowania i znajomość SQL. Zrozumienie SDLC, metodyk zwinnych i podstawowych umiejętności zarządzania. Doskonałe umiejętności komunikacyjne.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "natalia-kalabanova-scrum-master",
            projectId: ["ilovemyteam-online"],
            imageURL:
                "https://res.cloudinary.com/dw4ne3oi5/image/upload/v1746728153/Natalia_scrum_thmq0m.png",
            position: "Project Manager/ Scrum Master",
            categoryName: "manager",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "10$",
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
        },
        ua: {
            name: "Наталя Калабанова",
            about: "Less is more.",
            services:
                "Як Scrum Master, я організовую роботу команди, підтримую сприятливе середовище для співпраці та ефективно впроваджую принципи Agile. Проводжу щоденні stand-up мітинги для синхронізації роботи, усуваю перешкоди, координую виконання завдань спринтів і стежу за дотриманням термінів. Забезпечую прозору комунікацію між розробниками, дизайнерами та іншими стейкхолдерами, планую спринти, управління ризиками та контролюю прогрес команди. Я також проводжу ретроспективи для вдосконалення процесів, щоб забезпечити якісну та своєчасну реалізацію проєкту.",
            team: "I Love My Team",
        },
        en: {
            name: "Natalia Kalabanova",
            about: "Less is more.",
            services:
                "As a Scrum Master, I organize the team’s workflow, foster a collaborative environment, and effectively implement Agile principles. I conduct daily stand-up meetings to synchronize the team’s efforts, remove obstacles, coordinate sprint tasks, and ensure deadlines are met. I facilitate transparent communication between developers, designers, and other stakeholders, plan sprints, manage risks, and monitor the team’s progress. Additionally, I lead retrospectives to continuously improve processes and ensure the project is delivered on time and with high quality.",
            team: "I Love My Team",
        },
        pl: {
            name: "Natalia Kalabanova",
            about: "Less is more.",
            services:
                "Jako Scrum Master organizuję przepływ pracy zespołu, wspieram środowisko sprzyjające współpracy i skutecznie wdrażam zasady Agile. Prowadzę codzienne spotkania typu stand-up, aby synchronizować wysiłki zespołu, usuwać przeszkody, koordynować zadania sprintu i zapewniać dotrzymywanie terminów. Ułatwiam przejrzystą komunikację między programistami, projektantami i innymi interesariuszami, planuję sprinty, zarządzam ryzykiem i monitoruję postępy zespołu. Dodatkowo prowadzę retrospektywy w celu ciągłego doskonalenia procesów i zapewnienia, że projekt jest dostarczany na czas i w wysokiej jakości.",
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
            pricePerHour: "10$",
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
        },
        ua: {
            name: "Тетяна Дрофа",
            about: "Моя мета — досягати результатів вчасно, якісно та з командною підтримкою.",
            services:
                "Я  орієнтований на результат проєктний менеджер з досвідом керування командами від 5 осіб. Вмію організовувати чітку комунікацію всередині команди та зі стейкхолдерами, що забезпечує прозорість і синхронність у роботі. Ефективно контролюю виконання завдань, дотримуюсь дедлайнів і забезпечую якісні результати. Оперативно вирішую проблеми, підтримуючи стабільний темп проєкту.",
            team: "I Love My Team",
        },
        en: {
            name: "Tetiana Drofa",
            about: "My goal is to achieve results on time, with quality, and with the support of the team.",
            services:
                "I am a result-oriented Project Manager with experience leading teams of 5 or more people. I know how to establish clear communication within the team and with stakeholders, which ensures transparency and alignment in work processes. I effectively monitor task execution, meet deadlines, and deliver high-quality results. I resolve issues promptly, maintaining a steady project pace.",
            team: "I Love My Team",
        },
        pl: {
            name: "Tetiana Drofa",
            about: "Moim celem jest osiągnięcie wyników na czas, z zachowaniem jakości i przy wsparciu zespołu.",
            services:
                "Jestem zorientowanym na rezultaty Kierownikiem Projektu z doświadczeniem w zarządzaniu zespołami liczącymi co najmniej 5 osób. Potrafię organizować jasną komunikację wewnątrz zespołu i z interesariuszami, co zapewnia przejrzystość i spójność działań. Skutecznie nadzoruję realizację zadań, dotrzymuję terminów i dostarczam wysokiej jakości rezultaty. Szybko rozwiązuję problemy, utrzymując stabilne tempo pracy nad projektem.",
            team: "I Love My Team",
        },
    },
];
