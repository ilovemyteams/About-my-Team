import { AdaptiveSectionType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMessages } from "../../shared/HighlightTitleFromMessages";
import { PageSection } from "../../shared/PageSection";
import { MobileView } from "./MobileView";
import { StaticView } from "./StaticView";
import { TabletView } from "./TabletView";
interface AdaptiveSectionProps {
    screens: AdaptiveSectionType;
}

export const AdaptiveSection = ({ screens }: AdaptiveSectionProps) => {
    const { imageDesktop, imageMobile, imageMobileStatic } = screens;

    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <HighlightTitleFromMessages
                title="SomeProjectPage"
                text="adaptiveDesign"
                className="mb-6 tab:mb-10 pc:mb-[64px]"
            />

            <div className="pc:pb-[60px]">
                <div className="text-center tab:relative tab:grid tab:grid-cols-[84%_16%] ">
                    <TabletView imageData={imageDesktop} />
                    <div className="flex gap-4 justify-center tab:ml-[-10%] tab:block">
                        <MobileView imageData={imageMobile} />
                        <StaticView screen={imageMobileStatic} />
                    </div>
                </div>
            </div>
        </PageSection>
    );
};
