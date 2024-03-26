export type MemberDataItemTranslation = {
    name: string;
    about: string;
    services: string;
    team: string;
};

export type SocialLinks = {
    linkedin: string;
    behance?: string;
    github?: string;
    telegram?: string;
};

export type DataType = {
    id: string;
    imageURL?: string;
    position: string;
    categoryName: string;
    pricePerHour: string;
    projectsExperience: string[];
    socialLinks: SocialLinks;
    tools: string[];
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
            categoryName: "manager",
            projectsExperience: ["www.website.ua"],
            pricePerHour: "100",
            socialLinks: {
                linkedin: "https://www.linkedin.com/in/susanna-salata/",
            },
            tools: ["jira", "atlassian"],
        },
        ua: {
            name: "Сусанна Салата",
            about: "Орієнтований на результат",
            services:
                "Створення зручних для користувачів та ефективних для бізнесу web застосунків різного рівня складності. Фокусуюсь на поєднанні максимальної функціональності та естетичності для досягнення бездоганного результату.",
            team: "I Love My Team",
        },
        en: {
            name: "Susanna Salata",
            about: "Result oriented",
            services: "There will be text in English",
            team: "I Love My Team",
        },
        pl: {
            name: "Susanna Salata",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
        },
    },
];
