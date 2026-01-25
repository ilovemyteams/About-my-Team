export const formatMonthName = (date: string, locale: string): string => {
    const [year, month] = date.split("-").map(Number);

    const adaptedLocale = locale === "ua" ? "uk-UA" : locale;

    const monthName = new Date(year, month - 1).toLocaleString(adaptedLocale, {
        month: "long",
    });

    return `${monthName} ${year}`;
};
