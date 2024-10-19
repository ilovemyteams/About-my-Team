import Image from "next/image";
import React from "react";

interface BenefitsItemProps {
    children: string;
}

export const BenefitsItem = ({ children }: BenefitsItemProps) => {
    return (
        <li className="flex gap-3">
            <div className="w-8 h-8 flex-shrink-0">
                <Image
                    src="/images/pumkin.png"
                    alt="Pumkin"
                    width={30}
                    height={30}
                />
            </div>
            <p className="max-w-full text-base pc:text-xl deskxl:text-2xl">
                {children}
            </p>
        </li>
    );
};
