import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = () => {
    return (
        <header>
            <DesktopHeader />
            <MobileHeader />
        </header>
    );
};
