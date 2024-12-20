import { BgImagesDesktop } from "../../shared/Modals/modalBgImages/notificationModals/BgImagesDesktop";
import { BgImagesMobile } from "../../shared/Modals/modalBgImages/notificationModals/BgImagesMobile";
import { BgImagesTablet } from "../../shared/Modals/modalBgImages/notificationModals/BgImagesTablet";

export const Background = () => {
    return (
        <>
            <div
                className="absolute top-0 bottom-0 left-0 right-0 border-[17px] [border-image-slice:1] 
                [border-image-source:linear-gradient(90deg,#D3B0FF_0%,#F2EBFF_100%)] dark:[border-image-source:linear-gradient(90deg,#6607B1_0%,#3C0566_51%,#1E003D_100%)]"
            ></div>
            <BgImagesMobile />
            <BgImagesTablet />
            <BgImagesDesktop />
        </>
    );
};
