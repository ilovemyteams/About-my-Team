import { IconProps } from "../../../../types/iconProps.interface";

export const IconHexagonsCircle = ({ className }: IconProps) => {
    return (
        <svg
            viewBox="0 0 337 343"
            fill="none"
            className={className}
            aria-label="hexagonal shapes"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M247.208 139.592V47.2647L167.452 1L87.7969 47.2647V139.592L167.452 185.857L247.208 139.592Z"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <path
                d="M336.411 295.592V203.265L256.655 157L177 203.265V295.592L256.655 341.857L336.411 295.592Z"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
            <path
                d="M160.411 295.592V203.265L80.655 157L1 203.265V295.592L80.655 341.857L160.411 295.592Z"
                stroke="currentColor"
                strokeMiterlimit="10"
            />
        </svg>
    );
};
