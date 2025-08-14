import { IconProps } from "@/types/iconProps.interface";

export const IconWallet = ({ className }: IconProps) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 23 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="wallet icon"
            className={className}
        >
            <path
                stroke="currentColor"
                d="m0,4.4272l0,14.5728l22.1359,0l0,-14.5728l-22.1359,0zm0,0l0,-4.4272l22.5,0"
            />
            <circle fill="currentColor" r="1" cy="11.793" cx="18.9766" />
        </svg>
    );
};
