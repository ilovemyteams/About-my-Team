import { IconProps } from "@/types/iconProps.interface";

export const SmallHeart = ({ className }: IconProps) => {
    return (
        <svg
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="heart icon"
        >
            <path
                d="M11.7983 18.1215C11.7983 18.1215 17.1583 4.96089 12.0883 1.12282C7.00834 -2.72594 8.08834 4.55464 8.08834 4.55464C8.08834 4.55464 3.19834 -2.26622 0.478336 1.71083C-2.24166 5.68788 7.32834 14.3583 11.8083 18.1322L11.7983 18.1215Z"
                fill="currentColor"
            />
        </svg>
    );
};
