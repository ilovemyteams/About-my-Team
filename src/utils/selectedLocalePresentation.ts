import {
    PRESENTATION_EN,
    PRESENTATION_PL,
    PRESENTATION_UA,
} from "../constants/localePresentationId";

export const selectedLocalePresentation = (locale: string): string => {
    switch (locale) {
        case "ua":
            return PRESENTATION_UA;
        case "pl":
            return PRESENTATION_PL;
        default:
            return PRESENTATION_EN;
    }
};
