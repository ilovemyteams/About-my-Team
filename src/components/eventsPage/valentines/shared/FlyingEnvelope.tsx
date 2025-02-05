import { ElementType } from "react";

import { IconProps } from "@/types/iconProps.interface";

import { LeftWingIcon } from "../icons/LeftWingIcon";
import { RightWingIcon } from "../icons/RightWingIcon";

interface FlyingEnvelopeProps {
    className?: string;
    icon: ElementType<IconProps>;
}

export const FlyingEnvelope = ({
    className = "",
    icon: Icon,
}: FlyingEnvelopeProps) => {
    return (
        <div
            className={`grid grid-cols-3 max-h-[150px] aspect-[3] ${className}`}
        >
            <LeftWingIcon className="w-auto h-full" />
            <Icon className="relative z-10 w-auto h-full" />
            <RightWingIcon className="w-auto h-full" />
        </div>
    );
};
