import { IconProps } from "@/types/iconProps.interface";

export const HeartDecor = ({ className }: IconProps) => {
    return (
        <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="heart icon"
        >
            <path
                d="M13.2503 17.2025C13.2503 17.2025 -1.19972 11.1513 0.0802803 5.58132C1.36028 0.0113117 9.18026 8.7138 9.18026 8.7138C9.18026 8.7138 9.82026 -0.0849085 13.8103 0.000619517C17.8003 0.0861475 13.7003 13.7065 13.2503 17.2025Z"
                fill="currentColor"
            />
        </svg>
    );
};
