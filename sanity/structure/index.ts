import { projectType } from "../schemas/singletons/projectType";
import { pageStructure } from "./../plugins/settings";
import { homeType } from "./../schemas/singletons/homeType";
import { settingsType } from "./../schemas/singletons/settingsType";

export const singletonPagesType = [
    homeType.name,
    settingsType.name,
    projectType.name,
    "media.tag",
    "translation.metadata",
    "home-en",
    "home-ua",
    "settings-en",
    "settings-ua",
];
export const structure = pageStructure([homeType, settingsType, projectType]);
