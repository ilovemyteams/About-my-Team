interface IconProfileProps {
    className?: string;
}

export const IconProfile = ({ className }: IconProfileProps) => {
    return (
        <svg
            width="122"
            height="129"
            viewBox="0 0 122 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="profile icon"
        >
            <path
                d="M122 129C122 120.989 120.422 113.057 117.357 105.656C114.291 98.2554 109.798 91.5309 104.134 85.8665C98.4691 80.2021 91.7446 75.7089 84.3437 72.6433C76.9428 69.5778 69.0106 68 61 68C52.9894 68 45.0572 69.5778 37.6563 72.6433C30.2554 75.7089 23.5309 80.2021 17.8665 85.8665C12.2021 91.5309 7.70888 98.2555 4.64335 105.656C1.57781 113.057 -7.00312e-07 120.989 0 129L122 129Z"
                fill="currentColor"
            />
            <circle cx="61.3529" cy="30.3529" r="30.3529" fill="currentColor" />
        </svg>
    );
};
