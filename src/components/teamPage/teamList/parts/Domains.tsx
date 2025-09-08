import React from "react";

import { DomainType } from "@/src/constants/domainList";

interface DomainsProps {
    domains: Set<DomainType>;
}

export const Domains = ({ domains }: DomainsProps) => {
    let domainList = "";
    domains.forEach(item => {
        domainList += "#" + item.toLocaleLowerCase().split(" ").join("_") + " ";
    });
    return (
        <div className="w-full overflow-hidden max-h-[15px] tab:max-h-[20px]">
            <p className="text-xs tab:text-sm  text-transparent text-center first-line:text-purple-130  dark:first-line:text-purple-50 [word-spacing:8px]">
                {domainList}
            </p>
        </div>
    );
};
