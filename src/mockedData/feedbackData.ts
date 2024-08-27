type FeedbackDataItemTranslation = {
    siteName: string;
    siteView: string;
    reviewer: string;
    reviewerRole: string;
    feedbackText: string;
};
type DataType = {
    id: string;
    image?: string;
    video?: string;
    siteLink: string;
    feedbackLink?: string;
};
export type FeedbackDataItemType = {
    data: DataType;
    ua: FeedbackDataItemTranslation;
    en: FeedbackDataItemTranslation;
    pl: FeedbackDataItemTranslation;
};

export const feedbackData: FeedbackDataItemType[] = [
    {
        data: {
            id: "01",
            image: "https://drive.google.com/uc?export=view&id=1ZcvPOChrBY7KnazjQi3sJ5B9R1wP2qL1",
            siteLink: "batatfarm.com",
            feedbackLink: "https://www.facebook.com/share/p/SK1k7ViB8P5mCS4B/",
        },
        ua: {
            siteName: "Смачно! на селі",
            siteView: "інтернет магазин",
            reviewer: "Сергій",
            reviewerRole: "Підприємець та власник ферми",
            feedbackText:
                "Сайт створений завдяки невтомній Сусанні Салаті, яка не просто зробила з командою сайт, а буквально заставила мене ворушитися в цьому напрямку. Тепер сайт вирішує одну з моїх проблем – для мене значно спростився процес відправки замовлень по всій Україні поштою. Більше не треба щоразу заповнювати свої дані в гугл-формі – один раз зареєструвався на сайті і все!",
        },
        en: {
            siteName: "Smachno! na seli",
            siteView: "online store",
            reviewer: "Sergii",
            reviewerRole: "Entrepreneur and the farm owner.",
            feedbackText:
                "The website was created thanks to the tireless Susanna Salata, who not only made the website with her team but also pushed me to move in this direction. Now the website solves one of my problems—it has significantly simplified the process of sending orders all over Ukraine by mail. You no longer need to fill in your data in a Google form every time - you just register on the site once and that's it!",
        },
        pl: {
            siteName: "Smachno! na seli",
            siteView: "sklep internetowy",
            reviewer: "Sergii",
            reviewerRole: "Przedsiębiorca i właściciel gospodarstwa",
            feedbackText:
                "Świetny projekt i fajny pomysł! Realizacja była nawet jeszcze lepsza. Nie sądziłem, że nudną działalność rolnika można odtworzyć w tak interesujący sposób. Moi klienci są zachwyceni moją stronę internetową. Właśnie zasadziłem pierwsze sadzonki w szklarni i otrzymałem już 100 zamówień na następne zbiory pomidorów.",
        },
    },
    {
        data: {
            id: "02",
            image: "https://drive.google.com/uc?export=view&id=1IicVPgXv_GMMdq4WVlqCijG3PT6HHfJF",
            siteLink: "protection.in.ua",
        },
        ua: {
            siteName: "Міграційний Адвокат",
            siteView: "вебсайт",
            reviewer: "Антоній Курц",
            reviewerRole: "Власник юридичної компанії",
            feedbackText:
                "Дякую команді за допомогу в систематизації та втіленні моїх ідей, незважаючи на нові побажання та зміни текстів, робота виконувалась вчасно, а спілкування було приємним та професійним, з результатом, що повністю задовольняє мої потреби. Щиро рекомендую цю команду!",
        },
        en: {
            siteName: "Migration Lawyer",
            siteView: "website",
            reviewer: "Antonii Kurts",
            reviewerRole: "Owner of a law office",
            feedbackText:
                "Thanks to the team for helping me to systematize and implement my ideas, despite new requests and changes to the texts, the work was done on time, and the communication was pleasant and professional, and the result fully satisfied my needs. I sincerely recommend this team!",
        },
        pl: {
            siteName: "Prawnik imigracyjny",
            siteView: "website",
            reviewer: "Antonii Kurts",
            reviewerRole: "Właściciel kancelarii prawnej",
            feedbackText:
                "Dziękuję zespołowi za pomoc w organizacji i realizacji moich pomysłów, pomimo nowych życzeń i zmian w tekstach, praca została wykonana na czas, a komunikacja była przyjemna i profesjonalna, z wynikiem, który w pełni spełnia moje wymagania. Szczerze polecam ten zespół!",
        },
    },
];
