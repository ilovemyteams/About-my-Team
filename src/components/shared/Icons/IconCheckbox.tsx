import { IconProps } from "@/types/iconProps.interface";

export const IconCheckbox = ({ className = "" }: IconProps) => {
    return (
        <svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M10.5 3.49992L4.5 9.49992L1.75 6.74992L2.455 6.04492L4.5 8.08492L9.795 2.79492L10.5 3.49992Z"
                fill="currentColor"
            />
        </svg>
    );
};
