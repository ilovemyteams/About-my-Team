import { type SchemaTypeDefinition } from "sanity";
import { accordionGroupType } from "./objects/module/accordionGroupType";
import { accordionType } from "./objects/module/accordionType";
import { calloutType } from "./objects/module/calloutType";
import { callToActionType } from "./objects/module/callToActionType";
import { footerType } from "./objects/global/footerType";
import { gridItemType } from "./objects/module/gridItemType";
import { gridType } from "./objects/module/gridType";
import { heroType } from "./objects/module/heroType";
import { imageCallToActionType } from "./objects/module/imageCallToActionType";
import { imageFeaturesType } from "./objects/module/imageFeaturesType";
import { imageFeatureType } from "./objects/module/imageFeatureType";
import { instagramType } from "./objects/module/instagramType";
import { linkEmailType } from "./objects/link/linkEmailType";
import { linkExternalType } from "./objects/link/linkExternalType";
import { linkInternalType } from "./objects/link/linkInternalType";
import { menuLinksType } from "./objects/global/menuLinksType";
import { menuType } from "./objects/global/menuType";
import { notFoundPageType } from "./objects/global/notFoundPageType";
import { seoType } from "./objects/seoType";

// Objects used as annotations must be imported first
const annotations = [linkEmailType, linkExternalType, linkInternalType];

const objects = [
    accordionGroupType,
    accordionType,
    calloutType,
    callToActionType,
    footerType,
    gridItemType,
    gridType,
    heroType,
    imageCallToActionType,
    imageFeaturesType,
    imageFeatureType,
    instagramType,
    menuLinksType,
    menuType,
    notFoundPageType,
    seoType,
];

import { portableTextType } from "./portableText/portableTextType";
import { portableTextSimpleType } from "./portableText/portableTextSimpleType";

const blocks = [portableTextType, portableTextSimpleType];

import { colorThemeType } from "./documents/colorTheme";

const documents = [colorThemeType];

import { homeType } from "./singletons/homeType";
import { settingsType } from "./singletons/settingsType";

const singletons = [homeType, settingsType];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [...annotations, ...singletons, ...blocks, ...objects, ...documents],
};
