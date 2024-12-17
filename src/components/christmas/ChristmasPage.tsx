import React from "react";

import { ChristmasConditions } from "./ChristmasConditions/ChristmasConditions";
import { ChristmasCta } from "./ChristmasCta/ChristmasCta";
import { ChristmasQuestionnaire } from "./ChristmasForm/ChristmasQuestionnaire";
import { ChristmasText } from "./ChristmasText";

export const ChristmasPage = () => {
    return (
        <>
            <ChristmasText />
            <ChristmasQuestionnaire />
            <ChristmasConditions />
            <ChristmasCta />
        </>
    );
};
