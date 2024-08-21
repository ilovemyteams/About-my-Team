export type ChronologyDataType = {
    date: string;
    title: string;
    text: string;
};

export type ChronologyDataTypeItem = {
    ua: ChronologyDataType;
    en: ChronologyDataType;
    pl: ChronologyDataType;
};

export const chronologyData: ChronologyDataTypeItem[] = [
    {
        ua: {
            date: "2023",
            title: "Ідея",
            text: "Все почалося з ідеї зробити платформу, яка об’єднає однодумців та надасть можливість створювати команди для виконання невеликих замовлень для малого і середнього бізнесу. Ідея виникла влітку 2023 року. Але не було підходящої команди для її втілення.",
        },
        en: {
            date: "2023",
            title: "Idea",
            text: "It all started with the idea to create a platform that would bring together like-minded people and provide an opportunity to create teams to fulfill small orders for small and medium-sized businesses. The idea came up in the summer of 2023. But there was no suitable team to implement it.",
        },
        pl: {
            date: "2023",
            title: "Pomysł",
            text: "Wszystko zaczęło się od pomysłu stworzenia platformy, która połączyłaby podobnie myślących ludzi i zapewniła możliwość tworzenia zespołów realizujących małe zamówienia dla małych i średnich firm. Pomysł pojawił się latem 2023 roku. Nie było jednak odpowiedniego zespołu, który mógłby go zrealizować.",
        },
    },
    {
        ua: {
            date: "2024",
            title: "Перші команди",
            text: "Тому реалізувавши перші проєкти на волонтерських засадах для громадських організацій вдалося зібрати команду та об’єднати людей за переконаннями та цінностями, побудувати процеси та розробити план, який ми зараз активно втілюємо.",
        },
        en: {
            date: "2024",
            title: "First teams",
            text: "Having implemented the first projects on a voluntary basis for NGOs, we managed to assemble a team and unite people by beliefs and values, build processes, and develop a plan that we are now actively implementing.",
        },
        pl: {
            date: "2024",
            title: "Pierwsze zespoły",
            text: "Dlatego po wdrożeniu pierwszych projektów na zasadzie wolontariatu dla organizacji pozarządowych, udało nam się zebrać zespół i zjednoczyć ludzi według przekonań i wartości, zbudować procesy i opracować plan, który obecnie aktywnie wdrażamy.",
        },
    },
    {
        ua: {
            date: "зараз",
            title: "Замовники",
            text: "Перші замовлення були виконані ще до того, як з’явився наш сайт. Зараз уже наші задоволені клієнти рекомендують нас і вигадують нові проєкти, щоб втілити їх разом з нами. Ви також можете стати нашим задоволеним клієнтом!",
        },
        en: {
            date: "now",
            title: "Customers",
            text: "The first orders were completed before our website was launched. Now, our satisfied customers recommend us and come up with new projects to implement with us. You, too, can become one of our satisfied clients!",
        },
        pl: {
            date: "teraz",
            title: "Klienci",
            text: "Pierwsze zlecenia zostały zrealizowane jeszcze zanim powstała nasza strona internetowa. Teraz nasi zadowoleni klienci polecają nas i wymyślają nowe projekty aby aby realizować je z nami. Ty też możesz zostać naszym zadowolonym klientem!",
        },
    },
];
