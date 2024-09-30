type QAData = {
    slug: string;
    image?: string;
    likes: number;
};

type QAItemTextTranslation = {
    questionText: string;
    answerText: string;
    imageAltText: string;
};

export type QAItem = {
    data: QAData;
    ua: QAItemTextTranslation;
    pl: QAItemTextTranslation;
    en: QAItemTextTranslation;
};

export const questionsData: QAItem[] = [
    {
        data: {
            slug: "i-need-a-website-where-should-i-start",
            image: "https://drive.google.com/thumbnail?id=15mebCQZv4FAgQYinrxpVGDljlHsSWflz",
            likes: 0,
        },
        ua: {
            questionText: "Мені потрібен сайт. З чого мені почати?",
            answerText:
                "Почніть з чесної відповіді на такі питання “Навіщо мені сайт? Чого я очікую від сайту? Що я буду на ньому показувати? Кому я хочу це показати? І що повинні зробити ті, хто відвідають мій сайт?”. Відповіді на ці питання дають розуміння, чи потрібен вам взагалі сайт і яким він повинен бути. А потім заповніть форму “Замовити” і надішліть нам ваші чесні відповіді, і ми все зробимо з турботою про ваші цілі та потреби вашого бізнесу.",
            imageAltText: "Мені потрібен сайт. З чого мені почати?",
        },
        pl: {
            questionText: "Potrzebuję strony internetowej. Od czego zacząć?",
            answerText:
                "Zacznij od szczerej odpowiedzi na następujące pytania: Dlaczego potrzebuję strony internetowej? Czego oczekuję od strony internetowej? Co ja chcę na niej demonstrować? Komu chcę to demonstrować? I co powinni zrobić ci, którzy odwiedzą moją stronę? Odpowiedzi na te pytania pomogą ci zrozumieć, czy w ogóle potrzebujesz strony internetowej i jak powinna ona wyglądać. Następnie wypełnij formularz — Zamówić i prześlij nam swoje szczere odpowiedzi, a my zrobimy wszystko z troską o Twoje cele i potrzeby biznesowe.",
            imageAltText: "Potrzebuję strony internetowej. Od czego zacząć?",
        },
        en: {
            questionText: "I need a website. Where should I start?",
            answerText:
                "Start by answering the following questions honestly: “Why do I need a website? What do I expect from the website? What am I going to show on it? Who do I want to show it to? And what should those who visit my site do?” Answers to these questions will help you understand whether you need a website at all and what it should look like. And then fill out the Order form and send us your honest answers, and we will do everything with care for your goals and the needs of your business.",
            imageAltText: "I need a website. Where should I start?",
        },
    },
    {
        data: {
            slug: "what-to-choose-a-landing-page-or-a-website",
            image: "https://drive.google.com/thumbnail?id=1o9hzaeKZBawBuDxNSK4SUXpgoG8YiaGN",
            likes: 0,
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
            image: "https://drive.google.com/thumbnail?id=1jnZ9vPmhZchmQY6eeJklz_8bvQM2a9b4",
            likes: 0,
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
            image: "https://drive.google.com/thumbnail?id=1Uf5y1CrKIcVFOZXf5wC8LPTxAHEpF5Ec",
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
