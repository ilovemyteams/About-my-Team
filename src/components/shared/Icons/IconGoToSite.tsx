import { IconProps } from "../../../../types/iconProps.interface";

export const IconGoToSite = ({ className }: IconProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="go to the site icon"
        >
            <path
                d="M21 3H15M21 3L12 12M21 3V9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="square"
                stroke-linejoin="round"
            />
            <path
                d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="square"
            />
        </svg>
    );
};
