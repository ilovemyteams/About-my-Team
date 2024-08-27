import { aboutUsType } from "../schemas/singletons/aboutUsType";
import { pageStructure } from "./../plugins/settings";
import { homeType } from "./../schemas/singletons/homeType";
import { settingsType } from "./../schemas/singletons/settingsType";

export const singletonPagesType = [
    homeType.name,
    settingsType.name,
    aboutUsType.name,
    "media.tag",
    "translation.metadata",
    "home-en",
    "home-ua",
    "settings-en",
    "settings-ua",
];
export const structure = pageStructure([homeType, aboutUsType, settingsType]);
