import React from "react";

import { ChristmasConditions } from "./ChristmasConditions/ChristmasConditions";
import { ChristmasCta } from "./ChristmasCta/ChristmasCta";
import { ChristmasText } from "./ChristmasText";

export const ChristmasPage = () => {
    return (
        <>
            <ChristmasText />
            <ChristmasConditions />
            <ChristmasCta />
        </>
    );
};
