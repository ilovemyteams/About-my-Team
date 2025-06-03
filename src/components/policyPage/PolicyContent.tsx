// import { useLocale } from "next-intl";

import { policyData } from "@/src/mockedData/privacyPolicy";

import { PageSection } from "../shared/PageSection";
import { HighlightedText } from "./HighlightedText";
import { PolicyItem } from "./PolicyItem";

export const PolicyContent = () => {
    // const locale = useLocale();
    const { title, data } = policyData["ua"];

    return (
        <PageSection className="pb-[32px] tab:pb-[40px] pc:pb-[100px] desk:pb-[120px]">
            <h1 className="font-caviar font-bold text-3xl mb-9 tab:text-4xl tab:mb-[60px] pc:text-6xlt pc:mb-[72px] desk:text-7xl desk:mb-[80px]">
                <HighlightedText text={title} />
            </h1>
            <ul className="flex flex-col gap-8 tab:gap-10 pc:gap-[100px] desk:gap-[120px]">
                {data.map((item, index) => (
                    <PolicyItem key={index} index={index} {...item} />
                ))}
            </ul>
        </PageSection>
    );
};
