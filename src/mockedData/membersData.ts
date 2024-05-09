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
    uk: MemberDataItemTranslation;
    en: MemberDataItemTranslation;
    pl: MemberDataItemTranslation;
};

export const membersData: MemberDataItemType[] = [
    {
        data: {
            id: "SusannaSalataBA",
            projectId: [],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1O43w9-Ti3SwlLi4fO9Kl8-GwY1O1wpc0",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: ["https://www.website.ua"],
            pricePerHour: "25",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/susanna-salata/",
                github: "",
                telegram: "",
            },
            tools: [
                "UML",
                "BPMN 2.0",
                "SDLC",
                "SQL",
                "Python",
                "Jira",
                "Confluence",
                "Google Sheets/Docs",
            ],
        },
        uk: {
            name: "Сусанна Салата",
            about: "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services:
                "Консультування, аналіз бізнес процесів, стратегічне планування, бюджетування, управління проектами та командами, розвиток продукту. Менторинг для початківців в ІТ",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Work should bring inspiration and satisfaction, not just money.",
            services:
                "Consulting, business process analysis, strategic planning, budgeting, project and team management, product development. Mentoring for beginners in IT",
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
            id: "SusannaSalataPM",
            projectId: ["1", "2", "3"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1O43w9-Ti3SwlLi4fO9Kl8-GwY1O1wpc0",
            position: "Product manager",
            categoryName: "manager",
            projectsExperience: [
                "https://www.ilovemyteam.online/uk",
                "https://batatfarm.com/",
                "https://theatermag.com.ua/",
                "https://baza-trainee.tech/ua",
            ],
            pricePerHour: "25",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/susanna-salata/",
                github: "https://github.com/Susanna-Salata",
                telegram: "https://t.me/Susanna_Salata",
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
        uk: {
            name: "Сусанна Салата",
            about: "Робота має приносити натхнення та задоволення, а не лише гроші.",
            services:
                "Консультування, аналіз бізнес процесів, стратегічне планування, бюджетування, управління проектами та командами, розвиток продукту. Менторинг для початківців в ІТ",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Work should bring inspiration and satisfaction, not just money.",
            services:
                "Consulting, business process analysis, strategic planning, budgeting, project and team management, product development. Mentoring for beginners in IT",
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
            id: "IhorDronishynets",
            projectId: ["1", "2"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=14EYFUfVxF8bUaTQrS0lX0rzgVTJO-CG9",
            position: "Fullstack developer",
            categoryName: "developer",
            projectsExperience: [
                "https://www.ilovemyteam.online/uk",
                "https://batatfarm.com/",
                "https://baza-trainee.tech/ua",
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
        uk: {
            name: "Ігор Дронішинець",
            about: "Про себе цитата",
            services:
                "Повний цикл розробки сайтів від створення логотипу та бренд буку до релізу на прод та передачі прав доступу Замовнику",
            team: "I Love My Team",
        },
        en: {
            name: "Ihor Dronishynets",
            about: "There will be text in English",
            services:
                "Full cycle of website development from logo and branding to product release and transfer of access rights to the Customer",
            team: "I Love My Team",
        },
        pl: {
            name: "Ihor Dronishynets",
            about: "There will be text in Polish",
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
            projectsExperience: ["https://www.ilovemyteam.online/uk"],
            pricePerHour: "15",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/iryna-stoliarova",
                behance: "https://www.behance.net/iryna_stoliarova",
                telegram: "https://t.me/iryna_stoliarova",
            },
            tools: ["Figma", "Jira", "Adobe Photoshop", "Adobe Illustrator"],
        },
        uk: {
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
                "I provide a full range of product design services, including market research, competitor analysis, user research, information architecture, and interactive prototypes.",
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
                "https://drive.google.com/uc?export=view&id=1dZgahuKLMKs9t3Fn0TChx7YyKFiyOAYd",
            position: "Graphic Designer",
            categoryName: "designer",
            projectsExperience: ["https://www.ilovemyteam.online/uk"],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/anastasiya-nazarenko-a7aa4421b/",
                behance: "https://www.behance.net/ad952d63",
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
        uk: {
            name: "Анастасія Назаренко",
            about: "Дизайнер - це стратег з почуттям прекрасного.",
            services:
                "Розробка логотипів, брендінгу компаній, малювання ілюстрацій, створення нескладних анімацій. Медіа для соц мереж, типографія, знання з UX/UI дизайну, інфографіка",
            team: "I Love My Team",
        },
        en: {
            name: "Anastasiia Nazarenko",
            about: "Designer is a planner with a sense of beauty",
            services:
                "Designing logos, company branding, drawing illustrations, creating simple animations. Media for social networks, typography, knowledge of UX/UI design, infographics",
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
            id: "IrynaTrynkal",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1V1LCyS8p91R7Py1swWeShuAymmBNn0I0",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["https://www.ilovemyteam.online/uk"],
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
        uk: {
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
                "Develop and style web pages using HTML, CSS, and JavaScript, taking into account best practices. Creating interactive and dynamic interfaces using the React library. Development of server-side applications using JavaScript and Node.js. Creating and managing backend APIs to ensure communication between the frontend and the server. Implementation of user authentication and granting access rights to ensure application security. Combining front-end and back-end components to create a single, working application.",
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
    //     uk: {
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
                "https://github.com/OlenaPosternak",
                "https://www.ilovemyteam.online/uk",
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
        uk: {
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
                "I specialize in web application development, taking into account best practices. I create interactive applications using various JavaScript frameworks and libraries. My main goal is to provide users with a comfortable and convenient experience of using web applications.",
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
                "https://github.com/OlgaMykhailova",
                "https://www.ilovemyteam.online/uk",
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
        uk: {
            name: "Ольга Михайлова",
            about: "Люблю знаходити елегантні рішення для складних задач",
            services:
                "Створення зручних для користувачів та ефективних для бізнесу web-застосунків різного рівня складності. Фокусуюсь на поєднанні максимальної функціональності та естетичності для досягнення бездоганного результату",
            team: "I Love My Team",
        },
        en: {
            name: "Olga Mykhailova",
            about: "I like to find elegant solutions to complex problems.",
            services:
                "My goal is to develop web applications that impress with their user-friendliness and business efficiency. I strive to create products of varying levels of complexity that provide not only functionality but also aesthetics. My approach is to help clients achieve flawless results by combining maximum utility and attractive design in every project.",
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
            projectsExperience: ["https://www.ilovemyteam.online/uk"],
            pricePerHour: "5",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/kateryna-rubanik-6133a6224/",
                telegram: "https://t.me/R_Katrine",
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
        uk: {
            name: "Катерина Рубанік",
            about: "QA-інженер з досвідом у тестуванні ПЗ. Володію навичками тестування, аналізу та виявлення помилок для забезпечення бездоганної якості продукту",
            services:
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування API.",
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Rubanik",
            about: "QA engineer with experience in software testing. I have the skills to test, analyze and detect errors to ensure the impeccable quality of the product",
            services:
                "Creation of test documentation (test plan, checklists, test cases, bug reports). Conducting web/mobile testing, API testing.",
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
            projectsExperience: [
                "https://drive.google.com/drive/folders/1AtVB7EfFCwlPvOVaLdxYSC8Clo7Hp-rN?usp=sharing",
                "https://www.ilovemyteam.online/uk",
            ],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/katerynapogrebna",
                github: "https://github.com/KaterynaPogrebna/QA_Portfolio/tree/416fd293cdd4fac83f5101e6e5768c52188af7a6/API",
                telegram: "https://t.me/ek_kat",
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
        uk: {
            name: "Катерина Погребна",
            about: "Орієнтований на результат QA-інженер з досвідом тестування понад 2 роки, зокрема спеціалізується на платформах роздрібної торгівлі в Інтернеті, веб-додатках і системах обміну повідомленнями. ",
            services:
                "Ручне функціональне, нефункціональне тестування. Тестування UI/UX, API, баз даних та продуктивності.Тестування вимог, аналіз середовищ, кросплатформене тестування, дослідження продукту, доменний аналіз, тестування ролей доступу, дослідницьке тестування, регресійне тестування.Документація: User Story, Test Plan, Test Strategy, Checklist, Test Case, Bug Report, Test Report.",
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Pogrebna",
            about: "Result-oriented QA engineer with over 2 years of testing experience, specializing in online retail platforms, web applications, and messaging systems. ",
            services:
                "Manual functional and non-functional testing. UI/UX, API, database, and performance testing. Requirements testing, environment analysis, cross-platform testing, product research, domain analysis, access role testing, exploratory testing, regression testing. Documentation: User Story, Test Plan, Test Strategy, Checklist, Test Case, Bug Report, Test Report.",
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
            projectsExperience: ["https://www.ilovemyteam.online/uk"],
            pricePerHour: "5",
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
        uk: {
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
            id: "OlhaKuchalska",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1bvQXDyYD1PZdGyBPKszt-ukvB1OL2NqX",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: ["https://www.ilovemyteam.online/uk"],
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
        uk: {
            name: "Ольга Кучальська",
            about: "Цитата про себе ",
            services:
                "Аналіз бізнес-потреб замовника. Аналіз даних. Аналіз ринку і конкурентів. Розробка, аналіз, впорядкування та формалізація вимог. Управління вимогами між розробниками і стейкхолдерами. Написання технічної документації,user-story. Базові навички тестування та знання SQL. Знання SDLC, гнучких методологій та базові знання менеджменту. Відмінні комунікативні навички.",
            team: "I Love My Team",
        },
        en: {
            name: "Olha Kuchalska",
            about: "Text in en",
            services:
                "Analysis of the customer's business needs. Data analysis. Market and competitor analysis. Developing, analyzing, organizing and formalizing requirements. Comunication management between developers and stakeholders. Writing technical documentation, user-story. Basic testing skills and SQL knowledge. Knowledge of SDLC, agile methodologies and basic management knowledge. Excellent communication skills.",
            team: "I Love My Team",
        },
        pl: {
            name: "Olha Kuchalska",
            about: "There will be text in Polish",
            services:
                "Analiza potrzeb biznesowych klienta. Analiza danych. Analiza rynku i konkurencji. Opracowywanie, analizowanie, organizowanie i formułowanie wymagań. Zarządzanie wymaganiami pomiędzy programistami i interesariuszami. Pisanie dokumentacji technicznej, historii użytkownika. Podstawowe umiejętności testowania i znajomość SQL. Znajomość SDLC, metodyk zwinnych i podstaw zarządzania. Doskonałe umiejętności komunikacyjne.",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "SvitlanaKondratenko",
            projectId: ["2"],
            imageURL: "",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: ["https://batatfarm.com/"],
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
        uk: {
            name: "Світлана Кондратенко",
            about: "&ldquo; Хтось має з тим розібратись?&ldquo; - Я людина, яка з тим розбирається!",
            services:
                "Аналіз бізнес-потреб замовника, ринку і конкурентів. Розробка, аналіз, впорядкування та формалізація вимог. Написання технічної документації,user-story. Знання SDLC, гнучких методологій та базові знання менеджменту.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Svitlana Kondratenko",
            about: "Цитата про себе на англ",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Svitlana Kondratenko",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "MariiaPopova",
            projectId: ["2"],
            imageURL: "",
            position: "Graphic Designer/ UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["https://batatfarm.com/"],
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
        uk: {
            name: "Марія Попова",
            about: "Щоб б ти не робив, роби це з любовʼю. Адже в результаті це буде відчуватись",
            services:
                "Розробка дизайну продуктів та веб застосунків, розробка логотипів, брендінгу компаній, створення ілюстрацій. Медіа для соц мереж, типографія, розробка UX/UI дизайну, інфографіка",
            team: "Смачно! на селі",
        },
        en: {
            name: "Mariia Popova",
            about: "Цитата про себе на англ",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Mariia Popova",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "VladShumkov",
            projectId: ["1", "2"],
            imageURL: "",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: [
                "https://www.ilovemyteam.online/uk",
                "https://batatfarm.com/",
            ],
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
        uk: {
            name: "Влад Шумков",
            about: "Мій акцент на чіткій комунікації гарантує, що кожен проект відповідає строгим стандартам і очікуванням клієнтів.",
            services:
                "Розробка сайтів будь-якої складності, інтернет магазинів та лендінгів. Менторинг для початківців Frontend Devs",
            team: "Смачно! на селі",
        },
        en: {
            name: "Vlad Shumkov",
            about: "My emphasis on clear communication ensures that every project meets exacting standards and client expectations.",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Vlad Shumkov",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "EugeneSerdiuk",
            projectId: ["2"],
            imageURL: "",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["https://batatfarm.com/"],
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
        uk: {
            name: "Євген Сердюк",
            about: "Цитата про себе",
            services:
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою React та Next. Розробка бекенду з використанням Node js та NestJS.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Eugene Serdiuk",
            about: "Цитата про себе на англ",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Eugene Serdiuk",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "DenisSlivinskyi",
            projectId: ["2"],
            imageURL: "",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: [
                "https://batatfarm.com/",
                "https://zolochivska.com.ua/",
            ],
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
        uk: {
            name: "Денис Слівінський",
            about: "Цитата про себе",
            services:
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних застосунків з використанням JavaScript та NodeJS.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Denis Slivinskyi",
            about: "Real stupidity beats artificial intelligence every time",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Denis Slivinskyi",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "VolodymyrDehtiarev",
            projectId: ["2"],
            imageURL: "",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: [
                "https://batatfarm.com/",
                "https://zolochivska.com.ua/",
            ],
            pricePerHour: "10",
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
        uk: {
            name: "Володимир Дегтярев",
            about: "Цитата про себе",
            services:
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою React та Next. Розробка бекенду з використанням Node js та NestJS.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Volodymyr Dehtiarev",
            about: "Nothing will work unless you do",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Volodymyr Dehtiarev",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "OlenaChornobryvets",
            projectId: ["2"],
            imageURL: "",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["https://batatfarm.com/"],
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
        uk: {
            name: "Олена Чорнобривець",
            about: "Цитата про себе",
            services:
                "Ручне мобільне/веб тестування, API тестування, створення тестової документації: тест кейс, чекліст, баг репорт",
            team: "Смачно! на селі",
        },
        en: {
            name: "Olena Chornobryvets",
            about: "Quality assurance means preventing errors",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Olena Chornobryvets",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "HannaHorbenko",
            projectId: ["2"],
            imageURL: "",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: ["https://batatfarm.com/"],
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
        uk: {
            name: "Ганна Горбенко",
            about: "Цитата про себе",
            services: "Тут має бути переклад на укр",
            team: "Смачно! на селі",
        },
        en: {
            name: "Hanna Horbenko",
            about: "QA for me it's like a digital detective. The investigation process fascinates me!",
            services:
                "Manual QA, Black/Grey testing, Web/Mobile testing, System testing, Regression, Sanity, Smoke, Ad-Hoc, With test cases, Functional, Compatibility, Usability, Test design techniques. Test documentation: Test plan, Test cases, Checklists, Bug reports, Knowledge of SDLC, Waterfall, Agile concepts knowledge (Scrum, Kanban), Knowledge of STLC, Git and Terminal, SQL (MySQL, SQLite, DBeaver)",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Hanna Horbenko",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
    {
        data: {
            id: "AnnaKlyba",
            projectId: ["2"],
            imageURL: "",
            position: "QA Engineer",
            categoryName: "qa",
            projectsExperience: [
                "https://batatfarm.com/",
                "https://baza-trainee.tech/ua",
            ],
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
        uk: {
            name: "Анна Клиба",
            about: "Цитата про себе",
            services:
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування API.",
            team: "Смачно! на селі",
        },
        en: {
            name: "Anna Klyba",
            about: "QA is the key to reliability and trust in the product",
            services: "Тут має бути переклад на англ",
            team: "Smachno! na seli",
        },
        pl: {
            name: "Anna Klyba",
            about: "Цитата про себе на польській",
            services: "Тут має бути переклад на польську",
            team: "Smachno! na seli",
        },
    },
];
