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