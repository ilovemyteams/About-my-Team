export interface ServiceType {
    slug: string;
    icon: string;
    image: string;
    ctaButton?: "order" | "write";
    ua: ServiceLocalizationDataType;
    en: ServiceLocalizationDataType;
    pl: ServiceLocalizationDataType;
}

export interface ServiceLocalizationDataType {
    name: string;
    shortDescription: string;
    fullDescription: FullDescriptionDataType | null;
}
export interface TopTextType {
    icon?: string;
    text: string;
}

export interface FullDescriptionDataType {
    title: string;
    introduction: string;
    content: ServiceContentType[];
    ctaText: string;
    topText?: TopTextType[];
}

export interface ServiceContentType {
    layout: number;
    title: string;
    description: DescriptionType[];
}

export interface DescriptionType {
    title?: string;
    icon?: string;
    text: TextType[] | string;
}

export interface TextType {
    text: string;
    type?: "listItem" | "numListItem ";
}

export const servicesData: ServiceType[] = [
    {
        slug: "business-analysis",
        icon: "ba",
        image: "https://drive.google.com/uc?export=view&id=1_ykI2aXWvjw68w42pvdWt9ZfLf1DSDQF",
        ctaButton: "order",
        ua: {
            name: "бізнес-аналіз",
            shortDescription:
                "Аналітика допомагає бізнесу будувати роботу та розвиватись на фактах, а не на здогадах чи інтуїції",
            fullDescription: {
                title: "<purple>Бізнес-аналіз:</purple> ефективні рішення для вашого бізнесу",
                introduction:
                    "В основі кожного успішного проєкту лежить глибоке розуміння бізнес-потреб. Ми допомагаємо визначити ваші цілі, знайти можливості для вдосконалення та створити чіткий план дій, який приведе до реальних результатів. \nНаш підхід до бізнес-аналізу базується на тісній співпраці з клієнтом. Ми досліджуємо ваш бізнес, аналізуємо поточні процеси, вивчаємо цільову аудиторію та конкурентів, щоб запропонувати ефективні рішення, які сприятимуть вашому зростанню.",
                ctaText:
                    "Замовляйте послугу бізнес-аналізу вже сьогодні, щоб отримати чіткий план дій, оптимізувати процеси та досягти реальних результатів!",
                content: [
                    {
                        layout: 5,
                        title: "Що включає послуга Бізнес-аналізу?",
                        description: [
                            {
                                title: "Дослідження поточних бізнес-процесів",
                                text: "Ми вивчаємо, як працює ваш бізнес зараз, щоб зрозуміти його сильні сторони та області, які потребують оптимізації.",
                            },
                            {
                                title: "Визначення бізнес-вимог",
                                text: "Працюємо з вами та зацікавленими сторонами, щоб сформулювати чіткі вимоги до продукту чи послуги.",
                            },
                            {
                                title: "Розробка рішень",
                                text: "Пропонуємо практичні та ефективні шляхи досягнення ваших цілей, адаптовані до специфіки вашого бізнесу.",
                            },
                            {
                                title: "Підготовка документації",
                                text: "Надаємо зрозумілі й деталізовані технічні матеріали, які полегшують роботу команди розробників.",
                            },
                            {
                                title: "Аналіз ринку та конкурентів",
                                text: "Допомагаємо вам зрозуміти ваші конкурентні переваги та знайти нові можливості для розвитку.",
                            },
                            {
                                title: "Дорожня карта проєкту",
                                text: "Створюємо чіткий план дій, який допоможе реалізувати всі етапи вашої ідеї у визначені терміни.",
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Чому це важливо?",
                        description: [
                            {
                                title: "Ефективність ресурсів",
                                text: "Допомагає зосередитися на ключових аспектах, що приносять максимальну цінність для вашого бізнесу.",
                            },
                            {
                                title: "Зниження ризиків",
                                text: " Забезпечує чітке планування та уникнення помилок, які можуть коштувати дорого.",
                            },
                            {
                                title: "Покращення командної роботи",
                                text: " Усі учасники концепції  розуміють свої задачі та мають спільне бачення результату.",
                            },
                            {
                                title: "Гарантія відповідності потребам",
                                text: "Кінцевий продукт буде максимально адаптований до потреб вашого бізнесу та клієнтів.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Чому варто обрати нас?",
                        description: [
                            {
                                text: "Наші спеціалісти мають глибокі знання у бізнес-аналізі та технічному консалтингу.",
                            },
                            {
                                text: "Кожен проєкт — унікальний, тому наші рішення адаптуються саме під вас.",
                            },
                            {
                                text: "Ми підтримуємо постійний зв'язок із клієнтом і надаємо детальні звіти на кожному етапі.",
                            },
                            {
                                text: "Використовуємо перевірені практики, зокрема Agile та Scrum, щоб швидко реагувати на зміни.",
                            },
                            {
                                text: "Обравши нас, ви отримуєте не лише глибокий аналіз, а й команду, яка прагне зробити ваш бізнес сильнішим і ефективнішим.",
                            },
                            {
                                text: "Ми не просто аналізуємо, а пропонуємо практичні дії, які ведуть до успіху.",
                            },
                        ],
                    },
                ],
            },
        },
        en: {
            name: "business analysis",
            shortDescription:
                "Analytics helps the business to build its work and to develop itself based on the facts, but not the guesses or intuition",
            fullDescription: {
                title: "<purple>Business analysis:</purple> effective solutions for your business",
                introduction:
                    "At the core of every successful project lies a deep understanding of business needs. We help you define your goals, identify improvement opportunities, and create a clear action plan that delivers real results. \nOur approach to business analysis is based on close cooperation with the client. We research your business, analyze current processes, study your target audience and competitors to offer effective solutions that will help you grow.",
                ctaText:
                    "Order a business analysis service today to get a clear action plan, optimize processes, and achieve real results!",
                content: [
                    {
                        layout: 5,
                        title: "What the service includes?",
                        description: [
                            {
                                title: "Analysis of current business processes",
                                text: "We examine how your business operates now to understand its strengths and areas needing optimization.",
                            },
                            {
                                title: "Defining business requirements",
                                text: "We work with you and stakeholders to formulate clear requirements for a product or service.",
                            },
                            {
                                title: "Solution development",
                                text: "We offer practical and effective ways to achieve your goals, tailored to the specifics of your business.",
                            },
                            {
                                title: "Documentation preparation",
                                text: "We provide clear and detailed technical materials to streamline the work of the development team.",
                            },
                            {
                                title: "Market and competitor analysis",
                                text: "We help you understand your competitive advantages and identify new growth opportunities.",
                            },
                            {
                                title: "Project roadmap",
                                text: "We create a detailed action plan to execute all stages of your idea within the defined timeline.",
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Why this matters?",
                        description: [
                            {
                                title: "Resource efficiency",
                                text: "Focuses on the key aspects that bring maximum value to your business.",
                            },
                            {
                                title: "Risk reduction",
                                text: " Ensures precise planning and avoids costly mistakes.",
                            },
                            {
                                title: "Improved team collaboration",
                                text: " All project participants understand their tasks and share a common vision of success.",
                            },
                            {
                                title: "Guaranteed alignment with needs",
                                text: "The final product will be fully tailored to the needs of your business and customers.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Why choose us?",
                        description: [
                            {
                                text: "Our specialists have deep expertise in business analysis and technical consulting.",
                            },
                            {
                                text: "Every project is unique, so our solutions are customized specifically for you.",
                            },
                            {
                                text: "We maintain constant communication with clients and provide detailed reports at every stage.",
                            },
                            {
                                text: "We use proven practices, including Agile and Scrum, to quickly adapt to changes.",
                            },
                            {
                                text: "By choosing us, you gain not only a thorough analysis but also a team dedicated to making your business stronger and more efficient.",
                            },
                            {
                                text: "We don’t just analyze – we propose practical steps that lead to success.",
                            },
                        ],
                    },
                ],
            },
        },
        pl: {
            name: "analiza biznesowa",
            shortDescription:
                "Analityka pomaga firmom budować i rozwijać się w oparciu na faktach, a nie na domysłach lub intuicji",
            fullDescription: {
                title: "<purple>Analiza biznesowa:</purple> skuteczne rozwiązania dla Twojej firmy",
                introduction:
                    "Każdy udany projekt opiera się na dogłębnym zrozumieniu potrzeb biznesowych. Pomagamy określić Twoje cele, znaleźć możliwości poprawy i stworzyć jasny plan działania,  który przyniesie realne rezultaty. \nNasze podejście do analizy biznesowej opiera się na ścisłej współpracy z klientem. Badamy Twoją firmę, analizujemy bieżące procesy, badamy grupę docelową i konkurencję, aby zaoferować skuteczne rozwiązania, które pomogą Ci się rozwijać.",
                ctaText:
                    "Zamów usługę analizy biznesowej już dziś, aby uzyskać jasny plan działania, zoptymalizować procesy i osiągnąć rzeczywiste wyniki!",
                content: [
                    {
                        layout: 5,
                        title: "Co obejmuje usługa?",
                        description: [
                            {
                                title: "Badanie bieżących procesów biznesowych",
                                text: "Badamy, w jaki sposób Twoja firma działa obecnie, aby zrozumieć jej mocne strony i obszary wymagające optymalizacji.",
                            },
                            {
                                title: "Identyfikacja wymagań biznesowych",
                                text: "Współpracujemy z Tobą i Twoimi interesariuszami w celu sformułowania jasnych wymagań dotyczących produktu lub usługi.",
                            },
                            {
                                title: "Opracowanie rozwiązania",
                                text: "Oferujemy praktyczne i skuteczne sposoby osiągnięcia celów, dostosowane do specyfiki Twojej firmy.",
                            },
                            {
                                title: "Przygotowanie dokumentacji",
                                text: "Zapewniamy jasne i szczegółowe materiały techniczne, które ułatwiają pracę zespołu programistów.",
                            },
                            {
                                title: "Analiza rynku i konkurencji",
                                text: "Pomagamy zrozumieć przewagi konkurencyjne i znaleźć nowe możliwości rozwoju.",
                            },
                            {
                                title: "Mapa drogowa projektu",
                                text: "Tworzymy przejrzysty plan działania, który pozwala zrealizować wszystkie etapy Twojego pomysłu w określonym czasie.",
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Dlaczego to ważne?",
                        description: [
                            {
                                title: "Efektywność zasobów",
                                text: "Pomaga skupić się na kluczowych aspektach, które wnoszą największą wartość do Twojego biznesu.",
                            },
                            {
                                title: "Redukcja ryzyka",
                                text: "Zapewnia jasne planowanie i unikanie błędów, które mogą być kosztowne.",
                            },
                            {
                                title: "Lepsza praca zespołowa",
                                text: "Wszyscy uczestnicy koncepcji rozumieją swoje zadania i mają wspólną wizję wyniku.",
                            },
                            {
                                title: "Dostosowanie do potrzeb",
                                text: "Produkt końcowy będzie w pełni dostosowany do potrzeb Twojej firmy i klientów.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Dlaczego warto wybrać nas?",
                        description: [
                            {
                                text: "Nasi eksperci posiadają głęboką wiedzę z zakresu analizy biznesowej i doradztwa technicznego.",
                            },
                            {
                                text: "Każdy projekt jest unikalny, dlatego nasze rozwiązania są dostosowane do Twoich indywidualnych potrzeb.",
                            },
                            {
                                text: "Utrzymujemy stałą komunikację z klientem i dostarczamy szczegółowe raporty na każdym etapie.",
                            },
                            {
                                text: "Korzystamy ze sprawdzonych praktyk, takich jak Agile i Scrum, aby szybko reagować na zmiany.",
                            },
                            {
                                text: "Wybierając nas, otrzymujesz nie tylko dogłębną analizę, ale także zespół, który jest zaangażowany w uczynienie Twojej firmy silniejszą i bardziej wydajną.",
                            },
                            {
                                text: "Nie tylko analizujemy —  proponujemy praktyczne kroki prowadzące do sukcesu.",
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        slug: "design",
        ctaButton: "order",
        icon: "design",
        image: "https://drive.google.com/uc?export=view&id=10SeaH077vHUZhYU8vQm2-yX2Ff9nwJku",
        ua: {
            name: "дизайн",
            shortDescription:
                "Дизайнер відмальовує прототип кожної сторінки, на якому схематично зображує розташування блоків, розміщення ілюстрацій і тексту. Тільки після затвердження прототипу із замовником ми приступаємо до створення дизайну сайту.",
            fullDescription: {
                title: "<purple>Дизайн:</purple> сайти та цифрові продукти",
                introduction:
                    "Наша команда створить унікальні, сучасні та ефективні дизайни для ваших сайтів і цифрових продуктів, які допоможуть вашому бізнесу виділитися серед конкурентів. Наші рішення поєднують естетику, функціональність і зручність для користувача.",
                content: [
                    {
                        title: "Що включає послуга дизайну?",
                        layout: 5,
                        description: [
                            {
                                title: "Індивідуальний підхід",
                                text: "Адаптуємо кожен проєкт під ваш стиль, потреби та специфіку аудиторії, щоб дизайн відповідав вашій унікальності.",
                            },
                            {
                                title: "UX/UI-дизайн",
                                text: "Забезпечуємо інтуїтивно зрозумілу навігацію та привабливий вигляд, що підвищують залученість користувачів.",
                            },
                            {
                                title: "Адаптивність",
                                text: "Ваш дизайн буде виглядати ідеально на будь-яких пристроях: смартфонах, планшетах, ноутбуках і моніторах.",
                            },
                            {
                                title: "Оптимізація під SEO",
                                text: "Розробляємо дизайн, який сприятиме просуванню сайту у пошукових системах.",
                            },
                        ],
                    },
                    {
                        layout: 6,
                        title: "Як ми працюємо?",
                        description: [
                            {
                                title: "Аналіз ідеї",
                                text: "Вивчаємо ваші цілі, цільову аудиторію та бажаний результат, щоб створити найкраще рішення.",
                            },
                            {
                                title: "Прототипування",
                                text: "Розробляємо чорнові макети для затвердження структури та функціональності.",
                            },
                            {
                                title: "Реалізація дизайну",
                                text: "Створюємо професійний вигляд вашого продукту, який відповідає сучасним трендам і стандартам.",
                            },
                            {
                                title: "Коригування та фіналізація",
                                text: "На фінальному етапі ми доводимо всі деталі до досконалості, щоб кінцевий результат перевершив ваші очікування.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Від чого залежить ціна та терміни?",
                        description: [
                            {
                                title: "Складність проєкту",
                                text: "Обсяг сторінок, або необхідність створення унікальних елементів.",
                            },
                            {
                                title: "Обсяг робіт",
                                text: "Редизайн існуючого сайту чи розробка з нуля.",
                            },
                            {
                                title: "Терміновість",
                                text: "Стандартні проєкти займають від 2 до 4 тижнів, але все потребує обговорення та уточнення.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Чому обирають нас?",
                        description: [
                            {
                                text: "Ми вміємо перетворювати ваші ідеї на стильний та ефективний візуальний продукт.",
                            },
                            {
                                text: "Ми розуміємо потреби вашого бізнесу і пропонуємо креативні ідеї, які працюють на ваш результат.",
                            },
                            {
                                text: "Завжди орієнтуємося на сучасні тенденції дизайну, поєднуючи їх із вашими запитами.",
                            },
                            { text: "З нами ви станете ще помітнішими." },
                        ],
                    },
                ],
                ctaText:
                    "Замовте консультацію вже зараз та отримайте професійний дизайн для вашого проєкту",
            },
        },
        en: {
            name: "design",
            shortDescription:
                "Designer creates prototype of each and every page where he shows positioning of the blocks, illustrations and text. Only after prototype approval by the customer, we start creating the website design.",
            fullDescription: {
                title: "<purple>Design:</purple> websites and digital products",
                introduction:
                    "Our team creates unique, modern, and effective designs for your websites and digital products, helping your business stand out among competitors. Our solutions combine aesthetics, functionality, and experience.",
                content: [
                    {
                        title: "What does the design service include?",
                        layout: 5,
                        description: [
                            {
                                title: "Personalized approach",
                                text: "We tailor every project to your style, needs, and audience specifics, ensuring the design reflects your uniqueness.",
                            },
                            {
                                title: "UX/UI design",
                                text: "We provide intuitive navigation and an attractive look that increases user engagement.",
                            },
                            {
                                title: "Responsiveness",
                                text: "Your design will look perfect on all devices, including smartphones, tablets, laptops, and monitors.",
                            },
                            {
                                title: "SEO optimization",
                                text: "We develop a design that will help promote your website in search engines.",
                            },
                        ],
                    },
                    {
                        layout: 6,
                        title: "How do we work?",
                        description: [
                            {
                                title: "Idea analysis",
                                text: "We analyze your goals, target audience, and desired outcome to deliver the best solution.",
                            },
                            {
                                title: "Prototyping",
                                text: "We create draft mockups to approve the structure and functionality.",
                            },
                            {
                                title: "Design implementation",
                                text: "We create a professional look for your product that meets modern trends and standards.",
                            },
                            {
                                title: "Adjustments and finalization",
                                text: "In the final stage, we bring all the details to perfection to ensure the end result exceeds your expectations.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "What determines the price and timeline?",
                        description: [
                            {
                                title: "Project complexity",
                                text: "The number of pages or the need to create unique elements.",
                            },
                            {
                                title: "Scope of work",
                                text: "Redesigning an existing website or developing one from scratch.",
                            },
                            {
                                title: "Urgency",
                                text: "Standard projects take 2 to 4 weeks, but everything needs to be discussed and clarified.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Why choose us?",
                        description: [
                            {
                                text: "We know how to turn your ideas into a stylish and effective visual product.",
                            },
                            {
                                text: "We understand the needs of your business and offer creative ideas that work for your results.",
                            },
                            {
                                text: "We always focus on modern design trends, combining them with your needs.",
                            },
                            {
                                text: "With us, you will become even more visible.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Book a consultation now and get a professional design for your project!",
            },
        },
        pl: {
            name: "project",
            shortDescription:
                "Projektant rysuje prototyp każdej strony, który schematycznie przedstawia rozmieszczenie bloków, ilustracji i tekstu. Dopiero po zatwierdzeniu prototypu przez klienta rozpoczynamy tworzenie projektu strony internetowej.",
            fullDescription: {
                title: "<purple>Projektowanie:</purple> strony internetowe i produkty cyfrowe",
                introduction:
                    "Tworzymy unikalne, nowoczesne i efektywne projekty, które pomogą Twojemu biznesowi wyróżnić się na tle konkurencji. Nasze rozwiązania łączą w sobie estetykę, funkcjonalność i doświadczenie użytkownika.",
                content: [
                    {
                        title: "Co obejmuje usługa projektowania?",
                        layout: 5,
                        description: [
                            {
                                title: "Indywidualne podejście",
                                text: "Każdy projekt dostosowujemy do Twojego stylu, potrzeb i specyfiki grupy docelowej. Dbamy, aby design pasował do Twojej wyjątkowości.",
                            },
                            {
                                title: "Projektowanie UX/UI",
                                text: "Zapewniamy intuicyjną nawigację oraz atrakcyjny wygląd, które wspierają zaangażowanie i lojalność klientów. ",
                            },
                            {
                                title: "Responsywność",
                                text: "Zapewniamy, że Twój projekt będzie idealnie wyglądać i działać na wszystkich urządzeniach – smartfonach, tabletach, laptopach i monitorach.",
                            },
                            {
                                title: "Optymalizacja pod SEO",
                                text: "Opracowujemy projekt, który pomoże promować Twoją witrynę w wyszukiwarkach.",
                            },
                        ],
                    },
                    {
                        layout: 6,
                        title: "Jak pracujemy?",
                        description: [
                            {
                                title: "Analiza pomysłu",
                                text: "Rozpoczynamy od zrozumienia Twoich celów, oczekiwań i charakterystyki odbiorców, aby stworzyć najlepsze rozwiązanie.",
                            },
                            {
                                title: "Tworzenie prototypów",
                                text: "Opracowujemy wstępne makiety, aby zatwierdzić strukturę i funkcjonalność.",
                            },
                            {
                                title: "Wdrożenie projektu",
                                text: "Tworzymy profesjonalny wygląd produktu, który spełnia nowoczesne trendy i standardy.",
                            },
                            {
                                title: "Dopracowanie szczegółów i finalizacja",
                                text: "Na końcowym etapie doprowadzamy wszystkie szczegóły do perfekcji, aby efekt końcowy przekroczył Twoje oczekiwania. ",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Od czego zależy cena i terminy?",
                        description: [
                            {
                                title: "Złożoność projektu",
                                text: "Liczba stron lub potrzeba stworzenia unikalnych elementów.",
                            },
                            {
                                title: "Zakres prac",
                                text: "Redesign istniejącej strony internetowej lub stworzenie jej od podstaw.",
                            },
                            {
                                title: "Pilność",
                                text: "Standardowe projekty zajmują od 2 do 4 tygodni, ale wszystko wymaga omówienia i doprecyzowania.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Dlaczego warto wybrać nas?",
                        description: [
                            {
                                text: "Potrafimy przekształcić Twoje pomysły w stylowy i efektywny produkt wizualny.",
                            },
                            {
                                text: "Rozumiemy potrzeby Twojego biznesu i oferujemy kreatywne rozwiązania, które przynoszą efekty.",
                            },
                            {
                                text: "Zawsze kierujemy się nowoczesnymi trendami w designie, łącząc je z Twoimi wymaganiami.",
                            },
                            {
                                text: "Dzięki nam Twoja firma stanie się jeszcze bardziej widoczna.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Zamów konsultację już teraz i zdobądź profesjonalny projekt dla swojego biznesu!",
            },
        },
    },
    {
        slug: "development",
        ctaButton: "write",
        icon: "dev",
        image: "https://drive.google.com/uc?export=view&id=1ECWvNJkxkxcorwlbapXVB1ksw1-mS93l",
        ua: {
            name: "розробка",
            shortDescription:
                "На етапі розробки прототип сайту оживає та набуває потрібного функціоналу, підключаются бази даних та втілюються можливості оплати та наповнення сайту контентом",
            fullDescription: {
                title: "<purple>Розробка сайтів:</purple> як ми створюємо ваш ідеальний продукт",
                introduction:
                    "На етапі розробки наші ідеї та ваші побажання перетворюються на працюючий веб-продукт. Це момент, коли прототип сайту, де ви можете бачити  структуру, основні елементи, розташування блоків, оживає, наповнюючись функціональністю та інтерактивністю. Ми приділяємо максимум уваги деталям, щоб ваш сайт не тільки виглядав бездоганно, а й працював швидко, надійно та зручно для користувачів.",
                content: [
                    {
                        title: "Що включає етап розробки?",
                        layout: 1,
                        description: [
                            {
                                title: "Функціональність на 100%",
                                text: [
                                    {
                                        text: "Ми інтегруємо всі необхідні функції:",
                                    },
                                    {
                                        text: "Реєстрація користувачів, особисті кабінети.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Пошукові системи та фільтри.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Кошик, оформлення замовлень, платіжні системи.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Інтеграція з CRM, API, та іншими сервісами.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Підключення баз даних",
                                text: "Від маленьких контактних форм до великих e-commerce платформ із тисячами товарів — ми створюємо та оптимізуємо бази даних, які забезпечують стабільну роботу вашого сайту.",
                            },
                            {
                                title: "Наповнення контентом",
                                text: "Ви можете нам надати свої власні напрацювання при їх наявності, в іншому ж випадку ми попрацюємо над наповненням. Ваш сайт отримає тексти, зображення, відео, та інший контент, який захопить увагу ваших клієнтів. Ми допоможемо адаптувати матеріали, щоб вони виглядали стильно та відповідали сучасним стандартам SEO.",
                            },
                            {
                                title: "Респонсивний дизайн",
                                text: "Ми гарантуємо, що ваш сайт чудово працюватиме на всіх пристроях — від мобільних телефонів до великих моніторів. Зручність користування для ваших клієнтів — наш пріоритет.",
                            },
                            {
                                title: "Оптимізація швидкості",
                                text: "Ми використовуємо найкращі практики розробки, щоб ваш сайт завантажувався швидко навіть при високому навантаженні.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Чому варто обрати нас?",
                        description: [
                            {
                                title: "Унікальні сайти",
                                text: "Ми не просто створюємо сайти, а робимо їх унікальними інструментами для вашого бізнесу, можете переглянути вже виконані нами проєкти в *link=`/${locale}/#portfolio`*портфоліо*/link*",
                            },
                            {
                                title: "Масштабовані рішення",
                                text: "Наші рішення масштабовані: якщо ваш бізнес зростатиме, сайт легко адаптується до нових потреб.",
                            },
                            {
                                title: "Завжди на зв’язку",
                                text: "Ми завжди на зв’язку: від старту розробки до запуску та подальшої підтримки.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Давайте разом оживимо вашу ідею! Напишіть нам просто зараз, щоб обговорити ваш проєкт.",
            },
        },
        en: {
            name: "development",
            shortDescription:
                "At the stage of development the website prototype receives its birth, gaining all the necessary functionality, databases are connected, the payment possibilities are implemented, the website is filled up with the content",
            fullDescription: {
                title: "<purple>Website development:</purple> how we create your perfect product",
                introduction:
                    "During the development phase, our ideas and your requests turn into a working web product. This is the moment when the website prototype, where you can see the structure, main elements, and arrangement of blocks, comes to life, filling with functionality and interactivity. We pay maximum attention to details to make your website not only look perfect, but also work quickly, reliably, and conveniently for users.",
                content: [
                    {
                        title: "What does the development phase include?",
                        layout: 1,
                        description: [
                            {
                                title: "100% functionality",
                                text: [
                                    {
                                        text: " We integrate all the necessary features:",
                                    },
                                    {
                                        text: "User registration, personal accounts.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Search engines and filters.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Shopping cart, ordering, payment systems.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Integration with CRM, API, and other services.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Database integration",
                                text: "From small contact forms to large e-commerce platforms with thousands of products, we create and optimize databases that ensure the stable performance of your website.",
                            },
                            {
                                title: "Content filling",
                                text: "If you have your own content, you can provide it to us, otherwise we will handle the content creation for you. Your website will receive texts, images, videos, and other content that will capture the attention of your customers. We will help you adapt the materials to make them look stylish and meet modern SEO standards.",
                            },
                            {
                                title: "Responsive design",
                                text: "We guarantee that your website will work perfectly on all devices - from mobile phones to large monitors. Your customers' ease of use is our priority.",
                            },
                            {
                                title: "Speed optimization",
                                text: "We use the best development practices to ensure that your website loads quickly even under heavy traffic.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Why choose us?",
                        description: [
                            {
                                title: "Unique websites",
                                text: "We don't just create websites, we make them unique tools for your business, you can see the projects we have already completed in our *link=`/${locale}/#portfolio`*portfolio*/link*",
                            },
                            {
                                title: "Scalable solutions",
                                text: "Our solutions are scalable: if your business grows, the website can easily adapt to new needs.",
                            },
                            {
                                title: "Always in touch",
                                text: "We are always in touch: from the start of development to launch and further support.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Let's bring your idea to life together! Contact us right now to discuss your project.",
            },
        },
        pl: {
            name: "rozwój",
            shortDescription:
                "Na etapie rozwoju prototyp strony internetowej ożywa i zyskuje niezbędną funkcjonalność, bazy danych są połączone, a opcje płatności i wypełniania treścią są wdrażane",
            fullDescription: {
                title: "<purple>Tworzenie stron internetowych:</purple> jak tworzymy idealny produkt",
                introduction:
                    "Na etapie rozwoju nasze pomysły i Twoje życzenia zamieniają się w działający produkt internetowy. Jest to moment, w którym prototyp strony internetowej, na którym można zobaczyć strukturę, główne elementy i układ bloków, ożywa, wypełniając się funkcjonalnością i interaktywnością. Zwracamy maksymalną uwagę na szczegóły, aby Twoja witryna nie tylko wyglądała idealnie, ale także działała szybko, niezawodnie i wygodnie dla użytkowników.",
                content: [
                    {
                        title: "Co obejmuje etap rozwoju?",
                        layout: 1,
                        description: [
                            {
                                title: "100% funkcjonalności",
                                text: [
                                    {
                                        text: "Integrujemy wszystkie niezbędne funkcje:",
                                    },
                                    {
                                        text: "Rejestracja użytkowników, konta osobiste.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Systemy wyszukiwania i filtry.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Koszyk, składanie zamówień, systemy płatności.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Integracja z CRM, API i innymi usługami.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Połączenie z bazami danych",
                                text: "Od prostych formularzy kontaktowych po rozbudowane platformy e-commerce z tysiącami produktów, tworzymy i optymalizujemy bazy danych, które zapewniają stabilne działanie Twojej strony internetowej.",
                            },
                            {
                                title: "Wypełnianie treścią",
                                text: "Możesz dostarczyć nam własne materiały, ja jeśli ich nie posiadasz, zajmiemy się ich przygotowaniem. Twoja strona zostanie wzbogacona o teksty, obrazy, filmy i inne treści, które przyciągną uwagę Twoich klientów. Pomożemy zaadaptować materiały tak, aby wyglądały stylowo i spełniały współczesne standardy SEO.",
                            },
                            {
                                title: "Responsywny design",
                                text: "Gwarantujemy, że Twoja strona będzie działać idealnie na wszystkich urządzeniach – od telefonów komórkowych po duże monitory. Łatwość użytkowania jest dla nas priorytetem.",
                            },
                            {
                                title: "Optymalizacja szybkości",
                                text: "Stosujemy najlepsze praktyki tworzenia stron, aby Twoja strona ładowała się szybko, nawet przy dużym obciążeniu.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Dlaczego warto wybrać nas?",
                        description: [
                            {
                                title: "Unikalne strony internetowe",
                                text: "Nie tylko tworzymy strony internetowe, ale czynimy je unikalnymi narzędziami dla Twojej firmy. Sprawdź nasze *link=`/${locale}/#portfolio`*portfolio*/link*",
                            },
                            {
                                title: "Skalowalne rozwiązania",
                                text: "Nasze rozwiązania są skalowalne: jeśli Twój biznes się rozwinie, strona łatwo dostosuje się do nowych potrzeb.",
                            },
                            {
                                title: "Zawsze w kontakcie",
                                text: "Jesteśmy zawsze dostępni: od rozpoczęcia prac nad stroną, przez jej uruchomienie, po dalsze wsparcie.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Razem wprowadźmy Twój pomysł w życie! Skontaktuj się z nami już teraz, aby omówić swój projekt.",
            },
        },
    },
    {
        slug: "testing",
        icon: "test",
        image: "https://drive.google.com/uc?export=view&id=1_OfiG108dHYF__k1ZtadN1wKzETCiWfx",
        ctaButton: "order",
        ua: {
            name: "тестування",
            shortDescription:
                "На етапі тестування перевіряється працездатність сайту і його відповідність вимогам. Оцінюється робота функціоналу, зручність використання, оптимізація під різні браузери та розміри екранів та швидкість завантаження.",
            fullDescription: {
                title: "<purple>Тестування:</purple> ваш сайт під ретельною перевіркою",
                introduction:
                    "На етапі тестування ми гарантуємо, що ваш сайт працюватиме бездоганно та відповідатиме всім сучасним стандартам. Це важливий етап, де перевіряється не лише технічна частина, але й зручність для користувачів, швидкість завантаження та сумісність із різними пристроями.",
                content: [
                    {
                        layout: 3,
                        title: "Що включає тестування?",
                        description: [
                            {
                                title: "Функціональне тестування",
                                icon: "test",
                                text: [
                                    {
                                        text: "Ми перевіряємо всі елементи сайту:",
                                    },
                                    {
                                        text: "Чи працюють кнопки, форми та посилання?",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Чи коректно відображаються дані та, чи виконуються запити до баз даних?",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Чи правильно працює інтеграція з платіжними системами, API або CRM?",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Тестування інтерфейсу користувача (UI/UX тестування)",
                                icon: "test1",
                                text: "Оцінюємо, наскільки логічно побудована структура сайту та чи легко користувачі можуть знайти потрібну інформацію. Ваш сайт має бути інтуїтивно зрозумілим для кожного відвідувача.",
                            },
                            {
                                title: "Тестування сумісності",
                                icon: "test2",
                                text: "Цей вид тестування охоплює кросбраузерне та кросплатформне тестування. Перевірка проводиться на різних операційних системах (Windows, Mac, Linux, Android, iOS) та браузерах, щоб забезпечити стабільну роботу програми та її сумісність з різними платформами.",
                            },
                            {
                                title: "Тестування на різних пристроях",
                                icon: "test3",
                                text: "Ми аналізуємо, як сайт виглядає та працює на смартфонах, планшетах, ноутбуках і великих моніторах. Респонсивність і адаптивність — ключ до успіху!",
                            },
                            {
                                title: "Швидкість завантаження",
                                icon: "test4",
                                text: "Перевіряємо, наскільки швидко завантажується ваш сайт, навіть за низької швидкості інтернету. Ми оптимізуємо код, зображення та інші ресурси, щоб забезпечити найкращу продуктивність.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Чому це важливо?",
                        description: [
                            {
                                text: "Якість тестування прямо впливає на репутацію вашого бізнесу.",
                            },
                            {
                                text: "Користувачі цінують стабільність, зручність і швидкість роботи сайту.",
                            },
                            {
                                text: "Виявлення та усунення помилок на етапі тестування значно дешевше, ніж їх виправлення після запуску продукту.",
                            },
                            {
                                text: "Безперебійна робота вашого продукту допомагає виділитися серед конкурентів і збільшити лояльність користувачів.",
                            },
                            {
                                text: "Кожна успішна взаємодія з продуктом підвищує задоволеність клієнтів, що напряму впливає на повторні продажі та рекомендації.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Замовте тестування у нас — і будьте впевнені, що ваш сайт готовий до будь-яких викликів!",
            },
        },
        en: {
            name: "testing",
            shortDescription:
                "At the stage of testing the performance of the website and its correspondence to the requirements are checked. We test functionality, usability, optimization for different browsers, screen sizes and the speed of website",
            fullDescription: {
                title: "<purple>Testing:</purple> your website is under careful inspection",
                introduction:
                    "During the testing phase, we ensure that your website works flawlessly and meets all modern standards. This is an important stage where we check not only the technical part, but also the user experience, loading speed, and compatibility with various devices.",
                content: [
                    {
                        layout: 3,
                        title: "What does testing include?",
                        description: [
                            {
                                title: "Functional testing",
                                icon: "test",
                                text: [
                                    {
                                        text: "We check all elements of the website:",
                                    },
                                    {
                                        text: "Do buttons, forms, and links work?",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Is the data displayed correctly and are database queries executed?",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Does the integration with payment systems, APIs, or CRM work correctly?",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "User interface testing (UI/UX testing)",
                                icon: "test1",
                                text: "We evaluate how logically the website structure is built and whether users can easily find the information they need. Your website should be intuitive for every visitor.",
                            },
                            {
                                title: "Compatibility testing",
                                icon: "test2",
                                text: "This type of testing includes cross-browser and cross-platform verification. The test is performed on different operating systems (Windows, Mac, Linux, Android, iOS) and browsers to ensure that the application works stably and is compatible with different platforms.",
                            },
                            {
                                title: "Testing on multiple devices",
                                icon: "test3",
                                text: "We analyze how the website looks and works on smartphones, tablets, laptops, and large monitors. Responsiveness and adaptability are the key to success!",
                            },
                            {
                                title: "Loading speed testing",
                                icon: "test4",
                                text: "We check how fast your website loads, even at low internet speeds. We optimize code, images, and other resources to ensure the best performance.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Why is this important?",
                        description: [
                            {
                                text: "The quality of testing directly affects the reputation of your business.",
                            },
                            {
                                text: "Users appreciate the stability, convenience, and speed of a website.",
                            },
                            {
                                text: "Detecting and fixing errors at the testing stage is much cheaper than fixing them after the product launch.",
                            },

                            {
                                text: "The smooth operation of your product helps you stand out from the competition and increase user loyalty.",
                            },
                            {
                                text: "Each successful interaction with the product increases customer satisfaction, which directly affects repeat sales and recommendations.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Order testing from us and be sure that your website is ready for any challenges!",
            },
        },
        pl: {
            name: "testowanie",
            shortDescription:
                "Na etapie testowania sprawdzana jest wydajność strony internetowej i jej zgodność z wymaganiami. Oceniana jest funkcjonalność, użyteczność, optymalizację pod kątem różnych przeglądarek, rozmiarów ekranu i szybkości działania strony.",
            fullDescription: {
                title: "<purple>Testowanie:</purple> Twoja strona jest pod kontrolą",
                introduction:
                    "Na etapie testowania upewniamy się, że witryna działa bezbłędnie i spełnia wszystkie współczesne standardy. To kluczowy etap, podczas którego sprawdzana jest nie tylko strona techniczna, ale także wygoda użytkowania, szybkość ładowania oraz kompatybilność z różnymi urządzeniami.",
                content: [
                    {
                        layout: 3,
                        title: "Co obejmuje testowanie?",
                        description: [
                            {
                                title: "Testowanie funkcjonalne",
                                icon: "test",
                                text: [
                                    {
                                        text: "Sprawdzamy wszystkie elementy strony:",
                                    },
                                    {
                                        text: "Czy działają przyciski, formularze i linki?",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Czy dane są poprawnie wyświetlane i czy zapytania do bazy danych są wykonywane prawidłowo?",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Czy integracja z systemami płatności, API lub CRM działa poprawnie?",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Testowanie interfejsu użytkownika (UI/UX)",
                                icon: "test1",
                                text: "Oceniamy, na ile logiczna jest struktura strony oraz czy użytkownicy łatwo znajdą potrzebne informacje. Twoja strona powinna być intuicyjna i przyjazna dla każdego odwiedzającego.",
                            },
                            {
                                title: "Testowanie kompatybilności",
                                icon: "test2",
                                text: "Ten rodzaj testowania obejmuje testy międzyprzeglądarkowe i międzyplatformowe. Test przeprowadzany jest na różnych systemach operacyjnych (Windows, Mac, Linux, Android, iOS) i przeglądarkach, aby upewnić się, że aplikacja działa stabilnie i jest kompatybilna z różnymi platformami.",
                            },
                            {
                                title: "Testowanie na różnych urządzeniach",
                                icon: "test3",
                                text: "Analizujemy wygląd i działanie strony internetowej na smartfonach, tabletach, laptopach i dużych monitorach. Responsywność i zdolność adaptacji to klucz do sukcesu!",
                            },
                            {
                                title: "Szybkość ładowania",
                                icon: "test4",
                                text: "Sprawdzamy, jak szybko ładuje się Twoja strona, nawet przy niskiej prędkości internetu. Optymalizujemy kod, obrazy i inne zasoby, aby zapewnić jak najlepszą wydajność.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Dlaczego to jest ważne?",
                        description: [
                            {
                                text: "Jakość testowania bezpośrednio wpływa na reputację Twojego biznesu.",
                            },
                            {
                                text: "Użytkownicy cenią stabilność, wygodę i szybkość działania strony.",
                            },
                            {
                                text: "Wykrywanie i naprawianie błędów na etapie testowania jest znacznie tańsze niż ich poprawa po uruchomieniu produktu.",
                            },

                            {
                                text: "Płynne działanie produktu pomaga wyróżnić się na tle konkurencji i zwiększyć lojalność użytkowników.",
                            },
                            {
                                text: "Każda udana interakcja z produktem zwiększa zadowolenie klientów, co bezpośrednio wpływa na powtarzalność sprzedaży i rekomendacje.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Zamów testowanie u nas – i bądź pewny, że Twoja strona jest gotowa na każde wyzwanie!",
            },
        },
    },
    {
        slug: "support",
        icon: "support",
        image: "https://drive.google.com/uc?export=view&id=1eKfQR0K5jxvGmypKRJcoRxkCfomM6jHm",
        ctaButton: "order",
        ua: {
            name: "підтримка",
            shortDescription:
                "Представник команди навчає співробітників клієнта роботі із сайтом, щоб надалі клієнт міг самостійно оновлювати контент на своєму сайті.",
            fullDescription: {
                title: "<purple>Підтримка:</purple> турбота про стабільність вашого продукту",
                introduction:
                    "Ми забезпечуємо повний супровід вашого продукту, щоб він працював бездоганно, задовольняючи потреби користувачів і відповідаючи вашим бізнес-цілям. Наша команда надає якісну технічну підтримку, оперативно вирішує проблеми й допомагає з оновленнями та адаптацією.",
                ctaText:
                    "Замовте підтримку у нас — і ми допоможемо вашому продукту залишатися на вершині стабільності та ефективності!",
                content: [
                    {
                        layout: 7,
                        title: "Що включає послуга підтримки?",
                        description: [
                            {
                                title: "Технічна підтримка",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Виявлення та усунення технічних несправностей.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Оптимізація налаштувань для безперебійної роботи систем.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Контроль роботи інтеграцій, баз даних та серверів.",
                                    },
                                ],
                                icon: "support1",
                            },
                            {
                                title: "Підтримка користувачів",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Допомога вашим клієнтам у вирішенні їхніх питань.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Консультації щодо використання функціоналу продукту.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Надання рекомендацій для підвищення ефективності роботи з продуктом.",
                                    },
                                ],
                                icon: "support2",
                            },
                            {
                                title: "Планове обслуговування",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Регулярний моніторинг систем для попередження збоїв.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Проведення планових оновлень та оптимізацій.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Тестування нових функцій перед їх впровадженням.",
                                    },
                                ],
                                icon: "support3",
                            },
                            {
                                title: "Доступність",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Можливість налаштування графіка підтримки за вашим запитом.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Швидке реагування і випралення виникаючих проблем.",
                                    },
                                ],
                                icon: "support4",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Чому це важливо?",
                        description: [
                            {
                                text: "Гарантія безперебійної роботи вашого продукту підвищує довіру та задоволеність клієнтів.",
                            },
                            {
                                text: "Швидке реагування на проблеми зменшує ризики втрат і простоїв.",
                            },
                            {
                                text: "Регулярне обслуговування дозволяє уникнути серйозних технічних несправностей і заощадити ваші кошти.",
                            },
                        ],
                    },
                ],
            },
        },
        en: {
            name: "support",
            shortDescription:
                "Team representative teaches the customer's employees to work with the web-site, to enable the customer to update the website's content in future",
            fullDescription: {
                title: "<purple>Support:</purple> ensuring the stability of your product",
                introduction:
                    "We provide full support for your product, ensuring it runs flawlessly, meets user needs, and aligns with your business goals. Our team delivers high-quality technical support, promptly resolves issues, and assists with updates and adaptation.",
                ctaText:
                    "Order support from us, and we’ll help your product stay at the top of its stability and efficiency!",
                content: [
                    {
                        layout: 7,
                        title: "What does the support service include?",
                        description: [
                            {
                                title: "Technical support",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Identification and resolving technical issues.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Optimization of settings for the smooth operation of systems.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Monitoring integrations, databases, and servers.",
                                    },
                                ],
                                icon: "support1",
                            },
                            {
                                title: "User support",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Assisting your clients with their issues.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Guidance on how to use the product functionality.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Providing recommendations to enhance efficiency when working with the product.",
                                    },
                                ],
                                icon: "support2",
                            },
                            {
                                title: "Planned maintenance",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Regular system monitoring to prevent disruptions.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Conducting scheduled updates and optimizations.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Testing new features before implementation.",
                                    },
                                ],
                                icon: "support3",
                            },
                            {
                                title: "Availability",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Ability to customize the support schedule at your request.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Quick response and correction of emerging problems.",
                                    },
                                ],
                                icon: "support4",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Why is this important?",
                        description: [
                            {
                                text: "Ensures uninterrupted product performance, boosting client trust and satisfaction.",
                            },
                            {
                                text: "Quick issue resolution minimizes risks of losses and downtime.",
                            },
                            {
                                text: "Regular maintenance helps avoid significant technical problems and saves costs.",
                            },
                        ],
                    },
                ],
            },
        },
        pl: {
            name: "wsparcie",
            shortDescription:
                "Przedstawiciel zespołu szkoli pracowników klienta w zakresie pracy ze stroną internetową, tak aby klient mógł samodzielnie aktualizować treści na swojej stronie internetowej.",
            fullDescription: {
                title: "<purple>Wsparcie:</purple> troska o stabilność Twojego produktu",
                introduction:
                    "Zapewniamy pełne wsparcie dla Twojego produktu, aby działał bezbłędnie, spełniał potrzeby użytkowników i odpowiadał Twoim celom biznesowym. Nasz zespół oferuje wysokiej jakości wsparcie techniczne, szybko rozwiązuje problemy i pomaga w aktualizacjach oraz dostosowaniu systemu.",
                ctaText:
                    "Zamów wsparcie u nas, a pomożemy Twojemu produktowi utrzymać stabilność i efektywność na najwyższym poziomie!",
                content: [
                    {
                        layout: 7,
                        title: "Co obejmuje usługa wsparcia?",
                        description: [
                            {
                                title: "Wsparcie techniczne",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Identyfikacja i usuwanie problemów technicznych.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Optymalizacja ustawień dla nieprzerwanej pracy systemów.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Monitorowanie integracji, baz danych i serwerów.",
                                    },
                                ],
                                icon: "support1",
                            },
                            {
                                title: "Wsparcie dla użytkowników",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Pomoc klientom w rozwiązywaniu ich problemów.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Konsultacje dotyczące korzystania z funkcjonalności produktu.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Udzielanie rekomendacji w celu zwiększenia efektywności korzystania z produktu.",
                                    },
                                ],
                                icon: "support2",
                            },
                            {
                                title: "Planowa konserwacja",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Regularne monitorowanie systemów, aby zapobiec awariom.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Zaplanowane aktualizacje i optymalizacje.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Testowanie nowych funkcji przed ich wdrożeniem.",
                                    },
                                ],
                                icon: "support3",
                            },
                            {
                                title: "Dostępność",
                                text: [
                                    {
                                        type: "listItem",
                                        text: "Możliwość dostosowania harmonogramu wsparcia do Twoich potrzeb.",
                                    },
                                    {
                                        type: "listItem",
                                        text: "Szybka reakcja i usuwanie pojawiających się problemów.",
                                    },
                                ],
                                icon: "support4",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Dlaczego to jest ważne?",
                        description: [
                            {
                                text: "Gwarancja nieprzerwanej pracy produktu zwiększa zaufanie i satysfakcję klientów.",
                            },
                            {
                                text: "Szybkie reagowanie na problemy minimalizuje ryzyko strat i przestojów.",
                            },
                            {
                                text: "Regularna konserwacja pomaga uniknąć poważnych problemów technicznych i oszczędza koszty.",
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        slug: "comprehensive-service",
        icon: "complex",
        ctaButton: "order",
        image: "https://drive.google.com/uc?export=view&id=1aBLtZOAvs5TGOZVeOXuKQPBCFx8kur4x",
        ua: {
            name: "комплексна послуга",
            shortDescription:
                "Комплексний та системний підхід з єдиним менеджментом проєкту (замовнику не треба шукати виконавців для окремих завдань – все робиться одним підрядником, включно з пошуком чи рекомендацією субпідрядників)",
            fullDescription: {
                title: "<purple>Комплексна послуга:</purple> комплексний підхід до створення ІТ продуктів",
                introduction:
                    "В основі кожного успішного продукту лежить бажання зробити його максимально зручним і корисним для бізнесу. Тому комплексний підхід до створення ІТ продуктів гарантує найкращий результат. \nМи пропонуємо комплексну послугу, яка базується на тісній співпраці з клієнтом для досягнення його бізнес-потреб та прискорення зростання бізнесу.",
                ctaText:
                    "Замовляйте комплексну послугу вже сьогодні і ми зекономимо ваш час та ресурси на шляху до успіху!",
                content: [
                    {
                        layout: 5,
                        title: "Що включає комплексна послуга?",
                        description: [
                            {
                                title: "Бриф",
                                text: "Після отримання заявки, бізнес-аналітик контактує з замовником протягом робочого дня і допомагає заповнити бриф на розробку продукту.",
                            },
                            {
                                title: "Збір та опис вимог",
                                text: "Описуємо вимоги до сайту. Специфікація вимог до програмного забезпечення - найважливіший етап, який потрібно провести до старту розробки сайту.",
                            },
                            {
                                title: "Дизайн",
                                text: "Дизайнер розробляє сценарій використання сайту, демонструє ескізи та структуру сайту. Також на цьому етапі можна обговорити правки та затвердити макет або прототип.",
                            },
                            {
                                title: "Розробка рішення",
                                text: "На підставі вимог пропонуємо практичні та адаптовані до специфіки вашого бізнесу рішення.",
                            },
                            {
                                title: "Підготовка документації",
                                text: "Надаємо зрозумілі й деталізовані матеріали, які полегшують роботу команди розробників та тестування готового продукту.",
                            },
                            {
                                title: "Тестування сайту",
                                text: "Після ефективного завершення етапу тестування, сайт переноситься на клієнтський домен та інтегрується з хостингом.",
                            },
                            {
                                title: "Передача сайту",
                                text: "Після проходження тестування та інтеграції всіх сервісів, сайт разом із усіма правами на нього передається у розпорядження клієнта.",
                            },
                            {
                                title: "Підтримка сайту",
                                text: "При виникненні непередбачуваних ситуацій або для розширення функціоналу уже готового сайту після його офіційного запуску клієнт може звернутися до розробників та отримати послугу підтримки та доопрацювання продукту.",
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Чому це важливо?",
                        description: [
                            {
                                title: "Ефективність",
                                text: "Створення сайту вимагає багатогранних знань та навичок,  а комплексний підхід до розробки значно спрощує його просування. Якісний та сучасний дизайн сайту приваблює нових користувачів та спонукає до цільових дій на сайті.",
                            },
                            {
                                title: "Зниження ризиків",
                                text: "Розробка сайту цілісною командою — від ідеї до реалізації, а також подальшої підтримки — мінімізує ризики, усуваючи  передачу продукту між дизайнером, розробником і тестувальником.Також при оформленні комплексної послуги ви отримуєте гарантію розробки продукту та налаштування допоміжних сервісів, таких як гугл аналітика та підтримка сервера.",
                            },
                            {
                                title: "Покращення командної роботи",
                                text: "Усі учасники команди  розуміють свої задачі та мають спільне бачення результату. Всі рівнозначно зацікавлені в створенні та запуску якісного продукту та підтримці позитивного формату взаємодії з клієнтом та між собою.",
                            },
                            {
                                title: "Гарантія відповідності потребам",
                                text: "Кінцевий продукт буде максимально адаптований до потреб вашого бізнесу та кінцевих споживачів.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Чому варто обрати нас?",
                        description: [
                            {
                                text: "Наші спеціалісти мають досвід у бізнес-аналізі, розробці сайтів та інших ІТ-продуктів. Ми гарантуємо не лише високу якість роботи, але й позитивний досвід співпраці.",
                            },
                            {
                                text: "Кожен проєкт — унікальний, тому наші рішення адаптуються саме під вас.",
                            },
                            {
                                text: "Ми підтримуємо постійний зв'язок і надаємо детальні звіти на кожному етапі.",
                            },
                            {
                                text: "Використовуємо перевірені практики, зокрема Agile та Scrum, щоб швидко реагувати на зміни та враховувати ваші мінливі бізнес-потреби.",
                            },
                            {
                                text: "Обравши нас, ви отримуєте не лише комплексну послугу в створенні сайту чи іншого ІТ продукту, а й команду, яка прагне зробити ваш бізнес сильнішим і ефективнішим.",
                            },
                            {
                                text: "Ми будуємо довгострокові відносини з клієнтами, і надаємо тривалу технічну підтримку, тому ви можете нам довіряти при тривалій співпраці.",
                            },
                        ],
                    },
                ],
            },
        },
        en: {
            name: "comprehensive service",
            shortDescription:
                "A comprehensive and systematic approach with unified project management (the customer does not need to look for contractors for individual tasks - everything is done by one contractor, including the search or recommendation of subcontractors)",
            fullDescription: {
                title: "<purple>Comprehensive service:</purple> an integrated approach to IT product development",
                introduction:
                    "The foundation of every successful product lies in the desire to make it as convenient and useful for business as possible. A comprehensive approach to IT product development ensures the best results. \nWe offer a comprehensive service based on close collaboration with the client to meet their business needs and accelerate business growth.",
                ctaText:
                    "Order a comprehensive service today, and we’ll save your time and resources on the path to success!",
                content: [
                    {
                        layout: 5,
                        title: "What the comprehensive service includes?",
                        description: [
                            {
                                title: "Brief",
                                text: "After receiving the request, a business analyst contacts the client within the working day and helps complete a brief for product development.",
                            },
                            {
                                title: "Requirements collection and description",
                                text: "We outline the requirements for the website. Defining software requirements is the most critical stage before starting the website development process.",
                            },
                            {
                                title: "Design",
                                text: "The designer develops user scenarios for the website, presents sketches, and demonstrates the website structure. At this stage, revisions can be discussed, and the layout or prototype can be approved.",
                            },
                            {
                                title: "Solution development",
                                text: "Based on the requirements, we propose practical solutions tailored to the specifics of your business.",
                            },
                            {
                                title: "Documentation preparation",
                                text: "We provide clear and detailed materials that simplify the work for the development team and the testing of the final product.",
                            },
                            {
                                title: "Website testing",
                                text: "After successfully completing the testing stage, the website is transferred to the client’s domain and integrated with hosting.",
                            },
                            {
                                title: "Website handover",
                                text: "Upon passing testing and integrating all services, the website, along with all rights to it, is transferred to the client’s ownership.",
                            },
                            {
                                title: "Website support",
                                text: "In case of unforeseen situations or for expanding the functionality of an already launched website, the client can contact the developers to receive support and product enhancements.",
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Why this matters?",
                        description: [
                            {
                                title: "Efficiency",
                                text: "Creating a website requires diverse knowledge and skills, and a comprehensive approach to development greatly simplifies its promotion. A high-quality and modern website design attracts new users and encourages target actions on the site.",
                            },
                            {
                                title: "Risk reduction",
                                text: "Developing a website with a cohesive team — from idea to implementation and subsequent support — minimizes risks, eliminating the need to hand over the product between designers, developers, and testers. Additionally, with a comprehensive service, you receive a product development guarantee and setup of auxiliary services like Google Analytics and server support.",
                            },
                            {
                                title: "Improved team collaboration",
                                text: "All team members understand their tasks and share a common vision of the result. Everyone is equally invested in creating and launching a quality product and maintaining positive interaction with the client and among themselves.",
                            },
                            {
                                title: "Guaranteed alignment with needs",
                                text: "The final product will be fully adapted to the needs of your business and end users.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Why choose us?",
                        description: [
                            {
                                text: "Our specialists have experience in business analysis, website development, and other IT products. We guarantee not only high-quality work but also a positive collaboration experience.",
                            },
                            {
                                text: "Each project is unique, so our solutions are customized specifically for you.",
                            },
                            {
                                text: "We maintain constant communication and provide detailed reports at every stage.",
                            },
                            {
                                text: "We use proven practices, including Agile and Scrum, to quickly adapt to changes and meet your evolving business needs.",
                            },
                            {
                                text: "By choosing us, you receive not only a comprehensive service in website or IT product creation but also a team committed to making your business stronger and more efficient.",
                            },
                            {
                                text: "We build long-term relationships with clients and provide ongoing technical support, so you can trust us for extended cooperation.",
                            },
                        ],
                    },
                ],
            },
        },
        pl: {
            name: "pełny zakres usług",
            shortDescription:
                "Kompleksowe i systematyczne podejście z ujednoliconym procesem zarządzania projektami (klient nie musi szukać wykonawców do poszczególnych zadań - wszystko wykonuje jeden wykonawca, łącznie z wyszukiwaniem lub polecaniem podwykonawców).",
            fullDescription: {
                title: "<purple>Pełny zakres usług:</purple> kompleksowe podejście do tworzenia produktów IT",
                introduction:
                    "U podstaw każdego udanego produktu leży pragnienie, aby uczynić go jak najbardziej wygodnym i użytecznym dla biznesu. Kompleksowe podejście do tworzenia produktów IT gwarantuje najlepsze rezultaty. \nOferujemy kompleksową usługę opartą na ścisłej współpracy z klientem, aby spełnić jego potrzeby biznesowe i przyspieszyć rozwój firmy.",
                ctaText:
                    "Zamów kompleksową usługę już dziś, a my zaoszczędzimy Twój czas i zasoby na drodze do sukcesu!",
                content: [
                    {
                        layout: 5,
                        title: "Co obejmuje pełny zakres usług?",
                        description: [
                            {
                                title: "Brief",
                                text: "Po otrzymaniu zgłoszenia analityk biznesowy kontaktuje się z klientem w ciągu dnia roboczego i pomaga wypełnić streszczenie dotyczący rozwoju produktu.",
                            },
                            {
                                title: "Zbieranie i opis wymagań",
                                text: "Opisujemy wymagania dotyczące strony internetowej. Specyfikacja wymagań dotyczących oprogramowania to kluczowy etap, który należy przeprowadzić przed rozpoczęciem procesu tworzenia strony internetowej.",
                            },
                            {
                                title: "Projektowanie",
                                text: "Projektant opracowuje scenariusze użytkowania strony internetowej, prezentuje szkice oraz strukturę strony. Na tym etapie można omówić poprawki i zatwierdzić układ lub prototyp.",
                            },
                            {
                                title: "Tworzenie rozwiązania",
                                text: "Na podstawie wymagań proponujemy praktyczne rozwiązania dostosowane do specyfiki Twojego biznesu.",
                            },
                            {
                                title: "Przygotowanie dokumentacji",
                                text: "Dostarczamy przejrzyste i szczegółowe materiały, które ułatwiają pracę zespołowi programistów oraz testowanie gotowego produktu.",
                            },
                            {
                                title: "Testowanie strony",
                                text: "Po pomyślnym zakończeniu etapu testowania strona internetowa jest przenoszona na domenę klienta i integrowana z hostingiem.",
                            },
                            {
                                title: "Przekazanie strony",
                                text: "Po przejściu testów i integracji wszystkich usług strona internetowa wraz ze wszystkimi prawami zostaje przekazana  klientowi.",
                            },
                            {
                                title: "Wsparcie strony",
                                text: "W przypadku nieprzewidzianych sytuacji lub chęci rozszerzenia funkcjonalności już uruchomionej strony internetowej, klient może skontaktować się z programistami w celu uzyskania wsparcia i rozbudowy produktu.",
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Dlaczego to ważne?",
                        description: [
                            {
                                title: "Efektywność",
                                text: "Tworzenie strony internetowej wymaga szerokiej wiedzy i umiejętności, a kompleksowe podejście do rozwoju znacznie upraszcza jej promowanie. Wysokiej jakości i nowoczesny design strony przyciąga nowych użytkowników i zachęca do podejmowania działań na stronie.",
                            },
                            {
                                title: "Zmniejszenie ryzyka",
                                text: "Tworzenie strony internetowej przez spójny zespół — od pomysłu do realizacji oraz dalszego wsparcia — minimalizuje ryzyko, eliminując konieczność przekazywania produktu między projektantem, programistą a testerem. Ponadto, korzystając z kompleksowej usługi, otrzymujesz gwarancję opracowania produktu i konfiguracji dodatkowych usług, takich jak Google Analytics i wsparcie serwera.",
                            },
                            {
                                title: "Lepsza praca zespołowa",
                                text: "Wszyscy członkowie zespołu rozumieją swoje zadania i mają wspólną wizję efektu końcowego. Każdy jest jednakowo zaangażowany w tworzenie i uruchamianie wysokiej jakości produktu oraz utrzymywanie pozytywnego kontaktu z klientem i między sobą.",
                            },
                            {
                                title: "Gwarancja spełnienia potrzeb",
                                text: "Końcowy produkt będzie w pełni dostosowany do potrzeb Twojej firmy i końcowych użytkowników.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Dlaczego warto nas wybrać?",
                        description: [
                            {
                                text: "Nasi specjaliści mają doświadczenie w analizie biznesowej, tworzeniu stron internetowych i innych produktów IT. Gwarantujemy nie tylko wysoką jakość pracy, ale także pozytywne doświadczenie współpracy.",
                            },
                            {
                                text: "Każdy projekt jest wyjątkowy, dlatego nasze rozwiązania są dostosowywane specjalnie do Ciebie.",
                            },
                            {
                                text: "Utrzymujemy stałą komunikację i dostarczamy szczegółowe raporty na każdym etapie.",
                            },
                            {
                                text: "Stosujemy sprawdzone praktyki, takie jak Agile i Scrum, aby szybko reagować na zmiany i uwzględniać zmieniające się potrzeby biznesowe.",
                            },
                            {
                                text: "Wybierając nas, otrzymujesz nie tylko kompleksową usługę tworzenia strony lub innego produktu IT, ale także zespół, który dąży do wzmocnienia i zwiększenia efektywności Twojego biznesu.",
                            },
                            {
                                text: "Budujemy długoterminowe relacje z klientami i zapewniamy stałe wsparcie techniczne, dzięki czemu możesz nam zaufać w kwestii długoterminowej współpracy.",
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        slug: "landing",
        icon: "landing",
        image: "https://drive.google.com/uc?export=view&id=1Kgb4tXEmBn1hQmD2r_h2VAwwNYThl6Xt",
        ctaButton: "order",
        ua: {
            name: "Лендінг ",
            shortDescription:
                "Лендінг – односторінковий сайт, для швидкого залучення клієнтів і досягнення однієї конкретної мети. Розробляється прототип, затверджується, створюється унікальний дизайн, що відповідає потребам і приваблює користувачів.",
            fullDescription: {
                topText: [
                    {
                        icon: "clock",
                        text: "Термін розробки: 2-6 тижнів.",
                    },
                    {
                        icon: "currency",
                        text: "Ціна: від 500$ (залежить від складності дизайну та функціональності).",
                    },
                ],
                introduction:
                    "Лендінг (або цільова сторінка) — це односторінковий сайт, який має на меті перетворити відвідувачів у клієнтів. Це ідеальний варіант для представлення одного продукту, послуги чи спеціальної пропозиції.",
                title: "<purple>Лендінг:</purple> що таке лендінг і кому він потрібен?",
                ctaText:
                    "Замовляйте лендінг вже сьогодні та перетворіть відвідувачів на своїх клієнтів!",
                content: [
                    {
                        layout: 5,
                        title: "Кому підходить лендінг?",
                        description: [
                            {
                                title: "Фрілансери та спеціалісти",
                                text: "Для самопрезентації фахівців у різних сферах: коучів, рекрутерів, юристів, менторів, консультантів, тощо. Він допоможе у просуванні свого соло-бізнесу та формуванні особистого бренду.",
                            },
                            {
                                title: "Малий та середній бізнес",
                                text: "Для швидкого тестувати нової послуги чи продукту, а також для реалізації акційних пропозицій.",
                            },
                            {
                                title: "Стартап",
                                text: "Для яскравої презентації своїх ідей, та привернення уваги інвесторів або перших клієнтів.",
                            },
                            {
                                title: "Експерти та інфлюенсери",
                                text: "Для збору лідів, запису на консультації чи продажу курсів.",
                            },
                        ],
                    },
                    {
                        layout: 6,
                        title: "Що входить в розробку лендінгу?",
                        description: [
                            {
                                title: "Аналіз",
                                text: "Аналіз вашого продукту та конкурентів. Допомагаємо зрозуміти ринкову ситуацію та побудувати ефективну стратегію.",
                            },
                            {
                                title: "Дизайн",
                                text: "Розробка дизайну, який привертає увагу й підвищує конверсію.",
                            },
                            {
                                title: "Розробка",
                                text: "Створення адаптивного лендінгу, що виглядає ідеально як на комп’ютерах, так і на смартфонах.",
                            },
                            {
                                title: "SEO",
                                text: "SEO-оптимізація базового рівня для просування в пошукових системах.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Чому ми?",
                        description: [
                            {
                                title: "Індивідуальний підхід",
                                text: "Кожен проєкт базується на детальному аналізі вашої цільової аудиторії, потреб вашого бізнесу та конкурентного середовища.",
                            },
                            {
                                title: "Сучасний дизайн і функціональність",
                                text: "Ми пропонуємо стильний та адаптивний дизайн, що враховує останні тренди й забезпечує ідеальне відображення на будь-яких пристроях.",
                            },
                            {
                                title: "Чітка структура, що конвертує",
                                text: "Наші лендінги мають логічну структуру та інтерактивні елементи, які підштовхують відвідувачів до цільової дії.",
                            },
                        ],
                    },
                ],
            },
        },
        en: {
            name: "Landing page",
            shortDescription:
                "A landing page is a single-page website designed to quickly attract customers and achieve one specific goal. It involves creating a prototype, approving it, and developing a unique design that meets the needs and attracts users.",
            fullDescription: {
                topText: [
                    {
                        icon: "clock",
                        text: "Timeframe: 2-6 weeks.",
                    },
                    {
                        icon: "currency",
                        text: "Price: from $ 500 (depends on the complexity of the design and functionality).",
                    },
                ],
                introduction:
                    "A landing page is a single-page website that aims to convert visitors into customers. It is ideal for presenting a single product, service, or special offer.",
                title: "<purple>Landing page:</purple> what is a landing page and who needs it?",
                ctaText:
                    "Order your landing page today and turn your visitors into clients!",
                content: [
                    {
                        layout: 5,
                        title: "Who can use a landing page?",
                        description: [
                            {
                                title: "Freelancers and specialists",
                                text: "For self-presentation in various fields: coaches, recruiters, lawyers, mentors, consultants, etc. It helps in promoting solo businesses and building personal brands.",
                            },
                            {
                                title: "Small and medium-sized businesses",
                                text: "For quickly testing a new product or service, as well as to implement promotional offers.",
                            },
                            {
                                title: "Startups ",
                                text: "For a vivid presentation of your ideas and attracting the attention of investors or first customers.",
                            },
                            {
                                title: "Experts and influencers",
                                text: "For collecting leads, signing up for consultations, or selling courses.",
                            },
                        ],
                    },
                    {
                        layout: 6,
                        title: "What is included in the development of a landing page?",
                        description: [
                            {
                                title: "Analysis",
                                text: "Analysis of your product and competitors. We help you understand the market situation and build an effective strategy.",
                            },
                            {
                                title: "Design",
                                text: "Development of a design that attracts attention and increases conversions.",
                            },
                            {
                                title: "Development",
                                text: "Creating a responsive landing page that looks perfect on both desktops and smartphones.",
                            },
                            {
                                title: "SEO",
                                text: "SEO optimization of the basic level for promotion in search engines.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Why choose us?",
                        description: [
                            {
                                title: "Individual approach",
                                text: "Each project is based on a detailed analysis of your target audience, business needs, and competitive environment.",
                            },
                            {
                                title: "Modern design and functionality",
                                text: "We offer a stylish and responsive design that incorporates the latest trends and ensures flawless display on any device.",
                            },
                            {
                                title: "Clear, conversion-driven structure",
                                text: "Our landing pages have a logical structure and interactive elements that guide visitors toward taking the desired action.",
                            },
                        ],
                    },
                ],
            },
        },
        pl: {
            name: "Landing Page",
            shortDescription:
                "Landing Page to jednostronicowa strona internetowa, stworzona w celu szybkiego przyciągnięcia klientów i osiągnięcia konkretnego celu. Tworzony jest prototyp, który po zatwierdzeniu zostaje przekształcony w unikalny projekt graficzny, dostosowany do potrzeb i przyciągający użytkowników.",
            fullDescription: {
                topText: [
                    {
                        icon: "clock",
                        text: "Ramy czasowe: 2-6 tygodni.",
                    },
                    {
                        icon: "currency",
                        text: "Cena: od 500 USD (w zależności od złożoności projektu i funkcjonalności).",
                    },
                ],
                introduction:
                    "Landing page (strona docelowa) to jednostronicowa strona internetowa, której celem jest przekształcenie odwiedzających w klientów. Idealnie nadaje się do prezentacji jednego produktu, usługi lub oferty specjalnej.",
                title: "<purple>Landing page:</purple> czym jest landing page i kto go potrzebuje?",
                ctaText:
                    "Zamów landing page już dziś i zamień odwiedzających w klientów!",
                content: [
                    {
                        layout: 5,
                        title: "Kto może korzystać z landing page?",
                        description: [
                            {
                                title: "Freelancerzy i profesjonaliści",
                                text: "Do autoprezentacji specjalistów z różnych dziedzin: coachów, rekruterów, prawników, mentorów, konsultantów itp. Strona pomoże w promocji indywidualnego biznesu i budowie marki osobistej.",
                            },
                            {
                                title: "Małe i średnie firmy",
                                text: "Do szybkiego testowania nowej usługi lub produktu, a także do wdrażania ofert promocyjnych.",
                            },
                            {
                                title: "Start-upy",
                                text: "Do żywej prezentacji swoich pomysłów i przyciągnięcia uwagi inwestorów lub pierwszych klientów.",
                            },
                            {
                                title: "Eksperci i influencerzy",
                                text: "Do zbierania leadów, zapisów na konsultacje czy sprzedaży kursów.",
                            },
                        ],
                    },
                    {
                        layout: 6,
                        title: "Co zawiera tworzenie landing page?",
                        description: [
                            {
                                title: "Analiza",
                                text: "Analiza produktu oraz konkurencji.  Pomagamy zrozumieć sytuację rynkową i zbudować skuteczną strategię.",
                            },
                            {
                                title: "Projektu",
                                text: "Opracowanie projektu, który przyciąga uwagę i zwiększa konwersje.",
                            },
                            {
                                title: "Rozwój",
                                text: "Stworzenie responsywnej strony docelowej, która wygląda idealnie zarówno na komputerach, jak i smartfonach.",
                            },
                            {
                                title: "SEO",
                                text: "Optymalizacja SEO na poziomie podstawowym pod kątem promocji w wyszukiwarkach.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Dlaczego my?",
                        description: [
                            {
                                title: "Indywidualne podejście",
                                text: "Każdy projekt opiera się na szczegółowej analizie grupy docelowej, potrzeb biznesowych i otoczenia konkurencyjnego.",
                            },
                            {
                                title: "Nowoczesny wygląd i funkcjonalność",
                                text: "Oferujemy stylowy i responsywny design, który uwzględnia najnowsze trendy i zapewnia doskonałe wyświetlanie na każdym urządzeniu.",
                            },
                            {
                                title: "Przejrzysta struktura, która konwertuje",
                                text: "Nasze strony docelowe mają logiczną strukturę i interaktywne elementy, które popychają odwiedzających do docelowej akcji.",
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        slug: "website",
        icon: "website",
        ctaButton: "order",
        image: "https://drive.google.com/uc?export=view&id=1KHGciTsxySPaU7Wse4wu4776LmMGaTFc",
        ua: {
            name: "Вебсайт",
            shortDescription:
                "Вебсайт – багатосторінковий ресурс, для презентації бізнесу в інтернеті. Створюється зручна структура, розробляється унікальний дизайн, та забезпечується функціонал, що відповідає вашим цілям і очікуванням клієнтів.",
            fullDescription: {
                title: "<purple>Вебсайт:</purple> віртуальна візитівка вашого бізнесу",
                introduction:
                    "Вебсайт – це потужний інструмент для залучення клієнтів, продажу товарів чи послуг, а також підвищення впізнаваності бренду. У сучасному світі вебсайт є невід’ємною частиною успішної стратегії розвитку бізнесу. Якісний і функціональний сайт допомагає встановити контакт з вашою аудиторією 24/7, незалежно від географії чи часу.",
                ctaText:
                    "Замовляйте створення вебсайту, щоб отримати рішення, яке працює на ваш успіх!",
                topText: [
                    {
                        icon: "clock",
                        text: "Термін розробки: від 2 до 12 місяців.",
                    },
                    {
                        icon: "currency",
                        text: "Ціна: від 800$ (до 10 сторінок) , від 1600$ (10+ сторінок; адмін панель).",
                    },
                ],
                content: [
                    {
                        layout: 3,
                        title: "Що включає наша послуга створення вебсайту?",
                        description: [
                            {
                                title: "Аналіз та консультація",
                                icon: "ba",
                                text: [
                                    {
                                        text: "Обговорення цілей та потреб вашого бізнесу.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Аналіз конкурентів для створення унікального рішення.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Проєктування",
                                icon: "test1",
                                text: [
                                    {
                                        text: "Розробка структури сайту та створення макетів.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Формування UX/UI дизайну для зручності користувачів.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Розробка сайту",
                                icon: "dev",
                                text: [
                                    {
                                        text: "Програмування функціоналу відповідно до ваших вимог.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Адаптація сайту під мобільні пристрої (responsive design).",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Інтеграція",
                                icon: "integration",
                                text: [
                                    {
                                        text: "Налаштування CRM-систем, платіжних сервісів та інших необхідних інструментів.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Підключення аналітики (наприклад, Google Analytics) для відстеження ефективності сайту.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Тестування",
                                icon: "test",
                                text: [
                                    {
                                        text: "Перевірка всіх функцій сайту на працездатність.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Усунення помилок і оптимізація швидкості завантаження.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Базова SEO-оптимізація для покращення позицій у пошукових системах Google.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Запуск та навчання",
                                icon: "start",
                                text: [
                                    {
                                        text: "Розгортання сайту на вашому домені та хостингу.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Проведення консультації щодо управління сайтом.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Підтримка та оновлення",
                                icon: "support",
                                text: [
                                    {
                                        text: "Технічна підтримка після запуску.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Розширення функціоналу за потреби.",
                                        type: "listItem",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Чому це важливо?",
                        description: [
                            {
                                title: "Перший контакт з клієнтами",
                                text: "У 70% випадків клієнти складають перше враження про бізнес, базуючись на вашому вебсайті.",
                            },
                            {
                                title: "Довіра до бренду",
                                text: "Професійно створений сайт викликає довіру та стимулює клієнтів до співпраці.",
                            },

                            {
                                title: "Розширення аудиторії",
                                text: "Ваш сайт доступний для клієнтів з будь-якого куточка світу, що дозволяє вам масштабувати бізнес.",
                            },
                            {
                                title: "Зростання продажів",
                                text: "Вебсайт працює як онлайн-менеджер, що сприяє збільшенню кількості угод.",
                            },
                            {
                                title: "Ефективність",
                                text: "Сайт автоматизує багато процесів, зокрема оформлення замовлень чи запис на консультацію.",
                            },
                            {
                                title: "Аналіз ефективності",
                                text: "Вбудовані інструменти аналітики допомагають відслідковувати поведінку користувачів та адаптувати бізнес-стратегію.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Чому обирають нас?",
                        description: [
                            {
                                title: "Клієнтоорієнтованість",
                                text: "Ми розуміємо, що кожен бізнес унікальний, тому створюємо рішення, які відображають вашу індивідуальність.",
                            },
                            {
                                title: "Прогресивні технології",
                                text: "Використовуємо сучасні інструменти для розробки, щоб забезпечити надійність і функціональність.",
                            },

                            {
                                title: "Досвід та експертиза",
                                text: "Ми маємо великий досвід у створенні сайтів для бізнесів різних масштабів.",
                            },
                            {
                                title: "Прозорість процесу",
                                text: "Ми підтримуємо постійний зв'язок і надаємо детальні звіти на кожному етапі.",
                            },
                            {
                                title: "Комплексний підхід",
                                text: "Від аналізу до запуску – ми забезпечуємо повний цикл розробки, щоб ви отримали готовий продукт без зайвих клопотів.",
                            },
                            {
                                title: "Довгострокове партнерство",
                                text: "Ми залишаємося з вами і після запуску сайту, допомагаючи з оновленнями та підтримкою.",
                            },
                        ],
                    },
                ],
            },
        },
        en: {
            name: "Website",
            shortDescription:
                "A website is a multi-page resource for presenting your business online. It includes creating an intuitive structure, developing a unique design, and ensuring functionality that aligns with your goals and meets your clients' expectations.",
            fullDescription: {
                title: "<purple>Website:</purple> a virtual business card for your company",
                introduction:
                    "A website is a powerful tool for attracting customers, selling products or services, and increasing brand awareness. In today’s world, a website is an essential part of a successful business development strategy. A high-quality and functional website helps you connect with your audience 24/7, regardless of geography or time.",
                ctaText:
                    "Order the development of a website to get a solution that works for your success!",
                topText: [
                    {
                        icon: "clock",
                        text: "Timeframe: from 2 to 12 months.",
                    },
                    {
                        icon: "currency",
                        text: "Price: starting at $800 (up to 10 pages), starting at $1,600 (10+ pages; admin panel).",
                    },
                ],
                content: [
                    {
                        layout: 3,
                        title: "What does our website creation service include?",
                        description: [
                            {
                                title: "Analysis and consultation",
                                icon: "ba",
                                text: [
                                    {
                                        text: "Discussion of your business goals and needs..",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Competitor analysis to create a unique solution.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Designing",
                                icon: "test1",
                                text: [
                                    {
                                        text: "Developing the site structure and creating mockups.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Forming a UX/UI design for user convenience.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Website development",
                                icon: "dev",
                                text: [
                                    {
                                        text: "Programming features according to your requirements.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Adapting the website for mobile devices (responsive design).",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Integration",
                                icon: "integration",
                                text: [
                                    {
                                        text: "Setting up CRM systems, payment services, and other necessary tools.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Connecting analytics tools (e.g., Google Analytics) to track website performance.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Testing",
                                icon: "test",
                                text: [
                                    {
                                        text: "Checking all website functions for operability.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Fixing bugs and optimizing loading speed.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Basic SEO optimization to improve positions in Google search engines.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Launch and training",
                                icon: "start",
                                text: [
                                    {
                                        text: "Deploying the website on your domain and hosting.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Guiding website management.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Support and updates",
                                icon: "support",
                                text: [
                                    {
                                        text: "Technical support after the launch.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Expanding functionality as needed.",
                                        type: "listItem",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Why is this important?",
                        description: [
                            {
                                title: "First contact with customers",
                                text: "70% of customers form their first impression of a business based on its website.",
                            },
                            {
                                title: "Trust in your brand",
                                text: "A professionally created website builds trust and encourages customers to collaborate.",
                            },

                            {
                                title: "Audience expansion",
                                text: "Your website is accessible to clients from anywhere worldwide, enabling business scalability.",
                            },
                            {
                                title: "Increased sales",
                                text: "A website acts as an online manager, boosting the number of transactions.",
                            },
                            {
                                title: "Efficiency",
                                text: "The site automates many processes, such as order placement or booking consultations.",
                            },
                            {
                                title: "Performance analysis",
                                text: "Built-in analytics tools help monitor user behavior and adapt your business strategy.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Why choose us?",
                        description: [
                            {
                                title: "Customer focus",
                                text: "Every business is unique, so we create solutions that reflect your individuality.",
                            },
                            {
                                title: "Progressive technologies",
                                text: "We use modern tools to ensure reliability and functionality.",
                            },

                            {
                                title: "Experience and expertise",
                                text: "We have extensive experience in creating websites for businesses of all sizes.",
                            },
                            {
                                title: "Process transparency",
                                text: "We maintain constant communication and provide detailed reports at every stage.",
                            },
                            {
                                title: "Comprehensive approach",
                                text: "From analysis to launch, we handle the entire development cycle, delivering a ready-to-use product without extra hassle.",
                            },
                            {
                                title: "Long-term partnership",
                                text: "We stay with you even after the website launch, assisting with updates and support.",
                            },
                        ],
                    },
                ],
            },
        },
        pl: {
            name: "Strona internetowa",
            shortDescription:
                "Strona internetowa to wielostronicowy zasób, służący do prezentacji biznesu w internecie. Stworzenie wygodnej struktury, opracowanie unikalnego projektu i zapewnienie funkcjonalności spełniającej cele i oczekiwania klientów.",
            fullDescription: {
                title: "<purple>Strona internetowa:</purple> wirtualna wizytówka Twojego biznesu",
                introduction:
                    "Strona internetowa to potężne narzędzie do pozyskiwania klientów, sprzedaży towarów lub usług oraz zwiększania rozpoznawalności marki. W dzisiejszym świecie strona internetowa jest integralną częścią skutecznej strategii rozwoju biznesu. Wysokiej jakości i funkcjonalna strona pomaga nawiązać kontakt z Twoją publicznością 24/7, niezależnie od lokalizacji czy czasu.",
                ctaText:
                    "Zamów stworzenie strony internetowej, aby otrzymać rozwiązanie, które działa na Twój sukces!",
                topText: [
                    {
                        icon: "clock",
                        text: "Ramy czasowe: od 2 do 12 miesięcy.",
                    },
                    {
                        icon: "currency",
                        text: "Cena: od 800 USD (do 10 stron), od 1600 USD (10+ stron; panel administracyjny).",
                    },
                ],
                content: [
                    {
                        layout: 3,
                        title: "Co zawiera nasza usługa tworzenia stron internetowych?",
                        description: [
                            {
                                title: "Analiza i konsultacje",
                                icon: "ba",
                                text: [
                                    {
                                        text: "Omówienie celów i potrzeb biznesowych.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Analiza konkurencji w celu stworzenia unikalnego rozwiązania.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Projektowanie",
                                icon: "test1",
                                text: [
                                    {
                                        text: "Opracowanie struktury strony i stworzenie makiet.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Tworzenie UX/UI designu dla wygody użytkowników.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Tworzenie strony internetowej",
                                icon: "dev",
                                text: [
                                    {
                                        text: "Programowanie funkcjonalności zgodnie z Twoimi wymaganiami.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Dostosowanie strony do urządzeń mobilnych (responsive design).",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Integracja",
                                icon: "integration",
                                text: [
                                    {
                                        text: "Konfiguracja systemów CRM, usług płatności i innych niezbędnych narzędzi.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Połączenie narzędzi analitycznych (np. Google Analytics) do monitorowania wydajności strony.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Testowanie",
                                icon: "test",
                                text: [
                                    {
                                        text: "Sprawdzenie wszystkich funkcji strony pod kątem operacyjności.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Usunięcie błędów i optymalizacja szybkości ładowania.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Podstawowa optymalizacja SEO w celu poprawy pozycji w wyszukiwarkach Google.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Uruchomienie i szkolenie",
                                icon: "start",
                                text: [
                                    {
                                        text: "Wdrożenie strony na Twoją domenę i hosting.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Konsultacje dotyczące zarządzania stroną internetową.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Wsparcie i aktualizacje",
                                icon: "support",
                                text: [
                                    {
                                        text: "Wsparcie techniczne po uruchomieniu.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Rozszerzanie funkcjonalności w razie potrzeby.",
                                        type: "listItem",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        layout: 8,
                        title: "Dlaczego to jest ważne?",
                        description: [
                            {
                                title: "Pierwszy kontakt z klientami",
                                text: "W 70% przypadków klienci wyrabiają sobie pierwsze wrażenie o biznesie na podstawie strony internetowej.",
                            },
                            {
                                title: "Zaufanie do marki",
                                text: "Profesjonalnie wykonana strona budzi zaufanie i zachęca klientów do współpracy.",
                            },

                            {
                                title: "Poszerzenie grupy odbiorców",
                                text: "Twoja strona jest dostępna dla klientów z każdego zakątka świata, co umożliwia skalowanie biznesu.",
                            },
                            {
                                title: "Zwiększenie sprzedaży",
                                text: "Strona działa jak menedżer online, wspierając wzrost liczby transakcji.",
                            },
                            {
                                title: "Wydajność",
                                text: "Strona internetowa automatyzuje wiele procesów, takich jak składanie zamówień lub umawianie się na konsultacje.",
                            },
                            {
                                title: "Analiza wydajności",
                                text: "Wbudowane narzędzia analityczne pomagają śledzić zachowania użytkowników i dostosowywać strategię biznesową.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Dlaczego warto wybrać nas?",
                        description: [
                            {
                                title: "Orientacja na klienta",
                                text: "Rozumiemy, że każdy biznes jest wyjątkowy, dlatego tworzymy rozwiązania odzwierciedlające Twoją indywidualność.",
                            },
                            {
                                title: "Nowoczesne technologie",
                                text: "Używamy nowoczesnych narzędzi, aby zapewnić niezawodność i funkcjonalność.",
                            },

                            {
                                title: "Doświadczenie i ekspertyza",
                                text: "Mamy bogate doświadczenie w tworzeniu stron internetowych dla firm każdej wielkości.",
                            },
                            {
                                title: "Przejrzystość procesu",
                                text: "Utrzymujemy stałą komunikację i dostarczamy szczegółowe raporty na każdym etapie.",
                            },
                            {
                                title: "Kompleksowe podejście",
                                text: "Od analizy do uruchomienia, zapewniamy pełny cykl rozwoju, dzięki czemu otrzymujesz gotowy produkt bez żadnych kłopotów.",
                            },
                            {
                                title: "Długoterminowe partnerstwo",
                                text: "Pozostajemy z Tobą także po uruchomieniu strony, pomagając w aktualizacjach i wsparciu.",
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        slug: "online-store",
        icon: "store",
        image: "https://drive.google.com/uc?export=view&id=1fSbXuv6SQ_PCm_t3gWt_6DB8xuSZypmN",
        ctaButton: "order",
        ua: {
            name: "Інтернет-магазин",
            shortDescription:
                "Інтернет-магазин – потужний інструмент для онлайн-продажів. Розробляється сайт зі зручною навігацією, адаптивним дизайном і функціями для управління товарами, кошиком і оплатою, для ефективної роботи вашого бізнесу.",
            fullDescription: {
                title: "<purple>Інтернет-магазин:</purple> перетворюємо ваші ідеї на успішні онлайн-рішення",
                introduction:
                    "Розробка інтернет-магазину – це відповідальний процес, який потребує досвіду та професійного підходу. \nНеобхідно врахувати структуру сайту, каталог товарів, варіанти оплати, доставку, управління залишками, акції, індивідуальні пропозиції, а також розробити особистий кабінет покупця та адміністративну панель для власника бізнесу.",
                topText: [
                    { icon: "clock", text: "Термін розробки: 2-12 місяців." },
                    {
                        icon: "currency",
                        text: "Ціна: від 1600$ до десятків тисяч (залежить від складності дизайну та функціональності).",
                    },
                ],
                content: [
                    {
                        layout: 5,
                        title: "Основні етапи створення інтернет-магазину",
                        description: [
                            {
                                title: "Аналіз та планування",
                                text: "На початковому етапі визначаються цілі та завдання проєкту, аналізується ринок, вивчаються конкуренти й потреби цільової аудиторії. Створюється детальний план з урахуванням бюджету та термінів.",
                            },
                            {
                                title: "Проєктування та дизайн",
                                text: "Розробляється структура сайту, створюються макети сторінок, підбираються кольори, шрифти та візуальний стиль.Основна увага приділяється зручності користувачів(UX) та естетичному вигляду сайту(UI).",
                            },
                            {
                                title: "Програмування та розробка",
                                text: "Виконується технічна реалізація: розробляється зовнішній інтерфейс(frontend), серверна частина(backend) та впроваджується система управління контентом(CMS).",
                            },
                            {
                                title: "Інтеграція із зовнішніми сервісами",
                                text: [
                                    {
                                        text: "ERP-системи: автоматизація управління запасами, цінами та іншими даними.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Платіжні системи: підключення безпечних сервісів для приймання оплат.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Служби доставки: інтеграція для розрахунку вартості доставки та відстеження замовлень.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Наповнення контентом",
                                text: "Завантажуються дані про товари: описи, фото, характеристики.Можливий як ручний, так і автоматизований підхід.",
                            },
                            {
                                title: "Тестування",
                                text: "Перед запуском проєкту проводиться ретельна перевірка функціоналу, тестування на різних пристроях і у всіх популярних браузерах.",
                            },
                            {
                                title: "Запуск сайту",
                                text: "Після тестування сайт публікується на хостингу, завершуються фінальні налаштування.",
                            },
                            {
                                title: "Підтримка та розвиток",
                                text: "Після запуску забезпечується технічна підтримка, регулярне оновлення контенту та оптимізація для поліпшення видимості сайту в пошукових системах.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Від чого залежить ціна і термін розробки?",
                        description: [
                            {
                                title: "Складність проєкту",
                                text: "Кількість сторінок, функціонал, інтеграція з сервісами, унікальний дизайн.",
                            },
                            {
                                title: "Обсяг робіт",
                                text: "Створення з нуля чи реалізація за готовим технічним завданням.",
                            },
                            {
                                title: "Терміновість",
                                text: "Запуск невеликого шаблонного інтернет-магазину на 10-15 продуктів займе від 2х місяців і вартість його буде від 1600$.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Чому обирають нас?",
                        description: [
                            {
                                text: "Ми перетворимо ваші ідеї на стильні та  ефективні цифрові рішення.",
                            },
                            {
                                text: "Ми розуміємо потреби вашого бізнесу і пропонуємо креативні ідеї, які працюють на ваш результат.",
                            },
                            {
                                text: "Ми орієнтуємось на сучасні тенденції, поєднуючи їх із вашими запитами.",
                            },
                            {
                                text: "З нами ви швидко досягнете поставлених цілей.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Замовляйте створення інтернет-магазину вже зараз, щоб отримати рішення, яке працює на ваш успіх!",
            },
        },
        en: {
            name: "Online Store",
            shortDescription:
                "An online store is a powerful tool for e-commerce. It involves developing a website with user-friendly navigation, responsive design, and features for managing products, shopping carts, and payments, ensuring your business operates effectively.",
            fullDescription: {
                title: "<purple>Online store:</purple> turning your ideas into successful online solutions",
                introduction:
                    "Developing an online store is a responsible process that requires experience and a professional approach. \nIt is necessary to consider the website structure, product catalog, payment options, delivery, inventory management, promotions, personalized offers, as well as develop a customer account and an administrative panel for the business owner.",
                topText: [
                    { icon: "clock", text: "Timeframe: 2-12 months." },
                    {
                        icon: "currency",
                        text: "Price: from $1600 up to more than $10k (depends on the complexity of the design and functionality).",
                    },
                ],
                content: [
                    {
                        layout: 5,
                        title: "Key stages of creating an online store",
                        description: [
                            {
                                title: "Analysis and planning",
                                text: "At the initial stage, the goals and objectives of the project are defined, the market is analyzed, competitors and target audience needs are studied.A detailed plan is created considering the budget and timeline.",
                            },
                            {
                                title: "Design and prototyping",
                                text: "The website structure is designed, page layouts are created, and colors, fonts, and visual styles are chosen.The main focus is on user convenience(UX) and the site's aesthetic appearance (UI).",
                            },
                            {
                                title: "Programming and development",
                                text: "The technical implementation is carried out: the frontend(user interface), backend(server- side logic), and content management system(CMS) are developed.",
                            },
                            {
                                title: "Integration with external services",
                                text: [
                                    {
                                        text: "ERP systems: automating inventory, pricing, and other data management.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Payment systems: connecting secure payment services.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Delivery services: integration for calculating delivery costs and order tracking.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Content upload",
                                text: "Data about products, including descriptions, photos, and specifications, are uploaded.This can be done manually or through automation.",
                            },
                            {
                                title: "Testing",
                                text: "Before launching the project, the functionality is thoroughly checked, and testing is done on various devices and popular browsers.",
                            },
                            {
                                title: "Website launch",
                                text: "After testing, the website is published on hosting, and final settings are completed.",
                            },
                            {
                                title: "Support and development",
                                text: "After launch, technical support, regular content updates, and optimization are provided to improve the website’s visibility in search engines.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "What determines the cost and tirm of developing?",
                        description: [
                            {
                                title: "Project complexity",
                                text: "Number of pages, functionality, integrations, unique design.",
                            },
                            {
                                title: "Scope of work",
                                text: "Creation from scratch or implementation based on a ready-made technical specification.",
                            },
                            {
                                title: "Urgency",
                                text: "Launching a small template-based online store with 10–15 products takes at least two months, starting at $1,600.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Why choose us?",
                        description: [
                            {
                                text: "We transform your ideas into stylish and effective digital solutions.",
                            },
                            {
                                text: "We understand your business needs and offer creative ideas that drive results.",
                            },
                            {
                                text: "We focus on modern trends, combining them with your specific requirements.",
                            },
                            {
                                text: "With us, you’ll quickly achieve your goals.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Order your online store now and get a solution that works for your success!",
            },
        },
        pl: {
            name: "Sklep internetowy",
            shortDescription:
                "Sklep internetowy to zaawansowane narzędzie do sprzedaży online. Tworzymy stronę z intuicyjną nawigacją, responsywnym projektem graficznym i funkcjami umożliwiającymi zarządzanie produktami, koszykiem oraz płatnościami, zapewniając efektywną działalność Twojego biznesu.",
            fullDescription: {
                title: "<purple>Sklep internetowy:</purple> zamieniamy Twoje pomysły w udane rozwiązania online",
                introduction:
                    "Tworzenie sklepu internetowego to odpowiedzialny proces, który wymaga doświadczenia i profesjonalnego podejścia. \nNależy uwzględnić strukturę strony, katalog produktów, opcje płatności, dostawę, zarządzanie stanami magazynowymi, promocje, oferty indywidualne, a także stworzyć panel klienta oraz panel administracyjny dla właściciela biznesu.",
                topText: [
                    { icon: "clock", text: "Ramy czasowe: 2-12 miesięcy." },
                    {
                        icon: "currency",
                        text: "Cena: od 1600 USD do dziesiątek tysięcy (w zależności od złożoności projektu i funkcjonalności).",
                    },
                ],
                content: [
                    {
                        layout: 5,
                        title: "Główne etapy tworzenia sklepu internetowego",
                        description: [
                            {
                                title: "Analiza i planowanie",
                                text: "Na początkowym etapie definiowane są cele i założenia projektu, analizowany jest rynek, badana konkurencja i potrzeby grupy docelowej. Tworzony jest szczegółowy plan uwzględniający budżet i terminy.",
                            },
                            {
                                title: "Projektowanie i prototypowanie",
                                text: "Opracowywana jest struktura witryny, tworzone są układy stron, wybierane są kolory, czcionki i styl wizualny.Główna uwaga skupia się na wygodzie użytkowników(UX) i estetyce strony(UI).",
                            },
                            {
                                title: "Programowanie i rozwój",
                                text: "Przeprowadzane jest wdrożenie techniczne: opracowywany jest frontend i backend oraz wdrażany jest system zarządzania treścią(CMS).",
                            },
                            {
                                title: "Integracja z usługami zewnętrznymi",
                                text: [
                                    {
                                        text: "Systemy ERP: automatyzacja zarządzania zapasami, cenami i innymi danymi.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Systemy płatności: podłączenie bezpiecznych usług płatniczych.",
                                        type: "listItem",
                                    },
                                    {
                                        text: "Usługi dostawy: integracja w celu kalkulacji kosztów dostawy i śledzenia zamówień.",
                                        type: "listItem",
                                    },
                                ],
                            },
                            {
                                title: "Wypełnianie treścią",
                                text: "Dodawane są dane o produktach: opisy, zdjęcia, specyfikacje.Można to zrobić ręcznie lub zautomatyzowane.",
                            },
                            {
                                title: "Testowanie",
                                text: "Przed uruchomieniem projektu przeprowadzamy dokładne sprawdzenie funkcjonalności, testując na różnych urządzeniach i we wszystkich popularnych przeglądarkach.",
                            },
                            {
                                title: "Uruchomienie strony",
                                text: "Po testach strona jest publikowana na hostingu i wprowadzane są ostateczne ustawienia.",
                            },
                            {
                                title: "Wsparcie i rozwój",
                                text: "Po uruchomieniu zapewniamy wsparcie techniczne, regularne aktualizacje treści i optymalizację w celu poprawy widoczności witryny w wyszukiwarkach.",
                            },
                        ],
                    },
                    {
                        layout: 2,
                        title: "Od czego zależy cena i czas tworzenia?",
                        description: [
                            {
                                title: "Złożoności projektu",
                                text: "Liczby stron, funkcjonalności, integracji z usługami i unikalnego projektu.",
                            },
                            {
                                title: "Zakresu prac",
                                text: "Tworzenie od podstaw lub realizacja według gotowej specyfikacji.",
                            },
                            {
                                title: "Pilności",
                                text: "Uruchomienie małego sklepu na 10–15 produktów na bazie szablonu zajmie co najmniej 2 miesiące i będzie kosztować od 1600 USD.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Dlaczego warto nas wybrać?",
                        description: [
                            {
                                text: "Przekształcamy Twoje pomysły w stylowe i skuteczne rozwiązania cyfrowe.",
                            },
                            {
                                text: "Rozumiemy potrzeby Twojego biznesu i oferujemy kreatywne pomysły, które przynoszą efekty.",
                            },
                            {
                                text: "Z nami szybko osiągniesz swoje cele.",
                            },
                            {
                                text: "Z nami szybko osiągniesz swoje cele.",
                            },
                        ],
                    },
                ],
                ctaText:
                    "Zamów tworzenie sklepu internetowego już teraz i uzyskaj rozwiązanie, które zadziała na Twój sukces!",
            },
        },
    },
];
