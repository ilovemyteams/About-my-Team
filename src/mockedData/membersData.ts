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
            projectsExperience: ["www.website.ua"],
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
                "Консультування, менторинг, стратегічне планування, бюджетування, управління проектами та командами, SCRUM Master",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Work should bring inspiration and satisfaction, not just money.",
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: "Praca powinna dawać inspirację i satysfakcję, a nie tylko pieniądze.",
            services: "There will be text in Polish",
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
            projectsExperience: ["www.website.ua"],
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
                "Консультування, менторинг, стратегічне планування, бюджетування, управління проектами та командами, SCRUM Master",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Work should bring inspiration and satisfaction, not just money.",
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: "Praca powinna dawać inspirację i satysfakcję, a nie tylko pieniądze.",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
    {
        data: {
            id: "IhorDronishynets",
            projectId: ["1", "2", "3"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=14EYFUfVxF8bUaTQrS0lX0rzgVTJO-CG9",
            position: "fullstack developer",
            categoryName: "developer",
            projectsExperience: [
                "https://baza-trainee.tech/ua",
                //"https://murrfecto.site/",
            ],
            pricePerHour: "",
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
                "Graphic design, logo, and corporate identity development, printed matter production, label and packaging design, and outdoor advertising",
            team: "I Love My Team",
        },
        pl: {
            name: "Ihor Dronishynets",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
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
            id: "AnastasiiaNazarenko",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1dZgahuKLMKs9t3Fn0TChx7YyKFiyOAYd",
            position: "Graphic Designer",
            categoryName: "designer",
            projectsExperience: ["www.website.ua"],
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
            id: "IrynaTrynkal",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1V1LCyS8p91R7Py1swWeShuAymmBNn0I0",
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
            id: "NataliiaPashchenko",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1N0oakYRn0f1YOAnieUE-adpZxotiolx6",
            position: "Fullstack Developer",
            categoryName: "developer",
            projectsExperience: [""],
            pricePerHour: "",
            socialLinks: {
                linkedin:
                    "https://www.linkedin.com/in/nataliia-pashchenko-frontenddeveloper/",
                github: "https://github.com/NataPas2021",
                telegram: "https://t.me/NataFFFenka",
            },
            tools: [
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Javascript",
                "Typescript",
                "Redux Toolkit",
                "HTML",
                "CSS",
                "Postman",
                "Jira",
                "Trello",
            ],
        },
        uk: {
            name: "Наталія Пащенко",
            about: "Можливо досягти чого завгодно, потрібно лише знайти правильний шлях",
            services: "Тут буде шось таки написано",
            team: "I Love My Team",
        },
        en: {
            name: "Nataliia Pashchenko",
            about: "All is possible, you just need to find the right way",
            services: "Text in en",
            team: "I Love My Team",
        },
        pl: {
            name: "Nataliia Pashchenko",
            about: "Wszystko jest możliwe, trzeba tylko znaleźć właściwą drogę",
            services: "There will be text in Polish",
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
            projectsExperience: ["www.site.ua"],
            pricePerHour: "",
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
                "Taitwind",
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
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Olena Posternak",
            about: "Small things matter. It’s often they, that make life more comfortable.",
            services: "There will be text in Polish",
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
            name: "Ольга Михайлова",
            about: "Люблю знаходити елегантні рішення для складних задач.",
            services:
                "Моя мета - розробка веб-застосунків, що вражають своєю зручністю для користувачів та ефективністю для бізнесу. Я прагну створювати продукти різного рівня складності, що забезпечують не лише функціональність, але й естетичність. Мій підхід полягає в тому, щоб допомагати клієнтам досягати бездоганних результатів шляхом поєднання максимальної корисності та привабливого дизайну у кожному проекті.",
            team: "I Love My Team",
        },
        en: {
            name: "Olga Mykhailova",
            about: "I enjoy finding elegant solutions to difficult tasks.",
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
            id: "KaterynaRubanik",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1Hl4YyM_odWo_I1ZUPSZ_q8RZusxeajCH",
            position: "QA engineer",
            categoryName: "qa",
            projectsExperience: ["www.site.ua"],
            pricePerHour: "",
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
                "Githab",
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
            id: "KaterynaPogrebna",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1nCpjMU476VbcnV3IrejBUZV0hzQWBVuy",
            position: "QA engineer",
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
            id: "DariaCherviakova",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=18zah41aiSfjQTae2kVeE_ABnfmUqQ3mK",
            position: "Project Manager/ Scrum Master",
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
            id: "OlhaKuchalska",
            projectId: ["1"],
            imageURL:
                "https://drive.google.com/uc?export=view&id=1bvQXDyYD1PZdGyBPKszt-ukvB1OL2NqX",
            position: "Business Analyst",
            categoryName: "business-analytic",
            projectsExperience: [""],
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
];
