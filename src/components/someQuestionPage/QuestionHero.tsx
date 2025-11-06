import { useTranslations } from "next-intl";
import React from "react";

import { CurrentFaqQueryResult } from "@/src/sanity/types";

import { PageSection } from "../shared/PageSection";
import { PageTopSection } from "../shared/PageTopSection";
import { SanityImage } from "../shared/SanityImage";
import { PageTitle } from "./PageTitle";

interface QuestionHeroProps {
    pageTitle: string | null;
    pageImage: NonNullable<CurrentFaqQueryResult>["heroImage"];
    estimateTime: number | null;
    searchTerm: string;
}

export const QuestionHero = ({
    pageTitle,
    pageImage,
    estimateTime,
    searchTerm,
}: QuestionHeroProps) => {
    const getTranslation = useTranslations("Breadcrumbs");
    const breadcrumbs = [
        { title: getTranslation("breadcrumbItemFaq"), url: "faq" },
        { title: pageTitle || "", url: "" },
    ];

    return (
        <PageSection className="pt-4 tab:pt-[44px] pc:pt-8 pb-6 tab:pb-[16px] pc:pb-[34px]">
            <PageTopSection
                breadcrumbsList={breadcrumbs}
                searchTerm={searchTerm}
            />
            <div className="flex flex-col tab:flex-row gap-6 tab:gap-[80px] pc:gap-[150px] justify-between">
                <PageTitle
                    title={pageTitle}
                    estimateTime={estimateTime}
                    searchTerm={searchTerm}
                />
                <div className="w-full tab:w-3/12 pc:w-[16.9%] pc:min-w-[225px] desk:min-w-[312px]  shrink-0">
                    <SanityImage
                        src={pageImage.url}
                        alt={pageImage.caption}
                        blurUrl={pageImage.lqip}
                        width={508}
                        height={340}
                        className="object-cover w-full aspect-[1.5]"
                    />
                </div>
            </div>
        </PageSection>
    );
};
