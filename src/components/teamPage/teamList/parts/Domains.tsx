import React from "react";

interface DomainsProps {
    domains: string[];
}

export const Domains = ({ domains }: DomainsProps) => {
    const domainsList = domains.map(item => "#" + item).join("  ");
    return (
        <div className="w-full overflow-hidden max-h-[15px]">
            <p className="text-xs text-transparent text-start tab:text-center first-line:text-purple-130  dark:first-line:text-purple-50 [word-spacing:8px]">
                {domainsList}
            </p>
        </div>
    );
};
