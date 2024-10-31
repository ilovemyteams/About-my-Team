import Image from "next/image";

import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { MobileTabletHeader } from "./MobileTabletHeader/MobileTabletHeader";

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-20">
            <DesktopHeader />
            <MobileTabletHeader />
            <Image
                src="/images/pumpkin.png"
                alt="pumpkin"
                width={60}
                height={60}
                className="hidden"
            />
        </header>
    );
};
