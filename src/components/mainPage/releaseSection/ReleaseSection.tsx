import { useTranslations } from "next-intl";

import { Section } from "../../shared/Section";
import { SharePopover } from "../../shared/SharePopover";
import { ReleaseSlider } from "./ReleaseSlider";

export const ReleaseSection = () => {
    const getTranslation = useTranslations("Release");
    const videos = [
        "dQw4w9WgXcQ",
        "3JZ_D3ELwOQ",
        "9bZkp7q19f0",
        "hY7m5jjJ9mI",
        "kffacxfA7G4",
    ];

    return (
        <Section className="pc:pb-[100px] desk:pb-[120px]">
            <div className="flex items-center justify-between gap-6">
                <h2 className="font-caviar font-bold text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-5xl desk:text-6xl">
                    {getTranslation.rich("title", {
                        purple: chunk => (
                            <span className="text-purple-100">{chunk}</span>
                        ),
                    })}
                </h2>
                <SharePopover
                    trigerShowShareText={true}
                    className="relative "
                />
            </div>
            <ReleaseSlider videos={videos} />
        </Section>
    );
};
