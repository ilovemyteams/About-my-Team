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
                "Консультування, аналіз бізнес процесів, стратегічне планування, бюджетування, управління проектами та командами, розвиток продуктів. Менторинг для початківців в ІТ.",
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
            id: "IrynaStoliarova",
            projectId: ["1", "4"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1wTpwfwGEQK2JHmyY7rJaZgJCqWyEcXM-",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: [
                "ilovemyteam.online",
                "greyplaza.com.ua",
                "protection.in.ua",
            ],
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
            about: "Dobry design powinien przede wszystkim rozwiązywać problemy.",
            services:
                "Zapewniam pełen zakres usług projektowania produktów, w tym badania rynku, analizę konkurencji, badania użytkowników, architekturę informacji i interaktywne prototypy.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "AnastasiiaNazarenko",
            projectId: ["1", "4"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1RacOw9P_MUIelOTWaYpGzfT4ECV4gjrR",
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
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою React та Next.js. Розробка серверних застосунків з використанням Node.js та NestJS.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Eugene Serdiuk",
            about: "We'll do it now!",
            services:
                "Develop and style web pages using HTML, CSS, and JavaScript, taking into account semantics and adaptability to different screen sizes. Creating interactive and dynamic interfaces using the React library. Development of server-side applications using Node.js and NestJS.",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Eugene Serdiuk",
            about: "Teraz to zrobimy!",
            services:
                "Tworzenie i stylizowanie stron internetowych przy użyciu HTML, CSS i JavaScript, z uwzględnieniem semantyki i możliwości dostosowania do różnych rozmiarów ekranu. Tworzenie interaktywnych i dynamicznych interfejsów przy użyciu biblioteki React. Tworzenie aplikacji po stronie serwera przy użyciu JavaScript i NodeJS.",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "IrynaTrynkal",
            projectId: ["1", "4"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1V1LCyS8p91R7Py1swWeShuAymmBNn0I0",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online", "protection.in.ua"],
            pricePerHour: "10",
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
            id: "OlenaPosternak",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=10Nsf6MskUIsOC-yG4-cfv69lG8jRlyRb",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: ["ilovemyteam.online", "kuharskyivulyk.com.ua"],
            pricePerHour: "10",
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
            id: "KaterynaRubanik",
            projectId: ["1", "4"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1Hl4YyM_odWo_I1ZUPSZ_q8RZusxeajCH",
            position: "QA engineer",
            categoryName: "qa",
            projectsExperience: [
                "ilovemyteam.online",
                "protection.in.ua",
                "baza-trainee.tech",
            ],
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
            id: "KaterynaPogrebna",
            projectId: [],
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
                "Ręczne testowanie funkcjonalne i niefunkcjonalne. Testowanie UI/UX, API, bazy danych i wydajności. Testowanie wymagań, analiza środowiska, testowanie międzyplatformowe, badanie produktu, analiza domeny, testowanie ról dostępu, testowanie eksploracyjne, testowanie regresyjne. Dokumentacja: historia użytkownika, plan testów, strategia testów, lista kontrolna, przypadek testowy, raport o błędzie, raport z testów.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "DariaCherviakova",
            projectId: [],
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
            about: "Junior Project Manager/ Scrum Master z chęcią rozwoju zawodowego. Zarządzam procesem, zapewniam efektywną komunikację i osiąganie celów.",
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
            id: "OlhaKuchalska",
            projectId: [],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1bvQXDyYD1PZdGyBPKszt-ukvB1OL2NqX",
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
            id: "TetianaSeletska",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1mPUXf8ifPVMmTU_ef_jH0GfBWCunBsxW",
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
            id: "OksanaLuchko",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1wGCOxPKTkU42QK_w6wO66fmSdAdNHvPB",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online", "irynaprudko.com.ua"],
            pricePerHour: "4",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/oksana-luchko-3a5b2b289",
                github: "",
                telegram: "https://t.me/Sysen8474",
            },
            tools: [
                "TestRail/Qase",
                "Jira/Mantis",
                "Trello",
                "Chrome Devtools",
                "JMeter",
                "GitHub",
                "Postman/Swager",
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
            about: "Zawsze jestem gotowy uczyć się nowych rzeczy i wykorzystywać zdobytą wiedzę w praktyce. Chętnie dołączę do Twojego zespołu i przyczynię się do zapewnienia jakości oprogramowania.",
            services:
                "Tworzenie dokumentacji testowej (listy kontrolne, przypadki testowe, raporty błędów). Przeprowadzanie testów internetowych/mobilnych, testów API.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "HannaTruba",
            projectId: ["1"],
            imageURL: "",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: ["ilovemyteam.online"],
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
                "Досвідчений бізнес-аналітик з понад трьома роками роботи в міжнародному холдингу, спеціалізуюсь на аналізі та налаштуванні бізнес-процесів, стратегічному плануванні, бюджетуванні, управлінні проєктами, розробці продуктів. Мої компетенції уналежнюють розробку та реалізацію стратегій позиціонування, аналіз ринку та конкурентів, створення ефективних маркетингових кампаній. Активно користюсь сучасними методами дослідження, такі як критичний дискурс-аналіз, для глибшого розуміння комунікацій та їхнього впливу.",
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
            id: "OlenaHolubonkova",
            projectId: ["1"],
            imageURL: "",
            position: "Marketer",
            categoryName: "marketer",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "10",
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
            id: "EduardSafronov",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1ylZZ7ClhWx-wZWnITV3lI8MFxYv3Xfw_",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "5",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/edsafronov",
                github: "",
                telegram: "https://t.me/EdgarMarsik",
            },
            tools: [
                "Postman",
                "Chrome DevTools",
                "SQL",
                "Github",
                "Python",
                "PyCaharm",
                "PyTest",
                "Jira",
                "HTML/CSS",
            ],
        },
        ua: {
            name: "Едуард Сафронов",
            about: "QA-інженер з тестування програмного забезпечення. Спеціалізуюся на тестуванні, аналізі та виявленні дефектів для забезпечення високої якості продукту. Автоматизоване тестування на Python.",
            services:
                "Створюю сучасну тестову документацію: чек-листи, тест-кейси, тест-плани, звіти про баги. Комплексне веб- та мобільне тестування, включаючи тестування API.",
            team: "I Love My Team",
        },
        en: {
            name: "Eduard Safronov",
            about: "QA-engineer for software testing. I specialise in testing, analysing, and identifying defects to ensure high product quality. Automated testing in Python.",
            services:
                "I create modern test documentation: checklists, test cases, test plans, bug reports. Comprehensive web and mobile testing, including API testing.",
            team: "I Love My Team",
        },
        pl: {
            name: "Eduard Safronovo",
            about: "Inżynier QA zajmujący się testowaniem oprogramowania. Specjalizuję się w testowaniu, analizowaniu i identyfikowaniu defektów w celu zapewnienia wysokiej jakości produktu. Zautomatyzowane testowanie w Pythonie.",
            services:
                "Tworzę nowoczesną dokumentację testową: listy kontrolne, przypadki testowe, plany testów, raporty błędów. Kompleksowe testy webowe i mobilne, w tym testy API.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "NadiaHubchuk",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1CtrIlXU6_7nmlPdi9QiGZRGgyqztHxU1",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["ilovemyteam.online"],
            pricePerHour: "5",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/nadia-hubchuk",
                github: "",
                telegram: "",
            },
            tools: [
                "Postman/Swager/Chrome Devtools",
                "REST",
                "GitHub",
                "SQL",
                "HTML",
                "CSS",
                "VSCode",
                "TestRail/Jira/Trello",
            ],
        },
        ua: {
            name: "Надія Губчук",
            about: "",
            services: "",
            team: "I Love My Team",
        },
        en: {
            name: "Nadia Hubchuk",
            about: "",
            services: "",
            team: "I Love My Team",
        },
        pl: {
            name: "Nadia Hubchuk",
            about: "",
            services: "",
            team: "I Love My Team",
        },
    },
];
