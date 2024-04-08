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
            id: "1",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1Sutjc_CekGMbvenbBJoHSF9lXY9rd3Th",
            position: "product manager",
            categoryName: "manager",
            projectsExperience: ["www.website.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/susanna-salata/",
                github: "",
                telegram: "",
            },
            tools: ["jira", "atlassian"],
        },
        uk: {
            name: "Сусанна Салата",
            about: "Орієнтований на результат",
            services:
                "Консультування, менторинг, стратегічне планування, бюджетування, управління проектами та командами, SCRUM Master",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Result oriented",
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "2",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1Bj_dvqxrkExvf2u_xkVtYmcGpULJdvb9",
            position: "Graphic Designer/ UX UI Designer",
            categoryName: "designer",
            projectsExperience: ["www.website.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/anastasiya-nazarenko-a7aa4421b/",
                github: "",
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
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Anastasiia Nazarenko",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "3",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1HVqkdA5SXIYY3LS1hu3AuREcm8tpMeiB",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: ["www.site.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/posternak-olena/",
                github: "https://github.com/OlenaPosternak",
                telegram: "https://t.me/Posternak_Olena",
            },
            tools: [
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "NextJS",
                "Taitwind",
                "MUI",
                "MongoDB",
                "Node.js",
            ],
        },
        uk: {
            name: "Олена Постернак",
            about: "Якась офігенна цитата про себе",
            services:
                "Спеціалізуюсь на розробці веб-додатків, з урахуванням семантичності та адаптивності до різних розмірів екранів. Створюю інтерактивні застосунки, використовуючи різноманітні JavaScript-фреймворки та бібліотеки. Моя основна мета - забезпечити користувачам комфортний та зручний досвід використання веб-додатків.",
            team: "I Love My Team",
        },
        en: {
            name: "Olena Posternak",
            about: "Something encredible about you",
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Olena Posternak",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "4",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1mLIlC5M9RMw5_HevjeD08sL_7L2G8zYC",
            position: "FrontEnd Developer",
            categoryName: "developer",
            projectsExperience: ["www.site.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/olgamykhailova/",
                github: "https://github.com/OlgaMykhailova",
                telegram: "https://t.me/Olya_Kaktusya",
            },
            tools: [
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "NextJS",
                "React Native",
                "Tailwind",
                "Node.js",
                "MongoDB",
            ],
        },
        uk: {
            name: "Ольша Михайлова",
            about: "Якась офігенна цитата про себе",
            services:
                "Моя мета - розробка веб-застосунків, що вражають своєю зручністю для користувачів та ефективністю для бізнесу. Я прагну створювати продукти різного рівня складності, що забезпечують не лише функціональність, але й естетичність. Мій підхід полягає в тому, щоб допомагати клієнтам досягати бездоганних результатів шляхом поєднання максимальної корисності та привабливого дизайну у кожному проекті.",
            team: "I Love My Team",
        },
        en: {
            name: "Olga Mykhailova",
            about: "Something encredible about you",
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Olga Mykhailova",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "5",
            imageURL:
                "https://drive.google.com/uc?export=view&id=18H3nSMwOWVGQEImzAqvA_g155njZ1LoO",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: ["www.site.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://linkedin.com/in/iryna-trynkal-41542311a",
                github: "https://github.com/IraMira333",
                telegram: "",
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
            about: "Якась офігенна цитата про себе",
            services:
                "Розробка та стилізація веб-сторінок за допомогою HTML, CSS і JavaScript з урахуванням семантичності та адаптивності до різних розмірів екранів. Створення інтерактивних та динамічних інтерфейсів за допомогою бібліотеки React. Розробка серверних застосунків з використанням JavaScript та Node.js. Створення та управління бекенд API для забезпечення комунікації між фронтендом та сервером. Впровадження аутентифікації користувачів та надання прав доступу для забезпечення безпеки додатків. Поєднання компонентів фронтенду та бекенду для створення єдиної, працюючої програми.",
            team: "I Love My Team",
        },
        en: {
            name: "Iryna Trynkal",
            about: "Something encredible about you",
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Iryna Trynkal",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "6",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1mYt2uFc8zwv8ML17_0Ur09-QBebFeFko",
            position: "UI/UX designer",
            categoryName: "designer",
            projectsExperience: ["www.site.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/iryna-stoliarova",
                behance: "https://www.behance.net/iryna_stoliarova",
                telegram: "https://t.me/iryna_stoliarova",
            },
            tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
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
                "I’ve been providing the full design service for products, including market research, competitor analysis, user research, information architecture, concepts, interactive prototypes.",
            team: "I Love My Team",
        },
        pl: {
            name: "Iryna Stoliarova",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "7",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1O0gd8VAJLvKbOsip4e6WwaH9WTUu9sX9",
            position: "QA",
            categoryName: "qa",
            projectsExperience: ["www.site.ua"],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/kateryna-rubanik-6133a6224/",
                telegram: "https://t.me/R_Katrine",
            },
            tools: [
                "Jira",
                "Trello",
                "Testlink",
                "Chrome DevTools",
                "Postman",
                "Swagger",
                "SQL",
                "HTML",
                "CSS",
            ],
        },
        uk: {
            name: "Катерина Рубанік",
            about: "QA-інженер з досвідом у тестуванні ПЗ. Володію навичками тестування, аналізу та виявлення помилок для забезпечення бездоганної якості продукту",
            services:
                "Створення тестової документації (тест план, чек листи, тест кейси, баг репорти). Проведення веб/ мобільного тестування, тестування API",
            team: "I Love My Team",
        },
        en: {
            name: "Kateryna Rubanik",
            about: "Text in en",
            services: "Text in en",
            team: "I Love My Team",
        },
        pl: {
            name: "Kateryna Rubanik",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "8",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1-dja5FnlCvSdAl5kF9d6rvI4UXGQpYY8",
            position: "QA",
            categoryName: "qa",
            projectsExperience: [
                "https://drive.google.com/drive/folders/1AtVB7EfFCwlPvOVaLdxYSC8Clo7Hp-rN?usp=sharing",
            ],
            pricePerHour: "",
            socialLinks: {
                linkedin: "http://www.linkedin.com/in/katerynapogrebna",
                github: "https://github.com/KaterynaPogrebna/QA_Portfolio/tree/416fd293cdd4fac83f5101e6e5768c52188af7a6/API",
                telegram: "",
            },
            tools: [
                "HTML",
                "CSS",
                "REST API",
                "JSON",
                "Postman",
                "SQLiteStudio",
                "Testomat.io",
                "Testlink",
                "Redmine",
                "Chrome DevTools",
                "VS Code",
                "WordPress",
                "CS-Cart",
                "JMeter",
                "Fiddler",
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
            about: "Text in en",
            services: "Text in en",
            team: "I Love My Team",
        },
        pl: {
            name: "Kateryna Pogrebna",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "9",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1vb-DnGie_sbcLma-PFlmDCsVzrFRSNJR",
            //https://drive.google.com/file/d/1vb-DnGie_sbcLma-PFlmDCsVzrFRSNJR/view?usp=sharing
            position: "BA",
            categoryName: "business-analytic",
            projectsExperience: [""],
            pricePerHour: "",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/olha-kuchalska",
                telegram: "",
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
            about: "Орієнтований на результат QA-інженер з досвідом тестування понад 2 роки, зокрема спеціалізується на платформах роздрібної торгівлі в Інтернеті, веб-додатках і системах обміну повідомленнями. ",
            services:
                "Аналіз бізнес-потреб замовника. Аналіз даних. Аналіз ринку і конкурентів. Розробка, аналіз, впорядкування та формалізація вимог. Управління вимогами між розробниками і стейкхолдерами. Написання технічної документації,user-story. Базові навички тестування та знання SQL. Знання SDLC, гнучких методологій та базові знання менеджменту. Відмінні комунікативні навички.",
            team: "I Love My Team",
        },
        en: {
            name: "Olha Kuchalska",
            about: "Text in en",
            services: "Text in en",
            team: "I Love My Team",
        },
        pl: {
            name: "Olha Kuchalska",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "10",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1DpxD47mPfO1QguB1Il7Nw1pW6uMlEikd",
            position: "PM/SM",
            categoryName: "manager",
            projectsExperience: [""],
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
        uk: {
            name: "Дар'я Червякова",
            about: "Юніор Project Manager/ Scrum Master з прагненням до професійного зростання. Керую процесом, забезпечую ефективну комунікацію та виконання цілей.",
            services:
                "Надаю послуги як юніор Project Manager. Координую та сприяю виконанню проектів у відповідності до методології Scrum.",
            team: "I Love My Team",
        },
        en: {
            name: "Daria Cherviakova",
            about: "Text in en",
            services: "Text in en",
            team: "I Love My Team",
        },
        pl: {
            name: "Daria Cherviakova",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "11",
            imageURL:
                "https://drive.google.com/uc?export=view&id=1N_1jwFLVPJB060F7E1bjQgQHrD4DsCdh",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: [""],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/nataliia-pashchenko-frontenddeveloper/",
                github: "https://github.com/NataPas2021",
                telegram: "",
            },
            tools: [
                "HTML",
                "CSS",
                "Javascript",
                "Typescript",
                "Redux Toolkit",
                "React",
                "Next.js",
                "Node.js",
                "Jira",
                "Trello",
            ],
        },
        uk: {
            name: "Наталія Пащенко",
            about: "Не існує неможливого, потрібно просто знайти правильний шлях",
            services: "Тут буде шось таки написано",
            team: "I Love My Team",
        },
        en: {
            name: "Nataliia Pashchenko",
            about: "Text in en",
            services: "Text in en",
            team: "I Love My Team",
        },
        pl: {
            name: "Daria Cherviakova",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
];
