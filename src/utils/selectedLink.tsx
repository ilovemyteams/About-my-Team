import {
    POLICY_URL_EN,
    POLICY_URL_PL,
    POLICY_URL_UA,
} from "../constants/policyURL";

export const selectedLink = (locale: string): string => {
    switch (locale) {
        case "ua":
            return POLICY_URL_UA;
        case "pl":
            return POLICY_URL_PL;
        default:
            return POLICY_URL_EN;
    }
};
