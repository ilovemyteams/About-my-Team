import { IconAboutProduct } from "../components/shared/Icons/IconAboutProduct";
import { IconFunctionality } from "../components/shared/Icons/IconFunctionality";
import { IconGear } from "../components/shared/Icons/IconGear";
import { IconHeart } from "../components/shared/Icons/IconHeart";
import { IconLight } from "../components/shared/Icons/IconLight";
import { IconPeople } from "../components/shared/Icons/IconPeople";
import { IconPersonalBrand } from "../components/shared/Icons/IconPersonalBrand";

export const defineTaskIcon = (name: string | undefined) => {
    switch (name) {
        case "light":
            return IconLight;
        case "people":
            return IconPeople;
        case "settings":
            return IconGear;
        case "brand":
            return IconPersonalBrand;
        case "functionality":
            return IconFunctionality;
        case "product":
            return IconAboutProduct;
        default:
            return IconHeart;
    }
};
