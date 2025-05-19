import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const Title = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <TitleWrapper className="flex flex-col tab:flex-row pc:justify-start">
            <SmallPageTitle>{getTranslation("pageTitle")}</SmallPageTitle>
            <p className="font-caviar font-bold text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-6xl desk:text-7xl">
                {getTranslation.rich("pageBigTitle", {
                    purple: chunk => (
                        <span className="text-purple-100">{chunk}</span>
                    ),
                })}
            </p>
        </TitleWrapper>
    );
};
