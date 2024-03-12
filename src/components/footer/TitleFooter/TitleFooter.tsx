import { TitleWrapper } from "../../shared/TitleWrapper";
import { DesktopTitleFooter } from "./DesktopTitleFooter";

export const TitleFooter = () => {
    return (
        <TitleWrapper className="flex flex-col pc:flex-row flex-start pc:mb-0 pc:mt-[46.5px]">
            <DesktopTitleFooter />
        </TitleWrapper>
    );
};
