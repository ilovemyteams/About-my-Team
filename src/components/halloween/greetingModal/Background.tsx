import { BgImagesDesktop } from "../../shared/ModalsWithForm/modalBgImages/formModalBgImages/BgImagesDesktop";
import { BgImagesMobile } from "../../shared/ModalsWithForm/modalBgImages/formModalBgImages/BgImagesMobile";
import { BgImagesTablet } from "../../shared/ModalsWithForm/modalBgImages/formModalBgImages/BgImagesTablet";
export const Background = () => {
    return (
        <>
            <BgImagesDesktop />
            <BgImagesMobile />
            <BgImagesTablet />
        </>
    );
};
