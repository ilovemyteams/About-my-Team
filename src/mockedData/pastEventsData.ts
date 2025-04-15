type EventItem = {
    title: string;
    description: string[];
    date?: string;
};

export type EventData = {
    event: string;
    ua: EventItem;
    pl: EventItem;
    en: EventItem;
};

type PastEventsData = EventData[];

export const pastEventsData: PastEventsData = [
    {
        event: "easter2025",
        ua: {
            title: "Великодній івент: знижки та безкоштовний лендінг!",
            description: [
                `До цього світлого дня на нашому сайті ми запустили дві активності: на сторінці подій можна було отримати сертифікат-знижку номіналом $100 на створення індивідуального лендінгу, а на головній сторінці користувачів чекала інтерактивна гра «Знайди 20 яєць — виграй безкоштовний лендінг!».`,
                "У розіграші, що відбувся 21 квітня, переможцем стала/став TODOwho! Вітаємо щасливчика/щасливицю та дякуємо всім за участь!",
            ],
            date: "20.04.2025",
        },
        pl: {
            title: "Easter Event: Discounts & a Free Landing Page!",
            description: [
                "Z okazji tych radosnych świąt uruchomiliśmy na naszej stronie dwie aktywności: na stronie wydarzeń można było otrzymać kupon zniżkowy o wartości 100 USD na stworzenie indywidualnego landing page’a, na stronie głównej użytkownicy mogli zagrać w interaktywną grę „Znajdź 20 jajek — wygraj darmowy landing page!”",
                `W losowaniu, które odbyło się 21 kwietnia, zwycięzcą została/został TODOwho! Gratulujemy szczęśliwemu zwycięzcy i dziękujemy wszystkim za udział!`,
            ],
            date: "20.04.2025",
        },
        en: {
            title: "Easter Event: Discounts & a Free Landing Page!",
            description: [
                `To celebrate this joyful occasion, we launched two special activities on our website: On the Events page, users could grab a $100 discount certificate for a custom landing page. Meanwhile, on the Home page, visitors joined a fun interactive game — "Find 20 Eggs – Win a Free Landing Page!"`,
                `The prize draw took place on April 21, and the lucky winner was TODOwho! Congratulations to the winner, and a big thank you to everyone who took part!`,
            ],
            date: "20.04.2025",
        },
    },
    {
        event: "valentine2025",
        ua: {
            title: "День Святого Валентина ",
            description: [
                "До цього свята ми підготували для гостей сайту веселі гумористичні Валентинки та сертифікат на $50, який можна було використати для часткової оплати будь-якої з наших послуг.",
                "Головна сторінка та сторінка подій засяяли святковими декораціями. Родзинкою стала інтерактивна анімація отримання сертифіката – після натискання кнопки «Отримати сертифікат» він ефектно вилітав із серця, розбитого стрілою Купідона.",
            ],
            date: "14.02.2025",
        },
        pl: {
            title: "Walentynki",
            description: [
                "Na to święto przygotowaliśmy dla naszych gości zabawne, humorystyczne kartki walentynkowe oraz certyfikat o wartości 50 $, który można było wykorzystać na częściową zapłatę za dowolną z naszych usług.",
                `Główna strona i strona wydarzeń zyskały walentynkowe dekoracje. Największą atrakcją była interaktywna animacja otrzymania certyfikatu – po kliknięciu przycisku „Odbierz certyfikat” efektownie wylatywał on z serca przebitego strzałą Kupida.`,
            ],
            date: "14.02.2025",
        },
        en: {
            title: "Valentine's Day",
            description: [
                "For this holiday, we prepared fun and humorous Valentine's cards for our website visitors, along with a $50 certificate that could be used for partial payment of any of our services.",
                `The highlight was an interactive animation of receiving the certificate – after clicking the "Get Certificate" button, it would impressively fly out of a heart pierced by Cupid's arrow.`,
            ],
            date: "02.14.2025",
        },
    },
    {
        event: "christmas2024",
        ua: {
            title: "Різдвяний івент: листівки, знижки та головний приз!",
            description: [
                "На Різдво ми створили святковий настрій для наших клієнтів: на сторінці івентів можна було обрати одну з привітальних листівок, поділитися нею у соцмережах, отримати знижку на наші послуги та стати учасником розіграшу головного призу.",
                "2 січня 2025 року відбувся розіграш, і щасливим переможцем став Олександр Чудов! Головний приз — розробка індивідуального лендінгу, який ми створимо для Олександра до 28 лютого 2025 року. Вітаємо і дякуємо всім, хто взяв участь у нашому івенті!",
            ],
            date: "25.12.2024",
        },
        pl: {
            title: "Świąteczny event: kartki, rabaty i nagroda główna!",
            description: [
                "Na święta Bożego Narodzenia stworzyliśmy świąteczny nastrój dla naszych klientów: na stronie wydarzenia można było wybrać jedną z kartek z życzeniami, udostępnić ją w mediach społecznościowych, otrzymać zniżkę na nasze usługi i wziąć udział w losowaniu nagrody głównej.",
                "2 stycznia 2025 roku odbyło się losowanie, a szczęśliwym zwycięzcą został Oleksandr Chudov! Nagroda główna to stworzenie indywidualnej strony landingowej, którą przygotujemy dla Oleksandra do 28 lutego 2025 roku. Gratulujemy i dziękujemy wszystkim, którzy wzięli udział w naszym wydarzeniu!",
            ],
            date: "25.12.2024",
        },
        en: {
            title: "Christmas Event: Cards, Discounts, and the Grand Prize!",
            description: [
                "This Christmas, we created a festive mood for our clients: on the event page, participants could choose a greeting card, share it on social media, receive a discount on our services, and join the grand prize draw.",
                "On January 2nd, 2025, the draw took place, and the lucky winner was Oleksandr Chudov! The grand prize is the development of a custom landing page, which we will create for Oleksandr by February 28, 2025. Congratulations and thank you to everyone who participated in our event!",
            ],
            date: "12.25.2024",
        },
    },
    {
        event: "halloween2024",
        ua: {
            title: "Хелловінський івент з подарунком!",
            description: [
                'На нашому сайті ми сховали 42 гарбузики та провели квест "Знайди гарбузик"! Учасники мали знайти їх і надіслати відповідь через форму замовлення. 2 листопада ми оголосили результати! Найкращою шукачкою стала Олена, яка отримала чудовий подарунок — безкоштовну консультацію з аналізу резюме та профілю в LinkedIn від професійної менторки Сусанни Салати. Вітаємо переможницю!',
            ],
            date: "31.10.2024",
        },
        pl: {
            title: "Halloweenowy event z prezentem!",
            description: [
                "Na naszej stronie ukryliśmy 42 małe dynie i zorganizowaliśmy quest „Znajdź dynię”! Uczestnicy mieli za zadanie je znaleźć i przesłać odpowiedzi za pomocą formularza zamówienia. 2 listopada ogłosiliśmy wyniki! Najlepszą poszukiwaczką została Olena, która otrzymała fantastyczną nagrodę — bezpłatną konsultację dotyczącą analizy CV i profilu na LinkedIn od profesjonalnej mentorki Susanny Salaty. Gratulujemy zwyciężczyni!",
            ],
            date: "31.10.2024",
        },
        en: {
            title: "Halloween Event with a Gift!",
            description: [
                "We hid 42 little pumpkins on our website and launched the quest “Find the Pumpkin”! Participants had to locate them and submit their answers via the order form. On November 2nd, we announced the results! The best pumpkin hunter was Olena, who won a fantastic prize — a free consultation on resume and LinkedIn profile analysis by professional mentor Susanna Salata. Congratulations to the winner!",
            ],
            date: "10.31.2024",
        },
    },
];
