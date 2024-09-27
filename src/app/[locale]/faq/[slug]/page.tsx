import React from "react";

import { UnderConstruction } from "@/src/components/underConstruction/UnderConstruction";

interface CurrentFaqPageProps {
    params: {
        id: string;
    };
}

const CurrentFaqPage: React.FC<CurrentFaqPageProps> = () => {
    return <UnderConstruction />;
};

export default CurrentFaqPage;
