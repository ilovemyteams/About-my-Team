import { BgDesktop } from "./BgDesktop";
import { BgMobile } from "./BgMobile";
import { BgPc } from "./BgPc";
import { BgTablet } from "./BgTablet";

export const Background = () => {
    return (
        <>
            <BgMobile />
            <BgTablet />
            <BgPc />
            <BgDesktop />
        </>
    );
};
