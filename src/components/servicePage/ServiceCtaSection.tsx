import { SectionCTA } from "../shared/SectionCTA";
import { TitleCTAWrapper } from "../shared/TitleCTAWrapper";
import { WriteUs } from "../shared/WriteUs/WriteUs";

interface ServiceCtaSectionProps {
    text: string;
}

export const ServiceCtaSection = ({ text }: ServiceCtaSectionProps) => {
    return (
        <SectionCTA
            className={`flex flex-col tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px] desk:mb-[120px]`}
        >
            <TitleCTAWrapper className="tab:flex-1">{text}</TitleCTAWrapper>
            <WriteUs />
        </SectionCTA>
    );
};
