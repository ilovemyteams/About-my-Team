interface IconLikeProps {
    isActive: boolean;
    className?: string;
}

export const IconLike = ({ isActive, className }: IconLikeProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Heart-shaped icon"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2857 12.645C19.9927 11.9268 20.3855 10.9571 20.3777 9.9493C20.3698 8.94148 19.9619 7.97807 19.2437 7.271C18.888 6.9209 18.467 6.64426 18.0044 6.4569C17.5419 6.26954 17.047 6.17511 16.548 6.17901C15.5401 6.18688 14.5767 6.59479 13.8697 7.313C13.6777 7.505 13.4337 7.74067 13.1377 8.02L12.3147 8.795L11.4917 8.02C11.195 7.74 10.9507 7.50433 10.7587 7.313C10.046 6.60037 9.07949 6.20001 8.07167 6.20001C7.06385 6.20001 6.0973 6.60037 5.38467 7.313C3.91667 8.782 3.89967 11.157 5.33067 12.633L12.3147 19.617L19.2857 12.645Z"
                fill={isActive ? "currentColor" : "none"}
                stroke="currentColor"
            />
        </svg>
    );
};
