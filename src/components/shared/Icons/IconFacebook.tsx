interface iconFacebookProps {
    className?: string;
}

export const IconFacebook = ({ className }: iconFacebookProps) => {
    return (
        <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="icon facebook"
        >
            <path
                d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47062 7 3.5 9 3.5H10.5V0.1401C10.1743 0.09685 8.943 0 7.6429 0C4.9284 0 3 1.65686 3 4.69971V7.5H0V11.5H3V20H7V11.5Z"
                fill="currentColor"
            />
        </svg>
    );
};
