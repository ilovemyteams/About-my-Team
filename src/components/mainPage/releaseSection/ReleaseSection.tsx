import { useTranslations } from "next-intl";

import { Section } from "../../shared/Section";
import { SharePopover } from "../../shared/SharePopover";
import { ReleaseSlider } from "./ReleaseSlider";

export const ReleaseSection = () => {
    const getTranslation = useTranslations("Release");
    const videos = [
        "cfc30V33h6g",
        "0g8QIs963dw",
        "k-c_mDTxpr4",
        "cBBFrzD8Vsc",
        "fAZKP3pSNZY",
        "YpF1TCXBkLs",
        "gFo6T9kWuZw",
        "QPyFqwmRjHc",
    ];

    return (
        <Section className="pc:pb-[100px] desk:pb-[120px]">
            <div className="flex items-center justify-between gap-6">
                <h2 className="font-caviar font-bold text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-5xl desk:text-7xl">
                    {getTranslation.rich("title", {
                        purple: chunk => (
                            <span className="text-purple-100">{chunk}</span>
                        ),
                    })}
                </h2>
            </div>
            <ReleaseSlider videos={videos} />
        </Section>
    );
};
