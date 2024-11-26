import { useTranslations } from "next-intl";

import { CtaAskUs } from "../shared/ctaAskUs/CtaAskUs";

export const CtaServicesSection = () => {
    const getTranslation = useTranslations("ServicesPage");
    return (
        <CtaAskUs
            text={getTranslation("ctaText")}
            className="desk:mb-[120px]"
        />
    );
};
