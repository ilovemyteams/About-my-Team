import { useLocale } from "next-intl";

import { PortfolioDataItemType } from "@/src/mockedData/portfolioData";
import { LocaleType } from "@/types/LocaleType";

import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { ProjectHeader } from "./ProjectHeader";

export const SomeProjectPage = ({
    currentProject,
}: {
    currentProject: PortfolioDataItemType;
}) => {
    const locale = useLocale();
    const { name } = currentProject[locale as LocaleType];

    return (
        <>
            <ProjectHeader title={name} />
            <UnderConstruction />
        </>
    );
};
