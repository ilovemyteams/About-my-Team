import React from "react";

interface BenefitsItemProps {
    children: string;
}

export const BenefitsItem = ({ children }: BenefitsItemProps) => {
    return (
        <li className="flex gap-3">
            <div className="min-w-4 h-4 pc:min-w-6 pc:h-6 bg-purple-100"></div>
            <p className="text-base pc:text-xl">{children}</p>
        </li>
    );
};
