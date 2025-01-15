import { useTranslations } from "next-intl";

import { SectionCTA } from "../../shared/SectionCTA";
import { TitleCTAWrapper } from "../../shared/TitleCTAWrapper";
import { ServiceCtaButton } from "./ServiceCtaButton";

interface ServiceCtaSectionProps {
    text: string;
    button?: "order" | "write";
}

export const ServiceCtaSection = ({ button, text }: ServiceCtaSectionProps) => {
    const getTranslation = useTranslations("Buttons");

    const title =
        button === "order"
            ? getTranslation("order")
            : getTranslation("writeUs");

    return (
        <SectionCTA
            className={`flex flex-col tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px] desk:mb-[120px]`}
        >
            <TitleCTAWrapper className="tab:flex-1">{text}</TitleCTAWrapper>
            <ServiceCtaButton title={title} />
        </SectionCTA>
    );
};
