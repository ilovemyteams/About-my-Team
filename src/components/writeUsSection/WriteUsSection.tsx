import { useTranslations } from "next-intl";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { SectionCTA } from "../shared/SectionCTA";
import { WriteUsModal } from "../shared/WriteUsModal";

export const WriteUsSection = () => {
    const getTranslation = useTranslations("WriteUs");
    return (
        <SectionCTA className="flex flex-col gap-y-[40px] tab:gap-0 tab:flex-row items-center justify-between">
            <TitleCTAWrapper className="tab:w-[50%] pc:w-[70%]">
                {getTranslation("title")}
            </TitleCTAWrapper>
            <WriteUsModal />
        </SectionCTA>
    );
};
