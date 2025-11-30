export const getMemberExperience = (
    startDate: string,
    endDate?: string
): number => {
    const [startYear, startMonth] = startDate.split("-").map(Number);

    let endY: number;
    let endM: number;

    if (endDate) {
        [endY, endM] = endDate.split("-").map(Number);
    } else {
        const now = new Date();
        endY = now.getFullYear();
        endM = now.getMonth() + 1;
    }

    const totalMonths = (endY - startYear) * 12 + (endM - startMonth);

    const diffYears = totalMonths / 12;

    if (diffYears > 2) {
        return Math.round(diffYears);
    } else if (diffYears > 1.5) {
        return 1.5;
    } else if (diffYears < 1) {
        return 0.5;
    } else {
        return 1;
    }
};
