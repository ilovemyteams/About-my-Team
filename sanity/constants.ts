import { ComposeIcon, PublishIcon, SearchIcon } from "@sanity/icons";
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
    {
        name: "cta",
        title: "CTA",
        icon: PublishIcon,
    },
];

// References to include in 'internal' links
export const PAGE_REFERENCES = [
    { type: "home" },
    { type: "aboutUs" },
    //   {type: 'collection'},
    //   {type: 'page'},
    //   {type: 'product'},
];

export const SUPPORTED_LANGUAGES = [
    { id: "ua", title: "Ukraine" },
    { id: "en", title: "English" },
    { id: "pl", title: "Polish" },
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
    { title: "Testing", value: "testing" },
    { title: "Delivery", value: "delivery" },
    { title: "Support", value: "support" },
];

export const ROLES = [
    {
        title: "FrontEnd developer",
        value: "frontendDeveloper",
    },
    {
        title: "Fullstack developer",
        value: "fullstackDeveloper",
    },
    {
        title: "BackEnd developer",
        value: "backendDeveloper",
    },
    { title: "Graphic designer/UI/UX designer", value: "designer" },
    { title: "Graphic designer", value: "graphicDesigner" },
    { title: "UI/UX designer", value: "uiUxDesigner" },
    { title: "QA engineer", value: "qa" },
    { title: "Business Analyst", value: "business-analytic" },
    { title: "Project manager", value: "projectManager" },
    { title: "Product manager", value: "productManager" },
    { title: "Project manager/Scrum master", value: "manager" },
    { title: "Scrum master", value: "scrumMaster" },
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