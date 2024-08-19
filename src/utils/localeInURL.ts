export const localeInURL = (locale: string) => {
    if (locale === "ua") {
        return "";
    }
    return `${locale}/`;
};

export const switchLocaleInURL = (locale: string) => {
    if (locale === "ua") {
        return "";
    }
    return locale;
};
