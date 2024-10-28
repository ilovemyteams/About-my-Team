import { IconProps } from "../../../../types/iconProps.interface";

export const IconCloseX = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="close icon"
        >
            <path d="M1 0.999756L25 24.9998" stroke="currentColor" />
            <path d="M1 24.9998L25 0.999754" stroke="currentColor" />
            <path d="M11.2852 12.9998L14.7137 12.9998" stroke="currentColor" />
        </svg>
    );
};
