import {
    FcDownload,
    FcEditImage,
    FcFlowChart,
    FcHighPriority,
    FcMenu,
    FcSearch,
} from "react-icons/fc";
// Field groups used through schema types
export const GROUPS = [
    {
        name: "editorial",
        title: "Editorial",
        icon: FcEditImage,
    },
    {
        name: "cta",
        title: "CTA",
        icon: FcDownload,
    },
    {
        name: "navigation",
        title: "Navigation",
        icon: FcMenu,
    },
    {
        name: "buttons",
        title: "Buttons",
        icon: FcFlowChart,
    },
    {
        name: "notFoundPage",
        title: "404 page",
        icon: FcHighPriority,
    },
    {
        name: "seo",
        title: "SEO",
        icon: FcSearch,
    },
];

// References to include in 'internal' links
export const PAGE_REFERENCES = [{ type: "home" }, { type: "page" }];

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

export const FAQ_PAGE_DESIGN_TYPES = [
    { title: "Stages", value: "stages" },
    { title: "Table", value: "table" },
];

export const GENDER_OPTIONS = [
    { title: "Female", value: "female" },
    { title: "Male", value: "male" },
    { title: "Unknown", value: "unknown" },
];
