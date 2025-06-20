import { pageStructure } from "./../plugins/settings";
import { homeType } from "./../schemas/singletons/homeType";
import { settingsType } from "./../schemas/singletons/settingsType";

export const singletonPagesType = [homeType.name, settingsType.name];
export const structure = pageStructure([homeType, settingsType]);
