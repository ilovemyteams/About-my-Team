import React from "react";
import Image from "next/image";

interface BenefitsItemProps {
    children: string;
}

export const BenefitsItem = ({ children }: BenefitsItemProps) => {
    return (
        <li className="flex gap-3 items-start">
            <Image
                src="/images/check.svg"
                width="0"
                height="0"
                alt="Check icon"
                className="w-6 h-auto"
            />
            <p className="text-base pc:text-xl">{children}</p>
        </li>
    );
};
