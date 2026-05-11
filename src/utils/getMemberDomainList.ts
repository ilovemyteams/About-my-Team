import { portfolioData } from "@/src/mockedData/portfolioData";
import { Project } from "@/types/Projects";

interface getMemberDomainListProps {
    projects: Project[];
}

export const getMemberDomainList = ({ projects }: getMemberDomainListProps) => {
    const memberDomainList = new Set(
        portfolioData
            .filter(project => projects.some(p => p.id === project.data.slug))
            .flatMap(project => project.data.domains)
    );

    let domainList = "";
    memberDomainList.forEach(item => {
        domainList += "#" + item.toLocaleLowerCase().split(" ").join("_") + " ";
    });

    return domainList;
};
