import { PropsWithChildren } from "react";
interface IconButtonProps {
    label: string;
}

export const IconButton = ({
    children,
    label,
}: PropsWithChildren<IconButtonProps>) => {
    return (
        <button
            className="p-[10px] cursor-pointer hover:text-purple-100 active:text-purple-100 focus:text-purple-100 transition-colors "
            aria-label={label}
        >
            {children}
        </button>
    );
};
