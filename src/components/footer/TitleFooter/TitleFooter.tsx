import { TitleWrapper } from "../../shared/TitleWrapper";
import { DesktopTitleFooter } from "./DesktopTitleFooter";
import { MobileTitleFooter } from "./MobileTitleFooter";
import { TabletTitleFooter } from "./TabletTitleFooter";

export const TitleFooter = () => {
    return (
        <TitleWrapper className="flex flex-col pb-0 mb-[16px] mt-[20px] py-[6px]  pc:flex-row flex-start tab:pb-0 tab:mb-[98px] pc:mb-[115px] tab:mt-[40px]">
            <MobileTitleFooter />
            <TabletTitleFooter />
            <DesktopTitleFooter />
        </TitleWrapper>
    );
};
