import { TitleWrapper } from "../../shared/TitleWrapper";
import { DesktopTitleFooter } from "./DesktopTitleFooter";
import { MobileTitleFooter } from "./MobileTitleFooter";

export const TitleFooter = () => {
    return (
        <TitleWrapper className="flex flex-col pc:flex-row flex-start pc:mb-[139px] pc:mt-[46.5px]">
            <DesktopTitleFooter />
            <MobileTitleFooter />
        </TitleWrapper>
    );
};
