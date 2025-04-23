import { useTranslations } from "next-intl";

import { AdaptiveSectionType } from "@/src/mockedData/portfolioData";

import { PageSection } from "../../shared/PageSection";
import { MobileView } from "./MobileView";
import { StaticView } from "./StaticView";
import { TabletView } from "./TabletView";

interface AdaptiveSectionProps {
    screens: AdaptiveSectionType;
}

export const AdaptiveSection = ({ screens }: AdaptiveSectionProps) => {
    const { imageDesktop, imageMobile, imageMobileStatic } = screens;
    const getTranslation = useTranslations("SomeProjectPage");

    const title = getTranslation.rich("adaptiveDesign", {
        purple: chunk => <span className="text-purple-100">{chunk}</span>,
    });

    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <h2 className="font-caviar font-bold text-purple-200 dark:text-grey text-2xl24 tab:text-4xl pc:text-5xl desk:text-6xl mb-6 tab:mb-10 pc:mb-[64px]">
                {title}
            </h2>
            <div className="pc:pb-[60px]">
                <div className="text-center tab:relative tab:grid tab:grid-cols-[84%_16%] ">
                    <TabletView screen={imageDesktop} />
                    <div className="flex gap-4 justify-center tab:ml-[-10%] tab:block">
                        <MobileView screen={imageMobile} />
                        <StaticView screen={imageMobileStatic} />
                    </div>
                </div>
            </div>
        </PageSection>
    );
};
