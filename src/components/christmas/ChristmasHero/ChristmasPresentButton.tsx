"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { ComponentType } from "react";

import { IconProps } from "@/types/iconProps.interface";

interface ChristmasPresentButtonProps {
    id: string;
    className: string;
    icon: ComponentType<IconProps>;
    iconStyle?: string;
    onClick: () => void;
}

export const ChristmasPresentButton = ({
    className,
    icon: Icon,
    id,
    iconStyle,
    onClick,
}: ChristmasPresentButtonProps) => {
    const onClickBtn = () => {
        onClick();
        sendGTMEvent({
            event: "christmas_gifts_click",
        });
    };

    return (
        <button
            onClick={onClickBtn}
            id={id}
            aria-label={id}
            className={`absolute cursor-pointer active:scale-[110%] tab:hover:scale-[130%] ${className} transition ease-out duration-300`}
        >
            <Icon className={`w-full h-auto ${iconStyle || ""}`} />
        </button>
    );
};
