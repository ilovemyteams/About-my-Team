import { IconAvailability } from "../components/shared/Icons/IconAvailability";
import { IconBA } from "../components/shared/Icons/IconBA";
import { IconClock } from "../components/shared/Icons/IconClock";
import { IconComplex } from "../components/shared/Icons/IconComplex";
import { IconCustomerSupport } from "../components/shared/Icons/IconCustomerSupport";
import { IconDesign } from "../components/shared/Icons/IconDesign";
import { IconDev } from "../components/shared/Icons/IconDev";
import { IconHeartWeb } from "../components/shared/Icons/IconHeartWeb";
import { IconIntegration } from "../components/shared/Icons/IconIntegration";
import { IconInternetStore } from "../components/shared/Icons/IconInternetStore";
import { IconLanding } from "../components/shared/Icons/IconLanding";
import { IconLaunch } from "../components/shared/Icons/IconLaunch";
import { IconPlannedSupport } from "../components/shared/Icons/IconPlannedSupport";
import { IconStart } from "../components/shared/Icons/IconStart";
import { IconSupport } from "../components/shared/Icons/IconSupport";
import { IconTechSupport } from "../components/shared/Icons/IconTechSupport";
import { IconTesting } from "../components/shared/Icons/IconTesting";
import { IconTesting1 } from "../components/shared/Icons/IconTesting1";
import { IconTesting2 } from "../components/shared/Icons/IconTesting2";
import { IconTesting3 } from "../components/shared/Icons/IconTesting3";
import { IconTesting4 } from "../components/shared/Icons/IconTesting4";
import { IconWallet } from "../components/shared/Icons/IconWallet";
import { IconWebsite } from "../components/shared/Icons/IconWebsite";

export const defineServiceIcon = (name: string | undefined) => {
    switch (name) {
        case "analysis":
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
        case "test1":
            return IconTesting1;
        case "test2":
            return IconTesting2;
        case "test3":
            return IconTesting3;
        case "test4":
            return IconTesting4;
        case "support1":
            return IconTechSupport;
        case "support2":
            return IconCustomerSupport;
        case "support3":
            return IconPlannedSupport;
        case "support4":
            return IconAvailability;
        case "clock":
            return IconClock;
        case "currency":
            return IconWallet;
        case "start":
            return IconStart;
        case "integration":
            return IconIntegration;
        case "launch":
            return IconLaunch;
        default:
            return IconHeartWeb;
    }
};
