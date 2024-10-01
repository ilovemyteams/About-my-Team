import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import { Section } from "../shared/Section";
import { PageTitle } from "./PageTitle";
import { PageTopSection } from "./PageTopSection";

interface QuestionHeroProps {
    pageTitle: string;
    pageImageUrl: string;
}

export const QuestionHero = ({
    pageTitle,
    pageImageUrl,
}: QuestionHeroProps) => {
    const getTranslation = useTranslations("Breadcrumbs");
    const breadcrumbs = [
        { title: getTranslation("breadcrumbItemFaq"), url: "faq" },
        { title: pageTitle, url: "" },
    ];
    return (
        <Section className="pt-4 tab:pt-[44px] pc:pt-8 pb-[0px] tab:pb-[0px] pc:pb-[0px] mb-6 tab:mb-4 pc:mb-[34px]">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <div className="flex flex-col tab:flex-row gap-6 tab:gap-[80px] pc:gap-[150px] justify-between">
                <PageTitle
                    title={pageTitle}
                    subtext={getTranslation("breadcrumbItemFaq")}
                />

                <Image
                    alt={pageTitle}
                    src={pageImageUrl}
                    width={508}
                    height={340}
                    className="object-cover w-full tab:w-3/12 pc:w-[16.9%]"
                />
            </div>
        </Section>
    );
};
