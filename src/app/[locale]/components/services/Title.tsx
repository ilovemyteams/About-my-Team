import { useTranslations } from "next-intl";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const Title = () => {
    const t = useTranslations("Services");

    return (
        <div>
            <h2 className="font-caviar text-5xl flex flex-col">
                <div className="flex">
                    <SmallPageTitle className="min-w-[75px] ml-[0.25rem] mr-[0.75rem] h-[21px] flex items-center">
                        {t("pageTitle")}
                    </SmallPageTitle>
                    <span className="">{t("titleFirstRow")}</span>
                </div>
                <span>{t("titleSecondRow")}</span>
            </h2>
        </div>
    );
};
