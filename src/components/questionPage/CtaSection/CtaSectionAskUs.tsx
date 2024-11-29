import { useTranslations } from "next-intl";

import { CtaAskUs } from "../../shared/ctaAskUs/CtaAskUs";

export const CtaSectionAskUs = () => {
    const getTranslation = useTranslations("FaqPage");

    return <CtaAskUs text={getTranslation("ctaText")} />;
};
