import { IconProps } from "../../../../types/iconProps.interface";

export const IconHexagon = ({ className }: IconProps) => {
    return (
        <svg
            width="100"
            height="88"
            viewBox="0 0 100 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="hexagon icon"
            className={className}
        >
            <path
                d="M74.7113 1.19482L99.4226 43.9961L74.7113 86.7974L25.2887 86.7974L0.577352 43.9961L25.2887 1.19482L74.7113 1.19482Z"
                stroke="currentColor"
            />
        </svg>
    );
};
