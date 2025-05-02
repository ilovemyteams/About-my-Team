import { HighlightTitleFromMessages } from "@/src/components/shared/HighlightTitleFromMessages";
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
            <HighlightTitleFromMessages
                title="SomeProjectPage"
                text="taskTitle"
                className="mb-6 tab:mb-10 pc:mb-[64px] hidden tab:block"
            />
            <TasksSectionMobile data={content} />
            <TasksSectionNotMobile data={content} />
        </PageSection>
    );
};
