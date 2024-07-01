import { settingsType } from "./../schemas/singletons/settingsType";
import { homeType } from "./../schemas/singletons/homeType";
import { pageStructure } from "./../plugins/settings";

export const singletonPagesType = [
    homeType.name,
    settingsType.name,
    "media.tag",
];
export const structure = pageStructure([homeType, settingsType]);
