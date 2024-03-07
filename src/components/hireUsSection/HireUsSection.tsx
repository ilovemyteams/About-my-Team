import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";
import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";

export const HireUsSection = () => {
    const getTranslation = useTranslations();
    return (
        <SectionCTA className="">
            <TitleCTAWrapper className="pc:w-[70%]">
                {getTranslation("HireUs.title")}
            </TitleCTAWrapper>
            <div className="flex justify-between items-center mt-[100px]">
                <div className="text-base">
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
