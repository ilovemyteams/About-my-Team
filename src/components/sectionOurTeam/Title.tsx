import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const Title = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <h2 className="font-caviar text-5xl flex flex-col mb-16">
            <div className="flex">
                <SmallPageTitle className="min-w-[75px] ml-1 mr-3 h-[21px] flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <span>{getTranslation("pageBigTitle")}</span>
            </div>
        </h2>
    );
};
