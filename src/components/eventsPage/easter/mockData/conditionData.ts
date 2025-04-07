import { ServiceContentType } from "@/src/mockedData/servicesData";

interface LangConditionDataType {
    conditions: ServiceContentType;
}

interface ConditionaDataType {
    ua: LangConditionDataType;
    en: LangConditionDataType;
    pl: LangConditionDataType;
}

export const conditionsData: ConditionaDataType = {
    ua: {
        conditions: {
            layout: 1,
            title: "Правила участі у розіграші лендінгу",
            description: [
                {
                    title: "Організатор",
                    text: "Цей розіграш організовано командою i love my team, яка спеціалізується на створенні сучасних вебсайтів, що допомагають бізнесу зростати.",
                },
                {
                    title: "Що розігрується?",
                    text: "Переможець розіграшу отримає в подарунок дизайн та розробку лендінгу, згідно до затверджених вимог.",
                },
                {
                    title: "Терміни проведення",
                    text: [
                        {
                            text: "Старт: 14 квітня 2025 року.",
                            type: "listItem",
                        },
                        {
                            text: "Завершення подання заявок: 20 квітня 2025 року о 23:59.",
                            type: "listItem",
                        },
                        {
                            text: "Оголошення результатів: 21 квітня 2025 року о 19:00 за Києвом.",
                            type: "listItem",
                        },
                        {
                            text: "Всі знижки та сертифікати дійсні до 01 червня 2025 року.",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "Як взяти участь?",
                    text: [
                        {
                            text: "Знайдіть всі яйця на головній сторінці.",
                            type: "numListItem ",
                        },
                        {
                            text: "Заповніть та відправте форму для участі.",
                            type: "numListItem ",
                        },
                    ],
                },
                {
                    title: "Умови участі",
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
                            text: "Анкети надіслані після дедлайну (20.04.2025) не будуть розглянуті.",
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
                    text: "Результати розіграшу будуть оголошені на сторінці *link=`https://www.linkedin.com/in/susanna-salata/`*Susanna Salata*/link* 22 квітня 2025 року. Ми зв’яжемося з переможцем через дані, залишені у формі.",
                },
                {
                    title: "Важливо!",
                    text: [
                        {
                            text: "Участь у розіграші є безкоштовною.",
                            type: "listItem",
                        },
                        {
                            text: "Подаючи анкету, учасник погоджується з обробкою своїх персональних даних відповідно до *link=`${policyUrl}`*Політики конфіденційності*/link*.",
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
                    title: "Dates of the event",
                    text: [
                        {
                            text: "Start Date: April 14, 2025.",
                            type: "listItem",
                        },
                        {
                            text: "Application deadline: April 20, 2025 by 23:59 (Kyiv time).",
                            type: "listItem",
                        },
                        {
                            text: "Results Announcement: April 21, 2025, at 19:00 (Kyiv time).",
                            type: "listItem",
                        },
                        {
                            text: "All discounts and certificates are valid until June 01, 2025.",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "How to participate?",
                    text: [
                        {
                            text: "Find all the eggs on the homepage.",
                            type: "numListItem ",
                        },
                        {
                            text: "Fill out the form, and submit it.",
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
                            text: "Applications submitted after the deadline (April 20, 2025) will not be considered.",
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
                    text: "The results of the draw will be announced on *link=`https://www.linkedin.com/in/susanna-salata/`*Susanna Salata*/link* on April 22, 2025. We will contact the winner using the information provided in the form.",
                },
                {
                    title: "Important!",
                    text: [
                        {
                            text: "Participation in the draw is free of charge.",
                            type: "listItem",
                        },
                        {
                            text: "By submitting the form, the participant agrees to the processing of his/her personal data in accordance with *link=`${policyUrl}`*the Privacy Policy*/link*.",
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
                            text: "Start: 14 kwietnia 2025 r.",
                            type: "listItem",
                        },
                        {
                            text: "Termin zgłoszeń: 20 kwietnia 2025 r. do godz. 23:59 (czasu kijowskiego).",
                            type: "listItem",
                        },
                        {
                            text: "Ogłoszenie wyników: 21 kwietnia 2025 r. o godz. 19:00 (czasu kijowskiego).",
                            type: "listItem",
                        },
                        {
                            text: "Wszystkie rabaty i certyfikaty są ważne do 1 czerwca 2025 r.",
                            type: "listItem",
                        },
                    ],
                },
                {
                    title: "Jak wziąć udział?",
                    text: [
                        {
                            text: "Znajdź wszystkie jajka na stronie głównej.",
                            type: "numListItem ",
                        },
                        {
                            text: "Wypełnij i wyślij formularz zgłoszeniowy.",
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
                            text: "Ankiety wysłane po terminie (20.04.2025) nie będą rozpatrywane.",
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
                    text: "Wyniki losowania zostaną ogłoszone na stronie  *link=`https://www.linkedin.com/in/susanna-salata/`*Susanna Salata*/link* 22 kwietnia 2025 roku. Skontaktujemy się ze zwycięzcą za pośrednictwem danych podanych w formularzu.",
                },
                {
                    title: "Ważne!",
                    text: [
                        {
                            text: "Udział w losowaniu jest bezpłatny.",
                            type: "listItem",
                        },
                        {
                            text: "Przesyłając formularz, uczestnik wyraża zgodę na przetwarzanie swoich danych osobowych zgodnie z *link=`${policyUrl}`*Polityką prywatności*/link*.",
                            type: "listItem",
                        },
                    ],
                },
            ],
        },
    },
};
