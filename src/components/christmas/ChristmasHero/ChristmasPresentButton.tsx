"use client";

import { ComponentType } from "react";

import { IconProps } from "@/types/iconProps.interface";

interface ChristmasPresentButtonProps {
    id: string;
    className: string;
    icon: ComponentType<IconProps>;
    iconStyle?: string;
}

export const ChristmasPresentButton = ({
    className,
    icon: Icon,
    id,
    iconStyle,
}: ChristmasPresentButtonProps) => {
    const onClickBtn = () => {
        //Logic for clock on tree toys
    };

    return (
        <button
            onClick={onClickBtn}
            id={id}
            aria-label={id}
            className={`absolute cursor-pointer active:scale-[110%] tab:hover:scale-[130%] ${className}`}
        >
            <Icon className={`w-full h-auto ${iconStyle || ""}`} />
        </button>
    );
};
