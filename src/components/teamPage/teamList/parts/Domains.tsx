import React from "react";

import { getMemberDomainList } from "@/src/utils/getMemberDomainList";

interface DomainsProps {
    projectId: string[];
}

export const Domains = ({ projectId }: DomainsProps) => {
    const domainList = getMemberDomainList({ projectId });

    return (
        <div className="w-full overflow-hidden max-h-[15px] tab:max-h-[20px]">
            <p className="text-xs tab:text-sm  text-transparent text-center first-line:text-purple-130  dark:first-line:text-purple-50 [word-spacing:8px]">
                {domainList}
            </p>
        </div>
    );
};
