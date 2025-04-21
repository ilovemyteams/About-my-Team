import { IconProps } from "../../../../types/iconProps.interface";

export const IconLaunch = ({ className }: IconProps) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="launch icon"
        >
            <path
                d="M16 20.8003V32.0016M10.8895 20.8003V28.4159M28 20.8003L16 1.60156L4 20.8003M21.1105 20.8003V28.4159"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
