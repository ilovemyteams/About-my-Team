import { IconProps } from "../../../../types/iconProps.interface";

export const IconLanding = ({ className }: IconProps) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="landing page icon"
        >
            <path
                d="M4.46094 13.6103V33.9883H35.546V13.6103M4.46094 13.6103V6.01172H35.546V13.6103M4.46094 13.6103H35.546M8.60561 18.4457H19.4854M8.60561 24.1447H19.4854M8.60561 29.6709H19.4854M28.1201 17.4096V29.6709"
                stroke="currentColor"
            />
        </svg>
    );
};
