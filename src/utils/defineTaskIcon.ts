import { IconGear } from "../components/shared/Icons/IconGear";
import { IconHeart } from "../components/shared/Icons/IconHeart";
import { IconLight } from "../components/shared/Icons/IconLight";
import { IconPeople } from "../components/shared/Icons/IconPeople";

export const defineTaskIcon = (name: string | undefined) => {
    switch (name) {
        case "light":
            return IconLight;
        case "people":
            return IconPeople;
        case "settings":
            return IconGear;
        default:
            return IconHeart;
    }
};
