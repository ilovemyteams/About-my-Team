import { TitleWrapper } from "../../shared/TitleWrapper";
import { DesktopTitleFooter } from "./DesktopTitleFooter";
import { MobileTitleFooter } from "./MobileTitleFooter";
import { TabletTitleFooter } from "./TabletTitleFooter";

export const TitleFooter = () => {
    return (
        <TitleWrapper className="flex flex-col pb-0 mb-6 mt-5  pc:flex-row flex-start tab:pb-0 tab:mb-[98px] pc:mb-[121px] pc:mt-[46px] tab:mt-[40px] deskxl:mb-[156px]">
            <MobileTitleFooter />
            <TabletTitleFooter />
            <DesktopTitleFooter />
        </TitleWrapper>
    );
};
