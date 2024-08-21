import { IconProps } from "../../../../types/iconProps.interface";

export const IconGoBack = ({ className }: IconProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="icon copy"
        >
            <path
                d="M16.8091 22.5L18.5 20.7868L9.82727 12L18.5 3.21316L16.8091 1.5L6.5 12L16.8091 22.5Z"
                fill="currentColor"
            />
        </svg>
    );
};
