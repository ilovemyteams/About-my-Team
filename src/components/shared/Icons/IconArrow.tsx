import { IconProps } from "../../../../types/iconProps.interface";

export const IconArrow = ({ className }: IconProps) => {
    return (
        <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="icon arrow"
        >
            <path
                d="M14.364 6.36396L10.1213 2.12132M14.364 6.36396L1.63604 6.36396M14.364 6.36396L10.1213 10.6066"
                stroke="currentColor"
                stroke-width="1.87083"
                stroke-linecap="square"
                stroke-linejoin="round"
            />
        </svg>
    );
};
