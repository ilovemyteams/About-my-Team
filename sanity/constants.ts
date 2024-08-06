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

export const ROLES = [
    {
        title: "FrontEnd developer",
        value: "developer",
    },
    {
        title: "BackEnd developer",
        value: "developer",
    },
    { title: "Designer", value: "designer" },
    { title: "Business Analyst", value: "business-analytic" },
    { title: "Project manager", value: "manager" },
    { title: "Designer", value: "designer" },
    { title: "QA engineer", value: "qa" },
    { title: "Marketer", value: "marketer" },
];
