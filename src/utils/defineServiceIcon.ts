import { IconBA } from "../components/shared/Icons/IconBA";
import { IconComplex } from "../components/shared/Icons/IconComplex";
import { IconDesign } from "../components/shared/Icons/IconDesign";
import { IconDev } from "../components/shared/Icons/IconDev";
import { IconHeartWeb } from "../components/shared/Icons/IconHeartWeb";
import { IconInternetStore } from "../components/shared/Icons/IconInternetStore";
import { IconLanding } from "../components/shared/Icons/IconLanding";
import { IconSupport } from "../components/shared/Icons/IconSupport";
import { IconTesting } from "../components/shared/Icons/IconTesting";
import { IconWebsite } from "../components/shared/Icons/IconWebsite";

export const defineServiceIcon = (name: string) => {
    switch (name) {
        case "ba":
            return IconBA;
        case "design":
            return IconDesign;
        case "dev":
            return IconDev;
        case "test":
            return IconTesting;
        case "support":
            return IconSupport;
        case "complex":
            return IconComplex;
        case "landing":
            return IconLanding;
        case "website":
            return IconWebsite;
        case "store":
            return IconInternetStore;
        default:
            return IconHeartWeb;
    }
};
