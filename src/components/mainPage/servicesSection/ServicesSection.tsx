import { useTranslations } from "next-intl";

import { Section } from "../../shared/Section";
import { ServiceDecoration } from "./ServiceDecoration";
import { ServiceList } from "./ServiceList";
import { Title } from "./Title";

export const ServicesSection = () => {
    const t = useTranslations("Services");
    const text = t("subtitleText");
    return (
        <Section id="services" className="relative">
            <Title />
            <p className="text-purple-130 dark:text-purple-50 text-sm uppercase  whitespace-pre-wrap mb-6">
                {text}
            </p>
            <div>
                <ServiceDecoration />
                <ServiceList />
            </div>
        </Section>
    );
};
