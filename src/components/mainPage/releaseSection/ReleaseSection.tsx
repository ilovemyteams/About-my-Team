import { useTranslations } from "next-intl";

import { DEMO_VIDEOS } from "@/src/constants/renderOnMain";

import { Section } from "../../shared/Section";
import { ReleaseSlider } from "./ReleaseSlider";

export const ReleaseSection = () => {
    const getTranslation = useTranslations("Release");

    return (
        <Section className="pc:pb-[100px] desk:pb-[120px]">
            <div className="flex items-center justify-between gap-6">
                <h2 className="font-caviar font-bold text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-5xl desk:text-7xl tab:mr-[140px] text-pretty">
                    {getTranslation.rich("title", {
                        purple: chunk => (
                            <span className="text-purple-100">{chunk}</span>
                        ),
                    })}
                </h2>
            </div>
            <ReleaseSlider videos={DEMO_VIDEOS} />
        </Section>
    );
};
