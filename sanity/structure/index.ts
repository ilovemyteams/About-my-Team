import { pageStructure } from "./../plugins/settings";
import { homeType } from "./../schemas/singletons/homeType";
import { settingsType } from "./../schemas/singletons/settingsType";

export const singletonPagesType = [
    homeType.name,
    settingsType.name,
    "media.tag",
];
export const structure = pageStructure([homeType, settingsType]);
