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
        },
        ua: {
            siteName: "Смачно! на селі",
            siteView: "інтернет магазин",
            reviewer: "Сергій",
            reviewerRole: "Підприємець та власник ферми",
            feedbackText:
                "Чудовий дизайн та класна ідея! Ще крутіша вийшла реалізація. Я не думав, що нудну діяльність фермера на землі можна так цікаво обіграти. Покупці моїх овочів у захваті від мого сайту. Я тільки висадив першу розсаду в теплицю, а вже отримав 100 замовлень на майбутній врожай помідорів.",
        },
        en: {
            siteName: "Smachno! na seli",
            siteView: "online store",
            reviewer: "Sergii",
            reviewerRole: "Entrepreneur and the farm owner.",
            feedbackText:
                "Great design and a cool idea! The implementation was even better. I had never thought that the boring work of a farmer could be shown in such an amusing manner. My customers are delighted with my site. I've just planted the first seedlings in the greenhouse, and already received 100 orders for the next tomato harvest.",
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
];
