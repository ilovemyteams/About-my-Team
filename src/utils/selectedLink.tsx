import {
    POLICY_URL_EN,
    POLICY_URL_PL,
    POLICY_URL_UA,
} from "../constants/policyURL";

export const selectedLink = (locale: string): string => {
    return locale === "ua"
        ? POLICY_URL_UA
        : locale === "en"
          ? POLICY_URL_EN
          : POLICY_URL_PL;
};
