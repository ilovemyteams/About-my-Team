import { IconProps } from "@/types/iconProps.interface";
export const CornerIcon = ({ className }: IconProps) => {
    return (
        <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="corner decoration"
        >
            <path
                d="M1.11328 0.895304L1.11328 62L62.218 62"
                stroke="#5F3F87"
                strokeWidth="0.67148"
            />
        </svg>
    );
};
