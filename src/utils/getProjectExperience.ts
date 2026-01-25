import { getTranslations } from "next-intl/server";

export const getProjectExperience = async (
    startDate: string,
    endDate?: string
): Promise<string> => {
    const t = await getTranslations("MemberPage");
    const [startYear, startMonth] = startDate.split("-").map(Number);

    let endYear: number;
    let endMonth: number;

    if (endDate) {
        [endYear, endMonth] = endDate.split("-").map(Number);
    } else {
        const now = new Date();
        endYear = now.getFullYear();
        endMonth = now.getMonth() + 1;
    }

    let totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

    if (totalMonths < 0) {
        totalMonths = 0;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts: string[] = [];

    if (years > 0) parts.push(`${t("year", { experience: years })}`);
    if (months > 0) parts.push(`${t("month", { experience: months })}`);

    return parts.join(" ");
};
