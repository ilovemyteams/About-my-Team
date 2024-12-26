import { IconProps } from "@/types/iconProps.interface";

export const IconWallet = ({ className }: IconProps) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="wallet icon"
            className={className}
        >
            <path
                d="M5 11.4272V26H27.1359V11.4272H5ZM5 11.4272V7H27.5"
                stroke="currentColor"
            />
            <circle cx="23.9766" cy="18.793" r="1" fill="currentColor" />
        </svg>
    );
};
