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
