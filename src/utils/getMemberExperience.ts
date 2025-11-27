interface MemberExperienceProps {
    date: string;
}

export const getMemberExperience = ({ date }: MemberExperienceProps) => {
    const startDate = date.split("-");
    const startYear = startDate[0]
        ? Number(startDate[0])
        : new Date().getFullYear();
    const startMonth = startDate[1]
        ? Number(startDate[1])
        : new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const diffMonth =
        ((currentYear - startYear) * 12 + (currentMonth - startMonth)) / 12;

    const experience =
        diffMonth > 2
            ? Math.round(diffMonth)
            : diffMonth > 1.5
              ? 1.5
              : diffMonth < 1
                ? 0.5
                : 1;

    return experience;
};
