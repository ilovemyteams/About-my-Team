import { useTranslations } from "next-intl";
import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { WriteUsModal } from "../shared/WriteUs/WriteUsModal";

export const HireUsSection = () => {
    const getTranslation = useTranslations("HireUs");
    return (
        <SectionCTA>
            <TitleCTAWrapper className="pc:w-[70%]">
                {getTranslation("title")}
            </TitleCTAWrapper>
            <div className="flex flex-col gap-y-8 tab:flex-row pc:gap-0 justify-between items-center mt-6 pc:mt-[100px]">
                <div className="text-base deskxl:text-2xl">
                    <p className="mb-4">{getTranslation("workingHours")}</p>
                    <a
                        href={`mailto:${getTranslation("email")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {getTranslation("email")}
                    </a>
                </div>
                <WriteUsModal />
            </div>
        </SectionCTA>
    );
};
