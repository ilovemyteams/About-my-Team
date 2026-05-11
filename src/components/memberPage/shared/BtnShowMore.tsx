import { twMerge } from "tailwind-merge";

import { IconUpVector } from "@/src/components/shared/Icons/IconUpVector";

interface ButtonProps {
    children: string;
    className?: string;
    onClick?: () => void;
    isOpen: boolean;
}

export const BtnShowMore = ({
    children,
    isOpen,
    onClick,
    className,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={twMerge(
                "flex items-center align-baseline h-min text-xs tab:text-sm text-redLight dark:text-red",
                className
            )}
        >
            {children}
            <IconUpVector
                className={`w-[10px] tab:w-[12px] h-[auto] ml-1 ${isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-700`}
            />
        </button>
    );
};
