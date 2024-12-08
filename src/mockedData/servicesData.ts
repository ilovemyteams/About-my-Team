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

export interface FullDescriptionDataType {
    title: string;
    introduction: string;
    content: ServiceContentType[];
    ctaText: string;
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
    type?: "listItem";
}

export const servicesData: ServiceType[] = [
    {
        slug: "business-analysis",
        icon: "ba",
        image: "",

        ua: {
            name: "бізнес-аналіз",
            shortDescription:
                "Аналітика допомагає бізнесу будувати роботу та розвиватись на фактах, а не на здогадах чи інтуїції",
            fullDescription: null,
        },
        en: {
            name: "business analysis",
            shortDescription:
                "Analytics helps the business to build its work and to develop itself based on the facts, but not the guesses or intuition",
            fullDescription: null,
        },
        pl: {
            name: "analiza biznesowa",
            shortDescription:
                "Analityka pomaga firmom budować i rozwijać się w oparciu na faktach, a nie na domysłach lub intuicji",
            fullDescription: null,
        },
    },
    {
        slug: "design",
        ctaButton: "order",
        icon: "design",
        image: "https://drive.google.com/uc?export=view&id=1xhX7XK8jw01c00juIHX2ceylA6mbSAZt",
        ua: {
            name: "дизайн",
            shortDescription:
                "Дизайнер відмальовує прототип кожної сторінки, на якому схематично зображує розташування блоків, розміщення ілюстрацій і тексту. Тільки після затвердження прототипу із замовником ми приступаємо до створення дизайну сайту.",
            fullDescription: {
                title: "<purple>Дизайн</purple> сайтів та цифрових продуктів",
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
                                text: "обсяг сторінок, або необхідність створення унікальних елементів.",
                            },
                            {
                                title: "Обсяг робіт",
                                text: "редизайн існуючого сайту чи розробка з нуля.",
                            },
                            {
                                title: "Терміновість",
                                text: "стандартні проєкти займають від 2 до 4 тижнів, але все потребує обговорення та уточнення.",
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
                title: "Website and Digital Product <purple>Design</purple> ",
                introduction:
                    "Our team creates unique, modern, and effective designs for your websites and digital products, helping your business stand out among competitors. Our solutions combine aesthetics, functionality, and experience.",
                content: [
                    {
                        title: "What does the design service include?",
                        layout: 5,
                        description: [
                            {
                                title: "Personalized Approach",
                                text: "We tailor every project to your style, needs, and audience specifics, ensuring the design reflects your uniqueness.",
                            },
                            {
                                title: "UX/UI Design__",
                                text: "We provide intuitive navigation and an attractive look that increases user engagement.",
                            },
                            {
                                title: "Responsiveness",
                                text: "Your design will look perfect on all devices, including smartphones, tablets, laptops, and monitors.",
                            },
                            {
                                title: "SEO Optimization",
                                text: "We develop a design that will help promote your website in search engines.",
                            },
                        ],
                    },
                    {
                        layout: 6,
                        title: "How do we work?",
                        description: [
                            {
                                title: "Idea Analysis",
                                text: "We analyze your goals, target audience, and desired outcome to deliver the best solution.",
                            },
                            {
                                title: "Prototyping",
                                text: "We create draft mockups to approve the structure and functionality.",
                            },
                            {
                                title: "Design Implementation",
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
                        title: "What Determines the price and timeline?",
                        description: [
                            {
                                title: "Project Complexity:",
                                text: "the number of pages or the need to create unique elements.",
                            },
                            {
                                title: "Scope of work",
                                text: "redesigning an existing website or developing one from scratch.",
                            },
                            {
                                title: "Urgency",
                                text: "standard projects take 2 to 4 weeks, but everything needs to be discussed and clarified.",
                            },
                        ],
                    },
                    {
                        layout: 4,
                        title: "Why Choose Us?",
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
                title: "<purple>Projektowanie</purple> stron internetowych i produktów cyfrowych",
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
                                text: "liczba stron lub potrzeba stworzenia unikalnych elementów.",
                            },
                            {
                                title: "Zakres prac",
                                text: "redesign istniejącej strony internetowej lub stworzenie jej od podstaw.",
                            },
                            {
                                title: "Pilność",
                                text: "standardowe projekty zajmują od 2 do 4 tygodni, ale wszystko wymaga omówienia i doprecyzowania.",
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
                                title: "Технічна підтримка:",
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
                                title: "Підтримка користувачів:",
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
                                title: "Планове обслуговування:",
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
                                title: "Доступність:",
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
                                title: "Technical Support:",
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
                                title: "User Support:",
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
                                title: "Planned Maintenance:",
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
                                title: "Availability:",
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
                                title: "Wsparcie techniczne:",
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
                                title: "Wsparcie dla użytkowników:",
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
                                title: "Planowa konserwacja:",
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
                                title: "Dostępność:",
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
        image: "",
        ua: {
            name: "комплексна послуга",
            shortDescription:
                "Комплексний та системний підхід з єдиним менеджментом проєкту (замовнику не треба шукати виконавців для окремих завдань – все робиться одним підрядником, включно з пошуком чи рекомендацією субпідрядників)",
            fullDescription: null,
        },
        en: {
            name: "comprehensive service",
            shortDescription:
                "A comprehensive and systematic approach with unified project management (the customer does not need to look for contractors for individual tasks - everything is done by one contractor, including the search or recommendation of subcontractors)",
            fullDescription: null,
        },
        pl: {
            name: "pełny zakres usług",
            shortDescription:
                "Kompleksowe i systematyczne podejście z ujednoliconym procesem zarządzania projektami (klient nie musi szukać wykonawców do poszczególnych zadań - wszystko wykonuje jeden wykonawca, łącznie z wyszukiwaniem lub polecaniem podwykonawców).",
            fullDescription: null,
        },
    },
    {
        slug: "landing",
        icon: "landing",
        image: "",
        ua: {
            name: "Лендінг ",
            shortDescription:
                "Лендінг – односторінковий сайт, для швидкого залучення клієнтів і досягнення однієї конкретної мети. Розробляється прототип, затверджується, створюється унікальний дизайн, що відповідає потребам і приваблює користувачів.",
            fullDescription: null,
        },
        en: {
            name: "Landing page",
            shortDescription:
                "A landing page is a single-page website designed to quickly attract customers and achieve one specific goal. It involves creating a prototype, approving it, and developing a unique design that meets the needs and attracts users.",
            fullDescription: null,
        },
        pl: {
            name: "Landing Page",
            shortDescription:
                "Landing Page to jednostronicowa strona internetowa, stworzona w celu szybkiego przyciągnięcia klientów i osiągnięcia konkretnego celu. Tworzony jest prototyp, który po zatwierdzeniu zostaje przekształcony w unikalny projekt graficzny, dostosowany do potrzeb i przyciągający użytkowników.",
            fullDescription: null,
        },
    },
    {
        slug: "website",
        icon: "website",

        image: "",
        ua: {
            name: "Вебсайт",
            shortDescription:
                "Вебсайт – багатосторінковий ресурс, для презентації бізнесу в інтернеті. Створюється зручна структура, розробляється унікальний дизайн, та забезпечується функціонал, що відповідає вашим цілям і очікуванням клієнтів.",
            fullDescription: null,
        },
        en: {
            name: "Website",
            shortDescription:
                "A website is a multi-page resource for presenting your business online. It includes creating an intuitive structure, developing a unique design, and ensuring functionality that aligns with your goals and meets your clients' expectations.",
            fullDescription: null,
        },
        pl: {
            name: "Strona internetowa",
            shortDescription:
                "Strona internetowa to wielostronicowy zasób, służący do prezentacji biznesu w internecie. Stworzenie wygodnej struktury, opracowanie unikalnego projektu i zapewnienie funkcjonalności spełniającej cele i oczekiwania klientów.",
            fullDescription: null,
        },
    },
    {
        slug: "online-store",
        icon: "store",
        image: "",
        ua: {
            name: "Інтернет-магазин",
            shortDescription:
                " Інтернет-магазин – потужний інструмент для онлайн-продажів. Розробляється сайт зі зручною навігацією, адаптивним дизайном і функціями для управління товарами, кошиком і оплатою, для ефективної роботи вашого бізнесу.",
            fullDescription: null,
        },
        en: {
            name: "Online Store",
            shortDescription:
                "An online store is a powerful tool for e-commerce. It involves developing a website with user-friendly navigation, responsive design, and features for managing products, shopping carts, and payments, ensuring your business operates effectively.",
            fullDescription: null,
        },
        pl: {
            name: "Sklep internetowy",
            shortDescription:
                "Sklep internetowy to zaawansowane narzędzie do sprzedaży online. Tworzymy stronę z intuicyjną nawigacją, responsywnym projektem graficznym i funkcjami umożliwiającymi zarządzanie produktami, koszykiem oraz płatnościami, zapewniając efektywną działalność Twojego biznesu.",
            fullDescription: null,
        },
    },
];
