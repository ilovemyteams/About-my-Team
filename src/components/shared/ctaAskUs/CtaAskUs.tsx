import { SectionCTA } from "../SectionCTA";
import { TitleCTAWrapper } from "../TitleCTAWrapper";
import { CtaAskUsModal } from "./CtaAskUsModal";

interface CtaAskUsProps {
    text: string;
    className?: string;
}

export const CtaAskUs = ({ text, className }: CtaAskUsProps) => {
    return (
        <SectionCTA
            className={`flex flex-col tab:flex-row gap-[32px] tab:gap-[90px] items-center tab:justify-between tab:mb-[100px] ${className}`}
        >
            <TitleCTAWrapper className="tab:flex-1">{text}</TitleCTAWrapper>
            <CtaAskUsModal />
        </SectionCTA>
    );
};
