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
    uk: FeedbackDataItemTranslation;
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
        uk: {
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
    {
        data: {
            id: "02",
            image: "https://res.cloudinary.com/dxvtacrde/image/upload/v1700146269/cld-sample-4.jpg",
            siteLink: "www.alisawonder.com",
        },
        uk: {
            siteName: "Аліса в країні чудес",
            siteView: "персональний сайт",
            reviewer: "Аліса",
            reviewerRole: "Власник бізнесу",
            feedbackText:
                "Алісі набридло сидіти без діла на березі. Разів зо два вона зазирнула в книжку, що її читала сестра, але там не було ні рисунків, ні малюнків, а без них книжка не книжка, — гадала Аліса. Разів зо два вона зазирнула в книжку, що її читала сестра, але там не було ні рисунків, ні малюнків.",
        },
        en: {
            siteName: "Alisa in Wonderwold",
            siteView: "personal site",
            reviewer: "Аліса",
            reviewerRole: "Business owner",
            feedbackText:
                "Alice was tired of sitting idly on the shore. Once or twice she looked into the book that her sister was reading, but there were no pictures or drawings, and without them a book is not a book, - thought Alice.",
        },
        pl: {
            siteName: "Alicja w Krainie Czarów",
            siteView: "strona osobista",
            reviewer: "Alicja",
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
            reviewer: "Страшила",
            reviewerRole: "Власник магазину",
            feedbackText:
                "Довга товстезна гадюка обплелась навколо стовпа і ритмічно похитувала своєю плескатою головою. І чимало ще всіляких див і страхітливих речей було в просторій печері Гінгеми.",
        },
        en: {
            siteName: "Smaragdove misto",
            siteView: "online store",
            reviewer: "Strashyla",
            reviewerRole: "Shop owner",
            feedbackText:
                "A long fat viper entwined itself around the post and rhythmically shook its flattened head. And there were many other wonders and terrifying things in the spacious cave of Gingema.",
        },
        pl: {
            siteName: "Smaragdove misto",
            siteView: "sklep internetowy",
            reviewer: "Strashyla",
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
            reviewer: "Барон Мюнхаузен",
            reviewerRole: "Ріелтор, власник компанії",
            feedbackText:
                "Прокинувшись, Мюнхгаузен побачив, що лежить не в полі, а в якомусь містечку, а згори почулося іржання. Кінь висів на вершку дзвіниці, прив'язаний просто до хреста.",
        },
        en: {
            siteName: "Baron Munchausen",
            siteView: "website business card",
            reviewer: "Baron Munchausen",
            reviewerRole: "Realtor, company owner",
            feedbackText:
                "Waking up, Munchausen saw that he was not lying in a field, but in some town, and a roar was heard from above. The horse was hanging on top of the bell tower, tied just to the cross.",
        },
        pl: {
            siteName: "Baron Munchausen",
            siteView: "wizytówka strony internetowej",
            reviewer: "Baron Munchausen",
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
            reviewer: "Тарас",
            reviewerRole: "Власник трейдингової компанії",
            feedbackText:
                "Герберт і Вайолет беруться відшукати хоч якісь зачіпки... що приводять їх до легенди про моторошного маламандера.. Герберт і Вайолет беруться відшукати хоч якісь зачіпки... що приводять їх до легенди про моторошного маламандера..",
        },
        en: {
            siteName: "Malamander",
            siteView: "corporate site",
            reviewer: "Taras",
            reviewerRole: "Owner of a trading company",
            feedbackText:
                "Herbert and Violet set out to find at least some clues... which lead them to the legend of the creepy malamander..",
        },
        pl: {
            siteName: "Malamander",
            siteView: "witryna firmowa",
            reviewer: "Taras",
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
            reviewer: "Джуді",
            reviewerRole: "Блогиня, власниця сайту",
            feedbackText:
                "На Вас чекає знайомство з кумедною дівчинкою на ім’я Джуді Муді, у якої частенько змінюється настрій. На Вас чекає знайомство з кумедною дівчинкою на ім’я Джуді Муді, у якої частенько змінюється настрій.",
        },
        en: {
            siteName: "Judy Moody",
            siteView: "blog",
            reviewer: "Judy",
            reviewerRole: "Blogger, site owner",
            feedbackText:
                "You will meet a funny girl named Judy Moody, who often changes her mood.",
        },
        pl: {
            siteName: "Judy Moody",
            siteView: "blogu",
            reviewer: "Judy",
            reviewerRole: "Bloger, właściciel serwisu",
            feedbackText:
                "Poznasz zabawną dziewczynę o imieniu Judy Moody, która często zmienia swój nastrój.",
        },
    },
];
