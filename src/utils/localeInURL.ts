export const localeInURL = (locale: string) => {
    if (locale === "ua") {
        return "";
    }
    return `${locale}/`;
};
