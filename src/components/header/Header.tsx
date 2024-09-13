import { Settings } from "@/sanity.types";
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileTabletHeader } from "./MobileTabletHeader/MobileTabletHeader";

export interface HeaderProps {
    data?: Settings | null;
}

export const Header = ({ data }: HeaderProps) => {
    console.log("Header:", data?._id);
    return (
        <header className="fixed top-0 left-0 z-20">
            <DesktopHeader />
            <MobileTabletHeader />
        </header>
    );
};
