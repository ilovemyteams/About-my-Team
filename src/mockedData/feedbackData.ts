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
            reviewerRole: "Підприємець, власник ферми",
            feedbackText:
                "Чудовий дизайн та класна ідея! Ще крутіша вийшла реалізація. Я не думав, що нудну діяльність фермера на землі можна так цікаво обіграти. Покупці моїх овочів у захваті від мого сайту. Я тільки висадив першу розсаду в теплицю, а вже отримав 100 замовлень на майбутній врожай помідорів.",
        },
        en: {
            siteName: "Smachno! na seli",
            siteView: "online store",
            reviewer: "Sergii",
            reviewerRole: "Entrepreneur, farm owner",
            feedbackText: "Переклад на анг",
        },
        pl: {
            siteName: "Smachno! na seli",
            siteView: "sklep internetowy",
            reviewer: "Sergii",
            reviewerRole: "Przedsiębiorca, właściciel gospodarstwa rolnego",
            feedbackText: "Переклад на поль",
        },
    },
];
