import React from "react";

import { ChristmasConditions } from "./ChristmasConditions/ChristmasConditions";
import { ChristmasQuestionnaire } from "./ChristmasForm/ChristmasQuestionnaire";
import { ChristmasHero } from "./ChristmasHero/ChristmasHero";
import { ChristmasText } from "./ChristmasText";

export const ChristmasPage = () => {
    return (
        <>
            <ChristmasHero />
            <ChristmasText />
            <ChristmasQuestionnaire />
            <ChristmasConditions />
        </>
    );
};
