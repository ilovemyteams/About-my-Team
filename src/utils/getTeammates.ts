import { MemberDataItemType } from "@/src/mockedData/membersData";
import { Project } from "@/types/Projects";

const parseDate = (date: string) => {
    const [year, month] = date.split("-").map(Number);
    return new Date(year, month - 1);
};

const getEndDate = (endDate?: string) =>
    endDate ? parseDate(endDate) : new Date();

const periodsOverlap = (startA: Date, endA: Date, startB: Date, endB: Date) =>
    startA <= endB && startB <= endA;

const hasOverlappingProject = (projectA: Project, projectB: Project) => {
    const startA = parseDate(projectA.startDate);
    const endA = getEndDate(projectA.endDate);

    const startB = parseDate(projectB.startDate);
    const endB = getEndDate(projectB.endDate);

    return periodsOverlap(startA, endA, startB, endB);
};

export const getTeammates = (
    members: MemberDataItemType[],
    baseMember: Project[],
    baseMemberId: string
) => {
    return members.filter(
        member =>
            member.data.id !== baseMemberId &&
            member.data.projects.some(memberProject =>
                baseMember.some(
                    baseMemberProject =>
                        memberProject.id === baseMemberProject.id &&
                        hasOverlappingProject(memberProject, baseMemberProject)
                )
            )
    );
};
