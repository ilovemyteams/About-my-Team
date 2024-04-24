interface ArrowIconProps {
    className?: string;
}

export const ArrowIcon = ({ className }: ArrowIconProps) => {
    return (
        <svg
            width="29"
            height="32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-red mx-auto ${className}`}
        >
            <path
                d="m21.154 1.37 2.414 2.413-12.379 12.379 12.379 12.379-2.414 2.413L6.44 16.162 21.154 1.37Z"
                fill="currentColor"
            />
        </svg>
    );
};
