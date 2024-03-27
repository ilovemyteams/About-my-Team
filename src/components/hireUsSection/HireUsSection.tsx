import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";
import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";

export const HireUsSection = () => {
    const getTranslation = useTranslations();
    return (
        <SectionCTA>
            <TitleCTAWrapper className="pc:w-[70%]">
                {getTranslation("HireUs.title")}
            </TitleCTAWrapper>
            <div className="flex flex-col gap-y-8 tab:flex-row pc:gap-0 justify-between items-center mt-6 pc:mt-[100px]">
                <div className="text-base deskxl:text-2xl">
                    <p className="mb-4">
                        {getTranslation("HireUs.workingHours")}
                    </p>
                    <a
                        href={`mailto:${getTranslation("HireUs.email")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {getTranslation("HireUs.email")}
                    </a>
                </div>
                <Button>{getTranslation("Buttons.order")}</Button>
            </div>
        </SectionCTA>
    );
};
