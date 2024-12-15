import { BgImagesDesktop } from "@/src/components/shared/Modals/modalBgImages/notificationModals/BgImagesDesktop";
import { BgImagesMobile } from "@/src/components/shared/Modals/modalBgImages/notificationModals/BgImagesMobile";
import { BgImagesTablet } from "@/src/components/shared/Modals/modalBgImages/notificationModals/BgImagesTablet";

export const Background = () => {
    return (
        <>
            <BgImagesDesktop />
            <BgImagesMobile />
            <BgImagesTablet />
        </>
    );
};
