import { ComposeIcon, SearchIcon } from "@sanity/icons";
// Field groups used through schema types
export const GROUPS = [
    {
        default: true,
        name: "editorial",
        title: "Editorial",
        icon: ComposeIcon,
    },
    {
        name: "seo",
        title: "SEO",
        icon: SearchIcon,
    },
];

// References to include in 'internal' links
export const PAGE_REFERENCES = [
    { type: "home" },
    //   {type: 'collection'},
    //   {type: 'page'},
    //   {type: 'product'},
];

export const SUPPORTED_LANGUAGES = [
    { id: "ua", title: "Ukraine" },
    { id: "en", title: "English" },
    { id: "pl", title: "Polish" },
];

export const SITE_CATEGORY = [
    {
        title: "Landing",
        value: "landing",
    },
    {
        title: "Website",
        value: "website",
    },
    {
        title: "Online store",
        value: "onlineStore",
    },
];

export const SITE_STATUS = [
    { title: "Recruiting a team", value: "recruitingTeam" },
    { title: "Development", value: "development" },
    { title: "Completed", value: "completed" },
];

export const STAGES = [
    { title: "Idea", value: "idea" },
    { title: "Design", value: "design" },
    { title: "Development", value: "development" },
    { title: "Delivery", value: "delivery" },
    { title: "Support", value: "support" },
];

export const ROLES = [
    {
        title: "FrontEnd developer",
        value: "developer",
    },
    {
        title: "Fullstack developer",
        value: "developer",
    },
    {
        title: "BackEnd developer",
        value: "developer",
    },
    { title: "Graphic designer/UI/UX designer", value: "designer" },
    { title: "Graphic designer", value: "designer" },
    { title: "UI/UX designer", value: "designer" },
    { title: "QA engineer", value: "qa" },
    { title: "Business Analyst", value: "business-analytic" },
    { title: "Project manager", value: "manager" },
    { title: "Product manager", value: "manager" },
    { title: "Project manager/Scrum master", value: "manager" },
    { title: "Scrum master", value: "manager" },
    { title: "Marketer", value: "marketer" },
];

export const SOCIAL_LINKS = [
    { title: "LinkedIn", value: "linkedin" },
    { title: "Telegram", value: "telegram" },
    { title: "Github", value: "github" },
    { title: "Behance", value: "behance" },
    { title: "GoogleDrive", value: "googleDrive" },
    { title: "WhatsApp", value: "whatsapp" },
    { title: "YouTube", value: "youtube" },
    { title: "Pinterest", value: "pinterest" },
    { title: "Email", value: "email" },
    { title: "Facebook", value: "facebook" },
    { title: "Instagram", value: "instagram" },
    { title: "Twitter", value: "twitter" },
];
