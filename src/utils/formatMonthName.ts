export const formatMonthName = (date: string, locale: string): string => {
    const [year, month] = date.split("-").map(Number);

    const monthName = new Date(year, month - 1).toLocaleString(locale, {
        month: "long",
    });

    return `${monthName} ${year}`;
};
