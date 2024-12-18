"use client";

import { ComponentType } from "react";

import { IconProps } from "@/types/iconProps.interface";

interface ChristmasToyButtonProps {
    id: string;
    className: string;
    icon: ComponentType<IconProps>;
}

export const ChristmasToyButton = ({
    className,
    id,
    icon: Icon,
}: ChristmasToyButtonProps) => {
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
            <Icon className="w-full h-auto" />
        </button>
    );
};
