import { IconProps } from "@/types/iconProps.interface";

export const IconEggRope = ({ className }: IconProps) => {
    return (
        <svg
            width="55"
            height="96"
            viewBox="0 0 55 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="A decor egg icon"
        >
            <path d="M27 93V1" stroke="currentColor" strokeLinecap="round" />
            <path
                d="M8.82248 82C15.7295 82 27 93.4614 27 93.4614C27 93.4614 5.22772 97.6711 1.91502 92.1639C-0.509705 88.1328 1.91546 82 8.82248 82Z"
                stroke="currentColor"
                strokeWidth="0.5"
            />
            <path
                d="M45.8767 81C38.704 81 27 93.343 27 93.343C27 93.343 49.6097 97.8766 53.0498 91.9457C55.5678 87.6046 53.0493 81 45.8767 81Z"
                stroke="currentColor"
                strokeWidth="0.5"
            />
        </svg>
    );
};
