import { ServiceContentType } from "./servicesData";

interface LangChristmasDataType {
    conditions: ServiceContentType;
}

interface ChristmasDataType {
    ua: LangChristmasDataType;
    en: LangChristmasDataType;
    pl: LangChristmasDataType;
}

export const christmasData: ChristmasDataType = {
    ua: {
        conditions: {
            layout: 1,
            title: "Правила участі у розіграші лендінгу",
            description: [
                {
                    title: "Організатор",
                    text: "Цей розіграш організовано командоюi love my team, яка спеціалізується на створенні сучасних вебсайтів, що допомагають бізнесу зростати.",
                },
                {
                    title: "Що розігрується?",
                    text: "Переможець розіграшу отримає в подарунок дизайн та розробку лендінгу, згідно до затверджених вимог.",
                },
                {
                    title: "Терміни проведення",
                    text: [
                        {
                            text: "Старт: 23 грудня 2024 року",
                            type: "listItem",
                        },
                        {
                            text: "Завершення подання заявок: 31 грудня 2024 року о 23:59",
                            type: "listItem",
                        },
                        {
                            text: "Оголошення результатів: 2 січня 2025 року",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "Як взяти участь?",
                    text: [
                        {
                            text: "Заповніть анкету, обов'язково вказавши ім'я, електронну пошту, посилання на соц мережі та сферу діяльності.",
                            type: "numListItem ",
                        },
                        {
                            text: "Надішліть анкету нам через визначену форму.",
                            type: "numListItem ",
                        },
                    ],
                },
                {
                    title: "Умови участіі",
                    text: [
                        {
                            text: "Участь у розіграші можуть брати лише особи старше 18 років.",
                            type: "listItem",
                        },
                        {
                            text: "Один учасник може надіслати лише одну анкету.",
                            type: "listItem",
                        },
                        {
                            text: "Анкети, надіслані після 31.12 участі у розіграші брати не будуть.",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "Як обирається переможець?",
                    text: "Переможець буде обраний випадковим чином за допомогою онлайн-рандомайзера.",
                },
                {
                    title: "Результати",
                    text: "Результати розіграшу будуть оголошені на сторінці *link=`https://www.linkedin.com/in/susanna-salata/`*Susanna Salata*/link* 2 січня 2025 року. Ми зв’яжемося з переможцем через дані, залишені у формі.",
                },
                {
                    title: "Важливо!",
                    text: [
                        {
                            text: "Участь у розіграші є безкоштовною.",
                            type: "listItem",
                        },
                        {
                            text: "Подаючи анкету, учасник погоджується з обробкою своїх персональних даних відповідно до *link={policyUrl}*Політики конфіденційності*/link*",
                            type: "listItem",
                        },
                    ],
                },
            ],
        },
    },
    en: {
        conditions: {
            layout: 1,
            title: "Rules of participation in the landing page drawing",
            description: [
                {
                    title: "Organizer",
                    text: "This prize draw is organized by i love my team, which specializes in creating modern websites that help businesses grow.",
                },
                {
                    title: "What is being given away?",
                    text: "The winner will receive a landing page design and development as a gift, according to the approved requirements.",
                },
                {
                    title: "Terms of the contest",
                    text: [
                        {
                            text: "Start Date: December 23, 2024",
                            type: "listItem",
                        },
                        {
                            text: "Application deadline: December 31, 2024 at 23:59",
                            type: "listItem",
                        },
                        {
                            text: "Winner Announcement:: January 2, 2025",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "How to participate?",
                    text: [
                        {
                            text: "Fill out the application form, making sure to include your name, email, social media links, and field of activity.",
                            type: "numListItem ",
                        },
                        {
                            text: "Submit the form to us via the designated submission method.",
                            type: "numListItem ",
                        },
                    ],
                },
                {
                    title: "Terms of participation",
                    text: [
                        {
                            text: "Only individuals aged 18 and older are eligible to participate in the draw.",
                            type: "listItem",
                        },
                        {
                            text: "One participant can send only one application form.",
                            type: "listItem",
                        },
                        {
                            text: "Applications submitted after December 31, 2024 will not be taken into account.",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "How is the winner selected?",
                    text: "The winner will be chosen randomly using an online randomizer.",
                },
                {
                    title: "Results",
                    text: "The results of the draw will be announced on *link=`https://www.linkedin.com/in/susanna-salata/`*Susanna Salata*/link* on January 2, 2025. We will contact the winner using the information provided in the form.",
                },
                {
                    title: "Important!",
                    text: [
                        {
                            text: "Participation in the draw is free of charge.",
                            type: "listItem",
                        },
                        {
                            text: "By submitting the form, the participant agrees to the processing of his/her personal data in accordance with *link={policyUrl}*the Privacy Policy*/link*",
                            type: "listItem",
                        },
                    ],
                },
            ],
        },
    },
    pl: {
        conditions: {
            layout: 1,
            title: "Zasady udziału w losowaniu landing page",
            description: [
                {
                    title: "Organizator",
                    text: "Losowanie jest organizowane przez zespół i love my team, który specjalizuje się w tworzeniu nowoczesnych stron internetowych pomagających rozwijać biznes.",
                },
                {
                    title: "Co jest do wygrania?",
                    text: "Zwycięzca losowania otrzyma w prezencie projekt i wykonanie strony docelowej, zgodnie z zatwierdzonymi wymaganiami.",
                },
                {
                    title: "Harmonogram",
                    text: [
                        {
                            text: "Start: 23 grudnia 2024 r.",
                            type: "listItem",
                        },
                        {
                            text: "Termin zgłoszeń: 31 grudnia 2024 r. o godz. 23:59",
                            type: "listItem",
                        },
                        {
                            text: "Ogłoszenie wyników: 2 stycznia 2025 r.",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "Jak wziąć udział?",
                    text: [
                        {
                            text: "Wypełnij formularz zgłoszeniowy, pamiętaj o podaniu imienia, adresu e-mail, linków do mediów społecznościowych oraz branży działalności.",
                            type: "numListItem ",
                        },
                        {
                            text: "Prześlij formularz za pomocą wskazanego sposobu.",
                            type: "numListItem ",
                        },
                    ],
                },
                {
                    title: "Warunki uczestnictwa",
                    text: [
                        {
                            text: "W losowaniu mogą wziąć udział wyłącznie osoby, które ukończyły 18 lat.",
                            type: "listItem",
                        },
                        {
                            text: "Każdy uczestnik może wysłać tylko jeden formularz zgłoszeniowy.",
                            type: "listItem",
                        },
                        {
                            text: "Formularze przesłane po 31 grudnia 2024 r. nie będą brane pod uwagę.",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "Jak wybierany jest zwycięzca?",
                    text: "Zwycięzca zostanie wybrany losowo za pomocą internetowego narzędzia losującego.",
                },
                {
                    title: "Wyniki",
                    text: "Wyniki losowania zostaną ogłoszone na stronie  *link=`https://www.linkedin.com/in/susanna-salata/`*Susanna Salata*/link* w dniu 2 stycznia 2025 roku. Skontaktujemy się ze zwycięzcą za pośrednictwem danych podanych w formularzu.",
                },
                {
                    title: "Ważne!",
                    text: [
                        {
                            text: "Udział w losowaniu jest bezpłatny.",
                            type: "listItem",
                        },
                        {
                            text: "Przesyłając formularz, uczestnik wyraża zgodę na przetwarzanie swoich danych osobowych zgodnie z *link={policyUrl}*Polityką prywatności*/link*",
                            type: "listItem",
                        },
                    ],
                },
            ],
        },
    },
};
