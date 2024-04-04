interface iconUpProps {
    className?: string;
}

export const IconCloseX = ({ className }: iconUpProps) => {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M1 0.999756L25 24.9998"
                stroke="currentColor"
                stroke-width="2"
            />
            <path
                d="M1 24.9998L25 0.999754"
                stroke="currentColor"
                stroke-width="2"
            />
            <path
                d="M11.2852 12.9998L14.7137 12.9998"
                stroke="currentColor"
                stroke-width="2"
            />
        </svg>
    );
};
