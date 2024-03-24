//import { ToolsProp } from "@/types/ToolsProp";

export type MemberDataItemTranslation = {
    name: string;
    about: string;
    services: string;
    team: string;
    category: string;
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
    pricePerHour: string;
    projectsExperience: string[];
    socialLinks: SocialLinks;
    tools: string[]; //ToolsProp;
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
            category: "продукт менеджери",
        },
        en: {
            name: "Susanna Salata",
            about: "Result oriented",
            services: "There will be text in English",
            team: "I Love My Team",
            category: "product manager",
        },
        pl: {
            name: "Susanna Salata",
            about: "There will be text in Polish",
            services: "There will be text in Polish",
            team: "I Love My Team",
            category: "product manager",
        },
    },
];
