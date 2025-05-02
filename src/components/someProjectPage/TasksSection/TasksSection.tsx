import { TasksSectionDataType } from "@/src/mockedData/portfolioData";

import { PageSection } from "../../shared/PageSection";
import { TasksSectionMobile } from "./TasksSectionMobile";
import { TasksSectionNotMobile } from "./TasksSectionNotMobile";

export const TasksSection = ({
    content,
}: {
    content: TasksSectionDataType[];
}) => {
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <TasksSectionMobile data={content} />
            <TasksSectionNotMobile data={content} />
        </PageSection>
    );
};
