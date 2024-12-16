import React from "react";

import { ChristmasHero } from "./ChristmasHero/ChristmasHero";
import { ChristmasQuestionnaire } from "./ChristmasQuestionnaire";
import { ChristmasText } from "./ChristmasText";

export const ChristmasPage = () => {
    return (
        <>
            <ChristmasHero />
            <ChristmasText />
            <ChristmasQuestionnaire />
        </>
    );
};
