import React from "react";

import { ChristmasConditions } from "./ChristmasConditions/ChristmasConditions";
import { ChristmasCta } from "./ChristmasCta/ChristmasCta";
import { ChristmasHero } from "./ChristmasHero/ChristmasHero";
import { ChristmasText } from "./ChristmasText";

export const ChristmasPage = () => {
    return (
        <>
            <ChristmasHero />
            <ChristmasText />
            <ChristmasConditions />
            <ChristmasCta />
        </>
    );
};
