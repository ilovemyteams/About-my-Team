import {
    type ArrayDefinition,
    type DocumentDefinition,
    type ObjectDefinition,
    type SchemaTypeDefinition,
} from "sanity";

import { durationType } from "./objects/global/durationType";
import { footerType } from "./objects/global/footerType";
import { menuType } from "./objects/global/menuType";
import { milestoneType } from "./objects/global/milestoneType";
import { notFoundPageType } from "./objects/global/notFoundPageType";
import { socialLinksType } from "./objects/global/socialLinksType";
import { timelineType } from "./objects/global/timelineType";
import { linkEmailType } from "./objects/link/linkEmailType";
import { linkExternalType } from "./objects/link/linkExternalType";
import { linkInternalType } from "./objects/link/linkInternalType";
import { accordionGroupType } from "./objects/module/accordionGroupType";
import { accordionType } from "./objects/module/accordionType";
import { calloutType } from "./objects/module/calloutType";
import { callToActionType } from "./objects/module/callToActionType";
import { gridItemType } from "./objects/module/gridItemType";
import { gridType } from "./objects/module/gridType";
import { heroType } from "./objects/module/heroType";
import { imageCallToActionType } from "./objects/module/imageCallToActionType";
import { imageFeaturesType } from "./objects/module/imageFeaturesType";
import { imageFeatureType } from "./objects/module/imageFeatureType";
import { instagramType } from "./objects/module/instagramType";
import { seoType } from "./objects/seoType";
import {
    missioItemType,
    ourMissionHomeType,
} from "./objects/module/ourMissionHomeType";
import { subSectionLinkType } from "./objects/global/subSectionLinkType";

import { buttonType } from "./objects/global/buttonType";
// Objects used as annotations must be imported first
const annotations: ObjectDefinition[] = [
    linkEmailType,
    linkExternalType,
    linkInternalType,
];

const objects: ObjectDefinition[] = [
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
    menuType,
    notFoundPageType,
    seoType,
    timelineType,
    milestoneType,
    durationType,
    socialLinksType,
    buttonType,
    missioItemType,
    ourMissionHomeType,
    subSectionLinkType,
];

import { menuLinksType } from "./objects/global/menuLinksType";

const arrays: ArrayDefinition[] = [menuLinksType];

import { portableTextSimpleType } from "./portableText/portableTextSimpleType";
import { portableTextType } from "./portableText/portableTextType";
import { portableTextColorType } from "./portableText/portableTextColorType";

const blocks: ArrayDefinition[] = [
    portableTextType,
    portableTextSimpleType,
    portableTextColorType,
];

import { colorThemeType } from "./documents/colorTheme";
import { pageType } from "./documents/pageType";

const documents: DocumentDefinition[] = [colorThemeType, pageType];

import { homeType } from "./singletons/homeType";
import { projectType } from "./singletons/projectType";
import { settingsType } from "./singletons/settingsType";
import { teamType } from "./singletons/teamType";
import { aboutUsType } from "./singletons/aboutUsType";
const singletons: DocumentDefinition[] = [
    homeType,
    teamType,
    settingsType,
    projectType,
    aboutUsType,
];

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        ...annotations,
        ...singletons,
        ...blocks,
        ...objects,
        ...documents,
        ...arrays,
    ],
};
