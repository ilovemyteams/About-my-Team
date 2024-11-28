import { IconProps } from "../../../../types/iconProps.interface";

export const IconTesting1 = ({ className }: IconProps) => {
    return (
        <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="testing1 service icon"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.27344 8H52.7326V53H7.27344V8ZM8.1918 8.91837V52.0816H22.3117V8.91837H8.1918ZM23.2301 8.91837V52.0816H51.8143V8.91837H23.2301ZM11.2913 12.2474H17.9495V18.9056H11.2913V12.2474ZM12.2097 13.1658V17.9872H17.0311V13.1658H12.2097ZM11.2913 22.5791H17.9495V28.8929H11.2913V22.5791ZM12.2097 23.4974V27.9745H17.0311V23.4974H12.2097Z"
                fill="currentColor"
            />
        </svg>
    );
};
