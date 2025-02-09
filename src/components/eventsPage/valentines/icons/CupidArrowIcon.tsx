import { IconProps } from "@/types/iconProps.interface";

export const CupidArrowIcon = ({ className }: IconProps) => {
    return (
        <svg
            width="60"
            height="54"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className={className}
            aria-label="arrow icon"
            viewBox="0 0 60 54"
        >
            <path
                transform="rotate(5.60086 35.9633 20.723)"
                stroke="#FF8E9F"
                d="m14.30012,43.44842l43.32678,-45.45083"
                fill="none"
            />
            <path
                transform="rotate(45 8.24712 45.1304)"
                stroke="#FF8E9F"
                d="m8.24712,40.31825c4.54122,-10.95698 22.33385,0 0,14.08754c-22.33385,-14.08754 -4.54122,-25.04452 0,-14.08754z"
                fill="#FF8E9F"
            />
        </svg>
    );
};
