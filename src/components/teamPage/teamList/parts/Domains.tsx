import React from "react";

import { getMemberDomainList } from "@/src/utils/getMemberDomainList";
import { Project } from "@/types/Projects";

interface DomainsProps {
    projects: Project[];
}

export const Domains = ({ projects }: DomainsProps) => {
    const domainList = getMemberDomainList({ projects });

    return (
        <div className="w-full overflow-hidden max-h-[15px] tab:max-h-[20px]">
            <p className="text-xs tab:text-sm  text-transparent text-center first-line:text-purple-130  dark:first-line:text-purple-50 [word-spacing:8px]">
                {domainList}
            </p>
        </div>
    );
};
