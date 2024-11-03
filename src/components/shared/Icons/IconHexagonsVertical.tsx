import { IconProps } from "../../../../types/iconProps.interface";

export const IconHexagonsVertical = ({ className }: IconProps) => {
    return (
        <svg
            // width="162"
            // height="425"
            viewBox="0 0 162 425"
            fill="none"
            className={className}
            aria-label="hexagonal shapes"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M160.411 139.592V47.2647L80.655 1L1 47.2647V139.592L80.655 185.857L160.411 139.592Z"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <path
                d="M160.614 377.592V285.265L80.8581 239L1.20312 285.265V377.592L80.8581 423.857L160.614 377.592Z"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <path
                d="M160.614 263.592V171.265L80.8581 125L1.20312 171.265V263.592L80.8581 309.857L160.614 263.592Z"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
        </svg>
    );
};
