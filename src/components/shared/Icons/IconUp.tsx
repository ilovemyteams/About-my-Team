interface iconUpProps {
    className?: string;
}

export const IconUp = ({ className }: iconUpProps) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M4.99854 25.714L7.41197 28.1274L19.7906 15.7489L32.1691 28.1274L34.5826 25.714L19.7906 10.9998L4.99854 25.714Z"
                fill="currentColor"
            />
        </svg>
    );
};
