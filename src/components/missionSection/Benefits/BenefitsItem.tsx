import React from "react";
import { IconCheck } from "../../shared/Icons/IconCheck";

interface BenefitsItemProps {
    children: string;
}

export const BenefitsItem = ({ children }: BenefitsItemProps) => {
    return (
        <li className="flex gap-3 items-start">
            <div>
                <IconCheck className="w-6 h-auto dark:text-red text-redLight" />
            </div>
            <p className="max-w-full text-base pc:text-xl deskxl:text-2xl">
                {children}
            </p>
        </li>
    );
};
