export type QADataType = {
    slug: string;
    image: string;
    likes: number;
    answerOrderImage?: string;
    removeOrderBtn?: boolean;
};

export type ListTextItemType = {
    type?: "none" | "listItem";
    list?: "sublist";
    title?: string;
    text: string[];
};

export type LongAnswerListTypeItem = {
    title?: string;
    type?: "list";
    decorate?: number;
    text: string[] | ListTextItemType[];
};

export type LongAnswerListType = {
    layout: number;
    title?: string;
    data: LongAnswerListTypeItem[];
};

export type QAItemLocalizationTextType = {
    questionText: string;
    shortAnswerText: string[];
    imageAltText: string;
    fullAnswerTopText?: string[];
    fullAnswerBottomText?: string[];
    fullAnswerContent?: LongAnswerListType[];
};

export type QAItemType = {
    data: QADataType;
    ua: QAItemLocalizationTextType;
    pl: QAItemLocalizationTextType;
    en: QAItemLocalizationTextType;
};

export const questionsData: QAItemType[] = [
    {
        data: {
            slug: "i-need-a-website-where-should-i-start",
            image: "https://drive.google.com/uc?export=view&id=15mebCQZv4FAgQYinrxpVGDljlHsSWflz",
            likes: 0,

            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=1PXF8LyPTsL-6m5TJ0QcpFbUUhhgqH3Ij",
        },
        ua: {
            questionText: "Мені потрібен сайт. \nЗ чого мені почати?",
            shortAnswerText: [
                "Почніть з чесної відповіді на такі питання “Навіщо мені сайт? Чого я очікую від сайту? Що я буду на ньому показувати? Кому я хочу це показати? І що повинні зробити ті, хто відвідають мій сайт?”. Відповіді на ці питання дають розуміння, чи потрібен вам взагалі сайт і яким він повинен бути.",
                " А потім заповніть форму “Замовити” і надішліть нам ваші чесні відповіді, і ми все зробимо з турботою про ваші цілі та потреби вашого бізнесу.",
            ],
            imageAltText: "Мені потрібен сайт. З чого мені почати?",
            fullAnswerTopText: [
                "Якщо вам потрібен сайт, перший крок – це чітко визначити ваші цілі та очікування від сайту. Розуміння мети допоможе вам визначити, який тип сайту вам потрібен. Розробка власного сайту може здатися складним процесом, але ми готові допомогти вам крок за кроком. Бо ми команда, яка дбає про ваші потреби. Нижче розписані основні етапи.",
            ],

            fullAnswerContent: [
                {
                    layout: 1,
                    data: [
                        {
                            title: "Обговорення \nцілей",
                            text: [
                                "Почнемо з обговорення ваших цілей та потреб. Що ви хочете досягти за допомогою сайту? Яка ваша цільова аудиторія? Хто буде користуватись вашим сайтом і що ці люди будуть на ньому шукати? Які у вас вимоги і очікування?",
                            ],
                        },
                        {
                            title: "Визначення типу \nсайту",
                            text: [
                                "Важливо визначити, чи ви хочете лендінг-сторінку або повноцінний сайт для вашого бізнесу. Про різницю між лендінгом і сайтом можете детальніше почитати *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/faq/what-to-choose-a-landing-page-or-a-website`*тут*/link*.",
                            ],
                        },
                        {
                            title: "Підбір \nкоманди",
                            text: [
                                "У нас представлені багато спеціалістів різного напрямку та рівня. В залежності від вашої потреби Менеджер підкаже вам оптимальний склад команди або ви можете обрати собі людей в команду самостійно.",
                            ],
                        },
                        {
                            title: "Вибір дизайну та \nфункціоналу",
                            text: [
                                "Це залежить від ваших вподобань та специфіки вашого бізнесу.",
                                "В першу чергу ми попросимо у вас посилання на сайти, які вам подобаються  (це називається референси), щоб зрозуміти ваш смак та очікування.",
                                "Які кольори, шрифти та стиль найкраще відповідатимуть вашому бренду? Чи потрібна вам можливість онлайн-платежів, інтеграція з соціальними мережами? Як часто ви хочете змінювати контент на своєму сайті? Скільки відвідувачів плануєте залучати на сайт за день/місяць? і т.д. - відповіді на всі ці запитання мають велике значення!",
                            ],
                        },
                        {
                            title: "Розробка \nконтенту",
                            text: [
                                "Збирання та підготовка контенту для сайту, включаючи текст, зображення, відео та інші матеріали - ми попросимо вас надати нам частину контенту одразу, щоб красиво і грамотно розмістити його на сайті з урахуванням ваших цілей та правил дизайну і розробки.",
                                "Якщо ви не маєте власного контенту (текстів, фото, відео і т.д.), то ми можемо залучити контент мейкера за окрему плату або працювати з вашими партнерами чи співробітниками і допомогти створити цей контент для вашого сайту.",
                            ],
                        },
                        {
                            title: "Розробка та \nтестування",
                            text: [
                                "Розробка та налаштування сайту, включаючи його кодування, інтеграцію функціоналу та тестування на різних пристроях та браузерах.",
                                "Для початку ми з вами визначимо для яких пристроїв нам потрібно буде розробляти сайт (мобільні телефони, планшети, лептопи, проектори або великі екрани для презентації на виставках/конференціях), чи для всіх цих перерахованих?",
                                "Для яких девайсів будемо робити основну адаптацію - iOS чи Android?",
                                "В яких браузерів треба передбачити тестування (Google Chrome, Firefox, Edge, Safari) чи всіх разом узятих?",
                            ],
                        },
                        {
                            title: "Запуск та \nпідтримка",
                            text: [
                                "Після успішного тестування ми готові запустити ваш сайт та надати підтримку для подальшого вдосконалення та розвитку.",
                                "Ми також надаємо консультації та допомогу у виборі доменного імені та хостингу сайту на провайдері, підборі потужностей сервера або хмари для розміщення сайту.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Ми готові взяти на себе всі труднощі розробки та допомогти вам створити ідеальний сайт для вашого бізнесу і отримати задоволення від співпраці в процесі його розробки і запуску.",
            ],
        },
        pl: {
            questionText: "Potrzebuję strony internetowej. \nOd czego zacząć?",
            shortAnswerText: [
                "Zacznij od szczerej odpowiedzi na następujące pytania: Dlaczego potrzebuję strony internetowej? Czego oczekuję od strony internetowej? Co ja chcę na niej demonstrować? Komu chcę to demonstrować? I co powinni zrobić ci, którzy odwiedzą moją stronę? Odpowiedzi na te pytania pomogą ci zrozumieć, czy w ogóle potrzebujesz strony internetowej i jak powinna ona wyglądać.",
                "Następnie wypełnij formularz — Zamówić i prześlij nam swoje szczere odpowiedzi, a my zrobimy wszystko z troską o Twoje cele i potrzeby biznesowe.",
            ],
            imageAltText: "Potrzebuję strony internetowej. Od czego zacząć?",
            fullAnswerTopText: [
                "Jeśli potrzebujesz strony internetowej, pierwszym krokiem jest wyraźne określenie swoich celów i oczekiwań wobec strony. Zrozumienie celu pomoże określić, jaki rodzaj strony jest Ci potrzebny. Tworzenie własnej strony internetowej może wydawać się skomplikowanym, ale jesteśmy gotowi pomóc Ci krok po kroku. Ponieważ jesteśmy zespołem, który dba o Twoje potrzeby. Poniżej znajdują się główne kroki:",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    data: [
                        {
                            title: "Omówienie \ncelów",
                            text: [
                                "Zaczniemy od omówienia Twoich celów i potrzeb. Co chcesz osiągnąć za pomocą strony? Kim jest Twoja grupa docelowa? Kto będzie korzystał z Twojej strony i czego te osoby będą na niej szukać? Jakie są Twoje wymagania i oczekiwania?",
                            ],
                        },
                        {
                            title: "Określenie rodzaju \nstrony",
                            text: [
                                "Ważne jest, aby określić, czy chcesz mieć stronę docelową, czy pełnoprawną stronę internetową dla swojej firmy. Możesz przeczytać więcej o różnicy między stroną docelową a stroną internetową *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/faq/what-to-choose-a-landing-page-or-a-website`*tutaj*/link*.",
                            ],
                        },
                        {
                            title: "Dobór \nzespołu",
                            text: [
                                "Mamy wielu specjalistów o różnych kierunkach i poziomach. W zależności od potrzeb menedżer zaproponuje optymalny skład zespołu lub możesz wybrać własnych członków zespołu.",
                            ],
                        },
                        {
                            title: "Wybór projektu i \nfunkcjonalności",
                            text: [
                                "Zależy to od Twoich preferencji i specyfiki Twojego biznesu",
                                "Przede wszystkim poprosimy Cię o linki do stron internetowych, które Ci się podobają (nazywamy je referencjami), aby zrozumieć Twój gust i oczekiwania.",
                                "Jakie kolory, czcionki i styl najlepiej odpowiadają Twojej marce? Czy potrzebujesz opcji płatności online i integracji z mediami społecznościowymi? Jak często chcesz zmieniać treści na swojej stronie? Ilu odwiedzających planujesz przyciągać na stronę dziennie/miesięcznie? itd. - odpowiedzi na wszystkie te pytania mają ogromne znaczenie!",
                            ],
                        },
                        {
                            title: "Tworzenie \ntreści",
                            text: [
                                "Zbieranie i przygotowywanie treści na stronę, w tym tekstu, obrazów, filmów i innych materiałów — poprosimy Cię o dostarczenie nam części treści od razu, aby umieścić je na stronie w estetyczny i profesjonalny sposób, biorąc pod uwagę Twoje cele oraz zasady projektowania i rozwoju",
                                "Jeśli nie masz własnych treści (tekstów, zdjęć, filmów itp.), możemy zaangażować twórcę treści za dodatkową opłatą lub współpracować z Twoimi partnerami, lub pracownikami, aby pomóc w tworzeniu tych treści dla Twojej strony.",
                            ],
                        },
                        {
                            title: "Rozwój i \ntestowanie",
                            text: [
                                "Rozwój i konfiguracja strony internetowej, w tym kodowanie, integracja funkcjonalności i testowanie na różnych urządzeniach i przeglądarkach.",
                                "Na początku ustalimy, dla jakich urządzeń potrzebujemy rozwijać stronę (smartfony, tablety, laptopy, projektory lub duże ekrany do prezentacji na wystawach/konferencjach), czy dla wszystkich wymienionych?",
                                "Dla jakich urządzeń dokonamy głównej adaptacji —  iOS czy Android?",
                                "W jakich przeglądarkach należy przewidzieć testowanie (Google Chrome, Firefox, Edge, Safari), czy wszystkie?",
                            ],
                        },
                        {
                            title: "Uruchomienie i \nwsparcie",
                            text: [
                                "Po udanych testach jesteśmy gotowi do uruchomienia strony i zapewnienia wsparcia w zakresie dalszych ulepszeń i rozwoju.",
                                "Zapewniamy również konsultacje i pomoc w wyborze nazwy domeny i dostawcy hostingu na stronie, wybierając pojemność serwera lub chmury do hostingu strony.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Jesteśmy gotowi zająć się wszystkimi trudnościami związanymi z rozwojem i pomóc Ci stworzyć idealną stronę internetową dla Twojego biznesu i cieszyć się współpracą w procesie jej rozwoju i uruchamiania.",
            ],
        },
        en: {
            questionText: "I need a website. \nWhere should I start?",
            shortAnswerText: [
                "Start by answering the following questions honestly: “Why do I need a website? What do I expect from the website? What am I going to show on it? Who do I want to show it to? And what should those who visit my site do?” Answers to these questions will help you understand whether you need a website at all and what it should look like.",
                "And then fill out the Order form and send us your honest answers, and we will do everything with care for your goals and the needs of your business.",
            ],
            imageAltText: "I need a website. Where should I start?",
            fullAnswerTopText: [
                "If you need a website, the first step is to clearly define your goals and expectations for the website. Understanding your goals will help you determine what type of website you need. Developing your own website may seem complex , but we are here to help you step by step, because we are a team that cares about your needs. Below are the main steps:",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    data: [
                        {
                            title: "Goal \ndiscussion",
                            text: [
                                "We start by discussing your goals and needs. What do you want to achieve with your website? Who is your target audience? Who will use your website,  and what will they be looking for on it? What are your requirements and expectations?",
                            ],
                        },
                        {
                            title: "Defining the type \nof website",
                            text: [
                                "It is important to decide whether you need a landing page or a full-fledged website for your business. You can read more about the difference between a landing page and a website *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/faq/what-to-choose-a-landing-page-or-a-website`*here*/link*.",
                            ],
                        },
                        {
                            title: "Team \nselection",
                            text: [
                                "We have a wide range of specialists across different fields and levels of expertise. Depending on your needs, the manager will recommend the best team configuration, or you can choose your team members on your own.",
                            ],
                        },
                        {
                            title: "Design and functionality \nselection",
                            text: [
                                "It depends on your preferences and the specifics of your business.",
                                "First, we will ask you for links to websites you like (these are called references) to understand your taste and expectations.",
                                "Which colors, fonts, and style best match your brand? Do you need online payment options, social media integration? How often do you plan to update the content on your website? How many visitors do you plan to attract to your website per day/month? Answers to all these questions are of great importance!",
                            ],
                        },
                        {
                            title: "Content \ndevelopment",
                            text: [
                                "Collecting and preparing content for the website, including text, images, videos and other materials — we will ask you to provide some of the content upfront so we can place it on the site beautifully and effectively, considering your goals and design/development principles.",
                                "If you don't have your content (texts, photos, videos, etc.), we can engage a content maker for a fee or work with your partners or employees to help create this content for your website.",
                            ],
                        },
                        {
                            title: "Development and \ntesting",
                            text: [
                                "Development and customization of the website, including coding, integration of functionality and testing on different devices and browsers.",
                                "First, we will determine which devices the website needs to be developed for (mobile phones, tablets, laptops, projectors, large screens for presentations at exhibitions/conferences, or all of the above?).",
                                "Which devices will we prioritize for optimization—iOS or Android?",
                                "Which browsers should we ensure compatibility with (Google Chrome, Firefox, Edge, Safari) or all of them?",
                            ],
                        },
                        {
                            title: "Launch and \nsupport",
                            text: [
                                "After successful testing, we will be ready to launch your website and provide ongoing support for further improvement and growth.",
                                "We also offer consultation and assistance in choosing a domain name, website hosting provider, and selecting the appropriate server or cloud resources for hosting the site.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "We are ready to handle all the complexities of development and help you create the perfect website for your business, while ensuring an enjoyable collaboration throughout the process.",
            ],
        },
    },
    {
        data: {
            slug: "what-to-choose-a-landing-page-or-a-website",
            image: "https://drive.google.com/uc?export=view&id=1o9hzaeKZBawBuDxNSK4SUXpgoG8YiaGN",
            likes: 0,

            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=13THxu-gcpA6q0JDh7Gic_zmWCv2Jr-Fu",
        },
        ua: {
            questionText: "Що обрати - лендінг чи повноцінний сайт?",
            shortAnswerText: [
                "Це залежить від того яку задачу ви намагаєтесь вирішити.",
                "Якщо потрібно презентувати якусь одну послугу або товар, якщо результат потрібен швидко, а бюджет на розробку невеликий - то краще обрати лендінг.",
                "Якщо ви маєте широкий спектр товарів або послуг, або бажаєте презентувати компанію та надати велику кількість інформації для потенційних клієнтів - то краще обрати повноцінний сайт.",
            ],
            imageAltText: "Що обрати - лендінг чи повноцінний сайт?",
            fullAnswerTopText: [
                "Лендінг та повноцінний багатосторінковий сайт мають різні цілі та функціонал. Вибір між ними залежить від вашої мети, потреб бізнесу та ресурсів, які ви готові інвестувати в створення та підтримку.",
                "Нижче детальніший розгляд кожного варіанту, щоб допомогти вам прийняти правильне рішення.",
            ],
            fullAnswerContent: [
                {
                    layout: 2,
                    data: [
                        {
                            title: "Лендінг",
                            text: [
                                {
                                    title: "Ключові особливості:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Односторінковий сайт;",
                                        "Один промоційний або інформаційний екран;",
                                        "Зосереджений на рекламній кампанії, презентації одного продукту або послуги;",
                                        "Має просту структуру та навігацію.",
                                    ],
                                },
                                {
                                    title: "Ідеально підходить для:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Швидкого запуску продукту або послуги;",
                                        "Рекламних кампаній;",
                                        "Збирання лідів;",
                                        "Продажу конкретного товару або послуги.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: " Сайт-візитка",
                            text: [
                                {
                                    title: "Ключові особливості:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Складається з декількох сторінок, таких як головна, про нас, послуги, контакти тощо;",
                                        "Більш розгалужена структура та розширені можливості;",
                                        "Дозволяє розказати про компанію, співробітників, товари та послуги, зібрати зворотній зв’язок від користувачів та спонукати їх до дій на сайті - подзвонити, замовити товар/послугу, замовити консультацію тощо.",
                                    ],
                                },
                                {
                                    title: "Ідеально підходить для:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Компаній, що пропонують  товари та послуги;",
                                        "Бізнесів, які хочуть представити детальну інформацію про свою діяльність;",
                                        "Компаній, які прагнуть побудувати довгострокову онлайн присутність;",
                                        "Компаній, які хочуть налагодити партнерські відносини або залучити додаткове фінансування.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Повноцінний багатосторінковий сайт",
                            text: [
                                {
                                    title: "Ключові особливості:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Має всі ті самі атрибути як і сайт-візитка;",
                                        "Дозволяє представити повний спектр продуктів або послуг, а також додаткові матеріали та ресурси;",
                                        "Дозволяє розмістити на сайті більше інформації на більшій кількості різноманітних за типом сторінок та передати всі можливі види контенту.",
                                    ],
                                },
                                {
                                    title: "Ідеально підходить для:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Побудови бренду компанії, залучення нових клієнтів і партнерів, допомагає підвищити конверсію відвідувачів у клієнтів, допомагає заміряти ефективність рекламних кампаній та має ще багато інших переваг.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Все залежить від ваших потреб та мети.",
                "Замовте консультацію через форму “Замовити”, і ми допоможемо вам обрати оптимальний варіант для вашого бізнесу.",
            ],
        },
        pl: {
            questionText: "Co wybrać - landing page czy stronę internetową?",
            shortAnswerText: [
                "To zależy od tego, jakie zadanie próbujesz rozwiązać.",
                "W przypadku, gdy potrzebujesz zaprezentować jakąś jedną usługę lub towar, gdy potrzebujesz szybkiego rezultatu, a budżet na rozwój jest niewielki, to lepiej wybrać landing.",
                "W przypadku, gdy masz szeroki asortyment towarów lub usług, lub pragniesz zaprezentować swoją firmę i nadać dużo informacji potencjalnym klientom, lepiej wybrać pełnoprawną stronę internetową.",
            ],
            imageAltText: "Co wybrać - landing page czy stronę internetową?",
            fullAnswerTopText: [
                "Strona docelowa i pełnoprawna, wielostronicowa strona internetowa mają różne cele i funkcjonalność. Wybór między nimi zależy od celów, potrzeb biznesowych i zasobów, które jesteś gotów zainwestować w stworzenie i utrzymanie strony.",
                "Poniżej szczegółowa analiza każdego z wariantów, aby pomóc Ci podjąć właściwą decyzję.",
            ],
            fullAnswerContent: [
                {
                    layout: 2,
                    data: [
                        {
                            title: "Landing page (strona docelowa)",
                            text: [
                                {
                                    title: "Kluczowe cechy:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Strona jednostronicowa;",
                                        "Jeden ekran promocyjny lub informacyjny;",
                                        "Skupia się na kampanii reklamowej, prezentacji jednego produktu lub usługi;",
                                        "Ma prostą strukturę i nawigację.",
                                    ],
                                },
                                {
                                    title: "Idealna do:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Szybkiego wprowadzenia produktu lub usługi na rynek;",
                                        "Kampanii reklamowych;",
                                        "Zbierania leadów;",
                                        "Sprzedaży konkretnego produktu lub usługi.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Strona wizytówka",
                            text: [
                                {
                                    title: "Kluczowe cechy:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Składa się z kilku stron, takich jak strona główna, o nas, usługi, kontakty itd;",
                                        "Bardziej rozbudowana struktura i rozszerzone możliwości;",
                                        "Pozwala opowiedzieć o firmie, pracownikach, produktach i usługach, zebrać opinie od użytkowników i zachęcić ich do podjęcia działań na stronie — zadzwonić, zamówić produkt/usługę, zamówić konsultację itp.",
                                    ],
                                },
                                {
                                    title: "Idealna do:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Firm oferujących towary i usługi;",
                                        "Biznesów, które chcą dostarczać szczegółowych informacji na temat swojej działalności;",
                                        "Firm, które chcą zbudować długoterminową obecność w Internecie;",
                                        "Firm chcących nawiązać współpracę lub pozyskać dodatkowe finansowanie.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Pełnoprawna wielostronicowa strona internetowa",
                            text: [
                                {
                                    title: "Kluczowe cechy:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Posiada wszystkie te same atrybuty, co strona wizytówka;",
                                        "Umożliwia zaprezentowanie pełnej gamy produktów lub usług, a także dodatkowych materiałów i zasobów;",
                                        "Umożliwia umieszczenie na stronie większej ilości informacji na różnych typach stron oraz przekazanie wszystkich możliwych rodzajów treści.",
                                    ],
                                },
                                {
                                    title: "Idealna do:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Budowania marki firmy, przyciąga nowych klientów i partnerów, pomaga zwiększyć konwersję odwiedzających na klientów, pomaga mierzyć skuteczność kampanii reklamowych oraz oferuje wiele innych korzyści.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Wszystko zależy od Twoich potrzeb i celów. Zamów konsultację za pośrednictwem formularza „Zamów”, a my pomożemy Ci wybrać najlepszą opcję dla Twojego biznesu.",
            ],
        },
        en: {
            questionText: "What to choose - a landing page or a website?",
            shortAnswerText: [
                "It depends on the task you are trying to solve.",
                "If you need to present a single service or product, if you need the result quickly, and the development budget is small, it is better to choose a landing page.",
                "If you have a wide range of goods or services, or want to present your company and provide a lot of information for potential customers, it is better to choose a website.",
            ],
            imageAltText: "What to choose - a landing page or a website?",
            fullAnswerTopText: [
                "A landing page and a full-fledged multi-page website have different goals and functionality. The choice between them depends on your goal, business needs, and the resources you are willing to invest in creating and maintaining them.",
                "Below is a detailed overview of each option to help you make the right decision.",
            ],
            fullAnswerContent: [
                {
                    layout: 2,
                    data: [
                        {
                            title: "Landing page",
                            text: [
                                {
                                    title: "Key features:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Single-page website;",
                                        "One promotional or informational screen;",
                                        "Focused on a marketing campaign, presenting a single product or service;",
                                        "Simple structure and navigation.",
                                    ],
                                },
                                {
                                    title: "Ideal for:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Quick launch of a product or service;",
                                        "Marketing campaigns;",
                                        "Lead generation;",
                                        "Selling a specific product or service.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Business card site",
                            text: [
                                {
                                    title: "Key features:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Consists of several pages, such as Home, About Us, Services, Contact, etc.;",
                                        "More detailed structure with expanded capabilities;",
                                        "Allows you to tell about the company, employees, products and services, collect feedback from users and encourage them to take actions like calling, ordering a product/service, or requesting a consultation, etc.",
                                    ],
                                },
                                {
                                    title: "Ideal for:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Companies offering products and services;",
                                        "Businesses that want to provide detailed information about their activities;",
                                        "Companies that want to build a long-term online presence;",
                                        "Companies looking to establish partnerships or raise additional funding.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Full Multi-Page Website",
                            text: [
                                {
                                    title: "Key features:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Includes all the features of a business card website;",
                                        "Allows you to present a full range of products or services, as well as additional materials and resources;",
                                        "Allows you to place more information on the site on a larger number of different types of pages and convey all possible types of content;",
                                    ],
                                },
                                {
                                    title: "Ideal for:",
                                    type: "listItem",
                                    list: "sublist",
                                    text: [
                                        "Building the company's brand, attracting new clients and partners, increasing conversion rates from visitors to customers, measuring the effectiveness of marketing campaigns, and offering many other advantages.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "It all depends on your needs and goals. Request a consultation through the “Order” form, and we will help you choose the best option for your business.",
            ],
        },
    },
    {
        data: {
            slug: "what-are-the-terms-of-the-development-of-the-fully-functional-website",
            image: "https://drive.google.com/uc?export=view&id=1jnZ9vPmhZchmQY6eeJklz_8bvQM2a9b4",
            likes: 0,

            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=1v7Mje1IyYdmA0wBwa-b3lV2SHk4YLKyZ",
        },
        ua: {
            questionText: "Які терміни розробки готового продукту?",
            shortAnswerText: [
                "Залежить від складності та складу команди. Розробка лендінгу із стандартизованим функціоналом та простим дизайном може зайняти від 2 до 6 тижнів. Розробка сайту на 10 сторінок із формами реєстрації, авторизації, замовленням товарів та оплатою може зайняти від 4 до 8 місяців, в залежності від дизайну та наповнення.",
            ],
            imageAltText: "Які терміни розробки готового продукту?",
            fullAnswerTopText: [
                "Зазвичай розробка стандартизованого сайту-візитки  може зайняти від кількох тижнів до кількох місяців. Однак терміни розробки готового продукту можуть змінюватися в залежності від різних факторів, таких як обсяг проєкту, складність функціоналу, наявність готових ресурсів, специфіки вашого бізнесу,  чіткості формулювання вимог, кількості змін в процесі розробки та інші.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    data: [
                        {
                            title: "Підготовчий \nетап:",
                            type: "list",
                            text: [
                                "Збір первинних вимог до продукту від замовника;",
                                "Обговорення вимог та деталей проєкту, узгодження специфікацій;",
                                "Формулюванні ідеї, розробка концепції та вибір стилю;",
                                "Визначення структури та функціональності сайту.",
                            ],
                        },
                        {
                            title: "Розробка \nта тестування:",
                            type: "list",
                            text: [
                                "Написання та затвердження вимог;",
                                "Підготовка тестової документації;",
                                "Розробка архітектури проєкту;",
                                "Підготовка і затвердження дизайну;",
                                "Кодування та розробка функціоналу сайту;",
                                "Інтеграція сторонніх сервісів (за потреби) та підключення Google аналітики;",
                                "Тестування на відповідність вимогам, виявлення та виправлення помилок;",
                                "Підготовка контенту та його інтеграція на сайт.",
                            ],
                        },
                        {
                            title: "Завершальні роботи \nта запуск:",
                            type: "list",
                            text: [
                                "End-to-End тестування та розміщення продукту на сервері;",
                                "Підготовка до запуску, налаштування хостингу, сертифікатів;",
                                "Запуск сайту та  передача доступів для налаштувань.",
                            ],
                        },
                        {
                            title: "Підтримка \nта розвиток:",
                            type: "list",
                            text: [
                                "Надання підтримки після запуску;",
                                "Подальший розвиток сайту, додавання нового функціоналу та контенту.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Ми рекомендуємо обговорити з нашою командою терміни розробки для вашого конкретного проєкту, оскільки ми готові працювати з вами, щоб забезпечити вчасне та якісне виконання робіт.",
            ],
        },
        pl: {
            questionText: "Ile trwa stworzenie strony internetowej?",
            shortAnswerText: [
                "Zależy to od złożoności i składu zespołu. Opracowanie strony landing page ze standardową funkcjonalnością i prostym projektem może zająć od 2 do 6 tygodni. Opracowanie 10-stronicowej strony internetowej z formularzami rejestracji, autoryzacji, zamówień i płatności może zająć od 4 do 8 miesięcy, w zależności od projektu i zawartości.",
            ],
            imageAltText: "Ile trwa stworzenie strony internetowej?",
            fullAnswerTopText: [
                "Zazwyczaj opracowanie standardowej strony wizytówki może zająć od kilku tygodni do kilku miesięcy. Jednak czas realizacji gotowego produktu może się zmieniać w zależności od różnych czynników, takich jak zakres projektu, złożoność funkcjonalności, dostępność gotowych zasobów, specyfika działalności, jasność wymagań, liczba zmian w trakcie realizacji oraz inne czynniki.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,

                    data: [
                        {
                            title: "Etap \nprzygotowawczy:",
                            type: "list",
                            text: [
                                "Zebranie od klienta wstępnych wymagań dotyczących produktu;",
                                "Omówienie wymagań i szczegółów projektu, uzgodnienie specyfikacji;",
                                "Sformułowanie pomysłu, opracowanie koncepcji i wybór stylu;",
                                "Określenie struktury i funkcjonalności strony internetowej.",
                            ],
                        },
                        {
                            title: "Rozwój \ni testowanie:",
                            type: "list",
                            text: [
                                "Pisanie i zatwierdzanie wymagań;",
                                "Przygotowanie dokumentacji testowej;",
                                "Opracowanie architektury projektu;",
                                "Przygotowanie i zatwierdzenie projektu;",
                                "Kodowanie i rozwój funkcjonalności strony internetowej;",
                                "Integracja zewnętrznych usług (w razie potrzeby) oraz podłączenie Google Analytics;",
                                "Testowanie zgodności z wymaganiami, identyfikowanie i usuwanie błędów;",
                                "Przygotowanie treści i ich integracja na stronie.",
                            ],
                        },
                        {
                            title: "Prace końcowe \ni uruchomienie:",
                            type: "list",
                            text: [
                                "Testowanie End-to-End oraz umieszczenie produktu na serwerze;",
                                "Przygotowanie do uruchomienia, konfiguracja hostingu, certyfikaty;",
                                "Uruchomienie strony i przekazanie dostępów do ustawień.",
                            ],
                        },
                        {
                            title: "Wsparcie \ni rozwój:",
                            type: "list",
                            text: [
                                "Zapewnienie wsparcia po uruchomieniu;",
                                "Dalszy rozwój strony, dodawanie nowych funkcji i treści.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Zalecamy omówienie z naszym zespołem terminów realizacji dla konkretnego projektu, ponieważ jesteśmy gotowi do współpracy, aby zapewnić terminowe i wysokiej jakości wykonanie prac.",
            ],
        },
        en: {
            questionText:
                "What are the terms of the development of the fully functional website?",
            shortAnswerText: [
                "It depends on the complexity and composition of the team. Developing a landing page with standardized functionality and a simple design can take from 2 to 6 weeks. Developing a 10-page website with registration forms, authorization, product ordering, and payment can take from 4 to 8 months, depending on the design and content.",
            ],
            imageAltText:
                "What are the terms of the development of the fully functional website?",
            fullAnswerTopText: [
                "Usually, the development of a standardized business card website can take from several weeks to several months. However, the timeframe for developing a finished product can vary depending on various factors, such as the scope of the project, the complexity of the functionality, the availability of resources, the specifics of your business, the clarity of the requirements, the number of changes during the development process, and others.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    data: [
                        {
                            title: "Preparation \nstage:",
                            type: "list",
                            text: [
                                "Collecting primary product requirements from the client;",
                                "Discussing project details and aligning specifications;",
                                "Formulating the idea, developing the concept, and choosing the style;",
                                "Defining the structure and functionality of the website.",
                            ],
                        },
                        {
                            title: "Development \nand testing:",
                            type: "list",
                            text: [
                                "Writing and approving requirements;",
                                "Preparing test documentation;",
                                "Developing the project architecture;",
                                "Preparing and approving the design;",
                                "Coding and developing the functionality of the website;",
                                "Integration of third-party services (if needed) and connecting Google Analytics;",
                                "Testing compliance with requirements, identifying and fixing bugs;",
                                "Preparing and integrating content into the website.",
                            ],
                        },
                        {
                            title: "Final steps \nand launch:",
                            type: "list",
                            text: [
                                "End-to-End testing and placing the product on the server;",
                                "Preparing for launch, setting up hosting, certificates;",
                                "Launching the website and transferring accesses for customization.",
                            ],
                        },
                        {
                            title: "Support \nand development:",
                            type: "list",
                            text: [
                                "Providing post-launch support;",
                                "Further development of the website, adding new functionality and content.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "We recommend discussing the development timeframe for your specific project with our team, as we are ready to work with you to ensure timely and high-quality work.",
            ],
        },
    },
    {
        data: {
            slug: "how-much-does-development-cost",
            image: "https://drive.google.com/uc?export=view&id=1Uf5y1CrKIcVFOZXf5wC8LPTxAHEpF5Ec",
            likes: 0,
            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=1NeubYhCDgx-f3NmH8AsDGZHi48yHD0J-",
        },
        ua: {
            questionText: "Скільки коштує розробка?",
            shortAnswerText: [
                "Залежно від об’єму та складності продукту орієнтовна ціна лендінгу однією мовою без вибору світлої/темної теми від 500 доларів. Ціна сайту-візитки однією мовою без зміни теми до 5 сторінок орієнтовно від 800 доларів. Ціна розробки інтернет-магазину на 10-15 продуктів та оплатою через одну платіжну систему  на сайті від 1600 доларів.",
            ],
            imageAltText: "Скільки коштує розробка?",
            fullAnswerTopText: [
                "Розробка сайту — це комплексний процес, вартість якого залежить від низки факторів: обсягу робіт, функціональних можливостей, дизайну та технічних рішень, які необхідно реалізувати. Різні типи сайтів мають різні вимоги до розробки, і це прямо впливає на кінцеву вартість. Нижче подані орієнтовні ціни:",
            ],
            fullAnswerContent: [
                {
                    layout: 2,
                    data: [
                        {
                            title: "Лендінг",
                            text: [
                                {
                                    title: "Односторінковий сайт",
                                    text: [
                                        "Такий сайт підходить для представлення одного продукту чи послуги та часто включає базові секції — заголовок, інформацію про продукт, переваги, відгуки клієнтів, форму зворотного зв’язку чи кнопку для дії (CTA). Ціна на розробку починається від 500 доларів, залежно від складності дизайну та інтеграцій.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Сайт-візитка",
                            text: [
                                {
                                    title: "До  5 сторінок",
                                    text: [
                                        'Цей формат підходить для представлення вашого бізнесу чи компанії. Сайт-візитка може включати сторінки "Про нас", "Послуги", "Контакти", "Портфоліо" тощо. Орієнтовна вартість стартує від 800 доларів. Додаткові функції, такі як інтерактивні елементи чи форма заявок, можуть вплинути на загальну ціну.',
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Інтернет-магазин",
                            text: [
                                {
                                    title: "На - 10-15 продуктів з можливістю здійснення покупок онлайн",
                                    text: [
                                        "Це складніший проєкт, який включає розробку каталогу товарів, сторінки для кожного продукту, кошика для покупок, інтеграцію з платіжними системами. Вартість стартує від 1600 доларів. Фінальна ціна може зростати залежно від кількості продуктів, потреб у фільтрах, функціональних можливостях обліку товарів та інтеграціях з логістичними чи маркетинговими системами.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 3,
                    title: "Крім базової структури сайту, є кілька важливих факторів, що можуть вплинути на загальну вартість",
                    data: [
                        {
                            title: "Дизайн",
                            text: [
                                "Унікальний і кастомний дизайн потребує більше часу і зусиль у порівнянні з використанням готових шаблонів, а також завжди значно здорожчує вартість розробки сайту.",
                            ],
                        },
                        {
                            title: "Функціональність",
                            text: [
                                "Чим більше складних функцій (форми зворотного зв’язку, калькулятори, інтерактивні елементи, інтеграції з зовнішніми сервісами), тим довшою і дорожчою буде розробка.",
                            ],
                        },
                        {
                            title: "SEO-оптимізація",
                            text: [
                                "Якщо ви плануєте просування сайту в пошукових системах, важливо заздалегідь налаштувати SEO-оптимізацію та підключити аналітику сайту, що також впливає на загальну вартість проєкту.",
                            ],
                        },
                        {
                            title: "Мобільна адаптація",
                            text: [
                                "Сайт має коректно працювати на всіх типах пристроїв — комп’ютерах, планшетах, смартфонах. Це може вимагати додаткових зусиль для забезпечення гарного користувацького досвіду на різних екранах. Якщо ви очікуєте, щоб ваш сайт красиво і логічно відображався на комп’ютерах, планшетах, телефонах — помножте базову ціну на 3. Бо адаптація під багато екранів вимагає розробки дизайну окремо під кожен екран, розробку кожної версії та тестування на кожному екрані окремо та додатково переходи з одного екрану на інший.",
                            ],
                        },
                        {
                            title: "Багатомовність",
                            text: [
                                "Якщо ваш бізнес працює більше ніж в одній країні рекомендуємо зосередитись на англомовній версії як основній. Або одразу передбачати кілька мов і які саме це будуть мови. Кожна мова має свої особливості написання і часто макет в англомовній версії виглядає ідеально, а при перекладі текстів на інші мови слова не поміщаються на кнопках або в блоках і доводиться переробляти макети заново. Крім того, багатомовність передбачає ускладнення в керуванні контентом на сайті, а також потребує більше часу на переклад та тестування самих текстів (перевірку на SEO-оптимізацію, можливість перефразування, при збереженні бізнес-суті). А також багатомовність значно ускладнює валідацію форм зворотного зв’язку, та заповнення даних з клавіатури користувачами сайту (відгуки, наприклад або коментарі).",
                            ],
                        },
                        {
                            title: "Кольорові теми сайту",
                            text: [
                                "Розробка світлої та темної теми сайту здорожчує сайт майже вдвічі. Тому рекомендуємо одразу визначитись чи хочете ви мати світлу і темну теми, чи працюємо виключно з однією.",
                            ],
                        },
                        {
                            title: "Інтеграція з системами управління",
                            text: [
                                "Якщо ваш сайт потребує інтеграцій з CRM, системами обліку товарів чи іншими зовнішніми сервісами, це також враховується в оцінці додатково і залежить від складності інтеграції, а також від вартості самої системи, яку потрібно інтегрувати.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Якщо ви бажаєте отримати більш точну оцінку вартості вашого проєкту, найкраще рішення — зв’язатися з нашим Менеджером, який  допоможе вам з’ясувати всі деталі: які функції будуть реалізовані, який дизайн вас цікавить, і які терміни виконання. Після цього ми зможемо підготувати для вас комерційну пропозицію з приблизною вартістю розробки та планом робіт.",
                "Також ми пропонуємо варіант індивідуальної співпраці з конкретним спеціалістом де вартість розробки/підтримки буде розрахована на основі годинної ставки. Тому перш ніж вибирати розробника, рекомендуємо порівняти кілька пропозицій та вибрати ту, яка найбільше відповідає вашим потребам і бюджету.",
            ],
        },
        pl: {
            questionText:
                "Ile kosztuje stworzenie strony internetowej lub sklepu internetowego?",
            shortAnswerText: [
                "Cena zależy od zakresu i złożoności projektu. Orientacyjny budżet na stronę typu landing page w jednym języku, bez wyboru jasnego/ciemnego motywu, zaczyna się od 500 USD. Koszt strony wizytówki w jednym języku, do 5 stron, bez zmiany motywu, wynosi około 800 USD. Koszt stworzenia sklepu internetowego dla 10-15 produktów i jedną metodą płatności na stronie zaczyna się od 1600 USD.",
            ],
            imageAltText:
                "Ile kosztuje stworzenie strony internetowej lub sklepu internetowego?",
            fullAnswerTopText: [
                "Tworzenie strony internetowej to złożony proces, którego koszt zależy od wielu czynników: zakresu prac, funkcjonalności, projektu graficznego i rozwiązań technicznych. Różne rodzaje stron mają odmienne wymagania, co bezpośrednio wpływa na końcową cenę. Oto przybliżone ceny:",
            ],
            fullAnswerContent: [
                {
                    layout: 2,
                    data: [
                        {
                            title: "Landing page",
                            text: [
                                {
                                    title: "Strona jednostronicowa",
                                    text: [
                                        "Idealna do prezentacji jednego produktu lub usługi, często zawiera podstawowe sekcje, takie jak nagłówek, informacje o produkcie, opinie klientów, formularz kontaktowy lub przycisk wezwania do działania (CTA). Koszt zaczyna się od 500 USD, zależnie od złożoności projektu graficznego i integracji.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Strona wizytówka",
                            text: [
                                {
                                    title: "Do 5 stron",
                                    text: [
                                        'Ten format sprawdzi się przy prezentacji firmy lub działalności. Może zawierać strony takie jak "O nas", "Usługi", "Kontakt", "Portfolio". Cena zaczyna się od 800 USD. Dodatkowe funkcje, takie jak interaktywne elementy czy formularze, mogą wpłynąć na końcową cenę.',
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Sklep internetowy",
                            text: [
                                {
                                    title: "Dla 10-15 produktów i opcją zakupu online",
                                    text: [
                                        "Bardziej złożony projekt, który wymaga opracowania katalogu produktów, stron dla każdego z nich, koszyka na zakupy i integracji z systemami płatności. Koszt zaczyna się od 1600 USD. Ostateczna cena może wzrosnąć w zależności od liczby produktów, potrzebnych filtrów, dodatkowych funkcjonalności i integracji z systemami logistycznymi lub marketingowymi.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 3,
                    title: "Oprócz podstawowej struktury strony, kilka dodatkowych czynników może wpłynąć na całkowity koszt",
                    data: [
                        {
                            title: "Projekt graficzny",
                            text: [
                                "Unikalny, niestandardowy projekt wymaga więcej czasu i pracy w porównaniu do gotowych szablonów, co znacznie podnosi koszt tworzenia strony internetowej.",
                            ],
                        },
                        {
                            title: "Funkcjonalność",
                            text: [
                                "Im więcej skomplikowanych funkcji (formularze kontaktowe, kalkulatory, elementy interaktywne, integracje z zewnętrznymi usługami), tym dłuższy i droższy proces tworzenia.",
                            ],
                        },
                        {
                            title: "Optymalizacja SEO",
                            text: [
                                "Jeśli planujesz promować stronę w wyszukiwarkach, ważne jest, aby od razu zadbać o SEO i podpięcie analityki strony, co również wpływa na cenę projektu.",
                            ],
                        },
                        {
                            title: "Dostosowanie do urządzeń mobilnych",
                            text: [
                                "Strona powinna działać poprawnie na wszystkich urządzeniach — komputerach, tabletach i smartfonach. Może to wymagać dodatkowego wysiłku, aby zapewnić spójne doświadczenie użytkownika na różnych ekranach. Jeśli chcesz, aby strona była odpowiednio wyświetlana na różnych urządzeniach, koszt może wzrosnąć nawet trzykrotnie, ponieważ każdy ekran wymaga osobnego projektu, wdrożenia i testowania.",
                            ],
                        },
                    ],
                },
            ],
        },
        en: {
            questionText: "How much does development cost?",
            shortAnswerText: [
                "Depending on the scope and complexity of the product, the estimated budget for a single-language landing page without a light/dark theme option starts at $500. The cost of a single-language business card website with up to 5 pages and no theme changes is approximately from $800. The cost of developing an online store with 10-15 products and payment integration through one payment system starts at $1,600.",
            ],
            imageAltText: "How much does development cost?",
            fullAnswerTopText: [
                "Website development is a complex process, and its cost depends on several factors, including the scope of work, functionality, design, and technical solutions that need to be implemented. Different types of websites have varying development requirements, which directly affect the final cost. Here are some approximate rates:",
            ],
            fullAnswerContent: [
                {
                    layout: 2,
                    data: [
                        {
                            title: "Landing page",
                            text: [
                                {
                                    title: "one-page website",
                                    text: [
                                        "This type of website is suitable for presenting a single product or service and often includes basic sections such as a headline, product information, benefits, customer reviews, a contact form, or a call-to-action (CTA) button. The price for development starts at $500, depending on the complexity of the design and integrations.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Business card website",
                            text: [
                                {
                                    title: "up to 5 pages",
                                    text: [
                                        'This format is suitable for introducing your business or company. A business card website can include pages like "About Us, " "Services, " "Contact, " "Portfolio, " etc. The approximate cost starts at $800. Additional features, such as interactive elements or a request form, may affect the total price.',
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Online store",
                            text: [
                                {
                                    title: "with 10–15 products",
                                    text: [
                                        "This is a more complex project that includes the development of a product catalog, individual product pages, a shopping cart, and integration with payment systems. The cost starts at $1,600. The final price may increase depending on the number of products, the need for filters, inventory management functionality, and integrations with logistics or marketing systems.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 3,
                    title: "Beyond the basic website structure, several important factors can influence the total cost",
                    data: [
                        {
                            title: "Design",
                            text: [
                                "Unique and custom design requires more time and effort compared to using ready-made templates, and it significantly increases the cost of website development.",
                            ],
                        },
                        {
                            title: "Functionality",
                            text: [
                                "The more complex the functions (such as feedback forms, calculators, interactive elements, integrations with external services), the longer and more expensive the development will be.",
                            ],
                        },
                        {
                            title: "SEO optimization",
                            text: [
                                " If you are planning to promote the website through search engines, it is important to set up SEO optimization and connect website analytics in advance, which also impacts the overall project cost.",
                            ],
                        },
                        {
                            title: "Mobile adaptation",
                            text: [
                                "The website must function correctly on all types of devices — computers, tablets, and smartphones. This may require additional effort to ensure a smooth user experience across various screen sizes. If you want your website to look good and work logically on computers, tablets, and phones, multiply the base price by 3. Because multiple screen adaptation requires separate design development for each screen, the development of each version, testing on each device, and seamless transitions between different screens.",
                            ],
                        },
                        {
                            title: "Multilingual support",
                            text: [
                                " If your business operates in more than one country, we recommend focusing on the English version as the primary one. Alternatively, you can plan for multiple languages from the start and decide which languages you need. Each language has its own writing characteristics, and often a layout that looks perfect in English may need adjustments when translated to other languages — words might not fit within buttons or blocks, requiring the redesign of layouts. Additionally, multilingual support complicates content management on the site and requires more time for text translation and testing (checking for SEO optimization and the ability to rephrase while maintaining business context). Multilingual functionality also makes feedback forms validation more complex, and filling in data from the keyboard by website users (such as reviews or comments).",
                            ],
                        },
                        {
                            title: "Color themes",
                            text: [
                                "Developing both light and dark themes for a website nearly doubles the cost. Therefore, we recommend deciding upfront whether you want both light and dark themes or prefer to work with just one.",
                            ],
                        },
                        {
                            title: "Integration with management systems",
                            text: [
                                " If your website requires integrations with CRM systems, product accounting systems, or other external services, this will also be considered in the additional evaluation and depends on the complexity of the integration, as well as the cost of the system that needs to be integrated.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "If you want to get a more accurate estimate of the cost of your project, the best solution is to contact our Manager, who will help you clarify all the details: what features will be implemented, what design you are interested in, and what are the deadlines. After that, we will be able to prepare a commercial offer for you with the approximate cost of development and a work plan.",
                "We also offer the option of individual collaboration with a specific specialist, where the cost of development/support will be calculated based on an hourly rate. Therefore, before choosing a developer, we recommend comparing several offers and choosing the one that best suits your needs and budget.",
            ],
        },
    },
    {
        data: {
            slug: "can-i-choose-which-team-will-work-on-my-order",
            image: "https://drive.google.com/thumbnail?id=1Id6dTkkWbiw95v8hEiaRd4wu2luqIsOc",
            likes: 0,
            removeOrderBtn: true,
            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=15X1tdwWHNC7DXp-82g_h-kPY2GCfkSva",
        },
        ua: {
            questionText: "Чи можу я самостійно \nпідібрати команду?",
            shortAnswerText: [
                "Так, ви можете вибрати окремих спеціалістів і сформувати команду самостійно. В такому випадку наполегливо рекомендуємо спочатку звернутись за консультацією до Менеджера. Якщо ви потребуєте окремого спеціаліста на погодинні роботи з вашим уже реалізованим продуктом — зв’яжіться зі спеціалістом через його телеграм або лінкедін напряму і повідомте як ви його знайшли та чому обрали саме його/її.",
            ],
            imageAltText:
                "Чи можу я самостійно обрати, яка команда працюватиме над моїм замовленням?",
            fullAnswerTopText: [
                "Ми розуміємо, що кожен проєкт має свої унікальні вимоги, і тому надаємо гнучкість у виборі спеціалістів, щоб ви могли сформувати команду, яка найкраще відповідатиме вашим цілям та задачам.",
                "Як це працює описано нижче.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    title: "Як це працює?",
                    data: [
                        {
                            title: "Вибір окремих \nспеціалістів",
                            text: [
                                "На нашому сайті ви можете переглянути профілі розробників, дизайнерів, тестувальників, аналітиків, менеджерів та інших спеціалістів, які готові працювати над вашим проєктом. Кожен профіль містить інформацію про досвід, навички, попередні проєкти, погодинну ставку, а також контактну інформацію, що дозволяє вам оцінити відповідність фахівця вашим потребам.",
                            ],
                        },
                        {
                            title: "Формування \nкоманди",
                            text: [
                                "Ви можете обрати окремих фахівців або відразу сформувати повноцінну команду, залежно від вимог вашого проєкту. У цьому випадку ми наполегливо рекомендуємо звернутись за консультацією до нашого *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/order`*Менеджера*/link*, який/яка допоможе вам правильно оцінити необхідні ресурси та функціональні ролі для успішної реалізації проєкту. Це особливо важливо, якщо ви не маєте досвіду в управлінні командою розробників або маєте складний проєкт, який вимагає кількох фахівців із різними компетенціями.",
                            ],
                        },
                        {
                            title: "Підтримка \nвід Менеджера",
                            text: [
                                "Попри те, що ви можете самостійно підібрати команду, наша компанія завжди готова надати підтримку на кожному етапі. Менеджер допоможе вам правильно організувати процес розробки, налаштувати комунікацію та забезпечити ефективну взаємодію між членами команди. Якщо вам потрібно більше 3-х спеціалістів (дизайнер, розробник, тестувальник) то взявши в команду менеджера ви зекономите час та гроші, бо Менеджер налагодить процес так, що вам не доведеться долучатися до роботи самостійно — ваша задача буде озвучувати/описувати свої вимоги та затверджувати макети та запропоновані технічні рішення, а не займатись управлінням людьми та їх взаємодією. Також Менеджер буде вам регулярно звітувати про етапи роботи, проводити демо та консультації, а також забезпечить наявність всієї необхідної документації та розрахунків.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Якщо ваш проєкт вже запущений і вам потрібен окремий спеціаліст для виконання погодинних завдань або внесення змін до наявного продукту, ви можете напряму *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}#team`*написати спеціалісту*/link*. Це зручний варіант для тих, хто потребує швидкого вирішення конкретної проблеми або оперативної допомоги з невеликим обсягом робіт. У таких випадках немає потреби формувати команду — достатньо обрати одного фахівця, який вирішить ваше питання.",
            ],
        },
        pl: {
            questionText: "Czy mogę samodzielnie \nwybrać zespół?",
            shortAnswerText: [
                "Tak, możesz samodzielnie wybrać poszczególnych specjalistów i utworzyć zespół. W takim przypadku zalecamy skontaktowanie się z Menedżerem w celu konsultacji. Jeśli potrzebujesz specjalisty do pracy godzinowej nad już wdrożonym produktem, możesz skontaktować się bezpośrednio z wybranym specjalistą przez Telegram lub LinkedIn, informując go, jak go znalazłeś i dlaczego go wybrałeś.",
            ],
            imageAltText:
                "Czy mogę wybrać zespół, który będzie pracował nad moją stroną internetową?",
            fullAnswerTopText: [
                "Rozumiemy, że każdy projekt ma swoje unikalne wymagania, dlatego dajemy możliwość elastycznego wyboru specjalistów, abyś mógł/mogła stworzyć zespół najlepiej dopasowany do Twoich celów i zadań.",
                "Jak to działa, opisano poniżej.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    title: "Jak to działa?",
                    data: [
                        {
                            title: "Wybór poszczególnych \nspecjalistów",
                            text: [
                                "Na naszej stronie możesz przeglądać profile deweloperów, projektantów, testerów, analityków, menedżerów i innych specjalistów, którzy są gotowi pracować nad twoim projektem. Każdy profil zawiera informacje o doświadczeniu, umiejętnościach, poprzednich projektach, stawkach godzinowych oraz dane kontaktowe, co pozwala ocenić, czy dany specjalista spełnia Twoje potrzeby.",
                            ],
                        },
                        {
                            title: "Tworzenie \nzespołu",
                            text: [
                                "Możesz wybrać indywidualnych specjalistów lub od razu utworzyć pełny zespół, w zależności od wymagań twojego projektu. W takim przypadku zdecydowanie zalecamy konsultację z naszym *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/order`*Menedżerem*/link*, który pomoże właściwie ocenić zasoby i role funkcjonalne potrzebne do realizacji projektu. Jest to szczególnie ważne, jeśli nie masz doświadczenia w zarządzaniu zespołem deweloperów lub jeśli projekt jest skomplikowany i wymaga wielu specjalistów o różnych kompetencjach.",
                            ],
                        },
                        {
                            title: "Wsparcie \nMenedżera",
                            text: [
                                "Chociaż możesz samodzielnie wybrać zespół, nasza firma zawsze służy wsparciem na każdym etapie. Menedżer pomoże Ci zorganizować proces deweloperski, ustawić komunikację i zapewnić efektywną współpracę w zespole. Jeśli potrzebujesz więcej niż trzech specjalistów (np. projektanta, dewelopera i testera), zaangażowanie Menedżera pozwoli zaoszczędzić czas i pieniądze. Menedżer ustawi proces w taki sposób, abyś nie musiał sam angażować się w pracę — Twoim zadaniem będzie jedynie przedstawianie wymagań, zatwierdzanie projektów i proponowanych rozwiązań technicznych, a nie zarządzanie ludźmi i ich interakcjami. Menedżer będzie regularnie raportować postępy, przeprowadzać prezentacje i konsultacje, a także dbać o niezbędną dokumentację i kalkulacje.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Jeśli Twój projekt jest już uruchomiony i potrzebujesz specjalisty do pracy godzinowej lub do wprowadzenia zmian w istniejącym produkcie, możesz *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}#team`*skontaktować się bezpośrednio ze specjalistą*/link* przez Telegram lub LinkedIn. Jest to wygodne rozwiązanie dla osób, które potrzebują szybkiego rozwiązania konkretnego problemu lub pomocy  przy niewielkim nakładzie pracy. W takich przypadkach nie ma potrzeby tworzenia zespołu — wystarczy wybrać jednego specjalistę, który rozwiąże dany problem.",
            ],
        },
        en: {
            questionText: "Can I choose which team \nwill work on my order?",
            shortAnswerText: [
                "Yes, you can choose individual specialists and assemble a team on your own. In this case, we strongly recommend first reaching out to a Manager for consultation. If you need a specific specialist for hourly work on your existing product, contact the specialist directly through their Telegram or LinkedIn and let them know how you found them and why you chose them.",
            ],
            imageAltText: "Can I choose which team will work on my order?",
            fullAnswerTopText: [
                "We understand that each project has its unique requirements, which is why we provide flexibility in choosing specialists so you can form a team that best meets your goals and objectives.",
                "How it works is described below.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    title: "How does the change process work?",
                    data: [
                        {
                            title: "Choosing individual \nspecialists",
                            text: [
                                "On our website, you can view the profiles of developers, designers, testers, analysts, managers, and other specialists who are ready to work on your project. Each profile contains information about experience, skills, previous projects, hourly rate, and contact information, which allows you to assess whether the specialist meets your needs.",
                            ],
                        },
                        {
                            title: "Forming \na team",
                            text: [
                                "You can choose individual specialists or immediately form a full-fledged team, depending on the requirements of your project. In this case, we strongly recommend consulting with our *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/order`*Manager*/link*, who will help you accurately assess the necessary resources and functional roles for the successful implementation of the project. This is especially important if you have no experience in managing a development team or if you have a complex project that requires several specialists with different competencies.",
                            ],
                        },
                        {
                            title: "Support \nfrom the Manager",
                            text: [
                                "Even though you can assemble a team on your own, our company is always ready to provide support at every stage. The Manager will help you properly organize the development process, set up communication, and ensure effective interaction among team members. If you need more than three specialists (such as a designer, developer, and tester), having a Manager on the team will save you time and money. The Manager will streamline the process so that you won’t have to get involved in the work yourself — your task will be to articulate/describe your requirements and approve designs and proposed technical solutions, rather than manage people and their interactions. Additionally, the Manager will regularly report to you on the progress of the work, conduct demos and consultations, and ensure that all necessary documentation and calculations are available.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "If your project has already been launched, and you need an individual specialist to perform hourly tasks or make changes to an existing product, you can directly *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}#team`*contact the specialist*/link* via Telegram or LinkedIn. This is a convenient option for those who require a quick solution to a specific problem or prompt assistance with a small volume of work. In such cases, there is no need to form a team — you just need to choose one specialist who will solve your issue.",
            ],
        },
    },
    {
        data: {
            image: "https://drive.google.com/uc?export=view&id=1DbKuVlDkkt9n-CveHBqHM5-Cq7bsoc60",
            likes: 0,
            slug: "can-i-make-changes-during-the-development-process",
            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=1aB5nAWNw1xjSn7d-P2g_VuVvF69Lt7U-",
        },
        ua: {
            questionText: "Чи можу я внести зміни в процесі розробки?",
            imageAltText: "Чи можу я внести зміни в процесі розробки?",
            shortAnswerText: [
                "Так, ви можете вносити зміни в процесі розробки. Це природна частина будь-якого проєкту, адже під час роботи можуть виникати нові ідеї, змінюватися бізнес-цілі або з’являтися нові технічні вимоги. Однак важливо розуміти, що будь-які зміни в ході розробки потребують уважного узгодження, щоб зберегти контроль над термінами, якістю продукту та бюджетом.",
            ],
            fullAnswerTopText: [
                "Змін в процесі розробки важко уникнути — це нормальна частина процесу. Нижче, для кращого розуміння ви знайдете більш детальну інформацію про внесення змін.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    title: "Як відбувається процес внесення змін?",
                    data: [
                        {
                            title: "Звернення \nдо менеджера",
                            text: [
                                "Перший крок — це звернутися до Менеджера, який керує розробкою вашого продукту. Менеджер координує всі етапи роботи та взаємодію команди, це та людина, яка допоможе вам зрозуміти, як найкраще впровадити зміни без шкоди для загальної концепції проєкту та в межах проговорених термінів та бюджету (якщо це можливо).",
                            ],
                        },
                        {
                            title: "Обговорення з \nкомандою розробки",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "Після того, як ви повідомите про бажання внести зміни, Менеджер обговорить це з командою розробників, дизайнерів та інших спеціалістів, які працюють над вашим продуктом. Це дозволить оцінити:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Складність та обсяг змін:",
                                    text: [
                                        "Чи ці зміни потребують повного перегляду поточних рішень, чи можуть бути реалізовані в межах наявного плану.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Вплив на терміни виконання:",
                                    text: [
                                        "Зміни можуть вимагати додаткового часу на розробку та тестування, що може відтермінувати фінальну здачу проєкту.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Вплив на бюджет:",
                                    text: [
                                        "Кожна зміна може потребувати додаткових ресурсів. Важливо провести оцінку вартості цих змін, щоб розуміти їх вплив на загальний бюджет проєкту.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Оцінка впливу змін",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "Після консультації з командою розробки Менеджер надасть вам інформацію про:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    text: [
                                        "Орієнтовні терміни виконання змін,",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    text: ["Орієнтовну вартість нових робіт,"],
                                },
                                {
                                    type: "listItem",
                                    text: [
                                        "Технічні та дизайн-аспекти, які можуть бути змінені",
                                    ],
                                },
                                {
                                    type: "none",
                                    text: [
                                        "На основі цих даних ви зможете прийняти обґрунтоване рішення, чи впроваджувати ці зміни зараз, чи, можливо, краще відкласти їх на наступні етапи розробки.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Затвердження та реалізація змін",
                            text: [
                                "Якщо ви вирішите продовжувати зі змінами, вони будуть внесені до плану робіт, і команда почне їх реалізацію. Після цього Менеджер слідкуватиме за тим, щоб нові вимоги були впроваджені коректно, без порушень в архітектурі проєкту або загальній функціональності продукту.",
                                "Варто також пам'ятати, що залежно від обсягу змін, можуть з’явитися додаткові витрати на роботу команди. Для цього варто провести детальну оцінку бюджету, щоб уникнути несподіваних витрат.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Ми завжди намагаємось залишатися гнучкими у процесі розробки, але чим пізніше вносяться зміни, тим більше вони можуть вплинути на загальну структуру проєкту. Це означає, що зміни на пізніх етапах можуть потребувати коригування певних частин продукту, що зробить їх дорожчими та складнішими.",
            ],
        },
        pl: {
            imageAltText:
                "Czy mogę wprowadzać zmiany w trakcie procesu tworzenia strony internetowej?",
            questionText:
                "Czy mogę wprowadzać zmiany w trakcie procesu tworzenia strony internetowej?",
            shortAnswerText: [
                "Tak, możesz wprowadzać zmiany w trakcie procesu tworzenia. To naturalna część każdego projektu, ponieważ w trakcie pracy mogą pojawiać się nowe pomysły, zmieniać cele biznesowe lub pojawiać się nowe wymagania techniczne. Należy jednak pamiętać, że wszelkie zmiany muszą być starannie uzgodnione, aby utrzymać kontrolę nad terminami, jakością produktu i budżetem.",
            ],
            fullAnswerTopText: [
                "Trudno uniknąć zmian w procesie rozwoju — są one normalną częścią procesu. Poniżej, dla lepszego zrozumienia, znajdą się bardziej szczegółowe informacje na temat wprowadzania zmian.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    title: "Jak przebiega proces wprowadzania zmian?",
                    data: [
                        {
                            title: "Kontakt z Menedżerem",
                            text: [
                                "Pierwszym krokiem jest skontaktowanie się z Menedżerem, który zarządza rozwojem produktu. Menedżer koordynuje wszystkie etapy pracy oraz interakcję zespół i jest osobą, która pomoże Ci zrozumieć, jak najlepiej wprowadzić zmiany, nie naruszając ogólnej koncepcji projektu, i czy można to zrobić w ramach ustalonych terminów i budżetu (jeśli to jest możliwe).",
                            ],
                        },
                        {
                            title: "Dyskusja z zespołem deweloperskim",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "Po zgłoszeniu chęci wprowadzenia zmian, Menedżer przedyskutuje to z zespołem deweloperów, projektantów i innych specjalistów pracujących nad projektem. To pozwoli ocenić:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Złożoność i zakres zmian:",
                                    text: [
                                        "Czy zmiany wymagają całkowitego przeglądu dotychczasowych rozwiązań, czy można je wprowadzić w ramach istniejącego planu.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Wpływ na terminy realizacji:",
                                    text: [
                                        "Zmiany mogą wymagać dodatkowego czasu na opracowanie i testowanie, co może opóźnić finalne oddanie projektu.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Wpływ na budżet:",
                                    text: [
                                        "Każda zmiana może wymagać dodatkowych zasobów. Ważne jest dokonanie oceny kosztów, aby zrozumieć wpływ zmian na ogólny budżet projektu.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Ocena wpływu zmian",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "Po konsultacjach z zespołem deweloperskim, Menedżer nada informacje o:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    text: [
                                        "Szacowanym czasie realizacji zmian,",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    text: [
                                        "Szacowanych kosztach dodatkowych prac,",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    text: [
                                        "Aspektach technicznych i projektowych, które mogą ulec zmianie.",
                                    ],
                                },

                                {
                                    type: "none",
                                    text: [
                                        "Te dane pomogą Ci podjąć świadomą decyzję, czy wprowadzać zmiany teraz, czy może lepiej odłożyć je na kolejne etapy rozwoju.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Zatwierdzenie i realizacja zmian",
                            text: [
                                "Jeśli zdecydujesz się kontynuować ze zmianami, zostaną one uwzględnione w planie pracy, a zespół rozpocznie ich realizację. Menedżer będzie monitorować, aby nowe wymagania zostały poprawnie wdrożone, bez naruszenia architektury projektu lub ogólnej funkcjonalności produktu.",
                                "Należy również pamiętać, że w zależności od zakresu zmian, mogą pojawić się dodatkowe koszty związane z pracą zespołu. W tym celu warto przeprowadzić szczegółową estymację budżetu, aby uniknąć niespodziewanych kosztów.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Zawsze staramy się być elastyczni w procesie tworzenia, ale im później zostaną wprowadzone zmiany, tym większy wpływ mogą one mieć na ogólną strukturę projektu. Oznacza to, że zmiany na późniejszych etapach mogą wymagać przebudowy niektórych części produktu, co sprawi, że będą one droższe i bardziej skomplikowane.",
            ],
        },
        en: {
            imageAltText: "Can I make changes during the development process?",
            questionText: "Can I make changes during the development process?",
            shortAnswerText: [
                "Yes, you can make changes during the development process. This is a natural part of any project, as new ideas may arise, business goals may change, or new technical requirements may emerge. However, it's important to understand that any changes during development need to be carefully coordinated to maintain control over timelines, product quality, and budget.",
            ],
            fullAnswerTopText: [
                "Changes during the development process are hard to avoid — they are a normal part of the process. Below, you’ll find more detailed information about implementing changes for better understanding.",
            ],
            fullAnswerContent: [
                {
                    layout: 1,
                    title: "How does the change process work?",
                    data: [
                        {
                            title: "Contacting the Manager",
                            text: [
                                "The first step is to contact the Manager who is leading the development of your product. The Manager coordinates all stages of the work and team interactions. This person will help you understand how to best implement the changes without disrupting the overall project concept and within the agreed timeline and budget (if possible).",
                            ],
                        },
                        {
                            title: "Discussion with the development team",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "Once you've communicated your desire to make changes, the Manager will discuss this with the team of developers, designers, and other specialists working on your product. This will help to assess:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Complexity and scope of changes:",
                                    text: [
                                        "Will these changes require a complete review of the current solutions, or can they be implemented within the existing plan?",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Impact on deadlines:",
                                    text: [
                                        "Changes may require additional development and testing time, potentially delaying the final delivery of the project.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Impact on the budget:",
                                    text: [
                                        "Each change may require additional resources. It’s important to assess the cost of these changes to understand their efect on the overall project budget.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Change impact assessment",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "After consulting with the development team, the Manager will provide you with information about:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    text: [
                                        "Estimated timelines for implementing the changes,",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    text: ["Estimated cost of the new work,"],
                                },
                                {
                                    type: "listItem",
                                    text: [
                                        "Technical and design aspects that may be changed.",
                                    ],
                                },
                                {
                                    type: "none",
                                    text: [
                                        "Based on this information, you will be able to make an informed decision on whether to implement these changes now or possibly postpone them to later stages of development.",
                                    ],
                                },
                            ],
                        },
                        {
                            title: "Approval and implementation of changes",
                            text: [
                                "If you decide to proceed with the changes, they will be added to the work plan, and the team will begin implementing them. Afterward, the Manager will ensure that the new requirements are integrated correctly, without disrupting the project's architecture or overall functionality.",
                                "It's also important to note that, depending on the scope of the changes, there may be additional costs for the team's work. A detailed budget evaluation should be carried out to avoid unexpected expenses.",
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "We always strive to remain flexible during the development process, but the later changes are introduced, the more they can affect the overall structure of the project. This means that changes at later stages may require reworking certain parts of the product, making them more expensive and complex.",
            ],
        },
    },
    {
        data: {
            image: "https://drive.google.com/uc?export=view&id=1r8QMsr0NS1u7Tke9lSuB1XD0sAOs6PYO",
            likes: 0,
            slug: "do-you-provide-post-launch-support",

            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=1QdzBswF6oB-ZolQpwdCeL2wJSESyd1wU",
        },
        ua: {
            questionText:
                "Чи надаєте ви послуги підтримки після запуску сайту?",
            imageAltText:
                "Чи надаєте ви послуги підтримки після запуску сайту?",
            shortAnswerText: [
                "Так, ми надаємо підтримку після запуску сайтів, які розробляємо, а також можемо допомогти з підтримкою вже наявних продуктів. Після завершення розробки та запуску проєкту важливо забезпечити його належне функціонування та оперативно реагувати на можливі проблеми, тому ми пропонуємо кілька варіантів підтримки.",
            ],
            fullAnswerTopText: [
                "Нижче детальніше описаний кожен з варіантів підтримки, а саме підтримка продуктів, які ми розробляємо для вас та підтримка ваших власних продуктів. Додатково зазначимо, ми відкриті до обговорення і впевнені, що можна знайти варіанти під кожен запит.",
            ],
            fullAnswerContent: [
                {
                    layout: 4,
                    title: "Підтримка продуктів, які ми розробляємо",
                    data: [
                        {
                            title: "Для наших клієнтів, які замовляють розробку вебсайту чи інтернет-магазину, ми пропонуємо послуги підтримки на умовах додаткового договору. Це дозволяє вам бути впевненими, що після запуску продукту він продовжуватиме працювати коректно, і будь-які технічні питання чи оновлення будуть вирішені вчасно. В рамках підтримки ми пропонуємо:",
                            type: "list",
                            decorate: 1,
                            text: [
                                {
                                    title: "Технічну підтримку",
                                    text: [
                                        "Ми слідкуємо за тим, щоб ваш сайт працював стабільно, без збоїв та з найвищою швидкістю завантаження. У разі виникнення технічних проблем наша команда швидко вирішить їх і забезпечить безперебійне функціонування сайту.",
                                    ],
                                },
                                {
                                    title: "Оновлення та вдосконалення",
                                    text: [
                                        "Технології та інструменти постійно змінюються, тому важливо підтримувати ваш продукт в актуальному стані. Ми допоможемо інтегрувати нові функції, виправити помилки, а також провести оновлення системи безпеки, фреймворків та інших компонентів сайту.",
                                    ],
                                },
                                {
                                    title: "Контроль за безпекою",
                                    text: [
                                        "Після запуску ми можемо забезпечити моніторинг і захист вашого сайту від потенційних загроз, таких як хакерські атаки, шкідливі програми чи віруси. Регулярні оновлення безпеки та моніторинг серверів допоможуть забезпечити високий рівень захищеності.",
                                    ],
                                },
                                {
                                    title: "Оптимізація швидкодії",
                                    text: [
                                        "З часом ваш сайт може потребувати додаткової оптимізації для покращення швидкості завантаження, особливо якщо ви додаєте нові функції чи контент. Ми можемо допомогти з налаштуваннями та оптимізацією, щоб забезпечити максимальну ефективність роботи сайту.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 4,
                    title: "Підтримка наявних продуктів",
                    data: [
                        {
                            title: "Якщо ваш сайт уже запущений і був розроблений іншою компанією або командою, ми також можемо надати консультацію та допомогу з підтримкою цього продукту. У таких випадках ми оцінюємо, чи є у нас спеціалісти, які володіють необхідними інструментами та фреймворками, щоб працювати з вашим продуктом. Після цього ми можемо запропонувати варіанти підтримки, які включатимуть:",
                            type: "list",
                            decorate: 2,
                            text: [
                                {
                                    title: "Аналіз наявної системи",
                                    text: [
                                        "Першим кроком буде здійснено аналіз того, як налаштований ваш сайт, які технології використовуються та які слабкі місця можуть вимагати уваги.",
                                    ],
                                },
                                {
                                    title: "Рекомендації щодо поліпшень",
                                    text: [
                                        " Після аналізу ми надамо рекомендації щодо оптимізації, безпеки або функціональних покращень, які допоможуть вашому сайту працювати краще та ефективніше.",
                                    ],
                                },
                                {
                                    title: "Оперативна підтримка",
                                    text: [
                                        "Якщо у вас виникають технічні проблеми чи необхідні термінові виправлення, ми надаємо допомогу з їх вирішенням. Це може бути вирішення проблем із сервером, внесення змін у код або оновлення плагінів.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 5,
                    title: "Як замовити?",
                    data: [
                        {
                            text: [
                                "Для того, щоб замовити послуги підтримки або отримати консультацію, вам потрібно звернутися до нашого Менеджера. Менеджер проведе консультацію щодо умов співпраці та допоможе вам підібрати оптимальний план підтримки для вашого продукту.",
                            ],
                        },
                        {
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "Ми пропонуємо різні варіанти підтримки, які можуть включати:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Погодинну оплату",
                                    text: [
                                        "Якщо вам потрібна підтримка для короткострокових задач або виправлення окремих помилок.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Абонентське обслуговування",
                                    text: [
                                        "Це варіант для тих, хто потребує регулярного моніторингу, оновлень та підтримки на довготривалій основі.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Ми готові допомогти вам як із розробкою нових продуктів, так і з підтримкою вже наявних продуктів, щоб забезпечити їх надійну роботу та довговічність. Зв’яжіться з нами для отримання консультації та ми підкажемо  деталі та формати співпраці!",
            ],
        },
        pl: {
            questionText: "Czy zapewniacie wsparcie po uruchomieniu strony?",
            imageAltText: "Czy zapewniacie wsparcie po uruchomieniu strony?",
            shortAnswerText: [
                "Tak, zapewniamy wsparcie po uruchomieniu stron, które tworzymy, a także możemy pomóc w utrzymaniu istniejących produktów. Po zakończeniu rozwoju i uruchomieniu projektu ważne jest, aby zapewnić jego prawidłowe działanie i szybko reagować na ewentualne problemy, dlatego oferujemy kilka opcji wsparcia.",
            ],
            fullAnswerTopText: [
                "Poniżej opisujemy bardziej szczegółowo każdą z opcji wsparcia, a mianowicie wsparcie dla produktów, które opracowujemy dla Ciebie oraz wsparcie dla Twoich własnych produktów. Jesteśmy otwarci na dyskusje i jesteśmy przekonani, że znajdziemy rozwiązanie dla każdego zgłoszenia.",
            ],
            fullAnswerContent: [
                {
                    layout: 4,
                    title: "Wsparcie produktów, które tworzymy",
                    data: [
                        {
                            decorate: 1,
                            type: "list",
                            title: "Dla naszych klientów, którzy zamawiają stworzenie strony internetowej lub sklepu online, oferujemy usługi wsparcia na podstawie dodatkowej umowy. To pozwala mieć pewność, że po uruchomieniu produkt będzie działał poprawnie, a wszelkie kwestie techniczne lub aktualizacje zostaną rozwiązane na czas. W ramach wsparcia oferujemy:",
                            text: [
                                {
                                    title: "Wsparcie techniczne.",
                                    text: [
                                        "Monitorujemy, aby Twoja strona działała stabilnie, bez zakłóceń i z najwyższą prędkością ładowania. W razie problemów technicznych nasz zespół szybko je rozwiąże, zapewniając sprawne funkcjonowanie strony",
                                    ],
                                },
                                {
                                    title: "Aktualizacje i ulepszenia",
                                    text: [
                                        "Technologie i narzędzia stale się zmieniają, dlatego ważne jest, aby Twój produkt był aktualizowany. Pomagamy zintegrować nowe funkcje, naprawić błędy oraz przeprowadzać aktualizacje systemów bezpieczeństwa, frameworków i innych elementów strony.",
                                    ],
                                },
                                {
                                    title: "Kontrola bezpieczeństwa",
                                    text: [
                                        " Po uruchomieniu możemy monitorować i chronić Twoją stronę przed potencjalnymi zagrożeniami, takimi jak ataki hakerskie, złośliwe oprogramowanie czy wirusy. Regularne aktualizacje bezpieczeństwa i monitoring serwerów zapewnią wysoki poziom bezpieczeństwa.",
                                    ],
                                },
                                {
                                    title: "Optymalizacja wydajności",
                                    text: [
                                        "Z czasem Twoja strona może wymagać dodatkowej optymalizacji w celu poprawy szybkości ładowania, zwłaszcza jeśli dodajesz nowe funkcje lub treści. Pomożemy z ustawieniami i optymalizacją, aby zapewnić maksymalną wydajność strony.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 4,
                    title: "Wsparcie istniejących produktów",
                    data: [
                        {
                            decorate: 2,
                            type: "list",
                            title: "Jeśli Twoja strona już działa i została stworzona przez inną firmę lub zespół, również możemy zaoferować konsultacje i pomoc w utrzymaniu tego produktu. W takich przypadkach oceniamy, czy posiadamy specjalistów, którzy znają niezbędne narzędzia i frameworki, aby pracować nad Twoim produktem. Następnie możemy zaproponować opcje wsparcia, które mogą obejmować:",
                            text: [
                                {
                                    title: "Analizę istniejącego systemu",
                                    text: [
                                        " Pierwszym krokiem będzie analiza konfiguracji Twojej strony, technologii użytych do jej stworzenia oraz ewentualnych słabych punktów wymagających uwagi.",
                                    ],
                                },
                                {
                                    title: "Rekomendacje dotyczące ulepszeń",
                                    text: [
                                        "Po analizie dostarczymy rekomendacje dotyczące optymalizacji, bezpieczeństwa lub funkcjonalnych ulepszeń, które pomogą stronie działać lepiej i wydajniej.",
                                    ],
                                },
                                {
                                    title: "Wsparcie operacyjne",
                                    text: [
                                        "Jeśli pojawią się problemy techniczne, lub konieczne są pilne poprawki, zapewniamy wsparcie w ich rozwiązaniu. Może to obejmować naprawę problemów z serwerem, wprowadzanie zmian w kodzie lub aktualizację wtyczek.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 5,
                    title: "Jak zamówić?",
                    data: [
                        {
                            title: "Aby zamówić usługi wsparcia lub uzyskać konsultację, wystarczy skontaktować się z naszym Menedżerem. Menedżer przeprowadzi konsultację w sprawie warunków współpracy i pomoże dobrać optymalny plan wsparcia dla Twojego produktu.",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "Oferujemy różne opcje wsparcia, które mogą obejmować:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Opłatę godzinową",
                                    text: [
                                        "Jeśli potrzebujesz wsparcia w krótkoterminowych zadaniach lub naprawie pojedynczych błędów.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Abonament serwisowy",
                                    text: [
                                        " To opcja dla tych, którzy potrzebują regularnego monitoringu, aktualizacji i wsparcia na długoterminowej podstawie.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Jesteśmy gotowi pomóc Ci zarówno w rozwoju nowych produktów, jak i w utrzymaniu już istniejących, aby zapewnić ich niezawodne działanie i trwałość. Skontaktuj się z nami, aby uzyskać konsultację, a my przedstawimy szczegóły i formy współpracy.",
            ],
        },
        en: {
            questionText: "Do you provide post-launch support?",
            imageAltText: "Do you provide post-launch support?",
            shortAnswerText: [
                "Yes, we provide post-launch support for the websites we develop, and can also assist with the maintenance of existing products. After the project is completed and launched, it is important to ensure its proper functioning and respond promptly to any issues. Therefore, we offer several support options.",
            ],
            fullAnswerTopText: [
                "Below we describe each of the support options in more detail, namely support for products we develop for you and support for your own products. Please note that we are open to discussions and are confident that we can find options for each request.",
            ],
            fullAnswerContent: [
                {
                    layout: 4,
                    title: "Support for the products we develop",
                    data: [
                        {
                            decorate: 1,
                            type: "list",
                            title: "For our clients who order website or online store development, we offer support services under an additional agreement. This allows you to be confident that after the product launch, it will continue to function correctly, and any technical issues or updates will be addressed promptly. As part of our support services, we offer:",
                            text: [
                                {
                                    title: "Technical support",
                                    text: [
                                        "We ensure that your website operates smoothly, without crashes, and with the highest loading speed. If any technical issues arise, our team will quickly resolve them to maintain uninterrupted site performance.",
                                    ],
                                },
                                {
                                    title: "Updates and improvements",
                                    text: [
                                        "Technologies and tools are constantly changing, so it's important to keep your product up to date. We help integrate new features, fix bugs, and carry out security updates, as well as updates to frameworks and other components of the website.",
                                    ],
                                },
                                {
                                    title: "Security monitoring",
                                    text: [
                                        "After the launch, we can provide monitoring and protection for your website against potential threats such as hacker attacks, malware, or viruses. Regular security updates and server monitoring will help maintain a high level of protection.",
                                    ],
                                },
                                {
                                    title: "Performance optimization",
                                    text: [
                                        "Over time, your website may require additional optimization to improve loading speed, especially if you're adding new features or content. We can assist with configuration and optimization to ensure maximum efficiency and performance of your site.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 4,
                    title: "Support for existing products",
                    data: [
                        {
                            decorate: 2,
                            type: "list",
                            title: "If your website has already been launched and was developed by another company or team, we can also provide consultation and assistance with maintaining that product. In such cases, we assess whether we have specialists who are proficient in the necessary tools and frameworks to work with your product. After this evaluation, we can offer support options that include:",
                            text: [
                                {
                                    title: "Analysis of the existing system",
                                    text: [
                                        "The first step will be to analyze how your website is configured, what technologies are used, and any weaknesses that may need attention.",
                                    ],
                                },
                                {
                                    title: "Improvement recommendations",
                                    text: [
                                        "After the analysis, we will provide recommendations for optimization, security, or functional improvements that will help your website perform better and more efficiently.",
                                    ],
                                },
                                {
                                    title: "Prompt support",
                                    text: [
                                        "If you encounter technical issues or need urgent fixes, we offer assistance to resolve them. This could involve server troubleshooting, code modifications, or updating plugins.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    layout: 5,
                    title: "How to order?",
                    data: [
                        {
                            title: "To order support services or request a consultation, you will need to contact our Manager. The Manager will provide a consultation regarding the terms of cooperation and help you choose the best support plan for your product.",
                            text: [
                                {
                                    type: "none",
                                    text: [
                                        "We offer various support options, which may include:",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Hourly payment",
                                    text: [
                                        "Ideal if you need support for short-term tasks or fixing specific issues.",
                                    ],
                                },
                                {
                                    type: "listItem",
                                    title: "Subscription service",
                                    text: [
                                        "This option is for those who require regular monitoring, updates, and long-term support.",
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            fullAnswerBottomText: [
                "We are ready to assist you with both the development of new products and the maintenance of existing ones to ensure their reliable operation and longevity. Contact us for a consultation, and we'll provide more details and formats of cooperation!",
            ],
        },
    },
];
