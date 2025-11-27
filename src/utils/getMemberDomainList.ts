import { portfolioData } from "@/src/mockedData/portfolioData";

interface getMemberDomainListProps {
    projectId: string[];
}

export const getMemberDomainList = ({
    projectId,
}: getMemberDomainListProps) => {
    const memberDomainList = new Set(
        portfolioData
            .filter(project => {
                return projectId.includes(project.data.slug);
            })
            .map(project => project.data.domains)
            .flat()
    );

    let domainList = "";
    memberDomainList.forEach(item => {
        domainList += "#" + item.toLocaleLowerCase().split(" ").join("_") + " ";
    });

    return domainList;
};
