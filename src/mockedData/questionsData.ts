export type QADataType = {
    slug: string;
    image: string;
    likes: number;
    layout?: number;
    answerHeroImage?: string;
    answerOrderImage?: string;
};

export type LongAnswerListType = {
    title: string;
    text: string[] | LongAnswerListType[];
};

export type QAItemLocalizationTextType = {
    questionText: string;
    answerText: string;
    imageAltText: string;
    fullAnswerTopText?: string;
    fullAnswerBottomText?: string;
    fullAnswerList?: LongAnswerListType[];
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
        },
        ua: {
            questionText: "Мені потрібен сайт. З чого мені почати?",
            answerText:
                "Почніть з чесної відповіді на такі питання “Навіщо мені сайт? Чого я очікую від сайту? Що я буду на ньому показувати? Кому я хочу це показати? І що повинні зробити ті, хто відвідають мій сайт?”. Відповіді на ці питання дають розуміння, чи потрібен вам взагалі сайт і яким він повинен бути. А потім заповніть форму “Замовити” і надішліть нам ваші чесні відповіді, і ми все зробимо з турботою про ваші цілі та потреби вашого бізнесу.",
            imageAltText: "Мені потрібен сайт. З чого мені почати?",
            fullAnswerTopText:
                "Якщо вам потрібен сайт, перший крок – це чітко визначити ваші цілі та очікування від сайту. Розуміння мети допоможе вам визначити, який тип сайту вам потрібен. Розробка власного сайту може здатися складним процесом, але ми готові допомогти вам крок за кроком. Бо ми команда, яка дбає про ваші потреби. Нижче розписані основні етапи:",
            fullAnswerList: [
                {
                    title: "Обговорення цілей",
                    text: [
                        "Почнемо з обговорення ваших цілей та потреб. Що ви хочете досягти за допомогою сайту? Яка ваша цільова аудиторія? Хто буде користуватись вашим сайтом і що ці люди будуть на ньому шукати? Які у вас вимоги і очікування?",
                    ],
                },
                {
                    title: "Визначення типу сайту",
                    text: [
                        "Важливо визначити, чи ви хочете лендінг-сторінку або повноцінний сайт для вашого бізнесу. Про різницю між лендінгом і сайтом можете детальніше почитати тут (посилання на це питання і відповідь)",
                    ],
                },
                {
                    title: "Підбір команди",
                    text: [
                        "У нас представлені багато спеціалістів різного напрямку та рівня. В залежності від вашої потреби Менеджер підкаже вам оптимальний склад команди або ви можете обрати собі людей в команду самостійно.",
                    ],
                },
                {
                    title: "Вибір дизайну та функціоналу",
                    text: [
                        "Це залежить від ваших вподобань та специфіки вашого бізнесу.",
                        "В першу чергу ми попросимо у вас посилання на сайти, які вам подобаються  (це називається референси), щоб зрозуміти ваш смак та очікування.",
                        "Які кольори, шрифти та стиль найкраще відповідатимуть вашому бренду? Чи потрібна вам можливість онлайн-платежів, інтеграція з соціальними мережами? Як часто ви хочете змінювати контент на своєму сайті? Скільки відвідувачів плануєте залучати на сайт за день/місяць? і т.д. - відповіді на всі ці запитання мають велике значення!",
                    ],
                },
                {
                    title: "Розробка контенту",
                    text: [
                        "Збирання та підготовка контенту для сайту, включаючи текст, зображення, відео та інші матеріали - ми попросимо вас надати нам частину контенту одразу, щоб красиво і грамотно розмістити його на сайті з урахуванням ваших цілей та правил дизайну і розробки.",
                        "Якщо ви не маєте власного контенту (текстів, фото, відео і т.д.), то ми можемо залучити контент мейкера за окрему плату або працювати з вашими партнерами чи співробітниками і допомогти створити цей контент для вашого сайту.",
                    ],
                },
                {
                    title: "Розробка та тестування",
                    text: [
                        "Розробка та налаштування сайту, включаючи його кодування, інтеграцію функціоналу та тестування на різних пристроях та браузерах.",
                        "Для початку ми з вами визначимо для яких пристроїв нам потрібно буде розробляти сайт (мобільні телефони, планшети, лептопи, проектори або великі екрани для презентації на виставках/конференціях), чи для всіх цих перерахованих?",
                        "Для яких девайсів будемо робити основну адаптацію - iOS чи Android?",
                        "В яких браузерів треба передбачити тестування (Google Chrome, Firefox, Edge, Safari) чи всіх разом узятих?",
                    ],
                },
                {
                    title: "Запуск та підтримка",
                    text: [
                        "Після успішного тестування ми готові запустити ваш сайт та надати підтримку для подальшого вдосконалення та розвитку.",
                        "Ми також надаємо консультації та допомогу у виборі доменного імені та хостингу сайту на провайдері, підборі потужностей сервера або хмари для розміщення сайту.",
                    ],
                },
            ],
            fullAnswerBottomText:
                "Ми готові взяти на себе всі труднощі розробки та допомогти вам створити ідеальний сайт для вашого бізнесу і отримати задоволення від співпраці в процесі його розробки і запуску.",
        },
        pl: {
            questionText: "Potrzebuję strony internetowej. Od czego zacząć?",
            answerText:
                "Zacznij od szczerej odpowiedzi na następujące pytania: Dlaczego potrzebuję strony internetowej? Czego oczekuję od strony internetowej? Co ja chcę na niej demonstrować? Komu chcę to demonstrować? I co powinni zrobić ci, którzy odwiedzą moją stronę? Odpowiedzi na te pytania pomogą ci zrozumieć, czy w ogóle potrzebujesz strony internetowej i jak powinna ona wyglądać. Następnie wypełnij formularz — Zamówić i prześlij nam swoje szczere odpowiedzi, a my zrobimy wszystko z troską o Twoje cele i potrzeby biznesowe.",
            imageAltText: "Potrzebuję strony internetowej. Od czego zacząć?",
            fullAnswerTopText:
                "Jeśli potrzebujesz strony internetowej, pierwszym krokiem jest wyraźne określenie swoich celów i oczekiwań wobec strony. Zrozumienie celu pomoże określić, jaki rodzaj strony jest Ci potrzebny. Tworzenie własnej strony internetowej może wydawać się skomplikowanym, ale jesteśmy gotowi pomóc Ci krok po kroku. Ponieważ jesteśmy zespołem, który dba o Twoje potrzeby. Poniżej znajdują się główne kroki:",
            fullAnswerList: [
                {
                    title: "Omówienie celów",
                    text: [
                        "Zaczniemy od omówienia Twoich celów i potrzeb. Co chcesz osiągnąć za pomocą strony? Kim jest Twoja grupa docelowa? Kto będzie korzystał z Twojej strony i czego te osoby będą na niej szukać? Jakie są Twoje wymagania i oczekiwania?",
                    ],
                },
                {
                    title: "Określenie rodzaju strony",
                    text: [
                        "Ważne jest, aby określić, czy chcesz mieć stronę docelową, czy pełnoprawną stronę internetową dla swojej firmy. Możesz przeczytać więcej o różnicy między stroną docelową a stroną internetową tutaj (link do tego pytania i odpowiedzi).",
                    ],
                },
                {
                    title: "Dobór zespołu",
                    text: [
                        "Mamy wielu specjalistów o różnych kierunkach i poziomach. W zależności od potrzeb menedżer zaproponuje optymalny skład zespołu lub możesz wybrać własnych członków zespołu.",
                    ],
                },
                {
                    title: "Wybór projektu i funkcjonalności",
                    text: [
                        "Zależy to od Twoich preferencji i specyfiki Twojego biznesu",
                        "Przede wszystkim poprosimy Cię o linki do stron internetowych, które Ci się podobają (nazywamy je referencjami), aby zrozumieć Twój gust i oczekiwania.",
                        "Jakie kolory, czcionki i styl najlepiej odpowiadają Twojej marce? Czy potrzebujesz opcji płatności online i integracji z mediami społecznościowymi? Jak często chcesz zmieniać treści na swojej stronie? Ilu odwiedzających planujesz przyciągać na stronę dziennie/miesięcznie? itd. - odpowiedzi na wszystkie te pytania mają ogromne znaczenie!",
                    ],
                },
                {
                    title: "Tworzenie treści",
                    text: [
                        "Zbieranie i przygotowywanie treści na stronę, w tym tekstu, obrazów, filmów i innych materiałów — poprosimy Cię o dostarczenie nam części treści od razu, aby umieścić je na stronie w estetyczny i profesjonalny sposób, biorąc pod uwagę Twoje cele oraz zasady projektowania i rozwoju",
                        "Jeśli nie masz własnych treści (tekstów, zdjęć, filmów itp.), możemy zaangażować twórcę treści za dodatkową opłatą lub współpracować z Twoimi partnerami, lub pracownikami, aby pomóc w tworzeniu tych treści dla Twojej strony.",
                    ],
                },
                {
                    title: "Rozwój i testowanie",
                    text: [
                        "Rozwój i konfiguracja strony internetowej, w tym kodowanie, integracja funkcjonalności i testowanie na różnych urządzeniach i przeglądarkach.",
                        "Na początku ustalimy, dla jakich urządzeń potrzebujemy rozwijać stronę (smartfony, tablety, laptopy, projektory lub duże ekrany do prezentacji na wystawach/konferencjach), czy dla wszystkich wymienionych?",
                        "Dla jakich urządzeń dokonamy głównej adaptacji —  iOS czy Android?",
                        "W jakich przeglądarkach należy przewidzieć testowanie (Google Chrome, Firefox, Edge, Safari), czy wszystkie?",
                    ],
                },
                {
                    title: "Uruchomienie i wsparcie",
                    text: [
                        "Po udanych testach jesteśmy gotowi do uruchomienia strony i zapewnienia wsparcia w zakresie dalszych ulepszeń i rozwoju.",
                        "Zapewniamy również konsultacje i pomoc w wyborze nazwy domeny i dostawcy hostingu na stronie, wybierając pojemność serwera lub chmury do hostingu strony.",
                    ],
                },
            ],
            fullAnswerBottomText:
                "Jesteśmy gotowi zająć się wszystkimi trudnościami związanymi z rozwojem i pomóc Ci stworzyć idealną stronę internetową dla Twojego biznesu i cieszyć się współpracą w procesie jej rozwoju i uruchamiania.",
        },
        en: {
            questionText: "I need a website. Where should I start?",
            answerText:
                "Start by answering the following questions honestly: “Why do I need a website? What do I expect from the website? What am I going to show on it? Who do I want to show it to? And what should those who visit my site do?” Answers to these questions will help you understand whether you need a website at all and what it should look like. And then fill out the Order form and send us your honest answers, and we will do everything with care for your goals and the needs of your business.",
            imageAltText: "I need a website. Where should I start?",
            fullAnswerTopText:
                "If you need a website, the first step is to clearly define your goals and expectations for the website. Understanding your goals will help you determine what type of website you need. Developing your own website may seem complex , but we are here to help you step by step, because we are a team that cares about your needs. Below are the main steps:",
            fullAnswerList: [
                {
                    title: "Goal discussion",
                    text: [
                        "We start by discussing your goals and needs. What do you want to achieve with your website? Who is your target audience? Who will use your website,  and what will they be looking for on it? What are your requirements and expectations?",
                    ],
                },
                {
                    title: "Defining the type of website",
                    text: [
                        "It is important to decide whether you need a landing page or a full-fledged website for your business. You can read more about the difference between a landing page and a website here (link to this question and answer).",
                    ],
                },
                {
                    title: "Team selection",
                    text: [
                        "We have a wide range of specialists across different fields and levels of expertise. Depending on your needs, the manager will recommend the best team configuration, or you can choose your team members on your own.",
                    ],
                },
                {
                    title: "Design and functionality selection",
                    text: [
                        "It depends on your preferences and the specifics of your business.",
                        "First, we will ask you for links to websites you like (these are called references) to understand your taste and expectations.",
                        "Which colors, fonts, and style best match your brand? Do you need online payment options, social media integration? How often do you plan to update the content on your website? How many visitors do you plan to attract to your website per day/month? Answers to all these questions are of great importance!",
                    ],
                },
                {
                    title: "Content development",
                    text: [
                        "Collecting and preparing content for the website, including text, images, videos and other materials — we will ask you to provide some of the content upfront so we can place it on the site beautifully and effectively, considering your goals and design/development principles.",
                        "If you don't have your content (texts, photos, videos, etc.), we can engage a content maker for a fee or work with your partners or employees to help create this content for your website.",
                    ],
                },
                {
                    title: "Development and testing",
                    text: [
                        "Development and customization of the website, including coding, integration of functionality and testing on different devices and browsers.",
                        "First, we will determine which devices the website needs to be developed for (mobile phones, tablets, laptops, projectors, large screens for presentations at exhibitions/conferences, or all of the above?).",
                        "Which devices will we prioritize for optimization—iOS or Android?",
                        "Which browsers should we ensure compatibility with (Google Chrome, Firefox, Edge, Safari) or all of them?",
                    ],
                },
                {
                    title: "Launch and support:",
                    text: [
                        "After successful testing, we will be ready to launch your website and provide ongoing support for further improvement and growth.",
                        "We also offer consultation and assistance in choosing a domain name, website hosting provider, and selecting the appropriate server or cloud resources for hosting the site.",
                    ],
                },
            ],
            fullAnswerBottomText:
                "We are ready to handle all the complexities of development and help you create the perfect website for your business, while ensuring an enjoyable collaboration throughout the process.",
        },
    },
    {
        data: {
            slug: "what-to-choose-a-landing-page-or-a-website",
            image: "https://drive.google.com/uc?export=view&id=1o9hzaeKZBawBuDxNSK4SUXpgoG8YiaGN",
            likes: 0,
            layout: 2,
        },
        ua: {
            questionText: "Що обрати - лендінг чи повноцінний сайт?",
            answerText:
                "Це залежить від того яку задачу ви намагаєтесь вирішити. Якщо потрібно презентувати якусь одну послугу або товар, якщо результат потрібен швидко, а бюджет на розробку невеликий - то краще обрати лендінг. Якщо ви маєте широкий спектр товарів або послуг, або бажаєте презентувати компанію та надати велику кількість інформації для потенційних клієнтів - то краще обрати повноцінний сайт.",
            imageAltText: "Що обрати - лендінг чи повноцінний сайт?",
        },
        pl: {
            questionText: "Co wybrać - landing page czy stronę internetową?",
            answerText:
                "To zależy od tego, jakie zadanie próbujesz rozwiązać. W przypadku, gdy potrzebujesz zaprezentować jakąś jedną usługę lub towar, gdy potrzebujesz szybkiego rezultatu, a budżet na rozwój jest niewielki, to lepiej wybrać landing. W przypadku, gdy masz szeroki asortyment towarów lub usług, lub pragniesz zaprezentować swoją firmę i nadać dużo informacji potencjalnym klientom, lepiej wybrać pełnoprawną stronę internetową.",
            imageAltText: "Co wybrać - landing page czy stronę internetową?",
        },
        en: {
            questionText: "What to choose - a landing page or a website?",
            answerText:
                "It depends on the task you are trying to solve. If you need to present a single service or product, if you need the result quickly, and the development budget is small, it is better to choose a landing page. If you have a wide range of goods or services, or want to present your company and provide a lot of information for potential customers, it is better to choose a website.",
            imageAltText: "What to choose - a landing page or a website?",
        },
    },
    {
        data: {
            slug: "what-are-the-terms-of-the-development-of-the-fully-functional-website",
            image: "https://drive.google.com/uc?export=view&id=1jnZ9vPmhZchmQY6eeJklz_8bvQM2a9b4",
            likes: 0,
            layout: 1,
        },
        ua: {
            questionText: "Які терміни розробки готового продукту?",
            answerText:
                "Залежить від складності та складу команди. Розробка лендінгу із стандартизованим функціоналом та простим дизайном може зайняти від 2 до 6 тижнів. Розробка сайту на 10 сторінок із формами реєстрації, авторизації, замовленням товарів та оплатою може зайняти від 4 до 8 місяців, в залежності від дизайну та наповнення.",
            imageAltText: "Які терміни розробки готового продукту?",
        },
        pl: {
            questionText: "Ile trwa stworzenie strony internetowej?",
            answerText:
                "Zależy to od złożoności i składu zespołu. Opracowanie strony landing page ze standardową funkcjonalnością i prostym projektem może zająć od 2 do 6 tygodni. Opracowanie 10-stronicowej strony internetowej z formularzami rejestracji, autoryzacji, zamówień i płatności może zająć od 4 do 8 miesięcy, w zależności od projektu i zawartości.",
            imageAltText: "Ile trwa stworzenie strony internetowej?",
        },
        en: {
            questionText:
                "What are the terms of the development of the fully functional website?",
            answerText:
                "It depends on the complexity and composition of the team. Developing a landing page with standardized functionality and a simple design can take from 2 to 6 weeks. Developing a 10-page website with registration forms, authorization, product ordering, and payment can take from 4 to 8 months, depending on the design and content.",
            imageAltText:
                "What are the terms of the development of the fully functional website?",
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
            answerText:
                "В залежності від об’єму та складності продукту орієнтовний бюджет на лендінг від 500 доларів. Вартість сайту до 10 сторінок орієнтовно від 800 доларів. Вартість розробки інтернет-магазину на 20-30 продуктів та оплатою на сайті від 1600 доларів. Якщо ви бажаєте отримати оцінку вартості розробки сайту, рекомендуємо зв'язатися з Менеджером продукту та обговорити з ним/нею всі деталі. Після цього ми зможемо скласти для вас комерційну пропозицію, в якій буде вказана приблизна вартість розробки вашого сайту та терміни виконання.",
            imageAltText: "Скільки коштує розробка?",
        },
        pl: {
            questionText:
                "Ile kosztuje stworzenie strony internetowej lub sklepu internetowego?",
            answerText:
                "W zależności od wielkości i złożoności produktu, przybliżony budżet na landing page wynosi od 500$. Koszt strony internetowej do 10 stron wynosi około 800 USD. Koszt stworzenia sklepu internetowego na 20-30 produktów z płatnościami online wynosi od 1600 USD. Jeśli chcesz uzyskać wycenę kosztów stworzenia strony internetowej, zalecamy skontaktowanie się z Product Managerem i omówienia z nim wszystkich szczegółów. Następnie będziemy mogli przygotować dla Ciebie ofertę handlową, która wskaże przybliżony koszt stworzenia Twojej strony internetowej i terminy realizacji.",
            imageAltText:
                "Ile kosztuje stworzenie strony internetowej lub sklepu internetowego?",
        },
        en: {
            questionText: "How much does development cost?",
            answerText:
                "Depending on the volume and complexity of the product, the approximate budget for a landing page is from $500. The cost of a website up to 10 pages is approximately 800 dollars. The cost of developing an online store with 20-30 products and online payment is from $1600. If you want to get an estimate of the cost of developing a website, we recommend you to contact the Product Manager and discuss all the details with him/her. After that, we will be able to make a commercial offer for you, which will indicate the approximate cost of developing your website and the terms of implementation",
            imageAltText: "How much does development cost?",
        },
    },
    {
        data: {
            slug: "can-i-choose-which-team-will-work-on-my-order",
            image: "https://drive.google.com/thumbnail?id=1Id6dTkkWbiw95v8hEiaRd4wu2luqIsOc",
            likes: 0,
        },
        ua: {
            questionText:
                "Чи можу я самостійно обрати, яка команда працюватиме над моїм замовленням?",
            answerText:
                "Так, ви можете вибрати окремих спеціалістів і сформувати команду самостійно. В такому випадку наполегливо рекомендуємо спочатку звернутись за консультацією до менеджера. Якщо ви потребуєте окремого спеціаліста на погодинні роботи з вашим уже існуючим продуктом - зв’яжіться зі спеціалістом через його телеграм або лінкедін.",
            imageAltText:
                "Чи можу я самостійно обрати, яка команда працюватиме над моїм замовленням?",
        },
        pl: {
            questionText:
                "Czy mogę wybrać zespół, który będzie pracował nad moją stroną internetową?",
            answerText:
                "Tak, możesz wybrać poszczególnych specjalistów i samodzielnie stworzyć zespół. W takim przypadku zdecydowanie zalecamy skontaktowanie się najpierw z menedżerem w celu uzyskania porady. Jeśli potrzebujesz oddzielnego specjalisty do pracy z istniejącym produktem na godziny, skontaktuj się z nim za pośrednictwem jego telegramu lub LinkedIn.",
            imageAltText:
                "Czy mogę wybrać zespół, który będzie pracował nad moją stroną internetową?",
        },
        en: {
            questionText: "Can I choose which team will work on my order?",
            answerText:
                "Yes, you can choose individual specialists and form a team on your own. In this case, we strongly recommend that you first contact your manager for advice. If you need a dedicated specialist for hourly work with your existing product, please contact the specialist via their telegram or LinkedIn.",
            imageAltText: "Can I choose which team will work on my order?",
        },
    },
];
