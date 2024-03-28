import { TitleWrapper } from "../../shared/TitleWrapper";
import { DesktopTitleFooter } from "./DesktopTitleFooter";
import { MobileTitleFooter } from "./MobileTitleFooter";

export const TitleFooter = () => {
    return (
        <TitleWrapper className="flex flex-col pc:flex-row flex-start pc:mb-[115px] pc:mt-[40px]">
            <DesktopTitleFooter />
            <MobileTitleFooter />
        </TitleWrapper>
    );
};
