import { IconProps } from "../../../../types/iconProps.interface";

export const IconCheck = ({ className }: IconProps) => {
    return (
        <svg
            width="0"
            height="0"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="check icon"
        >
            <path
                d="M2 9L9.5 18.5L21.5 1"
                stroke="currentColor"
                strokeWidth="3"
            />
        </svg>
    );
};
