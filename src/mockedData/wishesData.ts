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
        id: "about-the-gym",
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
        id: "about-coffee",
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
        id: "about-a-child",
        image: "",
        ua: {
            title: "Про дитину",
            wish: "коли дитина приносить тобі квітку з клумби сусідки і каже, що ти найкраща в світі",
        },
        pl: {
            title: "O dziecku",
            wish: "kiedy dziecko przynosi ci kwiatek z podwórka i mówi, że jesteś najlepsza na świecie",
        },
        en: {
            title: "About a child",
            wish: "when a child brings you a flower from the yard and says you’re the best in the world",
        },
    },
    {
        id: "about-a-mother",
        image: "",
        ua: {
            title: "Про матір",
            wish: "коли її обійми лікують навіть найважчий день",
        },
        pl: {
            title: "O matce",
            wish: "kiedy jej uściski leczą nawet najtrudniejszy dzień",
        },
        en: {
            title: "About a mother",
            wish: "when her hugs heal even the hardest day",
        },
    },
    {
        id: "about-a-father",
        image: "",
        ua: {
            title: "Про батька",
            wish: "коли його слова “ти впораєшся” звучать, як найкраща підтримка",
        },
        pl: {
            title: "O ojcu",
            wish: "kiedy jego słowa „Dasz radę” brzmią jak najlepsze wsparcie",
        },
        en: {
            title: "About a father",
            wish: "when his words “You’ve got this” sound like the best support",
        },
    },
    {
        id: "about-vacation",
        image: "",
        ua: {
            title: "Про відпустку",
            wish: "коли твій авіарейс запізнюється, але тебе це не хвилює, бо ти вже з коктейлем",
        },
        pl: {
            title: "O wakacjach",
            wish: "kiedy twój lot się opóźnia, ale cię to nie obchodzi, bo już masz koktajl",
        },
        en: {
            title: "About vacation",
            wish: "when your flight is delayed, but you don’t care because you already have a cocktail",
        },
    },
    {
        id: "about-an-unfinished-book",
        image: "",
        ua: {
            title: "Про незакінчену книгу",
            wish: "обіцяти книзі, що дочитаєш її “на цих вихідних”",
        },
        pl: {
            title: "O niedoczytanej książce",
            wish: "obiecać książce, że przeczytasz ją “w ten weekend”",
        },
        en: {
            title: "About an unfinished book",
            wish: "promising a book you’ll finish it “this weekend”",
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
