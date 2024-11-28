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
        icon: "design",
        image: "",
        ua: {
            name: "дизайн",
            shortDescription:
                "Дизайнер відмальовує прототип кожної сторінки, на якому схематично зображує розташування блоків, розміщення ілюстрацій і тексту. Тільки після затвердження прототипу із замовником ми приступаємо до створення дизайну сайту.",
            fullDescription: null,
        },
        en: {
            name: "design",
            shortDescription:
                "Designer creates prototype of each and every page where he shows positioning of the blocks, illustrations and text. Only after prototype approval by the customer, we start creating the website design.",
            fullDescription: null,
        },
        pl: {
            name: "projekt",
            shortDescription:
                "Projektant rysuje prototyp każdej strony, który schematycznie przedstawia rozmieszczenie bloków, ilustracji i tekstu. Dopiero po zatwierdzeniu prototypu przez klienta rozpoczynamy tworzenie projektu strony internetowej.",
            fullDescription: null,
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
                                text: "We evaluate how logically the website structure is built and whether users can easily find the information they need. Your website should be intuitive for every visitor.",
                            },
                            {
                                title: "Compatibility testing",
                                text: "This type of testing includes cross-browser and cross-platform verification. The test is performed on different operating systems (Windows, Mac, Linux, Android, iOS) and browsers to ensure that the application works stably and is compatible with different platforms.",
                            },
                            {
                                title: "Testing on multiple devices",
                                text: "We analyze how the website looks and works on smartphones, tablets, laptops, and large monitors. Responsiveness and adaptability are the key to success!",
                            },
                            {
                                title: "Loading speed testing",
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
                                text: "Oceniamy, na ile logiczna jest struktura strony oraz czy użytkownicy łatwo znajdą potrzebne informacje. Twoja strona powinna być intuicyjna i przyjazna dla każdego odwiedzającego.",
                            },
                            {
                                title: "Testowanie kompatybilności",
                                text: "Ten rodzaj testowania obejmuje testy międzyprzeglądarkowe i międzyplatformowe. Test przeprowadzany jest na różnych systemach operacyjnych (Windows, Mac, Linux, Android, iOS) i przeglądarkach, aby upewnić się, że aplikacja działa stabilnie i jest kompatybilna z różnymi platformami.",
                            },
                            {
                                title: "Testowanie na różnych urządzeniach",
                                text: "Analizujemy wygląd i działanie strony internetowej na smartfonach, tabletach, laptopach i dużych monitorach. Responsywność i zdolność adaptacji to klucz do sukcesu!",
                            },
                            {
                                title: "Szybkość ładowania",
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
        image: "",
        ua: {
            name: "підтримка",
            shortDescription:
                "Представник команди навчає співробітників клієнта роботі із сайтом, щоб надалі клієнт міг самостійно оновлювати контент на своєму сайті.",
            fullDescription: null,
        },
        en: {
            name: "support",
            shortDescription:
                "Team representative teaches the customer's employees to work with the web-site, to enable the customer to update the website's content in future",
            fullDescription: null,
        },
        pl: {
            name: "wsparcie",
            shortDescription:
                "Przedstawiciel zespołu szkoli pracowników klienta w zakresie pracy ze stroną internetową, tak aby klient mógł samodzielnie aktualizować treści na swojej stronie internetowej.",
            fullDescription: null,
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
