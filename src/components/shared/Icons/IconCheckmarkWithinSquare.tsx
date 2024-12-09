export const IconCheckmarkWithinSquare = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Checkmark icon"
        >
            <g clipPath="url(#clip0_13303_47065)">
                <path
                    d="M0 0V18H18V6.36434L15.0469 9.31746V15.0469H2.95312V2.95312H8.68254L11.6357 0H0ZM15.4501 0.227415L8.93742 6.74117L6.6105 4.41424L4.22427 6.80157L8.93731 11.5135L11.3235 9.12732L17.8362 2.61357L15.45 0.227355L15.4501 0.227415Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_13303_47065">
                    <rect width="18" height="18" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>
    );
};
