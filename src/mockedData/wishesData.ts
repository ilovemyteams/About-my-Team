export interface WishLocalizationDataType {
    title: string;
    wish: string;
}

export type WishProp = {
    id: string;
    image: string;
    pinkBG?: boolean;
    pinkHeart?: boolean;
    ua: WishLocalizationDataType;
    pl: WishLocalizationDataType;
    en: WishLocalizationDataType;
};

export const wishesData: WishProp[] = [
    {
        id: "Love-is-planning-a-date-with-the-barbell-but-never-showing-up",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738679475/valentine/mtxori8edn9bdq8pfu4t.jpg",
        ua: {
            title: "Про спортзал",
            wish: "планувати побачення зі штангою, але так і не прийти",
        },
        pl: {
            title: "O siłowni",
            wish: "planować randkę ze sztangą, ale nigdy nie przyjść",
        },
        en: {
            title: "About the gym",
            wish: "planning a date with the barbell but never showing up",
        },
    },
    {
        id: "Love-is-when-the-first-sip-is-the-first-I-love-you-of-the-day",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738699728/valentine/sny7jevrwzsnbirvaags.jpg",
        ua: {
            title: "Про каву",
            wish: "коли перший ковток – це перше „я тебе люблю” дня",
        },
        pl: {
            title: "O kawie",
            wish: "kiedy pierwszy łyk to pierwsze „Kocham cię” dnia",
        },
        en: {
            title: "About coffee",
            wish: "when the first sip is the first „I love you” of the day",
        },
    },
    {
        id: "",
        image: "",
        ua: {
            title: "",
            wish: "",
        },
        pl: {
            title: "",
            wish: "",
        },
        en: {
            title: "",
            wish: "",
        },
    },
    {
        id: "",
        image: "",
        ua: {
            title: "",
            wish: "",
        },
        pl: {
            title: "",
            wish: "",
        },
        en: {
            title: "",
            wish: "",
        },
    },
    {
        id: "",
        image: "",
        ua: {
            title: "",
            wish: "",
        },
        pl: {
            title: "",
            wish: "",
        },
        en: {
            title: "",
            wish: "",
        },
    },
];
