import { IconProps } from "@/types/iconProps.interface";

export const StarIcon = ({ className }: IconProps) => {
    return (
        <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="star"
            className={className}
        >
            <path
                d="M5.72425 0.503906L7.70584 4.72904L11.3342 7.03866L7.70584 9.35618L5.72425 13.5813L3.74264 9.35618L0.121094 7.03866L3.74264 4.72904L5.72425 0.503906Z"
                fill="currentColor"
            />
        </svg>
    );
};
