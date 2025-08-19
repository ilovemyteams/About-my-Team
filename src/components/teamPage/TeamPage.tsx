import React from "react";

import { TeamHeader } from "./header/TeamHeader";
import { TeamList } from "./teamList/TeamList";

export const TeamPage = ({
    searchParams,
}: {
    searchParams: { page?: string; categoryName?: string };
}) => {
    return (
        <div>
            <TeamHeader />
            <TeamList searchParams={searchParams} />
        </div>
    );
};
