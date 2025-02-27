import { useLocale } from "next-intl";

import { ProjectDataItemType } from "@/src/mockedData/allProjectsData";
import { LocaleType } from "@/types/LocaleType";

import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { ProjectHeader } from "./ProjectHeader";

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
