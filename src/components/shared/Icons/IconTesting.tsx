import { IconProps } from "../../../../types/iconProps.interface";

export const IconTesting = ({ className }: IconProps) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="testing service icon"
        >
            <path
                d="M31.4149 29.3352L36.0901 34.0104M22.4541 24.1146L25.2592 26.4522L30.0123 22.0107M24.1683 34.0104H5V4.32291H29.7785V15.3096M10.1427 11.1019H13.5712M16.2984 11.1019H24.7137M10.1427 17.3355H13.5712M10.1427 23.5691H13.5712M33.8304 24.1535C33.8304 28.5215 30.2895 32.0624 25.9215 32.0624C21.5536 32.0624 18.0126 28.5215 18.0126 24.1535C18.0126 19.7856 21.5536 16.2447 25.9215 16.2447C30.2895 16.2447 33.8304 19.7856 33.8304 24.1535Z"
                stroke="currentColor"
            />
        </svg>
    );
};
