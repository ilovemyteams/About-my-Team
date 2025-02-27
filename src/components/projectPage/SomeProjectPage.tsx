import { ProjectDataItemType } from "@/src/mockedData/allProjectsData";
import { LocaleType } from "@/types/LocaleType";
import { useLocale } from "next-intl";
import { ProjectHeader } from "./ProjectHeader";
import { UnderConstruction } from "../underConstruction/UnderConstruction";

export const SomeProjectPage = ({
    currentProject,
}: {
    currentProject: ProjectDataItemType;
}) => {
    const locale = useLocale();
    const { title } = currentProject[locale as LocaleType];

    return (
        <>
            <ProjectHeader title={title} />
            <UnderConstruction />
        </>
    );
};
