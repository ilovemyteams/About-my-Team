import { useLocale } from "next-intl";

import { ServiceType } from "@/src/mockedData/servicesData";
import { LocaleType } from "@/types/LocaleType";

import { UnderConstruction } from "../underConstruction/UnderConstruction";
import { ServiceCtaSection } from "./ServiceCtaSection";
import { ServiceHeader } from "./ServiceHeader";
import { ServiceHero } from "./ServiceHero";
import { ServiceMainContent } from "./ServiceMainContent";

interface ServiceProps {
    service: ServiceType;
}

export const Service = ({ service }: ServiceProps) => {
    const locale = useLocale();
    const { image } = service;

    const { fullDescription, name } = service[locale as LocaleType];
    return (
        <>
            <ServiceHeader name={name} />
            {fullDescription ? (
                <>
                    <ServiceHero
                        title={fullDescription.title}
                        text={fullDescription.introduction}
                        image={image}
                        topText={fullDescription.topText}
                    />
                    <ServiceMainContent content={fullDescription.content} />
                    <ServiceCtaSection text={fullDescription.ctaText} />
                </>
            ) : (
                <UnderConstruction />
            )}
        </>
    );
};
