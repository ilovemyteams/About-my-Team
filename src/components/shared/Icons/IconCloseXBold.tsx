import { IconProps } from "@/types/iconProps.interface";

export const IconCloseXBold = ({ className }: IconProps) => {
    return (
        <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="cancel icon"
        >
            <path d="M15 15L29 29" stroke="#D4D4D4" strokeWidth="1.5" />
            <path d="M15 29L29 15" stroke="#D4D4D4" strokeWidth="1.5" />
            <path d="M21 22L23 22" stroke="#D4D4D4" strokeWidth="2.5" />
        </svg>
    );
};
