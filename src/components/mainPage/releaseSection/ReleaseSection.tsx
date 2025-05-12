import { useTranslations } from "next-intl";

import { Section } from "../../shared/Section";
import { ReleaseSlider } from "./ReleaseSlider";

export const ReleaseSection = () => {
    const getTranslation = useTranslations("Release");
    const videos = [
        "253ZzoPX1Wc",
        "cfc30V33h6g",
        "0g8QIs963dw",
        "k-c_mDTxpr4",
        "cBBFrzD8Vsc",
        "fAZKP3pSNZY",
        "YpF1TCXBkLs",
        "gFo6T9kWuZw",
        "QPyFqwmRjHc",
        "OWK_mCxyWBI",
        "3UyOImmhkFE",
        "7qN4dAMtK7s",
        "Sfo4XqYN0VA",
        "1oDKpKw8dPo",
        "e2Ax8mLlad0",
        "yuOVqmU9Wsk",
        "K2B_Gmz73do",
        "NPVb4npdj-k",
        "gq2RxByn1Y4",
        "IJXL7u_p42Y",
        "KoKDAKDjG8E",
        "TNa3zk3WMb4",
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
