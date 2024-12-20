"use client";

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
    };

    return (
        <button
            onClick={onClickBtn}
            id={id}
            aria-label={id}
            className={`absolute cursor-pointer active:scale-[110%] tab:hover:scale-[130%] transition-transform  duration-250 ${className}`}
        >
            <Icon className={`w-full h-auto ${iconStyle || ""}`} />
        </button>
    );
};
