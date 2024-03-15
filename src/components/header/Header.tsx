import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileHeader } from "./MobileHeader/MobileHeader";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-20">
            <DesktopHeader />
            <MobileHeader />
        </header>
    );
};
