import { portfolioData } from "@/src/mockedData/portfolioData";
import { Project } from "@/types/Projects";

type PortfolioItem = (typeof portfolioData)[number];

const portfolioDataMap: Record<string, PortfolioItem> = Object.fromEntries(
    portfolioData.map(item => [item.data.slug, item])
);

export interface MemberProject {
    portfolioData: PortfolioItem;
    memberData: Project;
}

export const buildMemberProjects = (projects: Project[]): MemberProject[] => {
    return projects.reduce<MemberProject[]>((acc, memberData) => {
        const portfolioItem = portfolioDataMap[memberData.id];

        if (!portfolioItem) return acc;

        acc.push({
            portfolioData: portfolioItem,
            memberData,
        });

        return acc;
    }, []);
};
