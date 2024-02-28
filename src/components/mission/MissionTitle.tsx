import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const MissionTitle = () => {
    const getTranslation = useTranslations("Mission");

    return (
        <div>
            <TitleWrapper className="flex items-start">
                <SmallPageTitle className="ml-1 mr-3 flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <div>
                    <p>
                        {getTranslation("titleFirstWord")}
                        <span className="text-purple-100">
                            {getTranslation("titleSecondWord")}
                        </span>
                    </p>
                    <p>
                        {getTranslation("titleThirdWord")}
                        <span className="text-purple-100">
                            {getTranslation("titleFourthWord")}
                        </span>
                    </p>
                    <p className="ml-[167px]">
                        <span className="text-purple-100">
                            {getTranslation("titleFifthWord")}
                        </span>
                        {getTranslation("titleOtherWords")}
                    </p>
                </div>
            </TitleWrapper>
        </div>
    );
};
