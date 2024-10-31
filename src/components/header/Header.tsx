import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileTabletHeader } from "./MobileTabletHeader/MobileTabletHeader";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-20">
            <DesktopHeader />
            <MobileTabletHeader />
        </header>
    );
};
