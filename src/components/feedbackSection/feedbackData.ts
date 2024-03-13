type FeedbackDataItemTranslation = {
    siteName: string;
    siteView: string;
    reveiwer: string;
    reviewerRole: string;
    feedbackText: string;
};
type DataType = {
    id: string;
    image: string;
    video?: string;
    siteLink: string;
};
export type FeedbackDataItemType = {
    data: DataType;
    uk: FeedbackDataItemTranslation;
    en: FeedbackDataItemTranslation;
    pl: FeedbackDataItemTranslation;
};

export const portfolioData: FeedbackDataItemType[] = [
    {
        data: {
            id: "01",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146266/samples/dessert-on-a-plate.jpg",
            siteLink: "www.naseli.com",
        },
        uk: {
            siteName: "На селі",
            siteView: "лендінг",
            reveiwer: "Тетяна",
            reviewerRole: "Підприємець, власник ферми",
            feedbackText:
                "На нашому сайті ви знайдете інформацію про вже реалізовані проекти та команди, які стояли за їхнім створенням",
        },
        en: {
            siteName: "Na seli",
            siteView: "lending",
            reveiwer: "Tetiana",
            reviewerRole: "Entrepreneur, farm owner",
            feedbackText:
                "On our website you will find information about already implemented projects and the teams behind their creation",
        },
        pl: {
            siteName: "Na seli",
            siteView: "lądowanie",
            reveiwer: "Tatiana",
            reviewerRole: "Przedsiębiorca, właściciel gospodarstwa rolnego",
            feedbackText:
                "Na naszej stronie znajdziesz informacje o już zrealizowanych projektach i zespołach stojących za ich powstaniem",
        },
    },
    {
        data: {
            id: "02",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146269/cld-sample-4.jpg",
            siteLink: "www.alisawonder.com",
        },
        uk: {
            siteName: "Аліса в країні чудес",
            siteView: "персональний сайт",
            reveiwer: "Аліса",
            reviewerRole: "Власник бізнесу",
            feedbackText:
                "Алісі набридло сидіти без діла на березі. Разів зо два вона зазирнула в книжку, що її читала сестра, але там не було ні рисунків, ні малюнків, а без них книжка не книжка, — гадала Аліса.",
        },
        en: {
            siteName: "Alisa in Wonderwold",
            siteView: "personal site",
            reveiwer: "Аліса",
            reviewerRole: "Business owner",
            feedbackText:
                "Alice was tired of sitting idly on the shore. Once or twice she looked into the book that her sister was reading, but there were no pictures or drawings, and without them a book is not a book, - thought Alice.",
        },
        pl: {
            siteName: "Alicja w Krainie Czarów",
            siteView: "strona osobista",
            reveiwer: "Alicja",
            reviewerRole: "Właściciel firmy",
            feedbackText:
                "Alicja była zmęczona bezczynnym siedzeniem na brzegu. Raz czy dwa zajrzała do książki, którą czytała jej siostra, ale nie było tam żadnych obrazków ani rysunków, a bez nich książka nie jest książką – pomyślała Alicja.",
        },
    },
    {
        data: {
            id: "03",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146240/samples/people/jazz.jpg",
            video: "https://res.cloudinary.com/dxvtacrde/video/upload/v1709063030/samples/dance-2.mp4",
            siteLink: "www.smaragdovemisto.com",
        },
        uk: {
            siteName: "Смарагдове місто",
            siteView: "інтернет магазин",
            reveiwer: "Страшила",
            reviewerRole: "Власник магазину",
            feedbackText:
                "Довга товстезна гадюка обплелась навколо стовпа і ритмічно похитувала своєю плескатою головою. І чимало ще всіляких див і страхітливих речей було в просторій печері Гінгеми.",
        },
        en: {
            siteName: "Smaragdove misto",
            siteView: "Internet-shop",
            reveiwer: "Strashyla",
            reviewerRole: "Shop owner",
            feedbackText:
                "A long fat viper entwined itself around the post and rhythmically shook its flattened head. And there were many other wonders and terrifying things in the spacious cave of Gingema.",
        },
        pl: {
            siteName: "Smaragdove misto",
            siteView: "Sklep internetowy",
            reveiwer: "Strashyla",
            reviewerRole: "Właściciel sklepu",
            feedbackText:
                "Długa, gruba żmija owinęła się wokół słupa i rytmicznie potrząsała spłaszczoną głową. W przestronnej jaskini Gingema było wiele innych cudów i przerażających rzeczy.",
        },
    },
    {
        data: {
            id: "04",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146260/samples/balloons.jpg",
            siteLink: "www.baronmunchausen.com",
        },
        uk: {
            siteName: "Барон Мюнхаузен",
            siteView: "сайт візитівка",
            reveiwer: "Барон Мюнхаузен",
            reviewerRole: "Ріелтор, власник компанії",
            feedbackText:
                "Прокинувшись, Мюнхгаузен побачив, що лежить не в полі, а в якомусь містечку, а згори почулося іржання. Кінь висів на вершку дзвіниці, прив'язаний просто до хреста.",
        },
        en: {
            siteName: "Baron Munchausen",
            siteView: "website business card",
            reveiwer: "Baron Munchausen",
            reviewerRole: "Realtor, company owner",
            feedbackText:
                "Waking up, Munchausen saw that he was not lying in a field, but in some town, and a roar was heard from above. The horse was hanging on top of the bell tower, tied just to the cross.",
        },
        pl: {
            siteName: "Baron Munchausen",
            siteView: "wizytówka strony internetowej",
            reveiwer: "Baron Munchausen",
            reviewerRole: "Pośrednik nieruchomości, właściciel firmy",
            feedbackText:
                "Budząc się, Munchausen zobaczył, że nie leży na polu, ale w jakimś mieście, a z góry słychać było ryk. Koń wisiał na szczycie dzwonnicy, przywiązany tuż do krzyża.",
        },
    },
    {
        data: {
            id: "05",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146244/samples/ecommerce/accessories-bag.jpg",
            siteLink: "www.malamander.com",
        },
        uk: {
            siteName: "Маламандер",
            siteView: "корпоративний сайт",
            reveiwer: "Тарас",
            reviewerRole: "Власник трейдингової компанії",
            feedbackText:
                "Герберт і Вайолет беруться відшукати хоч якісь зачіпки... що приводять їх до легенди про моторошного маламандера..",
        },
        en: {
            siteName: "Malamander",
            siteView: "corporate site",
            reveiwer: "Taras",
            reviewerRole: "Owner of a trading company",
            feedbackText:
                "Herbert and Violet set out to find at least some clues... which lead them to the legend of the creepy malamander..",
        },
        pl: {
            siteName: "Malamander",
            siteView: "witryna firmowa",
            reveiwer: "Taras",
            reviewerRole: "Właściciel firmy handlowej",
            feedbackText:
                "Herbert i Violet wyruszają na poszukiwanie wskazówek, które doprowadzą ich do legendy o przerażającym malamandrze.",
        },
    },
    {
        data: {
            id: "06",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146267/cld-sample.jpg",
            siteLink: "www.judymoody.ua",
        },
        uk: {
            siteName: "Джуді Муді",
            siteView: "блог",
            reveiwer: "Джуді",
            reviewerRole: "Блогиня, власниця сайту",
            feedbackText:
                "На Вас чекає знайомство з кумедною дівчинкою на ім’я Джуді Муді, у якої частенько змінюється настрій.",
        },
        en: {
            siteName: "Judy Moody",
            siteView: "blog",
            reveiwer: "Judy",
            reviewerRole: "Blogger, site owner",
            feedbackText:
                "You will meet a funny girl named Judy Moody, who often changes her mood.",
        },
        pl: {
            siteName: "Judy Moody",
            siteView: "blogu",
            reveiwer: "Judy",
            reviewerRole: "Bloger, właściciel serwisu",
            feedbackText:
                "Poznasz zabawną dziewczynę o imieniu Judy Moody, która często zmienia swój nastrój.",
        },
    },
];
