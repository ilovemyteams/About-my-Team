type MemberDataItemTranslation = {
    name: string;
    about: string;
    services: string;
};
type DataType = {
    id: string;
    imageURL?: string;
    position: string;
    pricePerHour: string;
    projectsExperience: string;
    socialLinks: [];
    instruments: [];
};

export type MemberDataItemType = {
    data: DataType;
    ua: MemberDataItemTranslation;
    en: MemberDataItemTranslation;
    pl: MemberDataItemTranslation;
};

export const membersData: MemberDataItemType[] = [
    {
        data: {
            id: "1",
            imageURL: "",
            position: "product manager",
            projectsExperience: "www.website.ua",
            pricePerHour: "100",
            socialLinks: [],
            instruments: [],
        },
        ua: {
            name: "Сусанна Салата",
            about: "Орієнтований на результат",
            services:
                "Створення зручних для користувачів та ефективних для бізнесу web застосунків різного рівня складності. Фокусуюсь на поєднанні максимальної функціональності та естетичності для досягнення бездоганного результату.",
        },
        en: {
            name: "Susanna Salata",
            about: "Result oriented",
            services: "There will be text in English",
        },
        pl: {
            name: "Susanna Salata",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
        },
    },
];
