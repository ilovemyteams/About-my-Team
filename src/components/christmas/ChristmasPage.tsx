import React from "react";

import { ChristmasHero } from "./ChristmasHero/ChristmasHero";
import { ChristmasText } from "./ChristmasText";
import { ChristmasQuestionnaire } from "./ChristmasQuestionnaire";

export const ChristmasPage = () => {
    return (
        <>
            <ChristmasHero />
            <ChristmasText />
            <ChristmasQuestionnaire />
        </>
    );
};
