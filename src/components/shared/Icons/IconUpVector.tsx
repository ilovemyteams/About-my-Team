import { IconProps } from "@/types/iconProps.interface";

export const IconUpVector = ({ className }: IconProps) => {
    return (
        <svg
            width="21"
            height="12"
            viewBox="0 0 21 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="up icon"
        >
            <path
                d="M0 1.69091L1.71316 0L10.5 8.67273L19.2868 0L21 1.69091L10.5 12L0 1.69091Z"
                fill="currentColor"
            />
        </svg>
    );
};
