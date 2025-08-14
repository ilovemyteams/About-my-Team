import React from "react";

import { TeamHeader } from "./header/TeamHeader";
import { TeamList } from "./teamList/TeamList";

export const TeamPage = () => {
    return (
        <div>
            <TeamHeader />
            <TeamList />
        </div>
    );
};
