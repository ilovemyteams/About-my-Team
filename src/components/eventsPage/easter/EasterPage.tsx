import { ConditionSection } from "./conditionsSection/ConditionSection";
import { CtaSection } from "./ctaSection/CtaSection";
import { EasterHeroSection } from "./hero/EasterHeroSection";

export const EasterPage = () => {
    return (
        <>
            <EasterHeroSection />
            <CtaSection />
            <ConditionSection />
        </>
    );
};
