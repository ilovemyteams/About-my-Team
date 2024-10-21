export type QADataType = {
    slug: string;
    image: string;
    likes: number;
    layout?: number;
    answerTopImage?: string;
    answerOrderImage?: string;
};
export type LongAnswerListTextType = {
    title: string;
    text: string | string[];
};

export type LongAnswerListType = {
    title: string;
    text: string[] | LongAnswerListTextType[];
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
            layout: 1,
            answerTopImage:
                "https://drive.google.com/uc?export=view&id=1cib9jXgxFKaQ6-qOS24vVKL0RZKoyAIG",
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
            layout: 2,
            answerTopImage:
                "https://drive.google.com/uc?export=view&id=14JI0UQmev0qgPWlc53WK9YwhlEzOoFYQ",
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
                    title: "Лендінг",
                    text: [
                        {
                            title: "Ключові особливості:",
                            text: [
                                "Односторінковий сайт;",
                                "Один промоційний або інформаційний екран;",
                                "Зосереджений на рекламній кампанії, презентації одного продукту або послуги;",
                                "Має просту структуру та навігацію.",
                            ],
                        },
                        {
                            title: "Ідеально підходить для:",
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
                            text: [
                                "Складається з декількох сторінок, таких як головна, про нас, послуги, контакти тощо;",
                                "Більш розгалужена структура та розширені можливості;",
                                "Дозволяє розказати про компанію, співробітників, товари та послуги, зібрати зворотній зв’язок від користувачів та спонукати їх до дій на сайті - подзвонити, замовити товар/послугу, замовити консультацію тощо.",
                            ],
                        },
                        {
                            title: "Ідеально підходить для:",
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
                            text: [
                                "Має всі ті самі атрибути як і сайт-візитка;",
                                "Дозволяє представити повний спектр продуктів або послуг, а також додаткові матеріали та ресурси;",
                                "Дозволяє розмістити на сайті більше інформації на більшій кількості різноманітних за типом сторінок та передати всі можливі види контенту.",
                            ],
                        },
                        {
                            title: "Ідеально підходить для:",
                            text: [
                                "Побудови бренду компанії, залучення нових клієнтів і партнерів, допомагає підвищити конверсію відвідувачів у клієнтів, допомагає заміряти ефективність рекламних кампаній та має ще багато інших переваг.",
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
                    title: "Landing page (strona docelowa)",
                    text: [
                        {
                            title: "Kluczowe cechy:",
                            text: [
                                "Strona jednostronicowa;",
                                "Jeden ekran promocyjny lub informacyjny;",
                                "Skupia się na kampanii reklamowej, prezentacji jednego produktu lub usługi;",
                                "Ma prostą strukturę i nawigację.",
                            ],
                        },
                        {
                            title: "Idealna do:",
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
                            text: [
                                "Składa się z kilku stron, takich jak strona główna, o nas, usługi, kontakty itd;",
                                "Bardziej rozbudowana struktura i rozszerzone możliwości;",
                                "Pozwala opowiedzieć o firmie, pracownikach, produktach i usługach, zebrać opinie od użytkowników i zachęcić ich do podjęcia działań na stronie — zadzwonić, zamówić produkt/usługę, zamówić konsultację itp.",
                            ],
                        },
                        {
                            title: "Idealna do:",
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
                            text: [
                                "Posiada wszystkie te same atrybuty, co strona wizytówka;",
                                "Umożliwia zaprezentowanie pełnej gamy produktów lub usług, a także dodatkowych materiałów i zasobów;",
                                "Umożliwia umieszczenie na stronie większej ilości informacji na różnych typach stron oraz przekazanie wszystkich możliwych rodzajów treści.",
                            ],
                        },
                        {
                            title: "Idealna do:",
                            text: [
                                "Budowania marki firmy, przyciąga nowych klientów i partnerów, pomaga zwiększyć konwersję odwiedzających na klientów, pomaga mierzyć skuteczność kampanii reklamowych oraz oferuje wiele innych korzyści.",
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
                    title: "Landing page",
                    text: [
                        {
                            title: "Key features:",
                            text: [
                                "Single-page website;",
                                "One promotional or informational screen;",
                                "Focused on a marketing campaign, presenting a single product or service;",
                                "Simple structure and navigation.",
                            ],
                        },
                        {
                            title: "Ideal for:",
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
                            text: [
                                "Consists of several pages, such as Home, About Us, Services, Contact, etc.;",
                                "More detailed structure with expanded capabilities;",
                                "Allows you to tell about the company, employees, products and services, collect feedback from users and encourage them to take actions like calling, ordering a product/service, or requesting a consultation, etc.",
                            ],
                        },
                        {
                            title: "Ideal for:",
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
                            text: [
                                "Includes all the features of a business card website;",
                                "Allows you to present a full range of products or services, as well as additional materials and resources;",
                                "Allows you to place more information on the site on a larger number of different types of pages and convey all possible types of content;",
                            ],
                        },
                        {
                            title: "Ideal for:",
                            text: [
                                "Building the company's brand, attracting new clients and partners, increasing conversion rates from visitors to customers, measuring the effectiveness of marketing campaigns, and offering many other advantages.",
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
            layout: 3,
            answerTopImage:
                "https://drive.google.com/uc?export=view&id=1m0w27e1oRMxDVy1n1X0hYlPrgQ3C3P8o",
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
                    title: "Підготовчий \nетап:",
                    text: [
                        "Збір первинних вимог до продукту від замовника;",
                        "Обговорення вимог та деталей проєкту, узгодження специфікацій;",
                        "Формулюванні ідеї, розробка концепції та вибір стилю;",
                        "Визначення структури та функціональності сайту.",
                    ],
                },
                {
                    title: "Розробка \nта тестування:",
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
                    text: [
                        "End-to-End тестування та розміщення продукту на сервері;",
                        "Підготовка до запуску, налаштування хостингу, сертифікатів;",
                        "Запуск сайту та  передача доступів для налаштувань.",
                    ],
                },
                {
                    title: "Підтримка \nта розвиток:",
                    text: [
                        "Надання підтримки після запуску;",
                        "Подальший розвиток сайту, додавання нового функціоналу та контенту.",
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
                    title: "Etap \nprzygotowawczy:",
                    text: [
                        "Zebranie od klienta wstępnych wymagań dotyczących produktu;",
                        "Omówienie wymagań i szczegółów projektu, uzgodnienie specyfikacji;",
                        "Sformułowanie pomysłu, opracowanie koncepcji i wybór stylu;",
                        "Określenie struktury i funkcjonalności strony internetowej.",
                    ],
                },
                {
                    title: "Rozwój \ni testowanie:",
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
                    text: [
                        "Testowanie End-to-End oraz umieszczenie produktu na serwerze;",
                        "Przygotowanie do uruchomienia, konfiguracja hostingu, certyfikaty;",
                        "Uruchomienie strony i przekazanie dostępów do ustawień.",
                    ],
                },
                {
                    title: "Wsparcie \ni rozwój:",
                    text: [
                        "Zapewnienie wsparcia po uruchomieniu;",
                        "Dalszy rozwój strony, dodawanie nowych funkcji i treści.",
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
                    title: "Preparation \nstage:",
                    text: [
                        "Collecting primary product requirements from the client;",
                        "Discussing project details and aligning specifications;",
                        "Formulating the idea, developing the concept, and choosing the style;",
                        "Defining the structure and functionality of the website.",
                    ],
                },
                {
                    title: "Development \nand testing:",
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
                    text: [
                        "End-to-End testing and placing the product on the server;",
                        "Preparing for launch, setting up hosting, certificates;",
                        "Launching the website and transferring accesses for customization.",
                    ],
                },
                {
                    title: "Support \nand development:",
                    text: [
                        "Providing post-launch support;",
                        "Further development of the website, adding new functionality and content.",
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
        },
        ua: {
            questionText: "Скільки коштує розробка?",
            shortAnswerText: [
                "В залежності від об’єму та складності продукту орієнтовний бюджет на лендінг від 500 доларів. Вартість сайту до 10 сторінок орієнтовно від 800 доларів. Вартість розробки інтернет-магазину на 20-30 продуктів та оплатою на сайті від 1600 доларів. Якщо ви бажаєте отримати оцінку вартості розробки сайту, рекомендуємо зв'язатися з Менеджером продукту та обговорити з ним/нею всі деталі. Після цього ми зможемо скласти для вас комерційну пропозицію, в якій буде вказана приблизна вартість розробки вашого сайту та терміни виконання.",
            ],
            imageAltText: "Скільки коштує розробка?",
        },
        pl: {
            questionText:
                "Ile kosztuje stworzenie strony internetowej lub sklepu internetowego?",
            shortAnswerText: [
                "W zależności od wielkości i złożoności produktu, przybliżony budżet na landing page wynosi od 500$. Koszt strony internetowej do 10 stron wynosi około 800 USD. Koszt stworzenia sklepu internetowego na 20-30 produktów z płatnościami online wynosi od 1600 USD. Jeśli chcesz uzyskać wycenę kosztów stworzenia strony internetowej, zalecamy skontaktowanie się z Product Managerem i omówienia z nim wszystkich szczegółów. Następnie będziemy mogli przygotować dla Ciebie ofertę handlową, która wskaże przybliżony koszt stworzenia Twojej strony internetowej i terminy realizacji.",
            ],
            imageAltText:
                "Ile kosztuje stworzenie strony internetowej lub sklepu internetowego?",
        },
        en: {
            questionText: "How much does development cost?",
            shortAnswerText: [
                "Depending on the volume and complexity of the product, the approximate budget for a landing page is from $500. The cost of a website up to 10 pages is approximately 800 dollars. The cost of developing an online store with 20-30 products and online payment is from $1600. If you want to get an estimate of the cost of developing a website, we recommend you to contact the Product Manager and discuss all the details with him/her. After that, we will be able to make a commercial offer for you, which will indicate the approximate cost of developing your website and the terms of implementation",
            ],
            imageAltText: "How much does development cost?",
        },
    },
    {
        data: {
            slug: "can-i-choose-which-team-will-work-on-my-order",
            image: "https://drive.google.com/thumbnail?id=1Id6dTkkWbiw95v8hEiaRd4wu2luqIsOc",
            likes: 0,
            layout: 1,
            answerOrderImage:
                "https://drive.google.com/uc?export=view&id=15X1tdwWHNC7DXp-82g_h-kPY2GCfkSva",
        },
        ua: {
            questionText: "Чи можу я самостійно підібрати команду?",
            shortAnswerText: [
                "Так, ви можете вибрати окремих спеціалістів і сформувати команду самостійно. В такому випадку наполегливо рекомендуємо спочатку звернутись за консультацією до Менеджера. Якщо ви потребуєте окремого спеціаліста на погодинні роботи з вашим уже реалізованим продуктом — зв’яжіться зі спеціалістом через його телеграм або лінкедін напряму і повідомте як ви його знайшли та чому обрали саме його/її.",
            ],
            imageAltText:
                "Чи можу я самостійно обрати, яка команда працюватиме над моїм замовленням?",
            fullAnswerTopText: [
                "Ми розуміємо, що кожен проєкт має свої унікальні вимоги, і тому надаємо гнучкість у виборі спеціалістів, щоб ви могли сформувати команду, яка найкраще відповідатиме вашим цілям та задачам.",
            ],
            fullAnswerContent: [
                {
                    title: "Вибір окремих \nспеціалістів",
                    text: [
                        "На нашому сайті ви можете переглянути профілі розробників, дизайнерів, тестувальників, аналітиків, менеджерів та інших спеціалістів, які готові працювати над вашим проєктом. Кожен профіль містить інформацію про досвід, навички, попередні проєкти, погодинну ставку, а також контактну інформацію, що дозволяє вам оцінити відповідність фахівця вашим потребам.",
                    ],
                },
                {
                    title: "Формування \nкоманди",
                    text: [
                        "Ви можете обрати окремих фахівців або відразу сформувати повноцінну команду, залежно від вимог вашого проєкту. У цьому випадку ми наполегливо рекомендуємо звернутись за консультацією до нашого *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/member/TetianaSeletska`*Менеджера*/link*, який/яка допоможе вам правильно оцінити необхідні ресурси та функціональні ролі для успішної реалізації проєкту. Це особливо важливо, якщо ви не маєте досвіду в управлінні командою розробників або маєте складний проєкт, який вимагає кількох фахівців із різними компетенціями.",
                    ],
                },
                {
                    title: "Підтримка \nвід Менеджера",
                    text: [
                        "Попри те, що ви можете самостійно підібрати команду, наша компанія завжди готова надати підтримку на кожному етапі. Менеджер допоможе вам правильно організувати процес розробки, налаштувати комунікацію та забезпечити ефективну взаємодію між членами команди. Якщо вам потрібно більше 3-х спеціалістів (дизайнер, розробник, тестувальник) то взявши в команду менеджера ви зекономите час та гроші, бо Менеджер налагодить процес так, що вам не доведеться долучатися до роботи самостійно — ваша задача буде озвучувати/описувати свої вимоги та затверджувати макети та запропоновані технічні рішення, а не займатись управлінням людьми та їх взаємодією. Також Менеджер буде вам регулярно звітувати про етапи роботи, проводити демо та консультації, а також забезпечить наявність всієї необхідної документації та розрахунків.",
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Якщо ваш проєкт вже запущений і вам потрібен окремий спеціаліст для виконання погодинних завдань або внесення змін до наявного продукту, ви можете напряму *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}#team`*написати спеціалісту*/link*. Це зручний варіант для тих, хто потребує швидкого вирішення конкретної проблеми або оперативної допомоги з невеликим обсягом робіт. У таких випадках немає потреби формувати команду — достатньо обрати одного фахівця, який вирішить ваше питання.",
            ],
        },
        pl: {
            questionText: "Czy mogę samodzielnie wybrać zespół?",
            shortAnswerText: [
                "Tak, możesz samodzielnie wybrać poszczególnych specjalistów i utworzyć zespół. W takim przypadku zalecamy skontaktowanie się z Menedżerem w celu konsultacji. Jeśli potrzebujesz specjalisty do pracy godzinowej nad już wdrożonym produktem, możesz skontaktować się bezpośrednio z wybranym specjalistą przez Telegram lub LinkedIn, informując go, jak go znalazłeś i dlaczego go wybrałeś.",
            ],
            imageAltText:
                "Czy mogę wybrać zespół, który będzie pracował nad moją stroną internetową?",
            fullAnswerTopText: [
                "Rozumiemy, że każdy projekt ma swoje unikalne wymagania, dlatego dajemy możliwość elastycznego wyboru specjalistów, abyś mógł/mogła stworzyć zespół najlepiej dopasowany do Twoich celów i zadań.",
            ],
            fullAnswerContent: [
                {
                    title: "Wybór poszczególnych \nspecjalistów",
                    text: [
                        "Na naszej stronie możesz przeglądać profile deweloperów, projektantów, testerów, analityków, menedżerów i innych specjalistów, którzy są gotowi pracować nad twoim projektem. Każdy profil zawiera informacje o doświadczeniu, umiejętnościach, poprzednich projektach, stawkach godzinowych oraz dane kontaktowe, co pozwala ocenić, czy dany specjalista spełnia Twoje potrzeby.",
                    ],
                },
                {
                    title: "Tworzenie \nzespołu",
                    text: [
                        "Możesz wybrać indywidualnych specjalistów lub od razu utworzyć pełny zespół, w zależności od wymagań twojego projektu. W takim przypadku zdecydowanie zalecamy konsultację z naszym *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/member/TetianaSeletska`*Menedżerem*/link*, który pomoże właściwie ocenić zasoby i role funkcjonalne potrzebne do realizacji projektu. Jest to szczególnie ważne, jeśli nie masz doświadczenia w zarządzaniu zespołem deweloperów lub jeśli projekt jest skomplikowany i wymaga wielu specjalistów o różnych kompetencjach.",
                    ],
                },
                {
                    title: "Wsparcie \nMenedżera",
                    text: [
                        "Chociaż możesz samodzielnie wybrać zespół, nasza firma zawsze służy wsparciem na każdym etapie. Menedżer pomoże Ci zorganizować proces deweloperski, ustawić komunikację i zapewnić efektywną współpracę w zespole. Jeśli potrzebujesz więcej niż trzech specjalistów (np. projektanta, dewelopera i testera), zaangażowanie Menedżera pozwoli zaoszczędzić czas i pieniądze. Menedżer ustawi proces w taki sposób, abyś nie musiał sam angażować się w pracę — Twoim zadaniem będzie jedynie przedstawianie wymagań, zatwierdzanie projektów i proponowanych rozwiązań technicznych, a nie zarządzanie ludźmi i ich interakcjami. Menedżer będzie regularnie raportować postępy, przeprowadzać prezentacje i konsultacje, a także dbać o niezbędną dokumentację i kalkulacje.",
                    ],
                },
            ],
            fullAnswerBottomText: [
                "Jeśli Twój projekt jest już uruchomiony i potrzebujesz specjalisty do pracy godzinowej lub do wprowadzenia zmian w istniejącym produkcie, możesz *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}#team`*skontaktować się bezpośrednio ze specjalistą*/link* przez Telegram lub LinkedIn. Jest to wygodne rozwiązanie dla osób, które potrzebują szybkiego rozwiązania konkretnego problemu lub pomocy  przy niewielkim nakładzie pracy. W takich przypadkach nie ma potrzeby tworzenia zespołu — wystarczy wybrać jednego specjalistę, który rozwiąże dany problem.",
            ],
        },
        en: {
            questionText: "Can I choose which team will work on my order?",
            shortAnswerText: [
                "Yes, you can choose individual specialists and assemble a team on your own. In this case, we strongly recommend first reaching out to a Manager for consultation. If you need a specific specialist for hourly work on your existing product, contact the specialist directly through their Telegram or LinkedIn and let them know how you found them and why you chose them.",
            ],
            imageAltText: "Can I choose which team will work on my order?",
            fullAnswerTopText: [
                "We understand that each project has its unique requirements, which is why we provide flexibility in choosing specialists so you can form a team that best meets your goals and objectives.",
            ],
            fullAnswerContent: [
                {
                    title: "Choosing individual \nspecialists",
                    text: [
                        "On our website, you can view the profiles of developers, designers, testers, analysts, managers, and other specialists who are ready to work on your project. Each profile contains information about experience, skills, previous projects, hourly rate, and contact information, which allows you to assess whether the specialist meets your needs.",
                    ],
                },
                {
                    title: "Forming \na team",
                    text: [
                        "You can choose individual specialists or immediately form a full-fledged team, depending on the requirements of your project. In this case, we strongly recommend consulting with our *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/member/TetianaSeletska`*Manager*/link*, who will help you accurately assess the necessary resources and functional roles for the successful implementation of the project. This is especially important if you have no experience in managing a development team or if you have a complex project that requires several specialists with different competencies.",
                    ],
                },
                {
                    title: "Support \nfrom the Manager",
                    text: [
                        "Even though you can assemble a team on your own, our company is always ready to provide support at every stage. The Manager will help you properly organize the development process, set up communication, and ensure effective interaction among team members. If you need more than three specialists (such as a designer, developer, and tester), having a Manager on the team will save you time and money. The Manager will streamline the process so that you won’t have to get involved in the work yourself — your task will be to articulate/describe your requirements and approve designs and proposed technical solutions, rather than manage people and their interactions. Additionally, the Manager will regularly report to you on the progress of the work, conduct demos and consultations, and ensure that all necessary documentation and calculations are available.",
                    ],
                },
            ],
            fullAnswerBottomText: [
                "If your project has already been launched, and you need an individual specialist to perform hourly tasks or make changes to an existing product, you can directly *link=`${process.env.NEXT_PUBLIC_BASE_URL}/${locale}#team`*contact the specialist*/link* via Telegram or LinkedIn. This is a convenient option for those who require a quick solution to a specific problem or prompt assistance with a small volume of work. In such cases, there is no need to form a team — you just need to choose one specialist who will solve your issue.",
            ],
        },
    },
];
