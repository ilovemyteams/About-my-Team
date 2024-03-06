import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { SectionCTA } from "../shared/SectionCTA";

export const WriteUsSection = () => {
    const getTranslation = useTranslations();
    return (
        <SectionCTA className="flex flex-col gap-y-[40px] pc:gap-0 pc:flex-row items-center justify-between">
            <TitleCTAWrapper className="pc:w-[70%]">
                {getTranslation("WriteUs.title")}
            </TitleCTAWrapper>
            <Button>{getTranslation("Buttons.order")}</Button>
        </SectionCTA>
    );
};
