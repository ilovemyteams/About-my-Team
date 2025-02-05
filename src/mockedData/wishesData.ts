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
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790429/valentine/x8riztokddcgk0l4o68m.jpg",
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
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790430/valentine/jdmw9rie1ykjie508lbp.jpg",
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
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790627/valentine/e32aypqa5mdv6edrf06q.jpg",
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
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790431/valentine/lpxquibyumpf0ql8llkc.jpg",
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
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790428/valentine/lpz4nrgskoaq7n9ev5yo.jpg",
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
        id: "about a cat",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790428/valentine/qo25tlmu4bjwgnnot5lz.jpg",
        ua: {
            title: "Про кота",
            wish: "коли він спить на твоїй подушці, а ти мовчки на краєчку",
        },
        pl: {
            title: "O kocie",
            wish: "kiedy on śpi na twojej poduszce, a ty cicho przesuwasz się na brzeg",
        },
        en: {
            title: "About a cat",
            wish: "when it sleeps on your pillow, and you silently move to the edge",
        },
    },
    {
        id: "about-last-job",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790429/valentine/gfbgsy1jvkshm7h26ahs.jpg",
        ua: {
            title: "Про колишню ... роботу",
            wish: "згадувати її і розуміти, що любиш свою нову більше",
        },
        pl: {
            title: "O byłej Pracy",
            wish: "wspominać ją i rozumieć, że nową lubisz bardziej",
        },
        en: {
            title: "About last job",
            wish: "remembering it and realizing you love your new one more",
        },
    },
    {
        id: "about-the-project-team",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790431/valentine/jggqhcsd6qlfdwrnf6vs.jpg",
        ua: {
            title: "Про команду в проєкті",
            wish: "знати, що разом ви навіть дедлайн зможете приручити",
        },
        pl: {
            title: "O zespole w projekcie",
            wish: "wiedzieć, że razem możecie nawet oswoić deadline",
        },
        en: {
            title: "About the project team",
            wish: "knowing that together, you can even tame a deadline",
        },
    },
    {
        id: "about-developer",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790429/valentine/n489vwzuinsvqmvpds2z.jpg",
        ua: {
            title: "Про розробника",
            wish: "коли твій код компілюється з першого разу",
        },
        pl: {
            title: "O deweloper",
            wish: "kiedy twój kod kompiluje się za pierwszym razem",
        },
        en: {
            title: "About developer",
            wish: "when your code compiles on the first try",
        },
    },
    {
        id: "about-a-client-meeting",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790428/valentine/eb0f5kqjotkgkbwgslxf.jpg",
        ua: {
            title: "Про зустріч з клієнтом",
            wish: "коли ти слухаєш клієнта, а в голові вже малюєш план втечі",
        },
        pl: {
            title: "O spotkaniu z klientem",
            wish: "słuchać klienta, a w głowie już planować ucieczkę",
        },
        en: {
            title: "About a client meeting",
            wish: "listening to the client while already mapping out an escape plan in your head",
        },
    },
    {
        id: "about-online-meetings",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790430/valentine/khv9l9oryua4y4o4uvzw.jpg",
        ua: {
            title: "Любов до мітів",
            wish: "вдавати, що слухаєш, коли вимкнув камеру і жуєш піцу",
        },
        pl: {
            title: "O spotkaniach online",
            wish: "udawać, że słuchasz, kiedy wyłączyłeś kamerę i jesz pizzę",
        },
        en: {
            title: "About online meetings",
            wish: "pretending to listen while your camera is off and you’re eating pizza",
        },
    },
    {
        id: "about-a-new-project",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790430/valentine/b6lglwykgop73jcp1ztc.jpg",
        ua: {
            title: "Про новий проєкт",
            wish: "обіцяти собі: цього разу все буде по Agile",
        },
        pl: {
            title: "O nowym projekcie",
            wish: "obiecać sobie: tym razem wszystko będzie zgodne z Agile",
        },
        en: {
            title: "About a new project",
            wish: "promising yourself: this time, it will be truly Agile",
        },
    },
    {
        id: "about-morning-coffee",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790430/valentine/w6pgj36gbqxxctcqkiiu.jpg",
        ua: {
            title: "Про ранкову каву",
            wish: "коли бариста пам'ятає твій улюблений капучино",
        },
        pl: {
            title: "O porannej kawie",
            wish: "kiedy barista pamięta twoje ulubione cappuccino",
        },
        en: {
            title: "About morning coffee",
            wish: "when the barista remembers your favorite cappuccino",
        },
    },
    {
        id: "about-a-release",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790430/valentine/ajzxsnylg5yv9blxauuy.jpg",
        ua: {
            title: "Про реліз",
            wish: "коли все падає, а ти ще й встигаєш зробити мемчик",
        },
        pl: {
            title: "O wydaniu",
            wish: "kiedy wszystko się sypie, a ty jeszcze masz czas na stworzenie mema",
        },
        en: {
            title: "About a release",
            wish: "when everything crashes, but you still have time to make a meme",
        },
    },
    {
        id: "about-discounts",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790916/valentine/awpnkypb1eh4qkbdgmyj.jpg",
        ua: {
            title: "Про знижки",
            wish: "знайти купон на знижку і витратити вдвічі більше",
        },
        pl: {
            title: "O zniżkach",
            wish: "znaleźć kupon rabatowy i wydać dwa razy więcej",
        },
        en: {
            title: "About discounts",
            wish: "finding a discount coupon and spending twice as much",
        },
    },
    {
        id: "about-motivation",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790430/valentine/sjbzaiqvqv0bdhqw53ta.jpg",
        ua: {
            title: "Про мотивацію",
            wish: "знаходити силу почати тиждень заради п'ятниці",
        },
        pl: {
            title: "O motywacji",
            wish: "znaleźć siłę, by zacząć tydzień dla samego piątku",
        },
        en: {
            title: "About motivation",
            wish: "finding the strength to start the week for the sake of Friday",
        },
    },
    {
        id: "about-code-review",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790429/valentine/mmjb5dyqawotk3wnrnpl.jpg",
        ua: {
            title: "Про код рев’ю",
            wish: "коли твій код виправили, але ти все ще не образився",
        },
        pl: {
            title: "O code review",
            wish: "kiedy twój kod został poprawiony, ale ty się nie obraziłeś",
        },
        en: {
            title: "About code review",
            wish: "when your code gets corrected, but you’re still not offended",
        },
    },
    {
        id: "about-corporate-chats",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790428/valentine/jfoph4zq6loevpjzdy0o.jpg",
        ua: {
            title: "Про корпоративні чати",
            wish: "коли ставиш “+” у чаті, але думаєш: “Хто це взагалі придумав?”",
        },
        pl: {
            title: "O czatach korporacyjnych",
            wish: "kiedy wpisujesz „+” na czacie, ale myślisz: „Kto to w ogóle wymyślił?”",
        },
        en: {
            title: "About corporate chats",
            wish: "when you type “+” in the chat but think: “Who even invented this?”",
        },
    },
    {
        id: "about-vacation-2",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790431/valentine/xmbxikznijjxx5y3cm72.jpg",
        ua: {
            title: "Про відпустку",
            wish: "обіцяти не брати ноутбук, але він вже в рюкзаку",
        },
        pl: {
            title: "O wakacjach",
            wish: "obiecać sobie, że nie weźmiesz laptopa, ale i tak jest w plecaku",
        },
        en: {
            title: "About vacation",
            wish: "promising not to take your laptop, but it’s still in your backpack",
        },
    },
    {
        id: "about-designers",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790429/valentine/sj9mgyjzjecurp7cevuh.jpg",
        ua: {
            title: "Про дизайнерів",
            wish: "коли прийняли дизайн без жодної правки",
        },
        pl: {
            title: "O designerach",
            wish: "kiedy projekt zostaje zaakceptowany bez żadnej poprawki",
        },
        en: {
            title: "About designers",
            wish: "when the design is approved without a single revision",
        },
    },
    {
        id: "about-dog",
        image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1738790428/valentine/t0rsu0ibhfzfiep915zn.jpg",
        ua: {
            title: "Про собаку",
            wish: "коли вже не відчуваєш обличчя, а собака все ще не вибрав місце",
        },
        pl: {
            title: "O psie",
            wish: "kiedy już nie czujesz twarzy, a pies wciąż nie wybrał miejsca",
        },
        en: {
            title: "About dog",
            wish: "when you no longer feel your face, but the dog still hasn’t picked a spot",
        },
    },
    // {
    //     id: "",
    //     image: "",
    //     ua: {
    //         title: "",
    //         wish: "",
    //     },
    //     pl: {
    //         title: "",
    //         wish: "",
    //     },
    //     en: {
    //         title: "",
    //         wish: "",
    //     },
    // },
];
