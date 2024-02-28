import React from "react";

interface BenefitsItemProps {
    children: string;
}

export const BenefitsItem = ({ children }: BenefitsItemProps) => {
    return (
        <li className="flex gap-3">
            <div className="min-w-6 h-6 bg-purple-100"></div>
            <p className="text-xl">{children}</p>
        </li>
    );
};
